/**
 * Gera uma data de nascimento aleatória.
 * A data de nascimento gerada será entre 18 e 80 anos atrás da data atual.
 * @returns {string} A data de nascimento gerada no formato DD/MM/AAAA.
 * @example
 * // Data de nascimento gerada
 * console.log(dataNascimento()); // "20/03/1980"
 */
export function dataNascimento() {
  // Generate a random number between 18 and 80 years ago
  const ageInDays = Math.floor(Math.random() * (80 * 365 - 18 * 365) + 18 * 365);
  const now = new Date();
  const birthDt = new Date(now.getTime() - ageInDays * 24 * 60 * 60 * 1000);
  const d = String(birthDt.getDate()).padStart(2, '0');
  const m = String(birthDt.getMonth() + 1).padStart(2, '0');
  const a = birthDt.getFullYear();
  return `${d}/${m}/${a}`;
}
