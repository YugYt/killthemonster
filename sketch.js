var canvas, hero, heroImg, backgroundImg;
function preload(){
heroImg = loadImage("js/hero.png")
//backgroundImg = loadImage("js/background.png")
}
function setup(){
canvas=createCanvas(800, 400)
hero=createSprite(100, 100, 100, 40)
hero. addImage(heroImg)
hero.scale=0.5


}
function draw(){
background('yellow')
background.velocityX=2
if(keyDown(RIGHT_ARROW)){
hero.velocityX=1
}
if(keyDown(DOWN_ARROW)){
hero.velocityY=2
}
if(keyDown(UP_ARROW)){
hero.velocityY=-2
}

drawSprites();
}