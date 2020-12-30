


function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.501027, lng: -0.124095 },
        zoom: 15,
    });
   



    const infowindow = new google.maps.InfoWindow();
    const service = new google.maps.places.PlacesService(map);

    // For each loop added to existing Google API 'getDetails' method for each item in dataset array    
    for (var i = 0; i < request.item.length; i++) {
        service.getDetails(request.item[i], (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var c = 0; c < request.item.length; c++) {
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
        
    
                // Show info under map
                console.log(place.name);
            }
        

             
        })
        
    };

 for (var j = 0; j < request.item.length; j++) {
        service.getDetails(request.item[j], (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var c = 0; c < request.item.length; c++) {
                  


                    if (request.item[c].photo_reference === undefined) {
                        return "";
                    } else {
                        $("#locations_list").append(
                        
                            `<div class="list_item" id="list_item_${[j]}"><strong>` +
                            request.item[c].title +
                            "</strong><br>" +
                            "Place ID: " +
                            request.item[c].placeId +
                            "<br>" +
                            place.formatted_address +   
                             "<br>" +
                            place.name +   
                            "<br>" +
                            place.photos + 
                         //  `<img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photos}&key=${gAPI}">` + 
                            "<br>" + `<img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${request.item[c].photo_reference}&key=${gAPI}">`
                            +
                            "<br>" + `<a onclick="moreDetails(${[j++]});">Click here to show more</a>` +
                            "</div>"
                    );break; 
                    }
                } 
                
            }

             
        })
            
   };


    

    // Sidebar each item
            for (var k = 0; k < request.item.length; k++) {
        service.getDetails(request.item[k], (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
    
    
                // Show info under map
                console.log(place.place_id);
                for (var l = 0; l < request.item.length; l++) {

                    if (request.item[l].photo_reference === undefined) {
                        return "";
                    } else {
                        $("#locations_sidebar").append(
                        
                            `<div class="hide" id="sidebar_list_${[k++]}"><strong>` +
                            request.item[l].title +
                            "</strong><br>" +
                            "Place ID: " +
                            request.item[l].placeId +
                            "<br>" +
                            place.formatted_address +
                            "<br>" + `<img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${request.item[l].photo_reference}&key=${gAPI}">`
                            +
                            "<br>" +
                            "</div>"
                        );
                    } break;
                }
            }

             
        })
            
    }
};



