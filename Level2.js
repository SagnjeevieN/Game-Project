function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);

}

function draw() {
	ellipse(mouseX, mouseY, 20, 20);
}
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
	triangle(b,463,c,463,d,e);
};
draw = function() {
   

   background(107, 113, 115);
 
    fill(66, 62, 62);
 rect(0,333,400,129);
	rect(470,333,400,129);
		drawCrystalTop(0,87,44,84)
    drawCrystalTop(53,152,114,138);
  	drawCrystalTop(237,160,204,96);
		drawCrystalTop(390,276,285,105);
			drawCrystalBottom(158,74,109,338);
			drawCrystalBottom(274,157,178,270);
			drawCrystalBottom(18,89,40,338);
			drawCrystalBottom(391,311,345,340);
			drawCrystalBottom(313,239,264,340);
			drawCrystalBottom(470,650,554,325);
			drawCrystalBottom(577,700,750,350);
// Crysals
//triangle(309,0,226,0,250,106);

fill(175, 224, 224);

//Character
fill(62, 207, 110);
ellipse(57,301,25,26);
// Obstacle
fill(232, 189, 139);
rect(258,-15,10,222);
rect(340,-15,10,222);
rect(259,197,90,10);

};

