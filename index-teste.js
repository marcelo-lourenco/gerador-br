import gerar from './index.js';

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
console.log(gerar.email());                       // Gerar e-mail com nickname aleatório

const nomeMasculinoCompleto =gerar.nome.masculinoCompleto();
console.log(gerar.email(nomeMasculinoCompleto));  // Gerar e-mail com nome masculino

const nomeFemininoCompleto = gerar.nome.femininoCompleto();
console.log(gerar.email(nomeFemininoCompleto));   // gerar e-mail co nome feminino

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
console.log(gerar.tituloEleitor());               // Gerar Título de Eleitor sem máscara e de estado aleatório
console.log(gerar.tituloEleitor(true));           // Gerar Título de Eleitor com máscara e de estado aleatório
console.log(gerar.tituloEleitor(true,'SE'));      // Gerar Título de Eleitor sem máscara e de estado informado
console.log(gerar.tituloEleitor(false,'PR'));     // Gerar Título de Eleitor com máscara e de estado informado

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
console.log(gerar.placaAntiga(true));             // Placa no formato antigo com máscara "ABC-1234"
console.log(gerar.placaAntiga(false));            // Placa no formato antigo sem máscara "ABC1234"

// Gerar Placa Mercosul
console.log(gerar.placaMercosul(true));           // Placa no formato Mercosul sem máscara "ABC1D23"
console.log(gerar.placaMercosul(false));          // Placa no formato Mercosul com máscara "ABC-1D23"

// Gerar RENAVAM
console.log(gerar.renavam());
