function copiarTexto() {
  const campoTexto = document.getElementById('vlrGerado');
  campoTexto.select();
  document.execCommand('copy');

  const mensagem = document.getElementById('mensagemCopiado');
  mensagem.classList.add('mostrar');
  setTimeout(() => {
    mensagem.classList.remove('mostrar');
  }, 1500); // Esconde a mensagem após 1.5 segundos
}
function toggleIcon() {
  const campoTexto = document.getElementById('vlrGerado');
  const icon = document.getElementById('iconCopy');
  icon.style.display = campoTexto.value ? 'inline-block' : 'none';
}