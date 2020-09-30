class BaseClass{
    constructor(x,y,width,height, angle){
     var options = {
        friction: 0.5,
        restitution:0.5
        
     }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.x = random(0,400);
     this.y = 0;
     this.width = width;
     this.height = height;
     this.image = loadImage("raindrops");
     this.show;
     World.add(world,this.body);
    }
     show = function(){
        var angle = this.body.angle;

            
       push();
       translate(this.body.position.x , this.body.position.y);
       rotate (angle);
       imageMode(CENTER);
       image(this.image ,0,0, this.width, this.height);
       pop();
    
     }
}