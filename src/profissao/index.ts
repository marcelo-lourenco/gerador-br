import { profissoes } from '../data/db-general.js';
import { getRandom } from '../utils/index.js';

/**
 * Uma profissão aleatória.
 * @returns Uma profissão gerada aleatoriamente.
 * @example
 * console.log(profissao()); // Exemplo: "Advogado", "Engenheiro", etc.
 */
export function profissao(): string {
  return getRandom(profissoes);
}
