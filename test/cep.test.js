import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { cep } from '../src/generators/cep.js';

describe('CEP Generator', () => {
  test('should generate a valid CEP with mask', () => {
    const cepWithMask = cep(true);
    strictEqual(cepWithMask.length, 9);
    strictEqual(cepWithMask.slice(5, 6), '-');
  });

  test('should generate a valid CEP without mask', () => {
    const cepWithoutMask = cep(false);
    strictEqual(cepWithoutMask.length, 8);
    strictEqual(cepWithoutMask.includes('-'), false);
  });

  test('should generate a valid CEP for a specific state with mask', () => {
    const cepWithMaskForSP = cep(true, 'SP');
    strictEqual(cepWithMaskForSP.length, 9);
    strictEqual(cepWithMaskForSP.slice(5, 6), '-');
  });

  test('should generate a valid CEP for a specific state without mask', () => {
    const cepWithoutMaskForSP = cep(false, 'SP');
    strictEqual(cepWithoutMaskForSP.length, 8);
    strictEqual(cepWithoutMaskForSP.includes('-'), false);
  });
});
