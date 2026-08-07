/**
 * Gera um número de Passaporte aleatório.
 *
 * @returns O número de Passaporte gerado.
 * @example
 * console.log(passaporte()); // "AB1234567"
 */
export function passaporte(): string {
  let series = '';
  const numbers = `0000000${Math.floor(Math.random() * 10000000)}`.slice(-7);
  for (let i = 0; i < 2; i++) {
    series += String.fromCharCode(65 + Math.floor(Math.random() * 26));
  }
  return `${series}${numbers}`;
}
