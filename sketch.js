
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var roof;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
var bobDiameter = 40;


function preload()
{
	
}

function setup() 
{
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(575, 500, 50);
	bob2 = new Bob(475, 500, 50);
	bob3 = new Bob(375, 500, 50);
	bob4 = new Bob(275, 500, 50);
	bob5 = new Bob(175, 500, 50);

	roof = new Roof(375, 100, 550, 40)

	rope1 = new Rope(bob1.body, roof.body, bobDiameter*4.87, 20);
	rope2 = new Rope(bob2.body, roof.body, bobDiameter*2.435, 20);
	rope3 = new Rope(bob3.body, roof.body, bobDiameter*0, 20);
	rope4 = new Rope(bob4.body, roof.body, -bobDiameter*2.435, 20);
	rope5 = new Rope(bob5.body, roof.body, -bobDiameter*4.87, 20);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(200);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		
	
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x: 75, y: 100})
		Matter.Body.setStatic(true);
	}
}

