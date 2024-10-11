const layout = {
    pos: {
        card: {
            deck: {
                x: 50,
                y: 349
            },
            holder: {
                x: -94,
                y: 107
            }
        },
        picks: [
            {
                x: 450,
                y: 300
            },
            {
                x: 850,
                y: 300
            }
        ]
    },
    spacer: {
        deck: 100
    },
    scale: {
        deck: 0.84,
        holder: 1
    },
    colors: {
        r: {
            color: 0xe23c26
        },
        g: {
            color: 0x61b946
        },
        b: {
            color: 0x1148a1
        },
        p: {
            color: 0xa399ca
        },
        o: {
            color: 0xf7952b
        },
        y: {
            color: 0xfbeb2d
        },

        energy: {
            enabled: [0xffff00, 0x00ff00, 0xff00ff, 0x00ffff],
            disabled: [0xff9600, 0x007f00, 0x7f007f, 0x007f7f]
        }
    }
}

export default layout
