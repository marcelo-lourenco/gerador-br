import { provedoresEmail } from '../data/db-general.js';
import { getRandom } from '../utils/index.js';

/**
 * Gera um provedor de e-mail aleatório.
 * @returns Um provedor de e-mail gerado aleatoriamente.
 * @example
 * console.log(provedorEmail()); // Exemplo: "@gmail.com", "@outlook.com", etc.
 */
export function provedorEmail(): string {
  return getRandom(provedoresEmail);
}
