import { describe, test } from 'node:test';
import { renavam, renavamDV } from '../src/generators/renavam.js';

import { strictEqual } from 'node:assert';

describe('RENAVAM Generator', () => {
  test('should generate a valid RENAVAM number', () => {
    strictEqual(renavam().length, 11); // 11 digits
    strictEqual(renavam().match(/\d/g).length, 11); // 11 digits
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
