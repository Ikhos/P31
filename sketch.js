var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,70));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,170));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,270));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,370));
  }

  /*var j = 50;
  while (j <=width-10) {
    j=j+50
  }
  var w = 90;
  do{
    w=w+1;
  } while(w<=100);*/
  
}

function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  
  //create the particles using frameCount
  if(frameCount % 60 === 0){
    particles.push(new Particles(/*x*/ Math.round(random(width - 500, width/2 + 100)), /*y*/ 0));
  }

  //display the particles 
  for (var w = 0; w < particles.length; w++) {
    particles[w].display();
  }

}