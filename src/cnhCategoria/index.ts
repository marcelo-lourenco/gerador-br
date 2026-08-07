import { categoriasCnh } from '../data/db-general.js';
import { getRandom } from '../utils/index.js';

/**
 * Uma categoria de CNH aleatória.
 * @returns Uma categoria de CNH gerada aleatoriamente.
 * @example
 * console.log(cnhCategoria()); // Exemplo: "A", "B", "C", etc.
 */
export function cnhCategoria(): string {
  return getRandom(categoriasCnh);
}
