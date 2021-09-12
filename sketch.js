var bgimg
var catimg
var mouseimg
var catimg2
var catimg3
var catimg4
var garden
var mouseimg2
var mouseimg3
var mouseimg4

function preload() {
    //load the image
    bgimg = loadImage("images/garden.png")
    catimg=loadImage("images/cat.png")
    mouseimg=loadImage("images/mouse.png")
    mouseimg2=loadAnimation("catRunning","catSitting")
    catimg2=loadAnimation("mousTeasing","mouseLooking")

}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 cat=createSprite(870,300)
 cat.addAnimation("catSitting",catimg1)
 cat.scale=0.2
 mouse=createSprite(900,500)
 mouse.addAnimation("mouseLooking",mouseimg)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if (cat.x-mouse.x<(cat.width-mouse.width)/2){
     cat.velocityX=0
    cat.addAnimation=("catRunning",catimg2)
    cat.changeAnimation=("catRunning")
     cat.x=300
     cat.scale=0.2
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if (keyCode=== Left_Arrow){

  mouse.addAnimation("mouseTeasing",mouseimg2)
  mouse.changeAnimation("mouseTeasing")
  mouse.frameDelay=25
  cat.velocity = -5 
 }

}
