import { orientacoesSexual } from '../data/db-general.js';
import { getRandom } from '../utils.js';

/**
 * Gera uma orientação sexual aleatória.
 * @type {string}
 * @returns {string} - Uma orientação sexual aleatória.
 * @example
 * console.log(orientacaoSexual()); // Retorna qualquer orientação sexual, como: "Heterossexual", "Homossexual", etc.
 */
export function orientacaoSexual() {
  return getRandom(orientacoesSexual);
}

