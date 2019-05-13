$(document).ready(function(){
  $('#snow')
    .parent() // Parent to go up, children to go down
    .find('.title')
    .addClass('highlight');

    console.log($('#snow').closest('.temperature'));
});




// .parent() to go up, .children() to go down
