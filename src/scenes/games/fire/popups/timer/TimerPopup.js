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

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        this.tween.restart()
        this.tween.play()

        super.show()
    }

    close() {
        this.tween.pause()
        this.spinner.angle = 0

        super.close()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */