const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13;
var box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(1445, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600, 600, 1800, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(600, 100, 70, 70);
  box3 = new Box(600, 100, 70, 70);
  box4 = new Box(600, 100, 70, 70);
  box5 = new Box(600, 100, 70, 70);
  box6 = new Box(600, 100, 70, 70);
  box7 = new Box(600, 100, 70, 70);  
  
  box8 = new Box(700, 100, 70, 70);
  box9 = new Box(700, 100, 70, 70);
  box10 = new Box(700, 100, 70, 70);
  box11 = new Box(700, 100, 70, 70);
  box12 = new Box(700, 100, 70, 70);

  box13 = new Box(800, 100, 70, 70);
  box14 = new Box(800, 100, 70, 70);
  box15 = new Box(800, 100, 70, 70);
  box16 = new Box(800, 100, 70, 70);
  box17 = new Box(800, 100, 70, 70);
  box18 = new Box(800, 100, 70, 70);
  box19 = new Box(800, 100, 70, 70);
  box20 = new Box(800, 100, 70, 70);

  box21 = new Box(900, 100, 70, 70);
  box22 = new Box(900, 100, 70, 70);
  box23 = new Box(900, 100, 70, 70);
  box24 = new Box(900, 100, 70, 70);
  box25 = new Box(900, 100, 70, 70);
  box26 = new Box(900, 100, 70, 70);
}

function draw() {
  background(bg);

  Engine.update(engine);

  fill("red");

  textSize(75);
  text("H", 100 + 100, 700);
  text("E", 150 + 100, 700);
  text("L", 200 + 100, 700);
  text("L", 240 + 100, 700);
  text("O", 275 + 100, 700);
  
  textSize(35);
  text("シ", 285 + 100, 685);
  
  textSize(85);
  text("ᴹ", 370 + 100, 750);
  text("ᵢ", 410 + 100, 700);
  text("ˢ", 430 + 100, 750);
  text("ˢ", 460 + 100, 750);

  text("ᵏ", 565 + 50, 735);
  text("O", 600 + 50, 720);
  text("ᴹ", 675 + 50, 735);
  text("ª", 715 + 50, 735);
  text("ᴸ", 755 + 50, 735);

  text("🄶", 825 + 50, 710);
  text("𝐎", 915 + 50, 710);
  text("ℒ", 975 + 50, 710);
  text("𝖆", 1050 + 50, 710);
  text("𝘕", 1100 + 50, 710);
  text("i", 1170 + 50, 710);

  ground.display();

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

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  hero.display();
  rope.display();
  monster.display();

  //console.log(mouse.x);
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}


