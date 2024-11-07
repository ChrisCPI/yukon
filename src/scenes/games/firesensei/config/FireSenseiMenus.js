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
                // sensei yaps about the fire suit
                //menu.startSequence(sequences.instrHowToPlay)
            }
        },
        {
            text: menu.getString('help_response_no'),

            up: () => {
                // return to main menu, sensei says no problem (help_return_noResponse)
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
                menu.startSequence(sequences.returnWelcome, 'firehelp_return_noResponse')
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
                // sensei yaps about the amulet
                //menu.startSequence(sequences.instrHowToPlay)
            }
        },
        {
            text: menu.getString('help_response_no'),

            up: () => {
                // return to main menu, sensei says no problem (help_return_noResponse)
            }
        }
    ]
}