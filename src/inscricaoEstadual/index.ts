import { stateRand } from '../utils/index.js';

function remainder11(sum: number): number {
  sum %= 11;
  return sum < 2 ? 0 : 11 - sum;
}

function remainder10(sum: number): number {
  sum %= 10;
  return sum === 0 ? 0 : 10 - sum;
}

function generateRandomNumbers(length: number): string {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10).toString();
  }
  return result;
}

function generateCurrentYearTwoDigits(): string {
  return new Date().getFullYear().toString().slice(-2);
}

function ieDvac(numbers: string): number {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i]!, 10) * weights[i]!;
  }
  return remainder11(sum);
}

function ieDval(numbers: string): number {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i]!, 10) * weights[i]!;
  }
  return remainder11(sum);
}

function ieDvam(numbers: string): number {
  const sum = numbers
    .split('')
    .reduce((acc, digit, index) => acc + parseInt(digit, 10) * (numbers.length - index), 0);
  return remainder11(sum);
}

function ieDvap(numbers: string): number {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i]!, 10) * weights[i]!;
  }

  return remainder11(sum);
}

function ieDvba1(numbers: string): number {
  const weights = [7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i]!, 10) * weights[i]!;
  }
  return remainder10(sum);
}

function ieDvba2(numbers: string): number {
  const weights = [8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i]!, 10) * weights[i]!;
  }
  return remainder10(sum);
}

function ieDvce(numbers: string): number {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i]!, 10) * weights[i]!;
  }

  return remainder11(sum);
}

function ieDvdf(input: string): string {
  const weights1 = [4, 3, 2, 9, 8, 7, 6, 5, 4];
  const weights2 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4];

  let sum1 = 0;
  for (let i = 0; i < weights1.length; i++) {
    sum1 += parseInt(input[i]!, 10) * weights1[i]!;
  }
  const digit1 = remainder11(sum1);

  const fullInput = input + digit1;

  let sum2 = 0;
  for (let i = 0; i < weights2.length; i++) {
    sum2 += parseInt(fullInput[i]!, 10) * weights2[i]!;
  }

  const digit2 = remainder11(sum2);

  return `${digit1}${digit2}`;
}

function ieDves(numbers: string): number {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i]!, 10) * weights[i]!;
  }

  return remainder11(sum);
}

function ieDvgo(numbers: string): number {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i]!, 10) * weights[i]!;
  }

  const remainder = sum % 11;
  return remainder === 0
    ? 0
    : remainder === 1
      ? numbers.startsWith('11094402')
        ? 1
        : 0
      : 11 - remainder;
}

function ieDvma(input: string): number {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(input[i]!, 10) * weights[i]!;
  }

  return remainder11(sum);
}

function ieDvmt(numbers: string): number {
  const weights = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i]!, 10) * weights[i]!;
  }

  return remainder11(sum);
}

function ieDvms(input: string): number {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(input[i]!, 10) * weights[i]!;
  }

  return remainder11(sum);
}

function ieDvmg1(numbers: string): number {
  const weights = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    const product = parseInt(numbers[i]!, 10) * weights[i]!;
    sum += product >= 10 ? Math.floor(product / 10) + (product % 10) : product;
  }

  return remainder10(sum);
}

function ieDvmg2(input: string): number {
  const weights = [3, 2, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(input[i]!, 10) * weights[i]!;
  }

  return remainder11(sum);
}

function ieDvpa(input: string): number {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(input[i]!, 10) * weights[i]!;
  }

  return remainder11(sum);
}

function ieDvpb(numbers: string): number {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i]!, 10) * weights[i]!;
  }

  return remainder11(sum);
}

function ieDvpe(numbers: string): number {
  const weights = [8, 7, 6, 5, 4, 3, 2, 1];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i]!, 10) * weights[i]!;
  }

  return remainder11(sum);
}

function ieDvpi(numbers: string): number {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i]!, 10) * weights[i]!;
  }

  return remainder11(sum);
}

function ieDvpr1(numbers: string): number {
  const weights = [5, 4, 3, 2, 7, 6, 5, 4];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i]!, 10) * weights[i]!;
  }
  return remainder11(sum);
}

function ieDvpr2(numbers: string): number {
  const weights = [6, 5, 4, 3, 2, 7, 6, 5, 4];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i]!, 10) * weights[i]!;
  }
  return remainder11(sum);
}

function ieDvrj1(numbers: string): number {
  const weights = [2, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i]!, 10) * weights[i]!;
  }

  return remainder11(sum);
}

function ieDvrj2(input: string): number {
  const weights = [2, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(input[i]!, 10) * weights[i]!;
  }

  return remainder11(sum);
}

function ieDvrn(numbers: string): number {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i]!, 10) * weights[i]!;
  }

  return remainder11(sum);
}

function ieDvrs(numbers: string): number {
  const weights = [2, 9, 8, 7, 6, 5, 4, 3];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i]!, 10) * weights[i]!;
  }

  return remainder11(sum);
}

function ieDvro(input: string): number {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(input[i]!, 10) * weights[i]!;
  }

  return remainder11(sum);
}

function ieDvsc(numbers: string): number {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i]!, 10) * weights[i]!;
  }

  return remainder11(sum);
}

function ieDvsp1(numbers: string): number {
  const weights = [1, 3, 4, 5, 6, 7, 8, 10];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i]!, 10) * weights[i]!;
  }
  return remainder11(sum);
}

function ieDvsp2(numbers: string): number {
  const weights = [3, 2, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i]!, 10) * weights[i]!;
  }
  return remainder11(sum);
}

function ieDvto(numbers: string): number {
  const weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(numbers[i]!, 10) * weights[i]!;
  }

  return remainder11(sum);
}

/**
 * Gera Inscrição Estadual aleatório e do estado informado.
 *
 * @param state A sigla do estado para o qual gerar a inscrição estadual.
 * @returns O número de inscrição estadual gerado.
 * @example
 * console.log(inscricaoEstadual());
 * console.log(inscricaoEstadual('AC'));
 */
export function inscricaoEstadual(state?: string): string {
  const stateCode = state ? state.toUpperCase() : stateRand;
  const states: Record<string, () => string> = {
    AC: () => {
      const base = '01';
      const numbers = generateRandomNumbers(8);
      const digit = ieDvac(base + numbers);
      return `${base}.${numbers}${digit}`;
    },
    AL: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDval(numbers);
      return `${numbers}${digit}`;
    },
    AP: () => {
      const base = '03';
      const numbers = generateRandomNumbers(7);
      const digit = ieDvap(base + numbers);
      return `${base}.${numbers}${digit}`;
    },
    AM: () => {
      const numbers = generateRandomNumbers(9);
      const digit = ieDvam(numbers);
      return `${numbers}${digit}`;
    },
    BA: () => {
      const base = new Date().getFullYear() > 2022 ? '1' : '0';
      const numbers = generateRandomNumbers(7);
      const digit1 = ieDvba1(base + numbers);
      const digit2 = ieDvba2(base + numbers + digit1);
      return `${base}${numbers}-${digit1}${digit2}`;
    },
    CE: () => {
      const numbers = generateRandomNumbers(9);
      const digit = ieDvce(numbers);
      return `${numbers}${digit}`;
    },
    DF: () => {
      const base = '07';
      const year = generateCurrentYearTwoDigits();
      const numbers = generateRandomNumbers(5);
      const digit = ieDvdf(base + year + numbers);
      return `${base}${year}.${numbers}${digit}`;
    },
    ES: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDves(numbers);
      return `${numbers}${digit}`;
    },
    GO: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDvgo(numbers);
      return `${numbers}${digit}`;
    },
    MA: () => {
      const base = '12';
      const numbers = generateRandomNumbers(6);
      const digit = ieDvma(base + numbers);
      return `${base}${numbers}${digit}`;
    },
    MT: () => {
      const numbers = generateRandomNumbers(10);
      const digit = ieDvmt(numbers);
      return `${numbers}${digit}`;
    },
    MS: () => {
      const base = '28';
      const numbers = generateRandomNumbers(6);
      const digit = ieDvms(base + numbers);
      return `${base}${numbers}${digit}`;
    },
    MG: () => {
      const numbers = generateRandomNumbers(11);
      const digit1 = ieDvmg1(numbers);
      const digit2 = ieDvmg2(numbers + digit1);
      return `${numbers}${digit1}${digit2}`;
    },
    PA: () => {
      const base = '15';
      const numbers = generateRandomNumbers(6);
      const digit = ieDvpa(base + numbers);
      return `${base}${numbers}${digit}`;
    },
    PB: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDvpb(numbers);
      return `${numbers}${digit}`;
    },
    PR: () => {
      const numbers = generateRandomNumbers(8);
      const digit1 = ieDvpr1(numbers);
      const digit2 = ieDvpr2(numbers + digit1);
      return `${numbers}-${digit1}${digit2}`;
    },
    PE: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDvpe(numbers);
      return `${numbers}${digit}`;
    },
    PI: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDvpi(numbers);
      return `${numbers}${digit}`;
    },
    RJ: () => {
      const numbers = generateRandomNumbers(8);
      const digit1 = ieDvrj1(numbers);
      const digit2 = ieDvrj2(numbers + digit1);
      return `${numbers}.${digit1}${digit2}`;
    },
    RN: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDvrn(numbers);
      return `${numbers}-${digit}`;
    },
    RS: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDvrs(numbers);
      return `${numbers}${digit}`;
    },
    RO: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDvro(numbers);
      return `${numbers}-${digit}`;
    },
    RR: () => {
      const base = '24';
      const numbers = generateRandomNumbers(6);
      return `${base}${numbers}`;
    },
    SC: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDvsc(numbers);
      return `${numbers}${digit}`;
    },
    SP: () => {
      const numbers = generateRandomNumbers(11);
      const digit1 = ieDvsp1(numbers);
      const digit2 = ieDvsp2(numbers + digit1);
      return `${numbers}${digit1}${digit2}`;
    },
    SE: () => {
      const numbers = generateRandomNumbers(9);
      return `${numbers}`;
    },
    TO: () => {
      const numbers = generateRandomNumbers(8);
      const digit = ieDvto(numbers);
      return `${numbers}-${digit}`;
    },
  };

  const generator = states[stateCode] || states[stateRand] || states.SP!;
  return generator();
}
