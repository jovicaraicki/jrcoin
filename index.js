const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('8657df27bd8d929421409daf759e35381d5c041fda05acbbe7c5aa9f591ec6f7');
const myWalletAddress = myKey.getPublic('hex');

let jrCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
jrCoin.addTransaction(tx1);

// console.log("Mining block 1...");
// jrCoin.addBlock(new Block("02/01/2020", { amount: 4 }));

// console.log("Mining block 2...");
// jrCoin.addBlock(new Block("03/01/2020", { amount: 10 }));

// console.log('Is blockchain valid? ' + jrCoin.isChainValid());

// jrCoin.chain[1].data = { amount: 100 };
// jrCoin.chain[1].hash = jrCoin.chain[1].calculateHash();

// console.log('Is blockchain valid? ' + jrCoin.isChainValid());

// console.log(JSON.stringify(jrCoin, null, 4));

// jrCoin.createTransaction(new Transaction('address1', 'address2', 100));
// jrCoin.createTransaction(new Transaction('address2', 'address1', 50));

console.log('\n Starting the miner...');
jrCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of Jovica is...', jrCoin.getBalanceOfAddress(myWalletAddress));

console.log('\n Starting the miner again...');
jrCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of Jovica is...', jrCoin.getBalanceOfAddress(myWalletAddress));

// jrCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid?', jrCoin.isChainValid());