var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3,box4,box5,box6;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1=createSprite(250, 630, 10,50);
	box1.shapeColor="red"

	box2=createSprite(450, 630, 10,50);
	box2.shapeColor="red"

	box3=createSprite(350, 655, 210,10);
	box3.shapeColor="red"

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	keyPressed();

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	
	 box4 = Bodies.rectangle(250, 630, 10, 50 , {isStatic:true} );
	 World.add(world, box4);

	 box5 = Bodies.rectangle(450, 630, 10, 50 , {isStatic:true} );
	 World.add(world, box5);
	 
	 box6 = Bodies.rectangle(350, 655, 210, 10 , {isStatic:true} );
	 World.add(world, box6);
	
	Engine.run(engine);
	
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 



 box1.display();
 box2.display();
 box3.display();
  
  packageSprite.display();
  helicopterSprite.display();
  groundSprite.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false)
  }
}



