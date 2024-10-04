import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { palavra, sentenca, paragrafo } from '../src/generators/texto.js';

describe('Tests for text generation functions', () => {
  test('Should return a random word from the word list', () => {
    const result = palavra();
    strictEqual(typeof result, 'string');
  });

  test('Should generate a sentence with the default number of words (10 to 20)', () => {
    const result = sentenca();
    const wordCount = result.split(' ').length;
    strictEqual(wordCount >= 10 && wordCount <= 20, true, `Sentence contains ${wordCount} words`);
    strictEqual(result.endsWith('.'), true, 'Sentence should end with a period');
  });

  test('Should generate a sentence with the exact number of words provided', () => {
    const wordCount = 15;
    const result = sentenca(wordCount);
    const generatedWordCount = result.split(' ').length;
    strictEqual(generatedWordCount, wordCount, `Sentence contains ${generatedWordCount} words`);
  });

  test('Should generate a paragraph with 1 sentence and a random number of words', () => {
    const result = paragrafo();
    const sentenceCount = result.split('\n').length;
    strictEqual(sentenceCount, 1, 'Paragraph should contain 1 sentence');
    strictEqual(result.endsWith('.'), true, 'Paragraph should end with a period');
  });

  test('Should generate a paragraph with 3 sentences and the default number of words per sentence', () => {
    const sentenceCount = 3;
    const result = paragrafo(sentenceCount);
    const generatedSentenceCount = result.split('\n').length;
    strictEqual(generatedSentenceCount, sentenceCount, `Paragraph contains ${generatedSentenceCount} sentences`);
  });

  test('Should generate a paragraph with 2 sentences and 8 words per sentence', () => {
    const sentenceCount = 2;
    const wordCount = 8;
    const result = paragrafo(sentenceCount, wordCount);
    const sentences = result.split('\n');
    strictEqual(sentences.length, sentenceCount, `Paragraph contains ${sentences.length} sentences`);
    sentences.forEach((sentence) => {
      const generatedWordCount = sentence.split(' ').length;
      strictEqual(generatedWordCount, wordCount, `Sentence contains ${generatedWordCount} words`);
    });
  });
});
