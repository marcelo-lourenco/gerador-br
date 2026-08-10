import { strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { nomeEmpresa } from './index.js';

describe('nomeEmpresa', () => {
  test('should generate a valid company name', () => {
    const company = nomeEmpresa();
    strictEqual(typeof company, 'string');
    strictEqual(company.length > 0, true);
  });

  test('should generate a valid brasilian company name', () => {
    const company = nomeEmpresa('BR');
    strictEqual(typeof company, 'string');
    strictEqual(company.length > 0, true);
  });

  test('should be a string', () => {
    strictEqual(typeof nomeEmpresa(), 'string');
  });
});
