const toggleButton = document.getElementsByClassName('toggle-btn')[0]
const navbarItems = document.getElementsByClassName('navitems')[0]
toggleButton.addEventListener('click',()=>{navbarItems.classList.toggle('active')})


const sliderImages = document.querySelector('.slider-images');
const sliderTexts = document.querySelector('.slider-texts');
const prevBtn = document.querySelector('.btnlft');
const nextBtn = document.querySelector('.btnrght');

let slideIndex = 0;
const imageSlides = document.querySelectorAll('.slider-images .slide');
const textSlides = document.querySelectorAll('.slider-texts .slide');

function showSlide() {
  imageSlides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });

  textSlides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = imageSlides.length - 1;
  }
  showSlide();
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= imageSlides.length) {
    slideIndex = 0;
  }
  showSlide();
}

showSlide();