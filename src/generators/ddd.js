import { stateRand } from '../utils.js';

/**
 * Gera um DDD aleatório para um estado brasileiro.
 *
 * @param {string} state - A sigla do estado (por exemplo, "SP", "RJ").
 * @returns {string} O DDD aleatório para o estado fornecido.
 * @example
 * // DDD aleatório para São Paulo (SP)
 * console.log(ddd("SP")); // Pode retornar 11, 12, 13, 14, 15, 16, 17, 18 ou 19
 *
 * // DDD aleatório para Rio de Janeiro (RJ)
 * console.log(ddd("RJ")); // Pode retornar 21, 22 ou 24
 */
export function ddd(state) {
  const ddds = {
    AC: [68],
    AL: [82],
    AM: [92, 97],
    AP: [96],
    BA: [71, 73, 74, 75, 77],
    CE: [85, 88],
    DF: [61],
    ES: [27, 28],
    GO: [62, 64],
    MA: [98, 99],
    MG: [31, 32, 33, 34, 35, 37, 38],
    MS: [67],
    MT: [65, 66],
    PA: [91, 93, 94],
    PB: [83],
    PE: [81, 87],
    PI: [86, 89],
    PR: [41, 42, 43, 44, 45, 46],
    RJ: [21, 22, 24],
    RN: [84],
    RO: [69],
    RR: [95],
    RS: [51, 53, 54, 55],
    SC: [47, 48, 49],
    SE: [79],
    SP: [11, 12, 13, 14, 15, 16, 17, 18, 19],
    TO: [63],
  };

  const dddState = ddds[state || stateRand];

  return String(dddState[Math.floor(Math.random() * dddState.length)]);
}
