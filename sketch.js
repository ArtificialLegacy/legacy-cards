import MenuHandler from './base/menuHandler.js';
function menuMain(){
  fill(100);
  rect(0, 0, 750, 750);
}

function loadAssets(tempCallback){
  let error = false;
  if(error !== false){
    tempCallback(error);
  }
}

function loadCanvas(){
  createCanvas(750, 750);
  background(0);
}

let menuHandler = new MenuHandler({
  "main": menuMain;
});
