$(document).ready(function(){
  $('#button-create-item').on('click', function() {
    // Gets the value in a variable
    let name = $('#input-create-item').val();
    // Cleans the input bar
    $('#input-create-item').val('');

    let html = '';
    html += '<div class="item">'
      html += '<div class="name">' + name + '</div>'
      html += '<img src="assets/beach.jpg" alt="Beach">'
      html += '<div class="description">'
        html += 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,'
        html += 'sed do eiusmod tempor incididunt ut labore et dolore magna'
        html += 'aliqua.'
      html += '</div>'
      html += '<div class="price">499</div>'
      html += '<button>Add to cart</button><br>'
      html += '<a href="#">More Info</a>'
      html += '<div class="more info">Lorem ipsum dolor sit amet.</div>'
    html += '</div>'

    $('#container').prepend(html);

  });
});
