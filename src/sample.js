/* eslint-disable no-console */

import * as gerar from './index.js';

/* ******************** APELIDO ************************ */
// Gera apelido aleatório
console.log(gerar.apelido());

/* ******************** BANCOS ************************ */
// Gera dados de um banco aleatório
console.log(gerar.banco());

// Gera dados do banco informado
console.log(gerar.banco(237));

// Retorna uma lista de códigos de bancos
console.log(gerar.listaCodigosBancos());

/* ******************** CARTÃO DE CRÉDITO ************* */
// Gera objeto cartaoCredito com propriedades básicas
console.log(gerar.cartaoCredito());

// Gera com máscara e nome informado
console.log(gerar.cartaoCredito(true, 'João Santos da Silva'));

// Gera sem máscara e nome informado
console.log(gerar.cartaoCredito(false, 'Maria Aparecida Reis'));

/* ******************** CELULAR *********************** */
// Gera celular sem máscara, estado e operadora aleatórios
console.log(gerar.celular());

// Gera celular com máscara
console.log(gerar.celular(true));

// Gera celular para estado específico
console.log(gerar.celular(false, 'SC'));
console.log(gerar.celular(true, 'ES'));

// Gera celular para operadora específica
console.log(gerar.celular(false, '', 'Claro'));
console.log(gerar.celular(true, 'MS', 'Vivo'));

/* ******************** CEP *************************** */
// Gera CEP sem máscara
console.log(gerar.cep());

// Gera CEP com máscara
console.log(gerar.cep(true));

// Gera CEP para estado específico
console.log(gerar.cep(false, 'SP'));
console.log(gerar.cep(true, 'SP'));

/* ******************** CERTIDÕES ********************* */
// Gera certidão aleatória
console.log(gerar.certidao.aleatoria());
console.log(gerar.certidao.aleatoria(false));

// Gera certidão de nascimento
console.log(gerar.certidao.nascimento());
console.log(gerar.certidao.nascimento(false));

// Gera certidão de casamento
console.log(gerar.certidao.casamento());
console.log(gerar.certidao.casamento(false));

// Gera certidão de óbito
console.log(gerar.certidao.obito());
console.log(gerar.certidao.obito(false));

// Gera objetos detalhados de certidões
console.log(gerar.certidao.aleatoriaObj());
console.log(gerar.certidao.nascimentoObj());
console.log(gerar.certidao.casamentoObj());
console.log(gerar.certidao.obitoObj());

/* ******************** CNH *************************** */
// Gera CNH aleatória
console.log(gerar.cnh());

// Gera categoria CNH
console.log(gerar.cnhCategoria());

/* ******************** CNPJ ************************** */
// Gera CNPJ sem máscara
console.log(gerar.cnpj());

// Gera CNPJ com máscara
console.log(gerar.cnpj(true));

// Gera CNPJ Alfanumérico com máscara
console.log(gerar.cnpjAlfanumerico(true));

// Gera CNPJ Alfanumérico sem máscara
console.log(gerar.cnpjAlfanumerico(false));

// Gera CNPJ Alfanumérico Usando a função de compatibilidade
console.log(gerar.cnpj());


/* ******************** CNS *************************** */
// Gera CNS sem máscara e tipo aleatório
console.log(gerar.cns());

// Gera CNS com configurações específicas
console.log(gerar.cns(false, 'beneficiario'));
console.log(gerar.cns(false, 'profissional'));
console.log(gerar.cns(true));
console.log(gerar.cns(true, 'beneficiario'));
console.log(gerar.cns(true, 'profissional'));

/* ******************** CÓDIGO DE OPERADORA *********** */
// Gera códigos de operadoras
console.log(gerar.codigoOperadora());
console.log(gerar.codigoOperadora('Claro'));
console.log(gerar.codigoOperadora('Oi'));
console.log(gerar.codigoOperadora('Tim'));
console.log(gerar.codigoOperadora('Vivo'));
console.log(gerar.codigoOperadora('blablabla'));

/* ******************** CONTA BANCÁRIA *************** */
// Gera conta bancária aleatória
console.log(gerar.contaBancaria());

// Gera conta para bancos específicos
console.log(gerar.contaBancaria('Banco do Brasil'));
console.log(gerar.contaBancaria('Bradesco'));
console.log(gerar.contaBancaria('Caixa'));
console.log(gerar.contaBancaria('Citibank'));
console.log(gerar.contaBancaria('HSBC'));
console.log(gerar.contaBancaria('Itaú'));
console.log(gerar.contaBancaria('Santander'));

/* ******************** CPF ************************** */
// Gera CPF sem máscara
console.log(gerar.cpf());

// Gera CPF com máscara
console.log(gerar.cpf(true));

// Gera CPF para estados específicos
console.log(gerar.cpf(true, 'RS'));
console.log(gerar.cpf(false, 'MG'));

/* ******************** COR DA PELE *************** */
// Gera cor de pele aleatória
console.log(gerar.corPele());

// Gera tipo sanguíneo aleatório
console.log(gerar.tipoSanguineo());

/* ******************** DATAS *********************** */
// Gera data de nascimento aleatória
console.log(gerar.dataNascimento());

/* ******************** DDD ************************ */
// Gera DDD aleatório
console.log(gerar.ddd());

// Gera DDD para estado específico
console.log(gerar.ddd('SP'));

/* ******************** E-MAIL ********************* */
// Gera e-mail aleatório
console.log(gerar.email());

/* ******************** ENDEREÇO ******************* */
// Gera endereço completo
console.log(gerar.endereco());

// Gera endereço com CEP mascarado
console.log(gerar.endereco(true));

// Gera endereço para estado específico
console.log(gerar.endereco(false, "SP"));
console.log(gerar.endereco(true, "SP"));

/* ******************** ESCOLARIDADE *************** */
// Gera escolaridade aleatória
console.log(gerar.escolaridade());

/* ******************** IDENTIDADE DE GÊNERO ******* */
console.log(gerar.identidadeGenero());
console.log(gerar.identidadePorOrientacao());

/* ******************** INSCRIÇÃO ESTADUAL ******** */
// Gera IE aleatória
console.log(gerar.inscricaoEstadual());

// Gera IE para estado específico
console.log(gerar.inscricaoEstadual('SP'));

/* ******************** NOMES ********************* */
// Gera vários tipos de nomes
console.log(gerar.nome.aleatorio());
console.log(gerar.nome.aleatorioCompleto());
console.log(gerar.nome.doMeio());
console.log(gerar.nome.feminino());
console.log(gerar.nome.femininoCompleto());
console.log(gerar.nome.mae());
console.log(gerar.nome.maeCompleto());
console.log(gerar.nome.masculino());
console.log(gerar.nome.masculinoCompleto());
console.log(gerar.nome.pai());
console.log(gerar.nome.paiCompleto());
console.log(gerar.nome.sobrenome());

/* ******************** ORIENTAÇÃO SEXUAL ********* */
console.log(gerar.orientacaoSexual());

/* ******************** PASSAPORTE ************** */
// Gera passaporte aleatório
console.log(gerar.passaporte());

/* ******************** PIS *********************** */
// Gera PIS sem máscara
console.log(gerar.pis());

// Gera PIS com máscara
console.log(gerar.pis(true));

/* ******************** PLACAS DE VEÍCULOS ******* */
// Gera placa no formato antigo
console.log(gerar.placaAntiga());
console.log(gerar.placaAntiga(true));

// Gera placa no formato Mercosul
console.log(gerar.placaMercosul());
console.log(gerar.placaMercosul(true));

/* ******************** PROFISSÃO **************** */
// Gera profissão aleatória
console.log(gerar.profissao());

/* ******************** PROVEDOR DE E-MAIL ******* */
// Gera provedor de e-mail aleatório
console.log(gerar.provedorEmail());

/* ******************** RENAVAM ****************** */
// Gera RENAVAM aleatório
console.log(gerar.renavam());

/* ******************** RG *********************** */
// Gera RG sem máscara
console.log(gerar.rg());

// Gera RG com máscara
console.log(gerar.rg(true));

/* ******************** TELEFONE **************** */
// Gera telefone sem máscara
console.log(gerar.telefone());

// Gera telefone com máscara
console.log(gerar.telefone(true));

// Gera telefone para estado específico
console.log(gerar.telefone(false, "RJ"));
console.log(gerar.telefone(true, "RJ"));

/* ******************** TEXTO ******************* */
// Gera texto aleatório
console.log(gerar.palavra());
console.log(gerar.sentenca());
console.log(gerar.sentenca(10));
console.log(gerar.paragrafo());
console.log(gerar.paragrafo(3));
console.log(gerar.paragrafo(3, 8));

/* ******************** TÍTULO DE ELEITOR ******* */
// Gera título de eleitor
console.log(gerar.tituloEleitor());
console.log(gerar.tituloEleitor(true));
console.log(gerar.tituloEleitor(true, 'SE'));
console.log(gerar.tituloEleitor(false, 'PR'));

