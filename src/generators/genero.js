export function obterGenero(input) {
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
// console.log(obterGenero('m'));         // "m, Masculino"
// console.log(obterGenero('f'));         // "f, Feminino"
// console.log(obterGenero('i'));         // "i, Intersexo"
// console.log(obterGenero('masculino')); // "m, Masculino"
// console.log(obterGenero('feminino'));  // "f, Feminino"
// console.log(obterGenero('intersexo'));  // "f, Feminino"
// console.log(obterGenero());            // "m, Masculino" ou "f, Feminino" (aleatório se nenhum input fornecido)
