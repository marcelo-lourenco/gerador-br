import { stateRand } from '../utils/index.js';

function numStates(state: string): string {
  const stateGroups: Record<string, string[]> = {
    '0': ['RS'],
    '1': ['DF', 'GO', 'MT', 'MS', 'TO'],
    '2': ['AC', 'AP', 'AM', 'PA', 'RO', 'RR'],
    '3': ['CE', 'MA', 'PI'],
    '4': ['AL', 'PB', 'PE', 'RN'],
    '5': ['BA', 'SE'],
    '6': ['MG'],
    '7': ['ES', 'RJ'],
    '8': ['SP'],
    '9': ['PR', 'SC'],
  };

  const foundKey = Object.keys(stateGroups).find((key) => stateGroups[key]!.includes(state));
  return foundKey ?? numStates(stateRand);
}

function mod(dividend: number, divider: number): number {
  return Math.round(dividend - Math.floor(dividend / divider) * divider);
}

function adjustDv(dv: number): number {
  if (dv >= 10) {
    dv = 0;
  }
  return dv;
}

/**
 * Calcula o dígito verificador do CPF.
 * @param num - Os nove primeiros dígitos do CPF.
 * @returns Os dois dígitos verificadores.
 */
export function cpfDV(num: string | number): string {
  const digits = String(num).padStart(9, '0').split('').map(Number);
  let dv1 =
    digits[8]! * 2 +
    digits[7]! * 3 +
    digits[6]! * 4 +
    digits[5]! * 5 +
    digits[4]! * 6 +
    digits[3]! * 7 +
    digits[2]! * 8 +
    digits[1]! * 9 +
    digits[0]! * 10;
  dv1 = 11 - mod(dv1, 11);
  dv1 = adjustDv(dv1);

  let dv2 =
    dv1 * 2 +
    digits[8]! * 3 +
    digits[7]! * 4 +
    digits[6]! * 5 +
    digits[5]! * 6 +
    digits[4]! * 7 +
    digits[3]! * 8 +
    digits[2]! * 9 +
    digits[1]! * 10 +
    digits[0]! * 11;
  dv2 = 11 - mod(dv2, 11);
  dv2 = adjustDv(dv2);

  return `${dv1}${dv2}`;
}

/**
 * Gera um número de CPF aleatório.
 * @param mask - Se `true`, o CPF será retornado com a máscara (xxx.xxx.xxx-xx).
 * @param state - A sigla do estado para determinar a origem do CPF.
 * @returns O CPF gerado.
 * @example
 * console.log(cpf(true, "SP")); // "123.456.789-09"
 */
export function cpf(mask?: boolean, state?: string): string {
  const n = () => Math.round(Math.random() * 9);
  const n1 = n();
  const n2 = n();
  const n3 = n();
  const n4 = n();
  const n5 = n();
  const n6 = n();
  const n7 = n();
  const n8 = n();
  const n9 = numStates(state ? state.toUpperCase() : stateRand);

  const num = `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}`;
  const dv = cpfDV(num);

  const cpfGen = `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${dv}`;
  return mask ? cpfGen : cpfGen.replace(/\D/g, '');
}
