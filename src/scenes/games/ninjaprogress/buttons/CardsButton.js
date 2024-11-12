/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CardsButton extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.cardsNum;
        /** @type {any} */
        this.callback = () => {};


        // cardsButton
        const cardsButton = scene.add.image(0, 0, "ninjaprogress", "button");
        cardsButton.setOrigin(0.5, 0.5060240963855421);
        this.add(cardsButton);

        // cards
        const cards = scene.add.image(68, -9, "ninjaprogress", "cards");
        this.add(cards);

        // cardsNum
        const cardsNum = scene.add.text(64, -6, "", {});
        cardsNum.setOrigin(0.5, 0.5);
        cardsNum.text = "0";
        cardsNum.setStyle({ "align": "center", "fixedWidth":100,"fontFamily": "Burbank Big Regular", "fontSize": "48px", "fontStyle": "bold", "stroke": "#000", "strokeThickness":8,"shadow.blur":2,"shadow.stroke":true,"shadow.fill":true});
        this.add(cardsNum);

        // cardsText
        const cardsText = scene.add.text(-81, 0, "", {});
        cardsText.setOrigin(0.5, 0.5);
        cardsText.text = "VIEW YOUR\nCARDS";
        cardsText.setStyle({ "align": "center", "color": "#736357", "fixedWidth":140,"fontFamily": "CCFaceFront", "fontSize": "20px", "fontStyle": "bold italic" });
        this.add(cardsText);

        // cardsButton (components)
        const cardsButtonButton = new Button(cardsButton);
        cardsButtonButton.spriteName = "button";
        cardsButtonButton.callback = () => this.callback();

        this.cardsNum = cardsNum;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setCardsNum(num) {
        this.cardsNum.text = num
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */