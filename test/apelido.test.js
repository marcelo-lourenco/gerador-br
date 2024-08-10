import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { apelido } from '../src/generators/apelido.js';

describe('Apelido Generator', () => {
  test('should generate a valid nickname', () => {
    const nickname = apelido();
    strictEqual(nickname.length > 0, true);
  });
});
