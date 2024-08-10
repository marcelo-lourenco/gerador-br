import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { cnh } from '../src/generators/cnh.js';

describe('CNH Generator', () => {
  test.skip('should generate a valid CNH with mask', () => {
    const cnhWithMask = cnh();
    strictEqual(cnhWithMask.length, 12); // 9 digits + 2 separators + 1 hyphen
    strictEqual(cnhWithMask.match(/\d/g).length, 11); // 11 digits
    strictEqual(cnhWithMask.match(/-/g).length, 1); // 1 hyphen
  });

  test('should generate a valid CNH without mask', () => {
    const cnhWithoutMask = cnh('1234567890');
    strictEqual(cnhWithoutMask.length, 11); // 11 digits
    strictEqual(cnhWithoutMask.match(/\d/g).length, 11); // 11 digits
  });
});
