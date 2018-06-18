var currentScene;
var getGrass;
function setup(){
    createCanvas(400, 400);
    getGrass = loadImage("grass.png");
    drawScene1();
};
var grassPic = function(x, y, w,h) {
        image(getGrass, x, y, w,h); 
    };
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

var drawBackground = function() {
    
    
    /*var grassXs = [];
    for (var i = 0; i < 8; i++) {
        grassXs.push(i*23);
    }*/
    background(212, 241, 255);
    // draw blocks
    grassPic(0, 267, width, height*0.33);

   fill(133, 80, 45);
   rect(0, 387, width, height*0.33);
   
};

var drawScene1 = function() {
    currentScene = 1;
    drawBackground();
    noStroke();
// sun
     fill(255, 247, 0); 
     ellipse(346, 41, 70, 70);


textSize(30);
fill(102, 100, 100);
text ("Welcome to Starcatcher!", 45,120); 



var btn1 = new Button({
    x: 155,
    y: 145,
    width: 80,
    label: "Start",
});
btn1.draw();
};

var drawScene2 = function() {
    currentScene = 2;
    
    //start page alignment
imageMode(CORNER);
textAlign(LEFT);
    
//hearts
var getHeart = loadImage("HEART-01.png");
var heartPic = function(x, y, size) {
    image(getHeart, x, y, size, size); 
};
//star
var getStar = loadImage("star.png");
var StarPic = function(x, y, size) {
    image(getStar, x, y, size, size);
};
var starSpeed = 3.5;
var starSpeedIncrease = 0.06;
var starSpeedDecrease = -1;
var starY = -5;
var starX = random(20, 380);
var points = 0;
var lives = 3;
var numStars = 0;
//start screen

var page = "menu";
 
draw = function() {
    if(mouseIsPressed && mouseX > 155 && mouseX < 255 && mouseY > 150 && mouseY < 200) {
        page = "StartGame";
       
    }
    drawBackground();
    
 var triX = mouseX;
        var triY = 320;
        noStroke();
     
        fill(0, 0, 0);
        textSize(18);
        text("Score: " + points + "  Stars: " + numStars, 40, 30);
        StarPic(starX, starY, 40);
        starY += starSpeed;
        
        fill(0, 110, 179);
        quad(triX+15, 387, triX-15, 387, triX-25,triY, triX+25,triY);
        
        if(lives > 3) {
            lives = 3;
        }
        
        if(starY > 340 && starX > triX - 25 && starX < triX + 25) {
            starY = -5;
            starX = random(20, 380);
            starSpeed += starSpeedIncrease;
            points += 1;
            numStars += 1; 
        }
        else if(starY > 380 && starY < 390) {
            starY = -5;
            starX = random(20, 380);
            starSpeed += starSpeedDecrease;
            lives -= 1;
            numStars += 1;
        }
    
        fill(0, 0, 0);
        text("Lives: ", 250, 30);
        for(var i = 0; i < lives && lives <=3; i += 1) {
            heartPic(303 + i * 20, 30, 20);
        }
        
        if(lives < 1) {
            starX = 500;
            fill(0, 0, 0);
            textSize(25);
            text("Sorry you lose!", 127, 180);
            text("You caught " + points + " star(s) out of " + numStars + " :(", 16, 200);
            btn2.draw();
            btn3.draw();
        }
    
       if(lives > 3) {
            lives = 3;
        } 
     };
};
    var btn3 = new Button({
    x: 220,
    y: 260,
    width: 110,
    label: "Cancel",
    onClick: function(){
        drawScene3();
    }
});
var drawScene3 = function() {
    currentScene = 3;
    drawBackground();    
    text("Thanks for playing!", 200, 200);
};

var drawScene4 = function() {
    currentScene = 4;
};

var drawScene5 = function() {
    currentScene = 5;
    
};
//create restart button
var btn2 = new Button({
    x: 90,
    y: 260,
    width: 110,
    label: "Restart",
    onClick: function(){
        drawScene2();
    }
});
mouseClicked = function() {
    btn2.handleMouseClick();
    btn3.handleMouseClick();
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
