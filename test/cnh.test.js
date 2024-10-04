import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { cnh } from '../src/generators/cnh.js';

describe('CNH Generator', () => {
  test('should generate a valid CNH', () => {
    strictEqual(cnh().length, 11); // 11 digits
    strictEqual(cnh().match(/\d/g).length, 11); // 11 digits
  });
});
