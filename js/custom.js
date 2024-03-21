
//Sticky header script
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("header").addClass("stickyHeader");
    } else {
        $("header").removeClass("stickyHeader");
    }
});

//changing logo url in sticky
var initialSrc = "images/header-logo.png";
var scrollSrc = "images/header-logo.png";

$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 50)
        $(".logo").attr("src", scrollSrc);
    else
        $(".logo").attr("src", initialSrc);
});

