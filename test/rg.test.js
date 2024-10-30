import { describe, test } from 'node:test';
import { ok, strictEqual } from 'node:assert';
import { rg, rgDV } from '../src/generators/rg.js';

describe('RG Generator', () => {
  test('should generate a valid RG with mask', () => {
    const rgWithMask = rg(true);
    strictEqual(rgWithMask.length, 12); // 9 digits + 2 separators + 1 hyphen
    ok(rgWithMask.match(/\d/g).length <= 9, true); // 9 digits
    strictEqual(rgWithMask.match(/\./g).length, 2); // 2 dots
    strictEqual(rgWithMask.match(/-/g).length, 1); // 1 hyphen
  });

  test('should generate a valid RG without mask', () => {
    const rgWithoutMask = rg(false);
    ok(rgWithoutMask.length <= 9, true); // 9 dig
    ok(rgWithoutMask.match(/\d/g).length <= 9, true); // 9 dig
  });
});
describe('RG DV Calculation', () => {
  test('should return 0 for rgBase 100000000', () => {
    strictEqual(rgDV(12345674), 0);
  });

  test('should return X for rgBase 12345679', () => {
    strictEqual(rgDV(12345675), 'X');
  });
});
