import { ok, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { coresPele } from '../data/db-general.js';
import { corPele } from './index.js';

describe('corPele', () => {
  test('should generate a valid skin color', () => {
    const color = corPele();
    strictEqual(color.length > 0, true, 'The skin color should have a length greater than 0.');
  });
  test('should be a string', () => {
    strictEqual(typeof corPele(), 'string', 'The skin color should be a string.');
  });
  test('should be a valid skin color', () => {
    ok(
      coresPele.includes(corPele() as any),
      'The skin color should be present in the list of valid skin colors.',
    );
  });
});
