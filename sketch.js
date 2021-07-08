
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	b = new Bob(500,620,50)
	b2 = new Bob(450,620,50)
	b3 = new Bob(400,620,50)
	b4 = new Bob(350,620,50)
	b5 = new Bob(300,620,50)

	r = new Roof(400,50,650,20)

	rope1 = new l(b.body,r.body,100,0)
	rope2 = new l(b2.body,r.body,50,0)
	rope3 = new l(b3.body,r.body,0,0)
	rope4 = new l(b4.body,r.body,-50,0)
	rope5 = new l(b5.body,r.body,-100,0)

	Engine.run(engine);
  
}
function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(b5.body,b5.body.position,{x:-50,y:-45})
	}
}

function draw() {
  rectMode(CENTER);
  background("pink");
  
  b.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  r.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
 
}



