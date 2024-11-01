<div class="input-container">
  <input id="vlrGerado" class="input-gerador" type="text" readonly><br><br>
  <i id="iconCopy" class="icon icon-16 icon-copy" onclick="copiarTexto() "></i>
  <button onclick="document.getElementById('vlrGerado').value = rg(true); toggleIcon();">
    Gerar RG
  </button>
  <div id="msgCopiado" class="copiado">Copiado!</div>
</div>
