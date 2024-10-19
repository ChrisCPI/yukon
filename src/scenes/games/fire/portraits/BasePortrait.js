import BaseContainer from '@scenes/base/BaseContainer'
import layout from '../layout'
import blendColors from '@engine/utils/color/blendColors'

const subscripts = ['st', 'nd', 'rd', 'th']

export default class BasePortrait extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y)

        this.seat = 0

        this.finish = 0
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

    playerQuit() {
        this.setInactive('quit')
    }

    playerFinish(finish) {
        this.finish = finish
        this.setInactive('finish')
    }

    setInactive(state) {
        switch (state) {
            case 'quit':
                this.statusText.text = this.getString('quit')
                this.energy.setEnergy(0)
                break
            case 'finish':
                this.statusText.text = `${this.finish}   `
                this.subText.text = subscripts[this.finish - 1]
                break
        }

        this.avatar.playLeave()
        this.statusText.visible = true

        if (this.highlight?.visible) this.highlight.visible = false

        if (this.arrow?.visible) {
            this.arrow.close()
        }

        this.disablePortrait()
        this.setDarken()
    }

    setDarken() {
        const tint = layout.colors.darken.color

        this.nickname.setTint(tint)
        this.statusText.setTint(tint)

        this.top.tint = tint
        this.side.tint = tint
        this.bottom.tint = tint

        for (let child of this.energy.list) {
            if (child == this.energy.fill) {
                child.tint = blendColors(child.tint, tint)
            } else {
                child.tint = tint
            }
        }

        this.avatar.setDarken()
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