/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import TabNumber from "./TabNumber";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Spinner extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Sprite} */
        this.main;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flipBottom;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flame;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flipTop;
        /** @type {Phaser.GameObjects.Sprite} */
        this.select1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.select2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.select3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.select4;
        /** @type {Phaser.GameObjects.Sprite} */
        this.select5;
        /** @type {Phaser.GameObjects.Sprite} */
        this.select6;
        /** @type {TabNumber} */
        this.tab1Number;
        /** @type {TabNumber} */
        this.tab2Number;
        /** @type {TabNumber} */
        this.tab3Number;
        /** @type {TabNumber} */
        this.tab4Number;
        /** @type {TabNumber} */
        this.tab5Number;
        /** @type {TabNumber} */
        this.tab6Number;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.selects;
        /** @type {TabNumber[]} */
        this.numbers;


        // main
        const main = scene.add.sprite(0, 0, "fire", "spinner/spinner0040");
        this.add(main);

        // flipBottom
        const flipBottom = scene.add.sprite(0, 0, "fire", "spinner/tabs/flips/bottom0001");
        flipBottom.visible = false;
        this.add(flipBottom);

        // flame
        const flame = scene.add.sprite(0, 0, "fire", "spinner/tabs/1/flame0001");
        flame.visible = false;
        this.add(flame);

        // flipTop
        const flipTop = scene.add.sprite(0, 0, "fire", "spinner/tabs/flips/top0001");
        flipTop.visible = false;
        this.add(flipTop);

        // select1
        const select1 = scene.add.sprite(0, 0, "fire", "spinner/tabs/1/select0001");
        select1.visible = false;
        this.add(select1);

        // select2
        const select2 = scene.add.sprite(0, 0, "fire", "spinner/tabs/2/select0001");
        select2.visible = false;
        this.add(select2);

        // select3
        const select3 = scene.add.sprite(0, 0, "fire", "spinner/tabs/3/select0001");
        select3.visible = false;
        this.add(select3);

        // select4
        const select4 = scene.add.sprite(0, 0, "fire", "spinner/tabs/4/select0001");
        select4.visible = false;
        this.add(select4);

        // select5
        const select5 = scene.add.sprite(0, 0, "fire", "spinner/tabs/5/select0001");
        select5.visible = false;
        this.add(select5);

        // select6
        const select6 = scene.add.sprite(0, 0, "fire", "spinner/tabs/6/select0001");
        select6.visible = false;
        this.add(select6);

        // tab1Number
        const tab1Number = new TabNumber(scene, -164, -29);
        tab1Number.scaleX = 0.76;
        tab1Number.scaleY = 0.96;
        tab1Number.angle = -80;
        tab1Number.visible = false;
        this.add(tab1Number);

        // tab2Number
        const tab2Number = new TabNumber(scene, -74, -109);
        tab2Number.scaleX = 0.62;
        tab2Number.scaleY = 0.66;
        tab2Number.angle = -40;
        tab2Number.visible = false;
        this.add(tab2Number);

        // tab3Number
        const tab3Number = new TabNumber(scene, 69, -110);
        tab3Number.scaleX = 0.62;
        tab3Number.scaleY = 0.66;
        tab3Number.angle = 40;
        tab3Number.visible = false;
        this.add(tab3Number);

        // tab4Number
        const tab4Number = new TabNumber(scene, 177, -32);
        tab4Number.scaleX = 0.76;
        tab4Number.scaleY = 0.96;
        tab4Number.angle = 80;
        tab4Number.visible = false;
        this.add(tab4Number);

        // tab5Number
        const tab5Number = new TabNumber(scene, 74, 75);
        tab5Number.scaleX = 0.95;
        tab5Number.scaleY = 0.88;
        tab5Number.angle = 150;
        tab5Number.visible = false;
        this.add(tab5Number);

        // tab6Number
        const tab6Number = new TabNumber(scene, -74, 78);
        tab6Number.scaleX = 0.95;
        tab6Number.scaleY = 0.88;
        tab6Number.angle = -150;
        tab6Number.visible = false;
        this.add(tab6Number);

        // lists
        const selects = [select1, select2, select3, select4, select5, select6];
        const numbers = [tab1Number, tab2Number, tab3Number, tab4Number, tab5Number, tab6Number];

        this.main = main;
        this.flipBottom = flipBottom;
        this.flame = flame;
        this.flipTop = flipTop;
        this.select1 = select1;
        this.select2 = select2;
        this.select3 = select3;
        this.select4 = select4;
        this.select5 = select5;
        this.select6 = select6;
        this.tab1Number = tab1Number;
        this.tab2Number = tab2Number;
        this.tab3Number = tab3Number;
        this.tab4Number = tab4Number;
        this.tab5Number = tab5Number;
        this.tab6Number = tab6Number;
        this.selects = selects;
        this.numbers = numbers;

        /* START-USER-CTR-CODE */

        this.main.visible = false

        this.currentMainAnim = null

        this.main.on('animationcomplete', () => this.onMainAnimComplete())

        for (let [tabId, tablet] of selects.entries()) {
            tablet.setInteractive({ cursor: 'pointer', pixelPerfect: true })

            tablet.on('pointerup', () => this.onTabClick(tabId + 1))
        }

        this.spinAmount = 0

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    playRise() {
        this.currentMainAnim = 'rise'
        this.main.visible = true
        this.main.play('fire/spinner/rise')
    }

    playSpin() {
        this.currentMainAnim = 'spin'
        this.main.play('fire/spinner/spin')
    }

    playSelect() {
        this.currentMainAnim = 'select'
        this.main.play('fire/spinner/select')

        for (let [tabId, tablet] of this.selects.entries()) {
            tablet.visible = true

            tablet.play(`fire/spinner/tab/${tabId + 1}/select`)

            tablet.once('animationcomplete', () => tablet.play(`fire/spinner/tab/${tabId + 1}/select_loop`))
        }
    }

    playFlip(tabId) {
        if (this.currentMainAnim === 'flip') return

        this.currentMainAnim = 'flip'
        this.main.play('fire/spinner/flip')

        const num = this.spinAmount

        for (let tablet of this.selects) {
            tablet.visible = false

            tablet.anims.stop()
        }

        this.flipTop.visible = true
        this.flipBottom.visible = true

        this.flipTop.play('fire/spinner/flip/top')
        this.flipBottom.play('fire/spinner/flip/bottom')

        this.scene.time.delayedCall(333.33, () => {
            if (this.currentMainAnim !== 'flip') return

            this.flame.visible = true
            this.flame.play(`fire/spinner/tab/${tabId}/flame`)

            let currentNum = num
            let currentTab = tabId
            for (let i = 1; i < 7; i++) {
                const text = this.numbers[currentTab - 1]
                text.show(currentNum, currentTab === tabId)

                currentNum++
                currentTab++

                if (currentNum > 6) currentNum = 1
                if (currentTab > 6) currentTab = 1
            }

            this.scene.board.highlightSpaces()
            this.scene.events.emit('tabs_flipped')
        })
    }

    playSink() {
        this.currentMainAnim = 'sink'
        this.main.play('fire/spinner/sink')

        this.flame.anims.stop()
        this.flame.visible = false

        this.flipTop.anims.stop()
        this.flipBottom.anims.stop()

        this.flipTop.visible = false
        this.flipBottom.visible = false

        for (let num of this.numbers) {
            num.visible = false
        }
    }

    onTabClick(tabId) {
        if (!this.scene.isMyTurn) return

        this.playFlip(tabId)
        this.network.send('spinner_select', { tabId: tabId })
    }

    onMainAnimComplete() {
        switch (this.currentMainAnim) {
            case 'rise':
                this.playSpin()
                break

            case 'spin':
                if (this.scene.isMyTurn) {
                    this.playSelect()
                }
                break

            case 'sink':
                this.main.visible = false
                break

            default:
                break
        }
    }

    close() {
        super.close()
        this.main.anims.stop()
        this.flame.anims.stop()
        this.flipTop.anims.stop()
        this.flipBottom.anims.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */