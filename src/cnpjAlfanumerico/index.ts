const charValues: Record<string, number> = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  A: 17,
  B: 18,
  C: 19,
  D: 20,
  E: 21,
  F: 22,
  G: 23,
  H: 24,
  I: 25,
  J: 26,
  K: 27,
  L: 28,
  M: 29,
  N: 30,
  O: 31,
  P: 32,
  Q: 33,
  R: 34,
  S: 35,
  T: 36,
  U: 37,
  V: 38,
  W: 39,
  X: 40,
  Y: 41,
  Z: 42,
};

const weights = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

function randomChar(): string {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return chars.charAt(Math.floor(Math.random() * chars.length));
}

function calculateDv(cnpjBase: string): string {
  const values = cnpjBase.split('').map((char) => charValues[char] ?? 0);

  let sum1 = 0;
  for (let i = 0; i < 12; i++) {
    sum1 += values[i]! * weights[i + 1]!;
  }
  const dv1 = sum1 % 11 < 2 ? 0 : 11 - (sum1 % 11);

  let sum2 = 0;
  for (let i = 0; i < 12; i++) {
    sum2 += values[i]! * weights[i]!;
  }
  sum2 += dv1 * weights[12]!;
  const dv2 = sum2 % 11 < 2 ? 0 : 11 - (sum2 % 11);

  return `${dv1}${dv2}`;
}

function formatCnpj(cnpjStr: string): string {
  return cnpjStr.replace(/^(\w{2})(\w{3})(\w{3})(\w{4})(\w{2})$/, '$1.$2.$3/$4-$5');
}

/**
 * Gera um CNPJ alfanumérico válido.
 * @param masked - Se true, retorna com máscara de formatação (XX.XXX.XXX/XXXX-XX).
 * @returns CNPJ gerado.
 */
export function cnpjAlfanumerico(masked = false): string {
  let base = '';
  for (let i = 0; i < 12; i++) {
    base += randomChar();
  }

  const dv = calculateDv(base);
  const fullCnpj = base + dv;

  return masked ? formatCnpj(fullCnpj) : fullCnpj;
}
