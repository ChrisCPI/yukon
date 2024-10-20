/* START OF COMPILED CODE */

import BasePortrait from "./BasePortrait";
import Avatar from "./avatar/Avatar";
import Energy from "./energy/Energy";
import PortraitClock from "./clock/PortraitClock";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ClientPortrait extends BasePortrait {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.bg;
        /** @type {Phaser.GameObjects.Image} */
        this.side;
        /** @type {Phaser.GameObjects.Image} */
        this.bottom;
        /** @type {Avatar} */
        this.avatar;
        /** @type {Energy} */
        this.energy;
        /** @type {Phaser.GameObjects.Image} */
        this.top;
        /** @type {Phaser.GameObjects.Text} */
        this.nickname;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.maskRect;
        /** @type {PortraitClock} */
        this.clock;
        /** @type {Phaser.GameObjects.Text} */
        this.statusText;
        /** @type {Phaser.GameObjects.Text} */
        this.subText;


        // bg
        const bg = scene.add.image(8, -5, "fire", "portraits/0/bg");
        this.add(bg);

        // side
        const side = scene.add.image(-107, -36, "fire", "portraits/0/side");
        this.add(side);

        // bottom
        const bottom = scene.add.image(-5, 11, "fire", "portraits/0/bottom");
        this.add(bottom);

        // avatar
        const avatar = new Avatar(scene, 13, 42);
        avatar.scaleX = 0.73;
        avatar.scaleY = 0.73;
        this.add(avatar);

        // energy
        const energy = new Energy(scene, -105, 72);
        this.add(energy);

        // top
        const top = scene.add.image(-6, -136, "fire", "portraits/0/top");
        this.add(top);

        // nickname
        const nickname = scene.add.text(-6, 134, "", {});
        nickname.setOrigin(0.5, 0.5);
        nickname.text = "<nickname>";
        nickname.setStyle({ "align": "center", "color": "#000", "fixedWidth":300,"fixedHeight":40,"fontFamily": "CCFaceFront", "fontSize": "30px", "fontStyle": "bold italic", "strokeThickness":7});
        this.add(nickname);

        // maskRect
        const maskRect = scene.add.rectangle(-94, -111, 260, 220);
        maskRect.setOrigin(0, 0);
        maskRect.visible = false;
        maskRect.isFilled = true;
        this.add(maskRect);

        // clock
        const clock = new PortraitClock(scene, 137, -51);
        clock.scaleX = 0.8;
        clock.scaleY = 0.8;
        clock.visible = false;
        this.add(clock);

        // statusText
        const statusText = scene.add.text(5, -83, "", {});
        statusText.setOrigin(0.5, 0.5);
        statusText.visible = false;
        statusText.text = "4   ";
        statusText.setStyle({ "align": "center", "fixedWidth":100,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "48px", "fontStyle": "bold", "stroke": "#000" });
        this.add(statusText);

        // subText
        const subText = scene.add.text(22, -85, "", {});
        subText.setOrigin(0.5, 0.5);
        subText.visible = false;
        subText.text = "th";
        subText.setStyle({ "fixedWidth":50,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold", "stroke": "#000" });
        subText.setPadding({"left":5});
        this.add(subText);

        this.bg = bg;
        this.side = side;
        this.bottom = bottom;
        this.avatar = avatar;
        this.energy = energy;
        this.top = top;
        this.nickname = nickname;
        this.maskRect = maskRect;
        this.clock = clock;
        this.statusText = statusText;
        this.subText = subText;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
