const config = {
    width: 320*2,
    height: 180*2,
    parent: "app",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                //y: 500
            }
        }
    }

}

var game = new Phaser.Game(config);

function preload() {
    this.load.image('bird', './assets/bird.png');
    this.load.image('dev-bird', './assets/bird_dos.png');
}

function create() {
    this.bird = this.physics.add.image(100, 50, 'bird');

    /* this.input.keyboard.on('keydown-RIGHT', () => {
        this.bird.setAcceleration(100, 0);
    })
    this.input.keyboard.on('keyup-RIGHT', () => {
        this.bird.setAcceleration(0, 0);
        this.bird.setVelocity(0);
    }) */

    // this.cursor = this.input.keyboard.createCursorKeys();

    this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
}

function update(time, delta) {
    /* if (this.cursor.right.isDown) {
        this.bird.x++;
    } else if (this.cursor.left.isDown) {
        this.bird.x--;
    } */
    if (this.right.isDown) {
        this.bird.x++;
    } else if (this.left.isDown) {
        this.bird.x--;
    }
}
