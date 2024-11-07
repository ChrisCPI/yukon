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

export function introCards(widget) {
    return [
        () => {
            widget.showSpeech(widget.getString('help_firsttime_tobegin'))
            widget.scene.instructions.showCards()
        },
        () => {
            widget.network.send('add_starter_deck')

            widget.scene.instructions.hideCards()
            //widget.scene.showMenu(menus.instrWhatDoIDo)
        }
    ]
}

export function instrWhatDoIDo(widget) {
    return [
        () => {
            widget.showSpeech(widget.getString('help_firsttime_improve'))
            widget.scene.instructions.showCompete()
        },
        () => {
            widget.scene.hideInstructions()
            widget.showSpeech(widget.getString('help_firsttime_areyouready'))
        },
        () => {
            widget.scene.hideInstructions()
            //widget.scene.showMenu(menus.instrYesPlease)
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

export function instrHowToNinja(widget) {
    return [
        () => {
            widget.showSpeech(widget.getString('help_firsttime_joking'))
        },
        () => {
            widget.showSpeech(widget.getString('help_firsttime_gainexp'))
        },
        () => {
            widget.showSpeech(widget.getString('help_firsttime_belts'))
            widget.scene.instructions.showBelt()
        },
        () => {
            widget.showSpeech(widget.getString('help_firsttime_fightme'))
            widget.scene.instructions.showBlackBelt()
        },
        () => {
            widget.showSpeech(widget.getString('help_firsttime_ninja'))
            widget.scene.instructions.showNinja()
        },
        () => {
            widget.hideSpeech()
            widget.scene.hideInstructions()
            //widget.scene.showMenu(menus.instrCountMeIn)
        }
    ]
}
