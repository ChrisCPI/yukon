/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FireSenseiSprite extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.giGlow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.body;
        /** @type {Phaser.GameObjects.Image} */
        this.amulet;
        /** @type {Phaser.GameObjects.Sprite} */
        this.beak;


        // giGlow
        const giGlow = scene.add.image(-82, 99, "firesensei", "sensei/gi-glow");
        giGlow.visible = false;
        this.add(giGlow);

        // body
        const body = scene.add.sprite(0, 15, "firesensei", "sensei/wait");
        this.add(body);

        // amulet
        const amulet = scene.add.image(7, 15, "firesensei", "sensei/amulet");
        this.add(amulet);

        // beak
        const beak = scene.add.sprite(17, 0, "firesensei", "sensei/beak/beak");
        this.add(beak);

        this.giGlow = giGlow;
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

    get isTalking() {
        return this.beak.anims.isPlaying
    }

    playWait() {
        this.beak.anims.stop()
        this.beak.setFrame('sensei/beak/beak')
        this.beak.visible = true

        this.body.anims.stop()
        this.body.setFrame('sensei/wait')

        this.amulet.visible = true
    }

    playTalk() {
        if (this.isTalking) return

        this.beak.visible = true
        this.beak.play('firesensei/talk')
    }

    playTalkLong() {
        this.beak.visible = true
        this.beak.play('firesensei/talk2')
    }

    playBow(onComplete) {
        this.beak.visible = false
        this.beak.anims.stop()

        this.amulet.visible = false

        const anim = 'firesensei/bow'

        this.body.play(anim)

        if (onComplete) {
            this.body.once(`animationcomplete-${anim}`, () => onComplete())
        }
    }

    playPoint(playPart2 = false) {
        this.amulet.visible = false
        this.beak.visible = false

        const point = 'firesensei/point'
        this.body.play(point)

        if (playPart2) {
            this.body.once(`animationcomplete-${point}`, () => this.playPoint2())
        }
    }

    playPoint2() {
        this.beak.visible = false
        this.beak.anims.stop()
        
        const part2 = 'firesensei/point2'
        this.body.play(part2)

        this.body.once(`animationcomplete-${part2}`, () => {
            this.playWait()
            this.playTalk()
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */