import { tiposSanguineo } from '../data/db-general.js';
import { getRandom } from '../utils.js';


/**
 * Gera um tipo sanguíneo aleatório.
 * @type {string}
 * @returns {string} - Um tipo sanguíneo aleatório.
 * @example
 * console.log(tipoSanguineo()); // Retorna qualquer tipo sanguíneo, como "A+", "O-", etc.
 */
export function tipoSanguineo() {
  return getRandom(tiposSanguineo);
}