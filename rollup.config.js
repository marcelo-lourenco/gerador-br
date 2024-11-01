import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',  // Arquivo principal de entrada
  output: [
    {
      dir: 'dist/cjs', // Diretório de saída para CommonJS
      format: 'cjs',
      entryFileNames: '[name].cjs', // Mantém o nome do arquivo original
      exports: 'auto',
      preserveModules: true, // Preserva a estrutura dos módulos
      preserveModulesRoot: 'src', // Diretório base que será mantido
    },
    {
      dir: 'dist/mjs', // Diretório de saída para ES Modules
      format: 'es',
      entryFileNames: '[name].mjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    {
      file: 'temp/gerador-br.min.js',
      format: 'cjs',  // Gera CommonJS
      exports: 'auto'
    },
    /*
    {
      file: 'dist/index.cjs',
      format: 'cjs',  // Gera CommonJS
      exports: 'auto'
    },
    {
      file: 'dist/index.mjs',
      format: 'es',  // Gera ESModule
    }
    */
  ],
  plugins: [
    resolve(),  // Resolve módulos de node_modules
    commonjs()  // Converte pacotes CommonJS para ESModules
  ]
};
