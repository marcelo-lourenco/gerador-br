/**
 * Gera um número de RENAVAM aleatório.
 *
 * @returns {string} O número de RENAVAM gerado.
 * @example
 * // RENAVAM gerado
 * console.log(renavanFn()); // "12345678901"
 */
export function renavanFn() {
  let n = () => Math.floor((Math.random() * 9) + 0);
  let n0 = n(), n1 = n(), n2 = n(), n3 = n(), n4 = n(), n5 = n(), n6 = n(), n7 = n(), n8 = n(), n9 = n();
  let mod = (((n() * 3) + (n() * 2) + (n() * 9) + (n() * 8) + (n4 * 7) + (n5 * 6) + (n6 * 5) + (n7 * 4) + (n8 * 3) + (n9 * 2)) * 10) % 11;
  if (mod === 10) {
    mod = 0;
  }
  return '' + n0 + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + mod;
}

export const renavan = renavanFn();
