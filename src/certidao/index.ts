export interface CertidaoDetalhes {
  tipoCertidao: string;
  cartorio: string;
  estado: string;
  anoRegistro: string;
  tipoLivro: string;
  tipoFolha: string;
  termo: string;
  folha: string;
  livro: string;
}

export interface CertidaoResult {
  certidao: string;
  detalhes: CertidaoDetalhes;
}

function generateCertificate(type: string | null = null, mask = true): CertidaoResult {
  const validUFs = [
    '12',
    '27',
    '13',
    '16',
    '29',
    '23',
    '53',
    '32',
    '52',
    '21',
    '31',
    '50',
    '51',
    '15',
    '25',
    '26',
    '22',
    '41',
    '33',
    '24',
    '43',
    '11',
    '14',
    '42',
    '28',
    '35',
    '17',
  ];
  const ufCode = validUFs[Math.floor(Math.random() * validUFs.length)]!;
  const currentYear = new Date().getFullYear();
  const year = currentYear - Math.floor(Math.random() * 101);

  const tipos = ['nascimento', 'casamento', 'obito'];
  let selectedType = type;
  if (!selectedType) {
    selectedType = tipos[Math.floor(Math.random() * tipos.length)]!;
  }

  selectedType = selectedType
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

  let bookTypeCode = '1001';
  let certidaoTipo = 'Nascimento';

  switch (selectedType) {
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
  }

  const registryCode = String(Math.floor(Math.random() * 1_000_000)).padStart(6, '0');
  const sheetType = String(Math.floor(Math.random() * 2) + 1);
  const recordNumber = String(Math.floor(Math.random() * 100_000)).padStart(5, '0');
  const pageNumber = String(Math.floor(Math.random() * 1_000)).padStart(3, '0');
  const bookNumber = String(Math.floor(Math.random() * 100_000)).padStart(5, '0');

  const base = `${registryCode}${ufCode}${year}${bookTypeCode}${sheetType}${recordNumber}${pageNumber}${bookNumber}`;

  function calculateDigit(sequence: string): number {
    let sum = 0;
    let multiplier = 32 - sequence.length;

    for (let i = 0; i < sequence.length; i++) {
      sum += parseInt(sequence[i]!, 10) * multiplier;
      multiplier += 1;
      if (multiplier > 10) {
        multiplier = 0;
      }
    }

    const remainder = sum % 11;
    return remainder > 9 ? 1 : remainder;
  }

  const dv1 = calculateDigit(base);
  const dv2 = calculateDigit(base + String(dv1));
  let number = `${base}${dv1}${dv2}`;

  if (mask) {
    number = number.replace(
      /(\d{6})(\d{2})(\d{4})(\d{4})(\d{1})(\d{5})(\d{3})(\d{7})/,
      '$1 $2 $3 $4 $5 $6 $7 $8',
    );
  }

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
      livro: bookNumber,
    },
  };
}

/**
 * Objeto `certidao` que fornece métodos para gerar números de certidões.
 */
export const certidao = {
  aleatoria(mask = true): string {
    return generateCertificate(null, mask).certidao;
  },
  nascimento(mask = true): string {
    return generateCertificate('nascimento', mask).certidao;
  },
  casamento(mask = true): string {
    return generateCertificate('casamento', mask).certidao;
  },
  obito(mask = true): string {
    return generateCertificate('obito', mask).certidao;
  },
  aleatoriaObj(mask = true): CertidaoDetalhes {
    return generateCertificate(null, mask).detalhes;
  },
  nascimentoObj(mask = true): CertidaoDetalhes {
    return generateCertificate('nascimento', mask).detalhes;
  },
  casamentoObj(mask = true): CertidaoDetalhes {
    return generateCertificate('casamento', mask).detalhes;
  },
  obitoObj(mask = true): CertidaoDetalhes {
    return generateCertificate('obito', mask).detalhes;
  },
};
