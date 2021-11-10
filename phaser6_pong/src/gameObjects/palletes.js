class Palletes extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, sprite) {
        super(scene, x, y, sprite);

        scene.add.existing(this);
        scene.physics.world.enable(this);

        this.body.immovable = true;
        this.body.setCollideWorldBounds(true);
    }
}

export default Palletes;
