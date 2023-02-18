let cat;
let catLoad;
let mice = [];
let mouseLoad;
let score = 0;

function preload() {
    catLoad = loadImage('cat.gif');
    mouseLoad = loadImage('mouse.gif');
}
  

function setup () {
  createCanvas(windowWidth, windowHeight);
  cat = createSprite(width, height, 5, 5);
  cat.addAnimation('default', catLoad);

  for (let i = 0; i < 20; i++) {
    let mouse = {
      x: random(width),
      y: random(height),
      size: 60,
      vx: random(-2, 2),
      vy: random(-2, 2)
    };
    mice.push(mouse);
  }

}

function draw () {
    colorMode(RGB);
    background(193, 225, 193);
    
    for (let i = 0; i < mice.length; i++) {
      
        mice[i].vx += random(-0.1, 0.1);
        mice[i].vy += random(-0.1, 0.1);
    
        let speed = sqrt(mice[i].vx * mice[i].vx + mice[i].vy * mice[i].vy);
        if (speed > 5) {
          mice[i].vx *= 5 / speed;
          mice[i].vy *= 5 / speed;
        }

        mice[i].x += mice[i].vx;
        mice[i].y += mice[i].vy;
   
        image(mouseLoad, mice[i].x, mice[i].y, mice[i].size, mice[i].size);
      }

      drawSprites();

}

function keyPressed() {
    if (key === "ArrowUp") {
      cat.velocity.y = -5;
    } else if (key === "ArrowDown") {
      cat.velocity.y = 5;
    } else if (key === "ArrowLeft") {
      cat.velocity.x = -5;
    } else if (key === "ArrowRight") {
      cat.velocity.x = 5;
    }
};

function keyReleased() {
    if (key === "ArrowUp" || key === "ArrowDown") {
      cat.velocity.y = 0;
    } else if (key === "ArrowLeft" || key === "ArrowRight") {
      cat.velocity.x = 0;
    }
}

