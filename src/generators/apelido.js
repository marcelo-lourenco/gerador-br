import { nicknames } from '../data/db-general.js';
import { getRandom } from '../utils.js';

/**
 * Gera um apelido fictício aleatório.
 *
 * @returns {string} - Um apelido gerado aleatoriamente.
 * @example
 * console.log(apelido()); // Exemplo: "Falcão", "Astronauta", "Relíquia"
 */
export function apelido() {
  return getRandom(nicknames);
}
