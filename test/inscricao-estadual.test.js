import { describe, test } from 'node:test';
import { strictEqual, match } from 'node:assert';
import { inscricaoEstadual } from '../src/generators/inscricao-estadual.js';

describe('Inscrição Estadual', () => {
  describe('Validação de formato', () => {
    test('Deve gerar uma inscrição estadual válida para o Acre (AC)', () => {
      const ie = inscricaoEstadual('AC');
      strictEqual(ie.match(/^\d{2}\.\d{8}\d$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para Alagoas (AL)', () => {
      const ie = inscricaoEstadual('AL');
      strictEqual(ie.match(/^\d{9}$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para o Amapá (AP)', () => {
      const ie = inscricaoEstadual('AP');
      strictEqual(ie.match(/^\d{2}\.\d{7}\d$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para o Amazonas (AM)', () => {
      const ie = inscricaoEstadual('AM');
      strictEqual(ie.match(/^\d{9}\d$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para a Bahia (BA)', () => {
      const ie = inscricaoEstadual('BA');
      strictEqual(ie.match(/^\d{8}-\d{2}$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para o Ceará (CE)', () => {
      const ie = inscricaoEstadual('CE');
      strictEqual(ie.match(/^\d{10}$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual com formato válido para o Distrito Federal (DF)', () => {
      const ie = inscricaoEstadual('DF');
      // Verifica o formato da inscrição estadual "07YY.NNNNNDV"
      match(ie, /^07\d{2}\.\d{5}\d{2}$/, 'Formato da inscrição estadual inválido');
    });

    test('Deve gerar uma inscrição estadual válida para o Espírito Santo (ES)', () => {
      const ie = inscricaoEstadual('ES');
      strictEqual(ie.match(/^\d{9}$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para Goiás (GO)', () => {
      const ie = inscricaoEstadual('GO');
      strictEqual(ie.match(/^\d{8}\d$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para o Maranhão (MA)', () => {
      const ie = inscricaoEstadual('MA');
      strictEqual(ie.match(/^\d{9}$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para Mato Grosso (MT)', () => {
      const ie = inscricaoEstadual('MT');
      strictEqual(ie.match(/^\d{11}$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para Mato Grosso do Sul (MS)', () => {
      const ie = inscricaoEstadual('MS');
      strictEqual(ie.match(/^\d{9}$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para Minas Gerais (MG)', () => {
      const ie = inscricaoEstadual('MG');
      strictEqual(ie.match(/^\d{13}$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para o Pará (PA)', () => {
      const ie = inscricaoEstadual('PA');
      strictEqual(ie.match(/^\d{9}$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para a Paraíba (PB)', () => {
      const ie = inscricaoEstadual('PB');
      strictEqual(ie.match(/^\d{9}$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para o Paraná (PR)', () => {
      const ie = inscricaoEstadual('PR');
      match(ie, /^\d{8}-\d{2}$/, 'Formato da inscrição estadual inválido');
    });

    test('Deve gerar uma inscrição estadual válida para Pernambuco (PE)', () => {
      const ie = inscricaoEstadual('PE');
      strictEqual(ie.match(/^\d{9}$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para o Piauí (PI)', () => {
      const ie = inscricaoEstadual('PI');
      strictEqual(ie.match(/^\d{9}$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para o Rio de Janeiro (RJ)', () => {
      const ie = inscricaoEstadual('RJ');
      strictEqual(ie.match(/^\d{8}\.\d{2}$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para o Rio Grande do Norte (RN)', () => {
      const ie = inscricaoEstadual('RN');
      strictEqual(ie.match(/^\d{8}-\d$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para o Rio Grande do Sul (RS)', () => {
      const ie = inscricaoEstadual('RS');
      strictEqual(ie.match(/^\d{9}$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para Rondônia (RO)', () => {
      const ie = inscricaoEstadual('RO');
      strictEqual(ie.match(/^\d{8}-\d{1}$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para Roraima (RR)', () => {
      const ie = inscricaoEstadual('RR');
      strictEqual(ie.match(/^\d{8}$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para Santa Catarina (SC)', () => {
      const ie = inscricaoEstadual('SC');
      strictEqual(ie.match(/^\d{9}$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para São Paulo (SP)', () => {
      const ie = inscricaoEstadual('SP');
      strictEqual(ie.match(/^\d{12}\d$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para Sergipe (SE)', () => {
      const ie = inscricaoEstadual('SE');
      strictEqual(ie.match(/^\d{9}$/).length, 1);
    });

    test('Deve gerar uma inscrição estadual válida para o Tocantins (TO)', () => {
      const ie = inscricaoEstadual('TO');
      strictEqual(ie.match(/^\d{8}-\d{1}$/).length, 1);
    });
  });

  describe('Validação de estado aleatório', () => {
    test('Deve gerar uma inscrição estadual com um estado aleatório quando nenhum estado é informado', () => {
      const ie = inscricaoEstadual();
      strictEqual(typeof ie, 'string');
    });
  });
});
