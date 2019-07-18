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
