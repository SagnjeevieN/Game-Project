background(212, 241, 255);
var grassXs = [];
for (var i = 0; i < 8; i++) {
    grassXs.push(i*23);
}
draw = function() {
    noStroke();
     // sun
     fill(255, 247, 0); 
     ellipse(346, 41, 70, 70);
     fill(133, 80, 45);
    rect(0, height*0.84, width, height*0.33);
    
     fill(212, 241, 255);
     rect(191, 316, 73, 185);
   
    // draw blocks
    for (var i = 0; i < grassXs.length; i++) {
        image(getImage("cute/GrassBlock"), 0, 315, 191, 40);
       for (var i = 0; i < grassXs.length; i++) {
        image(getImage("cute/GrassBlock"), 264, 315, 137, 40);}
    }
    
};

var f = createFont ("Arial");
textFont(f,30);
fill(102, 100, 100);
text ("Welcome to Our Game!", 45,120);


var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    fill(148, 251, 255);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(25);
    textAlign(LEFT,TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

var btn1 = new Button({
    x: 155,
    y: 145,
    width: 80,
    label: "Start",
});
btn1.draw();


