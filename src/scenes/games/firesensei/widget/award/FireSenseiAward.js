/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FireSenseiAward extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.award;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fireGemGlow;
        /** @type {Phaser.GameObjects.Image} */
        this.fireGem;


        // award
        const award = scene.add.image(0, 0, "firesensei", "award/rank5");
        this.add(award);

        // fireGemGlow
        const fireGemGlow = scene.add.sprite(-116, 124, "firesensei", "award/amulet/fireGemGlow0085");
        fireGemGlow.visible = false;
        this.add(fireGemGlow);

        // fireGem
        const fireGem = scene.add.image(-117, 123, "firesensei", "award/amulet/fireGem");
        fireGem.scaleX = 0.71;
        fireGem.scaleY = 0.71;
        fireGem.visible = false;
        this.add(fireGem);

        this.award = award;
        this.fireGemGlow = fireGemGlow;
        this.fireGem = fireGem;

        /* START-USER-CTR-CODE */
        this.awardX = this.award.x
        this.awardY = this.award.y
        // -271,-83 to -117,123
        // 1 to 0.71 scale
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    showAward(rank) {
        const isFireGem = rank === 5

        this.award.y = this.awardY

        if (isFireGem) {
            this.addGemTween()
        } else {
            this.addFloatTween()
        }

        this.award.setFrame(`award/rank${rank}`)

        this.showSprites(isFireGem)
        this.show()
    }

    showSprites(isFireGem) {
        this.fireGem.visible = isFireGem

        this.award.visible = true
    }

    addFloatTween() {
        this.scene.tweens.add({
            targets: this.award,
            y: this.award.y - 15,
            duration: 708,
            repeat: -1,
            yoyo: true,
            ease: Phaser.Math.Easing.Quadratic.InOut
        })
    }

    addGemTween() {
        this.fireGemGlow.visible = false
        this.fireGem.setPosition(-271, -83)
        this.fireGem.scale = 1

        this.scene.tweens.add({
            targets: this.fireGem,

            x: { from: -271, to: -117 },
            y: { from: -83, to: 123 },
            scale: { from: 1, to: 0.71 },

            delay: 2375,
            duration: 1125,
            ease: Phaser.Math.Easing.Quadratic.In,
            
            onComplete: () => {
                this.fireGem.visible = false
                this.fireGemGlow.visible = true
                this.fireGemGlow.play(`firesensei/fireGemGlow`)
            }
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */