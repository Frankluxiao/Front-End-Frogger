var playerLeft;
var playerRight;
var playerY = 202;

// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random() * 200) + 100);
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if(this.x > 505) {
        this.x = -50;
    }
    /* COLLISION */
    if (this.x > playerLeft && this.x < playerRight && this.y == playerY) {
        alert("Ooops ... Try it again ...");
        document.location.reload();
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
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
    if(this. y < 0) {
      alert("You are soooooooo GROGEOUS!!!");
      document.location.reload();
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
Player.prototype.handleInput = function(key) {
    var originalPosition;
    var changedPosition;
    var topBoundary = -25;
    var bottomBoundary = 400;
    var leftBoundary = 0;
    var rightBoundary = 500;

    if (key == 'up') {
        originalPosition = this.y;
        changedPosition = this.y - 85;
        if (changedPosition < topBoundary) {
            this.y = originalPosition;
        } else {
            this.y = changedPosition;
        }
    }
    if (key == 'down') {
        originalPosition = this.y;
        changedPosition = this.y + 85;
        if (changedPosition > bottomBoundary) {
            this.y = originalPosition;
        } else {
            this.y = changedPosition;
        }
    }

    if (key == 'left') {
        originalPosition = this.x;
        changedPosition = this.x - 101;
        if (changedPosition < leftBoundary) {
            this.x = originalPosition;
        } else {
            this.x = changedPosition;
        }
    }
    if (key == 'right') {
        originalPosition = this.x;
        changedPosition = this.x + 101;
        if (changedPosition > rightBoundary) {
            this.x = originalPosition;
        } else {
            this.x = changedPosition;
        }
    }

    // PLAYER BOUNDARIES POSITION //
    playerLeft = this.x - 50;
    playerRight = this.x + 50;
    playerY = this.y;
};

//instantiate Player Class objects.
var player = new Player(202, 400);


// Place all enemy objects in an array called allEnemies
var enemy1 = new Enemy(-50, 60);
var enemy2 = new Enemy(-50, 60);
var enemy3 = new Enemy(-50, 230);
var enemy4 = new Enemy(-50, 145);
var enemy5 = new Enemy(-50, 145);
var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];



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
