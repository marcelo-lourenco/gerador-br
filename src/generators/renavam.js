/**
 * Calcula o módulo de verificação do RENAVAM.
 *
 * @param {number} renavamBase - A renavamBase ponderada dos dígitos do RENAVAM.
 * @returns {number} O módulo de verificação do RENAVAM.
 */
export function calcRenavamDV(renavamBase) {
  let mod = (renavamBase * 10) % 11;
  if (mod === 10) {
    mod = 0;
  }
  return mod;
}

/**
 * Gera um número de RENAVAM aleatório.
 *
 * @returns {string} O número de RENAVAM gerado.
 * @example
 * // RENAVAM gerado
 * console.log(renavam()); // "12345678901"
 */
export function renavam() {
  let n = () => Math.floor((Math.random() * 9) + 0);
  let n0 = n();
  let n1 = n();
  let n2 = n();
  let n3 = n();
  let n4 = n();
  let n5 = n();
  let n6 = n();
  let n7 = n();
  let n8 = n();
  let n9 = n();
  let renavamBase = (n() * 3) + (n() * 2) + (n() * 9) + (n() * 8) + (n4 * 7) + (n5 * 6) + (n6 * 5) + (n7 * 4) + (n8 * 3) + (n9 * 2);
  let dv = calcRenavamDV(renavamBase);

  return `${n0}${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${dv}`;
}
