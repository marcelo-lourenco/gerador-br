
import { describe, test } from 'node:test';
import { strictEqual, ok } from 'node:assert';
import { orientacaoSexual } from '../src/generators/orientacao-sexual.js';
import { orientacoesSexual } from '../src/data/db-general.js';

describe('orientacaoSexualRand', () => {
  test('should generate a valid sexual orientation', () => {
    const orientacao = orientacaoSexual();
    strictEqual(orientacao.length > 0, true, 'The sexual orientation should have a length greater than 0.');
  });
  test('should be a string', () => {
    strictEqual(typeof orientacaoSexual(), 'string', 'The sexual orientation should be a string.');
  });
  test('should be a valid sexual orientation', () => {
    ok(orientacoesSexual.includes(orientacaoSexual()), 'The sexual orientation should be present in the list of valid sexual orientations.');
  });
});