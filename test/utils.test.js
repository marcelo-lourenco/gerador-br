import { describe, test } from 'node:test';
import { strictEqual, ok } from 'node:assert';
import * as utils from '../src/utils.js';
import * as db from '../src/data/db-general.js';

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
      strictEqual(state.length > 0, true, 'The state abbreviation should have a length greater than 0.');
    });
    test('should be a string', () => {
      strictEqual(typeof utils.stateRand, 'string', 'The state abbreviation should be a string.');
    });
    test('should be a valid state abbreviation', () => {
      ok(db.siglasEstados.includes(utils.stateRand), 'The state abbreviation should be present in the list of valid state abbreviations.');
    });
  });
});
