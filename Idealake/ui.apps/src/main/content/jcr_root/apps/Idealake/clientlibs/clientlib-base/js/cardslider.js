!function(a, b, c, d) {
    "use strict";
    function e(b, c) {
        this.element = b,
        this.settings = a.extend({}, g, c),
        this._defaults = g,
        this._name = f,
        this._cards = [],
        this._activeCard = null,
        this._directionClass = "direction-" + this.settings.direction,
        this._$dotnav = null,
        this._$directionnav = null,
        this.init()
    }
    var f = "cardslider"
      , g = {
        keys: {
            next: 38,
            prev: 40
        },
        direction: "down",
        nav: !0,
        swipe: !1,
        dots: !1,
        beforeCardChange: null,
        afterCardChange: null
    };
    a.extend(e.prototype, {
        init: function() {
            this.initCards(),
            this.settings.nav && this.initNav(),
            this.settings.dots && this.initDots(),
            a.event.special.swipe && this.settings.swipe && this.initSwipe(),
            this.settings.keys !== !1 && a(b).on("keydown", this.keyNav.bind(this)),
            this.changeCardTo(0)
        },
        initCards: function() {
            var b = a(this.element);
            b.addClass("cardslider " + this._directionClass);
            var c = b.find("> ul");
            c.addClass("cardslider-cards");
            for (var d = c.find("li"), e = 1, f = 0, g = 255, h = 0; h < d.length; h++) {
                var i = {
                    $elem: a(d[h]),
                    active: 0 === h,
                    index: h,
                    cardClass: "card-" + h
                };
                i.$elem.addClass("cardslider-card " + i.cardClass),
                i.$elem.css({
                    "z-index": d.length - h
                }),
                this._cards.push(i),
                e -= .05,
                f -= 20,
                g -= 10
            }
        },
        initNav: function() {
            this._$directionnav = a('<div class="cardslider-direction-nav" />');
            var b = a('<button title="next" class="cardslider-nav-next">Next</button>')
              , c = a('<button title="previous" class="cardslider-nav-prev">Prev</button>');
            b.on("click", this.nextCard.bind(this)),
            c.on("click", this.prevCard.bind(this)),
            this._$directionnav.append(b),
            this._$directionnav.append(c),
            a(this.element).append(this._$directionnav)
        },
        initDots: function() {
            var b = this;
            this._$dotnav = a('<ul class="cardslider-dots-nav" />');
            for (var c = 0; c < this._cards.length; c++) {
                var d = a('<a href="#" />');
                d.attr("data-slide", c),
                d.on("click", function(c) {
                    c.preventDefault(),
                    b.changeCardTo(a(this).data("slide"))
                });
                var e = a('<li aria-hidden="true" class="cardslider-dot" />');
                this._$dotnav.append(e.append(d))
            }
            a(this.element).append(this._$dotnav)
        },
        initSwipe: function() {
            a(this.element).find(".cardslider-cards").on("swipeup", this.prevCard.bind(this)),
            a(this.element).find(".cardslider-cards").on("swipedown", this.nextCard.bind(this))
        },
        keyNav: function(a) {
            a.keyCode == this.settings.keys.next ? (a.preventDefault(),
            this.nextCard()) : a.keyCode == this.settings.keys.prev && (a.preventDefault(),
            this.prevCard())
        },
        nextCard: function() {
            this._activeCard.index + 1 < this._cards.length && this.changeCardTo(this._activeCard.index + 1)
        },
        prevCard: function() {
            this._activeCard.index - 1 >= 0 && this.changeCardTo(this._activeCard.index - 1)
        },
        changeCardTo: function(a) {
            if ("string" == typeof a && (a = "first" == a ? 0 : this._cards.length - 1),
            "function" == typeof this.settings.beforeCardChange && this.settings.beforeCardChange(this._activeCard.index),
            this._activeCard && a > this._activeCard.index || !this._activeCard && a > 0)
                for (var b = 0; a > b; b++)
                    this._cards[b].$elem.addClass("out"),
                    this._cards[b].$elem.attr("aria-hidden", !0);
            else
                for (var b = this._cards.length - 1; b > a; b--)
                    this._cards[b].$elem.addClass("out"),
                    this._cards[b].$elem.attr("aria-hidden", !0);
            return this.settings.dots && (this._$dotnav.find("li.active").removeClass("active"),
            this._$dotnav.find("li").eq(a).addClass("active")),
            this._activeCard = this._cards[a],
            this._activeCard.$elem.attr("aria-hidden", !1),
            this.reorderCardClasses(a),
            "function" == typeof this.settings.afterCardChange && this.settings.afterCardChange(a),
            this
        },
        reorderCardClasses: function(a) {
            for (var b = 0; b < this._cards.length; b++) {
                var c = this._cards[b];
                b - a >= 0 ? (c.$elem.removeClass(function(a, b) {
                    return (b.match(/card-.*/g) || []).join(" ")
                }),
                c.$elem.addClass(this._cards[b - a].cardClass)) : c.$elem.addClass(this._outClass)
            }
        },
        destroy: function() {
            var b = a(this.element)
              , c = b.find(".cardslider-cards");
            return b.removeClass("cardslider"),
            c.removeClass("cardslider-cards"),
            c.find(".cardslider-card").removeClass(function(a, b) {
                return (b.match(/card.*/g) || []).join(" ")
            }).removeAttr("style"),
            this._$dotnav.remove(),
            this._$dotnav = null,
            this._$directionnav.remove(),
            this._$directionnav = null,
            this._cards = [],
            this._activeCard = null,
            this
        }
    }),
    a.fn[f] = function(b) {
        return this.each(function() {
            a.data(this, f) || a.data(this, f, new e(this,b))
        })
    }
}(jQuery, window, document);
