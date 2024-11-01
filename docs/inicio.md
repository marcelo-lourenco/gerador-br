# COMEÇANDO

## Instalação

```shell
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

> Veja todos os exemplos no [Guia de Utilização](guia-utilizacao.md)

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
import gerar from 'gerador-br'; // ES Module:
// const gerar = require('gerador-br'); // CommonJS:

console.log(gerar.nome.femininoCompleto());
console.log(gerar.cpf());
console.log(gerar.cnpj();
console.log(gerar.contaBancaria());
console.log(gerar.cartaoCredito());
```

> Veja todos os exemplos no [Guia de Utilização](guia-utilizacao.md)
