document.querySelectorAll('.slide img').forEach((img) => {
    const magnifier = document.createElement('div');
    magnifier.classList.add('magnifier');
    img.parentElement.appendChild(magnifier);
  
    img.addEventListener('mousemove', (e) => {
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const bgX = (x / rect.width) * 100;
      const bgY = (y / rect.height) * 100;
  
      magnifier.style.display = 'block';
      magnifier.style.left = `${x - magnifier.offsetWidth / 2}px`;
      magnifier.style.top = `${y - magnifier.offsetHeight / 2}px`;
      magnifier.style.backgroundImage = `url(${img.src})`;
      magnifier.style.backgroundPosition = `${bgX}% ${bgY}%`;
      magnifier.style.backgroundSize = `${img.width * 2}px ${img.height * 2}px`; /* Ajusta el tamaño de zoom */
    });
  
    img.addEventListener('mouseleave', () => {
      magnifier.style.display = 'none';
    });
  });
  