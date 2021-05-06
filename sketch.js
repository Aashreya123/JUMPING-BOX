var fixSprite1, fixSprite2, fixSprite3, fixSprite4;
var movingSprite;
var music1;

function preload(){
music1=loadSound("music.mp3");
}

function setup(){
    
    createCanvas(800,600);

    

    movingSprite=createSprite(random(10,750),300,20,20);
    movingSprite.shapeColor="white";
    movingSprite.velocityX=3;
    movingSprite.velocityY=3;

   
    fixSprite1=createSprite(100,580,180,30);
    fixSprite1.shapeColor="blue";

    fixSprite2=createSprite(300,580,180,30);
    fixSprite2.shapeColor="orange";

    fixSprite3=createSprite(500,580,180,30);
    fixSprite3.shapeColor="red";

    fixSprite4=createSprite(700,580,180,30);
    fixSprite4.shapeColor="green";

    

}

function draw() {
    background(rgb(10,10,10))
   
    if(movingSprite.x<0){
      music1.stop()
        movingSprite.velocityX=3
    }else if(movingSprite.x>800){
      music1.stop()
        movingSprite.velocityX=-3
    }
   
  if(movingSprite.isTouching(fixSprite4)&&movingSprite.bounceOff(fixSprite4)){
    music1.play()
    movingSprite.shapeColor="green";
   
    
  }
  
   if(movingSprite.isTouching(fixSprite3)&&movingSprite.bounceOff(fixSprite3)){
    music1.stop()
    movingSprite.shapeColor="red";
    
   
  }
    
  if(movingSprite.isTouching(fixSprite2)){
    music1.stop()
    movingSprite.shapeColor="orange";
    movingSprite.velocityX=0;
    movingSprite.velocityY=0;
  }
  
  if(movingSprite.isTouching(fixSprite1)){
    music1.stop()
    movingSprite.shapeColor="blue";
    movingSprite.bounceOff(fixSprite1)
  }

  if (movingSprite.y<0){
    music1.stop()
    movingSprite.velocityY=3
  }

  
   
    drawSprites()
}
