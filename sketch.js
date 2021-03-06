
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var Sling
function preload()
{
	boyImg=loadImage("Images/boy.png");
	treeImg=loadImage("Images/tree.png")

}

function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=Bodies.rectangle(width/2,680,width,20)
mango1=new mango(800,400,30);
mango2=new mango(900,430,50);
mango3=new mango(870,400,40);
mango4=new mango(970,330,45);
mango5=new mango(830,350,44);
mango6=new mango(970,443,49);
stone1=new Stone(150,250,35);
Sling=new SlingShot(stone1,{x:200,y:300})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  imageMode(CENTER)
  image(boyImg,200,650,200,200);
  image(treeImg,1000,450,600,600);
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  stone1.display()
  Sling.display()
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Sling.attach(stone1.body)
    }
}

