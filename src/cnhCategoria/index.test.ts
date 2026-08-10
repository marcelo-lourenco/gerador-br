import { ok, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { categoriasCnh } from '../data/db-general.js';
import { cnhCategoria } from './index.js';

describe('cnhCategoria', () => {
  test("should generate a valid driver's license category", () => {
    const categoria = cnhCategoria();
    strictEqual(
      categoria.length > 0,
      true,
      "The driver's license category should have a length greater than 0.",
    );
  });
  test('should be a string', () => {
    strictEqual(
      typeof cnhCategoria(),
      'string',
      "The driver's license category should be a string.",
    );
  });
  test("should be a valid driver's license category", () => {
    ok(
      categoriasCnh.includes(cnhCategoria() as any),
      "The driver's license category should be present in the list of valid driver's license categories.",
    );
  });
});
