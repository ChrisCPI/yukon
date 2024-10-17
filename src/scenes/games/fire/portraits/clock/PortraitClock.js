/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PortraitClock extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.clock;
        /** @type {Phaser.GameObjects.Sprite} */
        this.border;
        /** @type {Phaser.GameObjects.Text} */
        this.time;


        // clock
        const clock = scene.add.image(0, 0, "fire", "portraits/clock/20");
        clock.flipX = true;
        this.add(clock);

        // border
        const border = scene.add.sprite(0, 0, "fire", "portraits/clock/frame0001");
        border.scaleX = 0.975;
        border.scaleY = 0.975;
        this.add(border);

        // time
        const time = scene.add.text(0, 0, "", {});
        time.setOrigin(0.5, 0.5);
        time.text = "20";
        time.setStyle({ "align": "center", "color": "#000", "fixedWidth":200,"fontFamily": "CCComiccrazy", "fontSize": "44px", "strokeThickness":5,"shadow.color": "#fff", "shadow.blur":5,"shadow.stroke":true,"shadow.fill":true});
        this.add(time);

        this.clock = clock;
        this.border = border;
        this.time = time;

        /* START-USER-CTR-CODE */

        this.secs = 20

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        this.secs = 20

        if (this.timer) {
            this.clearTimer()
        }

        this.updateClock()

        // An interval is better for this so that the count
        // can still be accurate if the scene time ever lags
        this.timer = setInterval(() => this.updateClock(), 1000)

        super.show()
    }

    updateClock() {
        this.time.text = this.secs

        if (this.secs === 0) {
            this.clearTimer()
            this.border.anims.stop()
            this.border.setFrame(`portraits/clock/frame0001`)
            return
        } else if (this.secs === 5) {
            this.border.play('fire/clock/warn')
        }

        this.clock.setFrame(`portraits/clock/${this.secs}`)

        this.secs--
    }

    clearTimer() {
        clearInterval(this.timer)
        this.timer = null
    }

    close() {
        super.close()
        this.clearTimer()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */