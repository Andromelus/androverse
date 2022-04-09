var map
var player_object
var selector_object


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function configMap() {
    map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -2.6
    });

    var bounds = [
        [0, 0],
        [2880, 5120]
    ];
    // 5120/2880
    var image = L.imageOverlay('images/map_solar_system.png', bounds).addTo(map);

    map.fitBounds(bounds);
}


function configPlayer() {
    player_coord = getPlayerInfo()
    player_object = new Player(player_coord[0], player_coord[1], map)
} 

function configSelector() {
    selector_object = new Selector()
}

configMap()
configPlayer()
configSelector()
// player_object.move(2600, 800)