
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree (400,300,30,400);
	ground = new Ground(400,600,900,30);
	stone = new Stone(300,20,30,20);
	boy = new Boy (500,500,20,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  tree.display();
  ground.display();
  stone.display();
  boy.display();

  drawSprites();
 
}



