const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function perload() {

}

function setup() {

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(390,300,250,10);
    stand2 = new Ground(700,200,200,10);

    box1 = new Box (300,275,30,40);
    box2 = new Box (330,275,30,40);
    box3 = new Box (360,275,30,40);
    box4 = new Box (390,275,30,40);
    box5 = new Box (420,275,30,40);
    box6 = new Box (450,275,30,40);
    box7 = new Box (480,275,30,40);
  

    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);

    box13 = new Box(360,195,30,40);
    box14 = new Box(420,195,30,40);
    box15 = new Box(450,195,30,40);

    box16 = new Box(390,155,30,40);

    blocks1 = new Box (640,175,30,40);
    blocks2 = new Box (670,175,30,40);
    blocks3 = new Box (700,175,30,40);
    blocks4 = new Box (730,175,30,40);
    blocks5 = new Box (760,175,30,40);
  //level two
    blocks6 = new Box (670,135,30,40);
    blocks7 = new Box (700,135,30,40);
    blocks8 = new Box (730,135,30,40);
  //top
    blocks9 = new Box (700,95,30,40);


    hexa = new Hexa(200,20,40,40);
    slingShot = new SlingShot(hexa.body,{x:100,y:200});



    //box8 = new Box(330,235,30,40);
    //box8 = new Box(330,235,30,40);
    //box8 = new Box(330,235,30,40); 

}  

function draw () {

    background(225);

    Engine.update(engine);


    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    blocks6.display();
    blocks7.display();
    blocks8.display();
    blocks9.display();
    
    ground.display();
    stand1.display();
    stand2.display();

    hexa.display();
    slingShot.display();

    



    
}

function mouseDragged() {

    Matter.Body.setPosition(hexa.body,{x:mouseX,y:mouseY});
    
}

function mouseReleased() {

    slingShot.fly();
    
}