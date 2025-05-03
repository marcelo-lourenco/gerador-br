import { escolaridades } from '../data/db-general.js';
import { getRandom } from '../utils.js';


/**
 * Gera uma escolaridade aleatória.
 *
 * @returns {string} - Uma escolaridade gerada aleatoriamente.
 * @example
 * console.log(escolaridade()); // Exemplo: "Ensino Médio Completo", "Graduação Incompleta", "Pós-graduação Completa"
 */
export function escolaridade() {
  return getRandom(escolaridades);
}

