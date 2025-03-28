// name Resolution = Index.js
//Resolução Modelo 2

const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// Lista de cores disponíveis
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// Criando um mapa de hashes para cores
const colorMap = Object.fromEntries(
    COLORS.map(color => [toHex(sha256(utf8ToBytes(color))), color])
);

// Função que encontra a cor correspondente ao hash fornecido
function findColor(hash) {
    return colorMap[toHex(hash)] || undefined; // Retorna a cor correspondente ou undefined se não encontrar
}

module.exports = findColor;
