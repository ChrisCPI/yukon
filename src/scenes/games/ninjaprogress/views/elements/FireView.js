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
        const sensei1 = scene.add.image(0, 0, "ninjaprogress", "fire/sensei1");
        intro.add(sensei1);

        // tablet
        const tablet = scene.add.image(470, 2, "ninjaprogress", "fire/tablet");
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
        const ninjaBody = scene.add.image(-243, -23, "ninjaprogress", "fire/ninja/body");
        progress.add(ninjaBody);

        // ninja
        const ninja = scene.add.image(-243, -14, "ninjaprogress", "fire/ninja/penguin");
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
        progress.add(nextItem);

        // ninjaItem3
        const ninjaItem3 = scene.add.image(-235, -50, "ninjaprogress", "fire/ninja/item3");
        ninjaItem3.visible = false;
        progress.add(ninjaItem3);

        // ninjaItem1
        const ninjaItem1 = scene.add.image(-243, 32, "ninjaprogress", "fire/ninja/item1");
        ninjaItem1.visible = false;
        progress.add(ninjaItem1);

        // ninjaItem2
        const ninjaItem2 = scene.add.image(-243, -2, "ninjaprogress", "fire/ninja/item2");
        ninjaItem2.visible = false;
        progress.add(ninjaItem2);

        // bar
        const bar = scene.add.image(2, 25, "ninjaprogress", "fire/progress/bar");
        progress.add(bar);

        // progressBar
        const progressBar = scene.add.image(2, 25, "ninjaprogress", "fire/progress/1");
        progress.add(progressBar);

        // challenge
        const challenge = scene.add.container(0, 0);
        challenge.visible = false;
        this.add(challenge);

        // sensei2
        const sensei2 = scene.add.image(238, 9, "ninjaprogress", "fire/sensei2");
        challenge.add(sensei2);

        // fireNinja1
        const fireNinja1 = scene.add.image(-250, -7, "ninjaprogress", "fire/ninja/complete1");
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
        const fireNinja2 = scene.add.image(-229, -1, "ninjaprogress", "fire/ninja/complete2");
        congratulations.add(fireNinja2);

        // congratulationsText
        const congratulationsText = scene.add.text(79, 22, "", {});
        congratulationsText.setOrigin(0.5, 0.5);
        congratulationsText.text = "Congratulations! You are now a Fire Ninja!\nYou have received the Fire Gem.";
        congratulationsText.setStyle({ "color": "#451414", "fixedWidth":400,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "20px" });
        congratulations.add(congratulationsText);

        // title
        const title = scene.add.image(27.5, -36.5, "ninjaprogress", "fire/title");
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
        this.setRank(rank, progress)
        this.setProgress(progress)

        const color = this.world.getColor(this.world.client.penguin.items.flat.color)
        this.ninjaBody.tint = color

        super.show()
    }

    setRank(rank, progress) {
        this.setVisibleElements(rank, progress)
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