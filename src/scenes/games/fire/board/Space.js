import layout from '../layout'


export default class Space {

    constructor(sprite) {
        this.sprite = sprite
        this.scene = sprite.scene

        this.clone = this.createClone()
    }

    /**
     * Makes a duplicates of the space, which is then tint filled
     * at 20% alpha, to simulate the color effect for remote ninjas
     */
    createClone() {
        const space = this.sprite
        const clone = this.scene.add.sprite(space.x, space.y, space.texture.key, space.frame.name)
        clone.setOrigin(space.originX, space.originY)
        clone.visible = false

        this.sprite.parentContainer.add(clone)

        return clone
    }

}