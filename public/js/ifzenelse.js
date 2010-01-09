function setText(target) {
  $(target).text(String.fromCharCode(Math.floor(Math.random() * 65536)));
}

function animate() {
  setText($('.letter:eq(' + Math.floor(Math.random() * $('.letter').size()) + ')'));
  setTimeout('animate();', 10);
}

$(function() {
  animate();
  $('.letter').each(function() {
    setText(this);
    $(this).mouseover(function() { setText(this); });
  });
});