//write your code here
'use strict';

$(document).ready(function() {

  $('#secretBox').css("background-color", "white");
  $('#secretBox').append("<h1>Secret Box!</h1>");

});

//# 1
// $('.boxType1').css('background', 'white');

//# 2
// $('#row4').css('display', 'false');

//# 3
// var children = $('#row1').children();
// console.log(children.length);

//# 4
// $('#row4 div:last').css('display', 'none');

//# 5
// var firstTwo = $('#row1 div').slice(0,2);
// $(firstTwo).toggleClass('box');

//# 6
// $('#container').children().children().not('#secretBox').css('width', '2px');
// console.log('true');

//# 7
$('body').toggle("slow", function(){
  $(this).toggle("slow");
})
