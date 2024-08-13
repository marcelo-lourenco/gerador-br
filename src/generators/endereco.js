import dbCep from '../../lib/db-ceps.js';
import { stateRand } from '../utils.js';

const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

/**
 * Gera um endereço aleatório.
 *
 * O endereço gerado pode ser formatado com máscara (xxxxx-xxx) ou apenas com os dígitos.
 *
 * @param {boolean} [mask=false] - Se `true`, o CEP será retornado com a máscara de formatação (xxxxx-xxx). Se `false`, o CEP será retornado apenas com os dígitos.
 * @param {string} [state] - A sigla do estado para filtrar os CEPs. Se não fornecido, um CEP de qualquer estado será gerado.
 * @returns {object} O endereço gerado.
 * @example
 * // Endereço sem máscara
 * console.log(endereco()); // { cep: '12345678', logradouro: 'Rua dos Pinheiros', numero: 123, complemento: 'Apto 101', bairro: 'Jardim Paulista', localidade: 'São Paulo', estado: 'SP' }
 *
 * // Endereço com máscara
 * console.log(endereco(true)); // { cep: '12345-678', logradouro: 'Rua dos Pinheiros', numero: 123, complemento: 'Apto 101', bairro: 'Jardim Paulista', localidade: 'São Paulo', estado: 'SP' }
 *
 * // Endereço de São Paulo (SP) sem máscara
 * console.log(endereco(false, "SP")); // { cep: '01001000', logradouro: 'Rua da Consolação', numero: 123, complemento: 'Apto 101', bairro: 'Consolação', localidade: 'São Paulo', estado: 'SP' }
 *
 * // Endereço de São Paulo (SP) com máscara
 * console.log(endereco(true, "SP")); // { cep: '01001-000', logradouro: 'Rua da Consolação', numero: 123, complemento: 'Apto 101', bairro: 'Consolação', localidade: 'São Paulo', estado: 'SP' }
 */
export function endereco(mask = false, state) {
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
