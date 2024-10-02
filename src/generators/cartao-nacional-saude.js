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
  let cns = 0;

  while (cns.length !== 15) {
    let n1 = Math.floor((Math.random() * 3) + 1);
    n1 = (n1 === 3) ? Math.floor((Math.random() * 3) + 7) : n1;
    const n2 = (`00000${Math.floor(Math.random() * 99999 + 1)}`).slice(-5);
    const n3 = (`00000${Math.floor(Math.random() * 99999 + 1)}`).slice(-5);
    cns = n1 + n2 + n3;

    let sum = 0;
    for (let i = 0; i < cns.length; i++) {
      sum += Number(cns.charAt(i)) * (15 - i);
    }

    let mod = sum % 11;
    let dv = 11 - mod;
    dv = (dv === 11) ? 0 : dv;

    if (dv === 10) {
      let sum = 2;
      for (let i = 0; i < cns.length; i++) {
        sum += Number(cns.charAt(i)) * (15 - i);
      }
      mod = sum % 11;
      dv = 11 - mod;
      cns += `001${String(dv)}`;
    } else {
      cns += `000${String(dv)}`;
    }

    const cnsGen = `${cns.substr(0, 3)} ${cns.substr(3, 4)} ${cns.substr(7, 4)} ${cns.substr(11, 4)}`;

    return mask ? cnsGen : cnsGen.replace(/\D/g, '');
  }
}
