
// import { cpf } from 'gerador-br';                    // es module
// const { cpf } = require('gerador-br');               // commonjs
// import { cpf } from 'https://esm.run/gerador-br';    // jsfiddle

// gera cpf sem máscara e de estado aleatório
cpf();

// gera cpf com máscara e de estado aleatório
cpf(true);

// gera cpf com máscara e do estado informado
cpf(true, "rs");

// gera cpf sem máscara e do estado informado
cpf(false, "mg");