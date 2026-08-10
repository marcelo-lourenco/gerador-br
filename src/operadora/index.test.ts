import { ok, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { codigoOperadora, operators } from './index.js';

describe('Operadora Generator', () => {
  test('should generate a random operator code', () => {
    const code = codigoOperadora();
    strictEqual(typeof code, 'number');
    ok(code > 0);
  });

  test('should generate a valid operator code for a given operator name', () => {
    const code = codigoOperadora('Claro');
    ok(operators.Claro!.includes(code));
  });

  test('should return a random operator code if the operator name is invalid', () => {
    const code = codigoOperadora('invalid');
    strictEqual(typeof code, 'number');
    ok(code > 0);
  });
});
