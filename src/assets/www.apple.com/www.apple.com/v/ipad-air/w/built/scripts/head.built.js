! function(e) {
    var t = {};

    function s(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, s), r.l = !0, r.exports
    }
    s.m = e, s.c = t, s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) s.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "/", s(s.s = 121)
}([function(e, t) {
    e.exports = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, , function(e, t, s) {
    "use strict";
    var n = s(15);
    e.exports = n.requestAnimationFrame("draw")
}, , , function(e, t, s) {
    "use strict";

    function n() {
        this._events = {}
    }
    let r = n.prototype;
    r.on = function(e, t) {
        return this._events[e] = this._events[e] || [], this._events[e].unshift(t), t
    }, r.once = function(e, t) {
        let s = this;
        return this.on(e, (function n(r) {
            s.off(e, n), void 0 !== r ? t(r) : t()
        }))
    }, r.off = function(e, t) {
        if (!this.has(e)) return;
        if (1 === arguments.length) return this._events[e] = null, void delete this._events[e];
        let s = this._events[e].indexOf(t); - 1 !== s && this._events[e].splice(s, 1)
    }, r.trigger = function(e, t) {
        if (this.has(e))
            for (let s = this._events[e].length - 1; s >= 0; s--) void 0 !== t ? this._events[e][s](t) : this._events[e][s]()
    }, r.has = function(e) {
        return e in this._events != !1 && 0 !== this._events[e].length
    }, r.destroy = function() {
        for (let e in this._events) this._events[e] = null;
        this._events = null
    }, e.exports = n
}, , function(e, t, s) {
    "use strict";
    e.exports = {
        PICTURE_DATA_DOWNLOAD_AREA_KEYFRAME: "data-download-area-keyframe",
        PICTURE_DATA_LAZY: "data-lazy",
        PICTURE_DATA_EMPTY_SOURCE: "data-empty",
        PICTURE_DATA_LOADED: "data-picture-loaded",
        PICTURE_CLASS_LOADED: "loaded"
    }
}, , , , function(e, t, s) {
    "use strict";
    var n, r = s(12).EventEmitterMicro,
        i = s(34),
        a = s(54);

    function o(e) {
        e = e || {}, r.call(this), this.id = a.getNewID(), this.executor = e.executor || i, this._reset(), this._willRun = !1, this._didDestroy = !1
    }(n = o.prototype = Object.create(r.prototype)).run = function() {
        return this._willRun || (this._willRun = !0), this._subscribe()
    }, n.cancel = function() {
        this._unsubscribe(), this._willRun && (this._willRun = !1), this._reset()
    }, n.destroy = function() {
        var e = this.willRun();
        return this.cancel(), this.executor = null, r.prototype.destroy.call(this), this._didDestroy = !0, e
    }, n.willRun = function() {
        return this._willRun
    }, n.isRunning = function() {
        return this._isRunning
    }, n._subscribe = function() {
        return this.executor.subscribe(this)
    }, n._unsubscribe = function() {
        return this.executor.unsubscribe(this)
    }, n._onAnimationFrameStart = function(e) {
        this._isRunning = !0, this._willRun = !1, this._didEmitFrameData || (this._didEmitFrameData = !0, this.trigger("start", e))
    }, n._onAnimationFrameEnd = function(e) {
        this._willRun || (this.trigger("stop", e), this._reset())
    }, n._reset = function() {
        this._didEmitFrameData = !1, this._isRunning = !1
    }, e.exports = o
}, function(e, t, s) {
    "use strict";
    e.exports = {
        EventEmitterMicro: s(5)
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.FEATURE_ENHANCED = t.EVT_UNENHANCE_FEATURE = t.EVT_UNENHANCE = t.EVT_TEXT_ZOOM = void 0;
    t.EVT_UNENHANCE = "pagexp:unenhance", t.EVT_UNENHANCE_FEATURE = "pagexp:unenhance:feature", t.EVT_TEXT_ZOOM = "text-zoom:engaged", t.FEATURE_ENHANCED = "enhanced"
}, , function(e, t, s) {
    "use strict";
    var n = s(51),
        r = function() {
            this.events = {}
        },
        i = r.prototype;
    i.requestAnimationFrame = function(e) {
        return this.events[e] || (this.events[e] = new n(e)), this.events[e].requestAnimationFrame
    }, i.cancelAnimationFrame = function(e) {
        return this.events[e] || (this.events[e] = new n(e)), this.events[e].cancelAnimationFrame
    }, e.exports = new r
}, , , , , function(e, t, s) {
    "use strict";
    e.exports = {
        SharedInstance: s(53)
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SELECTOR_COMPONENT_CONTAINER = t.FEATURE_INLINE_MEDIA = t.FALLBACK_CLASSNAME = t.EVT_UNLOAD = t.EVT_TIMEOUT = void 0;
    t.FEATURE_INLINE_MEDIA = "inline-media-component", t.SELECTOR_COMPONENT_CONTAINER = ".inline-media-component-container", t.FALLBACK_CLASSNAME = "fallback", t.EVT_TIMEOUT = "inline-media-timeout", t.EVT_UNLOAD = "inline-media-unload"
}, , , function(e, t, s) {
    "use strict";
    e.exports = {
        majorVersionNumber: "3.x"
    }
}, function(e, t) {
    e.exports = require("@marcom/ac-analytics")
}, , , , , , function(e, t, s) {
    "use strict";
    var n = s(32),
        r = s(50);

    function i() {
        var e = n.getWindow(),
            t = n.getDocument(),
            s = n.getNavigator();
        return !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch || s.maxTouchPoints > 0 || s.msMaxTouchPoints > 0)
    }
    e.exports = r(i), e.exports.original = i
}, function(e, t, s) {
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
}, function(e, t, s) {
    "use strict";
    var n = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setupViewportTracker = t.removeFeatureDetectClass = t.isSmallOnDesktop = t.detectTextZoom = t.checkEnhancedFeatures = t.addFeatureDetectClass = void 0;
    var r = n(s(2)),
        i = n(s(31)),
        a = function(e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var s = u(t);
            if (s && s.has(e)) return s.get(e);
            var n = {
                    __proto__: null
                },
                r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if ("default" !== i && {}.hasOwnProperty.call(e, i)) {
                    var a = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                }
            return n.default = e, s && s.set(e, n), n
        }(s(55)),
        o = s(36);

    function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
            s = new WeakMap;
        return (u = function(e) {
            return e ? s : t
        })(e)
    }
    t.addFeatureDetectClass = e => new Promise(((t, s) => {
        (0, r.default)((() => {
            document.documentElement.classList.add(e), document.documentElement.classList.remove(`no-${e}`), t()
        }))
    }));
    t.removeFeatureDetectClass = e => new Promise(((t, s) => {
        (0, r.default)((() => {
            document.documentElement.classList.remove(e), document.documentElement.classList.add(`no-${e}`), t()
        }))
    }));
    t.setupViewportTracker = e => {
        const t = { ...!(e = {
                viewports: {},
                defaultViewports: {},
                onVpChanged: () => {},
                overwriteDefaults: !1,
                excludeMatches: !1,
                ...e
            }).overwriteDefaults && !e.excludeMatches && e.defaultViewports,
            ...e.viewports
        };
        let s = null;
        const n = new Promise(((e, t) => {
                s = e
            })),
            r = t => {
                !!t && t.isMatch || (s(), t && t.destroy()), e.onVpChanged && e.onVpChanged()
            },
            i = new a.default(t, {
                excludeMatches: e.excludeMatches
            });
        return i.on(a.EVT_VIEWPORT_GROUP_CHANGED, r), r(i), n
    };
    const c = () => !(0, i.default)() && window.matchMedia("(max-width: 734px)").matches;
    t.isSmallOnDesktop = c;
    const h = () => parseFloat(window.getComputedStyle(document.documentElement)["font-size"]) > 17;
    t.detectTextZoom = h;
    t.checkEnhancedFeatures = () => {
        const e = new a.default(o.ENHANCED_VIEWPORTS),
            t = {
                "text-zoom": h(),
                "small-desktop": c(),
                "invalid-viewport": !e.isMatch
            };
        for (const e in t)
            if (!0 === t[e]) return {
                enhanced: !1,
                feature: e
            };
        return {
            enhanced: !0
        }
    }
}, function(e, t, s) {
    "use strict";
    var n = s(20).SharedInstance,
        r = s(24).majorVersionNumber,
        i = s(35);
    e.exports = n.share("@marcom/ac-raf-emitter/sharedRAFExecutorInstance", r, i)
}, function(e, t, s) {
    "use strict";
    var n, r = s(5);

    function i(e) {
        e = e || {}, this._reset(), this.updatePhases(), this.eventEmitter = new r, this._willRun = !1, this._totalSubscribeCount = -1;
        var t = null,
            s = null;
        "undefined" != typeof window ? (t = window.requestAnimationFrame, s = window.cancelAnimationFrame) : t = s = function() {}, this._requestAnimationFrame = t, this._cancelAnimationFrame = s, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
    }(n = i.prototype).frameRequestedPhase = "requested", n.startPhase = "start", n.runPhases = ["update", "external", "draw"], n.endPhase = "end", n.disabledPhase = "disabled", n.beforePhaseEventPrefix = "before:", n.afterPhaseEventPrefix = "after:", n.subscribe = function(e, t) {
        return this._totalSubscribeCount++, this._nextFrameSubscribers[e.id] || (t ? this._nextFrameSubscribersOrder.unshift(e.id) : this._nextFrameSubscribersOrder.push(e.id), this._nextFrameSubscribers[e.id] = e, this._nextFrameSubscriberArrayLength++, this._nextFrameSubscriberCount++, this._run()), this._totalSubscribeCount
    }, n.subscribeImmediate = function(e, t) {
        return this._totalSubscribeCount++, this._subscribers[e.id] || (t ? this._subscribersOrder.splice(this._currentSubscriberIndex + 1, 0, e.id) : this._subscribersOrder.unshift(e.id), this._subscribers[e.id] = e, this._subscriberArrayLength++, this._subscriberCount++), this._totalSubscribeCount
    }, n.unsubscribe = function(e) {
        return !!this._nextFrameSubscribers[e.id] && (this._nextFrameSubscribers[e.id] = null, this._nextFrameSubscriberCount--, 0 === this._nextFrameSubscriberCount && this._cancel(), !0)
    }, n.getSubscribeID = function() {
        return this._totalSubscribeCount += 1
    }, n.destroy = function() {
        var e = this._cancel();
        return this.eventEmitter.destroy(), this.eventEmitter = null, this.phases = null, this._subscribers = null, this._subscribersOrder = null, this._nextFrameSubscribers = null, this._nextFrameSubscribersOrder = null, this._rafData = null, this._boundOnAnimationFrame = null, this._onExternalAnimationFrame = null, e
    }, n.useExternalAnimationFrame = function(e) {
        if ("boolean" == typeof e) {
            var t = this._isUsingExternalAnimationFrame;
            return e && this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), !this._willRun || e || this._animationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this._isUsingExternalAnimationFrame = e, e ? this._boundOnExternalAnimationFrame : t || !1
        }
    }, n.updatePhases = function() {
        this.phases || (this.phases = []), this.phases.length = 0, this.phases.push(this.frameRequestedPhase), this.phases.push(this.startPhase), Array.prototype.push.apply(this.phases, this.runPhases), this.phases.push(this.endPhase), this._runPhasesLength = this.runPhases.length, this._phasesLength = this.phases.length
    }, n._run = function() {
        if (!this._willRun) return this._willRun = !0, 0 === this.lastFrameTime && (this.lastFrameTime = performance.now()), this._animationFrameActive = !0, this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this.phase === this.disabledPhase && (this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex]), !0
    }, n._cancel = function() {
        var e = !1;
        return this._animationFrameActive && (this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), this._animationFrameActive = !1, this._willRun = !1, e = !0), this._isRunning || this._reset(), e
    }, n._onAnimationFrame = function(e) {
        for (this._subscribers = this._nextFrameSubscribers, this._subscribersOrder = this._nextFrameSubscribersOrder, this._subscriberArrayLength = this._nextFrameSubscriberArrayLength, this._subscriberCount = this._nextFrameSubscriberCount, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex], this._isRunning = !0, this._willRun = !1, this._didRequestNextRAF = !1, this._rafData.delta = e - this.lastFrameTime, this.lastFrameTime = e, this._rafData.fps = 0, this._rafData.delta >= 1e3 && (this._rafData.delta = 0), 0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta), this._rafData.time = e, this._rafData.naturalFps = this._rafData.fps, this._rafData.timeNow = Date.now(), this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameStart(this._rafData);
        for (this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._runPhaseIndex = 0; this._runPhaseIndex < this._runPhasesLength; this._runPhaseIndex++) {
            for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]].trigger(this.phase, this._rafData);
            this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase)
        }
        for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameEnd(this._rafData);
        this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._willRun ? (this.phaseIndex = 0, this.phaseIndex = this.phases[this.phaseIndex]) : this._reset()
    }, n._onExternalAnimationFrame = function(e) {
        this._isUsingExternalAnimationFrame && this._onAnimationFrame(e)
    }, n._reset = function() {
        this._rafData || (this._rafData = {}), this._rafData.time = 0, this._rafData.delta = 0, this._rafData.fps = 0, this._rafData.naturalFps = 0, this._rafData.timeNow = 0, this._subscribers = {}, this._subscribersOrder = [], this._currentSubscriberIndex = -1, this._subscriberArrayLength = 0, this._subscriberCount = 0, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._didEmitFrameData = !1, this._animationFrame = null, this._animationFrameActive = !1, this._isRunning = !1, this._shouldReset = !1, this.lastFrameTime = 0, this._runPhaseIndex = -1, this.phaseIndex = -1, this.phase = this.disabledPhase
    }, e.exports = i
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ENHANCED_VIEWPORTS = void 0;
    t.ENHANCED_VIEWPORTS = {
        S: {
            alias: "small",
            width: [315, 734],
            height: [480, 850]
        },
        M: {
            alias: "medium",
            width: [735, 1068],
            height: [550, 1500]
        },
        L: {
            alias: "large",
            width: [1069, 1440],
            height: [550, 2880]
        },
        X: {
            alias: "xlarge",
            width: [1441, 5120],
            height: [550, 2880]
        }
    }
}, function(e, t, s) {
    "use strict";
    let n, r;
    try {
        n = s(25), r = n.observer.Event
    } catch (e) {}
    e.exports = {
        trackPageState: function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "enhanced";
            if (n && n.passiveTracker) {
                let t = {
                    eVar70: "enhanced"
                };
                document.documentElement.classList.contains(e) || (t = {
                    eVar70: "base",
                    eVar153: document.documentElement.causeForBase
                }), n.passiveTracker(t)
            }
        },
        trackViewerState: function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "enhanced-rt";
            if (n && n.passiveTracker) {
                let t = {
                    eVar158: "realtime viewer - enhanced"
                };
                document.documentElement.classList.contains(e) || (t = {
                    eVar158: "realtime viewer - base",
                    eVar152: document.documentElement.causeForViewerBase || document.documentElement.causeForBase
                }), n.passiveTracker(t)
            }
        },
        trackCustomEvent: function(e, t) {
            if (r) {
                if (!["events", "title"].every((e => Object.keys(t).includes(e)))) throw new Error(`trackCustomEvent(): invalid options: ${t}`);
                const s = {
                        interactionEvents: [t.eventKey]
                    },
                    n = new r(e, s);
                return e.trigger(t.eventKey, {
                    title: t.title,
                    events: t.events
                }), n
            }
            return null
        },
        setCauseForBase: function(e) {
            document.documentElement.causeForBase || (document.documentElement.causeForBase = e)
        },
        setCauseForViewerBase: function(e) {
            document.documentElement.causeForViewerBase || (document.documentElement.causeForViewerBase = e)
        }
    }
}, , , , , , , , function(e, t, s) {
    "use strict";
    const n = s(7).PICTURE_CLASS_LOADED,
        r = s(7).PICTURE_DATA_LOADED,
        i = s(7).PICTURE_DATA_EMPTY_SOURCE;
    e.exports = (window.__pictureElementInstancesLoaded = new Map, void(window.__lp = function(e) {
        const t = e.target.parentElement;
        t.querySelector(`[${i}]`) ? e.stopImmediatePropagation() : (t.classList.add(`${n}`), t.setAttribute(`${r}`, ""), window.__pictureElementInstancesLoaded.set(t.id, t), e.target.onload = null)
    }))
}, function(e, t, s) {
    "use strict";
    const n = "undefined" != typeof window ? window.navigator : {
            userAgent: "",
            platform: "",
            vendor: ""
        },
        r = {
            ua: n.userAgent,
            platform: n.platform,
            vendor: n.vendor
        };
    e.exports = s(47)(r)
}, function(e, t, s) {
    "use strict";
    const n = s(48),
        r = s(49);

    function i(e, t) {
        if ("function" == typeof e.parseVersion) return e.parseVersion(t); {
            let n = e.version || e.userAgent;
            "string" == typeof n && (n = [n]);
            const r = n.length;
            let i;
            for (let e = 0; e < r; e++)
                if (i = t.match((s = n[e], new RegExp(s + "[a-zA-Z\\s/:]+([0-9_.]+)", "i"))), i && i.length > 1) return i[1].replace(/_/g, ".")
        }
        var s;
        return !1
    }

    function a(e, t, s) {
        const n = e.length;
        let r, a;
        for (let o = 0; o < n; o++)
            if ("function" == typeof e[o].test ? !0 === e[o].test(s) && (r = e[o].name) : s.ua.indexOf(e[o].userAgent) > -1 && (r = e[o].name), r) {
                if (t[r] = !0, a = i(e[o], s.ua), "string" == typeof a) {
                    const e = a.split(".");
                    t.version.string = a, e && e.length > 0 && (t.version.major = parseInt(e[0] || 0), t.version.minor = parseInt(e[1] || 0), t.version.patch = parseInt(e[2] || 0))
                } else "edge" === r && (t.version.string = "12.0.0", t.version.major = "12", t.version.minor = "0", t.version.patch = "0");
                return "function" == typeof e[o].parseDocumentMode && (t.version.documentMode = e[o].parseDocumentMode()), t
            }
        return t
    }
    e.exports = function(e) {
        const t = {},
            s = n(r);
        return t.browser = a(r.browser, s.browser, e), t.os = a(r.os, s.os, e), t
    }
}, function(e, t, s) {
    "use strict";
    e.exports = function(e) {
        const t = {};
        for (const s in e) t[s] = e[s].reduce((function(e, t) {
            return e[t.name] = !1, e
        }), {
            version: {
                string: "",
                major: 0,
                minor: 0,
                patch: 0,
                documentMode: !1
            }
        });
        return t
    }
}, function(e, t, s) {
    "use strict";
    e.exports = {
        browser: [{
            name: "edge",
            userAgent: "Edge",
            version: ["rv", "Edge"],
            test: function(e) {
                return e.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === e.ua
            }
        }, {
            name: "edgeChromium",
            userAgent: "Edge",
            version: ["rv", "Edg"],
            test: function(e) {
                return e.ua.indexOf("Edg") > -1 && -1 === e.ua.indexOf("Edge")
            }
        }, {
            name: "chrome",
            userAgent: "Chrome"
        }, {
            name: "firefox",
            test: function(e) {
                return e.ua.indexOf("Firefox") > -1 && -1 === e.ua.indexOf("Opera")
            },
            version: "Firefox"
        }, {
            name: "android",
            userAgent: "Android"
        }, {
            name: "safari",
            test: function(e) {
                return e.ua.indexOf("Safari") > -1 && e.vendor.indexOf("Apple") > -1
            },
            version: "Version"
        }, {
            name: "ie",
            test: function(e) {
                return e.ua.indexOf("IE") > -1 || e.ua.indexOf("Trident") > -1
            },
            version: ["MSIE", "rv"],
            parseDocumentMode: function() {
                let e = !1;
                return document.documentMode && (e = parseInt(document.documentMode, 10)), e
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
            test: function(e) {
                return e.ua.indexOf("Windows") > -1
            },
            version: "Windows NT"
        }, {
            name: "osx",
            userAgent: "Mac",
            test: function(e) {
                return e.ua.indexOf("Macintosh") > -1
            }
        }, {
            name: "ios",
            test: function(e) {
                return e.ua.indexOf("iPhone") > -1 || e.ua.indexOf("iPad") > -1
            },
            version: ["iPhone OS", "CPU OS"]
        }, {
            name: "linux",
            userAgent: "Linux",
            test: function(e) {
                return (e.ua.indexOf("Linux") > -1 || e.platform.indexOf("Linux") > -1) && -1 === e.ua.indexOf("Android")
            }
        }, {
            name: "fireos",
            test: function(e) {
                return e.ua.indexOf("Firefox") > -1 && e.ua.indexOf("Mobile") > -1
            },
            version: "rv"
        }, {
            name: "android",
            userAgent: "Android",
            test: function(e) {
                return e.ua.indexOf("Android") > -1
            }
        }, {
            name: "chromeos",
            userAgent: "CrOS"
        }]
    }
}, function(e, t, s) {
    "use strict";
    e.exports = function(e) {
        var t;
        return function() {
            return void 0 === t && (t = e.apply(this, arguments)), t
        }
    }
}, function(e, t, s) {
    "use strict";
    var n = s(52),
        r = function(e) {
            this.phase = e, this.rafEmitter = new n, this._cachePhaseIndex(), this.requestAnimationFrame = this.requestAnimationFrame.bind(this), this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this), this._onBeforeRAFExecutorStart = this._onBeforeRAFExecutorStart.bind(this), this._onBeforeRAFExecutorPhase = this._onBeforeRAFExecutorPhase.bind(this), this._onAfterRAFExecutorPhase = this._onAfterRAFExecutorPhase.bind(this), this.rafEmitter.on(this.phase, this._onRAFExecuted.bind(this)), this.rafEmitter.executor.eventEmitter.on("before:start", this._onBeforeRAFExecutorStart), this.rafEmitter.executor.eventEmitter.on("before:" + this.phase, this._onBeforeRAFExecutorPhase), this.rafEmitter.executor.eventEmitter.on("after:" + this.phase, this._onAfterRAFExecutorPhase), this._frameCallbacks = [], this._currentFrameCallbacks = [], this._nextFrameCallbacks = [], this._phaseActive = !1, this._currentFrameID = -1, this._cancelFrameIdx = -1, this._frameCallbackLength = 0, this._currentFrameCallbacksLength = 0, this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0
        },
        i = r.prototype;
    i.requestAnimationFrame = function(e, t) {
        return !0 === t && this.rafEmitter.executor.phaseIndex > 0 && this.rafEmitter.executor.phaseIndex <= this.phaseIndex ? this._phaseActive ? (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !0), this._frameCallbacks.push(this._currentFrameID, e), this._frameCallbackLength += 2) : (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !1), this._currentFrameCallbacks.push(this._currentFrameID, e), this._currentFrameCallbacksLength += 2) : (this._currentFrameID = this.rafEmitter.run(), this._nextFrameCallbacks.push(this._currentFrameID, e), this._nextFrameCallbacksLength += 2), this._currentFrameID
    }, i.cancelAnimationFrame = function(e) {
        this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(e), this._cancelFrameIdx > -1 ? this._cancelNextAnimationFrame() : (this._cancelFrameIdx = this._currentFrameCallbacks.indexOf(e), this._cancelFrameIdx > -1 ? this._cancelCurrentAnimationFrame() : (this._cancelFrameIdx = this._frameCallbacks.indexOf(e), this._cancelFrameIdx > -1 && this._cancelRunningAnimationFrame()))
    }, i._onRAFExecuted = function(e) {
        for (this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) this._frameCallbacks[this._frameCallbackIteration + 1](e.time, e);
        this._frameCallbacks.length = 0, this._frameCallbackLength = 0
    }, i._onBeforeRAFExecutorStart = function() {
        Array.prototype.push.apply(this._currentFrameCallbacks, this._nextFrameCallbacks.splice(0, this._nextFrameCallbacksLength)), this._currentFrameCallbacksLength = this._nextFrameCallbacksLength, this._nextFrameCallbacks.length = 0, this._nextFrameCallbacksLength = 0
    }, i._onBeforeRAFExecutorPhase = function() {
        this._phaseActive = !0, Array.prototype.push.apply(this._frameCallbacks, this._currentFrameCallbacks.splice(0, this._currentFrameCallbacksLength)), this._frameCallbackLength = this._currentFrameCallbacksLength, this._currentFrameCallbacks.length = 0, this._currentFrameCallbacksLength = 0
    }, i._onAfterRAFExecutorPhase = function() {
        this._phaseActive = !1
    }, i._cachePhaseIndex = function() {
        this.phaseIndex = this.rafEmitter.executor.phases.indexOf(this.phase)
    }, i._cancelRunningAnimationFrame = function() {
        this._frameCallbacks.splice(this._cancelFrameIdx, 2), this._frameCallbackLength -= 2
    }, i._cancelCurrentAnimationFrame = function() {
        this._currentFrameCallbacks.splice(this._cancelFrameIdx, 2), this._currentFrameCallbacksLength -= 2
    }, i._cancelNextAnimationFrame = function() {
        this._nextFrameCallbacks.splice(this._cancelFrameIdx, 2), this._nextFrameCallbacksLength -= 2, 0 === this._nextFrameCallbacksLength && this.rafEmitter.cancel()
    }, e.exports = r
}, function(e, t, s) {
    "use strict";
    var n = s(11),
        r = function(e) {
            n.call(this, e)
        };
    (r.prototype = Object.create(n.prototype))._subscribe = function() {
        return this.executor.subscribe(this, !0)
    }, e.exports = r
}, function(e, t, s) {
    "use strict";
    var n, r = "undefined" != typeof window ? window : {},
        i = "SharedInstance",
        a = r.AC,
        o = (n = {}, {
            get: function(e, t) {
                var s = null;
                return n[e] && n[e][t] && (s = n[e][t]), s
            },
            set: function(e, t, s) {
                return n[e] || (n[e] = {}), n[e][t] = "function" == typeof s ? new s : s, n[e][t]
            },
            share: function(e, t, s) {
                var n = this.get(e, t);
                return n || (n = this.set(e, t, s)), n
            },
            remove: function(e, t) {
                var s = typeof t;
                if ("string" !== s && "number" !== s) n[e] && (n[e] = null);
                else {
                    if (!n[e] || !n[e][t]) return;
                    n[e][t] = null
                }
            }
        });
    a || (a = r.AC = {}), a[i] || (a[i] = o), e.exports = a[i]
}, function(e, t, s) {
    "use strict";
    var n = s(20).SharedInstance,
        r = s(24).majorVersionNumber,
        i = function() {
            this._currentID = 0
        };
    i.prototype.getNewID = function() {
        return this._currentID++, "raf:" + this._currentID
    }, e.exports = n.share("@marcom/ac-raf-emitter/sharedRAFEmitterIDGeneratorInstance", r, i)
}, function(e, t, s) {
    "use strict";
    var n = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = t.EVT_VIEWPORT_GROUP_EXITED = t.EVT_VIEWPORT_GROUP_ENTERED = t.EVT_VIEWPORT_GROUP_CHANGED = void 0;
    var r = n(s(5)),
        i = s(56);
    const a = "EVT_VIEWPORT_CHANGED";
    class o extends r.default {
        constructor(e) {
            super(), this.label = e.name, this._mql = window.matchMedia(e.mediaQuery), this.active = this._mql.matches, this._onMatch = this._onMatch.bind(this), this._mql.addEventListener ? this._mql.addEventListener("change", this._onMatch) : this._mql.addListener(this._onMatch)
        }
        _onMatch(e) {
            this.active = e.matches, this._events && this.trigger(a, this)
        }
        destroy() {
            this._mql.removeEventListener ? this._mql.removeEventListener("change", this._onMatch) : this._mql.removeListener(this._onMatch), super.destroy()
        }
    }
    const u = t.EVT_VIEWPORT_GROUP_CHANGED = "EVT_VIEWPORT_GROUP_CHANGED",
        c = t.EVT_VIEWPORT_GROUP_EXITED = "EVT_VIEWPORT_GROUP_EXITED",
        h = t.EVT_VIEWPORT_GROUP_ENTERED = "EVT_VIEWPORT_GROUP_ENTERED";
    class d extends r.default {
        constructor(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                excludeMatches: !1
            };
            super(), this._viewports = e, this._viewportQueries = (0, i.translateToMediaQuery)(e), this._excludeMatches = t.excludeMatches, this.active = new Set, this.inactive = new Set, this._onGroupMatch = this._onGroupMatch.bind(this), this._onGroupMatchDebounced = (0, i.debounce)((() => {
                this._safeTrigger(u, this);
                const e = this.isMatch ? h : c;
                this._safeTrigger(e, this)
            }), 50), this._listeners = this._viewportQueries.map((e => {
                const t = new o(e);
                t.on(a, this._onGroupMatch);
                return (t.active ? this.active : this.inactive).add(t.label), t
            }))
        }
        get viewports() {
            return this._viewports
        }
        set viewports(e) {
            this._viewports = e
        }
        get excludeMatches() {
            return this._excludeMatches
        }
        set excludeMatches(e) {
            this._excludeMatches = e
        }
        get isMatch() {
            return this.validateViewport()
        }
        get current() {
            return [...this.active][0]
        }
        destroy() {
            this._listeners.forEach((e => e.destroy())), this.active.clear(), this.inactive.clear(), this.destroyed = !0, super.destroy()
        }
        validateViewport(e) {
            e || (e = Object.keys(this._viewports));
            const t = e.filter((e => this.active.has(e))).length > 0;
            return this.excludeMatches ? !t : t
        }
        _safeTrigger(e, t) {
            this._events && !this.destroyed && this.trigger(e, t)
        }
        _onGroupMatch(e) {
            const {
                active: t,
                label: s
            } = e;
            t ? (this.active.add(s), this.inactive.delete(s)) : (this.inactive.add(s), this.active.delete(s)), this._onGroupMatchDebounced()
        }
    }
    t.default = d
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.translateToMediaQuery = t.setMediaQueryCssVars = t.debounce = t.composeMediaQuery = void 0;
    t.debounce = (e, t) => {
        let s;
        return function() {
            clearTimeout(s), s = setTimeout((() => e.apply(this, arguments)), t)
        }
    };
    const n = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!e) return;
        if (e.hasOwnProperty("query")) return e.query;
        const t = ["only screen"],
            s = Object.keys(e).filter((e => "alias" !== e)).map((t => {
                const s = e[t],
                    n = [];
                for (let e = 0; e < s.length; e++) {
                    const r = s[e];
                    if (r) {
                        const s = 0 === e ? "min" : "max";
                        n.push(`(${s}-${t}: ${r}px)`)
                    }
                }
                return n
            })).flat();
        return t.push(s), t.flat().join(" and ")
    };
    t.composeMediaQuery = n;
    t.translateToMediaQuery = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Object.keys(e).map((t => ({
            name: t,
            mediaQuery: n(e[t])
        })))
    };
    t.setMediaQueryCssVars = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.documentElement,
            t = arguments.length > 1 ? arguments[1] : void 0;
        Object.keys(t).forEach((s => {
            const r = t[s],
                i = n(r);
            e.style.setProperty(`--vp-mq-${s}`, i)
        }))
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, s) {
    e.exports = s(122)
}, function(e, t, s) {
    "use strict";
    var n = s(0),
        r = n(s(123));
    s(45);
    var i = n(s(46)),
        a = n(s(31)),
        o = n(s(131)),
        u = s(33),
        c = s(37),
        h = s(13),
        d = s(21);
    const l = i.default.os.android,
        _ = document.documentElement.classList.contains("aow"),
        m = i.default.browser.safari,
        f = i.default.browser.firefox,
        b = i.default.os.osx && (0, a.default)(),
        p = navigator.userAgent.includes("iPad"),
        x = b || p;
    let v = () => (() => {
        const e = m && i.default.browser.version.major > 12,
            t = i.default.os.osx && i.default.os.version.major >= 10 && i.default.os.version.minor >= 15,
            s = i.default.os.ios && i.default.os.version.major > 12;
        return e && (t || s)
    })() || (() => {
        let e = !1;
        return [i.default.browser.edge && i.default.browser.version.major >= 79, i.default.browser.edgeChromium && i.default.browser.version.major >= 79, i.default.browser.firefox && i.default.browser.version.major >= 28, i.default.browser.chrome && i.default.browser.version.major >= 25, i.default.browser.opera && i.default.browser.version.major >= 16].some((e => !0 === e)) && (e = !0), e
    })();
    const E = e => {
        const {
            outerWidth: t,
            outerHeight: s
        } = window;
        for (let n = 0; n < e.length; n++) {
            const [r, i] = e[n];
            if (t === r && s === i || t === i && s === r) return !0
        }
        return !1
    };
    r.default.addTests({
        [h.FEATURE_ENHANCED]: (() => {
            if (window.location.search.includes("enhanced")) return !0;
            if (window.location.search.includes("base")) return !1;
            const e = {
                aow: _,
                android: l,
                "reduced motion": (0, o.default)(),
                "alpha unsupported": !v()
            };
            for (const t in e)
                if (!0 === e[t]) return (0, c.setCauseForBase)(t), !1;
            const {
                enhanced: t,
                feature: s
            } = (0, u.checkEnhancedFeatures)();
            if (!t) return (0, c.setCauseForBase)(s), !1;
            if (!v()) return !1;
            const n = x && E([
                    [810, 1080]
                ]),
                r = x && E([
                    [768, 1024],
                    [834, 1112]
                ]);
            return !x || !n && !r
        })(),
        [d.FEATURE_INLINE_MEDIA]: !_,
        "reduced-motion": (0, o.default)(),
        "ar-quicklook": (() => {
            if (window.location.search.includes("quicklook")) return !0;
            const e = document.createElement("a");
            return !!(i.default.browser.safari && i.default.browser.version.major >= 16 && e.relList) && e.relList.supports("ar")
        })(),
        safari: m,
        firefox: f,
        ipad: x
    }), r.default.htmlClass()
}, function(e, t, s) {
    "use strict";
    s(124);
    var n = s(125),
        r = s(126);
    e.exports = new n(document.documentElement, r), e.exports.FeatureDetect = n;
    var i = s(130);
    document.addEventListener && document.addEventListener("DOMContentLoaded", (function() {
        new i
    }))
}, function(e, t) {}, function(e, t, s) {
    "use strict";
    var n = function(e, t) {
            this._target = e, this._tests = {}, this.addTests(t)
        },
        r = n.prototype;
    r.addTests = function(e) {
        this._tests = Object.assign(this._tests, e)
    }, r._supports = function(e) {
        return void 0 !== this._tests[e] && ("function" == typeof this._tests[e] && (this._tests[e] = this._tests[e]()), this._tests[e])
    }, r._addClass = function(e, t) {
        t = t || "no-", this._supports(e) ? this._target.classList.add(e) : this._target.classList.add(t + e)
    }, r.htmlClass = function() {
        var e;
        for (e in this._target.classList.remove("no-js"), this._target.classList.add("js"), this._tests) this._tests.hasOwnProperty(e) && this._addClass(e)
    }, e.exports = n
}, function(e, t, s) {
    "use strict";
    var n = s(127);
    e.exports = {
        touch: n,
        "progressive-image": !0
    }
}, function(e, t, s) {
    "use strict";
    var n = s(128),
        r = s(129);

    function i() {
        var e = n.getWindow(),
            t = n.getDocument(),
            s = n.getNavigator();
        return !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch || s.maxTouchPoints > 0 || s.msMaxTouchPoints > 0)
    }
    e.exports = r(i), e.exports.original = i
}, function(e, t, s) {
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
}, function(e, t, s) {
    "use strict";
    e.exports = function(e) {
        var t;
        return function() {
            return void 0 === t && (t = e.apply(this, arguments)), t
        }
    }
}, function(e, t, s) {
    "use strict";
    var n = "touch";

    function r(e, t) {
        this._target = e || document.body, this._attr = t || "data-focus-method", this._focusMethod = this._lastFocusMethod = !1, this._onKeyDown = this._onKeyDown.bind(this), this._onMouseDown = this._onMouseDown.bind(this), this._onTouchStart = this._onTouchStart.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onWindowBlur = this._onWindowBlur.bind(this), this._bindEvents()
    }
    var i = r.prototype;
    i._bindEvents = function() {
        this._target.addEventListener("keydown", this._onKeyDown, !0), this._target.addEventListener("mousedown", this._onMouseDown, !0), this._target.addEventListener("touchstart", this._onTouchStart, !0), this._target.addEventListener("focus", this._onFocus, !0), this._target.addEventListener("blur", this._onBlur, !0), window.addEventListener("blur", this._onWindowBlur)
    }, i._onKeyDown = function(e) {
        this._focusMethod = "key"
    }, i._onMouseDown = function(e) {
        this._focusMethod !== n && (this._focusMethod = "mouse")
    }, i._onTouchStart = function(e) {
        this._focusMethod = n
    }, i._onFocus = function(e) {
        this._focusMethod || (this._focusMethod = this._lastFocusMethod), e.target.setAttribute(this._attr, this._focusMethod), this._lastFocusMethod = this._focusMethod, this._focusMethod = !1
    }, i._onBlur = function(e) {
        e.target.removeAttribute(this._attr)
    }, i._onWindowBlur = function(e) {
        this._focusMethod = !1
    }, e.exports = r
}, function(e, t, s) {
    "use strict";
    var n = s(32);
    e.exports = function() {
        var e = n.getWindow().matchMedia("(prefers-reduced-motion)");
        return !(!e || !e.matches)
    }
}]);