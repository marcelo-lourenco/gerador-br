import { match, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { telefone } from './index.js';

describe('telefone', () => {
  test('Generates a random phone number without mask', () => {
    const res = telefone(false);
    strictEqual(res.length, 10);
    match(res, /^\d{10}$/);
  });

  test('Generates a random phone number with mask', () => {
    const res = telefone(true);
    match(res, /^\(\d{2}\) [2-3]\d{3}-\d{4}$/);
  });

  test('Generates a phone number for a specific state without mask', () => {
    const res = telefone(false, 'RJ');
    strictEqual(res.length, 10);
  });

  test('Generates a phone number for a specific state with mask', () => {
    const res = telefone(true, 'RJ');
    match(res, /^\(2[124]\) [2-3]\d{3}-\d{4}$/);
  });
});
