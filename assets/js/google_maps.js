
// Define arrays for markers to allow for filtering by area on Map
//let markers = [];
let filteredMarkers = [];
const locationListings = new Array();
const locationListingsDates = [];
var listingObjectCombined = [];

// Sort the request array by location post date
//request.sort((a, b) => a.posted - b.posted);


// Initialize the Google Map
function initMap() {

    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.501027, lng: -0.124095 },
        zoom: 12,
        mapId: "1daab95bc3f973ff",
        mapTypeControl: false,
    });

    const infowindow = new google.maps.InfoWindow();
    const service = new google.maps.places.PlacesService(map);

    // For ...in loop to iterate through 'request' array and show on map as markers and infowindow
    for (var m = 0; m < request.length; m++) {
        let locationMap = request[m];
        let mm = m
        service.getDetails(locationMap, (place, status) => {
            //   if (status === google.maps.places.PlacesServiceStatus.OK) {
            // let m = -5;

            let content = `<h6>${place.name}</h6><p>${place.formatted_address}<br>${place.place_id}</p><p onclick="moreDetails(${[mm]});">Read More</p>`;
            addMarker(locationMap, place, map, infowindow, content);
            //} else {
            //     console.log("Error - place could not be found");
            //}
        });
    };

    // For ...in loop to iterate through 'request' array and show as list
    for (let x = 0; x < request.length; x++) {
        let location = request[x];
        $("#locations_list").html("");
        $("#sidebar_item_container").html("");
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let postedDate = location.posted;
        let formatted_date = postedDate.getDate() + " " + months[postedDate.getMonth()] + " " + postedDate.getFullYear();



        //   if (location.photo_reference === undefined) {
        //     return "";
        //  } else {
        service.getDetails(location, (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {

                let cardContent =

                    `<div class="d-flex card flex-row list-item mx-3 mt-3" id="list_item_${[x]}">
                    <div class="list-item-img"><img
                            src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${location.photo_reference}&key=${gAPI}">
                    </div>
                    <div class="location-info d-flex flex-column p-2">
                        <h4>${place.name}</h4>
                        <div class="d-flex flex-row"><div class="area-tag">${location.area}</div> <p class="list-item-address my-auto pl-2">${place.formatted_address}</p></div>
                        <p class="list-item-date">Posted on: ${formatted_date}</p>
                        <p class="list-item-short-desc">${location.para.substr(0, 150)}... <span onclick="moreDetails(${[x]});" class="read-more-trigger">Read More</span></p>
                    </div>
                    </div>`;

                let sidebarContent = $("#sidebar_item_container").append(

                    `<div class="hide sidebar-item" id="sidebar_list_${[x]}">
                            
                            
                            
                            <div class="sidebar-img-wrapper"><img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${location.photo_reference}&key=${gAPI}"></div>
                            <div class="sidebar-content-wrapper p-4">
                            <h4>${place.name}</h4>
                            <p class="area-tag m-0">${location.area}</p>
                            <p class="m-0">${place.formatted_address}</p>
                            <div class="hz-rule"></div>
                            <p>${location.para}</p>
                            <button class="btn sidebar-website-btn"><a href="${location.web}" target="_blank">Visit Website</a></button>
                            </div>
                            
                            
                            </div>`
                );

                locationListings.push(cardContent);
                locationListingsDates.push(location.posted);
                listingObjectCombined[x] = { content: cardContent, date: location.posted }

                //  console.log(locationListings);
                /*   for (var i in locationListings) {
       let item = locationListings[i];
       $("#locations_list").append(
           `<div>${item}</div>`
       )
   }*/
            } else {
                console.log("Error - place could not be found");
            }
        });


    }




    // Sidebar each item
    /* for (let s = 0; s < request.length; s++) {
             let locationSide = request[s];
 
             //   if (request.item[c].photo_reference === undefined) {
             //     return "";
             //} else {
             service.getDetails(locationSide, (place, status) => {
                // if (status === google.maps.places.PlacesServiceStatus.OK) {
 
                         let sidebarContent = $("#locations_sidebar").append(
 
                             `<div class="" id="sidebar_list_${[s++]}"><strong>
                             ${place.name}
                             </strong><br>
                             ${place.formatted_address}
                             <br><img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${locationSide.photo_reference}&key=${gAPI}">
                             </div>`
                         );
          //       } else {
         //             console.log("Error - place could not be found");
         //            }
                 }
             
 
 
             )
 
         }*/

}



// Add marker function to push markers to array, allowing filter and sorting. 
// ** Acknowledgements - Peter on JS Fiddle for function concept - https://jsfiddle.net/peter/drytwvL8/ **
function addMarker(locationMap, place, map, infowindow, content) {
    //let x++ = 0; 
    let title = locationMap.title;
    let position = place.geometry.location;
    let address = place.formatted_address;
    //   let content = `<h6>${place.name}</h6><p>${place.formatted_address}<br>${place.place_id}</p><p onclick="moreDetails(${[m++]});">Read More</p>`;
    let area = locationMap.area;




    const marker = new google.maps.Marker({
        map: map,
        position: position,
        title: title,
        area: area,
    });

    filteredMarkers.push(marker);

    console.log(filteredMarkers);



    (function (marker, content) {
        // Show info on marker click
        google.maps.event.addListener(marker, "click", function () {
            infowindow.setContent(content);
            infowindow.open(map, marker);
            map.panTo(this.getPosition());
            closeBtn();
            return

        });
    })(marker, content);
};

function emptyMapMarkers() {
    let filteredMarkers = [];
}
