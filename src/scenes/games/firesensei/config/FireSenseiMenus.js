import * as sequences from './FireSenseiSequences'


export function start(menu) {
    return [
        {
            text: menu.getString('firemenu_title_competition'),
            icon: 'options/icon/belt',

            over: () => {
                if (menu.shouldStick) return
                menu.showSpeech(menu.getString('firemenu_description_competition'))
            },
            up: () => {
                //menu.showMatch()
            }
        },
        {
            text: menu.getString('menu_title_sensei'),
            icon: 'options/icon/sensei',

            over: () => {
                if (menu.shouldStick) return
                menu.showSpeech(menu.getString('firemenu_description_sensei'))
            },
            up: () => {
                menu.network.send('join_sensei')
            }
        }
    ]
}

export function itemsQuestion(menu) {
    return [
        {
            text: menu.getString('help_response_yes'),

            up: () => {
                menu.close()
                menu.startSequence(sequences.instrItems)
            }
        },
        {
            text: menu.getString('help_response_no'),

            up: () => {
                menu.startSequence(sequences.returnNoResponse)
                menu.showStartMenu()
            }
        }
    ]
}

export function volcanoQuestion(menu) {
    return [
        {
            text: menu.getString('help_response_yes'),

            up: () => {
                menu.close()
                menu.startSequence(sequences.instrVolcano)
            }
        },
        {
            text: menu.getString('help_response_no'),

            up: () => {
                menu.startSequence(sequences.returnNoResponse)
                menu.showStartMenu()
            }
        }
    ]
}

export function amuletQuestion(menu) {
    return [
        {
            text: menu.getString('help_response_yes'),

            up: () => {
                menu.close()
                menu.startSequence(sequences.instrAmulet)
            }
        },
        {
            text: menu.getString('help_response_no'),

            up: () => {
                menu.startSequence(sequences.returnNoResponse)
                menu.showStartMenu()
            }
        }
    ]
}