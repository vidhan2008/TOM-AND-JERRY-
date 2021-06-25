var bgimage
var tomimage1,cat
var tomimage2
var jerryimage1 ,mouse
var jerryimage2

function preload() {
    //load the images here
   bgimage = loadImage("garden.png")
   tomimage1 = loadAnimation("cat1.png")
   tomimage2 =loadAnimation("cat2.png","cat3.png")
   jerryimage1 =loadAnimation("mouse1.png")
   jerryimage2 = loadAnimation("mouse2.png","mouse3.png")
}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here
    cat=createSprite(550,500,50,50)
    cat.addAnimation("cat",tomimage1)
    cat.scale=0.2
    mouse=createSprite(150,500,50,50)
    mouse.addAnimation("mouse",jerryimage1)

}

function draw() {

    background(bgimage);
  
  
    //Write condition here to evalute if tom and jerry collide




if(cat.x - mouse.x> (cat.width - mouse.width)/2 ) {
    cat.addAnimation("catrunning",tomimage2)
    
    cat.scale=0.2

    mouse.addAnimation("mouseTeasing",jerryimage2)
    
    mouse.scale=0.1
}



if(keyCode === LEFT_ARROW){

cat.velocityX = -5;
 cat.addAnimation("tomRunning", tomimage2);
  cat.changeAnimation("tomRunning")

  mouse.addAnimation("jerryTeasing", jerryimage2);
   mouse.frameDelay = 25;
    mouse.changeAnimation("jerryTeasing");

}






    drawSprites();
}

