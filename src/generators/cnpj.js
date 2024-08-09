function calcDV(dv) {
  dv = 11 - (dv % 11);
  return (dv >= 10) ? 0 : dv;
}

export function cnpj(mask) {
  let n = () => Math.round(Math.random() * 9);
  let n1 = n(), n2 = n(), n3 = n(), n4 = n(), n5 = n(), n6 = n(), n7 = n(), n8 = n(), n9 = 0, n10 = 0, n11 = 0, n12 = 1;

  let dv1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
  dv1 = calcDV(dv1);

  let dv2 = dv1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;
  dv2 = calcDV(dv2);

  let cnpjGerado = `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${dv1}${dv2}`;
  return mask ? cnpjGerado : cnpjGerado.replace(/\D/g, '');
}
export default cnpj;