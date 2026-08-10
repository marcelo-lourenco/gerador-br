import { coresPele } from '../data/db-general.js';
import { getRandom } from '../utils/index.js';

/**
 * Gera uma cor de pele aleatória.
 * @returns Uma cor de pele gerada aleatoriamente.
 * @example
 * console.log(corPele()); // Exemplo: "Branca", "Preta", "Parda", "Amarela", "Outro"
 */
export function corPele(): string {
  return getRandom(coresPele);
}
