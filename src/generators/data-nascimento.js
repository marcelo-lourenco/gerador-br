/**
 * Gera uma data de nascimento aleatória com base nos parâmetros fornecidos.
 *
 * @param {number | [number, number]} [ageOrRange] - Pode ser:
 *   1. Uma idade específica (número)
 *   2. Um intervalo de idades [idadeMin, idadeMax]
 *   3. Se omitido, usa o intervalo padrão de 18 a 80 anos
 * @returns {string} Data de nascimento no formato DD/MM/YYYY
 *
 * @example
 * console.log(dataNascimento());         // Data entre 18-80 anos
 * console.log(dataNascimento(25));       // Data de quem tem exatamente 25 anos
 * console.log(dataNascimento([30, 40])); // Data entre 30-40 anos
 */
export function dataNascimento(ageOrRange) {
  let minAge;
  let maxAge;

  if (typeof ageOrRange === 'number') {
    // Specific age provided
    minAge = maxAge = ageOrRange;
  } else if (Array.isArray(ageOrRange)) {
    // Age range provided
    [minAge, maxAge] = ageOrRange;
    if (minAge > maxAge) {
      [minAge, maxAge] = [maxAge, minAge]; // Ensure min is smaller than max
    }
  } else {
    // Default case (18-80 years)
    minAge = 18;
    maxAge = 80;
  }

  // Calculate days corresponding to ages
  const minDays = minAge * 365;
  const maxDays = maxAge * 365;

  // Generate random number within the day range
  const randomAgeInDays = Math.floor(Math.random() * (maxDays - minDays + 1)) + minDays;

  // Calculate birth date
  const today = new Date();
  const birthDate = new Date(today.getTime() - randomAgeInDays * 24 * 60 * 60 * 1000);

  // Format date as DD/MM/YYYY
  const day = String(birthDate.getDate()).padStart(2, '0');
  const month = String(birthDate.getMonth() + 1).padStart(2, '0');
  const year = birthDate.getFullYear();

  return `${day}/${month}/${year}`;
}
