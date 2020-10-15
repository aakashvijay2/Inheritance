class Log extends BaseClass {
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("Sprite/Wood2.png")
    Matter.Body.SetAngle(this.body.angle);
  }
}


