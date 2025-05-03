import { coresPele } from '../data/db-general.js';
import { getRandom } from '../utils.js';

/**
 * Gera cor da pele aleatória.
 * @type {string}
 * @returns {string} - Uma cor da pele aleatória.
 * @example
 * console.log(corPele()); // Exemplo: "Branca", "Preta", etc.
 */
export function corPele() {
  return getRandom(coresPele);
}
