// ----------------------- show more -----------------
 
const toggleButton = document.getElementById('toggle');
const moreContent = document.querySelector('.more-content');

toggleButton.addEventListener('click', () => {
    if (moreContent.style.display === 'none') {
        moreContent.style.display = 'inline';
        toggleButton.textContent = 'Show Less';
    } else {
        moreContent.style.display = 'none';
        toggleButton.textContent = 'Show More';
    }
});
  

//  -----------------------------------show more 2 ---------------------
const tb = document.getElementById('toggle2');
const mc = document.querySelector('.more-content-ln');

tb.addEventListener('click', () => {
    if (mc.style.display === 'none') {
        mc.style.display = 'inline';
        tb.textContent = 'Show Less';
    } else {
        mc.style.display = 'none';
         tb.textContent = 'Show More';
    }
});


    
//  -------------------------------no need but let it bee --------------
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.contact-slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 2000); // Change slide every 2 seconds
});
    