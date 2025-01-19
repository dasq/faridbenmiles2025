function labnolThumb(t) {
    var e = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
        n = '<div class="play"></div>';
    return e.replace("ID", t) + n
}

function labnolIframe() {
    var t = document.createElement("iframe"),
        e = "https://www.youtube.com/embed/ID?autoplay=1";
    t.setAttribute("src", e.replace("ID", this.dataset.id)), t.setAttribute("frameborder", "0"), t.setAttribute("allowfullscreen", "1"), this.parentNode.replaceChild(t, this)
}

function labnolThumbSC(t) {
    var e = '<img src="img/ID-sc.png">',
        n = '<div class="play"></div>';
    return e.replace("ID", t) + n
}

function labnolIframeSC() {
    var t = document.createElement("iframe"),
        e = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/ID&amp;show_user=true&amp;visual=true&amp;auto_play=true";
    t.setAttribute("src", e.replace("ID", this.dataset.id)), t.setAttribute("frameborder", "0"), t.setAttribute("allowfullscreen", "1"), this.parentNode.replaceChild(t, this)
}
window.jQuery || alert("The jQuery library must be included before the smoothscroll.js file.  The plugin will not work propery."),
    function(t) {
        function e(t) {
            return "object" == typeof t ? t : {
                top: t,
                left: t
            }
        }
        var n = t.scrollTo = function(e, n, r) {
            t(window).scrollTo(e, n, r)
        };
        n.defaults = {
            axis: "xy",
            duration: parseFloat(t.fn.jquery) >= 1.3 ? 0 : 1,
            limit: !0
        }, n.window = function(e) {
            return t(window)._scrollable()
        }, t.fn._scrollable = function() {
            return this.map(function() {
                var e = this,
                    n = !e.nodeName || -1 != t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
                if (!n) return e;
                var r = (e.contentWindow || e).document || e.ownerDocument || e;
                return /webkit/i.test(navigator.userAgent) || "BackCompat" == r.compatMode ? r.body : r.documentElement
            })
        }, t.fn.scrollTo = function(r, i, o) {
            return "object" == typeof i && (o = i, i = 0), "function" == typeof o && (o = {
                onAfter: o
            }), "max" == r && (r = 9e9), o = t.extend({}, n.defaults, o), i = i || o.duration, o.queue = o.queue && o.axis.length > 1, o.queue && (i /= 2), o.offset = e(o.offset), o.over = e(o.over), this._scrollable().each(function() {
                function a(t) {
                    c.animate(d, i, o.easing, t && function() {
                        t.call(this, r, o)
                    })
                }
                if (null != r) {
                    var s, l = this,
                        c = t(l),
                        u = r,
                        d = {},
                        p = c.is("html,body");
                    switch (typeof u) {
                        case "number":
                        case "string":
                            if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(u)) {
                                u = e(u);
                                break
                            }
                            if (u = t(u, this), !u.length) return;
                        case "object":
                            (u.is || u.style) && (s = (u = t(u)).offset())
                    }
                    t.each(o.axis.split(""), function(t, e) {
                        var r = "x" == e ? "Left" : "Top",
                            i = r.toLowerCase(),
                            h = "scroll" + r,
                            m = l[h],
                            f = n.max(l, e);
                        if (s) d[h] = s[i] + (p ? 0 : m - c.offset()[i]), o.margin && (d[h] -= parseInt(u.css("margin" + r)) || 0, d[h] -= parseInt(u.css("border" + r + "Width")) || 0), d[h] += o.offset[i] || 0, o.over[i] && (d[h] += u["x" == e ? "width" : "height"]() * o.over[i]);
                        else {
                            var y = u[i];
                            d[h] = y.slice && "%" == y.slice(-1) ? parseFloat(y) / 100 * f : y
                        }
                        o.limit && /^\d+$/.test(d[h]) && (d[h] = d[h] <= 0 ? 0 : Math.min(d[h], f)), !t && o.queue && (m != d[h] && a(o.onAfterFirst), delete d[h])
                    }), a(o.onAfter)
                }
            }).end()
        }, n.max = function(e, n) {
            var r = "x" == n ? "Width" : "Height",
                i = "scroll" + r;
            if (!t(e).is("html,body")) return e[i] - t(e)[r.toLowerCase()]();
            var o = "client" + r,
                a = e.ownerDocument.documentElement,
                s = e.ownerDocument.body;
            return Math.max(a[i], s[i]) - Math.min(a[o], s[o])
        }
    }(jQuery),
    function(t) {
        function e(e, n, r) {
            var i = n.hash.slice(1),
                o = document.getElementById(i) || document.getElementsByName(i)[0];
            if (o) {
                e && e.preventDefault();
                var a = t(r.target);
                if (!(r.lock && a.is(":animated") || r.onBefore && !1 === r.onBefore(e, o, a))) {
                    if (r.stop && a._scrollable().stop(!0), r.hash) {
                        var e = o.id == i ? "id" : "name",
                            s = t("<a> </a>").attr(e, i).css({
                                position: "absolute",
                                top: t(window).scrollTop(),
                                left: t(window).scrollLeft()
                            });
                        o[e] = "", t("body").prepend(s), location = n.hash, s.remove(), o[e] = i
                    }
                    a.scrollTo(o, r).trigger("notify.serialScroll", [o])
                }
            }
        }
        var n = location.href.replace(/#.*/, ""),
            r = t.localScroll = function(e) {
                t("body").localScroll(e)
            };
        r.defaults = {
            duration: 1e3,
            axis: "y",
            event: "click",
            stop: !0,
            target: window,
            reset: !0
        }, r.hash = function(n) {
            if (location.hash) {
                if (n = t.extend({}, r.defaults, n), n.hash = !1, n.reset) {
                    var i = n.duration;
                    delete n.duration, t(n.target).scrollTo(0, n), n.duration = i
                }
                e(0, location, n)
            }
        }, t.fn.localScroll = function(i) {
            function o() {
                return !!this.href && !!this.hash && this.href.replace(this.hash, "") == n && (!i.filter || t(this).is(i.filter))
            }
            return i = t.extend({}, r.defaults, i), i.lazy ? this.bind(i.event, function(n) {
                var r = t([n.target, n.target.parentNode]).filter(o)[0];
                r && e(n, r, i)
            }) : this.find("a,area").filter(o).bind(i.event, function(t) {
                e(t, this, i)
            }).end().end()
        }
    }(jQuery), jQuery(function(t) {
        t.localScroll({
            filter: ".smoothScroll"
        })
    }),
    function(t) {
        var e = Array.prototype.slice,
            n = Array.prototype.splice,
            r = {
                topSpacing: 0,
                bottomSpacing: 0,
                className: "is-sticky",
                wrapperClassName: "sticky-wrapper",
                center: !1,
                getWidthFrom: "",
                widthFromWrapper: !0,
                responsiveWidth: !1
            },
            i = t(window),
            o = t(document),
            a = [],
            s = i.height(),
            l = function() {
                for (var e = i.scrollTop(), n = o.height(), r = n - s, l = e > r ? r - e : 0, c = 0; c < a.length; c++) {
                    var u = a[c],
                        d = u.stickyWrapper.offset().top,
                        p = d - u.topSpacing - l;
                    if (p >= e) null !== u.currentTop && (u.stickyElement.css({
                        width: "",
                        position: "",
                        top: ""
                    }), u.stickyElement.parent().removeClass(u.className), u.stickyElement.trigger("sticky-end", [u]), u.currentTop = null);
                    else {
                        var h = n - u.stickyElement.outerHeight() - u.topSpacing - u.bottomSpacing - e - l;
                        if (0 > h ? h += u.topSpacing : h = u.topSpacing, u.currentTop != h) {
                            var m;
                            u.getWidthFrom ? m = t(u.getWidthFrom).width() || null : u.widthFromWrapper && (m = u.stickyWrapper.width()), null == m && (m = u.stickyElement.width()), u.stickyElement.css("width", m).css("position", "fixed").css("top", h), u.stickyElement.parent().addClass(u.className), null === u.currentTop ? u.stickyElement.trigger("sticky-start", [u]) : u.stickyElement.trigger("sticky-update", [u]), u.currentTop === u.topSpacing && u.currentTop > h || null === u.currentTop && h < u.topSpacing ? u.stickyElement.trigger("sticky-bottom-reached", [u]) : null !== u.currentTop && h === u.topSpacing && u.currentTop < h && u.stickyElement.trigger("sticky-bottom-unreached", [u]), u.currentTop = h
                        }
                    }
                }
            },
            c = function() {
                s = i.height();
                for (var e = 0; e < a.length; e++) {
                    var n = a[e],
                        r = null;
                    n.getWidthFrom ? n.responsiveWidth === !0 && (r = t(n.getWidthFrom).width()) : n.widthFromWrapper && (r = n.stickyWrapper.width()), null != r && n.stickyElement.css("width", r)
                }
            },
            u = {
                init: function(e) {
                    var n = t.extend({}, r, e);
                    return this.each(function() {
                        var e = t(this),
                            i = e.attr("id"),
                            o = e.outerHeight(),
                            s = i ? i + "-" + r.wrapperClassName : r.wrapperClassName,
                            l = t("<div></div>").attr("id", s).addClass(n.wrapperClassName);
                        e.wrapAll(l);
                        var c = e.parent();
                        n.center && c.css({
                            width: e.outerWidth(),
                            marginLeft: "auto",
                            marginRight: "auto"
                        }), "right" == e.css("float") && e.css({
                            "float": "none"
                        }).parent().css({
                            "float": "right"
                        }), c.css("height", o), n.stickyElement = e, n.stickyWrapper = c, n.currentTop = null, a.push(n)
                    })
                },
                update: l,
                unstick: function(e) {
                    return this.each(function() {
                        for (var e = this, r = t(e), i = -1, o = a.length; o-- > 0;) a[o].stickyElement.get(0) === e && (n.call(a, o, 1), i = o); - 1 != i && (r.unwrap(), r.css({
                            width: "",
                            position: "",
                            top: "",
                            "float": ""
                        }))
                    })
                }
            };
        window.addEventListener ? (window.addEventListener("scroll", l, !1), window.addEventListener("resize", c, !1)) : window.attachEvent && (window.attachEvent("onscroll", l), window.attachEvent("onresize", c)), t.fn.sticky = function(n) {
            return u[n] ? u[n].apply(this, e.call(arguments, 1)) : "object" != typeof n && n ? void t.error("Method " + n + " does not exist on jQuery.sticky") : u.init.apply(this, arguments)
        }, t.fn.unstick = function(n) {
            return u[n] ? u[n].apply(this, e.call(arguments, 1)) : "object" != typeof n && n ? void t.error("Method " + n + " does not exist on jQuery.sticky") : u.unstick.apply(this, arguments)
        }, t(function() {
            setTimeout(l, 0)
        })
    }(jQuery), $(document).ready(function() {
        $("#menu-container").sticky({
            topSpacing: 0
        })
    }), document.addEventListener("DOMContentLoaded", function() {
        var t, e, n = document.getElementsByClassName("youtube-player");
        for (e = 0; e < n.length; e++) t = document.createElement("div"), t.setAttribute("data-id", n[e].dataset.id), t.innerHTML = labnolThumb(n[e].dataset.id), t.onclick = labnolIframe, n[e].appendChild(t)
    }), document.addEventListener("DOMContentLoaded", function() {
        var t, e, n = document.getElementsByClassName("soundcloud-player");
        for (e = 0; e < n.length; e++) t = document.createElement("div"), t.setAttribute("data-id", n[e].dataset.id), t.innerHTML = labnolThumbSC(n[e].dataset.id), t.onclick = labnolIframeSC, n[e].appendChild(t)
    });