var SlowDancer = class extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps * 2);
    var gifString = '<img src="https://i.giphy.com/media/yqMtk0TfjRa5W/giphy.webp"></img>';
    this.$node = $('<div class="slowDancer">' + gifString + '</div>');
    this.setPosition(100, left);
  }
  

};