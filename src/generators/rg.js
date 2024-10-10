/**
 * Calcula o dígito verificador do RG.
 * @param {number} rgBase - Os primeiros 8 dígitos do RG.
 * @returns {number|string} O dígito verificador.
 */
export function calcDV(rgBase) {
  let dv = 11 - (rgBase % 11);
  if (dv === 11) {
    dv = 0;
  } else if (dv === 10) {
    dv = 'X';
  }
  return dv
}

/**
 * Gera um número de RG aleatório.
 * @param {boolean} mask - Se `true`, o RG será retornado com a máscara de formatação (xx.xxx.xxx-x). Se `false`, o RG será retornado apenas com os dígitos.
 * @returns {string} O RG gerado.
 * @example
 * // RG com máscara
 * console.log(rg(true)); // "12.345.678-9"
 *
 * // RG sem máscara
 * console.log(rg(false)); // "123456789"
 */
export function rg(mask) {
  let n = () => Math.round(Math.random() * 9);
  let n1 = Math.floor((Math.random() * 4) + 1);
  let n2 = n(); let n3 = n(); let n4 = n(); let n5 = n(); let n6 = n(); let n7 = n(); let
    n8 = n();
  const rgBase = n1 * 2 + n2 * 3 + n3 * 4 + n4 * 5 + n5 * 6 + n6 * 7 + n7 * 8 + n8 * 9;
  const dv = calcDV(rgBase)
  let rgGen = `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}-${dv}`;
  return mask ? rgGen : rgGen.replace(/[^a-zA-Z0-9]/g, '');
}
