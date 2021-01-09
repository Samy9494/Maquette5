var slideIndexa = 1;
showSlidesa(slideIndexa);

// Next/previous controls
function plusSlidesa(n) {
  showSlidesa(slideIndexa += n);
}

// Thumbnail image controls
function currentSlidea(n) {
  showSlidesa(slideIndexa = n);
}

function showSlidesa(n) {
  var i;
  var slidesa = document.getElementsByClassName("mySlides-1");
  var dotsa = document.getElementsByClassName("dot-1");
  if (n > slidesa.length) {slideIndexa = 1} 
  if (n < 1) {slideIndexa = slidesa.length}
  for (i = 0; i < slidesa.length; i++) {
      slidesa[i].style.display = "none"; 
  }
  for (i = 0; i < dotsa.length; i++) {
      dotsa[i].className = dotsa[i].className.replace(" active", "");
  }
  slidesa[slideIndexa-1].style.display = "block"; 
  dotsa[slideIndexa-1].className += " active";
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-2");
  var dots = document.getElementsByClassName("dot-2");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

