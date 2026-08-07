import { ok, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { identidadePorOrientacao } from './index.js';

describe('identidadePorOrientacao', () => {
  test('should generate a valid gender identity based on the selected sexual orientation', () => {
    const genderIdentity = identidadePorOrientacao('Heterossexual');
    strictEqual(typeof genderIdentity, 'string');
    ok(genderIdentity.length > 0);
  });

  test('should generate a valid gender identity with no orientation provided', () => {
    const genderIdentity = identidadePorOrientacao();
    strictEqual(typeof genderIdentity, 'string');
    ok(genderIdentity.length > 0);
  });
});
