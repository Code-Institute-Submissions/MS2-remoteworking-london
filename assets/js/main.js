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