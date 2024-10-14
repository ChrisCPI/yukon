/* START OF COMPILED CODE */

import GameScene from "../GameScene";
import Animation from "../../components/Animation";
import Board from "./board/Board";
import Spinner from "./spinner/Spinner";
import ClientPortrait from "./portraits/ClientPortrait";
import Portrait from "./portraits/Portrait";
import Button from "../../components/Button";
import ElementPopup from "./popups/element/ElementPopup";
import TimerPopup from "./popups/timer/TimerPopup";
import QuitPopup from "./popups/quit/QuitPopup";
/* START-USER-IMPORTS */

import CardLoader from '@engine/loaders/CardLoader'
import CardJitsuCard from './card/CardJitsuCard'
import FirePlayer from './FirePlayer'

/* END-USER-IMPORTS */

export default class Fire extends GameScene {

    constructor() {
        super("Fire");

        /** @type {Board} */
        this.board;
        /** @type {Spinner} */
        this.spinner;
        /** @type {Phaser.GameObjects.Layer} */
        this.playersLayer;
        /** @type {Phaser.GameObjects.Layer} */
        this.cardsLayer;
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
        /** @type {Phaser.GameObjects.Text} */
        this.statusText;
        /** @type {ElementPopup} */
        this.elementPopup;
        /** @type {TimerPopup} */
        this.timerPopup;
        /** @type {QuitPopup} */
        this.quitPopup;


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

        // bg
        this.add.image(761, 480, "fire", "bg/back/bg");

        // lanternLight
        const lanternLight = this.add.sprite(1428, 365, "fire", "bg/back/lantern_light0001");

        // lantern
        this.add.image(1413, 390, "fire", "bg/back/lantern");

        // board
        const board = new Board(this, 780, 540);
        this.add.existing(board);

        // spinner
        const spinner = new Spinner(this, 773, 552);
        this.add.existing(spinner);

        // playersLayer
        const playersLayer = this.add.layer();

        // frontRock
        this.add.image(761, 714, "fire", "bg/front/rock");

        // lava2
        const lava2 = this.add.sprite(1390, 961, "fire", "bg/front/lava_anim0001");

        // lava1
        const lava1 = this.add.sprite(141, 961, "fire", "bg/front/lava_anim0001");
        lava1.flipX = true;

        // frontTop
        this.add.image(728, 876, "fire", "bg/front/top");

        // cardsLayer
        const cardsLayer = this.add.layer();

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

        // statusText
        const statusText = this.add.text(752, 370, "", {});
        statusText.setOrigin(0.4459703740153312, 0.4098174200271478);
        statusText.visible = false;
        statusText.alpha = 0;
        statusText.alphaTopLeft = 0;
        statusText.alphaTopRight = 0;
        statusText.alphaBottomLeft = 0;
        statusText.alphaBottomRight = 0;
        statusText.text = "<empty message>";
        statusText.setStyle({ "align": "center", "color": "#000", "fixedWidth":600,"fixedHeight":150,"fontFamily": "CCComiccrazy", "fontSize": "45px", "stroke": "#ff9900", "strokeThickness":8,"shadow.color": "#f5d589", "shadow.blur":25,"shadow.stroke":true,"shadow.fill":true});
        statusText.setPadding({"top":20});

        // elementPopup
        const elementPopup = new ElementPopup(this, 780, 450);
        this.add.existing(elementPopup);
        elementPopup.visible = false;

        // timerPopup
        const timerPopup = new TimerPopup(this, 760, 480);
        this.add.existing(timerPopup);
        timerPopup.visible = false;

        // quitPopup
        const quitPopup = new QuitPopup(this, 780, 448.8999938964844);
        this.add.existing(quitPopup);
        quitPopup.visible = false;

        // lanternLight (components)
        const lanternLightAnimation = new Animation(lanternLight);
        lanternLightAnimation.key = "bg/back/lantern_light";
        lanternLightAnimation.end = 80;

        // lava2 (components)
        const lava2Animation = new Animation(lava2);
        lava2Animation.key = "bg/front/lava_anim";
        lava2Animation.end = 51;

        // lava1 (components)
        const lava1Animation = new Animation(lava1);
        lava1Animation.key = "bg/front/lava_anim";
        lava1Animation.end = 51;

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
        this.spinner = spinner;
        this.playersLayer = playersLayer;
        this.cardsLayer = cardsLayer;
        this.portrait0 = portrait0;
        this.portrait1 = portrait1;
        this.portrait2 = portrait2;
        this.portrait3 = portrait3;
        this.closeX = closeX;
        this.statusText = statusText;
        this.elementPopup = elementPopup;
        this.timerPopup = timerPopup;
        this.quitPopup = quitPopup;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.addListeners()

        this.portraits = [this.portrait0, this.portrait1, this.portrait2, this.portrait3]

        this.deck = [null, null, null, null, null]

        this.onCardLoad = this.onCardLoad.bind(this)

        this.cardLoader = new CardLoader(this)

        for (const portrait of this.portraits) {
            portrait.close()
        }

        this.ninjas = []

        this.currentNinja = null

        this.timerPopup.show()

        this.network.send('start_game')
    }

    addListeners() {
        this.network.events.on('start_game', this.handleStartGame, this)
        this.network.events.on('next_round', this.handleNextRound, this)
        this.network.events.on('spinner_select', this.handleSpinnerSelect, this)
    }

    removeListeners() {
        this.network.events.off('start_game', this.handleStartGame, this)
        this.network.events.off('next_round', this.handleNextRound, this)
        this.network.events.off('spinner_select', this.handleSpinnerSelect, this)
    }

    get isMyTurn() {
        return this.world.isClientUsername(this.currentNinja.username)
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
            // The seat of the user from the perspective of the client; NOT the actual seat
            const clientSeat = Math.abs(clientIndex - seat)

            this.ninjas.push({
                portrait: this.portraits[clientSeat],
                player: new FirePlayer(this, 0, 0),
                username: user.username,
                clientSeat: clientSeat
            })

            const ninja = this.ninjas[seat]

            this.playersLayer.add(ninja.player)

            ninja.portrait.setPlayer(user)
            ninja.player.setPlayer(user, clientSeat)
        }
    }

    handleNextRound(args) {
        for (let [slot, card] of args.deck.entries()) {
            if (this.deck[slot] !== null) continue

            this.cardLoader.loadCard(card, this.onCardLoad)
        }

        if (this.currentNinja) {
            this.currentNinja.portrait.disablePortrait()
        }
        this.currentNinja = this.ninjas[args.ninja]
        this.currentNinja.portrait.enablePortrait()
        this.currentNinja.player.setHighlightActive()

        for (let [seat, ninja] of this.ninjas.entries()) {
            if (seat === args.ninja) {
                ninja.portrait.avatar.playThinking()
            } else {
                ninja.portrait.avatar.playWaiting()
            }
        }

        let text
        if (this.isMyTurn) {
            text = this.getString('fire_client_turn')
        } else {
            text = this.getFormatString('fire_turn', this.currentNinja.username.toUpperCase())
        }

        this.board.activeSpaces = [args.spin.cw, args.spin.ccw]

        this.spinner.spinAmount = args.spin.amount
        this.spinner.playRise()

        this.playStatusText(text)
    }

    handleSpinnerSelect(args) {
        this.spinner.playFlip(args.tabId)
    }

    onCardLoad(key, card) {
        const newCard = this.createCard()

        newCard.init('front', card)
        newCard.icon.setTexture(key)
    }

    createCard() {
        let card = new CardJitsuCard(this)
        this.cardsLayer.add(card)

        return card
    }

    playStatusText(text) {
        this.statusText.text = text

        this.tweens.killTweensOf(this.statusText)

        this.statusText.visible = true

        const data = {
            targets: this.statusText,
            ease: 'Linear'
        }

        this.tweens.chain({
            ...data,
            tweens: [
                {
                    scale: { from: 0.25, to: 0.8 },
                    duration: 875
                },
                {
                    scale: { from: 0.8, to: 1 },
                    duration: 958
                }
            ]
        })

        this.tweens.chain({
            ...data,
            tweens: [
                {
                    alpha: { from: 0, to: 1 },
                    duration: 125
                },
                {
                    delay: 1250,
                    alpha: { from: 1, to: 0 },
                    duration: 375
                }
            ],
            onComplete: () => this.statusText.visible = false
        })
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