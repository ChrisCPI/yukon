const fireParticleDelays = [
    0,
    125,
    375,
    625,
    916,
    1125,
    1333,
    1916
]

const fireDoorOpen = 'dojohide/firePathDoor_open'
const fireDoorClosed = 'dojohide/firePathDoor_closed'

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
import Animation from "../../components/Animation";
import Waddle203 from "./waddle/Waddle203";
import Waddle202 from "./waddle/Waddle202";
import Waddle201 from "./waddle/Waddle201";
import Waddle200 from "./waddle/Waddle200";
import Zone from "../../components/Zone";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DojoHide extends RoomScene {

    constructor() {
        super("DojoHide");

        /** @type {Phaser.GameObjects.Sprite} */
        this.bridgeWater;
        /** @type {Phaser.GameObjects.Sprite} */
        this.firePathBack;
        /** @type {Phaser.GameObjects.Image} */
        this.firePathStairs;
        /** @type {Phaser.GameObjects.Sprite} */
        this.firePathDoor;
        /** @type {Phaser.GameObjects.Sprite} */
        this.firePathFront;
        /** @type {Phaser.GameObjects.Image} */
        this.firePathNote;
        /** @type {Phaser.GameObjects.Image} */
        this.catalog;
        /** @type {Phaser.GameObjects.Image} */
        this.cards;
        /** @type {Phaser.GameObjects.Image} */
        this.tabletButton;
        /** @type {Phaser.GameObjects.Sprite} */
        this.tabletGlow;
        /** @type {Phaser.GameObjects.Container} */
        this.tablet;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fireBeam;
        /** @type {Waddle203} */
        this.waddle203;
        /** @type {Waddle202} */
        this.waddle202;
        /** @type {Waddle201} */
        this.waddle201;
        /** @type {Waddle200} */
        this.waddle200;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.gong1Zone;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.gong2Zone;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.gong3Zone;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.gong4Zone;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container|Waddle200|Waddle201>} */
        this.sort;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.gongs;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.fireParticles;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'dojoext': () => this.triggerRoom(321, 260, 720),
            'dojofire': () => this.triggerDojoFire(),
            'ninja': () => this.onCatalogClick(),
            'waddle200': () => this.triggerMat(200),
            'waddle201': () => this.triggerMat(201),
            'waddle202': () => this.triggerMat(202),
            'waddle203': () => this.triggerMat(203)
        }

        this.music = 21

        this.waddles = {}

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dojohide-pack", "assets/media/rooms/dojohide/dojohide-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_water
        const bg_water = this.add.image(-17, 529, "dojohide", "bg/water");
        bg_water.setOrigin(0, 0);

        // bridgeWater
        const bridgeWater = this.add.sprite(57.5, 743, "dojohide", "bg/bridgeref0001");
        bridgeWater.setOrigin(0, 0);

        // bg
        const bg = this.add.image(-22, -22, "dojohide", "bg/bg");
        bg.setOrigin(0, 0);

        // bg_path_floor
        const bg_path_floor = this.add.image(461.5, 588, "dojohide", "bg/path/floor");
        bg_path_floor.setOrigin(0, 0);

        // bg_path_fire_off
        const bg_path_fire_off = this.add.image(506, 660, "dojohide", "bg/path/fire-off");
        bg_path_fire_off.setOrigin(0, 0);

        // bg_path_water_off
        const bg_path_water_off = this.add.image(666.5, 610.5, "dojohide", "bg/path/water-off");
        bg_path_water_off.setOrigin(0, 0);

        // bg_path_snow_off
        const bg_path_snow_off = this.add.image(692, 701.5, "dojohide", "bg/path/snow-off");
        bg_path_snow_off.setOrigin(0, 0);

        // door
        const door = this.add.image(313, 253, "dojohide", "door");
        door.setOrigin(0, 0);

        // back_lantern
        const back_lantern = this.add.image(599, 410, "dojohide", "back_lantern");
        back_lantern.setOrigin(0.5, 0.8759461456914207);

        // wood1
        const wood1 = this.add.image(39, 537, "dojohide", "wood1");
        wood1.setOrigin(0.5106382978723404, 0.8504672897196262);

        // wood2
        const wood2 = this.add.image(160, 461, "dojohide", "wood2");
        wood2.setOrigin(0.509090909090909, 0.8307692307692308);

        // wood3
        const wood3 = this.add.image(279, 393, "dojohide", "wood3");
        wood3.setOrigin(0.5121951219512195, 0.8522727272727273);

        // wood4
        const wood4 = this.add.image(471, 389, "dojohide", "wood4");
        wood4.setOrigin(0.5106382978723404, 0.8909090909090909);

        // wood5
        const wood5 = this.add.image(1048, 390, "dojohide", "wood5");
        wood5.setOrigin(0.5106382978723404, 0.8867924528301887);

        // wood6
        const wood6 = this.add.image(1240, 395, "dojohide", "wood6");
        wood6.setOrigin(0.5121951219512195, 0.8402366863905325);

        // wood7
        const wood7 = this.add.image(1360, 464, "dojohide", "wood7");
        wood7.setOrigin(0.509090909090909, 0.8342245989304813);

        // wood8
        const wood8 = this.add.image(1482, 544, "dojohide", "wood8");
        wood8.setOrigin(0.5106382978723404, 0.8701923076923077);

        // screen
        const screen = this.add.image(960, 409, "dojohide", "screen");
        screen.setOrigin(0.5048543689320388, 0.9047619047619048);

        // foliage2
        const foliage2 = this.add.image(335, 463, "dojohide", "foliage2");
        foliage2.setOrigin(0.5023255813953489, 0.5);

        // lantern1
        const lantern1 = this.add.image(313, 484, "dojohide", "lantern1");
        lantern1.setOrigin(0.5, 0.6964285714285714);

        // foliage3
        const foliage3 = this.add.image(480, 479, "dojohide", "foliage3");
        foliage3.setOrigin(0.5028571428571429, 0.8580645161290322);

        // firePath
        const firePath = this.add.container(213, 488);

        // firePathBack
        const firePathBack = this.add.sprite(-232.5, -232, "dojohide", "pathFire/back0001");
        firePathBack.setOrigin(0, 0);
        firePath.add(firePathBack);

        // firePathStairs
        const firePathStairs = this.add.image(-93, -48, "dojohide", "pathFire/stairs");
        firePathStairs.setOrigin(0, 0);
        firePathStairs.visible = false;
        firePath.add(firePathStairs);

        // firePathDoor
        const firePathDoor = this.add.sprite(44, -8, "dojohide", "pathFire/door_open0001");
        firePathDoor.setOrigin(0, 0);
        firePath.add(firePathDoor);

        // firePathFront
        const firePathFront = this.add.sprite(-232.5, -307.5, "dojohide", "pathFire/front0001");
        firePathFront.setOrigin(0, 0);
        firePath.add(firePathFront);

        // firePathNote
        const firePathNote = this.add.image(60, 7, "dojohide", "pathFire/note");
        firePathNote.setOrigin(0, 0);
        firePathNote.visible = false;
        firePath.add(firePathNote);

        // foliage1
        const foliage1 = this.add.image(55, 753, "dojohide", "foliage1");
        foliage1.setOrigin(0.5, 0.367816091954023);

        // foliage5
        const foliage5 = this.add.image(1195, 463, "dojohide", "foliage5");
        foliage5.setOrigin(0.5019455252918288, 0.5026737967914439);

        // foliage4
        const foliage4 = this.add.image(1034, 475, "dojohide", "foliage4");
        foliage4.setOrigin(0.5029239766081871, 0.8513513513513513);

        // rock
        const rock = this.add.image(1062, 497, "dojohide", "rock");

        // lantern2
        const lantern2 = this.add.image(1205, 483, "dojohide", "lantern2");
        lantern2.setOrigin(0.5, 0.6637931034482759);

        // foliage6
        const foliage6 = this.add.image(1271, 501, "dojohide", "foliage6");
        foliage6.setOrigin(0.5, 0.2636363636363636);

        // foliage7
        const foliage7 = this.add.image(1475, 756, "dojohide", "foliage7");
        foliage7.setOrigin(0.5, 0.39574468085106385);

        // foliage8
        const foliage8 = this.add.image(1491, 782, "dojohide", "foliage8");
        foliage8.setOrigin(0.5048543689320388, 0.33714285714285713);

        // gong1
        const gong1 = this.add.sprite(62, 161.5, "dojohide", "gong1/gong0001");
        gong1.setOrigin(0, 0);

        // gong2
        const gong2 = this.add.sprite(319, 98.5, "dojohide", "gong2/gong0001");
        gong2.setOrigin(0, 0);

        // gong3
        const gong3 = this.add.sprite(1035.5, 60, "dojohide", "gong3/gong0001");
        gong3.setOrigin(0, 0);

        // gong4
        const gong4 = this.add.sprite(1279, -21.5, "dojohide", "gong4/gong0001");
        gong4.setOrigin(0, 0);

        // store
        const store = this.add.image(768, 425, "dojohide", "store");
        store.setOrigin(0.5008912655971479, 0.9314775160599572);

        // catalog
        const catalog = this.add.image(1329.5, 687.5, "dojohide", "catalog");
        catalog.setOrigin(0, 0);

        // cards
        const cards = this.add.image(1342.5, 818.5, "dojohide", "cards");
        cards.setOrigin(0, 0);

        // fireTablet
        const fireTablet = this.add.container(423, 547);

        // tableExtra1
        const tableExtra1 = this.add.image(-53.5, 3, "dojohide", "tabletFire/extra1");
        tableExtra1.setOrigin(0, 0);
        fireTablet.add(tableExtra1);

        // tablet
        const tablet = this.add.container(1, -33);
        fireTablet.add(tablet);

        // tabletButton
        const tabletButton = this.add.image(-51.5, -79, "dojohide", "tabletFire/button");
        tabletButton.setOrigin(0, 0);
        tablet.add(tabletButton);

        // tabletGlow
        const tabletGlow = this.add.sprite(-25, -59, "dojohide", "tabletFire/glow0001");
        tabletGlow.setOrigin(0, 0);
        tablet.add(tabletGlow);

        // fireParticle3
        const fireParticle3 = this.add.sprite(27, -146, "dojohide", "tabletFire/particle0001");
        fireParticle3.setOrigin(0, 0);
        fireTablet.add(fireParticle3);

        // fireParticle2
        const fireParticle2 = this.add.sprite(-2, -146, "dojohide", "tabletFire/particle0001");
        fireParticle2.setOrigin(0, 0);
        fireTablet.add(fireParticle2);

        // fireParticle1
        const fireParticle1 = this.add.sprite(-42, -146, "dojohide", "tabletFire/particle0001");
        fireParticle1.setOrigin(0, 0);
        fireTablet.add(fireParticle1);

        // fireParticle4
        const fireParticle4 = this.add.sprite(-22, -146, "dojohide", "tabletFire/particle0001");
        fireParticle4.setOrigin(0, 0);
        fireTablet.add(fireParticle4);

        // fireParticle5
        const fireParticle5 = this.add.sprite(-12, -146, "dojohide", "tabletFire/particle0001");
        fireParticle5.setOrigin(0, 0);
        fireTablet.add(fireParticle5);

        // fireParticle6
        const fireParticle6 = this.add.sprite(-31, -146, "dojohide", "tabletFire/particle0001");
        fireParticle6.setOrigin(0, 0);
        fireTablet.add(fireParticle6);

        // fireParticle7
        const fireParticle7 = this.add.sprite(18, -146, "dojohide", "tabletFire/particle0001");
        fireParticle7.setOrigin(0, 0);
        fireTablet.add(fireParticle7);

        // fireParticle8
        const fireParticle8 = this.add.sprite(37, -146, "dojohide", "tabletFire/particle0001");
        fireParticle8.setOrigin(0, 0);
        fireTablet.add(fireParticle8);

        // fireParticle9
        const fireParticle9 = this.add.sprite(8, -146, "dojohide", "tabletFire/particle0001");
        fireParticle9.setOrigin(0, 0);
        fireTablet.add(fireParticle9);

        // fireBeam
        const fireBeam = this.add.sprite(-47, -198, "dojohide", "tabletFire/beam0003");
        fireBeam.setOrigin(0, 0);
        fireBeam.visible = false;
        fireTablet.add(fireBeam);

        // tabletExtra2
        const tabletExtra2 = this.add.image(33, 3, "dojohide", "tabletFire/extra2");
        tabletExtra2.setOrigin(0, 0);
        fireTablet.add(tabletExtra2);

        // tabletExtra3
        const tabletExtra3 = this.add.image(-59, 18, "dojohide", "tabletFire/extra3");
        tabletExtra3.setOrigin(0, 0);
        fireTablet.add(tabletExtra3);

        // decksteps
        const decksteps = this.add.image(605, 492.5, "dojohide", "bg/decksteps0001");
        decksteps.setOrigin(0, 0);

        // waddle203
        const waddle203 = new Waddle203(this, 1179, 828);
        this.add.existing(waddle203);

        // waddle202
        const waddle202 = new Waddle202(this, 331, 827);
        this.add.existing(waddle202);

        // waddle201
        const waddle201 = new Waddle201(this, 1072, 577);
        this.add.existing(waddle201);

        // waddle200
        const waddle200 = new Waddle200(this, 450, 577);
        this.add.existing(waddle200);

        // gong1Zone
        const gong1Zone = this.add.rectangle(86, 180, 104, 116);
        gong1Zone.setOrigin(0, 0);
        gong1Zone.alpha = 0.5;
        gong1Zone.isFilled = true;
        gong1Zone.fillColor = 65280;

        // gong2Zone
        const gong2Zone = this.add.rectangle(320, 106, 136, 132);
        gong2Zone.setOrigin(0, 0);
        gong2Zone.alpha = 0.5;
        gong2Zone.isFilled = true;
        gong2Zone.fillColor = 65280;

        // gong3Zone
        const gong3Zone = this.add.rectangle(1050, 74, 170, 170);
        gong3Zone.setOrigin(0, 0);
        gong3Zone.alpha = 0.5;
        gong3Zone.isFilled = true;
        gong3Zone.fillColor = 65280;

        // gong4Zone
        const gong4Zone = this.add.rectangle(1286, 46, 194, 260);
        gong4Zone.setOrigin(0, 0);
        gong4Zone.alpha = 0.5;
        gong4Zone.isFilled = true;
        gong4Zone.fillColor = 65280;

        // lists
        const sort = [back_lantern, rock, fireTablet, firePath, wood2, wood1, wood3, wood4, wood5, wood6, wood8, wood7, lantern2, lantern1, foliage1, foliage2, foliage3, foliage4, foliage5, foliage6, foliage7, foliage8, store, screen, waddle200, waddle201];
        const gongs = [gong1, gong2, gong3, gong4];
        const fireParticles = [fireParticle1, fireParticle2, fireParticle3, fireParticle4, fireParticle5, fireParticle6, fireParticle7, fireParticle8, fireParticle9];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 380;
        doorMoveTo.y = 392;

        // firePathStairs (components)
        const firePathStairsButton = new Button(firePathStairs);
        firePathStairsButton.spriteName = "pathFire/stairs";
        firePathStairsButton.hoverCallback = () => this.pauseFirePath();
        firePathStairsButton.hoverOutCallback = () => this.resumeFirePath();
        firePathStairsButton.activeFrame = false;
        const firePathStairsMoveTo = new MoveTo(firePathStairs);
        firePathStairsMoveTo.x = 290;
        firePathStairsMoveTo.y = 630;

        // firePathNote (components)
        const firePathNoteButton = new Button(firePathNote);
        firePathNoteButton.spriteName = "pathFire/note";
        firePathNoteButton.hoverCallback = () => this.pauseFirePath();
        firePathNoteButton.hoverOutCallback = () => this.resumeFirePath();
        firePathNoteButton.callback = () => this.onFireNoteClick();
        firePathNoteButton.activeFrame = false;

        // catalog (components)
        const catalogButton = new Button(catalog);
        catalogButton.spriteName = "catalog";
        catalogButton.callback = () => this.onCatalogClick();
        catalogButton.activeFrame = false;
        catalogButton.pixelPerfect = true;

        // cards (components)
        const cardsButton = new Button(cards);
        cardsButton.spriteName = "cards";
        cardsButton.callback = () => this.onCardsClick();
        cardsButton.activeFrame = false;

        // tabletButton (components)
        const tabletButtonButton = new Button(tabletButton);
        tabletButtonButton.spriteName = "tabletFire/button";
        tabletButtonButton.hoverCallback = () => this.onFireTabletOver();
        tabletButtonButton.hoverOutCallback = () => this.onFireTabletOut();
        tabletButtonButton.callback = () => this.onFireTabletClick();

        // tabletGlow (components)
        const tabletGlowAnimation = new Animation(tabletGlow);
        tabletGlowAnimation.key = "tabletFire/glow";
        tabletGlowAnimation.end = 80;

        // waddle203 (prefab fields)
        waddle203.moveToX = 1150;
        waddle203.moveToY = 770;

        // waddle202 (prefab fields)
        waddle202.moveToX = 350;
        waddle202.moveToY = 770;

        // waddle201 (prefab fields)
        waddle201.moveToX = 1050;
        waddle201.moveToY = 590;

        // waddle200 (prefab fields)
        waddle200.moveToX = 460;
        waddle200.moveToY = 590;

        // gong1Zone (components)
        const gong1ZoneZone = new Zone(gong1Zone);
        gong1ZoneZone.callback = () => this.hitGong(1);

        // gong2Zone (components)
        const gong2ZoneZone = new Zone(gong2Zone);
        gong2ZoneZone.callback = () => this.hitGong(2);

        // gong3Zone (components)
        const gong3ZoneZone = new Zone(gong3Zone);
        gong3ZoneZone.callback = () => this.hitGong(3);

        // gong4Zone (components)
        const gong4ZoneZone = new Zone(gong4Zone);
        gong4ZoneZone.callback = () => this.hitGong(4);

        this.bridgeWater = bridgeWater;
        this.firePathBack = firePathBack;
        this.firePathStairs = firePathStairs;
        this.firePathDoor = firePathDoor;
        this.firePathFront = firePathFront;
        this.firePathNote = firePathNote;
        this.catalog = catalog;
        this.cards = cards;
        this.tabletButton = tabletButton;
        this.tabletGlow = tabletGlow;
        this.tablet = tablet;
        this.fireBeam = fireBeam;
        this.waddle203 = waddle203;
        this.waddle202 = waddle202;
        this.waddle201 = waddle201;
        this.waddle200 = waddle200;
        this.gong1Zone = gong1Zone;
        this.gong2Zone = gong2Zone;
        this.gong3Zone = gong3Zone;
        this.gong4Zone = gong4Zone;
        this.sort = sort;
        this.gongs = gongs;
        this.fireParticles = fireParticles;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    get userHasDeck() {
        return this.world.client.inventory.award.includes(821)
    }

    get userHasAmulet() {
        return this.world.client.inventory.neck.includes(3032)
    }

    get fireDoorFrame() {
        return parseInt(this.firePathDoor.frame.name.slice(-4))
    }

    create() {
        super.create()

        this.fireStoneHover = false

        this.tabletGlowX = this.tabletGlow.x
        this.tabletGlowY = this.tabletGlow.y

        this.fireBeam.setBlendMode(Phaser.BlendModes.ADD)

        this.events.once('update', () => {
            this.tabletButton.on('pointerdown', this.onFireTabletDown, this)
        })

        this.gongBounds = [
            this.gong1Zone.getBounds(),
            this.gong2Zone.getBounds(),
            this.gong3Zone.getBounds(),
            this.gong4Zone.getBounds()
        ]

        this.particleTimers = []

        for (let particle of this.fireParticles) {
            particle.on('animationrepeat', () => {
                if (!this.fireStoneHover) {
                    particle.stop()
                    particle.visible = false
                }
            })
        }

        this.firePathSprites = [
            this.firePathBack,
            this.firePathFront,
            this.firePathDoor,
            this.bridgeWater
        ]

        this.firePathDoor.on(`animationupdate`, this.checkFireDoor, this)

        this.tablet.y = 110

        this.tweens.chain({
            targets: this.tablet,

            tweens: [
                {
                    y: -36,
                    ease: 'Linear',
                    delay: 417,
                    duration: 291,
                    onStart: () => this.soundManager.play('dojohide/tabletRise')
                },
                {
                    y: -33,
                    ease: 'Quad.easeOut',
                    duration: 83
                }
            ]
        })

        this.catalog.depth = 1000
        this.cards.depth = 1000
    }

    onSnowballComplete(ball) {
        for (let bounds of this.gongBounds) {
            if (bounds.contains(ball.x, ball.y)) {
                this.hideBall(ball)

                this.hitGong(this.gongBounds.indexOf(bounds) + 1)
            }
        }
    }

    hitGong(gong) {
        this.gongs[gong - 1].play(`dojohide/gong${gong}`)
        this.soundManager.play(`dojohide/gong${gong}`)
    }

    resetTabletGlowPosition() {
        this.tabletGlow.x = this.tabletGlowX
        this.tabletGlow.y = this.tabletGlowY
    }

    onFireTabletOver() {
        this.fireStoneHover = true
        this.tabletGlow.y = this.tabletGlowY - 5
        this.fireBeam.play('dojohide/fireBeam_over')
        this.setParticleTimers()
    }

    onFireTabletDown() {
        this.tabletGlow.x = this.tabletGlowX - 1
        this.tabletGlow.y = this.tabletGlowY
    }

    onFireTabletOut() {
        this.fireStoneHover = false
        this.resetTabletGlowPosition()
        this.fireBeam.play('dojohide/fireBeam_out')

        for (let timer of this.particleTimers) {
            this.time.removeEvent(timer)
        }
        this.particleTimers = []
    }

    onFireTabletClick() {
        this.resetTabletGlowPosition()

        if (this.firePathDoor.anims.isPlaying && this.fireDoorFrame < 127) return

        this.firePathBack.play('dojohide/firePathBack')
        this.firePathFront.play('dojohide/firePathFront')
        this.bridgeWater.play('dojohide/bridgeWater')

        this.firePathDoor.play(this.userHasAmulet ? fireDoorOpen : fireDoorClosed)
    }

    checkFireDoor(anim) {
        const frame = this.fireDoorFrame
        if (anim.key == fireDoorClosed) {
            if (frame === 25) {
                this.firePathNote.visible = true
            } else if (frame === 115) {
                this.firePathNote.visible = false
            }
        } else if (anim.key == fireDoorOpen) {
            if (frame === 22) {
                this.firePathStairs.visible = true
            } else if (frame === 115) {
                this.firePathStairs.visible = false
            }
        }

        // Sound effects
        let sound = null

        if (frame === 2) {
            sound = 'bridgeOpen'
        } else if (frame === 4 || frame === 8) {
            sound = 'stoneMove'
        } else if (frame === 14 || frame === 120) {
            sound = 'pathOpen'
        } else if (frame === 17 || frame === 124) {
            sound = 'splash'
        } else if ((frame === 28 || frame === 108) && anim.key == fireDoorOpen) {
            sound = 'tabletRise'
        }

        if (sound !== null) {
            this.soundManager.play(`dojohide/${sound}`)
        }
    }

    pauseFirePath() {
        for (let sprite of this.firePathSprites) {
            const currentFrame = sprite.anims.currentFrame.index
            if (currentFrame < 39 || currentFrame > 114) return

            const frame = sprite.anims.currentAnim.frames[38]
            sprite.anims.pause(frame)
        }
    }

    resumeFirePath() {
        for (let sprite of this.firePathSprites) {
            sprite.anims.resume()
        }  
    }

    setParticleTimers() {
        for (let particle of this.fireParticles) {
            particle.stop()
            particle.visible = false
        }

        for (let delay of fireParticleDelays) {
            const particle = this.fireParticles[fireParticleDelays.indexOf(delay)]
            const timer = this.time.delayedCall(delay, () => particle.play('dojohide/fireParticle'))
            this.particleTimers.push(timer)
        }
    }

    onFireNoteClick() {
        this.interface.loadWidget('FirePathNote')
    }

    onCatalogClick() {
        this.interface.loadWidget('NinjaCatalog')
    }

    onCardsClick() {
        this.interface.loadWidget('NinjaProgress')
    }

    triggerDojoFire() {
        if (this.firePathStairs.visible) {
            this.triggerRoom(812, 1480, 400)
        }
    }

    triggerMat(id) {
        if (!this.userHasDeck) {
            this.interface.prompt.showWindow(this.getString('starter_deck_prompt'))
            return
        }

        const text = this.getString('card_prompt')

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.network.send('join_waddle', { waddle: id })

            this.interface.prompt.window.visible = false
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */