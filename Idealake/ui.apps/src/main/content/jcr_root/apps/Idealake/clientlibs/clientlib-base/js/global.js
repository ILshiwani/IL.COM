var winWidth = $(window).width()
  , winHeight = $(window).height();
function showscrollDiv() {
    $(this).scrollTop() > $(window).height() - $("header").outerHeight() ? $(".js_scrollTop").fadeIn() : $(".js_scrollTop").fadeOut()
}
function scrolltoTop() {
    $(document).on("click", ".js_scrollTop", (function() {
        return $("html, body").animate({
            scrollTop: 0
        }, "slow"),
        !1
    }
    ))
}
function Tab() {
    $(document).on("click", ".bs-tab .nav-item", (function() {
        $(this).parents(".nav-tabs").find(".nav-item").removeClass("active"),
        $(this).addClass("active");
        var e = $(this).index();
        $(this).parents(".bs-tab").find(".tab-pane").removeClass("active"),
        $(this).parents(".bs-tab").find(".tab-pane").eq(e).addClass("active")
    }
    ))
}
$(document).ready((function() {
    showscrollDiv(),
    scrolltoTop(),
    Tab(),
    winWidth <= 991 && $(".accordin-head").on("click", (function() {
        $(this).parents(".acc-cont").siblings(".acc-cont").find(".accordin-head").next(".accordin-content").slideUp(),
        $(this).parents(".acc-cont").siblings(".acc-cont").find(".accordin-head").removeClass("active"),
        $(this).siblings(".accordin-head").removeClass("active"),
        $(this).next().slideToggle(),
        $(this).siblings(".accordin-head").removeClass("active"),
        $(this).toggleClass("active")
    }
    ))
}
)),
$(window).on("load", (function() {
    setTimeout((function() {
        $(window).scrollTop(0)
    }
    ), 100)
}
));
const burgerMenu = document.getElementById("burger")
  , navbarMenu = document.getElementById("menu")
  , overlay = document.getElementById("md-layer");
burgerMenu.addEventListener("click", (()=>{
    burgerMenu.classList.toggle("is-active"),
    overlay.classList.toggle("is-active"),
    navbarMenu.classList.toggle("is-active"),
    navbarMenu.classList.contains("is-active") ? navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px" : navbarMenu.removeAttribute("style")
}
)),
$("h3").addClass("animated fadeIn");
