import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { cnpj } from '../src/generators/cnpj.js';

describe('CNPJ Generator', () => {
  test('should generate a valid CNPJ with mask', () => {
    const cnpjWithMask = cnpj(true);
    strictEqual(cnpjWithMask.length, 18); // 14 digits + 3 separators + 1 hyphen
    strictEqual(cnpjWithMask.match(/\d/g).length, 14); // 14 digits
    strictEqual(cnpjWithMask.match(/\./g).length, 2); // 2 dots
    strictEqual(cnpjWithMask.match(/\//g).length, 1); // 1 slash
    strictEqual(cnpjWithMask.match(/-/g).length, 1); // 1 hyphen
  });

  test('should generate a valid CNPJ without mask', () => {
    const cnpjWithoutMask = cnpj(false);
    strictEqual(cnpjWithoutMask.length, 14); // 14 digits
    strictEqual(cnpjWithoutMask.match(/\d/g).length, 14); // 14 digits
  });
});
