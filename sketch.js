var garden,rabbit,apple;
var gardenImg,rabbitImg,appleImg,leafImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  leafImg=loadImage("orangeLeaf.png");

}

function setup(){

  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.addImage(rabbitImg);
rabbit.scale =0.09;

}

function createApples(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg)
  apple.scale=0.10;
  apple.velocityY=2;
  apple.setLifetime=15;
}
function createleaf(){
  leaf=createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.scale=0.10;
  leaf.velocityY=2;
  leaf.setLifetime=15;
}


function draw() {
  background(0);

  rabbit.x=World.mouseX;
  
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

var select_sprites=Math.round(random(1,2));

 if(frameCount%80==0){
    if(select_sprites==1){
      createApples();
    }
    else if(select_sprites==2){
     createleaf();
    }
  }
 

  drawSprites();
}