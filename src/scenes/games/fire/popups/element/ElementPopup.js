/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import Button from "../../../../components/Button";
import Animation from "../../../../components/Animation";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ElementPopup extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Sprite} */
        this.shine;


        // bg
        const bg = scene.add.image(0, 0, "fire", "popups/element/bg");
        this.add(bg);

        // text
        const text = scene.add.text(-1, -107, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "Choose an element";
        text.setStyle({ "align": "center", "color": "#41311D", "fixedWidth":450,"fixedHeight":50,"fontFamily": "Candombe", "fontSize": "70px" });
        this.add(text);

        // fire
        const fire = scene.add.image(-173, 29, "fire", "popups/element/fire");
        this.add(fire);

        // water
        const water = scene.add.image(7, 29, "fire", "popups/element/water");
        this.add(water);

        // snow
        const snow = scene.add.image(186, 29, "fire", "popups/element/snow");
        this.add(snow);

        // shine
        const shine = scene.add.sprite(-173, 30, "fire", "popups/element/shine0001");
        shine.visible = false;
        this.add(shine);

        // fire (components)
        const fireButton = new Button(fire);
        fireButton.spriteName = "popups/element/fire";
        fireButton.hoverCallback = () => this.onFireHover();
        fireButton.hoverOutCallback = () => this.onOut();
        fireButton.callback = () => this.onElementClick('f');
        fireButton.activeFrame = false;

        // water (components)
        const waterButton = new Button(water);
        waterButton.spriteName = "popups/element/water";
        waterButton.hoverCallback = () => this.onWaterHover();
        waterButton.hoverOutCallback = () => this.onOut();
        waterButton.callback = () => this.onElementClick('w');
        waterButton.activeFrame = false;

        // snow (components)
        const snowButton = new Button(snow);
        snowButton.spriteName = "popups/element/snow";
        snowButton.hoverCallback = () => this.onSnowHover();
        snowButton.hoverOutCallback = () => this.onOut;
        snowButton.callback = () => this.onElementClick('s');
        snowButton.activeFrame = false;

        // shine (components)
        const shineAnimation = new Animation(shine);
        shineAnimation.key = "popups/element/shine";
        shineAnimation.end = 50;
        shineAnimation.autoPlay = false;
        shineAnimation.showOnStart = true;
        shineAnimation.hideOnComplete = true;

        this.shine = shine;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onFireHover() {
        this.playShine(-173)
    }

    onWaterHover() {
        this.playShine(8)
    }

    onSnowHover() {
        this.playShine(186)
    }

    playShine(x) {
        this.shine.x = x
        this.shine.__Animation.play()
    }

    onOut() {
        this.shine.__Animation.stop()
    }

    onElementClick(element) {
        // Todo
        this.close()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */