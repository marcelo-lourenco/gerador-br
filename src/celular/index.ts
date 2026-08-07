import { ddd } from '../ddd/index.js';
import { codigoOperadora } from '../operadora/index.js';
import { stateRand } from '../utils/index.js';

/**
 * Gera um número de celular aleatório.
 *
 * @param mask - Se `true`, o celular será retornado com a máscara.
 * @param state - A sigla do estado para filtrar os DDDs.
 * @param operator - O nome da operadora ("Claro", "Oi", "Tim", "Vivo").
 * @returns O número de celular gerado.
 * @example
 * console.log(celular()); // "11999999999"
 * console.log(celular(true)); // "(11) 99999-9999"
 */
export function celular(mask?: boolean, state?: string, operator?: string): string {
  const n = () => Math.round(Math.random() * 9);
  const sortDdd = state ? ddd(state.toUpperCase()) : ddd(stateRand);
  const sortOperator = codigoOperadora(operator);
  const n3 = n();
  const n4 = n();
  const n5 = n();
  const n6 = n();
  const n7 = n();
  const n8 = n();

  const cellphoneGen = `(${sortDdd}) ${sortOperator}${n3}${n4}-${n5}${n6}${n7}${n8}`;

  return mask ? cellphoneGen : cellphoneGen.replace(/\D/g, '');
}
