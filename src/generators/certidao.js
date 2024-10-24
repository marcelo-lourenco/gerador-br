//const faker = require('faker');
import { randomInt } from 'crypto';

const generateBirthCertificate = () => ({
  type: 'Certidão de Nascimento',
  // dataEmissao: faker.date.past(),
  // nomeCompleto: faker.name.findName(),
  // dataNascimento: faker.date.past(),
  // localNascimento: faker.address.city(),
  // nomeMae: faker.name.firstName(),
  // nomePai: faker.name.firstName(),
  numeroRegistro: randomInt(1000000000),
  livro: randomInt(100),
  folha: randomInt(100),
  termo: randomInt(100),
  //observacao: faker.lorem.sentence(),
});

const generateMarriageCertificate = () => ({
  type: 'Certidão de Casamento',
  //dataEmissao: faker.date.past(),
  //nomeConjuge1: faker.name.findName(),
  //nomeConjuge2: faker.name.findName(),
  //dataCasamento: faker.date.past(),
  //localCasamento: faker.address.city(),
  //regimeCasamento: faker.random.arrayElement(['Comunhão Parcial de Bens', 'Comunhão Universal de Bens', 'Separação de Bens']),
  numeroRegistro: randomInt(1000000000),
  livro: randomInt(100),
  folha: randomInt(100),
  termo: randomInt(100),
  //observacao: faker.lorem.sentence(),
});

const generateDeathCertificate = () => ({
  type: 'Certidão de Óbito',
  //dataEmissao: faker.date.past(),
  //nomeCompleto: faker.name.findName(),
  //dataFalecimento: faker.date.past(),
  //localFalecimento: faker.address.city(),
  //causaMortis: faker.lorem.sentence(),
  numeroRegistro: randomInt(1000000000),
  livro: randomInt(100),
  folha: randomInt(100),
  termo: randomInt(100),
  //observacao: faker.lorem.sentence(),
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

//module.exports = { generateCertificate };


//const { generateCertificate } = require('./gerador-certidao');

const birthCertificate = generateCertificate('nascimento');
const marriageCertificate = generateCertificate('casamento');
const deathCertificate = generateCertificate('obito');

console.log(birthCertificate);
console.log(marriageCertificate);
console.log(deathCertificate);
