/**
 * Retorna informações sobre o gênero com base na sigla ou descrição fornecida.
 *
 * @param {string} [input] - Sigla ou descrição do gênero. Pode ser:
 *   - Siglas: 'm', 'f', 'i'
 *   - Descrições: 'Masculino', 'Feminino', 'Intersexo'
 *   - Se não for fornecido ou inválido, retorna aleatoriamente 'm, Masculino' ou 'f, Feminino'.
 *
 * @returns {string} - Um objeto no formato `{sigla: <sigla>, descricao: <descricao>}`.
 *   - Exemplo: `{sigla: 'm', descricao: 'Masculino'}`
 *
 * @example
 * genero('f'); // Retorna: "{sigla: 'f', descricao: 'Feminino'}"
 * genero('m'); // Retorna: "{sigla: 'm', descricao: 'Masculino'}"
 * genero('i'); // Retorna: "{sigla: 'i', descricao: 'Intersexo'}"
 * genero('feminino'); // Retorna: "{sigla: 'f', descricao: 'Feminino'}"
 * genero('masculino'); // Retorna: "{sigla: 'm', descricao: 'Masculino'}"
 * genero(); // Retorna aleatoriamente: "{sigla: 'm', descricao: 'Masculino'}" ou "{sigla: 'f', descricao: 'Feminino'}"
 */
export function genero(input) {
  const generos = {
    m: 'Masculino',
    f: 'Feminino',
    i: 'Intersexo',
  };

  // Normaliza o input para comparação
  const inputNormalizado = input?.toLowerCase();

  // Verifica se o input é uma sigla válida
  if (inputNormalizado && generos[inputNormalizado]) {
    return `{sigla: ${inputNormalizado}, descricao: ${generos[inputNormalizado]}}`;
  }

  // Verifica se o input é uma descrição válida
  const sigla = Object.keys(generos).find((sg) => generos[sg].toLowerCase() === inputNormalizado);
  if (sigla) {
    return `{sigla: ${sigla}, descricao: ${generos[sigla]}}`;
  }

  // Se não receber uma sigla ou descrição válida, retorna aleatoriamente "m, Masculino" ou "f, Feminino"
  const siglas = ['m', 'f']; // Somente "m" e "f"
  const siglaAleatoria = siglas[Math.floor(Math.random() * siglas.length)];
  return `{sigla: ${siglaAleatoria}, descricao: ${generos[siglaAleatoria]}}`;
}

// Exemplos de uso:
// console.log(genero('m'));         // "m, Masculino"
// console.log(genero('f'));         // "f, Feminino"
// console.log(genero('i'));         // "i, Intersexo"
// console.log(genero('masculino')); // "m, Masculino"
// console.log(genero('feminino'));  // "f, Feminino"
// console.log(genero('intersexo'));  // "f, Feminino"
// console.log(genero());            // "m, Masculino" ou "f, Feminino" (aleatório se nenhum input fornecido)
