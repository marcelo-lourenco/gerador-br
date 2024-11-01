# Gerador de Dados Fictícios - Brasil

[![NPM version](https://img.shields.io/npm/v/gerador-br?logo=npm&logoColor=ffffff)](https://npmjs.org/package/gerador-br)
[![NPM downloads](https://img.shields.io/npm/dm/gerador-br.svg?logo=npm&logoColor=ffffff)](https://npmcharts.com/compare/gerador-br?minimal=true)
[![MIT License](https://img.shields.io/npm/l/gerador-br?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTMgNiAzIDFtMCAwLTMgOWE1IDUgMCAwIDAgNi4wMDEgME02IDdsMyA5TTYgN2w2LTJtNiAyIDMtMW0tMyAxLTMgOWE1IDUgMCAwIDAgNi4wMDEgME0xOCA3bDMgOW0tMy05LTYtMm0wLTJ2Mm0wIDE2VjVtMCAxNkg5bTMgMGgzIi8+PC9zdmc+)](LICENSE)
[![CodeQL](https://github.com/marcelo-lourenco/gerador-br/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/marcelo-lourenco/gerador-br/actions/workflows/github-code-scanning/codeql)
[![CI Test](https://github.com/marcelo-lourenco/gerador-br/actions/workflows/ci-test.yml/badge.svg)](https://github.com/marcelo-lourenco/gerador-br/actions/workflows/ci-test.yml)
[![ESLint](https://github.com/marcelo-lourenco/gerador-br/actions/workflows/eslint.yml/badge.svg)](https://github.com/marcelo-lourenco/gerador-br/actions/workflows/eslint.yml)
[![Coverage](https://img.shields.io/coveralls/github/marcelo-lourenco/gerador-br/master?logo=coveralls&logoColor=ffffff)](https://coveralls.io/github/marcelo-lourenco/gerador-br?branch=master)
[![FOSSA Licence](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmarcelo-lourenco%2Fgerador-br.svg?type=shield&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2Fmarcelo-lourenco%2Fgerador-br)
[![FOSSA Security](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmarcelo-lourenco%2Fgerador-br.svg?type=shield&issueType=security)](https://app.fossa.com/projects/git%2Bgithub.com%2Fmarcelo-lourenco%2Fgerador-br)

## Sobre

Gere dados fictícios, mas válidos, para testes e desenvolvimento.

Ideal para testes automatizados com **Cypress**, **Jest**, **Node.js Test Runner**, **Jasmine**, **Mocha**, **Chai**, **Supertest**, **Sinon** e **Puppeteer**.

O pacote fornece uma coleção de funções para gerar dados brasileiros aleatórios, como:

* [Gerador de Documento](guia-utilizacao?id=documentos-pf): CPF, RG, CNH, Título de Eleitor, PIS, CNS (Cartão Nacional Saúde), Passaporte,
* [Gerador de Pessoa](guia-utilizacao?id=pessoas): Nome, Nickname, Data de Nascimento, Cor de Pele, Orientação Sexual, Identidade de Gênero, Tipo Sanguíneo, Escolaridade e Profissão;
* [Gerador de Empresa](guia-utilizacao?id=documentos-pj): CNPJ e Inscrição Estadual;
* [Gerador de Endereço](guia-utilizacao?id=cep): CEP, Logradouro, Número, Bairro, Localidade e Estado;
* [Gerador de Contato](guia-utilizacao?id=contatos): E-mail, DDD, Operadora, Celular e Telefone;
* [Gerador de Conta Bancária](guia-utilizacao?id=bancos): Código do Banco, Nome do Banco, Agência Bancária e Conta Bancária;
* [Gerador de Cartão de Crédito](guia-utilizacao?id=cartaocredito): Número, Bandeira, CVV e Validade;
* [Gerador de Veículo](guia-utilizacao?id=ve%c3%8dculos): Placa Antiga, Placa Mercosul e RENAVAM;
* [Gerador de Texto (Lorem Ipsum)](guia-utilizacao?id=lorem-ipsum): Palavras, Sentenças e Parágrafos;

## Compatibilidade

O pacote foi testado e é compatível com as versões mais recentes dos seguinte frameworks:

[![Cypress](https://img.shields.io/badge/Cypress-%23007780?logo=cypress&logoColor=white)](#)
[![Jest](https://img.shields.io/badge/Jest-%2315c213?logo=jest&logoColor=white)](#)
[![Node.js Test Runner](https://img.shields.io/badge/Node.js%20Test%20Runner-%235FA04E?logo=nodedotjs&logoColor=white)](#)
[![Jasmine](https://img.shields.io/badge/Jasmine-%238a4182?logo=jasmine&logoColor=white)](#)
[![Mocha](https://img.shields.io/badge/Mocha-%238d6748?logo=mocha&logoColor=white)](#)
[![Chai](https://img.shields.io/badge/Chai-%23a40802?logo=chai&logoColor=white)](#)
[![Supertest](https://img.shields.io/badge/Supertest-%23F44336?logo=apachesuperset&logoColor=white)](#)
[![Puppeteer](https://img.shields.io/badge/Puppeteer-%232e8555?logo=puppeteer&logoColor=white)](#)
[![Sinon](https://img.shields.io/badge/Sinon-%234b352a?logo=sinon&logoColor=white)](#) 

## Contribuições

Contribuições são bem-vindas!

Faça um *fork* do [repositório](https://github.com/marcelo-lourenco/gerador-br) e sinta-se à vontade para enviar seus *pull requests*.

## Extensão Chrome

Todas essas funções foram utilizadas na [Extensão Chrome - Gerador de Dados Fictícios](https://chromewebstore.google.com/detail/ipfihnddjaepajgdamecijfdefikdgam).

Muito útil para preencher automaticamente os campos de formulários em testes manuais.

---

[Código de Conduta](https://github.com/marcelo-lourenco/gerador-br?tab=coc-ov-file#readme) • [Licença MIT](https://github.com/marcelo-lourenco/gerador-br?tab=MIT-1-ov-file#readme) • [Segurança](https://github.com/marcelo-lourenco/gerador-br/security) • [Changelog](https://github.com/marcelo-lourenco/gerador-br/blob/master/CHANGELOG.md) • [Fórum](https://github.com/marcelo-lourenco/gerador-br/discussions)
