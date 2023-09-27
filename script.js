function onLoad(){
  let carousel = document.querySelector('.carousel');
  carousel.addEventListener('touchstart', function(event) {

    const arrowElement = document.querySelector('.arrow');
    const computedStyle = window.getComputedStyle(arrowElement);
    const displayValue = computedStyle.getPropertyValue('display');

    if (displayValue !== 'none') {
      return;
    } 
    const touchX = event.touches[0].clientX;
    const elementRect = carousel.getBoundingClientRect();
    
    const tapPosition = touchX - elementRect.left;
    const elementWidth = elementRect.width;
    
    if (tapPosition < elementWidth / 2) {
      carouselMove(-1);
    } else {
      carouselMove(1)
    }
  });
}

// Function to check if the element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to handle the scroll event
function handleScroll() {
  let elements = document.querySelectorAll('.scrollWatch')  
  for (let elem of elements){
      if (isElementInViewport(elem)) {
        elem.classList.add('animated')
      }
  }
}
function adjustCarouselNumber(dif){
  let carousel = document.querySelector('.carousel')
  let number = carousel.getAttribute('current');
  let max = carousel.querySelectorAll('.item').length
  number = parseInt(number)
  number+=dif;
  if (number < 0){
    number = max-1
  }
  if (number == max ) {
    number = 0
  }
  carousel.setAttribute('current', number)
  return number
}
function carouselMove(num){
  let number = adjustCarouselNumber(num)    
  document.querySelector('.carousel .item.active').classList.add('hiddenanimate')
  document.querySelector('.carousel .item.active').classList.remove('active')
  document.querySelectorAll('.carousel .item')[number].classList.remove('hiddenanimate')  
  document.querySelectorAll('.carousel .item')[number].classList.remove('hidden')  
  document.querySelectorAll('.carousel .item')[number].classList.add('active')
}

function scrollToWork(){
    const portfolioElement = document.querySelector('.portfolio');
    const yOffset = 0; // Adjust this value to offset the scroll position if needed
    const y = portfolioElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
    window.scrollTo({
      top: y,
      behavior: 'smooth'
  }); 
}

// Attach the scroll event listener to the window
window.addEventListener('scroll', handleScroll);