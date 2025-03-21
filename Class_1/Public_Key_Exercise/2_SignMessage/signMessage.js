// Criado por mim e adicionado algumas linha de correções auxiliares

const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require('./hashMessage');// retorna um hash válido
//const { hexToBytes } = require("ethereum-cryptography/utils");

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(message) {
    // Certifique-se de que 'hashMessage' retorna um hash
    const messageHash = hashMessage(message);
    // Converte a chave privada para Uint8Array, caso de erro ao importa-la
    //const privateKeyBytes = hexToBytes(PRIVATE_KEY);

    //return secp.sign(messageHash, privateKeyBytes, { recovered: true });
    return secp.sign(messageHash, PRIVATE_KEY, { recovered: true });
}

module.exports = signMessage;
