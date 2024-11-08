/* START OF COMPILED CODE */

import GameScene from "../GameScene";
import FireSenseiWidget from "./widget/FireSenseiWidget";
import Zone from "../../components/Zone";
import FireSenseiMenu from "./menu/FireSenseiMenu";
import Button from "../../components/Button";
/* START-USER-IMPORTS */

import FireSenseiInstructions from './instructions/FireSenseiInstructions'
import * as sequences from './config/FireSenseiSequences'
import senseiResponses from './config/FireSenseiResponses'

/* END-USER-IMPORTS */

export default class FireSensei extends GameScene {

    constructor() {
        super("FireSensei");

        /** @type {FireSenseiWidget} */
        this.widget;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.volcano1;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.volcano2;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.amulet;
        /** @type {FireSenseiMenu} */
        this.menu;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("firesensei-pack", "assets/media/games/firesensei/firesensei-pack.json");
        this.load.pack("firesenseiinstructions-pack", "assets/media/games/firesensei/instructions/firesenseiinstructions-pack.json");
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

        // amulet
        const amulet = this.add.rectangle(315, 488, 158, 125.3);
        amulet.setOrigin(0, 0);
        amulet.alpha = 0.5;
        amulet.isFilled = true;
        amulet.fillColor = 65280;

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

        // amulet (components)
        const amuletZone = new Zone(amulet);
        amuletZone.hoverCallback = () => this.onAmuletOver();
        amuletZone.hoverOutCallback = () => this.onAmuletOut();
        amuletZone.callback = () => this.onAmuletClick();

        // xButton (components)
        const xButtonButton = new Button(xButton);
        xButtonButton.spriteName = "grey-button";
        xButtonButton.callback = () => this.world.client.sendJoinLastRoom();

        this.widget = widget;
        this.volcano1 = volcano1;
        this.volcano2 = volcano2;
        this.amulet = amulet;
        this.menu = menu;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    get userHasDeck() {
        return this.world.client.inventory.award.includes(8006)
    }

    create() {
        super.create()

        this.widget.addBackgroundEvent('pointerover', this.onBackgroundOver, this)

        this.instructions = new FireSenseiInstructions(this)

        // Add instructions into widget
        this.widget.addAt(this.instructions, this.widget.speechIndex)

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

        let sequence = 'welcome'

        const equipped = Object.values(this.client.penguin.items.equippedFlat)

        for (let [item, id] of Object.entries(senseiResponses)) {
            if (equipped.includes(parseInt(item))) {
                sequence = id
                break
            }
        }

        this.startSequence(sequences.returnWelcome, `firehelp_return_${sequence}`)
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

        if (this.widget.shouldSequenceStick && this.widget.currentSequenceId !== sequences.returnWelcome) {
            this.widget.forwardSequence()
            return
        }

        this.startSequence(sequences.volcanoIntro)
    }

    onAmuletOver() {
        this.widget.setAmuletOver()
    }

    onAmuletOut() {
        this.widget.setAmuletOut()
    }

    onAmuletClick() {
        if (!this.menu.isStartMenuActive) {
            return
        }

        if (this.widget.shouldSequenceStick && this.widget.currentSequenceId !== sequences.returnWelcome) {
            this.widget.forwardSequence()
            return
        }
        
        this.startSequence(sequences.amuletIntro)
    }

    setButtonsVisible(visible) {
        this.amulet.zone.visible = visible
        this.volcano1.zone.visible = visible
        this.volcano2.zone.visible = visible
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
        this.instructions.close()
        this.instructions.hideAll()
    }

    stop() {
        //this.match.close()

        super.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
