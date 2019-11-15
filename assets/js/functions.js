$(document).ready(function() {
  $('.right-bar').click(function () {
    alert("Este demo fue realizado por Pablo Pérez Martínez.");
  });
  $('.button').click(function () {
    var img = $($(this).children()).clone();
    img.width(36);
    img.css('padding', '6px');
    $($('.circle')[0]).replaceWith(img);
    console.log(count);
  })
});
