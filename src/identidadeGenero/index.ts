import { identidadesGenero } from '../data/db-general.js';
import { getRandom } from '../utils/index.js';

/**
 * Uma identidade de gênero aleatória.
 * @returns Uma identidade de gênero gerada aleatoriamente.
 * @example
 * console.log(identidadeGenero()); // Exemplo: "Cisgênero", "Transgênero", "Não binário"
 */
export function identidadeGenero(): string {
  return getRandom(identidadesGenero);
}
