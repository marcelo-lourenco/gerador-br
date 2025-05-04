
import { describe, test } from 'node:test';
import { strictEqual, ok } from 'node:assert';
import { tipoSanguineo } from '../src/generators/tipo-sanguineo.js';
import { tiposSanguineo } from '../src/data/db-general.js';

describe('tipoSanguineo', () => {
  test('should generate a valid blood type', () => {
    const tipo = tipoSanguineo();
    strictEqual(tipo.length > 0, true, 'The blood type should have a length greater than 0.');
  });
  test('should be a string', () => {
    strictEqual(typeof tipoSanguineo(), 'string', 'The blood type should be a string.');
  });
  test('should be a valid blood type', () => {
    ok(tiposSanguineo.includes(tipoSanguineo()), 'The blood type should be present in the list of valid blood types.');
  });
});
