var ground;
var paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,615,1600,10);
	


	paper = new Paper(100,600,20);
	

	dustbin1 = new Dustbin(200,200,10,30);
	

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  ground.display();
  paper.display();
  
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



