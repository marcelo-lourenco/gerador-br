import dbCep from '../../lib/db-ceps.js';
import { stateRand } from '../utils.js';

const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];


/**
 * Gera um CEP aleatório.
 *
 * O CEP gerado pode ser formatado com máscara (xxxxx-xxx) ou apenas com os dígitos.
 *
 * @param {boolean} [mask=false] - Se `true`, o CEP será retornado com a máscara de formatação (xxxxx-xxx). Se `false`, o CEP será retornado apenas com os dígitos.
 * @param {string} [state] - A sigla do estado para filtrar os CEPs. Se não fornecido, um CEP de qualquer estado será gerado.
 * @returns {string} O CEP gerado.
 * @example
 * // CEP sem máscara
 * console.log(cep()); // "12345678"
 *
 * // CEP com máscara
 * console.log(cep(true)); // "12345-678"
 *
 * // CEP de São Paulo (SP) sem máscara
 * console.log(cep(false, "SP")); // "01001000"
 *
 * // CEP de São Paulo (SP) com máscara
 * console.log(cep(true, "SP")); // "01001-000"
 */
export function cep(mask = false, state) {
  const uf = state ? state : stateRand;
  const fullAddress = uf ? dbCep.filter(enderecos => enderecos.uf === uf) : dbCep;
  const sortAddress = getRandom(fullAddress);
  return mask ? sortAddress.cep : sortAddress.cep.replace(/\D/g, '');
}
