const widgets = {
    'AdoptCatalog': require('@scenes/interface/catalogs/adopt/AdoptCatalog'),
    'ClothingCatalog': require('@scenes/interface/catalogs/clothing/ClothingCatalog'),
    'FurnitureCatalog': require('@scenes/interface/catalogs/furniture/FurnitureCatalog'),
    'GiveTour': require('@scenes/interface/books/give_tour/GiveTour'),
    'IglooCatalog': require('@scenes/interface/catalogs/igloo/IglooCatalog'),
    'NinjaCatalog': require('@scenes/interface/catalogs/ninja/NinjaCatalog'),
    'PetsCatalog': require('@scenes/interface/catalogs/pets/PetsCatalog'),

    'AgentQuiz': require('@scenes/interface/quiz/agent/AgentQuiz'),
    'FindFour': require('@scenes/games/four/FindFour'),
    'FireItems': require('@scenes/interface/instructions/fireitems/FireItems'),
    'FireInstructions': require('@scenes/interface/instructions/fireinstructions/FireInstructions'),
    'FirePathNote': require('@scenes/interface/game/fire_path_note/FirePathNote'),
    'Mancala': require('@scenes/games/mancala/Mancala'),
    'Map': require('@scenes/interface/game/map/Map'),
    'Missions': require('@scenes/interface/game/missions/Missions'),
    'NinjaBelts': require('@scenes/interface/instructions/ninjabelts/NinjaBelts'),
    'NinjaInstructions': require('@scenes/interface/instructions/ninjainstructions/NinjaInstructions'),
    'NinjaProgress': require('@scenes/games/ninjaprogress/NinjaProgress'),
    'SenseiNote': require('@scenes/interface/game/sensei_note/SenseiNote'),
    'Sensei': require('@scenes/games/sensei/widget/SenseiWidget'),
    'FireSensei': require('@scenes/games/firesensei/widget/FireSenseiWidget'),
    'TakeTour': require('@scenes/interface/game/take_tour/TakeTour'),
    'TourQuiz': require('@scenes/interface/quiz/tour/TourQuiz')
}

export default widgets
