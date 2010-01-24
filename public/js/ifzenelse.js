function setText(target) {
  $(target)//.text(parseInt($(target).text() || -1) + 1);
  .html('&lambda;');
    //String.fromCharCode(Math.floor(Math.random() * 65536)));
}

var groups = [
  [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 89, 79, 69, 59, 49, 39, 29, 19, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  [11, 21, 31, 41, 51, 61, 71, 81, 82, 83, 84, 85, 86, 87, 88, 78, 68, 58, 48, 38, 28, 18, 17, 16, 15, 14, 13, 12],
  [22, 32, 42, 52, 62, 72, 73, 74, 75, 76, 77, 67, 57, 47, 37, 27, 26, 25, 24, 23],
  [33, 43, 53, 63, 64, 65, 66, 56, 46, 36, 35, 34],
  [44, 54, 55, 45]
];

var current = [0, 0, 0, 0, 0];

function animate() {
  $(groups).each(function(group_index) {
    letter = $('.letter:eq(' + this[current[group_index] = (current[group_index] + 1) % this.length] + ')');
    letter.cssletter = $('.letter:eq(0)');
//    letter.css('background-color', 'rgb(13, 26, 39)');
    letter.css('background-color', letter.css('background-color').replace(/(\d+)/g, function() { return (parseInt(arguments[0]) + 15) % 256; }));
//    setText(letter);
  });
  setTimeout('animate();', 100);
}

$(function() {
  $('.letter').css('background-color', 'rgb(0, 0, 0)').each(function() {
    setText($(this));
  });
  animate();
});