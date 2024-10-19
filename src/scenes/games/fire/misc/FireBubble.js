/* START OF COMPILED CODE */

import BaseSprite from "../../../base/BaseSprite";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FireBubble extends BaseSprite {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 760, y ?? 480, texture || "fire", frame ?? "bg/bubble0021");

        this.setOrigin(0.495647516981104, 0.8141663695258589);

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    show() {
        this.play('fire/bubble')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */