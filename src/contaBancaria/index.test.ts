import { ok, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { contaBancaria } from './index.js';

describe('Conta Bancária Generator', () => {
  test('should generate a valid Banco do Brasil account', () => {
    const account = contaBancaria('Banco do Brasil');
    strictEqual(account.codigoBanco, '1');
    strictEqual(account.nomeBanco, 'Banco do Brasil');
    ok(account.agencia.length <= 5);
    ok(account.conta.length <= 10);
    ok(account.agenciaDv.length <= 1);
    ok(account.contaDv.length <= 1);
  });

  test('should generate a valid Bradesco account', () => {
    const account = contaBancaria('Bradesco');
    strictEqual(account.codigoBanco, '237');
    strictEqual(account.nomeBanco, 'Bradesco');
    ok(account.agencia.length <= 5);
    ok(account.conta.length <= 8);
    ok(account.agenciaDv.length <= 1);
    ok(account.contaDv.length <= 1);
  });

  test('should generate a valid Caixa account', () => {
    const account = contaBancaria('Caixa');
    strictEqual(account.codigoBanco, '104');
    strictEqual(account.nomeBanco, 'Caixa');
    ok(account.agencia.length <= 4);
    ok(account.conta.length <= 13);
    strictEqual(account.agenciaDv.length, 0);
    ok(account.contaDv.length <= 1);
  });

  test('should generate a valid Citibank account', () => {
    const account = contaBancaria('Citibank');
    strictEqual(account.codigoBanco, '745');
    strictEqual(account.nomeBanco, 'Citibank');
    ok(account.agencia.length <= 5);
    ok(account.conta.length <= 9);
    strictEqual(account.agenciaDv.length, 0);
    ok(account.contaDv.length <= 1);
  });

  test('should generate a valid HSBC account', () => {
    const account = contaBancaria('HSBC');
    strictEqual(account.codigoBanco, '296');
    strictEqual(account.nomeBanco, 'HSBC');
    ok(account.agencia.length <= 8);
    ok(account.conta.length <= 8);
  });
});
