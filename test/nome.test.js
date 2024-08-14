import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { nome } from '../src/generators/nome.js';

describe('Nome Generator', () => {
  test('should generate a random name', () => {
    const name = nome.aleatorio();
    strictEqual(typeof name, 'string');
    strictEqual(name.length > 0, true);
  });

  test('should generate a random full name', () => {
    const fullName = nome.aleatorioCompleto();
    strictEqual(typeof fullName, 'string');
    strictEqual(fullName.length > 0, true);
  });

  test('should generate a random male name', () => {
    const maleName = nome.masculino();
    strictEqual(typeof maleName, 'string');
    strictEqual(maleName.length > 0, true);
  });

  test('should generate a random full male name', () => {
    const fullMaleName = nome.masculinoCompleto();
    strictEqual(typeof fullMaleName, 'string');
    strictEqual(fullMaleName.length > 0, true);
  });

  test('should generate a random female name', () => {
    const femaleName = nome.feminino();
    strictEqual(typeof femaleName, 'string');
    strictEqual(femaleName.length > 0, true);
  });

  test('should generate a random full female name', () => {
    const fullFemaleName = nome.femininoCompleto();
    strictEqual(typeof fullFemaleName, 'string');
    strictEqual(fullFemaleName.length > 0, true);
  });

  test('should generate a random mother name', () => {
    const motherName = nome.mae();
    strictEqual(typeof motherName, 'string');
    strictEqual(motherName.length > 0, true);
  });

  test('should generate a random full mother name', () => {
    const fullMotherName = nome.maeCompleto();
    strictEqual(typeof fullMotherName, 'string');
    strictEqual(fullMotherName.length > 0, true);
  });

  test('should generate a random father name', () => {
    const fatherName = nome.pai();
    strictEqual(typeof fatherName, 'string');
    strictEqual(fatherName.length > 0, true);
  });

  test('should generate a random full father name', () => {
    const fullFatherName = nome.paiCompleto();
    strictEqual(typeof fullFatherName, 'string');
    strictEqual(fullFatherName.length > 0, true);
  });

  test('should generate a random middle name', () => {
    const middleName = nome.doMeio();
    strictEqual(typeof middleName, 'string');
    strictEqual(middleName.length > 0, true);
  });

  test('should generate a random surname', () => {
    const surname = nome.sobrenome();
    strictEqual(typeof surname, 'string');
    strictEqual(surname.length > 0, true);
  });
});
