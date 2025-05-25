// Carrusel de imágenes y mensajes
const images = [
  {
    src: "img/IMG_3519.jpg",
    alt: "Foto 1",
    msg: "Siempre juntas en los mejores momentos."
  },
  {
    src: "img/IMG_5848.jpg",
    alt: "Foto 2",
    msg: "Tu sonrisa ilumina mi vida."
  },
  {
    src: "img/IMG_5661.jpg",
    alt: "Foto 3",
    msg: "Gracias por cada abrazo y consejo."
  },
  {
    src: "img/d8cc4c49-5dd1-4fcf-a3d7-8c588a3726e6.jpg",
    alt: "Foto 4",
    msg: "Estos recuerdos son mi mayor tesoro."
  }
  // Puedes agregar más imágenes y mensajes aquí
];

let current = 0;
const imgEl = document.getElementById('carouselImage');
const captionEl = document.getElementById('carouselCaption');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showImage(idx) {
  // Añadir fade out
  imgEl.style.opacity = '0';
  captionEl.style.opacity = '0';
  
  setTimeout(() => {
    imgEl.src = images[idx].src;
    imgEl.alt = images[idx].alt;
    captionEl.textContent = images[idx].msg;
    
    // Añadir fade in
    imgEl.style.opacity = '1';
    captionEl.style.opacity = '1';
  }, 300);
}

// Añadir transición suave a las imágenes
imgEl.style.transition = 'opacity 0.3s ease';
captionEl.style.transition = 'opacity 0.3s ease';

prevBtn.addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % images.length;
  showImage(current);
});

// Opcional: cambiar con flechas del teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevBtn.click();
  if (e.key === 'ArrowRight') nextBtn.click();
});

// Inicializar carrusel
showImage(current);
