$(function() {
  // on click that handles the 'devour it' buttons
  $('.eat-burger').on('click', function(event) {
    let id = $(this).data('id');
    let newDevour = $(this).data('newDevour');
    let newDevourState = {
      devoured: 1
    };
    
    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: newDevourState
    }).then(
      function() {
        location.reload();
      }
    );
  });

  // on click that handles the submit button that makes new burgers
  $('.create-form').on('submit', function(event) {
    event.preventDefault();
    if ($('#burger-name').val().length === 0) {
      alert('Fill in a burger!');
    } else {
      let newBurger = {
        burger_name: '"' + $('#burger-name').val().trim() + '"',
        devoured: 0
      };
      console.log(newBurger);
      $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger
      }).then(
        function() {
          console.log('created new burger');
          location.reload();
        }
      );
    }
  });
});