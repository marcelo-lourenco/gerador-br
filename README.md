# Gerador de Dados Fictícios - Brasil

Gere dados fictício, mas válidos, para testes e desenvolvimento.

Ideal para testes automatizados com **Mocha**, **Chai**, **Jest**,  **jasmine**, **Sinon**, **Supertest**, **Nock**, **Cypress**, **Puppeteer**, **Enzyme** e **Node.js Test Runner**

O pacote fornece uma coleção de funções para gerar dados brasilerios aleatórios, como:

* **Gerador de Documento**: CPF, RG, CNH, Título de Eleitor, PIS, CNS, Passaporte,
* **Gerador de Pessoa**: Nome, Nickname, Data de Nascimento, Cor, Orientação Sexual, Identidade de Gênero e Tipo Sanguíneo;
* **Gerador de Empresa**: CNPJ, Inscrição Estadual;
* **Gerador de Endereço**: Cep, Logradouro, Número, Bairro, Localidade e Estado;
* **Gerador de Contato**: E-mail, Celular e Telefone;
* **Gerador de Conta Bancária**: Código do Banco, Nome do Banco, Agência Bancária e Conta Bancária;
* **Gerador de Cartão de Crédito**: Número, Bandeira, CVV e Validade;
* **Gerador de Veículo**: Placa Antiga, Placa Mercosul e Renavam;

## Instalação

```bash
npm install gerador-br
```

## Uso

```js
import gerar from 'gerador-br';
// Gerar um nome aleatório
console.log(gerar.nome.aleatorio()); // Ex: "João", "Maria"

 // Gerar um nome aleatório completo
console.log(gerar.nome.aleatorioCompleto()); // Ex: "João Santos da Silva", "Maria Santos da Silva"

// Gerar um nome masculino aleatório
console.log(gerar.nome.masculino()); // Ex: "João"

// Gerar um nome masculino completo aleatório
console.log(gerar.nome.masculinoCompleto()); // Ex: "João Santos da Silva"

// Gerar um nome feminino aleatório
console.log(gerar.nome.feminino()); // Ex: "Maria"

// Gerar um nome feminino completo aleatório
console.log(gerar.nome.femininoCompleto()); // Ex: "Maria Santos da Silva"

// Gerar o nome da mãe aleatório
console.log(gerar.nome.mae()); // Ex: "Ana"

// Gerar o nome completo da mãe aleatório
console.log(gerar.nome.maeCompleto()); // Ex: "Ana Santos da Silva"

// Gerar o nome do pai aleatório
console.log(gerar.nome.pai()); // Ex: "José"

// Gerar o nome completo do pai aleatório
console.log(gerar.nome.paiCompleto()); // Ex: "José Santos da Silva"

// Gerar um nome do meio aleatório
console.log(gerar.nome.doMeio()); // Ex: "Santos"

// Gerar um sobrenome aleatório
console.log(gerar.nome.sobrenome()); // Ex: "da Silva"

// Gerar apelido aleatório
console.log(gerar.apelido());

// Gerar data de nascimento aleatória
console.log(gerar.dataNascimento());

// Gerar e-mail aleatório
console.log(gerar.email());                       // Gera e-mail com nickname aleatório

const nomeMasculinoCompleto =gerar.nome.masculinoCompleto();
console.log(gerar.email(nomeMasculinoCompleto));  // Gera e-mail com nome masculino

const nomeFemininoCompleto = gerar.nome.femininoCompleto();
console.log(gerar.email(nomeFemininoCompleto));   // Gera e-mail co nome feminino

// Gerar código de operdora
console.log(gerar.codigoOperadora("Claro"));      // Gera um código da Claro (968, 973, 974, 975, 976, 991, 992, 993 ou 994)
console.log(gerar.codigoOperadora("Oi"));         // Gera um código da Oi (984, 985, 986, 987, 988 ou 989)
console.log(gerar.codigoOperadora("Tim"));        // Gera um código da Tim (969, 979, 980, 981, 982 ou 983)
console.log(gerar.codigoOperadora("Vivo"));       // Gera um código da Vivo (967, 971, 972, 995, 996, 997, 998 ou 999)
console.log(gerar.codigoOperadora());             // Gera um código de uma operadora aleatória
console.log(gerar.codigoOperadora("blablabla"));  // Gera um código de uma operadora aleatória

// Gerar CNH aleatória
console.log(gerar.cnh());
console.log(gerar.cnhCategoria());

// Gerar CNPJ com opção para máscara
console.log(gerar.cnpj());                        // Gera CNPJ sem máscara
console.log(gerar.cnpj(true));                    // Gera CNPJ com máscara

// Gerar CPF com opção para máscara e estado
console.log(gerar.cpf());                         // Gera cpf sem mascara e de estado aleatório
console.log(gerar.cpf(true));                     // Gera CPF com máscara e de estado aleatório
console.log(gerar.cpf(true, "RS"));               // Gera CPF com máscara e do estado informado
console.log(gerar.cpf(false, "DF"));              // Gera CPF sem máscara e do estado informado

// Gerar RG com opção para máscara
console.log(gerar.rg());                          // Gera RG sem máscara
console.log(gerar.rg(true));                      // Gera RG com máscara

// Gerar CNS com opção para máscara
console.log(gerar.cns());                         // Gera CNS sem máscara
console.log(gerar.cns(true));                     // Gera CNS com máscara

// Gerar PIS com opção para máscara:
console.log(gerar.pis());                         // Gera PIS sem máscara
console.log(gerar.pis(true));                     // Gera PIS com máscara

// Gerar Título de Eleitor com opção para máscara:
console.log(gerar.tituloEleitor());               // Gera Título de Eleitor sem máscara e de estado aleatório
console.log(gerar.tituloEleitor(true));           // Gera Título de Eleitor com máscara e de estado aleatório
console.log(gerar.tituloEleitor(true,'SE'));      // Gera Título de Eleitor sem máscara e de estado informado
console.log(gerar.tituloEleitor(false,'PR'));     // Gera Título de Eleitor com máscara e de estado informado

// Gerar Passaporte aleatórip
console.log(gerar.passaporte());

// Gerar cor de pele aleatória
console.log(gerar.corPele());

// Gerar tipo sanguíneo aleatório
console.log(gerar.tipoSanguineo());

// Gerar endereço de estado aleatório
console.log(gerar.endereco);                      // Gera um objeto com todos os campos do endereço
console.log(gerar.endereco.cep)                   // Gera um objeto endereço e retorna apenas o CEP
console.log(gerar.endereco.bairro)                // Gera um objeto endereço e retorna apenas o bairro

// Gerar endereço com opção para máscara e estado
console.log(gerar.enderecoFnc());                 // Gera um objeto com todos os campos do endereço e de estado aleatório
console.log(gerar.enderecoFnc(true));             // Gera um objeto com todos os campos do endereço, o CEP com máscara e de estado aleatório
console.log(gerar.enderecoFnc(false));            // Gera um objeto com todos os campos do endereço, o CEP sem máscara e de estado aleatório
console.log(gerar.enderecoFnc(true, "RJ"));       // Gera um objeto com todos os campos do endereço, o CEP com máscara e do estado informado
console.log(gerar.enderecoFnc(false, "SP"));      // Gera um objeto com todos os campos do endereço, o CEP sem máscara e do estado informado

// Gerar Placa Antiga
console.log(gerar.placaAntiga(true));             // Gera placa no formato antigo com máscara "ABC-1234"
console.log(gerar.placaAntiga(false));            // Gera placa no formato antigo sem máscara "ABC1234"

// Gerar Placa Mercosul
console.log(gerar.placaMercosul(true));           // Gera placa no formato Mercosul sem máscara "ABC1D23"
console.log(gerar.placaMercosul(false));          // Gera placa no formato Mercosul com máscara "ABC-1D23"

// Gerar RENAVAM
console.log(gerar.renavam());
```
