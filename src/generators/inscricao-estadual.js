import { stateRand } from '../utils.js'

function remainder11(sum) {
  sum %= 11;  // Calcula o resto da divisão por 11
  return (sum < 2) ? 0 : 11 - sum;  // Retorna 0 ou o complemento para 11
}

function remainder10(sum) {
  sum %= 10;  // Calcula o resto da divisão por 10
  return (sum === 0) ? 0 : 10 - sum;  // Retorna 0 ou o complemento para 10
}

/**
 * Gera números aleatórios com comprimento específico.
 * @param {number} length - Comprimento dos números aleatórios.
 * @returns {string} Números gerados.
 */
function generateRandomNumbers(length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10).toString();
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
function ieDVAC(numbers) {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }
  return remainder11(sum)
}

/**
 * Calcula o dígito verificador para a inscrição estadual de Alagoas (AL).
 * @param {string} numbers - A sequência de números da inscrição estadual sem o dígito verificador.
 * @returns {number} O dígito verificador calculado.
 */
function ieDVAL(numbers) {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }
  return remainder11(sum)
}

/**
 * Calcula o dígito verificador para a inscrição estadual do Amazonas (AM).
 * @param {string} numbers - A sequência de números da inscrição estadual sem o dígito verificador.
 * @returns {number} O dígito verificador calculado.
 */
function ieDVAM(numbers) {
  const sum = numbers.split('').reduce((acc, digit, index) => acc + parseInt(digit, 10) * (numbers.length - index), 0);
  return remainder11(sum)
}

/**
 * Calcula o dígito verificador para a inscrição estadual do Amapá (AP).
 * @param {string} numbers - A sequência de números da inscrição estadual sem o dígito verificador.
 * @returns {number} O dígito verificador calculado.
 */
function ieDVAP(numbers) {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  return remainder11(sum)

  /*
  const baseCode = parseInt(numbers.slice(0, 2), 10); // Os dois primeiros dígitos do número base.
  let remainder = sum % 11;

  if ([30, 31].includes(baseCode)) {
    return remainder === 0 ? 1 : remainder < 2 ? 0 : 11 - remainder;
  } else if ([32, 33].includes(baseCode)) {
    return remainder === 0 ? 0 : remainder < 2 ? 0 : 11 - remainder;
  } else {
    return remainder < 2 ? 0 : 11 - remainder;
  } */
}

/**
 * Calcula o primeiro dígito verificador para a inscrição estadual da Bahia (BA).
 * @param {string} numbers - A sequência de números da inscrição estadual sem os dígitos verificadores.
 * @returns {number} O primeiro dígito verificador calculado.
 */
function ieDVBA1(numbers) {
  const weights = [7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }
  return remainder10(sum)
}

/**
 * Calcula o segundo dígito verificador para a inscrição estadual da Bahia (BA).
 * @param {string} numbers - A sequência de números da inscrição estadual sem o segundo dígito verificador.
 * @returns {number} O segundo dígito verificador calculado.
 */
function ieDVBA2(numbers) {
  const weights = [8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }
  return remainder10(sum)
}

/**
 * Calcula o dígito verificador para a inscrição estadual do Ceará (CE).
 * @param {string} numbers - A sequência de números da inscrição estadual sem o dígito verificador.
 * @returns {number} O dígito verificador calculado.
 */
function ieDVCE(numbers) {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  return remainder11(sum)
}

/**
 * Calcula os dígitos verificadores para a inscrição estadual do Distrito Federal (DF).
 * @param {string} input - Sequência de 11 dígitos da inscrição estadual (base + ano + número) sem os dígitos verificadores.
 * @returns {string} Os dois dígitos verificadores calculados.
 */
function ieDVDF(input) {
  // if (input.length !== 9) { throw new Error('A entrada deve ter 9 dígitos (base + ano + número).'); }

  const weights1 = [4, 3, 2, 9, 8, 7, 6, 5, 4]; // Corrigido: 9 dígitos
  const weights2 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4]; // Corrigido: 10 dígitos

  // Calcula o primeiro dígito verificador
  let sum1 = 0;
  for (let i = 0; i < weights1.length; i++) {
    sum1 += parseInt(input[i], 10) * weights1[i];
  }
  const digit1 = remainder11(sum1);

  // Inclui o primeiro dígito no cálculo do segundo
  const fullInput = input + digit1;

  // Calcula o segundo dígito verificador
  let sum2 = 0;
  for (let i = 0; i < weights2.length; i++) {
    sum2 += parseInt(fullInput[i], 10) * weights2[i];
  }

  const digit2 = remainder11(sum2)

  return `${digit1}${digit2}`;
}

/**
 * Calcula o dígito verificador para a inscrição estadual do Espírito Santo (ES).
 * @param {string} numbers - Sequência de 8 dígitos da inscrição estadual (sem o dígito verificador).
 * @returns {number} O dígito verificador calculado.
 */
function ieDVES(numbers) {
  // if (numbers.length !== 8) { throw new Error('A entrada deve ter 8 dígitos.'); }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  return remainder11(sum)
}

/**
 * Calcula o dígito verificador para a inscrição estadual de Goiás (GO).
 * @param {string} numbers - Sequência de 8 dígitos da inscrição estadual (sem o dígito verificador).
 * @returns {number} O dígito verificador calculado.
 */
function ieDVGO(numbers) {
  // if (numbers.length !== 8) { throw new Error('A entrada deve ter 8 dígitos.'); }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  let remainder = sum % 11;
  return (remainder === 0) ? 0 : (remainder === 1) ? (numbers.startsWith('11094402') ? 1 : 0) : 11 - remainder;

}

/**
 * Calcula o dígito verificador para a inscrição estadual do Maranhão (MA).
 * @param {string} input - Sequência de 8 dígitos (base + números) da inscrição estadual, sem o dígito verificador.
 * @returns {number} O dígito verificador calculado.
 */
function ieDVMA(input) {
  // if (input.length !== 8) { throw new Error('A entrada deve ter 8 dígitos.'); }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(input[i], 10) * weights[i];
  }

  return remainder11(sum)
}

/**
 * Calcula o dígito verificador para a inscrição estadual de Mato Grosso (MT).
 * @param {string} numbers - Sequência de 10 dígitos da inscrição estadual (sem o dígito verificador).
 * @returns {number} O dígito verificador calculado.
 */
function ieDVMT(numbers) {
  // if (numbers.length !== 10) { throw new Error('A entrada deve ter 10 dígitos.');  }

  const weights = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  return remainder11(sum)
}

/**
 * Calcula o dígito verificador para a inscrição estadual de Mato Grosso do Sul (MS).
 * @param {string} input - Sequência de 8 dígitos (base + números) da inscrição estadual, sem o dígito verificador.
 * @returns {number} O dígito verificador calculado.
 */
function ieDVMS(input) {
  // if (input.length !== 8) { throw new Error('A entrada deve ter 8 dígitos.'); }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(input[i], 10) * weights[i];
  }

  return remainder11(sum)
}

/**
 * Calcula o primeiro dígito verificador (digit1) para a inscrição estadual de Minas Gerais (MG).
 * @param {string} numbers - Sequência de 11 dígitos iniciais da inscrição estadual (sem os dígitos verificadores).
 * @returns {number} O primeiro dígito verificador calculado.
 */
function ieDVMG1(numbers) {
  // if (numbers.length !== 11) { throw new Error('A entrada deve ter 11 dígitos.'); }

  // Pesos específicos para MG
  const weights = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    let product = parseInt(numbers[i], 10) * weights[i];
    sum += product >= 10 ? Math.floor(product / 10) + (product % 10) : product;
  }

  return remainder10(sum)
}

/**
 * Calcula o segundo dígito verificador (digit2) para a inscrição estadual de Minas Gerais (MG).
 * @param {string} input - Sequência de 12 dígitos (11 dígitos iniciais mais o primeiro dígito verificador).
 * @returns {number} O segundo dígito verificador calculado.
 */
function ieDVMG2(input) {
  // if (input.length !== 12) { throw new Error('A entrada deve ter 12 dígitos (11 dígitos iniciais + digit1).'); }

  // Pesos específicos para o cálculo do segundo dígito em MG
  const weights = [3, 2, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(input[i], 10) * weights[i];
  }

  return remainder11(sum)
}

/**
 * Calcula o dígito verificador para a inscrição estadual do Pará (PA).
 * @param {string} input - Sequência de 8 dígitos (base + numbers) da inscrição estadual.
 * @returns {number} O dígito verificador calculado.
 */
function ieDVPA(input) {
  // if (input.length !== 8) { throw new Error('A entrada deve ter 8 dígitos.'); }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(input[i], 10) * weights[i];
  }

  return remainder11(sum)
}

/**
 * Calcula o dígito verificador para a inscrição estadual da Paraíba (PB).
 * @param {string} numbers - Sequência de 8 dígitos da inscrição estadual.
 * @returns {number} O dígito verificador calculado.
 */
function ieDVPB(numbers) {
  // if (numbers.length !== 8) { throw new Error('A entrada deve ter 8 dígitos.'); }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  return remainder11(sum)
}

/**
 * Calcula o dígito verificador para a inscrição estadual de Pernambuco (PE).
 * @param {string} numbers - Sequência de 8 dígitos da inscrição estadual.
 * @returns {number} O dígito verificador calculado.
 */
function ieDVPE(numbers) {
  // if (numbers.length !== 8) { throw new Error('A entrada deve ter 8 dígitos.'); }

  const weights = [8, 7, 6, 5, 4, 3, 2, 1];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  return remainder11(sum)
}

/**
 * Calcula o dígito verificador para a inscrição estadual do Piauí (PI).
 * @param {string} numbers - Sequência de 8 dígitos da inscrição estadual.
 * @returns {number} O dígito verificador calculado.
 */
function ieDVPI(numbers) {
  // if (numbers.length !== 8) { throw new Error('A entrada deve ter 8 dígitos.'); }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  return remainder11(sum)
}

/**
 * Calcula o primeiro dígito verificador para a inscrição estadual do Paraná (PR).
 * @param {string} numbers - Sequência de 10 dígitos da inscrição estadual (sem os dígitos verificadores).
 * @returns {number} O primeiro dígito verificador calculado.
 */
function ieDVPR1(numbers) {
  const weights = [5, 4, 3, 2, 7, 6, 5, 4/* , 3, 2 */];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }
  return remainder11(sum)
}

/**
 * Calcula o segundo dígito verificador para a inscrição estadual do Paraná (PR).
 * @param {string} numbers - Sequência de 11 dígitos da inscrição estadual (incluindo o primeiro dígito verificador).
 * @returns {number} O segundo dígito verificador calculado.
 */
function ieDVPR2(numbers) {
  const weights = [6, 5, 4, 3, 2, 7, 6, 5, 4/* , 3, 2 */];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }
  return remainder11(sum)
}

/**
 * Calcula o primeiro dígito verificador (digit1) para a inscrição estadual do Rio de Janeiro (RJ).
 * @param {string} numbers - Sequência de 8 dígitos.
 * @returns {number} O primeiro dígito verificador calculado.
 */
function ieDVRJ1(numbers) {
  // if (numbers.length !== 8) { throw new Error('A entrada deve ter 8 dígitos.'); }

  const weights = [2, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  return remainder11(sum)
}

/**
 * Calcula o segundo dígito verificador (digit2) para a inscrição estadual do Rio de Janeiro (RJ).
 * @param {string} input - Sequência de 9 dígitos (8 dígitos + digit1).
 * @returns {number} O segundo dígito verificador calculado.
 */
function ieDVRJ2(input) {
  // if (input.length !== 9) { throw new Error('A entrada deve ter 9 dígitos.'); }

  const weights = [2, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(input[i], 10) * weights[i];
  }

  return remainder11(sum)
}

/**
 * Calcula o dígito verificador para a inscrição estadual do Rio Grande do Norte (RN).
 * @param {string} numbers - Sequência de 8 dígitos.
 * @returns {number} O dígito verificador calculado.
 */
function ieDVRN(numbers) {
  // if (numbers.length !== 8) { throw new Error('A entrada deve ter 8 dígitos.'); }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  return remainder11(sum)
}

/**
 * Calcula o dígito verificador para a inscrição estadual do Rio Grande do Sul (RS).
 * @param {string} numbers - Sequência de 8 dígitos.
 * @returns {number} O dígito verificador calculado.
 */
function ieDVRS(numbers) {
  // if (numbers.length !== 8) { throw new Error('A entrada deve ter 8 dígitos.'); }

  const weights = [2, 9, 8, 7, 6, 5, 4, 3/* , 2 */];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  return remainder11(sum)
}

/**
 * Calcula o dígito verificador para a inscrição estadual de Rondônia (RO).
 * @param {string} input - Sequência de 8 dígitos (base + números) da inscrição estadual.
 * @returns {number} O dígito verificador calculado.
 */
function ieDVRO(input) {
  /* similar ao formato do PA */
  // if (input.length !== 8) { throw new Error('A entrada deve ter 8 dígitos.'); }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(input[i], 10) * weights[i];
  }

  return remainder11(sum)
}

/**
 * Calcula o dígito verificador para a inscrição estadual de Santa Catarina (SC).
 * @param {string} numbers - Sequência de 8 dígitos da inscrição estadual.
 * @returns {number} O dígito verificador calculado.
 */
function ieDVSC(numbers) {
  /* similar ao formato do PB */
  // if (numbers.length !== 8) { throw new Error('A entrada deve ter 8 dígitos.'); }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  return remainder11(sum)
}

/**
 * Calcula o primeiro dígito verificador para a inscrição estadual de São Paulo (SP).
 * @param {string} numbers - Sequência de 11 dígitos da inscrição estadual (sem os dígitos verificadores).
 * @returns {number} O primeiro dígito verificador calculado.
 */
function ieDVSP1(numbers) {
  const weights = [1, 3, 4, 5, 6, 7, 8, 10];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }
  return remainder11(sum)
}

/**
 * Calcula o segundo dígito verificador para a inscrição estadual de São Paulo (SP).
 * @param {string} numbers - Sequência de 12 dígitos da inscrição estadual (incluindo o primeiro dígito verificador).
 * @returns {number} O segundo dígito verificador calculado.
 */
function ieDVSP2(numbers) {
  const weights = [3, 2, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }
  return remainder11(sum)
}

/**
 * Calcula o dígito verificador para a inscrição estadual do Tocantins (TO).
 * @param {string} numbers - Sequência de 8 dígitos da inscrição estadual.
 * @returns {number} O dígito verificador calculado.
 */
function ieDVTO(numbers) {
  /* similar ao formato do PI */
  // if (numbers.length !== 8) { throw new Error('A entrada deve ter 8 dígitos.'); }

  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i], 10) * weights[i];
  }

  return remainder11(sum)
}

/**
 * Gera Inscrição Estadual aleatório e do estado informado.
 *
 * @param {string} state A sigla do estado para o qual gerar a inscrição estadual (por exemplo, 'SP', 'RJ', 'MG').
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
export function inscricaoEstadual(state) {
  let stateCode = state || stateRand;
  const states = {
    AC: () => {
      const base = '01';
      const numbers = generateRandomNumbers(8);
      const digit = ieDVAC(base + numbers);
      return `${base}.${numbers}${digit}`;
    },
    AL: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDVAL(numbers);
      return `${numbers}${digit}`;
    },
    AP: () => {
      const base = '03';
      const numbers = generateRandomNumbers(7);
      const digit = ieDVAP(base + numbers);
      return `${base}.${numbers}${digit}`;
    },
    AM: () => {
      const numbers = generateRandomNumbers(9);
      const digit = ieDVAM(numbers);
      return `${numbers}${digit}`;
    },
    BA: () => {
      const base = new Date().getFullYear() > 2022 ? '1' : '0';
      const numbers = generateRandomNumbers(7);
      const digit1 = ieDVBA1(base + numbers);
      const digit2 = ieDVBA2(base + numbers + digit1);
      return `${base}${numbers}-${digit1}${digit2}`;
    },
    CE: () => {
      const numbers = generateRandomNumbers(9);
      const digit = ieDVCE(numbers);
      return `${numbers}${digit}`;
    },
    DF: () => {
      const base = '07';
      const year = generateCurrentYearTwoDigits();
      const numbers = generateRandomNumbers(5);
      const digit = ieDVDF(base + year + numbers);
      return `${base}${year}.${numbers}${digit}`;
    },
    ES: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDVES(numbers);
      return `${numbers}${digit}`;
    },
    GO: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDVGO(numbers);
      return `${numbers}${digit}`;
    },
    MA: () => {
      const base = '12';
      const numbers = generateRandomNumbers(6);
      const digit = ieDVMA(base + numbers);
      return `${base}${numbers}${digit}`;
    },
    MT: () => {
      const numbers = generateRandomNumbers(10);
      const digit = ieDVMT(numbers);
      return `${numbers}${digit}`;
    },
    MS: () => {
      const base = '28';
      const numbers = generateRandomNumbers(6);
      const digit = ieDVMS(base + numbers);
      return `${base}${numbers}${digit}`;
    },
    MG: () => {
      const numbers = generateRandomNumbers(11);
      const digit1 = ieDVMG1(numbers);
      const digit2 = ieDVMG2(numbers + digit1);
      return `${numbers}${digit1}${digit2}`;
    },
    PA: () => {
      const base = '15';
      const numbers = generateRandomNumbers(6);
      const digit = ieDVPA(base + numbers);
      return `${base}${numbers}${digit}`;
    },
    PB: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDVPB(numbers);
      return `${numbers}${digit}`;
    },
    PR: () => {
      const numbers = generateRandomNumbers(8);
      const digit1 = ieDVPR1(numbers);
      const digit2 = ieDVPR2(numbers + digit1);
      return `${numbers}-${digit1}${digit2}`;
    },
    PE: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDVPE(numbers);
      return `${numbers}${digit}`;
    },
    PI: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDVPI(numbers);
      return `${numbers}${digit}`;
    },
    RJ: () => {
      const numbers = generateRandomNumbers(8);
      const digit1 = ieDVRJ1(numbers);
      const digit2 = ieDVRJ2(numbers + digit1);
      return `${numbers}.${digit1}${digit2}`;
    },
    RN: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDVRN(numbers);
      return `${numbers}-${digit}`;
    },
    RS: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDVRS(numbers);
      return `${numbers}${digit}`;
    },
    RO: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDVRO(numbers);
      return `${numbers}-${digit}`;
    },
    RR: () => {
      const base = '24';
      const numbers = generateRandomNumbers(6);
      return `${base}${numbers}`;
    },
    SC: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDVSC(numbers);
      return `${numbers}${digit}`;
    },
    SP: () => {
      const numbers = generateRandomNumbers(11);
      const digit1 = ieDVSP1(numbers);
      const digit2 = ieDVSP2(numbers + digit1);
      return `${numbers}${digit1}${digit2}`;
    },
    SE: () => {
      const numbers = generateRandomNumbers(9);
      return `${numbers}`;
    },
    TO: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDVTO(numbers);
      return `${numbers}-${digit}`;
    },
  };

  const generator = states[stateCode];
  // if (!generator) { throw new Error(`Estado inválido: ${stateCode}`); }

  return generator();
}
