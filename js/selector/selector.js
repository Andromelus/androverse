class Selector {
    constructor() {
        console.debug("init selector")
        this.is_set = false
        this.check_interval = null
        this.selected_object = null
    }

    set_selector(selected_object) {
        if (this.is_set) {
            this.__clear()
        }
        this.selected_object = selected_object
        this.check_interval = setInterval(this.__check_interval, 2, selected_object)
        this.is_set = true
    }

    __check_interval(leaflet_object) {
        // console.debug(leaflet_object.getLatLng())
        // TODO afficher info dans interface web
    }

    __clear() {
        console.debug("clear selector props")
        this.selected_object = null
        clearInterval(this.check_interval)
        this.is_set = false
    }


}