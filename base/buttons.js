class Button {
  constructor(tempX, tempY, tempWidth, tempHeight, tempScene, tempCallback){
    this.x = tempX;
    this.y = tempY;
    this.width = tempWidth;
    this.height = tempHeight;
    this.callback = tempCallback;
    this.scene = tempScene;
  }
  step(tempX, tempY, tempScene){
    if(this.scene !== tempScene){
      return;
    }
    if(tempX >= this.x && tempX <= (this.x+this.width) && tempY >= this.y && tempY <= (this.y+this.height)){
      this.callback();
    }
  }
}

export default Button;
