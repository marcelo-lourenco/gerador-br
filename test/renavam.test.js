import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { renavam, calcRenavamDV } from '../src/generators/renavam.js';

describe('RENAVAM Generator', () => {
  test('should generate a valid RENAVAM number', () => {
    strictEqual(renavam().length, 11); // 11 digits
    strictEqual(renavam().match(/\d/g).length, 11); // 11 digits
  });
});

describe('RENAVAM DV Calculation', () => {
  test('should return 0 for renavamBase 10', () => {
    strictEqual(calcRenavamDV(123456785), 0);
  });
  test('should return dv for renavamBase 6', () => {
    strictEqual(calcRenavamDV(123456789), 6);
  });
});
