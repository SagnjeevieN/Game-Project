 function setup() {
createCanvas(windowWidth, windowHeight)
	background(100);

 }

var drawCrystalTop = function(x,y,z,a){
fill(175,224,224);
	triangle(x,0,y,0,z,a)
};
var drawCrystalBottom = function(b,c,d,e){
fill(175,224,224);
};
draw = function() {
   

   background(107, 113, 115);
 
   
drawCrystalTop(0,87,44,84)
    drawCrystalTop(53,152,114,138);
   drawCrystalTop(237,160,204,96);
	drawCrystalTop(390,276,285,105);
	
fill(66, 62, 62);
rect(0,333,400,129);
// Crysals
//triangle(309,0,226,0,250,106);

fill(175, 224, 224);
//triangle(0,0,87,0,44,84);
//triangle(53,0,152,0,114,138);
//triangle(257,0,160,0,204,96);
// triangle(390,0,276,0,285,105);
// triangle(158,400,74,400,109,338);
// triangle(274,400,157,400,178,270);
// triangle(18,407,89,400,40,338);
// triangle(391,400,311,407,345,340);
// triangle(313,400,239,400,264,340);
//Character
fill(62, 207, 110);
ellipse(57,301,25,26);
// Obstacle
fill(232, 189, 139);
rect(258,-15,10,222);
rect(340,-15,10,222);
rect(259,197,90,10);


};



