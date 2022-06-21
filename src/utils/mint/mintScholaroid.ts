import {
  SystemProgram,
  PublicKey,
  Transaction,
  TransactionInstruction,
  Keypair,
} from "@solana/web3.js";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import web3 from './web3';
import BigNumber from "bignumber.js";

import store from "../../renderer/redux/stores/store";
import { setMintingState } from "../setMintState/setMintState";


declare var window: any;

const contractABI = require("./ScholaroidNFT.json");
const contractAddress = "0x8E07812d08000B48ef2a41b5A74196f8511f50b3";

export const scholaroidNFTContract = web3 != null ? new web3.eth.Contract(
  contractABI,
  contractAddress
) : null;

toast.configure()
export const notify = (typeNotification: string, content: string) => {
  const positionNotification_short = {position: toast.POSITION.TOP_RIGHT, autoClose: 2000}
  const positionNotification_long = {position: toast.POSITION.TOP_RIGHT, autoClose: 4000}
  if( typeNotification == 'success' ){
    toast.success(content, positionNotification_short)
  }
  else if( typeNotification == 'info' ) {
    toast.info(content, positionNotification_long)
  }
  else if( typeNotification == 'warning' ){
    toast.warning(content, positionNotification_long);
  }
  else if( typeNotification == 'success' ){
    toast.error(content, positionNotification_short);
  }
}


export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err: any) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: '<span><p>🦊<a target="_blank" href={`https://metamask.io/download.html`}>You must install Metamask, a virtual Ethereum wallet, in your browser.</a></p></span>',
    };
  }
};

export async function getPrice(){
  if( scholaroidNFTContract == null ) return "0.4";
  try {
    let price = await scholaroidNFTContract.methods.getPrice().call();
    return web3.utils.fromWei(price, 'ether');
  } catch (error: any) {
    // console.log("CGI error is ", error);
    return "0.4";
  }
}

export async function getRemainAmount(){
  if( scholaroidNFTContract == null ) return "0";
  try {
    let tokenCount = await scholaroidNFTContract.methods.getTokenSize().call();
    return tokenCount;
  } catch (error: any) {
    return "0";
  }
}

export async function mint(walletAddress: string, mintCount: number, unitPrice: number): Promise<any> {

  if( scholaroidNFTContract == null ) return {
    status: 'metamask install error'
  }
  const { globalData } = store.getState();

  // console.log("CGI globalData", globalData);
  // const { metaState } = await useMetamask();
  // console.log("CGI account in mintScholaroid", walletAddress);

  // TODO setMintingState
  // call setTokenBatchURI on smart contracts side.
  let price = await scholaroidNFTContract.methods.getPrice().call();
  let onePrice = new BigNumber(price);
  let x = onePrice.multipliedBy(mintCount);
  try {
    await scholaroidNFTContract.methods.mintBatch(
          mintCount
        ).send({
        from: walletAddress,
        value: x.toString()
        // value: web3.utils.toWei("0.01", 'ether')
    });

    return {
      status: '<span>✅<a target="_blank" href={`https://rinkeby.etherscan.io/tx/${txHash}`}>View the status of your transaction on Etherscan!</a><br/>ℹ️ Once the transaction is verified by the network, the name will be updated automatically.</span>',
    };
  } catch (error: any) {
      // console.log("CGI error is ", error);
    return {
      status: "😥 " + error.message,
    };
  }



  // if (globalData.wallet && globalData.wallet.publicKey) {
  //   try {
  //     const instructions: TransactionInstruction[] = [];
  //     const signers: Keypair[] = [];
  //     const PAYMENT_WALLET = new PublicKey("DC2mkgwhy56w3viNtHDjJQmc7SGu2QX785bS4aexojwX");
  //     const ID = guid.raw();

  //     setMintingState("MINTING_PROCESS");

  //     if (globalData.wallet.publicKey)
  //       instructions.push(
  //         SystemProgram.transfer({
  //           fromPubkey: globalData!.wallet!.publicKey,
  //           toPubkey: PAYMENT_WALLET,
  //           lamports: 6 * LAMPORTS_PER_SOL,
  //         }),
  //       );

  //       const hashSum = crypto.createHash('sha256');
  //       hashSum.update(ID);
  //       const hex = hashSum.digest('hex');

  //       instructions.push(
  //         new TransactionInstruction({
  //           keys: [],
  //           programId: new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),
  //           data: Buffer.from(hex),
  //         }),
  //       );

  //       const { txid } = await sendTransactionWithRetry(globalData.connection,globalData.wallet, instructions, signers, 'max')
  
  //       try {
  //         await globalData.connection.confirmTransaction(txid, 'max');
  //       } catch {
  //         // ignore
  //       }
      
  //       // Force wait for max confirmations
  //       // await connection.confirmTransaction(txid, 'max');
  //       await globalData.connection.getParsedConfirmedTransaction(txid, 'confirmed');

  //       const data = new FormData();
  //       data.append('transaction', txid);
  //       data.append('guid', ID);

  //       setMintingState("MINTING_APE");

  //       const result =  await (
  //         await fetch(
  //           'https://us-central1-principal-lane-200702.cloudfunctions.net/degenApesProd',
  //           {
  //             method: 'POST',
  //             body: data,
  //           },
  //         )
  //       ).json();

  //       console.log(result);

  //       setMintingState("COMPLETED");

  //   } catch (e) {
  //     setMintingState("FAILED")
  //     console.log(e);
  //     return { success: false };
  //   }
  // }
}

export const sendTransactionWithRetry = async (
  connection: any,
  wallet: any,
  instructions: TransactionInstruction[],
  signers: any[],
  commitment: string = 'singleGossip',
  beforeSend?: () => void,
) => {
  let transaction = new Transaction();
  instructions.forEach(instruction => transaction.add(instruction));
  transaction.recentBlockhash = ((await connection.getRecentBlockhash(commitment))).blockhash;

  transaction.setSigners(
    // fee payed by the wallet owner
    wallet.publicKey,
    ...signers.map(s => s.publicKey),
  );

  if (signers.length > 0) {
    transaction.partialSign(...signers);
  }
  transaction = await wallet.signTransaction(transaction);

  if (beforeSend) {
    beforeSend();
  }

  transaction.feePayer = wallet.publicKey;
  const { txid, slot } = await sendSignedTransaction({
    connection,
    signedTransaction: transaction,
  });

  return { txid, slot };
};


const getUnixTs = () => {
  return new Date().getTime() / 1000;
};

const DEFAULT_TIMEOUT = 15000;

async function sendSignedTransaction({ signedTransaction, connection, timeout = DEFAULT_TIMEOUT }: any) {
  const rawTransaction = signedTransaction.serialize();
  const startTime = getUnixTs();
  let slot = 0;
  const txid = await connection.sendRawTransaction(rawTransaction, {
    skipPreflight: false,
  });

  console.log('Started awaiting confirmation for', txid);

  let done = false;
  (async () => {
    while (!done && getUnixTs() - startTime < timeout) {
      connection.sendRawTransaction(rawTransaction, {
        skipPreflight: false,
      });
      await sleep(500);
    }
  })();
  try {
    const confirmation = await awaitTransactionSignatureConfirmation(txid, timeout, connection, 'recent', true);

    if (!confirmation) throw new Error('Timed out awaiting confirmation on transaction');

    if (confirmation.err) {
      console.error(confirmation.err);
      throw new Error('Transaction failed: Custom instruction error');
    }

    slot = confirmation.slot || 0;
  } catch (err: any) {
    console.error('Timeout Error caught', err);
    if (err.timeout) {
      throw new Error('Timed out awaiting confirmation on transaction');
    }
    let simulateResult = null;
    try {
      simulateResult = (await simulateTransaction(connection, signedTransaction, 'single')).value;
    } catch (e) {}
    if (simulateResult && simulateResult.err) {
      if (simulateResult.logs) {
        for (let i = simulateResult.logs.length - 1; i >= 0; --i) {
          const line = simulateResult.logs[i];
          if (line.startsWith('Program log: ')) {
            throw new Error('Transaction failed: ' + line.slice('Program log: '.length));
          }
        }
      }
      throw new Error(JSON.stringify(simulateResult.err));
    }
    // throw new Error('Transaction failed');
  } finally {
    done = true;
  }

  console.log('Latency', txid, getUnixTs() - startTime);
  return { txid, slot };
}

async function simulateTransaction(connection: any, transaction: any, commitment: any) {
  // @ts-ignore
  transaction.recentBlockhash = await connection._recentBlockhash(
    // @ts-ignore
    connection._disableBlockhashCaching
  );

  const signData = transaction.serializeMessage();
  // @ts-ignore
  const wireTransaction = transaction._serialize(signData);
  const encodedTransaction = wireTransaction.toString('base64');
  const config = { encoding: 'base64', commitment };
  const args = [encodedTransaction, config];

  // @ts-ignore
  const res = await connection._rpcRequest('simulateTransaction', args);
  if (res.error) {
    throw new Error('failed to simulate transaction: ' + res.error.message);
  }
  return res.result;
}

async function awaitTransactionSignatureConfirmation(txid: any, timeout: any, connection: any, commitment: any, queryStatus: any) {
  let done = false;
  let status = {
    slot: 0,
    confirmations: 0,
    err: null,
  };
  let subId = 0;
  status = await new Promise(async (resolve, reject) => {
    setTimeout(() => {
      if (done) {
        return;
      }
      done = true;
      console.log('Rejecting for timeout...');
      reject({ timeout: true });
    }, timeout);
    try {
      subId = connection.onSignature(
        txid,
        ((result: { err: any; }, context: { slot: any; }) => {
          done = true;
          status = {
            err: result.err,
            slot: context.slot,
            confirmations: 0,
          };
          if (result.err) {
            console.log('Rejected via websocket', result.err);
            reject(status);
          } else {
            console.log('Resolved via websocket', result);
            resolve(status);
          }
        }) as any,
        commitment
      );
    } catch (e) {
      done = true;
      console.error('WS error in setup', txid, e);
    }
    while (!done && queryStatus) {
      // eslint-disable-next-line no-loop-func
      (async () => {
        try {
          const signatureStatuses = await connection.getSignatureStatuses([txid]);
          status = signatureStatuses && signatureStatuses.value[0];
          if (!done) {
            if (!status) {
              console.log('REST null result for', txid, status);
            } else if (status.err) {
              console.log('REST error for', txid, status);
              done = true;
              reject(status.err);
            } else if (!status.confirmations) {
              console.log('REST no confirmations for', txid, status);
            } else {
              console.log('REST confirmation for', txid, status);
              done = true;
              resolve(status);
            }
          }
        } catch (e) {
          if (!done) {
            console.log('REST connection error: txid', txid, e);
          }
        }
      })();
      await sleep(2000);
    }
  });

  //@ts-ignore
  if (connection._signatureSubscriptions[subId]) connection.removeSignatureListener(subId);
  done = true;
  console.log('Returning status', status);
  return status;
}


function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
