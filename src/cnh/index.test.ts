import { strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { cnh } from './index.js';

describe('CNH Generator', () => {
  test('should generate a valid CNH', () => {
    const val = cnh();
    strictEqual(val.length, 11);
    strictEqual(val.match(/\d/g)!.length, 11);
  });
});
