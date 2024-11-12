export const preload = {
    key: 'firesensei-pack',
    url: 'assets/media/games/firesensei/firesensei-pack.json',
    loadString: ['loading', 'sensei']
}

/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Interactive from "../../../components/Interactive";
import Animation from "../../../components/Animation";
import FireSenseiSprite from "./sprite/FireSenseiSprite";
import FireSenseiAward from "./award/FireSenseiAward";
import FireSenseiSpeech from "./speech/FireSenseiSpeech";
/* START-USER-IMPORTS */

import * as sequences from '../config/FireSenseiSequences'

/* END-USER-IMPORTS */

export default class FireSenseiWidget extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.bg;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flowers;
        /** @type {Phaser.GameObjects.Image} */
        this.lanternLight;
        /** @type {FireSenseiSprite} */
        this.senseiSprite;
        /** @type {FireSenseiAward} */
        this.award;
        /** @type {FireSenseiSpeech} */
        this.speech;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flame;
        /** @type {Phaser.GameObjects.Container} */
        this.wipe;


        // bg
        const bg = scene.add.image(705, 461, "firesensei", "bg/bg");
        this.add(bg);

        // flowers
        const flowers = scene.add.sprite(1050, 585, "firesensei", "bg/flowers0001");
        this.add(flowers);

        // lanternLight
        const lanternLight = scene.add.image(1279, 193, "firesensei", "bg/lantern/light");
        this.add(lanternLight);

        // lantern
        const lantern = scene.add.image(1272, 174, "firesensei", "bg/lantern/lantern");
        this.add(lantern);

        // senseiSprite
        const senseiSprite = new FireSenseiSprite(scene, 396, 519);
        this.add(senseiSprite);

        // fg
        const fg = scene.add.image(758, 833, "firesensei", "fg");
        this.add(fg);

        // award
        const award = new FireSenseiAward(scene, 1089, 577);
        award.visible = false;
        this.add(award);

        // speech
        const speech = new FireSenseiSpeech(scene, 1005, 210);
        this.add(speech);

        // wipe
        const wipe = scene.add.container(755, 1150);
        wipe.visible = false;
        this.add(wipe);

        // flame
        const flame = scene.add.sprite(0, 0, "firesensei", "flame0001");
        flame.setOrigin(0.5, 1);
        wipe.add(flame);

        // rectangle
        const rectangle = scene.add.rectangle(-27, 479, 1600, 960);
        rectangle.isFilled = true;
        rectangle.fillColor = 16763904;
        wipe.add(rectangle);

        // bg (components)
        new Interactive(bg);

        // flowers (components)
        const flowersAnimation = new Animation(flowers);
        flowersAnimation.key = "bg/flowers";
        flowersAnimation.end = 40;

        this.bg = bg;
        this.flowers = flowers;
        this.lanternLight = lanternLight;
        this.senseiSprite = senseiSprite;
        this.award = award;
        this.speech = speech;
        this.flame = flame;
        this.wipe = wipe;

        /* START-USER-CTR-CODE */

        this.stickSeqs = [
            sequences.returnWelcome,
            sequences.returnNoResponse
        ]

        this.currentSequence
        this.currentSequenceId
        this.currentSequenceIndex = 0

        this.rankId = 1

        this.addBackgroundEvent('pointerup', this.forwardSequence, this)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get awardString() {
        return this.getString(`text_award${this.rankId}`)
    }

    get speechIndex() {
        return this.getIndex(this.speech)
    }

    get isSequenceEnded() {
        return this.currentSequenceIndex === this.currentSequence.length - 1
    }

    get shouldSequenceStick() {
        return this.stickSeqs.includes(this.currentSequenceId) && !this.isSequenceEnded
    }

    show() {
        this.hideAll()

        super.show()

        this.scene.events.emit('sensei_ready')
    }

    close() {
        this.currentSequence = null
        this.currentSequenceIndex = 0

        this.hideAll()

        super.close()
    }

    addBackgroundEvent(event, callback, context) {
        this.bg.on(event, callback, context)
    }

    rankUp(rank) {
        this.rankId = Phaser.Math.Clamp(rank, 1, 5)

        this.showWipe()
    }

    startAwardSequence() {
        this.senseiSprite.playBow(() => {
            this.senseiSprite.playPoint(true)

            this.startSequence(this.rankId > 4 ? sequences.gemAward : sequences.suitAward)
        })
    }

    startSequence(sequence, ...args) {
        this.currentSequenceId = sequence
        // Pass SenseiWidget dependency
        this.currentSequence = this.currentSequenceId(this, ...args)

        this.currentSequenceIndex = 0
        this.updateSequence()
    }

    forwardSequence() {
        if (!this.currentSequence) {
            return
        }

        if (this.isSequenceEnded) {
            return
        }

        this.currentSequenceIndex++
        this.updateSequence()
    }

    updateSequence() {
        if (!this.currentSequence) {
            return
        }

        this.currentSequence[this.currentSequenceIndex]()
    }

    showSpeech(text) {
        this.speech.show(text)
        this.playTalk()
    }

    hideSpeech() {
        this.speech.close()
        this.playWait()
    }

    playTalk() {
        this.senseiSprite.playTalk()
    }

    playWait() {
        this.senseiSprite.playWait()
    }

    playBow() {
        this.senseiSprite.playBow()
    }

    playPoint() {
        this.senseiSprite.playPoint()
    }

    setAmuletOver() {
        this.senseiSprite.amulet.setFrame('sensei/amulet-hover')
    }

    setAmuletOut() {
        this.senseiSprite.amulet.setFrame('sensei/amulet')
    }

    setGiOver() {
        this.senseiSprite.giGlow.visible = true
    }

    setGiOut() {
        this.senseiSprite.giGlow.visible = false
    }

    showWipe() {
        this.setAlphaOfAll(0)
        this.wipe.visible = true

        this.flame.play('firesensei/flameWipe')

        // Alpha
        this.scene.tweens.add({
            targets: this.wipe,
            duration: 291,
            ease: 'Linear',
            alpha: { from: 0, to: 1 }
        })

        // Move up
        this.scene.tweens.chain({
            targets: this.wipe,

            tweens: [
                {
                    duration: 1000,
                    ease: 'Quad.easeIn',
                    y: { from: 1150, to: 0 },

                    onComplete: () => {
                        this.setAlphaOfAll(1)
                        this.scene.time.delayedCall(458, () => this.startAwardSequence())
                    }
                },
                {
                    delay: 125,
                    duration: 791,
                    ease: 'Linear',
                    alpha: { from: 1, to: 0 },

                    onComplete: () => {
                        this.scene.time.delayedCall(125, () => {
                            if (this.rankId === 5) {
                                this.showFireGem()
                            } else {
                                this.showSuitPiece(this.rankId)
                            }
                        })
                    }
                },
            ]
        })
    }

    setAlphaOfAll(alpha) {
        this.each(child => {
            if (child !== this.wipe) {
                child.alpha = alpha
            }
        })
    }

    showSuitPiece(rank) {
        this.award.showAward(rank)
    }

    showFireGem() {
        this.award.showAward(5)
    }

    hideAward() {
        this.award.close()
    }

    hideAll() {
        this.hideSpeech()
        this.hideAward()
        this.flowers.visible = false
    }

    leaveGame() {
        this.close()
        this.world.room.sendLeaveGame()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
