/*
  No Brasil, cada tipo de certidão (nascimento, casamento, óbito) tem um padrão específico de numeração,
  chamado Número de Registro Civil ou simplesmente Matrícula.
  Esse número identifica o registro em cartórios e segue o padrão de 32 dígitos, com a seguinte máscara:

  Máscara do Número de Matrícula (Registro Civil):
  999999 99 99 9999 9 99999 999 9999999

  Explicando cada parte:
  999999: Código nacional da serventia (ou do cartório).
  99: Código da unidade da Federação (estado).
  99: Ano de registro.
  9999: Tipo de livro de registro (separado por tipos: nascimento, casamento, óbito).
  9: Tipo de folha (folha dupla ou simples).
  99999: Número do termo de registro.
  999: Número da folha.
  9999999: Número do livro.
*/

/*
  Esses códigos representam os estados brasileiros conforme a tabela de unidades da federação no Registro Civil.
const validUFs = {
    "12": "Acre",
    "27": "Alagoas",
    "13": "Amazonas",
    "16": "Amapá",
    "29": "Bahia",
    "23": "Ceará",
    "53": "Distrito Federal",
    "32": "Espírito Santo",
    "52": "Goiás",
    "21": "Maranhão",
    "31": "Minas Gerais",
    "50": "Mato Grosso do Sul",
    "51": "Mato Grosso",
    "15": "Pará",
    "25": "Paraíba",
    "26": "Pernambuco",
    "22": "Piauí",
    "41": "Paraná",
    "33": "Rio de Janeiro",
    "24": "Rio Grande do Norte",
    "43": "Rio Grande do Sul",
    "11": "Rondônia",
    "14": "Roraima",
    "42": "Santa Catarina",
    "28": "Sergipe",
    "35": "São Paulo",
    "17": "Tocantins"
};
*/


/**
 * Gera um número de certidão no formato do Registro Civil Brasileiro.
 * Esse número segue uma máscara de 32 dígitos no formato:
 * 999999 99 99 9999 9 99999 999 9999999
 *
 * @param {string|null} type - Tipo de certidão, podendo ser 'nascimento', 'casamento' ou 'obito'.
 * @param {boolean} mask - Define se o número retornado será formatado com a máscara. Padrão é `true`.
 *
 * @returns {Object} - Retorna um objeto com o número da certidão e seus detalhes.
 *
 * Estrutura do objeto de retorno:
 * - certidao (string): Número da certidão no formato especificado.
 * - detalhes (Object): Informações detalhadas da certidão.
 *     - tipoCertidao (string): Tipo de certidão (ex.: Nascimento, Casamento, Óbito).
 *     - cartorio (string): Código da serventia/cartório.
 *     - estado (string): Código da unidade da federação.
 *     - anoRegistro (string): Ano do registro.
 *     - tipoLivro (string): Código do tipo de livro de registro.
 *     - tipoFolha (string): Tipo de folha (1 ou 2).
 *     - termo (string): Número do termo de registro.
 *     - folha (string): Número da folha do registro.
 *     - livro (string): Número do livro de registro.
 */
function generateCertificate(type = null, mask = true) {
  const validUFs = ["12", "27", "13", "16", "29", "23", "53", "32", "52", "21", "31", "50", "51", "15", "25", "26", "22", "41", "33", "24", "43", "11", "14", "42", "28", "35", "17"];
  const ufCode = validUFs[Math.floor(Math.random() * validUFs.length)];
  const currentYear = new Date().getFullYear();
  const year = currentYear - Math.floor(Math.random() * 101);

  const tipos = ['nascimento', 'casamento', 'obito'];
  if (!type) type = tipos[Math.floor(Math.random() * tipos.length)];

  type = type.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  let bookTypeCode, certidaoTipo;
  switch (type) {
    case 'nascimento':
      bookTypeCode = '1001';
      certidaoTipo = 'Nascimento';
      break;
    case 'casamento':
      bookTypeCode = '2001';
      certidaoTipo = 'Casamento';
      break;
    case 'obito':
      bookTypeCode = '3001';
      certidaoTipo = 'Óbito';
      break;
    default:
      throw new Error(`Tipo inválido. Use ${tipos}`);
  }

  const registryCode = String(Math.floor(Math.random() * 1_000_000)).padStart(6, '0');
  const sheetType = String(Math.floor(Math.random() * 2) + 1);
  const recordNumber = String(Math.floor(Math.random() * 100_000)).padStart(5, '0');
  const pageNumber = String(Math.floor(Math.random() * 1_000)).padStart(3, '0');
  const bookNumber = String(Math.floor(Math.random() * 10_000_000)).padStart(7, '0');

  let number = `${registryCode}${ufCode}${year}${bookTypeCode}${sheetType}${recordNumber}${pageNumber}${bookNumber}`;
  if (mask) number = number.replace(/(\d{6})(\d{2})(\d{4})(\d{4})(\d{1})(\d{5})(\d{3})(\d{7})/, '$1 $2 $3 $4 $5 $6 $7 $8');

  return {
    certidao: number,
    detalhes: {
      tipoCertidao: certidaoTipo,
      cartorio: registryCode,
      estado: ufCode,
      anoRegistro: year.toString(),
      tipoLivro: bookTypeCode,
      tipoFolha: sheetType,
      termo: recordNumber,
      folha: pageNumber,
      livro: bookNumber
    }
  };
}

/**
 * Objeto `certidao` que fornece métodos para gerar números de certidões e objetos detalhados de certidões
 * de tipos variados (nascimento, casamento, óbito), com a opção de adicionar máscara de formatação.
 */
export const certidao = {
  /**
   * Gera um número de certidão aleatória.
   *
   * @param {boolean} [mask=true] - Define se o número será formatado com máscara.
   * @returns {string} Número da certidão aleatória, com ou sem máscara.
   * @example
   * console.log(certidao.aleatoria());         // "123456 12 2022 1001 1 12345 123 1234567"
   * console.log(certidao.aleatoria(false));    // "12345612202210011123451231234567"
   */
  aleatoria(mask = true) {
    return generateCertificate(null, mask).certidao;
  },

  /**
   * Gera um número de certidão de nascimento.
   *
   * @param {boolean} [mask=true] - Define se o número será formatado com máscara.
   * @returns {string} Número da certidão de nascimento, com ou sem máscara.
   * @example
   * console.log(certidao.nascimento());         // "123456 12 2022 1001 1 12345 123 1234567"
   * console.log(certidao.nascimento(false));    // "12345612202210011123451231234567"
   */
  nascimento(mask = true) {
    return generateCertificate('nascimento', mask).certidao;
  },

  /**
   * Gera um número de certidão de casamento.
   *
   * @param {boolean} [mask=true] - Define se o número será formatado com máscara.
   * @returns {string} Número da certidão de casamento, com ou sem máscara.
   * @example
   * console.log(certidao.casamento());         // "123456 12 2022 2001 1 12345 123 1234567"
   * console.log(certidao.casamento(false));    // "12345612202220011123451231234567"
   */
  casamento(mask = true) {
    return generateCertificate('casamento', mask).certidao;
  },

  /**
   * Gera um número de certidão de óbito.
   *
   * @param {boolean} [mask=true] - Define se o número será formatado com máscara.
   * @returns {string} Número da certidão de óbito, com ou sem máscara.
   * @example
   * console.log(certidao.obito());             // "123456 12 2022 3001 1 12345 123 1234567"
   * console.log(certidao.obito(false));        // "12345612202230011123451231234567"
   */
  obito(mask = true) {
    return generateCertificate('obito', mask).certidao;
  },

  /**
   * Gera um objeto detalhado de uma certidão aleatória.
   *
   * @param {boolean} [mask=true] - Define se o número será formatado com máscara.
   * @returns {Object} Objeto detalhado com informações da certidão aleatória.
   * @example
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
   */
  aleatoriaObj(mask = true) {
    return generateCertificate(null, mask).detalhes;
  },

  /**
   * Gera um objeto detalhado de uma certidão de nascimento.
   *
   * @param {boolean} [mask=true] - Define se o número será formatado com máscara.
   * @returns {Object} Objeto detalhado com informações da certidão de nascimento.
   * @example
   * console.log(certidao.nascimentoObj());
   * // { tipoCertidao: "Nascimento", cartorio: "123456", estado: "12", anoRegistro: "2022",  tipoLivro: '1001', ... }
   */
  nascimentoObj(mask = true) {
    return generateCertificate('nascimento', mask).detalhes;
  },

  /**
   * Gera um objeto detalhado de uma certidão de casamento.
   *
   * @param {boolean} [mask=true] - Define se o número será formatado com máscara.
   * @returns {Object} Objeto detalhado com informações da certidão de casamento.
   * @example
   * console.log(certidao.casamentoObj());
   * // { tipoCertidao: "Casamento", cartorio: "123456", estado: "12", anoRegistro: "2022", tipoLivro: '2001', ... }
   */
  casamentoObj(mask = true) {
    return generateCertificate('casamento', mask).detalhes;
  },

  /**
   * Gera um objeto detalhado de uma certidão de óbito.
   *
   * @param {boolean} [mask=true] - Define se o número será formatado com máscara.
   * @returns {Object} Objeto detalhado com informações da certidão de óbito.
   * @example
   * console.log(certidao.obitoObj());
   * // { tipoCertidao: "Óbito", cartorio: "123456", estado: "12", anoRegistro: "2022", tipoLivro: '3001', ... }
   */
  obitoObj(mask = true) {
    return generateCertificate('obito', mask).detalhes;
  }
};