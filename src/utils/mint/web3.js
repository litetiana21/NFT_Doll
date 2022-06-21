import Web3 from 'web3';
if( window.ethereum ){
    window.ethereum.enable();
    // window.ethereum.disable();    
}
var web3: any;
if( window.web3 ){
    web3 = new Web3(window.web3.currentProvider);
}

export default web3;