import BaseContainer from '@scenes/base/BaseContainer'

export default class BasePortrait extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y)

        this.seat = 0
    }

    setPlayer(user) {
        this.createMask()

        this.nickname.text = user.username

        this.top.setFrame(`portraits/${this.seat}/top`)
        this.side.setFrame(`portraits/${this.seat}/side`)
        this.bottom.setFrame(`portraits/${this.seat}/bottom`)

        this.avatar.setPlayer(user)

        this.energy.setEnergy(user.energy)
        this.energy.tintDisabled()

        if (this.arrow) this.arrow.visible = false

        this.hideClock()

        this.show()
    }

    enablePortrait() {
        this.setParts(true)
    }

    disablePortrait() {
        this.setParts(false)
    }

    setParts(enabled) {
        const suffix = enabled ? '-active' : ''

        this.bg.setFrame(`portraits/${this.seat === 0 ? 0 : 'common'}/bg${suffix}`)
        this.top.setFrame(`portraits/${this.seat}/top${suffix}`)
        this.side.setFrame(`portraits/${this.seat}/side${suffix}`)
        this.bottom.setFrame(`portraits/${this.seat}/bottom${suffix}`)

        if (enabled) {
            this.energy.tintEnabled()
        } else {
            this.energy.tintDisabled()
        }
    }

    playClock() {
        this.clock.show()
    }

    hideClock() {
        this.clock.close()
    }

    createMask() {
        let rect = this.maskRect
        let graphics = this.scene.make.graphics()

        let matrix = rect.getWorldTransformMatrix()

        graphics.fillRect(matrix.getX(0, 0), matrix.getY(0, 0), rect.width, rect.height)

        let mask = graphics.createGeometryMask()

        this.avatar.setMask(mask)
    }

}