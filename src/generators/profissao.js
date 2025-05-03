import { profissoes } from '../data/db-general.js';
import { getRandom } from '../utils.js';


/**
 * Gera uma profissão aleatória.
 * @type {string}
 * @returns {string} - Uma profissão aleatória.
 * @example
 * console.log(profissao()); // Retorna qualquer profissão, como "Engenheiro", "Médico", "Professor", etc.
 */
export function profissao() {
  return getRandom(profissoes);
}
