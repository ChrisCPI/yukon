/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import FireSenseiMenuItem from "./FireSenseiMenuItem";
/* START-USER-IMPORTS */

import * as menus from '../config/FireSenseiMenus'

/* END-USER-IMPORTS */

export default class FireSenseiMenu extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {NinePatchContainer} */
        this.bg;
        /** @type {FireSenseiMenuItem[]} */
        this.items;


        // bg
        const bg = scene.add.ninePatchContainer(0, -196, 880, 394, "senseifire", "options/bg");
        bg.marginLeft = 75;
        bg.marginTop = 85;
        bg.marginRight = 70;
        bg.marginBottom = 85;
        bg.ninePatchContainerOriginY = 0;
        this.add(bg);

        // senseiFireMenuItem1
        const senseiFireMenuItem1 = new FireSenseiMenuItem(scene, 0, -89);
        this.add(senseiFireMenuItem1);

        // senseiFireMenuItem2
        const senseiFireMenuItem2 = new FireSenseiMenuItem(scene, 0, -30.58514404296875);
        this.add(senseiFireMenuItem2);

        // senseiFireMenuItem3
        const senseiFireMenuItem3 = new FireSenseiMenuItem(scene, 0, 30);
        this.add(senseiFireMenuItem3);

        // senseiFireMenuItem4
        const senseiFireMenuItem4 = new FireSenseiMenuItem(scene, 0, 92);
        this.add(senseiFireMenuItem4);

        // lists
        const items = [senseiFireMenuItem1, senseiFireMenuItem2, senseiFireMenuItem3, senseiFireMenuItem4];

        this.bg = bg;
        this.items = items;

        /* START-USER-CTR-CODE */

        this.currentMenu
        this.currentItems

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(menu) {
        this.reset()

        this.currentMenu = menu
        // Pass SenseiMenu dependency
        this.currentItems = this.currentMenu(this)

        this.updateMenu()

        super.show()
    }

    get isStartMenuActive() {
        return this.currentMenu === menus.start
    }

    get shouldStick() {
        return this.scene.widget.shouldSequenceStick
    }

    showStartMenu() {
        this.show(menus.start)
    }

    showPreviousMenu() {
        if (!this.currentMenu) {
            this.showStartMenu()
            return
        }

        // Use last menu stored in this.currentMenu
        this.show(this.currentMenu)
    }

    updateMenu() {
        for (let i = 0; i < this.currentItems.length; i++) {
            const config = this.currentItems[i]
            const item = this.items[i]

            item.show(config)
        }

        this.resizeMenu()
    }

    resizeMenu() {
        this.bg.resize(this.bg.width, (this.currentItems.length * 61) + 150)
    }

    startSequence(sequence, ...args) {
        this.scene.startSequence(sequence, ...args)
    }

    showSpeech(text) {
        this.scene.showSpeech(text)
    }

    hideSpeech() {
        this.scene.hideSpeech()
    }

    showMatch() {
        this.scene.showMatch()
    }

    reset() {
        for (const item of this.items) {
            item.close()
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */