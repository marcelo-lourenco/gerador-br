import { nomesDoMeio, nomesFemininos, nomesMasculinos, sobrenomes } from '../data/db-general.js';
import { getRandom } from '../utils/index.js';

/**
 * Objeto com geradores de nomes aleatórios.
 */
export const nome = {
  /**
   * Um nome aleatório (masculino ou feminino).
   */
  aleatorio(): string {
    return getRandom([...nomesFemininos, ...nomesMasculinos]);
  },

  /**
   * Um nome aleatório completo.
   */
  aleatorioCompleto(): string {
    return `${this.aleatorio()} ${this.doMeio()} ${this.sobrenome()}`;
  },

  /**
   * Um nome masculino aleatório.
   */
  masculino(): string {
    return getRandom(nomesMasculinos);
  },

  /**
   * Um nome masculino completo aleatório.
   */
  masculinoCompleto(): string {
    return `${this.masculino()} ${this.doMeio()} ${this.sobrenome()}`;
  },

  /**
   * Um nome feminino aleatório.
   */
  feminino(): string {
    return getRandom(nomesFemininos);
  },

  /**
   * Um nome feminino completo aleatório.
   */
  femininoCompleto(): string {
    return `${this.feminino()} ${this.doMeio()} ${this.sobrenome()}`;
  },

  /**
   * Um nome da mãe aleatório.
   */
  mae(): string {
    return this.feminino();
  },

  /**
   * Um nome completo da mãe aleatório.
   */
  maeCompleto(): string {
    return this.femininoCompleto();
  },

  /**
   * Um nome do pai aleatório.
   */
  pai(): string {
    return this.masculino();
  },

  /**
   * Um nome completo do pai aleatório.
   */
  paiCompleto(): string {
    return this.masculinoCompleto();
  },

  /**
   * Um nome do meio aleatório.
   */
  doMeio(): string {
    return getRandom(nomesDoMeio);
  },

  /**
   * Um sobrenome aleatório.
   */
  sobrenome(): string {
    return getRandom(sobrenomes);
  },
};
