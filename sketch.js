var ship, shipImg1;
var movingShip;

var sea, seaImg;

function preload(){ 
seaImg = loadImage ("sea.png");
shipImg1 = loadAnimation ("ship-1.png", "ship-1.png", "ship-2.png", "ship-1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  sea = createSprite (200,150,400,20);
  sea.addImage("sea", seaImg);
  sea.velocityX = -5;
  sea.scale = 0.3;

  ship = createSprite (130, 200, 30, 30);
  ship.addAnimation("movingShip", shipImg1);
  ship.scale = 0.25;
}

function draw() {
  background(0);
  sea.velocityX = -3;

  if (sea.x < 0){
    sea.x = sea.width/7;
    }

drawSprites(); 
}
