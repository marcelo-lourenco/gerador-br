## Pacote Generator

Este pacote fornece uma coleção de funções para gerar dados aleatórios, como:

- **Endereços:** Gera endereços aleatórios com máscara opcional e filtragem por estado.
- **CPF:** Gera números de CPF aleatórios com máscara opcional e seleção de estado.
- **CNPJ:** Gera números de CNPJ aleatórios com máscara opcional.
- **RG:** Gera números de RG aleatórios com máscara opcional.

### Instalação

```bash
npm install generator-package
```

## Uso

```javascript
import gerar from 'generator-package';

// Gerar um endereço aleatório com CEP mascarado
console.log(gerar.endereco); 

// Gerar um endereço aleatório com CEP mascarado e estado "SP"
console.log(gerar.enderecoFnc(true, "SP"));

// Gerar um CPF aleatório com máscara
console.log(gerar.cpf(true));

// Gerar um CNPJ aleatório sem máscara
console.log(gerar.cnpj(false));

// Gerar um RG aleatório com máscara
console.log(gerar.rg(true));
```