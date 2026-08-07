// Exemplo de uso com CommonJS (require)
// Para executar: node sample/example.cjs (após pnpm run build)

const {
  gerar,
  cpf,
  cnpj,
  cnpjAlfanumerico,
  nome,
  banco,
  cartaoCredito,
  contaBancaria,
  certidao,
  placaMercosul,
} = require('../dist/index.cjs');

console.log('--- Testando gerador-br com CommonJS ---\n');

console.log('=== NAMED EXPORTS (Recomendado) ===');
console.log('CPF com máscara:', cpf(true));
console.log('CNPJ com máscara:', cnpj(true));
console.log('CNPJ Alfanumérico:', cnpjAlfanumerico(true));
console.log('Nome Completo:', nome.aleatorioCompleto());
console.log('Placa Mercosul:', placaMercosul(true));

console.log('\n=== OBJETO gerar (Namespace Centralizado) ===');
console.log('gerar.cpf():', gerar.cpf(true));
console.log('gerar.banco():', gerar.banco());
console.log('gerar.contaBancaria():', gerar.contaBancaria('Bradesco'));
console.log('gerar.cartaoCredito():', gerar.cartaoCredito(true, 'Maria Santos'));
console.log('gerar.certidao.nascimento():', gerar.certidao.nascimento(true));

console.log('\n------------------------------------------');
