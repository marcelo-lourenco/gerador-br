
const genAgencyAccount = function (numberOfDigits = 4) {
  let account = [];
  for (let i = 0; i < numberOfDigits; i++) {
    account.push(Math.floor(Math.random() * 10));
  }
  return account;
};

const genMultiplier = function (multipliers) {
  let sumNumbers = 0;
  for (let i = 0; i < multipliers.length; i++) {
    sumNumbers += (i + 2) * multipliers[multipliers.length - i - 1];
  }
  return sumNumbers;
};

const formatter = function (list, type, digit = '') {
  let formatted = '';
  for (let i = 0; i < list.length; i++) {
    formatted += list[i];
  }
  if (type.toUpperCase() === 'AG') {
    return `${formatted}${digit ? `-${digit}` : '0'}`; // AG
  } else if (type.toUpperCase() === 'CC') {
    return `${formatted}${digit ? `-${digit}` : '0'}`; // CC
  } else {
    return [`${formatted.slice(0, 4)}`, `${formatted.slice(4)}-${digit}`]; // AG CC
  }
};

const bankAccount = {
  generateBancoDoBrazil() {
    let bankCode = 1;
    let bankName = 'Banco do Brasil';
    let agency = genAgencyAccount();
    let account = genAgencyAccount(8);

    let sumAgencyDV = genMultiplier(agency);
    let sumAccountDV = genMultiplier(account);

    let agencyDV = Math.abs((sumAgencyDV % 11) - 11);
    agencyDV = agencyDV === 11 || agencyDV === 10 ? (agencyDV === 10 ? 0 : 'X') : agencyDV;

    let accountDV = Math.abs((sumAccountDV % 11) - 11);
    accountDV = accountDV === 11 || accountDV === 10 ? (accountDV === 10 ? 0 : 'X') : accountDV;
    let agencyFormatted = formatter(agency, 'AG', agencyDV);
    let accountFormatted = formatter(account, 'CC', accountDV);

    return {
      bankCode,
      bankName,
      agency: agencyFormatted,
      account: accountFormatted,
    };
  },

  generateBradesco() {
    let bankCode = 237;
    let bankName = 'Bradesco';
    let agency = genAgencyAccount();
    let account = genAgencyAccount(6);

    let sumAgencyDV = genMultiplier(agency);
    let sumAccountDV = genMultiplier(account);

    let agencyDV = Math.abs((sumAgencyDV % 11) - 11);
    agencyDV = agencyDV === 10 || agencyDV === 11 ? (agencyDV === 10 ? 'P' : 0) : agencyDV;

    let accountDV = Math.abs((sumAccountDV % 11) - 11);
    accountDV = accountDV === 10 || accountDV === 11 ? (accountDV === 10 ? 'P' : 0) : accountDV;

    let agencyFormatted = formatter(agency, 'AG', agencyDV);
    let accountFormatted = formatter(account, 'CC', accountDV);
    return {
      bankCode,
      bankName,
      agency: agencyFormatted,
      account: accountFormatted,
    };
  },

  generateCaixa() {
    let bankCode = 104;
    let bankName = 'Caixa';

    let agency = genAgencyAccount();
    let account = [0, 0, 1];

    for (let i = 0; i < 12; i++) {
      if (i < 4) {
        account.unshift(agency[i]);
      } else {
        account.push(Math.floor(Math.random() * 10));
      }
    }

    let sumAccountDV = 0;
    for (let i = 0; i < account.length; i++) {
      if (i < 9) {
        sumAccountDV += (i + 2) * account[i];
      } else {
        sumAccountDV += (i - 7) * account[i];
      }
    }

    let accountDV = Math.abs(Math.floor(((sumAccountDV * 10) / 11)) * 11 - (sumAccountDV * 10));
    accountDV = accountDV === 10 ? 0 : accountDV;

    let accountFormatted = formatter(account, 'ALL', accountDV);

    return {
      bankCode,
      bankName,
      agency: accountFormatted[0],
      account: accountFormatted[1],
    };
  },

  generateCitibank() {
    let bankCode = 745;
    let bankName = 'Citibank';
    let agency = genAgencyAccount();
    let account = genAgencyAccount(7);

    let sumAccountDV = genMultiplier(account);

    let accountDV = Math.abs((sumAccountDV % 11) - 11);
    accountDV = accountDV === 11 || accountDV === 10 ? 0 : accountDV;

    let agencyFormatted = formatter(agency, 'AG');
    let accountFormatted = formatter(account, 'CC', accountDV);
    return {
      bankCode,
      bankName,
      agency: agencyFormatted,
      account: accountFormatted,
    };
  },

  generateHsbc() {
    let bankCode = 296;
    let bankName = 'HSBC';
    let agency = genAgencyAccount();
    let account = genAgencyAccount(6);
    let multipliers = [8, 9, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = agency.length - 1; i >= 0; i--) {
      account.unshift(agency[i]);
    }

    let sumAccountDV = 0;
    for (let i = 0; i < multipliers.length; i++) {
      sumAccountDV += account[i] * multipliers[i];
    }

    let accountDV = Math.abs(sumAccountDV % 11);
    accountDV = accountDV === 0 || accountDV === 10 ? 0 : accountDV;

    let accountFormatted = formatter(account, 'ALL', accountDV);
    return {
      bankCode,
      bankName,
      agency: accountFormatted[0],
      account: accountFormatted[1],
    };
  },

  generateItau() {
    let bankCode = 341;
    let bankName = 'Itaú';
    let account = genAgencyAccount(9);

    let sumAccountDV = 0;
    for (let i = 0; i < account.length; i++) {
      if (i % 2 === 0) {
        let par = account[i] * 2;
        if (par > 9) {
          sumAccountDV += (par % 10) + Math.floor(par / 10);
        } else {
          sumAccountDV += par;
        }
      } else {
        sumAccountDV += account[i];
      }
    }

    let accountDV = Math.abs((sumAccountDV % 10) - 10);
    accountDV = sumAccountDV % 10 === 0 ? 0 : accountDV;

    let accountFormatted = formatter(account, 'ALL', accountDV);
    return {
      bankCode,
      bankName,
      agency: accountFormatted[0],
      account: accountFormatted[1],
    };
  },

  generateSantander() {
    let bankCode = 33;
    let bankName = 'Santander';
    let multipliers = [9, 7, 3, 1, 9, 7, 1, 3, 1, 9, 7, 3];
    let agency = genAgencyAccount().reverse();
    let account = genAgencyAccount(8);

    for (let i = 0; i < agency.length; i++) {
      account.unshift(agency[i]);
    }

    let sumDV = 0;
    for (let i = 0; i < multipliers.length; i++) {
      sumDV += (multipliers[i] * account[i]) % 10;
    }

    let accountDV = Math.abs((sumDV % 10) - 10);
    accountDV = sumDV % 10 === 0 ? 0 : accountDV;

    let accountFormatted = formatter(account, 'ALL', accountDV);
    return {
      bankCode,
      bankName,
      agency: accountFormatted[0],
      account: accountFormatted[1],
    };
  },

  generateSortBank(bank = 'Indiferente') {
    const normalizeBankName = (name) => name
      .toLowerCase() // Converte para letras minúsculas
      .normalize('NFD') // Separa os caracteres especiais das letras
      .replace(/[\u0300-\u036f]/g, '') // Remove caracteres especiais
      .replace(/[^a-z0-9]/g, ''); // Remove caracteres não alfanuméricos

    let bancos = {
      '1|bancodobrasil': bankAccount.generateBancoDoBrazil(),
      '237|bradesco': bankAccount.generateBradesco(),
      '104|caixa': bankAccount.generateCaixa(),
      '745|citibank': bankAccount.generateCitibank(),
      '296|hsbc': bankAccount.generateHsbc(),
      '341|itau': bankAccount.generateItau(),
      '33|santander': bankAccount.generateSantander(),
      indiferente: '',
    };

    let selectedBank;

    if (bank === 'Indiferente') {
      let bancosKeys = Object.keys(bancos).filter((b) => b !== 'indiferente');
      selectedBank = bancosKeys[Math.floor(Math.random() * bancosKeys.length)];
    } else {
      const normalizedBank = normalizeBankName(bank);
      selectedBank = Object.keys(bancos).find((key) => key.includes(normalizedBank));
    }

    return bancos[selectedBank];
  },
};

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
 *      codigoBanco: 1,
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
 *      codigoBanco: 237,
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
 *      codigoBanco: 104,
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
 *      codigoBanco: 745,
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
 *      codigoBanco: 296,
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
 *      codigoBanco: 341,
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
 *      codigoBanco: 33,
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
 *      codigoBanco: 1,
 *      nomeBanco: 'Banco do Brasil',
 *      agencia: '1234-5',
 *      agenciaDv: '5',
 *      conta: '12345678-9',
 *      contaDv: '9'
 *    }
 */
export const contaBancaria = function cb(bank) {
  const ba = bankAccount.generateSortBank(bank);
  const [age, ageDv] = ba.agency.split('-');
  const [acc, accDv] = ba.account.split('-');

  return {
    codigoBanco: ba.bankCode,
    nomeBanco: ba.bankName,
    agencia: age,
    agenciaDv: ageDv || '',
    conta: acc,
    contaDv: accDv || '',
  };
};
