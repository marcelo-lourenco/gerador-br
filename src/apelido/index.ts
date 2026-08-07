import { nicknames } from '../data/db-general.js';
import { getRandom } from '../utils/index.js';

/**
 * Gera um apelido fictício aleatório.
 *
 * @returns Um apelido gerado aleatoriamente.
 * @example
 * console.log(apelido()); // Exemplo: "Falcão", "Astronauta", "Relíquia"
 */
export function apelido(): string {
  return getRandom(nicknames);
}
