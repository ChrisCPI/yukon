/* START OF COMPILED CODE */

import BaseSprite from "../../../base/BaseSprite";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FirePop extends BaseSprite {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 760, y ?? 480, texture || "fire", frame ?? "bg/firepop0003");

        this.setOrigin(0.45409950204204497, 0.9592548220028628);

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    show() {
        this.play('fire/firepop')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */