
import { describe, test } from 'node:test';
import { strictEqual, ok } from 'node:assert';
import { provedorEmail } from '../src/generators/provedor-email.js';
import { provedoresEmail } from '../src/data/db-general.js';

describe('provedorEmailRand', () => {
  test('should generate a valid email provider', () => {
    const provedor = provedorEmail();
    strictEqual(provedor.length > 0, true, 'The email provider should have a length greater than 0.');
  });
  test('should be a string', () => {
    strictEqual(typeof provedorEmail(), 'string', 'The email provider should be a string.');
  });
  test('should be a valid email provider', () => {
    ok(provedoresEmail.includes(provedorEmail()), 'The email provider should be present in the list of valid email providers.');
  });
});
