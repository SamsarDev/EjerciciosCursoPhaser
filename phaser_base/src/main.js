const config = {
    width: 320,
    height: 180,
    parent: "app",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);

function preload() {
    console.log("Precarga de archivos")
}

function create() {
    console.log("Espacio Creado")
}

function update(time, delta) {
    /*  */
}
