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
import GameOverPopup from "./popups/gameover/GameOverPopup";
/* START-USER-IMPORTS */

import CardLoader from '@engine/loaders/CardLoader'
import CardJitsuCard from './card/CardJitsuCard'
import CardHolder from './card/CardHolder'
import FirePlayer from './FirePlayer'
import layout from './layout'

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
        /** @type {Phaser.GameObjects.Layer} */
        this.holderLayer;
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
        /** @type {GameOverPopup} */
        this.gameOverPopup;


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

        // holderLayer
        const holderLayer = this.add.layer();

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
        statusText.setStyle({ "align": "center", "color": "#000", "fixedWidth":750,"fixedHeight":150,"fontFamily": "CCComiccrazy", "fontSize": "45px", "stroke": "#ff9900", "strokeThickness":8,"shadow.color": "#f5d589", "shadow.blur":25,"shadow.stroke":true,"shadow.fill":true});
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

        // gameOverPopup
        const gameOverPopup = new GameOverPopup(this, 760, 480);
        this.add.existing(gameOverPopup);
        gameOverPopup.visible = false;

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
        this.holderLayer = holderLayer;
        this.portrait0 = portrait0;
        this.portrait1 = portrait1;
        this.portrait2 = portrait2;
        this.portrait3 = portrait3;
        this.closeX = closeX;
        this.statusText = statusText;
        this.elementPopup = elementPopup;
        this.timerPopup = timerPopup;
        this.quitPopup = quitPopup;
        this.gameOverPopup = gameOverPopup;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.addListeners()

        this.mySeat = 0

        this.gameDone = false

        this.holders = []
        for (let i = 0; i < 4; i++) {
            const holder = new CardHolder(this)
            holder.visible = false
            this.holderLayer.add(holder)
            this.holders.push(holder)
        }

        this.portraits = [this.portrait0, this.portrait1, this.portrait2, this.portrait3]

        this.deck = new Array(5).fill(null)
        this.onCardDeckLoad = this.onCardDeckLoad.bind(this)
        this.onCardHolderLoad = this.onCardHolderLoad.bind(this)
        this.cardLoader = new CardLoader(this)

        for (const portrait of this.portraits) {
            portrait.close()
        }

        this.ninjas = []

        this.jumpQueue = []
        this.cardAnimQueue = 0

        this.currentNinja = null

        this.timerPopup.show()

        this.queuedCardLoads = []

        this.jumpsDone = false
        this.events.on('jumps_done', () => {
            this.jumpsDone = true
        })

        this.cardAnimsDone = false
        this.events.on('card_anims_done', () => {
            this.cardAnimsDone = true
        })

        this.tabsFlipped = false
        this.events.on('tabs_flipped', () => {
            this.tabsFlipped = true
        })

        this.network.send('start_game')
    }

    addListeners() {
        this.network.events.on('start_game', this.handleStartGame, this)
        this.network.events.on('next_round', this.handleNextRound, this)
        this.network.events.on('spinner_select', this.handleSpinnerSelect, this)
        this.network.events.on('auto_board_select', this.handleAutoBoardSelect, this)
        this.network.events.on('board_select', this.handleBoardSelect, this)
        this.network.events.on('start_battle', this.handleStartBattle, this)
        this.network.events.on('auto_pick_card', this.handleAutoPickCard, this)
        this.network.events.on('opponent_pick_card', this.handleOpponentPickCard, this)
        this.network.events.on('choose_element', this.handleChooseElement, this)
        this.network.events.on('choose_opponent', this.handleChooseOpponent, this)
        this.network.events.on('judge_battle', this.handleJudgeBattle, this)
        this.network.events.on('finish', this.handleFinish, this)
        this.network.events.on('player_quit', this.handlePlayerQuit, this)
    }

    removeListeners() {
        this.network.events.off('start_game', this.handleStartGame, this)
        this.network.events.off('next_round', this.handleNextRound, this)
        this.network.events.off('spinner_select', this.handleSpinnerSelect, this)
        this.network.events.off('auto_board_select', this.handleAutoBoardSelect, this)
        this.network.events.off('board_select', this.handleBoardSelect, this)
        this.network.events.off('start_battle', this.handleStartBattle, this)
        this.network.events.off('auto_pick_card', this.handleAutoPickCard, this)
        this.network.events.off('opponent_pick_card', this.handleOpponentPickCard, this)
        this.network.events.off('choose_element', this.handleChooseElement, this)
        this.network.events.off('choose_opponent', this.handleChooseOpponent, this)
        this.network.events.off('judge_battle', this.handleJudgeBattle, this)
        this.network.events.off('finish', this.handleFinish, this)
        this.network.events.off('player_quit', this.handlePlayerQuit, this)
    }

    get isMyTurn() {
        return this.world.isClientUsername(this.currentNinja.username)
    }

    handleStartGame(args) {
        this.timerPopup.close()

        let usernames = args.users.map(u => u.username.toLowerCase())
        let clientIndex = usernames.indexOf(this.client.penguin.username.toLowerCase())

        this.mySeat = clientIndex

        let clientSeats = new Array(args.users.length).fill(0)

        for (let i = 0; i < clientSeats.length; i++) {
            clientSeats[clientIndex] = i

            if (clientIndex + 1 >= clientSeats.length) {
                clientIndex = 0
            } else {
                clientIndex++
            }
        }

        for (let [seat, user] of args.users.entries()) {
            // The seat of the user from the perspective of the client; NOT the actual seat
            const clientSeat = clientSeats[seat]

            this.ninjas.push({
                portrait: this.portraits[clientSeat],
                player: new FirePlayer(this),
                username: user.username,
                holder: this.holders[clientSeat],
                clientSeat: clientSeat
            })

            const ninja = this.ninjas[seat]

            this.playersLayer.add(ninja.player)

            ninja.portrait.setPlayer(user)
            ninja.player.setPlayer(user, clientSeat)
        }
    }

    handleNextRound(args) {
        // todo: handle cards that already exist, use slot from entries idk
        for (let card of args.deck) {
            this.cardLoader.loadCard(card, this.onCardDeckLoad)
        }

        this.enableAllCards()

        if (this.currentNinja) {
            this.currentNinja.portrait.disablePortrait()
            this.currentNinja.player.setHighlightInactive()
        }
        this.currentNinja = this.ninjas[args.ninja]
        this.currentNinja.portrait.enablePortrait()
        this.currentNinja.player.setHighlightActive()

        for (let [seat, ninja] of this.ninjas.entries()) {
            if (ninja === null) continue

            if (seat === args.ninja) {
                ninja.portrait.avatar.playThinking()
                ninja.portrait.playClock()
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

        this.board.resetSpaces()
        this.board.activeSpaces = args.spin.tiles

        this.spinner.spinAmount = args.spin.amount
        this.spinner.playRise()

        this.playStatusText(text)

        this.jumpsDone = false
        this.cardAnimsDone = false
        this.tabsFlipped = false
    }

    handleSpinnerSelect(args) {
        this.spinner.playFlip(args.tabId)
    }

    handleAutoBoardSelect(args) {
        if (this.tabsFlipped) {
            this.board.onSpaceClick(args.tile, false)
        } else {
            this.events.once('tabs_flipped', () => this.board.onSpaceClick(args.tile, false))
        }
    }

    handleBoardSelect(args) {
        if (this.tabsFlipped) {
            this.selectBoard(args)
        } else {
            this.events.once('tabs_flipped', () => this.selectBoard(args))
        }
    }

    selectBoard(args) {
        this.spinner.playSink()

        const space = this.board.spaces[args.tile]
        const spacePos = layout.board.spaces[args.tile]

        const ninja = this.ninjas[args.ninja]

        const prevSpace = this.board.spaces[ninja.player.tile]
        const prevSpacePos = layout.board.spaces[ninja.player.tile]

        let pos
        let lookAt
        let playReact = false

        if (prevSpace.occupants.length > 1) {
            const occupants = prevSpace.occupants.filter(player => player.seat !== ninja.player.seat)
            for (let [index, player] of occupants.entries()) {
                pos = prevSpacePos[occupants.length - 1]
                lookAt = pos
                player.jumpTo(pos[index], lookAt, playReact)

                this.jumpQueue.push(player)
            }
        }

        if (space.occupants.length > 0) {
            playReact = true
            const newLength = space.occupants.length + 1
            for (let [index, player] of space.occupants.entries()) {
                pos = spacePos[newLength - 1]
                lookAt = pos
                player.jumpTo(pos[index], lookAt, playReact)

                this.jumpQueue.push(player)
            }
        } else {
            pos = spacePos[0]
            lookAt = { x: 760 }
        }

        this.jumpQueue.push(ninja.player)

        prevSpace.removeNinja(ninja.player)
        space.addNinja(ninja.player)
        ninja.player.jumpTo(pos[space.occupants.length - 1], lookAt, playReact)
    }

    handleStartBattle(args) {
        if (this.jumpsDone) {
            this.startBattle(args)
        } else {
            this.events.once('jumps_done', () => this.startBattle(args))
        }
    }

    handleAutoPickCard(args) {
        const card = this.deck.find(card => card !== null && card.id == args.card)

        this.pickCard(card, false)
    }

    handleOpponentPickCard(args) {
        const newCard = this.createCard()
        newCard.init('back')

        const ninja = this.ninjas[args.seat]
        ninja.holder.addCard(newCard)
        ninja.portrait.hideClock()
    }

    handleChooseElement(args) {
        if (this.jumpsDone) {
            this.elementPopup.show()
        } else {
            this.events.once('jumps_done', () => this.elementPopup.show())
        }
    }

    handleChooseOpponent(args) {
        if (this.jumpsDone) {
            this.showChooseOpponent()
        } else {
            this.events.once('jumps_done', () => this.showChooseOpponent())
        }
    }

    showChooseOpponent(visible = true) {
        for (let ninja of this.ninjas) {
            if (ninja === null || ninja.clientSeat === 0) continue

            if (visible) {
                ninja.portrait.enablePick()
            } else {
                ninja.portrait.disablePick()
            }
        }
    }

    handleJudgeBattle(args) {
        this.queuedCardLoads = []

        this.events.once('all_cards_loaded', () => this.judgeBattle(args))

        for (let data of args.ninjas) {
            if (!this.queuedCardLoads.includes(data.card)) {
                this.queuedCardLoads.push(data.card)
            }
        }

        for (let card of this.queuedCardLoads) {
            this.cardLoader.loadCard(card, this.onCardHolderLoad)
        }
    }

    handleFinish(args) {
        this.gameOverPopup.setFinish(args.finish)
    }

    handlePlayerQuit(args) {
        if (args.allQuit) {
            this.hideGameElements()
            this.removeGameListeners()
            this.quitPopup.show()
            return
        }

        this.ninjas[args.seat].portrait.playerQuit()

        this.removeNinja(args.seat, true)
    }

    removeNinja(seat) {
        const ninja = this.ninjas[seat]

        this.board.spaces[ninja.player.tile].removeNinja(ninja.player)

        this.playersLayer.remove(ninja.player)
        ninja.player.destroy()

        this.ninjas[seat] = null
    }

    startBattle(args) {
        if (this.elementPopup.visible) {
            this.elementPopup.close()
        }

        let holderPos
        let isRemoteBattle = false

        if (args.seats.length === 2 && !args.seats.includes(this.mySeat)) {
            holderPos = layout.pos.holder[1]
            isRemoteBattle = true
        } else {
            holderPos = layout.pos.holder[args.seats.length - 2]
        }

        for (let seat of args.seats) {
            const ninja = this.ninjas[seat]

            //const pos = holderPos[ninja.clientSeat + posOffset]
            let pos
            if (isRemoteBattle) {
                let seats = args.seats.map(s => this.ninjas[s].clientSeat).sort((a, b) => a - b)
                pos = holderPos[seats.indexOf(ninja.clientSeat) + 1]
            } else {
                //const index = args.seats.length === 2 && seat !==
                pos = holderPos[Math.min(ninja.clientSeat, args.seats.length - 1)]
            }
            ninja.holder.setPosition(pos.x, pos.y)

            ninja.holder.show(args.type, seat === this.mySeat)

            ninja.portrait.avatar.playBattling()

            ninja.portrait.playClock()
        }

        if (args.seats.includes(this.mySeat)) {
            for (let card of this.deck) {
                if (card.elementId === args.type || args.type === 'b' || this.hasNoPlayableCards(args.type)) {
                    card.enableInput()
                } else {
                    card.disableCard()
                }
            }

            this.playStatusText(this.getString(`fire_battle_${args.type}`))
        }
    }

    judgeBattle(args) {
        for (let data of args.ninjas) {
            const animType = args.ninjas.some(n => n.state === 4) && args.ninjas.some(n => n.seat === this.mySeat)
                ? 'energy'
                : 'trump'

            const ninja = this.ninjas[data.seat]

            const card = ninja.holder.card
            card.updateCard(data.card)
            card.icon.setTexture(this.cardLoader.getKey(data.card.id))
            card.setState('front')

            ninja.portrait.energy.setEnergy(data.energy)

            let statusText
            switch (data.state) {
                case 1:
                    ninja.portrait.avatar.playDefeat()
                    ninja.holder.playAnim(args.battleType, animType, ninja.clientSeat === 0)
                    this.holderLayer.bringToTop(ninja.holder)
                    statusText = this.getString('fire_defeat')
                    break

                case 2:
                    ninja.portrait.avatar.playWaiting()
                    ninja.holder.playEmpty()
                    statusText = this.getString('fire_tie_game')
                    break

                case 3:
                    ninja.portrait.avatar.playVictory()
                    ninja.holder.playEmpty()
                    statusText = this.getString('fire_win')
                    break

                case 4:
                    ninja.portrait.avatar.playVictory()
                    ninja.holder.playEmpty()
                    statusText = this.getString('fire_win_b')
                    break
            }

            if (data.seat === this.mySeat) {
                this.playStatusText(statusText)

                if (data.state === 2) {
                    // Play sound
                }
            }
        }

        this.events.once('card_anims_done', () => this.handlePostRound(args))
    }

    chooseOpponent(clientSeat, send = true) {
        for (let ninja of this.ninjas) {
            if (ninja === null || ninja.clientSeat === 0) continue

            ninja.portrait.disablePick()
        }

        if (send) {
            const ninja = this.ninjas.find(n => n !== null && n.clientSeat === clientSeat)

            const seat = this.ninjas.indexOf(ninja)

            this.network.send('choose_opponent', { seat: seat })
        }
    }

    handlePostRound(args) {
        for (let data of args.ninjas) {
            this.ninjas[data.seat].holder.reset()
        }

        for (let [seat, position] of args.podium.entries()) {
            if (position > 0) {
                const ninja = this.ninjas[seat]

                if (ninja === null) continue

                ninja.portrait.playerFinish(position)

                this.removeNinja(seat)
            }
        }

        if (this.gameOverPopup.finish > 0) {
            this.hideGameElements()
            this.gameOverPopup.show()
            return
        }

        this.network.send('ninja_ready')
    }

    onCardDeckLoad(key, card) {
        if (this.gameDone) return

        const newCard = this.createCard()
        this.cardsLayer.add(newCard)

        newCard.init('front', card, true)
        newCard.icon.setTexture(key)
    }

    onCardHolderLoad(key, card) {
        if (this.gameDone) return

        this.queuedCardLoads = this.queuedCardLoads.filter(c => c.id !== card.id)

        if (this.queuedCardLoads.length === 0) {
            this.events.emit('all_cards_loaded')
        }
    }

    createCard() {
        let card = new CardJitsuCard(this)

        return card
    }

    filterCards(element) {
        if (element === 'n') return

        for (let card of this.deck) {
            if (card === null) continue

            if (card.elementId !== element) {
                card.disableCard()
            } else if (card.disabled.visible) {
                card.enableCard()
            }
        }
    }

    enableAllCards() {
        for (let card of this.deck) {
            if (card === null) continue

            if (card.disabled.visible) {
                card.enableCard()
            }
        }
    }

    hasNoPlayableCards(element) {
        if (element === 'b') {
            return false
        }

        const filteredCards = this.deck.filter(card => card !== null && card.elementId === element)

        return filteredCards.length === 0
    }

    pickCard(card, send = true) {
        for (let c of this.deck) {
            c.disableInput()
        }

        const slot = this.deck.indexOf(card)

        this.deck[slot] = null

        this.cardsLayer.remove(card)

        const me = this.ninjas[this.mySeat]
        me.holder.addCard(card)
        me.portrait.hideClock()

        if (send) {
            this.network.send('pick_card', { card: card.id })
        }
    }

    decreaseCardAnimQueue() {
        this.cardAnimQueue--

        if (this.cardAnimQueue === 0) {
            this.events.emit('card_anims_done')
        }
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

    hideGameElements() {
        for (let portrait of this.portraits) {
            portrait.close()
        }

        for (let player of this.playersLayer.list) {
            player.close()
        }

        for (let holder of this.holders) {
            holder.close()
        }

        for (let card of this.deck) {
            if (card === null) continue

            card.destroy()
        }
        this.spinner.close()

        this.gameDone = true
    }

    stop() {
        super.stop()

        for (let portrait of this.portraits) {
            portrait.clock.clearTimer()
        }
    }

    initTimeoutUp() {
        this.network.send('leave_game')
        this.quitPopup.show()
    }

    sendLeaveGame() {
        this.network.send('leave_game')
        this.leaveGame()
    }

    removeGameListeners() {
        this.events.off('jumps_done')
        this.events.off('card_anims_done')
        this.events.off('all_cards_loaded')
        this.events.off('tabs_flipped')
    }

    leaveGame() {
        this.removeListeners()

        this.removeGameListeners()

        this.world.client.sendJoinLastRoom()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */