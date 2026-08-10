import { ok, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { rg, rgDV } from './index.js';

describe('RG Generator', () => {
  test('should generate a valid RG with mask', () => {
    const rgWithMask = rg(true);
    strictEqual(rgWithMask.length, 12);
    ok(rgWithMask.match(/\d/g)!.length <= 9);
    strictEqual(rgWithMask.match(/\./g)!.length, 2);
    strictEqual(rgWithMask.match(/-/g)!.length, 1);
  });

  test('should generate a valid RG without mask', () => {
    const rgWithoutMask = rg(false);
    ok(rgWithoutMask.length <= 9);
    ok(rgWithoutMask.match(/\d/g)!.length <= 9);
  });
});

describe('RG DV Calculation', () => {
  test('should return 0 for rgBase 12345674', () => {
    strictEqual(rgDV(12345674), 0);
  });

  test('should return X for rgBase 12345675', () => {
    strictEqual(rgDV(12345675), 'X');
  });
});
