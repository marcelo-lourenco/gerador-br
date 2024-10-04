import {
  nomeAleatorioRand, nomeMasculinoRand, nomeFemininoRand, nomeDoMeioRand, sobrenomeRand, nomeMaeRand, nomePaiRand,
} from '../utils.js';

/**
 * Gera nomes aleatórios.
 *
 * Este objeto fornece métodos para gerar nomes masculinos, femininos, completos, de mães e pais,
 * nomes do meio e sobrenomes.
 *
 * @example
 * // Gerar um nome aleatório
 * console.log(nome.aleatorio()); // Ex: "João", "Maria"
 *
 *  // Gerar um nome aleatório completo
 * console.log(nome.aleatorioCompleto()); // Ex: "João Santos da Silva", "Maria Santos da Silva"
 *
 * // Gerar um nome masculino aleatório
 * console.log(nome.masculino()); // Ex: "João"
 *
 * // Gerar um nome masculino completo aleatório
 * console.log(nome.masculinoCompleto()); // Ex: "João Santos da Silva"
 *
 * // Gerar um nome feminino aleatório
 * console.log(nome.feminino()); // Ex: "Maria"
 *
 * // Gerar um nome feminino completo aleatório
 * console.log(nome.femininoCompleto()); // Ex: "Maria Santos da Silva"
 *
 * // Gerar o nome da mãe aleatório
 * console.log(nome.mae()); // Ex: "Ana"
 *
 * // Gerar o nome completo da mãe aleatório
 * console.log(nome.maeCompleto()); // Ex: "Ana Santos da Silva"
 *
 * // Gerar o nome do pai aleatório
 * console.log(nome.pai()); // Ex: "José"
 *
 * // Gerar o nome completo do pai aleatório
 * console.log(nome.paiCompleto()); // Ex: "José Santos da Silva"
 *
 * // Gerar um nome do meio aleatório
 * console.log(nome.doMeio()); // Ex: "Santos"
 *
 * // Gerar um sobrenome aleatório
 * console.log(nome.sobrenome()); // Ex: "da Silva"
 */
export const nome = {

  /**
  * Gera um nome aleatório.
  * @returns {string} Um nome aleatório.
  */
  aleatorio() { return nomeAleatorioRand; },

  /**
  * Gera um nome aleatório completo.
  * @returns {string} Um nome aleatório completo.
  */
  aleatorioCompleto() { return `${nomeAleatorioRand} ${nomeDoMeioRand} ${sobrenomeRand}`; },

  /**
   * Gera um nome masculino aleatório.
   * @returns {string} Um nome masculino aleatório.
   */
  masculino() { return nomeMasculinoRand; },

  /**
   * Gera um nome masculino completo aleatório.
   * @returns {string} Um nome masculino completo aleatório.
   */
  masculinoCompleto() { return `${nomeMasculinoRand} ${nomeDoMeioRand} ${sobrenomeRand}`; },

  /**
   * Gera um nome feminino aleatório.
   * @returns {string} Um nome feminino aleatório.
   */
  feminino() { return nomeFemininoRand; },

  /**
   * Gera um nome feminino completo aleatório.
   * @returns {string} Um nome feminino completo aleatório.
   */
  femininoCompleto() { return `${nomeFemininoRand} ${nomeDoMeioRand} ${sobrenomeRand}`; },

  /**
   * Gera o nome da mãe aleatório.
   * @returns {string} O nome da mãe aleatório.
   */
  mae() { return `${nomeMaeRand}`; },

  /**
   * Gera o nome completo da mãe aleatório.
   * @returns {string} O nome completo da mãe aleatório.
   */
  maeCompleto() { return `${nomeMaeRand} ${nomeDoMeioRand} ${sobrenomeRand}`; },

  /**
   * Gera o nome do pai aleatório.
   * @returns {string} O nome do pai aleatório.
   */
  pai() { return `${nomePaiRand}`; },

  /**
   * Gera o nome completo do pai aleatório.
   * @returns {string} O nome completo do pai aleatório.
   */
  paiCompleto() { return `${nomePaiRand} ${nomeDoMeioRand} ${sobrenomeRand}`; },

  /**
   * Gera um nome do meio aleatório.
   * @returns {string} Um nome do meio aleatório.
   */
  doMeio() { return nomeDoMeioRand; },

  /**
   * Gera um sobrenome aleatório.
   * @returns {string} Um sobrenome aleatório.
   */
  sobrenome() { return sobrenomeRand; },
};
