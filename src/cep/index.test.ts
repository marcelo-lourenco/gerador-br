import { match, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { cep } from './index.js';

describe('CEP Generator', () => {
  test('should generate a valid CEP without mask by default', () => {
    const cepValue = cep();
    strictEqual(cepValue.length, 8);
    match(cepValue, /^\d{8}$/);
  });

  test('should generate a valid CEP with mask when mask parameter is true', () => {
    const cepValue = cep(true);
    match(cepValue, /^\d{5}-\d{3}$/);
  });

  test('should generate a valid CEP for a specific state', () => {
    const cepValue = cep(false, 'SP');
    strictEqual(cepValue.length, 8);
    match(cepValue, /^\d{8}$/);
  });
});
