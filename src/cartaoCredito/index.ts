import { nome } from '../nome/index.js';

export interface CartaoCreditoData {
  numero: string;
  bandeira: string;
  cvv: string;
  dataExpiracao: string;
  nomeTitular: string;
}

const creditCard = {
  generate(mask?: boolean, fullTitularName?: string): CartaoCreditoData {
    const bannerInfo = this.banner();
    const arr = bannerInfo.number;
    const brand = bannerInfo.brandName;
    const length = 16 - arr.length;
    for (let i = 1; i < length; i++) {
      arr.push(Math.round(Math.random() * 9));
    }

    let sum = 0;
    let aux = true;
    let ninesOut = 0;
    arr.forEach((value) => {
      ninesOut = Number(value) * (aux ? 2 : 1);
      ninesOut = ninesOut > 9 ? ninesOut - 9 : ninesOut;
      sum += ninesOut;
      aux = !aux;
      ninesOut = 0;
    });

    let digit = 10 - (sum % 10);
    if (digit === 10) {
      digit = 0;
    }

    const numberCard = mask
      ? `${arr.join('').replace(/(.{4})/g, '$1 ')}${digit}`
      : `${arr.join('')}${digit}`;

    return {
      numero: numberCard,
      bandeira: brand,
      cvv: this.cvv(),
      dataExpiracao: this.expirationDate(),
      nomeTitular: this.titularName(fullTitularName),
    };
  },
  banner() {
    const brandCodes: Record<string, number[]> = {
      discover: [6011, 622, 65],
      elo: [636368, 438935, 504175, 451416],
      jcb: [35],
      mastercard: [51, 52, 53, 54, 55],
      visa: [4],
    };

    const arrNumber: Array<{ number: number; brand: string }> = [];
    for (const brand in brandCodes) {
      brandCodes[brand]!.forEach((value) => {
        arrNumber.push({ number: value, brand });
      });
    }

    const selectedEntry = arrNumber[Math.floor(Math.random() * arrNumber.length)]!;
    const number = selectedEntry.number.toString().split('').map(Number);
    const brandName = selectedEntry.brand;

    return { number, brandName };
  },
  cvv() {
    const random = Math.floor(Math.random() * 999) + 1;
    const cvv = `00${random.toString()}`;
    return cvv.slice(-3);
  },
  expirationDate() {
    const getRandomInt = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const getRandomMonth = () => getRandomInt(1, 12);
    const getRandomDay = (month: string) => {
      let maxDay = 28;
      if (['01', '03', '05', '07', '08', '10', '12'].includes(month)) {
        maxDay = 31;
      } else if (['04', '06', '09', '11'].includes(month)) {
        maxDay = 30;
      }
      return getRandomInt(1, maxDay);
    };

    const month = String(getRandomMonth()).padStart(2, '0');
    const day = String(getRandomDay(month)).padStart(2, '0');
    const year = new Date().getFullYear() + getRandomInt(1, 10);

    return `${day}/${month}/${year}`;
  },
  titularName(fullTitularName?: string) {
    const nameStr = fullTitularName || nome.aleatorioCompleto();
    const names = nameStr.split(' ');
    const first = names[0] ?? '';
    const second = names[1] ? names[1].charAt(0) : '';
    const last = names.slice(-1)[0] ?? '';
    return `${first} ${second} ${last}`.trim().toUpperCase();
  },
};

/**
 * Gera Cartão de Crédito aleatório.
 * @param mask - Se `true`, o número do cartão será retornado com a máscara (xxxx xxxx xxxx xxxx).
 * @param fullTitularName - Nome completo do titular
 * @returns Um objeto contendo número do cartão, bandeira, CVV, data de expiração e nome do titular
 * @example
 * console.log(cartaoCredito());
 * console.log(cartaoCredito(true, "João Santos da Silva"));
 */
export function cartaoCredito(mask?: boolean, fullTitularName?: string): CartaoCreditoData {
  return creditCard.generate(mask, fullTitularName);
}
