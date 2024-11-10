/* START OF COMPILED CODE */

import FireSenseiMatchItem from "./FireSenseiMatchItem";
import FireSenseiMatchPenguin from "../penguin/FireSenseiMatchPenguin";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FireSenseiMatchItem4 extends FireSenseiMatchItem {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.maskImage;
        /** @type {FireSenseiMatchPenguin} */
        this.penguin;
        /** @type {Phaser.GameObjects.Text} */
        this.username;


        // bg
        const bg = scene.add.image(0, 8, "firesensei", "match/slot2/bg");
        this.add(bg);

        // maskImage
        const maskImage = scene.add.image(10, 0, "firesensei", "match/slot2/mask");
        maskImage.visible = false;
        this.add(maskImage);

        // penguin
        const penguin = new FireSenseiMatchPenguin(scene, 1, 10);
        this.add(penguin);

        // username
        const username = scene.add.text(2, 74, "", {});
        username.setOrigin(0.5, 0.5);
        username.text = "Username";
        username.setStyle({ "align": "center", "fixedWidth":250,"fontFamily": "CCComiccrazy", "fontSize": "30px", "stroke": "#000", "strokeThickness":8});
        this.add(username);

        this.maskImage = maskImage;
        this.penguin = penguin;
        this.username = username;

        /* START-USER-CTR-CODE */

        this.init()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */