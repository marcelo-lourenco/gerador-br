import { match, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { cnpjAlfanumerico } from './index.js';

describe('CNPJ Alfanumérico Generator', () => {
  test('should generate a valid alphanumeric CNPJ with mask', () => {
    const res = cnpjAlfanumerico(true);
    strictEqual(res.length, 18);
    match(res, /^[A-Z0-9]{2}\.[A-Z0-9]{3}\.[A-Z0-9]{3}\/[A-Z0-9]{4}-\d{2}$/);
  });

  test('should generate a valid alphanumeric CNPJ without mask', () => {
    const res = cnpjAlfanumerico(false);
    strictEqual(res.length, 14);
    match(res, /^[A-Z0-9]{12}\d{2}$/);
  });
});
