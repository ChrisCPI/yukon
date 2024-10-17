/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
/* START-USER-IMPORTS */

import Space from './Space'

/* END-USER-IMPORTS */

export default class Board extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Sprite} */
        this.space0;
        /** @type {Phaser.GameObjects.Sprite} */
        this.space1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.space2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.space3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.space4;
        /** @type {Phaser.GameObjects.Sprite} */
        this.space5;
        /** @type {Phaser.GameObjects.Sprite} */
        this.space6;
        /** @type {Phaser.GameObjects.Sprite} */
        this.space7;
        /** @type {Phaser.GameObjects.Sprite} */
        this.space8;
        /** @type {Phaser.GameObjects.Sprite} */
        this.space9;
        /** @type {Phaser.GameObjects.Sprite} */
        this.space10;
        /** @type {Phaser.GameObjects.Sprite} */
        this.space11;
        /** @type {Phaser.GameObjects.Sprite} */
        this.space12;
        /** @type {Phaser.GameObjects.Sprite} */
        this.space13;
        /** @type {Phaser.GameObjects.Sprite} */
        this.space14;
        /** @type {Phaser.GameObjects.Sprite} */
        this.space15;


        // space0
        const space0 = scene.add.sprite(-17, 308, "fire", "board/space00001");
        this.add(space0);

        // space1
        const space1 = scene.add.sprite(202, 278, "fire", "board/space10001");
        this.add(space1);

        // space2
        const space2 = scene.add.sprite(356, 225, "fire", "board/space20001");
        this.add(space2);

        // space3
        const space3 = scene.add.sprite(433, 136, "fire", "board/space30001");
        this.add(space3);

        // space4
        const space4 = scene.add.sprite(461, 5, "fire", "board/space40001");
        this.add(space4);

        // space5
        const space5 = scene.add.sprite(434, -123, "fire", "board/space50001");
        this.add(space5);

        // space6
        const space6 = scene.add.sprite(314, -186, "fire", "board/space60001");
        this.add(space6);

        // space7
        const space7 = scene.add.sprite(192, -244, "fire", "board/space70001");
        this.add(space7);

        // space8
        const space8 = scene.add.sprite(1, -264, "fire", "board/space80001");
        this.add(space8);

        // space9
        const space9 = scene.add.sprite(-192, -249, "fire", "board/space90001");
        this.add(space9);

        // space10
        const space10 = scene.add.sprite(-323, -189, "fire", "board/space100001");
        this.add(space10);

        // space11
        const space11 = scene.add.sprite(-443, -126, "fire", "board/space110001");
        this.add(space11);

        // space12
        const space12 = scene.add.sprite(-469, -1, "fire", "board/space120001");
        this.add(space12);

        // space13
        const space13 = scene.add.sprite(-441, 130, "fire", "board/space130001");
        this.add(space13);

        // space14
        const space14 = scene.add.sprite(-368, 220, "fire", "board/space140001");
        this.add(space14);

        // space15
        const space15 = scene.add.sprite(-240, 293, "fire", "board/space150001");
        this.add(space15);

        // lists
        const spaces = [space0, space1, space2, space3, space4, space5, space6, space7, space8, space9, space10, space11, space12, space13, space14, space15];

        this.space0 = space0;
        this.space1 = space1;
        this.space2 = space2;
        this.space3 = space3;
        this.space4 = space4;
        this.space5 = space5;
        this.space6 = space6;
        this.space7 = space7;
        this.space8 = space8;
        this.space9 = space9;
        this.space10 = space10;
        this.space11 = space11;
        this.space12 = space12;
        this.space13 = space13;
        this.space14 = space14;
        this.space15 = space15;

        /* START-USER-CTR-CODE */

        this.spaces = []

        this.activeSpaces = []

        for (let [id, sprite] of spaces.entries()) {
            const space = new Space(sprite, id)
            this.spaces.push(space)
        }

        this.spaceChosen = false

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    highlightSpaces() {
        for (let id of this.activeSpaces) {
            const space = this.spaces[id]
            space.show(this.scene.currentNinja.clientSeat)
        }
    }

    onSpaceClick(spaceId, send = true) {
        if (this.spaceChosen) {
            return
        }

        if (!this.activeSpaces.includes(spaceId)) {
            return
        }

        this.spaceChosen = true

        for (let id of this.activeSpaces) {
            const space = this.spaces[id]
            space.disableInteractive()

            if (id === spaceId) {
                space.playRemote()
            } else {
                space.reset()
            }
        }

        if (send) {
            this.network.send('board_select', { spaceId: spaceId })
        }
    }

    resetSpaces() {
        this.spaceChosen = false
        for (let id of this.activeSpaces) {
            const space = this.spaces[id]
            space.reset()
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */