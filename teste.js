import gerar from './index.js';

// Gerar endereço de estado aleatório:
console.log(gerar.endereco);                  // Gera um objeto com todos os campos do endereço
console.log(gerar.endereco.cep)               // Gera um objeto endereço e retorna apenas o CEP 
console.log(gerar.endereco.bairro)            // Gera um objeto endereço e retorna apenas o bairro

// Gerar endereço com opção para máscara e estado:
console.log(gerar.enderecoFnc());             // Gera um objeto com todos os campos do endereço e de estado aleatório
console.log(gerar.enderecoFnc(true));         // Gera um objeto com todos os campos do endereço, o CEP com máscara e de estado aleatório
console.log(gerar.enderecoFnc(false));        // Gera um objeto com todos os campos do endereço, o CEP sem máscara e de estado aleatório
console.log(gerar.enderecoFnc(true, "RJ"));   // Gera um objeto com todos os campos do endereço, o CEP com máscara e do estado informado
console.log(gerar.enderecoFnc(false, "SP"));  // Gera um objeto com todos os campos do endereço, o CEP sem máscara e do estado informado 

// Gerar CPF com opção para máscara e estado:
console.log(gerar.cpf());                     // Gera cpf sem mascara e de estado aleatório
console.log(gerar.cpf(true));                 // Gera CPF com máscara e de estado aleatório
console.log(gerar.cpf(true, "RS"));           // Gera CPF com máscara e do estado informado
console.log(gerar.cpf(false, "DF"));          // Gera CPF sem máscara e do estado informado

// Gerar CNPJ com opção para máscara:
console.log(gerar.cnpj());                    // Gera CNPJ sem máscara
console.log(gerar.cnpj(true));                // Gera CNPJ com máscara

export default gerar;