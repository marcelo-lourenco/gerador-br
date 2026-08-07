const n = () => Math.floor(Math.random() * 10);
const l = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));

/**
 * Gera uma placa de veículo aleatória no formato antigo (3 letras, 4 números).
 *
 * @param mask - Se `true`, a placa será retornada com hífen (XXX-9999).
 * @returns A placa de veículo gerada.
 * @example
 * console.log(placaAntiga(true)); // "ABC-1234"
 * console.log(placaAntiga(false)); // "ABC1234"
 */
export function placaAntiga(mask = false): string {
  const plate = `${l()}${l()}${l()}-${n()}${n()}${n()}${n()}`;
  return mask ? plate : plate.replace(/[^A-Z0-9]/g, '');
}

/**
 * Gera uma placa de veículo aleatória no formato Mercosul (3 letras, 1 número, 1 letra, 2 números).
 *
 * @param mask - Se `true`, a placa será retornada com hífen (XXX-9X99).
 * @returns A placa de veículo gerada.
 * @example
 * console.log(placaMercosul(true)); // "ABC-1D23"
 * console.log(placaMercosul(false)); // "ABC1D23"
 */
export function placaMercosul(mask = false): string {
  const plate = `${l()}${l()}${l()}-${n()}${l()}${n()}${n()}`;
  return mask ? plate : plate.replace(/[^A-Z0-9]/g, '');
}
