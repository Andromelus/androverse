// à importer APRES le init



function mapPopup(event) {
    if (selector_object.is_set) {
        const verse_id = selector_object.selected_object.verse_id
        if (verse_id == undefined) {
            console.error(`verse_id of object is not set ${selector_object.selected_object}`)
        }
        if (verse_id == "player") {
            let popup_content = player_object.popupButtons.replace("y_target", event.latlng.lat)
                .replace("x_target", event.latlng.lng)
            L.popup()
                .setLatLng(event.latlng)
                .setContent(popup_content)
                .openOn(map)
        } else {
            console.error(`unknown verse_id ${verse_id}`)
        }
    }
}
map.on("click", mapPopup)
