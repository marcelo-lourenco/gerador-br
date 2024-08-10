import { categoriaCnhRand } from '../utils.js';

/**
 * Gera uma categoria de CNH aleatória.
 * @returns {string} A categoria de CNH.
 * @example
 * console.log(cnhCategoria()); // "ACC", "A", "B", "C", "D", "E","AB", "AC", "AD" ou "AE"
 */
export function cnhCategoria() {
  return categoriaCnhRand;
}
