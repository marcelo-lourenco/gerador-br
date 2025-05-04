import { describe, test } from 'node:test';
import { strictEqual, deepStrictEqual } from 'node:assert';
import { banco, listaCodigosBancos } from '../src/generators/banco.js';

// Exemplo de dados esperados (ajuste conforme necessário)
const expectedBanks = {
  1: {
    codigoBanco: '1',
    razaoSocial: 'BANCO DO BRASIL S.A.',
    nomeBanco: 'BANCO DO BRASIL S.A.',
    ispb: '00000000',
  },
  77: {
    codigoBanco: '77',
    razaoSocial: 'BANCO INTER S.A.',
    nomeBanco: 'BANCO INTER',
    ispb: '00416968',
  },
  422: {
    codigoBanco: '422',
    nomeBanco: 'BANCO SAFRA S.A.',
    razaoSocial: 'BANCO SAFRA S.A.',
    ispb: '58160789',
  },
};

describe('banco', () => {
  test('Should return a random bank when no code is provided', () => {
    const result = banco();
    const bankCodes = listaCodigosBancos();
    console.log(result)
    console.log(bankCodes)
    strictEqual(bankCodes.includes(Number(result.codigoBanco)), true);
  });

  test('Must return Banco do Brasil data when code 1 is provided', () => {
    const result = banco(1);
    deepStrictEqual(result, expectedBanks[1]);
  });

  test('Must return Inter data when code 77 is provided', () => {
    const result = banco(77);
    deepStrictEqual(result, expectedBanks[77]);
  });

  test('Must return Safra data when code 422 is provided', () => {
    const result = banco(422);
    deepStrictEqual(result, expectedBanks[422]);
  });

  test('Should return a random bank when an invalid code is provided', () => {
    const result = banco(999);
    const bankCodes = listaCodigosBancos();
    strictEqual(bankCodes.includes(Number(result.codigoBanco)), true);
  });
});

describe('listaCodigosBancos', () => {
  test('Should return a list of bank codes', () => {
    const result = listaCodigosBancos();
    strictEqual(Array.isArray(result), true);
    strictEqual(result.length > 0, true);
  });
});
