var document ;
var FnG;
var MnG = {"href":"http://www.dianping.com/shop/8291516","ancestorOrigins":{},"origin":"http://www.dianping.com","protocol":"http:","host":"www.dianping.com","hostname":"www.dianping.com","port":"","pathname":"/shop/8291516","search":"","hash":""};
!function() {
    "use strict";
    var u = !0
        , n = "_MeiTuanALogObject"
        , d = 1
        , r = "dianping_nova"
        , h = "waimai"
        , m = "group"
        , c = "demo"
        , _ = "4.12.1"
        , g = "lxcuid"
        , b = "uuid"
        , y = "msid"
        , w = "cityid"
        , A = "utm"
        , x = "uid"
        , S = "userid"
        , k = "dpid"
        , O = "appnm"
        , s = "union_id"
        , l = "web_env"
        , q = "wxmp_env"
        , v = "pd_data"
        , j = /^(([^? \r\n]*)\?)?([^?# \r\n]+)(#\S+)?$/
        , I = setTimeout
        , f = clearTimeout
        , p = 1
        , a = 2
        , D = 3
        , T = 4
        , e = 5
        , i = 6
        , o = 20
        , E = 7;
    function C(t) {
        var n = t;
        return t && t.code && (n = t.code),
            n === p ? "E_TIME_OUT" : n === a ? "E_NO_JSBRIDGE" : n === D ? "E_KNB_FAIL" : n === T ? "E_KNB_CB_FAIL" : n === e ? "E_KNB_NOT_EXIST" : n === o ? "ERR_PARAMS" : n === i ? "E_KNB_METHOD_NOT_SUPPORT" : "unknown error: " + n
    }
    var N = 200
        , M = 100
        , F = 500
        , R = 600
        , L = -1
        , P = "PV"
        , V = "PD"
        , B = "MC"
        , U = "SC"
        , Q = "MV"
        , J = "MVL"
        , K = "ME"
        , W = "BO"
        , X = "BP"
        , $ = "event_type"
        , z = "val_act"
        , H = "val_cid"
        , Z = "index"
        , G = "element_id"
        , Y = "pageView"
        , tt = "systemCheck"
        , nt = "moduleClick"
        , et = "order"
        , rt = "order_id"
        , it = 1e3
        , ot = 2
        , at = 0
        , ut = 6
        , ct = -1
        , st = 0
        , ft = 1
        , dt = 10080
        , lt = 1576800
        , vt = 30
        , pt = "_lx_utm"
        , ht = "_lxsdk"
        , mt = "_lxsdk_cuid"
        , gt = "_lxsdk_dpid"
        , _t = "_lxsdk_s"
        , bt = "latlng"
        , yt = "_lxsdk_rr"
        , wt = "_lxsdk_rc"
        , xt = "msid"
        , St = "ms"
        , kt = "category"
        , Ot = "c"
        , qt = "login_type"
        , jt = "lt"
        , At = "locate_city_id"
        , It = "lci"
        , Dt = "sdk_ver"
        , Tt = "sv"
        , Et = "lxcuid"
        , Ct = "lxid"
        , Nt = "val_lab"
        , Mt = "val_bid"
        , Ft = "val_val"
        , Rt = "sf"
        , Lt = "__$lx_beacon_"
        , Pt = {
        category: u,
        union_id: u,
        lxcuid: u,
        app: u,
        sdk_ver: u,
        appnm: u,
        ch: u,
        lch: u,
        ct: u,
        did: u,
        dm: u,
        ua: u,
        msid: u,
        uuid: u,
        lat: u,
        log: u,
        net: u,
        os: u,
        idfa: u,
        pushid: u,
        subcid: u,
        mac: u,
        imsi: u,
        uid: u,
        logintype: u,
        cityid: u,
        apn: u,
        mno: u,
        pushSetting: u,
        wifi: u,
        bht: u,
        ip: u,
        vendorid: u,
        geohash: u,
        dtk: u,
        sns: u,
        android_id: u,
        version_code: u,
        brand: u,
        utm: u
    }
        , Vt = "post"
        , Bt = "__lxvalidation"
        , Ut = "report.meituan.com"
        , Qt = "hreport.meituan.com"
        , Jt = function() {};
    function t() {
        return window
    }
    function Kt() {
        return t().XMLHttpRequest
    }
    var Wt, Xt, $t = (Wt = Kt(),
            Xt = Wt && "withCredentials"in new Wt,
            function() {
                return Xt
            }
    ), zt = /__lxvalidation=([\w.]+)/i, Ht = 10, Zt = !1, Gt = void 0, Yt = void 0, tn = {};
    function nn(t) {
        var n, e = 0 === we().indexOf("http:") ? "http:" : "https:", r = e + "//" + t + "/", i = Mn.search.match(zt) || [], o = function() {
            var t = ce.get(Bt);
            if (t) {
                var n = t.split("|");
                return {
                    mis: n[0],
                    env: n[1] || ""
                }
            }
            return t || {}
        }();
        return (n = i && i[1] || o.mis || "") && (ce.top(Bt, n + "|", Ht),
            r = e + "//" + t + "/?mis=" + n,
            en.debug = n),
            r
    }
    var en = {
        inWXMP: !1,
        pageValLab: null,
        pageEnv: null,
        use_post: !1,
        cid: null,
        appnm: null,
        quit: null,
        useQR: !1,
        onWebviewAppearAutoPV: !0,
        positiveLab: !0,
        nativeSDKVer: null,
        debug: !1
    }
        , rn = [];
    en.on = function(t, n) {
        rn.push({
            name: t,
            fn: n
        })
    }
    ;
    var on = {
        MVL: !(en.emit = function(r, i, o, a, u) {
                ie.each(rn, function(t) {
                    var n = t.name
                        , e = t.fn;
                    n === r && e(i, o, a, u)
                })
            }
        ),
        QR: !1,
        getReqId: !1
    };
    function an(t) {
        return !!on[t]
    }
    var un = {
        st: 0,
        web: 1
    };
    function cn(t, n) {
        un[t] = n
    }
    function sn(t) {
        return t ? un[t] : un
    }
    function fn(t, n) {
        te.isStr(t) && (tn[t] = n)
    }
    function dn(t) {
        Zt = t
    }
    function ln() {
        return Zt === d
    }
    function vn(t) {
        return Gt && !t || (Gt = nn(Ut)),
            Gt
    }
    var pn = ["wreport.meituan.net", "wreport1.meituan.net", "wreport2.meituan.net"]
        , hn = 0;
    function mn(t) {
        if (!Yt || t) {
            var n = pn[parseInt(hn++ % 18 / 6)];
            Yt = nn(n)
        }
        return Yt
    }
    var gn = void 0;
    function _n() {
        if (Vn !== gn)
            return gn;
        var t = Fn.getElementsByTagName("meta");
        return gn = "off" === pe(t, "lx:native-report")
    }
    var bn = at;
    function yn() {
        return bn
    }
    function wn(t) {
        _n() || (bn = t)
    }
    var xn = !1;
    function Sn(t) {
        xn = !!t
    }
    var kn = 5e3
        , On = 50
        , qn = {
        MVL: {}
    }
        , jn = void 0
        , An = void 0;
    function In(t, n, e, r) {
        r = r || {};
        var i = n.category
            , o = e.req_id
            , a = e.val_cid
            , u = e.val_bid
            , c = r.tag;
        if (qn[t] && te.isStr(t) && te.isStr(i) && te.isStr(o) && te.isStr(a) && te.isStr(u)) {
            var s = i + "_" + o + "_" + a + "_" + u
                , f = qn[t];
            te.isObj(f[s]) || (f[s] = {
                env: te.extend(!0, {}, n),
                evs: e,
                lab: []
            }),
            te.isObj(c) && (f[s].evs.tag = c);
            var d = te.extend(!0, e.val_lab, {
                _seq: e.seq,
                _tm: e.tm
            });
            f[s].lab.push(d),
                function() {
                    var t = 0;
                    for (var n in qn) {
                        var e = qn[n];
                        for (var r in e) {
                            var i = e[r].lab;
                            t += i.length || 0
                        }
                    }
                    On < t && En()
                }()
        }
    }
    function Dn(t, n) {
        var e = (n || {}).withUnload
            , r = qn[t];
        if (te.isObj(r)) {
            var i = [];
            for (var o in r) {
                var a = r[o]
                    , u = !1;
                if (a.lab && a.lab.length) {
                    var c = a.env
                        , s = a.evs
                        , f = {
                        mv_list: a.lab,
                        custom: {
                            _withUnload: !!e
                        }
                    };
                    s.val_lab = f;
                    for (var d = 0, l = i.length; d < l; d++) {
                        var v = i[d];
                        if (!Tn(v, c)) {
                            v.evs.push(s),
                                u = !0;
                            break
                        }
                    }
                    u || (c.evs = [s],
                        i.push(c))
                }
            }
            i.length && An.send(i),
                qn[t] = {}
        }
    }
    function Tn(t, n) {
        var e = 0
            , r = 0;
        for (var i in t)
            t.hasOwnProperty(i) && e++;
        for (var o in n)
            n.hasOwnProperty(o) && r++;
        var a = r < e ? t : n
            , u = e <= r ? t : n;
        for (var c in a) {
            if (!(-1 < "evs|".indexOf(c + "|")))
                if (te.isObj(a[c]) && te.isObj(u[c])) {
                    if (Tn(a[c], u[c]))
                        return !0
                } else if (a[c] !== u[c])
                    return !0
        }
        return !1
    }
    function En(t) {
        var n = (t || {}).withUnload;
        for (var e in qn)
            Dn(e, {
                withUnload: n
            })
    }
    I(function t() {
        clearTimeout(jn);
        try {
            En()
        } catch (t) {} finally {
            yn() === at ? jn = I(t, kn) : clearTimeout(jn)
        }
    }, 100);
    var Cn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        , Nn = t()
        , Mn = location
        , Fn = document
        , Rn = Fn.domain
        , Ln = navigator
        , Pn = Ln.userAgent.toString()
        , Vn = void 0
        , Bn = Array.prototype
        , Un = Object.prototype
        , Qn = decodeURIComponent
        , Jn = encodeURIComponent
        , Kn = Zn()
        , Wn = Un.toString
        , Xn = Un.hasOwnProperty;
    function $n() {}
    function zn(t) {
        return void 0 === t ? "undefined" : Cn(t)
    }
    function Hn(t, n) {
        return zn(t) === n
    }
    function Zn() {
        return +new Date
    }
    function Gn() {
        return Math.random()
    }
    function Yn(t) {
        return Hn(t, "number")
    }
    var te = {};
    function ne(t, e, r) {
        var i = void 0
            , o = !0 === t;
        return o || (r = e,
            e = t),
        e && te.isObj(e) || (e = {}),
        r && te.isObj(r) || (r = {}),
            ie.each(r, function(t, n) {
                o && te.isObj(r[n]) ? (i = e[n],
                    e[n] = te.isObj(i) ? i : {},
                    ne(o, e[n], r[n])) : e[n] = r[n]
            }),
            e
    }
    te.trim = function(t) {
        return t.replace(/^[\s\uFEFF\xA0\u3000]+|[\s\uFEFF\xA0\u3000]+$/g, "")
    }
        ,
        te.now = Zn,
        te.rnd = Gn,
        te.hasOwn = function(t, n) {
            return Xn.call(t, n)
        }
        ,
        te.extend = ne;
    var ee = function(t) {
        return t && "[object Object]" === Wn.call(t)
    };
    te.isObj = ee;
    var re = function(t) {
        return Hn(t, "string")
    };
    te.isStr = re,
        te.isFunc = function(t) {
            return Hn(t, "function")
        }
        ,
        te.attr = function(t, n) {
            return t.getAttribute(n)
        }
        ,
        te.parseQuery = function(t) {
            var i = {};
            if (t) {
                var n = t.replace(j, function(t, n, e, r) {
                    return r || ""
                }).split("&");
                return ie.each(n, function(t) {
                    var n = t.split("=")
                        , e = n[0]
                        , r = n.slice(1).join("") || "";
                    e && !Xn.call(i, e) && (i[e] = Qn(r))
                }),
                    i
            }
        }
        ,
        te.stringifyQuery = function(t) {
            var r = [];
            return te.isObj(t) && ie.each(t, function(t, n) {
                var e;
                te.isFunc(t) || (Vn !== t && ((e = t) || !Hn(e, "object")) || (t = t || ""),
                    r.push(Jn(n) + "=" + Jn(t)))
            }),
                r.join("&")
        }
        ,
        te.genReqId = function() {
            return "" + 1e3 * Zn() + parseInt(1e3 * Gn())
        }
        ,
        te.run = function(t, n) {
            oe(t) ? ie.each(t, n) : n(t)
        }
        ,
        te.on = function(t, n, e) {
            t.addEventListener ? t.addEventListener(n, e, !1) : t.attachEvent && t.attachEvent("on" + n, e)
        }
        ,
        te.off = function(t, n, e) {
            t.removeEventListener ? t.removeEventListener(n, e, !1) : t.detachEvent && t.detachEvent("on" + n, e)
        }
    ;
    var ie = {
        isArray: function(t) {
            return "[object Array]" === Wn.call(t)
        }
    }
        , oe = function(t) {
        if (!t)
            return !1;
        var n = t.length;
        return !!ie.isArray(t) || !!(t && Yn(n) && 0 <= n) && (!te.isObj(t) || (!(1 < n) || n - 1 in t))
    };
    ie.isArrayLike = oe,
        ie.find = function(e, r, i) {
            var o = void 0;
            return oe(e) && ie.each(e, function(t, n) {
                if (!0 === r.call(i, t, n, e))
                    return o = t,
                        !1
            }),
                o
        }
        ,
        ie.filter = function(e, r, i) {
            var o = [];
            return oe(e) && ie.each(e, function(t, n) {
                r.call(i, t, n, e) && o.push(t)
            }),
                o
        }
        ,
        ie.toArray = function(t, n, e) {
            var r = [];
            return oe(t) && ie.each(t, function(t) {
                r.push(n ? n.call(e, t) : t)
            }, e),
                r
        }
    ;
    var ae = function(t, n, e) {
        if (t) {
            var r = void 0
                , i = void 0
                , o = void 0;
            if (oe(t))
                for (i = 0,
                         o = t.length; i < o && !1 !== n.call(e, t[i], i, t); i++)
                    ;
            else
                for (r in t)
                    if (te.hasOwn(t, r) && !1 === n.call(e, t[r], r, t))
                        break
        }
    };
    ie.each = ae;
    var ue = function(t, n, e) {
        if (t) {
            for (var r = [], i = 0, o = t.length; i < o; i++) {
                var a = n.call(e, t[i], i, t);
                r.push(a)
            }
            return r
        }
    };
    ie.slice = function(t, n, e) {
        return Bn.slice.call(ie.toArray(t), n, e)
    }
        ,
        ie.reduce = function(t, n) {
            if (oe(t) && te.isFunc(n)) {
                var e = t
                    , r = e.length >>> 0
                    , i = 0
                    , o = void 0
                    , a = arguments;
                if (3 === a.length)
                    o = a[2];
                else {
                    for (; i < r && !(i in e); )
                        i++;
                    if (r <= i)
                        return;
                    o = e[i++]
                }
                for (; i < r; )
                    i in e && (o = n(o, e[i], i, e)),
                        i++;
                return o
            }
        }
    ;
    var ce = {};
    function se(t) {
        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            , e = void 0
            , r = void 0
            , i = void 0
            , o = void 0
            , a = void 0
            , u = 0
            , c = 0
            , s = ""
            , f = [];
        if (!t)
            return t;
        for (t = fe(t); e = (a = t.charCodeAt(u++) << 16 | t.charCodeAt(u++) << 8 | t.charCodeAt(u++)) >> 18 & 63,
            r = a >> 12 & 63,
            i = a >> 6 & 63,
            o = 63 & a,
            f[c++] = n.charAt(e) + n.charAt(r) + n.charAt(i) + n.charAt(o),
        u < t.length; )
            ;
        switch (s = f.join(""),
        t.length % 3) {
            case 1:
                s = s.slice(0, -2) + "==";
                break;
            case 2:
                s = s.slice(0, -1) + "="
        }
        return s
    }
    function fe(t) {
        var n, e = "", r = void 0, i = void 0, o = void 0;
        for (r = i = 0,
                 n = (t = (t + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length,
                 o = 0; o < n; o++) {
            var a = t.charCodeAt(o)
                , u = null;
            a < 128 ? i++ : u = 127 < a && a < 2048 ? String.fromCharCode(a >> 6 | 192, 63 & a | 128) : String.fromCharCode(a >> 12 | 224, a >> 6 & 63 | 128, 63 & a | 128),
            null !== u && (r < i && (e += t.substring(r, i)),
                e += u,
                r = i = o + 1)
        }
        return r < i && (e += t.substring(r, t.length)),
            e
    }
    ce.del = function(t, n) {
        var e = t + "=;path=/;domain=" + n
            , r = new Date;
        return r.setFullYear(1970),
            e += ";expires=" + r.toUTCString(),
            Fn.cookie = e,
            !0
    }
        ,
        ce.get = function(t) {
            var n = Fn.cookie.match(new RegExp("(?:^|;)\\s*" + t + "=([^;]+)"));
            return Qn(n ? n[1] : "")
        }
        ,
        ce.set = function(t, n, e, r) {
            r = r || Fn.domain;
            var i = void 0
                , o = void 0
                , a = void 0
                , u = t + "=" + Jn(n) + ";path=/;domain=" + r;
            Vn === e || isNaN(e) || (i = new Date,
                o = 60 * parseInt(e, 10) * 1e3,
                a = i.getTime() + o,
                i.setTime(a),
                u += ";expires=" + i.toUTCString());
            try {
                return Fn.cookie = u,
                    !0
            } catch (t) {
                return !1
            }
        }
        ,
        ce.top = function(t, n, e) {
            //Fn.domain = "www.dianping.com";
            var r = Fn.domain
                , i = r.split(".")
                , o = i.length
                , a = o - 1
                , u = void 0
                , c = !1;
            for (n = "" + n; !c && 0 <= a && (r = i.slice(a, o).join("."),
                ce.set(t, n, e, r),
                u = ce.get(t),
            Vn !== u && (c = u === n),
                a--,
                !c); )
                ;
        }
        ,
        ce.del = function(t) {
            return ce.top(t, "", -100)
        }
    ;
    var de = window.btoa
        , le = se;
    try {
        te.isFunc(de) && de(fe(Pn)) === se(Pn) ? (le = function(t) {
            return de(fe(t))
        }
            ,
            cn("btoa", "0")) : cn("btoa", "1")
    } catch (t) {}
    var ve = le;
    function pe(t, n) {
        var e = void 0
            , r = ie.find(t, function(t) {
            return te.attr(t, "name") === n
        });
        return r && (e = te.attr(r, "content")),
            e
    }
    function he() {
        var t = Nn[n];
        return Nn[t]
    }
    var me, ge = (me = void 0,
        {
            update: function(t) {
                me = t
            },
            get: function() {
                return me
            }
        });
    function _e(t) {
        var n = {
            duration: function(t) {
                var n = void 0
                    , e = ge.get()
                    , r = Zn();
                if (t && e)
                    n = e,
                        ge.update(r);
                else {
                    var i = he()
                        , o = Nn.performance && Nn.performance.timing;
                    (n = o && o.requestStart) || (n = i ? i.l : Kn),
                        ge.update(r)
                }
                return r - n
            }(!0 === t)
        }
            , e = void 0
            , r = en.quit;
        return te.isFunc(r) && (e = r() || {}),
            n = te.extend(n, e || {})
    }
    function be(t, n) {
        n[rt]
    }
    var ye = 2032;
    function we() {
        return Mn.protocol
    }
    /trident/i.test(Pn) || /msie/i.test(Pn) || !/mozilla.+webkit.+chrome.+/i.test(Pn) || (ye = 6e3);
    var xe = 0;
    function Se(t, n) {
        var e = /^((\d+\.)+\d+).*$/;
        if ("string" !== zn(t) || "string" !== zn(n))
            return NaN;
        if (!e.test(t) || !e.test(n))
            return NaN;
        for (var r = t.replace(e, "$1").split("."), i = n.replace(e, "$1").split("."), o = 0, a = Math.max(r.length, i.length); o < a; o++) {
            if (!r[o] || !i[o])
                (!r[o] && r || !i[o] && i).push("0");
            var u = r[o].toString().length
                , c = i[o].toString().length;
            if (u !== c) {
                var s = c < u ? i : r;
                s[o] = Array(Math.abs(u - c) + 1).join("0") + s[o].toString()
            }
        }
        var f = parseInt(r.join(""))
            , d = parseInt(i.join(""));
        return f == d ? 0 : d < f ? 1 : -1
    }
    function ke(e, r, i, o, a, u, c) {
        return function(t) {
            if (!e) {
                e = !0;
                try {
                    if (r && new Date - i < 50)
                        return;
                    if (o)
                        return;
                    if (o = !1,
                        !c()) {
                        var n = _e();
                        a("pageDisappear", n, {
                            shouldStore: !0
                        })
                    }
                    En({
                        withUnload: !0
                    })
                } catch (t) {}
                u && u(t)
            }
        }
    }
    var Oe = 4
        , qe = ""
        , je = function(t) {
        Oe = t
    }
        , Ae = function() {
        return qe && 3 === Oe
    }
        , Ie = function(t) {
        qe = t
    }
        , De = function() {
        return qe
    }
        , Te = Nn.sessionStorage
        , Ee = void 0;
    Ee = te.isFunc(Nn.atob) ? Nn.atob : function(t) {
        return t
    }
    ;
    var Ce = {}
        , Ne = function(t, n) {
        if (Ce[t])
            try {
                Ce[t](n),
                    I(function() {
                        delete Ce[t]
                    }, 0)
            } catch (t) {}
    }
        , Me = Pn
        , Fe = [{
        n: c,
        r: /lingxi\/demo\/\d+/i,
        v: Me
    }, {
        n: r,
        r: /dp\/com\.dianping\.[\w.]+\/([\d.]+)/i,
        v: Me
    }, {
        n: h,
        r: /\bmeituanwaimai-c\/\d+\./i,
        v: Me
    }, {
        n: "moviepro",
        r: /\bmoviepro/i,
        v: Me
    }, {
        n: "movie",
        r: /\bmaoyan\b/i,
        v: Me
    }, {
        n: m,
        r: /\bmeituan \d+|meituangroup\/\d+\./i,
        v: Me
    }]
        , Re = /android/i.test(Me)
        , Le = ""
        , Pe = Re
        , Ve = !1
        , Be = !1
        , Ue = "www"
        , Qe = !1;
    if (/\bandroid|mobile\b|\bhtc\b/i.test(Me)) {
        Ue = "i",
            Pe = !0,
            ie.each(Fe, function(t) {
                if (t.r.test(t.v))
                    return Le = t.n,
                        !1
            }),
        /\btitans(no){0,1}x\b/i.test(Me) && (Ve = !0);
        var Je = /iphone/i.test(Me)
            , Ke = /ipad/i.test(Me);
        (Je || Ke) && (Be = !0),
        Le && (Je ? Ue = "iphone" : /android/i.test(Me) ? Ue = "android" : Ke && (Ue = "ipad"))
    } else {
        var We = Me.match(/(msie) (\d+)|Trident\/(d+)/i);
        We && (Qe = !0,
        We && parseInt(We[2], 10))
    }
    var Xe = Nn.screen.width + "*" + Nn.screen.height
        , $e = Ve || / knb\/\d+/i.test(Pn)
        , ze = function() {
        return Pe && $e
    }
        , He = Pn.replace(/^.*TitansX\/([\d.]+)\s.*$/i, "$1")
        , Ze = !(!Pe || !/\sMicroMessenger/.test(Me))
        , Ge = A + "_source"
        , Ye = A + "_medium"
        , tr = A + "_term"
        , nr = A + "_campaign"
        , er = A + "_content"
        , rr = void 0
        , ir = !1;
    function or(t) {
        if (!t)
            return Vn;
        var e = Vn
            , r = /^utm_(source|medium|term|content|campaign)$/;
        return ie.each(t, function(t, n) {
            r.test(n) && (!e && (e = {}),
                e[n] = t)
        }),
            e
    }
    function ar(t) {
        if (t) {
            rr = t;
            var n = te.stringifyQuery(t);
            return ce.del(pt, Rn),
                ce.top(pt, n, dt, Rn),
                !0
        }
        return !1
    }
    function ur(t, n) {
        Mn = MnG;//破解添加标注
        var o, e, r, i, a;
        return (!rr && !ir || t) && (t = t || Mn.href,
            n = n || Fn.referrer,
            a = t,
            (rr = or(te.parseQuery(a)) || function(t) {
                var n = Vn
                    , e = t.match(/^[\w-]+:\/\/([^/]+)(?:\/([^?]+)?)?/)
                    , a = e && e[1];
                if (a) {
                    var u = te.parseQuery(t)
                        , r = "daum:q eniro:search_word naver:query pchome:q images.google:q google:q yahoo:p msn:q bing:q aol:query aol:q lycos:q lycos:query ask:q cnn:query virgilio:qs baidu:wd baidu:word alice:qs yandex:text najdi:q seznam:q rakuten:qt biglobe:q goo.ne:MT search.smt.docomo:MT onet:qt onet:q kvasir:q terra:query rambler:query conduit:q babylon:q search-results:q avg:q comcast:q incredimail:q startsiden:q go.mail.ru:q centrum.cz:q 360.cn:q sogou:query tut.by:query globo:q ukr:q so.com:q haosou.com:q auone:q m.baidu:word wap.baidu:word baidu:word Baidu:bs www.soso:w wap.soso:key www.sogou:query wap.sogou:keyword m.so:q m.sogou:keyword so.com:pq youdao:q sm.cn:q sm.cn:keyword haosou:q".split(" ")
                        , c = ""
                        , s = "";
                    ie.each(r, function(t) {
                        var n = t.split(":")
                            , e = n[0]
                            , r = n[1]
                            , i = u[r]
                            , o = -1 < e.indexOf(".") ? e : "." + e + ".";
                        if (-1 < a.indexOf(o.toLowerCase()) && (s = e,
                            c = i))
                            return !1
                    }),
                    s && ((n = {})[Ge] = s,
                        n[Ye] = "organic",
                    c && (n[tr] = c))
                }
                return n
            }(n)) ? ar(rr) : (i = ce.get(pt),
                rr = j.test(i) ? or(te.isStr(i) ? te.parseQuery(i) : null) : rr),
        rr || (o = void 0,
            e = ce.get("__utmz"),
        (r = e && e.match(/(utmc(tr|sr|cn|md|ct))=([^|()]+)/g)) && ie.each(r, function(t) {
            var n = t.split("=")
                , e = n[0]
                , r = void 0
                , i = n[1] || "";
            "utmcsr" === e ? r = Ge : "utmccn" === e ? r = nr : "utmcmd" === e ? r = Ye : "utmcct" === e ? r = er : "utmctr" === e && (r = tr),
            r && ((o = o || {})[r] = i)
        }),
            ar(rr = o)),
            ir = u),
            rr
    }
    var cr, sr, fr, dr, lr = Nn.JSON;
    lr || (lr = {
        parse: function(t) {
            return new Function("return (" + t + ")")()
        },
        stringify: (cr = ie.isArray,
                sr = {
                    '"': '\\"',
                    "\\": "\\\\",
                    "\b": "\\b",
                    "\f": "\\f",
                    "\n": "\\n",
                    "\r": "\\r",
                    "\t": "\\t"
                },
                fr = function(t) {
                    return sr[t] || "\\u" + (t.charCodeAt(0) + 65536).toString(16).substr(1)
                }
                ,
                dr = /[\\"\u0000-\u001F\u2028\u2029]/g,
                function t(n) {
                    if (null == n)
                        return "null";
                    if (Hn(n, "number"))
                        return isFinite(n) ? n.toString() : "null";
                    if (Hn(n, "boolean"))
                        return n.toString();
                    if (Hn(n, "object")) {
                        if ("function" === zn(n.toJSON))
                            return t(n.toJSON());
                        if (cr(n)) {
                            for (var e = "[", r = 0; r < n.length; r++)
                                e += (r ? ", " : "") + t(n[r]);
                            return e + "]"
                        }
                        if (te.isObj(n)) {
                            var i = [];
                            for (var o in n)
                                n.hasOwnProperty(o) && i.push(t(o) + ": " + t(n[o]));
                            return "{" + i.join(", ") + "}"
                        }
                    }
                    return '"' + n.toString().replace(dr, fr) + '"'
                }
        )
    });
    var vr = lr
        , pr = "__lxsdk_"
        , hr = Nn.localStorage;
    function mr(t) {
        return pr + t
    }
    function gr() {
        return {
            length: 0,
            _data: {},
            setItem: function(t, n) {
                return this.length++,
                    this._data[t] = String(n)
            },
            getItem: function(t) {
                return this._data.hasOwnProperty(t) ? this._data[t] : Vn
            },
            removeItem: function(t) {
                return this.length--,
                    delete this._data[t]
            },
            clear: function() {
                return this.length = 0,
                    this._data = {}
            },
            key: function(t) {
                var n = []
                    , e = this._data;
                return ie.each(e, function(t) {
                    te.hasOwn(e, t) && n.push(t)
                }),
                    n[t]
            }
        }
    }
    var _r = {
        get: function(t) {
            t = mr(t);
            var n = hr.getItem(t);
            return n = Vn !== n ? vr.parse(n) : n
        },
        set: function(t, n) {
            return _r.del(t),
                hr.setItem(mr(t), vr.stringify(n))
        },
        keys: function() {
            for (var t = [], n = void 0, e = 0; e < hr.length; e++)
                0 === (n = hr.key(e)).indexOf(pr) && t.push(n.replace(pr, ""));
            return t
        },
        del: function(t) {
            try {
                return hr.removeItem(mr(t))
            } catch (t) {}
        },
        clear: function() {
            for (var t = this.keys(), n = 0; n < t.length; n++)
                this.del(t[n])
        }
    };
    if (hr) {
        if (hr) {
            var br = "___lxtest";
            _r.nt = !0;
            try {
                _r.set(br, 1),
                    1 !== _r.get(br) ? _r.clear() : _r.del(br)
            } catch (t) {
                try {
                    _r.clear(),
                        hr.setItem(br, 1),
                        hr.removeItem(br)
                } catch (t) {
                    hr = gr(),
                        _r.nt = !1
                }
            }
        }
    } else
        hr = gr(),
            _r.nt = !1;
    var yr = "tag"
        , wr = 18e5;
    function xr(t, n, e, r, i, o) {
        var a = {};
        a.c = t,
            a.k = n,
            a.v = e,
            a.t = r || +new Date,
            a.u = i || "",
            a.r = o || "",
            this.toJSON = function() {
                return te.extend(!0, {}, a)
            }
    }
    var Sr = {
        set: function(t, n, e) {
            var r = void 0
                , i = []
                , o = _r.get(yr) || [];
            if (!te.isStr(n) || "" === n)
                return !1;
            for (var a = 0, u = o.length; a < u; a++)
                kr(r = o[a]) || (t === r.c ? n !== r.k && i.push(r) : i.push(r));
            return r = new xr(t,n,e,+new Date),
                i.push(r.toJSON()),
                _r.set(yr, i),
                !0
        },
        get: function(t, n) {
            var e = void 0
                , r = _r.get(yr);
            if (r && r.length)
                return e = {},
                    ie.each(r, function(t) {
                        var n = {};
                        n[t.k] = t.v,
                        kr(t) || (e[t.c] = te.extend(!0, e[t.c] || {}, n))
                    }),
                    t && n ? e[t] && e[t][n] : t ? e[t] : e
        },
        getAll: function() {
            var t = _r.get(yr)
                , e = {}
                , r = void 0;
            return ie.each(t, function(t) {
                var n = void 0;
                !kr(t) && t.v && (r = !0,
                    (n = {})[t.k] = t.v,
                    e[t.c] = te.extend(!0, e[t.c], n))
            }),
            r && e
        },
        clear: function(n, e) {
            if (!arguments.length)
                return _r.set(yr, []);
            if (te.isStr(n)) {
                var t = _r.get(yr)
                    , r = [];
                ie.each(t, function(t) {
                    (e !== Vn && t.k !== e || n !== t.c) && r.push(t)
                }),
                    _r.set(yr, r)
            }
        }
    };
    function kr(t) {
        var n = te.now();
        return wr < n - t.t
    }
    function Or(t) {
        return t
    }
    function qr(t) {
        try {
            t(Er(this, Ar), Er(this, jr))
        } catch (t) {
            if (this._state === Ir)
                return Nr(new qr(Or), jr, t)
        }
    }
    qr.prototype.then = function(t, n) {
        return function(t, n, e, r) {
            zn(e) === Dr && (n._onFulfilled = e);
            zn(r) === Dr && (n._onRejected = r);
            t._state === Ir ? t[t._pCount++] = n : Cr(t, n);
            return n
        }(this, new qr(Or), t, n)
    }
        ,
        qr.all = function(l) {
            return new qr(function(r, e) {
                    for (var t, n, i, o = 0, a = l.length, u = [], c = 0, s = void 0, f = function(e) {
                        return function(t) {
                            if (e.value = t,
                                e.state = Ar,
                            ++c === e.len && !s) {
                                var n = function(t) {
                                    var n = [];
                                    for (o = 0; o < a; o++)
                                        n.push(t[o] ? t[o].value : void 0);
                                    return n
                                }(u);
                                r(n)
                            }
                        }
                    }, d = function(n) {
                        return function(t) {
                            n.value = t,
                                n.state = jr,
                                c++,
                            s || (s = !0,
                                e(t))
                        }
                    }; o < a; o++)
                        n = t = void 0,
                            n = l[o],
                            i = {
                                value: null,
                                index: o,
                                state: null,
                                len: a
                            },
                            u.push(i),
                            t = i,
                            n.then ? n.then(f(t), d(t)) : qr.resolve(n).then(f(t), d(t))
                }
            )
        }
        ,
        qr.resolve = function(n) {
            if (n instanceof qr)
                return n;
            if (te.isFunc(n.then)) {
                var e = n.then.bind(n);
                return new qr(function(t, n) {
                        e(t, n)
                    }
                )
            }
            return new qr(function(t) {
                    t(n)
                }
            )
        }
        ,
        qr.reject = function(e) {
            return new qr(function(t, n) {
                    n(e)
                }
            )
        }
    ;
    var jr = 0
        , Ar = 1
        , Ir = 2
        , Dr = "function"
        , Tr = "object";
    function Er(n, e) {
        return function(t) {
            return Nr(n, e, t)
        }
    }
    function Cr(e, r) {
        return setTimeout(function() {
            var t = void 0
                , n = e._state ? r._onFulfilled : r._onRejected;
            if (void 0 !== n) {
                try {
                    t = n(e._value)
                } catch (t) {
                    return void Nr(r, jr, t)
                }
                Mr(r, t)
            } else
                Nr(r, e._state, e._value)
        })
    }
    function Nr(t, n, e) {
        if (t._state === Ir) {
            t._state = n,
                t._value = e;
            for (var r = 0, i = t._pCount; r < i; )
                Cr(t, t[r++]);
            return t
        }
    }
    function Mr(n, t) {
        if (t !== n || !t) {
            var e = void 0
                , r = zn(t);
            if (null === t || r !== Dr && r !== Tr)
                Nr(n, Ar, t);
            else {
                try {
                    e = t.then
                } catch (t) {
                    return void Nr(n, jr, t)
                }
                zn(e) === Dr ? function(n, e, t) {
                    try {
                        t.call(e, function(t) {
                            e && (e = null,
                                Mr(n, t))
                        }, function(t) {
                            e && (e = null,
                                Nr(n, jr, t))
                        })
                    } catch (t) {
                        e && (Nr(n, jr, t),
                            e = null)
                    }
                }(n, t, e) : Nr(n, Ar, t)
            }
            return n
        }
        Nr(n, jr, new Error("promise_circular_chain"))
    }
    qr.prototype._state = Ir,
        qr.prototype._pCount = 0;
    var Fr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        , Rr = function() {
        var t = !("undefined" == typeof window || !window.navigator || !window.navigator.userAgent);
        function e() {
            return t ? navigator.userAgent.toLowerCase() : ""
        }
        function r(t) {
            for (var n = {}, e = t.replace(/\([^)]+\)/g, "").split(/\s+/), r = "", i = 0; i < e.length; i += 1) {
                var o = e[i]
                    , a = o.lastIndexOf("/");
                if (a < 0)
                    r = o;
                else {
                    var u = o.slice(0, a);
                    r && (u = r + " " + u,
                        r = ""),
                        n[u] = o.slice(a - o.length + 1)
                }
            }
            return n
        }
        function c(t) {
            var n = t || "0"
                , e = n.match(/^(\d*)/);
            return e ? Number(e[1]) : 0
        }
        function o(t, n) {
            for (var e = "string" == typeof t ? t.split(".") : ["0"], r = "string" == typeof n ? n.split(".") : ["0"], i = Math.max(e.length, r.length), o = 0; o < i; o += 1) {
                var a = c(e[o])
                    , u = c(r[o]);
                if (u < a)
                    return 1;
                if (a < u)
                    return -1
            }
            return 0
        }
        function a(t) {
            var n = -1
                , e = document.createElement("iframe");
            function r() {
                clearTimeout(n);
                var t = e.parentNode;
                t && t.removeChild(e),
                    e.onload = null,
                    e.onerror = null,
                    e = null
            }
            e.style.display = "none",
                e.onload = r,
                e.onerror = r,
                e.src = t,
                (document.body || document.documentElement).appendChild(e),
                n = setTimeout(r, 3e3)
        }
        function u(t) {
            window.KNBTitansX && window.KNBTitansX.sendMessage ? window.KNBTitansX.sendMessage(t) : window.prompt(t)
        }
        function s(t) {
            window.prompt(t)
        }
        var n, i = {
            getDefaultSender: function() {
                var i = Function.prototype
                    , t = e();
                if (/ios|iphone|ipod|ipad/.test(t))
                    i = a;
                else if (/android/.test(t)) {
                    var n = r(t);
                    i = 0 < o(n.android, "4.2.0") ? u : s
                }
                return function(t, n, e) {
                    var r = "js://_?method=" + t + "&callbackId=" + e + "&args=" + encodeURIComponent(n);
                    i(r)
                }
            },
            compareVersion: o,
            parseUserAgent: r,
            canUseSlot: (n = r(e()),
            0 <= o(n.titansx || n.titansnox, "11.13"))
        }, f = i.getDefaultSender, d = i.compareVersion, l = i.parseUserAgent, v = i.canUseSlot, p = "function" == typeof Symbol && "symbol" === Fr(Symbol.iterator) ? function(t) {
                return void 0 === t ? "undefined" : Fr(t)
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : Fr(t)
            }
            , h = {
            sender: null
        };
        function m(t) {
            return "DPApp_callback_" + t
        }
        function g(t, n) {
            var e = m(t)
                , r = window[e];
            r && (r(n),
            r.isSafeDelete && (window[e] = void 0))
        }
        function _(t) {
            var n = t || "DPApp";
            if (!window[n] || !window[n].KNBCore) {
                var e = {
                    dequeue: window[n] && window[n].dequeue || Function.prototype,
                    KNBCore: !0,
                    callback: g
                };
                window[n] = function(t, n) {
                    if (t && "object" === (void 0 === t ? "undefined" : p(t))) {
                        var e = t;
                        return Object.keys(n).forEach(function(t) {
                            e[t] = n[t]
                        }),
                            e
                    }
                    return n
                }(window[n], e)
            }
        }
        var b, y = {
            bindSender: function(t) {
                "function" == typeof t && (h.sender = t)
            },
            sendMessage: function(t, n, e, r) {
                var i = v && r ? "KNBSlot" + r : void 0;
                _(i);
                var o = function(t) {
                    if (!/^[a-zA-Z0-9]*$/.test(t))
                        throw new Error("illegal slot name");
                    var n = Math.floor(1e3 * Math.random());
                    return +(Date.now().toString().slice(-5) + "" + n) + (t ? "_" + t : "")
                }(i)
                    , a = m(o)
                    , u = e || {};
                window[a] = function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                        , n = t.status
                        , e = "action" === n ? "handle" : n;
                    "0" === String(e) && (e = "success");
                    var r = u[e] || u.fail;
                    if ("function" == typeof r)
                        return r(t)
                }
                    ,
                u.handle || (window[a].isSafeDelete = !0),
                h.sender && h.sender(t || "", JSON.stringify(n || {}), o)
            },
            fireCallback: g,
            compareVersion: d,
            parseUserAgent: l
        };
        return b = y,
        "undefined" != typeof window && (h.sender = f(),
        window.KNBCore || (window.KNBCore = b)),
            y
    }()
        , Lr = !1
        , Pr = []
        , Vr = void 0
        , Br = void 0;
    function Ur(t) {
        ze() ? c === Le ? t(Vn, Br) : Lr ? t(Vr, Br) : (Pr.push(t),
            Lr ? t(Vn, Br) : new Promise(function(t) {
                    t({
                        ready: function(t) {
                            return t()
                        },
                        use: function(t, n) {
                            n = n || {},
                                Rr.sendMessage(t, {
                                    data: n.data || {}
                                }, n, "LXAnalyticsSDK")
                        }
                    }),
                        Lr = !0
                }
            ).then(function(t) {
                var n, e, r = Br = t;
                n = Vr,
                    e = r,
                    ie.each(Pr, function(t) {
                        t(n, e)
                    }),
                    Pr = []
            })) : t(e, Br)
    }
    var Qr = 500
        , Jr = "getUserInfo";
    function Kr() {
        return new qr(function(o, r) {
                Ur(function(t, n) {
                    var e = Nn.DPApp
                        , i = I(function() {
                        o({})
                    }, Qr);
                    n ? n.ready(function() {
                        n.use(Jr, {
                            success: function(t) {
                                var n, e, r;
                                f(i),
                                    o((e = {},
                                        (r = (n = t)[k]) && "0" !== r || "dp" !== n.type ? n[k] && (e[k] = n[k]) : e[k] = n[b],
                                    "dp" !== n.type && n[b] && (e[b] = n[b]),
                                    n.unionId && (e.unionId = n.unionId),
                                    n.userId && (e.userId = n.userId),
                                        e))
                            },
                            fail: function(t) {
                                f(i),
                                    r({
                                        code: D
                                    })
                            }
                        })
                    }) : e && e[Jr] ? e.ready(function() {
                        e[Jr]({
                            success: function(t) {
                                f(i);
                                var n = {};
                                (t.dpid || t.userId) && (n.dpid = t.dpid,
                                    n.userId = t.userId,
                                    n.unionId = t.unionId),
                                    o(n)
                            },
                            fail: function(t) {
                                f(i),
                                    r({
                                        code: a,
                                        res: t
                                    })
                            }
                        })
                    }) : r({
                        code: a
                    })
                })
            }
        )
    }
    var Wr, Xr = (Wr = function() {
            for (var t = 1 * new Date, n = 0; t === 1 * new Date && n < 200; )
                n++;
            return t.toString(16) + n.toString(16)
        }
            ,
            function() {
                var t = (screen.height * screen.width).toString(16);
                return Wr() + "-" + Math.random().toString(16).replace(".", "") + "-" + function() {
                    var t = Me
                        , n = void 0
                        , e = void 0
                        , i = []
                        , r = 0;
                    function o(t, n) {
                        var e = void 0
                            , r = 0;
                        for (e = 0; e < n.length; e++)
                            r |= i[e] << 8 * e;
                        return t ^ r
                    }
                    for (n = 0; n < t.length; n++)
                        e = t.charCodeAt(n),
                            i.unshift(255 & e),
                        4 <= i.length && (r = o(r, i),
                            i = []);
                    return 0 < i.length && (r = o(r, i)),
                        r.toString(16)
                }() + "-" + t + "-" + Wr()
            }
    );
    function $r() {
        var t, n = ce.get(mt) || Xr();
        return (t = n) && ce.top(mt, t, lt),
            n
    }
    function zr() {
        return Math.floor(1 + 65535 * te.rnd()).toString(16).substring(1)
    }
    function Hr() {
        var t = []
            , n = +new Date;
        return t.push(n.toString(16)),
            t.push(zr()),
            t.push(zr()),
            t.push(zr()),
            t.join("-")
    }
    function Zr(t) {
        var n = t.match(/(\d+)(?:\.(\d+)(?:\.(\d+))?)?/)
            , e = [];
        if (n)
            for (var r = 1; r < n.length; r++)
                e.push(parseInt(n[r] || 0));
        return e
    }
    function Gr(t, n) {
        var e = Zr(t)
            , r = Zr(n);
        return !(e[0] < r[0]) && (!(e[0] === r[0] && e[1] < r[1]) && !(e[0] === r[0] && e[1] === r[1] && e[2] < r[2]))
    }
    var Yr = "getEnv"
        , ti = M
        , ni = !1
        , ei = !1
        , ri = !1
        , ii = !1
        , oi = []
        , ai = 0
        , ui = void 0
        , ci = te.now();
    function si(t) {
        var n = (t._opts || {}).nativeOptions || {};
        return {
            cb: "_lx" + (100 * te.now() + ai++),
            mn: t._mn,
            cn: t._cn,
            data: t._d || {},
            options: n,
            ver: 4
        }
    }
    function fi(t, n, e, r, i) {
        i = i || {};
        var o = this;
        o._cn = t,
            o._mn = n,
            o._d = e,
            o._cb = r,
            o._opts = i
    }
    function di(t, n, e, r, i) {
        if (F === ti || R === ti)
            return r(ti);
        var o = new fi(t,n,e,Jt,i);
        if (N === ti)
            o.send(function(t, n) {
                r(t, n)
            });
        else if (M === ti) {
            if (oi.push([o, r]),
                !ni) {
                ni = !0;
                new Date;
                new fi(t,Yr,{}).send(function(r, t) {
                    if (new Date,
                    r && C(r),
                        r)
                        ti = F;
                    else {
                        if (ti = N,
                            wn(ot),
                            te.isStr(t))
                            try {
                                t = vr.parse(t)
                            } catch (t) {}
                        var n = (ui = t).sdk_ver || "";
                        ei = Gr(n, "4.0.0"),
                            ri = Gr(n, "4.3.0"),
                            ii = !Gr(n, "4.8.0")
                    }
                    ie.each(oi, function(t) {
                        var n = t[0]
                            , e = t[1];
                        r ? (C(r),
                            e(r)) : n.send(function(t, n) {
                            e(t, n)
                        })
                    })
                })
            }
        } else
            r(L)
    }
    function li() {
        return ei
    }
    var vi = 3
        , pi = 150
        , hi = 5e3
        , mi = 3500
        , gi = !(fi.prototype.send = function(e) {
            var r = this
                , i = si(r)
                , t = "statistics://_lx/?data=" + Jn(vr.stringify(i))
                , n = te.now();
            ui && 5e3 < n - ci && r._mn === Yr && ti === N ? (r._mn,
                e(0, ui)) : (r._mn,
                i.cb,
                function(i, o, a) {
                    if (Le !== c || !window.JavaScriptBridge)
                        return Ur(function(t, n) {
                            if (t)
                                return a(t);
                            var e = !1
                                , r = I(function() {
                                e = !0,
                                    a(p)
                            }, 5e3);
                            n.use(i, {
                                data: o,
                                success: function(t) {
                                    if (f(r),
                                        !e)
                                        if ("success" === t.status) {
                                            var n = t.data || {};
                                            try {
                                                te.isStr(n) && (n = vr.parse(n)),
                                                    a(Vn, n.data ? n.data : t)
                                            } catch (t) {
                                                a(t)
                                            }
                                        } else
                                            a(T)
                                },
                                fail: function() {
                                    f(r),
                                    e || a(T)
                                }
                            })
                        });
                    window.JavaScriptBridge.log(o, function(t) {
                        var n = t.data;
                        try {
                            te.isStr(n) && (n = vr.parse(n)),
                                a(Vn, n.data ? n.data : n)
                        } catch (t) {
                            a(t)
                        }
                    })
                }("lxlog", t, function(t, n) {
                    t ? (r._mn,
                        i.cb,
                        new Date,
                        C(t)) : (r._mn,
                        i.cb,
                        new Date),
                        e(t, n)
                }))
        }
    )
        , _i = []
        , bi = []
        , yi = 0
        , wi = 0
        , xi = /Mozilla.+AppleWebKit.+Chrome.+Safari.+/i.test(Me) && !Pe;
    Pe && .9 < Math.random() && (xi = !0);
    var Si = !Qe && te.isFunc(Ln.sendBeacon);
    function ki(t, n, e, r, i) {
        var o = [{
            project: "web-lx-sdk",
            pageUrl: Mn.href,
            resourceUrl: t,
            category: i ? "jsError" : "ajaxError",
            sec_category: n,
            level: "error",
            unionId: e,
            timestamp: te.now(),
            content: "" + r || ""
        }]
            , a = Di("//catfront.dianping.com/api/log?v=1", Vt, "application/x-www-form-urlencoded");
        a && (a.onerror = a.onreadystatechange = function() {}
            ,
            a.send("c=" + encodeURIComponent(vr.stringify(o))))
    }
    function Oi(t, n) {
        if (vi <= wi)
            return !1;
        n = te.extend({
            cb: $n
        }, n || {});
        var e = vn()
            , r = !en.use_post;
        try {
            r ? function(e, r) {
                var t = Zn().toString(16) + yi++
                    , i = vn()
                    , o = !1
                    , a = !1
                    , u = void 0
                    , c = void 0
                    , n = (s = e,
                    f = [],
                    d = [{
                        l: Dt,
                        s: Tt
                    }, {
                        l: xt,
                        s: St
                    }, {
                        l: kt,
                        s: Ot
                    }, {
                        l: qt,
                        s: jt
                    }, {
                        l: Et,
                        s: Ct
                    }, {
                        l: At,
                        s: It
                    }],
                    ie.each(s, function(t) {
                        var n = te.extend(!0, {}, t);
                        ie.each(d, function(t) {
                            Ti(n, t.l, t.s)
                        });
                        var e = [];
                        ie.each(t.evs, function(r) {
                            r = te.extend(!0, {}, r),
                                ie.each(r, function(t, n) {
                                    if (-1 < n.indexOf("val_") && (r[n.replace("val_", "")] = r[n],
                                        delete r[n]),
                                        Ti(r, "refer_url", "urlr"),
                                    r[n] && "url" === n) {
                                        var e = Mn.hash;
                                        e && (r.urlh = e),
                                            delete r[n]
                                    }
                                }),
                                e.push(r)
                        }),
                            n.evs = e,
                        n[Ct] === n.uuid && delete n.uuid;
                        var r = n[Ot];
                        r && (n[Ot] = r.replace("data_sdk_", "")),
                            delete n.ua,
                            f.push(n)
                    }),
                    f);
                var s, f, d;
                if (ie.each(n, function(t) {
                    c = t.uuid || t.lxid,
                        delete t.ua
                }),
                    !function(t) {
                        for (var n = t.length, e = n, r = 0; r < n; r++)
                            127 < t.charCodeAt(r) && e++;
                        return 1.5 * e < ye
                    }(u = vr.stringify(n)))
                    return ie.each(e, function(t) {
                        ie.each(t.evs, function(t) {
                            var n = t.val_lab;
                            t.val_lab = te.extend(!0, {
                                custom: {
                                    _s: 1
                                }
                            }, n || {})
                        })
                    }),
                        Ai(i, e, {
                            cb: function(t, n) {
                                try {
                                    r(t, n, "ajax-post")
                                } catch (t) {}
                                t !== N && (!o && Si && (o = !0,
                                    qi(i, e)),
                                a || (a = !0,
                                    ki(location.host + location.pathname, "web-report-fail-ajax-post-" + t + "-" + n, c, u)))
                            }
                        });
                var l = ve(u)
                    , v = Jn(l)
                    , p = mn(!0);
                p += -1 < p.indexOf("?") ? "&d=" + v : "?d=" + v,
                    v.length,
                    p = p + "&t=1&r=" + t,
                    xi ? Ai(p, null, {
                        method: "get",
                        cb: function(t, n) {
                            try {
                                r(t, n, "ajax-get")
                            } catch (t) {}
                            t !== N && (!o && Si && (o = !0,
                                qi(i, e)),
                            a || (a = !0,
                                ki(location.host + location.pathname, "web-report-fail-ajax-get-" + t + "-" + n, c, u)))
                        }
                    }) : function t(n, e, r) {
                        var i = void 0
                            , o = Lt + xe++;
                        if (e = e || {},
                            !(2 < (r = r || 0)))
                            return Nn[o] = i = new Image,
                                i.onload = function() {
                                    te.isFunc(e.cb) && e.cb(!0),
                                        Nn[o] = null
                                }
                                ,
                                i.onabort = i.onerror = function() {
                                    Nn[o] = null,
                                        I(function() {
                                            t(n, e, ++r)
                                        }, 100)
                                }
                                ,
                                i.src = n,
                                i;
                        te.isFunc(e.cb) && e.cb(!1)
                    }(p, {
                        cb: function(t) {
                            if (t)
                                try {
                                    r(N, 200, "image-get")
                                } catch (t) {}
                            else
                                Ai(p, null, {
                                    method: "get",
                                    cb: function(t) {
                                        try {
                                            r(t, status, "ajax-get-to-image-get")
                                        } catch (t) {}
                                        t !== N && (!o && Si && (o = !0,
                                            qi(i, e)),
                                        a || (a = !0,
                                            ki(location.host + location.pathname, "web-report-fail-image-get-" + t + "-" + status, c, u)))
                                    }
                                })
                        }
                    })
            }(t, n.cb) : Ai(e, t, n) || Qe && ji(e, t, n) || qi(e, t) && n.cb(N)
        } catch (t) {
            return ki(Mn.path, "report-ajax", 0, t.message, !0),
                !1
        }
        return !0
    }
    function qi(t, n) {
        var e = Ln.sendBeacon;
        return !!e && (ie.each(n, function(t) {
            ie.each(t.evs, function(t) {
                t.lx_inner_data = te.extend(!0, {}, t.lx_inner_data),
                    t.lx_inner_data.beacon = 1
            })
        }),
            t = Ii(t),
        e && e.call(Ln, t, vr.stringify(n)))
    }
    function ji(t, n, e, r) {
        if (!Nn.XDomainRequest)
            return !1;
        try {
            var i = new XDomainRequest;
            return i.open(Vt, Ii(t), !0),
                i.onload = function() {
                    wi = 0,
                    e && e.cb(N, 200, "IEXDR-post"),
                        _i = []
                }
                ,
                i.onerror = function() {
                    wi++,
                    e && e.cb(F, 0, "IEXDR-post")
                }
                ,
                i.ontimeout = function() {
                    wi++,
                    r || (!function(t, n, e, r) {
                        _i = _i.concat(n);
                        var i = void 0
                            , o = ie.reduce(_i, function(t, n) {
                            return n.evs = t.evs.concat(n.evs),
                                i = n.evs.length,
                            pi < i && ie.slice(n.evs, i - pi, i),
                                n
                        });
                        if (_i = [o],
                            bi.push(r),
                            !gi)
                            var a = setInterval(function() {
                                if (vi <= wi)
                                    return clearInterval(a),
                                        !1;
                                e(t, _i, function(n) {
                                    clearInterval(a),
                                        gi = !1,
                                        ie.each(bi, function(t) {
                                            t && t(n)
                                        })
                                }, !0)
                            }, mi)
                    }(t, n, ji, e),
                        gi = !0)
                }
                ,
                i.timeout = hi,
                i.send(vr.stringify(n)),
                !0
        } catch (t) {
            return !1
        }
    }
    function Ai(n, e, r, i) {
        if (!$t())
            return !1;
        try {
            var o = r && r.method || Vt
                , a = te.isFunc(r.cb) && r.cb || Jt
                , u = Di(n, o, "text/plain");
            return u.onreadystatechange = function() {
                if (4 === u.readyState) {
                    var t = u.status;
                    200 <= t && t < 400 ? (wi = 0,
                        a(N, u.status, "ajax-" + o),
                        _i = []) : i ? a(L, u.status, "ajax-" + o) : Ai(n, e, r, !0),
                        u.onreadystatechange = null
                }
            }
                ,
                u.onerror = function() {
                    a(F, u.status, "ajax-" + o)
                }
                ,
                u.send(o === Vt && vr.stringify(e) || null),
                !0
        } catch (t) {
            return ki(n, "web-report-fail-runtime", 0, t.stack || t.message),
                !1
        }
    }
    function Ii(t) {
        var n = "_lxsdk_rnd=" + (Zn().toString(16) + yi);
        return -1 === t.indexOf("?") ? t + "?" + n : t + "&" + n
    }
    function Di(t, n, e) {
        var r = new (Kt());
        return r.open(n || Vt, Ii(t), !0),
            r.timeout = hi,
            r.setRequestHeader("Content-Type", e),
            r
    }
    function Ti(t, n, e) {
        return Xn.call(t, n) && t[n] && (t[e] = t[n],
            delete t[n]),
            t
    }
    var Ei = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        , Ci = {}
        , Ni = ct
        , Mi = []
        , Fi = null
        , Ri = {
        s: y,
        l: g,
        a: O,
        w: "wxid"
    }
        , Li = "_lxsdk_wxenv_"
        , Pi = ["sdk_ver", "ua"];
    function Vi(t) {
        var n = /(^\w+-\w+-\w+-\w+-\w+)/;
        if (n.test(t)) {
            var e = t.match(n);
            ce.top(ht, e[1], lt)
        } else
            t && !/(^\w+\.\d+\.\d+\.\d+\.\d+)/.test(t) && t.length < 100 ? ce.top(ht, t, lt) : ce.top(ht, "", -1)
    }
    var Bi = 0
        , Ui = 1
        , Qi = 2
        , Ji = "|";
    function Ki(t) {
        var n = ce.get(_t);
        return n ? n.split(Ji)[t] : ""
    }
    function Wi(t, n, e) {
        var r, i, o;
        ce.top(_t, (r = n,
            i = e,
            (o = []).push(t || Xi()),
            o.push(r || $i()),
            o.push(i || zi()),
            o.join(Ji)), vt)
    }
    function Xi() {
        return Ki(Bi)
    }
    function $i() {
        return Ki(Ui)
    }
    function zi() {
        var t = 0
            , n = Ki(Qi);
        return isNaN(n) || (t = parseInt(n)),
            t < 0 ? 0 : t
    }
    var Hi = void 0;
    function Zi(t) {
        var n = Yn(Hi) && Hi || zi()
            , e = !1;
        return !0 === t && (n++,
            e = !0),
        (!n || n < -1) && (e = !(n = 0)),
            Hi = n,
        e && (Wi(Vn, Vn, n),
            Hi = null),
            n
    }
    function Gi(t, c) {
        return new qr(function(a, u) {
                I(function() {
                    u({
                        code: p
                    })
                }, 3e3),
                    di(t, "getEnv", {}, function(t, n) {
                        if (t)
                            u(t);
                        else {
                            Fi = en.nativeSDKVer = n.sdk_ver,
                                o = en.nativeSDKVer,
                            te.isStr(o) && (on.MVL = -1 < Se(o, "4.14.0"),
                                on.QR = -1 < Se(o, "4.14.0"),
                                on.getReqId = -1 < Se(o, "4.12.0"));
                            var e = {
                                uuid: b,
                                msid: y,
                                uid: x,
                                dpid: k,
                                appnm: O,
                                union_id: s
                            };
                            for (var r in c = c || {},
                                e) {
                                var i = e[r];
                                n[r] && (c[i] = n[r])
                            }
                            a(c)
                        }
                        var o
                    })
            }
        )
    }
    function Yi() {
        var t = ce.get(bt);
        if (t) {
            var n = t.split(",")
                , e = /^\d+\.\d{5,}$/;
            return 3 !== n.length ? null : e.test(n[0]) && e.test(n[1]) ? {
                lat: n[0],
                lng: n[1],
                tm: n[2]
            } : null
        }
        return null
    }
    function to(t) {
        return te.extend(!0, {}, t)
    }
    function no(t) {
        var n = Fn.getElementsByTagName("meta")
            , e = pe(n, "lx:appnm")
            , r = pe(n, "lx:defaultAppnm")
            , i = Le
            , o = Fn.domain
            , a = yn();
        return fn("appnm", e),
            fn("defaultAppnm", r),
        Pe && Ie(Le || e || r || o),
            Ve ? e || (2 === a ? t : i || (r || o)) : e || (i || (r || o))
    }
    function eo() {
        var t, n, e, r, i, o, a = Le === m || Le === h || Ze, u = (t = ce.get(ht),
            n = ce.get("iuuid") || ce.get("uuid") || t,
            e = Xi(),
            r = $i(),
            i = ce.get(gt) || ce.get(k),
            o = {},
        n && (o[b] = n),
        e && (o[y] = e),
        t && (o[g] = t),
        r && (o[x] = r),
        i && (o[k] = i),
            o), c = void 0, s = {};
        a && (s = function(t) {
            var n = {};
            if (j.test(t)) {
                var e = te.parseQuery(t);
                if (e[b] && (n[b] = e[b]),
                e[w] && (n[w] = e[w]),
                e[S] && (n[x] = e[S]),
                    e.__lxsdk_params) {
                    var i = {}
                        , r = decodeURIComponent(decodeURIComponent(e.__lxsdk_params)).split(";");
                    ie.each(r, function(t) {
                        var n = t.split(":")
                            , e = n[0]
                            , r = n[1];
                        if (r) {
                            if (!Ri[e])
                                try {
                                    r = Ee(r)
                                } catch (t) {}
                            i[e] = r
                        }
                    }),
                        n[q] = i
                }
                return n
            }
            return n
        }(Mn.href)),
        Le === m && (s[b] ? (u[b] ? s[b] !== u[b] ? cn("uuidState", "2") : cn("uuidState", "3") : (u[b] = s[b],
            cn("uuidState", "1")),
            delete s[b]) : cn("uuidState", "0")),
            (c = te.extend(u, s)).ct = Ue;
        var f = ur();
        f && (c[A] = f);
        var d = $r();
        c[g] = d,
        c[b] || (c[b] = d),
        c[y] || (c[y] = Hr(),
            Wi(c[y], c.uid || "")),
        c[b] && Vi(c[b]);
        var l = no();
        te.isStr(l) && (c[O] = l);
        var v, p = (v = Pn.replace(/^.*([A-Za-z-]+)\/com\.(sankuai(?!\.meituan\.)|meituan(?!\.sankuai\.)|dianping|sankuai\.meituan|meituan\.sankuai)\.([.A-Za-z0-9-]+)\/(\d+[.\d]+).*$/, "$4"),
            /^\d+(\.\d+)+$/.test(v) ? v : null);
        return p && (c.app = p),
            c
    }
    function ro(n) {
        return function(t) {
            var e = t;
            return n !== t && (e = te.extend(n, t)),
                e.dpid && e.uid ? e : Kr().then(function(t) {
                    var n = {};
                    return t.dpid && (n.dpid = t.dpid,
                    t.userId && (n.uid = "" + t.userId),
                    t.unionId && (n.union_id = t.unionId)),
                        e = te.extend(e, n)
                }, function(t) {
                    return C(t),
                        e
                })
        }
    }
    var io = function(t) {
        nn();
        var a = eo();
        if (t && Le || ze()) {
            var n = Gi(t, a);
            return r === Le && (n = n.then(ro(a), function(t) {
                return C(t),
                    ro(a)()
            })),
                n.then(function(t) {
                    var n = no(t[O])
                        , e = t[k]
                        , r = t[b]
                        , i = t[s]
                        , o = t;
                    return t !== a && (o = te.extend(a, t)),
                    te.isStr(n) && (o[O] = n),
                    r && Vi(r),
                    e && ce.top(gt, e, lt),
                    i && ce.top("_lxsdk_unoinid", i, lt),
                        o
                }, function(t) {
                    return t && C(t),
                        a
                })
        }
        var e, o = to(a), u = o[q];
        return (e = te.now(),
            new qr(function(t) {
                    if (Ze)
                        if (/miniProgram/i.test(Pn))
                            t(!0);
                        else if (Nn.WeixinJSBridge && Nn.WeixinJSBridge.invoke)
                            t("miniprogram" === Nn.__wxjs_environment);
                        else {
                            var n = setTimeout(function() {
                                en.wx_t = te.now() - e,
                                    t(!1)
                            }, 5e3);
                            Fn.addEventListener("WeixinJSBridgeReady", function() {
                                clearTimeout(n),
                                    en.wx_t = te.now() - e,
                                    t("miniprogram" === Nn.__wxjs_environment)
                            })
                        }
                    else
                        t(!1)
                }
            )).then(function(t) {
            if (en.inWXMP = t) {
                if ("object" === (void 0 === Te ? "undefined" : Ei(Te)) && !te.isObj(u))
                    for (var n in u = {},
                        Te) {
                        var e = Te[n];
                        0 === n.indexOf(Li) && (u[n.slice(Li.length)] = e)
                    }
                var r = function(t) {
                    var n = Ri[t] || t
                        , e = u[t];
                    e && (o[l] = o[l] || {},
                    o[n] && (o[l][n] = o[n]),
                    ie.find(Pi, function(t) {
                        return t === n
                    }) || (o[n] = e));
                    try {
                        Te.setItem(Li + n, e || "")
                    } catch (t) {}
                };
                for (var i in u)
                    r(i)
            }
            return delete o[q],
                qr.resolve(o)
        })
    };
    function oo(t) {
        return ft === Ni ? qr.resolve(to(Ci)) : st === Ni ? new qr(function(n) {
                var t;
                t = function(t) {
                    n(t)
                }
                    ,
                    Mi.push(t)
            }
        ) : (Ni = st,
            io(t).then(function(e) {
                return Ci = te.extend(!0, {}, e || {}),
                    Ni = ft,
                    ie.each(Mi, function(t, n) {
                        te.isFunc(t) && Mi[n](e)
                    }),
                    e
            }))
    }
    var ao = /([a-fA-F0-9-]+)(\.\d+)/
        , uo = "_hc.v"
        , co = 525600
        , so = ""
        , fo = /(dper|dianping|51ping)\.com/.test(Rn);
    function lo() {
        return function() {
            function t() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
        }() + "." + Math.round(+new Date / 1e3)
    }
    function vo() {
        return !so && fo && (so = function() {
            var t = ce.get(uo);
            if (t || (t = lo(),
                ce.top(uo, t, co)),
                t) {
                var n = t.match(ao);
                return n ? n[1] : ""
            }
            return ""
        }()),
            so
    }
    var po = function() {
        var t = void 0;
        try {
            var n = document;
            if (n.querySelectorAll) {
                var e = n.querySelectorAll("head script")
                    , r = n.querySelectorAll("body script")
                    , i = [];
                ie.each(e, function(t) {
                    i.push(t)
                }),
                    ie.each(r, function(t) {
                        i.push(t)
                    });
                for (var o = 0; o < i.length; o++) {
                    var a = i[o].innerHTML.match(/\[['"]\s*_setPageId\s*['"]\s*,\s*(\d+)\s*\]/);
                    if (a) {
                        t = a[1];
                        break
                    }
                }
            }
        } catch (t) {}
        return function() {
            return t
        }
    }();
    function ho(t) {
        var n = this;
        n.s = t;
        var e = void 0
            , r = _r.get(Rt) || {
            s: t,
            d: n.d
        };
        r.s !== t ? (_r.del(Rt),
            e = n.d = []) : e = n.d = r.d || [],
            n.l = e && e.length || 0
    }
    var mo = null;
    function go() {
        return mo
    }
    function _o(t) {
        return Nn.sessionStorage && Nn.sessionStorage.getItem ? Nn.sessionStorage.getItem(t) : ce.get(t)
    }
    function bo(t, n) {
        return Nn.sessionStorage && Nn.sessionStorage.setItem ? Nn.sessionStorage.setItem(t, n) : ce.top(t, n, vt)
    }
    function yo(t) {
        bo(wt, t)
    }
    function wo() {
        var t = _o(wt);
        return t || ""
    }
    function xo(t) {
        bo(yt, t)
    }
    function So() {
        var t = _o(yt);
        return t || ""
    }
    var ko = "QR"
        , Oo = 20480 / 30
        , qo = 2592e5
        , jo = {}
        , Ao = void 0
        , Io = !(ho.prototype = {
        constructor: ho,
        set: function(t, n, e) {
            var r = this
                , i = r.l
                , o = r.d
                , a = r.indexOf(t)
                , u = {
                scid: 0 < i ? o[i - 1].scid + 1 : 0,
                cid: t,
                bid: n,
                sf: e
            };
            -1 < a ? o.splice(a, i - a, u) : o.push(u),
                r.l = o.length,
                _r.set(Rt, {
                    s: r.s,
                    d: o
                })
        },
        indexOf: function(t) {
            for (var n = this.d || [], e = 0, r = n.length; e < r; e++) {
                if (n[e].cid === t)
                    return e
            }
            return -1
        },
        toJSON: function() {
            var t = this.d;
            return t && t.length ? t : null
        }
    })
        , Do = []
        , To = !1
        , Eo = ["ua"].join("|") + "|"
        , Co = ["lxcuid", "category", "sdk_ver", "utm", "uuid", "msid", "ct", "appnm"]
        , No = ["utm", "seq", "tm", "nm", "val_ref", "lng", "val_lab", "req_id", "lat", "s_from", "val_cid", "val_bid"];
    function Mo() {
        if (!Io) {
            var t = Zn()
                , n = [Ao.opts.cid]
                , e = 0
                , r = function(t, n) {
                if (!t)
                    try {
                        var e = n;
                        if (te.isObj(n) || (e = JSON.parse(n)),
                        0 === e.code)
                            (function t(n) {
                                    var e = 0
                                        , r = 0;
                                    var i = [];
                                    var o = Zn() - qo;
                                    for (var a in n)
                                        e += n[a].bids.length,
                                            r += n[a].bids.length;
                                    if (!r)
                                        return;
                                    for (var u in jo)
                                        e += jo[u].bids.length,
                                        jo[u].tm < o && i.push(u);
                                    Oo < e && (i.length ? (ie.each(i, function(t) {
                                        delete jo[t]
                                    }),
                                        t(n)) : jo = {});
                                    jo = te.extend(jo, n);
                                    setTimeout(function() {
                                        _r.set(ko, jo)
                                    }, 10)
                                }
                            )(function(t) {
                                if (!te.isObj(t))
                                    return;
                                var i = {}
                                    , o = Zn();
                                return ie.each(t, function(n, r) {
                                    i[r] = i[r] || {
                                        cid: r,
                                        tm: o,
                                        bids: [],
                                        envInfo: (n.envInfo || {}).quickReport || [],
                                        evsInfo: (n.evsInfo || {}).quickReport || []
                                    },
                                        delete n.envInfo,
                                        delete n.evsInfo;
                                    var t = function(e) {
                                        var t = n[e].quickReport || [];
                                        ie.each(t, function(t) {
                                            var n = {
                                                tp: e,
                                                id: t
                                            };
                                            i[r].bids.push(n)
                                        })
                                    };
                                    for (var e in n)
                                        t(e)
                                }),
                                    i
                            }(e.data)),
                                Io = !0;
                        else {
                            if (304 !== e.code)
                                return void e.message;
                            Io = !0
                        }
                    } catch (t) {}
            };
            for (var i in jo)
                e++,
                    t = Math.min(jo[i].tm, t);
            0 === e && (t = 0);
            var o = ("https://ocean.sankuai.com/delivery/api/web-configFile?\n                timestamp=" + t + "\n                &cidList=" + n.join(",") + "\n                &rnd=" + Math.random()).replace(/\s/g, "");
            "https" === we() && Ai(o, {}, {
                cb: r
            }) || function(t, n, e, r) {
                var i = void 0
                    , o = (r = r || {}).outTime || 5e3
                    , a = "__lxsdk_jsonp_callback_" + Math.random().toString(16).slice(2, 10);
                /^([^?]+)\?/.test(t) ? t = t.replace(/^([^?]+)\?/, "$1?" + n + "=" + a + "&") : /^([^#]+)#/.test(t) ? t = t.replace(/^([^#]+)#/, "$1?" + n + "=" + a + "#") : t += "?" + n + "=" + a;
                var u = Fn.createElement("script");
                u.src = t,
                    Nn[a] = function(t) {
                        clearTimeout(i);
                        try {
                            e(Vn, t)
                        } catch (t) {}
                        delete window[a]
                    }
                    ,
                    u.type = "application/javascript",
                    u.charset = "utf-8",
                    u.setAttribute("async", "true"),
                    Fn.body.appendChild(u),
                    i = I(function() {
                        try {
                            e("timeout")
                        } catch (t) {}
                        delete window[a]
                    }, o),
                    I(function() {
                        Fn.body.removeChild(u)
                    }, 0)
            }(o, "callback", r)
        }
    }
    function Fo(t, n, e) {
        if (!en.useQR)
            return !1;
        if (!jo[n])
            return !1;
        for (var r = jo[n].bids, i = 0, o = r.length; i < o; i++) {
            var a = r[i];
            if (a.tp == t) {
                if (t === P && a.id == n)
                    return !0;
                if (a.id == e)
                    return !0
            }
        }
        return !1
    }
    function Ro(t, n, e) {
        var r = {}
            , i = {};
        if (t && jo[t]) {
            var o = Co.concat(jo[t].envInfo || [])
                , a = No.concat(jo[t].evsInfo || []);
            ie.each(o, function(t) {
                n.hasOwnProperty(t) && n[t] && (i[t] = n[t])
            }),
                ie.each(a, function(t) {
                    e.hasOwnProperty(t) && Eo.indexOf(t + "|") < 0 && (r["evs." + t] = e[t])
                });
            var u = te.extend(!0, i, r);
            Do.push(u),
                f(To),
                To = setTimeout(function() {
                    Ai("https://" + Qt + "/?rnd=" + Math.random(), Do, {
                        nm: e.nm,
                        cb: Jt
                    }),
                        Do = []
                }, 0)
        }
    }
    !function() {
        var t = _r.get(ko);
        if (t)
            try {
                var n = void 0;
                n = te.isObj(t) ? t : JSON.parse(t),
                    jo = te.extend(!0, jo, n)
            } catch (t) {}
    }(),
        function n() {
            var e = Ka();
            return new qr(function(t) {
                    e ? t(e) : setTimeout(function() {
                        n().then(t)
                    }, 100)
                }
            )
        }().then(function(t) {
            Ao = t,
            en.useQR && (we(),
                Mo())
        });
    var Lo = "category"
        , Po = "setEvs"
        , Vo = 5e3
        , Bo = {
        overlen_cutoff: 1
    }
        , Uo = {
        code: 0,
        status: 200,
        type: "native-report"
    }
        , Qo = {
        code: -3,
        status: 200,
        type: "native-report"
    }
        , Jo = "val_bid"
        , Ko = "page"
        , Wo = "s_from"
        , Xo = "lat"
        , $o = "lng"
        , zo = []
        , Ho = Fn.referrer
        , Zo = []
        , Go = void 0
        , Yo = void 0
        , ta = {}
        , na = 0
        , ea = 0
        , ra = void 0
        , ia = function(t, n, e) {
        if (e) {
            var r = {}
                , i = {
                custom: r
            };
            r[n] = e,
                t = te.extend(!0, t || {}, i)
        }
        return t
    }
        , oa = function(t, n) {
        var e, r, i = (e = t,
            r = "fn_" + parseInt(1e6 * Gn()),
            Ce[r] = e,
            r);
        return I(function() {
            Ne(i, {
                code: -1,
                status: 408,
                type: "overtime"
            })
        }, Yn(n) && n || 2e3),
            i
    };
    function aa(t, n) {
        var e = this;
        e.env = n || {},
            e.currentEvs = {},
            e.opts = te.extend(!0, {}, t),
            zo.push(e),
            An = e
    }
    var ua = aa.prototype;
    function ca(t) {
        return 6 === t._ptpvs
    }
    function sa() {
        return !na
    }
    function fa(t) {
        return (t = t || {}) && !te.isObj(t) && (t = {
            cid: "" + t
        }),
            t
    }
    function da(e, r, i, o, a) {
        var u = this
            , c = oa((a = a || {}).callback, a.callbackTimeout)
            , t = a
            , n = t.isLeave
            , s = t.currentPageInfo
            , f = t.mvDelay
            , d = t.sf
            , l = Fo(e, r, i);
        if (yn() === at) {
            var v = ma(u)
                , p = xa(Sr.getAll())
                , h = ba(e, r, i, o)
                , m = h.body
                , g = h.ev
                , _ = Sa(v, m, p);
            if (l && Ro(r, v, g),
            e === Q) {
                if (f)
                    return te.run(m, function(t) {
                        Zo.push(t)
                    }),
                        void I(function() {
                            if (Zo.length) {
                                var t = Sa(v, Zo, p);
                                u.send(t, {
                                    cbkey: c
                                }),
                                    Zo = []
                            }
                        }, f * it)
            } else {
                if (e === J)
                    return void In.call(u, J, v, m[0], {
                        tag: p
                    });
                if (e === B) {
                    if (s && function(t, n) {
                        te.isObj(t[Nt]) || (t[Nt] = {});
                        t[Nt][Ko] = n
                    }(g, u._cpi),
                        _ = Sa(v, m, p),
                        n) {
                        var b = _e()
                            , y = _a(V, r, Vn, b);
                        _.evs.push(y),
                            yo(r),
                            xo(Go)
                    }
                    Pe && d && go().set(r, i, d)
                }
            }
            u.send(_, {
                nm: e,
                cbkey: c
            })
        } else {
            var w = u.env
                , x = void 0
                , S = ga({
                isQuickReport: l
            })
                , k = [wa.call(u, e, r, i, o)];
            if (e === B && (x = {
                sf: d
            },
            u._cpi && (x.cpi = u._cpi),
                k = [wa.call(u, e, r, i, o, null, x)],
                n)) {
                var O = _e()
                    , q = wa.call(u, V, r, null, O);
                k.push(q),
                    yo(r),
                    xo(Go)
            }
            w[A] && (k = function(t, n) {
                if (!ie.isArray(t) || !t.length)
                    return t;
                if (!te.isObj(t[0][Nt]))
                    return t[0][Nt] = {
                        page: {
                            utm: n[A]
                        }
                    },
                        t;
                if (!te.isObj(t[0][Nt][Ko]))
                    return t[0][Nt][Ko] = {
                        utm: n[A]
                    },
                        t;
                return t[0][Nt][Ko] = te.extend(!0, t[0][Nt][Ko], {
                    utm: n[A]
                }),
                    t
            }(k, w));
            var j = ha(w[Lo]);
            new Date;
            di(j, Po, k, function(t, n) {
                t ? (wn(at),
                    C(t),
                    new Date,
                    Ne(c, Qo),
                    da.call(u, e, r, i, o, a)) : (Ne(c, Uo),
                    new Date)
            }, {
                nativeOptions: S
            })
        }
    }
    function la() {
        return Go || (Go = va()),
            Go
    }
    function va() {
        return te.now().toString(16) + "-" + Math.floor(65535 * te.rnd()) + "-" + Math.floor(65535 * te.rnd())
    }
    function pa(t) {
        var n, e, r = t.nm;
        P === r ? (t.nm = "mpt",
            t.val_act = "pageview") : V === r ? (t.nm = "report",
            t.val_act = "quit") : (t.nm = "mge",
            t.event_type = (n = r,
                (e = {})[W] = "order",
                e[X] = "pay",
                e[B] = "click",
                e[K] = "return",
                e[Q] = "view",
                e[U] = "click",
            e[n] || r)),
            t.nt = 0,
            t.isauto = 8
    }
    function ha(t) {
        return 0 === t.indexOf("data_sdk_") && (t = t.replace(Lo, "")),
            t
    }
    function ma(t) {
        var n, e, r = te.extend(!0, {}, t.env);
        r[Lo] = (n = r[Lo],
            e = "data_sdk_",
        0 !== n.indexOf(e) && (n = e + n),
            n),
        ra || Xi() || (r[y] = ra = Hr(),
            Wi(r[y], r.uid || ""),
            I(function() {
                ra = null
            }, 0));
        var i = r.utm
            , o = {
            ua: Me,
            sdk_ver: _,
            ch: i && i.utm_source ? i.utm_source : "web",
            sc: Xe
        };
        o[Dt] = _,
        en.debug && (o._misid = en.debug);
        var a = te.extend(!0, o, r);
        return Ve && !_n() && delete a.ch,
            a
    }
    function ga(t) {
        return (t = t || {}).isQuickReport = an("QR") && !!t.isQuickReport,
            t
    }
    function _a(t, n, e, r, i) {
        i = i || E;
        var o, a, u, c = Zi(!0), s = Yi(), f = te.isObj(r) && r.custom || {}, d = void 0, l = P === t, v = W === t, p = X === t, h = {
            nm: t,
            tm: te.now(),
            nt: en.inWXMP ? ut : at,
            isauto: i,
            val_cid: n,
            req_id: la(),
            seq: c,
            lx_inner_data: sn()
        };
        if (l) {
            var m = Mn.href;
            h.url = m,
            (d = Ho) && (h.refer_url = d),
            i === E && (Ho = m)
        }
        (v || l || p) && Pe && (o = h,
        (a = go().toJSON()) && (o[Wo] = a),
            h = o),
            r = ia(r, "_hguid", vo()),
        (u = r) && u.custom && "v3" === u.custom._api && !n && (h.val_cid = Fn.title || Mn.pathname,
            r = ia(r, "_cid", 1)),
        te.isObj(f) && "v3" === f._api && (h.lx_inner_data._api = "v3",
            delete f._api);
        try {
            h.lx_inner_data.ht = _n()
        } catch (t) {}
        return l && (r = ia(r, "_hpid", po()),
        en.wx_t && (r = ia(r, "_wx_t", en.wx_t))),
        e && (h[Jo] = e),
        s && (h[Xo] = s.lat,
            h[$o] = s.lng),
        r && (JSON.stringify(r).length >= Vo && (r = Bo),
        (h[Nt] = r).lat && r.lng && (h[Xo] = r.lat,
            h[$o] = r.lng)),
            h
    }
    function ba(t, n, e, r, i) {
        var o = _a(t, n, e, r, i);
        return {
            body: function(t) {
                {
                    if (Zo && 0 < Zo.length) {
                        var n = Zo;
                        return Zo = [],
                            n.push(t),
                            n
                    }
                    return [t]
                }
            }(o),
            ev: o
        }
    }
    function ya(t) {
        return Be ? t : Re && !ii ? t : Jn(t)
    }
    function wa(t, n, e, r, i, o) {
        i = i || E;
        var a = (o = o || {}).fromWA
            , u = this.env.appnm
            , c = Yi()
            , s = !xn
            , f = void 0
            , d = {
            nm: t,
            tm: te.now(),
            nt: ot,
            isauto: i,
            val_cid: n,
            shouldCover: s,
            lx_inner_data: sn()
        };
        d = te.extend(!0, d, ta),
        Yo && (d.req_id = Yo),
        o.sf && (d._sf = o.sf);
        var l = void 0
            , v = te.extend(!0, {}, r || {})
            , p = P === t;
        if (p) {
            var h = ya(Mn.href);
            l = {
                ua: Me,
                url: h,
                _fromWA: !!a
            };
            var m = ur();
            m && m.utm_source && (l.utm = m),
            (f = Ho) && (l.refer_url = ya(f)),
            i === E && (Ho = h)
        } else
            l = {};
        if (d = te.extend(d, {
            web_cid: n,
            web_req_id: la(),
            web_refer_cid: wo(),
            web_refer_req_id: So(),
            web_first_pv: !!(ea <= 1 && Nn.history && 1 === Nn.history.length)
        }),
            ie.each({
                web_req_id: la(),
                web_sdk_ver: _,
                lxcuid: $r(),
                web_appnm: u
            }, function(t, n) {
                te.isStr(t) && (l[n] = t)
            }),
        te.isObj(v.custom) && "v3" === v.custom._api && (l.web_appnm = function(t) {
            if (te.isStr(t))
                return t && tn[t] || tn
        }("appnm"),
            d.lx_inner_data._api = "v3",
            delete v.custom._api),
        o.cpi && !v.page && (v.page = o.cpi),
            v.custom = te.extend(!0, v.custom, l),
            v = ia(v, "_hguid", vo()),
            p) {
            v = ia(v, "_hpid", po());
            try {
                var g = void 0;
                ae(document.scripts, function(t) {
                    var n = t.src;
                    /\/\/analytics\.meituan\.(net|com)\//.test(n) && (g = n)
                }),
                    v = ia(v, "_lxsdk_url", g)
            } catch (t) {}
        }
        return t !== U || ri ? li() || pa(d) : li() ? d.nm = B : pa(d),
        c && (d[Xo] = c.lat,
            d[$o] = c.lng),
        e && (d[Jo] = e),
        v && JSON.stringify(v).length >= Vo && (v = Bo),
            d[Nt] = v,
        p && !li() && (d.val_val = v,
            delete d[Nt]),
            d
    }
    function xa(t) {
        return t
    }
    function Sa(t, n, e) {
        return ie.isArrayLike(n) || (n = [n]),
            te.run(n, function(t) {
                t && e && (t.tag = e)
            }),
            t.evs = n,
            t
    }
    function ka(t, n) {
        var e = {};
        return e[rt] = n,
            te.extend(e, t)
    }
    function Oa(e, t, n, r) {
        var i, o, a, u, c = (i = t,
            o = n,
            a = r,
            u = null,
            !te.isStr(i) || o || a ? te.isObj(i) && te.isStr(o) && !a && (u = o,
                o = null) : (u = i,
                i = null),
        u && (a = te.extend({
            cid: u
        }, a || {})),
            {
                lab: i,
                env: o,
                opts: a
            }), s = c.lab, f = c.env;
        r = fa(c.opts);
        var d = e.opts.cid = r.cid || e.opts.cid;
        r = te.extend({
            cid: d
        }, r),
        f && te.isObj(f) && ie.each(f, function(t, n) {
            e._dt.set(n, t, Vn, !0)
        }),
            e._dt.pageView(s, r)
    }
    function qa(t, n) {
        this.env = t || {},
            this.opts = n || {},
            this._t = []
    }
    ua.set = function(t, n, e, r) {
        var i = this
            , o = i.env;
        if (te.isObj(t))
            ae(t, function(t, n) {
                i.set(n, t)
            });
        else if (!r && en.inWXMP && te.isObj(o[l]) && o[l][t] ? o[l][t] = n : o[t] = n,
            fn(t, n),
        "utm" === t && te.isObj(n) && ar(n),
        ot !== yn() || Pt[t])
            te.isFunc(e) && e(o, i);
        else {
            var a = {}
                , u = ha(o[Lo]);
            a[t] = n,
                di(u, "setEnv", a, function() {
                    te.isFunc(e) && e(o, i)
                })
        }
    }
        ,
        ua.get = function(t, n) {
            te.isFunc(n) && n(this.env[t], this)
        }
        ,
        ua.pageView = function(e, r) {
            r = fa(r) || {};
            var t = void 0
                , i = this
                , n = r.fromWA
                , o = r.withlab
                , a = oa(r.callback, r.callbackTimeout)
                , u = i.opts.cid
                , c = r.cid || u
                , s = r.isauto || E
                , f = r.isAutoInit
                , d = r.reportStatus
                , l = u && !(ca(i) || f) && !sa()
                , v = d === at || at === yn()
                , p = i.env;
            if (n && o ? (s = 6,
                e = this._cpi || {}) : this._cpi = e,
            l && !ln()) {
                var h = _e(!0);
                t = v ? _a(V, u, null, h) : wa.call(i, V, u, null, h),
                    yo(c),
                    xo(Go),
                    dn(0)
            }
            u && (ca(i) || sa()) || (Go = va()),
                i.opts.cid = c;
            var m = Fo(P, c);
            if (v) {
                var g = ma(i)
                    , _ = xa(Sr.getAll())
                    , b = ba(P, c, null, e, s)
                    , y = b.body;
                l && t && y.unshift(t);
                var w = Sa(g, y, _);
                m && Ro(c, g, b.ev),
                    this.send(w, {
                        nm: P,
                        cbkey: a
                    }),
                    ea++,
                f || na++
            } else {
                var x = ga({
                    isQuickReport: m,
                    shouldCoverCid: !0,
                    needCachePD: !0
                })
                    , S = [wa.call(i, P, c, null, e, s, {
                    fromWA: n
                })];
                l && t && S.push(t),
                    ie.each(S, function(t) {
                        t.appnm = p.appnm
                    }),
                    di(ha(p[Lo]), Po, S, function(t, n) {
                        t ? (wn(at),
                            Ne(a, Qo),
                            i.pageView(e, r),
                            ki(Mn.href, "native-report-error", i.env.union_id, C(t))) : (ea++,
                        f || na++,
                            Ne(a, Uo))
                    }, {
                        nativeOptions: x
                    })
            }
            i.currentEvs = {
                cid: c,
                req_id: la(),
                refer_cid: wo(),
                refer_req_id: So()
            },
                i._ptpvs = f ? 6 : E
        }
        ,
        ua.pageDisappear = function(e, r) {
            r = te.extend({}, r);
            var i = this
                , t = r.cid || i.opts.cid
                , n = r.getDurationFromLastPV || !1
                , o = r.shouldStore;
            dn(d);
            var a = _e(n);
            if (e = te.extend(a, e),
                yo(t),
                xo(Go),
            at === yn() || o) {
                var u = Sa(ma(i), _a(V, t, null, e), xa(Sr.getAll()));
                o && _r.nt ? (Ae() && (en.inWXMP && te.isObj(u[l]) && u[l][O] ? u[l][O] = De() : u[O] = De()),
                    _r.set(v, u)) : i.send(u)
            } else {
                var c = this.env
                    , s = ga()
                    , f = [wa.call(i, V, t, null, e)];
                di(ha(c[Lo]), Po, f, function(t, n) {
                    t && (wn(at),
                        i.pageDisappear(e, r))
                }, {
                    nativeOptions: s
                })
            }
            En()
        }
        ,
        ua.systemCheck = function(e, r, i) {
            i = te.extend({}, i);
            var o = this
                , t = i.cid || o.opts.cid
                , n = !!i.isLXLog;
            if (at === yn()) {
                var a = ma(o)
                    , u = Sa(a, ba(U, t, e, r).body, xa(Sr.getAll()));
                n && (a.category = "others"),
                    this.send(u)
            } else {
                var c = o.env
                    , s = ga()
                    , f = [wa.call(o, U, t, e, r)]
                    , d = ha(c[Lo]);
                n && (d = "others"),
                    di(d, Po, f, function(t, n) {
                        t && (wn(at),
                            o.systemCheck(e, r, i))
                    }, {
                        nativeOptions: s
                    })
            }
        }
        ,
        ua.moduleView = function(t, n, e) {
            var r = (e = te.extend({}, e)).callback
                , i = e.callbackTimeout
                , o = this.opts.mvDelay || e.delay
                , a = e.cid || this.opts.cid;
            da.call(this, Q, a, t, n, {
                mvDelay: o,
                callback: r,
                callbackTimeout: i
            })
        }
        ,
        ua.moduleViewList = function(t, n, e) {
            var r = (e = te.extend({}, e)).callback
                , i = e.callbackTimeout
                , o = this.opts.mvDelay || e.delay
                , a = e.cid || this.opts.cid
                , u = an("MVL");
            yn() !== ot || u ? da.call(this, J, a, t, n) : da.call(this, Q, a, t, n, {
                mvDelay: o,
                callback: r,
                callbackTimeout: i
            })
        }
        ,
        ua.moduleClick = function(t, n, e) {
            var r = (e = te.extend({}, e)).callback
                , i = e.callbackTimeout
                , o = e.cid || this.opts.cid
                , a = e.sf;
            e && e.isLeave && dn(d);
            var u = e.withPageInfo && te.isObj(this._cpi) ? this._cpi : Vn;
            da.call(this, B, o, t, n, {
                currentPageInfo: u,
                isLeave: e.isLeave,
                sf: a,
                callback: r,
                callbackTimeout: i
            })
        }
        ,
        ua.moduleEdit = function(t, n, e) {
            var r = (e = te.extend({}, e)).cid || this.opts.cid;
            da.call(this, K, r, t, n, e)
        }
        ,
        ua.order = function(e, r, i) {
            i = te.extend({}, i);
            var o = this
                , a = oa(i.callback, i.callbackTimeout)
                , t = i.cid || o.opts.cid;
            be(0, r);
            var n = Fo(W, t, e);
            if (at === yn()) {
                var u = ma(this)
                    , c = ba(W, t, e, r)
                    , s = c.body
                    , f = xa(Sr.getAll())
                    , d = Sa(u, s, f);
                n && Ro(t, u, c.ev),
                    this.send(d, {
                        cbkey: a
                    })
            } else {
                var l = this.env
                    , v = ga({
                    isQuickReport: n
                })
                    , p = [wa.call(o, W, t, e, r)];
                di(ha(l[Lo]), Po, p, function(t, n) {
                    t ? (wn(at),
                        Ne(a, Qo),
                        o.order(e, r, i)) : Ne(a, Uo)
                }, {
                    nativeOptions: v
                })
            }
        }
        ,
        ua.pay = function(e, r, i) {
            i = te.extend({}, i);
            var o = this
                , a = oa(i.callback, i.callbackTimeout)
                , t = i.cid || o.opts.cid;
            be(0, r);
            var n = Fo(X, t, e);
            if (at === yn()) {
                var u = ma(o)
                    , c = ba(X, t, e, r)
                    , s = c.body
                    , f = xa(Sr.getAll())
                    , d = Sa(u, s, f);
                n && Ro(t, u, c.ev),
                    this.send(d, {
                        cb: function(t, n, e) {
                            Sr.clear(),
                                Ne(a, {
                                    code: t,
                                    status: n,
                                    type: e
                                })
                        }
                    }),
                    o.clearTag()
            } else {
                var l = this.env
                    , v = ga({
                    isQuickReport: n
                })
                    , p = [wa.call(o, X, t, e, r)];
                di(ha(l[Lo]), Po, p, function(t, n) {
                    t ? (wn(at),
                        Ne(a, Qo),
                        o.pay(e, r, i)) : Ne(a, Uo)
                }, {
                    nativeOptions: v
                })
            }
        }
        ,
        ua.tag = function(e, t, n, i) {
            var r = void 0
                , o = this.env
                , a = arguments
                , u = []
                , c = function(t) {
                if (!te.isObj(t))
                    return t;
                for (var n = t, e = 0, r = u.length; e < r; e++) {
                    if (!n)
                        return n;
                    n = n[u[e]]
                }
                return n
            }
                , s = function() {
                ie.each(a, function(t) {
                    if (!te.isStr(t))
                        return !1;
                    u.push(t)
                })
            }
                , f = function(t, n, e) {
                var r = {};
                r[t] = n,
                    di(ha(o[Lo]), "setTag", r, function(t, n) {
                        i && (e && s(),
                            i(t, c(n), !0))
                    })
            }
                , d = function(t) {
                var n = Sr.getAll();
                t || s(),
                i && i(0, c(n), !1)
            };
            if (ie.each(a, function(t) {
                te.isFunc(t) && (i = t)
            }),
                te.isObj(e)) {
                var l = this;
                ie.each(e, function(t, n) {
                    l.tag(n, t)
                })
            } else
                te.isStr(e) && te.isObj(t) ? at !== yn() ? f(e, r = t, !0) : (ae(t, function(t, n) {
                    Sr.set(e, n, t)
                }),
                    d(!0)) : (te.isObj(n) || te.isStr(n)) && function(t) {
                    if (!te.isStr(t) && !t.length)
                        return !1;
                    return !0
                }(e) && te.isStr(t) ? at !== yn() ? ((r = {})[t] = n,
                    f(e, r, !0)) : (Sr.set(e, t, n),
                    d(!0)) : te.isFunc(e) || te.isFunc(t) || te.isStr(e) && te.isStr(t) && te.isFunc(n) ? at !== yn() ? (s(),
                    di(ha(o[Lo]), "getTag", {}, function(t, n) {
                        i && i(t, c(n), !0)
                    })) : d() : i && i(-1)
        }
        ,
        ua.clearTag = function(t, n, e) {
            var r = 0;
            at === yn() ? (te.isFunc(t) && (e = t,
                t = Vn),
                Sr.clear(t, n),
            e && e(0)) : r = -1,
            e && e(r)
        }
        ,
        ua.sfrom = function(r) {
            var i = void 0
                , t = this.env;
            at !== yn() ? di(ha(t[Lo]), "getSFrom", {}, function(t, n) {
                if (n) {
                    var e = n.data ? n.data : n;
                    i = te.isStr(e) ? JSON.parse(e) : e,
                        r(t, i)
                }
            }) : r(1, [])
        }
        ,
        ua.send = function(t, r) {
            var n = [];
            r = te.extend({
                cb: function(t, n, e) {
                    r.cbkey && Ne(r.cbkey, {
                        code: t,
                        status: n,
                        type: e
                    })
                }
            }, r),
                te.run(t, function(t) {
                    Ae() && (en.inWXMP && te.isObj(t[l]) && t[l][O] ? t[l][O] = De() : t[O] = De()),
                        n.push(t)
                });
            var e = function() {
                var t = _r.get(v);
                t && _r.del(v);
                return t
            }();
            e && n.unshift(e),
                Oi(n, r)
        }
        ,
        ua.getAll = function() {
            return zo
        }
    ;
    var ja = qa.prototype;
    ja.create = function(t, n) {
        var e = te.extend({}, this.env);
        e = te.extend(e, {
            category: t
        });
        var r = te.extend({
            isDefault: !1
        }, this.opts)
            , i = new aa(r = te.extend(r, n || {}),e);
        return this._t.push(i),
        n.isDefault && (this._dt = i),
            i
    }
        ,
        ja.config = function(t, n) {
            return Vn !== t && (en[t] = n),
            "cid" === t && re(n) && (this.opts.cid = n),
                en[t]
        }
        ,
        ja._initPV = function(t, n) {
            Oa(this, this.config("pageValLab"), t = te.extend(t, this.config("pageEnv")), {
                isauto: 6,
                cid: n,
                isAutoInit: !0
            })
        }
        ,
        ja.pageView = function(t, n, e) {
            Oa(this, t, n, e)
        }
        ,
        ja.moduleView = function(t, n, e) {
            this._dt.moduleView(t, n, e)
        }
        ,
        ja.moduleViewList = function(t, n, e) {
            this._dt.moduleViewList(t, n, e)
        }
        ,
        ja.systemCheck = function(t, n, e) {
            this._dt.systemCheck(t, n, e)
        }
        ,
        ja.moduleClick = function(t, n, e) {
            this._dt.moduleClick(t, n, e)
        }
        ,
        ja.moduleEdit = function(t, n, e) {
            this._dt.moduleEdit(t, n, e)
        }
        ,
        ja.order = function(t, n, e, r) {
            this._dt.order(t, ka(e, n), r)
        }
        ,
        ja.pay = function(t, n, e, r) {
            this._dt.pay(t, ka(e, n), r)
        }
        ,
        ja.pageDisappear = function(t, n) {
            this._dt.pageDisappear(t, n)
        }
        ,
        ja.tag = function(t, n, e, r) {
            this._dt.tag(t, n, e, r)
        }
        ,
        ja.sfrom = function(t) {
            this._dt.sfrom(t)
        }
        ,
        ja.clearTag = function(t, n, e) {
            this._dt.clearTag(t, n, e)
        }
        ,
        ja.getAll = function(t) {
            t && t(this._t)
        }
        ,
        ja.getTracker = function(n, t) {
            var e = ie.find(this._t, function(t) {
                return t.env.category === n
            });
            t && t(e)
        }
        ,
        ja.get = function(t, n) {
            this._dt.get(t, n)
        }
        ,
        ja.set = function(t, n, e) {
            this._dt.set(t, n, e)
        }
        ,
        ja._setRequestID = function(t) {
            Yo = t
        }
        ,
        ja._setNativeEvsData = function(t, n) {
            var e;
            e = n,
                ta[t] = e
        }
    ;
    var Aa = void 0
        , Ia = !0
        , Da = function() {
        var t, n, e, r;
        if (!!!en.onWebviewAppearAutoPV)
            return t = en.c,
                void Ka().getTracker(t, function(t) {
                    var n = t.env.category
                        , e = te.extend({
                        refer_cid: wo(),
                        refer_req_id: So()
                    }, t.currentEvs);
                    ie.each(e, function(t, n) {
                        e["web_" + n] = t,
                            delete e[n]
                    }),
                        di(n, "setWebPageData", e, function(t, n) {})
                });
        e = n || Zn(),
            r = he(),
            ge.update(e),
            Kn = e,
        r && (r.l = e),
            Wa(),
            Aa.pageView(Vn, Vn, {
                fromWA: !0,
                withlab: !!en.positiveLab
            }),
            dn(0)
    }
        , Ta = function() {
        !!en.onWebviewAppearAutoPV && (ln() || (dn(d),
            Aa.pageDisappear({}, {
                getDurationFromLastPV: !0
            })))
    }
        , Ea = function() {
        Ia = !0,
            Da()
    }
        , Ca = function() {
        Ia = !1,
            Ta(),
            En()
    }
        , Na = function() {
        Ia && Da()
    }
        , Ma = function() {
        Ia && (Ta(),
            En())
    }
        , Fa = void 0
        , Ra = !!/\d\.\d\.\d/.test(He) && 0 <= Se(He, "11.3.0");
    function La(t, n) {
        te.isStr(t) && (n = te.isFunc(n) && n || function() {}
            ,
            "on" + t in Nn || "KNB:" + t in Nn ? te.on(window, t, function(t) {
                n(t)
            }) : (Fa = window.KNB) && te.isFunc(Fa.subscribe) && Fa.subscribe({
                action: t,
                handle: function() {
                    n()
                },
                success: function() {},
                fail: function(t) {}
            }))
    }
    var Pa = {
        hook: function() {
            try {
                La("appear", Ea),
                    La("disappear", Ca),
                Ra && (La("foreground", Na),
                    La("background", Ma))
            } catch (t) {
                ki("sdk", "api-error", "", t.stack, !0)
            }
            Aa = Ka()
        }
    }
        , Va = []
        , Ba = ct
        , Ua = void 0
        , Qa = void 0;
    function Ja(t, n) {
        return {
            cb: t,
            cmd: n
        }
    }
    function Ka() {
        return Ua
    }
    function Wa() {
        var n, r;
        Sn(!1),
            (n = Qa,
                r = {
                    none: !0
                },
                new qr(function(e) {
                        try {
                            var t = Se(Fi, "4.12.0");
                            !Fi || !Yn(t) || t < 0 ? e(r) : n && Le || ze() ? di(n, "getReqId", {}, function(t, n) {
                                e(t ? r : n)
                            }) : e(r)
                        } catch (t) {
                            e(r),
                                ki("sdk", "api-error", "", t.stack, !0)
                        }
                    }
                )).then(function(t) {
                var n = t || {}
                    , e = n.val_ref
                    , r = n.req_id
                    , i = n.refer_req_id
                    , o = !!(r || e || i);
                r && Ua._setRequestID(r),
                e && Ua._setNativeEvsData("val_ref", e),
                i && Ua._setNativeEvsData("refer_req_id", i),
                    Sn(o)
            })
    }
    function Xa(t, n) {
        if (ft === Ba)
            t && t(Ua);
        else if (st === Ba)
            t && Va.push(Ja(t, n));
        else {
            te.now();
            Va = Va.concat(Ja(t, n));
            var e = Fn.getElementsByTagName("meta")
                , o = pe(e, "lx:cid") || en.cid;
            if (!(Qa = en.c = pe(e, "lx:category")))
                return void (Ba = ct);
            Ba = st;
            var a = pe(e, "lx:mvDelay");
            a = isNaN(a) ? 0 : parseInt(a, 10);
            var u = "off" !== pe(e, "lx:autopv");
            en.autoPV = u,
                I(Wa, 1e3),
                qr.all([oo(Qa)]).then(function(t) {
                    var n, r = t[0], e = r.appnm;
                    !te.isStr(e) || Fn.domain,
                        Ua = new qa(r,{
                            cid: o,
                            isDefault: !0,
                            mvDelay: a
                        }),
                    Qa && Ua.create(Qa, {
                        isDefault: !0
                    }),
                        r = te.extend(!0, Ua._dt.env, r),
                        Ua._dt.env = r,
                        te.now();
                    try {
                        var i = [];
                        ie.each(Va, function(t) {
                            var n = t.cb
                                , e = t.cmd;
                            "config" === e || "set" === e ? n(Ua, r) : i.push(t)
                        }),
                        Pe && (n = r.msid,
                        mo || (mo = new ho(n))),
                        u && Qa && o && o && Ua._initPV(r, o),
                            Pa.hook(function() {}),
                            ie.each(i, function(t) {
                                t && t.cb && t.cb(Ua, r)
                            })
                    } catch (t) {}
                }).then(function() {
                    Ba = ft
                }, function(t) {
                    throw Ba = ft,
                        t
                })
        }
    }
    var $a = [["click", nt], ["tap", nt], ["view", "moduleView"], ["return", "moduleEdit"], ["order", et], ["pay", "pay"]]
        , za = ie.reduce($a, function(t, n) {
        return t[n[0]] = n[1],
            t
    }, {})
        , Ha = [["mpt", Y], ["report", "pageDisappear"]]
        , Za = ie.reduce(Ha, function(t, n) {
        return t[n[0]] = n[1],
            t
    }, {})
        , Ga = ie.reduce(["config", "event", "send", "use"], function(t, n) {
        return t[n] = !0,
            t
    }, {})
        , Ya = function(t, n) {
        var e = Fn.getElementsByTagName("head")[0]
            , r = Fn.createElement("meta");
        r.setAttribute("name", t),
            r.setAttribute("content", n),
            e.appendChild(r)
    }
        , tu = function(e, t) {
        return e = e || {},
            ae(t, function(t, n) {
                1 === {
                    act: 1,
                    cid: 1,
                    val: 1,
                    lab: 1,
                    bid: 1
                }[n] ? e["val_" + n] = t : e[n] = t
            }),
            e
    }
        , nu = function(t, n, e) {
        (t && !ee(t) && (t = {
            custom: {
                _lab: t
            }
        }),
        !t && e && (t = {}),
            e) && ((t.custom = t.custom || {})[n] = e);
        return t
    }
        , eu = function(t, n, e) {
        return t && !ee(t) && (t = {
            custom: {
                _lab: t
            }
        }),
        t && (t[n] = e),
            t
    }
        , ru = function(t, n) {
        var e = t[Nt]
            , r = t[Ft];
        if (e && e === r && (r = ne(!0, {}, r)),
        n && (r || e)) {
            var i = e;
            e = r || {},
            i && (e = nu(e || {}, "_lab", i))
        } else if (!n && (r || e)) {
            if (re(r) && (r = {
                analyse_val: r
            }),
                re(e))
                e = {
                    val_lab: e
                };
            r && (e = eu(e || {}, "page", r))
        }
        return Vn !== t[z] && (e = nu(e || {}, "_act", t[z])),
        Vn !== t[$] && (e = nu(e || {}, "_et", t[$])),
        Vn !== t[Z] && (e = eu(e || {}, Z, t[Z])),
        Vn !== t[G] && (e = nu(e || {}, "_el_id", t[G])),
            e
    };
    function iu(t) {
        var n, e, r, i = (e = (n = t).split("."),
            r = void 0,
        2 === e.length && (n = e[1],
            r = e[0]),
            [n, r]), o = void 0;
        return i[1] && (o = i[1]),
            [t = i[0], o]
    }
    var ou = function n(e, t) {
        var r = iu(e);
        e = r[0];
        var i = r[1]
            , o = t[0]
            , a = t[1];
        if (ie.isArray(o))
            return ue(o, function(t) {
                return n(i ? i + "." + e : e, [t, a])
            });
        var u, c, s = (o.nm || "mge").toLowerCase();
        o.nm = s,
        (c = (u = o).val) && (tu(u, c),
            delete u.val),
            o = u;
        var f = "mge" === s;
        if ("mpt" === s)
            return function(t) {
                t = tu(t, t.val);
                var n = ru(t, !0);
                return [Y, n, null, t[H]]
            }
                .apply(null, t);
        var d, l, v = et === s, p = "pay" === s, h = o[$], m = o[z], g = ru(o, !1);
        v || p || h || !f || !m ? p || v ? e = s : (l = h,
            e = "mge" === (d = s) ? l ? za[l] || tt : nt : "mpt" === d || "report" === d ? Za[d] : tt,
        f || (g = nu(g || {}, "_nm", s))) : e = nt;
        var _ = o[H];
        return _ && ((a = a || {}).cid = _),
        i && nu(g, "_logchannel", i),
            nu(g = g || {}, "_api", "v3"),
            e === et || "pay" === e ? [e, o[Mt], g.order_id, g, a] : [e, o[Mt], g, a]
    }
        , au = function t() {
        if (!t.f) {
            Ya("lx:autopv", "off"),
                t.f = !0
        }
    }
        , uu = function(t) {
        if (!t || !t.length)
            return t;
        try {
            var n = t[0];
            0 < (a = (o = n).indexOf(".")) && (o = o.substr(a + 1)),
            Ga[o] && (t = ie.slice(t, 1),
                cu(n) ? (je(3),
                    au(),
                    t = ou(n, t)) : su(n) ? (je(3),
                    au(),
                    t = function(t, n) {
                        var e = iu(t)[1];
                        t = Y;
                        var r = n[1]
                            , i = n[2]
                            , o = e ? {
                            custom: {
                                _logchannel: e
                            }
                        } : Vn
                            , a = {};
                        if (re(r))
                            ee(i) ? o = i : re(i) && (o = nu({}, "analyse_val", i));
                        else if (ee(r)) {
                            i = (a = tu(a, r))[Ft],
                            re(i) && (i = nu({}, "analyse_val", i)),
                                o = i;
                            var u = a[Nt];
                            u && nu(o, "_lab", u),
                                r = a[H]
                        }
                        var c = void 0;
                        return r && ((c = {}).cid = r),
                            [t, o = nu(o, "_api", "v3"), Vn, c]
                    }(n, t)) : fu(n) ? (je(3),
                    au(),
                    t = function(t, n) {
                        var e = n[0]
                            , r = n[1];
                        if (e && (e = e.replace(/^data_sdk_/i, ""),
                            Ya("lx:category", e)),
                            ee(r))
                            return ["set", r]
                    }(0, t)) : du(n, t[0], t[1]) ? (au(),
                    e = n,
                    r = t[0],
                    i = t[1],
                    t = "appnm" === r && re(i) ? void Ya("lx:appnm", i) : ("cid" === r && re(i) && Ya("lx:cid", i),
                        [e, r, i])) : t.unshift(n))
        } catch (t) {}
        var e, r, i, o, a;
        return t
    }
        , cu = function(t) {
        var n = t.indexOf(".");
        return 0 < n && (t = t.substr(n + 1)),
        "event" === t
    }
        , su = function(t) {
        var n = t.indexOf(".");
        return 0 < n && (t = t.substr(n + 1)),
        "send" === t
    }
        , fu = function(t) {
        return "use" === t
    }
        , du = function(t, n) {
        var e = !1;
        return "cid" !== n && "appnm" !== n || (je(3),
            e = !0),
        "config" === t && e
    }
        , lu = void 0
        , vu = void 0;
    function pu(t, n, e, r, i) {
        if (te.isFunc(n))
            n.call(t, t, r, i);
        else if (!i && te.isStr(n)) {
            if (te.isFunc(t[n]))
                return t[n].apply(t, e);
            if ("onLoad" === n)
                try {
                    e[0](te.extend(!0, {}, r))
                } catch (t) {}
        }
    }
    function hu() {
        if (!vu) {
            vu = !0;
            var r = void 0;
            Qe && te.on(Fn, "mouseup", function(t) {
                var n = t.target || t.srcElement
                    , e = n.tagName + n.href;
                e = e.toLocaleLowerCase(),
                1 === n.nodeType && /^ajavascript:/i.test(e) && (r = new Date)
            });
            var t = Nn.onbeforeunload;
            Pe && Be ? Nn.addEventListener("pagehide", ke(!1, Qe, r, void 0, mu, Vn, ln)) : Nn.onbeforeunload = ke(!1, Qe, r, void 0, mu, t, ln)
        }
    }
    function mu(r) {
        var t = arguments;
        if (t.length) {
            var i = ie.slice(t, 1, t.length);
            try {
                lu ? pu(lu, r, i, lu._dt ? lu._dt.env : null) : Xa(function(t, n, e) {
                    pu(lu = t, r, i, n, e),
                        hu()
                }, r)
            } catch (t) {
                try {
                    ki("sdk", "api-error", "", t.message + "\n" + t.stack, !0)
                } catch (t) {}
            }
        }
    }
    window._lxsdk_isDOMReady || (window._lxsdk_isDOMReady = !0,
        function() {
            var s = !0
                , f = !1
                , d = function() {
                var t = he();
                t && (t.q.push = function n(t) {
                        try {
                            var e, r = (e = uu(t)) ? e[0] : "";
                            if (ie.isArray(r))
                                return void ae(e, function(t) {
                                    n(t)
                                });
                            "start" === r ? (s = !0,
                            f || l(d)) : !1 === s ? e && d.push(e) : mu.apply(Vn, e)
                        } catch (t) {
                            try {
                                ki("sdk", "api-error", "", t.stack, !0)
                            } catch (t) {}
                        }
                    }
                );
                for (var n = void 0, e = void 0, r = [], i = [], o = [], a = t && ie.isArray(t.q) ? t.q : [], u = 0, c = a.length; u < c; u++)
                    "config" === (e = a[u][0]) ? i.push(a[u]) : n || "use" !== e ? o.push(a[u]) : (r.push(a[u]),
                        n = !0);
                return a = i.concat(r.concat(o))
            }();
            function l(t) {
                f || (t && ie.each(t, function(t) {
                    var n, e = (n = uu(t)) ? n[0] : "";
                    ie.isArray(e) ? ae(n, function(t) {
                        mu.apply(Vn, t)
                    }) : e ? mu.apply(Vn, n) : t && t && t[0]
                }),
                    mu(function() {
                        hu()
                    }),
                    f = !0)
            }
            if (0 === d.length)
                Xa(function(t) {
                    lu = t,
                        hu()
                });
            else
                try {
                    d = ue(d, function(t) {
                        var n;
                        if ("config" === ((n = uu(t)) ? n[0] : "")) {
                            var e = n[1]
                                , r = n[2];
                            "autoStart" === e && !1 === r && (s = !1)
                        }
                        return n
                    }),
                    s && l(d)
                } catch (t) {}
        }())
    //ce.top("_lxsdk_cuid","16a3baa73b3c8-082b9998ce87c6-454c092b-384000-16a3baa73b3c8",1576800)
    FnG = {};
    Fn = FnG;
    Fn.cookie="";
    //Fn.cookie = "ll=7fd06e815b796be3df069dec7836c3df; ua=%E8%8A%B1%E9%9B%A8%E9%87%8C%E7%AD%89%E4%BD%A0; ctu=af49acd585e502a094c1d15f4f3e3676999b249187c7bb72b12b141203ae3b89; _lxsdk_s=16a3bf5ee9b-69-882-1dd%7C%7C1"
    Fn.domain = "www.dianping.com";

/*
da(e, r, i, o, a)
ba(t, n, e, r, i) 
    _a(t, n, e, r, i) 
    Zi(true);
    
    $r();*/
    $r();//_cuid
    //Xi();
    Hr();//_s
    //eo();
    //设置_s
    //2848:ma(t)->Wi;
    //

}();


