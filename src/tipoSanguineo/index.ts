import { tiposSanguineo } from '../data/db-general.js';
import { getRandom } from '../utils/index.js';

/**
 * Gera um tipo sanguíneo aleatório.
 * @returns Um tipo sanguíneo gerado aleatoriamente.
 * @example
 * console.log(tipoSanguineo()); // Exemplo: "A+", "O-", etc.
 */
export function tipoSanguineo(): string {
  return getRandom(tiposSanguineo);
}
