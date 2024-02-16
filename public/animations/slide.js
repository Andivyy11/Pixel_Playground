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
