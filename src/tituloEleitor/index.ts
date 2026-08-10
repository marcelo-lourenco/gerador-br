import { stateRand } from '../utils/index.js';

export const stateCodes: Record<string, string> = {
  AC: '24',
  AL: '17',
  AM: '22',
  AP: '25',
  BA: '05',
  CE: '07',
  DF: '20',
  ES: '14',
  GO: '10',
  MA: '11',
  MG: '02',
  MS: '19',
  MT: '18',
  PA: '13',
  PB: '12',
  PE: '08',
  PI: '15',
  PR: '06',
  RJ: '03',
  RN: '16',
  RO: '23',
  RR: '26',
  RS: '04',
  SC: '09',
  SE: '21',
  SP: '01',
  TO: '27',
};

function statesCode(state: string): string {
  return stateCodes[state] || stateCodes[stateRand]!;
}

/**
 * Calcula o módulo de um número para o Título de Eleitor.
 *
 * @param dv - O número a ser calculado.
 * @param state - O código do estado.
 * @returns O módulo ajustado.
 */
export function teDV(dv: number, state: string): number {
  let digito = dv;
  if (dv === 10) {
    digito = 0;
  } else if (dv === 0 && (state === '01' || state === '02')) {
    digito = 1;
  }
  return digito;
}

/**
 * Gera um número de Título de Eleitor aleatório.
 *
 * @param mask - Se `true`, o Título de Eleitor será retornado com a máscara (xxxx xxxx xxxx).
 * @param state - A sigla do estado para determinar a origem.
 * @returns O Título de Eleitor gerado.
 * @example
 * console.log(tituloEleitor());
 * console.log(tituloEleitor(true, 'SP'));
 */
export function tituloEleitor(mask?: boolean, state?: string): string {
  const r = () => Math.round(Math.random() * 9);

  const n = Array.from({ length: 8 }, r);
  const uf = state ? state.toUpperCase() : stateRand;
  const stateCode = statesCode(uf);
  const [n9Str, n10Str] = stateCode.split('');
  const n9 = Number(n9Str);
  const n10 = Number(n10Str);

  let d1 = n.reduce((acc, digit, index) => acc + digit * (index + 2), 0) % 11;
  d1 = teDV(d1, stateCode);

  let d2 =
    [n9, n10, d1].reduce((acc, digit, index) => acc + digit * (index === 2 ? 9 : index + 7), 0) %
    11;
  d2 = teDV(d2, stateCode);

  const vt = [...n, n9, n10, d1, d2].join('');
  return mask ? `${vt.slice(0, 4)} ${vt.slice(4, 8)} ${vt.slice(8)}` : vt;
}
