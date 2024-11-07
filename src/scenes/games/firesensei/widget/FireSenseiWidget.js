export const preload = {
    key: 'sensei-pack',
    url: 'assets/media/games/sensei/sensei-pack.json',
    loadString: ['loading', 'sensei']
}

/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Interactive from "../../../components/Interactive";
import Animation from "../../../components/Animation";
import FireSenseiSprite from "./sprite/FireSenseiSprite";
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
        /** @type {Phaser.GameObjects.Sprite} */
        this.fireDeck;
        /** @type {FireSenseiSprite} */
        this.senseiSprite;
        /** @type {FireSenseiSpeech} */
        this.speech;


        // bg
        const bg = scene.add.image(705, 461, "senseifire", "bg/bg");
        this.add(bg);

        // flowers
        const flowers = scene.add.sprite(1050, 585, "senseifire", "bg/flowers0001");
        this.add(flowers);

        // lanternLight
        const lanternLight = scene.add.image(1279, 193, "senseifire", "bg/lantern/light");
        this.add(lanternLight);

        // lantern
        const lantern = scene.add.image(1272, 174, "senseifire", "bg/lantern/lantern");
        this.add(lantern);

        // fireDeck
        const fireDeck = scene.add.sprite(1026, 517, "senseifire", "instructions/fireDeck/anim0001");
        fireDeck.visible = false;
        this.add(fireDeck);

        // ref
        const ref = scene.add.image(0, 0, "senseifire", "ref");
        ref.setOrigin(0, 0);
        ref.visible = false;
        ref.alpha = 0.5;
        ref.alphaTopLeft = 0.5;
        ref.alphaTopRight = 0.5;
        ref.alphaBottomLeft = 0.5;
        ref.alphaBottomRight = 0.5;
        this.add(ref);

        // senseiSprite
        const senseiSprite = new FireSenseiSprite(scene, 396, 519);
        this.add(senseiSprite);

        // speech
        const speech = new FireSenseiSpeech(scene, 1005, 210);
        this.add(speech);

        // fg
        const fg = scene.add.image(758, 833, "senseifire", "fg");
        this.add(fg);

        // bg (components)
        new Interactive(bg);

        // flowers (components)
        const flowersAnimation = new Animation(flowers);
        flowersAnimation.key = "bg/flowers";
        flowersAnimation.end = 40;

        this.bg = bg;
        this.flowers = flowers;
        this.lanternLight = lanternLight;
        this.fireDeck = fireDeck;
        this.senseiSprite = senseiSprite;
        this.speech = speech;

        /* START-USER-CTR-CODE */

        this.currentSequence
        this.currentSequenceIndex = 0

        this.rankId = 1

        this.addBackgroundEvent('pointerup', this.forwardSequence, this)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get beltString() {
        return this.getString(`belt_${this.rankId}`)
    }

    get speechIndex() {
        return this.getIndex(this.speech)
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
        this.rankId = Phaser.Math.Clamp(rank, 1, 9)

        if (rank > 9) {
            this.startSequence(sequences.maskAward)
        } else {
            this.startSequence(sequences.beltAward)
        }
    }

    startSequence(sequence) {
        // Pass SenseiWidget dependency
        this.currentSequence = sequence(this)

        this.currentSequenceIndex = 0
        this.updateSequence()
    }

    forwardSequence() {
        if (!this.currentSequence) {
            return
        }

        if (this.currentSequenceIndex === this.currentSequence.length - 1) {
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

    showBelt() {
        this.award.showBelt(this.rankId)
    }

    showMask() {
        this.award.showMask()
    }

    hideAward() {
        this.award.close()
    }

    playFireDeck() {
        this.fireDeck.visible = true
        this.fireDeck.play('firedeck')
        this.fireDeck.once('animationcomplete', () => this.fireDeck.play('firedeck-loop'))
    }

    hideFireDeck() {
        this.fireDeck.anims.stop()
        this.fireDeck.visible = false
    }

    hideAll() {
        this.hideSpeech()
        this.hideAward()
        this.hideHideout()
    }

    leaveGame() {
        this.close()
        this.world.room.sendLeaveGame()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
