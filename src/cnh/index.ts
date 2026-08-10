function adjustDv(dv: number): number {
  return dv > 9 ? 0 : dv;
}

/**
 * Calcula o dígito verificador (DV) para um número de CNH.
 *
 * @param cnhNum - O número de CNH a ser calculado (9 dígitos).
 * @returns O dígito verificador calculado.
 */
export function cnhDV(cnhNum: string): string {
  let n1 = 9;
  let n2 = 1;
  let dv1 = 0;
  let dv2 = 0;

  for (let i = 0; i < 9; i++) {
    const vl = parseInt(cnhNum.charAt(i), 10);
    dv1 += vl * n1;
    dv2 += vl * n2;
    n1--;
    n2++;
  }

  dv1 %= 11;
  dv1 = adjustDv(dv1);

  const dv2Rem = dv2 % 11;
  const dv2Calc = dv2Rem > 9 ? (dv2 >= 2 ? dv2 - 2 : dv2 + 9) : dv2Rem;
  dv2 = adjustDv(dv2Calc);

  return `${dv1}${dv2}`;
}

/**
 * Gera um número de CNH aleatório.
 *
 * @returns O número de CNH gerado.
 * @example
 * console.log(cnh()); // "12345678901"
 */
export function cnh(): string {
  const cnhNum = String(Math.floor(Math.random() * 900000000) + 100000000);
  const cnhDv = cnhDV(cnhNum);
  return `${cnhNum}${cnhDv}`;
}
