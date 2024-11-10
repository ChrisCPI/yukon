/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Interactive from "../../../components/Interactive";
import FireSenseiMatchItem4 from "./items/FireSenseiMatchItem4";
import FireSenseiMatchItem3 from "./items/FireSenseiMatchItem3";
import FireSenseiMatchItem2 from "./items/FireSenseiMatchItem2";
import FireSenseiMatchItem1 from "./items/FireSenseiMatchItem1";
/* START-USER-IMPORTS */

import layout from './layout'

/* END-USER-IMPORTS */

export default class FireSenseiMatch extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.spinner;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flash;
        /** @type {Array<FireSenseiMatchItem1|FireSenseiMatchItem2|FireSenseiMatchItem3|FireSenseiMatchItem4>} */
        this.items;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.setOrigin(0, 0);
        block.alpha = 0.2;
        block.isFilled = true;
        block.fillColor = 0;
        this.add(block);

        // match_ref0001
        const match_ref0001 = scene.add.image(1007, 485, "firesensei", "match/ref0003");
        match_ref0001.visible = false;
        this.add(match_ref0001);

        // bg
        const bg = scene.add.image(1005, 487, "firesensei", "match/bg/wait");
        this.add(bg);

        // item4
        const item4 = new FireSenseiMatchItem4(scene, 1017, 315);
        this.add(item4);

        // item3
        const item3 = new FireSenseiMatchItem3(scene, 1007, 645);
        this.add(item3);

        // item2
        const item2 = new FireSenseiMatchItem2(scene, 1232, 474);
        this.add(item2);

        // item1
        const item1 = new FireSenseiMatchItem1(scene, 787, 474);
        this.add(item1);

        // spinner
        const spinner = scene.add.image(796, 486, "firesensei", "match/load");
        this.add(spinner);

        // flash
        const flash = scene.add.sprite(1008, 488, "firesensei", "match/flash0001");
        flash.visible = false;
        this.add(flash);

        // bottom
        const bottom = scene.add.image(1006, 753.8439331054688, "firesensei", "match/side_horizontal");
        this.add(bottom);

        // top
        const top = scene.add.image(1007, 219, "firesensei", "match/side_horizontal");
        this.add(top);

        // right
        const right = scene.add.image(1365, 488, "firesensei", "match/side_vertical");
        this.add(right);

        // left
        const left = scene.add.image(647, 481, "firesensei", "match/side_vertical");
        this.add(left);

        // lists
        const items = [item1, item2, item3, item4];

        // block (components)
        new Interactive(block);

        this.spinner = spinner;
        this.flash = flash;
        this.items = items;

        /* START-USER-CTR-CODE */

        // Spinner
        scene.tweens.add({
            targets: spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    addListeners() {
        //this.network.events.on('join_matchmaking', this.handleJoinMatchmaking, this)
        this.network.events.on('tick_matchmaking', this.handleTickMatchmaking, this)
    }

    removeListeners() {
        //this.network.events.off('join_matchmaking', this.handleJoinMatchmaking, this)
        this.network.events.off('tick_matchmaking', this.handleTickMatchmaking, this)
    }

    show() {
        //this.showWaitingElements(true)

        this.showItems(1)

        const penguin = this.world.client.penguin
        this.items[0].setPlayer(penguin.username, penguin.items.all.color.id)

        this.addListeners()
        this.network.send('join_matchmaking')

        super.show()
    }

    close() {
        this.network.send('leave_matchmaking')
        this.removeListeners()

        super.close()

        this.scene.showPreviousMenu()
    }

    handleJoinMatchmaking() {
        //this.myPlayer.setItem(this.world.client.penguin.username)
    }

    handleTickMatchmaking(args) {
        //this.time.text = args.tick
        console.log(args.users)

        this.showItems(args.users.length)
        this.setItems(args.users)
    }

    showItems(players) {
        for (let item of this.items) {
            item.close()
        }

        const poop = players + 1
        const pos = layout.pos.items[players - 1]

        for (let i = 0; i < poop; i++) {
            let item = this.items[layout.slotTypes[players - 1][i]]

            item.setPosition(pos[i].x, pos[i].y)
            item.show()
        }

        for (let item of this.items) {
            item.playEmpty()
            item.positionMask()
        }

        const spinnerPos = layout.pos.spinner[players - 1]
        this.spinner.setPosition(spinnerPos.x, spinnerPos.y)
    }

    setItems(players) {
        for (let [index, user] of Object.entries(players)) {
            const item = this.items[layout.slotTypes[players.length][index]]
            item.setPlayer(user.username, user.color)
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

/*function handleTickMatchMaking(resObj) {
    com.clubpenguin.util.Debug.log("handleTickMatchMaking - resObj: " + resObj);
    resObj.shift();
    var _loc8_ = parseInt(resObj.shift());
    var _loc9_ = parseInt(resObj.shift());
    this.gameTimer.setCurrentTime(_loc9_);
    var players = new Array();
    while(true) {
       var _loc4_ = resObj.shift();
       if(_loc4_ == null) {
          break;
       }
       players.push(_loc4_.split("|"));
    }
    this.movie[GameEngine.MENUS_MOVIECLIP].widget.gotoAndStop(_loc8_);
    for(var i = 0; i < _loc8_; i++) {
       var _loc3_ = "" + (i + 1) + "_mc";
       this.movie[GameEngine.MENUS_MOVIECLIP].widget["name" + _loc3_].name_txt.text = players[i][0];
       var color = new Color(this.movie[GameEngine.MENUS_MOVIECLIP].widget["player" + _loc3_].bodyColor_mc);
       color.setRGB(GameEngine.SHELL.getPlayerHexFromId(players[i][1]));
    }
 }*/