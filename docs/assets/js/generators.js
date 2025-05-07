
 // Mostrar o botão "Voltar ao Topo" ao rolar a página
 window.addEventListener('scroll', function () {
  const backToTopButton = document.querySelector('.back-to-top');
  if(backToTopButton){
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
  if (Array.isArray(elements)) {
    elements.forEach(element => {
      if (element) {
        element.classList.remove('d-none');
      }
    });
  } else if (elements) {
    elements.classList.remove('d-none');
  }
}

//** Geradores **************************/
const siglasUF = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
];

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function isChecked() {
  return document.getElementById('maskSwitch').checked;
}

function gerarCpf() {
  document.getElementById('fldCpf').value = cpf(isChecked());
  showElement(divCopy);
  copy('fldCpf', 'msgCopiado');
}


function gerarCnh() {
  document.getElementById('fldCnh').value = cnh();
  showElement(divCopy);
  copy('fldCnh', 'msgCopiado');
}

function gerarRg() {
  document.getElementById('fldRg').value = rg(isChecked());
  showElement(divCopy);
  copy('fldRg', 'msgCopiado');
}

function gerarCns() {
  document.getElementById('fldCns').value = cns(isChecked());
  showElement(divCopy);
  copy('fldCns', 'msgCopiado');
}

function gerarPis() {
  document.getElementById('fldPis').value = pis(isChecked());
  showElement(divCopy);
  copy('fldPis', 'msgCopiado');
}

function gerarTituloEleitor() {
  document.getElementById('fldTituloEleitor').value = tituloEleitor(isChecked());
  showElement(divCopy);
  copy('fldTituloEleitor', 'msgCopiado');
}

function gerarPassaporte() {
  document.getElementById('fldPassaporte').value = passaporte();
  showElement(divCopy);
  copy('fldPassaporte', 'msgCopiado');
}

function gerarCertidao() {
  document.getElementById('fldCertidaoNascimento').value = certidao.nascimento(isChecked());
  document.getElementById('fldCertidaoCasamento').value = certidao.casamento(isChecked());
  document.getElementById('fldCertidaoObito').value = certidao.obito(isChecked());
  showElement([divCopyNascimento,divCopyCasamento,divCopyObito]);
}

function gerarCnpj() {
  document.getElementById('fldCnpj').value = cnpj(isChecked());
  showElement(divCopy);
  copy('fldCnpj', 'msgCopiado');
}

function gerarCnpjAlfanumerico() {
  document.getElementById('fldCnpjAlfanumerico').value = cnpjAlfanumerico(isChecked());
  showElement(divCopy);
  copy('fldCnpjAlfanumerico', 'msgCopiado');
}

function gerarInscricaoEstadual() {
  document.getElementById('fldInscricaoEstadual').value = inscricaoEstadual();
  showElement(divCopy);
  copy('fldInscricaoEstadual', 'msgCopiado');
}

function gerarBanco() {
  const bnc = banco();
  document.getElementById('fldCodigoBanco').value = bnc.codigoBanco;
  document.getElementById('fldNomeBanco').value = bnc.nomeBanco;
  document.getElementById('fldRazaoSocial').value = bnc.razaoSocial;
  document.getElementById('fldISPB').value = bnc.ispb;
  showElement([divCopyCodigoBanco,divCopyNomeBanco,divCopyRazaoSocial,divCopyISPB]);
}

function gerarCartao() {
  const cc = cartaoCredito(isChecked());
  document.getElementById('fldNumeroCartao').value = cc.numero;
  document.getElementById('fldBandeira').value = cc.bandeira;
  document.getElementById('fldCVV').value = cc.cvv;
  document.getElementById('fldDataExpiracao').value = cc.dataExpiracao;
  document.getElementById('fldNomeTitular').value = cc.nomeTitular;
  showElement([divCopyNumeroCartao, divCopyBandeira, divCopyCVV, divCopyDataExpiracao, divCopyNomeTitular]);
}

function gerarContaBancaria() {
  const cb = contaBancaria();
  document.getElementById('fldCodigoBanco').value = cb.codigoBanco;
  document.getElementById('fldNomeBanco').value = cb.nomeBanco;
  document.getElementById('fldAgencia').value = cb.agencia;
  document.getElementById('fldAgenciaDv').value = cb.agenciaDv;
  document.getElementById('fldConta').value = cb.conta;
  document.getElementById('fldContaDv').value = cb.contaDv;
  showElement([divCopyCodigoBanco, divCopyNomeBanco, divCopyAgencia, divCopyAgenciaDv, divCopyConta, divCopyContaDv]);
}

function gerarCep() {
  document.getElementById('fldCep').value = cep(isChecked(), rand(siglasUF));
  showElement(divCopy);
  copy('fldCep', 'msgCopiado');
}

function gerarEndereco() {
  const end = endereco(isChecked(), rand(siglasUF));
  document.getElementById('fldLogradouro').value = end.logradouro;
  document.getElementById('fldNumero').value = end.numero;
  document.getElementById('fldComplemento').value = end.complemento;
  document.getElementById('fldBairro').value = end.bairro;
  document.getElementById('fldLocalidade').value = end.localidade;
  document.getElementById('fldEstado').value = end.estado;
  showElement([divCopyLogradouro,divCopyNumero,divCopyComplemento,divCopyBairro,divCopyLocalidade,divCopyEstado]);
}

function gerarPlacaAntiga() {
  document.getElementById('fldPlacaAntiga').value = placaAntiga(isChecked());
  showElement(divCopy);
  copy('fldPlacaAntiga', 'msgCopiado');
}

function gerarPlacaMercosul() {
  document.getElementById('fldPlacaMercosul').value = placaMercosul(isChecked());
  showElement(divCopy);
  copy('fldPlacaMercosul', 'msgCopiado');
}

function gerarRenavam() {
  document.getElementById('fldRenavam').value = renavam();
  showElement(divCopy);
  copy('fldRenavam', 'msgCopiado');
}

function gerarSentenca() {
  document.getElementById('fldSentenca').value = sentenca();
  showElement(divCopy);
  copy('fldSentenca', 'msgCopiado');
}

function gerarParagrafos() {
  document.getElementById('fldParagrafos').value = paragrafo(5,8);
  showElement(divCopy);
  copy('fldParagrafos', 'msgCopiado');
}
