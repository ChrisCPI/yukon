const symbolMap = {
    'f': 'fire',
    'w': 'water',
    's': 'snow',
    'b': 'cardjitsu'
}

/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
/* START-USER-IMPORTS */

import layout from '../layout'

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

        this.card = null

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(element, isClient) {
        let frame

        if (isClient && element !== 'b' && this.scene.hasNoPlayableCards(element)) {
            frame = `cards/frame/symbol-no${symbolMap[element]}`
        } else {
            frame = `cards/frame/symbol-${symbolMap[element]}`
        }

        this.symbol.setFrame(frame)

        super.show()
    }

    addCard(card) {
        card.scale = layout.scale.holder

        this.add(card)

        const pos = layout.pos.card.holder
        card.setPosition(pos.x, pos.y)

        this.card = card
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */