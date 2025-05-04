import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { escolaridade } from '../src/generators/escolaridade.js';

describe('Escolaridade Generator', () => {
  test('should generate a valid education level', () => {
    const educationLevel = escolaridade();
    strictEqual(typeof educationLevel, 'string');
    strictEqual(educationLevel.length > 0, true);
  });
});
