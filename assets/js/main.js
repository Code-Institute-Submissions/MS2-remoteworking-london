



function openInfoHome(loc_id) {
    let id = loc_id
    window.location.href = `/locations.html?&id=${id}`;
}



// Mobile - change dropdown menu on click
jQuery(function ($) {
    let width = screen.width;
    let mobile = (width <= 767);
    console.log(mobile)
    if (mobile == true) {
        $("#filter").addClass("collapse");
        //$("#filter > .filter-section:nth-child(1)").removeClass("mt-4");
    }
    $("#nav_collapse").click(() => {
        $("#nav_collapse > i").addClass("fa-times").removeClass("fa-bars");
        $(".homepage-overlay").toggleClass("mobile");
        $("#nav_collapse.collapsed > i").addClass("fa-bars").removeClass("fa-times");
    })
    $("#filter_mobile").click(() => {
        $("#filter_mobile > i").addClass("fa-times").removeClass("fa-filter");
        $("#filter_mobile.collapsed > i").addClass("fa-filter").removeClass("fa-times");
    })


});



// Pre-loader

$(window).on("load", function () {
    $(".pre-load-bg").fadeOut("medium");
})






// Show scroll to top button
$(document).ready(function () {
    $(".snap-scroll-parent").scroll(function () {
        let scrollLength = $(".snap-scroll-parent").scrollTop()
        if (scrollLength >= 150) {
            $(".to-top").removeClass("hide")
        } else {
            $(".to-top").addClass("hide")
        }
    });
    $('.to-top').on('click', function () {
        $('.snap-scroll-parent').animate({ scrollTop: 0 }, 300);
    });
});


// Initilialize Popper.js tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})




