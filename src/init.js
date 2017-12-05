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
      ($('body').height() * Math.random() + 50) % ($('body').height() - 20),
      ($('body').width() * Math.random()) % ($('body').width() - 20),
      /*Math.random() * */500
    );
    window.dancers.push(dancer);
    
//    console.log(dancer);
    $('body').append(dancer.$node);
    var moveleft = true;
    $('.hide, .dancer').on("mouseover", function(event) {
      console.log('this:',this);
      
      if (moveleft === true) {
        $(this).animate({left: '250px'}, 'fast');
        moveleft = false;
      } else {
        $(this).animate({left: '500px'}, 'fast');
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

  
});
