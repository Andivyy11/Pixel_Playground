console.log('loaded')

document.addEventListener("DOMContentLoaded", function() {

  // var welcomeTxt=document.getElementById('welcomeText');
  // var paraTxt=document.getElementById('paraText');
  // console.log(welcomeTxt ,paraTxt)
  // welcomeTxt.classList.add('slideDown');
  // paraTxt.classList.add('slideUp');  

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

  