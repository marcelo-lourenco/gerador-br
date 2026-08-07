/**
 * Retorna a descrição do gênero com base na sigla fornecida.
 *
 * @param input - Sigla do gênero. Valores aceitos: 'm', 'f', 'i'.
 * @returns A descrição do gênero correspondente.
 * @example
 * console.log(genero('f'));  // "Feminino"
 * console.log(genero('m'));  // "Masculino"
 * console.log(genero('i'));  // "Intersexo"
 * console.log(genero());     // "Masculino" ou "Feminino"
 */
export function genero(input?: string | null | any): string {
  const generosMap: Record<string, string> = {
    m: 'Masculino',
    f: 'Feminino',
    i: 'Intersexo',
  };

  const inputNormalizado = typeof input === 'string' ? input.toLowerCase() : null;

  if (inputNormalizado === 'm') {
    return generosMap.m!;
  }
  if (inputNormalizado === 'f') {
    return generosMap.f!;
  }
  if (inputNormalizado === 'i') {
    return generosMap.i!;
  }

  const randomChoice = Math.random() < 0.5 ? generosMap.f! : generosMap.m!;
  return randomChoice;
}
