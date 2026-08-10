import { apelido } from '../apelido/index.js';
import { provedorEmail } from '../provedorEmail/index.js';

/**
 * Gera um endereço de e-mail aleatório.
 *
 * @param fullName - O nome completo a ser usado para gerar o e-mail.
 * @returns O endereço de e-mail gerado.
 * @example
 * console.log(email());
 * console.log(email("José Maria"));
 */
export function email(fullName?: string): string {
  let mail = '';
  if (fullName) {
    const removeSpecialCharacter = fullName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const partsName = removeSpecialCharacter.match(/\w+/g) || [fullName];
    mail = partsName.slice(0, 2).join(' ').toLowerCase().replace(/ /g, '.');
  } else {
    mail = apelido().toLowerCase();
  }
  return `${mail}${provedorEmail()}`;
}
