import { BigNumber } from "bignumber.js";

const TenBN = new BigNumber(10);
const EtherBN = (TenBN).pow(18);

export const ether = function(n) {
    let a = new BigNumber(n);
    return a.multipliedBy(EtherBN);
    // return BigNumber.from(web3.utils.toWei(n, 'ether'));
}

export const fromEther = function(n) {
    let a = new BigNumber(n);
    return a.div(EtherBN).toString();
}

export const calculatePercent = function(a, b) {
    let na = new BigNumber(a);
    let hundred = new BigNumber(100);
    let nb = new BigNumber(b);
    return na.multipliedBy(hundred).div(nb).toString();
}