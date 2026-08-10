import { palavras } from '../data/db-general.js';

/**
 * Gera uma palavra aleatória.
 * @returns Uma palavra aleatória.
 */
export function palavra(): string {
  return palavras[Math.floor(Math.random() * palavras.length)]!;
}

/**
 * Gera uma sentença aleatória.
 * @param qttWords - Quantidade de palavras na sentença.
 * @returns Uma sentença aleatória.
 */
export function sentenca(qttWords?: number): string {
  const numberOfWords = qttWords || Math.floor(Math.random() * 10) + 10;
  let sentenceStr = Array.from({ length: numberOfWords }, () => palavra()).join(' ');
  sentenceStr = `${sentenceStr.charAt(0).toUpperCase() + sentenceStr.slice(1)}.`;
  return sentenceStr;
}

/**
 * Gera um parágrafo aleatório.
 * @param qttParagraph - Quantidade de parágrafos.
 * @param qttWords - Quantidade de palavras por sentença.
 * @returns Um parágrafo aleatório.
 */
export function paragrafo(qttParagraph = 1, qttWords?: number): string {
  return Array.from({ length: qttParagraph }, () => sentenca(qttWords))
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('\n')
    .trim();
}
