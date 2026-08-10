import { match, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { passaporte } from './index.js';

describe('Passport Generator', () => {
  test('should generate a valid passport number', () => {
    const passportNumber = passaporte();
    strictEqual(typeof passportNumber, 'string');
    strictEqual(passportNumber.length, 9);
  });

  test('should start with two uppercase letters', () => {
    const passportNumber = passaporte();
    match(passportNumber, /^[A-Z]{2}/);
  });

  test('should end with seven digits', () => {
    const passportNumber = passaporte();
    match(passportNumber, /\d{7}$/);
  });
});
