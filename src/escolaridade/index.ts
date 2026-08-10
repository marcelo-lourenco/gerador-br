import { escolaridades } from '../data/db-general.js';
import { getRandom } from '../utils/index.js';

/**
 * Gera uma escolaridade fictícia aleatória.
 * @returns Uma escolaridade gerada aleatoriamente.
 * @example
 * console.log(escolaridade()); // Exemplo: "Ensino Médio Completo", "Superior Completo", etc.
 */
export function escolaridade(): string {
  return getRandom(escolaridades);
}
