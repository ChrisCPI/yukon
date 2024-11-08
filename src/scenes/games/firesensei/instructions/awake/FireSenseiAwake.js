/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FireSenseiAwake extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.mountains;
        /** @type {Phaser.GameObjects.Image} */
        this.volcano;
        /** @type {Phaser.GameObjects.Image} */
        this.cloud1;
        /** @type {Phaser.GameObjects.Image} */
        this.cloud2;
        /** @type {Phaser.GameObjects.Image} */
        this.cloud3;


        // clouds
        const clouds = scene.add.image(-1, -186, "firesenseiinstructions", "awake/clouds");
        this.add(clouds);

        // mountains
        const mountains = scene.add.image(1, 94, "firesenseiinstructions", "awake/mountains");
        mountains.scaleX = 0.95;
        mountains.scaleY = 0.95;
        this.add(mountains);

        // volcano
        const volcano = scene.add.image(-2, 25, "firesenseiinstructions", "awake/volcano");
        volcano.scaleX = 0.88;
        volcano.scaleY = 0.88;
        volcano.setOrigin(0.5, 0.3);
        this.add(volcano);

        // cloud1
        const cloud1 = scene.add.image(118, -71, "firesenseiinstructions", "awake/cloud1");
        this.add(cloud1);

        // cloud2
        const cloud2 = scene.add.image(-195, -77, "firesenseiinstructions", "awake/cloud2");
        this.add(cloud2);

        // cloud3
        const cloud3 = scene.add.image(-72, 73, "firesenseiinstructions", "awake/cloud3");
        this.add(cloud3);

        this.mountains = mountains;
        this.volcano = volcano;
        this.cloud1 = cloud1;
        this.cloud2 = cloud2;
        this.cloud3 = cloud3;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        super.show()
        
        this.cloud1.visible = true
        this.cloud2.visible = true
        this.cloud3.visible = true
        this.volcano.scale = 0.88
        this.mountains.scale = 0.95

        // Cloud 1
        this.cloud1.tween = this.scene.tweens.add({
            targets: this.cloud1,
            ease: 'Linear',
            duration: 2792,
            x: { from: 118, to: 489 },
            onComplete: () => this.cloud1.visible = false
        })

        // Cloud 2
        this.cloud2.tween = this.scene.tweens.add({
            targets: this.cloud2,
            ease: 'Linear',
            duration: 2375,
            x: { from: -195, to: -532 },
            onComplete: () => this.cloud2.visible = false
        })

        // Cloud 3
        this.cloud3.tween = this.scene.tweens.add({
            targets: this.cloud3,
            ease: 'Linear',
            duration: 2042,
            x: { from: -72, to: -593 },
            onComplete: () => this.cloud3.visible = false
        })

        // Volcano
        this.volcano.tween = this.scene.tweens.add({
            targets: this.volcano,
            ease: 'Linear',
            delay: 458,
            duration: 2458,
            scale: { from: 0.88, to: 1 }
        })

        // Mountains
        this.mountains.tween = this.scene.tweens.add({
            targets: this.mountains,
            ease: 'Linear',
            delay: 458,
            duration: 2458,
            scale: { from: 0.95, to: 1 }
        })
    }
    
    stop() {
        this.removeTweens()
    }

    removeTweens() {
        const sprites = [
            this.cloud1,
            this.cloud2,
            this.cloud3,
            this.volcano,
            this.mountains
        ]

        for (let sprite of sprites) {
            if (sprite.tween) {
                sprite.tween.stop()
                sprite.tween = null
            }
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
