'use strict';
const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

//private key
const myKey = ec.keyFromPrivate(
  '7c4c45907dec40c91bab3480c39032e90049f1a44f3e18c3e07c23e3273995cf'
);

const myWalletAddress = myKey.getPublic('hex');

const personalCoin = new Blockchain();

// mine first block
personalCoin.minePendingTransactions(myWalletAddress);

const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.sign(myKey);
personalCoin.addTransaction(tx1);

personalCoin.minePendingTransactions(myWalletAddress);

const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.sign(myKey);
personalCoin.addTransaction(tx2);

// Mine block
personalCoin.minePendingTransactions(myWalletAddress);

console.log();
console.log(
  `Balance of xavier is ${personalCoin.getBalanceOfAddress(myWalletAddress)}`
);


// Check if the chain is valid
console.log();
console.log('Blockchain valid?', savjeeCoin.isChainValid() ? 'Yes' : 'No');