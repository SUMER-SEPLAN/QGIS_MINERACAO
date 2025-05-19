// Alterna expansão do menu lateral e ajusta a posição de elementos visíveis
document.getElementById('toggleMenu').addEventListener('click', function () {
  const sidebar = document.querySelector('.sidebar');
  const legenda = document.getElementById('legenda-container');
  const popupFontes = document.getElementById('popup-fontes');

  // Alterna a classe da sidebar
  sidebar.classList.toggle('expandido');

  const isExpandido = sidebar.classList.contains('expandido');
  const novaPosicao = isExpandido ? '210px' : '70px';

  // Ajusta posição da legenda, se visível
  if (legenda && legenda.style.display === 'block') {
    legenda.style.left = novaPosicao;
  }

  // Ajusta posição do popup de fontes, se visível
  if (popupFontes && popupFontes.style.display === 'block') {
    popupFontes.style.left = novaPosicao;
  }
});

const btnLegenda = document.getElementById('btn-legenda');
if (btnLegenda) {
  btnLegenda.addEventListener('click', function (e) {
    e.preventDefault();
    const legenda = document.getElementById('legenda-container');
    const sidebar = document.querySelector('.sidebar');
    const isExpandido = sidebar.classList.contains('expandido');
    const novaPosicao = isExpandido ? '210px' : '70px';
    const botao = btnLegenda;

    if (legenda.style.display === 'none' || legenda.style.display === '') {
      legenda.style.display = 'block';
      legenda.style.left = novaPosicao;
      botao.classList.add('ativo');
    } else {
      legenda.style.display = 'none';
      botao.classList.remove('ativo');
    }
  });
}

// Alterna exibição do popup de fontes
document.getElementById('btn-fontes').addEventListener('click', function (e) {
  e.preventDefault();
  const popup = document.getElementById('popup-fontes');
  popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'flex' : 'none';
});

// Fecha o popup ao clicar no botão de fechar
document.getElementById('fechar-popup-fontes').addEventListener('click', function () {
  document.getElementById('popup-fontes').style.display = 'none';
});


// Alterna exibição do popup "Sobre o projeto"
document.getElementById('btn-sobre').addEventListener('click', function (e) {
  e.preventDefault();
  const popup = document.getElementById('popup-sobre');
  popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
});

// Fecha o popup "Sobre"
document.getElementById('fechar-popup-sobre').addEventListener('click', function () {
  document.getElementById('popup-sobre').style.display = 'none';
});

// Alterna exibição do popup de instruções
document.getElementById('btn-instrucoes').addEventListener('click', function (e) {
  e.preventDefault();
  const popup = document.getElementById('popup-instrucoes');
  popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
});

// Fecha o popup de instruções
document.getElementById('fechar-popup-instrucoes').addEventListener('click', function () {
  document.getElementById('popup-instrucoes').style.display = 'none';
});
