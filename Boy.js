class Boy{
    constructor(x, y, width, height, angle) {
        var options = {
            isStatic: true,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("pictures/Boy.jpg");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
      }
}