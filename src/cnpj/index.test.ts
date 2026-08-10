import { strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { cnpj, cnpjDV } from './index.js';

describe('CNPJ Generator', () => {
  test('should generate a valid CNPJ with mask', () => {
    const cnpjWithMask = cnpj(true);
    strictEqual(cnpjWithMask.length, 18);
    strictEqual(cnpjWithMask.match(/\d/g)!.length, 14);
    strictEqual(cnpjWithMask.match(/\./g)!.length, 2);
    strictEqual(cnpjWithMask.match(/\//g)!.length, 1);
    strictEqual(cnpjWithMask.match(/-/g)!.length, 1);
  });

  test('should generate a valid CNPJ without mask', () => {
    const cnpjWithoutMask = cnpj(false);
    strictEqual(cnpjWithoutMask.length, 14);
    strictEqual(cnpjWithoutMask.match(/\d/g)!.length, 14);
  });
});

describe('CNPJ DV Calculation', () => {
  test('should return 0 when dv % 11 >= 10', () => {
    strictEqual(cnpjDV(1), 0);
  });
});
