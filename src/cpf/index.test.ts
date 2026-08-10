import { strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { cpf } from './index.js';

describe('CPF Generator', () => {
  test('should generate a valid CPF with mask', () => {
    const cpfWithMask = cpf(true, 'SP');
    strictEqual(cpfWithMask.length, 14);
    strictEqual(cpfWithMask.match(/\d/g)!.length, 11);
    strictEqual(cpfWithMask.match(/\./g)!.length, 2);
    strictEqual(cpfWithMask.match(/-/g)!.length, 1);
  });

  test('should generate a valid CPF without mask', () => {
    const cpfWithoutMask = cpf(false, 'RJ');
    strictEqual(cpfWithoutMask.length, 11);
    strictEqual(cpfWithoutMask.match(/\d/g)!.length, 11);
  });

  test('should generate a valid CPF with random state', () => {
    const cpfWithRandomState = cpf(true);
    strictEqual(cpfWithRandomState.length, 14);
    strictEqual(cpfWithRandomState.match(/\d/g)!.length, 11);
    strictEqual(cpfWithRandomState.match(/\./g)!.length, 2);
    strictEqual(cpfWithRandomState.match(/-/g)!.length, 1);
  });

  test('should generate a valid CPF with a specific state', () => {
    const cpfWithSpecificState = cpf(true, 'MG');
    strictEqual(cpfWithSpecificState.length, 14);
    strictEqual(cpfWithSpecificState.match(/\d/g)!.length, 11);
    strictEqual(cpfWithSpecificState.match(/\./g)!.length, 2);
    strictEqual(cpfWithSpecificState.match(/-/g)!.length, 1);
  });
});
