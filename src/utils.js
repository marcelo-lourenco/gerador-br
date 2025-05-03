import { siglasEstados } from './data/db-general.js';

/**
 * Retorna um número inteiro aleatório entre min (inclusive) e max (exclusivo).
 * @param {number} min - O limite inferior (inclusivo).
 * @param {number} max - O limite superior (exclusivo).
 * @returns {number} Um número inteiro aleatório entre min e max.
 */
export const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Retorna um elemento aleatório de um array.
 * @param {Array} arr - O array do qual deve ser extraído um elemento aleatório.
 * @returns {*} Um elemento aleatório do array.
 */
export const getRandom = (arr) => {
  const index = randomInt(0, arr.length); // Gera um índice aleatório no intervalo do array
  return arr[index];
};

/**
 * Indica se o dado deve ser mascarado.
 * @type {boolean}
 * @example
 * if (mask) {
 *   console.log("Dados mascarados.");
 * } else {
 *   console.log("Dados não mascarados.");
 * }
 */
export const mask = false;

/**
 * Uma sigla de estado aleatória.
 * @type {string}
 * @example
 * console.log(stateRand); // Retorna qualquer sigla de estado, como "SP", "RJ", etc.
 */
export const stateRand = getRandom(siglasEstados);

