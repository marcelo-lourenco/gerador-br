import { ok, strictEqual } from 'node:assert';
import { describe, test } from 'node:test';
import { palavras } from '../data/db-general.js';
import { palavra, paragrafo, sentenca } from './index.js';

describe('Tests for text generation functions', () => {
  test('Should return a random word from the word list', () => {
    const word = palavra();
    strictEqual(typeof word, 'string');
    ok(palavras.includes(word as any));
  });

  test('Should generate a sentence with the default number of words (10 to 20)', () => {
    const sentenceResult = sentenca();
    const wordsInSentence = sentenceResult.slice(0, -1).split(' ');
    ok(wordsInSentence.length >= 10 && wordsInSentence.length <= 20);
    strictEqual(sentenceResult.endsWith('.'), true);
  });

  test('Should generate a sentence with the exact number of words provided', () => {
    const exactWordCount = 5;
    const sentenceResult = sentenca(exactWordCount);
    const wordsInSentence = sentenceResult.slice(0, -1).split(' ');
    strictEqual(wordsInSentence.length, exactWordCount);
    strictEqual(sentenceResult.endsWith('.'), true);
  });

  test('Should generate a paragraph with 1 sentence and a random number of words', () => {
    const paragraphResult = paragrafo();
    const sentences = paragraphResult.split('\n');
    strictEqual(sentences.length, 1);
  });

  test('Should generate a paragraph with 3 sentences and the default number of words per sentence', () => {
    const paragraphResult = paragrafo(3);
    const sentences = paragraphResult.split('\n');
    strictEqual(sentences.length, 3);
  });

  test('Should generate a paragraph with 2 sentences and 8 words per sentence', () => {
    const paragraphResult = paragrafo(2, 8);
    const sentences = paragraphResult.split('\n');
    strictEqual(sentences.length, 2);
    sentences.forEach((s) => {
      const words = s.slice(0, -1).split(' ');
      strictEqual(words.length, 8);
    });
  });
});
