// Seleciona o botão de inversão de cores
const botaoInversao = document.querySelector('.cabecalho-titulo-inversao');

// Adiciona o evento de clique ao botão
botaoInversao.addEventListener('click', () => {
    // Liga/Desliga a classe 'dark-mode' no corpo da página
    document.body.classList.toggle('dark-mode');
    
    // Opcional: Altera o emoji/texto do botão dependendo do modo
    if (document.body.classList.contains('dark-mode')) {
        botaoInversao.innerHTML = "Modo Claro ☀️";
    } else {
        botaoInversao.innerHTML = "Inversão de cores 🌓";
    }
});