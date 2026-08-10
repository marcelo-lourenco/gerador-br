import { match, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { endereco } from './index.js';

describe('Endereco Generator', () => {
  test('should generate a valid address without mask by default', () => {
    const res = endereco();
    strictEqual(typeof res.logradouro, 'string');
    strictEqual(typeof res.bairro, 'string');
    strictEqual(typeof res.localidade, 'string');
    strictEqual(typeof res.estado, 'string');
    match(res.cep, /^\d{8}$/);
  });

  test('should generate a valid address with mask', () => {
    const res = endereco(true);
    match(res.cep, /^\d{5}-\d{3}$/);
  });

  test('should generate a valid address for specific state', () => {
    const res = endereco(true, 'SP');
    strictEqual(res.estado, 'SP');
    match(res.cep, /^\d{5}-\d{3}$/);
  });
});
