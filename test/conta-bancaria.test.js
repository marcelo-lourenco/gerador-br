import { describe, test } from 'node:test';
import { strictEqual, ok } from 'node:assert';
import { contaBancaria } from '../src/generators/conta-bancaria.js';

describe('Conta Bancária Generator', () => {
  test('should generate a valid Banco do Brasil account', () => {
    const account = contaBancaria('Banco do Brasil');
    strictEqual(account.codigoBanco, '1');
    strictEqual(account.nomeBanco, 'Banco do Brasil');
    // Assert agency and account format
    ok(account.agencia.length <= 5, true);
    ok(account.conta.length <= 10, true);
    // Assert DV presence
    ok(account.agenciaDv.length <= 1, true);
    ok(account.contaDv.length <= 1, true);
  });

  test('should generate a valid Bradesco account', () => {
    const account = contaBancaria('Bradesco');
    strictEqual(account.codigoBanco, '237');
    strictEqual(account.nomeBanco, 'Bradesco');
    // Assert agency and account format
    ok(account.agencia.length <= 5, true);
    ok(account.conta.length <= 8, true);
    // Assert DV presence
    ok(account.agenciaDv.length <= 1, true);
    ok(account.contaDv.length <= 1, true);
  });

  test('should generate a valid Caixa account', () => {
    const account = contaBancaria('Caixa');
    strictEqual(account.codigoBanco, '104');
    strictEqual(account.nomeBanco, 'Caixa');
    // Assert agency and account format
    ok(account.agencia.length <= 4, true);
    ok(account.conta.length <= 13, true);
    // Assert DV presence
    strictEqual(account.agenciaDv.length, 0);
    ok(account.contaDv.length <= 1, true);
  });

  test('should generate a valid Citibank account', () => {
    const account = contaBancaria('Citibank');
    strictEqual(account.codigoBanco, '745');
    strictEqual(account.nomeBanco, 'Citibank');
    // Assert agency and account format
    ok(account.agencia.length <= 5, true);
    ok(account.conta.length <= 9, true);
    // Assert DV presence
    strictEqual(account.agenciaDv.length, 0);
    ok(account.contaDv.length <= 1, true);
  });

  test('should generate a valid HSBC account', () => {
    const account = contaBancaria('HSBC');
    strictEqual(account.codigoBanco, '296');
    strictEqual(account.nomeBanco, 'HSBC');
    // Assert agency and account format
    ok(account.agencia.length <= 8, true);
    ok(account.conta.length <= 8, true);
    // Assert DV presence
    strictEqual(account.agenciaDv.length, 0);
    ok(account.contaDv.length <= 1, true);
  });

  test('should generate a valid Itaú account', () => {
    const account = contaBancaria('Itaú');
    strictEqual(account.codigoBanco, '341');
    strictEqual(account.nomeBanco, 'Itaú');
    // Assert agency and account format
    ok(account.agencia.length <= 4, true);
    ok(account.conta.length <= 11, true);
    // Assert DV presence
    strictEqual(account.agenciaDv.length, 0);
    ok(account.contaDv.length <= 1, true);
  });

  test('should generate a valid Santander account', () => {
    const account = contaBancaria('Santander');
    strictEqual(account.codigoBanco, '33');
    strictEqual(account.nomeBanco, 'Santander');
    // Assert agency and account format
    ok(account.agencia.length <= 4, true);
    ok(account.conta.length <= 10, true);
    // Assert DV presence
    strictEqual(account.agenciaDv.length, 0);
    ok(account.contaDv.length <= 1, true);
  });

  test('should generate a valid account for a random bank', () => {
    const account = contaBancaria();
    // Assert bank code is valid
    const validBankCodes = ['1', '237', '104', '745', '296', '341', '33'];
    strictEqual(validBankCodes.includes(account.codigoBanco), true);
    // Assert bank name is valid
    const validBankNames = ['Banco do Brasil', 'Bradesco', 'Caixa', 'Citibank', 'HSBC', 'Itaú', 'Santander'];
    strictEqual(validBankNames.includes(account.nomeBanco), true);
    // Assert agency and account format
    strictEqual(account.agencia.length <= 8, true);
    strictEqual(account.conta.length <= 13, true);
    // Assert DV presence
    strictEqual(account.agenciaDv.length <= 1, true);
    strictEqual(account.contaDv.length <= 1, true);
  });

  test('should generate a valid account for a bank by code', () => {
    const account = contaBancaria('1');
    strictEqual(account.codigoBanco, '1');
    strictEqual(account.nomeBanco, 'Banco do Brasil');
    // Assert agency and account format
    ok(account.agencia.length <= 5, true);
    ok(account.conta.length <= 10, true);
    // Assert DV presence
    ok(account.agenciaDv.length <= 1, true);
    ok(account.contaDv.length <= 1, true);
  });

  test('should generate a valid account for a bank by name (case insensitive)', () => {
    const account = contaBancaria('bAnCo dO bRaSiL');
    strictEqual(account.codigoBanco, '1');
    strictEqual(account.nomeBanco, 'Banco do Brasil');
    // Assert agency and account format
    ok(account.agencia.length <= 5);
    ok(account.conta.length <= 10);
    // Assert DV presence
    ok(account.agenciaDv.length <= 1, true);
    ok(account.contaDv.length <= 1, true);
  });
});
