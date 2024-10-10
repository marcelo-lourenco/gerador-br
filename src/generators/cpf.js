import { stateRand } from '../utils.js';

/**
 * Retorna o grupo numérico associado a um estado brasileiro.
 * @param {string} state - A sigla do estado (por exemplo, "SP", "RJ").
 * @returns {number|null} O número do grupo associado ao estado ou `null` se o estado não for encontrado.
 * @example
 * console.log(numStates("SP")); // 8
 * console.log(numStates("RJ")); // 7
 */
function numStates(state) {
  const stateGroups = {
    0: ['RS'],
    1: ['DF', 'GO', 'MT', 'MS', 'TO'],
    2: ['AC', 'AP', 'AM', 'PA', 'RO', 'RR'],
    3: ['CE', 'MA', 'PI'],
    4: ['AL', 'PB', 'PE', 'RN'],
    5: ['BA', 'SE'],
    6: ['MG'],
    7: ['ES', 'RJ'],
    8: ['SP'],
    9: ['PR', 'SC'],
  };

  return Object.keys(stateGroups).find((key) => stateGroups[key].includes(state));
}

/**
 * Calcula o resto de uma divisão (módulo) entre dois números.
 * @param {number} dividend - O dividendo.
 * @param {number} divider - O divisor.
 * @returns {number} O resto da divisão.
 * @example
 * console.log(mod(10, 3)); // 1
 */
function mod(dividend, divider) {
  return Math.round(dividend - (Math.floor(dividend / divider) * divider));
}

function adjustDV(dv) {
  if (dv >= 10) { dv = 0; }
  return dv
}



/**
 * Gera um número de CPF aleatório.
 * @param {boolean} mask - Se `true`, o CPF será retornado com a máscara de formatação (xxx.xxx.xxx-xx). Se `false`, o CPF será retornado apenas com os dígitos.
 * @param {string} [state] - A sigla do estado para determinar a origem do CPF. Se não fornecido, será escolhido um estado aleatório.
 * @returns {string} O CPF gerado.
 * @example
 * // CPF com máscara de formatação
 * console.log(cpf(true, "SP")); // "123.456.789-09"
 *
 * // CPF sem máscara de formatação
 * console.log(cpf(false, "RJ")); // "12345678909"
 *
 * // CPF com estado aleatório
 * console.log(cpf(true)); // "987.654.321-00"
 */
export function cpf(mask, state) {
  let n = () => Math.round(Math.random() * 9);
  const n1 = n(); const n2 = n(); const n3 = n(); const n4 = n(); const n5 = n(); const n6 = n(); const n7 = n(); const n8 = n(); const
    n9 = numStates(state || stateRand);

  let d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
  d1 = 11 - (mod(d1, 11));
  d1 = adjustDV(d1)

  let d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
  d2 = 11 - (mod(d2, 11));
  d2 = adjustDV(d2)

  let cpfGen = `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}`;
  return mask ? cpfGen : cpfGen.replace(/\D/g, '');
}
