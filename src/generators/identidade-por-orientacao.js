import { identidadesPorOrientacao, orientacoesSexual } from '../data/db-general.js';
import { getRandom } from '../utils.js';

/**
 * Gera uma identidade de gênero associada à orientação sexual selecionada.
 *
 * @param {string} [orientacaoSexual] - A orientação sexual a ser associada à identidade de gênero. Se não fornecida, será escolhida aleatoriamente.
 * @returns {string} - Uma identidade de gênero associada à orientação sexual fornecida ou aleatória.
 * @example
 * console.log(identidadePorOrientacao('Heterossexual')); // Retorna uma identidade de gênero associada, como 'Cisgênero' ou 'Transgênero'.
 * console.log(identidadePorOrientacao('Homossexual'));   // Retorna uma identidade de gênero associada, como 'Cisgênero' ou 'Transgênero'.
 * console.log(identidadePorOrientacao('Bissexual'));     // Retorna uma identidade de gênero associada, como 'Cisgênero', 'Transgênero' ou 'Não binário'.
 * console.log(identidadePorOrientacao('Assexual'));      // Retorna uma identidade de gênero associada, como 'Cisgênero', 'Transgênero' ou 'Não binário'.
 * console.log(identidadePorOrientacao('Pansexual'));     // Retorna uma identidade de gênero associada, como 'Cisgênero', 'Transgênero' ou 'Não binário'.
 * console.log(identidadePorOrientacao());                // Retorna uma identidade de gênero aleatória associada a uma orientação sexual aleatória.
 */
export function identidadePorOrientacao(orientacaoSexual) {
  const orientacao = orientacaoSexual || getRandom(orientacoesSexual);
  return getRandom(identidadesPorOrientacao[orientacao]);
}