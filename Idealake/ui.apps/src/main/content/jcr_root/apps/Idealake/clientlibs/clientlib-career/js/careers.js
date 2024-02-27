var winWidth = $(window).width();

function Tabs() {
    let t = function(t) {
        ! function() {
            let t = document.querySelectorAll("[data-tab]");
            for (let e = 0; e < t.length; e++) {
                t[e].classList.remove("active");
                let n = t[e].getAttribute("data-tab");
                document.getElementById(n).classList.remove("active")
            }
        }(), t.target.classList.add("active");
        let e = t.currentTarget.getAttribute("data-tab");
        document.getElementById(e).classList.add("active")
    };
    ! function() {
        let e = document.querySelectorAll("[data-tab]");
        for (let n = 0; n < e.length; n++) e[n].addEventListener("click", t, !1)
    }()
}

function rollupcounter() {
    document.querySelectorAll(".counter").forEach((t => {
        let e, n = [.../(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/.exec(t.textContent)],
            a = !0;
        for (n.shift(), n = n.filter((t => null != t)); t.firstChild;) t.removeChild(t.firstChild);
        for (let e of n)
            if (isNaN(e)) t.insertAdjacentHTML("beforeend", `<span>${e}</span>`);
            else
                for (let n = 0; n < e.length; n++) t.insertAdjacentHTML("beforeend", `<span data-value="${e[n]}">\n\t\t\t\t\t\t<span>0</span>\n\t\t\t\t\t\t${Array(parseInt(e[n]) + 1).join(0).split(0).map(((t, e) => `\n\t\t\t\t\t\t\t<span>${e}</span>\n\t\t\t\t\t\t`)).join("")}\n\t\t\t\t\t</span>`);
        e = [...t.querySelectorAll("span[data-value]")];
        let l = () => {
            let n = t.getBoundingClientRect().top,
                o = .8 * window.innerHeight;
            setTimeout((() => {
                a = !1
            }), 1e3), n < o && (setTimeout((() => {
                for (let t of e) {
                    let e = parseInt(t.getAttribute("data-value")) + 1;
                    t.style.transform = `translateY(-${100 * e}%)`
                }
            }), a ? 1e3 : 0), window.removeEventListener("scroll", l))
        };
        window.addEventListener("scroll", l), l()
    }))
}

function applyToFrom() {
    $('a[href^="#"]').on("click", (function(t) {
        t.preventDefault();
        let e = $(this.hash).offset().top;
        $("html, body").animate({
            scrollTop: e
        }, 300)
    }))
}
$(document).ready((function() {
    Tabs(), rollupcounter(), applyToFrom()
})), $(window).on("load resize", (function() {
    winWidth < 992 && (swiperAwards = new Swiper("#swiperAwards", {
        slidesPerView: 2.2,
        loop: !1,
        spaceBetween: 20,
        breakpoints: {
            768: {
                slidesPerView: 2.2
            },
            360: {
                slidesPerView: 1.2
            }
        }
    }))
}));