/**
 * Gera um número de Cartão Nacional de Saúde (CNS) aleatório.
 * @param {boolean} mask - Se `true`, retorna o CNS com máscara (XXX XXXX XXXX XXXX).
 * @param {string} type - O tipo de CNS a ser gerado ('beneficiario' para beneficiários do SUS, 'profissional' para profissionais de saúde).
 * @returns {string} O número de CNS gerado.
 * @example
 * // CNS sem máscara e tipo aleatório
 * console.log(cns());
 *
 * // CNS sem máscara e do tipo informado
 * console.log(cns(false, 'beneficiario'));
 * console.log(cns(false, 'profissional'));
 *
 * // CNS com máscara e tipo aleatório
 * console.log(cns(true));
 *
 * // CNS com máscara e do tipo informado
 * console.log(cns(true, 'beneficiario'));
 * console.log(cns(true, 'profissional'));
 */
export function cns(mask, type) {
  let firstDigit;

  // Define o primeiro dígito com base no tipo
  if (type === 'beneficiario') {
    firstDigit = Math.floor(Math.random() * 2) + 1; // 1 ou 2
  } else if (type === 'profissional') {
    firstDigit = Math.floor(Math.random() * 3) + 7; // 7, 8 ou 9
  } else {
    const availableDigits = [1, 2, 7, 8, 9];
    firstDigit = availableDigits[Math.floor(Math.random() * availableDigits.length)];
  }

  // Gera os próximos 11 dígitos
  const n2 = String(Math.floor(Math.random() * 100000)).padStart(5, '0'); // 5 dígitos
  const n3 = String(Math.floor(Math.random() * 100000)).padStart(5, '0'); // 5 dígitos

  // Constrói a base do CNS
  let cnsGen = `${firstDigit}${n2}${n3}`; // Base: 1 dígito inicial + 10 dígitos

  // Cálculo do dígito verificador
  let sum = 0;
  for (let i = 0; i < cnsGen.length; i++) {
    sum += Number(cnsGen.charAt(i)) * (15 - i);
  }

  let mod = sum % 11;
  let dv = 11 - mod;

  if (dv === 10) {
    sum = 2;
    for (let i = 0; i < cnsGen.length; i++) {
      sum += Number(cnsGen.charAt(i)) * (15 - i);
    }
    mod = sum % 11;
    dv = 11 - mod;
    cnsGen += `001${dv}`; // Adiciona "001" se dv = 10
  } else if (dv === 11) {
    dv = 0;
    cnsGen += `000${dv}`;
  } else {
    cnsGen += `000${dv}`; // Adiciona dv normal
  }

  if (mask) {
    return `${cnsGen.substr(0, 3)} ${cnsGen.substr(3, 4)} ${cnsGen.substr(7, 4)} ${cnsGen.substr(11, 4)}`;
  }

  return cnsGen; // Retorna CNS sem máscara
}
