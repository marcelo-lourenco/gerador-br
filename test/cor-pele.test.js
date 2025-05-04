
import { describe, test } from 'node:test';
import { strictEqual, ok} from 'node:assert';
import { corPele } from '../src/generators/corPele.js';
import { coresPele }from '../src/data/db-general.js';

describe('corPele', () => {
  test('should generate a valid skin color', () => {
    const cor = corPele();
    strictEqual(cor.length > 0, true, 'The skin color should have a length greater than 0.');
  });
  test('should be a string', () => {
    strictEqual(typeof corPele(), 'string', 'The skin color should be a string.');
  });
  test('should be a valid skin color', () => {
    ok(coresPele.includes(corPele()), 'The skin color should be present in the list of valid skin colors.');
  });
});
