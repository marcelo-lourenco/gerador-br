/**
 * Módulo principal para geração de dados fictícios brasileiros.
 *
 * Este módulo fornece funções para gerar dados como CPF, CNPJ, nomes, endereços, documentos, e muito mais.
 */
declare module 'gerador-br' {
  /**
   * Gera um CPF válido.
   * @param {boolean} [mask=false] - Define se o CPF será gerado com máscara.
   * @param {string} [state] - Estado para o qual o CPF será gerado.
   * @returns {string} - CPF gerado.
   */
  export function cpf(mask?: boolean, state?: string): string;

  /**
   * Gera um CNPJ válido.
   * @param {boolean} [mask=false] - Define se o CNPJ será gerado com máscara.
   * @returns {string} - CNPJ gerado.
   */
  export function cnpj(mask?: boolean): string;

  /**
   * Gera um nome aleatório.
   * @returns {string} - Nome gerado.
   */
  export function nome(): string;

  /**
   * Gera um endereço fictício.
   * @param {boolean} [mask=false] - Define se o CEP será gerado com máscara.
   * @param {string} [state] - Estado para o qual o endereço será gerado.
   * @returns {object} - Objeto contendo os dados do endereço.
   */
  export function endereco(mask?: boolean, state?: string): {
    cep: string;
    logradouro: string;
    numero: number;
    complemento: string;
    bairro: string;
    localidade: string;
    estado: string;
  };

  /**
   * Gera uma inscrição estadual válida para um estado específico.
   * @param {string} estado - Sigla do estado.
   * @returns {string} - Inscrição estadual gerada.
   */
  export function inscricaoEstadual(estado: string): string;

  /**
   * Gera um RG válido.
   * @param {boolean} [mask=false] - Define se o RG será gerado com máscara.
   * @returns {string} - RG gerado.
   */
  export function rg(mask?: boolean): string;

  /**
   * Gera uma CNH válida.
   * @param {boolean} [mask=false] - Define se a CNH será gerada com máscara.
   * @returns {string} - CNH gerada.
   */
  export function cnh(mask?: boolean): string;

  /**
   * Gera um número de PIS válido.
   * @param {boolean} [mask=false] - Define se o PIS será gerado com máscara.
   * @returns {string} - PIS gerado.
   */
  export function pis(mask?: boolean): string;

  /**
   * Gera um número de título de eleitor válido.
   * @param {boolean} [mask=false] - Define se o título será gerado com máscara.
   * @returns {string} - Título de eleitor gerado.
   */
  export function tituloEleitor(mask?: boolean): string;

  /**
   * Gera um número de certidão de nascimento válido.
   * @returns {string} - Certidão de nascimento gerada.
   */
  export function certidaoNascimento(): string;

  /**
   * Gera um número de certidão de casamento válido.
   * @returns {string} - Certidão de casamento gerada.
   */
  export function certidaoCasamento(): string;

  /**
   * Gera um número de certidão de óbito válido.
   * @returns {string} - Certidão de óbito gerada.
   */
  export function certidaoObito(): string;

  /**
   * Gera um número de passaporte válido.
   * @returns {string} - Passaporte gerado.
   */
  export function passaporte(): string;

  /**
   * Gera um número de CNS (Cartão Nacional de Saúde) válido.
   * @returns {string} - CNS gerado.
   */
  export function cns(): string;

  /**
   * Gera um número de RENAVAM válido.
   * @returns {string} - RENAVAM gerado.
   */
  export function renavam(): string;

  /**
   * Gera um número de telefone válido.
   * @param {boolean} [mask=false] - Define se o telefone será gerado com máscara.
   * @returns {string} - Telefone gerado.
   */
  export function telefone(mask?: boolean): string;

  /**
   * Gera um número de celular válido.
   * @param {boolean} [mask=false] - Define se o celular será gerado com máscara.
   * @returns {string} - Celular gerado.
   */
  export function celular(mask?: boolean): string;

  /**
   * Gera um endereço de e-mail fictício.
   * @returns {string} - E-mail gerado.
   */
  export function email(): string;

  /**
   * Gera uma data de nascimento fictícia.
   * @returns {string} - Data de nascimento gerada.
   */
  export function dataNascimento(): string;

  /**
   * Gera informações de um banco fictício.
   * @returns {string} - Banco gerado.
   */
  export function banco(): string;

  /**
   * Gera informações de uma conta bancária fictícia.
   * @returns {string} - Conta bancária gerada.
   */
  export function contaBancaria(): string;

  /**
   * Gera informações de um cartão de crédito fictício.
   * @returns {string} - Cartão de crédito gerado.
   */
  export function cartaoCredito(): string;

  /**
   * Gera o código de uma operadora de telefonia.
   * @returns {string} - Código da operadora gerado.
   */
  export function operadora(): string;

  /**
   * Gera um código DDD válido.
   * @param {string} [estado] - Estado para o qual o DDD será gerado.
   * @returns {string} - DDD gerado.
   */
  export function ddd(estado?: string): string;

  /**
   * Gera uma palavra aleatória.
   * @returns {string} - Palavra gerada.
   */
  export function palavra(): string;

  /**
   * Gera um parágrafo fictício.
   * @returns {string} - Parágrafo gerado.
   */
  export function paragrafo(): string;

  /**
   * Gera uma sentença fictícia.
   * @returns {string} - Sentença gerada.
   */
  export function sentenca(): string;

  /**
   * Gera um apelido fictício.
   * @returns {string} - Apelido gerado.
   */
  export function apelido(): string;

  /**
   * Gera uma cor de pele fictícia.
   * @returns {string} - Cor de pele gerada.
   */
  export function corPele(): string;

  /**
   * Gera um tipo sanguíneo fictício.
   * @returns {string} - Tipo sanguíneo gerado.
   */
  export function tipoSanguineo(): string;

  /**
   * Gera informações sobre o gênero.
   * @returns {string} - Gênero gerado.
   */
  export function genero(): string;

  /**
   * Gera informações sobre orientação sexual.
   * @returns {string} - Orientação sexual gerada.
   */
  export function orientacaoSexual(): string;

  /**
   * Gera informações sobre identidade de gênero.
   * @returns {string} - Identidade de gênero gerada.
   */
  export function identidadeGenero(): string;

  /**
   * Gera informações sobre escolaridade.
   * @returns {string} - Escolaridade gerada.
   */
  export function escolaridade(): string;

  /**
   * Gera uma profissão fictícia.
   * @returns {string} - Profissão gerada.
   */
  export function profissao(): string;

  /**
   * Gera uma nacionalidade fictícia.
   * @returns {string} - Nacionalidade gerada.
   */
  export function nacionalidade(): string;

  /**
   * Gera um estado civil fictício.
   * @returns {string} - Estado civil gerado.
   */
  export function estadoCivil(): string;

  /**
   * Gera o nome fictício de um pai.
   * @returns {string} - Nome do pai gerado.
   */
  export function nomePai(): string;

  /**
   * Gera o nome fictício de uma mãe.
   * @returns {string} - Nome da mãe gerado.
   */
  export function nomeMae(): string;
}