import { ddd } from '../ddd/index.js';
import { stateRand } from '../utils/index.js';

/**
 * Gera um número de telefone fixo aleatório.
 *
 * @param mask - Se true, o telefone será retornado com máscara (XX) XXXX-XXXX.
 * @param state - A sigla do estado para filtrar os DDDs.
 * @returns O número de telefone gerado.
 * @example
 * console.log(telefone()); // "1123456789"
 * console.log(telefone(true, "SP")); // "(11) 2345-6789"
 */
export function telefone(mask?: boolean, state?: string): string {
  const n = () => Math.floor(Math.random() * 10);
  const nRange = (min: number, max: number) => min + Math.floor(Math.random() * (max - min + 1));

  const sortDdd = state ? ddd(state.toUpperCase()) : ddd(stateRand);
  const n1 = nRange(2, 3);
  const n2 = n();
  const n3 = n();
  const n4 = n();
  const n5 = n();
  const n6 = n();
  const n7 = n();
  const n8 = n();

  const telephoneGen = `(${sortDdd}) ${n1}${n2}${n3}${n4}-${n5}${n6}${n7}${n8}`;

  return mask ? telephoneGen : telephoneGen.replace(/\D/g, '');
}
