
// Create enter key function for search - users can hit enter vs click button to initiate search.
function enterKey() {
    document.getElementById("search").addEventListener('keyup', function (event) {
        if (event.keyCode === 13) {
            $(".search-btn").click();
        }
    });
}

// Mobile - change dropdown menu on click to hamburger nav
jQuery(function ($) {
    let width = screen.width;
    let mobile = (width <= 767);
    if (mobile == true) {
        $("#filter").addClass("collapse");
    }
    $("#nav_collapse").click(() => {
        $("#nav_collapse > i").addClass("fa-times").removeClass("fa-bars");
        $(".homepage-overlay").toggleClass("mobile");
        $("#nav_collapse.collapsed > i").addClass("fa-bars").removeClass("fa-times");
    });
    $("#filter_mobile").click(() => {
        $("#filter_mobile > i").addClass("fa-times").removeClass("fa-filter");
        $("#filter_mobile.collapsed > i").addClass("fa-filter").removeClass("fa-times");
    });
});


// Launch pre-loader and fadeout once page is loaded
$(window).on("load", function () {
    $(".pre-load-bg").fadeOut("medium");
});


// Show scroll to top button. On click smooth scroll to top of page
$(document).ready(function () {
    $(".snap-scroll-parent").scroll(function () {
        let scrollLength = $(".snap-scroll-parent").scrollTop();
        if (scrollLength >= 150) {
            $(".to-top").removeClass("hide");
        } else {
            $(".to-top").addClass("hide");
        }
    });
    $('.to-top').on('click', function () {
        $('.snap-scroll-parent').animate({ scrollTop: 0 }, 300);
    });
});


// Initilialize Popper.js tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});