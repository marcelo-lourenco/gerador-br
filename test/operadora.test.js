import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { codigoOperadora } from '../src/generators/operadora.js';

describe('Operadora Generator', () => {
  test('should generate a random operator code', () => {
    const code = codigoOperadora();
    strictEqual(typeof code, 'number');
    strictEqual(code > 0, true);
  });

  test('should generate a valid operator code for a given operator name', () => {
    const operators = ['Claro', 'Oi', 'Tim', 'Vivo'];
    operators.forEach((operator) => {
      const code = codigoOperadora(operator);
      strictEqual(typeof code, 'number');
      strictEqual(code > 0, true);
    });
  });

  test('should return a random operator code if the operator name is invalid', () => {
    const code = codigoOperadora('InvalidOperator');
    strictEqual(typeof code, 'number');
    strictEqual(code > 0, true);
  });
});
