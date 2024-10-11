/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CardHolder extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.symbol;


        // bg
        const bg = scene.add.image(0, 0, "fire", "cards/frame/bg");
        this.add(bg);

        // outline
        const outline = scene.add.image(0, 0, "fire", "cards/frame/outline");
        this.add(outline);

        // symbol
        const symbol = scene.add.image(0, 0, "fire", "cards/frame/symbol-cardjitsu");
        this.add(symbol);

        this.symbol = symbol;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */