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
