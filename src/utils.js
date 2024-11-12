import {
  categoriasCnh,
  corPele,
  escolaridade,
  identidadesPorOrientacao,
  identidesGenero,
  nicknames,
  nomesDoMeio,
  nomesFemininos,
  nomesMasculinos,
  orientacaoSexual,
  palavras,
  profissao,
  provedoresEmail,
  siglasEstados,
  sobrenomes,
  tiposSanguineo,
} from './data/db-general.js';

/**
 * Retorna um número inteiro aleatório entre min (inclusive) e max (exclusivo).
 * @param {number} min - O limite inferior (inclusivo).
 * @param {number} max - O limite superior (exclusivo).
 * @returns {number} Um número inteiro aleatório entre min e max.
 */
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Retorna um elemento aleatório de um array.
 * @param {Array} arr - O array do qual deve ser extraído um elemento aleatório.
 * @returns {*} Um elemento aleatório do array.
 */
export const getRandom = (arr) => {
  const index = randomInt(0, arr.length); // Gera um índice aleatório no intervalo do array
  return arr[index];
};

/**
 * Indica se o dado deve ser mascarado.
 * @type {boolean}
 * @example
 * if (mask) {
 *   console.log("Dados mascarados.");
 * } else {
 *   console.log("Dados não mascarados.");
 * }
 */
export const mask = false;

/**
 * Uma sigla de estado aleatória.
 * @type {string}
 * @example
 * console.log(stateRand); // Retorna qualquer sigla de estado, como "SP", "RJ", etc.
 */
export const stateRand = getRandom(siglasEstados);

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
/**
 * Um apelido aleatório.
 * @type {string}
 * @example
 * console.log(apelidoRand); // Retorna qualquer apelido, como "Ace", "Alpha", etc.
 */

export const apelidoRand = getRandom(nicknames);

/**
 * Um provedor de email aleatório.
 * @type {string}
 * @example
 * console.log(provedorEmailRand); // Retorna qualquer provedor de email, como:
 * "@gmail.com", "@yahoo.com", etc.
 */
export const provedorEmailRand = getRandom(provedoresEmail);

/**
 * Uma palavra aleatória.
 * @type {string}
 * @example
 * console.log(palavraRand); // Retorna qualquer palavra, como "lorem", "ipsum", etc.
 */
export const palavraRand = getRandom(palavras);

/**
 * Uma orientação sexual aleatória.
 * @type {string}
 * @example
 * console.log(orientacaoSexualRand); // Retorna qualquer orientação sexual, como:
 * "Heterossexual", "Homossexual", etc.
 */
export const orientacaoSexualRand = getRandom(orientacaoSexual);

/**
 * Uma identidade de gênero aleatória.
 * @type {string}
 * @example
 * console.log(identidadeGeneroRand); // Retorna qualquer identidade de gênero, como:
 * "Cisgênero", "Transgênero", etc.
 */
export const identidadeGeneroRand = getRandom(identidesGenero);

/**
 * Identidade de gênero associada à orientação sexual selecionada.
 * @type {string[]}
 * @example
 * console.log(identidadePorOrientacaoRand); // Retorna uma lista de identidades de gênero como:
 * ["Cisgênero", "Transgênero"].
 */
export const identidadePorOrientacaoRand = identidadesPorOrientacao[orientacaoSexualRand];

/**
 * Uma raça ou cor aleatória.
 * @type {string}
 * @example
 * console.log(corPeleRand); // Retorna qualquer raça ou cor, como "Branca", "Preta", etc.
 */
export const corPeleRand = getRandom(corPele);

/**
 * Um tipo sanguíneo aleatório.
 * @type {string}
 * @example
 * console.log(tipoSanguineoRand); // Retorna qualquer tipo sanguíneo, como "A+", "O-", etc.
 */
export const tipoSanguineoRand = getRandom(tiposSanguineo);

/**
 * Uma categoria de CNH aleatória.
 * @type {string}
 * @example
 * console.log(categoriaCnhRand); // Retorna qualquer categoria de CNH, como "A", "B", "C", etc.
 */
export const categoriaCnhRand = getRandom(categoriasCnh);

/**
 * Uma profissão aleatória.
 * @type {string}
 * @example
 * console.log(profissaoRand); // Retorna qualquer profissão, como "Engenheiro", "Médico", "Professor", etc.
 */
export const profissaoRand = getRandom(profissao);

/**
 * Uma escolaridade aleatória.
 * @type {string}
 * @example
 * console.log(escolaridadeRand); // Retorna qualquer nível de escolaridade, como "Ensino Médio Completo", "Doutorado", "Pós-graduação", etc.
 */
export const escolaridadeRand = getRandom(escolaridade);
