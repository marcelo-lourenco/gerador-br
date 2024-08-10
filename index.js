
import { apelido } from "./src/generators/apelido.js"
import { cnh } from "./src/generators/cnh.js"
import { cnhCategoria } from "./src/generators/cnh-categoria.js"
import { cnpj } from "./src/generators/cnpj.js"
import { cpf } from "./src/generators/cpf.js"
import { endereco, enderecoFnc } from "./src/generators/endereco.js"
import { rg } from "./src/generators/rg.js"


const gerar = {};


/**
 * Gera um apelido aleatório.
 * @returns {string} O apelido gerado.
 * @example
 * console.log(apelido()); // "Ace", "Alpha", etc.
 */
gerar.apelido = apelido;


/**
 * Gera um número de CNH aleatório.
 *
 * @returns {string} O número de CNH gerado.
 * @example
 * // CNH gerado
 * console.log(gerar.cnh()); // "123456789012"
 */
gerar.cnh = cnh;


/**
 * Gera uma categoria de CNH aleatória.
 * @returns {string} A categoria de CNH.
 * @example
 * console.log(cnhCategoria()); // "ACC", "A", "B", "C", "D", "E","AB", "AC", "AD" ou "AE"
 */
gerar.cnhCategoria = cnhCategoria;


/**
 * Gera um número de CNPJ aleatório.
 * @param {boolean} mask - Se `true`, o CNPJ será retornado com a máscara de formatação (xx.xxx.xxx/0001-xx). Se `false`, o CNPJ será retornado apenas com os dígitos.
 * @returns {string} O CNPJ gerado.
 * @example
 * // CNPJ com máscara
 * console.log(cnpj(true)); // "12.345.678/0001-00"
 *
 * // CNPJ sem máscara
 * console.log(cnpj(false)); // "12345678000100"
 */
gerar.cnpj = cnpj;


/**
 * Gera um número de CPF aleatório.
 * @param {boolean} mask - Se `true`, o CPF será retornado com a máscara de formatação (xxx.xxx.xxx-xx). Se `false`, o CPF será retornado apenas com os dígitos.
 * @param {string} [state] - A sigla do estado para determinar a origem do CPF. Se não fornecido, será escolhido um estado aleatório.
 * @returns {string} O CPF gerado.
 * @example
 * // CPF com máscara e do estado imformado
 * console.log(cpf(true, "PR")); // "123.456.789-09"
 *
 * // CPF sem máscara de formatação
 * console.log(cpf(false, "SC")); // "12345678909"
 *
 * // CPF com estado aleatório
 * console.log(cpf(true)); // "987.654.321-00"
 */
gerar.cpf = cpf;


/**
 * Gera um endereço aleatório com CEP mascarado.
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
 *
 * @example
 * console.log(endereco.cep);
 * // 12345-678
 *
 * @example
 * console.log(endereco.logradouro);
 * // Rua Exemplo
 */
gerar.endereco = endereco;


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
gerar.enderecoFnc = enderecoFnc;


/**
 * Gera um número de RG aleatório.
 * @param {boolean} mask - Se `true`, o RG será retornado com a máscara de formatação (xx.xxx.xxx-x). Se `false`, o RG será retornado apenas com os dígitos.
 * @returns {string} O RG gerado.
 * @example
 * // RG com máscara
 * console.log(rg(true)); // "12.345.678-9"
 *
 * // RG sem máscara
 * console.log(rg(false)); // "123456789"
 */
gerar.rg = rg;


export default gerar;
