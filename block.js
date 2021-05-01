class Block{
    constructor(x, y, width, height) {
        var options = 
        {
          'restitution' : 0.5,
          'friction' : 0
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        this.image = loadImage("block.png");
        World.add(world, this.body);
      }
      display()
      {
        var angle = this.body.angle;
        var pos= this.body.position;

        push();
        if(this.body.speed < 3)
        {
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          
        }
         else
        {
           World.remove(world, this.body); 
           
           this.visibility -= 15;
           tint(255,this.visibility )
           image(this.image,pos.x,pos.y,this.width, this.height); 

           
        }
        pop();
      }
}
