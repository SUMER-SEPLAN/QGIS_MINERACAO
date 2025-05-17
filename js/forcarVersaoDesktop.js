/**
 * Script para forçar a versão desktop em dispositivos móveis
 * 
 * Este script detecta se o usuário está acessando o site 
 * através de um dispositivo móvel e força o carregamento
 * da versão desktop ajustando os meta tags e propriedades CSS.
 */

// Função para detectar se é um dispositivo móvel
function isMobileDevice() {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 2)
  );
}

// Função para forçar visualização desktop
function forcarVersaoDesktop() {
  if (isMobileDevice()) {
    console.log("Dispositivo móvel detectado. Carregando versão desktop...");
    
    // Modificar os meta tags para viewport
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
      viewportMeta.setAttribute('content', 'width=1024, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=1024, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes';
      document.head.appendChild(meta);
    }
    
    // Ajustar o estilo para garantir a experiência desktop
    const style = document.createElement('style');
    style.textContent = `
      body {
        min-width: 1024px;
        overflow-x: auto;
      }
      
      /* Ajustes para o iframe do mapa */
      .content iframe {
        width: 100%;
        height: 100%;
      }
      
      /* Ajustes para a barra superior e menu lateral */
      .topbar {
        min-width: 1024px;
      }
      
      /* Ajuste para botões e controles */
      button, a {
        min-height: 44px;
        min-width: 44px;
      }
    `;
    document.head.appendChild(style);
    
    // Adicionar classe ao body para possíveis ajustes CSS adicionais
    document.body.classList.add('desktop-force');
    
    // Mostrar um indicador visual breve que a versão desktop foi carregada
    const notificacao = document.createElement('div');
    notificacao.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      z-index: 9999;
      font-size: 14px;
    `;
    notificacao.textContent = 'Versão desktop carregada';
    document.body.appendChild(notificacao);
    
    // Remover a notificação após 3 segundos
    setTimeout(() => {
      notificacao.style.opacity = '0';
      notificacao.style.transition = 'opacity 0.5s';
      setTimeout(() => {
        document.body.removeChild(notificacao);
      }, 500);
    }, 3000);
  }
}

// Executar a função quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', forcarVersaoDesktop);

// Executar também depois que tudo estiver carregado (incluindo imagens)
window.addEventListener('load', function() {
  // Pequeno delay para garantir que tudo esteja renderizado
  setTimeout(forcarVersaoDesktop, 500);
});