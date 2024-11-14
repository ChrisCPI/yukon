export const preload = {
    key: 'fire_path_note-pack',
    url: 'assets/media/interface/game/fire_path_note/fire_path_note-pack.json',
    loadString: ['loading', 'fire_path_note']
}

/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FirePathNote extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.setOrigin(0, 0);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.image(352, 160, "fire_path_note", "bg");
        bg.setOrigin(0, 0);
        this.add(bg);

        // button
        const button = scene.add.image(456, 596, "fire_path_note", "button");
        button.setOrigin(0, 0);
        this.add(button);

        // close
        const close = scene.add.image(1116, 173, "fire_path_note", "close");
        close.setOrigin(0, 0);
        this.add(close);

        // block (components)
        new Interactive(block);

        // button (components)
        const buttonButton = new Button(button);
        buttonButton.spriteName = "button";
        buttonButton.callback = () => this.onGoThere();
        buttonButton.activeFrame = false;
        buttonButton.pixelPerfect = true;

        // close (components)
        const closeButton = new Button(close);
        closeButton.spriteName = "close";
        closeButton.callback = () => this.close();
        closeButton.pixelPerfect = true;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    onGoThere() {
        this.close()
        this.interface.loadWidget('NinjaCatalog')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */