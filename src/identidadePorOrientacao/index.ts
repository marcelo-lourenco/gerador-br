import { identidadesPorOrientacao, orientacoesSexual } from '../data/db-general.js';
import { getRandom } from '../utils/index.js';

/**
 * Gera uma identidade de gênero associada à orientação sexual selecionada.
 *
 * @param orientacaoSexual - A orientação sexual a ser associada à identidade de gênero.
 * @returns Uma identidade de gênero associada à orientação sexual fornecida ou aleatória.
 * @example
 * console.log(identidadePorOrientacao('Heterossexual'));
 */
export function identidadePorOrientacao(orientacaoSexual?: string): string {
  const orientacao =
    orientacaoSexual && identidadesPorOrientacao[orientacaoSexual]
      ? orientacaoSexual
      : getRandom(orientacoesSexual);
  const list = identidadesPorOrientacao[orientacao] || identidadesPorOrientacao.Heterossexual!;
  return getRandom(list);
}
