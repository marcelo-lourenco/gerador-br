/**
 * Gera uma data de nascimento aleatória com base nos parâmetros fornecidos.
 *
 * @param ageOrRange - Idade específica ou intervalo [idadeMin, idadeMax]
 * @returns Data de nascimento no formato DD/MM/YYYY
 * @example
 * console.log(dataNascimento()); // Data entre 18-80 anos
 * console.log(dataNascimento(25)); // Data de quem tem 25 anos
 * console.log(dataNascimento([30, 40])); // Data entre 30-40 anos
 */
export function dataNascimento(ageOrRange?: number | [number, number]): string {
  let minAge: number;
  let maxAge: number;

  if (typeof ageOrRange === 'number') {
    minAge = maxAge = ageOrRange;
  } else if (Array.isArray(ageOrRange)) {
    minAge = ageOrRange[0]!;
    maxAge = ageOrRange[1]!;
    if (minAge > maxAge) {
      [minAge, maxAge] = [maxAge, minAge];
    }
  } else {
    minAge = 18;
    maxAge = 80;
  }

  const minDays = minAge * 365;
  const maxDays = maxAge * 365;

  const randomAgeInDays = Math.floor(Math.random() * (maxDays - minDays + 1)) + minDays;

  const today = new Date();
  const birthDate = new Date(today.getTime() - randomAgeInDays * 24 * 60 * 60 * 1000);

  const day = String(birthDate.getDate()).padStart(2, '0');
  const month = String(birthDate.getMonth() + 1).padStart(2, '0');
  const year = birthDate.getFullYear();

  return `${day}/${month}/${year}`;
}
