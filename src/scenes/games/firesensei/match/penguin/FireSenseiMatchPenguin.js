const eyesBlinkAnim = 'firesensei/match-eyes/blink'
const eyesLookAnim = 'firesensei/match-eyes/look'

/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FireSenseiMatchPenguin extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.body;
        /** @type {Phaser.GameObjects.Image} */
        this.outline;
        /** @type {Phaser.GameObjects.Sprite} */
        this.eyes;
        /** @type {Phaser.GameObjects.Image} */
        this.beak;
        /** @type {Phaser.GameObjects.Image} */
        this.empty;


        // body
        const body = scene.add.image(-0.5, 1, "firesensei", "match/penguin/body-wait");
        this.add(body);

        // outline
        const outline = scene.add.image(7, 0, "firesensei", "match/penguin/outline-wait");
        this.add(outline);

        // eyes
        const eyes = scene.add.sprite(20.7, -24.5, "firesensei", "match/penguin/eyes0001");
        this.add(eyes);

        // beak
        const beak = scene.add.image(29.5, 2.5, "firesensei", "match/penguin/beak");
        this.add(beak);

        // empty
        const empty = scene.add.image(0, 0, "firesensei", "match/penguin/empty");
        empty.visible = false;
        this.add(empty);

        this.body = body;
        this.outline = outline;
        this.eyes = eyes;
        this.beak = beak;
        this.empty = empty;

        /* START-USER-CTR-CODE */

        this.eyes.on(`animationstart-${eyesBlinkAnim}`, () => {
            this.eyes.play({
                key: eyesBlinkAnim,
                startFrame: Phaser.Math.Between(1, 25)
            })
        })

        this.eyes.on(`animationcomplete-${eyesBlinkAnim}`, () => {
            if (Phaser.Math.Between(1, 10) < 7) {
                this.eyes.play(eyesBlinkAnim)
            } else {
                this.eyes.play(eyesLookAnim)
            }
        })

        this.eyes.on(`animationcomplete-${eyesLookAnim}`, () => {
            this.eyes.play(eyesBlinkAnim)
        })

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    playEmpty() {
        this.hideAll()

        this.empty.visible = true
    }

    playWaiting() {
        this.body.setFrame('match/penguin/body-wait')
        this.outline.setFrame('match/penguin/outline-wait')

        this.setAllVisible(true)

        this.empty.visible = false

        this.eyes.play(eyesBlinkAnim)
    }

    playBattle() {
        this.hideAll()

        this.body.setFrame('match/penguin/body-battle')
        this.outline.setFrame('match/penguin/outline-battle')

        this.body.visible = true
        this.outline.visible = true
    }

    hideAll() {
        this.setAllVisible(false)
        this.eyes.anims.stop()
    }

    setAllVisible(visible) {
        this.each(child => {
            child.visible = visible
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */