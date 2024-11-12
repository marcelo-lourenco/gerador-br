import { ddd } from './ddd.js';
import { stateRand } from '../utils.js';

/**
 * Gera um número de telefone aleatório.
 *
 * O número de telefone gerado pode ser formatado com máscara - (XX) XXXX-XXXX - ou apenas com os dígitos.
 *
 * @param {boolean} [mask=false] - Se true, o telefone será retornado com a máscara - (XX) XXXX-XXXX. Se false, o telefone será retornado apenas com os dígitos.
 * @param {string} [state] - A sigla do estado para filtrar os DDDs. Se não fornecido, um DDD de qualquer estado será gerado.
 * @returns {string} O número de telefone gerado.
 * @example
 * // Telefone sem máscara, de estado aleatório
 * console.log(telefone()); // "1199999999"
 *
 * // Celular com máscara, de estado aleatório
 * console.log(telefone(true)); // "(11) 9999-9999"
 *
 * // Celular sem máscara, do estado informado
 * console.log(telefone(false, "SC")); // "4899999999"
 *
 * // Celular com máscara, do estado informado
 * console.log(telefone(true, "ES")); // "(27) 9999-9999"
 */
export function telefone(mask, state) {
  const n = () => Math.floor(Math.random() * 10);

  // Função para gerar um número aleatório entre min e max (inclusive)
  const nRange = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

  let sortDdd = state ? ddd(state) : ddd(stateRand);
  let n1 = nRange(2, 3);
  let n2 = n();
  let n3 = n();
  let n4 = n();
  let n5 = n();
  let n6 = n();
  let n7 = n();
  let n8 = n();

  let telephoneGen = `(${sortDdd}) ${n1}${n2}${n3}${n4}-${n5}${n6}${n7}${n8}`;

  return mask ? telephoneGen : telephoneGen.replace(/\D/g, '');
}
