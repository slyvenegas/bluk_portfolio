// JavaScript para arrastrar imágenes en móviles
document.querySelectorAll('.slider-container .slide img').forEach((img) => {
    let isDragging = false;
    let startX, scrollLeft;
  
    // Evento para iniciar el arrastre
    img.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - img.offsetLeft;
      scrollLeft = img.offsetLeft;
      img.style.cursor = 'grabbing';
    });
  
    img.addEventListener('touchstart', (e) => {
      isDragging = true;
      startX = e.touches[0].pageX - img.offsetLeft;
      scrollLeft = img.offsetLeft;
    });
  
    // Evento para el movimiento del arrastre
    img.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - img.offsetLeft;
      const walk = (x - startX) * 1.5; // Ajusta la velocidad del arrastre
      img.style.transform = `translateX(${scrollLeft + walk}px)`;
    });
  
    img.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - img.offsetLeft;
      const walk = (x - startX) * 1.5;
      img.style.transform = `translateX(${scrollLeft + walk}px)`;
    });
  
    // Evento para finalizar el arrastre
    img.addEventListener('mouseup', () => {
      isDragging = false;
      img.style.cursor = 'grab';
    });
  
    img.addEventListener('mouseleave', () => {
      isDragging = false;
      img.style.cursor = 'grab';
    });
  
    img.addEventListener('touchend', () => {
      isDragging = false;
    });
  });
  