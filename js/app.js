// Enemies our player must avoid
const Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    //coordinated parameters created
    this.x = x;
    this.y = y;

    //parameter for enemy speed
    this.speed = speed;

    //enemy size
    this.width = 80;
    this.height = 50;

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
const Player = function(x, y) {
  this.x =x;
  this.y =y;
  this.width = 50;
  this.height = 75;
  this.sprite = 'images/char-princess-girl.png';
};

//Draw the player on the screen
Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//reset player position after reaching water
Player.prototype.update = function(dt) {
  if (this.y <=0) {
      this.reset(202, 415);
  }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [
    new Enemy(-200, 83, 150),
    new Enemy(-200, 166, 230),
    new Enemy(-200, 249, 270),
];

const player = new Player(202, 415);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
