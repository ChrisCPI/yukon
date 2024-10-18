/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TimerPopup extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.spinner;
        /** @type {Phaser.GameObjects.Text} */
        this.text;


        // bg
        const bg = scene.add.image(0, 0, "fire", "popups/timer/bg");
        this.add(bg);

        // circle
        const circle = scene.add.image(0, -38, "fire", "popups/timer/circle");
        this.add(circle);

        // spinner
        const spinner = scene.add.image(0, -38, "load", "spinner");
        this.add(spinner);

        // text
        const text = scene.add.text(0, 90, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "60";
        text.setStyle({ "align": "center", "color": "#41311D", "fixedWidth":150,"fixedHeight":80,"fontFamily": "Candombe", "fontSize": "100px" });
        this.add(text);

        this.spinner = spinner;
        this.text = text;

        /* START-USER-CTR-CODE */

        this.tween = scene.tweens.add({
            targets: spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic',
            paused: true
        })

        this.timerConfig = {
            delay: 1000,
            callback: this.onTimeEvent,
            callbackScope: this,
            repeat: 60,
            startAt: 1000,
            paused: true
        }

        this.timer = scene.time.addEvent(this.timerConfig)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        this.tween.restart()
        this.tween.play()

        this.timer.paused = false

        super.show()
    }

    close() {
        this.tween.pause()
        this.spinner.angle = 0

        this.timer.reset(this.timerConfig)
        this.timer.paused = true

        super.close()
    }

    onTimeEvent() {
        if (this.timer.repeatCount == 0) {
            this.timeUp()
            return
        }

        this.updateTimer()
    }

    timeUp() {
        this.close()
        this.scene.initTimeoutUp()
    }

    updateTimer() {
        this.text.text = this.timer.repeatCount
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */