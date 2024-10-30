// Função auxiliar para gerar um número inteiro aleatório entre min e max (exclusivo de max)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateBirthCertificate = () => ({
  type: 'Certidão de Nascimento',
  numeroRegistro: randomInt(0, 1000000000),
  livro: randomInt(0, 100),
  folha: randomInt(0, 100),
  termo: randomInt(0, 100),
});

const generateMarriageCertificate = () => ({
  type: 'Certidão de Casamento',
  numeroRegistro: randomInt(0, 1000000000),
  livro: randomInt(0, 100),
  folha: randomInt(0, 100),
  termo: randomInt(0, 100),
});

const generateDeathCertificate = () => ({
  type: 'Certidão de Óbito',
  numeroRegistro: randomInt(0, 1000000000),
  livro: randomInt(0, 100),
  folha: randomInt(0, 100),
  termo: randomInt(0, 100),
});

const generateCertificate = (type) => {
  switch (type) {
    case 'nascimento':
      return generateBirthCertificate();
    case 'casamento':
      return generateMarriageCertificate();
    case 'obito':
      return generateDeathCertificate();
    default:
      throw new Error('Tipo de certidão inválido.');
  }
};

const birthCertificate = generateCertificate('nascimento');
const marriageCertificate = generateCertificate('casamento');
const deathCertificate = generateCertificate('obito');

console.log(birthCertificate);
console.log(marriageCertificate);
console.log(deathCertificate);
