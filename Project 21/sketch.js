
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball;
var radius=40;
var groundObj;
var left ;
var right;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   var ball_options={
	isStatic:false,   
   restitution:0.3,
   friction:0,
   density:1.2
   };

   ball=Bodies.circle(100,200,radius/2,ball_options);
   World.add(world,ball);

  groundObj =new Ground(width/2,670,width,20);
  left=new Ground(1100,600,20,120);
  ellipseMode(CENTER);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.display();
  left.display();

  drawSprites();
 
}



