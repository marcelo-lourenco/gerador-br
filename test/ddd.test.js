import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { ddd } from '../src/generators/ddd.js';

describe('DDD Generator', () => {
  test('should generate a random DDD for a given state', () => {
    const states = ['SP', 'RJ', 'MG', 'RS', 'SC'];
    states.forEach((state) => {
      const dddValue = ddd(state);
      strictEqual(typeof dddValue, 'string');
      strictEqual(dddValue > 0, true);
    });
  });

  test('should generate a random DDD for a random state', () => {
    const dddValue = ddd();
    strictEqual(typeof dddValue, 'string');
    strictEqual(dddValue > 0, true);
  });
});
