$(document).ready(function() {
  window.dancers = [];

  var eachDancer = document.getElementsByClassName('dancer');

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($('body').height() * Math.random() + 50) % ($('body').height() - 150),
      ($('body').width() * Math.random()) % ($('body').width() - 100),
      /*Math.random() * */500
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  
  $('body').on('click', '.homer, .dancer', function(event) {
    if (this.moveLeft === true) {
      $(this).animate({'left': '+=100px'}, 'slow');
      this.moveLeft = false;
    } else {
      $(this).animate({'left': '-=100px'}, 'slow');
      this.moveLeft = true;
    }
  });
  
  $('body').on('click', '.slowDancer img', function(event) {
    if (this.moveUp === true) {
      console.log('slowDancer top:', $(this).css('top'));
      $(this).animate({'top': '-=300px', 'height': '200px', 'width': '200px'}, 3000);
      this.moveUp = false;
    } else {
      console.log('slowDancer top:', $(this).css('top'));
      $(this).animate({'top': '+=300px', 'height': '300px', 'width': '300px'}, 3000);
      this.moveUp = true;
    }
  });

  $('.lineUpDancers').on('click', function(event) {
    var topDrift = 500;
    var sideDrift = 0;
    window.dancers.forEach(function(dancer, index) {
      topDrift -= 30;
      sideDrift += 20;
      dancer.setPosition(topDrift, sideDrift);
    });
  });

  $('.interactiveDancers').on('click', function(event) {
    var ani = function() {
      $('.homer').animate({'left': '80%'}, 6000).animate({'left': '0%'}, 6000, ani);
    };
    ani();
  });
});
