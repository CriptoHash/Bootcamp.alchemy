// Proposta: Adicionar a tx ao mempool
// Exercicio Resolvido!!!!!!!!!


const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    // TODO: add transaction to mempool
    // O foco do exercicio seria apenas adicionar a Tx ao Mempool
    mempool.push(transaction);
    console.log("Transação adicionada ao mempool.");

}

function mine() {
    // TODO: mine a block
    if (mempool.length === 0)  {
        console.log("Não há transação para minerar.")
        return;
    }

    const block = {
        transactions: [...mempool], // copias as transações 
        timestamp: Date.now()
    };

    blockchain.push(block); // adiciona o bloco minerado na blockchain
    mempool.legth = 0;      // esvazia o mempool com as tx aceitas
    console.log("Bloco Minerado", block); 
} 

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
}

// should add the transaction to the mempool
// Test Passed
