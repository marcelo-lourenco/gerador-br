import { empresas, empresasBr } from '../data/db-companies.js';
import { getRandom } from '../utils/index.js';

/**
 * Gera um nome de empresa aleatório. Baseado em filmes, séries, livros, videogames, animação, hq, etc.
 *
 * @param local - Se for 'BR' ou 'br', retorna apenas empresas brasileiras.
 * @returns Um nome de empresa.
 * @example
 * console.log(nomeEmpresa());
 * console.log(nomeEmpresa('BR'));
 */
export function nomeEmpresa(local?: string): string {
  if (local === 'BR' || local === 'br') {
    return getRandom(empresasBr);
  }
  return getRandom([...empresas, ...empresasBr]);
}
