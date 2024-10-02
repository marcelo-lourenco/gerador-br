import { palavras } from '../../data/db-general.js';

/**
 * Gera uma palavra aleatória.
 *
 * @returns {string} Uma palavra aleatória.
 * @example
 * // Gera uma palavra aleatória
 * console.log(palavra()); // Ex: "Lorem", "ipsum", "dolor", "sit", "amet"
 */
export function palavra() {
  return palavras[Math.floor(Math.random() * palavras.length)];
}

/**
 * Gera uma sentença aleatória.
 *
 * @param {number} [qttWords] - Quantidade de palavras na sentença. Se não for informado, será um número aleatório entre 10 e 20.
 * @returns {string} Uma sentença aleatória.
 * @example
 * // Gera uma sentença aleatória com quantidade de palavras aleatórias
 * console.log(sentenca()); // Ex: "Ea placeat, labore quidem, harum expedita fuga."
 *
 * // Gera uma sentença aleatória com a quantidade de palavras informada.
 * console.log(sentenca(10));
 * // Ex: "Dolorem sit modi deleniti nemo sint laborum vitae repellendus ipsa."
 */
export function sentenca(qttWords) {
  const numberOfWords = qttWords || Math.floor(Math.random() * 10) + 10;
  let sentence = Array.from({ length: numberOfWords }, () => palavra()).join(' ');
  sentence = `${sentence.charAt(0).toUpperCase() + sentence.slice(1)}.`;

  return `${sentence.replace(/,\.|\.\.|!\.|\?\./g, '.').trim()}`;
}

/**
 * Gera um parágrafo aleatório.
 *
 * @param {number} [qttParagraph=1] - Quantidade de parágrafos.
 * @param {number} [qttWords] - Quantidade de palavras por sentença. Se não for informado, será um número aleatório entre 10 e 20.
 * @returns {string} Um parágrafo aleatório.
 * @example
 * // Gera um parágrafo aleatório com quantidade de palavras aleatórias
 * console.log(paragrafo());
 * // Ex: "Recusandae. facilis consequuntur quae fuga. debitis quaerat architecto do placeat."
 *
 * // Gera um parágrafo com a quantidade de sentença informada, cada uma com quantidade de palavras aleatórias
 * console.log(paragrafo(3));
 * // Ex:
 * "Lorem ipsum dolor sit amet.
 * Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
 *
 * // Gera um parágrafo aleatório com quantidade de sentenças e de palavras informadas.
 * console.log(paragrafo(3, 8));
 * // Ex:
 * "Labore ipsa, eius dolore corporis ipsam doloremque nobis.
 * Enim facilis fuga. voluptatem debitis veniam, hic atque.
 * Voluptates fugiat nesciunt, numquam reprehenderit, quae commodo minus."
 */
export function paragrafo(qttParagraph = 1, qttWords) {
  return Array.from({ length: qttParagraph }, () => sentenca(qttWords))
    .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
    .join('\n')
    .trim();
}
