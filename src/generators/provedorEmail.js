import { provedoresEmail } from '../data/db-general.js';
import { getRandom } from '../utils.js';

/**
 * Gera um provedor de email aleatório.
 * @type {string}
 * @returns {string} - Um provedor de email aleatório.
 * @example
 * console.log(provedorEmail()); // Retorna qualquer provedor de email, como: "@gmail.com", "@yahoo.com", etc.
 */
export function provedorEmail() {
  return getRandom(provedoresEmail);
}