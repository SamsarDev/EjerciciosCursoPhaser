import SceneC from './scene_C.js';

class SceneA extends Phaser.Scene {
    constructor() {
        super({ key: 'SceneA' });
    }
    preload() {

    }
    create() {
        let graphics = this.add.graphics();
        graphics.fillStyle(0xff3300, 1);
        graphics.fillRect(100, 200, 600, 300);
        graphics.fillRect(100, 100, 100, 100);

        this.add.text(120, 110, 'A', { font: '96px Courier', fill: '#000000' });

        // Leer una nueva escena desde otra
        this.scene.add('SceneC',new SceneC);
        
        // Reemplazar esta escena con la siguiente
        //this.scene.start("SceneC");

        /*
            this.scene.bringToTop('Scene'): *Encima de todo*
            this.scene.sendToBack('Scene'); *Atrás de todo*
            this.scene.moveUp('Scene'); *Un paso arriva*
            this.scene.moveDown('Scene'); *Un paso atrás*
            this.scene.moveAbove('SceneRef', 'SceneInd'); *Encima de una escena indicada*
            this.scene.moveBelow('SceneRef', 'SceneInd'); *Abajo de una escena indicada*
        */
    }
    update(time, delta) {

    }
}

export default SceneA;
