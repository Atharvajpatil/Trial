 var ball
var right,right_img
var left,left_img
function preload() {
right_img = loadImage("right_arrow.jpg")
left_img = loadImage("left_arrow.jpg")
}

function setup() {
  createCanvas(600, 300);
ball = createSprite(300,150,20,20)

right = createSprite(450,200,30,30)
right.addImage(right_img)
right.scale = 0.05

left = createSprite(150,200,30,30)
left.addImage(left_img)
left.scale = 0.25
}

function draw() {
  background("black");


  if(keyIsDown(LEFT_ARROW)||mousePressedOver(left)||touches.length>0.02){
    ball.x-=2
touches = []
  }
  if(keyIsDown(RIGHT_ARROW)||mousePressedOver(right)||touches.length>0.03){
    ball.x+=2
touches = []
  }
  drawSprites();

}
