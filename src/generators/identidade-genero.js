import { identidadesGenero } from '../data/db-general.js';
import { getRandom } from '../utils.js';

/**
 * Gera uma identidade de gênero aleatória.
 * @returns {string} - Uma identidade de gênero aleatória.
 * @example
 * console.log(identidadeGenero()); // Retorna uma identidade de gênero, como: "Cisgênero", "Transgênero", etc.
 */
export function identidadeGenero() {
  return getRandom(identidadesGenero);
}