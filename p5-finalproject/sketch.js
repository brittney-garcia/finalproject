
var coins;
var player;
//starting score
var score = 0;
function setup() {
  createCanvas(500, 500);
  coins = new Group();
  for (var i = 0; i < 20; i++) {
//cluster spacing
	  var c = createSprite(
      random(50, width-50),
      random(50, height-50),
      10, 10);
			//coin color
    c.shapeColor = color(255, 255, 255);
    coins.add(c);
  }
  player = createSprite(50, 50, 40, 40);
	//square color
  player.shapeColor = color(255, 0, 0);
}
function draw() {
  background(0, 0, 0);
  player.velocity.x =
    (mouseX-player.position.x)*0.1;
  player.velocity.y =
    (mouseY-player.position.y)*0.1;
  player.overlap(coins, getCoin);
  drawSprites();
//center letter
	fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  if (coins.length > 0) {
    text(score, width/2, height/2);
  }
  else {
    text("you win!", width/2, height/2);
  }
}
function getCoin(player, coin) {
  coin.remove();
  score += 1;
}
