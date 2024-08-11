import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { placaAntiga, placaMercosul } from '../src/generators/placa.js';

describe('Placa Generator', () => {
  describe('Placa Antiga', () => {
    test('should generate a valid old license plate without mask', () => {
      const placaAntigaWithoutMask = placaAntiga(false);
      strictEqual(placaAntigaWithoutMask.length, 7); // 3 letters + 4 digits
      strictEqual(placaAntigaWithoutMask.match(/[A-Z]/g).length, 3); // 3 uppercase letters
      strictEqual(placaAntigaWithoutMask.match(/\d/g).length, 4); // 4 digits
    });

    test('should generate a valid old license plate with mask', () => {
      const placaAntigaWithMask = placaAntiga(true);
      strictEqual(placaAntigaWithMask.length, 8); // 3 letters + 4 digits + 1 hyphen
      strictEqual(placaAntigaWithMask.match(/[A-Z]/g).length, 3); // 3 uppercase letters
      strictEqual(placaAntigaWithMask.match(/\d/g).length, 4); // 4 digits
      strictEqual(placaAntigaWithMask.match(/-/g).length, 1); // 1 hyphen
    });
  });

  describe('Placa Mercosul', () => {
    test('should generate a valid Mercosul license plate without mask', () => {
      const placaMercosulWithoutMask = placaMercosul(false);
      strictEqual(placaMercosulWithoutMask.length, 7); // 3 letters + 1 digit + 1 letter + 2 digits
      strictEqual(placaMercosulWithoutMask.match(/[A-Z]/g).length, 4); // 4 uppercase letters
      strictEqual(placaMercosulWithoutMask.match(/\d/g).length, 3); // 3 digits
    });

    test('should generate a valid Mercosul license plate with mask', () => {
      const placaMercosulWithMask = placaMercosul(true);
      strictEqual(placaMercosulWithMask.length, 8); // 3 letters + 1 digit + 1 letter + 2 digits + 1 hyphen
      strictEqual(placaMercosulWithMask.match(/[A-Z]/g).length, 4); // 4 uppercase letters
      strictEqual(placaMercosulWithMask.match(/\d/g).length, 3); // 3 digits
      strictEqual(placaMercosulWithMask.match(/-/g).length, 1); // 1 hyphen
    });
  });
});
