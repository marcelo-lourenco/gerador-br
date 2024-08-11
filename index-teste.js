import gerar from './index.js';

// Gerar nome masculino
console.log(gerar.nomeMasculino);

// Gerar nome feminino
console.log(gerar.nomeFeminino);

// Gerar nome do meio
console.log(gerar.nomeDoMeio);

// Gerar sobrenome
console.log(gerar.sobrenome);

// Gerar nome masculino completo
console.log(gerar.nomeMasculinoCompleto);
const nomeMasculinoCompleto = gerar.nomeMasculinoCompleto;

// Gerar nome feminino completo
console.log(gerar.nomeFemininoCompleto);
const nomeFemininoCompleto = gerar.nomeFemininoCompleto;


// Gerar nome completo do pai
console.log(gerar.nomePai);

// Gerar nome completo da mãe
console.log(gerar.nomeMae);

// Gerar apelido aleatório
console.log(gerar.apelido);

// Gerar data de nascimento aleatória
console.log(gerar.dataNascimento);

// Gerar email aleatório
console.log(gerar.email());
console.log(gerar.email(nomeMasculinoCompleto));
console.log(gerar.email(nomeFemininoCompleto));

// Gerar CNH aleatória
console.log(gerar.cnh);
console.log(gerar.cnhCategoria);

// Gerar CNPJ com opção para máscara:
console.log(gerar.cnpj());                        // Gera CNPJ sem máscara
console.log(gerar.cnpj(true));                    // Gera CNPJ com máscara

// Gerar CPF com opção para máscara e estado:
console.log(gerar.cpf());                         // Gera cpf sem mascara e de estado aleatório
console.log(gerar.cpf(true));                     // Gera CPF com máscara e de estado aleatório
console.log(gerar.cpf(true, "RS"));               // Gera CPF com máscara e do estado informado
console.log(gerar.cpf(false, "DF"));              // Gera CPF sem máscara e do estado informado

// Gerar RG com opção para máscara:
console.log(gerar.rg());                          // Gera RG sem máscara
console.log(gerar.rg(true));                      // Gera RG com máscara

// Gerar CNS com opção para máscara:
console.log(gerar.cns());                          // Gera CNS sem máscara
console.log(gerar.cns(true));                      // Gera CNS com máscara

// Gerar PIS com opção para máscara:
console.log(gerar.pis());                          // Gera PIS sem máscara
console.log(gerar.pis(true));                      // Gera PIS com máscara

console.log(gerar.tituloEleitor())                // Gerar Título de Eleitor sem máscara e de estado aleatório
console.log(gerar.tituloEleitor(true))            // Gerar Título de Eleitor com máscara e de estado aleatório
console.log(gerar.tituloEleitor(true,'SE'))       // Gerar Título de Eleitor sem máscara e de estado informado
console.log(gerar.tituloEleitor(false,'PR'))      // Gerar Título de Eleitor com máscara e de estado informado

// Gerar Passaporte aleatórip
console.log(gerar.passaporte);

// Gerar cor de pele aleatória
console.log(gerar.corPele);

// Gerar tipo sanguíneo aleatório
console.log(gerar.tipoSanguineo);

// Gerar endereço de estado aleatório:
console.log(gerar.endereco);                      // Gera um objeto com todos os campos do endereço
console.log(gerar.endereco.cep)                   // Gera um objeto endereço e retorna apenas o CEP
console.log(gerar.endereco.bairro)                // Gera um objeto endereço e retorna apenas o bairro

// Gerar endereço com opção para máscara e estado:
console.log(gerar.enderecoFnc());                 // Gera um objeto com todos os campos do endereço e de estado aleatório
console.log(gerar.enderecoFnc(true));             // Gera um objeto com todos os campos do endereço, o CEP com máscara e de estado aleatório
console.log(gerar.enderecoFnc(false));            // Gera um objeto com todos os campos do endereço, o CEP sem máscara e de estado aleatório
console.log(gerar.enderecoFnc(true, "RJ"));       // Gera um objeto com todos os campos do endereço, o CEP com máscara e do estado informado
console.log(gerar.enderecoFnc(false, "SP"));      // Gera um objeto com todos os campos do endereço, o CEP sem máscara e do estado informado
