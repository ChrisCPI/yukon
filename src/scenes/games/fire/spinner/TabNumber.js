const baseTextStyle = {
    'align': 'center',
    'fixedWidth': 80,
    'fixedHeight': 80,
    'fontFamily': 'CCComiccrazy',
    'fontSize': '80px'
}

const normalTextStyle = {
    ...baseTextStyle,
    'color': '#ffffff',
    'shadow.offsetX': -4,
    'shadow.offsetY': 4,
    'shadow.color': '#000000',
    'shadow.blur': 1,
    'shadow.stroke': true,
    'shadow.fill': true
}

const highlightTextStyle = {
    ...baseTextStyle,
    'color': '#ffcd00',
    'shadow.offsetX': 0,
    'shadow.offsetY': 0,
    'shadow.color': '#fd9800',
    'shadow.blur': 10,
    'shadow.stroke': true,
    'shadow.fill': true
}

/* START OF COMPILED CODE */

export default class TabNumber extends Phaser.GameObjects.Text {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480, "", {});

        this.setOrigin(0.5, 0.5);
        this.alpha = 0.3;
        this.alphaTopLeft = 0.3;
        this.alphaTopRight = 0.3;
        this.alphaBottomLeft = 0.3;
        this.alphaBottomRight = 0.3;
        this.text = "5";
        this.setStyle({ "align": "center", "fixedWidth":80,"fixedHeight":80,"fontFamily": "CCComicrazy", "fontSize": "80px", "shadow.offsetX":-4,"shadow.offsetY":4,"shadow.blur":1,"shadow.stroke":true,"shadow.fill":true});
        this.setPadding({"top":5});

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    show(showHighlight) {
        if (showHighlight) {
            this.setHighlight()
        } else {
            this.setNormal()
        }

        this.visible = true
    }

    setNumber(num) {
        this.text = num
    }

    setNormal() {
        this.setStyle(normalTextStyle)
        this.alpha = 0.3
    }

    setHighlight() {
        this.setStyle(highlightTextStyle)
        this.alpha = 1
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
