import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { profissaoRand } from '../src/utils.js';

describe('Profissão Generator', () => {
  test('should generate a valid profession', () => {
    const profession = profissaoRand;
    strictEqual(typeof profession, 'string');
    strictEqual(profession.length > 0, true);
  });
});
