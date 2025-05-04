import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { email } from '../src/generators/email.js';
import { apelido } from '../src/generators/apelido.js'

describe('Email Generator', () => {
  test('should generate a valid email address without full name', () => {
    const generatedEmail = email();
    const parts = generatedEmail.split('@');
    strictEqual(parts.length, 2);
    strictEqual(parts[0].length > 0, true);
    strictEqual(parts[1].length > 0, true);
  });

  test('should generate a valid email address with full name', () => {
    const fullName = 'John Doe';
    const generatedEmail = email(fullName);
    const parts = generatedEmail.split('@');
    strictEqual(parts.length, 2);
    strictEqual(parts[0].length > 0, true);
    strictEqual(parts[1].length > 0, true);
    strictEqual(parts[0], fullName.toLowerCase().replace(/ /g, '.').split('.').slice(0, 2)
      .join('.'));
  });

  test('should generate a valid email address with a nickname', () => {
    const generatedEmail = email();
    const parts = generatedEmail.split('@');
    strictEqual(parts.length, 2);
    strictEqual(parts[0].length > 0, true);
    strictEqual(parts[1].length > 0, true);
  });
});
