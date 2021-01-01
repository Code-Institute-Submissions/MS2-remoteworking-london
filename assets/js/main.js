// Show the sidebar details when 'read more' is clicked
function moreDetails(j) {
    $(`#sidebar_list_${[j]}`).removeClass("hide")
};

function searchField() {
    let search = $("#search").val();

    $(".marker").addClass("hide");
    $(".list_item").addClass("hide");
    $(`.list_item:contains(${search})`).removeClass("hide");
    $(`.infowindow:contains(${search})`).removeClass("hide");

} 

function showMap() {
    $("#locations_list").addClass("hide");
    $("#map").removeClass("hide");
}

function showList() {
    $("#map").addClass("hide");
    $("#locations_list").removeClass("hide");
}

jQuery(function ($) {
    $(".area-btn").click(function () {
        $(".area-btn").removeClass("active");
        $(this).addClass("active");
    });
})


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
        } else if (item.area === area )
            $(`#list_item_${li}`).removeClass("hide");
        
        else {
            $(`#list_item_${li}`).addClass("hide");
        }
    }
}