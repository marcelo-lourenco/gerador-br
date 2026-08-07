import { strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { apelido } from './index.js';

describe('apelido', () => {
  test('should generate a valid nickname', () => {
    const apelidoGerado = apelido();
    strictEqual(
      apelidoGerado.length > 0,
      true,
      'The nickname should have a length greater than 0.',
    );
  });
  test('should be a string', () => {
    strictEqual(typeof apelido(), 'string', 'The nickname should be a string.');
  });
});
