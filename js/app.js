// Enemies our player must avoid
var Enemy = function(x, y, speed) {

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    //coordinated parameters created
    this.x = x;
    this.y = y;

    //enemy size
    this.width = 80;
    this.height = 50;

    //parameter for enemy speed
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //reseting enemy position
    if (this.x < 500) {
        this.x += (dt) * this.speed;
    } else {
        this.x = -200;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.width = 50;
  this.height = 75;
  this.sprite = 'images/char-princess-girl.png';
};

//reset player position after reaching water
Player.prototype.update = function(dt) {
  if (this.y <= 0) {
      this.reset(202, 415);
  }
};

//Draw the player on the screen
Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//player movement function, after pressing key we update player position by width or height of the game square
Player.prototype.handleInput = function (direction) {
    if(direction === 'left' && this.x > 0){
        this.x -= 101;
    }
    if(direction === 'right' && this.x < 400){
        this.x += 101;
    }
    if(direction === 'up' && this.y > 0){
        this.y -= 83;
    }
    if(direction === 'down' && this.y > 400){
        this.y += 83;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [
    new Enemy(-200, 83, 150),
    new Enemy(-200, 166, 230),
    new Enemy(-200, 249, 270),
];

// Place the player object in a variable called player
var player = new Player(202, 415);

// Reset's player postion after collison with enemies
Player.prototype.reset = function(x, y) {
    this.x = x;
    this.y = y;
};

// Checks collisions using Axis-Aligned 2D Collision Detection
function checkCollisions(allEnemies, player) {
    for (var i = 0; i < allEnemies.length; i++) {
        if (allEnemies[i].x < player.x + player.width &&
            allEnemies[i].x + allEnemies[i].width > player.x &&
            allEnemies[i].y < player.y + player.height &&
            allEnemies[i].height + allEnemies[i].y > player.y) {
            player.reset(202, 415);
        }
    }
}




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
