function setText(target) {
  $(target).text(String.fromCharCode(Math.floor(Math.random() * 65536)));
}

var groups = [];
function populate_groups(count) {
  all = [];
  for (var i = 0; i < $('.letter').size(); i++)
    all.push(i);
  all = all.sort(function() { return Math.random() > 0.5 });
  for (var i = 0; i < count; i++)
    groups[i] = all.splice(0, $('.letter').size() / count);
}

function animate() {
  $(groups[Math.floor(Math.random() * groups.length)]).each(function() {
    setText($('.letter:eq(' + this + ')'));
  });
  setTimeout('animate();', 100);
}

$(function() {
  populate_groups(10);
  animate();
  $('.letter').each(function() {
    setText(this);
    $(this).mouseover(function() { setText(this); });
  });
});