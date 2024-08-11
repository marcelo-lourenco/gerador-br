import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { dataNascimento } from '../src/generators/data-nascimento.js';

function getYearFromDate(dateString) {
  const [day, month, year] = dateString.split('/');
  return parseInt(year, 10);
}

describe('Data Nascimento Generator', () => {
  test('should generate a valid date in DD/MM/AAAA format', () => {
    const dateParts = dataNascimento.split('/');
    strictEqual(dateParts.length, 3);
    strictEqual(dateParts[0].length, 2);
    strictEqual(dateParts[1].length, 2);
    strictEqual(dateParts[2].length, 4);
  });

  test('should generate a date between 18 and 80 years ago', () => {
    const now = new Date();
    const ageInYears = now.getFullYear() - getYearFromDate(dataNascimento);;
    strictEqual(ageInYears >= 18 && ageInYears <= 80, true);
  });
});
