//creating variables.
var bgImg;
var snitch,snitchImg;
var bludger,bludgerImg;
var harry,harryImg;

function preload(){
    //loading background image.
    bgImg = loadImage("quidditch_pitch.jpeg");
    //loading image for the snitches.
    snitchImg = loadImage("snitch.png");
    //loading image for the bludgers
    bludgerImg = loadImage("bludger.png");
    //loading image for harry(PC).
    harryImg = loadImage("harry1.png");
}

function setup(){
    //creating snitch sprite.
    snitch = createSprite(900,400,100,100);
    snitch.addImage("snitch",snitchImg);
    snitch.scale = 0.5;

    //creating bludger sprite.
    bludger = createSprite(800,200,100,100);
    bludger.addImage("bludger",bludgerImg);
    bludger.scale = 0.7;

    //creating harry(PC) sprite.
    harry = createSprite(300,350,100,30);
    harry.addImage("harry_potter",harryImg);
    harry.scale = 2.5;
}

function draw(){
    //creating canvas and adding background image.
    createCanvas(displayWidth -5,displayHeight -108);
    image(bgImg,0,0,displayWidth -5,displayHeight -108);
    //background("silver");

    drawSprites();
}