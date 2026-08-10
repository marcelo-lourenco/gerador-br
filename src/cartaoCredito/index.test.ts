import { strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { cartaoCredito } from './index.js';

describe('Cartão de Crédito Generator', () => {
  test('should generate a valid credit card number without mask', () => {
    const creditCardData = cartaoCredito(false);
    strictEqual(typeof creditCardData.numero, 'string');
    strictEqual(creditCardData.numero.length, 16);
  });

  test('should generate a valid credit card number with mask', () => {
    const creditCardData = cartaoCredito(true);
    strictEqual(typeof creditCardData.numero, 'string');
    strictEqual(creditCardData.numero.length, 19);
    strictEqual(creditCardData.numero.split(' ').length, 4);
  });

  test('should generate a valid CVV', () => {
    const creditCardData = cartaoCredito();
    strictEqual(typeof creditCardData.cvv, 'string');
    strictEqual(creditCardData.cvv.length, 3);
  });

  test('should generate a valid expiration date', () => {
    const creditCardData = cartaoCredito();
    strictEqual(typeof creditCardData.dataExpiracao, 'string');
    const parts = creditCardData.dataExpiracao.split('/').map(Number);
    const day = parts[0]!;
    const month = parts[1]!;
    const year = parts[2]!;
    strictEqual(day > 0 && day <= 31, true);
    strictEqual(month > 0 && month <= 12, true);
    strictEqual(year >= new Date().getFullYear(), true);
  });

  test('should generate a valid titular name', () => {
    const fullName = 'João Santos da Silva';
    const creditCardData = cartaoCredito(false, fullName);
    strictEqual(creditCardData.nomeTitular, 'JOÃO S SILVA');
  });
});
