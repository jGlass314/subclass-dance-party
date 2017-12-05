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
      ($('body').height() * Math.random() + 50) % ($('body').height() - 50),
      ($('body').width() * Math.random()) % ($('body').width() - 50),
      /*Math.random() * */500
    );
    window.dancers.push(dancer);
    console.log(dancer);
//    console.log(dancer);
    $('body').append(dancer.$node);
    var moveleft = true;
    $('.homer, .dancer').on('click', function(event) {
      console.log('this:', this);
      
      if (moveleft === true) {
        $(this).animate({'margin-left': '+=100px'}, 'slow');
        moveleft = false;
      } else {
        $(this).animate({'margin-left': '-=100px'}, 'slow');
        moveleft = true;
      }
    });
  });

  $('.lineUpDancers').on('click', function(event) {
    var topDrift = 500;
    var sideDrift = 0;
    window.dancers.forEach(function(dancer) {
      dancer.setPosition(topDrift, sideDrift);
      topDrift -= 30;
      sideDrift += 20;
    });
  });
  var eachDancer = document.getElementsByClassName('dancer');
  console.log(eachDancer);

  $('.interactiveDancers').on('click', function(event) {
    console.log(window.dancers);
    var ani = function() {
      console.log($('.homer'));
      $('.homer').animate({'margin-left': '80%'}, 6000).animate({'margin-left': '0%'}, 6000, ani);
      var homerSet = $('body').find('.homer');
      var homer1,
        homer2;
      for (var i = 1; i < homerSet.length; i++) {
        homer1 = homerSet[i - 1];
        homer2 = homerSet[i];
        if (collision(homer1, homer2) === true) {
          homer1.animate({'margin-left': '80%'}, 6000).animate({'margin-left': '0%'}, 6000, ani);
          homer2.animate({'margin-left': '0%'}, 6000).animate({'margin-left': '80%'}, 6000, ani);
        }
      }
    };
    ani();
  });
  

  var collision = function(dancer1, dancer2) {
    console.log('dancer1: ', dancer1, ' dancer2: ', dancer2);
    var x1 = dancer1.offset().left;
    var y1 = dancer1.offset().top;
    var h1 = dancer1.outerHeight(true);
    var w1 = dancer1.outerWidth(true);
    var vertBoundary1 = y1 + h1;
    var horizBoundary1 = x1 + w1;
    var x2 = dancer2.offset().left;
    var y2 = dancer2.offset().top;
    var h2 = dancer2.outerHeight(true);
    var w2 = dancer2.outerWidth(true);
    var vertBoundary2 = y2 + h2;
    var horizBoundary2 = x2 + w2;

    if (vertBoundary1 < y2 || y1 > vertBoundary2 || horizBoundary1 < x2 || x1 > horizBoundary2) {
      return false;
    }
    return true;
  };
});
