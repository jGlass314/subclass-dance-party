var DiscoDancer = class extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    var gifString = '<img src="https://media.giphy.com/media/3orif8Hkj7sCODCZaw/giphy.gif" width=10% height=10%></img>';
    this.$node = $('<span class="hide">' + gifString + '</span>');
//    console.log(this.$node);
  }
};