let currentPage = 1;
let itemsPerPage = 4;


// Get search query from URL & run search if exists
    (function () {
        let href = window.location.href;
        let URLstring = href.split('q=');
        let URLsearch = URLstring[1];
        if (URLsearch != undefined) { searchField(URLsearch) }
        else {
            return false
        };
    })();


// Smooth scrolling



/// ==== CREDIT https://codepen.io/damianocel/pen/EVpqNJ

$(window).scroll(function () {
      var top =  $("#top_page");
    if ( $('body').height() <= (    $(window).height() + $(window).scrollTop() + 200 )) {
    top.animate({"top": "0"}, 1500);
    } else {
        //top.animate({"margin-left": "-100%"},1500);
    }
      });

    $("#to_top").on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, 100);
    });

    
// Initilialize Popper.js tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


//(function () { let list = listingObjectCombined })();


console.log("emoty or not", listingObjectCombined)

console.log("north", listingObjectNorth);




// new credits: https://www.youtube.com/watch?v=IqYiVHrO2U8 

// =======
// =======

function initList(page) {
    
    let asc = $("#btn_asc").hasClass("active");
    let desc = $("#btn_des").hasClass("active");

    let btnNorth = $("#north_btn").hasClass("active");
    let btnSouth = $("#south_btn").hasClass("active");
    let btnEast = $("#east_btn").hasClass("active");
    let btnWest = $("#west_btn").hasClass("active");
    
    let searchResults = [];
    let search = $("#search").val();
    console.log("the search", search)
    let arrayChoiceArea;
    if (btnNorth == true) { arrayChoiceArea = listingObjectNorth }
    else if (btnSouth == true) { arrayChoiceArea = listingObjectSouth }
    else if (btnEast == true) { arrayChoiceArea = listingObjectEast }
    else if (btnWest == true) { arrayChoiceArea = listingObjectWest }
    else { arrayChoiceArea = listingObjectCombined}

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

            let item = arrayChoiceArea[i]

            console.log("each item", item.content)

            if (item.content.includes(search))
                searchResults.push(item)



        }
        arrayChoice = searchResults;
    }
    console.log("serch results", searchResults)
    console.log("found something", arrayChoice)

    console.log("what is array", arrayChoice)

    // Determine item count from each area
    /*let north = request.filter(function (item) { return item.area === "North London"; }).length
    let south = request.filter(function (item) { return item.area === "South London"; }).length
    let east = request.filter(function (item) { return item.area === "East London"; }).length
    let west = request.filter(function (item) { return item.area === "West London"; }).length

    console.log("north:", north)
    //$("#no_locations").addClass("hide");*/



    $("#locations_list").html("");
    page--;
    console.log("currentPage after click:", page)
    //listingObjectCombined.sort((a, b) => b.date - a.date);
    console.log("Allitems", arrayChoice)
    let start = itemsPerPage * page;
    let end = start + itemsPerPage;

    let pagItems = arrayChoice.slice(start, end);


    console.log("items", pagItems)
    console.log("start:", start, "end", end)

    // new credits: https://www.youtube.com/watch?v=IqYiVHrO2U8 



    for (var i = 0; i < pagItems.length; i++) {
        let item = pagItems[i];
        $("#locations_list").append(
            `<div class="fade-in">${item.content}</div>`
        )

    }

    let mapActive = $("#map_btn").hasClass("filter-btn.active")
    console.log("map?", mapActive)

    if (arrayChoice.length == 0) {
        $("#results_title").html(
            `<div id="no_results" class="card fade-in"><h3>Looks like we're all out of ideas here. <i class="far fa-frown"></i> </h3><p>Try a different flavour or show all results for inspiration</p>
        <button class="btn cta-btn" onclick="listFilterArea('All');">Show all results</button></div>`
    )
        $(".map-overlay").css({ "z-index": "1", "opacity": "1", "display": "block" })
    } else {
        $("#results_title").html(
               
            `<div id="results" class="fade-in">
        <h3>We found <span class="bold-in-text">${arrayChoice.length} results</span> that you may be interested in</h3>
        </div>`
    )
     
        $(".map-overlay").css({ "z-index": "-1", "opacity": "0", "display": "none" })
    };


// Start pagination
    $("#pagination_btns").html("")
    let pageCount = Math.ceil(arrayChoice.length / itemsPerPage);
    pagination(btnNorth,btnSouth,btnEast,btnWest,pageCount);

// Reset the overlay before displaying results
    hideOverlay();

};

function pagination(btnNorth,btnSouth,btnEast,btnWest,pageCount) {

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
        console.log("current", currentPage)
        console.log("button nuber", currentPage)
        initList(currentPage);
        //$(".pagination-btn.active").removeClass("active");
        //$(this).addClass("active");
    })
    return button;
}
//pagination();
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
    $("#locations_sidebar").animate({ right: '0' }, "medium");
    $(".sidebar-item").addClass("hide");
    $(`#sidebar_list_${[j]}`).removeClass("hide");
    $(".list-overlay").animate({ opacity: '1' }, "medium").css({ "z-index": "2", "display": "block" })
};

function hideOverlay() {
    $(".list-overlay").animate({ opacity: '0' }, "medium").css({ "z-index": "0", "display": "none" })
    closeBtn();
}

function closeBtn() {
    $("#locations_sidebar").animate({ right: '-51%' }, "medium");
    setTimeout(function () {
        $(".sidebar-item").addClass("hide");
    }, 500);
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
    hideOverlay()
    initList(currentPage)
}

function landingSearch() {
    let search = $("#search").val();
    window.location.href = `/locations.html?&q=${search}`;
    //searchField();
}

function showMap() {
    $("#locations_list").addClass("hide");
    $(".location-list-wrapper").addClass("hide");
    $("#pagination_btns").addClass("hide");
    $("#list_btn").removeClass("active");
    //$("#results_title").addClass("no-results-map")
    $("#map_btn").addClass("active");
    $("#map").removeClass("hide");
    $(".map-overlay").removeClass("hide")
    $("#results_title").addClass("map")
    closeBtn();
}

function showList() {
    $("#map").addClass("hide");
    $("#map_btn").removeClass("active");
    $(".map-overlay").addClass("hide")
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