(function(){
  var Square = function(length, x, y, borderColor, fillColor){
    this.length = length;
    this.x = x;
    this.y = y;
    this.borderColor = borderColor;
    this.fillColor = fillColor;
  };

  Square.prototype.setPosition = function(x, y){
    this.x = x;
    this.y = y;
  };

  Square.prototype.draw = function(context){
    context.strokeStyle = this.borderColor;
    context.fillStyle = this.fillColor;
    var centerX = this.x - (this.length / 2);
    var centerY = this.y - (this.length / 2);
    context.fillRect(centerX, centerY, this.length, this.length);
    context.strokeRect(centerX, centerY, this.length, this.length);
  };

  var Painting = function(elementId){
    if (!canvas.getContext){
      alert('Your browser does not support canvases');
    }
    this.canvas = document.getElementById(elementId);
    if (!this.canvas){
      console.log('Element with id "' + elementId + '" not found in DOM');
    }
    this.attachClick();
  };

  Painting.prototype.getContext = function(){
    return this.canvas.getContext('2d');
  };

  Painting.prototype.reset = function(){
    this.canvas.width = this.canvas.width;
  };

  Painting.prototype.attachClick = function(){
    $(this.canvas).click(this.handleClick.bind(this));
  };

  Painting.prototype.handleClick = function(e){
    var context = this.getContext();
    var square = new Square(10, e.clientX, e.clientY, '#333', '#ccc');
    square.draw(context);
  };

  var painting = new Painting('canvas');

  var resetButton = $("#reset");
  resetButton.click(painting.reset.bind(painting));
}());
