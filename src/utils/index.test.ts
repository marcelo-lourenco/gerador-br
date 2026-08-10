import { ok, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import * as db from '../data/db-general.js';
import * as utils from './index.js';

describe('Utils', () => {
  describe('getRandom', () => {
    test('should return a random element from an array', () => {
      const arr = [1, 2, 3, 4, 5];
      const randomElement = utils.getRandom(arr);
      ok(arr.includes(randomElement), 'The random element should be present in the array.');
    });
  });

  describe('stateRand', () => {
    test('should generate a valid state abbreviation', () => {
      const state = utils.stateRand;
      strictEqual(
        state.length > 0,
        true,
        'The state abbreviation should have a length greater than 0.',
      );
    });
    test('should be a string', () => {
      strictEqual(typeof utils.stateRand, 'string', 'The state abbreviation should be a string.');
    });
    test('should be a valid state abbreviation', () => {
      ok(
        db.siglasEstados.includes(utils.stateRand as any),
        'The state abbreviation should be present in the list of valid state abbreviations.',
      );
    });
  });
});
