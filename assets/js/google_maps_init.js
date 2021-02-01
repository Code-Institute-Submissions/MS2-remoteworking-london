// Define arrays for markers and cards to allow for filtering
let filteredMarkers = [];

// Initialize the Google Map & generate all place information in single page load
function initMap() {

    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.501027, lng: -0.124095 },
        zoom: 12,
        mapId: "1daab95bc3f973ff",
        mapTypeControl: false,
    });

    const infowindow = new google.maps.InfoWindow();

    // For ...in loop to iterate through 'request' array and show on map as markers and infowindow
    for (var m = 0; m < request.length; m++) {
        let locationMap = request[m];
        let tags = locationMap.tags;
        let tagStr = tags.toString();
        let tagSplit = tagStr.split(",");
        let tagJoin = tagSplit.join('</div><div class="loc-tag">');
        let mm = m;
        
        let content = `
            <div class="d-flex flex-row infowindow">
                
                <div class="d-flex flex-column mx-2">
                    <h4>${locationMap.title}</h4>
                    
                <div class="infowindow-tags flex-row" ><div class="loc-tag">${tagJoin}</div></div>
                <p onclick="moreDetails(${[locationMap.locId]});" class="infowindow-readmore">Read More</p>
                    </div>
                
                <div class="d-flex">
                    <button aria-label="get more info" id="info_cta_${mm}" class="btn cta-btn infowindow-cta" onclick="moreDetails(${[locationMap.locId]});initMap();"><i class="fas fa-chevron-circle-right"></i></button>
                </div>
            </div>`;
        addMarker(locationMap, map, infowindow, content);
    }
}


// Add marker function to push markers to array, allowing filter and sorting. 
// ** Acknowledgements - Peter on JS Fiddle for function concept - https://jsfiddle.net/peter/drytwvL8/ **
function addMarker(locationMap, map, infowindow, content, centerMap) {
    let title = locationMap.title;
    let position = { lat: locationMap.lat, lng: locationMap.lng };
    let area = locationMap.area;
    const marker = new google.maps.Marker({
        map: map,
        position: position,
        title: title,
        area: area,
    });

    filteredMarkers.push(marker);

    (function (marker, content, tag) {
        // Show info on marker click
        google.maps.event.addListener(marker, "click", function () {
            infowindow.setContent(content);
            infowindow.open(map, marker);
            map.panTo(this.getPosition());
            closeBtn();
            return;
        });
    })(marker, content);

    // Close all infowindows when filtering by area
    let areaBtn = $(".area-btn");

    areaBtn.click(function (map, marker) {
        infowindow.close(map, marker);
        bounds = new google.maps.LatLngBounds();
        console.log(centerMap);
    });
}