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

  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var context = canvas.getContext('2d');
    var square = new Square(10, 50, 50, '#333', '#ccc');
    square.draw(context);
    square.setPosition(100, 100);
    square.draw(context);
    square.setPosition(200, 100);
    square.draw(context);
  }
}());
