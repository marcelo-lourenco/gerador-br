import { orientacoesSexual } from '../data/db-general.js';
import { getRandom } from '../utils/index.js';

/**
 * Gera uma orientação sexual aleatória.
 * @returns Uma orientação sexual gerada aleatoriamente.
 * @example
 * console.log(orientacaoSexual()); // Exemplo: "Heterossexual", "Homossexual", etc.
 */
export function orientacaoSexual(): string {
  return getRandom(orientacoesSexual);
}
