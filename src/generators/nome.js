import { nomesFemininos, nomesMasculinos, nomesDoMeio, sobrenomes } from '../data/db-general.js';
import { getRandom } from '../utils.js';

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
 * // Gerar um nome aleatório completo
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
   * Um nome aleatório.
   * @returns {string} Retorna qualquer nome masculino ou feminino.
   */
  aleatorio() { return getRandom([...nomesFemininos, ...nomesMasculinos]); },

  /**
   * Um nome aleatório completo.
   * @returns {string} Retorna um nome completo aleatório.
   */
  aleatorioCompleto() {
    return `${this.aleatorio()} ${this.doMeio()} ${this.sobrenome()}`;
  },

  /**
   * Um nome masculino aleatório.
   * @returns {string} Retorna qualquer nome masculino, como "Abel", "Abner", etc.
   */
  masculino() { return getRandom(nomesMasculinos); },

  /**
   * Um nome masculino completo aleatório.
   * @returns {string} Retorna um nome masculino completo aleatório.
   */
  masculinoCompleto() {
    return `${this.masculino()} ${this.doMeio()} ${this.sobrenome()}`;
  },

  /**
   * Um nome feminino aleatório.
   * @returns {string} Retorna qualquer nome feminino, como "Ana", "Maria", etc.
   */
  feminino() { return getRandom(nomesFemininos); },

  /**
   * Um nome feminino completo aleatório.
   * @returns {string} Retorna um nome feminino completo aleatório.
   */
  femininoCompleto() {
    return `${this.feminino()} ${this.doMeio()} ${this.sobrenome()}`;
  },

  /**
   * Um nome da mãe aleatório.
   * @returns {string} Retorna qualquer nome feminino, como "Aaliyah", "Adelaide", etc.
   */
  mae() { return this.feminino(); },

  /**
   * Um nome completo da mãe aleatório.
   * @returns {string} Retorna um nome completo feminino aleatório.
   */
  maeCompleto() { return this.femininoCompleto(); },

  /**
   * Um nome do pai aleatório.
   * @returns {string} Retorna qualquer nome masculino, como "Abel", "Abner", etc.
   */
  pai() { return this.masculino(); },

  /**
   * Um nome completo do pai aleatório.
   * @returns {string} Retorna um nome completo masculino aleatório.
   */
  paiCompleto() { return this.masculinoCompleto(); },

  /**
   * Um nome do meio aleatório.
   * @returns {string} Retorna qualquer nome do meio, como "Alencar", "Almeida", etc.
   */
  doMeio() { return getRandom(nomesDoMeio); },

  /**
   * Um sobrenome aleatório.
   * @returns {string} Retorna qualquer sobrenome, como "Alves", "Amorim", etc.
   */
  sobrenome() { return getRandom(sobrenomes); }
};
