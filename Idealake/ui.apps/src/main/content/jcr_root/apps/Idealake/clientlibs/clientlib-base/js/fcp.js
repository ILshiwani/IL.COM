function lazyLoadImgs() {
    var t = [];
    function e() {
        for (var e = 0; e < t.length; e++)
            n = t[e],
            o = void 0,
            (o = n.getBoundingClientRect()).bottom >= 0 && o.right >= 0 && o.top <= (window.innerHeight || document.documentElement.clientHeight) && o.left <= (window.innerWidth || document.documentElement.clientWidth) && t[e].getAttribute("data-src") && (t[e].src = t[e].getAttribute("data-src"),
            t[e].removeAttribute("data-src"));
        var n, o;
        t = Array.prototype.filter.call(t, (function(t) {
            return t.getAttribute("data-src")
        }
        ))
    }
    function n(t, e) {
        window.addEventListener ? window.addEventListener(t, e) : window.attachEvent("on" + t, e)
    }
    n("load", (function() {
        t = document.querySelectorAll(".lazy")
    }
    )),
    n("load", e),
    n("scroll", e),
    n("resize", e),
    n("click", e)
}
function Menu() {
    $(window).width() > 767 && $(window).scroll((function() {
        $(window).scrollTop() >= 50 ? $("header").addClass("headmenu") : $("header").removeClass("headmenu")
    }
    )),
    $(window).width() < 991 && $("header").addClass("headmenu"),
    $(document).on("click", ".js-mobileMenu", (function() {
        $(this).toggleClass("open"),
        $(".nav-list").toggleClass("navaddbox")
    }
    ))
}
function hamburger() {
    $(".humburg-menu").click((function() {
        $(this).toggleClass("open"),
        $(".nav-list").toggleClass("active"),
        $(".cm-overlay").toggleClass("active"),
        $(".search-wrap").toggleClass("active")
    }
    ))
}
$(document).ready((function() {
    hamburger(),
    AOS.init({
        duration: 2e3,
        once: !0,
        disable: "mobile",
        offset: 150
    })
}
)),
$(window).on("load", (function() {
    setTimeout((function() {
        $("#loader").fadeOut(500)
    }
    ), 10)
}
)),
$(window).resize((function() {
    winWidth,
    winWidth
}
)),
lazyLoadImgs();
