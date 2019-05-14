$(document).ready(function(){
  // if you use keydown, you wont see the last letter pressed
    $('#input-name').on('keyup', function() {
      let name = $(this).val();
      $('#feedback-message').text('Pleased to meet you, ' + name);
    });

});
