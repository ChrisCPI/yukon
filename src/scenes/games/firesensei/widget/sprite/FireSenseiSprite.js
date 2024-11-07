/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FireSenseiSprite extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Sprite} */
        this.body;
        /** @type {Phaser.GameObjects.Image} */
        this.amulet;
        /** @type {Phaser.GameObjects.Sprite} */
        this.beak;


        // body
        const body = scene.add.sprite(0, 15, "senseifire", "sensei/wait");
        this.add(body);

        // amulet
        const amulet = scene.add.image(7, 15, "senseifire", "sensei/amulet");
        this.add(amulet);

        // beak
        const beak = scene.add.sprite(17, 0, "senseifire", "sensei/beak/beak");
        this.add(beak);

        this.body = body;
        this.amulet = amulet;
        this.beak = beak;

        /* START-USER-CTR-CODE */

        // Show beak when it reaches the frame where the fake one disappears
        this.body.on('animationupdate', () => {
            const anims = this.body.anims
            if (anims.currentAnim.key == 'firesensei/point' && anims.currentFrame.index === 13) {
                this.playTalkLong()
            }
        })

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    playWait() {
        this.beak.anims.stop()
        this.beak.setFrame('sensei/beak/beak')

        this.body.anims.stop()
        this.body.setFrame('sensei/wait')

        this.amulet.visible = true
    }

    playTalk() {
        this.beak.visible = true
        this.beak.play('firesensei/talk')
    }

    playTalkLong() {
        this.beak.visible = true
        this.beak.play('firesensei/talk2')
    }

    playBow() {
        this.beak.visible = false
        this.amulet.visible = false

        this.body.play('firesensei/bow')
    }

    playPoint() {
        this.amulet.visible = false
        this.beak.visible = false

        this.body.play('firesensei/point')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */