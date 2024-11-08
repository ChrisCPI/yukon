/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FireSenseiGrasshoppers extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Sprite} */
        this.smoke1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.smoke2;


        // bg
        const bg = scene.add.image(-11, 72, "firesenseiinstructions", "grasshoppers/bg");
        this.add(bg);

        // smoke1
        const smoke1 = scene.add.sprite(-154, -137, "firesenseiinstructions", "grasshoppers/smoke10001");
        this.add(smoke1);

        // smoke2
        const smoke2 = scene.add.sprite(-20, -145, "firesenseiinstructions", "grasshoppers/smoke20001");
        this.add(smoke2);

        this.smoke1 = smoke1;
        this.smoke2 = smoke2;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        super.show()

        this.smoke1.play('grasshoppers/smoke1')
        this.smoke2.play('grasshoppers/smoke2')
    }

    stop() {
        this.smoke1.anims.stop()
        this.smoke2.anims.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */