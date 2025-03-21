// Resolução

const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes, toHex } = require("ethereum-cryptography/utils");

function hashMessage(helloWorldHex) {

    // transforme isso em uma matriz de bytes, o formato esperado para o algoritmo de hash
    const bytes = utf8ToBytes(helloWorldHex);
    // hash da mensagem usando keccak256
    const hash = keccak256(bytes);

    console.log(toHex(hash)); // 47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad
    return hash;
}

module.exports = hashMessage;

// should return the keccak256 hash of hello world - Test Passed
