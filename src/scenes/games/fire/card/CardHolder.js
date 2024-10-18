const emptyTime = 2916

/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
/* START-USER-IMPORTS */

import layout from '../layout'

/* END-USER-IMPORTS */

export default class CardHolder extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.symbol;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cardAnim;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cardMask;


        // bg
        const bg = scene.add.image(0, 0, "fire", "cards/frame/bg");
        this.add(bg);

        // outline
        const outline = scene.add.image(0, 0, "fire", "cards/frame/outline");
        this.add(outline);

        // symbol
        const symbol = scene.add.image(0, 0, "fire", "cards/frame/symbol-b");
        this.add(symbol);

        // cardAnim
        const cardAnim = scene.add.sprite(0, -33, "fire", "cards/trump/fire0001");
        cardAnim.setOrigin(0.5980312691189295, 0.5);
        cardAnim.visible = false;
        this.add(cardAnim);

        // cardMask
        const cardMask = scene.add.sprite(-60, -33, "fire", "cards/masks/trump/fire0001");
        cardMask.visible = false;
        this.add(cardMask);

        this.symbol = symbol;
        this.cardAnim = cardAnim;
        this.cardMask = cardMask;

        /* START-USER-CTR-CODE */

        this.card = null

        // Card mask pos must be reset to this before being set to world position
        this.cardMaskX = this.cardMask.x
        this.cardMaskY = this.cardMask.y

        this.cardAnim.on('animationcomplete', () => scene.decreaseCardAnimQueue())
        this.cardMask.on('animationcomplete', () => scene.decreaseCardAnimQueue())

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(element, isClient) {
        let frame

        if (isClient && this.scene.hasNoPlayableCards(element)) {
            frame = `cards/frame/symbol-no-${element}`
        } else {
            frame = `cards/frame/symbol-${element}`
        }

        this.symbol.setFrame(frame)

        super.show()
    }

    addCard(card) {
        this.card = card

        card.scale = layout.scale.holder

        this.add(card)

        this.bringToTop(this.cardAnim)

        const pos = layout.pos.card.holder
        card.setPosition(pos.x, pos.y)
    }

    playAnim(element, type, shouldFlip) {
        this.cardAnim.scaleX = shouldFlip && type === 'energy' ? -1 : 1
        
        this.cardAnim.play(`fire/card/${type}/${element}`)
        this.cardMask.play(`fire/card/${type}/${element}-mask`)

        // + 2 for both normal anim and mask anim
        this.scene.cardAnimQueue += 2

        // Set correct mask position
        this.cardMask.setPosition(this.cardMaskX, this.cardMaskY)
        const matrix = this.cardMask.getWorldTransformMatrix()

        this.cardMask.x = matrix.getX(0, 0)
        this.cardMask.y = matrix.getY(0, 0)

        const mask = this.cardMask.createBitmapMask()
        this.card.mask = mask
    }

    playEmpty() {
        this.scene.cardAnimQueue++

        this.scene.time.delayedCall(emptyTime, () => this.scene.decreaseCardAnimQueue())
    }

    reset() {
        this.remove(this.card, true)
        this.card = null
        this.close()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */