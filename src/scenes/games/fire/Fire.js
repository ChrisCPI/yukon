/* START OF COMPILED CODE */

import GameScene from "../GameScene";
import Animation from "../../components/Animation";
import Board from "./board/Board";
import ClientPortrait from "./portraits/ClientPortrait";
import Portrait from "./portraits/Portrait";
import Button from "../../components/Button";
import ElementPopup from "./popups/element/ElementPopup";
import TimerPopup from "./popups/timer/TimerPopup";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Fire extends GameScene {

    constructor() {
        super("Fire");

        /** @type {Board} */
        this.board;
        /** @type {ClientPortrait} */
        this.portrait0;
        /** @type {Portrait} */
        this.portrait1;
        /** @type {Portrait} */
        this.portrait2;
        /** @type {Portrait} */
        this.portrait3;
        /** @type {Phaser.GameObjects.Image} */
        this.closeX;
        /** @type {ElementPopup} */
        this.elementPopup;
        /** @type {TimerPopup} */
        this.timerPopup;


        /* START-USER-CTR-CODE */

        this.music = 118

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("fire-pack", "assets/media/games/fire/fire-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_back_bg
        this.add.image(761, 480, "fire", "bg/back/bg");

        // lanternLight
        const lanternLight = this.add.sprite(1428, 365, "fire", "bg/back/lantern_light0001");

        // lantern
        this.add.image(1413, 390, "fire", "bg/back/lantern");

        // board
        const board = new Board(this, 780, 540);
        this.add.existing(board);

        // portrait0
        const portrait0 = new ClientPortrait(this, 168, 175);
        this.add.existing(portrait0);

        // portrait1
        const portrait1 = new Portrait(this, 1376, 216);
        this.add.existing(portrait1);

        // portrait2
        const portrait2 = new Portrait(this, 1376, 506);
        this.add.existing(portrait2);

        // portrait3
        const portrait3 = new Portrait(this, 1376, 796);
        this.add.existing(portrait3);

        // closeButton
        const closeButton = this.add.image(1471, 48, "main", "grey-button");

        // fire_ref
        const fire_ref = this.add.image(760, 480, "fire_ref");
        fire_ref.visible = false;
        fire_ref.alpha = 0.5;
        fire_ref.alphaTopLeft = 0.5;
        fire_ref.alphaTopRight = 0.5;
        fire_ref.alphaBottomLeft = 0.5;
        fire_ref.alphaBottomRight = 0.5;

        // closeX
        const closeX = this.add.image(1471, 46, "main", "grey-x");

        // elementPopup
        const elementPopup = new ElementPopup(this, 780, 450);
        this.add.existing(elementPopup);
        elementPopup.visible = false;

        // timerPopup
        const timerPopup = new TimerPopup(this, 760, 480);
        this.add.existing(timerPopup);
        timerPopup.visible = false;

        // lanternLight (components)
        const lanternLightAnimation = new Animation(lanternLight);
        lanternLightAnimation.key = "bg/back/lantern_light";
        lanternLightAnimation.end = 80;

        // portrait1 (prefab fields)
        portrait1.seat = 1;

        // portrait2 (prefab fields)
        portrait2.seat = 2;

        // portrait3 (prefab fields)
        portrait3.seat = 3;

        // closeButton (components)
        const closeButtonButton = new Button(closeButton);
        closeButtonButton.spriteName = "grey-button";
        closeButtonButton.callback = () => this.sendLeaveGame();

        this.board = board;
        this.portrait0 = portrait0;
        this.portrait1 = portrait1;
        this.portrait2 = portrait2;
        this.portrait3 = portrait3;
        this.closeX = closeX;
        this.elementPopup = elementPopup;
        this.timerPopup = timerPopup;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.addListeners()

        this.portraits = [this.portrait0, this.portrait1, this.portrait2, this.portrait3]

        for (const portrait of this.portraits) {
            portrait.close()
        }

        this.ninjas = []

        this.timerPopup.show()

        this.network.send('start_game')
    }

    addListeners() {
        this.network.events.on('start_game', this.handleStartGame, this)
    }

    removeListeners() {
        this.network.events.off('start_game', this.handleStartGame, this)
    }

    handleStartGame(args) {
        this.timerPopup.close()

        let clientIndex = 0

        for (let [index, user] of args.users.entries()) {
            if (this.world.isClientUsername(user.username)) {
                clientIndex = index
                break
            }
        }

        for (let [seat, user] of args.users.entries()) {
            this.ninjas.push({
                portrait: this.portraits[Math.abs(clientIndex - seat)],
                username: user.username
            })

            const ninja = this.ninjas[seat]

            ninja.portrait.setPlayer(user)
        }
    }

    sendLeaveGame() {
        this.network.send('leave_game')
        this.leaveGame()
    }

    leaveGame() {
        this.removeListeners()

        this.world.client.sendJoinLastRoom()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */