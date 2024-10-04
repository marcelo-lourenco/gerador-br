import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { celular } from '../src/generators/celular.js';

describe('celular', () => {
  test('Generates a random cellphone number without mask', () => {
    const result = celular();
    strictEqual(result.length, 11); // 9 digits + 2 digits DDD
    strictEqual(/^\d{11}$/.test(result), true); // Check if it only contains digits
  });

  test('Generates a random cellphone number with mask', () => {
    const result = celular(true);
    strictEqual(result.length, 15); // (DDD) 9XXXX-XXXX
    strictEqual(/^\(\d{2}\) \d{5}-\d{4}$/.test(result), true); // Check the format
  });

  test('Generates a cellphone number for a specific state without mask', () => {
    const state = 'AL';
    const result = celular(false, state);
    strictEqual(result.startsWith('82'), true); // Check if DDD corresponds to "SC"
    strictEqual(result.length, 11);
  });

  test('Generates a cellphone number for a specific state with mask', () => {
    const state = 'AC';
    const result = celular(true, state);
    strictEqual(result.startsWith('(68)'), true); // Check if DDD corresponds to "ES"
    strictEqual(result.length, 15);
  });

  test('Generates a cellphone number with a specific operator', () => {
    const operator = 'Claro';
    const result = celular(false, '', operator);
    strictEqual(result.length, 11);
    strictEqual(result.charAt(2), '9'); // Assuming the operator code for Claro starts with '9'
  });

  test('Generates a cellphone number with mask, specific state, and operator', () => {
    const state = 'DF';
    const operator = 'Vivo';
    const result = celular(true, state, operator);
    strictEqual(result.startsWith('(61)'), true); // Check if DDD corresponds to "MS"
    strictEqual(result.charAt(5), '9'); // Assuming operator code starts with '9'
    strictEqual(result.length, 15);
  });
});
