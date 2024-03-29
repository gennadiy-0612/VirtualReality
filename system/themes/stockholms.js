!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? exports.acceptedlanguages = t() : e.acceptedlanguages = t()
}(this, function () {
    return function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {exports: {}, id: r, loaded: !1};
            return e[r].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function (e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = n(1), u = r(a), o = n(2), c = r(o), l = n(4), g = r(l), i = n(5), f = r(i);
        t["default"] = {
            lib: {util: u, user: c, page: g, relevant: f},
            current: g.getCurrentLanguage(),
            accepted: c.getAcceptedLanguages(),
            acceptedExpanded: u.expandLanguages(c.getAcceptedLanguages()),
            alternate: g.getAlternateLanguages(),
            alternateExpanded: u.expandLanguages(g.getAlternateLanguages()),
            relevant: f.getRelevantAlternateLanguages()
        }, e.exports = t["default"]
    }, function (e, t) {
        "use strict";

        function n(e) {
            var t = {};
            return e.forEach(function (e) {
                t[e] = e;
                var n = e.match(/^[a-zA-Z]+/)[0];
                n == e || t[n] || (t[n] = e)
            }), t
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.expandLanguages = n
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function a() {
            var e = o.getRoot();
            return e.navigator ? e.navigator.languages || [e.navigator.language || e.navigator.userLanguage] : []
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.getAcceptedLanguages = a;
        var u = n(3), o = r(u)
    }, function (e, t) {
        "use strict";

        function n() {
            return a
        }

        function r(e) {
            a = e
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.getRoot = n, t.setRoot = r;
        var a = window
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function a() {
            var e = g.getRoot(), t = e.document.querySelector("html");
            return t.getAttribute("lang")
        }

        function u() {
            for (var e = g.getRoot(), t = e.document.querySelector("head").querySelectorAll('link[rel="alternate"]'), n = [], r = 0; r < t.length; r++) {
                var a = t.item(r), u = a.getAttribute("hreflang");
                u && n.push(u)
            }
            return n
        }

        function o(e) {
            var t = g.getRoot(),
                n = t.document.querySelector("head").querySelector('link[rel="alternate"][hreflang="' + e + '"]');
            return n
        }

        function c(e) {
            var t = o(e);
            return t.getAttribute("href")
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.getCurrentLanguage = a, t.getAlternateLanguages = u, t.getLinkForLanguage = o, t.getHrefForLanguage = c;
        var l = n(3), g = r(l)
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function a() {
            var e = o.expandLanguages(l.getAcceptedLanguages()), t = o.expandLanguages(i.getAlternateLanguages()),
                n = Object.keys(e), r = Object.keys(t), a = n.filter(function (e) {
                    return -1 !== r.indexOf(e)
                }), u = a.map(function (e) {
                    return t[e]
                }), c = {}, g = u.filter(function (e) {
                    return c[e] ? !1 : (c[e] = !0, !0)
                });
            return g
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.getRelevantAlternateLanguages = a;
        var u = n(1), o = r(u), c = n(2), l = r(c), g = n(4), i = r(g)
    }])
});
