
var coins;
var player;
//starting score
var score = 20;
function setup() {
  createCanvas(800, 800);
  coins = new Group();
  for (var i = 0; i < 20; i++) {
//cluster spacing
	  var c = createSprite(
      random(50, width-50),
      random(50, height-50),
      10, 10);
			//coin color

      var col = {
        r: random(255),
        g: random(255),
        b: random(255),
      }
    c.shapeColor = color(col.r, col.g, col.b);
    coins.add(c);
  }
  //ADD IMAGINE IN PLACE OF SPRITE?
  player = createSprite(50, 50, 40, 40);
	//square color
  player.shapeColor = color(255, 255, 255);

  var button = createButton ("reset");
  button.mousePressed(setup);

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
    text("don't reset me", width/2, height/2);
  }
}
function getCoin(player, coin) {
  coin.remove();
  //subtract or add total points
  score -= 1;
}
