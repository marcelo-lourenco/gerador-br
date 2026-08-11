// Exemplo de uso com ES Modules (import)
// Para executar: node sample/example.js (após pnpm run build)

import {
  apelido,
  banco,
  cartaoCredito,
  celular,
  cep,
  certidao,
  cnh,
  cnhCategoria,
  cnpj,
  cnpjAlfanumerico,
  cns,
  codigoOperadora,
  contaBancaria,
  corPele,
  cpf,
  dataNascimento,
  ddd,
  email,
  endereco,
  escolaridade,
  genero,
  gerar,
  identidadeGenero,
  identidadePorOrientacao,
  inscricaoEstadual,
  listaCodigosBancos,
  nome,
  nomeEmpresa,
  orientacaoSexual,
  palavra,
  paragrafo,
  passaporte,
  pis,
  placaAntiga,
  placaMercosul,
  profissao,
  provedorEmail,
  renavam,
  rg,
  sentenca,
  telefone,
  tipoSanguineo,
  tituloEleitor,
} from '../dist/index.js';

console.log('--- Testando @box4dev/gerador-br com ES Modules ---\n');

console.log('=== NAMED EXPORTS (Recomendado) ===');
console.log('CPF com máscara:', cpf(true));
console.log('CNPJ:', cnpj(true));
console.log('CNPJ Alfanumérico:', cnpjAlfanumerico(true));
console.log('Nome Completo:', nome.aleatorioCompleto());
console.log('Apelido:', apelido());
console.log('Banco:', banco());
console.log('Lista Códigos Bancos (primeiros 5):', listaCodigosBancos().slice(0, 5));
console.log('Cartão de Crédito:', cartaoCredito(true, 'João Santos da Silva'));
console.log('Celular:', celular(true, 'SP', 'Vivo'));
console.log('CEP:', cep(true, 'SP'));
console.log('Certidão Nascimento:', certidao.nascimento(true));
console.log('Certidão Detalhes:', certidao.nascimentoObj());
console.log('CNH:', cnh());
console.log('Categoria CNH:', cnhCategoria());
console.log('CNS:', cns(true, 'beneficiario'));
console.log('Código Operadora:', codigoOperadora('Claro'));
console.log('Conta Bancária:', contaBancaria('Banco do Brasil'));
console.log('Cor de Pele:', corPele());
console.log('Data de Nascimento:', dataNascimento([20, 30]));
console.log('DDD:', ddd('RJ'));
console.log('E-mail:', email('Marcelo Lourenço'));
console.log('Endereço:', endereco(true, 'SP'));
console.log('Escolaridade:', escolaridade());
console.log('Gênero:', genero('m'));
console.log('Identidade de Gênero:', identidadeGenero());
console.log('Identidade por Orientação:', identidadePorOrientacao('Heterossexual'));
console.log('Inscrição Estadual (SP):', inscricaoEstadual('SP'));
console.log('Nome Empresa:', nomeEmpresa('BR'));
console.log('Orientação Sexual:', orientacaoSexual());
console.log('Palavra:', palavra());
console.log('Sentença:', sentenca(5));
console.log('Parágrafo:', paragrafo(2, 6));
console.log('Passaporte:', passaporte());
console.log('PIS:', pis(true));
console.log('Placa Antiga:', placaAntiga(true));
console.log('Placa Mercosul:', placaMercosul(true));
console.log('Profissão:', profissao());
console.log('Provedor E-mail:', provedorEmail());
console.log('RENAVAM:', renavam());
console.log('RG:', rg(true));
console.log('Telefone:', telefone(true, 'RJ'));
console.log('Tipo Sanguíneo:', tipoSanguineo());
console.log('Título de Eleitor:', tituloEleitor(true, 'SP'));

console.log('\n=== OBJETO gerar (Namespace Centralizado) ===');
console.log('gerar.cpf():', gerar.cpf(true));
console.log('gerar.cnpj():', gerar.cnpj(true));
console.log('gerar.nome.femininoCompleto():', gerar.nome.femininoCompleto());

console.log('\n------------------------------------------');
