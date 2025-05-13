// Refatoração para alinhar com as exportações completas do index.js e permitir uso com TypeScript

declare module 'gerador-br' {

  /**
   * @namespace gerar
   * @description Um objeto que contém métodos para gerar dados aleatórios, como:
   * apelido, banco, cartão de crédito, celular, CEP, certidão, CNH, CNPJ, CNS,
   * conta bancária, CPF, data de nascimento, DDD, e-mail, endereço, escolaridade,
   * gênero, inscrição estadual, nome, passaporte, PIS, provedor de e-mail, RENAVAM,
   * RG, telefone e título de eleitor.
   */
  export const gerar: {

    /**
     * Gera um apelido aleatório.
     *
     * @returns {string} - Um apelido gerado aleatoriamente.
     * @example
     * console.log(gerar.apelido()); // Exemplo: "Falcão", "Astronauta", "Relíquia"
     */
    apelido: () => string;

    /**
     * Gera dados de um banco aleatório.
     *
     * @param {number} [code] - O código do banco. Se não for informado, um banco aleatório será gerado.
     * @returns {object} Um objeto contendo os dados do banco.
     * @example
     * console.log(gerar.banco()); // Gera dados de um banco aleatório
     * // =>
     * {
     *   codigoBanco: '341',
     *   nomeBanco: 'Itaú Unibanco S.A.',
     *   razaoSocial: 'Banco Itaú Unibanco - 341',
     *   ispb: '03415961'
     * }
     *
     * console.log(gerar.banco(237)); // Gera dados do banco informado
     * // =>
     * {
     *   codigoBanco: '237',
     *   nomeBanco: 'BANCO BRADESCO S.A.',
     *   razaoSocial: 'BANCO BRADESCO S.A.',
     *   ispb: '60746948'
     * }
     */
    banco: (code?: number) => object;

    /**
     * Gera Cartão de Crédito aleatório.
     *
     * Este objeto fornece métodos para gerar número de Cartão de Crédito, Bandeira, CVV, Data De Expiração e Nome do Titular.
     * @param {boolean} [mask=false] - Se `true`, o número do cartão será retornado com a máscara de formatação (xxxx xxxx xxxx xxxx).
     * Se `false`, o número do cartão será retornado apenas com os dígitos.
     * @param {string} - Nome completo do titular
     * @returns {object} Um objeto contendo o número do cartão, a bandeira, o CVV e a data de expiração e o nome do titular
     *
     * @example
     * // Gera objeto cartaoCredito com as propriedades: numero (sem máscara), bandeira, cvv, dataExpiracao e nomeTitular aleatório (abreviado)
     * console.log(gerar.cartaoCredito());
     * // =>
     *    {
     *      numero: '6547178146357745',
     *      bandeira: 'mastercard',
     *      cvv: '532',
     *      dataExpiracao: '12/07/2028',
     *      nomeTitular: 'BRENDA B LIMA'
     *    }
     *
     * // Gera objeto cartaoCredito com as propriedades: numero (com máscara), bandeira, cvv, dataExpiracao e nomeTitular informado (abreviado)
     * console.log(gerar.cartaoCredito(true, "João Santos da Silva"));
     * // =>
     *    {
     *      numero: '5534 5523 6833 6867',
     *      bandeira: 'visa',
     *      cvv: '866',
     *      dataExpiracao: '25/07/2033',
     *      nomeTitular: 'JOÃO S SILVA'
     *    }
     *
     * // Gera objeto cartaoCredito com as propriedades: numero (sem máscara), bandeira, cvv, dataExpiracao e nomeTitular informado (abreviado)
     * console.log(gerar.cartaoCredito(false, "Maria Aparecida Reis"));
     * // =>
     *    {
     *      numero: '5534552368336867',
     *      bandeira: 'visa',
     *      cvv: '866',
     *      dataExpiracao: '25/07/2033',
     *      nomeTitular: 'MARIA A REIS'
     *    }
     *
     */
    cartaoCredito: (mask?: boolean, nomeTitular?: string) => object;

    /**
     * Gera um número de celular aleatório.
     *
     * O número de celular gerado pode ser formatado com máscara ( (DDD) 9XXXX-XXXX ) ou apenas com os dígitos.
     *
     * @param {boolean} [mask=false] - Se `true`, o celular será retornado com a máscara de formatação ( (DDD) 9XXXX-XXXX ). Se `false`, o celular será   retornado apenas com os dígitos.
     * @param {string} [state] - A sigla do estado para filtrar os DDDs. Se não fornecido, um DDD de qualquer estado será gerado.
     * @param {string} [operator] - O nome da operadora (por exemplo, "Claro", "Oi", "Tim", "Vivo"). Se não fornecido, uma operadora aleatória será   gerada.
     * @returns {string} O número de celular gerado.
     * @example
     * // Gera celular sem máscara, de estado aleatório e operadora aleatória
     * console.log(gerar.celular()); // "11999999999"
     *
     * // Gera celular com máscara, de estado aleatório e operadora aleatória
     * console.log(gerar.celular(true)); // "(11) 99999-9999"
     *
     * // Gera celular sem máscara, do estado informado e operadora aleatória
     * console.log(gerar.celular(false, "SC")); // "48999999999"
     *
     * // Gera celular com máscara, do estado informado e operadora aleatória
     * console.log(gerar.celular(true, "ES")); // "(27) 99999-9999"
     *
     * // Gera celular sem máscara, do estado aleatório e operadora informada
     * console.log(gerar.celular(false, "", "Claro")); // "85991999999"
     *
     * // Gera celular com máscara, do estado informado e operadora aleatória
     * console.log(gerar.celular(true, "MS", "Vivo")); // "(67) 99799-9999"
     */
    celular: (mask?: boolean, state?: string, operator?: string) => string;

    /**
     * Gera um CEP aleatório.
     *
     * O CEP gerado pode ser formatado com máscara (xxxxx-xxx) ou apenas com os dígitos.
     *
     * @param {boolean} [mask=false] - Se `true`, o CEP será retornado com a máscara de formatação (xxxxx-xxx). Se `false`, o CEP será retornado apenas   com os dígitos.
     * @param {string} [state] - A sigla do estado para filtrar os CEPs. Se não fornecido, um CEP de qualquer estado será gerado.
     * @returns {string} O CEP gerado.
     * @example
     * // CEP sem máscara
     * console.log(gerar.cep()); // "12345678"
     *
     * // CEP com máscara
     * console.log(gerar.cep(true)); // "12345-678"
     *
     * // CEP de São Paulo (SP) sem máscara
     * console.log(gerar.cep(false, "SP")); // "01001000"
     *
     * // CEP de São Paulo (SP) com máscara
     * console.log(gerar.cep(true, "SP")); // "01001-000"
     */
    cep: (mask?: boolean, state?: string) => string;

    /**
     * Gera números de certidões (nascimento, casamento, óbito) seguindo o padrão de Registro Civil Brasileiro.
     *
     * Este objeto fornece métodos para gerar números de certidões formatados ou não, além de objetos detalhados com informações como cartório, estado,   ano de registro, tipo de livro, folha, termo, entre outros.
     *
     * @param {boolean} [mask=true] - Define se o número será formatado com máscara.
     * @returns {string} Número da certidão aleatória, com ou sem máscara.
     * @example
     * console.log(gerar.certidao.aleatoria());         // "123456 12 2022 1001 1 12345 123 1234567"
     * console.log(gerar.certidao.aleatoria(false));    // "12345612202210011123451231234567"
     * console.log(gerar.certidao.nascimento());        // "123456 12 2022 1001 1 12345 123 1234567"
     * console.log(gerar.certidao.nascimento(false));   // "12345612202210011123451231234567"
     * console.log(gerar.certidao.casamento());         // "123456 12 2022 2001 1 12345 123 1234567"
     * console.log(gerar.certidao.casamento(false));    // "12345612202220011123451231234567"
     * console.log(gerar.certidao.obito());             // "123456 12 2022 3001 1 12345 123 1234567"
     * console.log(gerar.certidao.obito(false));        // "12345612202230011123451231234567"
     *
     * // Gera um objeto detalhado de certidão aleatório
     * console.log(gerar.certidao.aleatoriaObj());
     * {
     *   tipoCertidao: 'Nascimento',
     *   cartorio: '123456',
     *   estado: '12',
     *   anoRegistro: '23',
     *   tipoLivro: '1001',
     *   tipoFolha: '1',
     *   termo: '12345',
     *   folha: '123',
     *   livro: '1234567'
     * }
     *
     * // Gera um objeto detalhado de certidão de nascimento.
     * console.log(gerar.certidao.nascimentoObj());
     * // { tipoCertidao: "Nascimento", cartorio: "123456", estado: "12", anoRegistro: "2022",  tipoLivro: '1001', ... }
     *
     * //Gera um objeto detalhado de uma certidão de casamento.
     * console.log(gerar.certidao.casamentoObj());
     * // { tipoCertidao: "Casamento", cartorio: "123456", estado: "12", anoRegistro: "2022", tipoLivro: '2001', ... }
     *
     */
    certidao: {
      aleatoria: (mask?: boolean) => string;
      nascimento: (mask?: boolean) => string;
      casamento: (mask?: boolean) => string;
      obito: (mask?: boolean) => string;
      aleatoriaObj: () => object;
      nascimentoObj: () => object;
      casamentoObj: () => object;
    };

    /**
     * Gera um número de CNH aleatório.
     *
     * @returns {string} O número de CNH gerado.
     * @example
     * console.log(gerar.cnh()); // "123456789012"
     */
    cnh: () => string;

    /**
     * Gera categorias de CNH válidas.
     *
     * @returns {string} Categoria da CNH.
     * @example
     * console.log(gerar.cnhCategoria());
     */
    cnhCategoria: () => string;

    /**
     * Gera um número de CNPJ aleatório.
     *
     * @param {boolean} [mask=false] - Se `true`, o CNPJ será retornado com a máscara de formatação (xx.xxx.xxx/0001-xx). Se `false`, o CNPJ será retornado   apenas com os dígitos.
     * @returns {string} O CNPJ gerado.
     * @example
     * // CNPJ com máscara
     * console.log(gerar.cnpj(true)); // "12.345.678/0001-00"
     *
     * // CNPJ sem máscara
     * console.log(gerar.cnpj(false)); // "12345678000100"
     */
    cnpj: (mask?: boolean) => string;

    /**
     * Gera um número de CNPJ Alfanumerico aleatório (compatibilidade com versão anterior)
     * @param {boolean} mask - Se true, retorna com máscara de formatação
     * @returns {string} CNPJ gerado
     * @example
     * console.log(gerar.cnpjAlfanumerico(true));   // CNPJ formatado
     * console.log(gerar.cnpjAlfanumerico(false));  // CNPJ sem formatação
     * console.log(gerar.cnpj());                   // Usando a função de compatibilidade
     */
    cnpjAlfanumerico: (mask?: boolean) => string;

    /**
     * Gera um número de Cartão Nacional de Saúde (CNS) aleatório.
     *
     * @param {boolean} [mask=false] - Se `true`, retorna o CNS com máscara (XXX XXXX XXXX XXXX).
     * @param {string} [type] - O tipo de CNS a ser gerado ('beneficiario' para beneficiários do SUS, 'profissional' para profissionais de saúde).
     * @returns {string} O número de CNS gerado.
     * @example
     * // CNS sem máscara e tipo aleatório
     * console.log(gerar.cns());
     *
     * // CNS sem máscara e do tipo informado
     * console.log(gerar.cns(false, 'beneficiario'));
     * console.log(gerar.cns(false, 'profissional'));
     *
     * // CNS com máscara e tipo aleatório
     * console.log(gerar.cns(true));
     *
     * // CNS com máscara e do tipo informado
     * console.log(gerar.cns(true, 'beneficiario'));
     * console.log(gerar.cns(true, 'profissional'));
     */
    cns: (mask?: boolean, type?: string) => string;

    /**
    * Gera um código de operadora de celular aleatório.
    *
    * ATENÇAO: DEVIDO A PORTABILIDADE, OS CÓDIGOS DE CELULARES REAIS PODEM NÃO PERTENCER MAIS A OPERADORA DE ORIGEM
    * A função pode gerar um código de operadora aleatório ou um código específico de uma operadora fornecida.
    *
    * @param {string} [name] - O nome da operadora (por exemplo, "Claro", "Oi", "Tim", "Vivo"). Se não fornecido, um código de operadora aleatório será  gerado.
    * @returns {number} O código de operadora gerado.
    * @example
    * // Gera um código de operadora aleatório
    * console.log(gerar.codigoOperadora()); // Pode retornar 968, 973, 984, 969, 967, etc.
    *
    * // Gera um código da Claro
    * console.log(gerar.codigoOperadora("Claro")); // Pode retornar 968, 973, 974, 975, 976, 991, 992, 993 ou 994
    *
    * // Gera um código da Oi
    * console.log(gerar.codigoOperadora("Oi")); // Pode retornar 984, 985, 986, 987, 988 ou 989
    *
    * // Gera um código da Tim
    * console.log(gerar.codigoOperadora("Tim")); // Pode retornar 969, 979, 980, 981, 982 ou 983
    *
    * // Gera um código da Vivo
    * console.log(gerar.codigoOperadora("Vivo")); // Pode retornar 967, 971, 972, 995, 996, 997, 998 ou 999
    *
    * // Gera um código de operadora aleatória (mesmo se o nome da operadora não for válido)
    * console.log(gerar.codigoOperadora("blablabla")); // Pode retornar 968, 973, 984, 969, 967, etc.
    */
    codigoOperadora: (name?: string) => number;

    /**
     * Gera uma conta bancária aleatória.
     *
     * Este objeto fornece métodos para gerar contas bancárias de diferentes bancos,
     * incluindo Banco do Brasil, Bradesco, Caixa, Citibank, HSBC, Itaú e Santander.
     *
     * @param {string} [bank='Indiferente'] - O nome do banco para gerar a conta.
     * Se não fornecido, um banco aleatório será escolhido.
     * @returns {object} Um objeto contendo o código do banco, o nome do banco,
     * a agência, o dígito verificador da agência, a conta, o dígito verificador da conta.
     *
     * @example
     * // Gera uma conta bancária aleatória do Banco do Brasil
     * console.log(gerar.contaBancaria('1'));
     * console.log(gerar.contaBancaria('Banco do Brasil'));
     * // =>
     *    {
     *      codigoBanco: '1',
     *      nomeBanco: 'Banco do Brasil',
     *      agencia: '1234-5',
     *      agenciaDv: '5',
     *      conta: '12345678-9',
     *      contaDv: '9'
     *    }
     *
     * // Gera uma conta bancária aleatória do Bradesco
     * console.log(gerar.contaBancaria('237'));
     * console.log(gerar.contaBancaria('Bradesco'));
     * // =>
     *    {
     *      codigoBanco: '237',
     *      nomeBanco: 'Bradesco',
     *      agencia: '1234-P',
     *      agenciaDv: 'P',
     *      conta: '123456-0',
     *      contaDv: '0'
     *    }
     *
     * // Gera uma conta bancária aleatória da Caixa
     * console.log(gerar.contaBancaria('104'));
     * console.log(gerar.contaBancaria('Caixa'));
     * // =>
     *    {
     *      codigoBanco: '104',
     *      nomeBanco: 'Caixa',
     *      agencia: '1234',
     *      agenciaDv: '',
     *      conta: '1234567890-0',
     *      contaDv: '0'
     *    }
     *
     * // Gera uma conta bancária aleatória do Citibank
     * console.log(gerar.contaBancaria('745'));
     * console.log(gerar.contaBancaria('Citibank'));
     * // =>
     *    {
     *      codigoBanco: '745',
     *      nomeBanco: 'Citibank',
     *      agencia: '1234',
     *      agenciaDv: '',
     *      conta: '1234567-0',
     *      contaDv: '0'
     *    }
     *
     * // Gera uma conta bancária aleatória do HSBC
     * console.log(gerar.contaBancaria('296'));
     * console.log(gerar.contaBancaria('HSBC'));
     * // =>
     *    {
     *      codigoBanco: '296',
     *      nomeBanco: 'HSBC',
     *      agencia: '1234',
     *      agenciaDv: '',
     *      conta: '123456-0',
     *      contaDv: '0'
     *    }
     *
     * // Gera uma conta bancária aleatória do Itaú
     * console.log(gerar.contaBancaria('341'));
     * console.log(gerar.contaBancaria('Itaú'));
     * // =>
     *    {
     *      codigoBanco: '341',
     *      nomeBanco: 'Itaú',
     *      agencia: '1234',
     *      agenciaDv: '',
     *      conta: '123456789-0',
     *      contaDv: '0'
     *    }
     *
     * // Gera uma conta bancária aleatória do Santander
     * console.log(gerar.contaBancaria('33'));
     * console.log(gerar.contaBancaria('Santander'));
     * // =>
     *    {
     *      codigoBanco: '33',
     *      nomeBanco: 'Santander',
     *      agencia: '1234',
     *      agenciaDv: '',
     *      conta: '12345678-0',
     *      contaDv: '0'
     *    }
     *
     * // Gera uma conta bancária aleatória de um banco aleatório
     * console.log(gerar.contaBancaria());
     * // =>
     *    {
     *      codigoBanco: '1',
     *      nomeBanco: 'Banco do Brasil',
     *      agencia: '1234-5',
     *      agenciaDv: '5',
     *      conta: '12345678-9',
     *      contaDv: '9'
     *    }
     */
    contaBancaria: (bank?: string) => object;

    /**
     * Gera cor da pele aleatória.
     *
     * @type {string}
     * @returns {string} - Uma cor da pele aleatória.
     * @example
     * console.log(gerar.corPele()); // Exemplo: "Branca", "Preta", etc.
     */
    corPele: () => string;

    /**
     * Gera um número de CPF aleatório.
     *
     * @param {boolean} [mask=false] - Se `true`, o CPF será retornado com a máscara de formatação (xxx.xxx.xxx-xx). Se `false`, o CPF será retornado apenas com  os dígitos.
     * @param {string} [state] - A sigla do estado para determinar a origem do CPF. Se não fornecido, será escolhido um estado aleatório.
     * @returns {string} O CPF gerado.
     * @example
     * // CPF sem máscara e de estado aleatório
     * console.log(gerar.cpf()); // "12345678909"
     *
     * // CPF com máscara e do estado informado
     * console.log(gerar.cpf(true, "PR")); // "123.456.789-09"
     *
     * // CPF sem máscara e do estado informado
     * console.log(gerar.cpf(false, "SC")); // "12345678909"
     *
     * // CPF com mascara e de estado aleatório
     * console.log(gerar.cpf(true)); // "987.654.321-00"
     *
     * // CPF sem máscara e de estado aleatório
     * console.log(gerar.cpf(false)); // "98765432100"
     */
    cpf: (mask?: boolean, state?: string) => string;

    /**
     * Gera uma data de nascimento aleatória com base nos parâmetros fornecidos.
     *
     * @param {number | [number, number]} [ageOrRange] - Pode ser:
     *   1. Uma idade específica (número)
     *   2. Um intervalo de idades [idadeMin, idadeMax]
     *   3. Se omitido, usa o intervalo padrão de 18 a 80 anos
     * @returns {string} Data de nascimento no formato DD/MM/YYYY
     *
     * @example
     * console.log(gerar.dataNascimento());         // Data entre 18-80 anos
     * console.log(gerar.dataNascimento(25));       // Data de quem tem exatamente 25 anos
     * console.log(gerar.dataNascimento([30, 40])); // Data entre 30-40 anos
     */
    dataNascimento: (ageOrRange?: number | [number, number]) => string;

    /**
     * Gera um DDD aleatório para um estado brasileiro.
     *
     * @param {string} [state] - A sigla do estado (por exemplo, "SP", "RJ").
     * @returns {number} O DDD aleatório para o estado fornecido.
     * @example
     * // DDD aleatório
     * console.log(gerar.ddd()); // Pode retornar ddd de qualquer estado/cidade
     *
     * // DDD aleatório para São Paulo (SP)
     * console.log(gerar.ddd("SP")); // Pode retornar 11, 12, 13, 14, 15, 16, 17, 18 ou 19
     *
     * // DDD aleatório para Rio de Janeiro (RJ)
     * console.log(gerar.ddd("RJ")); // Pode retornar 21, 22 ou 24
     */
    ddd: (state?: string) => string;

    /**
     * Gera um endereço de e-mail aleatório.
     *
     * O endereço de e-mail gerado pode ser baseado em um nome completo fornecido ou em um apelido aleatório.
     *
     * @param {string} [fullName] - O nome completo a ser usado para gerar o endereço de e-mail. Se não fornecido, um apelido aleatório será usado.
     * @returns {string} O endereço de e-mail gerado.
     * @example
     * // Gera um endereço de e-mail com base em um apelido aleatório
     * console.log(gerar.email()); // Pode retornar algo como "alpha@gmail.com"
     *
     * // Gera um endereço de e-mail com base no nome fornecido "Marcelo Lourenço"
     * console.log(gerar.email("José Maria")); // Pode retornar algo como "jose.maria@ig.com"
     *
     * // Gera um endereço de e-mail com base no nome aleatório
     * console.log(gerar.email(gerar.nomeFemininoCompleto)); // Pode retornar algo como "ana.borges@hotmail.com"
     */
    email: (fullName?: string) => string;

    /**
     * Gera um endereço aleatório.
     *
     * O CEP do endereço gerado pode ser formatado com máscara (xxxxx-xxx) ou apenas com os dígitos.
     *
     * @param {boolean} [mask=false] - Se `true`, o CEP será retornado com a máscara de formatação (xxxxx-xxx). Se `false`, o CEP será retornado apenas   com os dígitos.
     * @param {string} [state] - A sigla do estado para filtrar os CEPs. Se não fornecido, um CEP de qualquer estado será gerado.
     * @returns {object} O endereço gerado.
     * @example
     * // Endereço sem máscara
     * console.log(gerar.endereco()); // { cep: '12345678', logradouro: 'Rua dos Pinheiros', numero: '123', complemento: 'Apto 101', bairro: 'Jardim Paulista',   localidade: 'São Paulo', estado: 'SP' }
     *
     * // Endereço com máscara
     * console.log(gerar.endereco(true)); // { cep: '12345-678', logradouro: 'Rua dos Pinheiros', numero: '123', complemento: 'Apto 101', bairro: 'Jardim   Paulista', localidade: 'São Paulo', estado: 'SP' }
     *
     * // Endereço de São Paulo (SP) sem máscara
     * console.log(gerar.endereco(false, "SP")); // { cep: '01001000', logradouro: 'Rua da Consolação', numero: '123', complemento: 'Apto 101', bairro:   'Consolação', localidade: 'São Paulo', estado: 'SP' }
     *
     * // Endereço de São Paulo (SP) com máscara
     * console.log(gerar.endereco(true, "SP")); // { cep: '01001-000', logradouro: 'Rua da Consolação', numero: '123', complemento: 'Apto 101', bairro:   'Consolação', localidade: 'São Paulo', estado: 'SP' }
     */
    endereco: (mask?: boolean, state?: string) => object;

    /**
     * Gera uma escolaridade aleatória.
     *
     * @returns {string} Escolaridade.
     * @example
     * console.log(gerar.escolaridade());
     */
    escolaridade: () => string;

    /**
     * Retorna a descrição do gênero com base na sigla fornecida.
     *
     * @param {string} [input] - Sigla do gênero. Valores aceitos: 'm', 'f', 'i'.
     *   - 'm' para Masculino
     *   - 'f' para Feminino
     *   - 'i' para Intersexo
     *   - Se o `input` for `null`, omitido, ou qualquer outro valor não listado,
     *     a função retornará aleatoriamente "Masculino" ou "Feminino".
     *
     * @returns {string} - A descrição do gênero correspondente.
     *   - "Masculino" se input for 'm'.
     *   - "Feminino" se input for 'f'.
     *   - "Intersexo" se input for 'i'.
     *   - Aleatoriamente "Masculino" ou "Feminino" para outros casos.
     *
     * @example
     * console.log(gerar.genero('f'));  // Retorna: "Feminino"
     * console.log(gerar.genero('m'));  // Retorna: "Masculino"
     * console.log(gerar.genero('i'));  // Retorna: "Intersexo"
     * console.log(gerar.genero());     // Retorna aleatoriamente: "Masculino" ou "Feminino"
     * console.log(gerar.genero(null)); // Retorna aleatoriamente: "Masculino" ou "Feminino"
     * console.log(gerar.genero('x'));  // Retorna aleatoriamente: "Masculino" ou "Feminino"
     */
    genero: (input?: string) => string;

    /**
     * Gera uma identidade de gênero aleatória.
     * @type {string}
     * @returns {string} - Uma identidade de gênero aleatório.
     * @example
     * console.log(gerar.identideGenero()); // Retorna uma identidade de gênero, como: "Cisgênero", "Transgênero", etc.
     */
    identidadeGenero: () => string;

    /**
    * Gera uma identidade de gênero associada à orientação sexual selecionada.
    *
    * @param {string} [orientacaoSexual] - A orientação sexual a ser associada à identidade de gênero. Se não fornecida, será escolhida aleatoriamente.
    * @returns {string} - Uma identidade de gênero associada à orientação sexual fornecida ou aleatória.
    * @example
    * console.log(gerar.identidadePorOrientacao('Heterossexual')); // Retorna uma identidade de gênero associada, como 'Cisgênero' ou 'Transgênero'.
    * console.log(gerar.identidadePorOrientacao('Homossexual'));   // Retorna uma identidade de gênero associada, como 'Cisgênero' ou 'Transgênero'.
    * console.log(gerar.identidadePorOrientacao('Bissexual'));     // Retorna uma identidade de gênero associada, como 'Cisgênero', 'Transgênero' ou 'Não binário'.
    * console.log(gerar.identidadePorOrientacao('Assexual'));      // Retorna uma identidade de gênero associada, como 'Cisgênero', 'Transgênero' ou 'Não binário'.
    * console.log(gerar.identidadePorOrientacao('Pansexual'));     // Retorna uma identidade de gênero associada, como 'Cisgênero', 'Transgênero' ou 'Não binário'.
    * console.log(gerar.identidadePorOrientacao());                // Retorna uma identidade de gênero aleatória associada a uma orientação sexual aleatória.
    */
    identidadePorOrientacao: (orientacaoSexual?: string) => string;

    /**
     * Gera Inscrição Estadual aleatório e do estado informado.
     *
     * @param {string} [state] - Sigla do estado. (por exemplo, 'SP', 'RJ', 'MG', etc.).
     * @returns {string|null} O número de inscrição estadual gerado ou null se o estado não for encontrado.
     * @example
     * console.log(gerar.inscricaoEstadual());     // gera IE aleatória
     * console.log(gerar.inscricaoEstadual('AC')); // 01.335116638
     * console.log(gerar.inscricaoEstadual('AL')); // 477703437
     * console.log(gerar.inscricaoEstadual('AP')); // 03.42773842
     * console.log(gerar.inscricaoEstadual('AM')); // 1107521283
     * console.log(gerar.inscricaoEstadual('BA')); // 16408652-16
     * console.log(gerar.inscricaoEstadual('CE')); // 6624523654
     * console.log(gerar.inscricaoEstadual('DF')); // 0724.4814180
     * console.log(gerar.inscricaoEstadual('ES')); // 754167445
     * console.log(gerar.inscricaoEstadual('GO')); // 670680320
     * console.log(gerar.inscricaoEstadual('MA')); // 122542860
     * console.log(gerar.inscricaoEstadual('MT')); // 44183991682
     * console.log(gerar.inscricaoEstadual('MS')); // 284825620
     * console.log(gerar.inscricaoEstadual('MG')); // 1772090571220
     * console.log(gerar.inscricaoEstadual('PA')); // 157594408
     * console.log(gerar.inscricaoEstadual('PB')); // 899410081
     * console.log(gerar.inscricaoEstadual('PR')); // 79686556-52
     * console.log(gerar.inscricaoEstadual('PE')); // 341771429
     * console.log(gerar.inscricaoEstadual('PI')); // 758080174
     * console.log(gerar.inscricaoEstadual('RJ')); // 41038311.44
     * console.log(gerar.inscricaoEstadual('RN')); // 49799347-3
     * console.log(gerar.inscricaoEstadual('RS')); // 506246789
     * console.log(gerar.inscricaoEstadual('RO')); // 51694723-0
     * console.log(gerar.inscricaoEstadual('RR')); // 24022984
     * console.log(gerar.inscricaoEstadual('SC')); // 037515098
     * console.log(gerar.inscricaoEstadual('SP')); // 4081896624448
     * console.log(gerar.inscricaoEstadual('SE')); // 555790451
     * console.log(gerar.inscricaoEstadual('TO')); // 55582433-0
     */
    inscricaoEstadual: (state?: string) => string | null;

    /**
     * Retorna uma lista de códigos de bancos.
     *
     * @returns {array} Uma lista de códigos de bancos.
     * @example
     * // Retorna uma lista de códigos de bancos
     * console.log(gerar.listaCodigosBancos());
     * // => [ 1, 237, 104, 745, 296, 341, 33, ...]
     */
    listaCodigosBancos: () => number[];

    /**
     * Gera nomes aleatórios.
     *
     * Este objeto fornece métodos para gerar nomes masculinos, femininos, completos, de mães e pais,
     * nomes do meio e sobrenomes.
     *
     * @example
     * // Gerar um nome aleatório
     * console.log(gerar.nome.aleatorio()); // Ex: "João", "Maria"
     *
     * // Gerar um nome aleatório completo
     * console.log(gerar.nome.aleatorioCompleto()); // Ex: "João Santos da Silva", "Maria Santos da Silva"
     *
     * // Gerar um nome masculino aleatório
     * console.log(gerar.nome.masculino()); // Ex: "João"
     *
     * // Gerar um nome masculino completo aleatório
     * console.log(gerar.nome.masculinoCompleto()); // Ex: "João Santos da Silva"
     *
     * // Gerar um nome feminino aleatório
     * console.log(gerar.nome.feminino()); // Ex: "Maria"
     *
     * // Gerar um nome feminino completo aleatório
     * console.log(gerar.nome.femininoCompleto()); // Ex: "Maria Santos da Silva"
     *
     * // Gerar o nome da mãe aleatório
     * console.log(gerar.nome.mae()); // Ex: "Ana"
     *
     * // Gerar o nome completo da mãe aleatório
     * console.log(gerar.nome.maeCompleto()); // Ex: "Ana Santos da Silva"
     *
     * // Gerar o nome do pai aleatório
     * console.log(gerar.nome.pai()); // Ex: "José"
     *
     * // Gerar o nome completo do pai aleatório
     * console.log(gerar.nome.paiCompleto()); // Ex: "José Santos da Silva"
     *
     * // Gerar um nome do meio aleatório
     * console.log(gerar.nome.doMeio()); // Ex: "Santos"
     *
     * // Gerar um sobrenome aleatório
     * console.log(gerar.nome.sobrenome()); // Ex: "da Silva"
     */
    nome: {
      aleatorio: () => string;
      aleatorioCompleto: () => string;
      masculino: () => string;
      masculinoCompleto: () => string;
      feminino: () => string;
      femininoCompleto: () => string;
      mae: () => string;
      maeCompleto: () => string;
      pai: () => string;
      paiCompleto: () => string;
      doMeio: () => string;
      sobrenome: () => string;
    };

    /**
     * Gera um nome de empresa aleatório. Baseado em filmes, séries, livros, videogames, animação, hq, etc.
     *
     * @param {string} [local] - Se for 'BR' ou 'br', retorna apenas empresas brasileiras.
     * @returns {string} - Um nome de empresa.
     * @example
     * console.log(gerar.nomeEmpresa()); // Exemplo: "Wayne Enterprises", "Los Pollos Hermanos", "Nakatomi Corporation"
     * console.log(gerar.nomeEmpresa('BR')); // Exemplo: "Indústrias Tabajara", "Vavá Tur"
     */
    nomeEmpresa: (local?: string) => string;

    /**
     * Gera uma orientação sexual aleatória.
     * @type {string}
     * @returns {string} - Uma orientação sexual aleatória.
     * @example
     * console.log(gerar.orientacaoSexual()); // Retorna qualquer orientação sexual, como: "Heterossexual", "Homossexual", etc.
     */
    orientacaoSexual: () => string;

    /**
     * Gera uma palavra aleatória.
     *
     * @returns {string} Uma palavra aleatória.
     * @example
     * // Gera uma palavra aleatória
     * console.log(gerar.palavra()); // Ex: "Lorem", "ipsum", "dolor", "sit", "amet"
     */
    palavra: () => string;

    /**
     * Gera um parágrafo aleatório.
     *
     * @param {number} [qttParagraph=1] - Quantidade de parágrafos.
     * @param {number} [qttWords] - Quantidade de palavras por sentença. Se não for informado, será um número aleatório entre 10 e 20.
     * @returns {string} Um parágrafo aleatório.
     * @example
     * // Gera um parágrafo aleatório com quantidade de palavras aleatórias
     * console.log(gerar.paragrafo());
     * // Ex: "Recusandae. facilis consequuntur quae fuga. debitis quaerat architecto do placeat."
     *
     * // Gera um parágrafo com a quantidade de sentença informada, cada uma com quantidade de palavras aleatórias
     * console.log(gerar.paragrafo(3));
     * // Ex: "Lorem ipsum dolor sit amet." "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
     *
     * // Gera um parágrafo aleatório com quantidade de sentenças e de palavras informadas.
     * console.log(gerar.paragrafo(3, 8));
     * // Ex: "Labore ipsa, eius dolore corporis ipsam doloremque nobis." "Enim facilis fuga. voluptatem debitis veniam, hic atque." "Voluptates fugiat nesciunt, numquam reprehenderit, quae commodo minus."
     */
    paragrafo: (qttParagraph?: number, qttWords?: number) => string;

    /**
     * Gera um número de Passoporte aleatório.
     *
     * @returns {string} O número de Passaporte gerado.
     * @example
     * console.log(gerar.passaporte()); // "AB1234567"
     */
    passaporte: () => string;

    /**
     * Gera um número de PIS aleatório.
     *
     * O número de PIS gerado é válido e pode ser formatado com máscara.
     *
     * @param {boolean} [mask=false] - Se `true`, o PIS será retornado com a máscara de formatação (xxx.xxxxx.xx.x). Se `false`, o PIS será retornado apenas com os dígitos.
     * @returns {string} O número de PIS gerado.
     * @example
     * // PIS sem máscara
     * console.log(gerar.pis()); // "68677229185"
     *
     * // PIS com máscara
     * console.log(gerar.pis(true)); // "686.77229.18.5"
     */
    pis: (mask?: boolean) => string;

    /**
     * Gera uma placa de veículo aleatória no formato antigo (3 letras, 4 números).
     *
     * @param {boolean} [mask=false] - Se `true`, a placa será retornada com a máscara de formatação (XXX-9999). Se `false`, a placa será retornada apenas com os dígitos e letras.
     * @returns {string} A placa de veículo gerada.
     * @example
     * // Placa com máscara
     * console.log(gerar.placaAntiga()); // "ABC-1234"
     *
     * // Placa sem máscara
     * console.log(gerar.placaAntiga(false)); // "ABC1234"
     */
    placaAntiga: (mask?: boolean) => string;

    /**
     * Gera uma placa de veículo aleatória no formato Mercosul (3 letras, 1 número, 1 letra, 2 números).
     *
     * @param {boolean} [mask=false] - Se `true`, a placa será retornada com a máscara de formatação (XXX-9X99). Se `false`, a placa será retornada apenas com os dígitos e letras.
     * @returns {string} A placa de veículo gerada.
     * @example
     * // Placa com máscara
     * console.log(gerar.placaMercosul()); // "ABC-1D23"
     *
     * // Placa sem máscara
     * console.log(gerar.placaMercosul(false)); // "ABC1D23"
     */
    placaMercosul: (mask?: boolean) => string;

    /**
     * Gera uma profissão aleatória.
     * @type {string}
     * @returns {string} - Uma profissão aleatória.
     * @example
     * console.log(gerar.profissao()); // Retorna qualquer profissão, como "Engenheiro", "Médico", "Professor", etc.
     */
    profissao: () => string;

    /**
     * Gera um provedor de email aleatório.
     * @type {string}
     * @returns {string} - Um provedor de email aleatório.
     * @example
     * console.log(gerar.provedorEmail()); // Retorna qualquer provedor de email, como: "@gmail.com", "@yahoo.com", etc.
     */
    provedorEmail: () => string;

    /**
     * Gera um número de RENAVAM aleatório.
     * @returns {string} RENAVAM gerado.
     * @example
     * console.log(gerar.renavam());
     */
    renavam: () => string;

    /**
     * Gera um número de RG aleatório.
     * @param {boolean} [mask=false] - Se `true`, retorna com máscara.
     * @returns {string} RG gerado.
     * @example
     * // RG com máscara
     * console.log(gerar.rg(true)); // "12.345.678-9"
     *
     * // RG sem máscara
     * console.log(gerar.rg(false)); // "123456789"
     */
    rg: (mask?: boolean) => string;

    /**
     * Gera uma sentença aleatória.
     *
     * @param {number} [qttWords] - Quantidade de palavras na sentença. Se não for informado, será um número aleatório entre 10 e 20.
     * @returns {string} Uma sentença aleatória.
     * @example
     * // Gera uma sentença aleatória com quantidade de palavras aleatórias
     * console.log(gerar.sentenca()); // Ex: "Ea placeat, labore quidem, harum expedita fuga."
     *
     * // Gera uma sentença aleatória com a quantidade de palavras informada.
     * console.log(gerar.sentenca(10)); // Ex: "Dolorem sit modi deleniti nemo sint laborum vitae repellendus ipsa."
     */
    sentenca: (qttWords?: number) => string;

    /**
     * Gera um número de telefone aleatório.
     *
     * O número de telefone gerado pode ser formatado com máscara - (XX) XXXX-XXXX - ou apenas com os dígitos.
     *
     * @param {boolean} [mask=false] - Se true, o telefone será retornado com a máscara - (XX) XXXX-XXXX. Se false, o telefone será retornado apenas com os dígitos.
     * @param {string} [state] - A sigla do estado para filtrar os DDDs. Se não fornecido, um DDD de qualquer estado será gerado.
     * @returns {string} O número de telefone gerado.
     * @example
     * // Telefone sem máscara, de estado aleatório
     * console.log(gerar.telefone()); // "1199999999"
     *
     * // Celular com máscara, de estado aleatório
     * console.log(gerar.telefone(true)); // "(11) 9999-9999"
     *
     * // Celular sem máscara, do estado informado
     * console.log(gerar.telefone(false, "SC")); // "4899999999"
     *
     * // Celular com máscara, do estado informado
     * console.log(gerar.telefone(true, "ES")); // "(27) 9999-9999"
     */
    telefone: (mask?: boolean, state?: string) => string;

    /**
     * Gera um tipo sanguíneo aleatório.
     * @returns {string} Tipo sanguíneo.
     * @example
     * console.log(gerar.tipoSanguineo());
     */
    tipoSanguineo: () => string;

    /**
     * Gera um Título de Eleitor aleatório.
     * @param {boolean} [mask=false] - Se `true`, o Título de Eleitor será retornado com a máscara de formatação (xxxx xxxx xxxx xxxx). Se `false`, será  retornado apenas com os dígitos.
     * @param {string} [state] - A sigla do estado para determinar a origem do Título de Eleitor. Se não fornecido, será escolhido um estado aleatório.
     * @returns {string} O Título de Eleitor gerado.
     * @example
     * // Título de Eleitor sem máscara e do estado aleatório
     * console.log(gerar.tituloEleitor()); // "123456789012"
     *
     * // Título de Eleitor com máscara e do estado aleatório
     * console.log(gerar.tituloEleitor(true)); // "1234 5678 9012"
     *
      * // Título de Eleitor sem máscara e do estado informado
     * console.log(gerar.tituloEleitor(false, 'ES')); // "123456789012"
     *
     * // Título de Eleitor com máscara e do estado informado
     * console.log(gerar.tituloEleitor(true, 'PE')); // "1234 5678 9012"
     */
    tituloEleitor: (mask?: boolean, state?: string) => string;
  };

  /**
   * Gera um apelido aleatório.
   *
   * @returns {string} - Um apelido gerado aleatoriamente.
   * @example
   * console.log(apelido()); // Exemplo: "Falcão", "Astronauta", "Relíquia"
   */
  export const apelido: () => string;

  /**
   * Gera dados de um banco aleatório.
   *
   * @param {number} [code] - O código do banco. Se não for informado, um banco aleatório será gerado.
   * @returns {object} Um objeto contendo os dados do banco.
   * @example
   * console.log(banco()); // Gera dados de um banco aleatório
   * // =>
   * {
   *   codigoBanco: '341',
   *   nomeBanco: 'Itaú Unibanco S.A.',
   *   razaoSocial: 'Banco Itaú Unibanco - 341',
   *   ispb: '03415961'
   * }
   *
   * console.log(banco(237)); // Gera dados do banco informado
   * // =>
   * {
   *   codigoBanco: '237',
   *   nomeBanco: 'BANCO BRADESCO S.A.',
   *   razaoSocial: 'BANCO BRADESCO S.A.',
   *   ispb: '60746948'
   * }
   */
  export const banco: (code?: number) => object;

  /**
   * Gera Cartão de Crédito aleatório.
   *
   * Este objeto fornece métodos para gerar número de Cartão de Crédito, Bandeira, CVV, Data De Expiração e Nome do Titular.
   * @param {boolean} [mask=false] - Se `true`, o número do cartão será retornado com a máscara de formatação (xxxx xxxx xxxx xxxx).
   * Se `false`, o número do cartão será retornado apenas com os dígitos.
   * @param {string} - Nome completo do titular
   * @returns {object} Um objeto contendo o número do cartão, a bandeira, o CVV e a data de expiração e o nome do titular
   *
   * @example
   * // Gera objeto cartaoCredito com as propriedades: numero (sem máscara), bandeira, cvv, dataExpiracao e nomeTitular aleatório (abreviado)
   * console.log(cartaoCredito());
   * // =>
   *    {
   *      numero: '6547178146357745',
   *      bandeira: 'mastercard',
   *      cvv: '532',
   *      dataExpiracao: '12/07/2028',
   *      nomeTitular: 'BRENDA B LIMA'
   *    }
   *
   * // Gera objeto cartaoCredito com as propriedades: numero (com máscara), bandeira, cvv, dataExpiracao e nomeTitular informado (abreviado)
   * console.log(cartaoCredito(true, "João Santos da Silva"));
   * // =>
   *    {
   *      numero: '5534 5523 6833 6867',
   *      bandeira: 'visa',
   *      cvv: '866',
   *      dataExpiracao: '25/07/2033',
   *      nomeTitular: 'JOÃO S SILVA'
   *    }
   *
   * // Gera objeto cartaoCredito com as propriedades: numero (sem máscara), bandeira, cvv, dataExpiracao e nomeTitular informado (abreviado)
   * console.log(cartaoCredito(false, "Maria Aparecida Reis"));
   * // =>
   *    {
   *      numero: '5534552368336867',
   *      bandeira: 'visa',
   *      cvv: '866',
   *      dataExpiracao: '25/07/2033',
   *      nomeTitular: 'MARIA A REIS'
   *    }
   *
   */
  export const cartaoCredito: (mask?: boolean, nomeTitular?: string) => object;

  /**
   * Gera um número de celular aleatório.
   *
   * O número de celular gerado pode ser formatado com máscara ( (DDD) 9XXXX-XXXX ) ou apenas com os dígitos.
   *
   * @param {boolean} [mask=false] - Se `true`, o celular será retornado com a máscara de formatação ( (DDD) 9XXXX-XXXX ). Se `false`, o celular será   retornado apenas com os dígitos.
   * @param {string} [state] - A sigla do estado para filtrar os DDDs. Se não fornecido, um DDD de qualquer estado será gerado.
   * @param {string} [operator] - O nome da operadora (por exemplo, "Claro", "Oi", "Tim", "Vivo"). Se não fornecido, uma operadora aleatória será   gerada.
   * @returns {string} O número de celular gerado.
   * @example
   * // Gera celular sem máscara, de estado aleatório e operadora aleatória
   * console.log(celular()); // "11999999999"
   *
   * // Gera celular com máscara, de estado aleatório e operadora aleatória
   * console.log(celular(true)); // "(11) 99999-9999"
   *
   * // Gera celular sem máscara, do estado informado e operadora aleatória
   * console.log(celular(false, "SC")); // "48999999999"
   *
   * // Gera celular com máscara, do estado informado e operadora aleatória
   * console.log(celular(true, "ES")); // "(27) 99999-9999"
   *
   * // Gera celular sem máscara, do estado aleatório e operadora informada
   * console.log(celular(false, "", "Claro")); // "85991999999"
   *
   * // Gera celular com máscara, do estado informado e operadora aleatória
   * console.log(celular(true, "MS", "Vivo")); // "(67) 99799-9999"
   */
  export const celular: (mask?: boolean, state?: string, operator?: string) => string;

  /**
   * Gera um CEP aleatório.
   *
   * O CEP gerado pode ser formatado com máscara (xxxxx-xxx) ou apenas com os dígitos.
   *
   * @param {boolean} [mask=false] - Se `true`, o CEP será retornado com a máscara de formatação (xxxxx-xxx). Se `false`, o CEP será retornado apenas   com os dígitos.
   * @param {string} [state] - A sigla do estado para filtrar os CEPs. Se não fornecido, um CEP de qualquer estado será gerado.
   * @returns {string} O CEP gerado.
   * @example
   * // CEP sem máscara
   * console.log(cep()); // "12345678"
   *
   * // CEP com máscara
   * console.log(cep(true)); // "12345-678"
   *
   * // CEP de São Paulo (SP) sem máscara
   * console.log(cep(false, "SP")); // "01001000"
   *
   * // CEP de São Paulo (SP) com máscara
   * console.log(cep(true, "SP")); // "01001-000"
   */
  export const cep: (mask?: boolean, state?: string) => string;

  /**
   * Gera números de certidões (nascimento, casamento, óbito) seguindo o padrão de Registro Civil Brasileiro.
   *
   * Este objeto fornece métodos para gerar números de certidões formatados ou não, além de objetos detalhados com informações como cartório, estado,   ano de registro, tipo de livro, folha, termo, entre outros.
   *
   * @param {boolean} [mask=true] - Define se o número será formatado com máscara.
   * @returns {string} Número da certidão aleatória, com ou sem máscara.
   * @example
   * console.log(certidao.aleatoria());         // "123456 12 2022 1001 1 12345 123 1234567"
   * console.log(certidao.aleatoria(false));    // "12345612202210011123451231234567"
   * console.log(certidao.nascimento());        // "123456 12 2022 1001 1 12345 123 1234567"
   * console.log(certidao.nascimento(false));   // "12345612202210011123451231234567"
   * console.log(certidao.casamento());         // "123456 12 2022 2001 1 12345 123 1234567"
   * console.log(certidao.casamento(false));    // "12345612202220011123451231234567"
   * console.log(certidao.obito());             // "123456 12 2022 3001 1 12345 123 1234567"
   * console.log(certidao.obito(false));        // "12345612202230011123451231234567"
   *
   * // Gera um objeto detalhado de certidão aleatório
   * console.log(certidao.aleatoriaObj());
   * {
   *   tipoCertidao: 'Nascimento',
   *   cartorio: '123456',
   *   estado: '12',
   *   anoRegistro: '23',
   *   tipoLivro: '1001',
   *   tipoFolha: '1',
   *   termo: '12345',
   *   folha: '123',
   *   livro: '1234567'
   * }
   *
   * // Gera um objeto detalhado de certidão de nascimento.
   * console.log(certidao.nascimentoObj());
   * // { tipoCertidao: "Nascimento", cartorio: "123456", estado: "12", anoRegistro: "2022",  tipoLivro: '1001', ... }
   *
   * //Gera um objeto detalhado de uma certidão de casamento.
   * console.log(certidao.casamentoObj());
   * // { tipoCertidao: "Casamento", cartorio: "123456", estado: "12", anoRegistro: "2022", tipoLivro: '2001', ... }
   *
   */
  export const certidao: {
    aleatoria: (mask?: boolean) => string;
    nascimento: (mask?: boolean) => string;
    casamento: (mask?: boolean) => string;
    obito: (mask?: boolean) => string;
    aleatoriaObj: () => object;
    nascimentoObj: () => object;
    casamentoObj: () => object;
  };

  /**
   * Gera um número de CNH aleatório.
   *
   * @returns {string} O número de CNH gerado.
   * @example
   * console.log(cnh()); // "123456789012"
   */
  export const cnh: () => string;

  /**
   * Gera categorias de CNH válidas.
   *
   * @returns {string} Categoria da CNH.
   * @example
   * console.log(cnhCategoria());
   */
  export const cnhCategoria: () => string;

  /**
   * Gera um número de CNPJ aleatório.
   *
   * @param {boolean} [mask=false] - Se `true`, o CNPJ será retornado com a máscara de formatação (xx.xxx.xxx/0001-xx). Se `false`, o CNPJ será retornado   apenas com os dígitos.
   * @returns {string} O CNPJ gerado.
   * @example
   * // CNPJ com máscara
   * console.log(cnpj(true)); // "12.345.678/0001-00"
   *
   * // CNPJ sem máscara
   * console.log(cnpj(false)); // "12345678000100"
   */
  export const cnpj: (mask?: boolean) => string;

  /**
   * Gera um número de CNPJ Alfanumerico aleatório (compatibilidade com versão anterior)
   * @param {boolean} mask - Se true, retorna com máscara de formatação
   * @returns {string} CNPJ gerado
   * @example
   * console.log(cnpjAlfanumerico(true));   // CNPJ formatado
   * console.log(cnpjAlfanumerico(false));  // CNPJ sem formatação
   * console.log(cnpj());                   // Usando a função de compatibilidade
   */
  export const cnpjAlfanumerico: (mask?: boolean) => string;

  /**
   * Gera um número de Cartão Nacional de Saúde (CNS) aleatório.
   *
   * @param {boolean} [mask=false] - Se `true`, retorna o CNS com máscara (XXX XXXX XXXX XXXX).
   * @param {string} [type] - O tipo de CNS a ser gerado ('beneficiario' para beneficiários do SUS, 'profissional' para profissionais de saúde).
   * @returns {string} O número de CNS gerado.
   * @example
   * // CNS sem máscara e tipo aleatório
   * console.log(cns());
   *
   * // CNS sem máscara e do tipo informado
   * console.log(cns(false, 'beneficiario'));
   * console.log(cns(false, 'profissional'));
   *
   * // CNS com máscara e tipo aleatório
   * console.log(cns(true));
   *
   * // CNS com máscara e do tipo informado
   * console.log(cns(true, 'beneficiario'));
   * console.log(cns(true, 'profissional'));
   */
  export const cns: (mask?: boolean, type?: string) => string;

  /**
  * Gera um código de operadora de celular aleatório.
  *
  * ATENÇAO: DEVIDO A PORTABILIDADE, OS CÓDIGOS DE CELULARES REAIS PODEM NÃO PERTENCER MAIS A OPERADORA DE ORIGEM
  * A função pode gerar um código de operadora aleatório ou um código específico de uma operadora fornecida.
  *
  * @param {string} [name] - O nome da operadora (por exemplo, "Claro", "Oi", "Tim", "Vivo"). Se não fornecido, um código de operadora aleatório será  gerado.
  * @returns {number} O código de operadora gerado.
  * @example
  * // Gera um código de operadora aleatório
  * console.log(codigoOperadora()); // Pode retornar 968, 973, 984, 969, 967, etc.
  *
  * // Gera um código da Claro
  * console.log(codigoOperadora("Claro")); // Pode retornar 968, 973, 974, 975, 976, 991, 992, 993 ou 994
  *
  * // Gera um código da Oi
  * console.log(codigoOperadora("Oi")); // Pode retornar 984, 985, 986, 987, 988 ou 989
  *
  * // Gera um código da Tim
  * console.log(codigoOperadora("Tim")); // Pode retornar 969, 979, 980, 981, 982 ou 983
  *
  * // Gera um código da Vivo
  * console.log(codigoOperadora("Vivo")); // Pode retornar 967, 971, 972, 995, 996, 997, 998 ou 999
  *
  * // Gera um código de operadora aleatória (mesmo se o nome da operadora não for válido)
  * console.log(codigoOperadora("blablabla")); // Pode retornar 968, 973, 984, 969, 967, etc.
  */
  export const codigoOperadora: (name?: string) => number;

  /**
   * Gera uma conta bancária aleatória.
   *
   * Este objeto fornece métodos para gerar contas bancárias de diferentes bancos,
   * incluindo Banco do Brasil, Bradesco, Caixa, Citibank, HSBC, Itaú e Santander.
   *
   * @param {string} [bank='Indiferente'] - O nome do banco para gerar a conta.
   * Se não fornecido, um banco aleatório será escolhido.
   * @returns {object} Um objeto contendo o código do banco, o nome do banco,
   * a agência, o dígito verificador da agência, a conta, o dígito verificador da conta.
   *
   * @example
   * // Gera uma conta bancária aleatória do Banco do Brasil
   * console.log(contaBancaria('1'));
   * console.log(contaBancaria('Banco do Brasil'));
   * // =>
   *    {
   *      codigoBanco: '1',
   *      nomeBanco: 'Banco do Brasil',
   *      agencia: '1234-5',
   *      agenciaDv: '5',
   *      conta: '12345678-9',
   *      contaDv: '9'
   *    }
   *
   * // Gera uma conta bancária aleatória do Bradesco
   * console.log(contaBancaria('237'));
   * console.log(contaBancaria('Bradesco'));
   * // =>
   *    {
   *      codigoBanco: '237',
   *      nomeBanco: 'Bradesco',
   *      agencia: '1234-P',
   *      agenciaDv: 'P',
   *      conta: '123456-0',
   *      contaDv: '0'
   *    }
   *
   * // Gera uma conta bancária aleatória da Caixa
   * console.log(contaBancaria('104'));
   * console.log(contaBancaria('Caixa'));
   * // =>
   *    {
   *      codigoBanco: '104',
   *      nomeBanco: 'Caixa',
   *      agencia: '1234',
   *      agenciaDv: '',
   *      conta: '1234567890-0',
   *      contaDv: '0'
   *    }
   *
   * // Gera uma conta bancária aleatória do Citibank
   * console.log(contaBancaria('745'));
   * console.log(contaBancaria('Citibank'));
   * // =>
   *    {
   *      codigoBanco: '745',
   *      nomeBanco: 'Citibank',
   *      agencia: '1234',
   *      agenciaDv: '',
   *      conta: '1234567-0',
   *      contaDv: '0'
   *    }
   *
   * // Gera uma conta bancária aleatória do HSBC
   * console.log(contaBancaria('296'));
   * console.log(contaBancaria('HSBC'));
   * // =>
   *    {
   *      codigoBanco: '296',
   *      nomeBanco: 'HSBC',
   *      agencia: '1234',
   *      agenciaDv: '',
   *      conta: '123456-0',
   *      contaDv: '0'
   *    }
   *
   * // Gera uma conta bancária aleatória do Itaú
   * console.log(contaBancaria('341'));
   * console.log(contaBancaria('Itaú'));
   * // =>
   *    {
   *      codigoBanco: '341',
   *      nomeBanco: 'Itaú',
   *      agencia: '1234',
   *      agenciaDv: '',
   *      conta: '123456789-0',
   *      contaDv: '0'
   *    }
   *
   * // Gera uma conta bancária aleatória do Santander
   * console.log(contaBancaria('33'));
   * console.log(contaBancaria('Santander'));
   * // =>
   *    {
   *      codigoBanco: '33',
   *      nomeBanco: 'Santander',
   *      agencia: '1234',
   *      agenciaDv: '',
   *      conta: '12345678-0',
   *      contaDv: '0'
   *    }
   *
   * // Gera uma conta bancária aleatória de um banco aleatório
   * console.log(contaBancaria());
   * // =>
   *    {
   *      codigoBanco: '1',
   *      nomeBanco: 'Banco do Brasil',
   *      agencia: '1234-5',
   *      agenciaDv: '5',
   *      conta: '12345678-9',
   *      contaDv: '9'
   *    }
   */
  export const contaBancaria: (bank?: string) => object;

  /**
   * Gera cor da pele aleatória.
   *
   * @type {string}
   * @returns {string} - Uma cor da pele aleatória.
   * @example
   * console.log(corPele()); // Exemplo: "Branca", "Preta", etc.
   */
  export const corPele: () => string;

  /**
   * Gera um número de CPF aleatório.
   *
   * @param {boolean} [mask=false] - Se `true`, o CPF será retornado com a máscara de formatação (xxx.xxx.xxx-xx). Se `false`, o CPF será retornado apenas com  os dígitos.
   * @param {string} [state] - A sigla do estado para determinar a origem do CPF. Se não fornecido, será escolhido um estado aleatório.
   * @returns {string} O CPF gerado.
   * @example
   * // CPF sem máscara e de estado aleatório
   * console.log(cpf()); // "12345678909"
   *
   * // CPF com máscara e do estado informado
   * console.log(cpf(true, "PR")); // "123.456.789-09"
   *
   * // CPF sem máscara e do estado informado
   * console.log(cpf(false, "SC")); // "12345678909"
   *
   * // CPF com mascara e de estado aleatório
   * console.log(cpf(true)); // "987.654.321-00"
   *
   * // CPF sem máscara e de estado aleatório
   * console.log(cpf(false)); // "98765432100"
   */
  export const cpf: (mask?: boolean, state?: string) => string;

  /**
   * Gera uma data de nascimento aleatória com base nos parâmetros fornecidos.
   *
   * @param {number | [number, number]} [ageOrRange] - Pode ser:
   *   1. Uma idade específica (número)
   *   2. Um intervalo de idades [idadeMin, idadeMax]
   *   3. Se omitido, usa o intervalo padrão de 18 a 80 anos
   * @returns {string} Data de nascimento no formato DD/MM/YYYY
   *
   * @example
   * console.log(dataNascimento());         // Data entre 18-80 anos
   * console.log(dataNascimento(25));       // Data de quem tem exatamente 25 anos
   * console.log(dataNascimento([30, 40])); // Data entre 30-40 anos
   */
  export const dataNascimento: (ageOrRange?: number | [number, number]) => string;

  /**
   * Gera um DDD aleatório para um estado brasileiro.
   *
   * @param {string} [state] - A sigla do estado (por exemplo, "SP", "RJ").
   * @returns {number} O DDD aleatório para o estado fornecido.
   * @example
   * // DDD aleatório
   * console.log(ddd()); // Pode retornar ddd de qualquer estado/cidade
   *
   * // DDD aleatório para São Paulo (SP)
   * console.log(ddd("SP")); // Pode retornar 11, 12, 13, 14, 15, 16, 17, 18 ou 19
   *
   * // DDD aleatório para Rio de Janeiro (RJ)
   * console.log(ddd("RJ")); // Pode retornar 21, 22 ou 24
   */
  export const ddd: (state?: string) => string;

  /**
   * Gera um endereço de e-mail aleatório.
   *
   * O endereço de e-mail gerado pode ser baseado em um nome completo fornecido ou em um apelido aleatório.
   *
   * @param {string} [fullName] - O nome completo a ser usado para gerar o endereço de e-mail. Se não fornecido, um apelido aleatório será usado.
   * @returns {string} O endereço de e-mail gerado.
   * @example
   * // Gera um endereço de e-mail com base em um apelido aleatório
   * console.log(email()); // Pode retornar algo como "alpha@gmail.com"
   *
   * // Gera um endereço de e-mail com base no nome fornecido "Marcelo Lourenço"
   * console.log(email("José Maria")); // Pode retornar algo como "jose.maria@ig.com"
   *
   * // Gera um endereço de e-mail com base no nome aleatório
   * console.log(email(gerar.nomeFemininoCompleto)); // Pode retornar algo como "ana.borges@hotmail.com"
   */
  export const email: (fullName?: string) => string;

  /**
   * Gera um endereço aleatório.
   *
   * O CEP do endereço gerado pode ser formatado com máscara (xxxxx-xxx) ou apenas com os dígitos.
   *
   * @param {boolean} [mask=false] - Se `true`, o CEP será retornado com a máscara de formatação (xxxxx-xxx). Se `false`, o CEP será retornado apenas   com os dígitos.
   * @param {string} [state] - A sigla do estado para filtrar os CEPs. Se não fornecido, um CEP de qualquer estado será gerado.
   * @returns {object} O endereço gerado.
   * @example
   * // Endereço sem máscara
   * console.log(endereco()); // { cep: '12345678', logradouro: 'Rua dos Pinheiros', numero: '123', complemento: 'Apto 101', bairro: 'Jardim Paulista',   localidade: 'São Paulo', estado: 'SP' }
   *
   * // Endereço com máscara
   * console.log(endereco(true)); // { cep: '12345-678', logradouro: 'Rua dos Pinheiros', numero: '123', complemento: 'Apto 101', bairro: 'Jardim   Paulista', localidade: 'São Paulo', estado: 'SP' }
   *
   * // Endereço de São Paulo (SP) sem máscara
   * console.log(endereco(false, "SP")); // { cep: '01001000', logradouro: 'Rua da Consolação', numero: '123', complemento: 'Apto 101', bairro:   'Consolação', localidade: 'São Paulo', estado: 'SP' }
   *
   * // Endereço de São Paulo (SP) com máscara
   * console.log(endereco(true, "SP")); // { cep: '01001-000', logradouro: 'Rua da Consolação', numero: '123', complemento: 'Apto 101', bairro:   'Consolação', localidade: 'São Paulo', estado: 'SP' }
   */
  export const endereco: (mask?: boolean, state?: string) => object;

  /**
   * Gera uma escolaridade aleatória.
   *
   * @returns {string} Escolaridade.
   * @example
   * console.log(escolaridade());
   */
  export const escolaridade: () => string;

  /**
   * Retorna a descrição do gênero com base na sigla fornecida.
   *
   * @param {string} [input] - Sigla do gênero. Valores aceitos: 'm', 'f', 'i'.
   *   - 'm' para Masculino
   *   - 'f' para Feminino
   *   - 'i' para Intersexo
   *   - Se o `input` for `null`, omitido, ou qualquer outro valor não listado,
   *     a função retornará aleatoriamente "Masculino" ou "Feminino".
   *
   * @returns {string} - A descrição do gênero correspondente.
   *   - "Masculino" se input for 'm'.
   *   - "Feminino" se input for 'f'.
   *   - "Intersexo" se input for 'i'.
   *   - Aleatoriamente "Masculino" ou "Feminino" para outros casos.
   *
   * @example
   * console.log(genero('f'));  // Retorna: "Feminino"
   * console.log(genero('m'));  // Retorna: "Masculino"
   * console.log(genero('i'));  // Retorna: "Intersexo"
   * console.log(genero());     // Retorna aleatoriamente: "Masculino" ou "Feminino"
   * console.log(genero(null)); // Retorna aleatoriamente: "Masculino" ou "Feminino"
   * console.log(genero('x'));  // Retorna aleatoriamente: "Masculino" ou "Feminino"
   */
  export const genero: (input?: string) => string;

  /**
   * Gera uma identidade de gênero aleatória.
   * @type {string}
   * @returns {string} - Uma identidade de gênero aleatório.
   * @example
   * console.log(identideGenero()); // Retorna uma identidade de gênero, como: "Cisgênero", "Transgênero", etc.
   */
  export const identidadeGenero: () => string;

  /**
  * Gera uma identidade de gênero associada à orientação sexual selecionada.
  *
  * @param {string} [orientacaoSexual] - A orientação sexual a ser associada à identidade de gênero. Se não fornecida, será escolhida aleatoriamente.
  * @returns {string} - Uma identidade de gênero associada à orientação sexual fornecida ou aleatória.
  * @example
  * console.log(identidadePorOrientacao('Heterossexual')); // Retorna uma identidade de gênero associada, como 'Cisgênero' ou 'Transgênero'.
  * console.log(identidadePorOrientacao('Homossexual'));   // Retorna uma identidade de gênero associada, como 'Cisgênero' ou 'Transgênero'.
  * console.log(identidadePorOrientacao('Bissexual'));     // Retorna uma identidade de gênero associada, como 'Cisgênero', 'Transgênero' ou 'Não binário'.
  * console.log(identidadePorOrientacao('Assexual'));      // Retorna uma identidade de gênero associada, como 'Cisgênero', 'Transgênero' ou 'Não binário'.
  * console.log(identidadePorOrientacao('Pansexual'));     // Retorna uma identidade de gênero associada, como 'Cisgênero', 'Transgênero' ou 'Não binário'.
  * console.log(identidadePorOrientacao());                // Retorna uma identidade de gênero aleatória associada a uma orientação sexual aleatória.
  */
  export const identidadePorOrientacao: (orientacaoSexual?: string) => string;

  /**
   * Gera Inscrição Estadual aleatório e do estado informado.
   *
   * @param {string} [state] - Sigla do estado. (por exemplo, 'SP', 'RJ', 'MG', etc.).
   * @returns {string|null} O número de inscrição estadual gerado ou null se o estado não for encontrado.
   * @example
   * console.log(inscricaoEstadual());     // gera IE aleatória
   * console.log(inscricaoEstadual('AC')); // 01.335116638
   * console.log(inscricaoEstadual('AL')); // 477703437
   * console.log(inscricaoEstadual('AP')); // 03.42773842
   * console.log(inscricaoEstadual('AM')); // 1107521283
   * console.log(inscricaoEstadual('BA')); // 16408652-16
   * console.log(inscricaoEstadual('CE')); // 6624523654
   * console.log(inscricaoEstadual('DF')); // 0724.4814180
   * console.log(inscricaoEstadual('ES')); // 754167445
   * console.log(inscricaoEstadual('GO')); // 670680320
   * console.log(inscricaoEstadual('MA')); // 122542860
   * console.log(inscricaoEstadual('MT')); // 44183991682
   * console.log(inscricaoEstadual('MS')); // 284825620
   * console.log(inscricaoEstadual('MG')); // 1772090571220
   * console.log(inscricaoEstadual('PA')); // 157594408
   * console.log(inscricaoEstadual('PB')); // 899410081
   * console.log(inscricaoEstadual('PR')); // 79686556-52
   * console.log(inscricaoEstadual('PE')); // 341771429
   * console.log(inscricaoEstadual('PI')); // 758080174
   * console.log(inscricaoEstadual('RJ')); // 41038311.44
   * console.log(inscricaoEstadual('RN')); // 49799347-3
   * console.log(inscricaoEstadual('RS')); // 506246789
   * console.log(inscricaoEstadual('RO')); // 51694723-0
   * console.log(inscricaoEstadual('RR')); // 24022984
   * console.log(inscricaoEstadual('SC')); // 037515098
   * console.log(inscricaoEstadual('SP')); // 4081896624448
   * console.log(inscricaoEstadual('SE')); // 555790451
   * console.log(inscricaoEstadual('TO')); // 55582433-0
   */
  export const inscricaoEstadual: (state?: string) => string | null;

  /**
   * Retorna uma lista de códigos de bancos.
   *
   * @returns {array} Uma lista de códigos de bancos.
   * @example
   * // Retorna uma lista de códigos de bancos
   * console.log(listaCodigosBancos());
   * // => [ 1, 237, 104, 745, 296, 341, 33, ...]
   */
  export const listaCodigosBancos: () => number[];

  /**
   * Gera nomes aleatórios.
   *
   * Este objeto fornece métodos para gerar nomes masculinos, femininos, completos, de mães e pais,
   * nomes do meio e sobrenomes.
   *
   * @example
   * // Gerar um nome aleatório
   * console.log(nome.aleatorio()); // Ex: "João", "Maria"
   *
   * // Gerar um nome aleatório completo
   * console.log(nome.aleatorioCompleto()); // Ex: "João Santos da Silva", "Maria Santos da Silva"
   *
   * // Gerar um nome masculino aleatório
   * console.log(nome.masculino()); // Ex: "João"
   *
   * // Gerar um nome masculino completo aleatório
   * console.log(nome.masculinoCompleto()); // Ex: "João Santos da Silva"
   *
   * // Gerar um nome feminino aleatório
   * console.log(nome.feminino()); // Ex: "Maria"
   *
   * // Gerar um nome feminino completo aleatório
   * console.log(nome.femininoCompleto()); // Ex: "Maria Santos da Silva"
   *
   * // Gerar o nome da mãe aleatório
   * console.log(nome.mae()); // Ex: "Ana"
   *
   * // Gerar o nome completo da mãe aleatório
   * console.log(nome.maeCompleto()); // Ex: "Ana Santos da Silva"
   *
   * // Gerar o nome do pai aleatório
   * console.log(nome.pai()); // Ex: "José"
   *
   * // Gerar o nome completo do pai aleatório
   * console.log(nome.paiCompleto()); // Ex: "José Santos da Silva"
   *
   * // Gerar um nome do meio aleatório
   * console.log(nome.doMeio()); // Ex: "Santos"
   *
   * // Gerar um sobrenome aleatório
   * console.log(nome.sobrenome()); // Ex: "da Silva"
   */
  export const nome: {
    aleatorio: () => string;
    aleatorioCompleto: () => string;
    masculino: () => string;
    masculinoCompleto: () => string;
    feminino: () => string;
    femininoCompleto: () => string;
    mae: () => string;
    maeCompleto: () => string;
    pai: () => string;
    paiCompleto: () => string;
    doMeio: () => string;
    sobrenome: () => string;
  };

  /**
   * Gera um nome de empresa aleatório. Baseado em filmes, séries, livros, videogames, animação, hq, etc.
   *
   * @param {string} [local] - Se for 'BR' ou 'br', retorna apenas empresas brasileiras.
   * @returns {string} - Um nome de empresa.
   * @example
   * console.log(nomeEmpresa()); // Exemplo: "Wayne Enterprises", "Los Pollos Hermanos", "Nakatomi Corporation"
   * console.log(nomeEmpresa('BR')); // Exemplo: "Indústrias Tabajara", "Vavá Tur"
   */
  export const nomeEmpresa: (local?: string) => string;

  /**
   * Gera uma orientação sexual aleatória.
   * @type {string}
   * @returns {string} - Uma orientação sexual aleatória.
   * @example
   * console.log(orientacaoSexual()); // Retorna qualquer orientação sexual, como: "Heterossexual", "Homossexual", etc.
   */
  export const orientacaoSexual: () => string;

  /**
   * Gera uma palavra aleatória.
   *
   * @returns {string} Uma palavra aleatória.
   * @example
   * // Gera uma palavra aleatória
   * console.log(palavra()); // Ex: "Lorem", "ipsum", "dolor", "sit", "amet"
   */
  export const palavra: () => string;

  /**
   * Gera um parágrafo aleatório.
   *
   * @param {number} [qttParagraph=1] - Quantidade de parágrafos.
   * @param {number} [qttWords] - Quantidade de palavras por sentença. Se não for informado, será um número aleatório entre 10 e 20.
   * @returns {string} Um parágrafo aleatório.
   * @example
   * // Gera um parágrafo aleatório com quantidade de palavras aleatórias
   * console.log(paragrafo());
   * // Ex: "Recusandae. facilis consequuntur quae fuga. debitis quaerat architecto do placeat."
   *
   * // Gera um parágrafo com a quantidade de sentença informada, cada uma com quantidade de palavras aleatórias
   * console.log(paragrafo(3));
   * // Ex: "Lorem ipsum dolor sit amet." "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
   *
   * // Gera um parágrafo aleatório com quantidade de sentenças e de palavras informadas.
   * console.log(paragrafo(3, 8));
   * // Ex: "Labore ipsa, eius dolore corporis ipsam doloremque nobis." "Enim facilis fuga. voluptatem debitis veniam, hic atque." "Voluptates fugiat nesciunt, numquam reprehenderit, quae commodo minus."
   */
  export const paragrafo: (qttParagraph?: number, qttWords?: number) => string;

  /**
   * Gera um número de Passoporte aleatório.
   *
   * @returns {string} O número de Passaporte gerado.
   * @example
   * console.log(passaporte()); // "AB1234567"
   */
  export const passaporte: () => string;

  /**
   * Gera um número de PIS aleatório.
   *
   * O número de PIS gerado é válido e pode ser formatado com máscara.
   *
   * @param {boolean} [mask=false] - Se `true`, o PIS será retornado com a máscara de formatação (xxx.xxxxx.xx.x). Se `false`, o PIS será retornado apenas com os dígitos.
   * @returns {string} O número de PIS gerado.
   * @example
   * // PIS sem máscara
   * console.log(pis()); // "68677229185"
   *
   * // PIS com máscara
   * console.log(pis(true)); // "686.77229.18.5"
   */
  export const pis: (mask?: boolean) => string;

  /**
   * Gera uma placa de veículo aleatória no formato antigo (3 letras, 4 números).
   *
   * @param {boolean} [mask=false] - Se `true`, a placa será retornada com a máscara de formatação (XXX-9999). Se `false`, a placa será retornada apenas com os dígitos e letras.
   * @returns {string} A placa de veículo gerada.
   * @example
   * // Placa com máscara
   * console.log(placaAntiga()); // "ABC-1234"
   *
   * // Placa sem máscara
   * console.log(placaAntiga(false)); // "ABC1234"
   */
  export const placaAntiga: (mask?: boolean) => string;

  /**
   * Gera uma placa de veículo aleatória no formato Mercosul (3 letras, 1 número, 1 letra, 2 números).
   *
   * @param {boolean} [mask=false] - Se `true`, a placa será retornada com a máscara de formatação (XXX-9X99). Se `false`, a placa será retornada apenas com os dígitos e letras.
   * @returns {string} A placa de veículo gerada.
   * @example
   * // Placa com máscara
   * console.log(placaMercosul()); // "ABC-1D23"
   *
   * // Placa sem máscara
   * console.log(placaMercosul(false)); // "ABC1D23"
   */
  export const placaMercosul: (mask?: boolean) => string;

  /**
   * Gera uma profissão aleatória.
   * @type {string}
   * @returns {string} - Uma profissão aleatória.
   * @example
   * console.log(profissao()); // Retorna qualquer profissão, como "Engenheiro", "Médico", "Professor", etc.
   */
  export const profissao: () => string;

  /**
   * Gera um provedor de email aleatório.
   * @type {string}
   * @returns {string} - Um provedor de email aleatório.
   * @example
   * console.log(provedorEmail()); // Retorna qualquer provedor de email, como: "@gmail.com", "@yahoo.com", etc.
   */
  export const provedorEmail: () => string;

  /**
   * Gera um número de RENAVAM aleatório.
   * @returns {string} RENAVAM gerado.
   * @example
   * console.log(renavam());
   */
  export const renavam: () => string;

  /**
   * Gera um número de RG aleatório.
   * @param {boolean} [mask=false] - Se `true`, retorna com máscara.
   * @returns {string} RG gerado.
   * @example
   * // RG com máscara
   * console.log(rg(true)); // "12.345.678-9"
   *
   * // RG sem máscara
   * console.log(rg(false)); // "123456789"
   */
  export const rg: (mask?: boolean) => string;

  /**
   * Gera uma sentença aleatória.
   *
   * @param {number} [qttWords] - Quantidade de palavras na sentença. Se não for informado, será um número aleatório entre 10 e 20.
   * @returns {string} Uma sentença aleatória.
   * @example
   * // Gera uma sentença aleatória com quantidade de palavras aleatórias
   * console.log(sentenca()); // Ex: "Ea placeat, labore quidem, harum expedita fuga."
   *
   * // Gera uma sentença aleatória com a quantidade de palavras informada.
   * console.log(sentenca(10)); // Ex: "Dolorem sit modi deleniti nemo sint laborum vitae repellendus ipsa."
   */
  export const sentenca: (qttWords?: number) => string;

  /**
   * Gera um número de telefone aleatório.
   *
   * O número de telefone gerado pode ser formatado com máscara - (XX) XXXX-XXXX - ou apenas com os dígitos.
   *
   * @param {boolean} [mask=false] - Se true, o telefone será retornado com a máscara - (XX) XXXX-XXXX. Se false, o telefone será retornado apenas com os dígitos.
   * @param {string} [state] - A sigla do estado para filtrar os DDDs. Se não fornecido, um DDD de qualquer estado será gerado.
   * @returns {string} O número de telefone gerado.
   * @example
   * // Telefone sem máscara, de estado aleatório
   * console.log(telefone()); // "1199999999"
   *
   * // Celular com máscara, de estado aleatório
   * console.log(telefone(true)); // "(11) 9999-9999"
   *
   * // Celular sem máscara, do estado informado
   * console.log(telefone(false, "SC")); // "4899999999"
   *
   * // Celular com máscara, do estado informado
   * console.log(telefone(true, "ES")); // "(27) 9999-9999"
   */
  export const telefone: (mask?: boolean, state?: string) => string;

  /**
   * Gera um tipo sanguíneo aleatório.
   * @returns {string} Tipo sanguíneo.
   * @example
   * console.log(tipoSanguineo());
   */
  export const tipoSanguineo: () => string;

  /**
   * Gera um Título de Eleitor aleatório.
   * @param {boolean} [mask=false] - Se `true`, o Título de Eleitor será retornado com a máscara de formatação (xxxx xxxx xxxx xxxx). Se `false`, será  retornado apenas com os dígitos.
   * @param {string} [state] - A sigla do estado para determinar a origem do Título de Eleitor. Se não fornecido, será escolhido um estado aleatório.
   * @returns {string} O Título de Eleitor gerado.
   * @example
   * // Título de Eleitor sem máscara e do estado aleatório
   * console.log(tituloEleitor()); // "123456789012"
   *
   * // Título de Eleitor com máscara e do estado aleatório
   * console.log(tituloEleitor(true)); // "1234 5678 9012"
   *
    * // Título de Eleitor sem máscara e do estado informado
   * console.log(tituloEleitor(false, 'ES')); // "123456789012"
   *
   * // Título de Eleitor com máscara e do estado informado
   * console.log(tituloEleitor(true, 'PE')); // "1234 5678 9012"
   */
  export const tituloEleitor: (mask?: boolean, state?: string) => string;

}