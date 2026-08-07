/**
 * Calcula o dígito verificador do RG.
 * @param rgBase - Os primeiros 8 dígitos do RG ponderados.
 * @returns O dígito verificador (número ou 'X').
 */
export function rgDV(rgBase: number): number | string {
  let dv: number | string = 11 - (rgBase % 11);
  if (dv === 11) {
    dv = 0;
  } else if (dv === 10) {
    dv = 'X';
  }
  return dv;
}

/**
 * Gera um número de RG aleatório.
 * @param mask - Se `true`, o RG será retornado com a máscara de formatação (xx.xxx.xxx-x).
 * @returns O RG gerado.
 * @example
 * console.log(rg(true)); // "12.345.678-9"
 * console.log(rg(false)); // "123456789"
 */
export function rg(mask?: boolean): string {
  const n = () => Math.round(Math.random() * 9);
  const n1 = Math.floor(Math.random() * 4 + 1);
  const n2 = n();
  const n3 = n();
  const n4 = n();
  const n5 = n();
  const n6 = n();
  const n7 = n();
  const n8 = n();
  const rgBase = n1 * 2 + n2 * 3 + n3 * 4 + n4 * 5 + n5 * 6 + n6 * 7 + n7 * 8 + n8 * 9;
  const dv = rgDV(rgBase);
  const rgGen = `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}-${dv}`;
  return mask ? rgGen : rgGen.replace(/[^a-zA-Z0-9]/g, '');
}
