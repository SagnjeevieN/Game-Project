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

var yVel = 0;

var gravity = 1.2;

var isJumping = false;




char.draw = function() {
    fill(245, 0, 245);
    ellipse(21, 312, 30, 30
    );
};

char.jump = function() {
    if (isJumping == false) {
        yVel = -15;
        isJumping = true;
        
    }   

}

jumpLoop = function() {
    if   
    
}

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
        image(getImage("cute/GrassBlock"), 264, 315, 171, 40)
        
    }
        
    }
     
};
      
    
};
    
    
   
    
