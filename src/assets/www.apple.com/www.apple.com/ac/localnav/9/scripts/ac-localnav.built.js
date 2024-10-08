! function t(e, i, n) {
    function s(a, o) {
        if (!i[a]) {
            if (!e[a]) {
                var c = "function" == typeof require && require;
                if (!o && c) return c(a, !0);
                if (r) return r(a, !0);
                var h = new Error("Cannot find module '" + a + "'");
                throw h.code = "MODULE_NOT_FOUND", h
            }
            var u = i[a] = {
                exports: {}
            };
            e[a][0].call(u.exports, (function(t) {
                return s(e[a][1][t] || t)
            }), u, u.exports, t, e, i, n)
        }
        return i[a].exports
    }
    for (var r = "function" == typeof require && require, a = 0; a < n.length; a++) s(n[a]);
    return s
}({
    1: [function(t, e, i) {
        e.exports = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }, {}],
    2: [function(t, e, i) {
        var n = t(5);

        function s(t, e) {
            for (var i = 0; i < e.length; i++) {
                var s = e[i];
                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, n(s.key), s)
            }
        }
        e.exports = function(t, e, i) {
            return e && s(t.prototype, e), i && s(t, i), Object.defineProperty(t, "prototype", {
                writable: !1
            }), t
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }, {
        5: 5
    }],
    3: [function(t, e, i) {
        e.exports = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }, {}],
    4: [function(t, e, i) {
        var n = t(6).default;
        e.exports = function(t, e) {
            if ("object" != n(t) || !t) return t;
            var i = t[Symbol.toPrimitive];
            if (void 0 !== i) {
                var s = i.call(t, e || "default");
                if ("object" != n(s)) return s;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === e ? String : Number)(t)
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }, {
        6: 6
    }],
    5: [function(t, e, i) {
        var n = t(6).default,
            s = t(4);
        e.exports = function(t) {
            var e = s(t, "string");
            return "symbol" == n(e) ? e : String(e)
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }, {
        4: 4,
        6: 6
    }],
    6: [function(t, e, i) {
        function n(t) {
            return e.exports = n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, e.exports.__esModule = !0, e.exports.default = e.exports, n(t)
        }
        e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports
    }, {}],
    7: [function(t, e, i) {
        "use strict";
        var n = t(9),
            s = t(11),
            r = t(14),
            a = function(t, e) {
                e = e || {}, this._tabbables = null, this._excludeHidden = e.excludeHidden, this._firstTabbableElement = e.firstFocusElement, this._lastTabbableElement = null, this._relatedTarget = null, this.el = t, this._handleOnFocus = this._handleOnFocus.bind(this)
            },
            o = a.prototype;
        o.start = function(t) {
            this.updateTabbables(), s(this.el, null, this._excludeHidden);
            var e = document.activeElement;
            this._firstTabbableElement ? this.el.contains(document.activeElement) || t || (this._firstTabbableElement.focus(), e = this._firstTabbableElement) : console.warn("this._firstTabbableElement is null, CircularTab needs at least one tabbable element."), this._relatedTarget = e, document.addEventListener("focus", this._handleOnFocus, !0)
        }, o.stop = function() {
            r(this.el), document.removeEventListener("focus", this._handleOnFocus, !0)
        }, o.updateTabbables = function() {
            this._tabbables = n.getTabbableElements(this.el, this._excludeHidden), this._firstTabbableElement = this._firstTabbableElement || this._tabbables[0], this._lastTabbableElement = this._tabbables[this._tabbables.length - 1]
        }, o._handleOnFocus = function(t) {
            if (this.el.contains(t.target)) this._relatedTarget = t.target;
            else {
                if (t.preventDefault(), this.updateTabbables(), this._relatedTarget === this._lastTabbableElement || null === this._relatedTarget) return this._firstTabbableElement.focus(), void(this._relatedTarget = this._firstTabbableElement);
                if (this._relatedTarget === this._firstTabbableElement && this._lastTabbableElement) return this._lastTabbableElement.focus(), void(this._relatedTarget = this._lastTabbableElement)
            }
        }, o.destroy = function() {
            this.stop(), this.el = null, this._tabbables = null, this._firstTabbableElement = null, this._lastTabbableElement = null, this._relatedTarget = null, this._handleOnFocus = null
        }, e.exports = a
    }, {
        11: 11,
        14: 14,
        9: 9
    }],
    8: [function(t, e, i) {
        "use strict";

        function n() {
            this._createElements(), this._bindEvents()
        }
        var s = n.prototype;
        s._bindEvents = function() {
            this._onResize = this._resize.bind(this)
        }, s._createElements = function() {
            if ("undefined" != typeof document && !this.span) {
                this.span = document.createElement("span");
                var t = this.span.style;
                if (t.visibility = "hidden", t.position = "absolute", t.top = "0", t.zIndex = "-1", this.span.innerHTML = "&nbsp;", !window.ResizeObserver) {
                    this.iframe = document.createElement("iframe");
                    var e = this.iframe.style;
                    e.position = "absolute", e.top = "0", e.left = "0", e.width = "100%", e.height = "100%", this.span.appendChild(this.iframe)
                }
                document.body.appendChild(this.span)
            }
        }, s.detect = function(t) {
            this._createElements(), this.originalSize = t || 17, this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.currentSize > this.originalSize && this._onResize(), this.isDetecting || (window.ResizeObserver ? (this.resizeObserver = new ResizeObserver(this._onResize), this.resizeObserver.observe(this.span)) : this.iframe.contentWindow.addEventListener("resize", this._onResize), this.isDetecting = !0)
        }, s._resize = function() {
            this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.originalSize < this.currentSize ? document.documentElement.classList.add("text-zoom") : document.documentElement.classList.remove("text-zoom"), window.dispatchEvent(new Event("resize")), window.dispatchEvent(new CustomEvent("resize:text-zoom", {
                detail: this
            }))
        }, s.getScale = function() {
            return this.currentSize / this.originalSize
        }, s.remove = function() {
            this.isDetecting && (this.resizeObserver && this.resizeObserver.unobserve(this.span), this.iframe && this.iframe.contentWindow.removeEventListener("resize", this._onResize), this.isDetecting = !1)
        }, s.destroy = function() {
            this.remove(), this.span && this.span.parentElement && this.span.parentElement.removeChild(this.span), this.span = null, this.iframe = null, this.resizeObserver = null
        }, e.exports = new n
    }, {}],
    9: [function(t, e, i) {
        "use strict";
        var n = t(16),
            s = function() {
                this.focusableSelectors = n.selectors
            },
            r = s.prototype;
        r.isFocusableElement = function(t, e, i) {
            return !(e && !this._isDisplayed(t)) && (n.nodeName[t.nodeName] ? !t.disabled : !t.contentEditable || (i = i || parseFloat(t.getAttribute("tabindex")), !isNaN(i)))
        }, r.isTabbableElement = function(t, e) {
            if (e && !this._isDisplayed(t)) return !1;
            var i = t.getAttribute("tabindex");
            return i = parseFloat(i), isNaN(i) ? this.isFocusableElement(t, e, i) : i >= 0
        }, r._isDisplayed = function(t) {
            var e = t.getBoundingClientRect();
            return (0 !== e.top || 0 !== e.left || 0 !== e.width || 0 !== e.height) && "hidden" !== window.getComputedStyle(t).visibility
        }, r.getTabbableElements = function(t, e) {
            for (var i = t.querySelectorAll(this.focusableSelectors), n = i.length, s = [], r = 0; r < n; r++) this.isTabbableElement(i[r], e) && s.push(i[r]);
            return s
        }, r.getFocusableElements = function(t, e) {
            for (var i = t.querySelectorAll(this.focusableSelectors), n = i.length, s = [], r = 0; r < n; r++) this.isFocusableElement(i[r], e) && s.push(i[r]);
            return s
        }, e.exports = new s
    }, {
        16: 16
    }],
    10: [function(t, e, i) {
        "use strict";
        var n = t(15),
            s = t(9),
            r = "data-original-",
            a = "tabindex",
            o = function(t, e) {
                var i = t.getAttribute(r + e);
                i || (i = t.getAttribute(e) || "", t.setAttribute(r + e, i))
            };
        e.exports = function(t, e) {
            if (s.isFocusableElement(t, e)) o(t, a), t.setAttribute(a, "-1");
            else
                for (var i = s.getTabbableElements(t, e), r = i.length; r--;) o(i[r], a), i[r].setAttribute(a, "-1");
            o(t, n.HIDDEN), t.setAttribute(n.HIDDEN, "true")
        }
    }, {
        15: 15,
        9: 9
    }],
    11: [function(t, e, i) {
        "use strict";
        var n = t(10);
        e.exports = function t(e, i, s) {
            i = i || document.body;
            for (var r = e, a = e; r = r.previousElementSibling;) n(r, s);
            for (; a = a.nextElementSibling;) n(a, s);
            e.parentElement && e.parentElement !== i && t(e.parentElement, i, s)
        }
    }, {
        10: 10
    }],
    12: [function(t, e, i) {
        "use strict";
        e.exports = function(t, e) {
            var i;
            i = t instanceof NodeList ? t : [].concat(t), e = Array.isArray(e) ? e : [].concat(e), i.forEach((function(t) {
                e.forEach((function(e) {
                    t.removeAttribute(e)
                }))
            }))
        }
    }, {}],
    13: [function(t, e, i) {
        "use strict";
        var n = t(12),
            s = t(15),
            r = "data-original-",
            a = "tabindex",
            o = function(t, e) {
                var i = t.getAttribute(r + e);
                null !== i && ("" === i ? n(t, e) : t.setAttribute(e, i), n(t, r + e))
            };
        e.exports = function(t) {
            o(t, a), o(t, s.HIDDEN);
            for (var e = t.querySelectorAll("[".concat(r + a, "]")), i = e.length; i--;) o(e[i], a)
        }
    }, {
        12: 12,
        15: 15
    }],
    14: [function(t, e, i) {
        "use strict";
        var n = t(13);
        e.exports = function t(e, i) {
            i = i || document.body;
            for (var s = e, r = e; s = s.previousElementSibling;) n(s);
            for (; r = r.nextElementSibling;) n(r);
            e.parentElement && e.parentElement !== i && t(e.parentElement, i)
        }
    }, {
        13: 13
    }],
    15: [function(t, e, i) {
        "use strict";
        e.exports = {
            AUTOCOMPLETE: "aria-autocomplete",
            CHECKED: "aria-checked",
            DISABLED: "aria-disabled",
            EXPANDED: "aria-expanded",
            HASPOPUP: "aria-haspopup",
            HIDDEN: "aria-hidden",
            INVALID: "aria-invalid",
            LABEL: "aria-label",
            LEVEL: "aria-level",
            MULTILINE: "aria-multiline",
            MULTISELECTABLE: "aria-multiselectable",
            ORIENTATION: "aria-orientation",
            PRESSED: "aria-pressed",
            READONLY: "aria-readonly",
            REQUIRED: "aria-required",
            SELECTED: "aria-selected",
            SORT: "aria-sort",
            VALUEMAX: "aria-valuemax",
            VALUEMIN: "aria-valuemin",
            VALUENOW: "aria-valuenow",
            VALUETEXT: "aria-valuetext",
            ATOMIC: "aria-atomic",
            BUSY: "aria-busy",
            LIVE: "aria-live",
            RELEVANT: "aria-relevant",
            DROPEFFECT: "aria-dropeffect",
            GRABBED: "aria-grabbed",
            ACTIVEDESCENDANT: "aria-activedescendant",
            CONTROLS: "aria-controls",
            DESCRIBEDBY: "aria-describedby",
            FLOWTO: "aria-flowto",
            LABELLEDBY: "aria-labelledby",
            OWNS: "aria-owns",
            POSINSET: "aria-posinset",
            SETSIZE: "aria-setsize"
        }
    }, {}],
    16: [function(t, e, i) {
        "use strict";
        e.exports = {
            selectors: ["input", "select", "textarea", "button", "optgroup", "option", "menuitem", "fieldset", "object", "a[href]", "[tabindex]", "[contenteditable]"].join(","),
            nodeName: {
                INPUT: "input",
                SELECT: "select",
                TEXTAREA: "textarea",
                BUTTON: "button",
                OPTGROUP: "optgroup",
                OPTION: "option",
                MENUITEM: "menuitem",
                FIELDSET: "fieldset",
                OBJECT: "object",
                A: "a"
            }
        }
    }, {}],
    17: [function(t, e, i) {
        "use strict";
        e.exports = Object.freeze({
            ELEMENT: 1,
            TEXT: 3,
            COMMENT: 8,
            DOCUMENT: 9,
            DOCUMENT_TYPE: 10,
            DOCUMENT_FRAGMENT: 11
        })
    }, {}],
    18: [function(t, e, i) {
        "use strict";
        var n = t(19);
        e.exports = function(t, e) {
            return n.insertNode(t, "insertBefore"), n.childNode(e, "insertBefore"), n.hasParentNode(e, "insertBefore"), e.parentNode.insertBefore(t, e)
        }
    }, {
        19: 19
    }],
    19: [function(t, e, i) {
        "use strict";
        var n = t(21),
            s = t(17),
            r = s.COMMENT,
            a = s.DOCUMENT_FRAGMENT,
            o = s.ELEMENT,
            c = s.TEXT,
            h = [o, c, r, a],
            u = [o, c, r],
            l = [o, a];
        e.exports = {
            parentNode: function(t, e, i) {
                if (i = i || "target", t && !n(t, l)) throw new TypeError(e + ": " + i + " must be an Element, or Document Fragment")
            },
            childNode: function(t, e, i) {
                if (i = i || "target", t && !n(t, u)) throw new TypeError(e + ": " + i + " must be an Element, TextNode, or Comment")
            },
            insertNode: function(t, e, i) {
                if (i = i || "node", t && !n(t, h)) throw new TypeError(e + ": " + i + " must be an Element, TextNode, Comment, or Document Fragment")
            },
            hasParentNode: function(t, e, i) {
                if (i = i || "target", !t.parentNode) throw new TypeError(e + ": " + i + " must have a parentNode")
            }
        }
    }, {
        17: 17,
        21: 21
    }],
    20: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            return !(!t || !t.nodeType)
        }
    }, {}],
    21: [function(t, e, i) {
        "use strict";
        var n = t(20);
        e.exports = function(t, e) {
            return !!n(t) && ("number" == typeof e ? t.nodeType === e : !!Array.isArray(e) && -1 !== e.indexOf(t.nodeType))
        }
    }, {
        20: 20
    }],
    22: [function(t, e, i) {
        "use strict";
        e.exports = {
            EventEmitterMicro: t(23)
        }
    }, {
        23: 23
    }],
    23: [function(t, e, i) {
        "use strict";

        function n() {
            this._events = {}
        }
        var s = n.prototype;
        s.on = function(t, e) {
            return this._events[t] = this._events[t] || [], this._events[t].unshift(e), e
        }, s.once = function(t, e) {
            var i = this;
            return this.on(t, (function n(s) {
                i.off(t, n), void 0 !== s ? e(s) : e()
            }))
        }, s.off = function(t, e) {
            if (this.has(t)) {
                if (1 === arguments.length) return this._events[t] = null, void delete this._events[t];
                var i = this._events[t].indexOf(e); - 1 !== i && this._events[t].splice(i, 1)
            }
        }, s.trigger = function(t, e) {
            if (this.has(t))
                for (var i = this._events[t].length - 1; i >= 0; i--) void 0 !== e ? this._events[t][i](e) : this._events[t][i]()
        }, s.has = function(t) {
            return t in this._events != !1 && 0 !== this._events[t].length
        }, s.destroy = function() {
            for (var t in this._events) this._events[t] = null;
            this._events = null
        }, e.exports = n
    }, {}],
    24: [function(t, e, i) {
        "use strict";
        var n = t(3),
            s = n(t(1)),
            r = n(t(2)),
            a = function() {
                function t(e, i) {
                    (0, s.default)(this, t), this._target = e, this._tests = {}, this.addTests(i)
                }
                return (0, r.default)(t, [{
                    key: "addTests",
                    value: function(t) {
                        this._tests = Object.assign(this._tests, t)
                    }
                }, {
                    key: "htmlClass",
                    value: function() {
                        this._target.classList.remove("no-js"), this._target.classList.add("js");
                        for (var t = 0, e = Object.keys(this._tests); t < e.length; t++) {
                            var i = e[t];
                            this._addClass(i)
                        }
                    }
                }, {
                    key: "_supports",
                    value: function(t) {
                        return void 0 !== this._tests[t] && ("function" == typeof this._tests[t] && (this._tests[t] = this._tests[t]()), this._tests[t])
                    }
                }, {
                    key: "_addClass",
                    value: function(t, e) {
                        e = e || "no-", this._supports(t) ? this._target.classList.add(t) : this._target.classList.add(e + t)
                    }
                }]), t
            }();
        e.exports = a
    }, {
        1: 1,
        2: 2,
        3: 3
    }],
    25: [function(t, e, i) {
        "use strict";
        var n = t(21),
            s = t(50),
            r = t(53),
            a = t(62),
            o = t(7),
            c = t(8),
            h = t(26),
            u = t(29),
            l = t(28),
            d = t(17).ELEMENT,
            m = {
                className: "localnav"
            },
            _ = function(t, e) {
                var i;
                e = Object.assign({}, m, e), this.el = t, i = e.selector || "." + e.className, this._selectors = {
                    localNavClassname: e.className,
                    traySelector: e.traySelector || "." + e.className + "-menu-tray",
                    viewportEmitterID: e.viewportEmitterID || e.className + "-viewport-emitter",
                    curtainID: e.curtainID || e.className + "-curtain",
                    menuStateID: e.menuStateID || e.className + "-menustate",
                    menuOpeningClassName: e.menuOpeningClassName || e.className + "-opening",
                    menuOpenClassName: e.menuOpenClassName || e.className + "-open",
                    chevronClassname: e.chevronClassName || e.className + "-menucta-chevron",
                    curtainOpeningClassName: e.className + "-curtain-opening",
                    menuCtaClickClassName: e.className + "-menucta-click",
                    textZoomedClassName: e.textZoomedClassName || e.className + "-text-zoomed"
                }, this._selectors.clickAwaySelector = i + ", #" + this._selectors.curtainID + ", #" + this._selectors.menuStateID, this.tray = this.el.querySelector(this._selectors.traySelector), this.tray && !this.tray.id && this.tray.setAttribute("id", this._selectors.menuStateID + "-tray"), this.curtain = document.getElementById(this._selectors.curtainID), this.stickyEnabled = this._getStickyEnabled(), this._transitionsAvailable = r("transition"), this._viewports = new a(this._selectors.viewportEmitterID), this.stickyEnabled && (this._sticky = new u(this.el, e)), this.circTab = new o(this.el), this._initializeMenu(), this._setCssVars()
            };
        _.create = function(t, e) {
            return new _(t, e)
        };
        var p = _.prototype;
        p._getStickyEnabled = function() {
            return this.el.hasAttribute("data-sticky")
        }, p._initializeMenu = function() {
            var t, e, i, n, s = document.getElementById(this._selectors.menuStateID),
                r = document.getElementById(this._selectors.menuStateID + "-open"),
                a = document.getElementById(this._selectors.menuStateID + "-close"),
                o = this.el.querySelector('label[for="'.concat(this._selectors.menuStateID, '"] .').concat(this._selectors.chevronClassname)),
                u = "onpopstate" in window ? "popstate" : "beforeunload";
            (this._debounce = function(t) {
                var e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return function() {
                    return clearTimeout(e), e = setTimeout(t, i)
                }
            }, s && r && a) && (this.menu = new h(s, r, a, this.tray, o, this._selectors.menuCtaClickClassName), this._onMenuOpen = this._onMenuOpen.bind(this), this._onMenuClose = this._onMenuClose.bind(this), this.menu.on("open", this._onMenuOpen), this.menu.on("close", this._onMenuClose), this._onViewportChange = this._onViewportChange.bind(this), this._viewports.on("change:viewport", this._onViewportChange), this._onScroll = this._onScroll.bind(this), this._onKeyDown = this._onKeyDown.bind(this), this._onTrayClick = this._onTrayClick.bind(this), window.addEventListener("scroll", this._onScroll), window.addEventListener("touchmove", this._onScroll), window.addEventListener("keydown", this._onKeyDown), null === (t = this.tray) || void 0 === t || t.addEventListener("click", this._onTrayClick), this._closeMenu = this._closeMenu.bind(this), window.addEventListener(u, this._closeMenu), window.addEventListener("orientationchange", this._closeMenu), this.clickAway = new l(this._selectors.clickAwaySelector), this.clickAway.on("click", this._closeMenu), this._onTextZoom = this._onTextZoom.bind(this), window.addEventListener("resize:text-zoom", this._onTextZoom), c.detect(), this._transitionsAvailable && (this._numAnimatingMenuElements = 0, this._onTrayTransitionStart = this._onTrayTransitionStart.bind(this), this._onTrayTransitionCancel = this._onTrayTransitionCancel.bind(this), this._onTrayTransitionEnd = this._onTrayTransitionEnd.bind(this), this._onCurtainTransitionStart = this._onCurtainTransitionStart.bind(this), this._onCurtainTransitionEnd = this._onCurtainTransitionEnd.bind(this), null === (e = this.tray) || void 0 === e || e.addEventListener("transitionstart", this._onTrayTransitionStart), null === (i = this.tray) || void 0 === i || i.addEventListener("transitioncancel", this._onTrayTransitionCancel), null === (n = this.tray) || void 0 === n || n.addEventListener("transitionend", this._onTrayTransitionEnd), this.curtain.addEventListener("transitionstart", this._onCurtainTransitionStart), this.curtain.addEventListener("transitionend", this._onCurtainTransitionEnd)));
            this._updateTrayHidden(), this._setCssVars = this._setCssVars.bind(this), this._setCssVarsDebounced = this._debounce(this._setCssVars), window.addEventListener("resize", this._setCssVarsDebounced)
        }, p._onMenuOpen = function() {
            this._menuCollapseOnScroll = null, this.circTab.start(), this.el.classList.add(this._selectors.menuOpenClassName), this._transitionsAvailable ? this._disableMenuScrollbar() : this._updateTrayHidden()
        }, p._onMenuClose = function() {
            this.el.classList.remove(this._selectors.menuOpenClassName), this._transitionsAvailable ? (this._disableMenuScrollbar(), this._updateTrayHidden(!0)) : this._updateTrayHidden(), this.circTab.stop()
        }, p._onScroll = function(t) {
            var e;
            this.tray && (this.menu.isOpen() && (null === this._menuCollapseOnScroll && (this._menuCollapseOnScroll = this.tray.offsetHeight >= this.tray.scrollHeight), this._menuCollapseOnScroll ? this._closeMenu() : (e = t.target, n(e, d) && s(e, this._selectors.traySelector, !0) || (t.preventDefault(), this._menuCollapseOnScroll = !0))))
        }, p._onCurtainTransitionStart = function() {
            this.curtain.classList.add(this._selectors.curtainOpeningClassName)
        }, p._onCurtainTransitionEnd = function() {
            this.curtain.classList.remove(this._selectors.curtainOpeningClassName)
        }, p._onTrayClick = function(t) {
            "href" in t.target && this._closeMenu()
        }, p._onKeyDown = function(t) {
            !this.menu.isOpen() || "Escape" !== t.code && 27 !== t.keyCode || (this._closeMenu(), this.menu.anchorOpen.focus())
        }, p._onViewportChange = function(t) {
            "medium" !== t.to && "large" !== t.to || this._closeMenu(), this._updateTrayHidden()
        }, p._disableMenuScrollbar = function() {
            this.el.classList.add(this._selectors.menuOpeningClassName), this._updateTrayHidden()
        }, p._enableMenuScroll = function(t) {
            this._numAnimatingMenuElements || (this.el.classList.remove(this._selectors.menuOpeningClassName), t.currentTarget === t.target && "visibility" === t.propertyName && this._updateTrayHidden())
        }, p._onTrayTransitionStart = function() {
            ++this._numAnimatingMenuElements
        }, p._onTrayTransitionCancel = function() {
            this._numAnimatingMenuElements = 0
        }, p._onTrayTransitionEnd = function(t) {
            --this._numAnimatingMenuElements, this._enableMenuScroll(t)
        }, p._closeMenu = function() {
            this.menu.close()
        }, p._setCssVars = function() {
            var t = this;
            this.tray && this.tray.scrollHeight && this.tray.style.setProperty("--r-localnav-menu-tray-natural-height", "".concat(this.tray.scrollHeight, "px")), setTimeout((function() {
                t.el.classList.add("".concat(t._selectors.localNavClassname, "-allow-transitions"))
            }), 100)
        }, p._updateTrayHidden = function(t) {
            if (this.tray) {
                var e = t;
                "boolean" != typeof t && (e = "hidden" === window.getComputedStyle(this.tray).visibility);
                var i = e ? "setAttribute" : "removeAttribute";
                this.tray[i]("aria-hidden", "true"), this.tray[i]("inert", "true")
            }
        }, p._onTextZoom = function(t) {
            var e = t.detail,
                i = e.currentSize / e.originalSize;
            this.el.classList[1 === i ? "remove" : "add"](this._selectors.textZoomedClassName), document.documentElement.style.setProperty("--r-localnav-text-zoom-factor", i)
        }, p.destroy = function() {
            var t, e, i, n, s, r, a = "onpopstate" in window ? "popstate" : "beforeunload";
            for (var o in window.removeEventListener("scroll", this._onScroll), window.removeEventListener("touchmove", this._onScroll), window.removeEventListener("keydown", this._onKeyDown), window.removeEventListener(a, this._closeMenu), window.removeEventListener("orientationchange", this._closeMenu), window.removeEventListener("resize", this._setCssVarsDebounced), null === (t = this.tray) || void 0 === t || t.removeEventListener("click", this._onTrayClick), null === (e = this.tray) || void 0 === e || e.removeEventListener("transitionstart", this._onTrayTransitionStart), null === (i = this.tray) || void 0 === i || i.removeEventListener("transitioncancel", this._onTrayTransitionCancel), null === (n = this.tray) || void 0 === n || n.removeEventListener("transitionend", this._onTrayTransitionEnd), this.curtain.removeEventListener("transitionstart", this._onCurtainTransitionStart), this.curtain.removeEventListener("transitionend", this._onCurtainTransitionEnd), null === (s = this.menu) || void 0 === s || s.destroy(), this.circTab.destroy(), null === (r = this.clickAway) || void 0 === r || r.destroy(), this._viewports.destroy(), window.removeEventListener("resize:text-zoom", this._onTextZoom), c.remove(), this.stickyEnabled && this._sticky.destroy(), this) Object.prototype.hasOwnProperty.call(this, o) && (this[o] = null)
        }, e.exports = _
    }, {
        17: 17,
        21: 21,
        26: 26,
        28: 28,
        29: 29,
        50: 50,
        53: 53,
        62: 62,
        7: 7,
        8: 8
    }],
    26: [function(t, e, i) {
        "use strict";
        var n = t(23),
            s = t(27);

        function r(t, e, i, r, a, o) {
            n.call(this), this.el = t, this.anchorOpen = e, this.anchorClose = i, this.controlled = r, this.chevronEl = a, this.clickClass = o, this._lastOpen = this.el.checked, this.el.setAttribute("aria-controls", this.controlled.id), this.el.setAttribute("aria-expanded", this.el.checked), this.anchorOpen.setAttribute("aria-controls", this.controlled.id), this.anchorOpen.setAttribute("aria-expanded", "false"), this.anchorClose.setAttribute("aria-controls", this.controlled.id), this.anchorClose.setAttribute("aria-expanded", "true"), this.el.addEventListener("change", this.update.bind(this)), this._anchorOpenClick = this._anchorOpenClick.bind(this), this._anchorCloseClick = this._anchorCloseClick.bind(this), this._anchorOpenKeyDown = this._anchorOpenKeyDown.bind(this), this._anchorCloseKeyDown = this._anchorCloseKeyDown.bind(this), this.anchorOpen.addEventListener("click", this._anchorOpenClick), this.anchorClose.addEventListener("click", this._anchorCloseClick), this.anchorOpen.addEventListener("keydown", this._anchorOpenKeyDown), this.anchorClose.addEventListener("keydown", this._anchorCloseKeyDown), this._removeClickClass = this._removeClickClass.bind(this), this.chevron = new s(this.chevronEl), window.location.hash === "#" + t.id && (window.location.hash = "")
        }
        r.create = function(t, e, i, n) {
            return new r(t, e, i, n)
        };
        var a = n.prototype,
            o = r.prototype = Object.create(a);
        r.prototype.constructor = r, o.update = function(t) {
            var e, i = this.isOpen(),
                n = t && t instanceof KeyboardEvent,
                s = t && t instanceof MouseEvent,
                r = t && !n && !s;
            i !== this._lastOpen && (this.trigger(i ? "open" : "close"), this.el.setAttribute("aria-expanded", i ? "true" : "false"), i ? (this.chevron.expand(), e = this.anchorClose) : (this.chevron.collapse(), e = this.anchorOpen), t && (e.focus(), r && (e.classList.add(this.clickClass), document.body.removeEventListener("keydown", this._removeClickClass), document.body.addEventListener("keydown", this._removeClickClass, {
                once: !0
            }))), this._lastOpen = i)
        }, o.isOpen = function() {
            return this.el.checked
        }, o.toggle = function() {
            this.isOpen() ? this.close() : this.open()
        }, o.open = function(t) {
            this.el.checked || (this.el.checked = !0, this.update(t))
        }, o.close = function(t) {
            this.el.checked && (this.el.checked = !1, this.update(t))
        }, o._anchorOpenClick = function(t) {
            t.preventDefault(), this.open(t)
        }, o._anchorCloseClick = function(t) {
            t.preventDefault(), this.close(t)
        }, o._anchorOpenKeyDown = function(t) {
            "Space" !== t.code && "Enter" !== t.code || this._anchorOpenClick(t)
        }, o._anchorCloseKeyDown = function(t) {
            "Space" !== t.code && "Enter" !== t.code || this._anchorCloseClick(t)
        }, o._removeClickClass = function() {
            this.anchorClose.classList.remove(this.clickClass), this.anchorOpen.classList.remove(this.clickClass)
        }, o.destroy = function() {
            this.el.removeAttribute("aria-controls"), this.el.removeAttribute("aria-expanded"), this.anchorOpen.removeAttribute("aria-controls"), this.anchorOpen.removeAttribute("aria-expanded"), this.anchorClose.removeAttribute("aria-controls"), this.anchorClose.removeAttribute("aria-expanded"), this.anchorOpen.removeEventListener("click", this._anchorOpenClick), this.anchorClose.removeEventListener("click", this._anchorCloseClick), this.anchorOpen.removeEventListener("keydown", this._anchorOpenKeyDown), this.anchorClose.removeEventListener("keydown", this._anchorCloseKeyDown), document.body.removeEventListener("keydown", this._removeClickClass), this.chevron.destroy()
        }, e.exports = r
    }, {
        23: 23,
        27: 27
    }],
    27: [function(t, e, i) {
        "use strict";
        var n = "15.265 .835 8 8.167 .735 .835",
            s = "15.25 4.5 8 4.5 .75 4.5",
            r = "15.265 8.165 8 .835 .735 8.165",
            a = '\n<svg viewBox="0 0 16 9" data-chevron-icon xmlns="http://www.w3.org/2000/svg" >\n\t<polyline shape-rendering="geometricPrecision" data-chevron-icon-shape stroke="currentColor" stroke-linecap="round" vector-effect="non-scaling-stroke" stroke-linejoin="round" fill="none" fill-rule="evenodd" points="'.concat(n, '">\n\t\t<animate\n\t\t\tdata-chevron-animate="expand"\n\t\t\tattributeName="points"\n\t\t\tvalues="').concat(n, ";\n\t\t\t\t\t").concat(s, ";\n\t\t\t\t\t").concat(r, '"\n\t\t\tdur="320ms"\n\t\t\tbegin="indefinite"\n\t\t\tfill="freeze"\n\t\t\tkeyTimes="0;\n\t\t\t\t\t0.5;\n\t\t\t\t\t1"\n\t\t\tcalcMode="spline"\n\t\t\tkeySplines="0.12, 0, 0.38, 0;\n\t\t\t\t\t\t0.2, 1, 0.68, 1"\n\t\t/>\n\t\t<animate\n\t\t\tdata-chevron-animate="collapse"\n\t\t\tattributeName="points"\n\t\t\tvalues="').concat(r, ";\n\t\t\t\t\t").concat(s, ";\n\t\t\t\t\t").concat(n, '"\n\t\t\tdur="320ms"\n\t\t\tbegin="indefinite"\n\t\t\tfill="freeze"\n\t\t\tkeyTimes="0;\n\t\t\t\t\t0.5;\n\t\t\t\t\t1"\n\t\t\tcalcMode="spline"\n\t\t\tkeySplines="0.2, 0, 0.68, 0;\n\t\t\t\t\t\t0.2, 1, 0.68, 1"\n\t\t/>\n\t</polyline>\n</svg>');

        function o(t) {
            this._originialContents = t.innerHTML, t.innerHTML = o.TEMPLATE, this.el = t, this._shape = t.querySelector(o.SELECTORS.shape), this._expandAnimation = t.querySelector(o.SELECTORS.expandAnimation), this._collapseAnimation = t.querySelector(o.SELECTORS.collapseAnimation)
        }
        o.create = function(t) {
            return new o(t)
        };
        var c = o.prototype;
        o.prototype.constructor = o, o.TEMPLATE = a, o.SELECTORS = {
            selector: "[data-chevron-icon]",
            shape: "[data-chevron-icon-shape]",
            expandAnimation: '[data-chevron-animate="expand"]',
            collapseAnimation: '[data-chevron-animate="collapse"]'
        }, c.destroy = function() {
            this.el.innerHTML = this._originialContents, this._shape = null, this._expandAnimation = null, this._collapseAnimation = null, this.el = null
        }, c.expand = function() {
            this._expandAnimation.beginElement()
        }, c.collapse = function() {
            this._collapseAnimation.beginElement()
        }, e.exports = o
    }, {}],
    28: [function(t, e, i) {
        "use strict";
        var n = t(23),
            s = t(51);

        function r(t) {
            n.call(this), this._selector = t, this._touching = !1, this._onClick = this._onClick.bind(this), this._onTouchStart = this._onTouchStart.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), document.addEventListener("click", this._onClick), document.addEventListener("touchstart", this._onTouchStart), document.addEventListener("touchend", this._onTouchEnd)
        }
        var a = n.prototype,
            o = r.prototype = Object.create(a);
        r.prototype.constructor = r, o._checkTarget = function(t) {
            var e = t.target;
            s(e, this._selector, !0).length || this.trigger("click", t)
        }, o._onClick = function(t) {
            this._touching || this._checkTarget(t)
        }, o._onTouchStart = function(t) {
            this._touching = !0, this._checkTarget(t)
        }, o._onTouchEnd = function() {
            this._touching = !1
        }, o.destroy = function() {
            document.removeEventListener("click", this._onClick), document.removeEventListener("touchstart", this._onTouchStart), document.removeEventListener("touchend", this._onTouchEnd)
        }, e.exports = r
    }, {
        23: 23,
        51: 51
    }],
    29: [function(t, e, i) {
        "use strict";
        var n = t(22).EventEmitterMicro,
            s = t(53),
            r = t(18),
            a = (t(49), t(61)),
            o = a.browser.edge,
            c = function(t, e) {
                n.call(this), this.el = t, this.stuck = !1, this._selectors = {
                    placeholderID: e.placeholderID || e.className + "-sticky-placeholder",
                    stuckClassName: e.stuckClassName || e.className + "-sticking"
                }, this._initIO = this._initIO.bind(this), window.addEventListener("resize", function(t) {
                    var e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
                    return function() {
                        clearTimeout(e);
                        for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
                        e = setTimeout.apply(void 0, [t, i].concat(s))
                    }
                }(this._initIO)), this._createPlaceholder(), this._featureDetection(), this._initIO()
            };
        c.create = function(t, e) {
            return new c(t, e)
        };
        var h = n.prototype,
            u = c.prototype = Object.create(h);
        c.prototype.constructor = c, u._featureDetection = function() {
            var t = "css-sticky";
            s("position", "sticky") && !o || (t = "no-" + t), this.el.classList.add(t), this.placeholder.classList.add(t)
        }, u._createPlaceholder = function() {
            this.placeholder = document.createElement("div"), this.placeholder.id = this._selectors.placeholderID, r(this.placeholder, this.el)
        }, u._initIO = function() {
            var t = this,
                e = this.el.getBoundingClientRect().height,
                i = "".concat(-1 * e - 1, "px 0px 0px 0px");
            this.io && this.io.disconnect(), this.io = new IntersectionObserver((function(e) {
                e.forEach((function(e) {
                    var i = e.boundingClientRect.top,
                        n = e.isIntersecting;
                    t._updatePosition(!(i > 0 && n))
                }))
            }), {
                rootMargin: i
            }), this.io.observe(this.el)
        }, u._updatePosition = function(t) {
            t ? this.stuck || (this.el.classList.add(this._selectors.stuckClassName), this.placeholder.classList.add(this._selectors.stuckClassName), this.stuck = !0, this.trigger("stuck")) : this.stuck && (this.el.classList.remove(this._selectors.stuckClassName), this.placeholder.classList.remove(this._selectors.stuckClassName), this.stuck = !1, this.trigger("unstuck"))
        }, e.exports = c
    }, {
        18: 18,
        22: 22,
        49: 49,
        53: 53,
        61: 61
    }],
    30: [function(t, e, i) {
        "use strict";
        var n = t(34),
            s = t(32),
            r = t(36),
            a = t(37),
            o = t(33),
            c = function(t, e) {
                var i = r(t),
                    s = !1 !== e && r(e);
                return n[t] = n[e] = n[i] = n[s] = {
                    dom: e,
                    css: s
                }, e
            };
        e.exports = function(t) {
            var e, i, r, h;
            if ((t += "") in n) return n[t].dom;
            for (r = s(), i = (t = a(t)).charAt(0).toUpperCase() + t.substring(1), e = "filter" === t ? ["WebkitFilter", "filter"] : (t + " " + o.dom.join(i + " ") + i).split(" "), h = 0; h < e.length; h++)
                if (void 0 !== r.style[e[h]]) return 0 !== h && o.reduce(h - 1), c(t, e[h]);
            return c(t, !1)
        }
    }, {
        32: 32,
        33: 33,
        34: 34,
        36: 36,
        37: 37
    }],
    31: [function(t, e, i) {
        "use strict";
        var n = t(30),
            s = t(35),
            r = t(33),
            a = t(34),
            o = {},
            c = /(\([^\)]+\))/gi,
            h = /([^ ,;\(]+(\([^\)]+\))?)/gi;
        e.exports = function(t, e) {
            var i;
            return e += "", !!(t = n(t)) && (s(t, e) ? e : (i = a[t].css, "" !== (e = (e = e.replace(h, (function(e) {
                var n, a, h, u;
                if ("#" === e[0] || !isNaN(e[0])) return e;
                if (a = e.replace(c, ""), (h = i + ":" + a) in o) return !1 === o[h] ? "" : e.replace(a, o[h]);
                for (n = r.css.map((function(t) {
                        return t + e
                    })), n = [e].concat(n), u = 0; u < n.length; u++)
                    if (s(t, n[u])) return 0 !== u && r.reduce(u - 1), o[h] = n[u].replace(c, ""), n[u];
                return o[h] = !1, ""
            }))).trim()) && e))
        }
    }, {
        30: 30,
        33: 33,
        34: 34,
        35: 35
    }],
    32: [function(t, e, i) {
        "use strict";
        var n;
        e.exports = function() {
            return n ? (n.style.cssText = "", n.removeAttribute("style")) : n = document.createElement("_"), n
        }, e.exports.resetElement = function() {
            n = null
        }
    }, {}],
    33: [function(t, e, i) {
        "use strict";
        var n = ["-webkit-", "-moz-", "-ms-"],
            s = ["Webkit", "Moz", "ms"],
            r = ["webkit", "moz", "ms"],
            a = function() {
                this.initialize()
            },
            o = a.prototype;
        o.initialize = function() {
            this.reduced = !1, this.css = n, this.dom = s, this.evt = r
        }, o.reduce = function(t) {
            this.reduced || (this.reduced = !0, this.css = [this.css[t]], this.dom = [this.dom[t]], this.evt = [this.evt[t]])
        }, e.exports = new a
    }, {}],
    34: [function(t, e, i) {
        "use strict";
        e.exports = {}
    }, {}],
    35: [function(t, e, i) {
        "use strict";
        var n, s, r = t(34),
            a = t(32),
            o = !1;
        e.exports = function(t, e) {
            var i, c;
            if (function() {
                    var t;
                    if (!o) {
                        o = !0, n = "CSS" in window && "supports" in window.CSS, s = !1, t = a();
                        try {
                            t.style.width = "invalid"
                        } catch (t) {
                            s = !0
                        }
                    }
                }(), n) return t = r[t].css, CSS.supports(t, e);
            if (i = (c = a()).style[t], s) try {
                c.style[t] = e
            } catch (t) {
                return !1
            } else c.style[t] = e;
            return c.style[t] && c.style[t] !== i
        }, e.exports.resetFlags = function() {
            o = !1
        }
    }, {
        32: 32,
        34: 34
    }],
    36: [function(t, e, i) {
        "use strict";
        var n = /^(webkit|moz|ms)/gi;
        e.exports = function(t) {
            return "cssfloat" === t.toLowerCase() ? "float" : (n.test(t) && (t = "-" + t), t.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase())
        }
    }, {}],
    37: [function(t, e, i) {
        "use strict";
        var n = /-([a-z])/g;
        e.exports = function(t) {
            return "float" === t.toLowerCase() ? "cssFloat" : ("Ms" === (t = t.replace(n, (function(t, e) {
                return e.toUpperCase()
            }))).substr(0, 2) && (t = "ms" + t.substring(2)), t)
        }
    }, {}],
    38: [function(t, e, i) {
        "use strict";
        e.exports = {
            majorVersionNumber: "3.x"
        }
    }, {}],
    39: [function(t, e, i) {
        "use strict";
        var n, s = t(22).EventEmitterMicro,
            r = t(45),
            a = t(44);

        function o(t) {
            t = t || {}, s.call(this), this.id = a.getNewID(), this.executor = t.executor || r, this._reset(), this._willRun = !1, this._didDestroy = !1
        }(n = o.prototype = Object.create(s.prototype)).run = function() {
            return this._willRun || (this._willRun = !0), this._subscribe()
        }, n.cancel = function() {
            this._unsubscribe(), this._willRun && (this._willRun = !1), this._reset()
        }, n.destroy = function() {
            var t = this.willRun();
            return this.cancel(), this.executor = null, s.prototype.destroy.call(this), this._didDestroy = !0, t
        }, n.willRun = function() {
            return this._willRun
        }, n.isRunning = function() {
            return this._isRunning
        }, n._subscribe = function() {
            return this.executor.subscribe(this)
        }, n._unsubscribe = function() {
            return this.executor.unsubscribe(this)
        }, n._onAnimationFrameStart = function(t) {
            this._isRunning = !0, this._willRun = !1, this._didEmitFrameData || (this._didEmitFrameData = !0, this.trigger("start", t))
        }, n._onAnimationFrameEnd = function(t) {
            this._willRun || (this.trigger("stop", t), this._reset())
        }, n._reset = function() {
            this._didEmitFrameData = !1, this._isRunning = !1
        }, e.exports = o
    }, {
        22: 22,
        44: 44,
        45: 45
    }],
    40: [function(t, e, i) {
        "use strict";
        var n, s = t(23);

        function r(t) {
            t = t || {}, this._reset(), this.updatePhases(), this.eventEmitter = new s, this._willRun = !1, this._totalSubscribeCount = -1;
            var e = null,
                i = null;
            "undefined" != typeof window ? (e = window.requestAnimationFrame, i = window.cancelAnimationFrame) : e = i = function() {}, this._requestAnimationFrame = e, this._cancelAnimationFrame = i, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
        }(n = r.prototype).frameRequestedPhase = "requested", n.startPhase = "start", n.runPhases = ["update", "external", "draw"], n.endPhase = "end", n.disabledPhase = "disabled", n.beforePhaseEventPrefix = "before:", n.afterPhaseEventPrefix = "after:", n.subscribe = function(t, e) {
            return this._totalSubscribeCount++, this._nextFrameSubscribers[t.id] || (e ? this._nextFrameSubscribersOrder.unshift(t.id) : this._nextFrameSubscribersOrder.push(t.id), this._nextFrameSubscribers[t.id] = t, this._nextFrameSubscriberArrayLength++, this._nextFrameSubscriberCount++, this._run()), this._totalSubscribeCount
        }, n.subscribeImmediate = function(t, e) {
            return this._totalSubscribeCount++, this._subscribers[t.id] || (e ? this._subscribersOrder.splice(this._currentSubscriberIndex + 1, 0, t.id) : this._subscribersOrder.unshift(t.id), this._subscribers[t.id] = t, this._subscriberArrayLength++, this._subscriberCount++), this._totalSubscribeCount
        }, n.unsubscribe = function(t) {
            return !!this._nextFrameSubscribers[t.id] && (this._nextFrameSubscribers[t.id] = null, this._nextFrameSubscriberCount--, 0 === this._nextFrameSubscriberCount && this._cancel(), !0)
        }, n.getSubscribeID = function() {
            return this._totalSubscribeCount += 1
        }, n.destroy = function() {
            var t = this._cancel();
            return this.eventEmitter.destroy(), this.eventEmitter = null, this.phases = null, this._subscribers = null, this._subscribersOrder = null, this._nextFrameSubscribers = null, this._nextFrameSubscribersOrder = null, this._rafData = null, this._boundOnAnimationFrame = null, this._onExternalAnimationFrame = null, t
        }, n.useExternalAnimationFrame = function(t) {
            if ("boolean" == typeof t) {
                var e = this._isUsingExternalAnimationFrame;
                return t && this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), !this._willRun || t || this._animationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this._isUsingExternalAnimationFrame = t, t ? this._boundOnExternalAnimationFrame : e || !1
            }
        }, n.updatePhases = function() {
            this.phases || (this.phases = []), this.phases.length = 0, this.phases.push(this.frameRequestedPhase), this.phases.push(this.startPhase), Array.prototype.push.apply(this.phases, this.runPhases), this.phases.push(this.endPhase), this._runPhasesLength = this.runPhases.length, this._phasesLength = this.phases.length
        }, n._run = function() {
            if (!this._willRun) return this._willRun = !0, 0 === this.lastFrameTime && (this.lastFrameTime = performance.now()), this._animationFrameActive = !0, this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this.phase === this.disabledPhase && (this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex]), !0
        }, n._cancel = function() {
            var t = !1;
            return this._animationFrameActive && (this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), this._animationFrameActive = !1, this._willRun = !1, t = !0), this._isRunning || this._reset(), t
        }, n._onAnimationFrame = function(t) {
            for (this._subscribers = this._nextFrameSubscribers, this._subscribersOrder = this._nextFrameSubscribersOrder, this._subscriberArrayLength = this._nextFrameSubscriberArrayLength, this._subscriberCount = this._nextFrameSubscriberCount, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex], this._isRunning = !0, this._willRun = !1, this._didRequestNextRAF = !1, this._rafData.delta = t - this.lastFrameTime, this.lastFrameTime = t, this._rafData.fps = 0, this._rafData.delta >= 1e3 && (this._rafData.delta = 0), 0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta), this._rafData.time = t, this._rafData.naturalFps = this._rafData.fps, this._rafData.timeNow = Date.now(), this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameStart(this._rafData);
            for (this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._runPhaseIndex = 0; this._runPhaseIndex < this._runPhasesLength; this._runPhaseIndex++) {
                for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]].trigger(this.phase, this._rafData);
                this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase)
            }
            for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameEnd(this._rafData);
            this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._willRun ? (this.phaseIndex = 0, this.phaseIndex = this.phases[this.phaseIndex]) : this._reset()
        }, n._onExternalAnimationFrame = function(t) {
            this._isUsingExternalAnimationFrame && this._onAnimationFrame(t)
        }, n._reset = function() {
            this._rafData || (this._rafData = {}), this._rafData.time = 0, this._rafData.delta = 0, this._rafData.fps = 0, this._rafData.naturalFps = 0, this._rafData.timeNow = 0, this._subscribers = {}, this._subscribersOrder = [], this._currentSubscriberIndex = -1, this._subscriberArrayLength = 0, this._subscriberCount = 0, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._didEmitFrameData = !1, this._animationFrame = null, this._animationFrameActive = !1, this._isRunning = !1, this._shouldReset = !1, this.lastFrameTime = 0, this._runPhaseIndex = -1, this.phaseIndex = -1, this.phase = this.disabledPhase
        }, e.exports = r
    }, {
        23: 23
    }],
    41: [function(t, e, i) {
        "use strict";
        var n = t(43),
            s = function(t) {
                this.phase = t, this.rafEmitter = new n, this._cachePhaseIndex(), this.requestAnimationFrame = this.requestAnimationFrame.bind(this), this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this), this._onBeforeRAFExecutorStart = this._onBeforeRAFExecutorStart.bind(this), this._onBeforeRAFExecutorPhase = this._onBeforeRAFExecutorPhase.bind(this), this._onAfterRAFExecutorPhase = this._onAfterRAFExecutorPhase.bind(this), this.rafEmitter.on(this.phase, this._onRAFExecuted.bind(this)), this.rafEmitter.executor.eventEmitter.on("before:start", this._onBeforeRAFExecutorStart), this.rafEmitter.executor.eventEmitter.on("before:" + this.phase, this._onBeforeRAFExecutorPhase), this.rafEmitter.executor.eventEmitter.on("after:" + this.phase, this._onAfterRAFExecutorPhase), this._frameCallbacks = [], this._currentFrameCallbacks = [], this._nextFrameCallbacks = [], this._phaseActive = !1, this._currentFrameID = -1, this._cancelFrameIdx = -1, this._frameCallbackLength = 0, this._currentFrameCallbacksLength = 0, this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0
            },
            r = s.prototype;
        r.requestAnimationFrame = function(t, e) {
            return !0 === e && this.rafEmitter.executor.phaseIndex > 0 && this.rafEmitter.executor.phaseIndex <= this.phaseIndex ? this._phaseActive ? (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !0), this._frameCallbacks.push(this._currentFrameID, t), this._frameCallbackLength += 2) : (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !1), this._currentFrameCallbacks.push(this._currentFrameID, t), this._currentFrameCallbacksLength += 2) : (this._currentFrameID = this.rafEmitter.run(), this._nextFrameCallbacks.push(this._currentFrameID, t), this._nextFrameCallbacksLength += 2), this._currentFrameID
        }, r.cancelAnimationFrame = function(t) {
            this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(t), this._cancelFrameIdx > -1 ? this._cancelNextAnimationFrame() : (this._cancelFrameIdx = this._currentFrameCallbacks.indexOf(t), this._cancelFrameIdx > -1 ? this._cancelCurrentAnimationFrame() : (this._cancelFrameIdx = this._frameCallbacks.indexOf(t), this._cancelFrameIdx > -1 && this._cancelRunningAnimationFrame()))
        }, r._onRAFExecuted = function(t) {
            for (this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) this._frameCallbacks[this._frameCallbackIteration + 1](t.time, t);
            this._frameCallbacks.length = 0, this._frameCallbackLength = 0
        }, r._onBeforeRAFExecutorStart = function() {
            Array.prototype.push.apply(this._currentFrameCallbacks, this._nextFrameCallbacks.splice(0, this._nextFrameCallbacksLength)), this._currentFrameCallbacksLength = this._nextFrameCallbacksLength, this._nextFrameCallbacks.length = 0, this._nextFrameCallbacksLength = 0
        }, r._onBeforeRAFExecutorPhase = function() {
            this._phaseActive = !0, Array.prototype.push.apply(this._frameCallbacks, this._currentFrameCallbacks.splice(0, this._currentFrameCallbacksLength)), this._frameCallbackLength = this._currentFrameCallbacksLength, this._currentFrameCallbacks.length = 0, this._currentFrameCallbacksLength = 0
        }, r._onAfterRAFExecutorPhase = function() {
            this._phaseActive = !1
        }, r._cachePhaseIndex = function() {
            this.phaseIndex = this.rafEmitter.executor.phases.indexOf(this.phase)
        }, r._cancelRunningAnimationFrame = function() {
            this._frameCallbacks.splice(this._cancelFrameIdx, 2), this._frameCallbackLength -= 2
        }, r._cancelCurrentAnimationFrame = function() {
            this._currentFrameCallbacks.splice(this._cancelFrameIdx, 2), this._currentFrameCallbacksLength -= 2
        }, r._cancelNextAnimationFrame = function() {
            this._nextFrameCallbacks.splice(this._cancelFrameIdx, 2), this._nextFrameCallbacksLength -= 2, 0 === this._nextFrameCallbacksLength && this.rafEmitter.cancel()
        }, e.exports = s
    }, {
        43: 43
    }],
    42: [function(t, e, i) {
        "use strict";
        var n = t(41),
            s = function() {
                this.events = {}
            },
            r = s.prototype;
        r.requestAnimationFrame = function(t) {
            return this.events[t] || (this.events[t] = new n(t)), this.events[t].requestAnimationFrame
        }, r.cancelAnimationFrame = function(t) {
            return this.events[t] || (this.events[t] = new n(t)), this.events[t].cancelAnimationFrame
        }, e.exports = new s
    }, {
        41: 41
    }],
    43: [function(t, e, i) {
        "use strict";
        var n = t(39),
            s = function(t) {
                n.call(this, t)
            };
        (s.prototype = Object.create(n.prototype))._subscribe = function() {
            return this.executor.subscribe(this, !0)
        }, e.exports = s
    }, {
        39: 39
    }],
    44: [function(t, e, i) {
        "use strict";
        var n = t(47).SharedInstance,
            s = t(38).majorVersionNumber,
            r = function() {
                this._currentID = 0
            };
        r.prototype.getNewID = function() {
            return this._currentID++, "raf:" + this._currentID
        }, e.exports = n.share("@marcom/ac-raf-emitter/sharedRAFEmitterIDGeneratorInstance", s, r)
    }, {
        38: 38,
        47: 47
    }],
    45: [function(t, e, i) {
        "use strict";
        var n = t(47).SharedInstance,
            s = t(38).majorVersionNumber,
            r = t(40);
        e.exports = n.share("@marcom/ac-raf-emitter/sharedRAFExecutorInstance", s, r)
    }, {
        38: 38,
        40: 40,
        47: 47
    }],
    46: [function(t, e, i) {
        "use strict";
        var n = t(42);
        e.exports = n.requestAnimationFrame("update")
    }, {
        42: 42
    }],
    47: [function(t, e, i) {
        "use strict";
        e.exports = {
            SharedInstance: t(48)
        }
    }, {
        48: 48
    }],
    48: [function(t, e, i) {
        "use strict";
        var n, s = t(3)(t(6)),
            r = "undefined" != typeof window ? window : {},
            a = "SharedInstance",
            o = r.AC,
            c = (n = {}, {
                get: function(t, e) {
                    var i = null;
                    return n[t] && n[t][e] && (i = n[t][e]), i
                },
                set: function(t, e, i) {
                    return n[t] || (n[t] = {}), n[t][e] = "function" == typeof i ? new i : i, n[t][e]
                },
                share: function(t, e, i) {
                    var n = this.get(t, e);
                    return n || (n = this.set(t, e, i)), n
                },
                remove: function(t, e) {
                    var i = (0, s.default)(e);
                    if ("string" !== i && "number" !== i) n[t] && (n[t] = null);
                    else {
                        if (!n[t] || !n[t][e]) return;
                        n[t][e] = null
                    }
                }
            });
        o || (o = r.AC = {}), o[a] || (o[a] = c), e.exports = o[a]
    }, {
        3: 3,
        6: 6
    }],
    49: [function(t, e, i) {
        "use strict";
        var n = t(3)(t(6));

        function s(t) {
            return "x" === t ? window.scrollX || window.pageXOffset : window.scrollY || window.pageYOffset
        }

        function r(t, e, i) {
            return "x" === e ? i ? s("x") : t.scrollLeft : i ? s("y") : t.scrollTop
        }
        e.exports = function(t, e) {
            var i = (0, n.default)(t);
            e = "string" === i ? t : e;
            var s = (t = t && "string" !== i ? t : window) === window;
            return e && /^[xy]$/i.test(e) ? r(t, e, s) : {
                x: r(t, "x", s),
                y: r(t, "y", s)
            }
        }
    }, {
        3: 3,
        6: 6
    }],
    50: [function(t, e, i) {
        "use strict";
        var n = t(21),
            s = t(52),
            r = t(17).ELEMENT;
        e.exports = function(t, e, i, a) {
            if (s.childNode(t, "ancestors"), s.selector(e, "ancestors"), i && n(t, r) && (!e || t.matches(e))) return t;
            if (t !== (a = a || document.body))
                for (;
                    (t = t.parentNode) && n(t, r);) {
                    if (!e || t.matches(e)) return t;
                    if (t === a) break
                }
            return null
        }
    }, {
        17: 17,
        21: 21,
        52: 52
    }],
    51: [function(t, e, i) {
        "use strict";
        var n = t(21),
            s = t(52),
            r = t(17).ELEMENT;
        e.exports = function(t, e, i, a) {
            var o = [];
            if (s.childNode(t, "ancestors"), s.selector(e, "ancestors"), i && n(t, r) && (!e || t.matches(e)) && o.push(t), t !== (a = a || document.body))
                for (;
                    (t = t.parentNode) && n(t, r) && (e && !t.matches(e) || o.push(t), t !== a););
            return o
        }
    }, {
        17: 17,
        21: 21,
        52: 52
    }],
    52: [function(t, e, i) {
        "use strict";
        var n = t(21),
            s = t(17),
            r = s.COMMENT,
            a = s.DOCUMENT_FRAGMENT,
            o = s.DOCUMENT,
            c = s.ELEMENT,
            h = s.TEXT,
            u = [c, o, a],
            l = [c, h, r];
        e.exports = {
            parentNode: function(t, e) {
                if (!t || !n(t, u)) throw new TypeError(e + ": node must be an Element, Document, or Document Fragment")
            },
            childNode: function(t, e) {
                if (!t || !n(t, l)) throw new TypeError(e + ": node must be an Element, TextNode, or Comment")
            },
            selector: function(t, e, i) {
                if (i = "boolean" == typeof i && i, (t || i) && "string" != typeof t) throw new TypeError(e + ": selector must be a string")
            }
        }
    }, {
        17: 17,
        21: 21
    }],
    53: [function(t, e, i) {
        "use strict";
        var n = t(31),
            s = t(30),
            r = t(56);

        function a(t, e) {
            return void 0 !== e ? !!n(t, e) : !!s(t)
        }
        e.exports = r(a), e.exports.original = a
    }, {
        30: 30,
        31: 31,
        56: 56
    }],
    54: [function(t, e, i) {
        "use strict";
        e.exports = {
            getWindow: function() {
                return window
            },
            getDocument: function() {
                return document
            },
            getNavigator: function() {
                return navigator
            }
        }
    }, {}],
    55: [function(t, e, i) {
        "use strict";
        var n = t(54),
            s = t(57);

        function r() {
            var t = n.getWindow(),
                e = n.getDocument(),
                i = n.getNavigator();
            return !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch || i.maxTouchPoints > 0 || i.msMaxTouchPoints > 0)
        }
        e.exports = s(r), e.exports.original = r
    }, {
        54: 54,
        57: 57
    }],
    56: [function(t, e, i) {
        "use strict";
        var n = function() {
            var t, e = "";
            for (t = 0; t < arguments.length; t++) t > 0 && (e += ","), e += arguments[t];
            return e
        };
        e.exports = function(t, e) {
            e = e || n;
            var i = function i() {
                var n = arguments,
                    s = e.apply(this, n);
                return s in i.cache || (i.cache[s] = t.apply(this, n)), i.cache[s]
            };
            return i.cache = {}, i
        }
    }, {}],
    57: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e;
            return function() {
                return void 0 === e && (e = t.apply(this, arguments)), e
            }
        }
    }, {}],
    58: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = {};
            for (var i in t) e[i] = t[i].reduce((function(t, e) {
                return t[e.name] = !1, t
            }), {
                version: {
                    string: "",
                    major: 0,
                    minor: 0,
                    patch: 0,
                    documentMode: !1
                }
            });
            return e
        }
    }, {}],
    59: [function(t, e, i) {
        "use strict";
        e.exports = {
            browser: [{
                name: "edge",
                userAgent: "Edge",
                version: ["rv", "Edge"],
                test: function(t) {
                    return t.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === t.ua
                }
            }, {
                name: "edgeChromium",
                userAgent: "Edge",
                version: ["rv", "Edg"],
                test: function(t) {
                    return t.ua.indexOf("Edg") > -1 && -1 === t.ua.indexOf("Edge")
                }
            }, {
                name: "chrome",
                userAgent: "Chrome"
            }, {
                name: "firefox",
                test: function(t) {
                    return t.ua.indexOf("Firefox") > -1 && -1 === t.ua.indexOf("Opera")
                },
                version: "Firefox"
            }, {
                name: "android",
                userAgent: "Android"
            }, {
                name: "safari",
                test: function(t) {
                    return t.ua.indexOf("Safari") > -1 && t.vendor.indexOf("Apple") > -1
                },
                version: "Version"
            }, {
                name: "ie",
                test: function(t) {
                    return t.ua.indexOf("IE") > -1 || t.ua.indexOf("Trident") > -1
                },
                version: ["MSIE", "rv"],
                parseDocumentMode: function() {
                    var t = !1;
                    return document.documentMode && (t = parseInt(document.documentMode, 10)), t
                }
            }, {
                name: "opera",
                userAgent: "Opera",
                version: ["Version", "Opera"]
            }, {
                name: "samsung",
                userAgent: "SamsungBrowser"
            }],
            os: [{
                name: "windows",
                test: function(t) {
                    return t.ua.indexOf("Windows") > -1
                },
                version: "Windows NT"
            }, {
                name: "osx",
                userAgent: "Mac",
                test: function(t) {
                    return t.ua.indexOf("Macintosh") > -1
                }
            }, {
                name: "ios",
                test: function(t) {
                    return t.ua.indexOf("iPhone") > -1 || t.ua.indexOf("iPad") > -1
                },
                version: ["iPhone OS", "CPU OS"]
            }, {
                name: "linux",
                userAgent: "Linux",
                test: function(t) {
                    return (t.ua.indexOf("Linux") > -1 || t.platform.indexOf("Linux") > -1) && -1 === t.ua.indexOf("Android")
                }
            }, {
                name: "fireos",
                test: function(t) {
                    return t.ua.indexOf("Firefox") > -1 && t.ua.indexOf("Mobile") > -1
                },
                version: "rv"
            }, {
                name: "android",
                userAgent: "Android",
                test: function(t) {
                    return t.ua.indexOf("Android") > -1
                }
            }, {
                name: "chromeos",
                userAgent: "CrOS"
            }]
        }
    }, {}],
    60: [function(t, e, i) {
        "use strict";
        var n = t(58),
            s = t(59);

        function r(t, e) {
            if ("function" == typeof t.parseVersion) return t.parseVersion(e);
            var i, n = t.version || t.userAgent;
            "string" == typeof n && (n = [n]);
            for (var s, r = n.length, a = 0; a < r; a++)
                if ((s = e.match((i = n[a], new RegExp(i + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")))) && s.length > 1) return s[1].replace(/_/g, ".");
            return !1
        }

        function a(t, e, i) {
            for (var n, s, a = t.length, o = 0; o < a; o++)
                if ("function" == typeof t[o].test ? !0 === t[o].test(i) && (n = t[o].name) : i.ua.indexOf(t[o].userAgent) > -1 && (n = t[o].name), n) {
                    if (e[n] = !0, "string" == typeof(s = r(t[o], i.ua))) {
                        var c = s.split(".");
                        e.version.string = s, c && c.length > 0 && (e.version.major = parseInt(c[0] || 0), e.version.minor = parseInt(c[1] || 0), e.version.patch = parseInt(c[2] || 0))
                    } else "edge" === n && (e.version.string = "12.0.0", e.version.major = "12", e.version.minor = "0", e.version.patch = "0");
                    return "function" == typeof t[o].parseDocumentMode && (e.version.documentMode = t[o].parseDocumentMode()), e
                }
            return e
        }
        e.exports = function(t) {
            var e = {},
                i = n(s);
            return e.browser = a(s.browser, i.browser, t), e.os = a(s.os, i.os, t), e
        }
    }, {
        58: 58,
        59: 59
    }],
    61: [function(t, e, i) {
        "use strict";
        var n = "undefined" != typeof window ? window.navigator : {
                userAgent: "",
                platform: "",
                vendor: ""
            },
            s = {
                ua: n.userAgent,
                platform: n.platform,
                vendor: n.vendor
            };
        e.exports = t(60)(s)
    }, {
        60: 60
    }],
    62: [function(t, e, i) {
        "use strict";
        var n = t(22).EventEmitterMicro,
            s = {};
        "undefined" != typeof window && (s.update = t(46));
        var r = "viewport-emitter",
            a = {
                removeNamespace: !0
            },
            o = "data-viewport-emitter-dispatch",
            c = "data-viewport-emitter-state",
            h = "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)",
            u = "only screen and (orientation: portrait)",
            l = "only screen and (orientation: landscape)",
            d = "change:any",
            m = "change:orientation",
            _ = "change:retina",
            p = "change:viewport";

        function f(t, e) {
            n.call(this), this._id = t || r, this._options = Object.assign({}, a, e), this._allowDOMEventDispatch = !1, this._allowElementStateData = !1, this._options.removeNamespace = "boolean" != typeof this._options.removeNamespace || this._options.removeNamespace, this._el = this._initViewportEl(this._id), this._resizing = !1, this._mediaQueryLists = {
                resolution: {
                    retina: window.matchMedia(h)
                },
                orientation: {
                    portrait: window.matchMedia(u),
                    landscape: window.matchMedia(l)
                }
            }, this._viewport = this._getViewport(this._options.removeNamespace), this._retina = this._getRetina(this._mediaQueryLists.resolution.retina), this._orientation = this._initOrientation(), this._addListeners(), this._updateElementStateData()
        }
        Object.defineProperty(f, "DOM_DISPATCH_ATTRIBUTE", {
            get: function() {
                return o
            }
        }), Object.defineProperty(f, "DOM_STATE_ATTRIBUTE", {
            get: function() {
                return c
            }
        });
        var b = f.prototype = Object.create(n.prototype);
        Object.defineProperty(b, "id", {
            get: function() {
                return this._id
            }
        }), Object.defineProperty(b, "element", {
            get: function() {
                return this._el
            }
        }), Object.defineProperty(b, "mediaQueryLists", {
            get: function() {
                return this._mediaQueryLists
            }
        }), Object.defineProperty(b, "viewport", {
            get: function() {
                return this._viewport
            }
        }), Object.defineProperty(b, "retina", {
            get: function() {
                return this._retina
            }
        }), Object.defineProperty(b, "orientation", {
            get: function() {
                return this._orientation
            }
        }), Object.defineProperty(b, "hasDomDispatch", {
            get: function() {
                return this._allowDOMEventDispatch
            }
        }), b.destroy = function() {
            for (var t in this._removeListeners(), this._options) this._options[t] = null;
            for (var e in this._mediaQueryLists) {
                var i = this._mediaQueryLists[e];
                for (var s in i) i[s] = null
            }
            this._id = null, this._el = null, this._viewport = null, this._retina = null, this._orientation = null, n.prototype.destroy.call(this)
        }, b._initViewportEl = function(t) {
            var e = document.getElementById(t);
            return e || ((e = document.createElement("div")).id = t, e = document.body.appendChild(e)), e.hasAttribute(o) || (e.setAttribute(o, ""), this._allowDOMEventDispatch = !0), e.hasAttribute(c) || (this._allowElementStateData = !0), e
        }, b._dispatch = function(t, e) {
            var i = {
                viewport: this._viewport,
                orientation: this._orientation,
                retina: this._retina
            };
            if (this._allowDOMEventDispatch) {
                var n = new CustomEvent(t, {
                        detail: e
                    }),
                    s = new CustomEvent(d, {
                        detail: i
                    });
                this._el.dispatchEvent(n), this._el.dispatchEvent(s)
            }
            this.trigger(t, e), this.trigger(d, i)
        }, b._addListeners = function() {
            this._onOrientationChange = this._onOrientationChange.bind(this), this._onRetinaChange = this._onRetinaChange.bind(this), this._onViewportChange = this._onViewportChange.bind(this), this._onViewportChangeUpdate = this._onViewportChangeUpdate.bind(this), this._mediaQueryLists.orientation.portrait.addListener(this._onOrientationChange), this._mediaQueryLists.orientation.landscape.addListener(this._onOrientationChange), this._mediaQueryLists.resolution.retina.addListener(this._onRetinaChange), window.addEventListener("resize", this._onViewportChange)
        }, b._removeListeners = function() {
            this._mediaQueryLists.orientation.portrait.removeListener(this._onOrientationChange), this._mediaQueryLists.orientation.landscape.removeListener(this._onOrientationChange), this._mediaQueryLists.resolution.retina.removeListener(this._onRetinaChange), window.removeEventListener("resize", this._onViewportChange)
        }, b._updateElementStateData = function() {
            if (this._allowElementStateData) {
                var t = JSON.stringify({
                    viewport: this._viewport,
                    orientation: this._orientation,
                    retina: this._retina
                });
                this._el.setAttribute(c, t)
            }
        }, b._getViewport = function(t) {
            var e = window.getComputedStyle(this._el, "::before").content;
            return e ? (e = e.replace(/["']/g, ""), t ? e.split(":").pop() : e) : null
        }, b._getRetina = function(t) {
            return t.matches
        }, b._getOrientation = function(t) {
            var e = this._orientation;
            if (t.matches) {
                return t.media.match(/portrait|landscape/)[0]
            }
            return e
        }, b._initOrientation = function() {
            var t = this._getOrientation(this._mediaQueryLists.orientation.portrait);
            return t || this._getOrientation(this._mediaQueryLists.orientation.landscape)
        }, b._onViewportChange = function() {
            this._resizing || (this._resizing = !0, s.update(this._onViewportChangeUpdate))
        }, b._onViewportChangeUpdate = function() {
            var t = this._viewport;
            if (this._viewport = this._getViewport(this._options.removeNamespace), t !== this._viewport) {
                var e = {
                    from: t,
                    to: this._viewport
                };
                this._updateElementStateData(), this._dispatch(p, e)
            }
            this._resizing = !1
        }, b._onRetinaChange = function(t) {
            var e = this._retina;
            if (this._retina = this._getRetina(t), e !== this._retina) {
                var i = {
                    from: e,
                    to: this._retina
                };
                this._updateElementStateData(), this._dispatch(_, i)
            }
        }, b._onOrientationChange = function(t) {
            var e = this._orientation;
            if (this._orientation = this._getOrientation(t), e !== this._orientation) {
                var i = {
                    from: e,
                    to: this._orientation
                };
                this._updateElementStateData(), this._dispatch(m, i)
            }
        }, e.exports = f
    }, {
        22: 22,
        46: 46
    }],
    63: [function(t, e, i) {
        "use strict";
        var n = t(25),
            s = t(24),
            r = t(64),
            a = function(t) {
                new s(t, r).htmlClass(), n.call(this, t, {
                    className: "ac-ln",
                    selector: "#ac-localnav"
                });
                var e = this.el.querySelectorAll("a.ac-ln-menucta-anchor");
                this._updateComingSoonSubheadClasses(), this._sticky && (this._analyticsRegion = this.el.getAttribute("data-analytics-region"), this._updateAnalyticsRegion = this._updateAnalyticsRegion.bind(this), this._sticky.on("stuck", this._updateAnalyticsRegion), this._sticky.on("unstuck", this._updateAnalyticsRegion)), e.forEach((function(t) {
                    "button" !== t.getAttribute("role") && t.setAttribute("role", "button")
                })), this._viewports.on("change:viewport", this._onGlobalLocalNavViewportChange.bind(this))
            },
            o = n.prototype,
            c = a.prototype = Object.create(o);
        a.prototype.constructor = a, c._getStickyEnabled = function() {
            return !document.body.classList.contains("ac-platter-content") && (!document.body.classList.contains("ac-platter-page") && o._getStickyEnabled.call(this))
        }, c._updateAnalyticsRegion = function() {
            var t = this._analyticsRegion;
            this._sticky.stuck && (t += " locked"), this.el.setAttribute("data-analytics-region", t)
        }, c._updateComingSoonSubheadClasses = function() {
            if (this.el.querySelector(".ac-ln-title-comingsoon, .ac-ln-title-subhead")) {
                this.el.classList.contains("ac-localnav-stacked") || this.el.classList.add("ac-localnav-stacked");
                var t = getComputedStyle(document.documentElement).getPropertyValue("--r-localnav-stacked-height");
                document.documentElement.style.setProperty("--r-localnav-height", t)
            }
        }, c._onGlobalLocalNavViewportChange = function() {
            this._updateComingSoonSubheadClasses()
        }, e.exports = a
    }, {
        24: 24,
        25: 25,
        64: 64
    }],
    64: [function(t, e, i) {
        "use strict";
        var n = t(55);
        e.exports = {
            touch: n
        }
    }, {
        55: 55
    }],
    65: [function(t, e, i) {
        "use strict";
        var n = t(63),
            s = document.getElementById("ac-localnav");
        s && (e.exports = new n(s))
    }, {
        63: 63
    }]
}, {}, [65]);