/**
 * Minified by jsDelivr using Terser v5.9.0.
 * Original file: /npm/malihu-custom-scrollbar-plugin-3.1.7@3.1.7/jquery.mCustomScrollbar.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}((function(e) {
    var t, o, a, n, i, r, l, s, c, d, u, f, h, m, p, g, v, x, _, w, S, b, C, y, B, T, k, M, O, I, D, E, W, R, A, L, z, P, H, U, F, q, j, Y, X, N, V, Q, G, J, K, Z, $, ee, te, oe, ae, ne, ie, re, le;
    ie = "function" == typeof define && define.amd,
    re = "undefined" != typeof module && module.exports,
    le = "https:" == document.location.protocol ? "https:" : "http:",
    ie || (re ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + le + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))),
    o = "mCustomScrollbar",
    a = "mCS",
    n = ".mCustomScrollbar",
    i = {
        setTop: 0,
        setLeft: 0,
        axis: "y",
        scrollbarPosition: "inside",
        scrollInertia: 950,
        autoDraggerLength: !0,
        alwaysShowScrollbar: 0,
        snapOffset: 0,
        mouseWheel: {
            enable: !0,
            scrollAmount: "auto",
            axis: "y",
            deltaFactor: "auto",
            disableOver: ["select", "option", "keygen", "datalist", "textarea"]
        },
        scrollButtons: {
            scrollType: "stepless",
            scrollAmount: "auto"
        },
        keyboard: {
            enable: !0,
            scrollType: "stepless",
            scrollAmount: "auto"
        },
        contentTouchScroll: 25,
        documentTouchScroll: !0,
        advanced: {
            autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
            updateOnContentResize: !0,
            updateOnImageLoad: "auto",
            autoUpdateTimeout: 60
        },
        theme: "light",
        callbacks: {
            onTotalScrollOffset: 0,
            onTotalScrollBackOffset: 0,
            alwaysTriggerOffsets: !0
        }
    },
    r = 0,
    l = {},
    s = window.attachEvent && !window.addEventListener ? 1 : 0,
    c = !1,
    d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
    u = {
        init: function(t) {
            t = e.extend(!0, {}, i, t);
            var o = f.call(this);
            if (t.live) {
                var s = t.liveSelector || this.selector || n
                  , c = e(s);
                if ("off" === t.live)
                    return void m(s);
                l[s] = setTimeout((function() {
                    c.mCustomScrollbar(t),
                    "once" === t.live && c.length && m(s)
                }
                ), 500)
            } else
                m(s);
            return t.setWidth = t.set_width ? t.set_width : t.setWidth,
            t.setHeight = t.set_height ? t.set_height : t.setHeight,
            t.axis = t.horizontalScroll ? "x" : p(t.axis),
            t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia,
            "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                preventDefault: !1,
                deltaFactor: "auto",
                normalizeDelta: !1,
                invert: !1
            }),
            t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount,
            t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta,
            t.scrollButtons.scrollType = g(t.scrollButtons.scrollType),
            h(t),
            e(o).each((function() {
                var o = e(this);
                if (!o.data(a)) {
                    o.data(a, {
                        idx: ++r,
                        opt: t,
                        scrollRatio: {
                            y: null,
                            x: null
                        },
                        overflowed: null,
                        contentReset: {
                            y: null,
                            x: null
                        },
                        bindEvents: !1,
                        tweenRunning: !1,
                        sequential: {},
                        langDir: o.css("direction"),
                        cbOffsets: null,
                        trigger: null,
                        poll: {
                            size: {
                                o: 0,
                                n: 0
                            },
                            img: {
                                o: 0,
                                n: 0
                            },
                            change: {
                                o: 0,
                                n: 0
                            }
                        }
                    });
                    var n = o.data(a)
                      , i = n.opt
                      , l = o.data("mcs-axis")
                      , s = o.data("mcs-scrollbar-position")
                      , c = o.data("mcs-theme");
                    l && (i.axis = l),
                    s && (i.scrollbarPosition = s),
                    c && (i.theme = c,
                    h(i)),
                    v.call(this),
                    n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this),
                    e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]),
                    u.update.call(null, o)
                }
            }
            ))
        },
        update: function(t, o) {
            var n = t || f.call(this);
            return e(n).each((function() {
                var t = e(this);
                if (t.data(a)) {
                    var n = t.data(a)
                      , i = n.opt
                      , r = e("#mCSB_" + n.idx + "_container")
                      , l = e("#mCSB_" + n.idx)
                      , s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                    if (!r.length)
                        return;
                    n.tweenRunning && Q(t),
                    o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this),
                    t.hasClass(d[3]) && t.removeClass(d[3]),
                    t.hasClass(d[4]) && t.removeClass(d[4]),
                    l.css("max-height", "none"),
                    l.height() !== t.height() && l.css("max-height", t.height()),
                    _.call(this),
                    "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)),
                    n.overflowed = y.call(this),
                    M.call(this),
                    i.autoDraggerLength && S.call(this),
                    b.call(this),
                    T.call(this);
                    var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
                    "x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (G(t, c[0].toString(), {
                        dir: "y",
                        dur: 0,
                        overwrite: "none"
                    }),
                    n.contentReset.y = null) : (B.call(this),
                    "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && G(t, c[1].toString(), {
                        dir: "x",
                        dur: 0,
                        overwrite: "none"
                    }))),
                    "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (G(t, c[1].toString(), {
                        dir: "x",
                        dur: 0,
                        overwrite: "none"
                    }),
                    n.contentReset.x = null) : (B.call(this),
                    "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && G(t, c[0].toString(), {
                        dir: "y",
                        dur: 0,
                        overwrite: "none"
                    }))),
                    o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)),
                    N.call(this)
                }
            }
            ))
        },
        scrollTo: function(t, o) {
            if (void 0 !== t && null != t) {
                var n = f.call(this);
                return e(n).each((function() {
                    var n = e(this);
                    if (n.data(a)) {
                        var i = n.data(a)
                          , r = i.opt
                          , l = {
                            trigger: "external",
                            scrollInertia: r.scrollInertia,
                            scrollEasing: "mcsEaseInOut",
                            moveDragger: !1,
                            timeout: 60,
                            callbacks: !0,
                            onStart: !0,
                            onUpdate: !0,
                            onComplete: !0
                        }
                          , s = e.extend(!0, {}, l, o)
                          , c = Y.call(this, t)
                          , d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                        c[0] = X.call(this, c[0], "y"),
                        c[1] = X.call(this, c[1], "x"),
                        s.moveDragger && (c[0] *= i.scrollRatio.y,
                        c[1] *= i.scrollRatio.x),
                        s.dur = ne() ? 0 : d,
                        setTimeout((function() {
                            null !== c[0] && void 0 !== c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y",
                            s.overwrite = "all",
                            G(n, c[0].toString(), s)),
                            null !== c[1] && void 0 !== c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x",
                            s.overwrite = "none",
                            G(n, c[1].toString(), s))
                        }
                        ), s.timeout)
                    }
                }
                ))
            }
        },
        stop: function() {
            var t = f.call(this);
            return e(t).each((function() {
                var t = e(this);
                t.data(a) && Q(t)
            }
            ))
        },
        disable: function(t) {
            var o = f.call(this);
            return e(o).each((function() {
                var o = e(this);
                o.data(a) && (o.data(a),
                N.call(this, "remove"),
                k.call(this),
                t && B.call(this),
                M.call(this, !0),
                o.addClass(d[3]))
            }
            ))
        },
        destroy: function() {
            var t = f.call(this);
            return e(t).each((function() {
                var n = e(this);
                if (n.data(a)) {
                    var i = n.data(a)
                      , r = i.opt
                      , l = e("#mCSB_" + i.idx)
                      , s = e("#mCSB_" + i.idx + "_container")
                      , c = e(".mCSB_" + i.idx + "_scrollbar");
                    r.live && m(r.liveSelector || e(t).selector),
                    N.call(this, "remove"),
                    k.call(this),
                    B.call(this),
                    n.removeData(a),
                    $(this, "mcs"),
                    c.remove(),
                    s.find("img." + d[2]).removeClass(d[2]),
                    l.replaceWith(s.contents()),
                    n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
                }
            }
            ))
        }
    },
    f = function() {
        return "object" != typeof e(this) || e(this).length < 1 ? n : this
    }
    ,
    h = function(t) {
        var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]
          , a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"]
          , n = ["minimal", "minimal-dark"]
          , i = ["minimal", "minimal-dark"]
          , r = ["minimal", "minimal-dark"];
        t.autoDraggerLength = !(e.inArray(t.theme, o) > -1) && t.autoDraggerLength,
        t.autoExpandScrollbar = !(e.inArray(t.theme, a) > -1) && t.autoExpandScrollbar,
        t.scrollButtons.enable = !(e.inArray(t.theme, n) > -1) && t.scrollButtons.enable,
        t.autoHideScrollbar = e.inArray(t.theme, i) > -1 || t.autoHideScrollbar,
        t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition
    }
    ,
    m = function(e) {
        l[e] && (clearTimeout(l[e]),
        $(l, e))
    }
    ,
    p = function(e) {
        return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
    }
    ,
    g = function(e) {
        return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
    }
    ,
    v = function() {
        var t = e(this)
          , n = t.data(a)
          , i = n.opt
          , r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : ""
          , l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div></div><div class='mCSB_draggerRail' /></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div></div><div class='mCSB_draggerRail' /></div>"]
          , s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical"
          , c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0]
          , u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : ""
          , f = i.autoHideScrollbar ? " " + d[6] : ""
          , h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
        i.setWidth && t.css("width", i.setWidth),
        i.setHeight && t.css("height", i.setHeight),
        i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft,
        t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + n.langDir + "' /></div>");
        var m = e("#mCSB_" + n.idx)
          , p = e("#mCSB_" + n.idx + "_container");
        "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)),
        "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"),
        t.css("overflow", "visible"),
        m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c),
        p.wrap(u)),
        w.call(this);
        var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
        g[0].css("min-height", g[0].height()),
        g[1].css("min-width", g[1].width())
    }
    ,
    x = function(t) {
        var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map((function() {
            return e(this).outerWidth(!0)
        }
        )).get())]
          , a = t.parent().width();
        return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%"
    }
    ,
    _ = function() {
        var t = e(this).data(a)
          , o = t.opt
          , n = e("#mCSB_" + t.idx + "_container");
        if (o.advanced.autoExpandHorizontalScroll && "y" !== o.axis) {
            n.css({
                width: "auto",
                "min-width": 0,
                "overflow-x": "scroll"
            });
            var i = Math.ceil(n[0].scrollWidth);
            3 === o.advanced.autoExpandHorizontalScroll || 2 !== o.advanced.autoExpandHorizontalScroll && i > n.parent().width() ? n.css({
                width: i,
                "min-width": "100%",
                "overflow-x": "inherit"
            }) : n.css({
                "overflow-x": "inherit",
                position: "absolute"
            }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                width: Math.ceil(n[0].getBoundingClientRect().right + .4) - Math.floor(n[0].getBoundingClientRect().left),
                "min-width": "100%",
                position: "relative"
            }).unwrap()
        }
    }
    ,
    w = function() {
        var t = e(this).data(a)
          , o = t.opt
          , n = e(".mCSB_" + t.idx + "_scrollbar:first")
          , i = oe(o.scrollButtons.tabindex) ? "tabindex='" + o.scrollButtons.tabindex + "'" : ""
          , r = ["<a href='#' class='" + d[13] + "' " + i + " />", "<a href='#' class='" + d[14] + "' " + i + " />", "<a href='#' class='" + d[15] + "' " + i + " />", "<a href='#' class='" + d[16] + "' " + i + " />"]
          , l = ["x" === o.axis ? r[2] : r[0], "x" === o.axis ? r[3] : r[1], r[2], r[3]];
        o.scrollButtons.enable && n.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
    }
    ,
    S = function() {
        var t = e(this).data(a)
          , o = e("#mCSB_" + t.idx)
          , n = e("#mCSB_" + t.idx + "_container")
          , i = [e("#mCSB_" + t.idx + "_dragger_vertical"), e("#mCSB_" + t.idx + "_dragger_horizontal")]
          , r = [o.height() / n.outerHeight(!1), o.width() / n.outerWidth(!1)]
          , l = [parseInt(i[0].css("min-height")), Math.round(r[0] * i[0].parent().height()), parseInt(i[1].css("min-width")), Math.round(r[1] * i[1].parent().width())]
          , c = s && l[1] < l[0] ? l[0] : l[1]
          , d = s && l[3] < l[2] ? l[2] : l[3];
        i[0].css({
            height: c,
            "max-height": i[0].parent().height() - 10
        }).find(".mCSB_dragger_bar").css({
            "line-height": l[0] + "px"
        }),
        i[1].css({
            width: d,
            "max-width": i[1].parent().width() - 10
        })
    }
    ,
    b = function() {
        var t = e(this).data(a)
          , o = e("#mCSB_" + t.idx)
          , n = e("#mCSB_" + t.idx + "_container")
          , i = [e("#mCSB_" + t.idx + "_dragger_vertical"), e("#mCSB_" + t.idx + "_dragger_horizontal")]
          , r = [n.outerHeight(!1) - o.height(), n.outerWidth(!1) - o.width()]
          , l = [r[0] / (i[0].parent().height() - i[0].height()), r[1] / (i[1].parent().width() - i[1].width())];
        t.scrollRatio = {
            y: l[0],
            x: l[1]
        }
    }
    ,
    C = function(e, t, o) {
        var a = o ? d[0] + "_expanded" : ""
          , n = e.closest(".mCSB_scrollTools");
        "active" === t ? (e.toggleClass(d[0] + " " + a),
        n.toggleClass(d[1]),
        e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]),
        n.removeClass(d[1])) : (e.addClass(d[0]),
        n.addClass(d[1])))
    }
    ,
    y = function() {
        var t = e(this).data(a)
          , o = e("#mCSB_" + t.idx)
          , n = e("#mCSB_" + t.idx + "_container")
          , i = null == t.overflowed ? n.height() : n.outerHeight(!1)
          , r = null == t.overflowed ? n.width() : n.outerWidth(!1)
          , l = n[0].scrollHeight
          , s = n[0].scrollWidth;
        return l > i && (i = l),
        s > r && (r = s),
        [i > o.height(), r > o.width()]
    }
    ,
    B = function() {
        var t, o, n = e(this), i = n.data(a), r = i.opt, l = e("#mCSB_" + i.idx), s = e("#mCSB_" + i.idx + "_container"), c = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")];
        Q(n),
        ("x" !== r.axis && !i.overflowed[0] || "y" === r.axis && i.overflowed[0]) && (c[0].add(s).css("top", 0),
        G(n, "_resetY")),
        ("y" !== r.axis && !i.overflowed[1] || "x" === r.axis && i.overflowed[1]) && (t = o = 0,
        "rtl" === i.langDir && (t = l.width() - s.outerWidth(!1),
        o = Math.abs(t / i.scrollRatio.x)),
        s.css("left", t),
        c[1].css("left", o),
        G(n, "_resetX"))
    }
    ,
    T = function() {
        var t = e(this)
          , o = t.data(a)
          , n = o.opt;
        if (!o.bindEvents) {
            if (I.call(this),
            n.contentTouchScroll && D.call(this),
            E.call(this),
            n.mouseWheel.enable) {
                function i() {
                    r = setTimeout((function() {
                        e.event.special.mousewheel ? (clearTimeout(r),
                        W.call(t[0])) : i()
                    }
                    ), 100)
                }
                var r;
                i()
            }
            P.call(this),
            U.call(this),
            n.advanced.autoScrollOnFocus && H.call(this),
            n.scrollButtons.enable && F.call(this),
            n.keyboard.enable && q.call(this),
            o.bindEvents = !0
        }
    }
    ,
    k = function() {
        var t = e(this)
          , o = t.data(a)
          , n = o.opt
          , i = a + "_" + o.idx
          , r = ".mCSB_" + o.idx + "_scrollbar"
          , l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a")
          , s = e("#mCSB_" + o.idx + "_container");
        if (n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)),
        n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)),
        o.bindEvents) {
            var c = A() ? top.document : document;
            e(document).add(e(c)).unbind("." + i),
            l.each((function() {
                e(this).unbind("." + i)
            }
            )),
            clearTimeout(t[0]._focusTimeout),
            $(t[0], "_focusTimeout"),
            clearTimeout(o.sequential.step),
            $(o.sequential, "step"),
            clearTimeout(s[0].onCompleteTimeout),
            $(s[0], "onCompleteTimeout"),
            o.bindEvents = !1
        }
    }
    ,
    M = function(t) {
        var o = e(this)
          , n = o.data(a)
          , i = n.opt
          , r = e("#mCSB_" + n.idx + "_container_wrapper")
          , l = r.length ? r : e("#mCSB_" + n.idx + "_container")
          , s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")]
          , c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
        "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"),
        l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"),
        l.removeClass(d[10])) : (s[0].css("display", "none"),
        l.addClass(d[10])),
        l.addClass(d[8]))),
        "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"),
        l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"),
        l.removeClass(d[11])) : (s[1].css("display", "none"),
        l.addClass(d[11])),
        l.addClass(d[9]))),
        n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5])
    }
    ,
    O = function(t) {
        var o = t.type
          , a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null
          , n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
        switch (o) {
        case "pointerdown":
        case "MSPointerDown":
        case "pointermove":
        case "MSPointerMove":
        case "pointerup":
        case "MSPointerUp":
            return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
        case "touchstart":
        case "touchmove":
        case "touchend":
            var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0]
              , r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
            return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];
        default:
            return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1]
        }
    }
    ,
    I = function() {
        var t, o, n, i = e(this), r = i.data(a), l = r.opt, d = a + "_" + r.idx, u = ["mCSB_" + r.idx + "_dragger_vertical", "mCSB_" + r.idx + "_dragger_horizontal"], f = e("#mCSB_" + r.idx + "_container"), h = e("#" + u[0] + ",#" + u[1]), m = l.advanced.releaseDraggableSelectors ? h.add(e(l.advanced.releaseDraggableSelectors)) : h, p = A() ? top.document : document, g = l.advanced.extraDraggableSelectors ? e(p).add(e(l.advanced.extraDraggableSelectors)) : e(p);
        function v(e, o, a, n) {
            if (f[0].idleTimer = l.scrollInertia < 233 ? 250 : 0,
            t.attr("id") === u[1])
                var s = "x"
                  , c = (t[0].offsetLeft - o + n) * r.scrollRatio.x;
            else
                s = "y",
                c = (t[0].offsetTop - e + a) * r.scrollRatio.y;
            G(i, c.toString(), {
                dir: s,
                drag: !0
            })
        }
        h.bind("contextmenu." + d, (function(e) {
            e.preventDefault()
        }
        )).bind("mousedown." + d + " touchstart." + d + " pointerdown." + d + " MSPointerDown." + d, (function(a) {
            if (a.stopImmediatePropagation(),
            a.preventDefault(),
            ee(a)) {
                c = !0,
                s && (document.onselectstart = function() {
                    return !1
                }
                ),
                L.call(f, !1),
                Q(i);
                var r = (t = e(this)).offset()
                  , d = O(a)[0] - r.top
                  , u = O(a)[1] - r.left
                  , h = t.height() + r.top
                  , m = t.width() + r.left;
                d < h && d > 0 && u < m && u > 0 && (o = d,
                n = u),
                C(t, "active", l.autoExpandScrollbar)
            }
        }
        )).bind("touchmove." + d, (function(e) {
            e.stopImmediatePropagation(),
            e.preventDefault();
            var a = t.offset()
              , i = O(e)[0] - a.top
              , r = O(e)[1] - a.left;
            v(o, n, i, r)
        }
        )),
        e(document).add(g).bind("mousemove." + d + " pointermove." + d + " MSPointerMove." + d, (function(e) {
            if (t) {
                var a = t.offset()
                  , i = O(e)[0] - a.top
                  , r = O(e)[1] - a.left;
                if (o === i && n === r)
                    return;
                v(o, n, i, r)
            }
        }
        )).add(m).bind("mouseup." + d + " touchend." + d + " pointerup." + d + " MSPointerUp." + d, (function(e) {
            t && (C(t, "active", l.autoExpandScrollbar),
            t = null),
            c = !1,
            s && (document.onselectstart = null),
            L.call(f, !0)
        }
        ))
    }
    ,
    D = function() {
        var o, n, i, r, l, s, d, u, f, h, m, p, g, v, x = e(this), _ = x.data(a), w = _.opt, S = a + "_" + _.idx, b = e("#mCSB_" + _.idx), C = e("#mCSB_" + _.idx + "_container"), y = [e("#mCSB_" + _.idx + "_dragger_vertical"), e("#mCSB_" + _.idx + "_dragger_horizontal")], B = [], T = [], k = 0, M = "yx" === w.axis ? "none" : "all", I = [], D = C.find("iframe"), E = ["touchstart." + S + " pointerdown." + S + " MSPointerDown." + S, "touchmove." + S + " pointermove." + S + " MSPointerMove." + S, "touchend." + S + " pointerup." + S + " MSPointerUp." + S], W = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
        function R(e) {
            if (!te(e) || c || O(e)[2])
                t = 0;
            else {
                t = 1,
                g = 0,
                v = 0,
                o = 1,
                x.removeClass("mCS_touch_action");
                var a = C.offset();
                n = O(e)[0] - a.top,
                i = O(e)[1] - a.left,
                I = [O(e)[0], O(e)[1]]
            }
        }
        function L(e) {
            if (te(e) && !c && !O(e)[2] && (w.documentTouchScroll || e.preventDefault(),
            e.stopImmediatePropagation(),
            (!v || g) && o)) {
                d = K();
                var t = b.offset()
                  , a = O(e)[0] - t.top
                  , r = O(e)[1] - t.left
                  , l = "mcsLinearOut";
                if (B.push(a),
                T.push(r),
                I[2] = Math.abs(O(e)[0] - I[0]),
                I[3] = Math.abs(O(e)[1] - I[1]),
                _.overflowed[0])
                    var s = y[0].parent().height() - y[0].height()
                      , u = n - a > 0 && a - n > -s * _.scrollRatio.y && (2 * I[3] < I[2] || "yx" === w.axis);
                if (_.overflowed[1])
                    var f = y[1].parent().width() - y[1].width()
                      , h = i - r > 0 && r - i > -f * _.scrollRatio.x && (2 * I[2] < I[3] || "yx" === w.axis);
                u || h ? (W || e.preventDefault(),
                g = 1) : (v = 1,
                x.addClass("mCS_touch_action")),
                W && e.preventDefault(),
                m = "yx" === w.axis ? [n - a, i - r] : "x" === w.axis ? [null, i - r] : [n - a, null],
                C[0].idleTimer = 250,
                _.overflowed[0] && U(m[0], k, l, "y", "all", !0),
                _.overflowed[1] && U(m[1], k, l, "x", M, !0)
            }
        }
        function z(e) {
            if (!te(e) || c || O(e)[2])
                t = 0;
            else {
                t = 1,
                e.stopImmediatePropagation(),
                Q(x),
                s = K();
                var o = b.offset();
                r = O(e)[0] - o.top,
                l = O(e)[1] - o.left,
                B = [],
                T = []
            }
        }
        function P(e) {
            if (te(e) && !c && !O(e)[2]) {
                o = 0,
                e.stopImmediatePropagation(),
                g = 0,
                v = 0,
                u = K();
                var t = b.offset()
                  , a = O(e)[0] - t.top
                  , n = O(e)[1] - t.left;
                if (!(u - d > 30)) {
                    var i = "mcsEaseOut"
                      , x = (h = 1e3 / (u - s)) < 2.5
                      , S = x ? [B[B.length - 2], T[T.length - 2]] : [0, 0];
                    f = x ? [a - S[0], n - S[1]] : [a - r, n - l];
                    var y = [Math.abs(f[0]), Math.abs(f[1])];
                    h = x ? [Math.abs(f[0] / 4), Math.abs(f[1] / 4)] : [h, h];
                    var k = [Math.abs(C[0].offsetTop) - f[0] * H(y[0] / h[0], h[0]), Math.abs(C[0].offsetLeft) - f[1] * H(y[1] / h[1], h[1])];
                    m = "yx" === w.axis ? [k[0], k[1]] : "x" === w.axis ? [null, k[1]] : [k[0], null],
                    p = [4 * y[0] + w.scrollInertia, 4 * y[1] + w.scrollInertia];
                    var I = parseInt(w.contentTouchScroll) || 0;
                    m[0] = y[0] > I ? m[0] : 0,
                    m[1] = y[1] > I ? m[1] : 0,
                    _.overflowed[0] && U(m[0], p[0], i, "y", M, !1),
                    _.overflowed[1] && U(m[1], p[1], i, "x", M, !1)
                }
            }
        }
        function H(e, t) {
            var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
            return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3]
        }
        function U(e, t, o, a, n, i) {
            e && G(x, e.toString(), {
                dur: t,
                scrollEasing: o,
                dir: a,
                overwrite: n,
                drag: i
            })
        }
        C.bind(E[0], (function(e) {
            R(e)
        }
        )).bind(E[1], (function(e) {
            L(e)
        }
        )),
        b.bind(E[0], (function(e) {
            z(e)
        }
        )).bind(E[2], (function(e) {
            P(e)
        }
        )),
        D.length && D.each((function() {
            e(this).bind("load", (function() {
                A(this) && e(this.contentDocument || this.contentWindow.document).bind(E[0], (function(e) {
                    R(e),
                    z(e)
                }
                )).bind(E[1], (function(e) {
                    L(e)
                }
                )).bind(E[2], (function(e) {
                    P(e)
                }
                ))
            }
            ))
        }
        ))
    }
    ,
    E = function() {
        var o, n = e(this), i = n.data(a), r = i.opt, l = i.sequential, s = a + "_" + i.idx, d = e("#mCSB_" + i.idx + "_container"), u = d.parent();
        function f() {
            return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
        }
        function h(e, t, a) {
            l.type = a && o ? "stepped" : "stepless",
            l.scrollAmount = 10,
            j(n, e, t, "mcsLinearOut", a ? 60 : null)
        }
        d.bind("mousedown." + s, (function(e) {
            t || o || (o = 1,
            c = !0)
        }
        )).add(document).bind("mousemove." + s, (function(e) {
            if (!t && o && f()) {
                var a = d.offset()
                  , n = O(e)[0] - a.top + d[0].offsetTop
                  , s = O(e)[1] - a.left + d[0].offsetLeft;
                n > 0 && n < u.height() && s > 0 && s < u.width() ? l.step && h("off", null, "stepped") : ("x" !== r.axis && i.overflowed[0] && (n < 0 ? h("on", 38) : n > u.height() && h("on", 40)),
                "y" !== r.axis && i.overflowed[1] && (s < 0 ? h("on", 37) : s > u.width() && h("on", 39)))
            }
        }
        )).bind("mouseup." + s + " dragend." + s, (function(e) {
            t || (o && (o = 0,
            h("off", null)),
            c = !1)
        }
        ))
    }
    ,
    W = function() {
        if (e(this).data(a)) {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = a + "_" + o.idx
              , r = e("#mCSB_" + o.idx)
              , l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")]
              , c = e("#mCSB_" + o.idx + "_container").find("iframe");
            c.length && c.each((function() {
                e(this).bind("load", (function() {
                    A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + i, (function(e, t) {
                        d(e, t)
                    }
                    ))
                }
                ))
            }
            )),
            r.bind("mousewheel." + i, (function(e, t) {
                d(e, t)
            }
            ))
        }
        function d(a, i) {
            if (Q(t),
            !z(t, a.target)) {
                var c = "auto" !== n.mouseWheel.deltaFactor ? parseInt(n.mouseWheel.deltaFactor) : s && a.deltaFactor < 100 ? 100 : a.deltaFactor || 100
                  , d = n.scrollInertia;
                if ("x" === n.axis || "x" === n.mouseWheel.axis)
                    var u = "x"
                      , f = [Math.round(c * o.scrollRatio.x), parseInt(n.mouseWheel.scrollAmount)]
                      , h = "auto" !== n.mouseWheel.scrollAmount ? f[1] : f[0] >= r.width() ? .9 * r.width() : f[0]
                      , m = Math.abs(e("#mCSB_" + o.idx + "_container")[0].offsetLeft)
                      , p = l[1][0].offsetLeft
                      , g = l[1].parent().width() - l[1].width()
                      , v = "y" === n.mouseWheel.axis ? a.deltaY || i : a.deltaX;
                else
                    u = "y",
                    f = [Math.round(c * o.scrollRatio.y), parseInt(n.mouseWheel.scrollAmount)],
                    h = "auto" !== n.mouseWheel.scrollAmount ? f[1] : f[0] >= r.height() ? .9 * r.height() : f[0],
                    m = Math.abs(e("#mCSB_" + o.idx + "_container")[0].offsetTop),
                    p = l[0][0].offsetTop,
                    g = l[0].parent().height() - l[0].height(),
                    v = a.deltaY || i;
                "y" === u && !o.overflowed[0] || "x" === u && !o.overflowed[1] || ((n.mouseWheel.invert || a.webkitDirectionInvertedFromDevice) && (v = -v),
                n.mouseWheel.normalizeDelta && (v = v < 0 ? -1 : 1),
                (v > 0 && 0 !== p || v < 0 && p !== g || n.mouseWheel.preventDefault) && (a.stopImmediatePropagation(),
                a.preventDefault()),
                a.deltaFactor < 5 && !n.mouseWheel.normalizeDelta && (h = a.deltaFactor,
                d = 17),
                G(t, (m - v * h).toString(), {
                    dir: u,
                    dur: d
                }))
            }
        }
    }
    ,
    R = new Object,
    A = function(t) {
        var o = !1
          , a = !1
          , n = null;
        if (void 0 === t ? a = "#empty" : void 0 !== e(t).attr("id") && (a = e(t).attr("id")),
        !1 !== a && void 0 !== R[a])
            return R[a];
        if (t) {
            try {
                n = (t.contentDocument || t.contentWindow.document).body.innerHTML
            } catch (e) {}
            o = null !== n
        } else {
            try {
                n = top.document.body.innerHTML
            } catch (e) {}
            o = null !== n
        }
        return !1 !== a && (R[a] = o),
        o
    }
    ,
    L = function(e) {
        var t = this.find("iframe");
        if (t.length) {
            var o = e ? "auto" : "none";
            t.css("pointer-events", o)
        }
    }
    ,
    z = function(t, o) {
        var n = o.nodeName.toLowerCase()
          , i = t.data(a).opt.mouseWheel.disableOver
          , r = ["select", "textarea"];
        return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"))
    }
    ,
    P = function() {
        var t, o = e(this), n = o.data(a), i = a + "_" + n.idx, r = e("#mCSB_" + n.idx + "_container"), l = r.parent();
        e(".mCSB_" + n.idx + "_scrollbar ." + d[12]).bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, (function(o) {
            c = !0,
            e(o.target).hasClass("mCSB_dragger") || (t = 1)
        }
        )).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, (function(e) {
            c = !1
        }
        )).bind("click." + i, (function(a) {
            if (t && (t = 0,
            e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) {
                Q(o);
                var i = e(this)
                  , s = i.find(".mCSB_dragger");
                if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
                    if (!n.overflowed[1])
                        return;
                    var c = "x"
                      , u = a.pageX > s.offset().left ? -1 : 1
                      , f = Math.abs(r[0].offsetLeft) - u * (.9 * l.width())
                } else {
                    if (!n.overflowed[0])
                        return;
                    c = "y",
                    u = a.pageY > s.offset().top ? -1 : 1,
                    f = Math.abs(r[0].offsetTop) - u * (.9 * l.height())
                }
                G(o, f.toString(), {
                    dir: c,
                    scrollEasing: "mcsEaseInOut"
                })
            }
        }
        ))
    }
    ,
    H = function() {
        var t = e(this)
          , o = t.data(a)
          , n = o.opt
          , i = a + "_" + o.idx
          , r = e("#mCSB_" + o.idx + "_container")
          , l = r.parent();
        r.bind("focusin." + i, (function(o) {
            var a = e(document.activeElement)
              , i = r.find(".mCustomScrollBox").length
              , s = 0;
            a.is(n.advanced.autoScrollOnFocus) && (Q(t),
            clearTimeout(t[0]._focusTimeout),
            t[0]._focusTimer = i ? (s + 17) * i : 0,
            t[0]._focusTimeout = setTimeout((function() {
                var e = [ae(a)[0], ae(a)[1]]
                  , o = [r[0].offsetTop, r[0].offsetLeft]
                  , i = [o[0] + e[0] >= 0 && o[0] + e[0] < l.height() - a.outerHeight(!1), o[1] + e[1] >= 0 && o[0] + e[1] < l.width() - a.outerWidth(!1)]
                  , c = "yx" !== n.axis || i[0] || i[1] ? "all" : "none";
                "x" === n.axis || i[0] || G(t, e[0].toString(), {
                    dir: "y",
                    scrollEasing: "mcsEaseInOut",
                    overwrite: c,
                    dur: s
                }),
                "y" === n.axis || i[1] || G(t, e[1].toString(), {
                    dir: "x",
                    scrollEasing: "mcsEaseInOut",
                    overwrite: c,
                    dur: s
                })
            }
            ), t[0]._focusTimer))
        }
        ))
    }
    ,
    U = function() {
        var t = e(this).data(a)
          , o = a + "_" + t.idx
          , n = e("#mCSB_" + t.idx + "_container").parent();
        n.bind("scroll." + o, (function(o) {
            0 === n.scrollTop() && 0 === n.scrollLeft() || e(".mCSB_" + t.idx + "_scrollbar").css("visibility", "hidden")
        }
        ))
    }
    ,
    F = function() {
        var t = e(this)
          , o = t.data(a)
          , n = o.opt
          , i = o.sequential
          , r = a + "_" + o.idx
          , l = ".mCSB_" + o.idx + "_scrollbar";
        e(l + ">a").bind("contextmenu." + r, (function(e) {
            e.preventDefault()
        }
        )).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, (function(a) {
            if (a.preventDefault(),
            ee(a)) {
                var r = e(this).attr("class");
                switch (i.type = n.scrollButtons.scrollType,
                a.type) {
                case "mousedown":
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                    if ("stepped" === i.type)
                        return;
                    c = !0,
                    o.tweenRunning = !1,
                    l("on", r);
                    break;
                case "mouseup":
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseout":
                case "pointerout":
                case "MSPointerOut":
                    if ("stepped" === i.type)
                        return;
                    c = !1,
                    i.dir && l("off", r);
                    break;
                case "click":
                    if ("stepped" !== i.type || o.tweenRunning)
                        return;
                    l("on", r)
                }
            }
            function l(e, o) {
                i.scrollAmount = n.scrollButtons.scrollAmount,
                j(t, e, o)
            }
        }
        ))
    }
    ,
    q = function() {
        var t = e(this)
          , o = t.data(a)
          , n = o.opt
          , i = o.sequential
          , r = a + "_" + o.idx
          , l = e("#mCSB_" + o.idx)
          , s = e("#mCSB_" + o.idx + "_container")
          , c = s.parent()
          , d = "input,textarea,select,datalist,keygen,[contenteditable='true']"
          , u = s.find("iframe")
          , f = ["blur." + r + " keydown." + r + " keyup." + r];
        function h(a) {
            switch (a.type) {
            case "blur":
                o.tweenRunning && i.dir && m("off", null);
                break;
            case "keydown":
            case "keyup":
                var r = a.keyCode ? a.keyCode : a.which
                  , l = "on";
                if ("x" !== n.axis && (38 === r || 40 === r) || "y" !== n.axis && (37 === r || 39 === r)) {
                    if ((38 === r || 40 === r) && !o.overflowed[0] || (37 === r || 39 === r) && !o.overflowed[1])
                        return;
                    "keyup" === a.type && (l = "off"),
                    e(document.activeElement).is(d) || (a.preventDefault(),
                    a.stopImmediatePropagation(),
                    m(l, r))
                } else if (33 === r || 34 === r) {
                    if ((o.overflowed[0] || o.overflowed[1]) && (a.preventDefault(),
                    a.stopImmediatePropagation()),
                    "keyup" === a.type) {
                        Q(t);
                        var u = 34 === r ? -1 : 1;
                        if ("x" === n.axis || "yx" === n.axis && o.overflowed[1] && !o.overflowed[0])
                            var f = "x"
                              , h = Math.abs(s[0].offsetLeft) - u * (.9 * c.width());
                        else
                            f = "y",
                            h = Math.abs(s[0].offsetTop) - u * (.9 * c.height());
                        G(t, h.toString(), {
                            dir: f,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                } else
                    35 !== r && 36 !== r || e(document.activeElement).is(d) || ((o.overflowed[0] || o.overflowed[1]) && (a.preventDefault(),
                    a.stopImmediatePropagation()),
                    "keyup" !== a.type) || ("x" === n.axis || "yx" === n.axis && o.overflowed[1] && !o.overflowed[0] ? (f = "x",
                    h = 35 === r ? Math.abs(c.width() - s.outerWidth(!1)) : 0) : (f = "y",
                    h = 35 === r ? Math.abs(c.height() - s.outerHeight(!1)) : 0),
                    G(t, h.toString(), {
                        dir: f,
                        scrollEasing: "mcsEaseInOut"
                    }))
            }
            function m(e, a) {
                i.type = n.keyboard.scrollType,
                i.scrollAmount = n.keyboard.scrollAmount,
                "stepped" === i.type && o.tweenRunning || j(t, e, a)
            }
        }
        u.length && u.each((function() {
            e(this).bind("load", (function() {
                A(this) && e(this.contentDocument || this.contentWindow.document).bind(f[0], (function(e) {
                    h(e)
                }
                ))
            }
            ))
        }
        )),
        l.attr("tabindex", "0").bind(f[0], (function(e) {
            h(e)
        }
        ))
    }
    ,
    j = function(t, o, n, i, r) {
        var l = t.data(a)
          , s = l.opt
          , c = l.sequential
          , u = e("#mCSB_" + l.idx + "_container")
          , f = "stepped" === c.type
          , h = s.scrollInertia < 26 ? 26 : s.scrollInertia
          , m = s.scrollInertia < 1 ? 17 : s.scrollInertia;
        switch (o) {
        case "on":
            if (c.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1],
            Q(t),
            oe(n) && "stepped" === c.type)
                return;
            p(f);
            break;
        case "off":
            g(),
            (f || l.tweenRunning && c.dir) && p(!0)
        }
        function p(e) {
            s.snapAmount && (c.scrollAmount = s.snapAmount instanceof Array ? "x" === c.dir[0] ? s.snapAmount[1] : s.snapAmount[0] : s.snapAmount);
            var o = "stepped" !== c.type
              , a = r || (e ? o ? h / 1.5 : m : 1e3 / 60)
              , n = e ? o ? 7.5 : 40 : 2.5
              , d = [Math.abs(u[0].offsetTop), Math.abs(u[0].offsetLeft)]
              , f = [l.scrollRatio.y > 10 ? 10 : l.scrollRatio.y, l.scrollRatio.x > 10 ? 10 : l.scrollRatio.x]
              , g = "x" === c.dir[0] ? d[1] + c.dir[1] * (f[1] * n) : d[0] + c.dir[1] * (f[0] * n)
              , v = "x" === c.dir[0] ? d[1] + c.dir[1] * parseInt(c.scrollAmount) : d[0] + c.dir[1] * parseInt(c.scrollAmount)
              , x = "auto" !== c.scrollAmount ? v : g
              , _ = i || (e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear")
              , w = !!e;
            e && a < 17 && (x = "x" === c.dir[0] ? d[1] : d[0]),
            G(t, x.toString(), {
                dir: c.dir[0],
                scrollEasing: _,
                dur: a,
                onComplete: w
            }),
            e ? c.dir = !1 : (clearTimeout(c.step),
            c.step = setTimeout((function() {
                p()
            }
            ), a))
        }
        function g() {
            clearTimeout(c.step),
            $(c, "step"),
            Q(t)
        }
    }
    ,
    Y = function(t) {
        var o = e(this).data(a).opt
          , n = [];
        return "function" == typeof t && (t = t()),
        t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t,
        n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t),
        "function" == typeof n[0] && (n[0] = n[0]()),
        "function" == typeof n[1] && (n[1] = n[1]()),
        n
    }
    ,
    X = function(t, o) {
        if (null != t && void 0 !== t) {
            var n = e(this)
              , i = n.data(a)
              , r = i.opt
              , l = e("#mCSB_" + i.idx + "_container")
              , s = l.parent()
              , c = typeof t;
            o || (o = "x" === r.axis ? "x" : "y");
            var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height()
              , f = "x" === o ? l[0].offsetLeft : l[0].offsetTop
              , h = "x" === o ? "left" : "top";
            switch (c) {
            case "function":
                return t();
            case "object":
                if (!(p = t.jquery ? t : e(t)).length)
                    return;
                return "x" === o ? ae(p)[1] : ae(p)[0];
            case "string":
            case "number":
                if (oe(t))
                    return Math.abs(t);
                if (-1 !== t.indexOf("%"))
                    return Math.abs(d * parseInt(t) / 100);
                if (-1 !== t.indexOf("-="))
                    return Math.abs(f - parseInt(t.split("-=")[1]));
                if (-1 !== t.indexOf("+=")) {
                    var m = f + parseInt(t.split("+=")[1]);
                    return m >= 0 ? 0 : Math.abs(m)
                }
                if (-1 !== t.indexOf("px") && oe(t.split("px")[0]))
                    return Math.abs(t.split("px")[0]);
                if ("top" === t || "left" === t)
                    return 0;
                if ("bottom" === t)
                    return Math.abs(s.height() - l.outerHeight(!1));
                if ("right" === t)
                    return Math.abs(s.width() - l.outerWidth(!1));
                if ("first" === t || "last" === t) {
                    var p = l.find(":" + t);
                    return "x" === o ? ae(p)[1] : ae(p)[0]
                }
                return e(t).length ? "x" === o ? ae(e(t))[1] : ae(e(t))[0] : (l.css(h, t),
                void u.update.call(null, n[0]))
            }
        }
    }
    ,
    N = function(t) {
        var o = e(this)
          , n = o.data(a)
          , i = n.opt
          , r = e("#mCSB_" + n.idx + "_container");
        if (t)
            return clearTimeout(r[0].autoUpdate),
            void $(r[0], "autoUpdate");
        function l() {
            clearTimeout(r[0].autoUpdate),
            0 !== o.parents("html").length ? r[0].autoUpdate = setTimeout((function() {
                return i.advanced.updateOnSelectorChange && (n.poll.change.n = c(),
                n.poll.change.n !== n.poll.change.o) ? (n.poll.change.o = n.poll.change.n,
                void f(3)) : i.advanced.updateOnContentResize && (n.poll.size.n = o[0].scrollHeight + o[0].scrollWidth + r[0].offsetHeight + o[0].offsetHeight + o[0].offsetWidth,
                n.poll.size.n !== n.poll.size.o) ? (n.poll.size.o = n.poll.size.n,
                void f(1)) : !i.advanced.updateOnImageLoad || "auto" === i.advanced.updateOnImageLoad && "y" === i.axis || (n.poll.img.n = r.find("img").length,
                n.poll.img.n === n.poll.img.o) ? void ((i.advanced.updateOnSelectorChange || i.advanced.updateOnContentResize || i.advanced.updateOnImageLoad) && l()) : (n.poll.img.o = n.poll.img.n,
                void r.find("img").each((function() {
                    s(this)
                }
                )))
            }
            ), i.advanced.autoUpdateTimeout) : o = null
        }
        function s(t) {
            if (e(t).hasClass(d[2]))
                f();
            else {
                var o = new Image;
                o.onload = a(o, n),
                o.src = t.src
            }
            function a(e, t) {
                return function() {
                    return t.apply(e, arguments)
                }
            }
            function n() {
                this.onload = null,
                e(t).addClass(d[2]),
                f(2)
            }
        }
        function c() {
            !0 === i.advanced.updateOnSelectorChange && (i.advanced.updateOnSelectorChange = "*");
            var e = 0
              , t = r.find(i.advanced.updateOnSelectorChange);
            return i.advanced.updateOnSelectorChange && t.length > 0 && t.each((function() {
                e += this.offsetHeight + this.offsetWidth
            }
            )),
            e
        }
        function f(e) {
            clearTimeout(r[0].autoUpdate),
            u.update.call(null, o[0], e)
        }
        l()
    }
    ,
    V = function(e, t, o) {
        return Math.round(e / t) * t - o
    }
    ,
    Q = function(t) {
        var o = t.data(a);
        e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal").each((function() {
            Z.call(this)
        }
        ))
    }
    ,
    G = function(t, o, n) {
        var i = t.data(a)
          , r = i.opt
          , l = {
            trigger: "internal",
            dir: "y",
            scrollEasing: "mcsEaseOut",
            drag: !1,
            dur: r.scrollInertia,
            overwrite: "all",
            callbacks: !0,
            onStart: !0,
            onUpdate: !0,
            onComplete: !0
        }
          , s = [(n = e.extend(l, n)).dur, n.drag ? 0 : n.dur]
          , c = e("#mCSB_" + i.idx)
          , d = e("#mCSB_" + i.idx + "_container")
          , u = d.parent()
          , f = r.callbacks.onTotalScrollOffset ? Y.call(t, r.callbacks.onTotalScrollOffset) : [0, 0]
          , h = r.callbacks.onTotalScrollBackOffset ? Y.call(t, r.callbacks.onTotalScrollBackOffset) : [0, 0];
        if (i.trigger = n.trigger,
        0 === u.scrollTop() && 0 === u.scrollLeft() || (e(".mCSB_" + i.idx + "_scrollbar").css("visibility", "visible"),
        u.scrollTop(0).scrollLeft(0)),
        "_resetY" !== o || i.contentReset.y || (B("onOverflowYNone") && r.callbacks.onOverflowYNone.call(t[0]),
        i.contentReset.y = 1),
        "_resetX" !== o || i.contentReset.x || (B("onOverflowXNone") && r.callbacks.onOverflowXNone.call(t[0]),
        i.contentReset.x = 1),
        "_resetY" !== o && "_resetX" !== o) {
            if (!i.contentReset.y && t[0].mcs || !i.overflowed[0] || (B("onOverflowY") && r.callbacks.onOverflowY.call(t[0]),
            i.contentReset.x = null),
            !i.contentReset.x && t[0].mcs || !i.overflowed[1] || (B("onOverflowX") && r.callbacks.onOverflowX.call(t[0]),
            i.contentReset.x = null),
            r.snapAmount) {
                var m = r.snapAmount instanceof Array ? "x" === n.dir ? r.snapAmount[1] : r.snapAmount[0] : r.snapAmount;
                o = V(o, m, r.snapOffset)
            }
            switch (n.dir) {
            case "x":
                var p = e("#mCSB_" + i.idx + "_dragger_horizontal")
                  , g = "left"
                  , v = d[0].offsetLeft
                  , x = [c.width() - d.outerWidth(!1), p.parent().width() - p.width()]
                  , _ = [o, 0 === o ? 0 : o / i.scrollRatio.x]
                  , w = f[1]
                  , S = h[1]
                  , b = w > 0 ? w / i.scrollRatio.x : 0
                  , y = S > 0 ? S / i.scrollRatio.x : 0;
                break;
            case "y":
                p = e("#mCSB_" + i.idx + "_dragger_vertical"),
                g = "top",
                v = d[0].offsetTop,
                x = [c.height() - d.outerHeight(!1), p.parent().height() - p.height()],
                _ = [o, 0 === o ? 0 : o / i.scrollRatio.y],
                w = f[0],
                S = h[0],
                b = w > 0 ? w / i.scrollRatio.y : 0,
                y = S > 0 ? S / i.scrollRatio.y : 0
            }
            _[1] < 0 || 0 === _[0] && 0 === _[1] ? _ = [0, 0] : _[1] >= x[1] ? _ = [x[0], x[1]] : _[0] = -_[0],
            t[0].mcs || (k(),
            B("onInit") && r.callbacks.onInit.call(t[0])),
            clearTimeout(d[0].onCompleteTimeout),
            J(p[0], g, Math.round(_[1]), s[1], n.scrollEasing),
            !i.tweenRunning && (0 === v && _[0] >= 0 || v === x[0] && _[0] <= x[0]) || J(d[0], g, Math.round(_[0]), s[0], n.scrollEasing, n.overwrite, {
                onStart: function() {
                    n.callbacks && n.onStart && !i.tweenRunning && (B("onScrollStart") && (k(),
                    r.callbacks.onScrollStart.call(t[0])),
                    i.tweenRunning = !0,
                    C(p),
                    i.cbOffsets = T())
                },
                onUpdate: function() {
                    n.callbacks && n.onUpdate && B("whileScrolling") && (k(),
                    r.callbacks.whileScrolling.call(t[0]))
                },
                onComplete: function() {
                    if (n.callbacks && n.onComplete) {
                        "yx" === r.axis && clearTimeout(d[0].onCompleteTimeout);
                        var e = d[0].idleTimer || 0;
                        d[0].onCompleteTimeout = setTimeout((function() {
                            B("onScroll") && (k(),
                            r.callbacks.onScroll.call(t[0])),
                            B("onTotalScroll") && _[1] >= x[1] - b && i.cbOffsets[0] && (k(),
                            r.callbacks.onTotalScroll.call(t[0])),
                            B("onTotalScrollBack") && _[1] <= y && i.cbOffsets[1] && (k(),
                            r.callbacks.onTotalScrollBack.call(t[0])),
                            i.tweenRunning = !1,
                            d[0].idleTimer = 0,
                            C(p, "hide")
                        }
                        ), e)
                    }
                }
            })
        }
        function B(e) {
            return i && r.callbacks[e] && "function" == typeof r.callbacks[e]
        }
        function T() {
            return [r.callbacks.alwaysTriggerOffsets || v >= x[0] + w, r.callbacks.alwaysTriggerOffsets || v <= -S]
        }
        function k() {
            var e = [d[0].offsetTop, d[0].offsetLeft]
              , o = [p[0].offsetTop, p[0].offsetLeft]
              , a = [d.outerHeight(!1), d.outerWidth(!1)]
              , i = [c.height(), c.width()];
            t[0].mcs = {
                content: d,
                top: e[0],
                left: e[1],
                draggerTop: o[0],
                draggerLeft: o[1],
                topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
                leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
                direction: n.dir
            }
        }
    }
    ,
    J = function(e, t, o, a, n, i, r) {
        e._mTween || (e._mTween = {
            top: {},
            left: {}
        });
        var l, s, c = (r = r || {}).onStart || function() {}
        , d = r.onUpdate || function() {}
        , u = r.onComplete || function() {}
        , f = K(), h = 0, m = e.offsetTop, p = e.style, g = e._mTween[t];
        "left" === t && (m = e.offsetLeft);
        var v = o - m;
        function x() {
            g.stop || (h || c.call(),
            h = K() - f,
            _(),
            h >= g.time && (g.time = h > g.time ? h + l - (h - g.time) : h + l - 1,
            g.time < h + 1 && (g.time = h + 1)),
            g.time < a ? g.id = s(x) : u.call())
        }
        function _() {
            a > 0 ? (g.currVal = b(g.time, m, v, a, n),
            p[t] = Math.round(g.currVal) + "px") : p[t] = o + "px",
            d.call()
        }
        function w() {
            l = 1e3 / 60,
            g.time = h + l,
            s = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) {
                return _(),
                setTimeout(e, .01)
            }
            ,
            g.id = s(x)
        }
        function S() {
            null != g.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(g.id) : clearTimeout(g.id),
            g.id = null)
        }
        function b(e, t, o, a, n) {
            switch (n) {
            case "linear":
            case "mcsLinear":
                return o * e / a + t;
            case "mcsLinearOut":
                return e /= a,
                e--,
                o * Math.sqrt(1 - e * e) + t;
            case "easeInOutSmooth":
                return (e /= a / 2) < 1 ? o / 2 * e * e + t : -o / 2 * (--e * (e - 2) - 1) + t;
            case "easeInOutStrong":
                return (e /= a / 2) < 1 ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--,
                o / 2 * (2 - Math.pow(2, -10 * e)) + t);
            case "easeInOut":
            case "mcsEaseInOut":
                return (e /= a / 2) < 1 ? o / 2 * e * e * e + t : o / 2 * ((e -= 2) * e * e + 2) + t;
            case "easeOutSmooth":
                return e /= a,
                -o * (--e * e * e * e - 1) + t;
            case "easeOutStrong":
                return o * (1 - Math.pow(2, -10 * e / a)) + t;
            default:
                var i = (e /= a) * e
                  , r = i * e;
                return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e)
            }
        }
        g.stop = 0,
        "none" !== i && S(),
        w()
    }
    ,
    K = function() {
        return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
    }
    ,
    Z = function() {
        var e = this;
        e._mTween || (e._mTween = {
            top: {},
            left: {}
        });
        for (var t = ["top", "left"], o = 0; o < t.length; o++) {
            var a = t[o];
            e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id),
            e._mTween[a].id = null,
            e._mTween[a].stop = 1)
        }
    }
    ,
    $ = function(e, t) {
        try {
            delete e[t]
        } catch (o) {
            e[t] = null
        }
    }
    ,
    ee = function(e) {
        return !(e.which && 1 !== e.which)
    }
    ,
    te = function(e) {
        var t = e.originalEvent.pointerType;
        return !(t && "touch" !== t && 2 !== t)
    }
    ,
    oe = function(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }
    ,
    ae = function(e) {
        var t = e.parents(".mCSB_container");
        return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
    }
    ,
    ne = function() {
        var e = t();
        return !!e && document[e];
        function t() {
            var e = ["webkit", "moz", "ms", "o"];
            if ("hidden"in document)
                return "hidden";
            for (var t = 0; t < e.length; t++)
                if (e[t] + "Hidden"in document)
                    return e[t] + "Hidden";
            return null
        }
    }
    ,
    e.fn[o] = function(t) {
        return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
    }
    ,
    e[o] = function(t) {
        return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
    }
    ,
    e[o].defaults = i,
    window[o] = !0,
    e(window).bind("load", (function() {
        e(n)[o](),
        e.extend(e.expr[":"], {
            mcsInView: e.expr[":"].mcsInView || function(t) {
                var o, a, n = e(t), i = n.parents(".mCSB_container");
                if (i.length)
                    return o = i.parent(),
                    (a = [i[0].offsetTop, i[0].offsetLeft])[0] + ae(n)[0] >= 0 && a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) && a[1] + ae(n)[1] >= 0 && a[1] + ae(n)[1] < o.width() - n.outerWidth(!1)
            }
            ,
            mcsInSight: e.expr[":"].mcsInSight || function(t, o, a) {
                var n, i, r, l, s = e(t), c = s.parents(".mCSB_container"), d = "exact" === a[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]];
                if (c.length)
                    return n = [s.outerHeight(!1), s.outerWidth(!1)],
                    r = [c[0].offsetTop + ae(s)[0], c[0].offsetLeft + ae(s)[1]],
                    i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth],
                    l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]],
                    r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0
            }
            ,
            mcsOverflow: e.expr[":"].mcsOverflow || function(t) {
                var o = e(t).data(a);
                if (o)
                    return o.overflowed[0] || o.overflowed[1]
            }
        })
    }
    ))
}
));
//# sourceMappingURL=/sm/cf8e9e3ac4d647098ceb6238baf866188298e2dcb5023b9673ffbe33d0b08bf6.map
