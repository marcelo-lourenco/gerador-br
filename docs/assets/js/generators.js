// Mostrar o botão "Voltar ao Topo" ao rolar a página
window.addEventListener('scroll', function () {
  const backToTopButton = document.querySelector('.back-to-top');
  if (backToTopButton) {
    if (window.scrollY > 500) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  }
});


const inputFields = document.querySelectorAll('input', 'textarea');
inputFields.forEach(inputField => {
  inputField.addEventListener('focus', function () {
    inputField.setAttribute('placeholder', ' ');
  });
  inputField.addEventListener('blur', function () {
    inputField.setAttribute('placeholder', '');
  });
});

function adjustTextareaHeight(textarea) {
  textarea.style.height = 'auto'; // Reseta a altura para calcular corretamente
  textarea.style.height = textarea.scrollHeight + 'px'; // Define a altura baseada no conteúdo
}

function copy(inputId, messageId = 'msgCopiado') {
  const inputField = document.getElementById(inputId);

  if (inputField) {
    const inputText = inputField.value;
    navigator.clipboard.writeText(inputText).then(() => {
      const mensagem = document.getElementById(messageId);
      if (mensagem) {
        mensagem.style.display = 'inline-block';
        mensagem.classList.add('show');

        setTimeout(() => {
          mensagem.classList.remove('show');
          setTimeout(() => {
            mensagem.style.display = 'none';
          }, 300);
        }, 1500);
      }
    }).catch(error => {
      console.error('Erro ao copiar o texto:', error);
    });
  }
}

function showElement(elements) {
  if (!elements) return;
  if (Array.isArray(elements)) {
    elements.forEach(element => {
      if (!element) return;
      // Se for string (id), pega o elemento
      if (typeof element === 'string') {
        const el = document.getElementById(element);
        if (el) el.classList.remove('d-none');
      } else if (element instanceof HTMLElement) {
        element.classList.remove('d-none');
      }
    });
  } else {
    // Se for string (id), pega o elemento
    if (typeof elements === 'string') {
      const el = document.getElementById(elements);
      if (el) el.classList.remove('d-none');
    } else if (elements instanceof HTMLElement) {
      elements.classList.remove('d-none');
    }
  }
}

//** Geradores **************************/


const siglasUF = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
];

let sex = '';
let state = '';
let bank = '';

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function isMask() {
   return document.getElementById('maskSwitch').checked;
}


// Função para detectar se está na página Painel Completo de Geradores
function isFullGenerators() {
  // Verifica se existe o formulário do painel completo
  return !!document.getElementById('panel-generator-form');
}

// Adapte as funções de geração para não copiar automaticamente no Painel Completo
function autoCopy(inputId, msgId, divCopyId) {
  showElement(divCopyId)
  if (!isFullGenerators()) {
    copy(inputId, msgId);
  }
}

function gerarCpf() {
  document.getElementById('fldCpf').value = cpf(isMask(), state);
  autoCopy('fldCpf', 'msgCopiadoCpf', 'divCopyCpf');
}


function gerarCnh() {
  document.getElementById('fldCnh').value = cnh();
  autoCopy('fldCnh', 'msgCopiadoCnh', 'divCopyCnh');
}

function gerarCnhCategoria() {
  document.getElementById('fldCatCnh').value = cnhCategoria();
  autoCopy('fldCatCnh', 'msgCopiadoCatCnh', 'divCopyCatCnh');
}

function gerarRg() {
  document.getElementById('fldRg').value = rg(isMask());
  autoCopy('fldRg', 'msgCopiadoRg', 'divCopyRg');
}

function gerarCns() {
  document.getElementById('fldCns').value = cns(isMask());
  autoCopy('fldCns', 'msgCopiadoCns', 'divCopyCns');
}

function gerarPis() {
  document.getElementById('fldPis').value = pis(isMask());
  autoCopy('fldPis', 'msgCopiadoPis', 'divCopyPis');
}

function gerarTituloEleitor() {
  document.getElementById('fldTituloEleitor').value = tituloEleitor(isMask(),state);
  autoCopy('fldTituloEleitor', 'msgCopiadoTituloEleitor', 'divCopyTituloEleitor');
}

function gerarPassaporte() {
  document.getElementById('fldPassaporte').value = passaporte();
  autoCopy('fldPassaporte', 'msgCopiadoPassaporte', 'divCopyPassaporte');
}

function gerarCertidao() {
  document.getElementById('fldCertidaoNascimento').value = certidao.nascimento(isMask());
  document.getElementById('fldCertidaoCasamento').value = certidao.casamento(isMask());
  document.getElementById('fldCertidaoObito').value = certidao.obito(isMask());
  autoCopy('fldCertidaoNascimento', 'msgCopiadoCertidaoNascimento', 'divCopyCertidaoNascimento');
  autoCopy('fldCertidaoCasamento', 'msgCopiadoCertidaoCasamento', 'divCopyCertidaoCasamento');
  autoCopy('fldCertidaoObito', 'msgCopiadoCertidaoObito', 'divCopyCertidaoObito');
}

function gerarCnpj() {
  document.getElementById('fldCnpj').value = cnpj(isMask());
  autoCopy('fldCnpj', 'msgCopiadoCnpj', 'divCopyCnpj');
}

function gerarCnpjAlfanumerico() {
  document.getElementById('fldCnpjAlfanumerico').value = cnpjAlfanumerico(isMask());
  autoCopy('fldCnpjAlfanumerico', 'msgCopiadoCnpjAlfanumerico', 'divCopyCnpjAlfanumerico');
}

function gerarInscricaoEstadual() {
  document.getElementById('fldInscricaoEstadual').value = inscricaoEstadual(state);
  autoCopy('fldInscricaoEstadual', 'msgCopiadoInscricaoEstadual', 'divCopyInscricaoEstadual');
}

function gerarNomeEmpresa() {
  document.getElementById('fldNomeEmpresa').value = nomeEmpresa();
  autoCopy('fldNomeEmpresa', 'msgCopiadoNomeEmpresa', 'divCopyNomeEmpresa');
}


function gerarBanco() {
  const bnc = banco();
  document.getElementById('fldCodigoBanco').value = bnc.codigoBanco;
  document.getElementById('fldNomeBanco').value = bnc.nomeBanco;
  document.getElementById('fldRazaoSocial').value = bnc.razaoSocial;
  document.getElementById('fldISPB').value = bnc.ispb;
  if (!isFullGenerators()) {
    showElement([divCopyCodigoBanco, divCopyNomeBanco, divCopyRazaoSocial, divCopyISPB]);
  }
}

function gerarCartao() {
  const cc = cartaoCredito(isMask());
  document.getElementById('fldNumeroCartao').value = cc.numero;
  document.getElementById('fldBandeira').value = cc.bandeira;
  document.getElementById('fldCVV').value = cc.cvv;
  document.getElementById('fldDataExpiracao').value = cc.dataExpiracao;
  document.getElementById('fldNomeTitular').value = cc.nomeTitular;
  if (!isFullGenerators()) {
    showElement([divCopyNumeroCartao, divCopyBandeira, divCopyCVV, divCopyDataExpiracao, divCopyNomeTitular]);
  }
  autoCopy('fldNumeroCartao', 'msgCopiadoNumeroCartao', 'divCopyNumeroCartao');
  autoCopy('fldBandeira', 'msgCopiadoBandeira', 'divCopyBandeira');
  autoCopy('fldCVV', 'msgCopiadoCVV', 'divCopyCVV');
  autoCopy('fldDataExpiracao', 'msgCopiadoDataExpiracao', 'divCopyDataExpiracao');
  autoCopy('fldNomeTitular', 'msgCopiadoNomeTitular', 'divCopyNomeTitular');
}

function gerarContaBancaria() {
  const cb = contaBancaria(bank);
  document.getElementById('fldCodigoBanco').value = cb.codigoBanco;
  document.getElementById('fldNomeBanco').value = cb.nomeBanco;
  document.getElementById('fldAgencia').value = cb.agencia;
  document.getElementById('fldAgenciaDv').value = cb.agenciaDv;
  document.getElementById('fldConta').value = cb.conta;
  document.getElementById('fldContaDv').value = cb.contaDv;
  if (!isFullGenerators()) {
    showElement([divCopyCodigoBanco, divCopyNomeBanco, divCopyAgencia, divCopyAgenciaDv, divCopyConta, divCopyContaDv]);
  }
  autoCopy('fldCodigoBanco', 'msgCopiadoCodigoBanco', 'divCopyCodigoBanco');
  autoCopy('fldNomeBanco', 'msgCopiadoNomeBanco', 'divCopyNomeBanco');
  autoCopy('fldAgencia', 'msgCopiadoAgencia', 'divCopyAgencia');
  autoCopy('fldAgenciaDv', 'msgCopiadoAgenciaDv', 'divCopyAgenciaDv');
  autoCopy('fldConta', 'msgCopiadoConta', 'divCopyConta');
  autoCopy('fldContaDv', 'msgCopiadoContaDv', 'divCopyContaDv');
}

function gerarCep() {
  document.getElementById('fldCep').value = cep(isMask(), state);
  autoCopy('fldCep', 'msgCopiadoCep', 'divCopyCep');
}

function gerarEndereco() {
  const end = endereco(isMask(), state);
  document.getElementById('fldLogradouro').value = end.logradouro;
  document.getElementById('fldNumero').value = end.numero;
  /* document.getElementById('fldComplemento').value = (end.complemento || 'N/A'); */
  document.getElementById('fldBairro').value = end.bairro;
  document.getElementById('fldLocalidade').value = end.localidade;
  document.getElementById('fldEstado').value = end.estado;
  if (!isFullGenerators()) {
    showElement([divCopyLogradouro, divCopyNumero, divCopyComplemento, divCopyBairro, divCopyLocalidade, divCopyEstado]);
  }
  autoCopy('fldLogradouro', 'msgCopiadoLogradouro', 'divCopyLogradouro');
  autoCopy('fldNumero', 'msgCopiadoNumero', 'divCopyNumero');
  /* autoCopy('fldComplemento', 'msgCopiadoComplemento', 'divCopyComplemento'); */
  autoCopy('fldBairro', 'msgCopiadoBairro', 'divCopyBairro');
  autoCopy('fldLocalidade', 'msgCopiadoLocalidade', 'divCopyLocalidade');
  autoCopy('fldEstado', 'msgCopiadoEstado', 'divCopyEstado');
}

function gerarPlacaAntiga() {
  document.getElementById('fldPlacaAntiga').value = placaAntiga(isMask());
  autoCopy('fldPlacaAntiga', 'msgCopiadoPlacaAntiga', 'divCopyPlacaAntiga');
}

function gerarPlacaMercosul() {
  document.getElementById('fldPlacaMercosul').value = placaMercosul(isMask());
  autoCopy('fldPlacaMercosul', 'msgCopiadoPlacaMercosul', 'divCopyPlacaMercosul');
}

function gerarRenavam() {
  document.getElementById('fldRenavam').value = renavam();
  autoCopy('fldRenavam', 'msgCopiadoRenavam', 'divCopyRenavam');
}

function gerarSentenca() {
  document.getElementById('fldSentenca').value = sentenca();
  autoCopy('fldSentenca', 'msgCopiadoSentenca', 'divCopySentenca');
}

function gerarParagrafos() {
  document.getElementById('fldParagrafos').value = paragrafo(5, 8);
  autoCopy('fldParagrafos', 'msgCopiadoParagrafos', 'divCopyParagrafos');
}


function gerarNome() {
  document.getElementById('fldNome').value = nome.aleatorioCompleto();
  autoCopy('fldNome', 'msgCopiadoNome', 'divCopyNome');
}

function gerarPai() {
  document.getElementById('fldPai').value = nome.paiCompleto('m');
  autoCopy('fldPai', 'msgCopiadoPai', 'divCopyPai');
}

function gerarMae() {
  document.getElementById('fldMae').value = nome.maeCompleto('f');
  autoCopy('fldMae', 'msgCopiadoMae', 'divCopyMae');
}

function gerarNascimento() {
  document.getElementById('fldNascimento').value = dataNascimento([18, 50]);
  autoCopy('fldNascimento', 'msgCopiadoNascimento', 'divCopyNascimento');
}

function gerarRacaCor() {
  document.getElementById('fldRacaCor').value = corPele();
  autoCopy('fldRacaCor', 'msgCopiadoRacaCor', 'divCopyRacaCor');
}

function gerarGenero() {
  document.getElementById('fldGenero').value = genero(sex);
  autoCopy('fldGenero', 'msgCopiadoGenero', 'divCopyGenero');
}

function gerarOrientacaoSexual() {
  document.getElementById('fldOrientacaoSexual').value = orientacaoSexual();
  autoCopy('fldOrientacaoSexual', 'msgCopiadoOrientacaoSexual', 'divCopyOrientacaoSexual');
}

function gerarIdentidadeGenero() {
  document.getElementById('fldIdentidadeGenero').value = identidadeGenero();
  autoCopy('fldIdentidadeGenero', 'msgCopiadoIdentidadeGenero', 'divCopyIdentidadeGenero');
}

function gerarTipoSanguineo() {
  document.getElementById('fldTipoSanguineo').value = tipoSanguineo();
  autoCopy('fldTipoSanguineo', 'msgCopiadoTipoSanguineo', 'divCopyTipoSanguineo');
}

function gerarApelido() {
  document.getElementById('fldApelido').value = apelido();
  autoCopy('fldApelido', 'msgCopiadoApelido', 'divCopyApelido');
}

// Contato
function gerarEmail() {
  document.getElementById('fldEmail').value = email();
  autoCopy('fldEmail', 'msgCopiadoEmail', 'divCopyEmail');
}

function gerarCelular() {
  document.getElementById('fldCelular').value = celular(mask,state);
  autoCopy('fldCelular', 'msgCopiadoCelular', 'divCopyCelular');
}

function gerarTelefone() {
  document.getElementById('fldTelefone').value = telefone(mask,state);
  autoCopy('fldTelefone', 'msgCopiadoTelefone', 'divCopyTelefone');
}

// Atualize a função gerarTodos para chamar os novos geradores:
function gerarTodos() {
  sex = document.getElementById('fldSex')?.value || rand(['f', 'm', 'i']);
  state = document.getElementById('fldState')?.value || rand(siglasUF);
  bank = document.getElementById('fldBank')?.value || rand(['Banco do Brasil', 'Bradesco', 'Caixa', 'Citibank', 'HSBC', 'Itau', 'Santander']);
  mask = document.getElementById('maskSwitch')?.checked ?? true;

  gerarCpf();
  gerarRg();
  gerarCnh();
  gerarCnhCategoria();
  gerarTituloEleitor();
  gerarPis();
  gerarCns();
  gerarPassaporte();
  gerarCertidao();
  /* gerarCartao(); */
  gerarContaBancaria();
  gerarCep();
  gerarEndereco();
  /* gerarBanco(); */
  gerarCnpj();
  gerarCnpjAlfanumerico();
  gerarInscricaoEstadual();
  gerarNomeEmpresa();
  gerarPlacaAntiga();
  gerarPlacaMercosul();
  gerarRenavam();

  // Identificação
  gerarNome();
  gerarPai();
  gerarMae();
  gerarNascimento();
  gerarRacaCor();
  gerarGenero();
  gerarOrientacaoSexual();
  gerarIdentidadeGenero();
  gerarTipoSanguineo();
  gerarApelido();

  // Contato
  gerarEmail();
  gerarCelular();
  gerarTelefone();
  // Adicione outras funções conforme necessário
}