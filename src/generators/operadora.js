
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
* Gera um código de operadora de celular aleatório.
* ATENÇAO: DEVIDO A PORTABILIDADE, OS CÓDIGOS DE CELULARES REAIS PODEM NÃO PERTENCER MAIS A OPERADORA ORIGEM
* A função pode gerar um código de operadora aleatório ou um código específico de uma operadora fornecida.
*
* @param {string} [name] - O nome da operadora (por exemplo, "Claro", "Oi", "Tim", "Vivo"). Se não fornecido, um código de operadora aleatório será gerado.
* @returns {number} O código de operadora gerado.
* @example
* // Gera um código de operadora aleatório
* console.log(operadora()); // Pode retornar 968, 973, 984, 969, 967, etc.
*
* // Gera um código da Claro
* console.log(codigoOperadora("Claro")); // Pode retornar 968, 973, 974, 975, 976, 991, 992, 993 ou 994
*
* // Gera um código da Oi
* console.log(codigoOperadora("Oi")); // Pode retornar 984, 985, 986, 987, 988 ou 989
*
* // Gera um código da Tim
* console.log(codigoOperadora("Tim")); // Pode retornar 969, 979, 980, 981, 982 ou 983
*
* // Gera um código da Vivo
* console.log(codigoOperadora("Vivo")); // Pode retornar 967, 971, 972, 995, 996, 997, 998 ou 999
*
* // Gera um código de operadora aleatória (mesmo se o nome da operadora não for válido)
* console.log(codigoOperadora("blablabla")); // Pode retornar 968, 973, 984, 969, 967, etc.
*/
export function codigoOperadora(name) {
  const operators = {
    "Claro": [968, 973, 974, 975, 976, 991, 992, 993, 994],
    "Oi": [984, 985, 986, 987, 988, 989],
    "Tim": [969, 979, 980, 981, 982, 983],
    "Vivo": [967, 971, 972, 995, 996, 997, 998, 999]
  };

  const names = Object.keys(operators);
  const randCodes = operators[getRandom(names)];
  if (name) {
    const codes = operators[name];
    if (codes) {
      return getRandom(codes);
    } else {
      return getRandom(randCodes); // Operadora não encontrada
    }
  } else {
    return getRandom(randCodes);
  }
}
