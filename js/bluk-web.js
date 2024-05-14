
const logosContainer = document.querySelector('.logo-grid');

// Suponiendo que tienes un array de rutas de imágenes
const logosPaths = ['logo1.png', 'logo2.png', 'logo3.png', ...];

// Función para cargar logos
function loadLogos() {
  logosPaths.forEach((logo) => {
    const imgElement = document.createElement('img');
    imgElement.src = `path_to_logos_folder/${logo}`;
    imgElement.alt = 'Logo del cliente';
    logosContainer.appendChild(imgElement);
  });
}

// Llamar a la función para cargar logos al cargar la página
window.addEventListener('DOMContentLoaded', loadLogos);
