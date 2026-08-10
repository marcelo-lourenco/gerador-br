import { apelido } from './apelido/index.js';
import { banco, listaCodigosBancos } from './banco/index.js';
import { cartaoCredito } from './cartaoCredito/index.js';
import { celular } from './celular/index.js';
import { cep } from './cep/index.js';
import { certidao } from './certidao/index.js';
import { cnh } from './cnh/index.js';
import { cnhCategoria } from './cnhCategoria/index.js';
import { cnpj } from './cnpj/index.js';
import { cnpjAlfanumerico } from './cnpjAlfanumerico/index.js';
import { cns } from './cns/index.js';
import { contaBancaria } from './contaBancaria/index.js';
import { corPele } from './corPele/index.js';
import { cpf } from './cpf/index.js';
import { dataNascimento } from './dataNascimento/index.js';
import { ddd } from './ddd/index.js';
import { email } from './email/index.js';
import { endereco } from './endereco/index.js';
import { escolaridade } from './escolaridade/index.js';
import { genero } from './genero/index.js';
import { identidadeGenero } from './identidadeGenero/index.js';
import { identidadePorOrientacao } from './identidadePorOrientacao/index.js';
import { inscricaoEstadual } from './inscricaoEstadual/index.js';
import { nome } from './nome/index.js';
import { nomeEmpresa } from './nomeEmpresa/index.js';
import { codigoOperadora } from './operadora/index.js';
import { orientacaoSexual } from './orientacaoSexual/index.js';
import { passaporte } from './passaporte/index.js';
import { pis } from './pis/index.js';
import { placaAntiga, placaMercosul } from './placa/index.js';
import { profissao } from './profissao/index.js';
import { provedorEmail } from './provedorEmail/index.js';
import { renavam } from './renavam/index.js';
import { rg } from './rg/index.js';
import { telefone } from './telefone/index.js';
import { palavra, paragrafo, sentenca } from './texto/index.js';
import { tipoSanguineo } from './tipoSanguineo/index.js';
import { tituloEleitor } from './tituloEleitor/index.js';

// ============================================================================
// Named exports primários
// ============================================================================
export {
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
};

// ============================================================================
// Objeto agrupador para suporte a import { gerar } / const gerar = require(...)
// ============================================================================
export const gerar = {
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
} as const;

export default gerar;
