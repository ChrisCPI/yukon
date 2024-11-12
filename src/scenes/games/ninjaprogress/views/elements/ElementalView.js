/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import CardsButton from "../../buttons/CardsButton";
import FireView from "./FireView";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ElementalView extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {CardsButton} */
        this.cardsButton;
        /** @type {Phaser.GameObjects.Image} */
        this.fireGem;
        /** @type {FireView} */
        this.fire;


        // cardsButton
        const cardsButton = new CardsButton(scene, 368, 181);
        this.add(cardsButton);

        // amulet
        const amulet = scene.add.image(373, -29, "ninjaprogress", "amulet/amulet");
        this.add(amulet);

        // fireGem
        const fireGem = scene.add.image(314, 29, "ninjaprogress", "amulet/fire");
        fireGem.visible = false;
        this.add(fireGem);

        // fire
        const fire = new FireView(scene, -202, 43);
        this.add(fire);

        // cardsButton (prefab fields)
        cardsButton.callback = () => this.onButtonClick();

        this.cardsButton = cardsButton;
        this.fireGem = fireGem;
        this.fire = fire;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(fireRank, fireProgress) {
        this.fireGem.visible = fireRank >= 5

        this.fire.show(fireRank, fireProgress)

        super.show()
    }

    onButtonClick() {
        this.parentContainer.separator.onClick()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */