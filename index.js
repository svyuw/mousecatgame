let cat;
let catLoad;
let mouse = [];
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

};

function draw () {
    colorMode(RGB);
    background(193, 225, 193);

    for (let mouseLoad of mice) {
        mouseLoad.update();
        if (cat.collide(mouseLoad.sprite)) {
          mouseLoad.handleCollision();
        }
      }
      drawSprite(cat);
      text(`Score: ${score}`, 10, 20);


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


