var sceneO = 0;
var grassXs = [];
for (var i = 0; i < 8; i++) {
    grassXs.push(i*23);
}
//scene 2
var sceneI = 12;
var grassYs = [];
for (var m = 1; m < 30; m++) {
    grassYs.push(m*20);
}


var char = function(x, y) {
    this.x = x;
    this.y = y;
    fill(245, 0, 245);
    ellipse(200, 200, 30, 30);
};

var Char = new char (200, 200);


draw = function() {
    // sky + ground
    background(146, 248, 252);
    fill(133, 80, 45);
    rect(0, height*0.84, width, height*0.33);
    
     fill(146, 248, 252);
     rect(191, 316, 73, 185);
     noStroke();
        
     // sun
     fill(255, 247, 0);
     ellipse(346, 58, 70, 70);
   
    // draw blocks
    for (var i = 0; i < grassXs.length; i++) {
        image(getImage("cute/GrassBlock"), grassXs[i], height*0.77, 30, 40);
       
       
     
        
        }
        
    };
    
    
   
    
