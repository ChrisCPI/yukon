export const preload = {
    key: 'ninjacatalog-pack',
    url: 'assets/media/interface/catalogs/ninja/ninjacatalog-pack.json',
    loadString: ['loading', 'ninjacatalog']
}

/* START OF COMPILED CODE */

import BookContainer from "../../books/BookContainer";
import Interactive from "../../../components/Interactive";
import SimpleButton from "../../../components/SimpleButton";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class NinjaCatalog extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Sprite} */
        this.pageLeft;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pageRight;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.setOrigin(0, 0);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // page12
        const page12 = scene.add.container(0, 0);
        page12.visible = false;
        this.add(page12);

        // page0012
        const page0012 = scene.add.image(0, 0, "ninjacatalog", "page0012");
        page0012.setOrigin(0, 0);
        page12.add(page0012);

        // pageBack
        const pageBack = scene.add.rectangle(460, 60, 582, 730);
        pageBack.setOrigin(0, 0);
        page12.add(pageBack);

        // back_close
        const back_close = scene.add.image(1011, 58, "ninjacatalog", "back_close");
        back_close.setOrigin(0, 0);
        page12.add(back_close);

        // page11
        const page11 = scene.add.container(0, 0);
        page11.visible = false;
        this.add(page11);

        // page0011
        const page0011 = scene.add.image(0, 0, "ninjacatalog", "page0011");
        page0011.setOrigin(0, 0);
        page11.add(page0011);

        // buy10
        const buy10 = scene.add.image(381, 626, "ninjacatalog", "buy");
        buy10.setOrigin(0, 0);
        page11.add(buy10);

        // page10
        const page10 = scene.add.container(0, 0);
        page10.visible = false;
        this.add(page10);

        // page0010
        const page0010 = scene.add.image(0, 0, "ninjacatalog", "page0010");
        page0010.setOrigin(0, 0);
        page10.add(page0010);

        // buy9
        const buy9 = scene.add.image(381, 626, "ninjacatalog", "buy");
        buy9.setOrigin(0, 0);
        page10.add(buy9);

        // page9
        const page9 = scene.add.container(0, 0);
        page9.visible = false;
        this.add(page9);

        // page0009
        const page0009 = scene.add.image(0, 0, "ninjacatalog", "page0009");
        page0009.setOrigin(0, 0);
        page9.add(page0009);

        // buy8
        const buy8 = scene.add.image(381, 626, "ninjacatalog", "buy");
        buy8.setOrigin(0, 0);
        page9.add(buy8);

        // page8
        const page8 = scene.add.container(0, 0);
        page8.visible = false;
        this.add(page8);

        // page0008
        const page0008 = scene.add.image(0, 0, "ninjacatalog", "page0008");
        page0008.setOrigin(0, 0);
        page8.add(page0008);

        // buy7
        const buy7 = scene.add.image(381, 626, "ninjacatalog", "buy");
        buy7.setOrigin(0, 0);
        page8.add(buy7);

        // page7
        const page7 = scene.add.container(0, 0);
        page7.visible = false;
        this.add(page7);

        // page0007
        const page0007 = scene.add.image(0, 0, "ninjacatalog", "page0007");
        page0007.setOrigin(0, 0);
        page7.add(page0007);

        // buy6
        const buy6 = scene.add.image(381, 626, "ninjacatalog", "buy");
        buy6.setOrigin(0, 0);
        page7.add(buy6);

        // page6
        const page6 = scene.add.container(0, 0);
        page6.visible = false;
        this.add(page6);

        // page0006
        const page0006 = scene.add.image(0, 0, "ninjacatalog", "page0006");
        page0006.setOrigin(0, 0);
        page6.add(page0006);

        // buy5
        const buy5 = scene.add.image(381, 626, "ninjacatalog", "buy");
        buy5.setOrigin(0, 0);
        page6.add(buy5);

        // page5
        const page5 = scene.add.container(0, 0);
        page5.visible = false;
        this.add(page5);

        // page0005
        const page0005 = scene.add.image(0, 0, "ninjacatalog", "page0005");
        page0005.setOrigin(0, 0);
        page5.add(page0005);

        // buy4
        const buy4 = scene.add.image(381, 626, "ninjacatalog", "buy");
        buy4.setOrigin(0, 0);
        page5.add(buy4);

        // page4
        const page4 = scene.add.container(0, 0);
        page4.visible = false;
        this.add(page4);

        // page0004
        const page0004 = scene.add.image(0, 0, "ninjacatalog", "page0004");
        page0004.setOrigin(0, 0);
        page4.add(page0004);

        // buy3
        const buy3 = scene.add.image(381, 626, "ninjacatalog", "buy");
        buy3.setOrigin(0, 0);
        page4.add(buy3);

        // page3
        const page3 = scene.add.container(0, 0);
        page3.visible = false;
        this.add(page3);

        // page0003
        const page0003 = scene.add.image(0, 0, "ninjacatalog", "page0003");
        page0003.setOrigin(0, 0);
        page3.add(page0003);

        // buy2
        const buy2 = scene.add.image(381, 626, "ninjacatalog", "buy");
        buy2.setOrigin(0, 0);
        page3.add(buy2);

        // page2
        const page2 = scene.add.container(0, 0);
        page2.visible = false;
        this.add(page2);

        // page0002
        const page0002 = scene.add.image(0, 0, "ninjacatalog", "page0002");
        page0002.setOrigin(0, 0);
        page2.add(page0002);

        // buy1
        const buy1 = scene.add.image(381, 626, "ninjacatalog", "buy");
        buy1.setOrigin(0, 0);
        page2.add(buy1);

        // page1
        const page1 = scene.add.container(0, 0);
        this.add(page1);

        // page0001
        const page0001 = scene.add.image(0, 0, "ninjacatalog", "page0001");
        page0001.setOrigin(0, 0);
        page1.add(page0001);

        // pageFront
        const pageFront = scene.add.rectangle(460, 60, 582, 730);
        pageFront.setOrigin(0, 0);
        page1.add(pageFront);

        // buttons
        const buttons = scene.add.container(190, 41);
        buttons.visible = false;
        this.add(buttons);

        // close
        const close = scene.add.image(1041, 14, "ninjacatalog", "close");
        close.setOrigin(0, 0);
        buttons.add(close);

        // pageLeft
        const pageLeft = scene.add.sprite(-15, 587, "ninjacatalog", "turn0001");
        pageLeft.setOrigin(0, 0);
        buttons.add(pageLeft);

        // pageRight
        const pageRight = scene.add.sprite(1151, 588, "ninjacatalog", "turn0001");
        pageRight.scaleX = -1;
        pageRight.setOrigin(0, 0);
        buttons.add(pageRight);

        // coins
        const coins = scene.add.text(1193, 794, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12];

        // block (components)
        new Interactive(block);

        // pageBack (components)
        const pageBackSimpleButton = new SimpleButton(pageBack);
        pageBackSimpleButton.callback = () => this.prevPage();

        // back_close (components)
        const back_closeSimpleButton = new SimpleButton(back_close);
        back_closeSimpleButton.callback = () => this.close();

        // buy10 (components)
        const buy10Button = new Button(buy10);
        buy10Button.spriteName = "buy";
        buy10Button.callback = () => this.interface.prompt.showItem(5012);
        buy10Button.activeFrame = false;
        buy10Button.pixelPerfect = true;

        // buy9 (components)
        const buy9Button = new Button(buy9);
        buy9Button.spriteName = "buy";
        buy9Button.callback = () => this.interface.prompt.showFurniture(460);
        buy9Button.activeFrame = false;
        buy9Button.pixelPerfect = true;

        // buy8 (components)
        const buy8Button = new Button(buy8);
        buy8Button.spriteName = "buy";
        buy8Button.callback = () => this.interface.prompt.showFurniture(461);
        buy8Button.activeFrame = false;
        buy8Button.pixelPerfect = true;

        // buy7 (components)
        const buy7Button = new Button(buy7);
        buy7Button.spriteName = "buy";
        buy7Button.callback = () => this.interface.prompt.showIgloo(24);
        buy7Button.activeFrame = false;
        buy7Button.pixelPerfect = true;

        // buy6 (components)
        const buy6Button = new Button(buy6);
        buy6Button.spriteName = "buy";
        buy6Button.callback = () => this.interface.prompt.showFurniture(525);
        buy6Button.activeFrame = false;
        buy6Button.pixelPerfect = true;

        // buy5 (components)
        const buy5Button = new Button(buy5);
        buy5Button.spriteName = "buy";
        buy5Button.callback = () => this.interface.prompt.showItem(4075);
        buy5Button.activeFrame = false;
        buy5Button.pixelPerfect = true;

        // buy4 (components)
        const buy4Button = new Button(buy4);
        buy4Button.spriteName = "buy";
        buy4Button.callback = () => this.interface.prompt.showItem(5040);
        buy4Button.activeFrame = false;
        buy4Button.pixelPerfect = true;

        // buy3 (components)
        const buy3Button = new Button(buy3);
        buy3Button.spriteName = "buy";
        buy3Button.callback = () => this.interface.prompt.showItem(4034);
        buy3Button.activeFrame = false;
        buy3Button.pixelPerfect = true;

        // buy2 (components)
        const buy2Button = new Button(buy2);
        buy2Button.spriteName = "buy";
        buy2Button.callback = () => this.interface.prompt.showItem(4132);
        buy2Button.activeFrame = false;
        buy2Button.pixelPerfect = true;

        // buy1 (components)
        const buy1Button = new Button(buy1);
        buy1Button.spriteName = "buy";
        buy1Button.callback = () => this.interface.prompt.showItem(3032);
        buy1Button.activeFrame = false;
        buy1Button.pixelPerfect = true;

        // pageFront (components)
        const pageFrontSimpleButton = new SimpleButton(pageFront);
        pageFrontSimpleButton.callback = () => this.nextPage();

        // close (components)
        const closeButton = new Button(close);
        closeButton.spriteName = "close";
        closeButton.callback = () => this.close();
        closeButton.pixelPerfect = true;

        // pageLeft (components)
        const pageLeftSimpleButton = new SimpleButton(pageLeft);
        pageLeftSimpleButton.hoverCallback = () => this.onPageLeftOver();
        pageLeftSimpleButton.hoverOutCallback = () => this.onPageLeftOut();
        pageLeftSimpleButton.callback = () => this.prevPage();
        pageLeftSimpleButton.pixelPerfect = true;

        // pageRight (components)
        const pageRightSimpleButton = new SimpleButton(pageRight);
        pageRightSimpleButton.hoverCallback = () => this.onPageRightOver();
        pageRightSimpleButton.hoverOutCallback = () => this.onPageRightOut();
        pageRightSimpleButton.callback = () => this.nextPage();
        pageRightSimpleButton.pixelPerfect = true;

        this.pageLeft = pageLeft;
        this.pageRight = pageRight;
        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onPageLeftOver() {
        this.pageLeft.play('ninjacatalog/pageTurn/over')
    }

    onPageLeftOut() {
        this.pageLeft.play('ninjacatalog/pageTurn/out')
    }

    onPageRightOver() {
        this.pageRight.play('ninjacatalog/pageTurn/over')
    }

    onPageRightOut() {
        this.pageRight.play('ninjacatalog/pageTurn/out')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */