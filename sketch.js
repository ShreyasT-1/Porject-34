
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){
  ballImg = loadImage("Images/ball.png")
  backImg = loadImage("Images/court.png")
}



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var options = {
    restitution: 2,
    density:1,
    friction:1 
  }
  ball = Bodies.rectangle(200,200,30,30,options)
  World.add(world,ball)
  ground = Bodies.rectangle(200,390,400,10,{isStatic:true})
  World.add(world,ground)
  rectMode(CENTER)
  ellipseMode(CENTER) 
}


function draw() 
{
  background(backImg)
  
  Engine.update(engine);
  image(ballImg,ball.position.x, ball.position.y,30,30)
  rect(ground.position.x,ground.position.y,400,10)  
  Engine.update(engine);
}

