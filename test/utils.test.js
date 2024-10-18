import { describe, test } from 'node:test';
import { strictEqual, ok } from 'node:assert';
import * as utils from '../src/utils.js';
import * as db from '../src/data/db-general.js';

describe('Utils', () => {
  describe('getRandom', () => {
    test('should return a random element from an array', () => {
      const arr = [1, 2, 3, 4, 5];
      const randomElement = utils.getRandom(arr);
      ok(arr.includes(randomElement), 'The random element should be present in the array.');
    });
  });

  describe('apelidoRand', () => {
    test('should generate a valid nickname', () => {
      const apelido = utils.apelidoRand;
      strictEqual(apelido.length > 0, true, 'The nickname should have a length greater than 0.');
    });
    test('should be a string', () => {
      strictEqual(typeof utils.apelidoRand, 'string', 'The nickname should be a string.');
    });
  });

  describe('stateRand', () => {
    test('should generate a valid state abbreviation', () => {
      const state = utils.stateRand;
      strictEqual(state.length > 0, true, 'The state abbreviation should have a length greater than 0.');
    });
    test('should be a string', () => {
      strictEqual(typeof utils.stateRand, 'string', 'The state abbreviation should be a string.');
    });
    test('should be a valid state abbreviation', () => {
      ok(db.siglasEstados.includes(utils.stateRand), 'The state abbreviation should be present in the list of valid state abbreviations.');
    });
  });

  describe('nomeMasculinoRand', () => {
    test('should generate a valid male name', () => {
      const nome = utils.nomeMasculinoRand;
      strictEqual(nome.length > 0, true, 'The male name should have a length greater than 0.');
    });
    test('should be a string', () => {
      strictEqual(typeof utils.nomeMasculinoRand, 'string', 'The male name should be a string.');
    });
    test('should be a valid male name', () => {
      ok(db.nomesMasculinos.includes(utils.nomeMasculinoRand), 'The male name should be present in the list of valid male names.');
    });
  });

  describe('nomeFemininoRand', () => {
    test('should generate a valid female name', () => {
      const nome = utils.nomeFemininoRand;
      strictEqual(nome.length > 0, true, 'The female name should have a length greater than 0.');
    });
    test('should be a string', () => {
      strictEqual(typeof utils.nomeFemininoRand, 'string', 'The female name should be a string.');
    });
    test('should be a valid female name', () => {
      ok(db.nomesFemininos.includes(utils.nomeFemininoRand), 'The female name should be present in the list of valid female names.');
    });
  });

  describe('nomeDoMeioRand', () => {
    test('should generate a valid middle name', () => {
      const nome = utils.nomeDoMeioRand;
      strictEqual(nome.length > 0, true, 'The middle name should have a length greater than 0.');
    });
    test('should be a string', () => {
      strictEqual(typeof utils.nomeDoMeioRand, 'string', 'The middle name should be a string.');
    });
    test('should be a valid middle name', () => {
      ok(db.nomesDoMeio.includes(utils.nomeDoMeioRand), 'The middle name should be present in the list of valid middle names.');
    });
  });

  describe('sobrenomeRand', () => {
    test('should generate a valid surname', () => {
      const sobrenome = utils.sobrenomeRand;
      strictEqual(sobrenome.length > 0, true, 'The surname should have a length greater than 0.');
    });
    test('should be a string', () => {
      strictEqual(typeof utils.sobrenomeRand, 'string', 'The surname should be a string.');
    });
    test('should be a valid surname', () => {
      ok(db.sobrenomes.includes(utils.sobrenomeRand), 'The surname should be present in the list of valid surnames.');
    });
  });

  describe('nomePaiRand', () => {
    test('should generate a valid father\'s name', () => {
      const nome = utils.nomePaiRand;
      strictEqual(nome.length > 0, true, 'The father\'s name should have a length greater than 0.');
    });
    test('should be a string', () => {
      strictEqual(typeof utils.nomePaiRand, 'string', 'The father\'s name should be a string.');
    });
    test('should be a valid male name', () => {
      ok(db.nomesMasculinos.includes(utils.nomePaiRand), 'The father\'s name should be present in the list of valid male names.');
    });
  });

  describe('nomeMaeRand', () => {
    test('should generate a valid mother\'s name', () => {
      const nome = utils.nomeMaeRand;
      strictEqual(nome.length > 0, true, 'The mother\'s name should have a length greater than 0.');
    });
    test('should be a string', () => {
      strictEqual(typeof utils.nomeMaeRand, 'string', 'The mother\'s name should be a string.');
    });
    test('should be a valid female name', () => {
      ok(db.nomesFemininos.includes(utils.nomeMaeRand), 'The mother\'s name should be present in the list of valid female names.');
    });
  });

  describe('provedorEmailRand', () => {
    test('should generate a valid email provider', () => {
      const provedor = utils.provedorEmailRand;
      strictEqual(provedor.length > 0, true, 'The email provider should have a length greater than 0.');
    });
    test('should be a string', () => {
      strictEqual(typeof utils.provedorEmailRand, 'string', 'The email provider should be a string.');
    });
    test('should be a valid email provider', () => {
      ok(db.provedoresEmail.includes(utils.provedorEmailRand), 'The email provider should be present in the list of valid email providers.');
    });
  });

  describe('palavraRand', () => {
    test('should generate a valid word', () => {
      const palavra = utils.palavraRand;
      strictEqual(palavra.length > 0, true, 'The word should have a length greater than 0.');
    });
    test('should be a string', () => {
      strictEqual(typeof utils.palavraRand, 'string', 'The word should be a string.');
    });
    test('should be a valid word', () => {
      ok(db.palavras.includes(utils.palavraRand), 'The word should be present in the list of valid words.');
    });
  });

  describe('orientacaoSexualRand', () => {
    test('should generate a valid sexual orientation', () => {
      const orientacao = utils.orientacaoSexualRand;
      strictEqual(orientacao.length > 0, true, 'The sexual orientation should have a length greater than 0.');
    });
    test('should be a string', () => {
      strictEqual(typeof utils.orientacaoSexualRand, 'string', 'The sexual orientation should be a string.');
    });
    test('should be a valid sexual orientation', () => {
      ok(db.orientacaoSexual.includes(utils.orientacaoSexualRand), 'The sexual orientation should be present in the list of valid sexual orientations.');
    });
  });

  describe('identidadeGeneroRand', () => {
    test('should generate a valid gender identity', () => {
      const identidade = utils.identidadeGeneroRand;
      strictEqual(identidade.length > 0, true, 'The gender identity should have a length greater than 0.');
    });
    test('should be a string', () => {
      strictEqual(typeof utils.identidadeGeneroRand, 'string', 'The gender identity should be a string.');
    });
    test('should be a valid gender identity', () => {
      ok(db.identidesGenero.includes(utils.identidadeGeneroRand), 'The gender identity should be present in the list of valid gender identities.');
    });
  });

  describe('identidadePorOrientacaoRand', () => {
    test('should generate a valid gender identity based on the selected sexual orientation', () => {
      const identidade = utils.identidadePorOrientacaoRand;
      strictEqual(identidade.length > 0, true, 'The gender identity should have a length greater than 0.');
    });
    test('should be an array', () => {
      strictEqual(Array.isArray(utils.identidadePorOrientacaoRand), true, 'The gender identity should be an array.');
    });
    test('should be a valid gender identity based on the selected sexual orientation', () => {
      ok(db.identidadesPorOrientacao[utils.orientacaoSexualRand].includes(utils.identidadePorOrientacaoRand[0]), 'The gender identity should be present in the list of valid gender identities for the selected sexual orientation.');
    });
  });

  describe('corPeleRand', () => {
    test('should generate a valid skin color', () => {
      const cor = utils.corPeleRand;
      strictEqual(cor.length > 0, true, 'The skin color should have a length greater than 0.');
    });
    test('should be a string', () => {
      strictEqual(typeof utils.corPeleRand, 'string', 'The skin color should be a string.');
    });
    test('should be a valid skin color', () => {
      ok(db.corPele.includes(utils.corPeleRand), 'The skin color should be present in the list of valid skin colors.');
    });
  });

  describe('tipoSanguineoRand', () => {
    test('should generate a valid blood type', () => {
      const tipo = utils.tipoSanguineoRand;
      strictEqual(tipo.length > 0, true, 'The blood type should have a length greater than 0.');
    });
    test('should be a string', () => {
      strictEqual(typeof utils.tipoSanguineoRand, 'string', 'The blood type should be a string.');
    });
    test('should be a valid blood type', () => {
      ok(db.tiposSanguineo.includes(utils.tipoSanguineoRand), 'The blood type should be present in the list of valid blood types.');
    });
  });

  describe('categoriaCnhRand', () => {
    test('should generate a valid driver\'s license category', () => {
      const categoria = utils.categoriaCnhRand;
      strictEqual(categoria.length > 0, true, 'The driver\'s license category should have a length greater than 0.');
    });
    test('should be a string', () => {
      strictEqual(typeof utils.categoriaCnhRand, 'string', 'The driver\'s license category should be a string.');
    });
    test('should be a valid driver\'s license category', () => {
      ok(db.categoriasCnh.includes(utils.categoriaCnhRand), 'The driver\'s license category should be present in the list of valid driver\'s license categories.');
    });
  });
});
