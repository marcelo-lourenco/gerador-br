import { ok, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { escolaridades } from '../data/db-general.js';
import { escolaridade } from './index.js';

describe('escolaridade', () => {
  test('should generate a valid education level', () => {
    const edu = escolaridade();
    strictEqual(edu.length > 0, true, 'The education level should have a length greater than 0.');
  });
  test('should be a string', () => {
    strictEqual(typeof escolaridade(), 'string', 'The education level should be a string.');
  });
  test('should be a valid education level', () => {
    ok(
      escolaridades.includes(escolaridade()),
      'The education level should be present in the list of valid education levels.',
    );
  });
});
