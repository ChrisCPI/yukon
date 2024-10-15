import layout from '../layout'


export default class Space {

    constructor(sprite, id) {
        this.sprite = sprite
        this.scene = sprite.scene
        this.board = sprite.parentContainer
        this.id = id

        this.occupants = []

        this.clone = this.createClone()

        sprite.on('animationcomplete', () => {
            if (sprite.anims.currentAnim.key == `fire/space${id}_local`) {
                this.playLocal(15)
            }
        })
    }

    show(seat) {
        this.clicked = false
        this.clone.tint = layout.colors.highlight.enabled[seat]
        this.clone.visible = true

        if (this.scene.isMyTurn) {
            this.clone.setInteractive()
            this.playLocal()
        } else {
            this.clone.disableInteractive()
            this.playRemote()
        }
    }

    onOver() {
        this.scene.filterCards(layout.boardTrumps[this.id])
    }

    onOut() {
        this.scene.enableAllCards()
    }

    onClick() {
        if (this.clicked) return
        this.board.onSpaceClick(this.id)
        this.clicked = true
    }

    disableInteractive() {
        this.clone.disableInteractive()
        this.clone.emit('pointerout') 
    }

    reset() {
        this.clone.visible = false
        this.sprite.anims.stop()
        this.sprite.setFrame(`board/space${this.id}0001`)
    }

    playLocal(startFrame = 1) {
        this.sprite.play({ key: `fire/space${this.id}_local`, startFrame: startFrame })
    }

    playRemote() {
        this.sprite.play(`fire/space${this.id}_remote`)
    }

    addNinja(ninja) {
        this.occupants.push(ninja)
        ninja.tile = this.id
    }

    removeNinja(ninja) {
        this.occupants = this.occupants.filter(n => n.seat !== ninja.seat)
    }

    /**
     * Makes a duplicates of the space, which is then tint filled
     * at 25% alpha, to simulate the color effect for ninja seats
     */
    createClone() {
        const space = this.sprite
        const clone = this.scene.add.sprite(space.x, space.y, space.texture.key, space.frame.name)
        clone.setOrigin(space.originX, space.originY)
        clone.alpha = 0.25
        clone.visible = false

        this.board.add(clone)

        clone.setInteractive({ cursor: 'pointer', pixelPerfect: true })

        clone.on('pointerup', () => this.onClick())
        clone.on('pointerover', () => this.onOver())
        clone.on('pointerout', () => this.onOut())

        return clone
    }

}