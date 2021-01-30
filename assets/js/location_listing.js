let currentPage = 1;
let itemsPerPage = 4;
let indexBegin = 0;
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
        arrayChoiceArea = request.filter(request => request.area === "North London")
    } else if (btnSouth == true) {
        arrayChoiceArea = request.filter(request => request.area === "South London")
    } else if (btnEast == true) {
        arrayChoiceArea = request.filter(request => request.area === "East London")
    } else if (btnWest == true) {
        arrayChoiceArea = request.filter(request => request.area === "West London")
    } else {
        arrayChoiceArea = request
    }

    // Sort the dates based on button value
    if (asc == true) {
        arrayChoiceArea.sort((a, b) => a.posted - b.posted);
    } else {
        arrayChoiceArea.sort((a, b) => b.posted - a.posted);

    }

    let arrayChoice;

    if (search == "") {
        arrayChoice = arrayChoiceArea
        console.log("current list", arrayChoice)
    } else {
        for (var i = 0; i < arrayChoiceArea.length; i++) {
            if (arrayChoiceArea === undefined) {
                $("#results_title").html(
                    `<div id="no_results" class="card fade-in"><h3>Looks like we're all out of ideas here. <i class="far fa-frown"></i> </h3><p>Try a different flavour or show all results for inspiration</p>
        <a href="locations.html"><button class="btn cta-btn">Show all results</button></a></div>`
                )
            } else {
                // Define what to search within the object
                let itemSearch = arrayChoiceArea[i]
                let itemContent = itemSearch.para + itemSearch.title + itemSearch.area + itemSearch.tags;
                let itemLower = itemContent.toLowerCase()
                if (itemContent.includes(search) || itemLower.includes(search))
                    searchResults.push(itemSearch)
            }
        }
        arrayChoice = searchResults;
    }

    $("#locations_list").html("");

    // Pagination code created with guidance from Tyler Potts YouTube tutorial: https://www.youtube.com/watch?v=IqYiVHrO2U8

    page--;
    let start = itemsPerPage * page;
    let end = start + itemsPerPage;
    let maxItems;

    // Determine what the max list of results should be based on full array set, sorted array set, and page

    if (itemsPerPage > arrayChoice.length) {
        maxItems = arrayChoice.length
    } else if (end < arrayChoice.length) {
        maxItems = end
    } else if (itemsPerPage < arrayChoice.length) {
        maxItems = arrayChoice.length - start
    } else {
        maxItems = itemsPerPage
    }

    console.log("start", start)
    console.log("end", end)
    console.log("max", maxItems)
    console.log("Array choice", arrayChoice)

    for (var j = start; j < start + maxItems; j++) {
        let item = arrayChoice[j];

        if (arrayChoice.length === 0) {
            return false;
            //         console.log("nothing here")
        } else {

            console.log("item", item)

            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            // Get the date posted from the object and create string for frontend. Credits to https://www.w3schools.com/js/js_date_methods.asp for date methods.
            let postedDate = item.posted;
            let formatted_date = postedDate.getDate() + " " + months[postedDate.getMonth()] + " " + postedDate.getFullYear();
            let paraWords = item.para.split(" ", 22);
            let paraWordLimit = paraWords.join(" ");
            let tags = item.tags;
            console.log(tags)



            if (arrayChoice != undefined) {
                $("#locations_list").append(
                    `<div class="d-flex card list-item mt-3" id="list_item_${[j]}" onclick="moreDetails(${[j]});">
                    <div class="list-item-img"><img
                            src="${item.photo_reference}"> alt="${item.title}"
                    </div>
                    <div class="location-info d-flex flex-column p-2">
                        <h4>${item.title}</h4>
                        <div class="d-flex"><div class="area-tag"><span>${item.area}</span></div><div class="location-tags flex-row" id="location_tags_${j}"></div></div>
                        <p class="list-item-date">Posted on: ${formatted_date}</p>
                        <p class="list-item-short-desc">${paraWordLimit}... <span onclick="moreDetails(${[j]});" class="read-more-trigger">Read More</span></p>
                        <button onclick="moreDetails(${[j]});" class="read-more-trigger d-lg-none d-xl-none d-xxl-none">Read More</button>
                    </div>
                    </div>`
                )

                for (var t = 0; t < tags.length; t++) {
                    let tag = tags[t];
                    $(`#location_tags_${j}`).append(
                        `<div class="loc-tag">${tag}</div>`
                    )
                }
            } else {
                $("#results_title").html(
                    `<div id="no_results" class="card fade-in"><h3>Looks like we're all out of ideas here. <i class="far fa-frown"></i> </h3><p>Try a different flavour or show all results for inspiration</p>
        <a href="locations.html"><button class="btn cta-btn">Show all results</button></a></div>`
                )
            }

        }

    }

    let mapActive = $("#map_btn").hasClass("filter-btn.active")

    if (arrayChoice.length === 0 && mapActive === false) {
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


    console.log("new index", indexBegin)
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


    item = request[j]

    const service = new google.maps.places.PlacesService(map);
    service.getDetails(item, (place, status) => {
        $("#sidebar_item_container").html("");
        initMap();
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            let tags = item.tags;
            console.log(place.formatted_address)
            $("#sidebar_item_container").append(

                `<div class="sidebar-item" id="sidebar_list_${[j]}">
                            <button onclick="closeBtn();hideOverlay();" class="btn close_btn"><i class="fas fa-times"></i></button>
                            <div class="sidebar-img-wrapper"><img src="${item.photo_reference}" alt="${place.name}"></div>
                            <div class="sidebar-content-wrapper p-4">
                            <h4>${place.name}</h4>
                            <div class="d-flex mb-2">
                            <div class="area-tag"><span>${item.area}</span></div>
                            <div class="location-tags flex-row" id="location_tags_${j}"></div>
                            </div>
                            <div class="d-flex flex-wrap mb-2">
                            <p class="p-0"><i class="fas fa-home"></i> ${place.formatted_address}</p>
                            <p class="p-0"><i class="fas fa-phone-square"></i> ${place.formatted_phone_number}</p>
                            </div>


<div class="sidebar-cta-btns d-flex">
<a href="${place.url}" target="_blank"><button class="btn sidebar-website-btn google-maps-trigger"><i class="fas fa-map-marker-alt"></i> View on Google Maps</button></a>
<a href="${place.website}" target="_blank"><button class="btn sidebar-website-btn">Visit Website</button></a>
</div>
                            <div class="hz-rule my-3"></div>
                            <p>${item.para}</p>
                            
<div class="hz-rule my-4"></div>
<h3 class="mb-3">Recent Google Reviews</h3>
                            <div id="google_reviews" class="google-reviews"></div>
<div class="d-flex mt-2 powered-by-google"><img
                                src="./assets/images/powered_by_google_on_white.png" alt="powered by Google"></div>
                            </div>
                            </div>`
            );
            console.log("opening hours", place.opening_hours.weekday_text)

// Add the tags to more info
            for (var t = 0; t < tags.length; t++) {
                    let tag = tags[t];
                    $(`#location_tags_${j}`).append(
                        `<div class="loc-tag">${tag}</div>`
                    )
                }

            // Sort the reviews to show most recent first. Credits for sort() method guidance: https://www.w3schools.com/jsref/jsref_sort.asp 
            let sortRevByDate = place.reviews.sort(function (a, b) { return b.time - a.time })

            for (var r = 0; r < 3; r++) {
                let review = sortRevByDate[r];
                let textSplit = review.text.split(" ", 22);
                let newReviewLength = textSplit.join(" ");
                $(`#google_reviews`).append(
                    `<div class="google-review d-flex flex-row">
                    <a class="review-auth-img" href="${review.author_url}" target="_blank"><img src="${review.profile_photo_url}" alt="${review.author_name}"></a>
                    <div class="d-flex flex-column">
                    <div class="d-flex flex-row flex-wrap">
                    <a class="review-auth" href="${review.author_url}" target="_blank">${review.author_name}</a>
                    <div class="star-ratings" id="star_rating_${r}"></div>
                    </div>
                    ${review.rating}, 
                    <p>${newReviewLength} &nbsp;<span class="review-posted">${review.relative_time_description}</span></p>
                    </div>
                    </div>`
                )

                // Guidance on star rating output from "I wrestled a bear once" on StackExchange thread: https://codereview.stackexchange.com/questions/177945/convert-rating-value-to-visible-stars-using-fontawesome-icons
                // Add a filled star for each iteration until maximum rating reached
                for (var star = 0; star < review.rating; star++) {
                    $(`#star_rating_${r}`).append(`<i class="fas fa-star"></i>`)
                    if (star === .5) {
                        $(`#star_rating_${r}`).append(`<i class="fas fa-star-half-alt"></i>`)
                    }
                }
                // If the rating is less than 5, fill the remaining section with blank stars up to 5 stars total
                if (review.rating < 5) {
                    let emptyStars = 5 - review.rating
                    for (var empty = 0; empty < emptyStars; empty++) {
                        $(`#star_rating_${r}`).append(`<i class="far fa-star"></i>`)
                    }
                }
            }
        }
    })




    $("#locations_sidebar").removeClass("hidden");
    $(".modal-overlay").addClass("show");
    //$(`#sidebar_list_${[j]}`).removeClass("hide");
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
    }, 100);
    if ($(".list-overlay").css({ "display": "none" }) == false) {
        hideOverlay();
    } else {
        return false
    }
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
    window.location.href = `./locations.html?&q=${search}`;
}

function showMap() {
    $(".location-list-wrapper").addClass("hide");
    $("#list_btn").removeClass("active");
    $("#search").val("")
    $("#map_btn").addClass("active");
    $("#map").removeClass("hide");
    $("#results_title").addClass("map")
    searchField("");
    closeBtn();
}

function showList() {
    $("#map").addClass("hide");
    $("#map_btn").removeClass("active");
    $("#list_btn").addClass("active");
    $(".location-list-wrapper").removeClass("hide");
    $("#results_title").removeClass("map")
};

function clearFilters() {
    $("#search").val("");
    $(".area-btn").removeClass("active");
    $("#all_btn").addClass("active");
    $(".sort-date").removeClass("active");
    $("#btn_des").addClass("active");
    initMap();
    showList();
    initList(currentPage);
}


// Filter markers by area only
function filterArea(area) {
    for (var i in filteredMarkers) {
        let marker = filteredMarkers[i];
        let areaBtn = $(".area-btn")

        google.maps.event.addListener(areaBtn, "click", function () {
            if (infowindow) {
                infowindow.close();
            }

        });

        if (marker.area === area || area.length === 0) {
            marker.setVisible(true);

        } else {
            marker.setVisible(false);
            google.maps.event.addListener(areaBtn, "click", function () {
                infowindow.close();
                closeBtn();
                return
            });
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