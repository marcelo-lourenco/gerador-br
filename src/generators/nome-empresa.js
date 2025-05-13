import { empresas, empresasBr } from '../data/db-companies.js';
import { getRandom } from '../utils.js';

/**
 * Gera um nome de empresa aleatório. Baseado em filmes, séries, livros, videogames, animação, hq, etc.
 *
 * @param {string} [local] - Se for 'BR' ou 'br', retorna apenas empresas brasileiras.
 * @returns {string} - Um nome de empresa.
 * @example
 * console.log(nomeEmpresa()); // Exemplo: "Wayne Enterprises", "Los Pollos Hermanos", "Nakatomi Corporation"
 * console.log(nomeEmpresa('BR')); // Exemplo: "Indústrias Tabajara", "Vavá Tur"
 */
export function nomeEmpresa(local) {
  if (local === 'BR' || local === 'br') {
    return getRandom(empresasBr);
  }
  return getRandom([...empresas, ...empresasBr]);
}
