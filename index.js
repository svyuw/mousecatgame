let cat;
let catLoad;
let mice = [];
let mouseLoad;
let score = 0;
let scoreBoardText = document.querySelector(".score-text");

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
      vy: random(-2, 2),
    };
    mice.push(mouse);
  }
}

function draw () {
    colorMode(RGB);
    background(193, 225, 193);
    
    for (let i = 0; i < mice.length; i++) {
        let curMouse = mice[i];
        let isCatColliding = collideCircleCircle(curMouse.x, curMouse.y, curMouse.size, 
                                                cat.position.x, cat.position.y, 200);
            
        if (isCatColliding) {
            score += 1;
            scoreBoardText.innerHTML = `Score: ${score}`;
            mice[i] = {};
        }
        curMouse.vx += random(-0.1, 0.1);
        curMouse.vy += random(-0.1, 0.1);
    
        let speed = sqrt(curMouse.vx * curMouse.vx + curMouse.vy * curMouse.vy);
        if (speed > 5) {
          curMouse.vx *= 5 / speed;
          curMouse.vy *= 5 / speed;
        }

        curMouse.x += curMouse.vx;
        curMouse.y += curMouse.vy;

        if (curMouse.x >= windowWidth || curMouse.x <= 0) {
            curMouse.vx = curMouse.vx * -1;
        }

        if (curMouse.y >= windowWidth || curMouse.y <= 0) {
            curMouse.vy = curMouse.vy * -1;
        }

        image(mouseLoad, curMouse.x, curMouse.y, curMouse.size, curMouse.size);
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

