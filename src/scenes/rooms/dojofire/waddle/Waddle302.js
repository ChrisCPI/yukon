/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Button from "../../../components/Button";
import ShowHint from "../../../components/ShowHint";
import SeatPoint from "../../../shared_prefabs/seat/SeatPoint";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Waddle302 extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {SeatPoint} */
        this.done2;
        /** @type {SeatPoint} */
        this.done1;
        /** @type {SeatPoint} */
        this.done0;
        /** @type {SeatPoint} */
        this.seat2;
        /** @type {SeatPoint} */
        this.seat1;
        /** @type {SeatPoint} */
        this.seat0;
        /** @type {number} */
        this.moveToX = 0;
        /** @type {number} */
        this.moveToY = 0;


        // mat
        const mat = scene.add.image(0, 0, "dojofire", "mat/mat_2");
        this.add(mat);

        // done2
        const done2 = new SeatPoint(scene, 214.8, -26.1);
        done2.visible = false;
        this.add(done2);

        // done1
        const done1 = new SeatPoint(scene, 98.6, -66.4);
        done1.visible = false;
        this.add(done1);

        // done0
        const done0 = new SeatPoint(scene, -101.9, -95.5);
        done0.visible = false;
        this.add(done0);

        // seat2
        const seat2 = new SeatPoint(scene, 82.9, 22.6);
        seat2.visible = false;
        this.add(seat2);

        // seat1
        const seat1 = new SeatPoint(scene, 1.6, -3.7);
        seat1.visible = false;
        this.add(seat1);

        // seat0
        const seat0 = new SeatPoint(scene, -60.8, -34.7);
        seat0.visible = false;
        this.add(seat0);

        // mat (components)
        const matButton = new Button(mat);
        matButton.spriteName = "mat/mat_2";
        matButton.activeFrame = false;
        matButton.pixelPerfect = true;
        const matShowHint = new ShowHint(mat);
        matShowHint.text = "fire_hint";

        // seat2 (prefab fields)
        seat2.sitFrame = 1;
        seat2.donePoint = done2;

        // seat1 (prefab fields)
        seat1.sitFrame = 4;
        seat1.donePoint = done1;

        // seat0 (prefab fields)
        seat0.sitFrame = 8;
        seat0.donePoint = done0;

        this.done2 = done2;
        this.done1 = done1;
        this.done0 = done0;
        this.seat2 = seat2;
        this.seat1 = seat1;
        this.seat0 = seat0;

        /* START-USER-CTR-CODE */

        mat.on('pointerup', (pointer) => {
            if (pointer.button !== 0) {
                return
            }

            this.world.client.sendMove(this.moveToX, this.moveToY)
        })

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */