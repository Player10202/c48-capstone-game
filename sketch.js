var kong,kongImg,kongjumpImg
var helicopter, lefthelicopterImg, righthelicopterImg
var backgroundimg
var invisiground
var invisiground2, invisiground3
var kong,kongImg,kongjumpImg
var helicopter, lefthelicopterImg, righthelicopterImg
var backgroundimg
var invisiground
var invisiground2, invisiground3
var helicopter1,helicopter2,helicopter3,helicopter4, helicopter5,helicopter6

function preload(){
backgroundimg=loadImage("background.jpg")
kongImg=loadImage("kingkongstand.png")
kongjumpImg=loadImage("kingkongjump.png")
lefthelicopterImg=loadImage("helileft.png")
righthelicopterImg=loadImage("heliright.png")

}

function setup() {


  createCanvas(1600,900);
  //createSprite(400, 200, 50, 50);
//background = createSprite(500,450,200,200)
///background.addImage(backgroundimg)
//background.scale = 1.5

invisiground=createSprite(800,810,1606,15)
invisiground.visible=false
invisiground2=createSprite(65,450,15,900)
invisiground2.visible=false
invisiground3=createSprite(1400,450,15,900)
invisiground3.visible=false

kong=createSprite(500,700,50,50)
kong.addImage(kongImg)


//helicopter1=createSprite(300,230,50,50)
//helicopter1.addImage(lefthelicopterImg)
//helicopter1.scale=0.5
//helicopter2=createSprite(400,500,50,50)
//helicopter2.addImage(lefthelicopterImg)
//helicopter2.scale=0.5
//helicopter3=createSprite(700,300,50,50)
//helicopter3.addImage(righthelicopterImg)
//helicopter3.scale=0.5
//helicopter4=createSprite(600,200,50,50)
//helicopter4.addImage(righthelicopterImg)
//helicopter4.scale=0.5
//helicopter5=createSprite(460,320,50,50)
//helicopter5.addImage(lefthelicopterImg)
//helicopter5.scale=0.5
//helicopter6=createSprite(780,100,50,50)
//helicopter6.addImage(righthelicopterImg)
//helicopter6.scale=0.5


}

function draw() {
  background(backgroundimg);  

  if(keyWentDown("space")){
    kong.velocityY-=3
    kong.addImage(kongjumpImg)


  }


  else if(keyWentUp("space")){
    kong.addImage(kongjumpImg)
    kong.scale=2.4
  }

  kong.velocityY+=1
  kong.collide(invisiground) 


if (kong.collide(helicopter1)){
  helicopter1.remove()

}




  drawSprites();
}

function spawnhelicopter(){
if(frameCount % 60===0){
  helicopter=createSprite(0,random(100,700),10,10)
  helicopter.addImage(lefthelicopterImg)
}

}
