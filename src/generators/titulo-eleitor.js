import { stateRand } from '../utils.js';

/**
 * Retorna o código do estado brasileiro.
 *
 * @param {string} state - A sigla do estado (por exemplo, "SP", "RJ").
 * @returns {string|null} O código do estado ou `null` se o estado não for encontrado.
 * @example
 * console.log(statesCode("SP")); // "01"
 * console.log(statesCode("RJ")); // "03"
 */
function statesCode(state) {
  const stateCodes = {
    AC: '24',
    AL: '17',
    AM: '22',
    AP: '25',
    BA: '05',
    CE: '07',
    DF: '20',
    ES: '14',
    GO: '10',
    MA: '11',
    MG: '02',
    MS: '19',
    MT: '18',
    PA: '13',
    PB: '12',
    PE: '08',
    PI: '15',
    PR: '06',
    RJ: '03',
    RN: '16',
    RO: '23',
    RR: '26',
    RS: '04',
    SC: '09',
    SE: '21',
    SP: '01',
    TO: '27',
  };
  return stateCodes[state];
}

/**
 * Calcula o módulo de um número.
 *
 * @param {number} dv - O número a ser calculado.
 * @param {string} state - O código do estado.
 * @returns {number} O módulo do número.
 * @example
 * console.log(teDV(10, "01")); // 0
 * console.log(teDV(0, "02")); // 1
 */
export function teDV(dv, state) {
  let digito = dv;
  if (dv === 10) {
    digito = 0;
  } else if (dv === 0 && (state === '01' || state === '02')) {
    digito = 1;
  }
  return digito;
}

/**
 * Gera um número de Título de Eleitor aleatório.
 *
 * @param {boolean} mask - Se `true`, o Título de Eleitor será retornado com a
 * máscara de formatação:(xxxx xxxx xxxx xxxx). Se `false`, será retornado apenas com os dígitos.
 * @param {string} [state] - A sigla do estado para determinar a origem do Título de Eleitor.
 * Se não fornecido, será escolhido um estado aleatório.
 * @returns {string} O Título de Eleitor gerado.
 * @example
 *
 * // Título de Eleitor sem máscara e do estado aleatório
 * console.log(tituloEleitor()); // "123456789012"
 *
 * // Título de Eleitor com máscara e do estado aleatório
 * console.log(tituloEleitor(true)); // "1234 5678 9012"
 *
  * // Título de Eleitor sem máscara e do estado informado
 * console.log(tituloEleitor(false, 'ES')); // "123456789012"
 *
 * // Título de Eleitor com máscara e do estado informado
 * console.log(tituloEleitor(true, 'PE')); // "1234 5678 9012"
 */
export function tituloEleitor(mask, state) {
  const r = () => Math.round(Math.random() * 9);

  const n = Array.from({ length: 8 }, r);
  const uf = state ? state.toUpperCase() : stateRand;
  const stateCode = statesCode(uf);
  const [n9, n10] = stateCode.split('');

  let d1 = n.reduce((acc, digit, index) => acc + digit * (index + 2), 0) % 11;
  d1 = teDV(d1, stateCode);

  let d2 = [n9, n10, d1]
    .reduce((acc, digit, index) => acc + digit * (index === 2 ? 9 : index + 7), 0) % 11;
  d2 = teDV(d2, stateCode);

  const vt = [...n, n9, n10, d1, d2].join('');
  return mask ? `${vt.slice(0, 4)} ${vt.slice(4, 8)} ${vt.slice(8)}` : vt;
}
