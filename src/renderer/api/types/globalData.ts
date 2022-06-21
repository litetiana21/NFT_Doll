import { 
    PublicKey, 
    SystemProgram,
    Transaction,
    TransactionInstruction,
    Connection 
} from '@solana/web3.js';

import WalletConnectProvider from "@walletconnect/web3-provider";

import Wallet from "@project-serum/sol-wallet-adapter";

export interface TCryptoWallet{
    publicKey: PublicKey,
    on(event: string, callback: Object): void,
    connect(): void,
    disconnect(): void
}

export interface IGlobalData{
    connected: boolean,
    wallet: TCryptoWallet | WalletConnectProvider | null,
    // wallet: WalletConnectProvider | null,
    screenLoading: boolean,
    connection: Connection,
    apesRemaining: number
}

/**
 * Example
 */

// export interface IComment {
//     id: number;
//     createdAt: Date;
//     // author: IProfile;
//     tagList: string[];
//     updatedAt: Date;
// }


// export interface IErrors {
//     [key: string]: string[];
// }



