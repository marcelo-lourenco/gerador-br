export interface ContaBancariaData {
  codigoBanco: string;
  nomeBanco: string;
  agencia: string;
  agenciaDv: string;
  conta: string;
  contaDv: string;
}

const genAgencyAccount = (numberOfDigits = 4): number[] => {
  const account: number[] = [];
  for (let i = 0; i < numberOfDigits; i++) {
    account.push(Math.floor(Math.random() * 10));
  }
  return account;
};

const genMultiplier = (multipliers: number[]): number => {
  let sumNumbers = 0;
  for (let i = 0; i < multipliers.length; i++) {
    sumNumbers += (i + 2) * multipliers[multipliers.length - i - 1]!;
  }
  return sumNumbers;
};

const formatter = (list: number[], type: string, digit: string | number = ''): any => {
  let formatted = '';
  for (let i = 0; i < list.length; i++) {
    formatted += list[i];
  }
  if (type.toUpperCase() === 'AG') {
    return `${formatted}${digit ? `-${digit}` : '0'}`;
  }
  if (type.toUpperCase() === 'CC') {
    return `${formatted}${digit ? `-${digit}` : '0'}`;
  }
  return [`${formatted.slice(0, 4)}`, `${formatted.slice(4)}-${digit}`];
};

const bankAccount = {
  generateBancoDoBrazil() {
    const bankCode = 1;
    const bankName = 'Banco do Brasil';
    const agency = genAgencyAccount();
    const account = genAgencyAccount(8);

    const sumAgencyDv = genMultiplier(agency);
    const sumAccountDv = genMultiplier(account);

    let agencyDv: number | string = Math.abs((sumAgencyDv % 11) - 11);
    agencyDv = agencyDv === 11 || agencyDv === 10 ? (agencyDv === 10 ? 0 : 'X') : agencyDv;

    let accountDv: number | string = Math.abs((sumAccountDv % 11) - 11);
    accountDv = accountDv === 11 || accountDv === 10 ? (accountDv === 10 ? 0 : 'X') : accountDv;
    const agencyFormatted = formatter(agency, 'AG', agencyDv);
    const accountFormatted = formatter(account, 'CC', accountDv);

    return { bankCode, bankName, agency: agencyFormatted, account: accountFormatted };
  },

  generateBradesco() {
    const bankCode = 237;
    const bankName = 'Bradesco';
    const agency = genAgencyAccount();
    const account = genAgencyAccount(6);

    const sumAgencyDv = genMultiplier(agency);
    const sumAccountDv = genMultiplier(account);

    let agencyDv: number | string = Math.abs((sumAgencyDv % 11) - 11);
    agencyDv = agencyDv === 10 || agencyDv === 11 ? (agencyDv === 10 ? 'P' : 0) : agencyDv;

    let accountDv: number | string = Math.abs((sumAccountDv % 11) - 11);
    accountDv = accountDv === 10 || accountDv === 11 ? (accountDv === 10 ? 'P' : 0) : accountDv;

    const agencyFormatted = formatter(agency, 'AG', agencyDv);
    const accountFormatted = formatter(account, 'CC', accountDv);
    return { bankCode, bankName, agency: agencyFormatted, account: accountFormatted };
  },

  generateCaixa() {
    const bankCode = 104;
    const bankName = 'Caixa';

    const agency = genAgencyAccount();
    const account = [0, 0, 1];

    for (let i = 0; i < 12; i++) {
      if (i < 4) {
        account.unshift(agency[i]!);
      } else {
        account.push(Math.floor(Math.random() * 10));
      }
    }

    let sumAccountDv = 0;
    for (let i = 0; i < account.length; i++) {
      if (i < 9) {
        sumAccountDv += (i + 2) * account[i]!;
      } else {
        sumAccountDv += (i - 7) * account[i]!;
      }
    }

    let accountDv = Math.abs(Math.floor((sumAccountDv * 10) / 11) * 11 - sumAccountDv * 10);
    accountDv = accountDv === 10 ? 0 : accountDv;

    const accountFormatted = formatter(account, 'ALL', accountDv);

    return { bankCode, bankName, agency: accountFormatted[0], account: accountFormatted[1] };
  },

  generateCitibank() {
    const bankCode = 745;
    const bankName = 'Citibank';
    const agency = genAgencyAccount();
    const account = genAgencyAccount(7);

    const sumAccountDv = genMultiplier(account);

    let accountDv = Math.abs((sumAccountDv % 11) - 11);
    accountDv = accountDv === 11 || accountDv === 10 ? 0 : accountDv;

    const agencyFormatted = formatter(agency, 'AG');
    const accountFormatted = formatter(account, 'CC', accountDv);
    return { bankCode, bankName, agency: agencyFormatted, account: accountFormatted };
  },

  generateHsbc() {
    const bankCode = 296;
    const bankName = 'HSBC';
    const agency = genAgencyAccount();
    const account = genAgencyAccount(6);
    const multipliers = [8, 9, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = agency.length - 1; i >= 0; i--) {
      account.unshift(agency[i]!);
    }

    let sumAccountDv = 0;
    for (let i = 0; i < multipliers.length; i++) {
      sumAccountDv += account[i]! * multipliers[i]!;
    }

    let accountDv = Math.abs(sumAccountDv % 11);
    accountDv = accountDv === 0 || accountDv === 10 ? 0 : accountDv;

    const accountFormatted = formatter(account, 'ALL', accountDv);
    return { bankCode, bankName, agency: accountFormatted[0], account: accountFormatted[1] };
  },

  generateItau() {
    const bankCode = 341;
    const bankName = 'Itaú';
    const account = genAgencyAccount(9);

    let sumAccountDv = 0;
    for (let i = 0; i < account.length; i++) {
      if (i % 2 === 0) {
        const par = account[i]! * 2;
        if (par > 9) {
          sumAccountDv += (par % 10) + Math.floor(par / 10);
        } else {
          sumAccountDv += par;
        }
      } else {
        sumAccountDv += account[i]!;
      }
    }

    let accountDv = Math.abs((sumAccountDv % 10) - 10);
    accountDv = sumAccountDv % 10 === 0 ? 0 : accountDv;

    const accountFormatted = formatter(account, 'ALL', accountDv);
    return { bankCode, bankName, agency: accountFormatted[0], account: accountFormatted[1] };
  },

  generateSantander() {
    const bankCode = 33;
    const bankName = 'Santander';
    const multipliers = [9, 7, 3, 1, 9, 7, 1, 3, 1, 9, 7, 3];
    const agency = genAgencyAccount().reverse();
    const account = genAgencyAccount(8);

    for (let i = 0; i < agency.length; i++) {
      account.unshift(agency[i]!);
    }

    let sumDv = 0;
    for (let i = 0; i < multipliers.length; i++) {
      sumDv += (multipliers[i]! * account[i]!) % 10;
    }

    let accountDv = Math.abs((sumDv % 10) - 10);
    accountDv = sumDv % 10 === 0 ? 0 : accountDv;

    const accountFormatted = formatter(account, 'ALL', accountDv);
    return { bankCode, bankName, agency: accountFormatted[0], account: accountFormatted[1] };
  },

  generateSortBank(bank = 'Indiferente'): any {
    const normalizeBankName = (name: string) =>
      name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '');

    const bancos: Record<string, any> = {
      '1|bancodobrasil': bankAccount.generateBancoDoBrazil(),
      '237|bradesco': bankAccount.generateBradesco(),
      '104|caixa': bankAccount.generateCaixa(),
      '745|citibank': bankAccount.generateCitibank(),
      '296|hsbc': bankAccount.generateHsbc(),
      '341|itau': bankAccount.generateItau(),
      '33|santander': bankAccount.generateSantander(),
      indiferente: '',
    };

    let selectedBank: string | undefined;

    if (bank === 'Indiferente') {
      const bancosKeys = Object.keys(bancos).filter((b) => b !== 'indiferente');
      selectedBank = bancosKeys[Math.floor(Math.random() * bancosKeys.length)];
    } else {
      const normalizedBank = normalizeBankName(bank);
      selectedBank = Object.keys(bancos).find((key) => key.includes(normalizedBank));
    }

    return bancos[selectedBank || '1|bancodobrasil'];
  },
};

/**
 * Gera uma conta bancária aleatória.
 *
 * @param bank - O nome ou código do banco para gerar a conta.
 * @returns Um objeto contendo dados de agência, conta e banco.
 * @example
 * console.log(contaBancaria('1'));
 * console.log(contaBancaria('Bradesco'));
 */
export function contaBancaria(bank?: string): ContaBancariaData {
  const ba = bankAccount.generateSortBank(bank);
  const [age, ageDv] = ba.agency.split('-');
  const [acc, accDv] = ba.account.split('-');

  return {
    codigoBanco: String(ba.bankCode),
    nomeBanco: ba.bankName,
    agencia: age,
    agenciaDv: ageDv || '',
    conta: acc,
    contaDv: accDv || '',
  };
}
