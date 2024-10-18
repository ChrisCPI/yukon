/* START OF COMPILED CODE */

import BasePortrait from "./BasePortrait";
import SimpleButton from "../../../components/SimpleButton";
import Avatar from "./avatar/Avatar";
import Energy from "./energy/Energy";
import FireArrow from "../misc/FireArrow";
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
        /** @type {Phaser.GameObjects.Text} */
        this.statusText;
        /** @type {Phaser.GameObjects.Text} */
        this.subText;
        /** @type {Energy} */
        this.energy;
        /** @type {FireArrow} */
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

        // statusText
        const statusText = scene.add.text(-6, -55, "", {});
        statusText.setOrigin(0.5, 0.5);
        statusText.visible = false;
        statusText.text = "4   ";
        statusText.setStyle({ "align": "center", "fixedWidth":100,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "43px", "fontStyle": "bold", "stroke": "#000" });
        this.add(statusText);

        // subText
        const subText = scene.add.text(11, -57, "", {});
        subText.setOrigin(0.5, 0.5);
        subText.visible = false;
        subText.text = "th";
        subText.setStyle({ "fixedWidth":50,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold", "stroke": "#000" });
        subText.setPadding({"left":5});
        this.add(subText);

        // energy
        const energy = new Energy(scene, 84, 65);
        energy.scaleX = 0.78;
        energy.scaleY = 0.78;
        this.add(energy);

        // arrow
        const arrow = new FireArrow(scene, -150, 113);
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
        clock.visible = false;
        this.add(clock);

        // highlight (components)
        const highlightSimpleButton = new SimpleButton(highlight);
        highlightSimpleButton.callback = () => this.onClick();

        this.highlight = highlight;
        this.bg = bg;
        this.side = side;
        this.bottom = bottom;
        this.top = top;
        this.avatar = avatar;
        this.statusText = statusText;
        this.subText = subText;
        this.energy = energy;
        this.arrow = arrow;
        this.nickname = nickname;
        this.maskRect = maskRect;
        this.clock = clock;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    enablePick() {
        this.highlight.visible = true
        this.arrow.show()
    }

    disablePick() {
        this.highlight.visible = false
        this.arrow.close()
    }

    onClick() {
        this.scene.chooseOpponent(this.seat)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */