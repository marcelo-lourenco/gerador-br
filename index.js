import * as utils from './src/utils.js';
import { nome } from './src/generators/nome.js';
import { banco, listaCodigosBancos } from './src/generators/banco.js';
import { cartaoCredito } from './src/generators/cartao-credito.js';
import { contaBancaria } from './src/generators/conta-bancaria.js';
import { cnh } from './src/generators/cnh.js';
import { cnpj } from './src/generators/cnpj.js';
import { cpf } from './src/generators/cpf.js';
import { rg } from './src/generators/rg.js';
import { pis } from './src/generators/pis.js';
import { cns } from './src/generators/cartao-nacional-saude.js';
import { passaporte } from './src/generators/passaporte.js';
import { tituloEleitor } from './src/generators/titulo-eleitor.js';
import { dataNascimento } from './src/generators/data-nascimento.js';
import { email } from './src/generators/email.js';
import { celular } from './src/generators/celular.js';
import { telefone } from './src/generators/telefone.js';
import { cep } from './src/generators/cep.js';
import { endereco } from './src/generators/endereco.js';
import { placaAntiga, placaMercosul } from './src/generators/placa.js';
import { renavam } from './src/generators/renavam.js';
import { ddd } from './src/generators/ddd.js';
import { codigoOperadora } from './src/generators/operadora.js';
import { palavra, sentenca, paragrafo } from './src/generators/texto.js';
import { inscricaoEstadual } from './src/generators/inscricao-estadual.js';

function apelido() {
  return utils.apelidoRand;
}

function corPele() {
  return utils.corPeleRand;
}
function tipoSanguineo() {
  return utils.tipoSanguineoRand;
}
function orientacaoSexual() {
  return utils.orientacaoSexualRand;
}
function identidadeGenero() {
  return utils.identidadeGeneroRand;
}
function identidadePorOrientacao() {
  return utils.identidadePorOrientacaoRand;
}
function provedorEmail() {
  return utils.provedorEmailRand;
}
function cnhCategoria() {
  return utils.categoriaCnhRand;
}
function profissao() {
  return utils.profissaoRand;
}
function escolaridade() {
  return utils.escolaridadeRand;
}

const gerar = {
  apelido: apelido(),
  corPele: corPele(),
  tipoSanguineo: tipoSanguineo(),
  orientacaoSexual: orientacaoSexual(),
  identidadeGenero: identidadeGenero(),
  identidadePorOrientacao: identidadePorOrientacao(),
  provedorEmail: provedorEmail(),
  cnhCategoria: cnhCategoria(),
  profissao: profissao(),
  escolaridade: escolaridade(),
};

/**
 * Gera nomes aleatórios.
 *
 * Este objeto fornece métodos para gerar nomes masculinos, femininos, completos, de mães e pais,
 * nomes do meio e sobrenomes.
 *
 * @example
 * // Gerar um nome aleatório
 * console.log(gerar.nome.aleatorio()); // Exemplo: "João", "Maria"
 *
 * // Gerar um nome aleatório completo
 * console.log(gerar.nome.aleatorio()); // Exemplo: "João Santos da Silva", "Maria Santos da Silva"
 *
 * // Gerar um nome masculino aleatório
 * console.log(gerar.nome.masculino()); // Exemplo: "João"
 *
 * // Gerar um nome masculino completo aleatório
 * console.log(gerar.nome.masculinoCompleto()); // Exemplo: "João Sousa da Silva"
 *
 * // Gerar um nome feminino aleatório
 * console.log(gerar.nome.feminino()); // Exemplo: "Maria"
 *
 * // Gerar um nome feminino completo aleatório
 * console.log(gerar.nome.femininoCompleto()); // Exemplo: "Maria Sousa da Silva"
 *
 * // Gerar o nome da mãe aleatório
 * console.log(gerar.nome.mae()); // Exemplo: "Ana"
 *
 * // Gerar o nome completo da mãe aleatório
 * console.log(gerar.nome.maeCompleto()); // Exemplo: "Ana Sousa da Silva"
 *
 * // Gerar o nome do pai aleatório
 * console.log(gerar.nome.pai()); // Exemplo: "José"
 *
 * // Gerar o nome completo do pai aleatório
 * console.log(gerar.nome.paiCompleto()); // Exemplo: "José Sousa da Silva"
 *
 * // Gerar um nome do meio aleatório
 * console.log(gerar.nome.doMeio()); // Exemplo: "Sousa"
 *
 * // Gerar um sobrenome aleatório
 * console.log(gerar.nome.sobrenome()); // Exemplo: "da Silva"
 */
gerar.nome = nome;

/**
 * Gera dados de um banco aleatório.
 *
 * @param {number} [code] - O código do banco. Se não for informado, um banco aleatório será gerado.
 * @returns {object} Um objeto contendo os dados do banco.
 * @example
 * // Gera dados de um banco aleatório
 * console.log(banco());
 * // =>
 * {
 *   codigoBanco: 341,
 *   nomeBanco: 'Itaú Unibanco S.A.',
 *   razaoSocial: 'Banco Itaú Unibanco - 341',
 *   ispb: '03415961'
 * }
 *
 * // Gera dados do banco informado
 * console.log(banco(237));
 * // =>
 * {
 *   codigoBanco: 237,
 *   nomeBanco: 'BANCO BRADESCO S.A.',
 *   razaoSocial: 'BANCO BRADESCO S.A.',
 *   ispb: '60746948'
 * }
 */
gerar.banco = banco();

/**
 * Retorna uma lista de códigos de bancos.
 *
 * @returns {array} Uma lista de códigos de bancos.
 * @example
 * // Retorna uma lista de códigos de bancos
 * console.log(listaCodigosBancos());
 * // => [ 1, 237, 104, 745, 296, 341, 33, ...]
 */
gerar.listaCodigosBancos = listaCodigosBancos();

/**
 * Gera Cartão de Crédito aleatório.
 * Este objeto fornece métodos para gerar número de Cartão de Crédito, Bandeira, CVV, Data De Expiração e Nome do Titular.
 * @param {boolean} [mask=false] - Se `true`, o número do cartão será retornado com a máscara de formatação (xxxx xxxx xxxx xxxx). Se `false`, o número do cartão será retornado apenas com os dígitos.
 * @param {string} - Nome completo do titula
 * @returns {object} Um objeto contendo o número do cartão, a bandeira, o CVV e a data de expiração e o nome do titular
 *
 * @example
 * // Gera objeto cartaoCredito com as propriedades: numero (sem máscara), bandeira, cvv, dataExpiracao e nomeTitular aleatório (abreviado)
 * console.log(gerar.cartaoCredito());
 * // =>
 *    {
 *      numero: '6547178146357745',
 *      bandeira: 'mastercard',
 *      cvv: '532',
 *      dataExpiracao: '12/07/2028',
 *      nomeTitular: 'BRENDA B LIMA'
 *    }
 *
 * // Gera objeto cartaoCredito com as propriedades: numero (com máscara), bandeira, cvv, dataExpiracao e nomeTitular informado (abreviado)
 * console.log(gerar.cartaoCredito(true, "João Santos da Silva"));
 * // =>
 *    {
 *      numero: '5534 5523 6833 6867',
 *      bandeira: 'visa',
 *      cvv: '866',
 *      dataExpiracao: '25/07/2033',
 *      nomeTitular: 'JOÃO S SILVA'
 *    }
 *
 * // Gera objeto cartaoCredito com as propriedades: numero (sem máscara), bandeira, cvv, dataExpiracao e nomeTitular informado (abreviado)
 * console.log(gerar.cartaoCredito(false, "Maria Aparecida Reis"));
 * // =>
 *    {
 *      numero: '5534552368336867',
 *      bandeira: 'visa',
 *      cvv: '866',
 *      dataExpiracao: '25/07/2033',
 *      nomeTitular: 'MARIA A REIS'
 *    }
 *
 */
gerar.cartaoCredito = cartaoCredito();

/**
 * Gera uma conta bancária aleatória.
/**
 * Gera uma conta bancária aleatória.
 *
 * Este objeto fornece métodos para gerar contas bancárias de diferentes bancos,
 * incluindo Banco do Brasil, Bradesco, Caixa, Citibank, HSBC, Itaú e Santander.
 *
 * @param {string} [bank='Indiferente'] - O nome do banco para gerar a conta.
 * Se não fornecido, um banco aleatório será escolhido.
 * @returns {object} Um objeto contendo o código do banco, o nome do banco,
 * a agência, o dígito verificador da agência, a conta, o dígito verificador da conta.
 *
 * @example
 * // Gera uma conta bancária aleatória do Banco do Brasil
 * console.log(gerar.contaBancaria('1'));
 * console.log(gerar.contaBancaria('Banco do Brasil'));
 * // =>
 *    {
 *      codigoBanco: 1,
 *      nomeBanco: 'Banco do Brasil',
 *      agencia: '1234-5',
 *      agenciaDv: '5',
 *      conta: '12345678-9',
 *      contaDv: '9'
 *    }
 *
 * // Gera uma conta bancária aleatória do Bradesco
 * console.log(gerar.contaBancaria('237'));
 * console.log(gerar.contaBancaria('Bradesco'));
 * // =>
 *    {
 *      codigoBanco: 237,
 *      nomeBanco: 'Bradesco',
 *      agencia: '1234-P',
 *      agenciaDv: 'P',
 *      conta: '123456-0',
 *      contaDv: '0'
 *    }
 *
 * // Gera uma conta bancária aleatória da Caixa
 * console.log(gerar.contaBancaria('104'));
 * console.log(gerar.contaBancaria('Caixa'));
 * // =>
 *    {
 *      codigoBanco: 104,
 *      nomeBanco: 'Caixa',
 *      agencia: '1234',
 *      agenciaDv: '',
 *      conta: '1234567890-0',
 *      contaDv: '0'
 *    }
 *
 * // Gera uma conta bancária aleatória do Citibank
 * console.log(gerar.contaBancaria('745'));
 * console.log(gerar.contaBancaria('Citibank'));
 * // =>
 *    {
 *      codigoBanco: 745,
 *      nomeBanco: 'Citibank',
 *      agencia: '1234',
 *      agenciaDv: '',
 *      conta: '1234567-0',
 *      contaDv: '0'
 *    }
 *
 * // Gera uma conta bancária aleatória do HSBC
 * console.log(gerar.contaBancaria('296'));
 * console.log(gerar.contaBancaria('HSBC'));
 * // =>
 *    {
 *      codigoBanco: 296,
 *      nomeBanco: 'HSBC',
 *      agencia: '1234',
 *      agenciaDv: '',
 *      conta: '123456-0',
 *      contaDv: '0'
 *    }
 *
 * // Gera uma conta bancária aleatória do Itaú
 * console.log(gerar.contaBancaria('341'));
 * console.log(gerar.contaBancaria('Itaú'));
 * // =>
 *    {
 *      codigoBanco: 341,
 *      nomeBanco: 'Itaú',
 *      agencia: '1234',
 *      agenciaDv: '',
 *      conta: '123456789-0',
 *      contaDv: '0'
 *    }
 *
 * // Gera uma conta bancária aleatória do Santander
 * console.log(gerar.contaBancaria('33'));
 * console.log(gerar.contaBancaria('Santander'));
 * // =>
 *    {
 *      codigoBanco: 33,
 *      nomeBanco: 'Santander',
 *      agencia: '1234',
 *      agenciaDv: '',
 *      conta: '12345678-0',
 *      contaDv: '0'
 *    }
 *
 * // Gera uma conta bancária aleatória de um banco aleatório
 * console.log(gerar.contaBancaria());
 * // =>
 *    {
 *      codigoBanco: 1,
 *      nomeBanco: 'Banco do Brasil',
 *      agencia: '1234-5',
 *      agenciaDv: '5',
 *      conta: '12345678-9',
 *      contaDv: '9'
 *    }
 */
gerar.contaBancaria = contaBancaria();

/**
 * Gera um número de CNH aleatório.
 * @returns {string} O número de CNH gerado.
 * @example
 * // CNH gerado
 * console.log(gerar.cnh()); // "123456789012"
 */
gerar.cnh = cnh;

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
 * // CPF com máscara e do estado informado
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
 * Gera um número de RG aleatório.
 * @param {boolean} mask - Se `true`, o RG será retornado com a máscara de formatação (xx.xxx.xxx-x). Se `false`, o RG será retornado apenas com os dígitos.
 * @returns {string} O RG gerado.
 * @example
 * // RG com máscara
 * console.log(gerar.rg(true)); // "12.345.678-9"
 *
 * // RG sem máscara
 * console.log(gerar.rg(false)); // "123456789"
 */
gerar.rg = rg;

/**
 * Gera um número de Cartão Nacional de Saúde (CNS) aleatório.
 * @param {boolean} mask - Se `true`, retorna o CNS com máscara (XXX XXXX XXXX XXXX).
 * @param {string} type - O tipo de CNS a ser gerado ('beneficiario' para beneficiários do SUS, 'profissional' para profissionais de saúde).
 * @returns {string} O número de CNS gerado.
 * @example
 * // CNS sem máscara e tipo aleatório
 * console.log(gerar.cns());
 *
 * // CNS sem máscara e do tipo informado
 * console.log(gerar.cns(false, 'beneficiario'));
 * console.log(gerar.cns(false, 'profissional'));
 *
 * // CNS com máscara e tipo aleatório
 * console.log(gerar.cns(true));
 *
 * // CNS com máscara e do tipo informado
 * console.log(gerar.cns(true, 'beneficiario'));
 * console.log(gerar.cns(true, 'profissional'));
 */
gerar.cns = cns;

/**
 * Gera um número de PIS aleatório.
 * @param {boolean} [mask=false] - Se `true`, o PIS será retornado com a máscara de formatação (xxx.xxxxx.xx.x). Se `false`, o PIS será retornado apenas com os dígitos.
 * @returns {string} O número de PIS gerado.
 * @example
 * // PIS sem máscara
 * console.log(pis()); // "12345678912"
 *
 * // PIS com máscara
 * console.log(pis(true)); // "123.45678.91.2"
 */
gerar.pis = pis;

/**
 * Gera um Título de Eleitor aleatório.
 * @param {boolean} mask - Se `true`, o Título de Eleitor será retornado com a máscara de formatação (xxxx xxxx xxxx xxxx). Se `false`, será retornado apenas com os dígitos.
 * @param {string} [state] - A sigla do estado para determinar a origem do Título de Eleitor. Se não fornecido, será escolhido um estado aleatório.
 * @returns {string} O Título de Eleitor gerado.
 * @example
 * // Título de Eleitor sem máscara e do estado aleatório
 * console.log(gerar.tituloEleitor()); // "123456789012"
 *
 * // Título de Eleitor com máscara e do estado aleatório
 * console.log(gerar.tituloEleitor(true)); // "1234 5678 9012"
 *
  * // Título de Eleitor sem máscara e do estado informado
 * console.log(gerar.tituloEleitor(false, 'ES')); // "123456789012"
 *
 * // Título de Eleitor com máscara e do estado informado
 * console.log(gerar.tituloEleitor(true, 'PE')); // "1234 5678 9012"
 */
gerar.tituloEleitor = tituloEleitor;

/**
 * Gera um número de Passoporte aleatório.
 *
 * @returns {string} O número de Passaporte gerado.
 * @example
 * // Passaporte gerado
 * console.log(gerar.passaporte()); // "AB1234567"
 */
gerar.passaporte = passaporte;

/**
 * Gera uma data de nascimento aleatória.
 * A data de nascimento gerada será entre 18 e 80 anos atrás da data atual.
 * @returns {string} A data de nascimento gerada no formato DD/MM/AAAA.
 * @example
 * // Data de nascimento gerada
 * console.log(gerar.dataNascimento()); // "20/03/1980"
 */
gerar.dataNascimento = dataNascimento;

/**
 * Gera um CEP aleatório.
 *
 * O CEP gerado pode ser formatado com máscara (xxxxx-xxx) ou apenas com os dígitos.
 *
 * @param {boolean} [mask=false] - Se `true`, o CEP será retornado com a máscara de formatação (xxxxx-xxx). Se `false`, o CEP será retornado apenas com os dígitos.
 * @param {string} [state] - A sigla do estado para filtrar os CEPs. Se não fornecido, um CEP de qualquer estado será gerado.
 * @returns {string} O CEP gerado.
 * @example
 * // CEP sem máscara
 * console.log(cep()); // "12345678"
 *
 * // CEP com máscara
 * console.log(cep(true)); // "12345-678"
 *
 * // CEP de São Paulo (SP) sem máscara
 * console.log(cep(false, "SP")); // "01001000"
 *
 * // CEP de São Paulo (SP) com máscara
 * console.log(cep(true, "SP")); // "01001-000"
 */
gerar.cep = cep;

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
gerar.endereco = endereco;

/**
 * Gera um endereço de e-mail aleatório.
 *
 * O endereço de e-mail gerado pode ser baseado em um nome completo fornecido ou em um apelido aleatório.
 *
 * @param {string} [fullName] - O nome completo a ser usado para gerar o endereço de e-mail. Se não fornecido, um apelido aleatório será usado.
 * @returns {string} O endereço de e-mail gerado.
 * @example
 * // Gera um endereço de e-mail com base em um apelido aleatório
 * console.log(gerar.email()); // Pode retornar algo como "alpha@gmail.com"
 *
 * // Gera um endereço de e-mail com base no nome fornecido "Marcelo Lourenço"
 * console.log(gerar.email("José Maria")); // Pode retornar algo como "jose.maria@ig.com"
 *
 * // Gera um endereço de e-mail com base no nome aleatório
 * console.log(gerar.email(gerar.nomeFemininoCompleto)); // Pode retornar algo como "ana.borges@hotmail.com"
 */
gerar.email = email;

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
 * // Gera celular sem máscara, de estado aleatório e operadora aleatória
 * console.log(gerar.celular()); // "11999999999"
 *
 * // Gera celular com máscara, de estado aleatório e operadora aleatória
 * console.log(gerar.celular(true)); // "(11) 99999-9999"
 *
 * // Gera celular sem máscara, do estado informado e operadora aleatória
 * console.log(gerar.celular(false, "SC")); // "48999999999"
 *
 * // Gera celular com máscara, do estado informado e operadora aleatória
 * console.log(gerar.celular(true, "ES")); // "(27) 99999-9999"
 *
 * // Gera celular sem máscara, do estado aleatório e operadora informada
 * console.log(gerar.celular(false, "", "Claro")); // "85991999999"
 *
 * // Gera celular com máscara, do estado informado e operadora aleatória
 * console.log(gerar.celular(true, "MS", "Vivo")); // "(67) 99799-9999"
 */
gerar.celular = celular;

/**
 * Gera um número de telefone aleatório.
 *
 * O número de telefone gerado pode ser formatado com máscara - (XX) XXXX-XXXX - ou apenas com os dígitos.
 *
 * @param {boolean} [mask=false] - Se `true`, o telefone será retornado com a máscara - (XX) XXXX-XXXX. Se `false`, o telefone será retornado apenas com os dígitos.
 * @param {string} [state] - A sigla do estado para filtrar os DDDs. Se não fornecido, um DDD de qualquer estado será gerado.
 * @returns {string} O número de telefone gerado.
 * @example
 * // Gera telefone sem máscara, de estado aleatório
 * console.log(gerar.telefone()); // "1199999999"
 *
 * // Gera telefone com máscara, de estado aleatório
 * console.log(gerar.telefone(true)); // "(11) 9999-9999"
 *
 * // Gera telefone sem máscara, do estado informado
 * console.log(gerar.telefone(false, "SC")); // "4899999999"
 *
 * // Gera telefone com máscara, do estado informado
 * console.log(gerar.telefone(true, "ES")); // "(27) 9999-9999"
 */
gerar.telefone = telefone;

/**
 * Gera um DDD aleatório para um estado brasileiro.
 *
 * @param {string} state - A sigla do estado (por exemplo, "SP", "RJ").
 * @returns {number} O DDD aleatório para o estado fornecido.
 * @example
 * // DDD aleatório para São Paulo (SP)
 * console.log(gerar.ddd("SP")); // Pode retornar 11, 12, 13, 14, 15, 16, 17, 18 ou 19
 *
 * // DDD aleatório para Rio de Janeiro (RJ)
 * console.log(gerar.ddd("RJ")); // Pode retornar 21, 22 ou 24
 */
gerar.ddd = ddd;

/**
* Gera um código de operadora de celular aleatório.
* ATENÇAO: DEVIDO A PORTABILIDADE, OS CÓDIGOS DE CELULARES REAIS PODEM NÃO PERTENCER MAIS A OPERADORA DE ORIGEM
* A função pode gerar um código de operadora aleatório ou um código específico de uma operadora fornecida.
*
* @param {string} [name] - O nome da operadora (por exemplo, "Claro", "Oi", "Tim", "Vivo"). Se não fornecido, um código de operadora aleatório será gerado.
* @returns {number} O código de operadora gerado.
* @example
* // Gera um código de operadora aleatório
* console.log(gerar.codigoOperadora()); // Pode retornar 968, 973, 984, 969, 967, etc.
*
* // Gera um código da Claro
* console.log(gerar.codigoOperadora("Claro")); // Pode retornar 968, 973, 974, 975, 976, 991, 992, 993 ou 994
*
* // Gera um código da Oi
* console.log(gerar.codigoOperadora("Oi")); // Pode retornar 984, 985, 986, 987, 988 ou 989
*
* // Gera um código da Tim
* console.log(gerar.codigoOperadora("Tim")); // Pode retornar 969, 979, 980, 981, 982 ou 983
*
* // Gera um código da Vivo
* console.log(gerar.codigoOperadora("Vivo")); // Pode retornar 967, 971, 972, 995, 996, 997, 998 ou 999
*
* // Gera um código de operadora aleatória (mesmo se o nome da operadora não for válido)
* console.log(gerar.codigoOperadora("blablabla")); // Pode retornar 968, 973, 984, 969, 967, etc.
*/
gerar.codigoOperadora = codigoOperadora;

/**
 * Gera uma placa de veículo aleatória no formato antigo (3 letras, 4 números).
 *
 * @param {boolean} [mask=false] - Se `true`, a placa será retornada com a máscara de formatação (XXX-9999). Se `false`, a placa será retornada apenas com os dígitos e letras.
 * @returns {string} A placa de veículo gerada.
 * @example
 * // Placa com máscara
 * console.log(gerar.placaAntiga(true)); // "ABC-1234"
 *
 * // Placa sem máscara
 * console.log(gerar.placaAntiga(false)); // "ABC1234"
 */
gerar.placaAntiga = placaAntiga;

/**
 * Gera uma placa de veículo aleatória no formato Mercosul (3 letras, 1 número, 1 letra, 2 números).
 *
 * @param {boolean} [mask=false] - Se `true`, a placa será retornada com a máscara de formatação (XXX-9X99). Se `false`, a placa será retornada apenas com os dígitos e letras.
 * @returns {string} A placa de veículo gerada.
 * @example
 * // Placa com máscara
 * console.log(gerar.placaMercosul(true)); // "ABC-1D23"
 *
 * // Placa sem máscara
 * console.log(gerar.placaMercosul(false)); // "ABC1D23"
 */
gerar.placaMercosul = placaMercosul;

/**
 * Gera um número de RENAVAM aleatório.
 *
 * @returns {string} O número de RENAVAM gerado.
 * @example
 * // RENAVAM gerado
 * console.log(gerar.renavam); // "12345678901"
 */
gerar.renavam = renavam;

/**
 * Gera uma palavra aleatória.
 *
 * @returns {string} Uma palavra aleatória.
 * @example
 * // Gera uma palavra aleatória
 * console.log(palavra()); // Exemplo: "Lorem", "ipsum", "dolor", "sit", "amet"
 */
gerar.palavra = palavra;

/**
 * Gera uma sentença aleatória.
 *
 * @param {number} [qttWords] - Quantidade de palavras na sentença. Se não for informado, será um número aleatório entre 10 e 20.
 * @returns {string} Uma sentença aleatória.
 * @example
 * // Gera uma sentença com quantidade de palavras aleatórias
 * console.log(sentenca()); // Exemplo: "Ea placeat, labore quidem, harum expedita fuga."
 *
 * // Gera uma sentença com a quantidade de palavras informada.
 * console.log(sentenca(10)); // Exemplo: "Dolorem sit modi deleniti nemo sint laborum vitae repellendus ipsa."
 */
gerar.sentenca = sentenca;

/**
 * Gera um parágrafo aleatório.
 *
 * @param {number} [qttParagraph=1] - Quantidade de parágrafos.
 * @param {number} [qttWords] - Quantidade de palavras por sentença. Se não for informado, será um número aleatório entre 10 e 20.
 * @returns {string} Um parágrafo aleatório.
 * @example
 * // Gera um parágrafo com quantidade de palavras aleatórias
 * console.log(paragrafo());
 * // Exemplo: "Recusandae. facilis consequuntur quae fuga. debitis quaerat architecto do placeat."
 *
 * // Gera um parágrafo com quantidade de sentença informada, cada uma com quantidade de palavras aleatórias
 * console.log(paragrafo(3));
 * // Exemplo:
 * "Lorem ipsum dolor sit amet.
 * Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
 *
 * // Gera um parágrafo com quantidade de sentenças e de palavras informadas.
 * console.log(paragrafo(3, 8));
 * // Exemplo:
 * "Labore ipsa, eius dolore corporis ipsam doloremque nobis.
 * Enim facilis fuga. voluptatem debitis veniam, hic atque.
 * Voluptates fugiat nesciunt, numquam reprehenderit, quae commodo minus."
 */
gerar.paragrafo = paragrafo;

/**
 * Gera Inscrição Estadual aleatório e do estado informado.
 *
 * @param {string} state A sigla do estado para o qual gerar a inscrição estadual (por exemplo, 'SP', 'RJ', 'MG').
 * @returns {string|null} O número de inscrição estadual gerado ou null se o estado não for encontrado.
 * @example
 * console.log('Sem informar o estado', gerar.inscricaoEstadual());
 * console.log('AC', gerar.inscricaoEstadual('AC')); // AC 01.335116638
 * console.log('AL', gerar.inscricaoEstadual('AL')); // AL 477703437
 * console.log('AP', gerar.inscricaoEstadual('AP')); // AP 03.42773842
 * console.log('AM', gerar.inscricaoEstadual('AM')); // AM 1107521283
 * console.log('BA', gerar.inscricaoEstadual('BA')); // BA 16408652-16
 * console.log('CE', gerar.inscricaoEstadual('CE')); // CE 6624523654
 * console.log('DF', gerar.inscricaoEstadual('DF')); // DF 0724.4814180
 * console.log('ES', gerar.inscricaoEstadual('ES')); // ES 754167445
 * console.log('GO', gerar.inscricaoEstadual('GO')); // GO 670680320
 * console.log('MA', gerar.inscricaoEstadual('MA')); // MA 122542860
 * console.log('MT', gerar.inscricaoEstadual('MT')); // MT 44183991682
 * console.log('MS', gerar.inscricaoEstadual('MS')); // MS 284825620
 * console.log('MG', gerar.inscricaoEstadual('MG')); // MG 1772090571220
 * console.log('PA', gerar.inscricaoEstadual('PA')); // PA 157594408
 * console.log('PB', gerar.inscricaoEstadual('PB')); // PB 899410081
 * console.log('PR', gerar.inscricaoEstadual('PR')); // PR 79686556-52
 * console.log('PE', gerar.inscricaoEstadual('PE')); // PE 341771429
 * console.log('PI', gerar.inscricaoEstadual('PI')); // PI 758080174
 * console.log('RJ', gerar.inscricaoEstadual('RJ')); // RJ 41038311.44
 * console.log('RN', gerar.inscricaoEstadual('RN')); // RN 49799347-3
 * console.log('RS', gerar.inscricaoEstadual('RS')); // RS 506246789
 * console.log('RO', gerar.inscricaoEstadual('RO')); // RO 51694723-0
 * console.log('RR', gerar.inscricaoEstadual('RR')); // RR 24022984
 * console.log('SC', gerar.inscricaoEstadual('SC')); // SC 037515098
 * console.log('SP', gerar.inscricaoEstadual('SP')); // SP 4081896624448
 * console.log('SE', gerar.inscricaoEstadual('SE')); // SE 555790451
 * console.log('TO', gerar.inscricaoEstadual('TO')); // TO 55582433-0
 */
gerar.inscricaoEstadual = inscricaoEstadual;

export default {
  gerar,
  nome,
  banco,
  listaCodigosBancos,
  cartaoCredito,
  contaBancaria,
  apelido,
  dataNascimento,
  corPele,
  tipoSanguineo,
  orientacaoSexual,
  identidadeGenero,
  identidadePorOrientacao,
  provedorEmail,
  cnh,
  cnhCategoria,
  profissao,
  escolaridade,
  cnpj,
  cpf,
  rg,
  pis,
  cns,
  tituloEleitor,
  passaporte,
  cep,
  endereco,
  email,
  celular,
  telefone,
  ddd,
  codigoOperadora,
  placaAntiga,
  placaMercosul,
  renavam,
  palavra,
  sentenca,
  paragrafo,
  inscricaoEstadual,
};
