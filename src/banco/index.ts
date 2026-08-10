import banks from '../data/db-bancos.js';

export interface BancoData {
  codigoBanco: string;
  nomeBanco: string;
  razaoSocial: string;
  ispb: string;
}

const getRandomBank = (arr: typeof banks) => arr[Math.floor(Math.random() * arr.length)]!;

/**
 * Gera dados de um banco aleatório.
 *
 * @param code - O código do banco. Se não for informado, um banco aleatório será gerado.
 * @returns Um objeto contendo os dados do banco.
 * @example
 * console.log(banco());
 * console.log(banco(1));
 */
export function banco(code?: number | string): BancoData {
  let bankRand: (typeof banks)[number] | undefined;
  if (code) {
    const numericCode = typeof code === 'string' ? parseInt(code, 10) : code;
    bankRand = banks.find((bnk) => bnk.code === numericCode);
    if (!bankRand) {
      bankRand = getRandomBank(banks);
    }
  } else {
    bankRand = getRandomBank(banks);
  }
  return {
    codigoBanco: String(bankRand.code),
    nomeBanco: bankRand.name,
    razaoSocial: bankRand.fullName,
    ispb: bankRand.ispb,
  };
}

/**
 * Retorna uma lista de códigos de bancos.
 *
 * @returns Uma lista de códigos de bancos.
 * @example
 * console.log(listaCodigosBancos());
 */
export function listaCodigosBancos(): number[] {
  return banks.map((bank) => bank.code).filter((code): code is number => code !== null);
}
