"use strict";


/* ====== Define JS Constants ====== */
// Seleciona o botão que alterna a visibilidade da sidebar
const sidebarToggler = document.getElementById('docs-sidebar-toggler');
// Seleciona o elemento da sidebar
const sidebar = document.getElementById('docs-sidebar');
// Seleciona todos os links da sidebar que possuem a classe .scrollto
const sidebarLinks = document.querySelectorAll('#docs-sidebar .scrollto');


/* ===== Responsive Sidebar ====== */
// Ajusta a visibilidade da sidebar com base no tamanho da janela ao carregar a página
window.onload = function () {
    responsiveSidebar();
};

// Ajusta a visibilidade da sidebar ao redimensionar a janela
window.onresize = function () {
    responsiveSidebar();
};

// Função para gerenciar a visibilidade da sidebar com base na largura da janela
function responsiveSidebar() {
    let w = window.innerWidth; // Obtém a largura da janela
    if (w >= 1200) {
        // Se a largura for maior ou igual a 1200px, exibe a sidebar
				/* console.log('larger'); */
        sidebar.classList.remove('sidebar-hidden');
        sidebar.classList.add('sidebar-visible');
    } else {
			/* console.log('smaller'); */
        // Se a largura for menor que 1200px, oculta a sidebar
        sidebar.classList.remove('sidebar-visible');
        sidebar.classList.add('sidebar-hidden');
    }
}

// Alterna a visibilidade da sidebar ao clicar no botão de alternância
sidebarToggler.addEventListener('click', () => {
    if (sidebar.classList.contains('sidebar-visible')) {
        // Se a sidebar está visível, oculta-a
				/* console.log('visible'); */
        sidebar.classList.remove('sidebar-visible');
        sidebar.classList.add('sidebar-hidden');
    } else {
        // Se a sidebar está oculta, exibe-a

        sidebar.classList.remove('sidebar-hidden');
        sidebar.classList.add('sidebar-visible');
    }
});

/* ===== Smooth scrolling ====== */
// Implementa rolagem suave para os links da sidebar
// Nota: Requer o arquivo smoothscroll.min.js para compatibilidade com alguns navegadores
sidebarLinks.forEach((sidebarLink) => {
    sidebarLink.addEventListener('click', (e) => {
        e.preventDefault(); // Previne o comportamento padrão do link

        // Obtém o ID do elemento alvo a partir do atributo href do link
        var target = sidebarLink.getAttribute("href").replace('#', '');
        var targetElement = document.getElementById(target);

        if (targetElement) {
            // Rola suavemente até o elemento alvo
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Exibe um aviso no console se o elemento alvo não for encontrado
            console.warn(`Elemento com ID "${target}" não encontrado.`);
        }

        // Fecha a sidebar automaticamente em telas menores (largura < 1200px)
        if (sidebar.classList.contains('sidebar-visible') && window.innerWidth < 1200) {
            sidebar.classList.remove('sidebar-visible');
            sidebar.classList.add('sidebar-hidden');
        }
    });
});

/* ===== Gumshoe ScrollSpy ===== */
// Inicializa o plugin Gumshoe para destacar o link ativo na navegação
// Ref: https://github.com/cferdinandi/gumshoe
var spy = new Gumshoe('#docs-nav a', {
    offset: 69, // Define o deslocamento para compensar o cabeçalho fixo
});

/* ====== SimpleLightbox Plugin ======= */
// Inicializa o plugin SimpleLightbox para criar uma galeria de imagens com efeito de lightbox
// Ref: https://github.com/andreknieriem/simplelightbox
var lightbox = new SimpleLightbox('.simplelightbox-gallery a', {/* opções podem ser configuradas aqui */ });











