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
 * Calcula o dígito verificador do CPF.
 * @param {number[]} num - Os nove primeiros dígitos do CPF.
 * @returns {number[]} Os dois dígitos verificadores.
 * @example
 * console.log(cpfDV(123456789)); // => 09
 * console.log(cpfDV("123456789")); // => 09
 */
export function cpfDV(num) {
  num = String(num);
  num = num.padStart(9,'0').split('').map(Number)
  let dv1 = num[8] * 2 + num[7] * 3 + num[6] * 4 + num[5] * 5 + num[4] * 6 + num[3] * 7 + num[2] * 8 + num[1] * 9 + num[0] * 10;
  dv1 = 11 - (mod(dv1, 11));
  dv1 = adjustDV(dv1);

  let dv2 = dv1 * 2 + num[8] * 3 + num[7] * 4 + num[6] * 5 + num[5] * 6 + num[4] * 7 + num[3] * 8 + num[2] * 9 + num[1] * 10 + num[0] * 11;
  dv2 = 11 - (mod(dv2, 11));
  dv2 = adjustDV(dv2);

  return `${dv1}${dv2}`;
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
    n9 = numStates(state ? state.toUpperCase() : stateRand);

  const num = `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}`; // Concatenando os números em uma string
  const dv = cpfDV(num); // Transformando a string em um array de números

  let cpfGen = `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${dv}`;
  return mask ? cpfGen : cpfGen.replace(/\D/g, '');
}
