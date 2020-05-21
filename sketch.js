var paper, ground, wood1, wood2, wood3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(100,375,50);

	wood1 = new Box(800, 355, 200, 10);
	wood2 = new Box(900, 300, 10, 100);
	wood3 = new Box(700, 300, 10, 100);

	//Create a Ground
	ground = new Ground(500,380,1000,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  wood1.display();
  wood2.display();
  wood3.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.positon,{x:80,y:-100});
	}
}

