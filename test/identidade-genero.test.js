
import { describe, test } from 'node:test';
import { strictEqual, ok } from 'node:assert';
import { identidadeGenero } from '../src/generators/identidade-genero.js';
import { identidadesGenero } from '../src/data/db-general.js';

describe('identidadeGenero', () => {
  test('should generate a valid gender identity', () => {
    const identidade = identidadeGenero();
    strictEqual(identidade.length > 0, true, 'The gender identity should have a length greater than 0.');
  });
  test('should be a string', () => {
    strictEqual(typeof identidadeGenero(), 'string', 'The gender identity should be a string.');
  });
  test('should be a valid gender identity', () => {
    ok(identidadesGenero.includes(identidadeGenero()), 'The gender identity should be present in the list of valid gender identities.');
  });
});