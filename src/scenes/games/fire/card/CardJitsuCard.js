/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
/* START-USER-IMPORTS */

import layout from '../layout'

/* END-USER-IMPORTS */

export default class CardJitsuCard extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 750, y ?? 1000);

        /** @type {Phaser.GameObjects.Image} */
        this.shadow;
        /** @type {Phaser.GameObjects.Image} */
        this.back;
        /** @type {Phaser.GameObjects.Sprite} */
        this.glow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.icon;
        /** @type {Phaser.GameObjects.Image} */
        this.colorSprite;
        /** @type {Phaser.GameObjects.Image} */
        this.element;
        /** @type {Phaser.GameObjects.Image} */
        this.disabled;
        /** @type {Phaser.GameObjects.Text} */
        this.valueText;


        // shadow
        const shadow = scene.add.image(99, 111, "fire", "cards/card/shadow");
        this.add(shadow);

        // back
        const back = scene.add.image(95, 107, "fire", "cards/card/back");
        back.visible = false;
        this.add(back);

        // glow
        const glow = scene.add.sprite(95, 105, "fire", "cards/card/glow0001");
        glow.alpha = 0.5;
        glow.alphaTopLeft = 0.5;
        glow.alphaTopRight = 0.5;
        glow.alphaBottomLeft = 0.5;
        glow.alphaBottomRight = 0.5;
        this.add(glow);

        // icon
        const icon = scene.add.sprite(1, 1, "_MISSING");
        icon.setOrigin(0, 0);
        icon.visible = false;
        this.add(icon);

        // colorSprite
        const colorSprite = scene.add.image(95, 107, "fire", "cards/card/color");
        colorSprite.tintTopLeft = 1132705;
        colorSprite.tintTopRight = 1132705;
        colorSprite.tintBottomLeft = 1132705;
        colorSprite.tintBottomRight = 1132705;
        this.add(colorSprite);

        // element
        const element = scene.add.image(28, 28, "fire", "cards/card/f");
        element.setOrigin(0.5116279069767442, 0.5128205128205128);
        this.add(element);

        // disabled
        const disabled = scene.add.image(95, 107, "fire", "cards/card/disabled");
        disabled.visible = false;
        this.add(disabled);

        // valueText
        const valueText = scene.add.text(1, 48, "", {});
        valueText.text = "88";
        valueText.setStyle({ "align": "center", "color": "#000", "fixedWidth":52,"fontFamily": "Burbank Big Regular", "fontSize": "38px", "fontStyle": "bold" });
        this.add(valueText);

        this.shadow = shadow;
        this.back = back;
        this.glow = glow;
        this.icon = icon;
        this.colorSprite = colorSprite;
        this.element = element;
        this.disabled = disabled;
        this.valueText = valueText;

        /* START-USER-CTR-CODE */

        this.player
        this.state

        this.id
        this.powerId
        this.description
        this.elementId

        this.spacer
        this.color
        this.glow

        this.tween

        this.glow.anims.play('fire/card/glow')

        this.on('pointerup', this.onUp, this)
        this.on('pointerover', this.onOver, this)
        this.on('pointerout', this.onOut, this)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get isDisabled() {
        return this.disabled.visible
    }

    init(state, card = null) {
        if (!this.scene.deck.includes(null)) {
            return
        }

        let empty = this.scene.deck.indexOf(null)
        this.scene.deck[empty] = this

        if (card) {
            this.updateCard(card)
        }

        this.updateDepth()
        this.setState(state)

        this.placeInDeck(empty)
    }

    get isPowerCard() {
        return this.powerId > 0
    }

    updateCard(card) {
        let tint = layout.colors[card.color].color

        this.id = card.id
        this.powerId = card.powerId
        this.elementId = card.element
        this.value = card.value
        this.color = card.color

        this.valueText.text = card.value
        this.colorSprite.tint = tint

        this.element.setFrame(`cards/card/${card.element}`)

        if (this.isPowerCard) {
            this.glow.tint = tint
        }
    }

    setState(state) {
        this.state = state

        switch (state) {
            case 'back':
                this.setStateBack()
                break
            default:
                this.setStateFront()
                break
        }
    }

    setStateFront() {
        this.scale = layout.scale.deck
        this.spacer = layout.spacer.dealtFront

        this.showFrontSprites(true)
    }

    setStateBack() {
        this.scale = layout.scale.back
        this.spacer = layout.spacer.dealtBack

        this.showFrontSprites(false)
    }

    setStatePick() {
        this.scale = layout.scale.pick

        if (!this.tween) {
            this.tweenToPick()
            return
        }

        this.tween.once('complete', this.tweenToPick, this)
    }

    showFrontSprites(show) {
        this.back.visible = !show
        this.valueText.visible = show
        this.element.visible = show
        this.colorSprite.visible = show
        this.icon.visible = show
        this.glow.visible = show && this.isPowerCard
    }

    placeInDeck(empty) {
        let pos = layout.pos.card.deck
        let spacer = layout.spacer.deck

        let y = pos.y + (spacer * empty)

        this.setPosition(pos.x, y)
    }

    tweenToPick() {
        this.scale = layout.scale.pick

        let pos = layout.pos.picks[this.player.seat]

        this.tweenTo(pos.x, pos.y)
    }

    removeTween() {
        if (!this.tween) {
            return
        }

        this.tween.stop()
        this.tween = null
    }

    enableInput() {
        this.setSize(this.colorSprite.width, this.colorSprite.height)
        this.setInteractive()

        // Offset
        this.input.hitArea.x = this.colorSprite.x
        this.input.hitArea.y = this.colorSprite.y

        this.enableCard()
    }

    disableInput() {
        this.disableInteractive()
        this.onOut()
    }

    disableCard() {
        this.disableInput()
        this.glow.visible = false
        this.disabled.visible = true
    }

    enableCard() {
        this.glow.visible = this.isPowerCard
        this.disabled.visible = false
    }

    onUp() {
        this.scene.pickCard(this)
    }

    onOver() {

    }

    onOut() {

    }

    updateDepth() {
        this.depth = this.y
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
