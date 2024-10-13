/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */

import layout from '../../layout'

/* END-USER-IMPORTS */

export default class Energy extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Sprite} */
        this.fire;
        /** @type {Phaser.GameObjects.Image} */
        this.fill;
        /** @type {Phaser.GameObjects.Text} */
        this.text;


        // fire
        const fire = scene.add.sprite(0, -74, "fire", "portraits/energy/fire0002");
        fire.scaleX = 0.4;
        fire.scaleY = 0.4;
        this.add(fire);

        // fill
        const fill = scene.add.image(0, 0, "fire", "portraits/energy/fill");
        this.add(fill);

        // picture
        const picture = scene.add.image(0, 0, "fire", "portraits/energy/picture");
        this.add(picture);

        // outline
        const outline = scene.add.image(0, 0, "fire", "portraits/energy/outline");
        this.add(outline);

        // text
        const text = scene.add.text(0, 1, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "10";
        text.setStyle({ "align": "center", "color": "#000", "fixedWidth":70,"fixedHeight":45,"fontFamily": "CCFaceFront", "fontSize": "37px", "fontStyle": "bold italic", "strokeThickness":7});
        this.add(text);

        this.fire = fire;
        this.fill = fill;
        this.text = text;

        /* START-USER-CTR-CODE */

        this.energy = 0

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setEnergy(energy) {
        if (energy > this.energy) {
            // play gain energy
        } else if (energy < this.energy) {
            // play lose energy
        }

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