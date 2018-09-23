class MenuHandler {
  contructor(tempMenus){
    this.state = "main";
    this.menus = tempMenus;
  }
  update(tempState){
     this.state == tempState;
  }
  draw(){
    this.menus[this.state]();
  }
}

export default MenuHandler;
