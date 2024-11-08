import * as menus from './FireSenseiMenus'


export function beltAward(widget) {
    return [
        () => {
            widget.showSpeech(widget.getString('firehelp_award_congratulations'))
        },
        () => {
            widget.showSpeech(widget.getFormatString('firehelp_award_belt_earned', widget.beltString))
            widget.showBelt()
        },
        () => {
            widget.leaveGame()
        }
    ]
}

export function maskAward(widget) {
    return [
        () => {
            widget.showSpeech(widget.getString('firehelp_defeat_sensei_intro'))
        },
        () => {
            widget.showSpeech(widget.getString('help_defeat_sensei_kowtows'))
        },
        () => {
            widget.showSpeech(widget.getString('help_defeat_sensei_gift'))
            widget.showMask()
        },
        () => {
            widget.hideAward()
            widget.showHideout()
            widget.showSpeech(widget.getString('help_defeat_sensei_final'))
        },
        () => {
            widget.leaveGame()
        }
    ]
}

export function intro(widget) {
    return [
        () => {
            widget.showSpeech(widget.getString('firehelp_firstTime_welcome'))
        },
        () => {
            widget.showSpeech(widget.getString('firehelp_firstTime_welcome2'))
        },
        () => {
            widget.showSpeech(widget.getString('firehelp_firstTime_welcome3'))
            widget.senseiSprite.playPoint()
            widget.playFireDeck()
        },
        () => {
            widget.scene.showStartMenu()
            widget.hideSpeech()
            widget.hideFireDeck()
            widget.network.send('add_fire_deck')
        }
    ]
}

export function returnWelcome(widget, id) {
    return [
        () => {
            widget.showSpeech(widget.getString(id))
        },
        () => {
            widget.hideSpeech()
        }
    ]
}

export function returnNoResponse(widget) {
    return [
        () => {
            widget.showSpeech(widget.getString('firehelp_return_noresponse'))
        },
        () => {
            widget.hideSpeech()
        }
    ]
}

export function volcanoIntro(widget) {
    return [
        () => {
            widget.scene.showMenu(menus.volcanoQuestion)
            widget.showSpeech(widget.getString('firehelp_return_volcanoquestion'))
        }
    ]
}

export function instrVolcano(widget) {
    return [
        () => {
            widget.scene.setButtonsVisible(false)
            widget.showSpeech(widget.getString('firehelp_return_volcanoawake'))
            widget.scene.instructions.showAwake()
        },
        () => {
            widget.showSpeech(widget.getString('firehelp_return_volcanograsshoppers'))
            widget.scene.instructions.showGrasshoppers()
        },
        () => {
            widget.showSpeech(widget.getString('firehelp_return_volcanoonlyninja'))
            widget.scene.instructions.showOnlyNinjas()
        },
        () => {
            widget.hideSpeech()
            widget.scene.hideInstructions()
            widget.scene.showMenu(menus.start)
            widget.scene.setButtonsVisible(true)
        }
    ]
}

export function amuletIntro(widget) {
    return [
        () => {
            widget.scene.showMenu(menus.amuletQuestion)
            widget.showSpeech(widget.getString('firehelp_return_amuletquestion'))
        }
    ]
}

export function instrAmulet(widget) {
    return [
        () => {
            widget.scene.setButtonsVisible(false)
            widget.showSpeech(widget.getString('firehelp_return_amuletpowerful'))
            widget.scene.instructions.showKeyElements()
        },
        () => {
            widget.showSpeech(widget.getString('firehelp_return_amuletmasterelements'))
            widget.scene.instructions.showChange()
        },
        () => {
            widget.showSpeech(widget.getString('firehelp_return_amuletsecret'))
            widget.scene.instructions.showManyPlaces()
        },
        () => {
            widget.hideSpeech()
            widget.scene.hideInstructions()
            widget.scene.showMenu(menus.start)
            widget.scene.setButtonsVisible(true)
        }
    ]
}

export function instrHowToPlay(widget) {
    return [
        () => {
            widget.showSpeech(widget.getString('help_firsttime_pickacard'))
            widget.scene.instructions.showPick()
        },
        () => {
            widget.showSpeech(widget.getString('help_firsttime_water'))
            widget.scene.instructions.showWater()
        },
        () => {
            widget.showSpeech(widget.getString('help_firsttime_snow'))
            widget.scene.instructions.showSnow()
        },
        () => {
            widget.showSpeech(widget.getString('help_firsttime_fire'))
            widget.scene.instructions.showFire()
        },
        () => {
            widget.showSpeech(widget.getString('help_firsttime_tie'))
            widget.scene.instructions.showTie()
        },
        () => {
            widget.hideSpeech()
            widget.scene.hideInstructions()
            //widget.scene.showMenu(menus.instrHowToWin)
        }
    ]
}

export function instrHowToWin(widget) {
    return [
        () => {
            widget.showSpeech(widget.getString('help_firsttime_howtowin'))
        },
        () => {
            widget.showSpeech(widget.getString('help_firsttime_winsame'))
            widget.scene.instructions.showWinSame()
        },
        () => {
            widget.showSpeech(widget.getString('help_firsttime_windifferent'))
            widget.scene.instructions.showWinDifferent()
        },
        () => {
            widget.showSpeech(widget.getString('help_firsttime_ingamehelp'))
            widget.scene.instructions.showHelp()
        },
        () => {
            widget.hideSpeech()
            widget.scene.hideInstructions()
            //widget.scene.showMenu(menus.instrHowToNinja)
        }
    ]
}