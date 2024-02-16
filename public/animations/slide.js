console.log('loaded')

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    var slideInDivs = document.querySelectorAll(".gameBox");
      
    slideInDivs.forEach(function(div) {
    var slideInAt = (window.scrollY + window.innerHeight) - div.clientHeight / 2;
    var divBottom = div.offsetTop + div.clientHeight;
    var isHalfShown = slideInAt > div.offsetTop;
        
    if (isHalfShown) {
      div.classList.add("active");
    } else {
      div.classList.remove("active");
    }
    });
  });
  });
  // function debounce(func, wait = 20, immediate = true) {
  //   var timeout;
  //   return function() {
  //     var context = this,
  //       args = arguments;
  //     var later = function() {
  //       timeout = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     var callNow = immediate && !timeout;
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };
  // }
  
  // const sliderImages = document.querySelectorAll(".gameBox");
  
  // function checkSlide(e) {
  //   sliderImages.forEach(sliderImage => {
  //     // half way through the image
  //     const slideInAt=
  //       window.scrollY + window.innerHeight - sliderImage.height / 2;
  //     // bottom of the image
  //     const imageBottom = sliderImage.offsetTop + sliderImage.height;
  //     const isHalfShown = slideInAt > sliderImage.offsetTop;
  //     const isNotScrolledPast = window.scrollY < imageBottom;
  
  //     if (isHalfShown && isNotScrolledPast) {
  //       sliderImage.classList.add("active");
  //     } else {
  //       sliderImage.classList.remove("active");
  //     }
  //   });
  // }
  
  // window.addEventListener("scroll", debounce(checkSlide));
  

  