
import { describe, test } from 'node:test';
import { strictEqual, ok } from 'node:assert';
import { identidadePorOrientacao } from '../src/generators/identidade-por-orientacao.js';
import { identidadesPorOrientacao } from '../src/data/db-general.js';
import { orientacaoSexual } from '../src/generators/orientacao-sexual.js'


describe('identidadePorOrientacao', () => {
  test('should generate a valid gender identity based on the selected sexual orientation', () => {
    const identidade = identidadePorOrientacao();
    strictEqual(identidade.length > 0, true, 'The gender identity should have a length greater than 0.');
  });
  test('should be an array', () => {
    strictEqual(Array.isArray(identidadePorOrientacao()), false, 'The gender identity should be an array.');
  });
  test('should be a valid gender identity based on the selected sexual orientation', () => {
    const os = orientacaoSexual()
    ok(identidadesPorOrientacao[os].includes(identidadePorOrientacao(os)), 'The gender identity should be present in the list of valid gender identities for the selected sexual orientation.');
  });
});
