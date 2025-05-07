/**
 * Retorna a descrição do gênero com base na sigla fornecida.
 *
 * @param {string} [input] - Sigla do gênero. Valores aceitos: 'm', 'f', 'i'.
 *   - 'm' para Masculino
 *   - 'f' para Feminino
 *   - 'i' para Intersexo
 *   - Se o `input` for `null`, omitido, ou qualquer outro valor não listado,
 *     a função retornará aleatoriamente "Masculino" ou "Feminino".
 *
 * @returns {string} - A descrição do gênero correspondente.
 *   - "Masculino" se input for 'm'.
 *   - "Feminino" se input for 'f'.
 *   - "Intersexo" se input for 'i'.
 *   - Aleatoriamente "Masculino" ou "Feminino" para outros casos.
 *
 * @example
 * console.log(genero('f'));  // Retorna: "Feminino"
 * console.log(genero('m'));  // Retorna: "Masculino"
 * console.log(genero('i'));  // Retorna: "Intersexo"
 * console.log(genero());     // Retorna aleatoriamente: "Masculino" ou "Feminino"
 * console.log(genero(null)); // Retorna aleatoriamente: "Masculino" ou "Feminino"
 * console.log(genero('x'));  // Retorna aleatoriamente: "Masculino" ou "Feminino"
 */
export function genero(input) {
  const generosMap = {
    m: 'Masculino',
    f: 'Feminino',
    i: 'Intersexo',
  };

  const inputNormalizado = typeof input === 'string' ? input.toLowerCase() : null;

  if (inputNormalizado === 'm') {
    return generosMap.m;
  }
  if (inputNormalizado === 'f') {
    return generosMap.f;
  }
  if (inputNormalizado === 'i') {
    return generosMap.i;
  }

  // Se input for null, omitido, ou qualquer outro valor não mapeado
  const randomChoice = Math.random() < 0.5 ? generosMap.f : generosMap.m;
  return randomChoice;
}