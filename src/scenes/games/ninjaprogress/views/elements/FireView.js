/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FireView extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Container} */
        this.intro;
        /** @type {Phaser.GameObjects.Image} */
        this.ninjaBody;
        /** @type {Phaser.GameObjects.Image} */
        this.nextItem;
        /** @type {Phaser.GameObjects.Image} */
        this.ninjaItem3;
        /** @type {Phaser.GameObjects.Image} */
        this.ninjaItem1;
        /** @type {Phaser.GameObjects.Image} */
        this.ninjaItem2;
        /** @type {Phaser.GameObjects.Image} */
        this.progressBar;
        /** @type {Phaser.GameObjects.Container} */
        this.progress;
        /** @type {Phaser.GameObjects.Container} */
        this.challenge;
        /** @type {Phaser.GameObjects.Container} */
        this.congratulations;


        // bg
        const bg = scene.add.image(0, 15, "ninjaprogress", "fire/progress");
        this.add(bg);

        // intro
        const intro = scene.add.container(-226, 1);
        this.add(intro);

        // sensei1
        const sensei1 = scene.add.image(1, 0, "ninjaprogress", "fire/sensei1");
        sensei1.setOrigin(0.5027932960893855, 0.5037037037037037);
        intro.add(sensei1);

        // tablet
        const tablet = scene.add.image(470, 2, "ninjaprogress", "fire/tablet");
        tablet.setOrigin(0.5050505050505051, 0.5);
        intro.add(tablet);

        // introText
        const introText = scene.add.text(241, 32, "", {});
        introText.setOrigin(0.5, 0.5);
        introText.text = "Become a Fire Ninja. Click the\nFire Tablet and continue your\njourney to the volcano.";
        introText.setStyle({ "align": "center", "color": "#451414", "fixedWidth":300,"fixedHeight":80,"fontFamily": "Burbank Small", "fontSize": "20px" });
        intro.add(introText);

        // progress
        const progress = scene.add.container(0, 0);
        progress.visible = false;
        this.add(progress);

        // ninjaBody
        const ninjaBody = scene.add.image(-243, -22, "ninjaprogress", "fire/ninja/body");
        progress.add(ninjaBody);

        // ninja
        const ninja = scene.add.image(-243, -13, "ninjaprogress", "fire/ninja/penguin");
        ninja.setOrigin(0.5, 0.5042735042735043);
        progress.add(ninja);

        // currentText
        const currentText = scene.add.text(-243, 58, "", {});
        currentText.setOrigin(0.5, 0.5);
        currentText.text = "Current Item";
        currentText.setStyle({ "align": "center", "color": "#000", "fixedWidth":100,"fixedHeight":20,"fontFamily": "Burbank Small", "fontSize": "14px", "fontStyle": "bold" });
        progress.add(currentText);

        // nextText
        const nextText = scene.add.text(239, 58, "", {});
        nextText.setOrigin(0.5, 0.5);
        nextText.text = "Next Item";
        nextText.setStyle({ "align": "center", "color": "#000", "fixedWidth":100,"fixedHeight":20,"fontFamily": "Burbank Small", "fontSize": "14px", "fontStyle": "bold" });
        progress.add(nextText);

        // nextItem
        const nextItem = scene.add.image(242, 6, "ninjaprogress", "fire/next/1");
        nextItem.setOrigin(0.5052631578947369, 0.5);
        progress.add(nextItem);

        // ninjaItem3
        const ninjaItem3 = scene.add.image(-235, -49, "ninjaprogress", "fire/ninja/item3");
        ninjaItem3.setOrigin(0.5076923076923077, 0.5087719298245614);
        ninjaItem3.visible = false;
        progress.add(ninjaItem3);

        // ninjaItem1
        const ninjaItem1 = scene.add.image(-242, 33, "ninjaprogress", "fire/ninja/item1");
        ninjaItem1.setOrigin(0.5063291139240507, 0.5238095238095238);
        ninjaItem1.visible = false;
        progress.add(ninjaItem1);

        // ninjaItem2
        const ninjaItem2 = scene.add.image(-243, -1, "ninjaprogress", "fire/ninja/item2");
        ninjaItem2.setOrigin(0.5048543689320388, 0.5064935064935064);
        ninjaItem2.visible = false;
        progress.add(ninjaItem2);

        // bar
        const bar = scene.add.image(3, 25, "ninjaprogress", "fire/progress/bar");
        bar.setOrigin(0.5, 0.5151515151515151);
        progress.add(bar);

        // progressBar
        const progressBar = scene.add.image(3, 25, "ninjaprogress", "fire/progress/1");
        progressBar.setOrigin(0.5015384615384615, 0.5);
        progress.add(progressBar);

        // challenge
        const challenge = scene.add.container(0, 0);
        challenge.visible = false;
        this.add(challenge);

        // sensei2
        const sensei2 = scene.add.image(238, 10, "ninjaprogress", "fire/sensei2");
        sensei2.setOrigin(0.5, 0.5042016806722689);
        challenge.add(sensei2);

        // fireNinja1
        const fireNinja1 = scene.add.image(-250, -6, "ninjaprogress", "fire/ninja/complete1");
        fireNinja1.setOrigin(0.5, 0.5034013605442177);
        challenge.add(fireNinja1);

        // challengeText
        const challengeText = scene.add.text(-4, 26, "", {});
        challengeText.setOrigin(0.5, 0.5);
        challengeText.text = "Well done! Challenge Sensei\nto become a Fire Ninja!";
        challengeText.setStyle({ "align": "center", "color": "#451414", "fixedWidth":300,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "20px" });
        challenge.add(challengeText);

        // congratulations
        const congratulations = scene.add.container(0, 0);
        congratulations.visible = false;
        this.add(congratulations);

        // fireNinja2
        const fireNinja2 = scene.add.image(-229, 0, "ninjaprogress", "fire/ninja/complete2");
        fireNinja2.setOrigin(0.5, 0.5036496350364964);
        congratulations.add(fireNinja2);

        // congratulationsText
        const congratulationsText = scene.add.text(79, 22, "", {});
        congratulationsText.setOrigin(0.5, 0.5);
        congratulationsText.text = "Congratulations! You are now a Fire Ninja!\nYou have received the Fire Gem.";
        congratulationsText.setStyle({ "color": "#451414", "fixedWidth":400,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "20px" });
        congratulations.add(congratulationsText);

        // title
        const title = scene.add.image(28, -36, "ninjaprogress", "fire/title");
        title.setOrigin(0.5028901734104047, 0.5045045045045045);
        this.add(title);

        this.intro = intro;
        this.ninjaBody = ninjaBody;
        this.nextItem = nextItem;
        this.ninjaItem3 = ninjaItem3;
        this.ninjaItem1 = ninjaItem1;
        this.ninjaItem2 = ninjaItem2;
        this.progressBar = progressBar;
        this.progress = progress;
        this.challenge = challenge;
        this.congratulations = congratulations;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(rank, progress) {
        this.setVisibleElements(rank, progress)

        this.setRank(rank)
        this.setProgress(progress)

        const color = this.world.getColor(this.world.client.penguin.items.flat.color)
        this.ninjaBody.tint = color

        super.show()
    }

    setRank(rank) {
        this.setCurrentItems(rank)
        this.setNextItem(rank)
    }

    setCurrentItems(rank) {
        this.ninjaItem1.visible = rank >= 1
        this.ninjaItem2.visible = rank >= 2
        this.ninjaItem3.visible = rank >= 3
    }

    setNextItem(rank) {
        rank = Phaser.Math.Clamp(rank + 1, 1, 4)

        this.nextItem.setFrame(`fire/next/${rank}`)
    }

    setProgress(progress) {
        progress = Phaser.Math.Clamp(progress, 1, 100)

        this.progressBar.setFrame(`fire/progress/${progress}`)
    }

    setVisibleElements(rank, progress) {
        let introVisible = rank == 0 && progress == 0
        let progressVisible = rank < 4
        let challengeVisible = rank == 4
        let congratsVisible = rank == 5

        this.intro.visible = introVisible
        this.progress.visible = progressVisible && !introVisible
        this.challenge.visible = challengeVisible
        this.congratulations.visible = congratsVisible
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */