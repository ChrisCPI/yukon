/* START OF COMPILED CODE */

import BasePortrait from "./BasePortrait";
import Avatar from "./avatar/Avatar";
import Energy from "./energy/Energy";
import PortraitClock from "./clock/PortraitClock";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Portrait extends BasePortrait {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.highlight;
        /** @type {Phaser.GameObjects.Image} */
        this.bg;
        /** @type {Phaser.GameObjects.Image} */
        this.side;
        /** @type {Phaser.GameObjects.Image} */
        this.bottom;
        /** @type {Phaser.GameObjects.Image} */
        this.top;
        /** @type {Avatar} */
        this.avatar;
        /** @type {Energy} */
        this.energy;
        /** @type {Phaser.GameObjects.Image} */
        this.arrow;
        /** @type {Phaser.GameObjects.Text} */
        this.nickname;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.maskRect;
        /** @type {PortraitClock} */
        this.clock;
        /** @type {number} */
        this.seat = 0;


        // highlight
        const highlight = scene.add.image(7, 6, "fire", "portraits/common/highlight");
        highlight.visible = false;
        this.add(highlight);

        // bg
        const bg = scene.add.image(0, 0, "fire", "portraits/common/bg");
        this.add(bg);

        // side
        const side = scene.add.image(84, -3, "fire", "portraits/1/side");
        this.add(side);

        // bottom
        const bottom = scene.add.image(6, 17, "fire", "portraits/1/bottom");
        this.add(bottom);

        // top
        const top = scene.add.image(7, -103, "fire", "portraits/1/top");
        this.add(top);

        // avatar
        const avatar = new Avatar(scene, -9, 35);
        avatar.scaleX = -0.59;
        avatar.scaleY = 0.59;
        this.add(avatar);

        // energy
        const energy = new Energy(scene, 84, 65);
        energy.scaleX = 0.78;
        energy.scaleY = 0.78;
        this.add(energy);

        // arrow
        const arrow = scene.add.image(-150, 113, "fire", "portraits/common/arrow");
        this.add(arrow);

        // nickname
        const nickname = scene.add.text(4, 118, "", {});
        nickname.setOrigin(0.5, 0.5);
        nickname.text = "<nickname>";
        nickname.setStyle({ "align": "center", "color": "#000", "fixedWidth":200,"fixedHeight":40,"fontFamily": "CCFaceFront", "fontSize": "22px", "fontStyle": "bold italic", "strokeThickness":7});
        this.add(nickname);

        // maskRect
        const maskRect = scene.add.rectangle(-137, -130, 220, 220);
        maskRect.setOrigin(0, 0);
        maskRect.visible = false;
        maskRect.isFilled = true;
        maskRect.fillColor = 65280;
        maskRect.fillAlpha = 0.5;
        this.add(maskRect);

        // clock
        const clock = new PortraitClock(scene, -83, -65);
        clock.scaleX = 0.6;
        clock.scaleY = 0.6;
        this.add(clock);

        this.highlight = highlight;
        this.bg = bg;
        this.side = side;
        this.bottom = bottom;
        this.top = top;
        this.avatar = avatar;
        this.energy = energy;
        this.arrow = arrow;
        this.nickname = nickname;
        this.maskRect = maskRect;
        this.clock = clock;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */