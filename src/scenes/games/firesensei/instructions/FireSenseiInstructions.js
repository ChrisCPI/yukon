/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import FireSenseiAwake from "./awake/FireSenseiAwake";
import FireSenseiGrasshoppers from "./grasshoppers/FireSenseiGrasshoppers";
import FireSenseiOnlyNinjas from "./onlyNinjas/FireSenseiOnlyNinjas";
import FireSenseiKeyElements from "./keyElements/FireSenseiKeyElements";
import FireSenseiChange from "./change/FireSenseiChange";
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
        /** @type {FireSenseiKeyElements} */
        this.keyElements;
        /** @type {FireSenseiChange} */
        this.change;
        /** @type {Phaser.GameObjects.Sprite} */
        this.manyPlaces;
        /** @type {Phaser.GameObjects.Sprite} */
        this.items;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fireSuit;
        /** @type {Phaser.GameObjects.Sprite} */
        this.challenge;
        /** @type {Phaser.GameObjects.Sprite} */
        this.amulet;
        /** @type {Array<FireSenseiAwake|FireSenseiGrasshoppers|FireSenseiOnlyNinjas|FireSenseiKeyElements|FireSenseiChange|Phaser.GameObjects.Sprite>} */
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

        // keyElements
        const keyElements = new FireSenseiKeyElements(scene, 0, 0);
        keyElements.visible = false;
        this.add(keyElements);

        // change
        const change = new FireSenseiChange(scene, 0, 0);
        change.visible = false;
        this.add(change);

        // manyPlaces
        const manyPlaces = scene.add.sprite(-41, 30, "firesenseiinstructions", "manyPlaces/anim0001");
        manyPlaces.visible = false;
        this.add(manyPlaces);

        // items
        const items = scene.add.sprite(-3, 40, "firesenseiinstructions", "items/anim0001");
        items.visible = false;
        this.add(items);

        // fireSuit
        const fireSuit = scene.add.sprite(-15, -6, "firesenseiinstructions", "fireSuit");
        fireSuit.visible = false;
        this.add(fireSuit);

        // challenge
        const challenge = scene.add.sprite(-11, 51, "firesenseiinstructions", "challenge");
        challenge.visible = false;
        this.add(challenge);

        // amulet
        const amulet = scene.add.sprite(5, -9, "firesenseiinstructions", "amulet/anim0001");
        amulet.visible = false;
        this.add(amulet);

        // sides
        const sides = scene.add.image(3, 1, "firesenseiinstructions", "sides");
        this.add(sides);

        // lists
        const masked = [awake, grasshoppers, onlyNinjas, keyElements, change, manyPlaces, fireSuit, items, challenge, amulet];

        this.maskImage = maskImage;
        this.awake = awake;
        this.grasshoppers = grasshoppers;
        this.onlyNinjas = onlyNinjas;
        this.keyElements = keyElements;
        this.change = change;
        this.manyPlaces = manyPlaces;
        this.items = items;
        this.fireSuit = fireSuit;
        this.challenge = challenge;
        this.amulet = amulet;
        this.masked = masked;

        /* START-USER-CTR-CODE */

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

    showKeyElements() {
        this.show()
        this.hideAll()

        this.keyElements.show()
    }

    showChange() {
        this.show()
        this.hideAll()

        this.change.show()
    }

    showManyPlaces() {
        this.showAndPlaySprite(this.manyPlaces, 'instructions/manyPlaces')
    }

    showItems() {
        this.showAndPlaySprite(this.items, 'instructions/items')
    }

    showFireSuit() {
        this.show()
        this.hideAll()

        this.fireSuit.visible = true
    }

    showChallenge() {
        this.show()
        this.hideAll()

        this.challenge.visible = true
    }

    showAmulet() {
        this.showAndPlaySprite(this.amulet, 'instructions/amulet')
    }

    showAndPlaySprite(sprite, animKey) {
        this.hideAll()
        this.show()

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