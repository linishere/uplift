* {
  margin: 0;
}

@media all and (max-width: 900px) {

}

@media all and (max-width: 700px) {

}

var button = $('button');
var inputdisplay = $('.inputdisplay')

button.on("click", woo);

function woo() {
  var text = $('.text').val();
  gotobutton(text);
}

function gotobutton(text) {
  inputdisplay.append(`<p class="dietrate">${text}</p>`);
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = $("mySlides");
  var dots = $("dot");
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
