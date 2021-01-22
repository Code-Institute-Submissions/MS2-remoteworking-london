



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
        $(".navbar-expand-lg").addClass("pb-0");
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



// Show scroll to top button 
$(window).on('scroll', function () {
    let scrollLength = $(document).scrollTop()
    if (scrollLength >= 50) {
        $("#to_top").removeClass("hide")
    } else {
        $("#to_top").addClass("hide")
    }
});


// Pre-loader

$(window).on("load", function(){
 $(".pre-load-bg").fadeOut("medium");   
})


// Smooth scrolling



/// ==== CREDIT https://codepen.io/damianocel/pen/EVpqNJ

$(window).scroll(function () {
    var top = $("#top_page");
    if ($('body').height() <= ($(window).height() + $(window).scrollTop() + 200)) {
        top.animate({ "top": "0" }, 1500);
    } else {
        //top.animate({"margin-left": "-100%"},1500);
    }
});

$(".to-top").on('click', function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
});


// Initilialize Popper.js tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


// new credits: https://www.youtube.com/watch?v=IqYiVHrO2U8 

// =======
// =======

