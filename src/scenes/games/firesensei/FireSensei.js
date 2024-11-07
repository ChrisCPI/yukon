/* START OF COMPILED CODE */

import GameScene from "../GameScene";
import FireSenseiWidget from "./widget/FireSenseiWidget";
import Zone from "../../components/Zone";
import FireSenseiMenu from "./menu/FireSenseiMenu";
import Button from "../../components/Button";
/* START-USER-IMPORTS */

//import FireSenseiInstructions from './instructions/FireSenseiInstructions'
import * as sequences from './config/FireSenseiSequences'

/* END-USER-IMPORTS */

export default class FireSensei extends GameScene {

    constructor() {
        super("FireSensei");

        /** @type {FireSenseiWidget} */
        this.widget;
        /** @type {FireSenseiMenu} */
        this.menu;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("senseifire-pack", "assets/media/games/senseifire/senseifire-pack.json");
    }

    /** @returns {void} */
    _create() {

        // widget
        const widget = new FireSenseiWidget(this, 0, -1);
        this.add.existing(widget);

        // volcano1
        const volcano1 = this.add.rectangle(0, 730, 300, 230);
        volcano1.setOrigin(0, 0);
        volcano1.alpha = 0.5;
        volcano1.isFilled = true;
        volcano1.fillColor = 65280;

        // volcano2
        const volcano2 = this.add.rectangle(1161, 731, 360, 230);
        volcano2.setOrigin(0, 0);
        volcano2.alpha = 0.5;
        volcano2.isFilled = true;
        volcano2.fillColor = 65280;

        // menu
        const menu = new FireSenseiMenu(this, 1059, 754);
        this.add.existing(menu);

        // xButton
        const xButton = this.add.image(1474, 43, "main", "grey-button");

        // x
        this.add.image(1474, 41, "main", "grey-x");

        // volcano1 (components)
        const volcano1Zone = new Zone(volcano1);
        volcano1Zone.callback = () => this.onVolcanoClick();

        // volcano2 (components)
        const volcano2Zone = new Zone(volcano2);
        volcano2Zone.callback = () => this.onVolcanoClick();

        // xButton (components)
        const xButtonButton = new Button(xButton);
        xButtonButton.spriteName = "grey-button";
        xButtonButton.callback = () => this.world.client.sendJoinLastRoom();

        this.widget = widget;
        this.menu = menu;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    get userHasDeck() {
        return true//this.world.client.inventory.award.includes(821)
    }

    create() {
        super.create()

        this.widget.addBackgroundEvent('pointerover', this.onBackgroundOver, this)

        //this.instructions = new SenseiInstructions(this)

        // Add instructions into widget
        //this.widget.addAt(this.instructions, this.widget.speechIndex)

        this.tweens.chain({
            targets: this.widget.lanternLight,
            ease: 'Linear',
            repeat: -1,

            tweens: [
                {
                    scale: 0.845,
                    duration: 292,
                },
                {
                    scale: 1,
                    duration: 458,
                },
                {
                    scale: 0.845,
                    duration: 625,
                },
                {
                    scale: 0.870,
                    duration: 500,
                },
                {
                    scale: 1,
                    duration: 417,
                },
                {
                    scale: 0.844,
                    duration: 292,
                },
                {
                    scale: 1,
                    duration: 417,
                }
            ]
        })

        if (!this.userHasDeck) {
            this.startSequence(sequences.intro)
            return
        }

        // todo: sensei reacts to different items you're wearing
        this.startSequence(sequences.returnWelcome, 'firehelp_return_welcome')
        this.showStartMenu()
    }

    onBackgroundOver() {
        // Speech displayed when there is no menu should stick
        if (!this.menu.visible) return

        // Speech displayed during menus other than the start menu should stick
        if (!this.menu.isStartMenuActive) return

        // Speech should not hide in the welcome
        if (this.widget.shouldSequenceStick) return

        this.widget.hideSpeech()
    }

    startSequence(sequence, ...args) {
        this.menu.close()
        this.widget.startSequence(sequence, ...args)
    }

    showMenu(menu) {
        this.widget.playWait()
        this.menu.show(menu)
    }

    showStartMenu() {
        this.menu.showStartMenu()
    }

    showPreviousMenu() {
        this.menu.showPreviousMenu()
    }

    onVolcanoClick() {
        if (!this.menu.isStartMenuActive) {
            return
        }

        if (this.widget.shouldSequenceStick) {
            this.widget.forwardSequence()
            return
        }

        this.startSequence(sequences.volcanoIntro)
    }

    showMatch() {
        this.menu.close()
        this.hideSpeech()
        this.match.show()
    }

    showSpeech(text) {
        this.widget.showSpeech(text)
    }

    hideSpeech() {
        this.widget.hideSpeech()
    }

    hideInstructions() {
        this.instructions.hideAll()
    }

    stop() {
        //this.match.close()

        super.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
