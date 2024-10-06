import crypto from 'crypto';
import { siglasEstados } from '../../data/db-general.js';

export const getRandom = (arr) => {
  const index = crypto.randomInt(0, arr.length); // Gera um índice seguro no intervalo do array
  return arr[index];
};

/**
 * Gera números aleatórios com comprimento específico.
 * @param {number} length - Comprimento dos números aleatórios.
 * @returns {string} Números gerados.
 */
function generateRandomNumbers(length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += crypto.randomInt(0, 10).toString();
  }
  return result;
}

/**
 * Gera os dois últimos dígitos do ano atual.
 *
 * @returns {string} Os dois últimos dígitos do ano atual como uma string.
 * @example
 * // Se o ano atual for 2023, a função retornará "23".
 * const currentYearTwoDigits = generateCurrentYearTwoDigits();
 * console.log(currentYearTwoDigits()); // Saída: "23"
 */
function generateCurrentYearTwoDigits() {
  return new Date().getFullYear().toString().slice(-2);
}

/**
 * Calcula o dígito verificador para a inscrição estadual do Acre (AC).
 * @param {string} numbers - A sequência de números da inscrição estadual sem o dígito verificador.
 * @returns {number} O dígito verificador calculado.
 */
function calculateCheckDigitAC(numbers) {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o dígito verificador para a inscrição estadual de Alagoas (AL).
 * @param {string} numbers - A sequência de números da inscrição estadual sem o dígito verificador.
 * @returns {number} O dígito verificador calculado.
 */
function calculateCheckDigitAL(numbers) {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o dígito verificador para a inscrição estadual do Amazonas (AM).
 * @param {string} numbers - A sequência de números da inscrição estadual sem o dígito verificador.
 * @returns {number} O dígito verificador calculado.
 */
function calculateCheckDigitAM(numbers) {
  const sum = numbers.split('').reduce((acc, digit, index) => acc + parseInt(digit, 10) * (numbers.length - index), 0);
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o dígito verificador para a inscrição estadual do Amapá (AP).
 * @param {string} numbers - A sequência de números da inscrição estadual sem o dígito verificador.
 * @returns {number} O dígito verificador calculado.
 */
function calculateCheckDigitAP(numbers) {
  const baseCode = parseInt(numbers.slice(0, 2), 10); // Os dois primeiros dígitos do número base.
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  let remainder = sum % 11;

  if (baseCode >= 30 && baseCode <= 31) {
    if (remainder === 0) return 1;
    return remainder < 2 ? 0 : 11 - remainder;
  } else if (baseCode >= 32 && baseCode <= 33) {
    if (remainder === 0) return 0;
    return remainder < 2 ? 0 : 11 - remainder;
  } else {
    return remainder < 2 ? 0 : 11 - remainder;
  }
}

/**
 * Calcula o primeiro dígito verificador para a inscrição estadual da Bahia (BA).
 * @param {string} numbers - A sequência de números da inscrição estadual sem os dígitos verificadores.
 * @returns {number} O primeiro dígito verificador calculado.
 */
function calculateCheckDigitBA1(numbers) {
  const weights = [7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }
  const remainder = sum % 10;
  return remainder === 0 ? 0 : 10 - remainder;
}

/**
 * Calcula o segundo dígito verificador para a inscrição estadual da Bahia (BA).
 * @param {string} numbers - A sequência de números da inscrição estadual sem o segundo dígito verificador.
 * @returns {number} O segundo dígito verificador calculado.
 */
function calculateCheckDigitBA2(numbers) {
  const weights = [8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }
  const remainder = sum % 10;
  return remainder === 0 ? 0 : 10 - remainder;
}

/**
 * Calcula o dígito verificador para a inscrição estadual do Ceará (CE).
 * @param {string} numbers - A sequência de números da inscrição estadual sem o dígito verificador.
 * @returns {number} O dígito verificador calculado.
 */
function calculateCheckDigitCE(numbers) {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula os dígitos verificadores para a inscrição estadual do Distrito Federal (DF).
 * @param {string} input - Sequência de 11 dígitos da inscrição estadual (base + ano + número) sem os dígitos verificadores.
 * @returns {string} Os dois dígitos verificadores calculados.
 */
function calculateCheckDigitDF(input) {
  if (input.length !== 9) {
    throw new Error('A entrada deve ter 9 dígitos (base + ano + número).');
  }

  const weights1 = [4, 3, 2, 9, 8, 7, 6, 5, 4]; // Corrigido: 9 dígitos
  const weights2 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4]; // Corrigido: 10 dígitos

  // Calcula o primeiro dígito verificador
  let sum1 = 0;
  for (let i = 0; i < weights1.length; i++) {
    sum1 += parseInt(input[i], 10) * weights1[i];
  }
  let remainder1 = sum1 % 11;
  const digit1 = remainder1 < 2 ? 0 : 11 - remainder1;

  // Inclui o primeiro dígito no cálculo do segundo
  const fullInput = input + digit1;

  // Calcula o segundo dígito verificador
  let sum2 = 0;
  for (let i = 0; i < weights2.length; i++) {
    sum2 += parseInt(fullInput[i], 10) * weights2[i];
  }
  let remainder2 = sum2 % 11;
  const digit2 = remainder2 < 2 ? 0 : 11 - remainder2;

  return `${digit1}${digit2}`;
}

/**
 * Calcula o dígito verificador para a inscrição estadual do Espírito Santo (ES).
 * @param {string} numbers - Sequência de 8 dígitos da inscrição estadual (sem o dígito verificador).
 * @returns {number} O dígito verificador calculado.
 */
function calculateCheckDigitES(numbers) {
  if (numbers.length !== 8) {
    throw new Error('A entrada deve ter 8 dígitos.');
  }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o dígito verificador para a inscrição estadual de Goiás (GO).
 * @param {string} numbers - Sequência de 8 dígitos da inscrição estadual (sem o dígito verificador).
 * @returns {number} O dígito verificador calculado.
 */
function calculateCheckDigitGO(numbers) {
  if (numbers.length !== 8) {
    throw new Error('A entrada deve ter 8 dígitos.');
  }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  let remainder = sum % 11;
  if (remainder === 0) {
    return 0;
  } else if (remainder === 1) {
    return numbers.startsWith('11094402') ? 1 : 0;
  }
  return 11 - remainder;
}

/**
 * Calcula o dígito verificador para a inscrição estadual do Maranhão (MA).
 * @param {string} input - Sequência de 8 dígitos (base + números) da inscrição estadual, sem o dígito verificador.
 * @returns {number} O dígito verificador calculado.
 */
function calculateCheckDigitMA(input) {
  if (input.length !== 8) {
    throw new Error('A entrada deve ter 8 dígitos.');
  }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(input[i], 10) * weights[i];
  }

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o dígito verificador para a inscrição estadual de Mato Grosso (MT).
 * @param {string} numbers - Sequência de 10 dígitos da inscrição estadual (sem o dígito verificador).
 * @returns {number} O dígito verificador calculado.
 */
function calculateCheckDigitMT(numbers) {
  if (numbers.length !== 10) {
    throw new Error('A entrada deve ter 10 dígitos.');
  }

  const weights = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o dígito verificador para a inscrição estadual de Mato Grosso do Sul (MS).
 * @param {string} input - Sequência de 8 dígitos (base + números) da inscrição estadual, sem o dígito verificador.
 * @returns {number} O dígito verificador calculado.
 */
function calculateCheckDigitMS(input) {
  if (input.length !== 8) {
    throw new Error('A entrada deve ter 8 dígitos.');
  }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(input[i], 10) * weights[i];
  }

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o primeiro dígito verificador (digit1) para a inscrição estadual de Minas Gerais (MG).
 * @param {string} numbers - Sequência de 11 dígitos iniciais da inscrição estadual (sem os dígitos verificadores).
 * @returns {number} O primeiro dígito verificador calculado.
 */
function calculateCheckDigitMG1(numbers) {
  if (numbers.length !== 11) {
    throw new Error('A entrada deve ter 11 dígitos.');
  }

  // Pesos específicos para MG
  const weights = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    let product = parseInt(numbers[i], 10) * weights[i];
    sum += product >= 10 ? Math.floor(product / 10) + (product % 10) : product;
  }

  const remainder = sum % 10;
  return remainder === 0 ? 0 : 10 - remainder;
}

/**
 * Calcula o segundo dígito verificador (digit2) para a inscrição estadual de Minas Gerais (MG).
 * @param {string} input - Sequência de 12 dígitos (11 dígitos iniciais mais o primeiro dígito verificador).
 * @returns {number} O segundo dígito verificador calculado.
 */
function calculateCheckDigitMG2(input) {
  if (input.length !== 12) {
    throw new Error('A entrada deve ter 12 dígitos (11 dígitos iniciais + digit1).');
  }

  // Pesos específicos para o cálculo do segundo dígito em MG
  const weights = [3, 2, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(input[i], 10) * weights[i];
  }

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o dígito verificador para a inscrição estadual do Pará (PA).
 * @param {string} input - Sequência de 8 dígitos (base + numbers) da inscrição estadual.
 * @returns {number} O dígito verificador calculado.
 */
function calculateCheckDigitPA(input) {
  if (input.length !== 8) {
    throw new Error('A entrada deve ter 8 dígitos.');
  }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(input[i], 10) * weights[i];
  }

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o dígito verificador para a inscrição estadual da Paraíba (PB).
 * @param {string} numbers - Sequência de 8 dígitos da inscrição estadual.
 * @returns {number} O dígito verificador calculado.
 */
function calculateCheckDigitPB(numbers) {
  if (numbers.length !== 8) {
    throw new Error('A entrada deve ter 8 dígitos.');
  }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o dígito verificador para a inscrição estadual de Pernambuco (PE).
 * @param {string} numbers - Sequência de 8 dígitos da inscrição estadual.
 * @returns {number} O dígito verificador calculado.
 */
function calculateCheckDigitPE(numbers) {
  if (numbers.length !== 8) {
    throw new Error('A entrada deve ter 8 dígitos.');
  }

  const weights = [8, 7, 6, 5, 4, 3, 2, 1];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o dígito verificador para a inscrição estadual do Piauí (PI).
 * @param {string} numbers - Sequência de 8 dígitos da inscrição estadual.
 * @returns {number} O dígito verificador calculado.
 */
function calculateCheckDigitPI(numbers) {
  if (numbers.length !== 8) {
    throw new Error('A entrada deve ter 8 dígitos.');
  }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o primeiro dígito verificador para a inscrição estadual do Paraná (PR).
 * @param {string} numbers - Sequência de 10 dígitos da inscrição estadual (sem os dígitos verificadores).
 * @returns {number} O primeiro dígito verificador calculado.
 */
function calculateCheckDigitPR1(numbers) {
  const weights = [5, 4, 3, 2, 7, 6, 5, 4/* , 3, 2 */];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o segundo dígito verificador para a inscrição estadual do Paraná (PR).
 * @param {string} numbers - Sequência de 11 dígitos da inscrição estadual (incluindo o primeiro dígito verificador).
 * @returns {number} O segundo dígito verificador calculado.
 */
function calculateCheckDigitPR2(numbers) {
  const weights = [6, 5, 4, 3, 2, 7, 6, 5, 4/* , 3, 2 */];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o primeiro dígito verificador (digit1) para a inscrição estadual do Rio de Janeiro (RJ).
 * @param {string} numbers - Sequência de 8 dígitos.
 * @returns {number} O primeiro dígito verificador calculado.
 */
function calculateCheckDigitRJ1(numbers) {
  if (numbers.length !== 8) {
    throw new Error('A entrada deve ter 8 dígitos.');
  }

  const weights = [2, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o segundo dígito verificador (digit2) para a inscrição estadual do Rio de Janeiro (RJ).
 * @param {string} input - Sequência de 9 dígitos (8 dígitos + digit1).
 * @returns {number} O segundo dígito verificador calculado.
 */
function calculateCheckDigitRJ2(input) {
  if (input.length !== 9) {
    throw new Error('A entrada deve ter 9 dígitos.');
  }

  const weights = [2, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(input[i], 10) * weights[i];
  }

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o dígito verificador para a inscrição estadual do Rio Grande do Norte (RN).
 * @param {string} numbers - Sequência de 8 dígitos.
 * @returns {number} O dígito verificador calculado.
 */
function calculateCheckDigitRN(numbers) {
  if (numbers.length !== 8) {
    throw new Error('A entrada deve ter 8 dígitos.');
  }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o dígito verificador para a inscrição estadual do Rio Grande do Sul (RS).
 * @param {string} numbers - Sequência de 8 dígitos.
 * @returns {number} O dígito verificador calculado.
 */
function calculateCheckDigitRS(numbers) {
  if (numbers.length !== 8) {
    throw new Error('A entrada deve ter 8 dígitos.');
  }

  const weights = [2, 9, 8, 7, 6, 5, 4, 3/* , 2 */];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o dígito verificador para a inscrição estadual de Rondônia (RO).
 * @param {string} input - Sequência de 8 dígitos (base + números) da inscrição estadual.
 * @returns {number} O dígito verificador calculado.
 */
function calculateCheckDigitRO(input) {
  /* similar ao formato do PA */
  if (input.length !== 8) {
    throw new Error('A entrada deve ter 8 dígitos.');
  }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(input[i], 10) * weights[i];
  }

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o dígito verificador para a inscrição estadual de Santa Catarina (SC).
 * @param {string} numbers - Sequência de 8 dígitos da inscrição estadual.
 * @returns {number} O dígito verificador calculado.
 */
function calculateCheckDigitSC(numbers) {
  /* similar ao formato do PB */
  if (numbers.length !== 8) {
    throw new Error('A entrada deve ter 8 dígitos.');
  }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o primeiro dígito verificador para a inscrição estadual de São Paulo (SP).
 * @param {string} numbers - Sequência de 11 dígitos da inscrição estadual (sem os dígitos verificadores).
 * @returns {number} O primeiro dígito verificador calculado.
 */
function calculateCheckDigitSP1(numbers) {
  const weights = [1, 3, 4, 5, 6, 7, 8, 10];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o segundo dígito verificador para a inscrição estadual de São Paulo (SP).
 * @param {string} numbers - Sequência de 12 dígitos da inscrição estadual (incluindo o primeiro dígito verificador).
 * @returns {number} O segundo dígito verificador calculado.
 */
function calculateCheckDigitSP2(numbers) {
  const weights = [3, 2, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Calcula o dígito verificador para a inscrição estadual do Tocantins (TO).
 * @param {string} numbers - Sequência de 8 dígitos da inscrição estadual.
 * @returns {number} O dígito verificador calculado.
 */
function calculateCheckDigitTO(numbers) {
  /* similar ao formato do PI */
  if (numbers.length !== 8) {
    throw new Error('A entrada deve ter 8 dígitos.');
  }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Gera Inscrição Estadual aleatório e do estado informado.
 *
 * @param {string} state A sigla do estado para o qual gerar a inscrição estadual (por exemplo, 'SP', 'RJ', 'MG').
 * @returns {string|null} O número de inscrição estadual gerado ou null se o estado não for encontrado.
 * @example
 * console.log('Sem informar o estado', inscricaoEstadual());
 * console.log('AC', inscricaoEstadual('AC')); // AC 01.335116638
 * console.log('AL', inscricaoEstadual('AL')); // AL 477703437
 * console.log('AP', inscricaoEstadual('AP')); // AP 03.42773842
 * console.log('AM', inscricaoEstadual('AM')); // AM 1107521283
 * console.log('BA', inscricaoEstadual('BA')); // BA 16408652-16
 * console.log('CE', inscricaoEstadual('CE')); // CE 6624523654
 * console.log('DF', inscricaoEstadual('DF')); // DF 0724.4814180
 * console.log('ES', inscricaoEstadual('ES')); // ES 754167445
 * console.log('GO', inscricaoEstadual('GO')); // GO 670680320
 * console.log('MA', inscricaoEstadual('MA')); // MA 122542860
 * console.log('MT', inscricaoEstadual('MT')); // MT 44183991682
 * console.log('MS', inscricaoEstadual('MS')); // MS 284825620
 * console.log('MG', inscricaoEstadual('MG')); // MG 1772090571220
 * console.log('PA', inscricaoEstadual('PA')); // PA 157594408
 * console.log('PB', inscricaoEstadual('PB')); // PB 899410081
 * console.log('PR', inscricaoEstadual('PR')); // PR 79686556-52
 * console.log('PE', inscricaoEstadual('PE')); // PE 341771429
 * console.log('PI', inscricaoEstadual('PI')); // PI 758080174
 * console.log('RJ', inscricaoEstadual('RJ')); // RJ 41038311.44
 * console.log('RN', inscricaoEstadual('RN')); // RN 49799347-3
 * console.log('RS', inscricaoEstadual('RS')); // RS 506246789
 * console.log('RO', inscricaoEstadual('RO')); // RO 51694723-0
 * console.log('RR', inscricaoEstadual('RR')); // RR 24022984
 * console.log('SC', inscricaoEstadual('SC')); // SC 037515098
 * console.log('SP', inscricaoEstadual('SP')); // SP 4081896624448
 * console.log('SE', inscricaoEstadual('SE')); // SE 555790451
 * console.log('TO', inscricaoEstadual('TO')); // TO 55582433-0
 */
export function inscricaoEstadual(state) {
  let stateCode = state || getRandom(siglasEstados);
  const states = {
    AC: () => {
      const base = '01';
      const numbers = generateRandomNumbers(8);
      const digit = calculateCheckDigitAC(base + numbers);
      return `${base}.${numbers}${digit}`;
    },
    AL: () => {
      const numbers = generateRandomNumbers(8);
      const digit = calculateCheckDigitAL(numbers);
      return `${numbers}${digit}`;
    },
    AP: () => {
      const base = '03';
      const numbers = generateRandomNumbers(7);
      const digit = calculateCheckDigitAP(base + numbers);
      return `${base}.${numbers}${digit}`;
    },
    AM: () => {
      const numbers = generateRandomNumbers(9);
      const digit = calculateCheckDigitAM(numbers);
      return `${numbers}${digit}`;
    },
    BA: () => {
      const base = new Date().getFullYear() > 2022 ? '1' : '0';
      const numbers = generateRandomNumbers(7);
      const digit1 = calculateCheckDigitBA1(base + numbers);
      const digit2 = calculateCheckDigitBA2(base + numbers + digit1);
      return `${base}${numbers}-${digit1}${digit2}`;
    },
    CE: () => {
      const numbers = generateRandomNumbers(9);
      const digit = calculateCheckDigitCE(numbers);
      return `${numbers}${digit}`;
    },
    DF: () => {
      const base = '07';
      const year = generateCurrentYearTwoDigits();
      const numbers = generateRandomNumbers(5);
      const digit = calculateCheckDigitDF(base + year + numbers);
      return `${base}${year}.${numbers}${digit}`;
    },
    ES: () => {
      const numbers = generateRandomNumbers(8);
      const digit = calculateCheckDigitES(numbers);
      return `${numbers}${digit}`;
    },
    GO: () => {
      const numbers = generateRandomNumbers(8);
      const digit = calculateCheckDigitGO(numbers);
      return `${numbers}${digit}`;
    },
    MA: () => {
      const base = '12';
      const numbers = generateRandomNumbers(6);
      const digit = calculateCheckDigitMA(base + numbers);
      return `${base}${numbers}${digit}`;
    },
    MT: () => {
      const numbers = generateRandomNumbers(10);
      const digit = calculateCheckDigitMT(numbers);
      return `${numbers}${digit}`;
    },
    MS: () => {
      const base = '28';
      const numbers = generateRandomNumbers(6);
      const digit = calculateCheckDigitMS(base + numbers);
      return `${base}${numbers}${digit}`;
    },
    MG: () => {
      const numbers = generateRandomNumbers(11);
      const digit1 = calculateCheckDigitMG1(numbers);
      const digit2 = calculateCheckDigitMG2(numbers + digit1);
      return `${numbers}${digit1}${digit2}`;
    },
    PA: () => {
      const base = '15';
      const numbers = generateRandomNumbers(6);
      const digit = calculateCheckDigitPA(base + numbers);
      return `${base}${numbers}${digit}`;
    },
    PB: () => {
      const numbers = generateRandomNumbers(8);
      const digit = calculateCheckDigitPB(numbers);
      return `${numbers}${digit}`;
    },
    PR: () => {
      const numbers = generateRandomNumbers(8);
      const digit1 = calculateCheckDigitPR1(numbers);
      const digit2 = calculateCheckDigitPR2(numbers + digit1);
      return `${numbers}-${digit1}${digit2}`;
    },
    PE: () => {
      const numbers = generateRandomNumbers(8);
      const digit = calculateCheckDigitPE(numbers);
      return `${numbers}${digit}`;
    },
    PI: () => {
      const numbers = generateRandomNumbers(8);
      const digit = calculateCheckDigitPI(numbers);
      return `${numbers}${digit}`;
    },
    RJ: () => {
      const numbers = generateRandomNumbers(8);
      const digit1 = calculateCheckDigitRJ1(numbers);
      const digit2 = calculateCheckDigitRJ2(numbers + digit1);
      return `${numbers}.${digit1}${digit2}`;
    },
    RN: () => {
      const numbers = generateRandomNumbers(8);
      const digit = calculateCheckDigitRN(numbers);
      return `${numbers}-${digit}`;
    },
    RS: () => {
      const numbers = generateRandomNumbers(8);
      const digit = calculateCheckDigitRS(numbers);
      return `${numbers}${digit}`;
    },
    RO: () => {
      const numbers = generateRandomNumbers(8);
      const digit = calculateCheckDigitRO(numbers);
      return `${numbers}-${digit}`;
    },
    RR: () => {
      const base = '24';
      const numbers = generateRandomNumbers(6);
      return `${base}${numbers}`;
    },
    SC: () => {
      const numbers = generateRandomNumbers(8);
      const digit = calculateCheckDigitSC(numbers);
      return `${numbers}${digit}`;
    },
    SP: () => {
      const numbers = generateRandomNumbers(11);
      const digit1 = calculateCheckDigitSP1(numbers);
      const digit2 = calculateCheckDigitSP2(numbers + digit1);
      return `${numbers}${digit1}${digit2}`;
    },
    SE: () => {
      const numbers = generateRandomNumbers(9);
      return `${numbers}`;
    },
    TO: () => {
      const numbers = generateRandomNumbers(8);
      const digit = calculateCheckDigitTO(numbers);
      return `${numbers}-${digit}`;
    },
  };

  const generator = states[stateCode];
  if (!generator) {
    throw new Error(`Estado inválido: ${stateCode}`);
  }

  return generator();
}
