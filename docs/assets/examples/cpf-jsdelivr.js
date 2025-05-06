
import { cpf } from 'https://cdn.jsdelivr.net/npm/gerador-br/+esm'; // jsfiddle

// gera cpf sem máscara e de estado aleatório
console.log(cpf());

// gera cpf com máscara e de estado aleatório
console.log(cpf(true));

// gera cpf com máscara e do estado informado
console.log(cpf(true, "rs"));

// gera cpf sem máscara e do estado informado
console.log(cpf(false, "mg"));