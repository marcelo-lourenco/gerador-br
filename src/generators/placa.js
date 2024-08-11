let n = () => Math.floor(Math.random() * 10);
let l = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));

/**
 * Gera uma placa de veículo aleatória no formato antigo (3 letras, 4 números).
 *
 * @param {boolean} [mask=false] - Se `true`, a placa será retornada com a máscara de formatação (XXX-9999). Se `false`, a placa será retornada apenas com os dígitos e letras.
 * @returns {string} A placa de veículo gerada.
 * @example
 * // Placa com máscara
 * console.log(placaAntiga()); // "ABC-1234"
 *
 * // Placa sem máscara
 * console.log(placaAntiga(false)); // "ABC1234"
 */
export function placaAntiga(mask = false) {
  let plate = `${l()}${l()}${l()}-${n()}${n()}${n()}${n()}`;
  return mask ? plate : plate.replace(/[^A-Z0-9]/g, '');
}

/**
 * Gera uma placa de veículo aleatória no formato Mercosul (3 letras, 1 número, 1 letra, 2 números).
 *
 * @param {boolean} [mask=false] - Se `true`, a placa será retornada com a máscara de formatação (XXX-9X99). Se `false`, a placa será retornada apenas com os dígitos e letras.
 * @returns {string} A placa de veículo gerada.
 * @example
 * // Placa com máscara
 * console.log(placaMercosul()); // "ABC-1D23"
 *
 * // Placa sem máscara
 * console.log(placaMercosul(false)); // "ABC1D23"
 */
export function placaMercosul(mask = false) {
  let plate = `${l()}${l()}${l()}-${n()}${l()}${n()}${n()}`;
  return mask ? plate : plate.replace(/[^A-Z0-9]/g, '');
}
