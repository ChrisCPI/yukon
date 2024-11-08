/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FireSenseiChange extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.fire;
        /** @type {Phaser.GameObjects.Image} */
        this.water;
        /** @type {Phaser.GameObjects.Image} */
        this.snow;


        // amulet
        const amulet = scene.add.image(5, -10, "firesenseiinstructions", "change/amulet");
        this.add(amulet);

        // fire
        const fire = scene.add.image(-72, 60, "firesenseiinstructions", "change/fire");
        this.add(fire);

        // water
        const water = scene.add.image(21, -41, "firesenseiinstructions", "change/water");
        this.add(water);

        // snow
        const snow = scene.add.image(73, 86, "firesenseiinstructions", "change/snow");
        this.add(snow);

        this.fire = fire;
        this.water = water;
        this.snow = snow;

        /* START-USER-CTR-CODE */

        this.fireTimer
        this.waterTimer
        this.snowTimer

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        super.show()

        this.fire.visible = false
        this.water.visible = false
        this.snow.visible = false

        this.fireTimer = this.scene.time.delayedCall(708, () => this.fire.visible = true)
        this.waterTimer = this.scene.time.delayedCall(1541, () => this.water.visible = true)
        this.snowTimer = this.scene.time.delayedCall(2541, () => this.snow.visible = true)
    }

    stop() {
        this.scene.time.removeEvent([
            this.fireTimer,
            this.waterTimer,
            this.snowTimer
        ])
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
