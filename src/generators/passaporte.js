/**
 * Gera um número de Passoporte aleatório.
 *
 * @returns {string} O número de Passaporte gerado.
 * @example
 * // Passaporte gerado
 * console.log(passaporte); // "AB1234567"
 */
export function passaporteFn() {
  let series = '';
  let numbers = ('0000000' + Math.floor(Math.random() * 10000000)).slice(-7);
  for (let i = 0; i < 2; i++) {
    series += String.fromCharCode(65 + Math.floor(Math.random() * 26));
  }
  return `${series}${numbers}`;
}

export const passaporte = passaporteFn();
