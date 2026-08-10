function getRandomOperators<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

export const operators: Record<string, number[]> = {
  Claro: [968, 973, 974, 975, 976, 991, 992, 993, 994],
  Oi: [984, 985, 986, 987, 988, 989],
  Tim: [969, 979, 980, 981, 982, 983],
  Vivo: [967, 971, 972, 995, 996, 997, 998, 999],
};

/**
 * Gera um código de operadora de celular aleatório.
 *
 * @param name - O nome da operadora (por exemplo, "Claro", "Oi", "Tim", "Vivo").
 * @returns O código de operadora gerado.
 * @example
 * console.log(codigoOperadora("Claro"));
 */
export function codigoOperadora(name?: string): number {
  const names = Object.keys(operators);
  const randCodes = operators[getRandomOperators(names)]!;
  if (name) {
    const codes = operators[name];
    if (codes) {
      return getRandomOperators(codes);
    }
    return getRandomOperators(randCodes);
  }
  return getRandomOperators(randCodes);
}
