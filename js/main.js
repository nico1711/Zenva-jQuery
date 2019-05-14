$(document).ready(function(){
  $('#select-menu').on('change', function() {
    let name = $('#select-menu option:selected').text();
    let distance = $('#select-menu option:selected').val();
    // If you set a data-price attribute, you call it with data('price')
    let price = $('#select-menu option:selected').data('price');

    console.log(price);
    $('#feedback-message')
    .text('You are signing up for a ' + name +
    ', wich costs ' + price +
    ', to a distance of ' + distance + 'km');
  });
});


// .parent() to go up, .children() to go down

// $('#snow')
//   .parent() // Parent to go up, children to go down
//   .find('.title')
//   .addClass('highlight');

// $('.box').on('click','.box-button', function(){
  // 'this' calls the object that called the function
  // 'toggleClass' sets the class or removes it if it already has it
  // $(this).parent().toggleClass('highlight');
// })
