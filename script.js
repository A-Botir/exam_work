document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.cards-slider');
    const slides = document.querySelectorAll('.cards-slide');
    const cont_width = document.getElementById('slaider_container');

    const slideCount = slides.length;
    let currentSlide = 0;
  
    function nextSlide() {
      if (currentSlide < slideCount - 1) {
        currentSlide++;
        updateSliderPosition();
      }
    }
  
    function prevSlide() {
      if (currentSlide > 0) {
        currentSlide--;
        updateSliderPosition();
      }
    }
  
    function updateSliderPosition() {
      const newPosition = -currentSlide * 100;
      slider.style.transform = `translateX(${newPosition}%)`;
    }
  
    // При клике на кнопку "Next"
    document.querySelector('.next-button').addEventListener('click', nextSlide);
  
    // При клике на кнопку "Prev"
    document.querySelector('.prev-button').addEventListener('click', prevSlide);
});

document.addEventListener("DOMContentLoaded", function() {
    const emailForm = document.querySelector('.email-form');
    const emailInput = document.querySelector('#email');

    emailForm.addEventListener("click", function(event) {
      if (event.target !== emailInput && event.target !== document.querySelector('.submit-btn')) {
        emailInput.focus();
    }
});
});

// chat gpt ishlatdim js uchun