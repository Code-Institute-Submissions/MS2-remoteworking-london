// Show the sidebar details when 'read more' is clicked
function moreDetails(j) {
    $(`#sidebar_list_${[j]}`).removeClass("hide")
};

function searchField() {
    let search = $("#search").val();
  //  let searchLc = $("#search").val().toTitleCase();
    
    $(".list_item").addClass("hide");
    $(`.list_item:contains(${search})`).removeClass("hide"); 
 //   $(`.list_item:contains(${searchLc})`).removeClass("hide"); 
} 