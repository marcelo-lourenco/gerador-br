import { match, ok } from 'node:assert';
import { describe, test } from 'node:test';
import { dataNascimento } from './index.js';

describe('Data de Nascimento Generator', () => {
  test('should generate a birth date in format DD/MM/YYYY', () => {
    const res = dataNascimento();
    match(res, /^\d{2}\/\d{2}\/\d{4}$/);
  });

  test('should generate a birth date for exact age', () => {
    const res = dataNascimento(25);
    match(res, /^\d{2}\/\d{2}\/\d{4}$/);
    const parts = res.split('/').map(Number);
    const year = parts[2]!;
    const currentYear = new Date().getFullYear();
    ok(currentYear - year >= 24 && currentYear - year <= 26);
  });

  test('should generate a birth date within age range', () => {
    const res = dataNascimento([30, 40]);
    match(res, /^\d{2}\/\d{2}\/\d{4}$/);
  });

  test('should handle reversed range gracefully', () => {
    const res = dataNascimento([40, 30]);
    match(res, /^\d{2}\/\d{2}\/\d{4}$/);
  });
});
