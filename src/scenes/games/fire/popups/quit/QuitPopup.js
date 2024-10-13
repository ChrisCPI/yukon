/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import Interactive from "../../../../components/Interactive";
import Button from "../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class QuitPopup extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // block
        const block = scene.add.rectangle(-7, 22, 1600, 1000);
        block.alpha = 0.4;
        block.isFilled = true;
        block.fillColor = 0;
        this.add(block);

        // bg
        const bg = scene.add.image(0, 0, "fire", "popups/quit/bg");
        this.add(bg);

        // button
        const button = scene.add.image(0, 95, "fire", "popups/quit/button");
        this.add(button);

        // button_text
        const button_text = scene.add.text(0, 95, "", {});
        button_text.setOrigin(0.5, 0.5);
        button_text.text = "OK";
        button_text.setStyle({ "align": "center", "color": "#644e30", "fontFamily": "CCComiccrazy", "fontSize": "25px" });
        this.add(button_text);

        // text
        const text = scene.add.text(0, -61, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "All other players\nhave quit this game";
        text.setStyle({ "align": "center", "color": "#41311D", "fixedWidth":450,"fixedHeight":150,"fontFamily": "Candombe", "fontSize": "70px" });
        this.add(text);

        // block (components)
        new Interactive(block);

        // button (components)
        const buttonButton = new Button(button);
        buttonButton.spriteName = "popups/quit/button";
        buttonButton.callback = () => this.callback();
        buttonButton.pixelPerfect = true;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    callback() {
        this.scene.leaveGame()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */