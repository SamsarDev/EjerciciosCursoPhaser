import Palletes from "../gameObjects/palletes.js";

class Scene_play extends Phaser.Scene {
    constructor() {
        super({ key: 'Scene_play' })
    }

    create() {
        const centerWidth = this.sys.game.config.width/2;
        const centerHeight = this.sys.game.config.height/2;

        // Separador
        this.add.image(centerWidth, centerHeight, 'separator');

        // Plataformas
        /* 
            this.izquierda = this.add.image( 30, centerHeight, 'left_pallete');
            this.derecha = this.add.image(this.sys.game.config.width - 30, centerHeight, 'right_pallete'); 
        */
        this.izquierda = new Palletes(this, 30, centerHeight, 'left_pallete');
        this.derecha = new Palletes(this, this.sys.game.config.width-30, centerHeight, 'right_pallete');

        // bola
        this.ball = this.physics.add.image(centerWidth, centerHeight, 'ball');
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setVelocityX(-180);

        // Fisicas
        this.physics.world.setBoundsCollision(false, false, true, true);
        this.physics.add.collider(this.ball, this.izquierda, this.palleteCollision, null, this);
        this.physics.add.collider(this.ball, this.derecha, this.palleteCollision, null, this);

        // Controles
        this.rightCursor = this.input.keyboard.createCursorKeys();

        this.leftCursor = {
            up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        };
    }

    update(time, delta) {
        if (this.ball.x < 0 || this.ball.x > this.sys.game.config.width) {
            this.ball.setPosition(this.sys.game.config.width/2, this.sys.game.config.height/2);
        }

        if (this.rightCursor.down.isDown) {
            this.derecha.body.setVelocityY(300);
        } else if (this.rightCursor.up.isDown) {
            this.derecha.body.setVelocityY(-300)
        } else {
            this.derecha.body.setVelocityY(0);
        }

        if (this.leftCursor.down.isDown) {
            this.izquierda.body.setVelocityY(300);
        } else if (this.leftCursor.up.isDown) {
            this.izquierda.body.setVelocityY(-300);
        } else {
            this.izquierda.body.setVelocityY(0);
        }
    }

    palleteCollision() {
        this.ball.setVelocityY(Phaser.Math.Between(-120, 120));
    }
}

export default Scene_play;
