const oneFrameTime = 41.66666

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
import Zone from "../../components/Zone";
import MoveTo from "../../components/MoveTo";
import Button from "../../components/Button";
import Waddle300 from "./waddle/Waddle300";
import Waddle301 from "./waddle/Waddle301";
import Waddle302 from "./waddle/Waddle302";
import Waddle303 from "./waddle/Waddle303";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DojoFire extends RoomScene {

    constructor() {
        super("DojoFire");

        /** @type {Phaser.GameObjects.Sprite} */
        this.sensei;
        /** @type {Waddle300} */
        this.waddle300;
        /** @type {Waddle301} */
        this.waddle301;
        /** @type {Waddle302} */
        this.waddle302;
        /** @type {Waddle303} */
        this.waddle303;
        /** @type {Phaser.GameObjects.Image} */
        this.cards;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'dojohide': () => null,
            //'sensei': () => this.triggerGame(951),
            'waddle300': () => this.triggerMat(300),
            'waddle301': () => this.triggerMat(301),
            'waddle302': () => this.triggerMat(302),
            'waddle303': () => this.triggerMat(303)
        }

        this.music = 22

        this.waddles = {}

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dojofire-pack", "assets/media/rooms/dojofire/dojofire-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_distant
        this.add.image(760, 366, "dojofire", "bg/distant");

        // rectangle
        const rectangle = this.add.rectangle(760, 670, 1129, 422);
        rectangle.isFilled = true;
        rectangle.fillColor = 12139776;

        // bgFlame1
        const bgFlame1 = this.add.sprite(133, 262, "dojofire", "bg/flame_10001");

        // bgFlame2
        const bgFlame2 = this.add.sprite(1394, 258, "dojofire", "bg/flame_20001");

        // volcano
        this.add.image(762, 508, "dojofire", "bg/volcano");

        // sensei
        const sensei = this.add.sprite(636, 57, "dojofire", "sensei/sensei0001");
        sensei.setOrigin(0, 0);

        // flowers
        this.add.image(907, 222, "dojofire", "flowers");

        // cauldronBack
        const cauldronBack = this.add.image(580.5, 224.5, "dojofire", "cauldron/back");
        cauldronBack.setOrigin(0, 0);

        // cauldronOpening
        const cauldronOpening = this.add.sprite(616, 237, "dojofire", "cauldron/opening0001");

        // cauldronSmoke
        const cauldronSmoke = this.add.sprite(616, 185, "dojofire", "cauldron/glow0001");

        // cauldronParticles
        const cauldronParticles = this.add.sprite(614, 228, "dojofire", "cauldron/particles0001");

        // cauldronFront
        const cauldronFront = this.add.image(587.5, 235, "dojofire", "cauldron/front");
        cauldronFront.setOrigin(0, 0);

        // zone
        const zone = this.add.rectangle(758, 177, 240, 240);
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // legendPoster
        const legendPoster = this.add.image(365, 363, "dojofire", "bg/poster_1");

        // instructionsPoster
        const instructionsPoster = this.add.image(1152, 368, "dojofire", "bg/poster_2");

        // pipe
        this.add.image(1154, 354, "dojofire", "bg/pipe");

        // waddle300
        const waddle300 = new Waddle300(this, 475, 526);
        this.add.existing(waddle300);

        // waddle301
        const waddle301 = new Waddle301(this, 1042, 526);
        this.add.existing(waddle301);

        // waddle302
        const waddle302 = new Waddle302(this, 464, 760);
        this.add.existing(waddle302);

        // waddle303
        const waddle303 = new Waddle303(this, 1054, 759);
        this.add.existing(waddle303);

        // stairs
        const stairs = this.add.image(740, 334.6515315859377, "dojofire", "stairs");
        stairs.setOrigin(0.5, 0.20289433981862204);

        // hot_sauce
        const hot_sauce = this.add.image(225.5, 543.5, "dojofire", "hot_sauce");
        hot_sauce.setOrigin(0.5, 0.07962776335292525);

        // flame1
        const flame1 = this.add.sprite(280, 532.0264281813274, "dojofire", "flame/flame_10001");
        flame1.setOrigin(0.5, 0.7722114254506196);

        // flame2
        const flame2 = this.add.sprite(564, 449.45225548006766, "dojofire", "flame/flame_20001");
        flame2.setOrigin(0.5, 0.7756180438405413);

        // flame3
        const flame3 = this.add.sprite(955.5, 449.57471232980333, "dojofire", "flame/flame_30001");
        flame3.setOrigin(0.5, 0.7725976986384266);

        // flame4
        const flame4 = this.add.sprite(1239, 534, "dojofire", "flame/flame_40001");
        flame4.setOrigin(0.5, 0.7725878820393173);

        // flame5
        const flame5 = this.add.sprite(254, 755, "dojofire", "flame/flame_20001");
        flame5.setOrigin(0.5, 0.7756180438405413);

        // flame6
        const flame6 = this.add.sprite(540, 847, "dojofire", "flame/flame_30001");
        flame6.setOrigin(0.5, 0.7725976986384266);
        flame6.flipX = true;

        // flame7
        const flame7 = this.add.sprite(963, 852, "dojofire", "flame/flame_40001");
        flame7.setOrigin(0.5, 0.7725878820393173);

        // flame8
        const flame8 = this.add.sprite(1271, 750, "dojofire", "flame/flame_10001");
        flame8.setOrigin(0.5, 0.7722114254506196);
        flame8.flipX = true;

        // foreground
        const foreground = this.add.container(0, 960);

        // fgBack
        const fgBack = this.add.image(762, -228, "dojofire", "fg/back");
        foreground.add(fgBack);

        // lavaLeft
        const lavaLeft = this.add.sprite(139, -85, "dojofire", "fg/lava_left0001");
        foreground.add(lavaLeft);

        // lavaRight
        const lavaRight = this.add.sprite(1381, -85, "dojofire", "fg/lava_right0001");
        foreground.add(lavaRight);

        // fgFront
        const fgFront = this.add.image(760, -92, "dojofire", "fg/front");
        foreground.add(fgFront);

        // cards
        const cards = this.add.image(1421, 875, "dojofire", "cards_button");

        // lists
        const sort = [hot_sauce, flame1, flame2, stairs, flame3, flame4, flame5, flame6, flame7, flame8, foreground];

        // bgFlame1 (components)
        const bgFlame1Animation = new Animation(bgFlame1);
        bgFlame1Animation.key = "bg/flame_1";
        bgFlame1Animation.end = 10;

        // bgFlame2 (components)
        const bgFlame2Animation = new Animation(bgFlame2);
        bgFlame2Animation.key = "bg/flame_2";
        bgFlame2Animation.end = 10;

        // cauldronOpening (components)
        const cauldronOpeningAnimation = new Animation(cauldronOpening);
        cauldronOpeningAnimation.key = "cauldron/opening";
        cauldronOpeningAnimation.end = 30;

        // cauldronSmoke (components)
        const cauldronSmokeAnimation = new Animation(cauldronSmoke);
        cauldronSmokeAnimation.key = "cauldron/glow";
        cauldronSmokeAnimation.end = 60;

        // cauldronParticles (components)
        const cauldronParticlesAnimation = new Animation(cauldronParticles);
        cauldronParticlesAnimation.key = "cauldron/particles";
        cauldronParticlesAnimation.end = 30;

        // zone (components)
        const zoneZone = new Zone(zone);
        zoneZone.hoverCallback = () => this.onSenseiOver();
        zoneZone.hoverOutCallback = () => this.onSenseiOut();
        zoneZone.callback = () => this.onSenseiClick();
        const zoneMoveTo = new MoveTo(zone);
        zoneMoveTo.x = 760;
        zoneMoveTo.y = 320;

        // legendPoster (components)
        const legendPosterButton = new Button(legendPoster);
        legendPosterButton.spriteName = "bg/poster_1";
        legendPosterButton.callback = () => this.onLegendClick();
        legendPosterButton.activeFrame = false;
        legendPosterButton.pixelPerfect = true;

        // instructionsPoster (components)
        const instructionsPosterButton = new Button(instructionsPoster);
        instructionsPosterButton.spriteName = "bg/poster_2";
        instructionsPosterButton.callback = () => this.onInstructionsClick();
        instructionsPosterButton.activeFrame = false;
        instructionsPosterButton.pixelPerfect = true;

        // waddle300 (prefab fields)
        waddle300.moveToX = 470;
        waddle300.moveToY = 520;

        // waddle301 (prefab fields)
        waddle301.moveToX = 1040;
        waddle301.moveToY = 520;

        // waddle302 (prefab fields)
        waddle302.moveToX = 460;
        waddle302.moveToY = 760;

        // waddle303 (prefab fields)
        waddle303.moveToX = 1050;
        waddle303.moveToY = 760;

        // flame1 (components)
        const flame1Animation = new Animation(flame1);
        flame1Animation.key = "flame/flame_1";
        flame1Animation.end = 11;

        // flame2 (components)
        const flame2Animation = new Animation(flame2);
        flame2Animation.key = "flame/flame_2";
        flame2Animation.end = 11;

        // flame3 (components)
        const flame3Animation = new Animation(flame3);
        flame3Animation.key = "flame/flame_3";
        flame3Animation.end = 11;

        // flame4 (components)
        const flame4Animation = new Animation(flame4);
        flame4Animation.key = "flame/flame_4";
        flame4Animation.end = 11;

        // flame5 (components)
        const flame5Animation = new Animation(flame5);
        flame5Animation.key = "flame/flame_2";
        flame5Animation.end = 11;

        // flame6 (components)
        const flame6Animation = new Animation(flame6);
        flame6Animation.key = "flame/flame_3";
        flame6Animation.end = 11;

        // flame7 (components)
        const flame7Animation = new Animation(flame7);
        flame7Animation.key = "flame/flame_4";
        flame7Animation.end = 11;

        // flame8 (components)
        const flame8Animation = new Animation(flame8);
        flame8Animation.key = "flame/flame_1";
        flame8Animation.end = 11;

        // lavaLeft (components)
        const lavaLeftAnimation = new Animation(lavaLeft);
        lavaLeftAnimation.key = "fg/lava_left";
        lavaLeftAnimation.end = 50;

        // lavaRight (components)
        const lavaRightAnimation = new Animation(lavaRight);
        lavaRightAnimation.key = "fg/lava_right";
        lavaRightAnimation.end = 50;

        // cards (components)
        const cardsButton = new Button(cards);
        cardsButton.spriteName = "cards_button";
        cardsButton.callback = () => this.interface.loadWidget('NinjaProgress');
        cardsButton.activeFrame = false;
        cardsButton.pixelPerfect = true;

        this.sensei = sensei;
        this.waddle300 = waddle300;
        this.waddle301 = waddle301;
        this.waddle302 = waddle302;
        this.waddle303 = waddle303;
        this.cards = cards;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    get userHasDeck() {
        return this.world.client.inventory.award.includes(8006)
    }

    create() {
        super.create()

        this.cards.depth = 1000

        const ambient1 = this.playSound('ambient1', true)
        const ambient2 = this.playSound('ambient2', true)

        this.ambientSounds = [ambient1, ambient2]

        // Todo: these events need to be removed when the scene stops
        this.setupSoundTimer('lava1', 60, 122)
        this.setupSoundTimer('lava1', 60, 128)
        this.setupSoundTimer('lava2', 70, 121)
        this.setupSoundTimer('lava2', 70, 124)
        this.setupSoundTimer('lava3', 70, 139)
        this.setupSoundTimer('lava4', 70, 140)
        this.setupSoundTimer('lava4', 70, 139)
    }

    setupSoundTimer(sound, range, maxRange) {
        const afterDelay = 1250
        const delay = (maxRange * oneFrameTime) - (Phaser.Math.Between(1, range) * oneFrameTime)

        const callback = () => {
            this.playSound(sound)
            this.time.delayedCall(afterDelay, () => this.setupSoundTimer(sound, range, maxRange))
        }

        this.time.delayedCall(delay, () => callback())
    }

    stop() {
        for (let sound of this.ambientSounds) {
            this.soundManager.remove(sound)
        }

        super.stop()
    }

    onSenseiOver() {
        this.sensei.play('dojofire/sensei_over')
        this.playSenseiSounds()
    }

    onSenseiOut() {
        this.sensei.play('dojofire/sensei_out')
        this.playSenseiSounds()
    }

    onSenseiClick() {
        this.sensei.anims.stop()
        this.sensei.setFrame('sensei/sensei0019')
    }

    playSenseiSounds() {
        this.playSound('sensei_poof')
        this.playSound('sensei_flare')
    }

    triggerMat(id) {
        if (!this.userHasDeck) {
            this.interface.prompt.showWindow(this.getString('fire_deck_prompt'))
            return
        }

        const text = this.getString('fire_prompt')

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.network.send('join_waddle', { waddle: id })

            this.interface.prompt.window.visible = false
        })
    }

    onLegendClick() {
        this.interface.loadWidget('FireItems')
    }

    onInstructionsClick() {
        this.interface.loadWidget('FireInstructions')
    }

    playSound(key, loop = false) {
        return this.soundManager.play(`dojofire/${key}`, { loop: loop, volume: 0.25 })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
