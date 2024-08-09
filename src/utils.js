import db from '../lib/db-general.js';

/**
 * Retorna um elemento aleatório de um array.
 * @param {Array} arr - O array do qual deve ser extraído um elemento aleatório.
 * @returns {*} Um elemento aleatório do array.
 * @example
 * const numeros = [1, 2, 3, 4, 5];
 * const numeroAleatorio = getRandom(numeros);
 * console.log(numeroAleatorio); // Pode exibir qualquer número entre 1 e 5
 */
export const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

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
 * console.log(uf); // Pode exibir qualquer sigla de estado, como "SP", "RJ", etc.
 */
export const stateRand = getRandom(db.siglasEstados);

/**
 * Um nome masculino aleatório.
 * @type {string}
 * @example
 * console.log(nomeMasculino); // Pode exibir qualquer nome masculino, como "Abel", "Abner", etc.
 */
export const nomeMasculino = getRandom(db.nomesMasculinos);

/**
 * Um nome feminino aleatório.
 * @type {string}
 * @example
 * console.log(nomeFeminino); // Pode exibir qualquer nome feminino, como "Aaliyah", "Adelaide", etc.
 */
export const nomeFeminino = getRandom(db.nomesFemininos);

/**
 * Um nome do meio aleatório.
 * @type {string}
 * @example
 * console.log(nomeDoMeio); // Pode exibir qualquer nome do meio, como "Alencar", "Almeida", etc.
 */
export const nomeDoMeio = getRandom(db.nomesDoMeio);

/**
 * Um sobrenome aleatório.
 * @type {string}
 * @example
 * console.log(sobrenome); // Pode exibir qualquer sobrenome, como "Alves", "Amorim", etc.
 */
export const sobrenome = getRandom(db.sobrenomes);

/**
 * Um apelido (nickname) aleatório.
 * @type {string}
 * @example
 * console.log(nickname); // Pode exibir qualquer apelido, como "Ace", "Alpha", etc.
 */
export const nickname = getRandom(db.nicknames);

/**
 * Um provedor de email aleatório.
 * @type {string}
 * @example
 * console.log(provedorEmail); // Pode exibir qualquer provedor de email, como "@gmail.com", "@yahoo.com", etc.
 */
export const provedorEmail = getRandom(db.provedoresEmail);

/**
 * Uma palavra aleatória.
 * @type {string}
 * @example
 * console.log(palavra); // Pode exibir qualquer palavra, como "lorem", "ipsum", etc.
 */
export const palavra = getRandom(db.palavras);

/**
 * Uma orientação sexual aleatória.
 * @type {string}
 * @example
 * console.log(orientacaoSexual); // Pode exibir qualquer orientação sexual, como "Heterossexual", "Homossexual", etc.
 */
export const orientacaoSexual = getRandom(db.orientacaoSexual);

/**
 * Uma identidade de gênero aleatória.
 * @type {string}
 * @example
 * console.log(identidadeGenero); // Pode exibir qualquer identidade de gênero, como "Cisgênero", "Transgênero", etc.
 */
export const identidadeGenero = getRandom(db.identidesGenero);

/**
 * Identidade de gênero associada à orientação sexual selecionada.
 * @type {string[]}
 * @example
 * console.log(identidadePorOrientacao); // Pode exibir uma lista de identidades de gênero como ["Cisgênero", "Transgênero"].
 */
export const identidadePorOrientacao = db.identidadesPorOrientacao[orientacaoSexual];

/**
 * Uma raça ou cor aleatória.
 * @type {string}
 * @example
 * console.log(racaCor); // Pode exibir qualquer raça ou cor, como "Branca", "Preta", etc.
 */
export const racaCor = getRandom(db.racaCor);

/**
 * Um tipo sanguíneo aleatório.
 * @type {string}
 * @example
 * console.log(tipoSanguineo); // Pode exibir qualquer tipo sanguíneo, como "A+", "O-", etc.
 */
export const tipoSanguineo = getRandom(db.tiposSanguineo);

/**
 * Uma categoria de CNH aleatória.
 * @type {string}
 * @example
 * console.log(categoriaCnh); // Pode exibir qualquer categoria de CNH, como "A", "B", "C", etc.
 */
export const categoriaCnh = getRandom(db.categoriasCnh);
