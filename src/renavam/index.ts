/**
 * Calcula o módulo de verificação do RENAVAM.
 *
 * @param renavamBase - A base ponderada dos dígitos do RENAVAM.
 * @returns O módulo de verificação do RENAVAM.
 */
export function renavamDV(renavamBase: number): number {
  let mod = (renavamBase * 10) % 11;
  if (mod === 10) {
    mod = 0;
  }
  return mod;
}

/**
 * Gera um número de RENAVAM aleatório.
 *
 * @returns O número de RENAVAM gerado.
 * @example
 * console.log(renavam()); // "12345678901"
 */
export function renavam(): string {
  const n = () => Math.floor(Math.random() * 10);
  const n0 = n();
  const n1 = n();
  const n2 = n();
  const n3 = n();
  const n4 = n();
  const n5 = n();
  const n6 = n();
  const n7 = n();
  const n8 = n();
  const n9 = n();
  const renavamBase =
    n() * 3 + n() * 2 + n() * 9 + n() * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2;
  const dv = renavamDV(renavamBase);

  return `${n0}${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${dv}`;
}
