class Stone{
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("gray");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
}