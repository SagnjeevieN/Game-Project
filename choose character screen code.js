noStroke();

text("Choose Your Character", 80,40);
fill(175, 196, 219);
rect(0,0,400,85);

//buttons

var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    fill(0, 234, 255);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
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
    x: 10,
    y: 135,
    width: 125,
    label: "Male Name",
    onClick: function() {
        text("Nice! Onto the tutorial", this.x, this.y+this.height);
    }
});
btn1.draw();


var btn2 = new Button({
    x: 265,
    y: 135,
    width: 125,
    label: "Female Name",
    onClick: function() {
        text("Nice! Onto the tutorial", this.x, this.y+this.height);
    }
});
btn2.draw();


mouseClicked = function() {
    btn1.handleMouseClick();
    btn2.handleMouseClick();
};
