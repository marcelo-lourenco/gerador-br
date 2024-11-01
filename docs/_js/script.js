function copiarTexto() {
  const campoTexto = document.getElementById('vlrGerado');
  campoTexto.select();
  document.execCommand('copy');

  const mensagem = document.getElementById('msgCopiado');
  mensagem.classList.add('mostrar');
  setTimeout(() => {
    mensagem.classList.remove('mostrar');
  }, 1500);
}

function toggleIcon() {
  const campoTexto = document.getElementById('vlrGerado');
  const icon = document.getElementById('iconCopy');
  icon.style.display = campoTexto.value ? 'inline-block' : 'none';
}