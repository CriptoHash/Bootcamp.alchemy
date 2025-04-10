// Exercicio Resolvido

const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {

    // 1 - Ignora o primeiro byte da chave publica
    const firstByte = publicKey.slice(1);

    // 2 - Aplica o hash keccak256
    const hash = keccak256(firstByte);

    // 3 - Retorna os últimos 20 bytes do hash
    return hash.slice(-20);

}

module.exports = getAddress;
