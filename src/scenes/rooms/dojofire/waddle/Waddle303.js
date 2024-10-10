/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Button from "../../../components/Button";
import ShowHint from "../../../components/ShowHint";
import SeatPoint from "../../../shared_prefabs/seat/SeatPoint";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Waddle303 extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {SeatPoint} */
        this.done3;
        /** @type {SeatPoint} */
        this.done2;
        /** @type {SeatPoint} */
        this.done1;
        /** @type {SeatPoint} */
        this.done0;
        /** @type {SeatPoint} */
        this.seat3;
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
        const mat = scene.add.image(0, 0, "dojofire", "mat/mat_3");
        this.add(mat);

        // done3
        const done3 = new SeatPoint(scene, 158.6, -69.4);
        done3.visible = false;
        this.add(done3);

        // done2
        const done2 = new SeatPoint(scene, -212.7, 32.4);
        done2.visible = false;
        this.add(done2);

        // done1
        const done1 = new SeatPoint(scene, -24.9, -93.8);
        done1.visible = false;
        this.add(done1);

        // done0
        const done0 = new SeatPoint(scene, -149.3, -48.4);
        done0.visible = false;
        this.add(done0);

        // seat3
        const seat3 = new SeatPoint(scene, 85.7, -9.3);
        seat3.visible = false;
        this.add(seat3);

        // seat2
        const seat2 = new SeatPoint(scene, -27.5, 33.9);
        seat2.visible = false;
        this.add(seat2);

        // seat1
        const seat1 = new SeatPoint(scene, 19.7, -45.6);
        seat1.visible = false;
        this.add(seat1);

        // seat0
        const seat0 = new SeatPoint(scene, -87.8, -9.2);
        seat0.visible = false;
        this.add(seat0);

        // mat (components)
        const matButton = new Button(mat);
        matButton.spriteName = "mat/mat_3";
        matButton.activeFrame = false;
        matButton.pixelPerfect = true;
        const matShowHint = new ShowHint(mat);
        matShowHint.text = "fire_hint";

        // seat3 (prefab fields)
        seat3.sitFrame = 6;
        seat3.donePoint = done3;

        // seat2 (prefab fields)
        seat2.sitFrame = 6;
        seat2.donePoint = done2;

        // seat1 (prefab fields)
        seat1.sitFrame = 2;
        seat1.donePoint = done1;

        // seat0 (prefab fields)
        seat0.sitFrame = 6;
        seat0.donePoint = done0;

        this.done3 = done3;
        this.done2 = done2;
        this.done1 = done1;
        this.done0 = done0;
        this.seat3 = seat3;
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