/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
import Zone from "../../components/Zone";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DojoExt extends RoomScene {

    constructor() {
        super("DojoExt");

        /** @type {Phaser.GameObjects.Image} */
        this.secretDoor;
        /** @type {Phaser.GameObjects.Image} */
        this.secretNote;
        /** @type {Phaser.GameObjects.Sprite} */
        this.stone;
        /** @type {Phaser.GameObjects.Image} */
        this.cards;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.secretZone;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'map': () => this.interface.loadWidget('Map'),
            'dojo': () => this.triggerRoom(320, 400, 660),
            'dojohide': () => this.triggerDojoHide()
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dojoext-pack", "assets/media/rooms/dojoext/dojoext-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        const sky = this.add.image(-12, -10, "dojoext", "bg/sky");
        sky.setOrigin(0, 0);

        // smoke
        const smoke = this.add.sprite(76, 178, "dojoext", "bg/smoke0001");
        smoke.setOrigin(0, 0);

        // volcano
        const volcano = this.add.image(-12, 339, "dojoext", "bg/volcano");
        volcano.setOrigin(0, 0);

        // mountains2
        const mountains2 = this.add.image(956, 61, "dojoext", "bg/mountains2");
        mountains2.setOrigin(0, 0);

        // cliff
        const cliff = this.add.image(156, 228, "dojoext", "bg/cliff");
        cliff.setOrigin(0, 0);

        // waterfall_center
        const waterfall_center = this.add.image(279, 254, "dojoext", "bg/waterfall/center");
        waterfall_center.setOrigin(0, 0);

        // waterfall_side
        const waterfall_side = this.add.sprite(258, 254, "dojoext", "bg/waterfall/side0001");
        waterfall_side.setOrigin(0, 0);

        // waterfall_particles
        const waterfall_particles = this.add.sprite(273, 258, "dojoext", "bg/waterfall/particles0001");
        waterfall_particles.setOrigin(0, 0);

        // waterfall_top
        const waterfall_top = this.add.sprite(267, 258, "dojoext", "bg/waterfall/top0001");
        waterfall_top.setOrigin(0, 0);

        // waterfall_middle
        const waterfall_middle = this.add.sprite(268, 336, "dojoext", "bg/waterfall/middle0001");
        waterfall_middle.setOrigin(0, 0);

        // waterfall_gradient
        const waterfall_gradient = this.add.sprite(182, 390, "dojoext", "bg/waterfall/gradient0001");
        waterfall_gradient.setOrigin(0, 0);

        // mountains1
        const mountains1 = this.add.image(-12, 107, "dojoext", "bg/mountains1");
        mountains1.setOrigin(0, 0);

        // gradient
        const gradient = this.add.image(-8, 32, "dojoext", "bg/gradient");
        gradient.setOrigin(0, 0);

        // hideout
        const hideout = this.add.image(-15, 416, "dojoext", "bg/hideout");
        hideout.setOrigin(0, 0);

        // secretDoor
        const secretDoor = this.add.image(242, 567, "dojoext", "secret/door");
        secretDoor.setOrigin(0, 0);

        // secretNote
        const secretNote = this.add.image(254, 591, "dojoext", "secret/note");
        secretNote.setOrigin(0, 0);

        // stone
        const stone = this.add.sprite(224, 559, "dojoext", "secret/stone0001");
        stone.setOrigin(0, 0);

        // dojo
        const dojo = this.add.image(296, -10, "dojoext", "bg/dojo");
        dojo.setOrigin(0, 0);

        // door
        const door = this.add.image(683, 418, "dojoext", "door");
        door.setOrigin(0, 0);

        // door_top
        const door_top = this.add.image(690, 426, "dojoext", "door_top");
        door_top.setOrigin(0, 0);

        // fg_right
        const fg_right = this.add.image(1358, 908, "dojoext", "fg_right");
        fg_right.setOrigin(0.5014492753623189, 0.8541666666666666);

        // fg_left
        const fg_left = this.add.image(192, 907, "dojoext", "fg_left");
        fg_left.setOrigin(0.5012406947890818, 0.7310924369747899);

        // stairs
        const stairs = this.add.image(788, 814, "dojoext", "stairs");
        stairs.setOrigin(0.500578034682081, 0.44755244755244755);

        // cards
        const cards = this.add.image(1342, 819, "dojoext", "cards");
        cards.setOrigin(0, 0);
        cards.visible = false;

        // secretZone
        const secretZone = this.add.rectangle(222, 560, 117, 128);
        secretZone.setOrigin(0, 0);
        secretZone.alpha = 0.5;
        secretZone.isFilled = true;
        secretZone.fillColor = 65280;

        // lists
        const sort = [fg_right, fg_left, stairs];

        // smoke (components)
        const smokeAnimation = new Animation(smoke);
        smokeAnimation.key = "bg/smoke";
        smokeAnimation.end = 28;

        // waterfall_side (components)
        const waterfall_sideAnimation = new Animation(waterfall_side);
        waterfall_sideAnimation.key = "bg/waterfall/side";
        waterfall_sideAnimation.end = 12;

        // waterfall_particles (components)
        const waterfall_particlesAnimation = new Animation(waterfall_particles);
        waterfall_particlesAnimation.key = "bg/waterfall/particles";
        waterfall_particlesAnimation.end = 30;

        // waterfall_top (components)
        const waterfall_topAnimation = new Animation(waterfall_top);
        waterfall_topAnimation.key = "bg/waterfall/top";
        waterfall_topAnimation.end = 12;

        // waterfall_middle (components)
        const waterfall_middleAnimation = new Animation(waterfall_middle);
        waterfall_middleAnimation.key = "bg/waterfall/middle";
        waterfall_middleAnimation.end = 12;

        // waterfall_gradient (components)
        const waterfall_gradientAnimation = new Animation(waterfall_gradient);
        waterfall_gradientAnimation.key = "bg/waterfall/gradient";
        waterfall_gradientAnimation.end = 10;

        // secretDoor (components)
        const secretDoorButton = new Button(secretDoor);
        secretDoorButton.spriteName = "secret/door";
        secretDoorButton.hoverCallback = () => this.onSecretDoorOver();
        secretDoorButton.hoverOutCallback = () => this.onSecretDoorOut();
        secretDoorButton.activeFrame = false;
        const secretDoorMoveTo = new MoveTo(secretDoor);
        secretDoorMoveTo.x = 280;
        secretDoorMoveTo.y = 680;

        // secretNote (components)
        const secretNoteButton = new Button(secretNote);
        secretNoteButton.spriteName = "secret/note";
        secretNoteButton.callback = () => this.onNoteClick();
        secretNoteButton.activeFrame = false;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 780;
        doorMoveTo.y = 600;

        // cards (components)
        const cardsButton = new Button(cards);
        cardsButton.spriteName = "cards";
        cardsButton.callback = () => this.onCardsClick();
        cardsButton.activeFrame = false;

        // secretZone (components)
        const secretZoneZone = new Zone(secretZone);
        secretZoneZone.hoverCallback = () => this.onSecretZoneOver();

        this.secretDoor = secretDoor;
        this.secretNote = secretNote;
        this.stone = stone;
        this.cards = cards;
        this.secretZone = secretZone;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    get userIsNinja() {
        return this.world.client.inventory.face.includes(104)
    }

    get userHasDeck() {
        return this.world.client.inventory.award.includes(821)
    }

    get stoneFrame() {
        return parseInt(this.stone.frame.name.slice(-4))
    }

    create() {
        super.create()

        this.secretNote.visible = !this.userIsNinja

        this.cards.visible = this.userHasDeck
        this.cards.depth = 1000

        this.stone.on('animationupdate', this.checkStone, this)
    }

    update() {
        const frame = 'secret/door'

        if (!this.userIsNinja && this.secretDoor.frame.name !== frame) {
            this.secretDoor.setFrame(frame)
        }
    }

    onSecretZoneOver() {
        this.secretZone.zone.visible = false

        this.stone.play('dojoext/stone-intro')
        this.stone.once('animationcomplete', () => this.stone.play('dojoext/stone'))
    }

    onSecretDoorOver() {
        if (this.stoneFrame > 11) {
            this.stone.stop()
            this.stone.setFrame('secret/stone0012')
        }
    }

    onSecretDoorOut() {
        if (this.stoneFrame > 11) {
            this.stone.play('dojoext/stone')
        }
    }

    checkStone() {
        if (this.stoneFrame === 103) {
            this.secretZone.zone.visible = true
        }
    }

    onNoteClick() {
        this.interface.loadWidget('SenseiNote')
    }

    onCardsClick() {
        this.interface.loadWidget('NinjaProgress')
    }

    triggerDojoHide() {
        if (this.userIsNinja) {
            this.triggerRoom(322, 380, 420)
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
