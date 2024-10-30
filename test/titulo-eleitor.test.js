import { describe, test } from 'node:test';
import { teDV, tituloEleitor } from '../src/generators/titulo-eleitor.js';

import { strictEqual } from 'node:assert';

describe('Título de Eleitor Generator', () => {
  test('should generate a valid title of voter without mask and with random state', () => {
    const tituloEleitorWithoutMask = tituloEleitor();
    strictEqual(tituloEleitorWithoutMask.length, 12); // 12 digits
    strictEqual(tituloEleitorWithoutMask.match(/\d/g).length, 12); // 12 digits
  });

  test('should generate a valid title of voter with mask and with random state', () => {
    const tituloEleitorWithMask = tituloEleitor(true);
    strictEqual(tituloEleitorWithMask.length, 14); // 12 digits + 3 spaces
    strictEqual(tituloEleitorWithMask.match(/\d/g).length, 12); // 12 digits
    strictEqual(tituloEleitorWithMask.match(/ /g).length, 2); // 2 spaces
  });

  test('should generate a valid title of voter without mask and with specific state', () => {
    const tituloEleitorWithoutMask = tituloEleitor(false, 'SC');
    strictEqual(tituloEleitorWithoutMask.length, 12); // 12 digits
    strictEqual(tituloEleitorWithoutMask.match(/\d/g).length, 12); // 12 digits
  });

  test('should generate a valid title of voter with mask and with specific state', () => {
    const tituloEleitorWithMask = tituloEleitor(true, 'PR');
    strictEqual(tituloEleitorWithMask.length, 14); // 12 digits + 2 spaces
    strictEqual(tituloEleitorWithMask.match(/\d/g).length, 12); // 12 digits
    strictEqual(tituloEleitorWithMask.match(/ /g).length, 2); // 2 spaces
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
    strictEqual(teDV(9, '04'), 9);
  });
});
