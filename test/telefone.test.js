import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { telefone } from '../src/generators/telefone.js';

describe('telefone', () => {
  test('Generates a random phone number without mask', () => {
    const result = telefone();
    strictEqual(result.length, 10); // 8 digits + 2 digits DDD
    strictEqual(/^\d{10}$/.test(result), true); // Check if it only contains digits
  });

  test('Generates a random phone number with mask', () => {
    const result = telefone(true);
    strictEqual(result.length, 14); // (DDD) XXXX-XXXX
    strictEqual(/^\(\d{2}\) \d{4}-\d{4}$/.test(result), true); // Check the format
  });

  test('Generates a phone number for a specific state without mask', () => {
    const state = 'PB';
    const result = telefone(false, state);
    strictEqual(result.startsWith('83'), true); // Check if DDD corresponds to "SC"
    strictEqual(result.length, 10);
  });

  test('Generates a phone number for a specific state with mask', () => {
    const state = 'RN';
    const result = telefone(true, state);
    strictEqual(result.startsWith('(84)'), true); // Check if DDD corresponds to "ES"
    strictEqual(result.length, 14);
  });
});
