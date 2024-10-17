const widthMultiplier = 2.4//4.8
const heightMultiplier = 8//16

/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */

import layout from '../../layout'

/* END-USER-IMPORTS */

export default class Energy extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Sprite} */
        this.flame;
        /** @type {Phaser.GameObjects.Image} */
        this.fill;
        /** @type {Phaser.GameObjects.Sprite} */
        this.gainEffect;
        /** @type {Phaser.GameObjects.Sprite} */
        this.loseEffect;
        /** @type {Phaser.GameObjects.Text} */
        this.text;


        // flame
        const flame = scene.add.sprite(0, -31, "fire", "portraits/energy/flame0001");
        flame.setOrigin(0.5, 0.8495735883837177);
        this.add(flame);

        // fill
        const fill = scene.add.image(0, 0, "fire", "portraits/energy/fill");
        this.add(fill);

        // picture
        const picture = scene.add.image(0, 0, "fire", "portraits/energy/picture");
        this.add(picture);

        // outline
        const outline = scene.add.image(0, 0, "fire", "portraits/energy/outline");
        this.add(outline);

        // gainEffect
        const gainEffect = scene.add.sprite(1, -87, "fire", "portraits/energy/fire0002");
        gainEffect.visible = false;
        this.add(gainEffect);

        // loseEffect
        const loseEffect = scene.add.sprite(0, -6, "fire", "portraits/energy/smoke0004");
        loseEffect.visible = false;
        this.add(loseEffect);

        // text
        const text = scene.add.text(1, 1, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "10";
        text.setStyle({ "align": "center", "color": "#000", "fixedWidth":70,"fixedHeight":45,"fontFamily": "CCFaceFront", "fontSize": "37px", "fontStyle": "bold italic", "strokeThickness":7});
        this.add(text);

        this.flame = flame;
        this.fill = fill;
        this.gainEffect = gainEffect;
        this.loseEffect = loseEffect;
        this.text = text;

        /* START-USER-CTR-CODE */

        this.energy = 0

        this.flame.play('fire/energy/flame')

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setEnergy(energy) {
        if (energy > this.energy) {
            this.gainEffect.play('fire/energy/gain')
        } else if (energy < this.energy) {
            this.loseEffect.play('fire/energy/lose')
        }

        if (energy === 0) {
            this.flame.play('fire/energy/extinguish')
        }

        //const width = 20 + (energy * widthMultiplier)
        //const height = 60 + (energy * heightMultiplier)
        const width = (20 + (energy * widthMultiplier)) * 2
        const height = (60 + (energy * heightMultiplier)) * 2
        this.flame.setDisplaySize(width, height)

        this.text.text = energy

        this.energy = energy
    }

    tintEnabled() {
        const seat = this.parentContainer.seat
        this.fill.tint = layout.colors.highlight.enabled[seat]
    }

    tintDisabled() {
        const seat = this.parentContainer.seat
        this.fill.tint = layout.colors.highlight.disabled[seat]
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */