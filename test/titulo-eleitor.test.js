import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { tituloEleitor } from '../src/generators/titulo-eleitor.js';

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
