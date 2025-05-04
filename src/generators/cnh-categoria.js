import { categoriasCnh } from '../data/db-general.js';
import { getRandom } from '../utils.js';

/**
 * Uma categoria de CNH aleatória.
 * @type {string}
 * @returns {string} - Uma escolaridade gerada aleatoriamente.
 * @example
 * console.log(cnhCategoria()); //Exemplo: "A", "B", "C", etc.
 */
export function cnhCategoria() {
  return getRandom(categoriasCnh);
}

