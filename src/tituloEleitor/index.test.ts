import { match, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { teDV, tituloEleitor } from './index.js';

describe('Título de Eleitor Generator', () => {
  test('should generate a valid title of voter without mask and with random state', () => {
    const res = tituloEleitor(false);
    strictEqual(res.length, 12);
    match(res, /^\d{12}$/);
  });

  test('should generate a valid title of voter with mask and with random state', () => {
    const res = tituloEleitor(true);
    strictEqual(res.length, 14);
    match(res, /^\d{4} \d{4} \d{4}$/);
  });

  test('should generate a valid title of voter without mask and with specific state', () => {
    const res = tituloEleitor(false, 'SP');
    strictEqual(res.length, 12);
  });

  test('should generate a valid title of voter with mask and with specific state', () => {
    const res = tituloEleitor(true, 'SP');
    strictEqual(res.length, 14);
  });
});

describe('Título de Eleitor CNS DV Calculation', () => {
  test('should return 0 when dv is 10', () => {
    strictEqual(teDV(10, '01'), 0);
  });

  test('should return 1 when dv is 0 and state is 01 or 02', () => {
    strictEqual(teDV(0, '01'), 1);
    strictEqual(teDV(0, '02'), 1);
  });

  test('should return dv when dv is not 10 or 0 and state is not 01 or 02', () => {
    strictEqual(teDV(5, '03'), 5);
  });
});
