import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { escolaridadeRand } from '../src/utils.js';

describe('Escolaridade Generator', () => {
  test('should generate a valid education level', () => {
    const educationLevel = escolaridadeRand;
    strictEqual(typeof educationLevel, 'string');
    strictEqual(educationLevel.length > 0, true);
  });
});
