var sceneO = 0;
var grassXs = [];
for (var i = 0; i < 8; i++) {
    grassXs.push(i*23);
}
var char = function(x, y) {
    this.x = x;
    this.y = y;
    char = fill(245, 0, 245);
    ellipse(200, 200, 30, 30);
};

var stageHeight = 300;

var stageWidth = 400;

var blockHeight = 70;

var characterHeight = 100;

var characterWidth = 100;

var key_Space = 32;

var key_Left = 37;

var key_Right = 39;

var jumpSpeed = 1000;

var yVel = 0;

var xVel = 7;

var gravity = 1.2;

var isJumping = false;

var right = false;

var left = false;

var characterGround = stageHeight - blockHeight - characterHeight;

this.y = constrain(this.y, 0, height-50);

char.draw = function() {
    fill(245, 0, 245);
    ellipse(21, 312, 30, 30);
    this.y = constrain(this.y, 0, height-50);

};

var jumpLoop = function() {
    if (isJumping) {
        yVel += gravity;
        char.y += yVel;
        if (char.y > characterGround) {
            char.y = characterGround; 
            yVel = 0;
            isJumping = false;
            
        } 
    } 
};

var handleKeyDown = function(e) {
    switch (e.keyCode) {
        case key_Space:
        case 87:  // W
            jumpLoop();
            break;
        case key_Left:
        case 65:  // A
            left = true;
            break;
        case key_Right:
        case 68:  // D
            right = true;
            break;
    }
};

var handleKeyUp = function(e) {
    switch (e.keyCode) {
        case key_Left:
        case 65: // A
            left = false;
            break;
        case key_Right:
            case 68: // D
            right = false;
            break;
    }
};

var jump = function() {
    if (isJumping === false) {
        yVel = -15;
        isJumping = true;
    
    
    
    
    }   
};

char.jump = function() {
    if (isJumping === false) {
        yVel = -15;
        isJumping = true;
        
    }   

};

draw = function() {
    // sky + ground
    background(146, 248, 252);
    fill(133, 80, 45);
    rect(0, height*0.84, width, height*0.33);
    
     fill(146, 248, 252);
     rect(191, 316, 73, 185);
     noStroke();
    
    //character
       char.draw();
        
     // sun
     fill(255, 247, 0);
     ellipse(346, 58, 70, 70);
   
    // draw blocks
    for (var i = 0; i < grassXs.length; i++) {
        image(getImage("cute/GrassBlock"), 0, 315, 191, 40);
       
       for (var i = 0; i < grassXs.length; i++) {
        image(getImage("cute/GrassBlock"), 264, 315, 137, 40);
              
    }
    
    }
};
