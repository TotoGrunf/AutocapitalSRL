function iniciarSlider() {
    const slider = document.querySelector('.slider');
    const slideTrack = document.querySelector('.slide-track');
    const slides = slideTrack.querySelectorAll('.slide');
    const slideWidth = slides[0].offsetWidth;
    let currentPosition = 0;
  
    // Clonar los primeros slides y añadirlos al final del slider
    for (let i = 0; i < slides.length; i++) {
      const slideClone = slides[i].cloneNode(true);
      slideTrack.appendChild(slideClone);
    }
  
    function moverSlider() {
      currentPosition -= slideWidth;
      slideTrack.style.transform = `translateX(${currentPosition}px)`;
  
      // Si se llega al final, reiniciar el slider
      if (currentPosition <= -slideWidth * (slides.length - 1)) {
        currentPosition = 0;
        slideTrack.style.transform = `translateX(${currentPosition}px)`;
      }
    }
  
    // Iniciar el movimiento del slider
    // setInterval(moverSlider, 3000); // Cambia la velocidad del slider según necesites
  }
  
  iniciarSlider();