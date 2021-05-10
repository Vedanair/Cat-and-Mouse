var gardenImg
var cat, catImg1, catImg2, catImg3
var mouse, mouseImg1, mouseImg2, mouseImg3

function preload() {
    //load the images here
    gardenImg = loadImage("images/ garden.png")
    catImg1 = loadAnimaton ("images/ cat1.png")
    catImg2 = loadAnimation ("images/ cat2.png", "images/ cat3.png")
    catImg3 = loadAnimation("images/cat4.png")
    mouseImg1 = loadAnimation ("images/ mouse1.png")
    mouseImg2 = loadAnimation ("images/ mouse2.png", "images/ mouse3.png")
    mouseImg3 = loadAnimation ("images/ mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite (900, 600)
    cat.addAnimation ("catStanding", catImg1)

}

function draw() {

    background("pink");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
