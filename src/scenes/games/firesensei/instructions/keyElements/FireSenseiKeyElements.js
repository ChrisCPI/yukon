/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FireSenseiKeyElements extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.fire;
        /** @type {Phaser.GameObjects.Image} */
        this.water;
        /** @type {Phaser.GameObjects.Image} */
        this.snow;


        // ninja
        const ninja = scene.add.image(-14.5, 50, "firesenseiinstructions", "keyElements/ninja");
        this.add(ninja);

        // fire
        const fire = scene.add.image(-179, -49, "firesenseiinstructions", "keyElements/fire");
        this.add(fire);

        // water
        const water = scene.add.image(-16, -183, "firesenseiinstructions", "keyElements/water");
        this.add(water);

        // snow
        const snow = scene.add.image(157, -50, "firesenseiinstructions", "keyElements/snow");
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

        this.fireTimer = this.scene.time.delayedCall(542, () => this.fire.visible = true)
        this.waterTimer = this.scene.time.delayedCall(1166, () => this.water.visible = true)
        this.snowTimer = this.scene.time.delayedCall(1791, () => this.snow.visible = true)
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