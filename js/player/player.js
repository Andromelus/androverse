class Player {
    constructor(x, y, map) {
        this.marker = L.marker([y, x])
        this.marker.addTo(map)
        this.marker.on("click", this.onClickMarker)
        // TODO set speed based on stats
        this.speed = 1 // units per second
        this.move_interval_id = null
        this.selector_target = this.marker
        this.marker.verse_id = "player"
    }

    onClickMarker(event) {
        console.debug("clicked player marker")
        selector_object.set_selector(player_object.selector_target)
    }

    move(y_target, x_target) {
        console.debug("move to", y_target, x_target)
        const current_y = this.marker.getLatLng()["lat"]
        const current_x = this.marker.getLatLng()["lng"]
        // if same x or y, then difference is 0. Then we just set it to 0, as we do not move on this axis
        const direction_y = (current_y - y_target) != 0 ? (current_y - y_target) / (current_y - y_target) : 0
        const direction_x = (current_x - x_target) != 0 ? (current_x - x_target) / (current_x - x_target) : 0

        this.move_interval_id = setInterval(this.__move, 1000, y_target, x_target, this.marker, this.speed, direction_y, direction_x)
    }

    __move(y_target, x_target, marker, speed, y_direction, x_direction) {
        const current_y = marker.getLatLng()["lat"]
        const current_x = marker.getLatLng()["lng"]
        let reached_x = false
        let reached_y = false
        let next_y = current_y + (speed * y_direction)
        let next_x = current_x + (speed * x_direction)
        if (y_direction < 0) {
            if (next_y < y_target) {
                next_y = y_target
                reached_y = true
            }
        } else if (y_direction > 0) {
            if (next_y > y_target) {
                next_y = y_target
                reached_y = true
            }
        } else {
            reached_y = true
        }

        if (x_direction < 0) {
            if (next_x < x_target) {
                next_x = x_target
                reached_x = true
            }
        } else if (x_direction > 0) {
            if (next_x > x_target) {
                next_x = x_target
                reached_x = true
            }
        } else {
            reached_x = true
        }
        console.debug(current_y, current_x)
        console.debug(next_y, next_x)
        marker.setLatLng([next_y, next_x])
        if (reached_y && reached_x) {
            clearInterval(player_object.move_interval_id)
        }
    }

    popupButtons = `
    <button onclick="player_object.move(y_target,x_target)">Move</button>
    `
}