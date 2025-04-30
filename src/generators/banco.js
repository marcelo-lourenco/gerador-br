import banks from '../data/db-bancos.js';

const getRandomBank = (arr) => arr[Math.floor(Math.random() * arr.length)];

/**
 * Gera dados de um banco aleatório.
 *
 * @param {number} [code] - O código do banco. Se não for informado, um banco aleatório será gerado.
 * @returns {object} Um objeto contendo os dados do banco.
 * @example
 * // Gera dados de um banco aleatório
 * console.log(banco());
 * // =>
 * {
 *   codigoBanco: '341',
 *   nomeBanco: 'Itaú Unibanco S.A.',
 *   razaoSocial: 'Banco Itaú Unibanco - 341',
 *   ispb: '03415961'
 * }
 *
 * // Gera dados do Banco do Brasil
 * console.log(banco(1));
 * // =>
 * {
 *   codigoBanco: '1',
 *   nomeBanco: 'Banco do Brasil S.A.',
 *   razaoSocial: 'Banco do Brasil S.A. - 001',
 *   ispb: '00000000'
 * }
 */
export const banco = function bank(code) {
  let bankRand = '';
  if (code) {
    bankRand = banks.find((bnk) => bnk.code === parseInt(code, 10));
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
};

/**
 * Retorna uma lista de códigos de bancos.
 *
 * @returns {array} Uma lista de códigos de bancos.
 * @example
 * // Retorna uma lista de códigos de bancos
 * console.log(listaCodigosBancos());
 * // => [ 1, 237, 104, 745, 296, 341, 33, ...]
 */
export const listaCodigosBancos = function () {
  return banks.map((bank) => bank.code);
};
