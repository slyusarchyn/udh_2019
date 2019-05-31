const iconSize = {
    'Team/Crew': 5,
    'Squad': 10,
    'Section': 15,
    'Platoon/detachment': 20,
    'Company/battery/troop': 25,
    'Battalion/squadron': 30,
    'Regiment/group': 35,
    'Brigade': 40,
    'Division': 45,
    'Corps/MEF': 50,
    'Army': 55,
    'Army Group/front': 60,
    'Region/Theater': 65,
    'Command': 70,
    'default': 30,
};

export function getSymbolSize(symbol) {
    let size = iconSize[symbol.getMetadata().echelon];
    return size ? size : 30;
}
