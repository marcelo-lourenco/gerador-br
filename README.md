# ![gerador-br](/docs/assets/images/icons/favicon-24x24.svg) gerador-br

[![NPM version](https://img.shields.io/npm/v/gerador-br?logo=npm&logoColor=ffffff)](https://npmjs.org/package/gerador-br)
[![NPM downloads](https://img.shields.io/npm/dm/gerador-br.svg?logo=npm&logoColor=ffffff)](https://npmcharts.com/compare/gerador-br?minimal=true)
[![jsDelivr](https://img.shields.io/jsdelivr/npm/hm/gerador-br?logo=jsDelivr&logoColor=ff5627)](https://www.jsdelivr.com/package/npm/gerador-br)
[![CodeQL](https://github.com/marcelo-lourenco/gerador-br/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/marcelo-lourenco/gerador-br/actions/workflows/github-code-scanning/codeql)
[![CI Test](https://github.com/marcelo-lourenco/gerador-br/actions/workflows/ci-test.yml/badge.svg)](https://github.com/marcelo-lourenco/gerador-br/actions/workflows/ci-test.yml)
[![ESLint](https://github.com/marcelo-lourenco/gerador-br/actions/workflows/eslint.yml/badge.svg)](https://github.com/marcelo-lourenco/gerador-br/actions/workflows/eslint.yml)
[![Coverage](https://img.shields.io/coveralls/github/marcelo-lourenco/gerador-br/master?logo=coveralls&logoColor=ffffff)](https://coveralls.io/github/marcelo-lourenco/gerador-br?branch=master)
[![FOSSA Licence](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmarcelo-lourenco%2Fgerador-br.svg?type=shield&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2Fmarcelo-lourenco%2Fgerador-br)
[![FOSSA Security](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmarcelo-lourenco%2Fgerador-br.svg?type=shield&issueType=security)](https://app.fossa.com/projects/git%2Bgithub.com%2Fmarcelo-lourenco%2Fgerador-br)

**Gerador de Dados Fictícios - Brasil**
Gere dados fictícios/válidos, para testes e desenvolvimento de Software.

Ideal para testes automatizados com **Cypress**, **Playwright**, **Jest**, **Node.js Test Runner**, **Jasmine**, **Mocha**, **Chai**, **Supertest**, **Sinon** e **Puppeteer**.

O pacote fornece uma coleção de funções para gerar dados brasileiros aleatórios, como:

* [Gerador de Documento](https://marcelo-lourenco.github.io/gerador-br/documentacao/#documentos-pf): CPF, RG, CNH, Título de Eleitor, PIS, CNS (Cartão Nacional Saúde), Passaporte e Certidão (Nascimento, Casamento e Óbito)
* [Gerador de Pessoa](https://marcelo-lourenco.github.io/gerador-br/documentacao/#pessoas): Nome, Nickname, Data de Nascimento, Cor de Pele, Orientação Sexual, Identidade de Gênero, Tipo Sanguíneo, Escolaridade e Profissão;
* [Gerador de Empresa](https://marcelo-lourenco.github.io/gerador-br/documentacao/#documentos-pj): CNPJ, CNPJ Alfanumérico, Inscrição Estadual e Nome Empresa;
* [Gerador de Endereço](https://marcelo-lourenco.github.io/gerador-br/documentacao/#endereco): CEP, Logradouro, Número, Bairro, Localidade e Estado;
* [Gerador de Contato](https://marcelo-lourenco.github.io/gerador-br/documentacao/#contatos): E-mail, DDD, Operadora, Celular e Telefone;
* [Gerador de Conta Bancária](https://marcelo-lourenco.github.io/gerador-br/documentacao/#contaBancaria): Código do Banco, Nome do Banco, Agência Bancária e Conta Bancária;
* [Gerador de Cartão de Crédito](https://marcelo-lourenco.github.io/gerador-br/documentacao/#cartaoCredito): Número, Bandeira, CVV e Validade;
* [Gerador de Veículo](https://marcelo-lourenco.github.io/gerador-br/documentacao/#veiculos): Placa Antiga, Placa Mercosul e RENAVAM;
* [Gerador de Texto (Lorem Ipsum)](https://marcelo-lourenco.github.io/gerador-br/documentacao/#lorem-ipsum): Palavras, Sentenças e Parágrafos;

## Instalação

```bash
npm install gerador-br
```

```bash
yarn add gerador-br
```

## Importação

***ES Module***

```js
import { gerar } from 'gerador-br';
```

***CommonsJS***

```js
const gerar = require('gerador-br');
```

## Utilização

> Veja todos os exemplos na [documentação](https://marcelo-lourenco.github.io/gerador-br/#/guia-utilizacao).

**Importe apenas a(s) função(ões) que desejar:**

```js
import { nome, cpf, cnpj, placaMercosul } from 'gerador-br'; // ES Module
// const { nome, cpf, cnpj, placaMercosul } = require('gerador-br'); // CommonJS

console.log(nome.femininoCompleto());
console.log(cpf());
console.log(cnpj());
console.log(placaMercosul());
```

**Ou, importe todo o módulo `gerar` e depois use qualquer função que desejar**:

```js
import { gerar } from 'gerador-br'; // ES Module:
// const gerar = require('gerador-br'); // CommonJS:

console.log(gerar.nome.femininoCompleto());
console.log(gerar.cpf());
console.log(gerar.cnpj());
console.log(gerar.contaBancaria());
console.log(gerar.cartaoCredito());
```

**Outros exemplos:**

```js
import { gerar } from 'gerador-br'; // ES Module:
// const gerar = require('gerador-br'); // CommonJS:

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

/* ******************** Gênero *************** */
// Gera gênero aleatório
console.log(gerar.genero('f'));
console.log(gerar.genero('m'));
console.log(gerar.genero('i'));
console.log(gerar.genero());
console.log(gerar.genero(null));
console.log(gerar.genero('x'));

/* ****ORIENTAÇÃO SEXUAL E IDENTIDADE DE GÊNERO ******* */
console.log(gerar.orientacaoSexual());
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

/* ******************** NOME EMPRESA ********************* */
// Gera nome de empresa Baseado em filmes, séries, livros, videogames. animação, hq, etc.
console.log(gerar.nomeEmpresa())
console.log(gerar.nomeEmpresa("BR"))

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


```

## Compatibilidade

O pacote foi testado e é compatível com as versões mais recentes dos seguinte frameworks:

[![Cypress](https://img.shields.io/badge/Cypress-%23007780?logo=cypress&logoColor=white)](#)
[![Jest](https://img.shields.io/badge/Jest-%2315c213?logo=jest&logoColor=white)](#)
[![Node.js Test Runner](https://img.shields.io/badge/Node.js%20Test%20Runner-%235FA04E?logo=nodedotjs&logoColor=white)](#)
[![Jasmine](https://img.shields.io/badge/Jasmine-%238a4182?logo=jasmine&logoColor=white)](#)
[![Playwright](https://img.shields.io/badge/Playwright-%232EAD33?logo=playwright&logoColor=white)](#)
[![Mocha](https://img.shields.io/badge/Mocha-%238d6748?logo=mocha&logoColor=white)](#)
[![Chai](https://img.shields.io/badge/Chai-%23a40802?logo=chai&logoColor=white)](#)
[![Supertest](https://img.shields.io/badge/Supertest-%23F44336?logo=apachesuperset&logoColor=white)](#)
[![Puppeteer](https://img.shields.io/badge/Puppeteer-%232e8555?logo=puppeteer&logoColor=white)](#)
[![Sinon](https://img.shields.io/badge/Sinon-%234b352a?logo=sinon&logoColor=white)](#)

## Contribuições

Contribuições são bem-vindas! Faça um *fork* do  [repositório](https://github.com/marcelo-lourenco/gerador-br) e sinta-se à vontade para enviar seus *pull requests*.

## Demo

**Essas funções foram utilizadas nas seguintes aplicações:**

[Extensão Chrome - Gerador de Dados Fictícios](https://chromewebstore.google.com/detail/ipfihnddjaepajgdamecijfdefikdgam) - Muito útil para preencher automaticamente os campos de formulários em testes manuais.

[Gerador-BR](https://marcelo-lourenco.github.io/gerador-br/geradores/) - Gerador de dados on-line.

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmarcelo-lourenco%2Fgerador-br.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fmarcelo-lourenco%2Fgerador-br?ref=badge_large)

---

[Código de Conduta](https://github.com/marcelo-lourenco/gerador-br?tab=coc-ov-file#readme) • [Licença MIT](https://github.com/marcelo-lourenco/gerador-br?tab=MIT-1-ov-file#readme) • [Segurança](https://github.com/marcelo-lourenco/gerador-br/security) • [Changelog](https://github.com/marcelo-lourenco/gerador-br/blob/master/CHANGELOG.md) • [Fórum](https://github.com/marcelo-lourenco/gerador-br/discussions)
