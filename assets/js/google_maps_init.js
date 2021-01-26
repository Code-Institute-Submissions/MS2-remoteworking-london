
// Define arrays for markers and cards to allow for filtering
let filteredMarkers = [];
let listingObjectCombined = [];

// Empty array for only the three featured cards on the homepage
let featured = [];

// Initialize the Google Map & generate all place information in single page load
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
            if (status === google.maps.places.PlacesServiceStatus.OK) {

                let content = `
            <div class="d-flex flex-row infowindow">
                <div class="infowindow-img-wrap">
                    <img src="${locationMap.photo_reference}" alt="${locationMap.name}">
                </div>
                <div class="d-flex flex-column mx-2">
                    <h6>${place.name}</h6>
                    <p>${place.formatted_address}</p>
                    <p onclick="moreDetails(${[mm]});" class="infowindow-readmore">Read More</p>
                </div>
                <div class="d-flex">
                    <button class="btn cta-btn infowindow-cta" onclick="moreDetails(${[mm]});"><i class="fas fa-chevron-circle-right"></i></p>
                </div>
            </div>`;
                addMarker(locationMap, place, map, infowindow, content);
            } else {
                console.log("Error - place could not be found");
            }
        });
    };

    // For ...in loop to iterate through 'request' array and show as list
    for (let x = 0; x < request.length; x++) {
        let location = request[x];
        $("#locations_list").html("");
        $("#sidebar_item_container").html("");
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        // Get the date posted from the object and create string for frontend. Credits to https://www.w3schools.com/js/js_date_methods.asp for date methods.
        let postedDate = location.posted;
        let formatted_date = postedDate.getDate() + " " + months[postedDate.getMonth()] + " " + postedDate.getFullYear();

        service.getDetails(location, (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                // Find and limit the number of words shown in the 'para' key. Credits to ProNeticas for providing core solution here: https://stackoverflow.com/questions/1662308/javascript-substr-limit-by-word-not-char
                let paraWords = location.para.split(" ", 22);
                let paraWordLimit = paraWords.join(" ");

                let cardContent =
                    `<div class="d-flex card list-item mt-3" id="list_item_${[x]}" onclick="moreDetails(${[x]});">
                    <div class="list-item-img"><img
                            src="${location.photo_reference}"> alt="${place.name}"
                    </div>
                    <div class="location-info d-flex flex-column p-2">
                        <h4>${place.name}</h4>
                        <div class="d-flex"><div class="area-tag"><span>${location.area}</span></div> <p class="list-item-address my-auto pl-2">${place.formatted_address}</p></div>
                        <p class="list-item-date">Posted on: ${formatted_date}</p>
                        <p class="list-item-short-desc">${paraWordLimit}... <span onclick="moreDetails(${[x]});" class="read-more-trigger">Read More</span></p>
                        <button onclick="moreDetails(${[x]});" class="read-more-trigger d-lg-none d-xl-none d-xxl-none">Read More</button>
                    </div>
                    </div>`;

                let sidebarContent = $("#sidebar_item_container").append(

                    `<div class="hide sidebar-item" id="sidebar_list_${[x]}">
                            <button onclick="closeBtn();hideOverlay();" class="btn close_btn"><i class="fas fa-times"></i></button>
                            <div class="sidebar-img-wrapper"><img src="${location.photo_reference}" alt="${place.name}"></div>
                            <div class="sidebar-content-wrapper p-4">
                            <h4>${place.name}</h4>
                            <p class="area-tag m-0">${location.area}</p>
                            <p class="m-0">${place.formatted_address}</p>
                            <div class="hz-rule"></div>
                            <p>${location.para}</p>
                            <a href="${location.web}" target="_blank"><button class="btn sidebar-website-btn">Visit Website</button></a>
                            </div>
                            </div>`
                );
                
                listingObjectCombined[x] = { content: cardContent, date: location.posted, location: location.area }

                // Set the default sorting of arrays based on most recent posting date
                featured.sort((a, b) => b.date - a.date);
                request.sort((a, b) => b.posted - a.posted);
                listingObjectCombined.sort((a, b) => b.posted - a.posted);

            } else {
                console.log("Error - place could not be found");
            }
        });


    }


console.log("added date",listingObjectCombined)

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
