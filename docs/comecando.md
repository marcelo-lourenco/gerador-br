# COMEÇANDO

## Instalação

```bash
npm install gerador-br
```

## Importação

***ES Module***

```js
import gerar from 'gerador-br';
```

***CommonsJS***

```js
const gerar = require('gerador-br');
```

## Utilização

***Named import:*** Importe apenas a(s) função(ões) que desejar

```js
// ES Module
import { nome, cpf, cnpj, placaMercosul } from 'gerador-br';

// CommonJS
// const { nome, cpf, cnpj, placaMercosul } = require('gerador-br');

console.log(nome.femininoCompleto());   // Ex: "Maria"
console.log(cpf());                     // Gera CPF sem máscara e do estado aleatório
console.log(cpf(false, "PE"));          // Gera CPF sem máscara e do estado info
console.log(cnpj(true));                // Gera CNPJ com máscara
console.log(placaMercosul(true));       // Gera placa no formato Mercosul com máscara "ABC-1D23"
```

***Default import:*** Importe todo o módulo **`gerar`** e depois use qualquer função que desejar

> Observação: Todas as funções do modulo `gerar` podem ser importadas individualmente (como nos exemplos acima - *named import*)

```js
// ES Module:
import gerar from 'gerador-br';

// CommonJS:
// const gerar = require('gerador-br');


/* ******************** DOCUMENTOS ********************** */
// Gera CNH aleatória
console.log(gerar.cnh());

// Gera Categoria CNH
console.log(gerar.cnhCategoria());

// Gera CNPJ sem máscara
console.log(gerar.cnpj());

// Gera CNPJ com máscara
console.log(gerar.cnpj(true));

// Gera CPF sem máscara e de estado aleatório
console.log(gerar.cpf());

// Gera CPF com máscara e de estado aleatório
console.log(gerar.cpf(true));

 // Gera CPF com máscara e do estado informado
console.log(gerar.cpf(true, "RS"));

// Gera CPF sem máscara e do estado informado
console.log(gerar.cpf(false, "MG"));

// Gera RG sem máscara
console.log(gerar.rg());

// Gera RG com máscara
console.log(gerar.rg(true));

// Gera CNS (Cartão Nacional Saúde) sem máscara e tipo aleatório
console.log(gerar.cns());

// Gera CNS (Cartão Nacional Saúde) sem máscara e do tipo informado
console.log(gerar.cns(false, 'beneficiario'));
console.log(gerar.cns(false, 'profissional'));

// Gera CNS (Cartão Nacional Saúde) com máscara e tipo aleatório
console.log(gerar.cns(true));

// Gera CNS (Cartão Nacional Saúde) com máscara e do tipo informado
console.log(gerar.cns(true, 'beneficiario'));
console.log(gerar.cns(true, 'profissional'));

// Gera PIS sem máscara
console.log(gerar.pis());

// Gera PIS com máscara
console.log(gerar.pis(true));

// Gera Título de Eleitor sem máscara e de estado aleatório
console.log(gerar.tituloEleitor());

// Gera Título de Eleitor com máscara e de estado aleatório
console.log(gerar.tituloEleitor(true));

// Gera Título de Eleitor sem máscara e de estado informado
console.log(gerar.tituloEleitor(true,'SE'));

// Gera Título de Eleitor com máscara e de estado informado
console.log(gerar.tituloEleitor(false,'PR'));

// Gera Passaporte aleatório
console.log(gerar.passaporte());

// Gera Inscrição Estadual aleatório e do estado informado.
console.log('Sem informar o estado', gerar.inscricaoEstadual());
console.log('AC', gerar.inscricaoEstadual('AC')); // AC 01.335116638
console.log('AP', gerar.inscricaoEstadual('AP')); // AP 03.42773842
console.log('BA', gerar.inscricaoEstadual('BA')); // BA 16408652-16
console.log('DF', gerar.inscricaoEstadual('DF')); // DF 0724.4814180
console.log('RJ', gerar.inscricaoEstadual('RJ')); // RJ 41038311.44


/* ******************** BANCOS ************************** */
// Gera dados de um banco aleatório
console.log(gerar.banco());

// Opcionalmente, atribua o objeto a uma variável e utilize as propriedades
const bnc = gerar.banco();
console.log(bnc.codigoBanco);
console.log(bnc.nomeBanco);
console.log(bnc.razaoSocial);
console.log(bnc.ispb);

// Gera dados do banco informado
console.log(gerar.banco(237));

// Retorna uma lista de códigos de bancos
console.log(gerar.listaCodigosBancos());


/* ******************** CARTÃO DE CRÉDITO *************** */
// Gera objeto cartaoCredito com as propriedades:
//   numero (sem máscara), bandeira, cvv, dataExpiracao e nomeTitular aleatório (abreviado)
console.log(gerar.cartaoCredito());

// Opcionalmente, atribua o objeto a uma variável e utilize as propriedades
const cc = gerar.cartaoCredito();
console.log(cc.numero);
console.log(cc.bandeira);
console.log(cc.cvv);
console.log(cc.dataExpiracao);
console.log(cc.nomeTitular);

// Gera objeto cartaoCredito com as propriedades:
// numero (com máscara), bandeira, cvv, dataExpiracao e nomeTitular informado (abreviado)
console.log(gerar.cartaoCredito(true, "João Santos da Silva"));

// Gera objeto cartaoCredito com as propriedades:
// numero (sem máscara), bandeira, cvv, dataExpiracao e nomeTitular informado (abreviado)
console.log(gerar.cartaoCredito(false, "Maria Aparecida Reis"));

// Gera objeto cartaoCredito com as propriedades:
// numero (com máscara), bandeira, cvv, dataExpiracao e nomeTitular gerado (abreviado)
console.log(gerar.cartaoCredito(true, gerar.nome.femininoCompleto()));


/* ******************** CONTA BANCÁRIA ****************** */
// Gera uma conta bancária aleatória de um banco aleatório
console.log(gerar.contaBancaria());

// Opcionalmente, atribua o objeto a uma variável e utilize as propriedades
const cb = gerar.contaBancaria();
console.log(cb.codigoBanco);
console.log(cb.nomeBanco);
console.log(cb.agencia);
console.log(cb.agenciaDv);
console.log(cb.conta);
console.log(cb.contaDv);

// Gera uma conta bancária aleatória do Banco do Brasil
console.log(gerar.contaBancaria('1'));
console.log(gerar.contaBancaria('Banco do Brasil'));

// Gera uma conta bancária aleatória do Bradesco
console.log(gerar.contaBancaria("237"));
console.log(gerar.contaBancaria('Bradesco'));

// Gera uma conta bancária aleatória da Caixa
console.log(gerar.contaBancaria('104'));
console.log(gerar.contaBancaria('Caixa'));

// Gera uma conta bancária aleatória do Citibank
console.log(gerar.contaBancaria('745'));
console.log(gerar.contaBancaria('Citibank'));

// Gera uma conta bancária aleatória do HSBC
console.log(gerar.contaBancaria('296'));
console.log(gerar.contaBancaria('HSBC'));

// Gera uma conta bancária aleatória do Itaú
console.log(gerar.contaBancaria('341'));
console.log(gerar.contaBancaria('Itaú'));

// Gera uma conta bancária aleatória do Santander
console.log(gerar.contaBancaria('33'));
console.log(gerar.contaBancaria('Santander'));


/* ******************** NOME **************************** */
// Gera um nome aleatório (feminino ou masculino)
console.log(gerar.nome.aleatorio());

// Gera um nome aleatório completo (feminino ou masculino)
console.log(gerar.nome.aleatorioCompleto());

// Gera um nome masculino aleatório
console.log(gerar.nome.masculino());

// Gera um nome masculino completo aleatório
console.log(gerar.nome.masculinoCompleto());

// Gera um nome feminino aleatório
console.log(gerar.nome.feminino());

// Gera um nome feminino completo aleatório
console.log(gerar.nome.femininoCompleto());

// Gera o nome da mãe aleatório
console.log(gerar.nome.mae());

// Gera o nome completo da mãe aleatório
console.log(gerar.nome.maeCompleto());

// Gera o nome do pai aleatório
console.log(gerar.nome.pai());

// Gera o nome completo do pai aleatório
console.log(gerar.nome.paiCompleto());

// Gera um nome do meio aleatório
console.log(gerar.nome.doMeio());

// Gera um sobrenome aleatório
console.log(gerar.nome.sobrenome());

// Gera apelido aleatório
console.log(gerar.apelido());


/* ******************** DATAS *************************** */
// Gera data de nascimento aleatória
console.log(gerar.dataNascimento());


/* ******************** E-MAIL ************************** */
// Gera e-mail com nickname aleatório
console.log(gerar.email());

// Gera e-mail com nome masculino
const nomeMasculinoCompleto =gerar.nome.masculinoCompleto();
console.log(gerar.email(nomeMasculinoCompleto));

// Gera e-mail com nome feminino
const nomeFemininoCompleto = gerar.nome.femininoCompleto();
console.log(gerar.email(nomeFemininoCompleto));


/* ******************** ESCOLARIDADE ******************** */
// Gera escolaridade
console.log(gerar.escolaridade());


/* ******************** PROFISSÃO *********************** */
// Gera profissão
console.log(gerar.profissao());


/* ******************** DDD ***************************** */
 // Gera DDD aleatório
console.log(gerar.ddd());

// Gera DDD aleatório do estado informado
console.log(gerar.ddd("PA"));


/* ******************** CÓDIGO DE OPERADORA ************** */
// ATENÇAO: Devido a portabilidade, celulares reais podem não pertencer mais a operadora de origem

// Gera um código da Claro (968, 973, 974, 975, 976, 991, 992, 993 ou 994)
console.log(gerar.codigoOperadora("Claro"));

// Gera um código da Oi (984, 985, 986, 987, 988 ou 989)
console.log(gerar.codigoOperadora("Oi"));

// Gera um código da Tim (969, 979, 980, 981, 982 ou 983)
console.log(gerar.codigoOperadora("Tim"));

// Gera um código da Vivo (967, 971, 972, 995, 996, 997, 998 ou 999)
console.log(gerar.codigoOperadora("Vivo"));

// Gera um código de uma operadora aleatória
console.log(gerar.codigoOperadora());

// Gera um código de uma operadora aleatória
console.log(gerar.codigoOperadora("blablabla"));


/* ******************** CELULAR ************************* */
// Gera celular sem máscara, de estado aleatório e operadora aleatória
console.log(gerar.celular()); // "11999999999"

// Gera celular com máscara, de estado aleatório e operadora aleatória
console.log(gerar.celular(true)); // "(11) 99999-9999"

// Gera celular sem máscara, do estado informado e operadora aleatória
console.log(gerar.celular(false, "SC")); // "48999999999"

// Gera celular com máscara, do estado informado e operadora aleatória
console.log(gerar.celular(true, "ES")); // "(27) 99999-9999"

// Gera celular sem máscara, do estado aleatório e operadora informada
console.log(gerar.celular(false, "", "Claro")); // "85991999999"

// Gera celular com máscara, do estado informado e operadora aleatória
console.log(gerar.celular(true, "MS", "Vivo")); // "(67) 99799-9999"


/* ******************** CELULAR ************************* */
// Gera telefone sem máscara, de estado aleatório
console.log(gerar.telefone()); // "1199999999"

// Gera telefone com máscara, de estado aleatório
console.log(gerar.telefone(true)); // "(11) 9999-9999"

// Gera telefone sem máscara, do estado informado
console.log(gerar.telefone(false, "SC")); // "4899999999"

// Gera telefone com máscara, do estado informado
console.log(gerar.telefone(true, "ES")); // "(27) 9999-9999"


/* ******************** SOBRE A PESSOA ****************** */
// Gera cor de pele aleatória
console.log(gerar.corPele());

// Gera tipo sanguíneo aleatório
console.log(gerar.tipoSanguineo());


/* ******************** CEP *************************** */
// Gera CEP sem máscara de estado aleatório
console.log(gerar.cep()); // "12345678"

// Gera CEP com máscara de estado aleatório
console.log(gerar.cep(true)); // "12345-678"

// Gera CEP sem máscara de estado informado
console.log(gerar.cep(false, "SP")); // "01001000"

// Gera CEP com máscara de estado informado
console.log(gerar.cep(true, "SP")); // "01001-000"


/* ******************** ENDEREÇO ************************ */
// Gera um objeto com todos os campos do endereço e de estado aleatório
console.log(gerar.endereco());

// Gera um objeto com todos os campos do endereço, o CEP com máscara e de estado aleatório
console.log(gerar.endereco(true));

// Gera um objeto com todos os campos do endereço, o CEP sem máscara e de estado aleatório
console.log(gerar.endereco(false));

// Gera um objeto com todos os campos do endereço, o CEP com máscara e do estado informado
console.log(gerar.endereco(true, "RJ"));

// Gera um objeto com todos os campos do endereço, o CEP sem máscara e do estado informado
console.log(gerar.endereco(false, "SP"));


// Opcionalmente, gere um endereço e utilize apenas a propriedade desejada
const enderecoGerado = gerar.endereco();
console.log(enderecoGerado.cep);
console.log(enderecoGerado.logradouro);
console.log(enderecoGerado.numero);
console.log(enderecoGerado.complemento);// caso exista
console.log(enderecoGerado.bairro);
console.log(enderecoGerado.localidade);
console.log(enderecoGerado.estado);


/* ******************** VEÍCULO ************************* */
// Gera placa no formato antigo com máscara "ABC-1234"
console.log(gerar.placaAntiga(true));

// Gera placa no formato antigo sem máscara "ABC1234"
console.log(gerar.placaAntiga(false));

// Gera placa no formato Mercosul sem máscara "ABC1D23"
console.log(gerar.placaMercosul(true));

// Gera placa no formato Mercosul com máscara "ABC-1D23"
console.log(gerar.placaMercosul(false));

// Gera RENAVAM
console.log(gerar.renavam());


/* ******************** TEXTO *************************** */
// Gera uma palavra aleatória
console.log(gerar.palavra());

// Gera uma sentença com quantidade de palavras aleatórias
console.log(gerar.sentenca());

// Gera uma sentença com quantidade de palavras definida
console.log(gerar.sentenca(10));

// Gera um parágrafo com quantidade de palavras aleatórias
console.log(gerar.paragrafo());

// Gera um parágrafo com quantidade de sentença informada, cada uma com quantidade de palavras aleatórias
console.log(gerar.paragrafo(5));

// Gera um parágrafo com quantidade de sentenças e de palavras informadas.
console.log(gerar.paragrafo(3,8));
```

## Contribuições

Contribuições são bem-vindas! Faça um *fork* do [repositório](https://github.com/marcelo-lourenco/gerador-br) e sinta-se à vontade para enviar seus *pull requests*.

## Extensão Chrome

Todas essas funções foram utilizadas na [Extensão Chrome - Gerador de Dados Fictícios](https://chromewebstore.google.com/detail/ipfihnddjaepajgdamecijfdefikdgam).
Muito útil para preencher automaticamente os campos de formulários em testes manuais.

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmarcelo-lourenco%2Fgerador-br.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fmarcelo-lourenco%2Fgerador-br?ref=badge_large)

---

[Código de Conduta](https://github.com/marcelo-lourenco/gerador-br?tab=coc-ov-file#readme) • [Licença MIT](https://github.com/marcelo-lourenco/gerador-br?tab=MIT-1-ov-file#readme) • [Segurança](https://github.com/marcelo-lourenco/gerador-br/security) • [Changelog](https://github.com/marcelo-lourenco/gerador-br/blob/master/CHANGELOG.md) • [Fórum](https://github.com/marcelo-lourenco/gerador-br/discussions)

---

<footer style="text-align: center; font-size: smaller;">
Template by: <a href="https://github.com/brazilian-utils/brazilian-utils">brazilian-utils</a>
</footer>