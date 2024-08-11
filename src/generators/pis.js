/**
 * Gera um número de PIS aleatório.
 *
 * O número de PIS gerado é válido e pode ser formatado com máscara.
 *
 * @param {boolean} [mask=false] - Se `true`, o PIS será retornado com a máscara de formatação (xxx.xxxxx.xx.x). Se `false`, o PIS será retornado apenas com os dígitos.
 * @returns {string} O número de PIS gerado.
 * @example
 * // PIS sem máscara
 * console.log(pis()); // "68677229185"
 *
 * // PIS com máscara
 * console.log(pis(true)); // "686.77229.18.5"
 */
export function pis(mask) {
  const weight = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  const n = String(Math.floor(Math.random() * 10000000000)).padStart(10, '0');

  const totalSum = n.split('').reduce((acc, value, i) => {
    return acc + (weight[i] * Number(value));
  }, 0);

  const result = 11 - (totalSum % 11);

  let pis = [11, 10].includes(result) ? `${n}0` : `${n}${result}`;

  if (mask) {
    pis = pis.replace(/(\d{3})(\d{5})(\d{2})(\d{1})/, '$1.$2.$3.$4');
  }

  return pis;
}
