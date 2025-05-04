import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { endereco } from '../src/generators/endereco.js';

describe('Endereço Generator', () => {
  test('should generate a valid address with mask', () => {
    const addressWithMask = endereco(true);
    strictEqual(addressWithMask.cep.length, 9);
    strictEqual(addressWithMask.cep.slice(5, 6), '-');
    strictEqual(typeof addressWithMask.logradouro, 'string');
    strictEqual(typeof addressWithMask.numero, 'string');
    strictEqual(typeof addressWithMask.complemento, 'string');
    strictEqual(typeof addressWithMask.bairro, 'string');
    strictEqual(typeof addressWithMask.localidade, 'string');
    strictEqual(typeof addressWithMask.estado, 'string');
  });

  test('should generate a valid address without mask', () => {
    const addressWithoutMask = endereco(false);
    strictEqual(addressWithoutMask.cep.length, 8);
    strictEqual(addressWithoutMask.cep.includes('-'), false);
    strictEqual(typeof addressWithoutMask.logradouro, 'string');
    strictEqual(typeof addressWithoutMask.numero, 'string');
    strictEqual(typeof addressWithoutMask.complemento, 'string');
    strictEqual(typeof addressWithoutMask.bairro, 'string');
    strictEqual(typeof addressWithoutMask.localidade, 'string');
    strictEqual(typeof addressWithoutMask.estado, 'string');
  });

  test('should generate a valid address for a specific state with mask', () => {
    const addressWithMaskForSP = endereco(true, 'SP');
    strictEqual(addressWithMaskForSP.cep.length, 9);
    strictEqual(addressWithMaskForSP.cep.slice(5, 6), '-');
    strictEqual(typeof addressWithMaskForSP.logradouro, 'string');
    strictEqual(typeof addressWithMaskForSP.numero, 'string');
    strictEqual(typeof addressWithMaskForSP.complemento, 'string');
    strictEqual(typeof addressWithMaskForSP.bairro, 'string');
    strictEqual(typeof addressWithMaskForSP.localidade, 'string');
    strictEqual(addressWithMaskForSP.estado, 'SP');
  });

  test('should generate a valid address for a specific state without mask', () => {
    const addressWithoutMaskForSP = endereco(false, 'SP');
    strictEqual(addressWithoutMaskForSP.cep.length, 8);
    strictEqual(addressWithoutMaskForSP.cep.includes('-'), false);
    strictEqual(typeof addressWithoutMaskForSP.logradouro, 'string');
    strictEqual(typeof addressWithoutMaskForSP.numero, 'string');
    strictEqual(typeof addressWithoutMaskForSP.complemento, 'string');
    strictEqual(typeof addressWithoutMaskForSP.bairro, 'string');
    strictEqual(typeof addressWithoutMaskForSP.localidade, 'string');
    strictEqual(addressWithoutMaskForSP.estado, 'SP');
  });
});
