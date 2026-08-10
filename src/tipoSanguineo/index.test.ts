import { ok, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { tiposSanguineo } from '../data/db-general.js';
import { tipoSanguineo } from './index.js';

describe('tipoSanguineo', () => {
  test('should generate a valid blood type', () => {
    const blood = tipoSanguineo();
    strictEqual(blood.length > 0, true, 'The blood type should have a length greater than 0.');
  });
  test('should be a string', () => {
    strictEqual(typeof tipoSanguineo(), 'string', 'The blood type should be a string.');
  });
  test('should be a valid blood type', () => {
    ok(
      tiposSanguineo.includes(tipoSanguineo() as any),
      'The blood type should be present in the list of valid blood types.',
    );
  });
});
