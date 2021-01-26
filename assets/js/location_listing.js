let currentPage = 1;
let itemsPerPage = 4;

// new credits: https://www.youtube.com/watch?v=IqYiVHrO2U8 

// =======
// =======

function initList(page) {

    // Define buttons in html that are active filters
    let asc = $("#btn_asc").hasClass("active");
    let desc = $("#btn_des").hasClass("active");

    let btnNorth = $("#north_btn").hasClass("active");
    let btnSouth = $("#south_btn").hasClass("active");
    let btnEast = $("#east_btn").hasClass("active");
    let btnWest = $("#west_btn").hasClass("active");

    let searchResults = [];
    let search = $("#search").val();
    let arrayChoiceArea;

    // Use filter() to sort array by area. Credits: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    if (btnNorth == true) {
        arrayChoiceArea = listingObjectCombined.filter(listingObjectCombined => listingObjectCombined.location === "North London")
    } else if (btnSouth == true) {
        arrayChoiceArea = listingObjectCombined.filter(listingObjectCombined => listingObjectCombined.location === "South London")
    } else if (btnEast == true) {
        arrayChoiceArea = listingObjectCombined.filter(listingObjectCombined => listingObjectCombined.location === "East London")
    } else if (btnWest == true) {
        arrayChoiceArea = listingObjectCombined.filter(listingObjectCombined => listingObjectCombined.location === "West London")
    } else {
        arrayChoiceArea = listingObjectCombined
    }

    // Sort the dates based on button value
    if (asc == true) {
        arrayChoiceArea.sort((a, b) => a.date - b.date);
    } else {
        arrayChoiceArea.sort((a, b) => b.date - a.date);

    }

    let arrayChoice;

    if (search == "") {
        arrayChoice = arrayChoiceArea
    } else {
        for (var i = 0; i < arrayChoiceArea.length; i++) {
            if (arrayChoiceArea === undefined) {
                $("#results_title").html(
                    `<div id="no_results" class="card fade-in"><h3>Looks like we're all out of ideas here. <i class="far fa-frown"></i> </h3><p>Try a different flavour or show all results for inspiration</p>
        <a href="locations.html"><button class="btn cta-btn">Show all results</button></a></div>`
                )
            } else {
                let item = arrayChoiceArea[i]
                let itemLower = item.content.toLowerCase()
                if (item.content.includes(search) || itemLower.includes(search))
                    searchResults.push(item)
            }
        }
        arrayChoice = searchResults;

    }

    $("#locations_list").html("");

    // Pagination code created with guidance from Tyler Potts YouTube tutorial: https://www.youtube.com/watch?v=IqYiVHrO2U8

    page--;
    let start = itemsPerPage * page;
    let end = start + itemsPerPage;
    let pagItems = arrayChoice.slice(start, end);

    for (var i = 0; i < pagItems.length; i++) {
        let item = pagItems[i];
        if (pagItems === undefined) {
            $("#results_title").html(
                `<div id="no_results" class="card fade-in"><h3>Looks like we're all out of ideas here. <i class="far fa-frown"></i> </h3><p>Try a different flavour or show all results for inspiration</p>
        <a href="locations.html"><button class="btn cta-btn">Show all results</button></a></div>`
            )
        } else {
            $("#locations_list").append(
                `<div class="fade-in">${item.content}</div>`
            )
        }
    }

    let mapActive = $("#map_btn").hasClass("filter-btn.active")

    if (arrayChoice.length === 0) {
        $("#results_title").html(
            `<div id="no_results" class="card fade-in"><h3>Looks like we're all out of ideas here. <i class="far fa-frown"></i> </h3><p>Try a different flavour or show all results for inspiration</p>
        <a href="locations.html"><button class="btn cta-btn">Show all results</button></a></div>`
        )
    } else {
        $("#results_title").html(

            `<div id="results" class="fade-in">
        <h3>We found <span class="bold-in-text">${arrayChoice.length} results</span> <span class="d-none d-lg-inline">that you may be interested in</span></h3>
        </div>`
        )
    };


    // Start pagination
    $("#pagination_btns").html("")
    let pageCount = Math.ceil(arrayChoice.length / itemsPerPage);
    pagination(btnNorth, btnSouth, btnEast, btnWest, pageCount);

    // Reset the overlay before displaying results
    hideOverlay();

};

function pagination(btnNorth, btnSouth, btnEast, btnWest, pageCount) {

    for (let i = 1; i < pageCount + 1; i++) {
        let btn = pagButtons(i);
        $("#pagination_btns").append(btn)
    }
};


function pagButtons(btnNum) {
    let button = document.createElement("button");
    button.innerText = btnNum;
    button.classList.add("btn", "pagination-btn")

    if (currentPage == btnNum) button.classList.add("active");

    button.addEventListener('click', function () {
        currentPage = btnNum;
        initList(currentPage);
    })
    return button;
}

initList(currentPage);


function sort(sort) {

    if (sort == "asc") {
        $("#btn_asc").addClass("active");
        $("#btn_des").removeClass("active");
    } else {
        $("#btn_des").addClass("active");
        $("#btn_asc").removeClass("active");
    }

    initList(currentPage);
};




// Show the sidebar details when 'read more' is clicked
function moreDetails(j) {
    $("#locations_sidebar").removeClass("hidden");
    $(".modal-overlay").addClass("show");
    $(`#sidebar_list_${[j]}`).removeClass("hide");
    $(".list-overlay").animate({ opacity: '1' }, "medium").css({ "z-index": "2", "display": "block" })
};

function hideOverlay() {
    $(".modal-overlay").click(function () {
        $(".modal-overlay").removeClass("show");
    })
    if ($("#locations_sidebar").hasClass("hidden") === false) {
        closeBtn();
    } else {
        return false
    }

}

function closeBtn() {
    $("#locations_sidebar").addClass("hidden");
    $(".modal-overlay").removeClass("show");
    setTimeout(function () {
        $(".sidebar-item").addClass("hide");
    }, 500);
    if ($(".list-overlay").css({ "display": "none" }) == false) {
        hideOverlay();
    } else {
        return false
    }
}


function enterKey() {
    document.getElementById("search").addEventListener('keyup', function (event) {
        if (event.keyCode === 13) {
            $(".search-btn").click();
        }
    });
}




// Filter items functions
function searchField(URLsearch) {

    if (URLsearch != "") $("#search").val(URLsearch);

    let search = $("#search").val();

    $(".marker").addClass("hide");
    $(".list-item").addClass("hide");
    $(`.list-item:contains(${search})`).removeClass("hide");
    $(`.infowindow:contains(${search})`).removeClass("hide");
    $("#filter_mobile").addClass("collapsed");
    $("#filter_mobile i").addClass("fa-filter").removeClass("fa-times");
    $("#filter").removeClass("show");
    hideOverlay()
    initList(currentPage)
}

$(document).ready(function () {
    $(".search-btn").click(function () {
        $("#list_section").animate({ scrollTop: 0 }, 300);
    })

})


function landingSearch(searchInput) {
    let search = searchInput;
    let root = window.location.pathname;
    window.location.href = `${root}/locations.html?&q=${search}`;
}

function showMap() {
    $("#locations_list").addClass("hide");
    $(".location-list-wrapper").addClass("hide");
    $("#pagination_btns").addClass("hide");
    $("#list_btn").removeClass("active");
    //$("#results_title").addClass("no-results-map")
    $("#map_btn").addClass("active");
    $("#map").removeClass("hide");
    //$(".map-overlay").removeClass("hide")
    $("#results_title").addClass("map")
    closeBtn();
}

function showList() {
    $("#map").addClass("hide");
    $("#map_btn").removeClass("active");
    //$(".map-overlay").addClass("hide")
    $("#list_btn").addClass("active");
    //  $("#no_locations").removeClass("no-results-map")
    $("#locations_list").removeClass("hide");
    $(".location-list-wrapper").removeClass("hide");
    $("#pagination_btns").removeClass("hide");
    $("#results_title").removeClass("map")
};

/*jQuery(function ($) {
    $(".area-btn").click(function () {
        $(".area-btn").removeClass("active");
        $(this).addClass("active");
    });
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


    if (area == "North London") {
        $(".area-btn").removeClass("active");
        $("#north_btn").addClass("active");
    } else if (area == "South London") {
        $(".area-btn").removeClass("active");
        $("#south_btn").addClass("active");
    } else if (area == "East London") {
        $(".area-btn").removeClass("active");
        $("#east_btn").addClass("active");
    } else if (area == "West London") {
        $(".area-btn").removeClass("active");
        $("#west_btn").addClass("active");
    } else {
        $(".area-btn").removeClass("active");
        $("#all_btn").addClass("active");
    }

    currentPage = 1;
    $("#pagination_btns").html("");
    $("#locations_list").html("");
    initList(currentPage);
    pagination(currentPage);



    // Determine item count from each area
    /*    let north = request.filter(function (item) {
            return item.area === "North London";
        }).length
        let south = request.filter(function (item) {
            return item.area === "South London";
        }).length
        let east = request.filter(function (item) {
            return item.area === "East London";
        }).length
        let west = request.filter(function (item) {
            return item.area === "West London";
        }).length
    
        console.log("north:", north)
        //$("#no_locations").addClass("hide");
        for (var li in request) {
            let item = request[li];
    
    
            if (area == "") {
                $(`.list-item`).removeClass("hide");
                //          $(`#no_locations`).addClass("hide");
            } else if (item.area == area) {
                $(`#list_item_${li}`).removeClass("hide");
                //    $(`#no_locations`).addClass("hide");
            }
            else //if(north == 0 || south == 0 || east == 0 || west == 0  ) 
            {
                $(`#list_item_${li}`).addClass("hide");
                //    $(`#no_locations`).removeClass("hide");
                console.log("no item:", item)
            }
    
    
        }*/
}

// Get search query from URL & run text search more 'read more' if exists
(function () {
    let href = window.location.href;
    let addSpace = href.replace("%20", " ");
    let URLstring = addSpace.split('q=')
    let idInfo = href.split('id=');

    let idInfoSearch = idInfo[1]
    let URLsearch = URLstring[1];
    if (URLsearch != undefined) { searchField(URLsearch) }
    else { };
    if (idInfoSearch != undefined) { moreDetails(idInfoSearch); }
    else { return false }
})();


// Get featured items on homepage
(function () {
    for (var i = 0; i < 3; i++) {
        let item = request[i]
        let paraWords = item.para.split(" ", 22);
        let paraWordLimit = paraWords.join(" ");

        $(`#ft${[i]}`).append(
            `<div class="featured-img-wrap">
                    <img src="${item.photo_reference}" alt="${item.title}">
                </div>
                <div class="featured-icon"><i class="fas fa-${item.cat_icon}"></i></div>
            <div class="featured-content">
                <h4 class="mb-1">${item.title}</h4>
                <div class="area-tag mb-1">${item.area}</div>
                <p  class="mb-1">${paraWordLimit}</p>
                <button class="cta-btn featured-btn-cta" onclick="landingSearch('${item.title}');" value="${item.title}">Read More</button>
            </div>`

        );
    }
})();