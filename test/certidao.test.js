import { describe, test } from 'node:test';
import { match, strictEqual } from 'node:assert';

import { certidao } from '../src/generators/certidao.js';

describe('certidao.js', () => {
  test('Geração de número de certidão de nascimento com máscara', () => {
    const result = certidao.nascimento(true);
    // Verifica a máscara do número de certidão
    match(result, /^\d{6} \d{2} \d{4} 1001 \d \d{5} \d{3} \d{7}$/, 'A máscara da certidão de nascimento está incorreta');
  });

  test('Geração de número de certidão de nascimento sem máscara', () => {
    const result = certidao.nascimento(false);
    // Verifica a ausência da máscara no número de certidão
    match(result, /^\d{32}$/, 'O número de certidão de nascimento sem máscara deve ter 32 dígitos');
  });

  test('Geração de número de certidão de casamento com máscara', () => {
    const result = certidao.casamento(true);
    // Verifica a máscara do número de certidão
    match(result, /^\d{6} \d{2} \d{4} 2001 \d \d{5} \d{3} \d{7}$/, 'A máscara da certidão de casamento está incorreta');
  });

  test('Geração de número de certidão de casamento sem máscara', () => {
    const result = certidao.casamento(false);
    // Verifica a ausência da máscara no número de certidão
    match(result, /^\d{32}$/, 'O número de certidão de casamento sem máscara deve ter 32 dígitos');
  });

  test('Geração de número de certidão de óbito com máscara', () => {
    const result = certidao.obito(true);
    // Verifica a máscara do número de certidão
    match(result, /^\d{6} \d{2} \d{4} 3001 \d \d{5} \d{3} \d{7}$/, 'A máscara da certidão de óbito está incorreta');
  });

  test('Geração de número de certidão de óbito sem máscara', () => {
    const result = certidao.obito(false);
    // Verifica a ausência da máscara no número de certidão
    match(result, /^\d{32}$/, 'O número de certidão de óbito sem máscara deve ter 32 dígitos');
  });

  test('Geração de objeto detalhado para certidão de nascimento', () => {
    const result = certidao.nascimentoObj();
    strictEqual(result.tipoCertidao, 'Nascimento', 'Tipo da certidão deve ser "Nascimento"');
    match(result.cartorio, /^\d{6}$/, 'O código do cartório deve ter 6 dígitos');
    match(result.estado, /^\d{2}$/, 'O código do estado deve ter 2 dígitos');
    match(result.anoRegistro, /^\d{4}$/, 'O ano de registro deve ter 4 dígitos');
    strictEqual(result.tipoLivro, '1001', 'Tipo de livro deve ser "1001" para certidão de nascimento');
  });

  test('Geração de objeto detalhado para certidão de casamento', () => {
    const result = certidao.casamentoObj();
    strictEqual(result.tipoCertidao, 'Casamento', 'Tipo da certidão deve ser "Casamento"');
    match(result.cartorio, /^\d{6}$/, 'O código do cartório deve ter 6 dígitos');
    match(result.estado, /^\d{2}$/, 'O código do estado deve ter 2 dígitos');
    match(result.anoRegistro, /^\d{4}$/, 'O ano de registro deve ter 4 dígitos');
    strictEqual(result.tipoLivro, '2001', 'Tipo de livro deve ser "2001" para certidão de casamento');
  });

  test('Geração de objeto detalhado para certidão de óbito', () => {
    const result = certidao.obitoObj();
    strictEqual(result.tipoCertidao, 'Óbito', 'Tipo da certidão deve ser "Óbito"');
    match(result.cartorio, /^\d{6}$/, 'O código do cartório deve ter 6 dígitos');
    match(result.estado, /^\d{2}$/, 'O código do estado deve ter 2 dígitos');
    match(result.anoRegistro, /^\d{4}$/, 'O ano de registro deve ter 4 dígitos');
    strictEqual(result.tipoLivro, '3001', 'Tipo de livro deve ser "3001" para certidão de óbito');
  });

  test('Geração de certidão aleatória', () => {
    const result = certidao.aleatoriaObj();
    match(result.tipoCertidao, /^(Nascimento|Casamento|Óbito)$/, 'Tipo da certidão aleatória deve ser "Nascimento", "Casamento" ou "Óbito"');
    match(result.cartorio, /^\d{6}$/, 'O código do cartório deve ter 6 dígitos');
    match(result.estado, /^\d{2}$/, 'O código do estado deve ter 2 dígitos');
    match(result.anoRegistro, /^\d{4}$/, 'O ano de registro deve ter 4 dígitos');
  });

  test('Geração de certidão aleatória com máscara', () => {
    const result = certidao.aleatoria();
    match(result, /^\d{6} \d{2} \d{4} \d{4} \d \d{5} \d{3} \d{7}$/, 'A máscara da certidão aleatória está incorreta');
  });

  test('Geração de certidão aleatória sem máscara', () => {
    const result = certidao.aleatoria(false);
    match(result, /^\d{32}$/, 'O número de certidão aleatória sem máscara deve ter 32 dígitos');
  });
});
