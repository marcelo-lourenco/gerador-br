import { match, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { email } from './index.js';

describe('Email Generator', () => {
  test('should generate a valid email based on nickname by default', () => {
    const res = email();
    match(res, /^.+@.+\..+$/);
  });

  test('should generate a valid email based on full name', () => {
    const res = email('Marcelo Lourenço');
    strictEqual(res.startsWith('marcelo.lourenco'), true);
    match(res, /^marcelo\.lourenco@.+\..+$/);
  });
});
