import {
  siglasEstados,
  nomesMasculinos,
  nomesFemininos,
  nomesDoMeio,
  sobrenomes,
  nicknames,
  provedoresEmail,
  palavras,
  orientacaoSexual,
  identidesGenero,
  identidadesPorOrientacao,
  corPele,
  tiposSanguineo,
  categoriasCnh,
} from '../lib/db-general.js';


/**
 * Retorna um elemento aleatório de um array.
 * @param {Array} arr - O array do qual deve ser extraído um elemento aleatório.
 * @returns {*} Um elemento aleatório do array.
 */
export const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

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
 * console.log(stateRand); // Pode exibir qualquer sigla de estado, como "SP", "RJ", etc.
 */
export const stateRand = getRandom(siglasEstados);

/**
 * Um nome masculino aleatório.
 * @type {string}
 * @example
 * console.log(nomeMasculinoRand); // Pode exibir qualquer nome masculino, como "Abel", "Abner", etc.
 */
export const nomeMasculinoRand = getRandom(nomesMasculinos);

/**
 * Um nome feminino aleatório.
 * @type {string}
 * @example
 * console.log(nomeFemininoRand); // Pode exibir qualquer nome feminino, como "Aaliyah", "Adelaide", etc.
 */
export const nomeFemininoRand = getRandom(nomesFemininos);

/**
 * Um nome do meio aleatório.
 * @type {string}
 * @example
 * console.log(nomeDoMeioRand); // Pode exibir qualquer nome do meio, como "Alencar", "Almeida", etc.
 */
export const nomeDoMeioRand = getRandom(nomesDoMeio);

/**
 * Um sobrenome aleatório.
 * @type {string}
 * @example
 * console.log(sobrenomeRand); // Pode exibir qualquer sobrenome, como "Alves", "Amorim", etc.
 */
export const sobrenomeRand = getRandom(sobrenomes);

/**
 * Um nome do pai aleatório.
 * @type {string}
 * @example
 * console.log(nomePaiRand); // Pode exibir qualquer nome masculino, como "Abel", "Abner", etc.
 */
export const nomePaiRand = getRandom(nomesMasculinos);

/**
 * Um nome da mãe aleatório.
 * @type {string}
 * @example
 * console.log(nomeMaeRand); // Pode exibir qualquer nome feminino, como "Aaliyah", "Adelaide", etc.
 */
export const nomeMaeRand = getRandom(nomesFemininos);

/**
 * Um apelido aleatório.
 * @type {string}
 * @example
 * console.log(apelidoRand); // Pode exibir qualquer apelido, como "Ace", "Alpha", etc.
 */
export const apelidoRand = getRandom(nicknames);

/**
 * Um provedor de email aleatório.
 * @type {string}
 * @example
 * console.log(provedorEmailRand); // Pode exibir qualquer provedor de email, como "@gmail.com", "@yahoo.com", etc.
 */
export const provedorEmailRand = getRandom(provedoresEmail);

/**
 * Uma palavra aleatória.
 * @type {string}
 * @example
 * console.log(palavraRand); // Pode exibir qualquer palavra, como "lorem", "ipsum", etc.
 */
export const palavraRand = getRandom(palavras);

/**
 * Uma orientação sexual aleatória.
 * @type {string}
 * @example
 * console.log(orientacaoSexualRand); // Pode exibir qualquer orientação sexual, como "Heterossexual", "Homossexual", etc.
 */
export const orientacaoSexualRand = getRandom(orientacaoSexual);

/**
 * Uma identidade de gênero aleatória.
 * @type {string}
 * @example
 * console.log(identidadeGeneroRand); // Pode exibir qualquer identidade de gênero, como "Cisgênero", "Transgênero", etc.
 */
export const identidadeGeneroRand = getRandom(identidesGenero);

/**
 * Identidade de gênero associada à orientação sexual selecionada.
 * @type {string[]}
 * @example
 * console.log(identidadePorOrientacaoRand); // Pode exibir uma lista de identidades de gênero como ["Cisgênero", "Transgênero"].
 */
export const identidadePorOrientacaoRand = identidadesPorOrientacao[orientacaoSexualRand];

/**
 * Uma raça ou cor aleatória.
 * @type {string}
 * @example
 * console.log(corPeleRand); // Pode exibir qualquer raça ou cor, como "Branca", "Preta", etc.
 */
export const corPeleRand = getRandom(corPele);

/**
 * Um tipo sanguíneo aleatório.
 * @type {string}
 * @example
 * console.log(tipoSanguineoRand); // Pode exibir qualquer tipo sanguíneo, como "A+", "O-", etc.
 */
export const tipoSanguineoRand = getRandom(tiposSanguineo);

/**
 * Uma categoria de CNH aleatória.
 * @type {string}
 * @example
 * console.log(categoriaCnhRand); // Pode exibir qualquer categoria de CNH, como "A", "B", "C", etc.
 */
export const categoriaCnhRand = getRandom(categoriasCnh);
