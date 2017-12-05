var HomerDancer = class extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    var gifString = '<img src="http://gifimage.net/wp-content/uploads/2017/06/transparent-gif-1.gif"></img>';
    this.$node = $('<span class="homer">' + gifString + '</span>');
//    console.log(this.$node);
  }
};