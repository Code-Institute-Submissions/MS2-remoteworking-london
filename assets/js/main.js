
//(function () { let list = listingObjectCombined })();


console.log("emoty or not", listingObjectCombined)

console.log("north", listingObjectNorth);

let currentPage = 1;
let itemsPerPage = 3;

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

    let arrayChoice;
    if (btnNorth == true) { arrayChoice = listingObjectNorth }
    else if (btnSouth == true) { arrayChoice = listingObjectSouth }
    else if (btnEast == true) { arrayChoice = listingObjectEast }
    else if (btnWest == true) { arrayChoice = listingObjectWest }
    else { arrayChoice = listingObjectCombined }

    console.log(asc)
    console.log(desc)

    if (asc == true) {
        arrayChoice.sort((a, b) => a.date - b.date);
        console.log("ascend")
    } else {
        arrayChoice.sort((a, b) => b.date - a.date);

        console.log("descend")
        console.log("asc result")
    }

    // Determine item count from each area
    let north = request.filter(function (item) { return item.area === "North London"; }).length
    let south = request.filter(function (item) { return item.area === "South London"; }).length
    let east = request.filter(function (item) { return item.area === "East London"; }).length
    let west = request.filter(function (item) { return item.area === "West London"; }).length

    console.log("north:", north)
    //$("#no_locations").addClass("hide");



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

    if (arrayChoice.length == 0) {
        $("#no_locations").removeClass("hide")
    } else { $("#no_locations").addClass("hide") };
};

function pagination(currentPage) {
    let btnNorth = $("#north_btn").hasClass("active");
    let btnSouth = $("#south_btn").hasClass("active");
    let btnEast = $("#east_btn").hasClass("active");
    let btnWest = $("#west_btn").hasClass("active");

    let array;
    if (btnNorth == true) { array = listingObjectNorth }
    else if (btnSouth == true) { array = listingObjectSouth }
    else if (btnEast == true) { array = listingObjectEast }
    else if (btnWest == true) { array = listingObjectWest }
    else { array = listingObjectCombined }
    console.log("array length", array.length)
    let pageCount = Math.ceil(array.length / itemsPerPage);

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
        initList(currentPage);
        $(".pagination-btn.active").removeClass("active");
        $(this).addClass("active");
    })
    return button;
}
pagination();
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
    $("#pagination_btns").addClass("hide");
    $("#map").removeClass("hide");
    closeBtn();
}

function showList() {
    $("#map").addClass("hide");
    $("#locations_list").removeClass("hide");
    $("#pagination_btns").removeClass("hide");
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