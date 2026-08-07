import { match, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { celular } from './index.js';

describe('Celular Generator', () => {
  test('should generate a cell phone number without mask by default', () => {
    const phone = celular();
    strictEqual(phone.length, 11);
    match(phone, /^\d{11}$/);
  });

  test('should generate a cell phone number with mask when mask parameter is true', () => {
    const phone = celular(true);
    match(phone, /^\(\d{2}\) 9\d{4}-\d{4}$/);
  });

  test('should generate a cell phone number for a specific state', () => {
    const phone = celular(false, 'SP');
    strictEqual(phone.length, 11);
    match(phone, /^1[1-9]\d{9}$/);
  });

  test('should generate a cell phone number for a specific operator', () => {
    const phone = celular(false, '', 'Claro');
    strictEqual(phone.length, 11);
  });
});
