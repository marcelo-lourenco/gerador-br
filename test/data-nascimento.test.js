/* eslint-disable no-unused-vars */
import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { dataNascimento } from '../src/generators/data-nascimento.js';

function getYearFromDate(dateString) {
  const [day, month, year] = dateString.split('/');
  return parseInt(year, 10);
}

describe('Data Nascimento Generator', () => {
  test('should generate a valid date in DD/MM/AAAA format', () => {
    const dateParts = dataNascimento().split('/');
    strictEqual(dateParts.length, 3);
    strictEqual(dateParts[0].length, 2);
    strictEqual(dateParts[1].length, 2);
    strictEqual(dateParts[2].length, 4);
  });

  test('should generate a date between 18 and 80 years ago', () => {
    const now = new Date();
    const ageInYears = now.getFullYear() - getYearFromDate(dataNascimento());
    strictEqual(ageInYears >= 18 && ageInYears <= 80, true);
  });

  test('should generate a date for a specific age', () => {
    const specificAge = 30;
    const now = new Date();
    const birthYear = now.getFullYear() - specificAge;
    const generatedDate = dataNascimento(specificAge);
    const generatedYear = getYearFromDate(generatedDate);
    strictEqual(generatedYear, birthYear);
  });

  test('should generate a date within a specific age range', () => {
    const ageRange = [20, 40];
    const now = new Date();
    const generatedDate = dataNascimento(ageRange);
    const ageInYears = now.getFullYear() - getYearFromDate(generatedDate);
    strictEqual(ageInYears >= ageRange[0] && ageInYears <= ageRange[1], true);
  });

  test('should handle age range with min > max correctly', () => {
    const ageRange = [40, 20]; // min > max
    const now = new Date();
    const generatedDate = dataNascimento(ageRange);
    const ageInYears = now.getFullYear() - getYearFromDate(generatedDate);
    // Expecting the same result as [20, 40] because the function should swap them
    strictEqual(ageInYears >= ageRange[1] && ageInYears <= ageRange[0], true);
  });

});
