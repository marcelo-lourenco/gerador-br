import { ok, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { orientacoesSexual } from '../data/db-general.js';
import { orientacaoSexual } from './index.js';

describe('orientacaoSexual', () => {
  test('should generate a valid sexual orientation', () => {
    const orientation = orientacaoSexual();
    strictEqual(
      orientation.length > 0,
      true,
      'The sexual orientation should have a length greater than 0.',
    );
  });
  test('should be a string', () => {
    strictEqual(typeof orientacaoSexual(), 'string', 'The sexual orientation should be a string.');
  });
  test('should be a valid sexual orientation', () => {
    ok(
      orientacoesSexual.includes(orientacaoSexual() as any),
      'The sexual orientation should be present in the list of valid sexual orientations.',
    );
  });
});
