import { stateRand } from '../utils.js';
import { ddd } from './ddd.js';
import { codigoOperadora } from './operadora.js';

/**
 * Gera um número de celular aleatório.
 *
 * O número de celular gerado pode ser formatado com máscara ( (DDD) 9XXXX-XXXX ) ou apenas com os dígitos.
 *
 * @param {boolean} [mask=false] - Se `true`, o celular será retornado com a máscara de formatação ( (DDD) 9XXXX-XXXX ). Se `false`, o celular será retornado apenas com os dígitos.
 * @param {string} [state] - A sigla do estado para filtrar os DDDs. Se não fornecido, um DDD de qualquer estado será gerado.
 * @param {string} [operator] - O nome da operadora (por exemplo, "Claro", "Oi", "Tim", "Vivo"). Se não fornecido, uma operadora aleatória será gerada.
 * @returns {string} O número de celular gerado.
 * @example
 * // Celular sem máscara, de estado aleatório e operadora aleatória
 * console.log(celular()); // "11999999999"
 *
 * // Celular com máscara, de estado aleatório e operadora aleatória
 * console.log(celular(true)); // "(11) 99999-9999"
 *
 * // Celular sem máscara, do estado informado e operadora aleatória
 * console.log(celular(false, "SC")); // "48999999999"
 *
 * // Celular com máscara, do estado informado e operadora aleatória
 * console.log(celular(true, "ES")); // "(27) 99999-9999"
 *
 * // Celular sem máscara, do estado aleatório e operadora informada
 * console.log(celular(false, "", "Claro")); // "85991999999"
 *
 * // Celular com máscara, do estado informado e operadora aleatória
 * console.log(celular(true, "MS", "Vivo")); // "(67) 99799-9999"
 */
export function celular(mask, state, operator) {
  let n = () => Math.round(Math.random() * 9);
  let sortDdd = state ? ddd(state) : ddd(stateRand);
  let sortOperator = codigoOperadora(operator); // Claro, Oi, Tim, Vivo
  const n3 = n(); const n4 = n(); const n5 = n(); const n6 = n(); const n7 = n(); const
    n8 = n();

  let cellphoneGen = `(${sortDdd}) ${sortOperator}${n3}${n4}-${n5}${n6}${n7}${n8}`;

  return mask ? cellphoneGen : cellphoneGen.replace(/\D/g, '');
}
