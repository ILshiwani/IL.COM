var winWidth = $(window).width(),
   winHeight = $(window).height();

function myslider() {
   var t = $(".my-slider").cardslider({
      swipe: !0,
      direction: "up",
      afterCardChange: function (t, e) {
         arroweffect(), $(`.Thumbwrap a[data-slide=${t+1}]`).addClass("active").siblings().removeClass("active")
      }
   }).data("cardslider");
   $(document).on("click", ".Thumbwrap a", (function (e) {
      e.preventDefault(), $(this).addClass("active").siblings().removeClass("active");
      var a = $(this).attr("data-slide") - 1;
      t.changeCardTo(parseInt(a))
   })), 0 == $(".cardslider-cards").find("li.out").length && $(".cardslider-nav-prev").addClass("disabled")
}

function arroweffect() {
   var t = $(".cardslider-cards").find("li.cardslider-card").length,
      e = $(".cardslider-cards").find("li.out").length;
   0 == e ? $(".cardslider-nav-prev").addClass("disabled") : $(".cardslider-nav-prev").removeClass("disabled"), t - 1 == e ? $(".cardslider-nav-next").addClass("disabled") : $(".cardslider-nav-next").removeClass("disabled")
}

function setSliderHeight() {
   var t = $(".cardslider .cardslider-card").attr("aria-hidden", "true").outerHeight(!0);
   $("ul.cardslider-cards").css({
      height: t
   })
}

function tabs() {
   var t = $(".js_tab .tab-cont.active").attr("tabid");
   if ($("#" + t).fadeIn("slow"), $(".js_tab .tab-cont").click((function () {
         $(this).addClass("active").siblings().removeClass("active");
         var t = $(this).attr("tabid");
         $(".js_tab .tab-content").hide(), $("#" + t).fadeIn("slow")
      })), winWidth < 768) {
      var e = $(".js_tab .tab-cont.active").outerWidth(),
         a = $(".tab-name").outerWidth();
      let t = a / 3 - e / a;
      var i = 0,
         s = 0;
      let d = 1;
      $(".js_tab .tab-cont").each((function () {
         if (1 !== d) {
            let e = $(this).outerWidth();
            (s += e) > t ? (i = s - t, $(this).closest(".tab-cont").attr("data-step", i)) : $(this).closest(".tab-cont").attr("data-step", 0)
         } else d += 1, $(this).closest(".tab-cont").attr("data-step", 0);
         $(".js_tab .tab-cont").on("click", (function () {
            let t = $(this).data("step");
            $(".tab-cont-wrap").animate({
               scrollLeft: t
            }, 200)
         }))
      }))
   }
}

function rollupcounter() {
   document.querySelectorAll(".counter").forEach((t => {
      let e, a = [.../(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/.exec(t.textContent)],
         i = !0;
      for (a.shift(), a = a.filter((t => null != t)); t.firstChild;) t.removeChild(t.firstChild);
      for (let e of a)
         if (isNaN(e)) t.insertAdjacentHTML("beforeend", `<span>${e}</span>`);
         else
            for (let a = 0; a < e.length; a++) t.insertAdjacentHTML("beforeend", `<span data-value="${e[a]}">\n\t\t\t\t\t\t<span>0</span>\n\t\t\t\t\t\t${Array(parseInt(e[a])+1).join(0).split(0).map(((t,e)=>`\n\t\t\t\t\t\t\t<span>${e}</span>\n\t\t\t\t\t\t`)).join("")}\n\t\t\t\t\t</span>`);
      e = [...t.querySelectorAll("span[data-value]")];
      let s = () => {
         let a = t.getBoundingClientRect().top,
            d = .8 * window.innerHeight;
         setTimeout((() => {
            i = !1
         }), 1e3), a < d && (setTimeout((() => {
            for (let t of e) {
               let e = parseInt(t.getAttribute("data-value")) + 1;
               t.style.transform = `translateY(-${100*e}%)`
            }
         }), i ? 1e3 : 0), window.removeEventListener("scroll", s))
      };
      window.addEventListener("scroll", s), s()
   }))
}
$(document).ready((function () {
   myslider(), tabs(), winWidth <= 1024 && $(".card").slice("4", "12").hide(), rollupcounter()
})), $("#load").click((function (t) {
   t.preventDefault(), $(".card:hidden").slice(0, 2).show(), 0 == $(".card:hidden").length && $("#load").css("display", "none")
}));