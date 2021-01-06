
listingObjectCombined;

const nextPage = $("#next-page");
const prevPage = $("#prev-page");
let page = 0;
let listLength = listingObjectCombined.length;
console.log(listLength);

function initList() {
    listingObjectCombined.sort((a, b) => b.date - a.date);
    for (var i = 0; i < page + 3; i++) {
        let item = listingObjectCombined[i];
        $("#locations_list").append(
            `<div class="fade-in">${item.content}</div>`
        )
    }

    let listLength = listingObjectCombined.length;
    let pageNum = Math.ceil(listLength / 3);

    // Credits: https://www.youtube.com/watch?v=1s57PDmaVEo 
    console.log(pageNum);
    
    


    
    $("#next-page").click(() => {
        for (let nextClick = 1; nextClick < pageNum; nextClick++) {
            console.log("list length", listingObjectCombined.length)

            let item = listingObjectCombined[i];
            page == listingObjectCombined.length - 3 ? page = 0 : (page += 3);
            console.log("page", page)
            for (let j = page; j < listingObjectCombined.length; j++) {

                $("#locations_list").html("");

                $("#locations_list").append(
                    `<div class="fade-in">${item.content}</div>`
                )
                
               
            }

            console.log("pageNum", nextClick)
                 if (nextClick === pageNum) {
            $("#next-page").addClass("disabled");
            console.log("broken")
            break;
        }
        }
         

        
   
    });    
    
    $("#prev-page").click(() => {
        $("#locations_list").html("");
        let item = listingObjectCombined[i];
        console.log("length", listingObjectCombined.length);
        page == listingObjectCombined.length - 3 ? page = 0 : (page += 3);

        for (let j = page; j < listingObjectCombined.length; j++) {
            $("#locations_list").append(
                `<div class="fade-in">${item.content}</div>`
            )
        };
        i
    })
};


function sort(sort) {
    if (sort === "asc") {
        listingObjectCombined.sort((a, b) => a.date - b.date);
    } else {
        listingObjectCombined.sort((a, b) => b.date - a.date);
    }

    $("#locations_list").html("");

    for (var i = 0; i < listingObjectCombined.length; i++) {
        let item = listingObjectCombined[i];
        $("#locations_list").append(
            `<div class="fade-in">${item.content}</div>`
        )
    }
};




// Show the sidebar details when 'read more' is clicked
function moreDetails(j) {
    $("#locations_sidebar").animate({ right: '0' }, "medium");
    $(".sidebar-item").addClass("hide");
    $(`#sidebar_list_${[j]}`).removeClass("hide");
    $(".list-overlay").animate({ opacity: '1' }, "medium").css("z-index", "2")
};

function hideOverlay() {
    $(".list-overlay").animate({ opacity: '0' }, "medium").css("z-index", "0")
    closeBtn();
}

function closeBtn() {
    $("#locations_sidebar").animate({ right: '-51%' }, "medium");
    setTimeout(function () {
        $(".sidebar-item").addClass("hide");
    }, 1000);
}


// Filter items functions
function searchField() {
    let search = $("#search").val();

    $(".marker").addClass("hide");
    $(".list-item").addClass("hide");
    $(`.list-item:contains(${search})`).removeClass("hide");
    $(`.infowindow:contains(${search})`).removeClass("hide");

}

function showMap() {
    $("#locations_list").addClass("hide");
    $("#map").removeClass("hide");
    closeBtn();
}

function showList() {
    $("#map").addClass("hide");
    $("#locations_list").removeClass("hide");
};

jQuery(function ($) {
    $(".area-btn").click(function () {
        $(".area-btn").removeClass("active");
        $(this).addClass("active");
    });
});

jQuery(function ($) {
    $(".sort-date").click(function () {
        $(".sort-date").removeClass("active");
        $(this).addClass("active");
    });
});


// Refresh location list sorted by date ascending or descending
/*jQuery(function ($) {
    
    $(".sort-date").click(function () {
        initMap();
        /*
        $("#locations_list").html("");
const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.501027, lng: -0.124095 },
        zoom: 12,
        mapId: "1daab95bc3f973ff",
        mapTypeControl: false,
});
        const infowindow = new google.maps.InfoWindow();
        const service = new google.maps.places.PlacesService(map);
        for (let x = 0; x < request.length; x++) {
            let location = request[x];
            let locationMap = request[x];
            let xx = x;
            service.getDetails(location, (place, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    let content = `<h6>${place.name}</h6><p>${place.formatted_address}<br>${place.place_id}</p><p onclick="moreDetails(${[xx]});">Read More</p>`;
addMarker(locationMap, place, map, infowindow, content);
                    let cardContent =
                        $("#locations_list").append(

                            `<div class="d-flex card flex-row list-item" id="list_item_${[x]}">
                    <div class="list-item-img"><img
                            src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${location.photo_reference}&key=${gAPI}">
                    </div>
                    <div class="location-info d-flex flex-column">
                        <h3>
                            ${place.name}
                            ${location.area}
                            ${location.posted}
                        </h3>
                        <div class="area-tag">${location.area}</div>
                        <h4>${place.formatted_address}</h4>
                        <p class="list-item-short-desc">${location.para.substr(0, 50)} <span onclick="moreDetails(${[x]});" class="read-more-trigger" href="#">Read More</span></p>
                        
                
                    </div>

                </div>`);
                } else {
                    console.log("Error - the place could not be found");
                }
            })
        }
    }) 
});*/


// Filter markers by area only
function filterArea(area) {
    for (var i in filteredMarkers) {
        marker = filteredMarkers[i];

        if (marker.area === area || area.length === 0) {
            marker.setVisible(true);
        } else {
            marker.setVisible(false);
        }
    }
}

function listFilterArea(area) {
    for (var li in request) {
        let item = request[li];


        if (area === "") {
            $(`.list-item`).removeClass("hide");
        } else if (item.area === area)
            $(`#list_item_${li}`).removeClass("hide");

        else {
            $(`#list_item_${li}`).addClass("hide");
        }
    }
}