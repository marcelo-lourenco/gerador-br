import { match, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { pis } from './index.js';

describe('PIS Generator', () => {
  test('should generate a valid PIS without mask', () => {
    const pisValue = pis();
    strictEqual(pisValue.length, 11);
    match(pisValue, /^\d{11}$/);
  });

  test('should generate a valid PIS with mask', () => {
    const pisValue = pis(true);
    match(pisValue, /^\d{3}\.\d{5}\.\d{2}\.\d{1}$/);
  });
});
