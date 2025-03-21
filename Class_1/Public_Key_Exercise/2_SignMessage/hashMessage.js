// Criado no exercicio anterior por mim
// Modelo funcional até aqui

const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes, toHex } = require("ethereum-cryptography/utils");

function hashMessage(helloWorldHex) {

    // turn this into an array of bytes, the expected format for the hash algorithm
    const bytes = utf8ToBytes(helloWorldHex);
    // hash the message using keccak256
    const hash = keccak256(bytes);

    console.log(toHex(hash)); // 928c3f25193b338b89d5646bebbfa2436c5daa1d189f9c565079dcae379a43be
    return hash;
}

module.exports = hashMessage;
