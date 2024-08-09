export function rg(mask) {
  let n = () => Math.round(Math.random() * 9);
  let n1 = Math.floor((Math.random() * 4) + 1);
  let n2 = n(), n3 = n(), n4 = n(), n5 = n(), n6 = n(), n7 = n(), n8 = n();

  const sum = n1 * 2 + n2 * 3 + n3 * 4 + n4 * 5 + n5 * 6 + n6 * 7 + n7 * 8 + n8 * 9;
  let dv = 11 - (sum % 11);

  if (dv === 11) {
    dv = 0;
  }

  if (dv === 10) {
    dv = "X";
  }

  let rgGen = `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}-${dv}`;

  return mask ? rgGen : rgGen.replace(/[^a-zA-Z0-9]/g, '');
}
