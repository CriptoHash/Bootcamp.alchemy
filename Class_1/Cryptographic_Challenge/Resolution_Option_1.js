// name Resolution = Index.js
// Resolução Modelo 1

const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// Função para encontrar a cor correspondente ao hash fornecido
function findColor(hash) {
    const hashHex = toHex(hash); // Converte o hash recebido para hexadecimal

    // Definição das cores como variáveis individuais
    const A = "red";
    const B = "green";
    const C = "blue";
    const D = "yellow";
    const E = "pink";
    const F = "orange";

    // Convertendo as strings para bytes
    const aBytes = utf8ToBytes(A);
    const bBytes = utf8ToBytes(B);
    const cBytes = utf8ToBytes(C);
    const dBytes = utf8ToBytes(D);
    const eBytes = utf8ToBytes(E);
    const fBytes = utf8ToBytes(F);

    // Criando os hashes
    const aHash = sha256(aBytes);
    const bHash = sha256(bBytes);
    const cHash = sha256(cBytes);
    const dHash = sha256(dBytes);
    const eHash = sha256(eBytes);
    const fHash = sha256(fBytes);


		// Verifica se o hash fornecido corresponde ao hash da cor
        if (hashHex === toHex(aHash)) return A;
        if (hashHex === toHex(bHash)) return B;
        if (hashHex === toHex(cHash)) return C;
        if (hashHex === toHex(dHash)) return D;
        if (hashHex === toHex(eHash)) return E;
        if (hashHex === toHex(fHash)) return F;

        return undefined; // Retorna undefined caso o hash não seja de nenhuma cor conhecida

}

module.exports = findColor;
