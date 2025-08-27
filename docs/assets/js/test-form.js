document.getElementById('testForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const inputs = document.querySelectorAll('#testForm input, #testForm textarea');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add('is-invalid');
    } else {
      input.classList.remove('is-invalid');
    }
  });

  const validacaoDiv = document.getElementById('validacao');
  const alertValidacaoDiv = document.getElementById('alertValidacao');
  const mensagemValidacao = document.getElementById('mensagemValidacao');

  if (isValid) {
    mensagemValidacao.textContent = 'Todos os campos foram preenchidos corretamente!';
    alertValidacaoDiv.classList.remove('alert-danger');
    alertValidacaoDiv.classList.add('alert-success');
    validacaoDiv.style.display = 'block';
  } else {
    mensagemValidacao.textContent = 'Por favor, preencha todos os campos obrigatórios.';
    alertValidacaoDiv.classList.remove('alert-success');
    alertValidacaoDiv.classList.add('alert-danger');
    validacaoDiv.style.display = 'block';
  }
});
// Remove a mensagem de validação ao preencher qualquer campo
document.querySelectorAll('#testForm input, #testForm textarea').forEach(input => {
  input.addEventListener('input', function () {
    const validacaoDiv = document.getElementById('validacao');
    validacaoDiv.style.display = 'none';
  });
});
