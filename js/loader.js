// Tempo de exibição do loader (em milissegundos)
const tempoDeLoading = 3000; // 3 segundos

window.addEventListener('load', function () {
  setTimeout(function () {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500); // espera o fade-out terminar
  }, tempoDeLoading);
});
