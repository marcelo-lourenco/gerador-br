/**
 * Calcula o dígito verificador (DV) para um número de CNH.
 *
 * @param {string} cnhNum - O número de CNH a ser calculado.
 * @returns {string} O dígito verificador calculado.
 */
export function cnhDV(cnhNum) {
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
  dv1 = adjustDV(dv1);

  dv2 = (dv2 % 11) > 9 ? (dv2 >= 2 ? dv2 - 2 : dv2 + 9) : dv2;
  dv2 = adjustDV(dv2);

  return `${dv1}${dv2}`;
}

function adjustDV(dv) {
  return dv > 9 ? 0 : dv;
}

/**
 * Gera um número de CNH aleatório.
 *
 * @returns {string} O número de CNH gerado.
 * @example
 * // CNH gerado
 * console.log(cnh()); // "123456789012"
 */
export function cnh() {
  const cnhNum = String(Math.floor(Math.random() * 900000000) + 100000000);
  const cnhDv = cnhDV(cnhNum);
  return `${cnhNum}${cnhDv}`;
}
