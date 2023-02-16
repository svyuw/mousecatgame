// let cat;
// let score = 0;

// function preload() {
//     catFrames = loadGif('cat.gif');
// }

// window.setup = () => {
//   createCanvas(windowWidth, windowHeight);
//   colorMode(RGB);
//   background(193, 225, 193);
//   cat = createSprite(width / 2, height / 2, 40, 40);
//   cat.addAnimation('default', catFrames.frames);
// }

// window.draw = () => {

// function keyPressed() {
//     if (keyCode === (UP_ARROW)) {
//            s.dir(0,-1);
//         } else if (keyCode === (DOWN_ARROW)) {
//             s.dir(0,1);
//         } else if (keyCode === (RIGHT_ARROW)) {
//             s.dir(1,0);
//         } else if (eyCode === (LEFT_ARROW)) {
//             s.dir(-1,0);
//         }
// }

// function cat(){
//     this.x = 0;
//     this.y = 0; 
//     this.xspeed = 1; 
//     this.yspeed = 0; 
// }

// this.dir = function(x,y) {
//     this.xspeed = x; 
//     this.yspeed = y; 
// }

// drawSprites();

// }

let cat;
let catFrames;
let catLoad;

function preload() {
    catLoad = loadImage('cat.gif');
    catFrames = createImg('cat.gif');
}

window.setup = () => {
  createCanvas(windowWidth, windowHeight);
  background(50);
//   cat = createSprite(width / 2, height / 2, 40, 40);
//   cat.addAnimation('default', catFrames);

};

window.draw = () => {
//   cat.position.x = mouseX;
//   cat.position.y = mouseY;
    image(catLoad);  
    catFrames.position(50, 350);
//   drawSprites();
};
