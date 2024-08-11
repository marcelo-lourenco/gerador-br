import dbCep from '../../lib/db-ceps.js';
import { stateRand } from '../utils.js';

const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

/**
 * Gera um endereço aleatório.
 * @param {boolean} [mask=false] - Indica se o CEP deve ser mascarado.
 * @param {string} state - A sigla do estado para filtrar os endereços.
 * @returns {Object} Um objeto contendo os detalhes do endereço.
 * @returns {string} return.cep - O CEP do endereço.
 * @returns {string} return.logradouro - O logradouro do endereço.
 * @returns {number} return.numero - O número aleatório do endereço.
 * @returns {string} return.complemento - O complemento do endereço.
 * @returns {string} return.bairro - O bairro do endereço.
 * @returns {string} return.localidade - A localidade do endereço.
 * @returns {string} return.estado - A sigla do estado do endereço.
 * @example
 * const endereco = address(true, "SP");
 * console.log(endereco);
 * // {
 * //   cep: "12345-678",
 * //   logradouro: "Rua Exemplo",
 * //   numero: 123,
 * //   complemento: "Apto 101",
 * //   bairro: "Centro",
 * //   localidade: "São Paulo",
 * //   estado: "SP"
 * // }
 *
 * @example
 * const endereco = address(true, "RJ");
 * console.log(endereco.cep);
 * // 21362-100
 *
 * @example
 * console.log(endereco.logradouro);
 * // Travessa da Prata do Sossego
 */
export const enderecoFnc = function (mask = false, state) {
  const uf = state ? state : stateRand;
  const fullAddress = uf ? dbCep.filter(enderecos => enderecos.uf === uf) : dbCep;
  const sortAddress = getRandom(fullAddress);
  const address = {};
  address.cep = mask ? sortAddress.cep : sortAddress.cep.replace(/\D/g, '');
  address.logradouro = sortAddress.logradouro;
  address.numero = Math.floor(Math.random() * 999);
  address.complemento = sortAddress.complemento;
  address.bairro = sortAddress.bairro;
  address.localidade = sortAddress.localidade;
  address.estado = sortAddress.uf;
  return address;
}

/**
 * Um endereço aleatório gerado com CEP mascarado e filtrado pelo estado de São Paulo (SP).
 * @type {Object}
 * @property {string} cep - Retorna o CEP.
 * @property {string} logradouro -Retorna o logradouro.
 * @property {number} numero - Retorna o número aleatório.
 * @property {string} complemento - Retorna o complemento (caso exista).
 * @property {string} bairro - Retorna o bairro.
 * @property {string} localidade - Retorna o localidade (cidade/municipio/distrito/zona/região administrativa).
 * @property {string} estado - A sigla do estado.
 * @example
 * console.log(endereco);
 * // {
 * //   cep: "12345-678",
 * //   logradouro: "Rua Exemplo",
 * //   numero: 123,
 * //   complemento: "Apto 101",
 * //   bairro: "Centro",
 * //   localidade: "São Paulo",
 * //   estado: "SP"
 * // }
 */
export const endereco = enderecoFnc(false, stateRand);
