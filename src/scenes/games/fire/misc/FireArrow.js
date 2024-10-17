/* START OF COMPILED CODE */

import BaseImage from "../../../base/BaseImage";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FireArrow extends BaseImage {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 760, y ?? 408, texture || "fire", frame ?? "portraits/common/arrow");

        /* START-USER-CTR-CODE */

        this.startingX = this.x

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    show() {
        this.visible = true

        this.tween = this.scene.tweens.add({
            targets: this,
            x: this.flipX ? '-=25': '+=25',
            ease: 'Quad.easeInOut',
            duration: 292,
            yoyo: true,
            repeat: -1
        })
    }

    close() {
        this.visible = false

        this.tween.stop()
        this.tween.destroy()
        this.tween = null

        this.x = this.startingX
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */