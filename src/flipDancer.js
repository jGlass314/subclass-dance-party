var FlipDancer = class extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    var imgString = '<img src="http://www.picpng.com/uploads/small/Disco_Dance_Silhouette_Rock_85121.Png"></img>';
    this.$node = $('<span>' + imgString + '</span>');
    this.setPosition(top, left);
  }

  flip() {
    super.step();
    this.$node.mouseover(function() {
      $(this).addClass('img');
    }).mouseleave(function() {
      $(this).removeClass('img');
    });
  }
};