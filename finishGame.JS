var currentScene;

var drawScene1 = function() {
    currentScene = 1;

    background(212, 241, 255);
var grassXs = [];
for (var i = 0; i < 8; i++) {
    grassXs.push(i*23);
}
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

var btn = new Button({
    x: 155,
    y: 145,
    width: 80,
    label: "Start",
});
btn.draw();

};

var drawScene2 = function() {
    currentScene = 2;
    background(204, 229, 255);
    fill(0, 0, 0);
    textSize (30);
    text("Choose Your Character", 40, 50);
    stroke(0,0,0);
    line(0,80,400,80);

    noStroke();
    var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};
    var btn1 = new Button({
    x: 10,
    y: 135,
    width: 125,
    label: "Male Name",
    
    onClick: function() {
        text("Great! Onto the tutorial!", this.x, this.y+this.height);
    }
});
    btn1.draw();

    var btn2 = new Button({
    x: 260,
    y: 135,
    width: 130,
    label: "Female Name",
    onClick: function() {
        text("Great! Onto the tutorial!", this.x, this.y+this.height);
    }
});
    btn2.draw(); 

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

    image(getImage("cute/CharacterBoy"), 25,200,100,120);
    image(getImage("cute/CharacterHornGirl"), 300,200,100,120);
    
    mouseClicked = function(){
    btn1.handleMouseClick();
    btn2.handleMouseClick();
    };

    };


var drawScene3 = function() {
    currentScene = 3;
   
};

var drawScene4 = function() {
    currentScene = 4;
};

var drawScene5 = function() {
    currentScene = 5;
    
};

draw = function() {
    if (currentScene === 4) {
        drawScene4();
    }
    
};

mouseClicked = function() {
    
    if (currentScene === 1) {
        drawScene2();
    } else if (currentScene === 2) {
        drawScene3();
    } else if (currentScene === 3) {
        drawScene4();
    }  else if (currentScene === 4) {
        drawScene5();
    } else if (currentScene === 5) {
        drawScene1();
    }
    
};

drawScene1();

//buttons




