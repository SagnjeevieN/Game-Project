//start page alignment
imageMode(CORNER);
textAlign(LEFT);
//hearts 
var getHeart = getImage("cute/Heart");
var heartPic = function(x, y, size) {
    image(getHeart, x, y, size/1.5, size);
};
//star
var getStar = getImage("space/star");
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
//start screen
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

noStroke();
stroke(0, 0, 0);
strokeWeight(3);
fill(255, 255, 255);
rect(155, 150, 100, 50);
fill(0, 0, 0);
text("START", 157, 184);
var page = "menu";
var draw = function() {
    if(mouseIsPressed && mouseX > 155 && mouseX < 255 && mouseY > 150 && mouseY <      200) {
        page = "StartGame";
    }
 var triX = mouseX;
        var triY = 320;
        
        background(0, 166, 255);
        
        noStroke();
     
        fill(0, 0, 0);
        
        textSize(18);
        text("Score: " + points, 40, 30);
        
        StarPic(starX, starY, 40);
        
        starY += starSpeed;
        
        fill(0, 166, 255);
        
        rect(triX - 25, triY, 50, 100);
        
        fill(0, 110, 179);
        
        triangle(triX - 25, triY, triX + 25, triY, triX, triY + 100);
        
        fill(0, 255, 4);
        
        rect(0, 360, 400, 40);
        
        if(lives > 3) {
            
            lives = 3;
        }
        
        if(starY > 340 && starX > triX - 25 && starX < triX + 25) {
            
            starY = -5;
            starX = random(20, 380);
            
            starSpeed += starSpeedIncrease;
            
            points += 1;
        }
        else if(starY > 380 && starY < 390) {
            
            starY = -5;
            starX = random(20, 380);
            
            starSpeed += starSpeedDecrease;
            
            lives -= 1;
        }
        
        for(var i = 0; i < lives && lives <= 3; i += 1) {
            
            heartPic(303 + i * 20, 6, 47);
        }
        
        if(lives < 1) {
            
            starX = 500;
            
            fill(0, 0, 0);
            
            textSize(25);
            text("You LOSE!", 127, 180);
        }
        
        if(lives > 3) {
            
            lives = 3;
        }    
    };    





