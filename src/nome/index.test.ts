import { ok, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { nome } from './index.js';

describe('Nome Generator', () => {
  test('should generate a random name', () => {
    const res = nome.aleatorio();
    strictEqual(typeof res, 'string');
    ok(res.length > 0);
  });

  test('should generate a random full name', () => {
    const res = nome.aleatorioCompleto();
    strictEqual(typeof res, 'string');
    ok(res.split(' ').length >= 3);
  });

  test('should generate a random male name', () => {
    const res = nome.masculino();
    strictEqual(typeof res, 'string');
    ok(res.length > 0);
  });

  test('should generate a random full male name', () => {
    const res = nome.masculinoCompleto();
    strictEqual(typeof res, 'string');
    ok(res.split(' ').length >= 3);
  });

  test('should generate a random female name', () => {
    const res = nome.feminino();
    strictEqual(typeof res, 'string');
    ok(res.length > 0);
  });

  test('should generate a random full female name', () => {
    const res = nome.femininoCompleto();
    strictEqual(typeof res, 'string');
    ok(res.split(' ').length >= 3);
  });

  test('should generate a random mother name', () => {
    const res = nome.mae();
    strictEqual(typeof res, 'string');
    ok(res.length > 0);
  });

  test('should generate a random full mother name', () => {
    const res = nome.maeCompleto();
    strictEqual(typeof res, 'string');
    ok(res.split(' ').length >= 3);
  });

  test('should generate a random father name', () => {
    const res = nome.pai();
    strictEqual(typeof res, 'string');
    ok(res.length > 0);
  });

  test('should generate a random full father name', () => {
    const res = nome.paiCompleto();
    strictEqual(typeof res, 'string');
    ok(res.split(' ').length >= 3);
  });

  test('should generate a random middle name', () => {
    const res = nome.doMeio();
    strictEqual(typeof res, 'string');
    ok(res.length > 0);
  });

  test('should generate a random surname', () => {
    const res = nome.sobrenome();
    strictEqual(typeof res, 'string');
    ok(res.length > 0);
  });
});
