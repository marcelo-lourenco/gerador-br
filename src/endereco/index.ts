import dbCep from '../data/db-ceps.js';
import { stateRand } from '../utils/index.js';

export interface EnderecoData {
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  localidade: string;
  estado: string;
}

/**
 * Gera um endereço aleatório.
 *
 * @param mask - Se `true`, o CEP será retornado com a máscara de formatação (xxxxx-xxx).
 * @param state - A sigla do estado para filtrar os CEPs.
 * @returns O objeto de endereço gerado.
 * @example
 * console.log(endereco());
 * console.log(endereco(true, "SP"));
 */
export function endereco(mask = false, state?: string): EnderecoData {
  const uf = state ? state.toUpperCase() : stateRand;
  let fullAddress = dbCep.filter((enderecos) => enderecos.uf === uf);
  if (fullAddress.length === 0) {
    fullAddress = dbCep;
  }
  const sortAddress = fullAddress[Math.floor(Math.random() * fullAddress.length)]!;

  return {
    cep: mask ? sortAddress.cep : sortAddress.cep.replace(/\D/g, ''),
    logradouro: sortAddress.logradouro,
    numero: String(Math.floor(Math.random() * 999)),
    complemento: sortAddress.complemento,
    bairro: sortAddress.bairro,
    localidade: sortAddress.localidade,
    estado: sortAddress.uf,
  };
}
