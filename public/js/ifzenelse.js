function setText(target) {
  $(target).text(String.fromCharCode(Math.floor(Math.random() * 65536)));
}

$(function() {
  $('.letter').each(function() {
    setText(this);
    $(this).mouseover(function() { setText(this); });
  });
});