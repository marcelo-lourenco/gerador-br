import { strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { placaAntiga, placaMercosul } from './index.js';

describe('Placa Generator', () => {
  describe('Placa Antiga', () => {
    test('should generate a valid old license plate without mask', () => {
      const res = placaAntiga(false);
      strictEqual(res.length, 7);
      strictEqual(res.match(/[A-Z]/g)!.length, 3);
      strictEqual(res.match(/\d/g)!.length, 4);
    });

    test('should generate a valid old license plate with mask', () => {
      const res = placaAntiga(true);
      strictEqual(res.length, 8);
      strictEqual(res.match(/[A-Z]/g)!.length, 3);
      strictEqual(res.match(/\d/g)!.length, 4);
      strictEqual(res.match(/-/g)!.length, 1);
    });
  });

  describe('Placa Mercosul', () => {
    test('should generate a valid Mercosul license plate without mask', () => {
      const res = placaMercosul(false);
      strictEqual(res.length, 7);
      strictEqual(res.match(/[A-Z]/g)!.length, 4);
      strictEqual(res.match(/\d/g)!.length, 3);
    });

    test('should generate a valid Mercosul license plate with mask', () => {
      const res = placaMercosul(true);
      strictEqual(res.length, 8);
      strictEqual(res.match(/[A-Z]/g)!.length, 4);
      strictEqual(res.match(/\d/g)!.length, 3);
      strictEqual(res.match(/-/g)!.length, 1);
    });
  });
});
