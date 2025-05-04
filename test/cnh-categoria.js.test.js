
import { describe, test } from 'node:test';
import { strictEqual, ok } from 'node:assert';
import { cnhCategoria } from '../src/generators/cnh-categoria.js';
import { categoriasCnh } from '../src/data/db-general.js';


describe('cnhCategoria', () => {
  test('should generate a valid driver\'s license category', () => {
    const categoria = cnhCategoria();
    strictEqual(categoria.length > 0, true, 'The driver\'s license category should have a length greater than 0.');
  });
  test('should be a string', () => {
    strictEqual(typeof cnhCategoria(), 'string', 'The driver\'s license category should be a string.');
  });
  test('should be a valid driver\'s license category', () => {
    ok(categoriasCnh.includes(cnhCategoria()), 'The driver\'s license category should be present in the list of valid driver\'s license categories.');
  });
});