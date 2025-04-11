let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#e9edc9');
  
  // 生成 40 個圓的初始位置、大小和顏色
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(30, 100),
      color: color(random(255), random(255), random(255))
    });
  }
}

function draw() {
  background('#e9edc9');
  
  // 計算圓的大小變化
  let sizeOffset = map(mouseX, 0, width, 20, 120);
  
  // 繪製圓
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size + sizeOffset);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
