$(document).ready(function(){
  $('.box').on('click','.box-button', function(){
    // 'this' calls the object that called the function
    // 'toggleClass' sets the class or removes it if it already has it
    $(this).parent().toggleClass('highlight');
    console.log("hello");
  })
});


// .parent() to go up, .children() to go down

// $('#snow')
//   .parent() // Parent to go up, children to go down
//   .find('.title')
//   .addClass('highlight');
