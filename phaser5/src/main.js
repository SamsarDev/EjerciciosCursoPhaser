import SceneA from './scenes/scene_A.js';
import SceneB from './scenes/scene_B.js';

const config = {
    width: 800,
    height: 600,
    parent: 'container',
    type: Phaser.CANVAS,
    backgroundColor: '#392542',
    scene: [
        SceneA,
        SceneB
    ]
}

new Phaser.Game(config);
