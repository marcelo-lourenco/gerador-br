import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { profissao } from '../src/generators/profissao.js';

describe('Profissão Generator', () => {
  test('should generate a valid profession', () => {
    const profession = profissao();
    strictEqual(typeof profession, 'string');
    strictEqual(profession.length > 0, true);
  });
});
