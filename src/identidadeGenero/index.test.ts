import { ok, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { identidadesGenero } from '../data/db-general.js';
import { identidadeGenero } from './index.js';

describe('identidadeGenero', () => {
  test('should generate a valid gender identity', () => {
    const gender = identidadeGenero();
    strictEqual(
      gender.length > 0,
      true,
      'The gender identity should have a length greater than 0.',
    );
  });
  test('should be a string', () => {
    strictEqual(typeof identidadeGenero(), 'string', 'The gender identity should be a string.');
  });
  test('should be a valid gender identity', () => {
    ok(
      identidadesGenero.includes(identidadeGenero() as any),
      'The gender identity should be present in the list of valid gender identities.',
    );
  });
});
