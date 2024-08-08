! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.autopricing = e() : t.autopricing = e()
}(window, (function() {
    return function(t) {
        var e = {};

        function i(r) {
            if (e[r]) return e[r].exports;
            var s = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(s.exports, s, s.exports, i), s.l = !0, s.exports
        }
        return i.m = t, i.c = e, i.d = function(t, e, r) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }, i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, i.t = function(t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (i.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var s in t) i.d(r, s, function(e) {
                    return t[e]
                }.bind(null, s));
            return r
        }, i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return i.d(e, "a", e), e
        }, i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.p = "", i(i.s = 23)
    }([function(t, e, i) {
        "use strict";
        var r = i(17);
        t.exports = function(t) {
            return function() {
                if (r && "object" == typeof window.console && "function" == typeof console[t]) return console[t].apply(console, Array.prototype.slice.call(arguments, 0))
            }
        }
    }, function(t, e, i) {
        "use strict";
        const r = i(38),
            s = "[ @marcom/pricing ]",
            n = Object.keys(r);
        let a = !1;
        for (let e = 0, i = n.length; e < i; e++) {
            const i = n[e],
                o = "function" == typeof r[i] ? r[i] : null;
            o && (t.exports[i] = function() {
                const t = Array.prototype.slice.call(arguments);
                a || "string" != typeof t[0] || (t[0] = `${s} ${t[0]}`), "group" !== i && "groupCollapsed" !== i || (a = !0), "groupEnd" === i && (a = !1), o.apply(r, t)
            })
        }
        t.exports.enabled = r.enabled
    }, function(t, e, i) {
        "use strict";
        const r = i(27),
            s = t => document.querySelector(`link[rel="ac:${t}-endpoint"]`),
            n = (t, e) => (t => document.querySelectorAll(`meta[name="ac:${t}-alias"]`))(t).forEach(t => {
                const [i, r] = (t.getAttribute("content") || "").split("=");
                i && r && (e.aliases = e.aliases || {}, e.aliases[i] = r)
            }),
            a = (t, e) => (t => document.querySelectorAll(`meta[name="ac:${t}-disable"]`))(t).forEach(t => {
                const i = (t.getAttribute("content") || "").split(",");
                i && (e.switch = i)
            });
        t.exports = function(t) {
            return new Promise(e => {
                "undefined" != typeof window && window.document ? r(() => {
                    const i = {};
                    s(t) && (i.endpoint = (s(t).getAttribute("href") || "").trim()), n(t, i), a(t, i);
                    const r = document.querySelector('meta[name="ac:pricing-dummy"]');
                    r && (i.dummyPrices = "true" === (r.getAttribute("content") || "").trim()), e(i)
                }) : e({})
            })
        }
    }, function(t, e, i) {
        "use strict";
        t.exports = class {
            constructor(t = null, e = {}) {
                this.error = t, this.products = e
            }
        }
    }, function(t, e, i) {
        "use strict";
        const r = i(1);
        t.exports = class extends Error {
            constructor(t) {
                super(t || "Failed to fetch product price: The API service responded with an unexpected data format."), this.name = "InvalidDataError"
            }
            showHint() {
                r.warn(this.message)
            }
        }
    }, function(t, e) {
        function i(t, e) {
            return Object.fromEntries(Object.entries(t).filter(([t, i]) => !e.includes(i)))
        }
        t.exports = function(t, e) {
            if (t.switch) {
                const r = "object" == typeof t.switch ? t.switch.includes("true") : t.switch;
                if (r) return;
                if (!r) {
                    const r = t.switch,
                        s = { ... function(t, e) {
                                if (t.aliases) return i(t.aliases, e)
                            }(t, r),
                            ... function(t, e, r) {
                                if (!e.aliases) {
                                    return i(t.reduce((t, e) => ({ ...t,
                                        [e]: e
                                    }), {}), r)
                                }
                                const s = Object.keys(e.aliases);
                                return i(t.filter(t => !s.includes(t)).reduce((t, e) => ({ ...t,
                                    [e]: e
                                }), {}), r)
                            }(e, t, r)
                        };
                    t.aliases = s;
                    return function(t, e) {
                        return Object.values(t).filter(t => !e.includes(t))
                    }(t.aliases, r)
                }
            }
        }
    }, function(t, e) {
        t.exports = function() {
            if ("undefined" != typeof window) {
                const t = window.location.host;
                return "www.apple.com" === t || "www.apple.com.cn" === t
            }
            return !1
        }
    }, function(t, e, i) {
        "use strict";
        const r = i(2),
            s = i(3),
            n = i(11),
            a = i(5),
            o = i(6);
        t.exports = function(t = [], e = {}) {
            if (!t.length) {
                const t = new s;
                return Promise.resolve(t)
            }
            return r("edupricing").then(i => {
                if (i.dummyPrices = !o(), e.dummyPrices = !o(), i.switch) {
                    const e = a(i, t);
                    t = e
                }
                if (e.switch) {
                    const i = a(e, t);
                    t = i
                }
                const r = Object.assign({}, i, e);
                return new n(t, r).send()
            })
        }
    }, function(t, e, i) {
        "use strict";

        function r() {
            this._events = {}
        }
        let s = r.prototype;
        s.on = function(t, e) {
            return this._events[t] = this._events[t] || [], this._events[t].unshift(e), e
        }, s.once = function(t, e) {
            let i = this;
            return this.on(t, (function r(s) {
                i.off(t, r), void 0 !== s ? e(s) : e()
            }))
        }, s.off = function(t, e) {
            if (!this.has(t)) return;
            if (1 === arguments.length) return this._events[t] = null, void delete this._events[t];
            let i = this._events[t].indexOf(e); - 1 !== i && this._events[t].splice(i, 1)
        }, s.trigger = function(t, e) {
            if (this.has(t))
                for (let i = this._events[t].length - 1; i >= 0; i--) void 0 !== e ? this._events[t][i](e) : this._events[t][i]()
        }, s.has = function(t) {
            return t in this._events != !1 && 0 !== this._events[t].length
        }, s.destroy = function() {
            for (let t in this._events) this._events[t] = null;
            this._events = null
        }, t.exports = r
    }, function(t, e, i) {
        "use strict";
        t.exports = {
            SharedInstance: i(34)
        }
    }, function(t, e) {
        t.exports = {
            majorVersionNumber: "3.x"
        }
    }, function(t, e, i) {
        "use strict";
        const r = i(37),
            s = i(14),
            n = i(18);
        t.exports = class extends n {
            constructor(t, e) {
                super(t, e), this.identifierParam = "parts"
            }
            createDummyItem(t) {
                return r(t, "unauthorized")
            }
            formatResponseItem(t, e) {
                let i = null;
                if (this.options.dummyPrices && "UNKNOWN" === e.type && (e = r(t, "unknown"), this.itemsWithDummyPrice.push(t)), i = new s(e), !i.price || 0 !== i.price.value) return i.price && 999999 === i.price.value && this.itemsWithDummyPrice.push(t), i
            }
            getItemsFromResponse(t) {
                return t.items
            }
        }
    }, function(t, e, i) {
        "use strict";
        t.exports = {
            mockPrices: {
                unauthorized: 777777,
                unknown: 888888
            }
        }
    }, function(t, e, i) {
        "use strict";
        t.exports = function(t, e) {
            const i = t % 1 == 0 ? 0 : 2;
            return t > 9999 ? t.toLocaleString(e, {
                minimumFractionDigits: i,
                maximumFractionDigits: i
            }) : t.toFixed(i)
        }
    }, function(t, e, i) {
        "use strict";
        const r = i(15),
            s = i(16),
            n = i(4),
            a = t => ({
                coverageType: t.isOptionalString,
                id: t.isString,
                name: t.isString,
                type: t => ["WUIP", "PART"].includes(t),
                price: t.isObject,
                "price.value": e => t.isNumber && 0 !== e,
                "price.display": t.isObject,
                "price.display.disclaimer": t.isOptionalString,
                "price.display.legal": t.isOptionalString,
                "price.display.actual": t.isString,
                "price.display.apr": t.isOptionalString,
                "price.display.carrierDiscountLegal": t.isOptionalString,
                "price.display.coveragePrice": t.isOptionalString,
                "price.display.coverageTerm": t.isOptionalString,
                "price.display.monthlyFrom": t.isOptionalString,
                "price.display.monthlyFromLegal": t.isOptionalString,
                "price.display.monthlyPrice": t.isOptionalString,
                "price.display.months": t.isOptionalString,
                "price.display.perMonth": t.isOptionalString,
                "price.display.perMonthActual": t.isOptionalString,
                "price.display.perMonthSmart": t.isOptionalString,
                "price.display.perMonthValue": t.isOptionalString,
                "price.display.smart": t.isString,
                "price.display.from": (t, e) => "WUIP" === e.type ? "string" == typeof t : void 0 === t,
                "price.display.downPayment": t.isOptionalString,
                "price.display.mpr": t.isOptionalString,
                "carrier.max.display.promoValue": t.isOptionalString,
                "carrier.att.display.promoValue": t.isOptionalString,
                "carrier.tmobile.display.promoValue": t.isOptionalString,
                "carrier.verizon.display.promoValue": t.isOptionalString
            }),
            o = (t = "id") => e => void 0 === e || s(e, e => ({
                [t]: e.isString,
                productName: e.isString,
                credit: e.isObject,
                "credit.value": e.isNumber,
                "credit.display": e.isObject,
                "credit.display.actual": e.isString,
                "credit.display.maxValue": e.isOptionalString,
                "credit.display.minValue": e.isOptionalString,
                "credit.display.range": e.isOptionalString,
                "credit.display.smart": e.isString,
                "credit.display.upto": e.isString,
                priceWithCreditApplied: e.isObject,
                "priceWithCreditApplied.value": e.isNumber,
                "priceWithCreditApplied.display.actual": e.isString,
                "priceWithCreditApplied.display.apr": e.isOptionalString,
                "priceWithCreditApplied.display.carrierDiscountLegal": e.isOptionalString,
                "priceWithCreditApplied.display.disclaimer": e.isOptionalString,
                "priceWithCreditApplied.display.from": e.isString,
                "priceWithCreditApplied.display.monthlyFrom": e.isOptionalString,
                "priceWithCreditApplied.display.monthlyFromLegal": e.isOptionalString,
                "priceWithCreditApplied.display.monthlyPrice": e.isOptionalString,
                "priceWithCreditApplied.display.months": e.isOptionalString,
                "priceWithCreditApplied.display.perMonth": e.isOptionalString,
                "priceWithCreditApplied.display.perMonthActual": e.isOptionalString,
                "priceWithCreditApplied.display.perMonthSmart": e.isOptionalString,
                "priceWithCreditApplied.display.perMonthValue": e.isOptionalString,
                "priceWithCreditApplied.display.smart": e.isString,
                "priceWithCreditApplied.display.downPayment": e.isOptionalString,
                "priceWithCreditApplied.display.mpr": e.isOptionalString
            })),
            c = (t = "id") => e => ({ ...a(e),
                tradeIn: o(t)
            });
        class u {
            constructor(t) {
                if (!u.validate(t)) throw new n("Could not create Product, because the given JSON contains invalid data.");
                r(this, t)
            }
            get isWUIP() {
                return "WUIP" === this.type
            }
            get isPart() {
                return "PART" === this.type
            }
            static validate(t) {
                if (!t.tradeIn) return s(t, c);
                if (t.tradeIn.slug) return s(t, c("slug"));
                if (t.tradeIn.id) return s(t, c("id"));
                throw new Error("Cannot validate Product data.")
            }
        }
        t.exports = u
    }, function(t, e, i) {
        "use strict";
        t.exports = function(t, e) {
            Object.entries(e).forEach(([e, i]) => {
                t[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    value: "object" == typeof i ? Object.freeze(JSON.parse(JSON.stringify(i))) : i
                })
            })
        }
    }, function(t, e, i) {
        "use strict";
        const r = i(1);
        let s = !1;
        "undefined" != typeof window && (s = "www.apple.com" === window.location.host || "www.apple.com.cn" === window.location.host);
        const n = {
            isString: t => "string" == typeof t,
            isOptionalString: t => !t || "string" == typeof t,
            isNumber: t => "number" == typeof t,
            isObject: t => "[object Object]" === Object.prototype.toString.call(t)
        };

        function a(t, e) {
            return e.split(".").reduce((t, e) => t && t[e], t)
        }
        t.exports = function(t, e) {
            if (s) return !0;
            "function" == typeof e && (e = e(n));
            const i = Object.entries(e);
            for (let e = 0, s = i.length; e < s; e++) {
                const [s, n] = i[e], o = s.indexOf(".") > -1 ? a(t, s) : t[s];
                if (!0 !== n.call(t, o, t)) return r.error(`Schema property "${s}" does not match response.`), !1
            }
            return !0
        }
    }, function(t, e, i) {
        "use strict";
        var r = !1,
            s = {};
        "undefined" != typeof window && (s = window || self);
        try {
            r = !!s.localStorage.getItem("f7c9180f-5c45-47b4-8de4-428015f096c0")
        } catch (t) {}
        t.exports = r
    }, function(t, e, i) {
        "use strict";
        const r = i(57),
            s = i(58),
            n = i(1),
            a = i(60),
            o = i(19),
            c = i(3),
            u = {
                endpoint: null,
                aliases: null,
                timeout: 5,
                dummyPrices: !1,
                method: "GET",
                switch: null
            };
        t.exports = class {
            constructor(t = [], e = {}) {
                this.ids = Array.isArray(t) ? t : [t], this._originalIDs = [...this.ids], this.identifierToAliasMap = {}, this.options = this._processOptions(e), this.itemsWithDummyPrice = [], this.identifierParam = {}
            }
            formatResponseItem() {
                throw new Error("not implemented")
            }
            getItemsFromResponse() {
                throw new Error("not implemented")
            }
            createDummyItem() {
                throw new Error("not implemented")
            }
            send() {
                return this._maybeForceError().then(() => this._request()).then(t => this._processResponse(t)).then(t => this._createProductObjects(t)).catch(t => this._handleError(t))
            }
            getKeys(t) {
                return this.identifierToAliasMap[t] || this.identifierToAliasMap["slug:" + t] || [t]
            }
            loggData(t) {
                n.group("%cResults from Apple Online Store", "background-color:#27a33f;color:white;padding:2px 5px"), n.log(t), n.groupEnd(), n.enabled && this.itemsWithDummyPrice.length && (n.group("Dummy Prices"), n.warn("Using dummy prices for the following product identifiers: " + this.itemsWithDummyPrice.join(", ")), n.info("$777,777 — The API service may require authentication and/or authorization. \n$888,888 — The product identifer is currently unknown to the API service. \n$999,999 — The product identifier is known to the API service, but the price has yet to be set. \n"), n.groupEnd())
            }
            _createProductObjects(t) {
                const e = {};
                return Object.entries(t).forEach(([t, i]) => {
                    let r = null;
                    try {
                        r = this.formatResponseItem(t, i)
                    } catch (t) {
                        if ("InvalidDataError" !== t.name) throw t
                    }
                    this.getKeys(t).forEach(t => {
                        e[t] = r
                    })
                }), Object.defineProperty(e, "aliases", {
                    value: this.options.aliases
                }), this.loggData(e), new c(null, e)
            }
            _handleError(t) {
                const e = {};
                this.ids.forEach(t => e[t] = null);
                let i = new c(t, e);
                if (!t) return i;
                if (!Object.keys(o).some(e => t.name === e)) throw t;
                if ("UnexpectedError" === t.name && this.options.dummyPrices) {
                    const e = {};
                    this._originalIDs.forEach(t => {
                        e[t] = this.createDummyItem(t), this.itemsWithDummyPrice.push(t)
                    }), i = new c(t, e)
                }
                return t && "function" == typeof t.showHint && t.showHint(i.products), i
            }
            _maybeForceError() {
                return new Promise((t, e) => {
                    if (this.options.dummyPrices && "undefined" != typeof window && window.location.search.indexOf("39f4f1f5-c4a1-4a7c-ab30-085335a11146") > -1) {
                        const t = r("39f4f1f5-c4a1-4a7c-ab30-085335a11146", null);
                        e(t && o[t] && new o[t])
                    }
                    t()
                })
            }
            _processOptions(t) {
                if (!(t = Object.assign({}, u, t)).endpoint) throw new o.ConfigurationError({
                    type: "endpoint"
                });
                const e = t.aliases ? Object.entries(t.aliases) : [];
                return e.length && (this.identifierToAliasMap = e.reduce((t, [e, i]) => (t[i] = t[i] || [], t[i].push(e), t), {}), this.ids = this.ids.map(e => t.aliases[e] || e)), t
            }
            _processResponse(t) {
                let e = null,
                    i = null;
                switch (parseInt(t.getResponseHeader("x-rewrite-status"), 10) || t.status) {
                    case 404:
                        throw new o.ServiceNotFoundError;
                    case 503:
                        throw new o.ServiceUnavailableError;
                    case 400:
                        throw new o.UnexpectedError;
                    case 200:
                        if (i = a(t.responseText), null !== i && (e = this.getItemsFromResponse(i), e)) return e;
                    default:
                        throw new o.InvalidDataError
                }
            }
            _request() {
                return new Promise((t, e) => {
                    const i = new XMLHttpRequest;
                    i.withCredentials = !0, i.onloadend = t.bind(this, i), i.ontimeout = e.bind(this, new o.TimeoutError(this.options.timeout)), i.onerror = e.bind(this, new o.UnexpectedError), i.open(this.options.method, s(this.options.endpoint, this.identifierParam, this.ids), !0), i.timeout = 1e3 * (this.options.timeout || 0), i.send()
                })
            }
        }
    }, function(t, e, i) {
        "use strict";
        t.exports = {
            ConfigurationError: i(61),
            ServiceNotFoundError: i(62),
            ServiceUnavailableError: i(63),
            TimeoutError: i(64),
            InvalidDataError: i(4),
            UnexpectedError: i(65)
        }
    }, function(t, e, i) {
        "use strict";
        const r = i(2),
            s = i(3),
            n = i(11),
            a = i(5),
            o = i(6);
        t.exports = function(t = [], e = {}) {
            if (!t.length) {
                const t = new s;
                return Promise.resolve(t)
            }
            return r("pricing").then(i => {
                if (i.dummyPrices = !o(), e.dummyPrices = !o(), i.switch) {
                    const e = a(i, t);
                    t = e
                }
                if (e.switch) {
                    const i = a(e, t);
                    t = i
                }
                const r = Object.assign({}, i, e);
                return new n(t, r).send()
            })
        }
    }, function(t, e, i) {
        "use strict";
        const r = i(2),
            s = i(3),
            n = i(66),
            a = i(5),
            o = i(6);
        t.exports = function(t = [], e = {}) {
            if (!t.length) {
                const t = new s;
                return Promise.resolve(t)
            }
            return r("tradein").then(i => {
                if (i.dummyPrices = !o(), e.dummyPrices = !o(), i.switch) {
                    const e = a(i, t);
                    t = e
                }
                if (e.switch) {
                    const i = a(e, t);
                    t = i
                }
                const r = Object.assign({}, i, e);
                return new n(t, r).send()
            })
        }
    }, function(t, e, i) {
        "use strict";
        const r = i(15),
            s = i(16),
            n = i(4),
            a = t => ({
                productName: t.isString,
                productNameWithMaxPrice: t.isString,
                credit: t.isObject,
                "credit.value": e => t.isNumber && 0 !== e,
                "credit.display": t.isObject,
                "credit.display.actual": t.isString,
                "credit.display.maxValue": t.isOptionalString,
                "credit.display.minValue": t.isOptionalString,
                "credit.display.range": t.isOptionalString,
                "credit.display.smart": t.isString,
                "credit.display.upto": t.isString,
                "credit.display.legal": t.isOptionalString
            }),
            o = (t = "id") => e => ({ ...a(e),
                [t]: e.isString
            });
        class c {
            constructor(t) {
                if (!c.validate(t)) throw new n("Could not create TradeIn, because the given JSON contains invalid data.");
                r(this, t)
            }
            static validate(t) {
                if (t.slug) return s(t, o("slug"));
                if (t.id) return s(t, o("id"));
                throw new Error("Cannot validate TradeIn data.")
            }
        }
        t.exports = c
    }, function(t, e, i) {
        t.exports = i(24)
    }, function(t, e, i) {
        const {
            applyPrices: r
        } = i(25);

        function s(t) {
            return e => {
                const i = Boolean(e) ? t + "Error" : t + "Complete",
                    r = new CustomEvent(i, {
                        detail: {
                            error: e
                        }
                    });
                window.dispatchEvent(r)
            }
        }
        r.loadEduPricingFromHTML().then(t => s("edupricing")(t)), r.loadPricingFromHTML().then(t => s("pricing")(t)), r.loadTradeInFromHTML().then(t => s("tradein")(t))
    }, function(t, e, i) {
        "use strict";
        t.exports = Object.assign({
            applyPrices: i(26),
            fetchEduProducts: i(7),
            fetchProducts: i(20),
            fetchTradeIns: i(21),
            Product: i(14),
            TradeIn: i(22)
        }, i(19))
    }, function(t, e, i) {
        "use strict";
        const r = i(7),
            s = i(20),
            n = i(21),
            a = i(2),
            o = "Elements",
            c = "Hide",
            u = "HideAll",
            h = "MultipleElementsToHide",
            l = "Product",
            p = "SingleElementsToHide",
            d = "edupricing",
            m = "pricing",
            f = "tradein";
        t.exports = new class {
            getProductID(t, e) {
                const i = [];
                return e.forEach(e => {
                    i.push(e.dataset[`${t}${l}`])
                }), [...new Set(i)]
            }
            setElements(t) {
                const e = [...document.querySelectorAll(`[data-${t}-product]`)],
                    i = Array.prototype.slice.call(e).filter(t => "SCRIPT" !== t.tagName);
                this[`${t}${o}`] = i
            }
            getSingleElementToHide(t) {
                const e = [...document.querySelectorAll(`[data-${t}-hide]`)];
                this[`${t}${p}`] = e
            }
            getMultipleElementsToHide(t) {
                const e = [...document.querySelectorAll(`[data-${t}-hide-all]`)];
                this[`${t}${h}`] = e
            }
            fetchProductInfo(t, e = {}) {
                let i, c;
                const u = this.getProductID(t, this[`${t}${o}`]);
                return a(t).then(a => {
                    const o = Object.assign({}, a, e);
                    return t === m ? c = s(u, e) : t === d ? c = r(u, e) : t === f ? c = n(u, e) : i = "API not supported", i || c.then(t => ({
                        response: t,
                        options: o
                    }))
                })
            }
            getValueFromPath(t, e) {
                return t.replace(/\s+/g, "").replace(/\$\{([\w\d.]+)\}/g, (t, i) => i.split(".").reduce((t, e) => t && t[e] ? t[e] : "", e))
            }
            getproductID(t, e) {
                return t.dataset[`${e}${l}`]
            }
            checkForProductNameKey(t, e) {
                return t && "productName" in t && "UNKNOWN" === e
            }
            checkForTypeKey(t, e) {
                return t && "type" in t && "UNKNOWN" === e
            }
            checkForSingleElementIDs(t, e, i, r) {
                const s = r.dataset[`${t}${c}`],
                    n = i.products[s];
                s === this.getproductID(e, t) && ((n && !this.checkForProductNameKey(n, n.productName) && !this.checkForTypeKey(n, n.type) || e.innerText) && e.innerText || (r.style.display = "none"))
            }
            hideSingleElements(t, e, i) {
                this[`${i}${p}`].forEach(r => {
                    const s = r.dataset[`${i}${c}`],
                        n = e.products[s];
                    (!t.innerText || e.error || !n || this.checkForProductNameKey(n, n.productName) || this.checkForTypeKey(n, n.type)) && this.checkForSingleElementIDs(i, t, e, r)
                })
            }
            hideMultipleElements(t, e) {
                this[`${e}${h}`].forEach(i => {
                    const r = i.dataset[`${e}${u}`].split(",").every(e => !t.products[e] || this.checkForProductNameKey(t.products[e], t.products[e].productName) || this.checkForTypeKey(t.products[e], t.products[e].type));
                    (t.error || r) && (i.style.display = "none")
                })
            }
            handleProductInfo(t, e, i, r) {
                let s;
                if (!i.error || r.dummyPrices) {
                    const r = i.products[this.getproductID(e, t)],
                        n = (e.dataset.productTemplate || "").replace(/\$\{\s*([\w\d.]+)\s*\}/g, t => {
                            const e = this.getValueFromPath(t, r);
                            return e || (s = !0), e
                        });
                    r && !s ? (e.textContent = n, e.dataset.pricingLoaded = "", e.parentElement.classList.add("has-dynamic-content")) : this.handleError(e, i, t)
                } else this.handleError(e, i, t)
            }
            handleError(t, e, i) {
                this.getSingleElementToHide(i), this.hideSingleElements(t, e, i), this.getMultipleElementsToHide(i), this.hideMultipleElements(e, i), t.innerText || (t.style.display = "none")
            }
            fetchProductDataFromHTML(t, e) {
                return new Promise(i => {
                    this.setElements(t), this.fetchProductInfo(t, e).then(({
                        response: e,
                        options: r
                    }) => {
                        e && (this[`${t}${o}`].forEach(i => this.handleProductInfo(t, i, e, r)), i(e.error))
                    }).catch(t => {
                        throw t
                    })
                })
            }
            loadEduPricingFromHTML(t) {
                return this.fetchProductDataFromHTML(d, t)
            }
            loadPricingFromHTML(t) {
                return this.fetchProductDataFromHTML(m, t)
            }
            loadTradeInFromHTML(t) {
                return this.fetchProductDataFromHTML(f, t)
            }
        }
    }, function(t, e, i) {
        "use strict";
        var r = i(28);
        t.exports = r.requestAnimationFrame("update")
    }, function(t, e, i) {
        "use strict";
        var r = i(29),
            s = function() {
                this.events = {}
            },
            n = s.prototype;
        n.requestAnimationFrame = function(t) {
            return this.events[t] || (this.events[t] = new r(t)), this.events[t].requestAnimationFrame
        }, n.cancelAnimationFrame = function(t) {
            return this.events[t] || (this.events[t] = new r(t)), this.events[t].cancelAnimationFrame
        }, t.exports = new s
    }, function(t, e, i) {
        "use strict";
        var r = i(30),
            s = function(t) {
                this.phase = t, this.rafEmitter = new r, this._cachePhaseIndex(), this.requestAnimationFrame = this.requestAnimationFrame.bind(this), this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this), this._onBeforeRAFExecutorStart = this._onBeforeRAFExecutorStart.bind(this), this._onBeforeRAFExecutorPhase = this._onBeforeRAFExecutorPhase.bind(this), this._onAfterRAFExecutorPhase = this._onAfterRAFExecutorPhase.bind(this), this.rafEmitter.on(this.phase, this._onRAFExecuted.bind(this)), this.rafEmitter.executor.eventEmitter.on("before:start", this._onBeforeRAFExecutorStart), this.rafEmitter.executor.eventEmitter.on("before:" + this.phase, this._onBeforeRAFExecutorPhase), this.rafEmitter.executor.eventEmitter.on("after:" + this.phase, this._onAfterRAFExecutorPhase), this._frameCallbacks = [], this._currentFrameCallbacks = [], this._nextFrameCallbacks = [], this._phaseActive = !1, this._currentFrameID = -1, this._cancelFrameIdx = -1, this._frameCallbackLength = 0, this._currentFrameCallbacksLength = 0, this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0
            },
            n = s.prototype;
        n.requestAnimationFrame = function(t, e) {
            return !0 === e && this.rafEmitter.executor.phaseIndex > 0 && this.rafEmitter.executor.phaseIndex <= this.phaseIndex ? this._phaseActive ? (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !0), this._frameCallbacks.push(this._currentFrameID, t), this._frameCallbackLength += 2) : (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !1), this._currentFrameCallbacks.push(this._currentFrameID, t), this._currentFrameCallbacksLength += 2) : (this._currentFrameID = this.rafEmitter.run(), this._nextFrameCallbacks.push(this._currentFrameID, t), this._nextFrameCallbacksLength += 2), this._currentFrameID
        }, n.cancelAnimationFrame = function(t) {
            this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(t), this._cancelFrameIdx > -1 ? this._cancelNextAnimationFrame() : (this._cancelFrameIdx = this._currentFrameCallbacks.indexOf(t), this._cancelFrameIdx > -1 ? this._cancelCurrentAnimationFrame() : (this._cancelFrameIdx = this._frameCallbacks.indexOf(t), this._cancelFrameIdx > -1 && this._cancelRunningAnimationFrame()))
        }, n._onRAFExecuted = function(t) {
            for (this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) this._frameCallbacks[this._frameCallbackIteration + 1](t.time, t);
            this._frameCallbacks.length = 0, this._frameCallbackLength = 0
        }, n._onBeforeRAFExecutorStart = function() {
            Array.prototype.push.apply(this._currentFrameCallbacks, this._nextFrameCallbacks.splice(0, this._nextFrameCallbacksLength)), this._currentFrameCallbacksLength = this._nextFrameCallbacksLength, this._nextFrameCallbacks.length = 0, this._nextFrameCallbacksLength = 0
        }, n._onBeforeRAFExecutorPhase = function() {
            this._phaseActive = !0, Array.prototype.push.apply(this._frameCallbacks, this._currentFrameCallbacks.splice(0, this._currentFrameCallbacksLength)), this._frameCallbackLength = this._currentFrameCallbacksLength, this._currentFrameCallbacks.length = 0, this._currentFrameCallbacksLength = 0
        }, n._onAfterRAFExecutorPhase = function() {
            this._phaseActive = !1
        }, n._cachePhaseIndex = function() {
            this.phaseIndex = this.rafEmitter.executor.phases.indexOf(this.phase)
        }, n._cancelRunningAnimationFrame = function() {
            this._frameCallbacks.splice(this._cancelFrameIdx, 2), this._frameCallbackLength -= 2
        }, n._cancelCurrentAnimationFrame = function() {
            this._currentFrameCallbacks.splice(this._cancelFrameIdx, 2), this._currentFrameCallbacksLength -= 2
        }, n._cancelNextAnimationFrame = function() {
            this._nextFrameCallbacks.splice(this._cancelFrameIdx, 2), this._nextFrameCallbacksLength -= 2, 0 === this._nextFrameCallbacksLength && this.rafEmitter.cancel()
        }, t.exports = s
    }, function(t, e, i) {
        "use strict";
        var r = i(31),
            s = function(t) {
                r.call(this, t)
            };
        (s.prototype = Object.create(r.prototype))._subscribe = function() {
            return this.executor.subscribe(this, !0)
        }, t.exports = s
    }, function(t, e, i) {
        "use strict";
        var r, s = i(32).EventEmitterMicro,
            n = i(33),
            a = i(36);

        function o(t) {
            t = t || {}, s.call(this), this.id = a.getNewID(), this.executor = t.executor || n, this._reset(), this._willRun = !1, this._didDestroy = !1
        }(r = o.prototype = Object.create(s.prototype)).run = function() {
            return this._willRun || (this._willRun = !0), this._subscribe()
        }, r.cancel = function() {
            this._unsubscribe(), this._willRun && (this._willRun = !1), this._reset()
        }, r.destroy = function() {
            var t = this.willRun();
            return this.cancel(), this.executor = null, s.prototype.destroy.call(this), this._didDestroy = !0, t
        }, r.willRun = function() {
            return this._willRun
        }, r.isRunning = function() {
            return this._isRunning
        }, r._subscribe = function() {
            return this.executor.subscribe(this)
        }, r._unsubscribe = function() {
            return this.executor.unsubscribe(this)
        }, r._onAnimationFrameStart = function(t) {
            this._isRunning = !0, this._willRun = !1, this._didEmitFrameData || (this._didEmitFrameData = !0, this.trigger("start", t))
        }, r._onAnimationFrameEnd = function(t) {
            this._willRun || (this.trigger("stop", t), this._reset())
        }, r._reset = function() {
            this._didEmitFrameData = !1, this._isRunning = !1
        }, t.exports = o
    }, function(t, e, i) {
        "use strict";
        t.exports = {
            EventEmitterMicro: i(8)
        }
    }, function(t, e, i) {
        "use strict";
        var r = i(9).SharedInstance,
            s = i(10).majorVersionNumber,
            n = i(35);
        t.exports = r.share("@marcom/ac-raf-emitter/sharedRAFExecutorInstance", s, n)
    }, function(t, e, i) {
        "use strict";
        var r, s = "undefined" != typeof window ? window : {},
            n = s.AC,
            a = (r = {}, {
                get: function(t, e) {
                    var i = null;
                    return r[t] && r[t][e] && (i = r[t][e]), i
                },
                set: function(t, e, i) {
                    return r[t] || (r[t] = {}), r[t][e] = "function" == typeof i ? new i : i, r[t][e]
                },
                share: function(t, e, i) {
                    var r = this.get(t, e);
                    return r || (r = this.set(t, e, i)), r
                },
                remove: function(t, e) {
                    var i = typeof e;
                    if ("string" !== i && "number" !== i) r[t] && (r[t] = null);
                    else {
                        if (!r[t] || !r[t][e]) return;
                        r[t][e] = null
                    }
                }
            });
        n || (n = s.AC = {}), n.SharedInstance || (n.SharedInstance = a), t.exports = n.SharedInstance
    }, function(t, e, i) {
        "use strict";
        var r, s = i(8);

        function n(t) {
            t = t || {}, this._reset(), this.updatePhases(), this.eventEmitter = new s, this._willRun = !1, this._totalSubscribeCount = -1;
            var e = null,
                i = null;
            "undefined" != typeof window ? (e = window.requestAnimationFrame, i = window.cancelAnimationFrame) : e = i = function() {}, this._requestAnimationFrame = e, this._cancelAnimationFrame = i, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
        }(r = n.prototype).frameRequestedPhase = "requested", r.startPhase = "start", r.runPhases = ["update", "external", "draw"], r.endPhase = "end", r.disabledPhase = "disabled", r.beforePhaseEventPrefix = "before:", r.afterPhaseEventPrefix = "after:", r.subscribe = function(t, e) {
            return this._totalSubscribeCount++, this._nextFrameSubscribers[t.id] || (e ? this._nextFrameSubscribersOrder.unshift(t.id) : this._nextFrameSubscribersOrder.push(t.id), this._nextFrameSubscribers[t.id] = t, this._nextFrameSubscriberArrayLength++, this._nextFrameSubscriberCount++, this._run()), this._totalSubscribeCount
        }, r.subscribeImmediate = function(t, e) {
            return this._totalSubscribeCount++, this._subscribers[t.id] || (e ? this._subscribersOrder.splice(this._currentSubscriberIndex + 1, 0, t.id) : this._subscribersOrder.unshift(t.id), this._subscribers[t.id] = t, this._subscriberArrayLength++, this._subscriberCount++), this._totalSubscribeCount
        }, r.unsubscribe = function(t) {
            return !!this._nextFrameSubscribers[t.id] && (this._nextFrameSubscribers[t.id] = null, this._nextFrameSubscriberCount--, 0 === this._nextFrameSubscriberCount && this._cancel(), !0)
        }, r.getSubscribeID = function() {
            return this._totalSubscribeCount += 1
        }, r.destroy = function() {
            var t = this._cancel();
            return this.eventEmitter.destroy(), this.eventEmitter = null, this.phases = null, this._subscribers = null, this._subscribersOrder = null, this._nextFrameSubscribers = null, this._nextFrameSubscribersOrder = null, this._rafData = null, this._boundOnAnimationFrame = null, this._onExternalAnimationFrame = null, t
        }, r.useExternalAnimationFrame = function(t) {
            if ("boolean" == typeof t) {
                var e = this._isUsingExternalAnimationFrame;
                return t && this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), !this._willRun || t || this._animationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this._isUsingExternalAnimationFrame = t, t ? this._boundOnExternalAnimationFrame : e || !1
            }
        }, r.updatePhases = function() {
            this.phases || (this.phases = []), this.phases.length = 0, this.phases.push(this.frameRequestedPhase), this.phases.push(this.startPhase), Array.prototype.push.apply(this.phases, this.runPhases), this.phases.push(this.endPhase), this._runPhasesLength = this.runPhases.length, this._phasesLength = this.phases.length
        }, r._run = function() {
            if (!this._willRun) return this._willRun = !0, 0 === this.lastFrameTime && (this.lastFrameTime = performance.now()), this._animationFrameActive = !0, this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this.phase === this.disabledPhase && (this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex]), !0
        }, r._cancel = function() {
            var t = !1;
            return this._animationFrameActive && (this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), this._animationFrameActive = !1, this._willRun = !1, t = !0), this._isRunning || this._reset(), t
        }, r._onAnimationFrame = function(t) {
            for (this._subscribers = this._nextFrameSubscribers, this._subscribersOrder = this._nextFrameSubscribersOrder, this._subscriberArrayLength = this._nextFrameSubscriberArrayLength, this._subscriberCount = this._nextFrameSubscriberCount, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex], this._isRunning = !0, this._willRun = !1, this._didRequestNextRAF = !1, this._rafData.delta = t - this.lastFrameTime, this.lastFrameTime = t, this._rafData.fps = 0, this._rafData.delta >= 1e3 && (this._rafData.delta = 0), 0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta), this._rafData.time = t, this._rafData.naturalFps = this._rafData.fps, this._rafData.timeNow = Date.now(), this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameStart(this._rafData);
            for (this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._runPhaseIndex = 0; this._runPhaseIndex < this._runPhasesLength; this._runPhaseIndex++) {
                for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]].trigger(this.phase, this._rafData);
                this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase)
            }
            for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameEnd(this._rafData);
            this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._willRun ? (this.phaseIndex = 0, this.phaseIndex = this.phases[this.phaseIndex]) : this._reset()
        }, r._onExternalAnimationFrame = function(t) {
            this._isUsingExternalAnimationFrame && this._onAnimationFrame(t)
        }, r._reset = function() {
            this._rafData || (this._rafData = {}), this._rafData.time = 0, this._rafData.delta = 0, this._rafData.fps = 0, this._rafData.naturalFps = 0, this._rafData.timeNow = 0, this._subscribers = {}, this._subscribersOrder = [], this._currentSubscriberIndex = -1, this._subscriberArrayLength = 0, this._subscriberCount = 0, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._didEmitFrameData = !1, this._animationFrame = null, this._animationFrameActive = !1, this._isRunning = !1, this._shouldReset = !1, this.lastFrameTime = 0, this._runPhaseIndex = -1, this.phaseIndex = -1, this.phase = this.disabledPhase
        }, t.exports = n
    }, function(t, e, i) {
        "use strict";
        var r = i(9).SharedInstance,
            s = i(10).majorVersionNumber,
            n = function() {
                this._currentID = 0
            };
        n.prototype.getNewID = function() {
            return this._currentID++, "raf:" + this._currentID
        }, t.exports = r.share("@marcom/ac-raf-emitter/sharedRAFEmitterIDGeneratorInstance", s, n)
    }, function(t, e, i) {
        "use strict";
        const {
            mockPrices: r
        } = i(12), s = i(13);
        t.exports = function(t, e, i = "en") {
            const n = parseFloat(r[e] || e || 0),
                a = s(n, i);
            return {
                id: t,
                name: "",
                type: "WUIP",
                price: {
                    value: n,
                    display: {
                        actual: "$" + Number(n).toLocaleString(i, {
                            minimumFractionDigits: 2
                        }),
                        smart: "$" + a,
                        from: "From $" + a,
                        monthlyFrom: "From $" + a + "/mo."
                    }
                }
            }
        }
    }, function(t, e, i) {
        "use strict";
        t.exports = {
            assert: i(39),
            count: i(40),
            countReset: i(41),
            dir: i(42),
            dirxml: i(43),
            enabled: i(17),
            error: i(44),
            group: i(45),
            groupCollapsed: i(46),
            groupEnd: i(47),
            info: i(48),
            log: i(49),
            profile: i(50),
            profileEnd: i(51),
            table: i(52),
            time: i(53),
            timeEnd: i(54),
            trace: i(55),
            warn: i(56)
        }
    }, function(t, e, i) {
        "use strict";
        t.exports = i(0)("assert")
    }, function(t, e, i) {
        "use strict";
        t.exports = i(0)("count")
    }, function(t, e, i) {
        "use strict";
        t.exports = i(0)("countReset")
    }, function(t, e, i) {
        "use strict";
        t.exports = i(0)("dir")
    }, function(t, e, i) {
        "use strict";
        t.exports = i(0)("dirxml")
    }, function(t, e, i) {
        "use strict";
        t.exports = i(0)("error")
    }, function(t, e, i) {
        "use strict";
        t.exports = i(0)("group")
    }, function(t, e, i) {
        "use strict";
        t.exports = i(0)("groupCollapsed")
    }, function(t, e, i) {
        "use strict";
        t.exports = i(0)("groupEnd")
    }, function(t, e, i) {
        "use strict";
        t.exports = i(0)("info")
    }, function(t, e, i) {
        "use strict";
        t.exports = i(0)("log")
    }, function(t, e, i) {
        "use strict";
        t.exports = i(0)("profile")
    }, function(t, e, i) {
        "use strict";
        t.exports = i(0)("profileEnd")
    }, function(t, e, i) {
        "use strict";
        t.exports = i(0)("table")
    }, function(t, e, i) {
        "use strict";
        t.exports = i(0)("time")
    }, function(t, e, i) {
        "use strict";
        t.exports = i(0)("timeEnd")
    }, function(t, e, i) {
        "use strict";
        t.exports = i(0)("trace")
    }, function(t, e, i) {
        "use strict";
        t.exports = i(0)("warn")
    }, function(t, e, i) {
        "use strict";
        var r = {};
        t.exports = function(t, e, i) {
            if (t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"), i || !r.hasOwnProperty(t)) {
                var s = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(location.search),
                    n = null === s ? e : decodeURIComponent(s[1].replace(/\+/g, " "));
                "true" !== n && "false" !== n || (n = "true" === n), isNaN(parseFloat(n)) || (n = parseFloat(n)), r[t] = n
            }
            return r[t]
        }
    }, function(t, e, i) {
        "use strict";
        const r = i(59),
            s = /\?(.+)/,
            n = /(#.*)/;
        t.exports = function(t, e, i = []) {
            const a = !Array.isArray(i),
                o = [],
                c = [],
                u = t => {
                    t.match("^slug:") ? c.push((t => t.split(":")[1])(t)) : o.push(t)
                };
            if (a) u(i);
            else
                for (const t of i) u(t);
            const h = ((t = t.replace(n, "")).match(s) || [])[1];
            let l = t;
            if (i.length) {
                const t = ((t, e, i) => {
                        const r = !t.length && e.length,
                            s = t.length;
                        return "parts" === i ? i : r ? i.slugs : s ? i.ids : ""
                    })(o, c, e),
                    i = `${r(o)}${((t,e)=>{const i=t.length&&e.length,s=!t.length&&e.length;return i?"&slugs="+r(e):s?r(e):""})(o,c)}`;
                l += h ? "&" : "?", l = l.concat(`${t}=${i}`)
            }
            return l
        }
    }, function(t, e, i) {
        "use strict";
        t.exports = function(t = []) {
            return Array.isArray(t) || (t = [t]), t.filter(t => "string" == typeof t).map(t => encodeURIComponent(String(t).trim())).join(",")
        }
    }, function(t, e, i) {
        "use strict";
        t.exports = function(t) {
            try {
                return JSON.parse(t)
            } catch (t) {
                return null
            }
        }
    }, function(t, e, i) {
        "use strict";
        const r = i(1);
        t.exports = class extends Error {
            constructor(t = {}) {
                let e;
                "endpoint" === t.type && (e = "Failed to fetch product prices: The API service endpoint was not specified."), super(e), this.name = "ConfigurationError", this.type = t.type
            }
            showHint() {
                "endpoint" === this.type && (r.warn(this.message + " This may be expected if this page's locale doesn't have an Apple Online Store."), r.info('If prices are expected for this locale, check that the API service endpoint is specified in HTML with %c<link rel="ac:pricing-endpoint" href="/path/to/endpoint">%c or the "fetchProducts" function\'s "endpoint" option.', "font-family:monospace", ""))
            }
        }
    }, function(t, e, i) {
        "use strict";
        const r = i(1);
        t.exports = class extends Error {
            constructor() {
                super("Failed to fetch product prices: The API service responded with a status of 404 (Not Found)."), this.name = "ServiceNotFoundError"
            }
            showHint() {
                r.warn(this.message), r.info('Check the "href" value of the %c<link rel="ac:pricing-endpoint">%c tag or the "fetchProducts" function\'s "endpoint" option, if specified.', "font-family:monospace", "")
            }
        }
    }, function(t, e, i) {
        "use strict";
        const r = i(1);
        t.exports = class extends Error {
            constructor() {
                super("Failed to fetch product prices: The Apple Online Store is temporarily unavailable."), this.name = "ServiceUnavailableError"
            }
            showHint() {
                r.warn(this.message)
            }
        }
    }, function(t, e, i) {
        "use strict";
        const r = i(1);
        t.exports = class extends Error {
            constructor(t) {
                super("Failed to fetch product prices: The API service did not respond within " + t + " seconds, so the request was aborted."), this.name = "TimeoutError", this.timeoutValue = t
            }
            showHint() {
                r.warn(this.message)
            }
        }
    }, function(t, e, i) {
        "use strict";
        const r = i(1);
        t.exports = class extends Error {
            constructor() {
                super("Failed to fetch prices: An unexpected error occured."), this.name = "UnexpectedError"
            }
            showHint() {
                r.warn(this.message), r.info("The API service endpoint may require authentication and/or authorization.")
            }
        }
    }, function(t, e, i) {
        "use strict";
        const r = i(67),
            s = i(18),
            n = i(22);
        t.exports = class extends s {
            constructor(t, e) {
                super(t, { ...e,
                    method: "POST"
                }), this.identifierParam = {
                    ids: "ids",
                    slugs: "slugs"
                }
            }
            createDummyItem(t) {
                return r(t, "unauthorized")
            }
            formatResponseItem(t, e) {
                let i = null;
                if (this.options.dummyPrices && "UNKNOWN" === e.productName && (e = r(t, "unknown"), this.itemsWithDummyPrice.push(t)), i = new n(e), !i.credit || 0 !== i.credit.value) return i.credit && 999999 === i.credit.value && this.itemsWithDummyPrice.push(t), i
            }
            getItemsFromResponse(t) {
                return t.ids
            }
        }
    }, function(t, e, i) {
        "use strict";
        const {
            mockPrices: r
        } = i(12), s = i(13);
        t.exports = function(t, e, i = "en") {
            const n = parseFloat(r[e] || e || 0),
                a = s(n, i);
            return {
                id: t,
                productName: "",
                productNameWithMaxPrice: "",
                credit: {
                    value: n,
                    display: {
                        actual: "$" + Number(n).toLocaleString(i, {
                            minimumFractionDigits: 2
                        }),
                        smart: "$" + a,
                        from: "From $" + a,
                        upto: "Up to $" + a
                    }
                }
            }
        }
    }])
}));