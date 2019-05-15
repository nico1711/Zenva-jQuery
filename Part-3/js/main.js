// Defining car variable starting at 0
var cart = 0;

// Function to add an item
function addItem(name, description, price, moreInfo) {
  let html = '';
  html += '<div class="item">'
    html += '<div class="name">' + name + '</div>'
    html += '<img src="assets/beach.jpg" alt="Beach">'
    html += '<div class="description">' + description + '</div>'
    html += '<div class="price">' + price + '</div>'
    html += '<button class="item-add">Add to cart</button>'
    html += '<button class="item-remove">Remove</button><br>'
    html += '<a class="more-info-link" href="#">More Info</a>'
    html += '<div class="more-info">' + moreInfo + '</div>'
  html += '</div>'

  $('#container').prepend(html);
};

$(document).ready(function(){
  // Adding an element with the Add button
  $('#button-create-item').on('click', function() {
    // Gets the value in a variable
    let name = $('#input-create-item').val();
    // Cleans the input bar
    $('#input-create-item').val('');

    // Adds the name to the html template
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
      html += '<button class="item-add">Add to cart</button>'
      html += '<button class="item-remove">Remove</button><br>'
      html += '<a class="more-info-link" href="#">More Info</a>'
      html += '<div class="more-info">Lorem ipsum dolor sit amet.</div>'
    html += '</div>'

    $('#container').prepend(html);
  });

  // Removing an element with the remove button
  $('#container').on('click', '.item-remove', function() {
    $(this).parent().remove();
  });

  // Show the more info when clicked
  $('#container').on('click', '.more-info-link', function(event) {
    event.preventDefault();
    // toggle(100), slideToggle & fadeToggle are all toggle effects
    $(this).parent().find('.more-info').slideToggle('slow');
    // Animating the "more info" button
    $(this)
      .animate({"opacity": 0.5, "margin-left": 10}, 'fast')
      .animate({"opacity": 1, "margin-left": 0}, 'fast');
  });

  // Using ajax to read the item.json file
  $.ajax('data/item.json', {
    dataType: 'json',
    contentType: 'application/json',
    cache: false
  })
    .done(function(response) {
      let items = response.items;

      // Add each item to the html
      items.forEach(function(item){
        console.log(item);
        addItem(item.name, item.description, item.price, item.moreInfo);
      });
    })
    .fail(function(request, errorType, errorMessage) {
      console.log(errorMessage);
    })
    .always();

  // Listener to the Add to Cart button
  $('#container').on('click', '.item-add', function() {
    let id = $(this).parent().data('id');

    // Using ajax to read the item.json file
    $.ajax('data/addToCart.json', {
      type: 'post',
      data: { id: id },
      dataType: 'json',
      contentType: 'application/json'
    })
    .done(function(response) {
      if (response.message === 'success') {
        let price = response.price;

        cart += price;

        $('#cart-container').text('$' + cart);
      };
    })
    .fail(function(request, errorType, errorMessage) {

    })
    .always()
  });

});
