// Creates and returns a new dancer object that can step
class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    this.$node = $('<span class="dancer"></span>');
    this.setPosition(top, left);
    this.step();
  }
  step() {
    var func = this.step.bind(this);
    setTimeout(func, this.timeBetweenSteps);
  }
  setPosition(top, left) {
    var styleSettings = {
      top: top,
      left: left  
    };
    this.$node.css(styleSettings);
  }
}