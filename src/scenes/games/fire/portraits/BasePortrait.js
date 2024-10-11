import BaseContainer from '@scenes/base/BaseContainer'

export default class BasePortrait extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y)

        this.seat = 0
    }

    setPlayer(user) {
        this.nickname.text = user.username

        this.top.setFrame(`portraits/${this.seat}/top`)
        this.side.setFrame(`portraits/${this.seat}/side`)
        this.bottom.setFrame(`portraits/${this.seat}/bottom`)

        this.avatar.setPlayer(user)

        this.show()
    }

}