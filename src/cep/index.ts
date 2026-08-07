import dbCep from '../data/db-ceps.js';
import { stateRand } from '../utils/index.js';

/**
 * Gera um CEP aleatório.
 *
 * @param mask - Se `true`, o CEP será retornado com a máscara de formatação (xxxxx-xxx).
 * @param state - A sigla do estado para filtrar os CEPs.
 * @returns O CEP gerado.
 * @example
 * console.log(cep()); // "12345678"
 * console.log(cep(true, "SP")); // "01001-000"
 */
export function cep(mask = false, state?: string): string {
  const uf = state ? state.toUpperCase() : stateRand;
  let fullAddress = dbCep.filter((enderecos) => enderecos.uf === uf);
  if (fullAddress.length === 0) {
    fullAddress = dbCep;
  }
  const sortAddress = fullAddress[Math.floor(Math.random() * fullAddress.length)]!;
  return mask ? sortAddress.cep : sortAddress.cep.replace(/\D/g, '');
}
