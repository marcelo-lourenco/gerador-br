import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { pis } from '../src/generators/pis.js';

describe('PIS Generator', () => {
  test('should generate a valid PIS without mask', () => {
    const pisWithoutMask = pis(false);
    strictEqual(pisWithoutMask.length, 11); // 11 digits
    strictEqual(pisWithoutMask.match(/\d/g).length, 11); // 11 digits
  });

  test('should generate a valid PIS with mask', () => {
    const pisWithMask = pis(true);
    strictEqual(pisWithMask.length, 14); // 11 digits + 3 separators
    strictEqual(pisWithMask.match(/\d/g).length, 11); // 11 digits
    strictEqual(pisWithMask.match(/\./g).length, 3); // 3 dots
  });
});
