import { describe, test } from 'node:test';
import { strictEqual, ok } from 'node:assert';
import { genero } from '../src/generators/genero.js';

describe('Genero Generator', () => {
  test('should return "Feminino" for input "f"', () => {
    strictEqual(genero('f'), 'Feminino');
  });

  test('should return "Feminino" for input "F"', () => {
    strictEqual(genero('F'), 'Feminino');
  });

  test('should return "Masculino" for input "m"', () => {
    strictEqual(genero('m'), 'Masculino');
  });

  test('should return "Masculino" for input "M"', () => {
    strictEqual(genero('M'), 'Masculino');
  });

  test('should return "Intersexo" for input "i"', () => {
    strictEqual(genero('i'), 'Intersexo');
  });

  test('should return "Intersexo" for input "I"', () => {
    strictEqual(genero('I'), 'Intersexo');
  });

  const randomOutputs = ['Feminino', 'Masculino'];

  test('should return "Feminino" or "Masculino" for null input', () => {
    ok(randomOutputs.includes(genero(null)));
  });

  test('should return "Feminino" or "Masculino" for undefined input', () => {
    ok(randomOutputs.includes(genero(undefined)));
  });

  test('should return "Feminino" or "Masculino" for no input', () => {
    ok(randomOutputs.includes(genero()));
  });

  test('should return "Feminino" or "Masculino" for invalid string input "x"', () => {
    ok(randomOutputs.includes(genero('x')));
  });

  test('should return "Feminino" or "Masculino" for invalid numeric input 123', () => {
    ok(randomOutputs.includes(genero(123)));
  });
});
