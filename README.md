# Gerador de Dados Fictícios - Brasil

Gere dados fictício, mas válidos, para testes e desenvolvimento.

Ideal para testes automatizados com **Mocha**, **Chai**, **Jest**,  **Jasmine**, **Sinon**, **Supertest**, **Nock**, **Cypress**, **Puppeteer**, **Enzyme** e **Node.js Test Runner**

O pacote fornece uma coleção de funções para gerar dados brasilerios aleatórios, como:

* **Gerador de Documento**: CPF, RG, CNH, Título de Eleitor, PIS, CNS, Passaporte,
* **Gerador de Pessoa**: Nome, Nickname, Data de Nascimento, Cor, Orientação Sexual, Identidade de Gênero e Tipo Sanguíneo;
* **Gerador de Empresa**: CNPJ, Inscrição Estadual;
* **Gerador de Endereço**: Cep, Logradouro, Número, Bairro, Localidade e Estado;
* **Gerador de Contato**: E-mail, DDD, Celular e Telefone;
* **Gerador de Conta Bancária**: Código do Banco, Nome do Banco, Agência Bancária e Conta Bancária;
* **Gerador de Cartão de Crédito**: Número, Bandeira, CVV e Validade;
* **Gerador de Veículo**: Placa Antiga, Placa Mercosul e Renavam;

## Instalação

```bash
npm install gerador-br
```

## Uso

### *Named import*

Importe apenas a(s) função(ões) que desejar

```js
import { nome, cpf, cnpj, placaMercosul } from 'gerador-br';

console.log(nome.femininoCompleto());   // Ex: "Maria"
console.log(cpf());                     // Gera CPF sem máscara e do estado informado
console.log(cpf(false, "PE"));          // Gera CPF com máscara e do estado informado
console.log(cnpj(true));                // Gera CNPJ com máscara
console.log(placaMercosul(true));       // Gera placa no formato Mercosul sem máscara "ABC1D23"
```

### *Default import*

Importe todo o módulo `gerar` e depois use qualquer função que desejar

> Observação: Todas as funções do modulo `gerar` podem ser importadas individualmente (como nos exemplos acima - *named import*)

```js
import gerar from 'gerador-br';

/* ******************** DOCUMENTOS ********************** */
// Gera CNH aleatória
console.log(gerar.cnh());

// Gera Categoria CNH
console.log(gerar.cnhCategoria());

// Gera CNPJ sem máscara
console.log(gerar.cnpj());

// Gera CNPJ com máscara
console.log(gerar.cnpj(true));

// Gera CPF sem mascara e de estado aleatório
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

// Gera CNS (Cartão Cacional Saúde) sem máscara
console.log(gerar.cns());

// Gera CNS (Cartão Cacional Saúde) com máscara
console.log(gerar.cns(true));

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

// Gerar Passaporte aleatório
console.log(gerar.passaporte());


/* ******************** NOME **************************** */
// Gera um nome aleatório (apenas o primeiro nome - feminino ou masculino)
console.log(gerar.nome.aleatorio());

// Gera um nome aleatório completo (feminino ou marculino)
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


/* ******************** DDD ***************************** */
 // Gera DDD aleatório
console.log(gerar.ddd());

// Gera DDD aleatório do estado informado
console.log(gerar.ddd("PA"));


/* ******************** CÓDIGO DE OPERDORA ************** */
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


/* ******************** SOBRE A PESSOA ****************** */
// Gerar cor de pele aleatória
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

// Gerar RENAVAM
console.log(gerar.renavam());
```

## Extenção Chrome - Gerador de Dados Fictícios

Todas essas funções foram utilizadas na extenção [Gerador de Dados Fictícios](https://chromewebstore.google.com/detail/ipfihnddjaepajgdamecijfdefikdgam).
Muito útil para prencher automaticamente os campos de formulários em os testes manuais.

---

[Código de Conduta](https://github.com/marcelo-lourenco/gerador-br?tab=coc-ov-file) • [Licença MIT](https://github.com/marcelo-lourenco/gerador-br?tab=MIT-1-ov-file) • [Segurança](https://github.com/marcelo-lourenco/gerador-br/security) • [Changelog](https://github.com/marcelo-lourenco/gerador-br/blob/master/changelog.md)
