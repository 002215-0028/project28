
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Stone, Tree, Ground;
var Mango1, Mango2, Mango3, Mango4, Mango5, Mango6;
var BoyImage, boy;

function preload()
{
	BoyImage = loadImage("PLucking Mangoes 2/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//var boy = createSprites(30, 30, 30, 30);
	//boy.setImage(BoyImage);
	Tree = new tree(100, 50, 30, 30);
	Mango1 = new mango(100, 55, 30, 30);
	Mango2 = new mango(100, 60, 30, 30);
	Mnago3 = new mango(100, 45, 30, 30);
	Mango4 = new mango(100, 40, 30, 30);
	Mango5 = new mango(95, 50, 30, 30);
	Mango6 = new mango(105, 50, 30, 30);
	Stone = new stone(30, 30, 30, 30);
	Ground = new ground(10,10, 800, 5); 
	Elastic = new elastic(Stone.body,{x:200, y:50});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Tree.display();
  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango5.display();
  Mango6.display();
  Stone.display();
  Ground.display();
  Elastic.display();
  
  drawSprites();
 
}
function mouseDragged(){
  
	Matter.Body.setPosition(Stone.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
Elastic.fly();
}
function detectcollision(lstone, lmango){
	mangoBodypos = lmango.body.position;
	stoneBodypos = lstone.body.position;

	var distance = dist(stoneBodypos.x, stoneBodypos.y, mangoBodypos.x, mangoBodypos.y)
	if (distance<=lmango.r+lstone.r){
		Matter.body.setStatic(lmango.body.false);
	}
}




