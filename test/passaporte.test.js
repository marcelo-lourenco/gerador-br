import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { passaporte } from '../src/generators/passaporte.js';

describe('Passport Generator', () => {
  test('should generate a valid passport number', () => {
    strictEqual(passaporte().length, 9); // 2 letters + 7 digits
    strictEqual(passaporte().match(/[A-Z]{2}/).length, 1); // 2 uppercase letters
    strictEqual(passaporte().match(/\d{7}/).length, 1); // 7 digits
  });

  test('should start with two uppercase letters', () => {
    const letters = passaporte().slice(0, 2);
    strictEqual(letters.match(/[A-Z]/g).length, 2); // 2 uppercase letters
  });

  test('should end with seven digits', () => {
    const numbers = passaporte().slice(2);
    strictEqual(numbers.match(/\d{7}/).length, 1); // 7 digits
  });
});
