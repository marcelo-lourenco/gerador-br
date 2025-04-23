// Tabela de valores para cálculo do DV (baseado no ASCII)
const charValues = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
  'A': 17, 'B': 18, 'C': 19, 'D': 20, 'E': 21, 'F': 22, 'G': 23, 'H': 24, 'I': 25,
  'J': 26, 'K': 27, 'L': 28, 'M': 29, 'N': 30, 'O': 31, 'P': 32, 'Q': 33, 'R': 34,
  'S': 35, 'T': 36, 'U': 37, 'V': 38, 'W': 39, 'X': 40, 'Y': 41, 'Z': 42
};

// Pesos para cálculo dos DVs (distribuídos de 2 a 9, da direita para esquerda)
const weights = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

/**
 * Gera um caractere alfanumérico aleatório (0-9 ou A-Z)
 * @returns {string} Caractere aleatório
 */
function randomChar() {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return chars.charAt(Math.floor(Math.random() * chars.length));
}

/**
 * Calcula o dígito verificador para um CNPJ alfanumérico
 * @param {string} cnpjBase - Os 12 caracteres base do CNPJ (sem DV)
 * @returns {string} Os dois dígitos verificadores
 */
function calculateDV(cnpjBase) {
  // Converte cada caractere para seu valor numérico
  const values = cnpjBase.split('').map(char => charValues[char]);

  // Cálculo do primeiro DV
  let sum1 = 0;
  for (let i = 0; i < 12; i++) {
    sum1 += values[i] * weights[i + 1]; // Pesos [5,4,3,2,9,8,7,6,5,4,3,2]
  }
  const dv1 = sum1 % 11 < 2 ? 0 : 11 - (sum1 % 11);

  // Cálculo do segundo DV (incluindo o primeiro DV)
  let sum2 = 0;
  for (let i = 0; i < 12; i++) {
    sum2 += values[i] * weights[i]; // Pesos [6,5,4,3,2,9,8,7,6,5,4,3]
  }
  sum2 += dv1 * weights[12]; // Peso 2 para o DV1
  const dv2 = sum2 % 11 < 2 ? 0 : 11 - (sum2 % 11);

  return `${dv1}${dv2}`;
}

/**
 * Formata o CNPJ com máscara (XX.XXX.XXX/XXXX-XX)
 * @param {string} cnpj - CNPJ sem formatação
 * @returns {string} CNPJ formatado
 */
function formatCNPJ(cnpj) {
  return cnpj.replace(
    /^(\w{2})(\w{3})(\w{3})(\w{4})(\w{2})$/,
    '$1.$2.$3/$4-$5'
  );
}

/**
 * Gera um CNPJ alfanumérico válido
 * @param {boolean} masked - Se true, retorna com máscara de formatação
 * @returns {string} CNPJ gerado
 */
function generateCNPJ(masked = false) {
  // Gera 12 caracteres alfanuméricos aleatórios
  let base = '';
  for (let i = 0; i < 12; i++) {
    base += randomChar();
  }

  // Calcula os dígitos verificadores
  const dv = calculateDV(base);
  const fullCNPJ = base + dv;

  return masked ? formatCNPJ(fullCNPJ) : fullCNPJ;
}

/**
 * Calcula o dígito verificador (DV) para um número de CNPJ.
 * @param {number} dv - O valor a ser calculado.
 * @returns {number} O dígito verificador calculado.
 */
function cnpjDV(dv) {
  const dvGen = 11 - (dv % 11);
  return (dvGen >= 10) ? 0 : dvGen;
}

/**
 * Gera um número de CNPJ aleatório (compatibilidade com versão anterior)
 * @param {boolean} mask - Se true, retorna com máscara de formatação
 * @returns {string} CNPJ gerado
 */
function cnpj(mask = false) {
  return generateCNPJ(mask);
}

// Exportação das funções
export { cnpjDV, cnpj, generateCNPJ };

// Exemplo de uso:
 console.log(generateCNPJ(true));  // CNPJ formatado
 console.log(generateCNPJ(false)); // CNPJ sem formatação
 console.log(cnpj(true));         // Usando a função de compatibilidade