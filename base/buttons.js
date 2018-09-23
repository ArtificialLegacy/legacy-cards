class Button {
  constructor(tempX, tempY, tempWidth, tempHeight, tempCallback){
    this.x = tempX;
    this.y = tempY;
    this.width = tempWidth;
    this.height = tempHeight;
    this.callback = tempCallback;
    this.error = tempError;
  }
  step(tempX, tempY){
    if(tempX >= this.x && tempX <= (this.x+this.width) && tempY >= this.y && tempY <= (this.y+this.height)){
      this.action();
    }
  }
}

export default Button;
