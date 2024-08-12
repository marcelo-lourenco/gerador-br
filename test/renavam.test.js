import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { renavan } from '../src/generators/renavam.js';

describe('RENAVAM Generator', () => {
  test('should generate a valid RENAVAM number', () => {
    strictEqual(renavan.length, 11); // 11 digits
    strictEqual(renavan.match(/\d/g).length, 11); // 11 digits
  });
});
