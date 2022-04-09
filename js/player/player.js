class Player {
    constructor(x, y, map) {
        this.marker = L.marker([y, x])
        this.marker.addTo(map)
    }
}