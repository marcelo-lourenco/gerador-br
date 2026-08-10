import { strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { renavam, renavamDV } from './index.js';

describe('RENAVAM Generator', () => {
  test('should generate a valid RENAVAM number', () => {
    const val = renavam();
    strictEqual(val.length, 11);
    strictEqual(val.match(/\d/g)?.length, 11);
  });
});

describe('RENAVAM DV Calculation', () => {
  test('should return 0 for renavamBase 10', () => {
    strictEqual(renavamDV(123456785), 0);
  });
  test('should return dv for renavamBase 6', () => {
    strictEqual(renavamDV(123456789), 6);
  });
});
