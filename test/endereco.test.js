import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { enderecoFnc, endereco } from '../src/generators/endereco.js';

describe('Endereço Generator', () => {
  test('should generate a valid address with mask', () => {
    const addressWithMask = enderecoFnc(true, 'SP');
    strictEqual(addressWithMask.cep.length, 9); // 5 digits + 1 hyphen + 3 digits
    strictEqual(addressWithMask.logradouro.length > 0, true);
    strictEqual(addressWithMask.numero >= 0 && addressWithMask.numero <= 999, true);
    strictEqual(addressWithMask.bairro.length > 0, true);
    strictEqual(addressWithMask.localidade.length > 0, true);
    strictEqual(addressWithMask.estado, 'SP');
  });

  test('should generate a valid address without mask', () => {
    const addressWithoutMask = enderecoFnc(false, 'RJ');
    strictEqual(addressWithoutMask.cep.length, 8); // 8 digits
    strictEqual(addressWithoutMask.logradouro.length > 0, true);
    strictEqual(addressWithoutMask.numero >= 0 && addressWithoutMask.numero <= 999, true);
    strictEqual(addressWithoutMask.bairro.length > 0, true);
    strictEqual(addressWithoutMask.localidade.length > 0, true);
    strictEqual(addressWithoutMask.estado, 'RJ');
  });

  test('should generate a valid address with random state', () => {
    const addressWithRandomState = enderecoFnc(true);
    strictEqual(addressWithRandomState.cep.length, 9); // 5 digits + 1 hyphen + 3 digits
    strictEqual(addressWithRandomState.logradouro.length > 0, true);
    strictEqual(addressWithRandomState.numero >= 0 && addressWithRandomState.numero <= 999, true);
    strictEqual(addressWithRandomState.bairro.length > 0, true);
    strictEqual(addressWithRandomState.localidade.length > 0, true);
    strictEqual(addressWithRandomState.estado.length, 2); // State acronym
  });

  test('should generate a valid address with a specific state', () => {
    const addressWithSpecificState = enderecoFnc(true, 'MG');
    strictEqual(addressWithSpecificState.cep.length, 9); // 5 digits + 1 hyphen + 3 digits
    strictEqual(addressWithSpecificState.logradouro.length > 0, true);
    strictEqual(addressWithSpecificState.numero >= 0 && addressWithSpecificState.numero <= 999, true);
    strictEqual(addressWithSpecificState.bairro.length > 0, true);
    strictEqual(addressWithSpecificState.localidade.length > 0, true);
    strictEqual(addressWithSpecificState.estado, 'MG');
  });

  test('should have a valid pre-defined address', () => {
    strictEqual(endereco.cep.length, 8); // 8 digits
    strictEqual(endereco.logradouro.length > 0, true);
    strictEqual(endereco.numero >= 0 && endereco.numero <= 999, true);
    strictEqual(endereco.bairro.length > 0, true);
    strictEqual(endereco.localidade.length > 0, true);
    strictEqual(endereco.estado.length, 2); // State acronym
  });
});
