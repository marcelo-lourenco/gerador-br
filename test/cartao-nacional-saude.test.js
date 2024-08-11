import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { cns } from '../src/generators/cartao-nacional-saude.js';

describe('CNS Generator', () => {
  test('should generate a valid CNS without mask', () => {
    const cnsWithoutMask = cns(false);
    strictEqual(cnsWithoutMask.length, 15); // 15 digits
    strictEqual(cnsWithoutMask.match(/\d/g).length, 15); // 15 digits
  });

  test('should generate a valid CNS with mask', () => {
    const cnsWithMask = cns(true);
    strictEqual(cnsWithMask.length, 18); // 15 digits + 3 spaces
    strictEqual(cnsWithMask.match(/\d/g).length, 15); // 15 digits
    strictEqual(cnsWithMask.match(/\s/g).length, 3); // 3 spaces
  });
});
