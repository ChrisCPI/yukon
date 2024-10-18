/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import Interactive from "../../../../components/Interactive";
import Button from "../../../../components/Button";
/* START-USER-IMPORTS */

import layout from '../../layout'

/* END-USER-IMPORTS */

export default class GameOverPopup extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.scroll;
        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {Phaser.GameObjects.Text} */
        this.title;
        /** @type {Phaser.GameObjects.Container} */
        this.buttonContainer;
        /** @type {Phaser.GameObjects.Container} */
        this.content;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.maskRect;
        /** @type {Phaser.GameObjects.Image} */
        this.side2;
        /** @type {Phaser.GameObjects.Image} */
        this.side1;
        /** @type {Phaser.GameObjects.Image} */
        this.star;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.alpha = 0.4;
        block.isFilled = true;
        block.fillColor = 0;
        this.add(block);

        // content
        const content = scene.add.container(30, 0);
        this.add(content);

        // scroll
        const scroll = scene.add.image(0, 0, "fire", "popups/gameover/scroll4");
        content.add(scroll);

        // text
        const text = scene.add.text(-35, 25, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "Your skills are growing...\nYou nearly won, but this time,\nyou earned second place.";
        text.setStyle({ "align": "center", "color": "#000", "fixedWidth":450,"fixedHeight":150,"fontFamily": "Candombe", "fontSize": "52px" });
        content.add(text);

        // title
        const title = scene.add.text(39, -218, "", {});
        title.setOrigin(0.5, 0.5);
        title.text = "There is much practicing ahead";
        title.setStyle({ "align": "center", "color": "#41311D", "fixedWidth":800,"fixedHeight":100,"fontFamily": "Candombe", "fontSize": "88px" });
        content.add(title);

        // buttonContainer
        const buttonContainer = scene.add.container(-38, 143);
        content.add(buttonContainer);

        // button
        const button = scene.add.image(0, 0, "fire", "popups/quit/button");
        buttonContainer.add(button);

        // button_text
        const button_text = scene.add.text(0, 0, "", {});
        button_text.setOrigin(0.5, 0.5);
        button_text.text = "OK";
        button_text.setStyle({ "align": "center", "color": "#644e30", "fontFamily": "CCComiccrazy", "fontSize": "25px" });
        buttonContainer.add(button_text);

        // maskRect
        const maskRect = scene.add.rectangle(6, -9, 1200, 650);
        maskRect.visible = false;
        maskRect.isFilled = true;
        this.add(maskRect);

        // side2
        const side2 = scene.add.image(590, -34, "fire", "popups/gameover/scroll_side");
        this.add(side2);

        // side1
        const side1 = scene.add.image(-575, -35, "fire", "popups/gameover/scroll_side");
        this.add(side1);

        // star
        const star = scene.add.image(-476, -266, "fire", "popups/gameover/star");
        star.visible = false;
        this.add(star);

        // block (components)
        new Interactive(block);

        // button (components)
        const buttonButton = new Button(button);
        buttonButton.spriteName = "popups/quit/button";
        buttonButton.callback = () => this.onClick();
        buttonButton.pixelPerfect = true;

        this.scroll = scroll;
        this.text = text;
        this.title = title;
        this.buttonContainer = buttonContainer;
        this.content = content;
        this.maskRect = maskRect;
        this.side2 = side2;
        this.side1 = side1;
        this.star = star;

        /* START-USER-CTR-CODE */

        this.finish = 0

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setFinish(finish) {
        this.finish = finish
    }

    show() {
        super.show()
        
        const matrix = this.maskRect.getWorldTransformMatrix()

        this.maskRect.x = matrix.getX(0,0)
        this.maskRect.y = matrix.getY(0,0)

        this.content.mask = this.maskRect.createGeometryMask()

        this.scroll.setFrame(`popups/gameover/scroll${this.finish}`)

        this.title.text = this.getString(`fire_gameover_title${this.finish}`)
        this.text.text = this.getString(`fire_gameover_message${this.finish}`)

        const posData = layout.pos.gameOver

        const staticPos = posData.finish[this.finish - 1]
        this.title.setPosition(staticPos.title.x, staticPos.title.y)
        this.text.setPosition(staticPos.message.x, staticPos.message.y)
        this.buttonContainer.setPosition(staticPos.button.x, staticPos.button.y)

        // this can probably be optimized somehow

        this.scene.tweens.chain({
            targets: this.side1,
            ease: 'Cubic.easeIn',
            tweens: [
                {
                    duration: 750,
                    x: {
                        from: posData.side1.start,
                        to: posData.side1.end - 20
                    }
                },
                {
                    duration: 83,
                    x: posData.side1.end
                }
            ]
        })

        this.scene.tweens.chain({
            targets: this.side2,
            ease: 'Cubic.easeIn',
            tweens: [
                {
                    duration: 750,
                    x: {
                        from: posData.side2.start,
                        to: posData.side2.end + 20
                    }
                },
                {
                    duration: 83,
                    x: posData.side2.end
                }
            ]
        })

        this.scene.tweens.chain({
            targets: this.maskRect,
            ease: 'Cubic.easeIn',
            tweens: [
                {
                    duration: 750,
                    scaleX: { from: 0.05, to: 1 }
                }
            ],
            onComplete: () => this.playStar()
        })
    }

    playStar() {
        this.scene.tweens.chain({
            targets: this.star,
            ease: 'Linear',
            tweens: [
                {
                    duration: 85,
                },
                {
                    duration: 208,
                    scale: { from: 0.25, to: 1.3 },
                    onStart: () => this.star.visible = true
                },
                {
                    delay: 85,
                    duration: 83,
                    scale: { from: 1.3, to: 1 },
                    onComplete: () => {}
                }
            ]
        })
    }

    onClick() {
        this.scene.leaveGame()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */