import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';

// Este teste garante validar funcionalidade Gerar CPF

import { cpf } from '../src/generators/cpf.js';

describe('CPF Generator', () => {
  test('should generate a valid CPF with mask', () => {
    const cpfWithMask = cpf(true, 'SP');
    strictEqual(cpfWithMask.length, 14); // 11 digits + 3 separators + 1 hyphen
    strictEqual(cpfWithMask.match(/\d/g).length, 11); // 11 digits
    strictEqual(cpfWithMask.match(/\./g).length, 2); // 2 dots
    strictEqual(cpfWithMask.match(/-/g).length, 1); // 1 hyphen
  });

  test('should generate a valid CPF without mask', () => {
    const cpfWithoutMask = cpf(false, 'RJ');
    strictEqual(cpfWithoutMask.length, 11); // 11 digits
    strictEqual(cpfWithoutMask.match(/\d/g).length, 11); // 11 digits
  });

  test('should generate a valid CPF with random state', () => {
    const cpfWithRandomState = cpf(true);
    strictEqual(cpfWithRandomState.length, 14); // 11 digits + 3 separators + 1 hyphen
    strictEqual(cpfWithRandomState.match(/\d/g).length, 11); // 11 digits
    strictEqual(cpfWithRandomState.match(/\./g).length, 2); // 2 dots
    strictEqual(cpfWithRandomState.match(/-/g).length, 1); // 1 hyphen
  });

  test('should generate a valid CPF with a specific state', () => {
    const cpfWithSpecificState = cpf(true, 'MG');
    strictEqual(cpfWithSpecificState.length, 14); // 11 digits + 3 separators + 1 hyphen
    strictEqual(cpfWithSpecificState.match(/\d/g).length, 11); // 11 digits
    strictEqual(cpfWithSpecificState.match(/\./g).length, 2); // 2 dots
    strictEqual(cpfWithSpecificState.match(/-/g).length, 1); // 1 hyphen
  });
});
