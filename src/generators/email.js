import { apelidoRand, provedorEmailRand } from '../utils.js';

let mail = '';

/**
 * Gera um endereço de e-mail aleatório.
 *
 * O endereço de e-mail gerado pode ser baseado em um nome completo fornecido ou em um apelido aleatório.
 *
 * @param {string} [fullName] - O nome completo a ser usado para gerar o endereço de e-mail. Se não fornecido, um apelido aleatório será usado.
 * @returns {string} O endereço de e-mail gerado.
 * @example
 * // Gera um endereço de e-mail com base em um apelido aleatório
 * console.log(email()); // Pode retornar algo como "alpha@gmail.com"
 *
 * // Gera um endereço de e-mail com base no nome fornecido "Marcelo Lourenço"
 * console.log(email("José Maria")); // Pode retornar algo como "jose.maria@ig.com"
 *
 * // Gera um endereço de e-mail com base no nome aleatório
 * console.log(email(gerar.nomeFemininoCompleto)); // Pode retornar algo como "ana.borges@hotmail.com"
 */
export function email(fullName) {
  if (fullName) {
    let removeSpecialCharacter = fullName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let partsName = removeSpecialCharacter.match(/\w+/g);
    mail = partsName.slice(0, 2).join(' ').toLowerCase().replace(/ /g, '.');
  } else {
    mail = apelidoRand.toLowerCase();
  }
  return `${mail}${provedorEmailRand}`;
}
