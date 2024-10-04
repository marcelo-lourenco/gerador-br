/**
 * Gera um número de Cartão Nacional de Saúde (CNS) aleatório. Com máscara ou sem máscara
 * @param {boolean} [mask=false] - Se `true`, o CNS será retornado com a máscara de formatação (XXX XXXX XXXX XXXX).
 * Se `false`, o CNS será retornado apenas com os dígitos.
 * @returns {string} O número de CNS gerado.
 * @example
 * // CNS sem máscara
 * console.log(cns()); // "123456789012345"
 *
 * // CNS com máscara
 * console.log(cns(true)); // "123 4567 8901 2345"
 */
export function cns(mask) {
  let cnsGen = 0;

  let n1 = Math.floor((Math.random() * 3) + 1);
  n1 = (n1 === 3) ? Math.floor((Math.random() * 3) + 7) : n1;
  const n2 = (`00000${Math.floor(Math.random() * 99999 + 1)}`).slice(-5);
  const n3 = (`00000${Math.floor(Math.random() * 99999 + 1)}`).slice(-5);
  cnsGen = n1 + n2 + n3;

  let sum = 0;
  for (let i = 0; i < cnsGen.length; i++) {
    sum += Number(cnsGen.charAt(i)) * (15 - i);
  }

  let mod = sum % 11;
  let dv = 11 - mod;
  dv = (dv === 11) ? 0 : dv;

  if (dv === 10) {
    sum = 2;
    for (let i = 0; i < cnsGen.length; i++) {
      sum += Number(cnsGen.charAt(i)) * (15 - i);
    }
    mod = sum % 11;
    dv = 11 - mod;
    cnsGen += `001${String(dv)}`;
  } else {
    cnsGen += `000${String(dv)}`;
  }

  const formattedCnsGen = `${cnsGen.substr(0, 3)} ${cnsGen.substr(3, 4)} ${cnsGen.substr(7, 4)} ${cnsGen.substr(11, 4)}`;
  return mask ? formattedCnsGen : cnsGen.replace(/\D/g, '');
}
