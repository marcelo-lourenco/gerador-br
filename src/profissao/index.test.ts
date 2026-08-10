import { ok, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { profissoes } from '../data/db-general.js';
import { profissao } from './index.js';

describe('Profissão Generator', () => {
  test('should generate a valid profession', () => {
    const prof = profissao();
    strictEqual(typeof prof, 'string');
    ok(profissoes.includes(prof));
  });
});
