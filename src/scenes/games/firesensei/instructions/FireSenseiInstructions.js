/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import FireSenseiAwake from "./awake/FireSenseiAwake";
import FireSenseiGrasshoppers from "./grasshoppers/FireSenseiGrasshoppers";
import FireSenseiOnlyNinjas from "./onlyNinjas/FireSenseiOnlyNinjas";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FireSenseiInstructions extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 1041, y ?? 605);

        /** @type {Phaser.GameObjects.Image} */
        this.maskImage;
        /** @type {FireSenseiAwake} */
        this.awake;
        /** @type {FireSenseiGrasshoppers} */
        this.grasshoppers;
        /** @type {FireSenseiOnlyNinjas} */
        this.onlyNinjas;
        /** @type {Array<FireSenseiAwake|FireSenseiGrasshoppers|FireSenseiOnlyNinjas>} */
        this.masked;


        // bg
        const bg = scene.add.image(0, 23, "firesenseiinstructions", "bg");
        this.add(bg);

        // maskImage
        const maskImage = scene.add.image(-2, 23, "firesenseiinstructions", "mask");
        maskImage.visible = false;
        this.add(maskImage);

        // awake
        const awake = new FireSenseiAwake(scene, 0, 0);
        awake.visible = false;
        this.add(awake);

        // grasshoppers
        const grasshoppers = new FireSenseiGrasshoppers(scene, 0, 0);
        grasshoppers.visible = false;
        this.add(grasshoppers);

        // onlyNinjas
        const onlyNinjas = new FireSenseiOnlyNinjas(scene, 0, 0);
        onlyNinjas.visible = false;
        this.add(onlyNinjas);

        // sides
        const sides = scene.add.image(3, 1, "firesenseiinstructions", "sides");
        this.add(sides);

        // ref2
        const ref2 = scene.add.image(3, 1, "firesenseiinstructions", "ref1");
        ref2.visible = false;
        this.add(ref2);

        // lists
        const masked = [awake, grasshoppers, onlyNinjas];

        this.maskImage = maskImage;
        this.awake = awake;
        this.grasshoppers = grasshoppers;
        this.onlyNinjas = onlyNinjas;
        this.masked = masked;

        /* START-USER-CTR-CODE */

        this.children = [this.awake]

        const mask = this.maskImage.createBitmapMask()

        const matrix = this.maskImage.getWorldTransformMatrix()

        this.maskImage.setPosition(matrix.getX(0, 0), matrix.getY(0, 0))

        for (let sprite of this.masked) {
            sprite.mask = mask
        }

        this.close()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    showAwake() {
        this.show()
        this.hideAll()

        this.awake.show()
    }

    showGrasshoppers() {
        this.show()
        this.hideAll()

        this.grasshoppers.show()
    }

    showOnlyNinjas() {
        this.show()
        this.hideAll()

        this.onlyNinjas.show()
    }

    showPick() {
        this.showAndPlaySprite(this.pick, 'instructions/pick')
    }

    showHelp() {
        this.showAndPlaySprite(this.help, 'instructions/help_start')

        this.help.once('animationcomplete-instructions/help_start', () => {
            this.help.play('instructions/help_loop')
        })
    }

    showCompete() {
        this.hideAll()

        this.bubble.showCompete()
    }

    showBelt() {
        this.hideAll()

        this.belt.show()
    }

    showBlackBelt() {
        this.hideAll()

        this.bubble.showBlackBelt()
    }

    showNinja() {
        this.showAndPlaySprite(this.ninja, 'instructions/ninja')
    }

    showAndPlaySprite(sprite, animKey) {
        this.hideAll()

        sprite.visible = true
        sprite.play(animKey)
    }

    hideAll() {
        this.masked.forEach(child => {
            child.stop()
            child.visible = false
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */