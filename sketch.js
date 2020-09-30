var Engine = Matter.Engine,
     World= Matter.World,
     Bodies = Matter.Bodies;

var engine, world;

var raindrops = [];
function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

   if(frameCount > 1){
 raindrops.push(new Chemistry(200,500,30,30));
   }
    
}

function draw() {
  background(0); 
  for (var i = 0; i > 200; i++){
  raindrops[i].show();
  }
}