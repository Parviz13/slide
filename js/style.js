// function plusSlides(n) {
//   let slidePosition = 1;
//   SlideShow(slidePosition);
//   SlideShow(slidePosition += n);
// }

// function currentSlide(n) {
//   SlideShow(slidePosition = n);
// }

// function SlideShow(n) {
//   let i;
//   let slides = document.getElementsByClassName("Containers");
//   let circles = document.getElementsByClassName("dots");
//   if (n > slides.length) {slidePosition = 1}
//   if (n < 1) {slidePosition = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < circles.length; i++) {
//       circles[i].className = circles[i].className.replace(" enable", "");
//   }
//   slides[slidePosition-1].style.display = "block";
//   circles[slidePosition-1].className += " enable";
// }
// let slidePosition = 0;
// SlideShow();

// function SlideShow() {
//   let i;
//   let slides = document.getElementsByClassName("Containers");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slidePosition++;
//   if (slidePosition > slides.length) {slidePosition = 1}
//   slides[slidePosition-1].style.display = "block";
//   setTimeout(SlideShow, 5000); 
// }





let slide = document.querySelectorAll('.offer__slide')
let prev = document.querySelector('#prev')
let next = document.querySelector('#next')
let text = document.querySelector('#current')




let idx = 0



showSlides(idx)

function showSlides(n) {
  
    slide.forEach(el => el.style.display = "none")
    

next.onclick = () => {
    idx++
    
}

prev.onclick = () => {
    if (idx === 0) {
    } else {
      idx--
      showSlides(idx)
    }
  }
  next.onclick = () => {
    if (idx === 3) {
  } else {
    idx++
    showSlides(idx)
  }
}

    
    setTimeout(() => {
      slide[n].style.display = "block"
    }, 400) 
    
    text.innerHTML = '0' + (idx +1)
}

 






  showSlides(idx)

