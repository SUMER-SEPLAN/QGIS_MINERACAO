function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.5s ease';
    
    // Define um tempo para remover o elemento do DOM após o fade-out
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500); 
  }
}