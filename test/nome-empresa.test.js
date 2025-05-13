import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { nomeEmpresa } from '../src/generators/nome-empresa.js';

describe('nomeEmpresa', () => {
  test('should generate a valid company name', () => {
    const nomeEmpresaGerado = nomeEmpresa();
    strictEqual(nomeEmpresaGerado.length > 0, true, 'The company name should have a length greater than 0.');
  });
   test('should generate a valid brasilian company name', () => {
    const nomeEmpresaGerado = nomeEmpresa("BR");
    strictEqual(nomeEmpresaGerado.length > 0, true, 'The company name should have a length greater than 0.');
  });
  test('should be a string', () => {
    strictEqual(typeof nomeEmpresa(), 'string', 'The company name should be a string.');
  });
});
