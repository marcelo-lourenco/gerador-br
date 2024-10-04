import { nome } from './nome.js';

const creditCard = {
  generate(mask, fullTitularName) {
    const arr = this.banner().number;
    const brand = this.banner().brandName;
    const length = 16 - arr.length;
    for (let i = 1; i < length; i++) {
      arr.push(Math.round(Math.random() * 9));
    }

    let sum = 0;
    let aux = true;
    let ninesOut = 0;
    arr.forEach((value) => {
      ninesOut = Number(value) * (aux ? 2 : 1); // false = 1 vs true = 2
      ninesOut = ninesOut > 9 ? ninesOut - 9 : ninesOut;
      sum += ninesOut;
      aux = !aux;
      ninesOut = 0;
    });

    let digit = 10 - (sum % 10);
    if (digit === 10) {
      digit = 0;
    }

    const numberCard = mask ? arr.join('').replace(/(.{4})/g, '$1 ') + digit : arr.join('') + digit;

    const creditCardData = {
      numero: numberCard,
      bandeira: brand,
      cvv: this.cvv(),
      dataExpiracao: this.expirationDate(),
      nomeTitular: this.titularName(fullTitularName),
    };

    return creditCardData;
  },
  banner() {
    const brandCodes = {
      discover: [6011, 622, 65],
      elo: [636368, 438935, 504175, 451416],
      jcb: [35],
      mastercard: [51, 52, 53, 54, 55],
      visa: [4],
    };

    const arrNumber = [];
    for (const brand in brandCodes) {
      brandCodes[brand].forEach((value) => arrNumber.push({ number: value, brand }));
    }

    const selectedEntry = arrNumber[Math.floor(Math.random() * arrNumber.length)];
    const number = selectedEntry.number.toString().split('').map(Number);
    const brandName = selectedEntry.brand;

    return { number, brandName };
  },
  cvv() {
    const random = Math.floor(Math.random() * 999) + 1;
    const cvv = `00${random.toString()}`;
    return cvv.substr(cvv.length - 3);
  },
  expirationDate() {
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const getRandomMonth = () => getRandomInt(1, 12);
    const getRandomDay = (month) => {
      if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
        return getRandomInt(1, 31);
      } if ([4, 6, 9, 11].includes(month)) {
        return getRandomInt(1, 30);
      }
      return getRandomInt(1, 28);
    };

    const month = String(getRandomMonth()).padStart(2, '0');
    const day = String(getRandomDay(month)).padStart(2, '0');
    const year = new Date().getFullYear() + getRandomInt(1, 10);

    return `${day}/${month}/${year}`;
  },
  titularName(fullTitularName) {
    const name = fullTitularName || nome.aleatorioCompleto();
    const names = name.split(' ');
    const nameTitular = `${names[0]} ${names[1].charAt(0)} ${names.slice(-1)[0]}`;
    return nameTitular.toUpperCase();
  },
};

/**
 * Gera Cartão de Crédito aleatório.
 * Fornece métodos para gerar número de Cartão de Crédito, Bandeira, CVV, Data De Expiração e Nome do Titular.
 * @param {boolean} [mask=false] - Se `true`, o número do cartão será retornado com a máscara de formatação (xxxx xxxx xxxx xxxx).
 * Se `false`, o número do cartão será retornado apenas com os dígitos.
 * @param {string} - Nome completo do titular
 * @returns {object} Um objeto contendo número do cartão, bandeira, CVV,  data de expiração e nome do titular
 *
 * @example
 * // Gera objeto cartaoCredito com as propriedades:
 * // numero (sem máscara), bandeira, cvv, dataExpiracao e nomeTitular aleatório (abreviado)
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
 * // Opcionalmente, atribua o objeto a uma variável e utilize as propriedades
 * const cc = cartaoCredito();
 * console.log(cc.numero);
 * console.log(cc.bandeira);
 * console.log(cc.cvv);
 * console.log(cc.dataExpiracao);
 * console.log(cc.nomeTitular);
 *
 * // Gera objeto cartaoCredito com as propriedades:
 * // numero (com máscara), bandeira, cvv, dataExpiracao e nomeTitular informado (abreviado)
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
 * // Gera objeto cartaoCredito com as propriedades:
 * // numero (sem máscara), bandeira, cvv, dataExpiracao e nomeTitular informado (abreviado)
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
export const cartaoCredito = function cc(mask, fullTitularName) {
  return creditCard.generate(mask, fullTitularName);
};
