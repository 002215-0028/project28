class mango{
    constructor(x, y, r) {
        var options = {
            'restitution':0,
            'friction':1.0,
            isStatic: true
        }
        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("Plucking mangoes 2/mango.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER)
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, r, r);
        pop();
      }
}