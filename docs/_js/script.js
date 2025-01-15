import { banco, cartaoCredito, contaBancaria, endereco } from './gerador-br.min.js';

/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
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
        mensagem.classList.add('mostrar');
        setTimeout(() => {
          mensagem.classList.remove('mostrar');
        }, 1500); // Esconde a mensagem após 1.5 segundos
      }
    }).catch(error => {
      console.error('Erro ao copiar o texto:', error);
    });
  }
}

const copyButtons = document.querySelectorAll(".icon-copy");
copyButtons.forEach(button => {
  button.addEventListener("click", function () {
    copy(button);
  });
});

function gerarEndereco() {
  const siglasEstados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
  ];

  function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const end = endereco(true, getRandom(siglasEstados));
  const fields = {
    'fldCep': end.cep,
    'fldLogradouro': end.logradouro,
    'fldNumero': end.numero,
    'fldBairro': end.bairro,
    'fldLocalidade': end.localidade,
    'fldUf': end.estado
  };

  for (const [id, value] of Object.entries(fields)) {
    document.getElementById(id).value = value;
  }
}

function gerarCartaoCredito() {
  const cc = cartaoCredito(true);
  const fields = {
    'fldCcNumero': cc.numero,
    'fldCcBandeira': cc.bandeira,
    'fldCcCvv': cc.cvv,
    'fldCcDataExpiracao':cc.dataExpiracao,
    // FIXME está mantendo o mesmo nome
    'fldCcNomeTitular': cc.nomeTitular,
  };

  for (const [id, value] of Object.entries(fields)) {
    document.getElementById(id).value = value;
  }
}

function gerarContaBancaria() {
  const cb = contaBancaria();
  const fields = {
    'fldCodigoBanco': cb.codigoBanco,
    'fldNomeBanco': cb.nomeBanco,
    'fldAgencia': cb.agencia,
    'fldAgenciaDv': cb.agenciaDv,
    'fldConta': cb.conta,
    'fldContaDv': cb.contaDv,
  };

  for (const [id, value] of Object.entries(fields)) {
    document.getElementById(id).value = value;
  }
}

function gerarBanco() {
  const cb = banco();
  const fields = {
    'fldCodigoBanco': cb.codigoBanco,
    'fldNomeBanco': cb.nomeBanco,
    'fldRazaoSocial': cb.razaoSocial,
    'fldISPB': cb.ispb,
  };

  for (const [id, value] of Object.entries(fields)) {
    document.getElementById(id).value = value;
  }
}
