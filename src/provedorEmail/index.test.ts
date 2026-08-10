import { ok, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { provedoresEmail } from '../data/db-general.js';
import { provedorEmail } from './index.js';

describe('provedorEmailRand', () => {
  test('should generate a valid email provider', () => {
    const provider = provedorEmail();
    strictEqual(
      provider.length > 0,
      true,
      'The email provider should have a length greater than 0.',
    );
  });
  test('should be a string', () => {
    strictEqual(typeof provedorEmail(), 'string', 'The email provider should be a string.');
  });
  test('should be a valid email provider', () => {
    ok(
      provedoresEmail.includes(provedorEmail()),
      'The email provider should be present in the list of valid email providers.',
    );
  });
});
