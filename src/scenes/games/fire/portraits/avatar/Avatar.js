/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Avatar extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Sprite} */
        this.arm_back;
        /** @type {Phaser.GameObjects.Sprite} */
        this.body_lines;
        /** @type {Phaser.GameObjects.Sprite} */
        this.body;
        /** @type {Phaser.GameObjects.Sprite} */
        this.ninja;
        /** @type {Phaser.GameObjects.Sprite} */
        this.beak;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sensei;
        /** @type {Phaser.GameObjects.Sprite} */
        this.arm_front;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.tinted;


        // arm_back
        const arm_back = scene.add.sprite(98, -9, "fire", "portraits/avatar/arm-back0001");
        this.add(arm_back);

        // body_lines
        const body_lines = scene.add.sprite(-2, -4, "fire", "portraits/avatar/body-lines0001");
        this.add(body_lines);

        // body
        const body = scene.add.sprite(-2, -8, "fire", "portraits/avatar/body0001");
        this.add(body);

        // ninja
        const ninja = scene.add.sprite(-1, -47, "fire", "portraits/avatar/mask0001");
        this.add(ninja);

        // beak
        const beak = scene.add.sprite(32, -41, "fire", "portraits/avatar/beak0001");
        this.add(beak);

        // sensei
        const sensei = scene.add.sprite(14, 4, "fire", "portraits/avatar/sensei0001");
        this.add(sensei);

        // arm_front
        const arm_front = scene.add.sprite(-1, -1, "fire", "portraits/avatar/arm-front0001");
        this.add(arm_front);

        // lists
        const tinted = [arm_front, body, arm_back];

        this.arm_back = arm_back;
        this.body_lines = body_lines;
        this.body = body;
        this.ninja = ninja;
        this.beak = beak;
        this.sensei = sensei;
        this.arm_front = arm_front;
        this.tinted = tinted;

        /* START-USER-CTR-CODE */

        this.parts = [
            {
                id: 'arm-back',
                sprite: this.arm_back
            },
            {
                id: 'arm-front',
                sprite: this.arm_front
            },
            {
                id: 'beak',
                sprite: this.beak
            },
            {
                id: 'body-lines',
                sprite: this.body_lines
            },
            {
                id: 'body',
                sprite: this.body
            },
            {
                id: 'mask',
                sprite: this.ninja
            }
        ]

        this.emotion = null

        this.animsFinished = []

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setPlayer(user) {
        const color = this.world.getColor(user.color)

        for (const sprite of this.tinted) {
            sprite.tint = color
        }

        this.ninja.visible = !user.isSensei
        this.sensei.visible = user.isSensei

        if (user.isSensei) {
            this.parts.push({
                id: 'sensei',
                sprite: this.sensei
            })
        }

        for (let obj of this.parts) {
            obj.sprite.on('animationcomplete', () => this.onAnimComplete(obj.id))
        }
    }

    playWaiting() {
        const randomEmotions = ['blink', 'look_left', 'look_right', 'waiting']
        const emotion = Phaser.Utils.Array.GetRandom(randomEmotions)
        this.playEmotion(emotion)
    }

    playThinking() {
        this.playEmotion('thinking')
    }

    playBattling() {
        this.playEmotion('battling')
    }

    playVictory() {
        this.playEmotion('happy')
    }

    playDefeat() {
        this.playEmotion('sad')
    }

    playEmotion(emotion) {
        this.emotion = emotion
        for (let part of this.parts) {
            part.sprite.play(`fire/avatar_${part.id}_${emotion}`)
        }
    }

    onAnimComplete(id) {
        if (this.animsFinished.includes(id)) return

        this.animsFinished.push(id)

        if (this.parts.every(part => this.animsFinished.includes(part.id))) {
            this.animsFinished = []

            switch (this.emotion) {
                case 'blink':
                    this.playEmotion('look_left')
                    break
                case 'look_left':
                    this.playEmotion('look_right')
                    break
                case 'look_right':
                    this.playEmotion('waiting')
                    break
                case 'waiting':
                    this.playEmotion('blink')
                    break
                case 'thinking':
                    this.playEmotion('thinking_loop')
                    break
                default:
                    break
            }
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */