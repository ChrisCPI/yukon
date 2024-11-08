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
        /** @type {Phaser.GameObjects.Polygon} */
        this.gi;
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

        // gi
        const gi = this.add.polygon(313, 621, "-105.99101618043164 289.2875862239497 -246.0075817008278 271.73050051795155 -257.39180578419223 217.3246136655515 -264.8938758828617 216.50620601842388 -277.94749677177697 142.68875960032938 -274.7504975226684 91.50673043975564 -289.6224547257352 75.52729944635871 -284.83872084669565 3.623136954670372 -269.1145103297381 -84.70929942273995 -241.83866685484122 -161.7722212450941 -277.11688873254957 -181.52802549661075 -277.11688873254957 -189.0540461638552 -269.1204917736022 -207.39872154026352 -248.89431123038298 -233.2694175839163 -229.6088832705691 -253.96597441883853 -197.62329543478018 -275.6032838371663 -151.99679513961064 -297.2405932554941 -110.4982135841758 -297.6415798002424 -82.21147751911599 -289.45331409719876 -52.06377197609163 -271.9602010043328 -14.844382416802432 -241.44030156571566 29.93309692202149 -199.54713819681993 106.46303121399717 -214.92805888108512 126.43389058093987 -223.21784956170282 143.01347194217522 -240.174239590239 146.02794128058167 -265.79722896669375 184.46242534526368 -248.4640302708567 208.95498871981601 -228.4931709039141 226.6091783897515 -207.1187536861732 237.91376065353086 -187.02750006629276 209.76733848528113 -158.08791909448712 229.29711517704766 -112.23539990512205 260.65532625680976 -28.377517050834513 280.53610064922657 73.11906800518852 268.2242195122644 91.28593780992105 267.67110556871296 121.97829632262267 248.7475817258836 142.88752989185184 244.12386831577987 209.0669554801342 205.24444943507638 235.21001300336582 156.31000843005302 258.00139648515756 83.52984403307244 280.76504878473634 14.051043590787799 290.66409019711796");
        gi.setOrigin(0, 0);
        gi.alpha = 0.5;
        gi.fillColor = 65280;

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
        this.gi = gi;
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

        this.gi.isButton = true
        this.gi.setInteractive({
            cursor: 'pointer',
            hitArea: new Phaser.Geom.Polygon(this.gi.geom.points),
            hitAreaCallback: Phaser.Geom.Polygon.Contains
        })

        this.gi.on('pointerover', () => this.onGiOver())
        this.gi.on('pointerout', () => this.onGiOut())
        this.gi.on('pointerup', (pointer) => this.onGiClick(pointer))

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

    onGiOver() {
        this.widget.setGiOver()
    }

    onGiOut() {
        this.widget.setGiOut()
    }

    onGiClick(pointer) {
        if (pointer.button != 0) {
            return
        }

        if (!this.menu.isStartMenuActive) {
            return
        }

        if (this.widget.shouldSequenceStick && this.widget.currentSequenceId !== sequences.returnWelcome) {
            this.widget.forwardSequence()
            return
        }

        this.startSequence(sequences.itemsIntro)
    }

    setButtonsVisible(visible) {
        this.amulet.zone.visible = visible
        this.volcano1.zone.visible = visible
        this.volcano2.zone.visible = visible
        this.gi.visible = visible
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
