/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FireSenseiOnlyNinjas extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Sprite} */
        this.flame2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flame1;


        // bg
        const bg = scene.add.image(-15, 61, "firesenseiinstructions", "onlyNinjas/bg");
        this.add(bg);

        // flame2
        const flame2 = scene.add.sprite(102.5, -98, "firesenseiinstructions", "onlyNinjas/flame0001");
        this.add(flame2);

        // flame1
        const flame1 = scene.add.sprite(-99.5, -90.5, "firesenseiinstructions", "onlyNinjas/flame0001");
        this.add(flame1);

        // volcano
        const volcano = scene.add.image(-10, 107, "firesenseiinstructions", "onlyNinjas/volcano");
        this.add(volcano);

        // lava
        const lava = scene.add.image(41, 81, "firesenseiinstructions", "onlyNinjas/lava");
        this.add(lava);

        this.flame2 = flame2;
        this.flame1 = flame1;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        super.show()

        this.flame1.play('onlyNinjas/flame')
        this.flame2.play('onlyNinjas/flame')
    }

    stop() {
        this.flame1.anims.stop()
        this.flame2.anims.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */