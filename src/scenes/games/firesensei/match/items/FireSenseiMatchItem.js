import BaseContainer from '@scenes/base/BaseContainer'

export default class FireSenseiMatchItem extends BaseContainer {

    init() {
        this.maskOriginalX = this.maskImage.x
        this.maskOriginalY = this.maskImage.y

        this.penguin.mask = this.maskImage.createBitmapMask()
    }

    setPlayer(username, color) {
        this.username.text = username
        this.username.visible = true
        
        this.penguin.body.tint = this.world.getColor(color)
        this.penguin.playWaiting()
    }

    playEmpty() {
        this.username.visible = false
        this.penguin.playEmpty()
    }

    playBattle() {
        this.penguin.playBattle()
    }

    /**
     * Reposition the penguin mask every time the container is repositioned
     */
    positionMask() {
        this.maskImage.setPosition(this.maskOriginalX, this.maskOriginalY)

        const matrix = this.maskImage.getWorldTransformMatrix()

        const x = matrix.getX(0, 0)
        const y = matrix.getY(0, 0)

        this.maskImage.setPosition(x, y)
    }

}