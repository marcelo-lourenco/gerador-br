import { type EstadoUF, siglasEstados } from '../data/db-general.js';

/**
 * Retorna um número inteiro aleatório entre min (inclusive) e max (exclusivo).
 * @param min - O limite inferior (inclusivo).
 * @param max - O limite superior (exclusivo).
 * @returns Um número inteiro aleatório entre min e max.
 */
export const randomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Retorna um elemento aleatório de um array.
 * @param arr - O array do qual deve ser extraído um elemento aleatório.
 * @returns Um elemento aleatório do array.
 */
export const getRandom = <T>(arr: readonly T[] | T[]): T => {
  const index = randomInt(0, arr.length);
  return arr[index]!;
};

/**
 * Indica se o dado deve ser mascarado.
 */
export const mask = false;

/**
 * Uma sigla de estado aleatória.
 */
export const stateRand: EstadoUF = getRandom(siglasEstados);
