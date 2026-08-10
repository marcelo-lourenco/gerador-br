# Registro de Alterações

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## 2.0.0 (2026-08-07)

### 🚀 Reestruturação Total da Plataforma & Modernização

* **Migração Completa para TypeScript**: Código fonte e suíte de testes convertidos para TypeScript nativo (`.ts`).
* **Arquitetura Co-localizada**: Organização de geradores e testes unitários em `src/<modulo>/index.ts` e `src/<modulo>/index.test.ts` (alinhado com `validador-br`).
* **Migração para `pnpm`**: Substituição do `npm` pelo `pnpm` como gerenciador de pacotes oficial.
* **Build de Alta Performance (`tsup`)**: Substituição do Rollup pelo `tsup`, gerando bundles otimizados ES Modules (`dist/index.js`), CommonJS (`dist/index.cjs`) e tipos automáticos (`dist/index.d.ts`).
* **Linter & Formatter (`@biomejs/biome`)**: Substituição do ESLint pelo Biome.
* **Test Runner Nativo (`node --test` + `tsx`)**: Execução nativa de testes com suporte a TypeScript e relatório de cobertura.
* **Arquivos de Exemplo em `sample/`**: Adicionados scripts de demonstração `sample/example.js` (ESM) e `sample/example.cjs` (CommonJS).
* **Pipelines de CI/CD**: Atualizados workflows em `.github/workflows/ci.yml` e `.github/workflows/release.yml`.
* **Atualização de Links e Documentação**: Atualizadas todas as referências para o novo portal da documentação oficial (`box4.dev`).
* **Configuração do VS Code**: Adicionadas configurações integradas do Biome em `.vscode/settings.json` para auto-formatação ao salvar.
* **Templates de Issue & Arquivos de Projeto**: Reestruturados os formulários do GitHub (`bug_report.yml`, `feature_request.yml`) e refinados os arquivos `.gitignore`, `.npmignore` e `.editorconfig`.

---

## 1.2.5 (2026-08-11)

### Deprecated

* [DEPRECATED] tranfere o pacote para a organização @box4dev/gerador-br

## 1.2.4 (2025-08-28 )

###  Corrige Funcionalidade 

Gerador de CNPJ Alfanumérico

## 1.2.3 (2025-05-13)

### Adiciona Funcionalidade

* Gerador de Nome de Empresa

---

## 1.2.2 (2025-05-08)

### Adiciona Funcionalidades

* Gerador de Gênero
* Gerador de Orientação Sexual
* Gerador de Identidade de Gênero

---

## 1.2.1 (2025-05-06)

### Adiciona Funcionalidade

* Adiciona Recursos para Typescript

---

## 1.2.0 (2025-05-03)

### Adiciona Funcionalidade

* Gerador de CNPJ Alfanumérico

### Refatora funcionalidades

* Converte a chamada de todos os geradores para função

---

## 1.1.3 (2025-02-04)

### Adiciona recurso

* Adiciona types para typescript

---

## 1.1.1 (2024-11-13)

### Adiciona Funcionalidades

* Gerador de Certidão (Nascimento, Casamento e Óbito)

---

## 1.1.0 (2024-10-18)

### Adiciona Dependência

* Adicionado Rollup como ferramenta de build para empacotamento do projeto.
* Configurado Rollup para gerar builds nos formatos CommonJS e ESModule.
* Melhorado o processo de build para melhor performance e compatibilidade com diferentes sistemas de módulos.

---

## 1.0.6 (2024-10-09)

### Adiciona Funcionalidades

* Gerador de Escolaridade
* Gerador de Profissão

---

## 1.0.5 (2024-10-06)

### Adiciona Funcionalidades

* Gerador de Inscrição Estadual

---

## 1.0.4 (2024-09-30)

### Adiciona Funcionalidades

* Gerador de Texto

---

## 1.0.3 (2024-08-22)

### Adiciona Funcionalidades

* Gerador de Banco
* Gerador de Conta Bancária

---

## 1.0.2 (2024-08-15)

### Adiciona Funcionalidades

* Gerador de Cartão de Crédito
* Gerador de Celular
* Gerador de Telefone

### Adiciona Arquivos

* CHANGELOG.md
* CODE_OF_CONDUCT.md
* LICENSE.md

---

## 1.0.1 (2024-08-13)

### Adiciona Funcionalidades

* Gerador de DDD
* Gerador de Operadoras
* Gerador de CEP

---

## 1.0.0 (2024-08-11)

### Adiciona Funcionalidades

* Gerador de CPF
* Gerador de CNPJ
* Gerador de RG
* Gerador de CNH
* Gerador de Categoria CNH
* Gerador de PIS
* Gerador de Passaporte
* Gerador de Título de Eleitor
* Gerador de CNS (Cartão Nacional Saúde)
* Gerador de Nomes/Apelidos
* Gerador de Gênero
* Gerador de Endereço
* Gerador de E-mail
* Gerador de Data de Nascimento
* Gerador de RENAVAM
* Gerador de Placa veicular

### Adiciona Arquivos de Dados

* db-bancos.js
* db-cep.js
* db-general

### Construção do pacote

* arquivos:
  * index.js, index-teste.js, readme.md,
  * .gitignore, .eslintrc, .editorconig e .vscode.settings.json
* dependências:
  * eslint, eslint-config-airbnb-base e eslint-plugin-import
