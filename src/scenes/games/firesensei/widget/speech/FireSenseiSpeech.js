/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FireSenseiSpeech extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.dialog;


        // bubble
        const bubble = scene.add.ninePatchContainer(0, 0, 977, 306, "firesensei", "bubble");
        bubble.marginLeft = 130;
        bubble.marginTop = 80;
        bubble.marginRight = 75;
        bubble.marginBottom = 173;
        this.add(bubble);

        // dialog
        const dialog = scene.add.text(26, -50, "", {});
        dialog.setOrigin(0.5, 0.5);
        dialog.text = "This example text\nI have put it on three lines\nNot a good haiku";
        dialog.setStyle({ "align": "center", "color": "#000", "fixedWidth":1030,"fontFamily": "CCComiccrazy", "fontSize": "40px" });
        this.add(dialog);

        this.dialog = dialog;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(text) {
        this.dialog.text = text

        super.show()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */