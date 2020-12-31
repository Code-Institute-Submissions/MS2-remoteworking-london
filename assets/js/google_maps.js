


function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.501027, lng: -0.124095 },
        zoom: 12,
        mapId: "1daab95bc3f973ff",
        mapTypeControl: false,
    });


    let northBtn = $("#north_btn")
    let isActiveNorth = $("#north_btn").attr("class")
    let isActiveSouth = $("#south_btn").attr("class")

    const service = new google.maps.places.PlacesService(map);
    const infowindow = new google.maps.InfoWindow();
    // For each loop added to existing Google API 'getDetails' method for each item in dataset array    
    for (var m in request) {
        let locationMap = request[m];

        //   if (request.item[c].photo_reference === undefined) {
        //     return "";
        //} else {
        service.getDetails(locationMap, (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {


                if (locationMap.area === "North London" && isActiveNorth === "active") {
                    console.log("winning");
                    //Create marker
                    const marker = new google.maps.Marker({
                        map,
                        position: place.geometry.location,
                    });

                    // Show info on marker click
                    google.maps.event.addListener(marker, "click", function () {
                        infowindow.setContent(
                            "<div class='infowindow'><strong>" +
                            place.name +
                            "</strong><br>" +
                            "Place ID: " +
                            place.place_id +
                            "<br>" +
                            place.formatted_address +
                            "<br>" +
                            //    request.item[c].title +
                            "</div>"
                        );
                        infowindow.open(map, this);
                    });
                } else if (locationMap.area === "South London" && isActiveSouth === "active") {
                    console.log("error")
                    console.log(locationMap.area);
                    //Create marker
                    const marker = new google.maps.Marker({
                        map,
                        position: place.geometry.location,
                    });

                    // Show info on marker click
                    google.maps.event.addListener(marker, "click", function () {
                        infowindow.setContent(
                            "<div class='infowindow'><strong>" +
                            place.name +
                            "</strong><br>" +
                            "Place ID: " +
                            place.place_id +
                            "<br>" +
                            place.formatted_address +
                            "<br>" +
                            //    request.item[c].title +
                            "</div>"
                        );
                        infowindow.open(map, this);
                    });
                }



            }
        })
    }


    for (var x in request) {
        let location = request[x];
        
        //   if (request.item[c].photo_reference === undefined) {
        //     return "";
        //} else {
        service.getDetails(location, (place, status) => {
            $("#locations_list").append(

                `<div class="d-flex card flex-row list_item" id="list_item_${[x]}">
                    <div class="list-item-img"><img
                            src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${location.photo_reference}&key=${gAPI}">
                    </div>
                    <div class="location-info d-flex flex-column">
                        <h3>
                            ${place.name}
                            ${location.area}
                        </h3>
                        <div class="area-tag">${location.area}</div>
                        <h4>${place.formatted_address}</h4>
                        <p class="list-item-short-desc">${location.para.substr(0, 50)} <span onclick="moreDetails(${[x++]});" class="read-more-trigger" href="#">Read More</span></p>
                        
                
                    </div>

                </div>`
            )
        });
    }


        // Sidebar each item
         for (var s in request) {
        let locationSide = request[s];
        
        //   if (request.item[c].photo_reference === undefined) {
        //     return "";
        //} else {
        service.getDetails(locationSide, (place, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {

                        if (locationSide.photo_reference === undefined) {
                            return "";
                        } else {
                            $("#locations_sidebar").append(
    
                                `<div class="hide" id="sidebar_list_${[s++]}"><strong>` +
                                locationSide.title +
                                "</strong><br>" +
                                place.formatted_address +
                                "<br>" + `<img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${locationSide.photo_reference}&key=${gAPI}">`
                                +
                                "<br>" +
                                "</div>"
                            );
                        }                     }
                }
    
    
        )        
    
        }
    
};