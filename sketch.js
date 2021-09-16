var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png")
  blue_balloonImage = loadImage("blue_balloon0.png")
  pink_balloonImage = loadImage("pink_balloon0.png")
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  score=0;
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 50 === 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
    if (select_balloon == 2) {
      greenBalloon();
    }
    if (select_balloon == 3) {
      blueBalloon();
    }
    if (select_balloon == 4) {
      pinkBalloon();
    }
    
  }
  
  
  
  drawSprites();
  text("SCORE: "+score,270,30);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -10;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(20,-10, 10, 10)
  red.x = Math.round(random(50,350))
  red.addImage(red_balloonImage);
  red.velocityY = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  var  blue = createSprite(20,-10, 10, 10)
  blue.x = Math.round(random(50,350))
  blue.x = Math.round(random(50,350))
  blue.addImage(blue_balloonImage);
  blue.velocityY = 3;
  blue.lifetime = 150;
  blue.scale = 0.07;

}

function greenBalloon() {
  var green = createSprite(20,-10, 10, 10)
  green.x = Math.round(random(50,350))
  green.addImage(green_balloonImage);
  green.velocityY = 3;
  green.lifetime = 150;
  green.scale = 0.08;
}

function pinkBalloon() {
  var  pink = createSprite(20,-10, 10, 10)
  pink.x = Math.round(random(50,350))
  pink.addImage(pink_balloonImage);
  pink.velocityY = 3;
  pink.lifetime = 150;
  pink.scale = 0.9;

}
