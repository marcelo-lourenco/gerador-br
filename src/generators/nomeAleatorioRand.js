import { nomesFemininos, nomesMasculinos, nomesDoMeio, sobrenomes } from '../data/db-general';
import { getRandom } from '../utils';

/**
 * Um nome aleatório.
 * @type {string}
 * @example
 * console.log(nomeAleatorio); // Retorna qualquer nome masculino ou feminino.
 */

export const nomeAleatorioRand = getRandom([...nomesFemininos, ...nomesMasculinos]);
/**
 * Um nome masculino aleatório.
 * @type {string}
 * @example
 * console.log(nomeMasculinoRand); // Retorna qualquer nome masculino, como "Abel", "Abner", etc.
 */

export const nomeMasculinoRand = getRandom(nomesMasculinos);
/**
 * Um nome feminino aleatório.
 * @type {string}
 * @example
 * console.log(nomeFemininoRand); // Retorna qualquer nome feminino, como "Ana", "Maria", etc.
 */

export const nomeFemininoRand = getRandom(nomesFemininos);
/**
 * Um nome do meio aleatório.
 * @type {string}
 * @example
 * console.log(nomeDoMeioRand); // Retorna qualquer nome do meio, como "Alencar", "Almeida", etc.
 */

export const nomeDoMeioRand = getRandom(nomesDoMeio);
/**
 * Um sobrenome aleatório.
 * @type {string}
 * @example
 * console.log(sobrenomeRand); // Retorna qualquer sobrenome, como "Alves", "Amorim", etc.
 */

export const sobrenomeRand = getRandom(sobrenomes);
/**
 * Um nome do pai aleatório.
 * @type {string}
 * @example
 * console.log(nomePaiRand); // Retorna qualquer nome masculino, como "Abel", "Abner", etc.
 */

export const nomePaiRand = getRandom(nomesMasculinos);
/**
 * Um nome da mãe aleatório.
 * @type {string}
 * @example
 * console.log(nomeMaeRand); // Retorna qualquer nome feminino, como "Aaliyah", "Adelaide", etc.
 */

export const nomeMaeRand = getRandom(nomesFemininos);
export const aleatorioCompleto = () => { return `${nomeAleatorioRand} ${nomeDoMeioRand} ${sobrenomeRand}`; };
