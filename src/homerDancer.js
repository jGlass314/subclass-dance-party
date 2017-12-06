var HomerDancer = class extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    var gifString = '<img src="http://gifimage.net/wp-content/uploads/2017/06/transparent-gif-1.gif"></img>';
    this.$node = $('<span class="homer">' + gifString + '</span>');
    this.setPosition(top, left);
    this.moveLeft = true;
/*
    $('.homer').animate({'margin-left': '80%'}, 6000).animate({'margin-left': '0%'}, 6000, ani);
      var homerSet = $('body').find('.homer');
      
      var homer1,
        homer2;
      for (var i = 1; i < homerSet.length; i++) {
        homer1 = homerSet[i - 1];
        homer2 = homerSet[i];
         if (collision(homer1, homer2) === true) {
          console.log('collision:',true);
          $(homer1).animate({'margin-left': '80%'}, 6000).animate({'margin-left': '0%'}, 6000);
          $(homer2).animate({'margin-left': '0%'}, 6000).animate({'margin-left': '80%'}, 6000);
        } else {
          console.log('collision:',false);
        }
      }
    };
*/
//    console.log(this.$node);
  }

  step() {
    super.step();
    var homerSet = $('body').find('.homer');
      
    var homer1,
      homer2;
    for (var i = 0; i < homerSet.length; i++) {
      for(var j = 0; j < homerSet.length; j++) {
        if(i === j) {
          continue;
        }
        homer1 = homerSet[i];
        homer2 = homerSet[j];
        if (this.collision(homer1, homer2) === true) {
          console.log('collision:',true);
          $(homer1).animate({'margin-left': '80%'}, 6000).animate({'margin-left': '0%'}, 6000);
          $(homer2).animate({'margin-left': '0%'}, 6000).animate({'margin-left': '80%'}, 6000);
        } else {
          console.log('collision:',false);
        }
      }
    }
  }

  collision(dancer1, dancer2) {
 //   console.log('dancer1: ', dancer1, ' dancer2: ', dancer2);
    var x1 = $(dancer1).offset().left;
    var y1 = $(dancer1).offset().top;
    var h1 = $(dancer1).outerHeight(true);
    var w1 = $(dancer1).outerWidth(true);
    var vertBoundary1 = y1 + h1;
    var horizBoundary1 = x1 + w1;
    var x2 = $(dancer2).offset().left;
    var y2 = $(dancer2).offset().top;
    var h2 = $(dancer2).outerHeight(true);
    var w2 = $(dancer2).outerWidth(true);
    var vertBoundary2 = y2 + h2;
    var horizBoundary2 = x2 + w2;

    if (vertBoundary1 < y2 || y1 > vertBoundary2 || horizBoundary1 < x2 || x1 > horizBoundary2) {
      return false;
    }
    return true;
  }
};