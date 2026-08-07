/**
 * Calcula o dígito verificador (DV) para um número de CNPJ.
 *
 * @param dv - O valor a ser calculado.
 * @returns O dígito verificador calculado.
 */
export function cnpjDV(dv: number): number {
  const dvGen = 11 - (dv % 11);
  return dvGen >= 10 ? 0 : dvGen;
}

/**
 * Gera um número de CNPJ tradicional (apenas numérico) aleatório.
 *
 * @param mask - Se `true`, o CNPJ será retornado com a máscara de formatação (xx.xxx.xxx/0001-xx).
 * @returns O CNPJ gerado.
 * @example
 * console.log(cnpj(true)); // "12.345.678/0001-00"
 * console.log(cnpj(false)); // "12345678000100"
 */
export function cnpj(mask?: boolean): string {
  const n = () => Math.round(Math.random() * 9);
  const n1 = n();
  const n2 = n();
  const n3 = n();
  const n4 = n();
  const n5 = n();
  const n6 = n();
  const n7 = n();
  const n8 = n();
  const n9 = 0;
  const n10 = 0;
  const n11 = 0;
  const n12 = 1;

  let dv1 =
    n12 * 2 +
    n11 * 3 +
    n10 * 4 +
    n9 * 5 +
    n8 * 6 +
    n7 * 7 +
    n6 * 8 +
    n5 * 9 +
    n4 * 2 +
    n3 * 3 +
    n2 * 4 +
    n1 * 5;
  dv1 = cnpjDV(dv1);

  let dv2 =
    dv1 * 2 +
    n12 * 3 +
    n11 * 4 +
    n10 * 5 +
    n9 * 6 +
    n8 * 7 +
    n7 * 8 +
    n6 * 9 +
    n5 * 2 +
    n4 * 3 +
    n3 * 4 +
    n2 * 5 +
    n1 * 6;
  dv2 = cnpjDV(dv2);

  const cnpjGerado = `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${dv1}${dv2}`;

  return mask ? cnpjGerado : cnpjGerado.replace(/\D/g, '');
}
