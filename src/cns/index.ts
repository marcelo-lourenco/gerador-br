/**
 * Calcula o dígito verificador do CNS.
 * @param cnsBase - A base do CNS (sem o dígito verificador).
 * @returns O dígito verificador do CNS.
 */
export function cnsDV(cnsBase: string): string {
  let sum = 0;
  for (let i = 0; i < cnsBase.length; i++) {
    sum += Number(cnsBase.charAt(i)) * (15 - i);
  }

  let mod = sum % 11;
  let dv = 11 - mod;
  if (dv === 10) {
    sum = 2;
    for (let i = 0; i < cnsBase.length; i++) {
      sum += Number(cnsBase.charAt(i)) * (15 - i);
    }
    mod = sum % 11;
    dv = 11 - mod;
    return `001${dv}`;
  }
  if (dv === 11) {
    return '0000';
  }
  return `000${dv}`;
}

/**
 * Gera um número de Cartão Nacional de Saúde (CNS) aleatório.
 * @param mask - Se true, retorna o CNS com máscara (XXX XXXX XXXX XXXX).
 * @param type - O tipo de CNS a ser gerado ('beneficiario' ou 'profissional').
 * @returns O número de CNS gerado.
 * @example
 * console.log(cns());
 * console.log(cns(true, 'beneficiario'));
 */
export function cns(mask?: boolean, type?: 'beneficiario' | 'profissional' | string): string {
  let firstDigit: number;

  if (type === 'beneficiario') {
    firstDigit = Math.floor(Math.random() * 2) + 1;
  } else if (type === 'profissional') {
    firstDigit = Math.floor(Math.random() * 3) + 7;
  } else {
    const availableDigits = [1, 2, 7, 8, 9];
    firstDigit = availableDigits[Math.floor(Math.random() * availableDigits.length)]!;
  }

  const n2 = String(Math.floor(Math.random() * 100000)).padStart(5, '0');
  const n3 = String(Math.floor(Math.random() * 100000)).padStart(5, '0');

  let cnsGen = `${firstDigit}${n2}${n3}`;
  cnsGen += cnsDV(cnsGen);

  if (mask) {
    return `${cnsGen.slice(0, 3)} ${cnsGen.slice(3, 7)} ${cnsGen.slice(7, 11)} ${cnsGen.slice(11, 15)}`;
  }

  return cnsGen;
}
