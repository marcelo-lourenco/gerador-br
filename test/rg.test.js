import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { rg } from '../src/generators/rg.js';

describe('RG Generator', () => {
  test('should generate a valid RG with mask', () => {
    const rgWithMask = rg(true);
    strictEqual(rgWithMask.length, 12); // 9 digits + 2 separators + 1 hyphen
    strictEqual(rgWithMask.match(/\d/g).length, 9); // 9 digits
    strictEqual(rgWithMask.match(/\./g).length, 2); // 2 dots
    strictEqual(rgWithMask.match(/-/g).length, 1); // 1 hyphen
  });

  test('should generate a valid RG without mask', () => {
    const rgWithoutMask = rg(false);
    strictEqual(rgWithoutMask.length, 9); // 9 digits
    strictEqual(rgWithoutMask.match(/\d/g).length, 9); // 9 digits
  });

  test.skip('should generate a valid RG with a valid check digit', () => {
    const rgWithMask = rg(true);
    const rgWithoutMask = rg(false);
    const checkDigit = rgWithMask.slice(-2, -1);
    const rgNumber = rgWithoutMask.slice(0, -1);

    const sum = rgNumber.split('').reduce((acc, digit, index) => acc + digit * (index + 2), 0);
    let expectedCheckDigit = 11 - (sum % 11);



    if (expectedCheckDigit === 11) {
      console.log("expectedCheckDigit11",expectedCheckDigit);
      expectedCheckDigit = 0; // Handle case where expectedCheckDigit is 11
    } else if (expectedCheckDigit === 10) {
      console.log("expectedCheckDigit10",expectedCheckDigit);
      expectedCheckDigit = 'X'; // Handle case where expectedCheckDigit is 10
    }

    strictEqual(checkDigit, expectedCheckDigit.toString()); // Compare with the adjusted expectedCheckDigit
  });
});
