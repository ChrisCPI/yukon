/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
/* START-USER-IMPORTS */

import layout from './layout'

/* END-USER-IMPORTS */

export default class FirePlayer extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.highlight;
        /** @type {Phaser.GameObjects.Sprite} */
        this.back_arm;
        /** @type {Phaser.GameObjects.Sprite} */
        this.feet;
        /** @type {Phaser.GameObjects.Sprite} */
        this.outline;
        /** @type {Phaser.GameObjects.Sprite} */
        this.body;
        /** @type {Phaser.GameObjects.Sprite} */
        this.shadow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.black_belt;
        /** @type {Phaser.GameObjects.Sprite} */
        this.beak;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sensei;
        /** @type {Phaser.GameObjects.Sprite} */
        this.front_arm;
        /** @type {Phaser.GameObjects.Sprite} */
        this.upper_feet;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.tinted;


        // highlight
        const highlight = scene.add.image(0, 0, "fire", "penguins/highlight");
        this.add(highlight);

        // back_arm
        const back_arm = scene.add.sprite(-1, -83, "fire", "penguins/0/backarm0001");
        this.add(back_arm);

        // feet
        const feet = scene.add.sprite(-1, -83, "fire", "penguins/0/feet0001");
        this.add(feet);

        // outline
        const outline = scene.add.sprite(-1, -83, "fire", "penguins/0/outline0001");
        this.add(outline);

        // body
        const body = scene.add.sprite(-1, -83, "fire", "penguins/0/body0001");
        this.add(body);

        // shadow
        const shadow = scene.add.sprite(-1, -83, "fire", "penguins/0/shadow0001");
        this.add(shadow);

        // black_belt
        const black_belt = scene.add.sprite(-1, -83, "fire", "penguins/0/blackbelt0001");
        this.add(black_belt);

        // beak
        const beak = scene.add.sprite(-1, -83, "fire", "penguins/0/beak0001");
        this.add(beak);

        // sensei
        const sensei = scene.add.sprite(-1, -83, "fire", "penguins/2/sensei0001");
        this.add(sensei);

        // front_arm
        const front_arm = scene.add.sprite(-1, -83, "fire", "penguins/0/frontarm0001");
        this.add(front_arm);

        // upper_feet
        const upper_feet = scene.add.sprite(-1, -83, "fire", "penguins/0/misc0001");
        this.add(upper_feet);

        // lists
        const tinted = [body, back_arm, front_arm];

        this.highlight = highlight;
        this.back_arm = back_arm;
        this.feet = feet;
        this.outline = outline;
        this.body = body;
        this.shadow = shadow;
        this.black_belt = black_belt;
        this.beak = beak;
        this.sensei = sensei;
        this.front_arm = front_arm;
        this.upper_feet = upper_feet;
        this.tinted = tinted;

        /* START-USER-CTR-CODE */

        this.parts = [
            {
                id: 'backarm',
                sprite: this.back_arm
            },
            {
                id: 'feet',
                sprite: this.feet
            },
            {
                id: 'frontarm',
                sprite: this.front_arm
            },
            {
                id: 'beak',
                sprite: this.beak
            },
            {
                id: 'outline',
                sprite: this.outline
            },
            {
                id: 'body',
                sprite: this.body
            },
            {
                id: 'shadow',
                sprite: this.shadow
            },
            {
                id: 'blackbelt',
                sprite: this.black_belt
            }
        ]

        this.animsFinished = []

        this.currentAction = null

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setPlayer(user, seat) {
        // Sensei frames only exist on seat 2
        this.seat = user.isSensei ? 2 : seat

        const color = this.world.getColor(user.color)

        for (const sprite of this.tinted) {
            sprite.tint = color
        }

        this.black_belt.visible = !user.isSensei
        this.sensei.visible = user.isSensei

        // Misc frames do not exist on seat 1
        if (seat !== 1) {
            this.parts.push({
                id: 'misc',
                sprite: this.upper_feet
            })
        }

        if (user.isSensei) {
            this.parts.push({
                id: 'sensei',
                sprite: this.sensei
            })
        }

        for (let part of this.parts) {
            part.sprite.on('animationcomplete', () => this.onAnimComplete(part.id))
        }

        this.playIdle()
        this.setHighlightInactive()
        this.setTilePosition(user.tile)
    }

    setTilePosition(tile, occupants = 1) {
        const pos = layout.board[tile][occupants - 1][0]

        // Todo: change the x and y values to be correct so we dont need to multiply here
        const x = (pos.x * 2) - this.parentContainer.x
        const y = (pos.y * 2) - this.parentContainer.y
        
        this.setPosition(x, y)
    }

    setHighlightActive() {
        this.highlight.alpha = 1
        this.highlight.tint = layout.colors.highlight.enabled[this.seat]
    }

    setHighlightInactive() {
        this.highlight.alpha = 0.75
        this.highlight.tint = layout.colors.highlight.disabled[this.seat]
    }

    playStart() {
        this.playAction('start')
    }

    playIdle() {
        this.playAction('idle')
    }

    playJump() {
        this.highlight.visible = false
        this.playAction('jump')
    }

    playAction(action) {
        this.currentAction = action
        for (let part of this.parts) {
            const key = (action === 'jump') ? `jump/${part.id}` : `${this.seat}/${part.id}/${action}`
            part.sprite.play(`fire/player/${key}`)
        }
    }

    onAnimComplete(id) {
        if (this.animsFinished.includes(id)) return

        this.animsFinished.push(id)

        if (this.parts.every(part => this.animsFinished.includes(part.id))) {
            this.animsFinished = []

            switch (this.currentAction) {
                case 'jump':
                    this.highlight.visible = true
                    this.playStart()
                    break
                case 'start':
                    this.playIdle()
                    break
                default:
                    break
            }
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */