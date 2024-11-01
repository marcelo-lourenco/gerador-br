# Guia de Utilização

## DOCUMENTOS PF

### cpf

```js
import { cpf } from 'gerador-br'; // ES Module
// const { cpf } = require('gerador-br'); // CommonJS

// Gera CPF sem máscara e de estado aleatório
cpf();

// Gera CPF com máscara e de estado aleatório
cpf(true);

 // Gera CPF com máscara e do estado informado
cpf(true, "RS");

// Gera CPF sem máscara e do estado informado
cpf(false, "MG");
```

### cnh

```js
import { cnh, cnhCategoria } from 'gerador-br'; // ES Module
// const { cnh, cnhCategoria } = require('gerador-br'); // CommonJS

// Gera CNH aleatória
cnh();

// Gera Categoria CNH
cnhCategoria();
```

### rg

```js
import { rg } from 'gerador-br'; // ES Module
// const { rg } = require('gerador-br'); // CommonJS

// Gera RG sem máscara
rg();

// Gera RG com máscara
rg(true);
```

### cns

```js
import { cns } from 'gerador-br'; // ES Module
// const { cns } = require('gerador-br'); // CommonJS

// Gera CNS (Cartão Nacional Saúde) sem máscara e tipo aleatório
cns();

// Gera CNS (Cartão Nacional Saúde) sem máscara e do tipo informado
cns(false, 'beneficiario');
cns(false, 'profissional');

// Gera CNS (Cartão Nacional Saúde) com máscara e tipo aleatório
cns(true);

// Gera CNS (Cartão Nacional Saúde) com máscara e do tipo informado
cns(true, 'beneficiario');
cns(true, 'profissional');
```

### pis

```js
import { pis } from 'gerador-br'; // ES Module
// const { pis } = require('gerador-br'); // CommonJS

// Gera PIS sem máscara
pis();

// Gera PIS com máscara
pis(true);
```

### tituloEleitor

```js
import { tituloEleitor } from 'gerador-br'; // ES Module
// const { tituloEleitor } = require('gerador-br'); // CommonJS

// Gera Título de Eleitor sem máscara e de estado aleatório
tituloEleitor();

// Gera Título de Eleitor com máscara e de estado aleatório
tituloEleitor(true);

// Gera Título de Eleitor sem máscara e de estado informado
tituloEleitor(true,'SE');

// Gera Título de Eleitor com máscara e de estado informado
tituloEleitor(false,'PR');
```

### passaporte

```js
import { passaporte } from 'gerador-br'; // ES Module
// const { passaporte } = require('gerador-br'); // CommonJS

// Gera Passaporte aleatório
passaporte();
```

## DOCUMENTOS PJ

### cnpj

```js
import { cnpj } from 'gerador-br'; // ES Module
// const { cnpj } = require('gerador-br'); // CommonJS

// Gera CNPJ sem máscara
cnpj();

// Gera CNPJ com máscara
cnpj(true);
```

### inscricaoEstadual

```js
import { inscricaoEstadual } from 'gerador-br'; // ES Module
// const { inscricaoEstadual } = require('gerador-br'); // CommonJS

// Gera Inscrição Estadual aleatório e do estado informado.
inscricaoEstadual(); // Sem informar o estado
inscricaoEstadual('AC'); // AC 01.335116638
inscricaoEstadual('AP'); // AP 03.42773842
inscricaoEstadual('BA'); // BA 16408652-16
inscricaoEstadual('DF'); // DF 0724.4814180
inscricaoEstadual('RJ'); // RJ 41038311.44
```

## BANCOS

### banco

```js
import { banco } from 'gerador-br'; // ES Module
// const { banco } = require('gerador-br'); // CommonJS

// Gera dados de um banco aleatório
banco();

// Opcionalmente, atribua o objeto a uma variável e utilize as propriedades
const bnc = banco();
console.log(bnc.codigoBanco);
console.log(bnc.nomeBanco);
console.log(bnc.razaoSocial);
console.log(bnc.ispb);

// Gera dados do banco informado
banco(237);
```

### listaCodigosBancos

```js
import { listaCodigosBancos } from 'gerador-br'; // ES Module
// const { listaCodigosBancos } = require('gerador-br'); // CommonJS

// Retorna uma lista de códigos de bancos
listaCodigosBancos();
```

### cartaoCredito

```js
import { cartaoCredito } from 'gerador-br'; // ES Module
// const { cartaoCredito } = require('gerador-br'); // CommonJS

// Gera objeto cartaoCredito com as propriedades:
// numero (sem máscara), bandeira, cvv, dataExpiracao e nomeTitular aleatório (abreviado)
cartaoCredito();

// Opcionalmente, atribua o objeto a uma variável e utilize as propriedades
const cc = cartaoCredito();
console.log(cc.numero);
console.log(cc.bandeira);
console.log(cc.cvv);
console.log(cc.dataExpiracao);
console.log(cc.nomeTitular);

// Gera objeto cartaoCredito com as propriedades:
// numero (com máscara), bandeira, cvv, dataExpiracao e nomeTitular informado (abreviado)
cartaoCredito(true, "João Santos da Silva");

// Gera objeto cartaoCredito com as propriedades:
// numero (sem máscara), bandeira, cvv, dataExpiracao e nomeTitular informado (abreviado)
cartaoCredito(false, "Maria Aparecida Reis");

// Gera objeto cartaoCredito com as propriedades:
// numero (com máscara), bandeira, cvv, dataExpiracao e nomeTitular gerado (abreviado)
cartaoCredito(true, nome.femininoCompleto());
```

### contaBancaria

```js
import { contaBancaria } from 'gerador-br'; // ES Module
// const { contaBancaria } = require('gerador-br'); // CommonJS

// Gera uma conta bancária aleatória de um banco aleatório
contaBancaria();

// Opcionalmente, atribua o objeto a uma variável e utilize as propriedades
const cb = contaBancaria();
console.log(cb.codigoBanco);
console.log(cb.nomeBanco);
console.log(cb.agencia);
console.log(cb.agenciaDv);
console.log(cb.conta);
console.log(cb.contaDv);

// Gera uma conta bancária aleatória do Banco do Brasil
contaBancaria('1');
contaBancaria('Banco do Brasil');

// Gera uma conta bancária aleatória do Bradesco
contaBancaria("237");
contaBancaria('Bradesco');

// Gera uma conta bancária aleatória da Caixa
contaBancaria('104');
contaBancaria('Caixa');

// Gera uma conta bancária aleatória do Citibank
contaBancaria('745');
contaBancaria('Citibank');

// Gera uma conta bancária aleatória do HSBC
contaBancaria('296');
contaBancaria('HSBC');

// Gera uma conta bancária aleatória do Itaú
contaBancaria('341');
contaBancaria('Itaú');

// Gera uma conta bancária aleatória do Santander
contaBancaria('33');
contaBancaria('Santander');
```

## PESSOAS

### nome

```js
import { nome } from 'gerador-br'; // ES Module
// const { nome } = require('gerador-br'); // CommonJS

// Gera um nome aleatório (feminino ou masculino)
nome.aleatorio();

// Gera um nome aleatório completo (feminino ou masculino)
nome.aleatorioCompleto();

// Gera um nome masculino aleatório
nome.masculino();

// Gera um nome masculino completo aleatório
nome.masculinoCompleto();

// Gera um nome feminino aleatório
nome.feminino();

// Gera um nome feminino completo aleatório
nome.femininoCompleto();

// Gera o nome da mãe aleatório
nome.mae();

// Gera o nome completo da mãe aleatório
nome.maeCompleto();

// Gera o nome do pai aleatório
nome.pai();

// Gera o nome completo do pai aleatório
nome.paiCompleto();

// Gera um nome do meio aleatório
nome.doMeio();

// Gera um sobrenome aleatório
nome.sobrenome();
```

### apelido

```js
import { apelido } from 'gerador-br'; // ES Module
// const { apelido } = require('gerador-br'); // CommonJS

// Gera apelido aleatório
apelido();
```

### dataNascimento

```js
import { dataNascimento } from 'gerador-br'; // ES Module
// const { dataNascimento } = require('gerador-br'); // CommonJS

// Gera data de nascimento aleatória
dataNascimento();
```

### escolaridade

```js
import { escolaridade } from 'gerador-br'; // ES Module
// const { escolaridade } = require('gerador-br'); // CommonJS

// Gera escolaridade
escolaridade();
```

### profissao

```js
import { profissao } from 'gerador-br'; // ES Module
// const { profissao } = require('gerador-br'); // CommonJS

// Gera profissão
profissao();
```

### corPele

```js
import { corPele } from 'gerador-br'; // ES Module
// const { corPele } = require('gerador-br'); // CommonJS

// Gera cor de pele aleatória
corPele();
```

### tipoSanguineo

```js
import { tipoSanguineo } from 'gerador-br'; // ES Module
// const { tipoSanguineo } = require('gerador-br'); // CommonJS

// Gera tipo sanguíneo aleatório
tipoSanguineo();
```

<!-- TODO 
## genero

```js
import { genero } from 'gerador-br'; // ES Module
// const { genero } = require('gerador-br'); // CommonJS

// Gera gênero aleatório
genero();
```

## orientacaoSexual
```js
import { orientacaoSexual } from 'gerador-br'; // ES Module
// const { orientacaoSexual } = require('gerador-br'); // CommonJS

// Gera orientação sexual aleatória
orientacaoSexual();
```

## identidadeGenero
```js
import { identidadeGenero } from 'gerador-br'; // ES Module
// const { identidadeGenero } = require('gerador-br'); // CommonJS

// Gera identidade de gênero aleatória
identidadeGenero();
```
-->

## CONTATOS

### email

```js
import { email } from 'gerador-br'; // ES Module
// const { email } = require('gerador-br'); // CommonJS

// Gera e-mail com nickname aleatório
email();

// Gera e-mail com nome masculino
const nomeMasculinoCompleto = nome.masculinoCompleto();
email(nomeMasculinoCompleto);

// Gera e-mail com nome feminino
const nomeFemininoCompleto = nome.femininoCompleto();
email(nomeFemininoCompleto);
```

### ddd

```js
import { ddd } from 'gerador-br'; // ES Module
// const { ddd } = require('gerador-br'); // CommonJS

 // Gera DDD aleatório
ddd();

// Gera DDD aleatório do estado informado
ddd("PA");
```

### codigoOperadora

> ATENÇAO: Devido a portabilidade, celulares reais podem não pertencer mais a operadora de origem

```js
import { codigoOperadora } from 'gerador-br'; // ES Module
// const { codigoOperadora } = require('gerador-br'); // CommonJS

// Gera um código da Claro (968, 973, 974, 975, 976, 991, 992, 993 ou 994)
codigoOperadora("Claro");

// Gera um código da Oi (984, 985, 986, 987, 988 ou 989)
codigoOperadora("Oi");

// Gera um código da Tim (969, 979, 980, 981, 982 ou 983)
codigoOperadora("Tim");

// Gera um código da Vivo (967, 971, 972, 995, 996, 997, 998 ou 999)
codigoOperadora("Vivo");

// Gera um código de uma operadora aleatória
codigoOperadora();

// Gera um código de uma operadora aleatória
codigoOperadora("blablabla");

```

### celular

```js
import { celular } from 'gerador-br'; // ES Module
// const { celular } = require('gerador-br'); // CommonJS

// Gera celular sem máscara, de estado aleatório e operadora aleatória
celular(); // "11999999999"

// Gera celular com máscara, de estado aleatório e operadora aleatória
celular(true); // "(11) 99999-9999"

// Gera celular sem máscara, do estado informado e operadora aleatória
celular(false, "SC"); // "48999999999"

// Gera celular com máscara, do estado informado e operadora aleatória
celular(true, "ES"); // "(27) 99999-9999"

// Gera celular sem máscara, do estado aleatório e operadora informada
celular(false, "", "Claro"); // "85991999999"

// Gera celular com máscara, do estado informado e operadora aleatória
celular(true, "MS", "Vivo"); // "(67) 99799-9999"
```

### telefone

```js
import { telefone } from 'gerador-br'; // ES Module
// const { telefone } = require('gerador-br'); // CommonJS

// Gera telefone sem máscara, de estado aleatório
telefone(); // "1199999999"

// Gera telefone com máscara, de estado aleatório
telefone(true); // "(11) 9999-9999"

// Gera telefone sem máscara, do estado informado
telefone(false, "SC"); // "4899999999"

// Gera telefone com máscara, do estado informado
telefone(true, "ES"); // "(27) 9999-9999"

```

### cep

```js
import { cep } from 'gerador-br'; // ES Module
// const { cep } = require('gerador-br'); // CommonJS

// Gera CEP sem máscara de estado aleatório
cep(); // "12345678"

// Gera CEP com máscara de estado aleatório
cep(true); // "12345-678"

// Gera CEP sem máscara de estado informado
cep(false, "SP"); // "01001000"

// Gera CEP com máscara de estado informado
cep(true, "SP"); // "01001-000"
```

### endereco

```js
import { endereco } from 'gerador-br'; // ES Module
// const { endereco } = require('gerador-br'); // CommonJS

// Gera um objeto com todos os campos do endereço e de estado aleatório
endereco();

// Gera um objeto com todos os campos do endereço, o CEP com máscara e de estado aleatório
endereco(true);

// Gera um objeto com todos os campos do endereço, o CEP sem máscara e de estado aleatório
endereco(false);

// Gera um objeto com todos os campos do endereço, o CEP com máscara e do estado informado
endereco(true, "RJ");

// Gera um objeto com todos os campos do endereço, o CEP sem máscara e do estado informado
endereco(false, "SP");

// Opcionalmente, gere um endereço e utilize apenas a propriedade desejada
const end = endereco();
console.log(end.cep);
console.log(end.logradouro);
console.log(end.numero);
console.log(end.complemento);// caso exista
console.log(end.bairro);
console.log(end.localidade);
console.log(end.estado);
```

## VEÍCULOS

### placaAntiga

```js
import { placaAntiga } from 'gerador-br'; // ES Module
// const { placaAntiga } = require('gerador-br'); // CommonJS

// Gera placa no formato antigo com máscara "ABC-1234"
placaAntiga(true);

// Gera placa no formato antigo sem máscara "ABC1234"
placaAntiga(false);
```

### placaMercosul

```js
import { placaMercosul } from 'gerador-br'; // ES Module
// const { placaMercosul } = require('gerador-br'); // CommonJS

// Gera placa no formato Mercosul sem máscara "ABC1D23"
placaMercosul(true);

// Gera placa no formato Mercosul com máscara "ABC-1D23"
placaMercosul(false);
```

### renavam

```js
import { renavam } from 'gerador-br'; // ES Module
// const { renavam } = require('gerador-br'); // CommonJS

// Gera RENAVAM
renavam();
```

## LOREM IPSUM

### palavra

```js
import { palavra } from 'gerador-br'; // ES Module
// const { palavra } = require('gerador-br'); // CommonJS

// Gera uma palavra aleatória
palavra();
```

### sentenca

```js
import { sentenca } from 'gerador-br'; // ES Module
// const { sentenca } = require('gerador-br'); // CommonJS

// Gera uma sentença com quantidade de palavras aleatórias
sentenca();

// Gera uma sentença com quantidade de palavras definida
sentenca(10);
```

### paragrafo

```js
import { paragrafo } from 'gerador-br'; // ES Module
// const { paragrafo } = require('gerador-br'); // CommonJS

// Gera um parágrafo com quantidade de palavras aleatórias
paragrafo();

// Gera um parágrafo com quantidade de sentença informada, cada uma com quantidade de palavras aleatórias
paragrafo(5);

// Gera um parágrafo com quantidade de sentenças e de palavras informadas.
paragrafo(3,8);
```
