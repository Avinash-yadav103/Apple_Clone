! function(e) {
    var t = {};

    function s(i) {
        if (t[i]) return t[i].exports;
        var n = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.m = e, s.c = t, s.d = function(e, t, i) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
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
        var i = Object.create(null);
        if (s.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) s.d(i, n, function(t) {
                return e[t]
            }.bind(null, n));
        return i
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "/", s(s.s = 132)
}([function(e, t) {
    e.exports = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.USE_ANIM_LIFECYCLE_ATTRIB = t.THEME_DEFAULT = t.THEME_CLASSNAME_NAMESPACE = t.THEME_ATTRIB = t.SOSUMI_FOOTNOTE_LINK_SELECTOR = t.SECTION_ENGAGEMENT_TIME = t.SECTION_ENGAGEMENT_ATTRIB = t.SCROLLBAR_BUFFER_CSS_VAR = t.SCRIM = t.MODAL_SELECTOR = t.MODAL_OVERLAY = t.MODAL_LABELLEDBY_ATTRIB = t.MODAL_L2_CLASSNAME = t.MODAL_ID_ATTRIB = t.MODAL_CUSTOM_CLASSNAME_ATTRIB = t.MODAL_COMPONENT_REF_ATTRIB = t.LIFECYCLE_EVTS = t.GUM_COMPONENT_NAME = t.CONTENT_WRAPPER_ATTRIB = t.BTN_OPEN_ATTRIB = t.BTN_CLOSE_ATTRIB = t.ANIM_SCROLLGROUP_NAME_ATTRIB = t.ANIMATION_EVTS = t.ANALYTICS_REGION_ID_ATTRIB = void 0;
    var n = i(s(89));
    t.ANALYTICS_REGION_ID_ATTRIB = "data-analytics-activitymap-region-id", t.ANIMATION_EVTS = {
        WILLOPEN: n.default.Events.WILLOPEN,
        OPEN: n.default.Events.OPEN,
        OPEN_COMPLETE: "open:complete",
        WILLCLOSE: n.default.Events.WILLCLOSE,
        CLOSE: n.default.Events.CLOSE,
        CLOSE_COMPLETE: "close:complete"
    }, t.ANIM_SCROLLGROUP_NAME_ATTRIB = "data-modal-scroll-group-name", t.BTN_OPEN_ATTRIB = "data-modal-open", t.BTN_CLOSE_ATTRIB = "data-modal-close", t.CONTENT_WRAPPER_ATTRIB = "data-modal-content-wrapper", t.GUM_COMPONENT_NAME = "L2Modal", t.LIFECYCLE_EVTS = {
        CREATED: "l2modal:lifecycle:created",
        MOUNTED: "l2modal:lifecycle:mounted",
        WILLOPEN: "l2modal:lifecycle:onwillopen",
        OPEN: "l2modal:lifecycle:onopen",
        WILLCLOSE: "l2modal:lifecycle:onwillclose",
        CLOSE: "l2modal:lifecycle:onclose"
    }, t.MODAL_CUSTOM_CLASSNAME_ATTRIB = "data-modal-class", t.MODAL_ID_ATTRIB = "data-modal-id";
    const r = t.MODAL_L2_CLASSNAME = "modal-l2";
    t.MODAL_LABELLEDBY_ATTRIB = "data-modal-dialog-labelledby", t.MODAL_COMPONENT_REF_ATTRIB = "data-modal-component-ref", t.MODAL_OVERLAY = {
        CSS_VAR_BORDER_RADIUS: "--modal-overlay-border-radius"
    }, t.MODAL_SELECTOR = `.${r}`, t.SCRIM = {
        ELEMENT_CLASSNAME: "modal-scrim",
        ELEMENT_ATTRIB: "data-modal-element-scrim",
        BLUR_ATTRIB: "data-modal-scrim-blur",
        BLUR_CLASSNAME: "modal-scrim-blur",
        CSS_VAR_BLUR: "--modal-scrim-blur",
        CSS_VAR_FILL: "--modal-scrim-fill"
    }, t.SCROLLBAR_BUFFER_CSS_VAR = "--modal-scrollbar-buffer", t.SECTION_ENGAGEMENT_ATTRIB = "data-analytics-section-engagement", t.SECTION_ENGAGEMENT_TIME = 1e3, t.SOSUMI_FOOTNOTE_LINK_SELECTOR = ".footnote a", t.THEME_ATTRIB = "data-modal-theme", t.THEME_CLASSNAME_NAMESPACE = "theme", t.THEME_DEFAULT = "light", t.USE_ANIM_LIFECYCLE_ATTRIB = "data-modal-anim-lifecycle"
}, function(e, t, s) {
    "use strict";
    var i = s(15);
    e.exports = i.requestAnimationFrame("draw")
}, function(e, t, s) {
    "use strict";
    const i = {
        GUI_INSTANCE: null,
        ANIM_INSTANCE: null,
        VIEWPORT_EMITTER_ELEMENT: void 0,
        LOCAL_STORAGE_KEYS: {
            GuiPosition: "anim-ui.position",
            GroupCollapsedStates: "anim-ui.group-collapsed-states",
            scrollY: "anim-ui.scrollY-position",
            path: "anim-ui.path"
        },
        RESIZE_TIMEOUT: -1,
        BREAKPOINTS: [{
            name: "S",
            mediaQuery: "only screen and (max-width: 734px)"
        }, {
            name: "M",
            mediaQuery: "only screen and (max-width: 1068px)"
        }, {
            name: "L",
            mediaQuery: "only screen and (min-width: 1069px)"
        }],
        getBreakpoint: function() {
            for (let e = 0; e < i.BREAKPOINTS.length; e++) {
                let t = i.BREAKPOINTS[e];
                if (window.matchMedia(t.mediaQuery).matches) return t.name
            }
        },
        KeyframeDefaults: {
            ease: 1,
            epsilon: .05,
            preserveState: !1,
            easeFunctionString: "linear",
            easeFunction: "linear",
            hold: !1,
            snapAtCreation: !1,
            toggle: !1,
            breakpointMask: "SMLX",
            event: "",
            disabledWhen: [],
            cssClass: ""
        },
        KeyframeTypes: {
            Interpolation: 0,
            InterpolationForward: 1,
            CSSClass: 2,
            Event: 3
        },
        EVENTS: {
            ON_DOM_KEYFRAMES_CREATED: "ON_DOM_KEYFRAMES_CREATED",
            ON_DOM_GROUPS_CREATED: "ON_DOM_GROUPS_CREATED",
            ON_GROUP_CREATED: "ON_GROUP_CREATED",
            ON_KEYFRAME_UPDATED: "ON_KEYFRAME_UPDATED",
            ON_TIMELINE_START: "ON_TIMELINE_START",
            ON_TIMELINE_UPDATE: "ON_TIMELINE_UPDATE",
            ON_TIMELINE_COMPLETE: "ON_TIMELINE_COMPLETE",
            ON_CHAPTER_INITIATED: "ON_CHAPTER_INITIATED",
            ON_CHAPTER_OCCURRED: "ON_CHAPTER_OCCURRED",
            ON_CHAPTER_COMPLETED: "ON_CHAPTER_COMPLETED"
        },
        PageEvents: {
            ON_SCROLL: "ON_SCROLL",
            ON_RESIZE_IMMEDIATE: "ON_RESIZE_IMMEDIATE",
            ON_RESIZE_DEBOUNCED: "ON_RESIZE_DEBOUNCED",
            ON_BREAKPOINT_CHANGE: "ON_BREAKPOINT_CHANGE"
        },
        KeyframeJSONReservedWords: ["event", "cssClass", "style", "anchors", "start", "end", "epsilon", "easeFunction", "ease", "breakpointMask", "disabledWhen"],
        TweenProps: s(73),
        TargetValue: s(18),
        CSSTargetValue: s(58),
        pageMetrics: new function() {
            this.scrollX = 0, this.scrollY = 0, this.windowWidth = 0, this.windowHeight = 0, this.documentOffsetX = 0, this.documentOffsetY = 0, this.previousBreakpoint = "", this.breakpoint = ""
        },
        KeyframeComparison: function(e, t) {
            return e.start < t.start ? -1 : e.start > t.start ? 1 : 0
        }
    };
    e.exports = i
}, function(e, t, s) {
    "use strict";
    const i = s(86),
        n = s(159),
        r = () => {};
    let a = 0;
    e.exports = class extends i {
        constructor(e) {
            super(), this.el = e.el, this.gum = e.gum, this.componentName = e.componentName, this._keyframeController = null
        }
        destroy() {
            this.el = null, this.gum = null, this._keyframeController = null, super.destroy()
        }
        addKeyframe(e) {
            const t = e.el || this.el;
            return (e.group || this.anim).addKeyframe(t, e)
        }
        addDiscreteEvent(e) {
            e.event = e.event || "Generic-Event-Name-" + a++;
            let t = void 0 !== e.end && e.end !== e.start;
            const s = this.addKeyframe(e);
            return t ? (e.onEnterOnce && s.controller.once(e.event + ":enter", e.onEnterOnce), e.onExitOnce && s.controller.once(e.event + ":exit", e.onExitOnce), e.onEnter && s.controller.on(e.event + ":enter", e.onEnter), e.onExit && s.controller.on(e.event + ":exit", e.onExit)) : (e.onEventOnce && s.controller.once(e.event, e.onEventOnce), e.onEventReverseOnce && s.controller.once(e.event + ":reverse", e.onEventReverseOnce), e.onEvent && s.controller.on(e.event, e.onEvent), e.onEventReverse && s.controller.on(e.event + ":reverse", e.onEventReverse)), s
        }
        addRAFLoop(e) {
            let t = ["start", "end"];
            if (!t.every((t => e.hasOwnProperty(t)))) return void console.log("BubbleGum.BaseComponent::addRAFLoop required options are missing: " + t.join(" "));
            const s = n.create();
            s.on("update", e.onUpdate || r), s.on("draw", e.onDraw || r), s.on("draw", (() => s.run()));
            const {
                onEnter: i,
                onExit: a
            } = e;
            return e.onEnter = () => {
                s.run(), i && i()
            }, e.onExit = () => {
                s.cancel(), a && a()
            }, this.addDiscreteEvent(e)
        }
        addContinuousEvent(e) {
            e.onDraw || console.log("BubbleGum.BaseComponent::addContinuousEvent required option `onDraw` is missing. Consider using a regular keyframe if you do not need a callback"), e.event = e.event || "Generic-Event-Name-" + a++;
            let t = this.addKeyframe(e);
            return t.controller.on(e.event, e.onDraw), t
        }
        mounted() {}
        onResizeImmediate(e) {}
        onResizeDebounced(e) {}
        onBreakpointChange(e) {}
        get anim() {
            return this.gum.anim
        }
        get keyframeController() {
            return this._keyframeController || (this._keyframeController = this.anim.getControllerForTarget(this.el))
        }
        get pageMetrics() {
            return this.anim.model.pageMetrics
        }
    }
}, function(e, t, s) {
    "use strict";

    function i() {
        this._events = {}
    }
    let n = i.prototype;
    n.on = function(e, t) {
        return this._events[e] = this._events[e] || [], this._events[e].unshift(t), t
    }, n.once = function(e, t) {
        let s = this;
        return this.on(e, (function i(n) {
            s.off(e, i), void 0 !== n ? t(n) : t()
        }))
    }, n.off = function(e, t) {
        if (!this.has(e)) return;
        if (1 === arguments.length) return this._events[e] = null, void delete this._events[e];
        let s = this._events[e].indexOf(t); - 1 !== s && this._events[e].splice(s, 1)
    }, n.trigger = function(e, t) {
        if (this.has(e))
            for (let s = this._events[e].length - 1; s >= 0; s--) void 0 !== t ? this._events[e][s](t) : this._events[e][s]()
    }, n.has = function(e) {
        return e in this._events != !1 && 0 !== this._events[e].length
    }, n.destroy = function() {
        for (let e in this._events) this._events[e] = null;
        this._events = null
    }, e.exports = i
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(10));
    t.default = class {
        constructor(e) {
            this.options = e, this.media = e.media, this.mounted = this.mounted.bind(this), this.media.on(n.default.MOUNTED, this.mounted)
        }
        mounted() {}
        static get isSupported() {
            return !0
        }
        destroy() {}
    }
}, function(e, t, s) {
    "use strict";
    e.exports = {
        PICTURE_DATA_DOWNLOAD_AREA_KEYFRAME: "data-download-area-keyframe",
        PICTURE_DATA_LAZY: "data-lazy",
        PICTURE_DATA_EMPTY_SOURCE: "data-empty",
        PICTURE_DATA_LOADED: "data-picture-loaded",
        PICTURE_CLASS_LOADED: "loaded"
    }
}, function(e, t, s) {
    "use strict";
    const i = s(12).EventEmitterMicro,
        n = s(3),
        r = {
            create: s(11),
            update: s(19),
            draw: s(2)
        },
        a = () => {};
    let o = 0;
    e.exports = class extends i {
        constructor(e) {
            super(), this.el = e.el, this.gum = e.gum, this.componentName = e.componentName, this._keyframeController = null
        }
        destroy() {
            this.el = null, this.gum = null, this._keyframeController = null, super.destroy()
        }
        addKeyframe(e) {
            const t = e.el || this.el;
            return (e.group || this.anim).addKeyframe(t, e)
        }
        addDiscreteEvent(e) {
            e.event = e.event || "Generic-Event-Name-" + o++;
            let t = void 0 !== e.end && e.end !== e.start;
            const s = this.addKeyframe(e);
            return t ? (e.onEnterOnce && s.controller.once(e.event + ":enter", e.onEnterOnce), e.onExitOnce && s.controller.once(e.event + ":exit", e.onExitOnce), e.onEnter && s.controller.on(e.event + ":enter", e.onEnter), e.onExit && s.controller.on(e.event + ":exit", e.onExit)) : (e.onEventOnce && s.controller.once(e.event, e.onEventOnce), e.onEventReverseOnce && s.controller.once(e.event + ":reverse", e.onEventReverseOnce), e.onEvent && s.controller.on(e.event, e.onEvent), e.onEventReverse && s.controller.on(e.event + ":reverse", e.onEventReverse)), s
        }
        addRAFLoop(e) {
            let t = ["start", "end"];
            if (!t.every((t => e.hasOwnProperty(t)))) return void console.log("BubbleGum.BaseComponent::addRAFLoop required options are missing: " + t.join(" "));
            const s = new r.create;
            s.on("update", e.onUpdate || a), s.on("draw", e.onDraw || a), s.on("draw", (() => s.run()));
            const {
                onEnter: i,
                onExit: n
            } = e;
            return e.onEnter = () => {
                s.run(), i && i()
            }, e.onExit = () => {
                s.cancel(), n && n()
            }, this.addDiscreteEvent(e)
        }
        addContinuousEvent(e) {
            e.onDraw || console.log("BubbleGum.BaseComponent::addContinuousEvent required option `onDraw` is missing. Consider using a regular keyframe if you do not need a callback"), e.event = e.event || "Generic-Event-Name-" + o++;
            let t = this.addKeyframe(e);
            return t.controller.on(e.event, e.onDraw), t
        }
        mounted() {}
        onResizeImmediate(e) {}
        onResizeDebounced(e) {}
        onBreakpointChange(e) {}
        get anim() {
            return this.gum.anim
        }
        get keyframeController() {
            return this._keyframeController || (this._keyframeController = this.anim.getControllerForTarget(this.el))
        }
        get pageMetrics() {
            return n.pageMetrics
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Logger = t.DevLogger = void 0;
    const n = i(s(23)).default.browser.safari,
        r = {
            sep: "%s",
            reset: "[0m",
            bold: "[1m",
            dim: "[2m",
            cursive: "[3m",
            underscore: "[4m",
            blink: "[5m",
            reverse: "[7m",
            hidden: "[8m",
            black: "[30m",
            red: "[31m",
            green: "[32m",
            yellow: "[33m",
            blue: "[34m",
            magenta: "[35m",
            cyan: "[36m",
            white: "[37m",
            BGblack: "[40m",
            BGred: "[41m",
            BGgreen: "[42m",
            BGyellow: "[43m",
            BGblue: "[44m",
            BGmagenta: "[45m",
            BGcyan: "[46m",
            BGwhite: "[47m"
        },
        a = e => `${r[e]}${r.sep}${r.reset}`,
        o = a("cyan"),
        l = a("green"),
        h = a("yellow"),
        d = a("red");
    class c {
        static get log() {
            return n ? console.log : console.log.bind(console, o)
        }
        static get info() {
            return n ? console.log : console.log.bind(console, l)
        }
        static get warn() {
            return n ? console.log : console.log.bind(console, h)
        }
        static get error() {
            return n ? console.log : console.log.bind(console, d)
        }
    }
    t.Logger = c;
    t.DevLogger = class extends c {
        static get log() {
            return () => {}
        }
        static get info() {
            return () => {}
        }
        static get warn() {
            return () => {}
        }
        static get error() {
            return () => {}
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = {
        MOUNTED: "MOUNTED",
        MEDIA_LOAD_START: "MEDIA_LOAD_START",
        MEDIA_LOAD_COMPLETE: "MEDIA_LOAD_COMPLETE",
        MEDIA_LOAD_ERROR: "MEDIA_LOAD_ERROR",
        PLAYBACK_STATE_CHANGE: "PLAYBACK_STATE_CHANGE",
        LOADING_STATE_CHANGE: "LOADING_STATE_CHANGE"
    }
}, function(e, t, s) {
    "use strict";
    var i, n = s(12).EventEmitterMicro,
        r = s(34),
        a = s(54);

    function o(e) {
        e = e || {}, n.call(this), this.id = a.getNewID(), this.executor = e.executor || r, this._reset(), this._willRun = !1, this._didDestroy = !1
    }(i = o.prototype = Object.create(n.prototype)).run = function() {
        return this._willRun || (this._willRun = !0), this._subscribe()
    }, i.cancel = function() {
        this._unsubscribe(), this._willRun && (this._willRun = !1), this._reset()
    }, i.destroy = function() {
        var e = this.willRun();
        return this.cancel(), this.executor = null, n.prototype.destroy.call(this), this._didDestroy = !0, e
    }, i.willRun = function() {
        return this._willRun
    }, i.isRunning = function() {
        return this._isRunning
    }, i._subscribe = function() {
        return this.executor.subscribe(this)
    }, i._unsubscribe = function() {
        return this.executor.unsubscribe(this)
    }, i._onAnimationFrameStart = function(e) {
        this._isRunning = !0, this._willRun = !1, this._didEmitFrameData || (this._didEmitFrameData = !0, this.trigger("start", e))
    }, i._onAnimationFrameEnd = function(e) {
        this._willRun || (this.trigger("stop", e), this._reset())
    }, i._reset = function() {
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
}, function(e, t, s) {
    "use strict";
    e.exports = {
        RAFEmitter: s(11),
        ThrottledRAFEmitter: s(190),
        update: s(19),
        external: s(63),
        draw: s(2),
        cancelUpdate: s(83),
        cancelExternal: s(191),
        cancelDraw: s(40),
        RAFExecutor: s(35),
        sharedRAFExecutorInstance: s(34)
    }
}, function(e, t, s) {
    "use strict";
    var i = s(51),
        n = function() {
            this.events = {}
        },
        r = n.prototype;
    r.requestAnimationFrame = function(e) {
        return this.events[e] || (this.events[e] = new i(e)), this.events[e].requestAnimationFrame
    }, r.cancelAnimationFrame = function(e) {
        return this.events[e] || (this.events[e] = new i(e)), this.events[e].cancelAnimationFrame
    }, e.exports = new n
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(2)),
        r = i(s(19)),
        a = s(13);
    t.default = class {
        constructor(e, t) {
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "base",
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "true";
            this.aapController = e, this.anim = this.aapController.anim, this.aap = t, this.type = s, this.preload = i, this.isAnimating = !1, this.isActive = !1, this.isEnabled = !0, this.keyframeOptions = JSON.parse(this.aap.dataset.aapKf), this.introduce = this.anim.createTimeGroup(), this.dismiss = this.anim.createTimeGroup(), this.anim.on(this.anim.model.PageEvents.ON_RESIZE_DEBOUNCED, (e => {
                this.isEnabled && this.isEnhanced() && this.onResizeDebounced(e)
            }))
        }
        mounted() {
            this.setupEvents(), this.anim.trigger(`aap-mounted--${this.aap.id}`, this)
        }
        setupEvents() {
            this.anim.once("enhanced-destroy", this.destroy)
        }
        introduceTimeline() {
            this.aap.style.opacity = "1", this.aap.classList.remove("inactive"), this.destroyed || (this.introduce.progress(0), this.introduce.play())
        }
        dismissTimeline() {
            this.destroyed || (this.dismiss.progress(0), this.dismiss.play())
        }
        _setupScrollGroup() {
            this.resetKeyframe = this.aapController.scrollGroup.addEvent(this.aap, {
                start: "a0t - 100vh",
                end: "a0b",
                event: `${this.aap.id} - reset`,
                onExit: () => {
                    this.destroyed || (this.inRange = !1, this.isAnimating = !1, this.introduce.pause(), this.dismiss.pause(), this.introduce.progress(0), this.dismiss.progress(1))
                },
                anchors: [this.aap.parentNode]
            }), this.keyFrame = this.aapController.scrollGroup.addEvent(this.aap, { ...this.keyframeOptions,
                event: `${this.aap.id} - animate`,
                onEnter: () => {
                    this.inRange = !0, this.isAnimating || this.destroyed || (this.isAnimating = !0, this.introduceTimeline())
                },
                onExit: () => {
                    this.inRange = !1, this.isAnimating || this.destroyed || (this.isAnimating = !0, this.dismissTimeline())
                }
            })
        }
        destroy() {
            this.aap.classList.remove("inactive"), this.aap.style.opacity = "";
            const e = this.introduce && this.introduce.isEnabled ? this.introduce.remove() : Promise.resolve(),
                t = this.dismiss && this.dismiss.isEnabled ? this.dismiss.remove() : Promise.resolve(),
                s = this.keyFrame && this.keyFrame.isEnabled ? this.keyFrame.remove() : Promise.resolve(),
                i = this.resetKeyframe && this.resetKeyframe.isEnabled ? this.resetKeyframe.remove() : Promise.resolve();
            return this.destroyed = !0, Promise.all([e, t, s, i])
        }
        onResizeDebounced(e) {
            if ("S" !== e.breakpoint && "S" !== e.previousBreakpoint) this.inRange && requestAnimationFrame((() => {
                this.dismiss.progress(0), this.dismiss.pause(), this.introduce.progress(1)
            }));
            else {
                if ("textDriven" !== this.type) return void(this.inRange && requestAnimationFrame((() => {
                    this.dismiss.progress(0), this.dismiss.pause(), this.introduce.progress(1)
                })));
                new Promise(((e, t) => {
                    (0, r.default)((() => {
                        this.aap.classList.remove("inactive"), this._getBounds(), (0, n.default)((() => {
                            Promise.all([this.introduce.remove(), this.dismiss.remove()]).then((() => {
                                this.introduce = this.anim.createTimeGroup(), this.dismiss = this.anim.createTimeGroup(), this._setupTimeGroups(), e()
                            }))
                        }), !0)
                    }), !0)
                })).then((() => {
                    this.inRange ? requestAnimationFrame((() => {
                        this.dismiss.progress(0), this.dismiss.pause(), this.introduce.progress(1), this.isAnimating = !1
                    })) : this.isAnimating = !1
                }))
            }
        }
        isEnhanced() {
            return document.documentElement.classList.contains(a.FEATURE_ENHANCED)
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AAP_EASE_FUNCTIONS = void 0, t.setDefaultDismissKeyframes = function(e, t, s) {
        e.addKeyframe(t, {
            start: .25,
            end: .5,
            width: [`${s.width}px`, "css(--aap-min-height)"],
            height: [`${s.height}px`, "css(--aap-min-height)"],
            easeFunction: i.CUBIC_BEZIER
        }), e.addKeyframe(t, {
            start: .5,
            end: 1,
            scale: [1, .01],
            easeFunction: i.CUBIC_BEZIER
        })
    }, t.setDefaultIntroduceKeyframes = function(e, t, s) {
        e.addKeyframe(t, {
            start: 0,
            end: .8,
            y: ["100h + css(--aap-margin)", 0],
            easeFunction: i.SPRING
        }), e.addKeyframe(t, {
            start: .1,
            end: .5,
            "--aap-hint-opacity": [0, 1],
            "--aap-hint-scale": [0, 1.75],
            easeFunction: i.SPRING_ALT
        }), e.addKeyframe(t, {
            start: .5,
            end: .8,
            "--aap-hint-scale": [1.75, 0],
            easeFunction: i.CUBIC_BEZIER
        }), s && e.addKeyframe(s, {
            start: 0,
            end: .8,
            scale: [.01, 1],
            easeFunction: i.SPRING
        })
    };
    const i = t.AAP_EASE_FUNCTIONS = {
        SPRING: "spring(100, 1, 15, 0)",
        SPRING_ALT: "spring(100, 1, 20, 0)",
        CUBIC_BEZIER: "cubic-bezier(0.8, 0, 0.4, 1)"
    }
}, function(e, t, s) {
    "use strict";
    e.exports = class {
        constructor(e, t, s, i) {
            let n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : void 0;
            this.epsilon = parseFloat(t), this.snapAtCreation = s, this.initialValue = e, this.target = e, this.current = e, this.previousValue = e, this.isActive = !1, this.key = i, this.round = n, this.suffix = r
        }
        update(e, t, s) {
            this.target = e[0] + t * (e[1] - e[0]), this.previousValue = this.current, this.current += (this.target - this.current) * s;
            let i = this.delta(this.current, this.target);
            return i < this.epsilon && (this.current = this.target, i = 0), i > this.epsilon || 0 === i && this.previousValue !== this.current
        }
        reconcile(e, t) {
            return this.initialValue = e[0], this.update(e, t, 1)
        }
        needsUpdate() {
            return this.delta(this.current, this.target) > this.epsilon
        }
        delta(e, t) {
            return Math.abs(e - t)
        }
        calculateEpsilon(e, t) {
            if (e.epsilon) return void(this.epsilon = e.epsilon);
            let s = this.delta(t[0], t[1]),
                i = Math.min(.001 * s, this.epsilon, .05);
            this.epsilon = Math.max(i, .001)
        }
        set(e) {
            let t = this.current;
            this.round && (t = Math.round(t)), this.suffix && (t += this.suffix), e[this.key] = t
        }
        unset(e) {}
    }
}, function(e, t, s) {
    "use strict";
    var i = s(15);
    e.exports = i.requestAnimationFrame("update")
}, function(e, t, s) {
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
}, function(e, t, s) {
    "use strict";
    e.exports = {
        lerp: function(e, t, s) {
            return t + (s - t) * e
        },
        map: function(e, t, s, i, n) {
            return i + (n - i) * (e - t) / (s - t)
        },
        mapClamp: function(e, t, s, i, n) {
            var r = i + (n - i) * (e - t) / (s - t);
            return Math.max(i, Math.min(n, r))
        },
        norm: function(e, t, s) {
            return (e - t) / (s - t)
        },
        clamp: function(e, t, s) {
            return Math.max(t, Math.min(s, e))
        },
        randFloat: function(e, t) {
            return Math.random() * (t - e) + e
        },
        randInt: function(e, t) {
            return Math.floor(Math.random() * (t - e) + e)
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = {
        ua: window.navigator.userAgent,
        platform: window.navigator.platform,
        vendor: window.navigator.vendor
    };
    e.exports = s(170)(i)
}, function(e, t, s) {
    "use strict";
    e.exports = {
        majorVersionNumber: "3.x"
    }
}, function(e, t) {
    e.exports = require("@marcom/ac-analytics")
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "createCustomAnimScrollGroup", {
        enumerable: !0,
        get: function() {
            return n.default
        }
    }), Object.defineProperty(t, "getFriendlyName", {
        enumerable: !0,
        get: function() {
            return r.default
        }
    }), Object.defineProperty(t, "getModalComponentRef", {
        enumerable: !0,
        get: function() {
            return a.default
        }
    });
    var n = i(s(168)),
        r = i(s(169)),
        a = i(s(173))
}, function(e, t, s) {
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
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e, t, s, n) {
        const r = s[0].toUpperCase() + s.slice(1),
            a = e[i + r];
        if (void 0 !== a) switch (typeof n) {
            case "boolean":
                return "false" !== a;
            case "object":
                return JSON.parse(a);
            case "number":
                return Number(a);
            default:
                return a
        } else if (void 0 !== t[s]) {
            const e = t[s];
            return "boolean" != typeof n || "false" !== e && "true" !== e ? e : "false" !== e
        }
        return n
    };
    const i = "inlineMedia"
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = {
        EMPTY: "loading-empty",
        LOADING: "loading",
        LOADED: "loaded",
        ERROR: "loading-error",
        DISABLED: "loading-disabled"
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "Close", {
        enumerable: !0,
        get: function() {
            return n.default
        }
    }), Object.defineProperty(t, "CloseBundle", {
        enumerable: !0,
        get: function() {
            return u.default
        }
    }), Object.defineProperty(t, "CloseButton", {
        enumerable: !0,
        get: function() {
            return r.default
        }
    }), Object.defineProperty(t, "Focus", {
        enumerable: !0,
        get: function() {
            return a.default
        }
    }), Object.defineProperty(t, "FullBleed", {
        enumerable: !0,
        get: function() {
            return o.default
        }
    }), Object.defineProperty(t, "FullBleedBundle", {
        enumerable: !0,
        get: function() {
            return m.default
        }
    }), Object.defineProperty(t, "Keyboard", {
        enumerable: !0,
        get: function() {
            return l.default
        }
    }), Object.defineProperty(t, "Open", {
        enumerable: !0,
        get: function() {
            return h.default
        }
    }), Object.defineProperty(t, "PageOverlay", {
        enumerable: !0,
        get: function() {
            return d.default
        }
    }), Object.defineProperty(t, "PageOverlayBundle", {
        enumerable: !0,
        get: function() {
            return p.default
        }
    }), Object.defineProperty(t, "ScrollPosition", {
        enumerable: !0,
        get: function() {
            return c.default
        }
    });
    var n = i(s(229)),
        r = i(s(230)),
        a = i(s(231)),
        o = i(s(235)),
        l = i(s(236)),
        h = i(s(241)),
        d = i(s(242)),
        c = i(s(243)),
        u = i(s(244)),
        m = i(s(245)),
        p = i(s(246))
}, function(e, t, s) {
    "use strict";
    var i = s(32),
        n = s(50);

    function r() {
        var e = i.getWindow(),
            t = i.getDocument(),
            s = i.getNavigator();
        return !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch || s.maxTouchPoints > 0 || s.msMaxTouchPoints > 0)
    }
    e.exports = n(r), e.exports.original = r
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
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setupViewportTracker = t.removeFeatureDetectClass = t.isSmallOnDesktop = t.detectTextZoom = t.checkEnhancedFeatures = t.addFeatureDetectClass = void 0;
    var n = i(s(2)),
        r = i(s(31)),
        a = function(e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var s = l(t);
            if (s && s.has(e)) return s.get(e);
            var i = {
                    __proto__: null
                },
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && {}.hasOwnProperty.call(e, r)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    a && (a.get || a.set) ? Object.defineProperty(i, r, a) : i[r] = e[r]
                }
            return i.default = e, s && s.set(e, i), i
        }(s(55)),
        o = s(36);

    function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
            s = new WeakMap;
        return (l = function(e) {
            return e ? s : t
        })(e)
    }
    t.addFeatureDetectClass = e => new Promise(((t, s) => {
        (0, n.default)((() => {
            document.documentElement.classList.add(e), document.documentElement.classList.remove(`no-${e}`), t()
        }))
    }));
    t.removeFeatureDetectClass = e => new Promise(((t, s) => {
        (0, n.default)((() => {
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
        const i = new Promise(((e, t) => {
                s = e
            })),
            n = t => {
                !!t && t.isMatch || (s(), t && t.destroy()), e.onVpChanged && e.onVpChanged()
            },
            r = new a.default(t, {
                excludeMatches: e.excludeMatches
            });
        return r.on(a.EVT_VIEWPORT_GROUP_CHANGED, n), n(r), i
    };
    const h = () => !(0, r.default)() && window.matchMedia("(max-width: 734px)").matches;
    t.isSmallOnDesktop = h;
    const d = () => parseFloat(window.getComputedStyle(document.documentElement)["font-size"]) > 17;
    t.detectTextZoom = d;
    t.checkEnhancedFeatures = () => {
        const e = new a.default(o.ENHANCED_VIEWPORTS),
            t = {
                "text-zoom": d(),
                "small-desktop": h(),
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
    var i = s(20).SharedInstance,
        n = s(24).majorVersionNumber,
        r = s(35);
    e.exports = i.share("@marcom/ac-raf-emitter/sharedRAFExecutorInstance", n, r)
}, function(e, t, s) {
    "use strict";
    var i, n = s(5);

    function r(e) {
        e = e || {}, this._reset(), this.updatePhases(), this.eventEmitter = new n, this._willRun = !1, this._totalSubscribeCount = -1;
        var t = null,
            s = null;
        "undefined" != typeof window ? (t = window.requestAnimationFrame, s = window.cancelAnimationFrame) : t = s = function() {}, this._requestAnimationFrame = t, this._cancelAnimationFrame = s, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
    }(i = r.prototype).frameRequestedPhase = "requested", i.startPhase = "start", i.runPhases = ["update", "external", "draw"], i.endPhase = "end", i.disabledPhase = "disabled", i.beforePhaseEventPrefix = "before:", i.afterPhaseEventPrefix = "after:", i.subscribe = function(e, t) {
        return this._totalSubscribeCount++, this._nextFrameSubscribers[e.id] || (t ? this._nextFrameSubscribersOrder.unshift(e.id) : this._nextFrameSubscribersOrder.push(e.id), this._nextFrameSubscribers[e.id] = e, this._nextFrameSubscriberArrayLength++, this._nextFrameSubscriberCount++, this._run()), this._totalSubscribeCount
    }, i.subscribeImmediate = function(e, t) {
        return this._totalSubscribeCount++, this._subscribers[e.id] || (t ? this._subscribersOrder.splice(this._currentSubscriberIndex + 1, 0, e.id) : this._subscribersOrder.unshift(e.id), this._subscribers[e.id] = e, this._subscriberArrayLength++, this._subscriberCount++), this._totalSubscribeCount
    }, i.unsubscribe = function(e) {
        return !!this._nextFrameSubscribers[e.id] && (this._nextFrameSubscribers[e.id] = null, this._nextFrameSubscriberCount--, 0 === this._nextFrameSubscriberCount && this._cancel(), !0)
    }, i.getSubscribeID = function() {
        return this._totalSubscribeCount += 1
    }, i.destroy = function() {
        var e = this._cancel();
        return this.eventEmitter.destroy(), this.eventEmitter = null, this.phases = null, this._subscribers = null, this._subscribersOrder = null, this._nextFrameSubscribers = null, this._nextFrameSubscribersOrder = null, this._rafData = null, this._boundOnAnimationFrame = null, this._onExternalAnimationFrame = null, e
    }, i.useExternalAnimationFrame = function(e) {
        if ("boolean" == typeof e) {
            var t = this._isUsingExternalAnimationFrame;
            return e && this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), !this._willRun || e || this._animationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this._isUsingExternalAnimationFrame = e, e ? this._boundOnExternalAnimationFrame : t || !1
        }
    }, i.updatePhases = function() {
        this.phases || (this.phases = []), this.phases.length = 0, this.phases.push(this.frameRequestedPhase), this.phases.push(this.startPhase), Array.prototype.push.apply(this.phases, this.runPhases), this.phases.push(this.endPhase), this._runPhasesLength = this.runPhases.length, this._phasesLength = this.phases.length
    }, i._run = function() {
        if (!this._willRun) return this._willRun = !0, 0 === this.lastFrameTime && (this.lastFrameTime = performance.now()), this._animationFrameActive = !0, this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this.phase === this.disabledPhase && (this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex]), !0
    }, i._cancel = function() {
        var e = !1;
        return this._animationFrameActive && (this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), this._animationFrameActive = !1, this._willRun = !1, e = !0), this._isRunning || this._reset(), e
    }, i._onAnimationFrame = function(e) {
        for (this._subscribers = this._nextFrameSubscribers, this._subscribersOrder = this._nextFrameSubscribersOrder, this._subscriberArrayLength = this._nextFrameSubscriberArrayLength, this._subscriberCount = this._nextFrameSubscriberCount, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex], this._isRunning = !0, this._willRun = !1, this._didRequestNextRAF = !1, this._rafData.delta = e - this.lastFrameTime, this.lastFrameTime = e, this._rafData.fps = 0, this._rafData.delta >= 1e3 && (this._rafData.delta = 0), 0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta), this._rafData.time = e, this._rafData.naturalFps = this._rafData.fps, this._rafData.timeNow = Date.now(), this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameStart(this._rafData);
        for (this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._runPhaseIndex = 0; this._runPhaseIndex < this._runPhasesLength; this._runPhaseIndex++) {
            for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]].trigger(this.phase, this._rafData);
            this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase)
        }
        for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameEnd(this._rafData);
        this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._willRun ? (this.phaseIndex = 0, this.phaseIndex = this.phases[this.phaseIndex]) : this._reset()
    }, i._onExternalAnimationFrame = function(e) {
        this._isUsingExternalAnimationFrame && this._onAnimationFrame(e)
    }, i._reset = function() {
        this._rafData || (this._rafData = {}), this._rafData.time = 0, this._rafData.delta = 0, this._rafData.fps = 0, this._rafData.naturalFps = 0, this._rafData.timeNow = 0, this._subscribers = {}, this._subscribersOrder = [], this._currentSubscriberIndex = -1, this._subscriberArrayLength = 0, this._subscriberCount = 0, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._didEmitFrameData = !1, this._animationFrame = null, this._animationFrameActive = !1, this._isRunning = !1, this._shouldReset = !1, this.lastFrameTime = 0, this._runPhaseIndex = -1, this.phaseIndex = -1, this.phase = this.disabledPhase
    }, e.exports = r
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
    let i, n;
    try {
        i = s(25), n = i.observer.Event
    } catch (e) {}
    e.exports = {
        trackPageState: function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "enhanced";
            if (i && i.passiveTracker) {
                let t = {
                    eVar70: "enhanced"
                };
                document.documentElement.classList.contains(e) || (t = {
                    eVar70: "base",
                    eVar153: document.documentElement.causeForBase
                }), i.passiveTracker(t)
            }
        },
        trackViewerState: function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "enhanced-rt";
            if (i && i.passiveTracker) {
                let t = {
                    eVar158: "realtime viewer - enhanced"
                };
                document.documentElement.classList.contains(e) || (t = {
                    eVar158: "realtime viewer - base",
                    eVar152: document.documentElement.causeForViewerBase || document.documentElement.causeForBase
                }), i.passiveTracker(t)
            }
        },
        trackCustomEvent: function(e, t) {
            if (n) {
                if (!["events", "title"].every((e => Object.keys(t).includes(e)))) throw new Error(`trackCustomEvent(): invalid options: ${t}`);
                const s = {
                        interactionEvents: [t.eventKey]
                    },
                    i = new n(e, s);
                return e.trigger(t.eventKey, {
                    title: t.title,
                    events: t.events
                }), i
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
}, function(e, t, s) {
    "use strict";
    const i = s(57),
        n = s(3),
        r = s(39),
        a = s(60),
        o = s(78),
        l = s(61),
        h = s(153),
        d = s(154),
        c = s(155),
        u = {};
    "undefined" != typeof window && (u.update = s(19), u.cancelUpdate = s(83), u.external = s(63), u.draw = s(2));
    let m = null;
    class p extends i {
        constructor() {
            if (super(), m) throw "You cannot create multiple AnimSystems. You probably want to create multiple groups instead. You can have unlimited groups on a page";
            m = this, this.groups = [], this.scrollSystems = [], this.timeSystems = [], this.tweenGroup = null, this._forceUpdateRAFId = -1, this.initialized = !1, this.model = n, this.plugins = {
                keyframe: [],
                parser: []
            }, this.version = c.version, this._resolveReady = () => {}, this.ready = new Promise((e => this._resolveReady = e)), this.onScroll = this.onScroll.bind(this), this.onResizedDebounced = this.onResizedDebounced.bind(this), this.onResizeImmediate = this.onResizeImmediate.bind(this)
        }
        initialize() {
            return this.initialized || "undefined" == typeof window || (this.initialized = !0, this.timeSystems = [], this.scrollSystems = [], this.groups = [], this.setupEvents(), this.initializeResizeFilter(), this.initializeModel(), this.createDOMGroups(), this.createDOMKeyframes(), this.tweenGroup = new d(null, this), this.groups.unshift(this.tweenGroup), this._resolveReady()), this.ready
        }
        use(e, t) {
            e.install(this, t)
        }
        remove() {
            return this.initialized ? Promise.all(this.groups.map((e => e.remove()))).then((() => {
                this.groups = null, this.scrollSystems = null, this.timeSystems = null, window.clearTimeout(n.RESIZE_TIMEOUT), window.removeEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onResizeImmediate), this._events = {}, this.initialized = !1, this.ready = new Promise((e => this._resolveReady = e))
            })) : (this.ready = new Promise((e => this._resolveReady = e)), Promise.resolve())
        }
        destroy() {
            return this.remove()
        }
        createTimeGroup(e, t) {
            e instanceof HTMLElement || (e = (t = e || {}).el);
            let s = new h(e, this);
            return t && t.name && (s.name = t.name), this.groups.push(s), this.timeSystems.push(s), this.trigger(n.EVENTS.ON_GROUP_CREATED, s), s
        }
        createScrollGroup(e, t) {
            if (!e) throw "AnimSystem scroll based groups must supply an HTMLElement";
            let s = new l(e, this);
            return (t = t || {}).name && (s.name = t.name), t.getPosition && t.getMaxPosition && (s.getPosition = t.getPosition, s.createViewableRange = () => ({
                a: 0,
                d: t.getMaxPosition()
            })), s.getPosition = t.getPosition || s.getPosition, s.getPosition = t.getPosition || s.getPosition, this.groups.push(s), this.scrollSystems.push(s), this.trigger(n.EVENTS.ON_GROUP_CREATED, s), s
        }
        removeGroup(e) {
            return e.destroyed || e.anim !== this ? Promise.resolve() : Promise.all(e.keyframeControllers.map((t => e.removeKeyframeController(t)))).then((() => {
                let t = this.groups.indexOf(e); - 1 !== t && this.groups.splice(t, 1), t = this.scrollSystems.indexOf(e), -1 !== t && this.scrollSystems.splice(t, 1), t = this.timeSystems.indexOf(e), -1 !== t && this.timeSystems.splice(t, 1), e.destroyed || e.destroy()
            }))
        }
        createDOMGroups() {
            document.body.setAttribute("data-anim-scroll-group", "body"), document.querySelectorAll("[data-anim-scroll-group]").forEach((e => this.createScrollGroup(e))), document.querySelectorAll("[data-anim-time-group]").forEach((e => this.createTimeGroup(e))), this.trigger(n.EVENTS.ON_DOM_GROUPS_CREATED, this.groups)
        }
        createDOMKeyframes() {
            let e = [];
            ["data-anim-keyframe", r.DATA_ATTRIBUTE, a.DATA_ATTRIBUTE, o.DATA_ATTRIBUTE].forEach((function(t) {
                for (let s = 0; s < 12; s++) e.push(t + (0 === s ? "" : "-" + (s - 1)))
            }));
            for (let t = 0; t < e.length; t++) {
                let s = e[t],
                    i = document.querySelectorAll("[" + s + "]");
                for (let e = 0; e < i.length; e++) {
                    const t = i[e],
                        n = JSON.parse(t.getAttribute(s));
                    this.addKeyframe(t, n)
                }
            }
            u.update((() => {
                null !== this.groups && (this.groups.forEach((e => e.onKeyframesDirty({
                    silent: !0
                }))), this.groups.forEach((e => e.trigger(n.EVENTS.ON_DOM_KEYFRAMES_CREATED, e))), this.trigger(n.EVENTS.ON_DOM_KEYFRAMES_CREATED, this), this.groups.forEach((e => {
                    e.forceUpdate({
                        waitForNextUpdate: !1,
                        silent: !0
                    }), e.reconcile()
                })), this.onScroll())
            }), !0)
        }
        initializeResizeFilter() {
            if (n.cssDimensionsTracker) return;
            const e = document.querySelector(".cssDimensionsTracker") || document.createElement("div");
            e.setAttribute("cssDimensionsTracker", "true"), e.style.position = "fixed", e.style.top = "0", e.style.width = "100%", e.style.height = "100vh", e.style.pointerEvents = "none", e.style.visibility = "hidden", e.style.zIndex = "-1", document.documentElement.appendChild(e), n.cssDimensionsTracker = e
        }
        initializeModel() {
            n.pageMetrics.windowHeight = n.cssDimensionsTracker.clientHeight, n.pageMetrics.windowWidth = n.cssDimensionsTracker.clientWidth, n.pageMetrics.scrollY = window.scrollY || window.pageYOffset, n.pageMetrics.scrollX = window.scrollX || window.pageXOffset, n.pageMetrics.breakpoint = n.getBreakpoint();
            let e = document.documentElement.getBoundingClientRect();
            n.pageMetrics.documentOffsetX = e.left + n.pageMetrics.scrollX, n.pageMetrics.documentOffsetY = e.top + n.pageMetrics.scrollY
        }
        setupEvents() {
            window.removeEventListener("scroll", this.onScroll), window.addEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onResizeImmediate), window.addEventListener("resize", this.onResizeImmediate)
        }
        onScroll() {
            n.pageMetrics.scrollY = window.scrollY || window.pageYOffset, n.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
            for (let e = 0, t = this.scrollSystems.length; e < t; e++) this.scrollSystems[e].updateTimeline();
            this.trigger(n.PageEvents.ON_SCROLL, n.pageMetrics)
        }
        onResizeImmediate() {
            let e = n.cssDimensionsTracker.clientWidth,
                t = n.cssDimensionsTracker.clientHeight;
            if (e === n.pageMetrics.windowWidth && t === n.pageMetrics.windowHeight) return;
            n.pageMetrics.windowWidth = e, n.pageMetrics.windowHeight = t, n.pageMetrics.scrollY = window.scrollY || window.pageYOffset, n.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
            let s = document.documentElement.getBoundingClientRect();
            n.pageMetrics.documentOffsetX = s.left + n.pageMetrics.scrollX, n.pageMetrics.documentOffsetY = s.top + n.pageMetrics.scrollY, window.clearTimeout(n.RESIZE_TIMEOUT), n.RESIZE_TIMEOUT = window.setTimeout(this.onResizedDebounced, 250), this.trigger(n.PageEvents.ON_RESIZE_IMMEDIATE, n.pageMetrics)
        }
        onResizedDebounced() {
            u.update((() => {
                let e = n.pageMetrics.breakpoint,
                    t = n.getBreakpoint();
                if (t !== e) {
                    n.pageMetrics.previousBreakpoint = e, n.pageMetrics.breakpoint = t;
                    for (let e = 0, t = this.groups.length; e < t; e++) this.groups[e]._onBreakpointChange();
                    this.trigger(n.PageEvents.ON_BREAKPOINT_CHANGE, n.pageMetrics)
                }
                for (let e = 0, t = this.groups.length; e < t; e++) this.groups[e].forceUpdate({
                    waitForNextUpdate: !1
                });
                this.trigger(n.PageEvents.ON_RESIZE_DEBOUNCED, n.pageMetrics)
            }), !0)
        }
        forceUpdate() {
            let {
                waitForNextUpdate: e = !0,
                silent: t = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; - 1 !== this._forceUpdateRAFId && u.cancelUpdate(this._forceUpdateRAFId);
            let s = () => {
                for (let e = 0, s = this.groups.length; e < s; e++) {
                    this.groups[e].forceUpdate({
                        waitForNextUpdate: !1,
                        silent: t
                    })
                }
                return -1
            };
            this._forceUpdateRAFId = e ? u.update(s, !0) : s()
        }
        addKeyframe(e, t) {
            let s = this.getGroupForTarget(e);
            return s = s || this.getGroupForTarget(document.body), s.addKeyframe(e, t)
        }
        addEvent(e, t) {
            let s = this.getGroupForTarget(e);
            return s = s || this.getGroupForTarget(document.body), s.addEvent(e, t)
        }
        getTimeGroupForTarget(e) {
            return this._getGroupForTarget(e, (e => e instanceof h))
        }
        getScrollGroupForTarget(e) {
            return this._getGroupForTarget(e, (e => !(e instanceof h)))
        }
        getGroupForTarget(e) {
            return this._getGroupForTarget(e, (() => !0))
        }
        getGroupByName(e) {
            return this.groups.find((t => t.name === e))
        }
        _getGroupForTarget(e, t) {
            if (e._animInfo && e._animInfo.group && t(e._animInfo.group)) return e._animInfo.group;
            let s = e;
            for (; s;) {
                if (s._animInfo && s._animInfo.isGroup && t(s._animInfo.group)) return s._animInfo.group;
                s = s.parentElement
            }
        }
        getControllerForTarget(e) {
            return e._animInfo && e._animInfo.controller ? e._animInfo.controller : null
        }
        addTween(e, t) {
            return this.tweenGroup.addKeyframe(e, t)
        }
    }
    e.exports = "undefined" == typeof window ? new p : window.AC.SharedInstance.share("AnimSystem", c.major, p), e.exports.default = e.exports
}, function(e, t, s) {
    "use strict";
    const i = s(3),
        n = s(18),
        r = s(58),
        a = s(22),
        o = s(75),
        l = s(134),
        h = s(135),
        d = s(59),
        c = s(136),
        u = s(74),
        m = s(76),
        {
            cssAttributes: p,
            suffixFreeAttributes: f,
            domAttributes: _
        } = s(77);
    class g {
        constructor(e, t) {
            this.controller = e, this.anchors = [], this.jsonProps = t, this.ease = e.group.defaultEase, this.easeFunction = o.linear, this.start = 0, this.end = 0, this.localT = 0, this.curvedT = 0, this.id = 0, this.event = "", this.needsEventDispatch = !1, this.snapAtCreation = !1, this.isEnabled = !1, this.animValues = {}, this.breakpointMask = i.KeyframeDefaults.breakpointMask, this.disabledWhen = [], this.keyframeType = i.KeyframeTypes.Interpolation, this.hold = !1, this.preserveState = !1, this.markedForRemoval = !1;
            let s = !1;
            Object.defineProperty(this, "hidden", {
                get: () => s,
                set(t) {
                    s = t, e.group.keyframesDirty = !0
                }
            }), this.uuid = m(), this.destroyed = !1
        }
        destroy() {
            this.destroyed = !0, this.controller = null, this.disabledWhen = null, this.anchors = null, this.jsonProps = null, this.easeFunction = null, this.animValues = null
        }
        remove() {
            return this.controller && this.controller.removeKeyframe(this)
        }
        parseOptions(e) {
            this.jsonProps = e, e.relativeTo && console.error(`KeyframeError: relativeTo has been removed. Use 'anchors' property instead. Found 'relativeTo':"${e.relativeTo}"`), void 0 === e.end && void 0 === e.duration && (e.end = e.start), "" !== e.anchors && e.anchors ? (this.anchors = [], e.anchors = Array.isArray(e.anchors) ? e.anchors : [e.anchors], e.anchors.forEach(((t, s) => {
                let i = c(t, this.controller.group.element);
                if (!i) {
                    let i = "";
                    return "string" == typeof t && (i = " Provided value was a string, so a failed attempt was made to find anchor with the provided querystring in group.element, or in the document."), void console.warn("Keyframe on", this.controller.element, ` failed to find anchor at index ${s} in array`, e.anchors, `. Anchors must be JS Object references, Elements references, or valid query selector strings. ${i}`)
                }
                this.anchors.push(i), this.controller.group.metrics.add(i)
            }))) : (this.anchors = [], e.anchors = []), e.ease ? this.ease = parseFloat(e.ease) : e.ease = this.ease, e.hasOwnProperty("snapAtCreation") ? this.snapAtCreation = e.snapAtCreation : e.snapAtCreation = this.snapAtCreation, e.easeFunction || (e.easeFunction = i.KeyframeDefaults.easeFunctionString), e.breakpointMask ? this.breakpointMask = e.breakpointMask : e.breakpointMask = this.breakpointMask, e.disabledWhen ? this.disabledWhen = Array.isArray(e.disabledWhen) ? e.disabledWhen : [e.disabledWhen] : e.disabledWhen = this.disabledWhen, e.hasOwnProperty("hold") ? this.hold = e.hold : e.hold = this.hold, e.hasOwnProperty("preserveState") ? this.preserveState = e.preserveState : e.preserveState = i.KeyframeDefaults.preserveState, this.easeFunction = o[e.easeFunction], o.hasOwnProperty(e.easeFunction) || (e.easeFunction.includes("bezier") ? this.easeFunction = l.fromCSSString(e.easeFunction) : e.easeFunction.includes("spring") ? this.easeFunction = h.fromCSSString(e.easeFunction) : console.error("Keyframe parseOptions cannot find 'easeFunction' named '" + e.easeFunction + "'"));
            for (let t in e) {
                if (-1 !== i.KeyframeJSONReservedWords.indexOf(t)) continue;
                let s = e[t];
                if (Array.isArray(s)) {
                    if (1 === s.length && (s[1] = s[0], s[0] = null), void 0 === this.controller.tweenProps[t] || !this.controller._ownerIsElement) {
                        let a = 0;
                        this.controller._ownerIsElement || (a = this.controller.element[t] || 0);
                        const o = t.startsWith("--");
                        let l = s[2] || (o || f.includes(t) ? void 0 : "px"),
                            h = this.controller.group.anim.plugins.keyframe.reduce(((s, i) => s || i.parseProp.call(this, e, t)), null);
                        if (!h && this.controller._ownerIsElement)
                            if (o || p.includes(t)) {
                                let s = u(t),
                                    n = e.round || ["zIndex"].includes(s);
                                a = parseFloat(this.controller.getTargetComputedStyle().getPropertyValue(s)), isNaN(a) && (a = 0), h = new r(a, i.KeyframeDefaults.epsilon, this.snapAtCreation, t, n, l), this.controller.cssAttributes.push(h)
                            } else _.includes(t) && (h = new n(a, i.KeyframeDefaults.epsilon, this.snapAtCreation, t, e.round, l), this.controller.domAttributes.push(h));
                        h || (h = new n(a, i.KeyframeDefaults.epsilon, this.snapAtCreation, t, e.round, l)), this.controller.tweenProps[t] = h
                    }
                    this.animValues[t] = this.controller.group.expressionParser.parseArray(this, s), this.controller.tweenProps[t].calculateEpsilon(e, this.animValues[t])
                }
            }
            this.keyframeType = this.hold ? i.KeyframeTypes.InterpolationForward : i.KeyframeTypes.Interpolation, e.event && (this.event = e.event)
        }
        overwriteProps(e) {
            this.animValues = {};
            let t = Object.assign({}, this.jsonProps, e);
            this.controller.updateKeyframe(this, t)
        }
        updateLocalProgress(e) {
            if (this.start === this.end || e < this.start || e > this.end) return this.localT = e < this.start ? this.hold ? this.localT : 0 : e > this.end ? 1 : 0, void(this.curvedT = this.easeFunction(this.localT));
            const t = (e - this.start) / (this.end - this.start),
                s = this.hold ? this.localT : 0;
            this.localT = a.clamp(t, s, 1), this.curvedT = this.easeFunction(this.localT)
        }
        reconcile(e) {
            this.controller.tweenProps[e].reconcile(this.animValues[e], this.curvedT) && (this.needsEventDispatch || (this.needsEventDispatch = !0, this.controller.keyframesRequiringDispatch.push(this)))
        }
        reset(e) {
            this.localT = e || 0;
            let t = this.ease;
            this.ease = 1;
            for (let e in this.animValues) this.reconcile(e);
            this.ease = t
        }
        onDOMRead(e) {
            let t = this.controller.tweenProps[e].update(this.animValues[e], this.curvedT, this.ease);
            return "" === this.event || this.needsEventDispatch || t && (this.needsEventDispatch = !0, this.controller.keyframesRequiringDispatch.push(this)), t
        }
        isInRange(e) {
            return e >= this.start && e <= this.end
        }
        setEnabled(e) {
            e = e || d(Array.from(document.documentElement.classList));
            let t = -1 !== this.breakpointMask.indexOf(i.pageMetrics.breakpoint),
                s = !1;
            return this.disabledWhen.length > 0 && (s = this.disabledWhen.some((t => void 0 !== e[t]))), this.isEnabled = t && !s, this.isEnabled
        }
        evaluateConstraints() {
            this.start = this.controller.group.expressionParser.parseTimeValue(this, this.jsonProps.start), this.end = this.controller.group.expressionParser.parseTimeValue(this, this.jsonProps.end), this.evaluateInterpolationConstraints()
        }
        evaluateInterpolationConstraints() {
            for (let e in this.animValues) {
                let t = this.jsonProps[e];
                this.animValues[e] = this.controller.group.expressionParser.parseArray(this, t)
            }
        }
    }
    g.DATA_ATTRIBUTE = "data-anim-tween", e.exports = g
}, function(e, t, s) {
    "use strict";
    var i = s(15);
    e.exports = i.cancelAnimationFrame("draw")
}, function(e, t, s) {
    "use strict";
    const i = s(92),
        n = s(93);
    e.exports = {
        itemsCreated(e) {
            this._items.forEach(((e, t) => {
                t === this.wrappedIndex(this.currentIndex) ? n(e.el) : i(e.el)
            }))
        },
        onItemChangeCompleted(e) {
            const {
                previous: t,
                current: s
            } = this.selections.completed;
            t && t !== s && i(t.el), n(s.el)
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(186),
        n = function() {
            this.focusableSelectors = i.selectors
        },
        r = n.prototype;
    r.isFocusableElement = function(e, t, s) {
        return !(t && !this._isDisplayed(e)) && (i.nodeName[e.nodeName] ? !e.disabled : !e.contentEditable || (s = s || parseFloat(e.getAttribute("tabindex")), !isNaN(s)))
    }, r.isTabbableElement = function(e, t) {
        if (t && !this._isDisplayed(e)) return !1;
        var s = e.getAttribute("tabindex");
        return s = parseFloat(s), isNaN(s) ? this.isFocusableElement(e, t, s) : s >= 0
    }, r._isDisplayed = function(e) {
        var t = e.getBoundingClientRect();
        return (0 !== t.top || 0 !== t.left || 0 !== t.width || 0 !== t.height) && "hidden" !== window.getComputedStyle(e).visibility
    }, r.getTabbableElements = function(e, t) {
        for (var s = e.querySelectorAll(this.focusableSelectors), i = s.length, n = [], r = 0; r < i; r++) this.isTabbableElement(s[r], t) && n.push(s[r]);
        return n
    }, r.getFocusableElements = function(e, t) {
        for (var s = e.querySelectorAll(this.focusableSelectors), i = s.length, n = [], r = 0; r < i; r++) this.isFocusableElement(s[r], t) && n.push(s[r]);
        return n
    }, e.exports = new n
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = {
        IDLE: "idle",
        PLAYING: "playing",
        PAUSED: "paused",
        ENDED: "ended"
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(10)),
        r = i(s(99)),
        a = s(21);
    class o extends r.default {
        constructor(e) {
            super(e), this.componentEl = e.componentEl
        }
        async _onPlayKeyframeEnter(e) {
            if (this._inFrame = !0, !this._paused) {
                if (!this._loaded) try {
                    await this.media.load(), this._loaded = !0
                } catch (e) {
                    console.warn("video load err:", e)
                }
                if (this._inFrame) try {
                    await this.media.play()
                } catch (e) {
                    this.media.el.error || this.media.el.readyState === HTMLMediaElement.HAVE_NOTHING || (this.componentEl.classList.add(a.FALLBACK_CLASSNAME), this.destroy())
                }
            }
        }
        destroy() {
            this._playKeyframe && !this._playKeyframe.destroyed && (this._playKeyframe.controller.off(`${this._playKeyframe.event}:enter`, this._onPlayKeyframeEnter), this._playKeyframe.controller.off(`${this._playKeyframe.event}:exit`, this._onPlayKeyframeExit)), this.media.off(n.default.MEDIA_LOAD_START, this._onLoadStart)
        }
    }
    t.default = o
}, function(e, t, s) {
    "use strict";
    const i = s(7).PICTURE_CLASS_LOADED,
        n = s(7).PICTURE_DATA_LOADED,
        r = s(7).PICTURE_DATA_EMPTY_SOURCE;
    e.exports = (window.__pictureElementInstancesLoaded = new Map, void(window.__lp = function(e) {
        const t = e.target.parentElement;
        t.querySelector(`[${r}]`) ? e.stopImmediatePropagation() : (t.classList.add(`${i}`), t.setAttribute(`${n}`, ""), window.__pictureElementInstancesLoaded.set(t.id, t), e.target.onload = null)
    }))
}, function(e, t, s) {
    "use strict";
    const i = "undefined" != typeof window ? window.navigator : {
            userAgent: "",
            platform: "",
            vendor: ""
        },
        n = {
            ua: i.userAgent,
            platform: i.platform,
            vendor: i.vendor
        };
    e.exports = s(47)(n)
}, function(e, t, s) {
    "use strict";
    const i = s(48),
        n = s(49);

    function r(e, t) {
        if ("function" == typeof e.parseVersion) return e.parseVersion(t); {
            let i = e.version || e.userAgent;
            "string" == typeof i && (i = [i]);
            const n = i.length;
            let r;
            for (let e = 0; e < n; e++)
                if (r = t.match((s = i[e], new RegExp(s + "[a-zA-Z\\s/:]+([0-9_.]+)", "i"))), r && r.length > 1) return r[1].replace(/_/g, ".")
        }
        var s;
        return !1
    }

    function a(e, t, s) {
        const i = e.length;
        let n, a;
        for (let o = 0; o < i; o++)
            if ("function" == typeof e[o].test ? !0 === e[o].test(s) && (n = e[o].name) : s.ua.indexOf(e[o].userAgent) > -1 && (n = e[o].name), n) {
                if (t[n] = !0, a = r(e[o], s.ua), "string" == typeof a) {
                    const e = a.split(".");
                    t.version.string = a, e && e.length > 0 && (t.version.major = parseInt(e[0] || 0), t.version.minor = parseInt(e[1] || 0), t.version.patch = parseInt(e[2] || 0))
                } else "edge" === n && (t.version.string = "12.0.0", t.version.major = "12", t.version.minor = "0", t.version.patch = "0");
                return "function" == typeof e[o].parseDocumentMode && (t.version.documentMode = e[o].parseDocumentMode()), t
            }
        return t
    }
    e.exports = function(e) {
        const t = {},
            s = i(n);
        return t.browser = a(n.browser, s.browser, e), t.os = a(n.os, s.os, e), t
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
    var i = s(52),
        n = function(e) {
            this.phase = e, this.rafEmitter = new i, this._cachePhaseIndex(), this.requestAnimationFrame = this.requestAnimationFrame.bind(this), this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this), this._onBeforeRAFExecutorStart = this._onBeforeRAFExecutorStart.bind(this), this._onBeforeRAFExecutorPhase = this._onBeforeRAFExecutorPhase.bind(this), this._onAfterRAFExecutorPhase = this._onAfterRAFExecutorPhase.bind(this), this.rafEmitter.on(this.phase, this._onRAFExecuted.bind(this)), this.rafEmitter.executor.eventEmitter.on("before:start", this._onBeforeRAFExecutorStart), this.rafEmitter.executor.eventEmitter.on("before:" + this.phase, this._onBeforeRAFExecutorPhase), this.rafEmitter.executor.eventEmitter.on("after:" + this.phase, this._onAfterRAFExecutorPhase), this._frameCallbacks = [], this._currentFrameCallbacks = [], this._nextFrameCallbacks = [], this._phaseActive = !1, this._currentFrameID = -1, this._cancelFrameIdx = -1, this._frameCallbackLength = 0, this._currentFrameCallbacksLength = 0, this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0
        },
        r = n.prototype;
    r.requestAnimationFrame = function(e, t) {
        return !0 === t && this.rafEmitter.executor.phaseIndex > 0 && this.rafEmitter.executor.phaseIndex <= this.phaseIndex ? this._phaseActive ? (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !0), this._frameCallbacks.push(this._currentFrameID, e), this._frameCallbackLength += 2) : (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !1), this._currentFrameCallbacks.push(this._currentFrameID, e), this._currentFrameCallbacksLength += 2) : (this._currentFrameID = this.rafEmitter.run(), this._nextFrameCallbacks.push(this._currentFrameID, e), this._nextFrameCallbacksLength += 2), this._currentFrameID
    }, r.cancelAnimationFrame = function(e) {
        this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(e), this._cancelFrameIdx > -1 ? this._cancelNextAnimationFrame() : (this._cancelFrameIdx = this._currentFrameCallbacks.indexOf(e), this._cancelFrameIdx > -1 ? this._cancelCurrentAnimationFrame() : (this._cancelFrameIdx = this._frameCallbacks.indexOf(e), this._cancelFrameIdx > -1 && this._cancelRunningAnimationFrame()))
    }, r._onRAFExecuted = function(e) {
        for (this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) this._frameCallbacks[this._frameCallbackIteration + 1](e.time, e);
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
    }, e.exports = n
}, function(e, t, s) {
    "use strict";
    var i = s(11),
        n = function(e) {
            i.call(this, e)
        };
    (n.prototype = Object.create(i.prototype))._subscribe = function() {
        return this.executor.subscribe(this, !0)
    }, e.exports = n
}, function(e, t, s) {
    "use strict";
    var i, n = "undefined" != typeof window ? window : {},
        r = "SharedInstance",
        a = n.AC,
        o = (i = {}, {
            get: function(e, t) {
                var s = null;
                return i[e] && i[e][t] && (s = i[e][t]), s
            },
            set: function(e, t, s) {
                return i[e] || (i[e] = {}), i[e][t] = "function" == typeof s ? new s : s, i[e][t]
            },
            share: function(e, t, s) {
                var i = this.get(e, t);
                return i || (i = this.set(e, t, s)), i
            },
            remove: function(e, t) {
                var s = typeof t;
                if ("string" !== s && "number" !== s) i[e] && (i[e] = null);
                else {
                    if (!i[e] || !i[e][t]) return;
                    i[e][t] = null
                }
            }
        });
    a || (a = n.AC = {}), a[r] || (a[r] = o), e.exports = a[r]
}, function(e, t, s) {
    "use strict";
    var i = s(20).SharedInstance,
        n = s(24).majorVersionNumber,
        r = function() {
            this._currentID = 0
        };
    r.prototype.getNewID = function() {
        return this._currentID++, "raf:" + this._currentID
    }, e.exports = i.share("@marcom/ac-raf-emitter/sharedRAFEmitterIDGeneratorInstance", n, r)
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = t.EVT_VIEWPORT_GROUP_EXITED = t.EVT_VIEWPORT_GROUP_ENTERED = t.EVT_VIEWPORT_GROUP_CHANGED = void 0;
    var n = i(s(5)),
        r = s(56);
    const a = "EVT_VIEWPORT_CHANGED";
    class o extends n.default {
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
    const l = t.EVT_VIEWPORT_GROUP_CHANGED = "EVT_VIEWPORT_GROUP_CHANGED",
        h = t.EVT_VIEWPORT_GROUP_EXITED = "EVT_VIEWPORT_GROUP_EXITED",
        d = t.EVT_VIEWPORT_GROUP_ENTERED = "EVT_VIEWPORT_GROUP_ENTERED";
    class c extends n.default {
        constructor(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                excludeMatches: !1
            };
            super(), this._viewports = e, this._viewportQueries = (0, r.translateToMediaQuery)(e), this._excludeMatches = t.excludeMatches, this.active = new Set, this.inactive = new Set, this._onGroupMatch = this._onGroupMatch.bind(this), this._onGroupMatchDebounced = (0, r.debounce)((() => {
                this._safeTrigger(l, this);
                const e = this.isMatch ? d : h;
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
    t.default = c
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
    const i = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!e) return;
        if (e.hasOwnProperty("query")) return e.query;
        const t = ["only screen"],
            s = Object.keys(e).filter((e => "alias" !== e)).map((t => {
                const s = e[t],
                    i = [];
                for (let e = 0; e < s.length; e++) {
                    const n = s[e];
                    if (n) {
                        const s = 0 === e ? "min" : "max";
                        i.push(`(${s}-${t}: ${n}px)`)
                    }
                }
                return i
            })).flat();
        return t.push(s), t.flat().join(" and ")
    };
    t.composeMediaQuery = i;
    t.translateToMediaQuery = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Object.keys(e).map((t => ({
            name: t,
            mediaQuery: i(e[t])
        })))
    };
    t.setMediaQueryCssVars = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.documentElement,
            t = arguments.length > 1 ? arguments[1] : void 0;
        Object.keys(t).forEach((s => {
            const n = t[s],
                r = i(n);
            e.style.setProperty(`--vp-mq-${s}`, r)
        }))
    }
}, function(e, t, s) {
    "use strict";
    class i {
        constructor() {
            this._events = {}
        }
        on(e, t) {
            return this._events[e] = this._events[e] || [], this._events[e].unshift(t), t
        }
        once(e, t) {
            const s = i => {
                this.off(e, s), void 0 !== i ? t(i) : t()
            };
            return this.on(e, s)
        }
        off(e, t) {
            if (!this.has(e)) return;
            if (!t) return void delete this._events[e];
            const s = this._events[e].indexOf(t); - 1 !== s && this._events[e].splice(s, 1)
        }
        trigger(e, t) {
            if (this.has(e))
                for (let s = this._events[e].length - 1; s >= 0; s--) void 0 !== t ? this._events[e][s](t) : this._events[e][s]()
        }
        has(e) {
            return e in this._events && 0 !== this._events[e].length
        }
        destroy() {
            this._events = null
        }
    }
    i.EventEmitterMicro = i, e.exports = i
}, function(e, t, s) {
    "use strict";
    const i = s(18),
        n = s(74);
    e.exports = class extends i {
        constructor(e, t, s, i) {
            let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : void 0;
            super(e, t, s, i = n(i), r, a)
        }
        set(e) {
            let t = this.current;
            this.round && (t = Math.round(t)), this.suffix && (t += this.suffix), e.setProperty(this.key, t)
        }
        unset(e) {
            e.removeProperty(this.key)
        }
    }
}, function(e, t, s) {
    "use strict";
    e.exports = function(e) {
        return e.reduce(((e, t) => (e[t] = t, e)), {})
    }
}, function(e, t, s) {
    "use strict";
    const i = s(39),
        n = s(3),
        r = s(18);
    class a extends i {
        constructor(e, t) {
            super(e, t), this.keyframeType = n.KeyframeTypes.CSSClass, this._triggerType = a.TRIGGER_TYPE_CSS_CLASS, this.cssClass = "", this.friendlyName = "", this.style = {
                on: null,
                off: null
            }, this.toggle = n.KeyframeDefaults.toggle, this.isApplied = !1
        }
        parseOptions(e) {
            if (!this.controller._ownerIsElement) throw new TypeError("CSS Keyframes cannot be applied to JS Objects");
            if (e.x = void 0, e.y = void 0, e.z = void 0, e.scale = void 0, e.scaleX = void 0, e.scaleY = void 0, e.rotationX = void 0, e.rotationY = void 0, e.rotationZ = void 0, e.rotation = void 0, e.opacity = void 0, e.hold = void 0, void 0 !== e.toggle && (this.toggle = e.toggle), void 0 !== e.cssClass) this._triggerType = a.TRIGGER_TYPE_CSS_CLASS, this.cssClass = e.cssClass, this.friendlyName = "." + this.cssClass, void 0 === this.controller.tweenProps.targetClasses && (this.controller.tweenProps.targetClasses = {
                add: [],
                remove: []
            });
            else {
                if (void 0 === e.style || !this.isValidStyleProperty(e.style)) throw new TypeError("KeyframeCSSClass no 'cssClass` property found. If using `style` property its also missing or invalid");
                if (this._triggerType = a.TRIGGER_TYPE_STYLE_PROPERTY, this.style = e.style, this.friendlyName = "style", this.toggle = void 0 !== this.style.off || this.toggle, this.toggle && void 0 === this.style.off) {
                    this.style.off = {};
                    for (let e in this.style.on) this.style.off[e] = ""
                }
                void 0 === this.controller.tweenProps.targetStyles && (this.controller.tweenProps.targetStyles = {})
            }
            if (void 0 === e.end && (e.end = e.start), e.toggle = this.toggle, this._triggerType === a.TRIGGER_TYPE_CSS_CLASS) this.isApplied = this.controller.element.classList.contains(this.cssClass);
            else {
                let e = getComputedStyle(this.controller.element);
                this.isApplied = !0;
                for (let t in this.style.on)
                    if (e[t] !== this.style.on[t]) {
                        this.isApplied = !1;
                        break
                    }
            }
            i.prototype.parseOptions.call(this, e), this.animValues[this.friendlyName] = [0, 0], void 0 === this.controller.tweenProps[this.friendlyName] && (this.controller.tweenProps[this.friendlyName] = new r(0, 1, !1, this.friendlyName)), this.keyframeType = n.KeyframeTypes.CSSClass
        }
        updateLocalProgress(e) {
            this.isApplied && !this.toggle || (this.start !== this.end ? !this.isApplied && e >= this.start && e <= this.end ? this._apply() : this.isApplied && this.toggle && (e < this.start || e > this.end) && this._unapply() : !this.isApplied && e >= this.start ? this._apply() : this.isApplied && this.toggle && e < this.start && this._unapply())
        }
        _apply() {
            if (this._triggerType === a.TRIGGER_TYPE_CSS_CLASS) this.controller.tweenProps.targetClasses.add.push(this.cssClass), this.controller.needsClassUpdate = !0;
            else {
                for (let e in this.style.on) this.controller.tweenProps.targetStyles[e] = this.style.on[e];
                this.controller.needsStyleUpdate = !0
            }
            this.isApplied = !0
        }
        _unapply() {
            if (this._triggerType === a.TRIGGER_TYPE_CSS_CLASS) this.controller.tweenProps.targetClasses.remove.push(this.cssClass), this.controller.needsClassUpdate = !0;
            else {
                for (let e in this.style.off) this.controller.tweenProps.targetStyles[e] = this.style.off[e];
                this.controller.needsStyleUpdate = !0
            }
            this.isApplied = !1
        }
        isValidStyleProperty(e) {
            if (!e.hasOwnProperty("on")) return !1;
            if ("object" != typeof e.on) throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:'hidden', otherProperty: 'value'}}");
            if (this.toggle && e.hasOwnProperty("off") && "object" != typeof e.off) throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:'hidden', otherProperty: 'value'}}");
            return !0
        }
        reconcile(e) {}
        onDOMRead(e) {}
        evaluateInterpolationConstraints() {}
    }
    a.TRIGGER_TYPE_CSS_CLASS = 0, a.TRIGGER_TYPE_STYLE_PROPERTY = 1, a.DATA_ATTRIBUTE = "data-anim-classname", e.exports = a
}, function(e, t, s) {
    "use strict";
    const i = s(57),
        n = s(22),
        r = s(59),
        a = s(3),
        o = s(79),
        l = s(137),
        h = s(138),
        d = s(80),
        c = s(62),
        u = s(140),
        m = {};
    "undefined" != typeof window && (m.create = s(11), m.update = s(19), m.draw = s(2));
    let p = 0;
    e.exports = class extends i {
        constructor(e, t) {
            super(), this.anim = t, this.element = e, this.name = this.name || e.getAttribute("data-anim-scroll-group"), this.isEnabled = !0, this.position = new l, this.metrics = new d, this.metrics.add(this.element), this.expressionParser = new c(this), this.boundsMin = 0, this.boundsMax = 0, this.timelineUpdateRequired = !1, this._keyframesDirty = !1, this.viewableRange = this.createViewableRange(), this.defaultEase = a.KeyframeDefaults.ease, this.keyframeControllers = [], this.updateProgress(this.getPosition()), this.onDOMRead = this.onDOMRead.bind(this), this.onDOMWrite = this.onDOMWrite.bind(this), this.gui = null, this.computedStyleCache = {}, this.destroyed = !1, this.finalizeInit()
        }
        finalizeInit() {
            this.element._animInfo = new o(this, null, !0), this.setupRAFEmitter()
        }
        destroy() {
            this.destroyed = !0, this.expressionParser.destroy(), this.expressionParser = null;
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].destroy();
            this.keyframeControllers = null, this.position = null, this.viewableRange = null, this.gui && (this.gui.destroy(), this.gui = null), this.metrics.destroy(), this.metrics = null, this.rafEmitter.destroy(), this.rafEmitter = null, this.anim = null, this.element._animInfo && this.element._animInfo.group === this && (this.element._animInfo.group = null, this.element._animInfo = null), this.element = null, this.isEnabled = !1, super.destroy()
        }
        removeKeyframeController(e) {
            return e.destroyed || !this.keyframeControllers.includes(e) ? Promise.resolve() : (e._allKeyframes.forEach((e => e.markedForRemoval = !0)), this.keyframesDirty = !0, new Promise((t => {
                m.draw((() => {
                    const s = this.keyframeControllers.indexOf(e); - 1 !== s ? (this.keyframeControllers.splice(s, 1), e.onDOMWrite(), e.destroy(), this.gui && this.gui.create(), t()) : t()
                }))
            })))
        }
        remove() {
            return this.anim && this.anim.removeGroup(this)
        }
        clear() {
            return Promise.all(this.keyframeControllers.map((e => this.removeKeyframeController(e))))
        }
        setupRAFEmitter(e) {
            this.rafEmitter && this.rafEmitter.destroy(), this.rafEmitter = e || new m.create, this.rafEmitter.on("update", this.onDOMRead), this.rafEmitter.on("draw", this.onDOMWrite), this.rafEmitter.once("external", (() => this.reconcile()))
        }
        requestDOMChange() {
            return !!this.isEnabled && this.rafEmitter.run()
        }
        onDOMRead() {
            this.keyframesDirty && this.onKeyframesDirty();
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].onDOMRead(this.position.local)
        }
        onDOMWrite() {
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].onDOMWrite();
            this.needsUpdate() && this.requestDOMChange(), this.computedStyleCache = {}
        }
        needsUpdate() {
            if (this._keyframesDirty) return !0;
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++)
                if (this.keyframeControllers[e].needsUpdate()) return !0;
            return !1
        }
        addKeyframe(e, t) {
            let s = this.getControllerForTarget(e);
            return null === s && (s = new u(this, e), this.keyframeControllers.push(s)), this.keyframesDirty = !0, s.addKeyframe(t)
        }
        addEvent(e, t) {
            t.event = t.event || "Generic-Event-Name-" + p++;
            let s = void 0 !== t.end && t.end !== t.start;
            const i = this.addKeyframe(e, t);
            return s ? (t.onEnterOnce && i.controller.once(t.event + ":enter", t.onEnterOnce), t.onExitOnce && i.controller.once(t.event + ":exit", t.onExitOnce), t.onEnter && i.controller.on(t.event + ":enter", t.onEnter), t.onExit && i.controller.on(t.event + ":exit", t.onExit)) : (t.onEventOnce && i.controller.once(t.event, t.onEventOnce), t.onEventReverseOnce && i.controller.once(t.event + ":reverse", t.onEventReverseOnce), t.onEvent && i.controller.on(t.event, t.onEvent), t.onEventReverse && i.controller.on(t.event + ":reverse", t.onEventReverse)), i
        }
        forceUpdate() {
            let {
                waitForNextUpdate: e = !0,
                silent: t = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.isEnabled && (this.refreshMetrics(), this.timelineUpdateRequired = !0, e ? this.keyframesDirty = !0 : this.onKeyframesDirty({
                silent: t
            }))
        }
        onKeyframesDirty() {
            let {
                silent: e = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.determineActiveKeyframes(), this.keyframesDirty = !1, this.metrics.refreshMetrics(this.element), this.viewableRange = this.createViewableRange();
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].updateAnimationConstraints();
            this.updateBounds(), this.updateProgress(this.getPosition()), e || this.updateTimeline(), this.gui && this.gui.create()
        }
        refreshMetrics() {
            let e = new Set([this.element]);
            this.keyframeControllers.forEach((t => {
                e.add(t.element), t._allKeyframes.forEach((t => t.anchors.forEach((t => e.add(t)))))
            })), this.metrics.refreshCollection(e), this.viewableRange = this.createViewableRange()
        }
        reconcile() {
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].reconcile()
        }
        determineActiveKeyframes(e) {
            e = e || r(Array.from(document.documentElement.classList));
            for (let t = 0, s = this.keyframeControllers.length; t < s; t++) this.keyframeControllers[t].determineActiveKeyframes(e)
        }
        updateBounds() {
            if (0 === this.keyframeControllers.length) return this.boundsMin = 0, void(this.boundsMax = 0);
            let e = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY
            };
            for (let t = 0, s = this.keyframeControllers.length; t < s; t++) this.keyframeControllers[t].getBounds(e);
            let t = this.convertTValueToScrollPosition(e.min),
                s = this.convertTValueToScrollPosition(e.max);
            s - t < a.pageMetrics.windowHeight ? (e.min = this.convertScrollPositionToTValue(t - .5 * a.pageMetrics.windowHeight), e.max = this.convertScrollPositionToTValue(s + .5 * a.pageMetrics.windowHeight)) : (e.min -= .001, e.max += .001), this.boundsMin = e.min, this.boundsMax = e.max, this.timelineUpdateRequired = !0
        }
        createViewableRange() {
            return new h(this.metrics.get(this.element), a.pageMetrics.windowHeight)
        }
        _onBreakpointChange(e, t) {
            this.keyframesDirty = !0, this.determineActiveKeyframes()
        }
        updateProgress(e) {
            this.hasDuration() ? (this.position.localUnclamped = (e - this.viewableRange.a) / (this.viewableRange.d - this.viewableRange.a), this.position.local = n.clamp(this.position.localUnclamped, this.boundsMin, this.boundsMax)) : this.position.local = this.position.localUnclamped = 0
        }
        performTimelineDispatch() {
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++) this.keyframeControllers[e].updateLocalProgress(this.position.local);
            this.trigger(a.EVENTS.ON_TIMELINE_UPDATE, this.position.local), this.trigger("update", this.position.local), this.timelineUpdateRequired = !1, this.position.lastPosition !== this.position.local && (this.position.lastPosition <= this.boundsMin && this.position.localUnclamped > this.boundsMin ? (this.trigger(a.EVENTS.ON_TIMELINE_START, this), this.trigger("start", this)) : this.position.lastPosition >= this.boundsMin && this.position.localUnclamped < this.boundsMin ? (this.trigger(a.EVENTS.ON_TIMELINE_START + ":reverse", this), this.trigger("start:reverse", this)) : this.position.lastPosition <= this.boundsMax && this.position.localUnclamped >= this.boundsMax ? (this.trigger(a.EVENTS.ON_TIMELINE_COMPLETE, this), this.trigger("complete", this)) : this.position.lastPosition >= this.boundsMax && this.position.localUnclamped < this.boundsMax && (this.trigger(a.EVENTS.ON_TIMELINE_COMPLETE + ":reverse", this), this.trigger("complete:reverse", this))), null !== this.gui && this.gui.onScrollUpdate(this.position)
        }
        updateTimeline(e) {
            if (!this.isEnabled) return !1;
            void 0 === e && (e = this.getPosition()), this.updateProgress(e);
            let t = this.position.lastPosition === this.boundsMin || this.position.lastPosition === this.boundsMax,
                s = this.position.localUnclamped === this.boundsMin || this.position.localUnclamped === this.boundsMax;
            if (!this.timelineUpdateRequired && t && s && this.position.lastPosition === e) return void(this.position.local = this.position.localUnclamped);
            if (this.timelineUpdateRequired || this.position.localUnclamped > this.boundsMin && this.position.localUnclamped < this.boundsMax) return this.performTimelineDispatch(), this.requestDOMChange(), void(this.position.lastPosition = this.position.localUnclamped);
            let i = this.position.lastPosition > this.boundsMin && this.position.lastPosition < this.boundsMax,
                n = this.position.localUnclamped <= this.boundsMin || this.position.localUnclamped >= this.boundsMax;
            if (i && n) return this.performTimelineDispatch(), this.requestDOMChange(), void(this.position.lastPosition = this.position.localUnclamped);
            const r = this.position.lastPosition < this.boundsMin && this.position.localUnclamped > this.boundsMax,
                a = this.position.lastPosition > this.boundsMax && this.position.localUnclamped < this.boundsMax;
            (r || a) && (this.performTimelineDispatch(), this.requestDOMChange(), this.position.lastPosition = this.position.localUnclamped), null !== this.gui && this.gui.onScrollUpdate(this.position)
        }
        _onScroll(e) {
            this.updateTimeline(e)
        }
        convertScrollPositionToTValue(e) {
            return this.hasDuration() ? n.map(e, this.viewableRange.a, this.viewableRange.d, 0, 1) : 0
        }
        convertTValueToScrollPosition(e) {
            return this.hasDuration() ? n.map(e, 0, 1, this.viewableRange.a, this.viewableRange.d) : 0
        }
        hasDuration() {
            return this.viewableRange.a !== this.viewableRange.d
        }
        getPosition() {
            return a.pageMetrics.scrollY
        }
        getControllerForTarget(e) {
            if (!e._animInfo || !e._animInfo.controllers) return null;
            if (e._animInfo.controller && e._animInfo.controller.group === this) return e._animInfo.controller;
            const t = e._animInfo.controllers;
            for (let e = 0, s = t.length; e < s; e++)
                if (t[e].group === this) return t[e];
            return null
        }
        trigger(e, t) {
            if (void 0 !== this._events[e])
                for (let s = this._events[e].length - 1; s >= 0; s--) void 0 !== t ? this._events[e][s](t) : this._events[e][s]()
        }
        set keyframesDirty(e) {
            this._keyframesDirty = e, this._keyframesDirty && this.requestDOMChange()
        }
        get keyframesDirty() {
            return this._keyframesDirty
        }
    }
}, function(e, t, s) {
    "use strict";
    const i = s(139),
        n = new(s(80));
    class r {
        constructor(e) {
            this.group = e, this.data = {
                target: null,
                anchors: null,
                metrics: this.group.metrics
            }
        }
        parseArray(e, t) {
            return [this.parseExpression(e, t[0]), this.parseExpression(e, t[1])]
        }
        parseExpression(e, t) {
            if (null == t) return null;
            if ("number" == typeof t) return t;
            if ("string" != typeof t) throw `Expression must be a string, received ${typeof t}: ${t}`;
            return this.data.target = e.controller.element, this.data.anchors = e.anchors, this.data.keyframe = e.keyframe, this.group.anim.plugins.parser.reduce(((s, i) => s || i.parseExpression.call(this, e, t)), null) || r._parse(t, this.data)
        }
        parseTimeValue(e, t) {
            if ("number" == typeof t) return t;
            let s = this.group.expressionParser.parseExpression(e, t);
            return this.group.convertScrollPositionToTValue(s)
        }
        destroy() {
            this.group = null
        }
        static parse(e, t) {
            return (t = t || {}) && (n.clear(), t.target && n.add(t.target), t.anchors && t.anchors.forEach((e => n.add(e)))), t.metrics = n, r._parse(e, t)
        }
        static _parse(e, t) {
            return i.Parse(e).execute(t)
        }
    }
    r.programs = i.programs, "undefined" != typeof window && (window.ExpressionParser = r), e.exports = r
}, function(e, t, s) {
    "use strict";
    var i = s(15);
    e.exports = i.requestAnimationFrame("external")
}, function(e, t, s) {
    "use strict";
    e.exports = {
        BaseComponent: s(4)
    }
}, function(e, t, s) {
    "use strict";
    const i = s(5),
        n = s(180),
        r = s(181),
        a = s(182),
        o = s(183),
        l = s(184),
        h = s(91),
        d = s(185),
        c = s(41),
        u = s(94),
        m = ["beforeCreate", "created", "beforeMount", "createItems", "itemsCreated", "mounted", "animateToItem", "onItemChangeInitiated", "onItemChangeOccurred", "onItemChangeCompleted", "onResizeImmediate", "onBreakpointChange", "onResizeDebounced", "destroy"];
    class p extends i {
        constructor(e) {
            var t;
            super(e), t = this, this.el = e.el, this.model = Object.assign({
                options: e
            }, JSON.parse(JSON.stringify(n))), this.model.Item.ConstructorFunction = n.Item.ConstructorFunction, this._items = [], this.currentIndex = 0, m.forEach((e => {
                this[e] = function() {
                    for (var s = arguments.length, i = new Array(s), n = 0; n < s; n++) i[n] = arguments[n];
                    t[`__${e}`] && t[`__${e}`].forEach((e => e.apply(t, i)))
                }
            }));
            const s = this.destroy;
            this.destroy = function() {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                s.apply(t, n), i.prototype.destroy.call(t)
            }, this.on(n.Events.ITEM_CHANGE_INITIATED, this.onItemChangeInitiated), this.on(n.Events.ITEM_CHANGE_OCCURRED, this.onItemChangeOccurred), this.on(n.Events.ITEM_CHANGE_COMPLETED, this.onItemChangeCompleted), ["beforeCreate", "created", "beforeMount", "createItems"].forEach((t => this[t](e)))
        }
    }
    p.withMixins = function() {
        for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
        const i = t.findIndex((e => "excluding" in e));
        let n = new Set;
        i >= 0 && (t[i].excluding.forEach((e => n.add(e))), t.splice(i));
        const f = class extends p {},
            _ = f.prototype;
        let g = [r, l, o, u].filter((e => !n.has(e))),
            E = [h, c, a, d].filter((e => !n.has(e)));
        return t.unshift(...g), t.push(...E), t.forEach((e => {
            for (const t in e) m.includes(t) ? (_[`__${t}`] = _[`__${t}`] || [], _[`__${t}`].push(e[t])) : _[t] = e[t]
        })), f
    }, e.exports = p
}, function(e, t, s) {
    "use strict";
    let i;
    try {
        i = s(25).observer.Gallery
    } catch (e) {}
    e.exports = {
        created(e) {
            this.analytics = {
                lastTrackedItem: null,
                observer: null,
                name: this.el.getAttribute("data-analytics-gallery-id") || this.el.getAttribute("id"),
                events: {
                    UPDATE: "update",
                    UPDATE_COMPLETE: "update:complete"
                }
            }
        },
        mounted() {
            i && (this.analytics.name || (console.warn("No ID attribute found on the Mixin Gallery element - please add an ID", this), this.analytics.name = "null"), this.analytics.observer = new i(this, {
                galleryName: this.analytics.name,
                beforeUpdateEvent: this.analytics.events.UPDATE,
                afterUpdateEvent: this.analytics.events.UPDATE_COMPLETE,
                trackAutoRotate: !0
            }))
        },
        onItemChangeCompleted(e) {
            if (!e.previous || e.current === this.analytics.lastTrackedItem || e.current === e.previous && !this.analytics.lastTrackedItem) return;
            this.analytics.lastTrackedItem = e.current;
            let t = {
                incoming: {
                    id: e.current.analyticsId
                },
                outgoing: {
                    id: e.previous.analyticsId
                },
                interactionEvent: this.lastInteractionEvent
            };
            this.trigger(this.analytics.events.UPDATE_COMPLETE, t)
        }
    }
}, function(e, t, s) {
    "use strict";
    e.exports = {
        beforeCreate() {
            this.clampedIndex = !0
        },
        wrappedIndex(e) {
            return Math.max(0, Math.min(e, this._items.length - 1))
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(90));
    class r extends n.default {
        constructor(e) {
            super(e), this.type = e.type, this.value = e.value
        }
        play() {}
        pause() {}
        reset() {}
        showStaticFallback() {}
    }
    t.default = r
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "Media", {
        enumerable: !0,
        get: function() {
            return n.default
        }
    }), Object.defineProperty(t, "Plugin", {
        enumerable: !0,
        get: function() {
            return r.default
        }
    }), t.autoInit = void 0, Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
            return n.default
        }
    });
    var n = i(s(95)),
        r = i(s(6));
    t.autoInit = n.default.autoInitialize
}, function(e, t, s) {
    "use strict";
    const i = ["INPUT", "SELECT", "TEXTAREA"];
    e.exports = {
        created(e) {
            this.onKeyDown = this.onKeyDown.bind(this), this.inViewKeyframe = this.addDiscreteEvent({
                event: "Gallery: In View",
                start: "t - 100vh",
                end: "b + 100%",
                onEnter: () => window.addEventListener("keydown", this.onKeyDown),
                onExit: () => window.removeEventListener("keydown", this.onKeyDown)
            }), Object.defineProperty(this, "isInView", {
                configurable: !0,
                get: () => null != this.inViewKeyframe && this.inViewKeyframe.isCurrentlyInRange
            })
        },
        destroy() {
            this.inViewKeyframe.remove(), this.inViewKeyframe = null, window.removeEventListener("keydown", this.onKeyDown)
        },
        onKeyDown(e) {
            if (this.isInView && !this.inputHasFocus() && (37 === e.keyCode || 39 === e.keyCode)) {
                let t = this.model.IsRTL ? -1 : 1,
                    s = 37 === e.keyCode ? -1 : 1;
                this.lastInteractionEvent = e;
                const i = this.currentIndex + s * t;
                this.animateToItem(i)
            }
        },
        inputHasFocus: function() {
            return -1 !== i.indexOf(document.activeElement.nodeName)
        }
    }
}, function(e, t, s) {
    "use strict";
    const i = s(46);
    e.exports = {
        beforeCreate() {
            document.body._animInfo && (this.anim = document.body._animInfo.group.anim)
        },
        mounted() {
            this.scrollContainer = this.el.querySelector(".scroll-container"), this.itemContainer = this.el.querySelector(".item-container"), this.onScroll = this.onScroll.bind(this), this.setCurrentIndex = this.setCurrentIndex.bind(this), this.cacheSizeInfo = this.cacheSizeInfo.bind(this), this.animatingScrollTo = !1, this.closestIndex = this.currentIndex, this.cacheSizeInfo();
            const e = this.currentIndex > this.maxIndex ? this.maxIndex : this.currentIndex;
            this.scrollContainer.scrollTo({
                left: this.itemOffsets[e],
                behavior: "instant"
            }), this.setCurrentIndex(), this.scrollContainer.addEventListener("scroll", this.onScroll)
        },
        debounceScroll() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 200;
            clearTimeout(this.timer), this.timer = setTimeout(this.setCurrentIndex, e)
        },
        onScroll(e) {
            if (i.browser.firefox && "none" == this.scrollContainer.style["scroll-snap-type"] && (this.scrollContainer.style["scroll-snap-type"] = "x mandatory"), this.animatingScrollTo) {
                const e = this.closest(this.scrollContainer.scrollLeft, this.itemOffsets),
                    t = this.itemOffsets.findIndex((t => t === e));
                if (this.closestIndex !== t) {
                    const e = this._items[t];
                    this.trigger(this.model.Events.ITEM_CHANGE_OCCURRED, {
                        gallery: this,
                        current: e
                    }), this.closestIndex = t
                }
            }
            this.lastInteractionEvent = {
                type: "swipe",
                target: e.target,
                srcElement: e.srcElement
            }, this.debounceScroll()
        },
        closest: (e, t) => t.reduce(((t, s) => {
            if (null === s) return t;
            const i = Math.abs(t - e),
                n = Math.abs(s - e);
            return i === n ? t > s ? t : s : n < i ? s : t
        })),
        setCurrentIndex() {
            this.animatingScrollTo && (this.animatingScrollTo = !1);
            const e = this.closest(this.scrollContainer.scrollLeft, this.itemOffsets),
                t = this.itemOffsets.findIndex((t => t === e));
            if (t === this.currentIndex) return;
            this.currentIndex = t;
            const s = this._items[this.currentIndex];
            this.closestIndex !== t && (this.trigger(this.model.Events.ITEM_CHANGE_INITIATED, {
                gallery: this,
                next: s
            }), this.trigger(this.model.Events.ITEM_CHANGE_OCCURRED, {
                gallery: this,
                current: s
            })), this.trigger(this.model.Events.ITEM_CHANGE_COMPLETED, {
                gallery: this,
                current: s
            }), this.closestIndex = t
        },
        animateToItem(e) {
            if (this.currentIndex === e) return;
            e > this.maxIndex && (e = this.maxIndex);
            if (this.scrollContainer.scrollLeft === this.scrollWidth && e > this.currentIndex) return;
            const t = this._items[e];
            if (void 0 === t) return;
            let s = this.itemOffsets[e];
            if (void 0 !== s) {
                if (i.browser.firefox && !this.fitsPerfectly && e === this.maxIndex && (this.scrollContainer.style["scroll-snap-type"] = "none"), this.model.PrefersReducedMotion) return this.scrollContainer.removeEventListener("scroll", this.onScroll), this.scrollContainer.scrollTo({
                    left: s,
                    behavior: "instant"
                }), this.trigger(this.model.Events.ITEM_CHANGE_INITIATED, {
                    gallery: this,
                    next: t
                }), this.trigger(this.model.Events.ITEM_CHANGE_OCCURRED, {
                    gallery: this,
                    current: t
                }), this.trigger(this.model.Events.ITEM_CHANGE_COMPLETED, {
                    gallery: this,
                    current: t
                }), void this.scrollContainer.addEventListener("scroll", this.onScroll);
                this.model.duration && this.anim ? this.animateWithAnim(e, s) : (this.animatingScrollTo = !0, this.trigger(this.model.Events.ITEM_CHANGE_INITIATED, {
                    gallery: this,
                    next: t
                }), this.scrollContainer.scrollTo({
                    left: s,
                    behavior: "smooth"
                }))
            }
        },
        animateWithAnim(e, t) {
            if (this.galleryTl) return;
            const s = this.scrollContainer.scrollLeft,
                n = t,
                r = this._items[e];
            this.scrollContainer.removeEventListener("scroll", this.onScroll), this.trigger(this.model.Events.ITEM_CHANGE_INITIATED, {
                gallery: this,
                next: r
            });
            const a = () => {
                    this.scrollContainer.style["scroll-snap-type"] = "none"
                },
                o = () => {
                    this.currentIndex = e, i.browser.firefox && !this.fitsPerfectly && this.maxIndex === this.currentIndex || (this.scrollContainer.style["scroll-snap-type"] = "x mandatory"), this.galleryTl && this.galleryTl.remove().then((() => this.galleryTl = null)), this.trigger(this.model.Events.ITEM_CHANGE_COMPLETED, {
                        gallery: this,
                        current: r
                    }), this.scrollContainer.addEventListener("scroll", this.onScroll)
                };
            this.galleryTl = this.anim.createTimeGroup(), this.kf = this.galleryTl.addKeyframe(this.scrollContainer, {
                start: 0,
                end: this.model.duration,
                scrollLeft: [s, n],
                easeFunction: "easeInOutQuad"
            }), this.galleryTl.addEvent(this.scrollContainer, {
                start: 0,
                onEvent: () => {
                    a()
                }
            }), this.galleryTl.addEvent(this.scrollContainer, {
                start: this.galleryTl.duration / 2,
                onEvent: () => {
                    this.trigger(this.model.Events.ITEM_CHANGE_OCCURRED, {
                        gallery: this,
                        current: r
                    }), this.closestIndex = e
                }
            }), this.galleryTl.addEvent(this.scrollContainer, {
                start: this.galleryTl.duration,
                onEvent: () => {
                    o()
                }
            }), this.galleryTl.play()
        },
        recalculateItemPositions() {
            requestAnimationFrame((() => {
                this.cacheSizeInfo();
                const e = null !== this.itemOffsets[this.currentIndex] ? this.itemOffsets[this.currentIndex] : this.itemOffsets[this.maxIndex];
                this.scrollContainer.scrollLeft !== e && this.scrollContainer.scrollTo({
                    left: e,
                    behavior: "instant"
                }), this.setCurrentIndex()
            }))
        },
        cacheSizeInfo() {
            this.model.Scroll.ClientWidthCssVar && this.el.style.setProperty("--document-client-width", `${document.documentElement.clientWidth}px`);
            let e = getComputedStyle(this.itemContainer);
            this.contentWidth = parseFloat(e.width), this.contentPadding = parseFloat(e.paddingInlineStart);
            let t = this.model.IsRTL ? -1 : 1;
            this.scrollWidth = (this.scrollContainer.scrollWidth - this.scrollContainer.clientWidth) * t, this.scrollContainerWidth = this.scrollContainer.offsetWidth, this.fitsPerfectly = !1, this.maxIndex = null, this.itemOffsets = [];
            let s = 0;
            this._items.forEach(((e, t) => {
                let i;
                0 === t && (s = e.el.offsetLeft);
                if ("center" === getComputedStyle(e.el).scrollSnapAlign) {
                    let t = e.el.offsetWidth / 2;
                    i = Math.floor(e.el.offsetLeft - this.scrollContainerWidth / 2 + t)
                } else i = Math.floor(e.el.offsetLeft - s);
                Math.abs(i) >= Math.abs(this.scrollWidth) && (null === this.maxIndex ? (this.maxIndex = t, Math.abs(i) === Math.abs(this.scrollWidth) && (this.fitsPerfectly = !0), i = this.scrollWidth) : i = null), this.itemOffsets.push(i)
            })), null === this.maxIndex && (this.maxIndex = this._items.length - 1)
        },
        onResizeImmediate() {
            this.scrollContainer.removeEventListener("scroll", this.onScroll)
        },
        onResizeDebounced() {
            this.scrollContainer.addEventListener("scroll", this.onScroll), this.recalculateItemPositions()
        },
        destroy() {
            this.scrollContainer.removeEventListener("scroll", this.onScroll), this.galleryTl && this.galleryTl.remove().then((() => this.galleryTl = null))
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = t.LAZY_LOAD_STORED_OPTIONS_NAME = void 0;
    var n = i(s(116)),
        r = s(1);
    const a = t.LAZY_LOAD_STORED_OPTIONS_NAME = "lazyLoadOptions";
    class o extends n.default {
        _addKeyframesToImages() {
            this._scrollGroup = this.AnimSystem.getScrollGroupForTarget(document.body), this._images.forEach((e => {
                this.AnimSystem.getScrollGroupForTarget(e) && (this._scrollGroup = this.AnimSystem.getScrollGroupForTarget(e));
                const t = this._defineKeyframeOptions(e);
                if (e.closest(`[${r.CONTENT_WRAPPER_ATTRIB}]`)) e[a] = t;
                else {
                    this._scrollGroup.addKeyframe(e, t).controller.on("AnimLazyImage:enter", (() => {
                        this._imageIsInLoadRange(e)
                    }))
                }
            }))
        }
    }
    t.default = o
}, function(e, t, s) {
    "use strict";
    e.exports = class {}
}, function(e, t, s) {
    "use strict";
    e.exports = function(e) {
        return e.startsWith("--") ? e : e.replace(/[A-Z]/g, (e => "-" + e.toLowerCase()))
    }
}, function(e, t, s) {
    "use strict";
    e.exports = new class {
        constructor() {
            this.linear = function(e) {
                return e
            }, this.easeInQuad = function(e) {
                return e * e
            }, this.easeOutQuad = function(e) {
                return e * (2 - e)
            }, this.easeInOutQuad = function(e) {
                return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
            }, this.easeInSin = function(e) {
                return 1 + Math.sin(Math.PI / 2 * e - Math.PI / 2)
            }, this.easeOutSin = function(e) {
                return Math.sin(Math.PI / 2 * e)
            }, this.easeInOutSin = function(e) {
                return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2
            }, this.easeInElastic = function(e) {
                return 0 === e ? e : (.04 - .04 / e) * Math.sin(25 * e) + 1
            }, this.easeOutElastic = function(e) {
                return .04 * e / --e * Math.sin(25 * e)
            }, this.easeInOutElastic = function(e) {
                return (e -= .5) < 0 ? (.02 + .01 / e) * Math.sin(50 * e) : (.02 - .01 / e) * Math.sin(50 * e) + 1
            }, this.easeOutBack = function(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }, this.easeInCubic = function(e) {
                return e * e * e
            }, this.easeOutCubic = function(e) {
                return --e * e * e + 1
            }, this.easeInOutCubic = function(e) {
                return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
            }, this.easeInQuart = function(e) {
                return e * e * e * e
            }, this.easeOutQuart = function(e) {
                return 1 - --e * e * e * e
            }, this.easeInOutQuart = function(e) {
                return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
            }, this.easeInQuint = function(e) {
                return e * e * e * e * e
            }, this.easeOutQuint = function(e) {
                return 1 + --e * e * e * e * e
            }, this.easeInOutQuint = function(e) {
                return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
            }
        }
    }
}, function(e, t, s) {
    "use strict";
    e.exports = () => Math.random().toString(16).slice(-4)
}, function(e, t, s) {
    "use strict";
    let i = ["borderRadius", "bottom", "fontSize", "fontWeight", "height", "left", "lineHeight", "marginBottom", "marginLeft", "marginRight", "marginTop", "maxHeight", "maxWidth", "opacity", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "right", "top", "width", "zIndex", "strokeDashoffset"];
    i.push(...i.map((e => e.replace(/[A-Z]/g, (e => "-" + e.toLowerCase())))));
    e.exports = {
        transformAttributes: ["x", "y", "z", "scale", "scaleX", "scaleY", "rotation", "rotationX", "rotationY", "rotationZ"],
        cssAttributes: i,
        domAttributes: ["scrollLeft", "scrollTop", "scrollBy", "scrollTo", "currentTime"],
        suffixFreeAttributes: ["opacity", "z-index", "font-weight", "zIndex", "fontWeight", "scrollLeft", "scrollTop", "scrollBy", "scrollTo", "currentTime"]
    }
}, function(e, t, s) {
    "use strict";
    const i = s(39),
        n = s(3),
        r = s(18);
    class a extends i {
        constructor(e, t) {
            super(e, t), this.keyframeType = n.KeyframeTypes.Event, this.isApplied = !1, this.hasDuration = !1, this.isCurrentlyInRange = !1
        }
        parseOptions(e) {
            e.x = void 0, e.y = void 0, e.scale = void 0, e.scaleX = void 0, e.scaleY = void 0, e.rotation = void 0, e.style = void 0, e.cssClass = void 0, e.rotation = void 0, e.opacity = void 0, e.hold = void 0, this.event = e.event, this.animValues[this.event] = [0, 0], void 0 === this.controller.tweenProps[this.event] && (this.controller.tweenProps[this.event] = new r(0, 1, !1, this.event)), super.parseOptions(e), this.keyframeType = n.KeyframeTypes.Event
        }
        updateLocalProgress(e) {
            if (this.hasDuration) {
                let t = this.isCurrentlyInRange,
                    s = e >= this.start && e <= this.end;
                if (t === s) return;
                return this.isCurrentlyInRange = s, void(s && !t ? this._trigger(this.event + ":enter") : t && !s && this._trigger(this.event + ":exit"))
            }!this.isApplied && e >= this.start ? (this.isApplied = !0, this._trigger(this.event)) : this.isApplied && e < this.start && (this.isApplied = !1, this._trigger(this.event + ":reverse"))
        }
        _trigger(e) {
            this.controller.eventObject.event = e, this.controller.eventObject.keyframe = this, this.controller.trigger(e, this.controller.eventObject)
        }
        evaluateConstraints() {
            super.evaluateConstraints(), this.hasDuration = this.start !== this.end
        }
        reset(e) {
            this.isApplied = !1, this.isCurrentlyInRange = !1, super.reset(e)
        }
        onDOMRead(e) {}
        reconcile(e) {}
        evaluateInterpolationConstraints() {}
    }
    a.DATA_ATTRIBUTE = "data-anim-event", e.exports = a
}, function(e, t, s) {
    "use strict";
    const i = s(73);
    e.exports = class {
        constructor(e, t) {
            let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this.isGroup = s, this.group = e, this.controller = t, this.controllers = [], this.tweenProps = new i
        }
    }
}, function(e, t, s) {
    "use strict";
    const i = s(3),
        n = (e, t) => null == e ? t : e;
    class r {
        constructor(e) {
            this.top = 0, this.bottom = 0, this.left = 0, this.right = 0, this.height = 0, this.width = 0
        }
        toString() {
            return `top:${this.top}, bottom:${this.bottom}, left:${this.left}, right:${this.right}, height:${this.height}, width:${this.width}`
        }
        toObject() {
            return {
                top: this.top,
                bottom: this.bottom,
                left: this.left,
                right: this.right,
                height: this.height,
                width: this.width
            }
        }
    }
    e.exports = class {
        constructor() {
            this.clear()
        }
        clear() {
            this._metrics = new WeakMap
        }
        destroy() {
            this._metrics = null
        }
        add(e) {
            let t = this._metrics.get(e);
            if (t) return t;
            let s = new r(e);
            return this._metrics.set(e, s), this._refreshMetrics(e, s)
        }
        get(e) {
            return this._metrics.get(e)
        }
        refreshCollection(e) {
            e.forEach((e => this._refreshMetrics(e, null)))
        }
        refreshMetrics(e) {
            return this._refreshMetrics(e)
        }
        _refreshMetrics(e, t) {
            if (t = t || this._metrics.get(e), !(e instanceof Element)) return t.width = n(e.width, 0), t.height = n(e.height, 0), t.top = n(e.top, n(e.y, 0)), t.left = n(e.left, n(e.x, 0)), t.right = t.left + t.width, t.bottom = t.top + t.height, t;
            if (void 0 === e.offsetWidth) {
                let s = e.getBoundingClientRect();
                return t.width = s.width, t.height = s.height, t.top = i.pageMetrics.scrollY + s.top, t.left = i.pageMetrics.scrollX + s.left, t.right = t.left + t.width, t.bottom = t.top + t.height, t
            }
            t.width = e.offsetWidth, t.height = e.offsetHeight, t.top = i.pageMetrics.documentOffsetY, t.left = i.pageMetrics.documentOffsetX;
            let s = e;
            for (; s;) t.top += s.offsetTop, t.left += s.offsetLeft, s = s.offsetParent;
            return t.right = t.left + t.width, t.bottom = t.top + t.height, t
        }
    }
}, function(e, t, s) {
    "use strict";
    const i = s(18);
    e.exports = class extends i {
        constructor() {
            super(...arguments);
            const e = arguments.length <= 0 ? void 0 : arguments[0];
            this.initialValue = new Float32Array(e), this.target = new Float32Array(e), this.current = new Float32Array(e), this.previousValue = new Float32Array(e)
        }
        update(e, t, s) {
            for (let i = 0, n = this.target.length; i < n; i++) this.target[i] = e[0][i] + t * (e[1][i] - e[0][i]), this.previousValue[i] = this.current[i], this.current[i] += (this.target[i] - this.current[i]) * s;
            let i = this.delta(this.current, this.target);
            return i < this.epsilon && (this.current = new Float32Array(this.target), i = 0), i > this.epsilon || 0 === i && this.previousValue.some(((e, t) => e !== this.current[t]))
        }
        reconcile(e, t) {
            return this.initialValue.forEach(((t, s) => this.initialValue[s] = e[0][s])), this.update(e, t, 1)
        }
        needsUpdate() {
            return this.delta(this.current, this.target) > this.epsilon
        }
        delta(e, t) {
            let s = 0;
            for (let i = 0, n = e.length; i < n; i++) s += Math.abs(e[i] - t[i]);
            return s
        }
        calculateEpsilon(e, t) {
            this.epsilon = e.epsilon || .05
        }
        set(e) {
            throw "ArrayTargetValue does not implement a `set` method. Subclasses must overwrite"
        }
        unset(e) {
            throw "ArrayTargetValue does not implement an `unset` method. Subclasses must overwrite"
        }
    }
}, function(e, t, s) {
    "use strict";
    const i = s(3);
    class n {
        constructor(e, t) {
            this._index = 0, this.keyframe = e, t && (this.name = t)
        }
        get start() {
            return this.keyframe.jsonProps.start
        }
        set index(e) {
            this._index = e
        }
        get index() {
            return this._index
        }
    }
    e.exports = class {
        constructor(e) {
            this.timeGroup = e, this.chapters = [], this.chapterNames = {}, this.currentChapter = null, this.tween = null, this.destroyed = !1
        }
        destroy() {
            this.destroyed = !0, this.tween && !this.tween.destroyed && this.tween.remove(), this.tween = null
        }
        addChapter(e) {
            const {
                position: t,
                name: s
            } = e;
            if (void 0 === t) throw ReferenceError("Cannot add chapter without target position.");
            e._impIsFirst || 0 !== this.chapters.length || this.addChapter({
                position: 0,
                _impIsFirst: !0
            });
            let i = this.timeGroup.addKeyframe(this, {
                start: t,
                end: t,
                event: "Chapter"
            });
            this.timeGroup.forceUpdate({
                waitForNextFrame: !1,
                silent: !0
            });
            const r = new n(i, s);
            if (this.chapters.push(r), s) {
                if (this.chapterNames.hasOwnProperty(s)) throw ReferenceError(`Duplicate chapter name assigned - "${s}" is already in use`);
                this.chapterNames[s] = r
            }
            return this.chapters.sort(((e, t) => e.start - t.start)).forEach(((e, t) => e.index = t)), this.currentChapter = this.currentChapter || this.chapters[0], r
        }
        playToChapter(e) {
            let t;
            if (e.hasOwnProperty("index")) t = this.chapters[e.index];
            else {
                if (!e.hasOwnProperty("name")) throw ReferenceError("Cannot play to chapter without target index or name");
                t = this.chapterNames[e.name]
            }
            if (!t || this.currentChapter === t && !0 !== e.force) return;
            let s = e.ease || "easeInOutCubic";
            this.tween && this.tween.controller && (this.tween.remove(), s = e.ease || "easeOutQuint"), this.timeGroup.timeScale(e.timeScale || 1);
            const n = void 0 !== e.duration ? e.duration : this.getDurationToChapter(t),
                r = this.timeGroup.time(),
                a = t.start;
            let o = !1;
            return this.tween = this.timeGroup.anim.addTween({
                time: r
            }, {
                easeFunction: s,
                duration: n,
                time: [r, a],
                onStart: () => {
                    this.destroyed || this.timeGroup.trigger(i.EVENTS.ON_CHAPTER_INITIATED, {
                        player: this,
                        next: t
                    })
                },
                onDraw: e => {
                    if (this.destroyed) return;
                    let s = e.tweenProps.time.current;
                    this.timeGroup.time(s), e.keyframe.curvedT > .5 && !o && (o = !0, this.currentIndex = t.index, this.currentChapter = t, this.timeGroup.trigger(i.EVENTS.ON_CHAPTER_OCCURRED, {
                        player: this,
                        current: t
                    }))
                },
                onComplete: e => {
                    this.destroyed || (this.timeGroup.time(e.tweenProps.time.current), this.timeGroup.trigger(i.EVENTS.ON_CHAPTER_COMPLETED, {
                        player: this,
                        current: t
                    }), this.timeGroup.paused(!0), this.tween = null)
                }
            }), this.tween
        }
        getDurationToChapter(e) {
            const t = this.chapters[e.index - 1] || this.chapters[e.index + 1];
            return Math.abs(t.start - e.start)
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(15);
    e.exports = i.cancelAnimationFrame("update")
}, function(e, t, s) {
    "use strict";
    let i = !1,
        n = !1,
        r = [],
        a = -1;
    e.exports = {
        NUMBER_OF_FRAMES_TO_WAIT: 30,
        add: function(e) {
            if (n && e(), r.push(e), i) return;
            i = !0;
            let t = document.documentElement.scrollHeight,
                s = 0;
            const o = () => {
                let e = document.documentElement.scrollHeight;
                if (t !== e) s = 0;
                else if (s++, s >= this.NUMBER_OF_FRAMES_TO_WAIT) return void r.forEach((e => e()));
                t = e, a = requestAnimationFrame(o)
            };
            a = requestAnimationFrame(o)
        },
        reset() {
            cancelAnimationFrame(a), i = !1, n = !1, r = []
        }
    }
}, function(e, t, s) {
    "use strict";
    e.exports = {
        BaseComponent: s(8)
    }
}, function(e, t, s) {
    "use strict";
    class i {
        constructor() {
            this._events = {}
        }
        on(e, t) {
            return this._events[e] = this._events[e] || [], this._events[e].unshift(t), t
        }
        once(e, t) {
            const s = i => {
                this.off(e, s), void 0 !== i ? t(i) : t()
            };
            return this.on(e, s)
        }
        off(e, t) {
            if (!this.has(e)) return;
            if (!t) return void delete this._events[e];
            const s = this._events[e].indexOf(t); - 1 !== s && this._events[e].splice(s, 1)
        }
        trigger(e, t) {
            if (this.has(e))
                for (let s = this._events[e].length - 1; s >= 0; s--) void 0 !== t ? this._events[e][s](t) : this._events[e][s]()
        }
        has(e) {
            return e in this._events && 0 !== this._events[e].length
        }
        destroy() {
            this._events = null
        }
    }
    i.EventEmitterMicro = i, e.exports = i
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(16)),
        r = s(17);
    const a = s(2),
        o = s(40);
    class l extends n.default {
        constructor(e, t) {
            super(e, t), this.colorNav = this.aap.querySelector(".viewer-colornav"), this.sizeNav = this.aap.querySelector(".viewer-sizenav"), this.toggleOptions = this.aap.querySelectorAll("input"), this.viewerLabel = this.aap.querySelector(".viewer-label--3d-viewer"), this.viewerLabelFallback = this.aap.querySelector(".viewer-label--fallback"), this.viewerLabels = this.aap.querySelectorAll(".viewer-label-item"), this.sizeNav && (this.sizeNavBubble = this.aap.querySelector(".viewer-sizenav__bubble-inner")), this.aap.style.visibility = "hidden", this.aap.classList.add("visuallyhidden"), this.aap.setAttribute("aria-hidden", !0), this.viewerReady = !1, this.updateLabel = this.updateLabel.bind(this), this.ltr = getComputedStyle(this.colorNav).getPropertyValue("--ltr"), this.needsUpdate = !0, this.movementRateMultiplier = 1, this.velocityMultiplier = 2, this.target = 0, this.dragDrawId = -1, this.bubbleHintOffset = 0, this.aapOffset = 0, this.changeEvent = new Event("change"), this.inputStart = 0, this.swipeVelocity = 0, this._onStartDrag = this._onStartDrag.bind(this), this._onDrag = this._onDrag.bind(this), this._onStopDrag = this._onStopDrag.bind(this)
        }
        mounted() {
            super.mounted(), this._setupToggle(), this.sizeNav && (this._setupSizeToggle(), this._setupGesture())
        }
        reset() {
            let e = !1,
                t = !1;
            this.toggleOptions.forEach((s => {
                if (s.classList.contains("viewer-colornav-value") && s.dataset.defaultColor && !e) {
                    if (!s.classList.contains("viewer-colornav-value--fallback") && this.viewerReady || !this.viewerReady) {
                        s.checked = !0, e = !0;
                        const t = new Event("change");
                        s.dispatchEvent(t)
                    }
                } else if (s.classList.contains("viewer-sizenav-value") && s.dataset.defaultSize && !t) {
                    s.checked = !0, t = !0;
                    const e = new Event("change");
                    s.dispatchEvent(e)
                }
            }))
        }
        setAria() {
            if (this.viewerReady) {
                this.viewerLabel.setAttribute("aria-hidden", !1), this.viewerLabelFallback.setAttribute("aria-hidden", !0);
                const e = this.colorNav.querySelector("input:checked"),
                    t = this.sizeNav.querySelector("input:checked");
                this.colorNav.querySelectorAll("input").forEach((e => {
                    const s = JSON.parse(e.dataset.ariaMap);
                    if (s[t.dataset.viewerValue]) return void e.setAttribute("aria-label", s[t.dataset.viewerValue]);
                    const i = document.createElement("div"),
                        n = this.viewerLabel.querySelector(`[data-color-value=${e.dataset.viewerValue}][data-size-value=${t.dataset.viewerValue}]`);
                    if (n) {
                        i.innerHTML = n ? n.innerHTML : null;
                        i.querySelectorAll(".footnote").forEach((e => {
                            const t = e.querySelector("a");
                            e.replaceWith(` ${t.getAttribute("aria-label")}`)
                        })), e.setAttribute("aria-label", i.textContent), s[t.dataset.viewerValue] = i.textContent, e.setAttribute("data-aria-map", JSON.stringify(s))
                    }
                    i.remove()
                }));
                this.sizeNav.querySelectorAll("input").forEach((t => {
                    const s = JSON.parse(t.dataset.ariaMap);
                    if (s[e.dataset.viewerValue]) return void t.setAttribute("aria-label", s[e.dataset.viewerValue]);
                    const i = document.createElement("div"),
                        n = this.viewerLabel.querySelector(`[data-color-value=${e.dataset.viewerValue}][data-size-value=${t.dataset.viewerValue}]`);
                    if (n) {
                        i.innerHTML = n ? n.innerHTML : null;
                        i.querySelectorAll(".footnote").forEach((e => {
                            const t = e.querySelector("a");
                            e.replaceWith(` ${t.getAttribute("aria-label")}`)
                        })), t.setAttribute("aria-label", i.textContent), s[e.dataset.viewerValue] = i.textContent, t.setAttribute("data-aria-map", JSON.stringify(s))
                    }
                    i.remove()
                }))
            } else {
                this.viewerLabel.setAttribute("aria-hidden", !0), this.viewerLabelFallback.setAttribute("aria-hidden", !1);
                this.colorNav.querySelectorAll("input").forEach((e => {
                    if (e.dataset.fallbackAriaSet) return;
                    const t = document.createElement("div"),
                        s = this.viewerLabelFallback.querySelector(`[data-color-value=${e.dataset.viewerValue}]`);
                    if (s) {
                        t.innerHTML = s ? s.innerHTML : null;
                        t.querySelectorAll(".footnote").forEach((e => {
                            const t = e.querySelector("a");
                            e.replaceWith(` ${t.getAttribute("aria-label")}`)
                        })), e.setAttribute("aria-label", t.textContent), e.setAttribute("data-fallback-aria-set", !0)
                    }
                    t.remove()
                }))
            }
        }
        loadEnhanced() {
            this.viewerReady = !0, this.aap.classList.add("viewer-loaded"), this.resetAll()
        }
        loadFallback() {
            this.viewerReady = !1, this.aap.classList.remove("viewer-loaded"), this.resetAll(), this.setAria()
        }
        resetAll() {
            this.needsUpdate = !0, this.aap.style.removeProperty("visibility"), this.aap.classList.remove("visuallyhidden"), this.aap.removeAttribute("aria-hidden"), this.reset(), this.destroy().then((() => {
                this.isEnhanced() && (this.introduce = this.anim.createTimeGroup(), this.dismiss = this.anim.createTimeGroup(), this.initEnhanced(), this.isAnimating = !1)
            }))
        }
        initEnhanced() {
            document.fonts.ready.then((() => {
                this._getBounds(), this._setupTimeGroups(), this._setupScrollGroup(), this.needsUpdate = !1, this.destroyed = !1
            }))
        }
        updateLabel() {
            const e = {
                size: null,
                color: null
            };
            this.toggleOptions.forEach((t => {
                t.checked && (t.classList.contains("viewer-colornav-value") ? e.color = t.dataset.viewerValue : e.size = t.dataset.viewerValue)
            })), this.viewerLabels.forEach((t => {
                this.viewerReady ? t.dataset.sizeValue === e.size && t.dataset.colorValue === e.color ? t.classList.add("active") : t.classList.remove("active") : t.dataset.colorValue === e.color ? t.classList.add("active") : t.classList.remove("active")
            })), this.viewerReady && this.setAria()
        }
        _setupToggle() {
            this.toggleOptions.forEach((e => {
                e.addEventListener("change", this.updateLabel)
            }))
        }
        _setupSizeToggle() {
            this.sizeNav.querySelectorAll("input").forEach(((e, t) => {
                e.addEventListener("change", (() => {
                    this.sizeNav.style.setProperty("--bubble-position", `${e.style.getPropertyValue("--option-offset")}`), this.sizeNav.style.setProperty("--bubble-width", `${e.style.getPropertyValue("--option-width")}`), e.checked && (this.selected = e, this.selectedIndex = t)
                }))
            }))
        }
        _setupGesture() {
            this.sizeOptions = this.sizeNav.querySelectorAll("input"), this.sizeNav.addEventListener("touchstart", this._onStartDrag), this.sizeOptions.forEach((e => {
                e.addEventListener("change", (() => {
                    this._onStopDrag()
                }))
            }))
        }
        _onStartDrag(e) {
            switch (!0) {
                case !e.touches && 1 !== e.which:
                case this.sizeNav.disabled:
                    return
            }
            this.lastInteractionEvent = e, this.swipeVelocity = 0, this.inputStart = e.touches[0].screenX, window.addEventListener("touchmove", this._onDrag, {
                passive: !1
            }), window.addEventListener("touchend", this._onStopDrag)
        }
        _onDrag(e) {
            e.cancelable && e.preventDefault();
            const t = e.touches[0].screenX,
                s = t - this.inputStart;
            this.inputStart = t, this.target += s * this.movementRateMultiplier, this.swipeVelocity = s * this.velocityMultiplier, this.nextIndex = "1" === this.ltr ? this.selectedIndex + 1 : this.selectedIndex - 1, this.prevIndex = "1" === this.ltr ? this.selectedIndex - 1 : this.selectedIndex + 1, o(this.dragDrawId), this.dragDrawId = a((() => {
                (this.target > 56 || this.swipeVelocity > 50) && this.sizeOptions[this.nextIndex] ? (this.sizeOptions[this.nextIndex].checked = !0, this.sizeOptions[this.nextIndex].dispatchEvent(this.changeEvent), this.target = 0, this.bubbleHintOffset = 0) : (this.target < -56 || this.swipeVelocity < -50) && this.sizeOptions[this.prevIndex] ? (this.sizeOptions[this.prevIndex].checked = !0, this.sizeOptions[this.prevIndex].dispatchEvent(this.changeEvent), this.target = 0, this.bubbleHintOffset = 0) : (this.target > 0 && this.sizeOptions[this.nextIndex] || this.target < 0 && this.sizeOptions[this.prevIndex]) && (this.bubbleHintOffset = this.target / 56 * 4, this.aapOffset = 0, this.sizeNav.style.setProperty("--aap-offset", `${this.aapOffset}`)), this.sizeNav.style.setProperty("--bubble-hint-position", `${this.bubbleHintOffset}`)
            }))
        }
        _onStopDrag(e) {
            window.removeEventListener("touchmove", this._onDrag), window.removeEventListener("touchend", this._onStopDrag), this.lastInteractionEvent = e, this.target = 0, this.swipeVelocity = 0, this.inputStart = 0, this.bubbleHintOffset = 0, this.aapOffset = 0, o(this.dragDrawId), this.dragDrawId = a((() => {
                this.sizeNav.style.setProperty("--bubble-hint-position", `${this.bubbleHintOffset}`), this.sizeNav.style.setProperty("--aap-offset", `${this.aapOffset}`)
            }))
        }
        _getBounds() {
            if (this.viewerReady && (this.sizeNav.style.position = "relative", this.sizeNav.style.width = "auto"), this.colorNav.style.width = "auto", this.colorNavBounds = this.colorNav.getBoundingClientRect(), this.viewerReady && (this.sizeNavBounds = this.sizeNav.getBoundingClientRect()), this.colorNav.style.setProperty("--colornav-width", `${this.colorNavBounds.width}px`), this.viewerReady) {
                this.sizeNav.style.setProperty("--sizenav-width", `${this.sizeNavBounds.width}px`);
                const e = this.sizeNav.querySelectorAll("input");
                e.forEach((e => {
                    "1" === this.ltr ? e.style.setProperty("--option-offset", `${e.parentNode.offsetLeft}px`) : e.style.setProperty("--option-offset", Math.floor(e.parentNode.parentNode.getBoundingClientRect().right - e.parentNode.getBoundingClientRect().right) - 1 + "px"), e.style.setProperty("--option-width", `${e.parentNode.offsetWidth}px`)
                })), this.sizeNav.style.setProperty("--bubble-position", `${e[0].style.getPropertyValue("--option-offset")}`), this.sizeNav.style.setProperty("--bubble-width", `${e[0].style.getPropertyValue("--option-width")}`), this.sizeNav.style.position = "absolute", this.reset()
            }
        }
        _setupTimeGroups() {
            if (this.dismiss.name = `AAP 3D Viewer: Dismiss - ${this.aap.id}`, this.viewerReady ? (this.dismiss.addKeyframe(this.sizeNavBubble, {
                    start: 0,
                    end: .25,
                    opacity: [1, 0],
                    easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
                }), this.dismiss.addKeyframe(this.viewerLabel, {
                    start: 0,
                    end: .25,
                    opacity: [1, 0],
                    easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
                })) : this.dismiss.addKeyframe(this.viewerLabelFallback, {
                    start: 0,
                    end: .25,
                    opacity: [1, 0],
                    easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
                }), this.toggleOptions.forEach((e => {
                    this.dismiss.addKeyframe(e.parentNode, {
                        start: 0,
                        end: .25,
                        opacity: [1, 0],
                        easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
                    })
                })), this.viewerReady ? (this.dismiss.addKeyframe(this.colorNav, {
                    start: .25,
                    end: .5,
                    width: [`${this.colorNavBounds.width}px`, "css(--aap-min-height)"],
                    x: [`(-7px - ${.5*this.sizeNavBounds.width}px) * css(--ltr)`, 0],
                    easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
                }), this.dismiss.addKeyframe(this.sizeNav, {
                    start: .25,
                    end: .5,
                    width: [`${this.sizeNavBounds.width}px`, "css(--aap-min-height)"],
                    x: [`(7px + ${this.colorNavBounds.width-this.sizeNavBounds.width+.5*this.sizeNavBounds.width}px) * css(--ltr)`, 0],
                    easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
                }), this.dismiss.addKeyframe(this.sizeNav, {
                    start: .5,
                    end: 1,
                    scale: [1, .01],
                    easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
                })) : this.dismiss.addKeyframe(this.colorNav, {
                    start: 0,
                    end: .5,
                    width: [`${this.colorNavBounds.width}px`, "css(--aap-min-height)"],
                    easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
                }), this.dismiss.addKeyframe(this.colorNav, {
                    start: .5,
                    end: 1,
                    scale: [1, .01],
                    easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
                }), this.dismiss.on("complete", (() => {
                    this.isAnimating = !1, this.aap.classList.add("inactive"), this.inRange && (this.isAnimating = !0, this.introduceTimeline())
                })), this.introduce.name = `AAP 3D Viewer: Introduce - ${this.aap.id}`, (0, r.setDefaultIntroduceKeyframes)(this.introduce, this.aap), this.introduce.addKeyframe(this.colorNav, {
                    start: 0,
                    end: .8,
                    scale: [.01, 1],
                    easeFunction: r.AAP_EASE_FUNCTIONS.SPRING
                }), this.viewerReady) {
                this.introduce.addKeyframe(this.sizeNav, {
                    start: 0,
                    end: .8,
                    scale: [.01, 1],
                    easeFunction: r.AAP_EASE_FUNCTIONS.SPRING
                }), this.introduce.addKeyframe(this.colorNav, {
                    start: .7,
                    end: 1.3,
                    width: ["css(--aap-min-height)", `${this.colorNavBounds.width}px`],
                    x: [0, `(-7px - ${.5*this.sizeNavBounds.width}px) * css(--ltr)`],
                    easeFunction: r.AAP_EASE_FUNCTIONS.SPRING
                }), this.introduce.addKeyframe(this.sizeNav, {
                    start: .7,
                    end: 1.3,
                    width: ["css(--aap-min-height)", `${this.sizeNavBounds.width}px`],
                    x: [0, `(7px + ${this.colorNavBounds.width-this.sizeNavBounds.width+.5*this.sizeNavBounds.width}px) * css(--ltr)`],
                    easeFunction: r.AAP_EASE_FUNCTIONS.SPRING
                });
                const e = .05 * (this.colorNav.querySelectorAll("input").length + 1);
                this.introduce.addKeyframe(this.sizeNavBubble, {
                    start: .7 + e,
                    end: 1.3 + e,
                    opacity: [0, 1],
                    easeFunction: "easeOutQuint"
                })
            } else this.introduce.addKeyframe(this.colorNav, {
                start: .7,
                end: 1.3,
                width: ["css(--aap-min-height)", `${this.colorNavBounds.width}px`],
                easeFunction: r.AAP_EASE_FUNCTIONS.SPRING
            });
            this.toggleOptions.forEach(((e, t) => {
                const s = .05 * (t + 1);
                this.introduce.addKeyframe(e.parentNode, {
                    start: .7 + s,
                    end: 1.5 + s,
                    opacity: [0, 1],
                    scale: [.5, 1],
                    easeFunction: "spring(100, 1, 10, 0)"
                })
            })), this.viewerReady ? this.introduce.addKeyframe(this.viewerLabel, {
                start: 1,
                end: 1.6,
                opacity: [0, 1],
                easeFunction: "easeOutSin"
            }) : this.introduce.addKeyframe(this.viewerLabelFallback, {
                start: 1,
                end: 1.6,
                opacity: [0, 1],
                easeFunction: "easeOutSin"
            }), this.introduce.on("complete", (() => {
                this.isAnimating = !1, this.inRange || (this.isAnimating = !0, this.dismissTimeline())
            })), requestAnimationFrame((() => {
                this.dismiss.progress(1)
            }))
        }
        destroy() {
            return this.sizeNav && (this.sizeNav.style.position = "relative"), super.destroy()
        }
    }
    t.default = l
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(16)),
        r = s(17);
    class a extends n.default {
        constructor(e, t) {
            super(e, t), this.background = this.aap.querySelectorAll(".all-access-pass__background")[0], this.dots = this.aap.querySelectorAll(".dotnav-items .dotnav-link"), this.paddleNavContainer = this.aap.querySelector(".paddlenav"), this.paddleNavPrevious = this.paddleNavContainer.querySelector(".paddlenav-arrow-previous"), this.paddleNavNext = this.paddleNavContainer.querySelector(".paddlenav-arrow-next"), this.viewerLabel = this.aap.querySelector(".viewer-label--standard-gallery"), this.viewerLabels = this.viewerLabel.querySelectorAll(".viewer-label-item"), this.activeLabel = this.viewerLabel.querySelector(".viewer-label-item.active"), this.needsUpdate = !0, this.preload = "preload" in this.aap.dataset, this.aapLevel = this.aap.dataset.aapLevel, this.aap.style.display = "none", this.getActiveNumber = this.getActiveNumber.bind(this), this.updateLabel = this.updateLabel.bind(this)
        }
        mounted() {
            super.mounted(), this.isEnhanced() && "1" === this.aapLevel && this.preload && this.initEnhanced()
        }
        initEnhanced() {
            this._getBounds(), this._setupTimeGroups(), this._setupScrollGroup(), this.needsUpdate = !1, this.destroyed = !1
        }
        loadEnhanced() {
            this.resetAll()
        }
        resetAll() {
            this.needsUpdate = !0, this.aap.style.display = "flex", this.destroy().then((() => {
                this.isEnhanced() && (this.introduce = this.anim.createTimeGroup(), this.dismiss = this.anim.createTimeGroup(), this.isAnimating = !1, this.initEnhanced())
            }))
        }
        getActiveNumber() {
            return [...this.dots].find((e => e.classList.contains("current"))).dataset.itemNumber
        }
        updateLabel() {
            requestAnimationFrame((() => {
                this.activeNumber = this.getActiveNumber(), this.activeLabel && this.activeLabel.classList.remove("active"), this.activeLabel = [...this.viewerLabels].find((e => e.dataset.itemNumber === this.activeNumber)), this.activeLabel && this.activeLabel.classList.add("active")
            }))
        }
        _getBounds() {
            this.background.style.transform = "scale(1)", this.backgroundBounds = this.background.getBoundingClientRect()
        }
        _setupTimeGroups() {
            this.dismiss.name = `AAP Standard Gallery: Dismiss - ${this.aap.id}`, this.dismiss.addKeyframe(this.viewerLabel, {
                start: 0,
                end: .25,
                opacity: [1, 0],
                easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
            }), this.dismiss.addKeyframe(this.paddleNavContainer, {
                start: 0,
                end: .25,
                opacity: [1, 0]
            }), this.dots.forEach((e => {
                this.dismiss.addKeyframe(e, {
                    start: 0,
                    end: .25,
                    opacity: [1, 0],
                    easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
                })
            })), this.dismiss.addKeyframe(this.background, {
                start: .25,
                end: .5,
                width: [`${this.backgroundBounds.width}px`, "css(--aap-min-height)"],
                easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
            }), this.dismiss.addKeyframe(this.background, {
                start: .5,
                end: 1,
                scale: [1, .01],
                easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
            }), this.dismiss.on("complete", (() => {
                this.isAnimating = !1, this.aap.classList.add("inactive"), this.inRange && (this.isAnimating = !0, this.introduceTimeline())
            })), this.introduce.name = `AAP Standard Gallery: Introduce - ${this.aap.id}`, (0, r.setDefaultIntroduceKeyframes)(this.introduce, this.aap, this.background), this.introduce.addKeyframe(this.background, {
                start: .7,
                end: 1.3,
                width: ["css(--aap-min-height)", `${this.backgroundBounds.width}px`],
                easeFunction: r.AAP_EASE_FUNCTIONS.SPRING
            }), this.introduce.addKeyframe(this.paddleNavContainer, {
                start: .8,
                end: 1.4,
                opacity: [0, 1]
            }), this.dots.forEach(((e, t) => {
                const s = .05 * (t + 1);
                this.introduce.addKeyframe(e, {
                    start: .8 + s,
                    end: 1.6 + s,
                    opacity: [0, 1],
                    scale: [.5, 1],
                    easeFunction: "spring(100, 1, 10, 0)"
                })
            })), this.introduce.addKeyframe(this.viewerLabel, {
                start: 1,
                end: 1.6,
                opacity: [0, 1],
                easeFunction: "easeOutSin"
            }), this.introduce.on("complete", (() => {
                this.isAnimating = !1, this.inRange || (this.isAnimating = !0, this.dismissTimeline())
            })), requestAnimationFrame((() => {
                this.dismiss.progress(1)
            }))
        }
    }
    t.default = a
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(164)),
        r = i(s(165)),
        a = i(s(166));
    t.default = {
        PageOverlay: {
            ClassNames: ["modal-page-overlay"]
        },
        FullBleed: {
            ClassNames: ["modal-full-bleed"]
        },
        Open: {
            Document: {
                ClassNames: ["has-modal"]
            },
            Container: {
                ClassNames: ["modal-open"]
            }
        },
        Close: {
            Selector: "[data-modal-close]"
        },
        Elements: {
            container: {
                Attributes: {
                    class: "modal"
                },
                Template: r.default
            },
            contentContainer: {
                Selector: "[data-modal-element-content-container]"
            },
            closeButton: {
                Attributes: {
                    class: "modal-close-button",
                    "data-modal-close": "",
                    "aria-label": "Close"
                },
                ParentSelector: "[data-modal-close-button-parent]",
                Template: a.default
            },
            closeIcon: {
                Attributes: {
                    class: "modal-close-icon",
                    "data-modal-close": ""
                }
            }
        },
        DialogRole: {
            Selector: "[data-modal-element-overlay]",
            Attributes: {
                "aria-modal": "true",
                role: "dialog",
                tabindex: "-1",
                "aria-hidden": "true"
            }
        },
        Keyboard: {
            close: {
                keys: [n.default.ESCAPE]
            },
            open: {
                keys: []
            }
        },
        Events: {
            CONTENT_APPENDED: "contentappended",
            RENDERED: "rendered",
            WILLOPEN: "willopen",
            OPEN: "open",
            WILLCLOSE: "willclose",
            CLOSE: "close",
            CONTENT_REMOVED: "contentremoved"
        }
    }
}, function(e, t, s) {
    "use strict";
    const i = s(12).EventEmitterMicro,
        n = {};
    "undefined" != typeof window && (n.draw = s(2), n.cancelDraw = s(40));
    e.exports = class extends i {
        constructor(e) {
            super(), this.index = e.index, this.el = e.el, this._x = 0, this._y = 0, this._opacity = 0, this._width = 0, this._height = 0, this._zIndex = 0, this.id = this.el.getAttribute("id"), this.analyticsId = this.el.getAttribute("data-analytics-gallery-item-id") || this.el.getAttribute("id"), this.applyDraw = this.applyDraw.bind(this), this.measure()
        }
        measure() {
            const e = getComputedStyle(this.el);
            this._width = this.el.clientWidth, this._height = this.el.clientHeight, this._zIndex = parseInt(e.getPropertyValue("z-index")), this._opacity = parseFloat(e.getPropertyValue("opacity"))
        }
        select() {
            this.el.classList.add("current"), this.trigger("select", this)
        }
        deselect() {
            this.el.classList.remove("current"), this.trigger("deselect", this)
        }
        progress(e) {}
        needsRedraw() {
            n.cancelDraw(this._rafID), this._rafID = n.draw(this.applyDraw, !0)
        }
        applyDraw() {
            this.el.style.zIndex = this._zIndex, this.el.style.opacity = this._opacity, this.el.style.transform = `translate(${this._x}px, ${this._y}px)`
        }
        get height() {
            return this._height
        }
        set height(e) {
            this._height = e, this.needsRedraw()
        }
        get width() {
            return this._width
        }
        set width(e) {
            this._width = e, this.needsRedraw()
        }
        get x() {
            return this._x
        }
        set x(e) {
            this._x = e, this.needsRedraw()
        }
        get y() {
            return this._y
        }
        set y(e) {
            this._y = e, this.needsRedraw()
        }
        get opacity() {
            return this._opacity
        }
        set opacity(e) {
            this._opacity = e, this.needsRedraw()
        }
        get zIndex() {
            return this._zIndex
        }
        set zIndex(e) {
            this._zIndex = e, this.needsRedraw()
        }
    }
}, function(e, t, s) {
    "use strict";
    e.exports = {
        createItems(e) {
            if (this._items.length) this.itemsCreated(e);
            else {
                if (!this.model.Item.ConstructorFunction) throw new ReferenceError("MixinGallery::AutoCreateItems - this.model.Item.ConstructorFunction is null");
                if (0 === this._items.length) {
                    this._items = [], Array.from(this.el.querySelectorAll(this.model.Item.Selector)).forEach(((e, t) => {
                        const s = new this.model.Item.ConstructorFunction({
                            el: e,
                            index: t
                        });
                        this._items.push(s)
                    }));
                    let e = this._items[this._items.length - 1];
                    for (let t = 0; t < this._items.length; t++) {
                        const s = this._items[t];
                        s.prev = e, s.next = this._items[t + 1], e = s
                    }
                    e.next = this._items[0]
                }
                this.itemsCreated(e)
            }
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(27),
        n = s(42),
        r = "data-original-",
        a = "tabindex",
        o = function(e, t) {
            var s = e.getAttribute(r + t);
            s || (s = e.getAttribute(t) || "", e.setAttribute(r + t, s))
        };
    e.exports = function(e, t) {
        if (n.isFocusableElement(e, t)) o(e, a), e.setAttribute(a, "-1");
        else
            for (var s = n.getTabbableElements(e, t), r = s.length; r--;) o(s[r], a), s[r].setAttribute(a, "-1");
        o(e, i.HIDDEN), e.setAttribute(i.HIDDEN, "true")
    }
}, function(e, t, s) {
    "use strict";
    var i = s(187),
        n = s(27),
        r = "data-original-",
        a = "tabindex",
        o = function(e, t) {
            var s = e.getAttribute(r + t);
            null !== s && ("" === s ? i(e, t) : e.setAttribute(t, s), i(e, r + t))
        };
    e.exports = function(e) {
        o(e, a), o(e, n.HIDDEN);
        for (var t = e.querySelectorAll(`[${r+a}]`), s = t.length; s--;) o(t[s], a)
    }
}, function(e, t, s) {
    "use strict";
    e.exports = {
        itemsCreated() {
            if (!this.model.InitialIndexFromHashLink.Enabled || !this._items) return;
            const e = location.hash.slice(1);
            if (!e) return;
            const t = this._items.findIndex((t => {
                let {
                    id: s
                } = t;
                return s === e
            }));
            t > -1 && (this.currentIndex = t, this.model.InitialIndexFromHashLink.ScrollReset && this._resetHorizontalScrollPosition())
        },
        _resetHorizontalScrollPosition(e) {
            const t = e || this.el;
            0 !== t.scrollLeft ? t.scrollLeft = 0 : t !== document.body && this._resetHorizontalScrollPosition(t.parentNode)
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.pluginCache = t.default = void 0;
    var n = i(s(196)),
        r = i(s(197)),
        a = i(s(10)),
        o = i(s(208));
    const l = t.pluginCache = {},
        h = [];
    let d = 1;
    class c extends n.default {
        constructor() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            super(), this.el = e.el || document.createElement("video"), this.id = e.id || this.el.id || this.el.dataset.inlineMediaId || "inlineMedia-" + d++;
            const t = (e.plugins || []).concat(o.default);
            this._initPlugins(t, e), h.push(this)
        }
        async load(e) {
            for (const t of this.plugins)
                if ("function" == typeof t.load) return t.load(e)
        }
        abortLoad() {
            for (const e of this.plugins)
                if ("function" == typeof e.abortLoad) {
                    e.abortLoad();
                    break
                }
        }
        async play() {
            for (const e of this.plugins)
                if ("function" == typeof e.play) return e.play()
        }
        get src() {
            for (const e of this.plugins)
                if (e.src) return e.src;
            return ""
        }
        get playbackState() {
            for (const e of this.plugins) {
                const t = e.playbackState;
                if (void 0 !== t) return t
            }
        }
        get loadingState() {
            for (const e of this.plugins) {
                const t = e.loadingState;
                if (void 0 !== t) return t
            }
        }
        _initPlugins(e, t) {
            this.plugins = [], this.pluginMap = new Map;
            for (let s of e) {
                if ("string" == typeof s) {
                    if (!l[s]) throw new Error(`Trying to use undefined Plugin named: ${s} . Ensure you call Media.addPlugin() first!`);
                    s = l[s]
                }
                if (!1 !== s.isSupported) {
                    const e = new s(Object.assign({
                        media: this
                    }, t));
                    this.plugins.push(e), this.pluginMap.set(s, e)
                }
            }
            this.trigger(a.default.MOUNTED)
        }
        destroy() {
            if (!this._destroyed) {
                for (const e of this.plugins) "function" == typeof e.destroy && e.destroy();
                super.destroy(), h.splice(h.indexOf(this), 1), this._destroyed = !0
            }
        }
        static get medias() {
            return h
        }
        static addPlugin(e, t) {
            l[e] = t
        }
        static async autoInitialize() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (0, r.default)(e, t)
        }
    }
    t.default = c
}, function(e, t, s) {
    "use strict";

    function i(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
            s = new WeakMap;
        return (i = function(e) {
            return e ? s : t
        })(e)
    }

    function n(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var s = i(t);
        if (s && s.has(e)) return s.get(e);
        var n = {
                __proto__: null
            },
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
            if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
            }
        return n.default = e, s && s.set(e, n), n
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    const r = {
        AnimLoad: async () => Promise.resolve().then((() => n(s(97)))),
        AnimPlay: async () => Promise.resolve().then((() => n(s(99)))),
        FeatureObserver: async () => Promise.resolve().then((() => n(s(200)))),
        LoadTimeout: async () => Promise.resolve().then((() => n(s(203)))),
        PlayPauseButton: async () => Promise.resolve().then((() => n(s(204)))),
        ViewportSource: async () => Promise.resolve().then((() => n(s(100))))
    };
    t.default = r
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(98)),
        r = i(s(28)),
        a = i(s(6));
    const o = {
        start: "t - 200vh",
        end: "b + 100vh"
    };
    class l extends a.default {
        constructor(e) {
            super(e), this._anim = e.anim, this._container = e.container || this.media.el.parentElement, this._scrollGroup = this.options.scrollGroup || this._anim.getGroupForTarget(this._container || this.media.el), this._initialize()
        }
        _initialize() {
            this._onLoadKeyframeEnter = this._onLoadKeyframeEnter.bind(this), this._onLoadKeyframeExit = this._onLoadKeyframeExit.bind(this);
            const e = (0, r.default)(this.media.el.dataset, this.options, "loadKeyframe", o);
            e.event || (e.event = "inline-media-load-kf"), this._loadKeyframe = this._scrollGroup.addKeyframe(this.media.el, e), this._loadKeyframe.controller.on(`${this._loadKeyframe.event}:enter`, this._onLoadKeyframeEnter), this._loadKeyframe.controller.on(`${this._loadKeyframe.event}:exit`, this._onLoadKeyframeExit)
        }
        get loadKeyframe() {
            return this._loadKeyframe
        }
        async _onLoadKeyframeEnter(e) {
            try {
                await this.media.load(), this._loaded = !0
            } catch (e) {
                (0, n.default)("AnimLoad: Load error occured")
            }
        }
        _onLoadKeyframeExit(e) {}
        destroy() {
            this._loadKeyframe.controller.off(`${this._loadKeyframe.event}:enter`, this._onLoadKeyframeEnter), this._loadKeyframe.controller.off(`${this._loadKeyframe.event}:exit`, this._onLoadKeyframeExit), super.destroy()
        }
    }
    t.default = l
}, function(e, t, s) {
    "use strict";
    e.exports = s(198)("warn")
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(10)),
        r = i(s(28)),
        a = i(s(6));
    const o = {
        start: "t - 100vh",
        end: "b"
    };
    class l extends a.default {
        constructor(e) {
            super(e), this._anim = e.anim, this._container = e.container || this.media.el.parentElement, this._scrollGroup = this.options.scrollGroup || this._anim.getGroupForTarget(this._container || this.media.el), this._initialize()
        }
        _initialize() {
            this._onPlayKeyframeEnter = this._onPlayKeyframeEnter.bind(this), this._onPlayKeyframeExit = this._onPlayKeyframeExit.bind(this);
            const e = this.media.el.dataset;
            if (this._autoPlayWithReducedMotion = (0, r.default)(e, this.options, "autoPlayWithReducedMotion", !1), !this._autoPlayWithReducedMotion && l.prefersReducedMotion) return;
            this._pauseOnExit = (0, r.default)(e, this.options, "pauseOnExit", !1), this._resetOnExit = (0, r.default)(e, this.options, "resetOnExit", !1);
            const t = (0, r.default)(e, this.options, "playKeyframe", o);
            t.event || (t.event = "inline-media-play-kf"), this._playKeyframe = this._scrollGroup.addKeyframe(this.media.el, t), this._playKeyframe.controller.on(`${this._playKeyframe.event}:enter`, this._onPlayKeyframeEnter), this._playKeyframe.controller.on(`${this._playKeyframe.event}:exit`, this._onPlayKeyframeExit), this._onLoadStart = this._onLoadStart.bind(this), this.media.on(n.default.MEDIA_LOAD_START, this._onLoadStart)
        }
        _onLoadStart() {
            this._loaded = !1
        }
        async _onPlayKeyframeEnter(e) {
            if (this._inFrame = !0, !this._paused && (this._loaded || (await this.media.load(), this._loaded = !0), this._inFrame)) try {
                await this.media.play()
            } catch (e) {}
        }
        _onPlayKeyframeExit(e) {
            this._inFrame = !1, this._loaded && this.media.el.paused && !this.media.el.ended ? this._paused = !0 : this._pauseOnExit && (this._paused = !1, this.media.el.pause()), this._loaded && this._resetOnExit && (this.media.el.currentTime = 0)
        }
        get playKeyframe() {
            return this._playKeyframe
        }
        destroy() {
            this._playKeyframe.controller.off(`${this._playKeyframe.event}:enter`, this._onPlayKeyframeEnter), this._playKeyframe.controller.off(`${this._playKeyframe.event}:exit`, this._onPlayKeyframeExit), this.media.off(n.default.MEDIA_LOAD_START, this._onLoadStart), super.destroy()
        }
        static get prefersReducedMotion() {
            return window.matchMedia("(prefers-reduced-motion: reduce)").matches
        }
    }
    t.default = l
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(29)),
        r = i(s(6)),
        a = i(s(101)),
        o = i(s(206));
    class l extends r.default {
        constructor(e) {
            super(e), this._cachedPlaying = null, this._initialize()
        }
        _initialize() {
            this._onBreakpointChange = this._onBreakpointChange.bind(this);
            const e = Object.assign({
                callback: this._onBreakpointChange
            }, this.options);
            this._breakpointDetect = e.anim ? new o.default(e) : new a.default(e), this._currentTime = 0;
            const t = this.media.el.dataset;
            this._basePath = this.options.basePath || t.inlineMediaBasepath || "./", this._onBreakpointChange()
        }
        _onBreakpointChange() {
            this._currentBreakpoint = this._breakpointDetect.breakpoint;
            const e = window.devicePixelRatio > 1 ? `${this._currentBreakpoint}_2x` : this._currentBreakpoint,
                t = `${this._basePath}${e}.mp4`;
            this._swapSrc(t)
        }
        get src() {
            return this._src
        }
        async _swapSrc(e) {
            if (this._src = e, this.media.loadingState === n.default.EMPTY) return;
            const t = null !== this._cachedPlaying ? this._cachedPlaying : !this.media.el.paused;
            return this.media.loadingState === n.default.LOADED && (this._currentTime = this.media.el.currentTime), this._cachedPlaying = t, await this.media.load(`${e}#t=${this._currentTime}`), this._cachedPlaying = null, t ? this.media.play() : Promise.resolve()
        }
        destroy() {
            this._breakpointDetect.destroy(), super.destroy()
        }
    }
    t.default = l
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(205));
    t.default = class {
        constructor(e) {
            this._breakpoints = e.breakpoints || n.default, this.options = e, this._initialize()
        }
        _initialize() {
            this._updateBreakpoint = this._updateBreakpoint.bind(this), this._callback = this.options.callback, this._mediaQueries = Object.keys(this._breakpoints).map((e => window.matchMedia(`(min-width: ${this._breakpoints[e]}px)`))), this._addEventListeners(), this._updateBreakpoint()
        }
        _addEventListeners() {
            for (const e of this._mediaQueries) e.addListener(this._updateBreakpoint)
        }
        _removeEventListeners() {
            for (const e of this._mediaQueries) e.removeListener(this._updateBreakpoint)
        }
        _updateBreakpoint() {
            const e = Object.keys(this._breakpoints);
            let t = e[0];
            for (let s = 1; s < e.length; s++) {
                if (!this._mediaQueries[s].matches) break;
                t = e[s]
            }
            let s = !1;
            this._currentBreakpoint && this._currentBreakpoint !== t && (s = !0), this._currentBreakpoint = t, s && this._callback()
        }
        get breakpoint() {
            return this._currentBreakpoint
        }
        destroy() {
            this._removeEventListeners()
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = {
        LOAD_START: "loadstart",
        LOADED_DATA: "loadeddata",
        LOADED_METADATA: "loadedmetadata",
        CAN_PLAY: "canplay",
        CAN_PLAY_THROUGH: "canplaythrough",
        PLAY: "play",
        PLAYING: "playing",
        PAUSE: "pause",
        WAITING: "waiting",
        SEEKING: "seeking",
        SEEKED: "seeked",
        ERROR: "error",
        ENDED: "ended",
        ABORT: "abort"
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(98)),
        r = i(s(23)),
        a = i(s(29)),
        o = i(s(10)),
        l = i(s(102)),
        h = i(s(6));
    const d = l.default.CAN_PLAY_THROUGH,
        {
            HAVE_NOTHING: c,
            HAVE_CURRENT_DATA: u,
            NETWORK_EMPTY: m
        } = HTMLMediaElement;
    class p extends h.default {
        constructor(e) {
            super(e), this._loadCompleteEvent = e.loadCompleteEvent || d, this._onLoaded = this._onLoaded.bind(this), this._onError = this._onError.bind(this)
        }
        mounted() {
            "none" !== this.media.el.preload && this.media.src && (async () => {
                try {
                    await this.media.load(this.media.src)
                } catch (e) {
                    (0, n.default)(`auto load of ${this.media.src} failed or was aborted with err:${e}`)
                }
            })()
        }
        async load(e) {
            if (void 0 === e && this.media.src && (e = this.media.src), !e) throw new Error("No Media src was specified, can not fullfill load() request");
            return e !== this._currentLoadUrl && (this.media.trigger(o.default.MEDIA_LOAD_START), this._currentLoadUrl = e, this._pendingPromise = new Promise(((t, s) => {
                this._resolvePendingPromise = () => {
                    this._resolvePendingPromise = null, this._rejectPendingPromise = null, t()
                }, this._rejectPendingPromise = () => {
                    this._resolvePendingPromise = null, this._rejectPendingPromise = null, s()
                }, this.media.el.addEventListener(this._loadCompleteEvent, this._onLoaded), r.default.browser.firefox && this._loadCompleteEvent === l.default.CAN_PLAY_THROUGH && this.media.el.addEventListener(l.default.CAN_PLAY, this._onLoaded), this.media.el.addEventListener(l.default.ERROR, this._onError), this.media.el.addEventListener(l.default.ABORT, this._onError), this.media.el.src = e, this.media.el.load()
            }))), this._pendingPromise
        }
        _clearLoadListeners() {
            this.media.el.removeEventListener(this._loadCompleteEvent, this._onLoaded), this.media.el.removeEventListener(l.default.CAN_PLAY, this._onLoaded), this.media.el.removeEventListener(l.default.ERROR, this._onError), this.media.el.removeEventListener(l.default.ABORT, this._onError)
        }
        _onLoaded() {
            this._clearLoadListeners(), this.media.trigger(o.default.LOADING_STATE_CHANGE), this.media.trigger(o.default.MEDIA_LOAD_COMPLETE), this._resolvePendingPromise()
        }
        _onError() {
            this._clearLoadListeners(), this.media.trigger(o.default.MEDIA_LOAD_ERROR), this.media.trigger(o.default.LOADING_STATE_CHANGE), this._rejectPendingPromise()
        }
        abortLoad() {
            this._rejectPendingPromise && this._rejectPendingPromise()
        }
        get loadingState() {
            return this.media.el.error ? a.default.ERROR : this.media.el.networkState === m && this.media.el.readyState === c ? a.default.EMPTY : this.media.el.readyState < u ? this.media.el.buffered.length && 0 === this.media.el.buffered.start(0) && this.media.el.buffered.end(0) === this.media.el.duration ? a.default.LOADED : a.default.LOADING : a.default.LOADED
        }
        destroy() {
            this._clearLoadListeners(), super.destroy()
        }
    }
    t.default = p
}, function(e, t, s) {
    "use strict";
    e.exports = {
        ALERT: "alert",
        ALERTDIALOG: "alertdialog",
        BUTTON: "button",
        CHECKBOX: "checkbox",
        DIALOG: "dialog",
        GRIDCELL: "gridcell",
        LINK: "link",
        LOG: "log",
        MARQUEE: "marquee",
        MENUITEM: "menuitem",
        MENUITEMCHECKBOX: "menuitemcheckbox",
        MENUITEMRADIO: "menuitemradio",
        OPTION: "option",
        PROGRESSBAR: "progressbar",
        RADIO: "radio",
        SCROLLBAR: "scrollbar",
        SLIDER: "slider",
        SPINBUTTON: "spinbutton",
        STATUS: "status",
        SWITCH: "switch",
        TAB: "tab",
        TABPANEL: "tabpanel",
        TEXTBOX: "textbox",
        TIMER: "timer",
        TOOLTIP: "tooltip",
        TREEITEM: "treeitem",
        COMBOBOX: "combobox",
        GRID: "grid",
        LISTBOX: "listbox",
        MENU: "menu",
        MENUBAR: "menubar",
        RADIOGROUP: "radiogroup",
        TABLIST: "tablist",
        TREE: "tree",
        TREEGRID: "treegrid",
        ARTICLE: "article",
        COLUMNHEADER: "columnheader",
        DEFINITION: "definition",
        DIRECTORY: "directory",
        DOCUMENT: "document",
        GROUP: "group",
        HEADING: "heading",
        IMG: "img",
        LIST: "list",
        LISTITEM: "listitem",
        MATH: "math",
        NOTE: "note",
        PRESENTATION: "presentation",
        REGION: "region",
        ROW: "row",
        ROWGROUP: "rowgroup",
        ROWHEADER: "rowheader",
        SEPARATOR: "separator",
        TOOLBAR: "toolbar",
        APPLICATION: "application",
        BANNER: "banner",
        COMPLEMENTARY: "complementary",
        CONTENTINFO: "contentinfo",
        FORM: "form",
        MAIN: "main",
        NAVIGATION: "navigation",
        SEARCH: "search"
    }
}, function(e, t, s) {
    "use strict";
    var i = s(42);
    let n = e => {
        i.isTabbableElement(e) || e.setAttribute("tabindex", "0")
    };
    e.exports = function(e) {
        e instanceof Node ? n(e) : e.forEach((e => {
            n(e)
        }))
    }
}, function(e, t, s) {
    "use strict";
    const i = s(217);
    e.exports = function(e) {
        i(e, "tabindex", "-1")
    }
}, function(e, t, s) {
    "use strict";
    e.exports = function(e) {
        return "string" == typeof e ? "true" === (e = e.toLowerCase()) : e
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(5)),
        r = i(s(225)),
        a = i(s(89)),
        o = i(s(226)),
        l = i(s(227)),
        h = i(s(228));
    const d = ["beforeCreate", "created", "beforeMount", "mounted", "onWillOpen", "onOpen", "onWillClose", "onClose", "onResizeImmediate", "onBreakpointChange", "onResizeDebounced", "destroy"],
        c = {
            attributes: {}
        };
    class u extends n.default {
        constructor(e) {
            var t;
            let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
            super(s), t = this, this.elements = {}, this.elements.content = e, this.options = s, this.opened = !1, this.model = Object.assign({}, JSON.parse(JSON.stringify(a.default))), this.templates = {}, d.forEach((e => {
                this[e] = function() {
                    for (var s = arguments.length, i = new Array(s), n = 0; n < s; n++) i[n] = arguments[n];
                    t[`__${e}`] && t[`__${e}`].forEach((e => e.apply(t, i)))
                }
            })), this._bindEvents(), ["beforeCreate", "created", "beforeMount"].forEach((e => this[e](s)))
        }
        appendContent(e, t) {
            (0, r.default)(e) && (t = t && (0, r.default)(t) ? t : this.elements.contentContainer).appendChild(e)
        }
        removeContent(e) {
            e ? (this.elements.container.contains(e) && e.remove(), this.trigger(this.model.Events.CONTENT_REMOVED)) : this._emptyContent()
        }
        scrollToModalTop() {
            this.elements.container.scrollTop = 0
        }
        _emptyContent() {
            this.elements.contentContainer.innerHTML = ""
        }
        _bindEvents() {
            this.on(this.model.Events.WILLOPEN, this.onWillOpen), this.on(this.model.Events.OPEN, this.onOpen), this.on(this.model.Events.WILLCLOSE, this.onWillClose), this.on(this.model.Events.CLOSE, this.onClose)
        }
        _releaseEvents() {
            this.off(this.model.Events.WILLOPEN, this.onWillOpen), this.off(this.model.Events.OPEN, this.onOpen), this.off(this.model.Events.WILLCLOSE, this.onwillClose), this.off(this.model.Events.CLOSE, this.onClose)
        }
        static withMixins() {
            const e = class extends u {},
                t = e.prototype;
            for (var s = arguments.length, i = new Array(s), n = 0; n < s; n++) i[n] = arguments[n];
            return [o.default, ...i, h.default, l.default].forEach((e => {
                for (const s in e) d.includes(s) ? (t[`__${s}`] = t[`__${s}`] || [], t[`__${s}`].push(e[s])) : t[s] = e[s]
            })), e
        }
    }
    t.default = u
}, function(e, t, s) {
    "use strict";
    const i = s(12).EventEmitterMicro,
        n = [{
            name: "S",
            mediaQuery: "only screen and (max-width: 734px)"
        }, {
            name: "M",
            mediaQuery: "only screen and (min-width: 735px) and (max-width: 1068px)"
        }, {
            name: "L",
            mediaQuery: "only screen and (min-width: 1069px) and (max-width: 1440px)"
        }, {
            name: "X",
            mediaQuery: "only screen and (min-width: 1441px)"
        }],
        r = "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)",
        a = "only screen and (orientation: portrait)";
    class o extends i {
        constructor() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            super(), this.BREAKPOINTS = e.breakpoints || n, this._setupProperties(), this._onRetinaChange = this._onRetinaChange.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), this.listenersAdded = {
                orientation: !1,
                retina: !1,
                viewport: !1
            }
        }
        static get CHANGE_EVENTS() {
            return {
                ORIENTATION: "change:orientation",
                RETINA: "change:retina",
                VIEWPORT: "change:viewport"
            }
        }
        on() {
            this._setupListeners(arguments[0]), super.on.apply(this, arguments)
        }
        _onRetinaChange() {
            this.trigger(o.CHANGE_EVENTS.RETINA, this)
        }
        _onOrientationChange() {
            this.trigger(o.CHANGE_EVENTS.ORIENTATION, this)
        }
        _setupProperties() {
            Object.defineProperty(this, "retina", {
                get: () => window.matchMedia(r).matches
            }), Object.defineProperty(this, "orientation", {
                get: () => window.matchMedia(a).matches ? "portrait" : "landscape"
            }), this.viewport = this.getBreakpoint()
        }
        _setupListeners(e) {
            if (e !== o.CHANGE_EVENTS.RETINA || this.listenersAdded.retina || (window.matchMedia(r).addListener(this._onRetinaChange), this.listenersAdded.retina = !0), e !== o.CHANGE_EVENTS.ORIENTATION || this.listenersAdded.orientation || (window.matchMedia(a).addListener(this._onOrientationChange), this.listenersAdded.orientation = !0), e === o.CHANGE_EVENTS.VIEWPORT && !this.listenersAdded.viewport) {
                for (let e = 0; e < this.BREAKPOINTS.length; e++) {
                    let t = this.BREAKPOINTS[e];
                    window.matchMedia(t.mediaQuery).addListener((e => {
                        e.matches && (this.oldViewport = this.viewport, this.viewport = t.name, this.trigger(o.CHANGE_EVENTS.VIEWPORT, this))
                    }))
                }
                this.listenersAdded.viewport = !0
            }
        }
        getBreakpoint() {
            for (let e = 0; e < this.BREAKPOINTS.length; e++) {
                let t = this.BREAKPOINTS[e];
                if (window.matchMedia(t.mediaQuery).matches) return t.name
            }
        }
    }
    e.exports = o
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = s(14),
        r = i(s(4)),
        a = s(69),
        o = i(s(10)),
        l = i(s(96)),
        h = s(1),
        d = s(26),
        c = s(21),
        u = i(s(111)),
        m = i(s(248));
    class p extends r.default {
        async mounted() {
            this.commonPlugins = l.default, this.commonPlugins.ObjectFitFix = u.default, this.commonPlugins.UnloadVideo = m.default, this.isL2 = this.el.closest(h.MODAL_SELECTOR), this.pluginOptions = {}, this.videoEl = this.el.querySelector(`#${this.el.dataset.videoId}`), this.componentEl = this.el.closest(c.SELECTOR_COMPONENT_CONTAINER), this.injectPlugins({
                ObjectFitFix: u.default,
                UnloadVideo: m.default
            }), this.addCustomPlugins();
            this.isL2 && (this.modal = (0, d.getModalComponentRef)(this.gum, this.el)), this.mediaInstance = await a.Media.autoInitialize(this.el, {
                anim: this.gum.anim,
                animBreakpointMap: {
                    S: "small",
                    M: "medium",
                    L: "large"
                },
                componentEl: this.componentEl,
                ...this.modal && {
                    modalReference: this.modal,
                    scrollGroup: this.modal.animScrollGroup
                },
                ...this.pluginOptions
            }), this.mediaInstance[0].unload = this.unload.bind(this), this.modal && this.setupModalController(), this.mediaLoadError = this.mediaLoadError.bind(this), this.mediaInstance[0].on(o.default.MEDIA_LOAD_ERROR, this.mediaLoadError), this.mediaTimeout = this.mediaTimeout.bind(this), this.mediaInstance[0].on(c.EVT_TIMEOUT, this.mediaTimeout), this.mediaUnloaded = this.mediaUnloaded.bind(this), this.mediaInstance[0].on(c.EVT_UNLOAD, this.mediaUnloaded)
        }
        addFallbackClassname() {
            this.componentEl.classList.add(c.FALLBACK_CLASSNAME), (0, n.draw)((() => this.gum.anim.forceUpdate()))
        }
        mediaLoadError() {
            this.addFallbackClassname()
        }
        mediaTimeout() {
            this.el.classList.add("media-timeout"), this.addFallbackClassname()
        }
        mediaUnloaded() {
            this.el.classList.add("media-unloaded"), this.addFallbackClassname()
        }
        injectPlugins(e) {
            const t = this.videoEl.getAttribute("data-inline-media-plugins"),
                s = new Set(t ? t.split(",").map((e => e.trim())) : []);
            for (const t in e) s.add(t), a.Media.addPlugin(t, e[t]);
            this.videoEl.setAttribute("data-inline-media-plugins", [...s].join(","))
        }
        injectPluginsByAttribute() {
            if (!this.productPagePlugins) throw Error("InlineMedia: injectPluginsByAttribute(): this.productPagePlugins must be assigned");
            const e = this.videoEl.getAttribute("data-inline-media-plugins");
            if (e && "" !== e) {
                const t = Object.keys(this.commonPlugins),
                    s = Object.keys(this.productPagePlugins);
                e.split(",").forEach((e => {
                    const i = e.trim();
                    if (!t.includes(i) || s.includes(i)) {
                        if (!s.includes(i)) throw Error(`InlineMedia: plugin missing: ${i}`);
                        a.Media.addPlugin(i, this.productPagePlugins[i])
                    }
                }))
            }
        }
        addCustomPlugins() {}
        setupModalController() {
            const e = this.mediaInstance[0];
            this._mediaPlayingOnModalOpen = !1, this.modal.modal.on("open", (() => {
                "playing" === e.playbackState && (this._mediaPlayingOnModalOpen = !0, e.el.pause())
            })), this.modal.modal.on("close", (() => {
                this._mediaPlayingOnModalOpen && e.play()
            }))
        }
        destroy() {
            this.mediaInstance && !this.mediaInstance[0]._destroyed && (this.mediaInstance[0].off(c.EVT_TIMEOUT, this.mediaTimeout), this.mediaInstance.forEach((e => e.destroy())), this.addFallbackClassname())
        }
        unload() {
            const e = this.mediaInstance[0];
            e.lastVideoSrc = e.el.src;
            for (const t of e.plugins) "function" == typeof t.unload && t.unload()
        }
        async reload() {
            this.mediaInstance[0].lastVideoSrc && await this.mediaInstance[0].load()
        }
        static IS_SUPPORTED() {
            return document.documentElement.classList.contains(c.FEATURE_INLINE_MEDIA)
        }
    }
    t.default = p
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = s(69),
        r = i(s(28));
    const a = {
        start: "t - 200vh",
        end: "b + 100vh"
    };
    class o extends n.Plugin {
        constructor(e) {
            super(e), this.el = e.el, this._anim = e.anim, this._container = e.container || this.media.el.parentElement, this._scrollGroup = this.options.scrollGroup || this._anim.getGroupForTarget(this._container || this.media.el), this._onRangeKeyframeEnter = this._onRangeKeyframeEnter.bind(this), this._onResizeImmediate = this._onResizeImmediate.bind(this), this._onResizeDebounced = this._onResizeDebounced.bind(this), this._onBreakpointChange = this._onBreakpointChange.bind(this), this._anim.on("ON_BREAKPOINT_CHANGE", this._onBreakpointChange), this._anim.on("ON_RESIZE_DEBOUNCED", this._onResizeDebounced);
            const t = (0, r.default)(this.media.el.dataset, this.options, "rangeKeyframe", a);
            t.event || (t.event = "inline-media-range-kf"), this._rangeKeyframe = this._scrollGroup.addKeyframe(this.media.el, t), this._rangeKeyframe.controller.on(`${this._rangeKeyframe.event}:enter`, this._onRangeKeyframeEnter)
        }
        mounted() {
            this.isAtLeastSafari15minor5 = document.documentElement.classList.contains("safari-15-5-or-up"), this.applyObjectFitFix()
        }
        destroy() {
            this.removeObjectFitStyles(), this._anim.off("ON_BREAKPOINT_CHANGE", this._onBreakpointChange), this._anim.off("ON_RESIZE_DEBOUNCED", this._onResizeDebounced), this._rangeKeyframe.controller && this._rangeKeyframe.controller.off(`${this._rangeKeyframe.event}:enter`, this._onRangeKeyframeEnter), super.destroy()
        }
        applyObjectFitFix() {
            this.isAtLeastSafari15minor5 && (this._anim.on("ON_RESIZE_IMMEDIATE", this._onResizeImmediate), this.removeObjectFitStyles(), this.forceVideoSizeToContainer())
        }
        removeObjectFitStyles() {
            this.el.style.minHeight = 0, this.el.style.objectFit = "fill"
        }
        forceVideoSizeToContainer() {
            const {
                offsetWidth: e,
                offsetHeight: t
            } = this.el.parentElement;
            this.el.style.width = `${e}px`, this.el.style.height = `${t}px`
        }
        _onResizeImmediate() {
            "loading-empty" !== this.media.loadingState && "loading-error" !== this.media.loadingState && (this._anim.off("ON_RESIZE_IMMEDIATE", this._onResizeImmediate), this.el.style.removeProperty("min-height"), this.el.style.removeProperty("object-fit"), this.el.style.removeProperty("width"), this.el.style.removeProperty("height"))
        }
        _onResizeDebounced() {
            "loading-empty" !== this.media.loadingState && "loading-error" !== this.media.loadingState || (this._anim.off("ON_RESIZE_IMMEDIATE", this._onResizeImmediate), this.applyObjectFitFix())
        }
        _onBreakpointChange() {
            this._anim.off("ON_RESIZE_IMMEDIATE", this._onResizeImmediate), this.applyObjectFitFix()
        }
        _onRangeKeyframeEnter(e) {
            this.applyObjectFitFix()
        }
    }
    t.default = o
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(97));
    class r extends n.default {
        destroy() {
            this._loadKeyframe && !this.loadKeyframe.destroyed && (this._loadKeyframe.controller.off(`${this._loadKeyframe.event}:enter`, this._onLoadKeyframeEnter), this._loadKeyframe.controller.off(`${this._loadKeyframe.event}:exit`, this._onLoadKeyframeExit))
        }
    }
    t.default = r
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = s(14),
        r = i(s(100)),
        a = i(s(28)),
        o = s(9),
        l = i(s(23)),
        h = s(21);
    const d = l.default.browser.safari;
    class c extends r.default {
        _initialize() {
            this._mimeTypes = (0, a.default)(this.media.el.dataset, this.options, "mimeTypes", "mp4").split(",").map((e => e.trim()));
            const e = this.media.el.dataset;
            this._retinaEnabled = (0, a.default)(e, this.options, "retinaEnabled", !0), this._anim = this.options.anim, this._componentEl = this.options.componentEl || this.media.el.closest(h.SELECTOR_COMPONENT_CONTAINER), this._excludeViewport = (0, a.default)(this.media.el.dataset, this.options, "excludeRetinaViewports", []), super._initialize()
        }
        _onBreakpointChange() {
            if (this._currentBreakpoint) return this._breakpointDetect && this._breakpointDetect.destroy(), void this._applyFallback();
            this._currentBreakpoint = this._breakpointDetect.breakpoint;
            const e = this._retinaEnabled && this._excludeViewport.indexOf(this._currentBreakpoint) < 0,
                t = window.devicePixelRatio > 1 && e ? `${this._currentBreakpoint}_2x` : this._currentBreakpoint,
                s = `${this._basePath}${t}.${this._getMimeExtension()}`;
            this._swapSrc(s)
        }
        _applyFallback() {
            this._componentEl ? this._componentEl.classList.add(h.FALLBACK_CLASSNAME) : o.DevLogger.warn(`ViewportSourceOnce plugin is missing a reference to a containing element: ${this}`), (0, n.update)((() => {
                this.media.destroy(), (0, n.draw)((() => this._anim.forceUpdate()))
            }))
        }
        _getMimeExtension() {
            let e;
            for (const t of this._mimeTypes)
                if (this.media.el.canPlayType(`video/${t}`)) {
                    switch (t) {
                        case "quicktime":
                            if (d) {
                                e = "mov";
                                break
                            }
                            continue;
                        default:
                            e = t
                    }
                    break
                }
            return e || "mp4"
        }
    }
    t.default = c
}, function(e, t, s) {
    "use strict";
    const i = s(86),
        n = s(84),
        r = s(64),
        a = {};
    class o extends i {
        constructor(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!t.anim) throw "Anim is no longer bundled with BubbleGum. Please pass Anim when initialize BubbleGum: `new BubbleGum(document.querySelector('main'), {anim: AnimSystem})`";
            super(), this.el = e, this.anim = t.anim, this.componentAttribute = t.attribute || "data-component-list", this.attribute = this.componentAttribute.replace(/-./g, (e => e[1].toUpperCase())).replace(/data(.)/, ((e, t) => t.toLowerCase())), this.components = [], this.componentsInitialized = !1, this.el.getAttribute("data-anim-scroll-group") || this.el.setAttribute("data-anim-scroll-group", "bubble-gum-group"), n.add((() => {
                this.anim.initialize().then((() => {
                    this.initComponents(), this.setupEvents(), this.components.forEach((e => e.mounted())), this.trigger(o.EVENTS.DOM_COMPONENTS_MOUNTED)
                }))
            }))
        }
        initComponents() {
            const e = Array.prototype.slice.call(this.el.querySelectorAll(`[${this.componentAttribute}]`));
            this.el.hasAttribute(this.componentAttribute) && e.push(this.el);
            for (let t = 0; t < e.length; t++) {
                let s = e[t],
                    i = s.getAttribute(this.componentAttribute).split(" ");
                for (let e = 0, t = i.length; e < t; e++) {
                    let t = i[e];
                    "" !== t && " " !== t && this.addComponent({
                        el: s,
                        componentName: t
                    })
                }
            }
            this.componentsInitialized = !0
        }
        setupEvents() {
            this.onResizeDebounced = this.onResizeDebounced.bind(this), this.onResizeImmediate = this.onResizeImmediate.bind(this), this.onBreakpointChange = this.onBreakpointChange.bind(this), this.anim.on(this.anim.model.PageEvents.ON_RESIZE_IMMEDIATE, this.onResizeImmediate), this.anim.on(this.anim.model.PageEvents.ON_RESIZE_DEBOUNCED, this.onResizeDebounced), this.anim.on(this.anim.model.PageEvents.ON_BREAKPOINT_CHANGE, this.onBreakpointChange)
        }
        addComponent(e) {
            const {
                el: t,
                componentName: s,
                data: i
            } = e;
            if (!r.hasOwnProperty(s)) throw "BubbleGum::addComponent could not add component to '" + t.className + "'. No component type '" + s + "' found!";
            const n = r[s];
            if (!o.componentIsSupported(n, s)) return void 0 === a[s] && (console.log("BubbleGum::addComponent unsupported component '" + s + "'. Reason: '" + s + ".IS_SUPPORTED' returned false"), a[s] = !0), null;
            let l = t.dataset[this.attribute] || "";
            l.includes(s) || (t.dataset[this.attribute] = l.split(" ").concat(s).join(" "));
            let h = new n({
                el: t,
                data: i,
                componentName: e.componentName,
                gum: this,
                pageMetrics: this.anim.model.pageMetrics
            });
            return this.components.push(h), this.componentsInitialized && h.mounted(), h
        }
        removeComponent(e) {
            const t = this.components.indexOf(e); - 1 !== t && (this.components.splice(t, 1), e.el.dataset[this.attribute] = e.el.dataset[this.attribute].split(" ").filter((t => t !== e.componentName)).join(" "), e.destroy())
        }
        getComponentOfType(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement;
            const s = `[${this.componentAttribute}*=${e}]`,
                i = t.matches(s) ? t : t.querySelector(s);
            return i ? this.components.find((t => t instanceof r[e] && t.el === i)) : null
        }
        getComponentsOfType(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement;
            const s = `[${this.componentAttribute}*=${e}]`,
                i = t.matches(s) ? [t] : Array.from(t.querySelectorAll(s));
            return this.components.filter((t => t instanceof r[e] && i.includes(t.el)))
        }
        getComponentsForElement(e) {
            return this.components.filter((t => t.el === e))
        }
        onResizeImmediate() {
            this.components.forEach((e => e.onResizeImmediate(this.anim.model.pageMetrics)))
        }
        onResizeDebounced() {
            this.components.forEach((e => e.onResizeDebounced(this.anim.model.pageMetrics)))
        }
        onBreakpointChange() {
            this.components.forEach((e => e.onBreakpointChange(this.anim.model.pageMetrics)))
        }
        static componentIsSupported(e, t) {
            const s = e.IS_SUPPORTED;
            if (void 0 === s) return !0;
            if ("function" != typeof s) return console.error('BubbleGum::addComponent error in "' + t + '".IS_SUPPORTED - it should be a function which returns true/false'), !0;
            const i = e.IS_SUPPORTED();
            return void 0 === i ? (console.error('BubbleGum::addComponent error in "' + t + '".IS_SUPPORTED - it should be a function which returns true/false'), !0) : i
        }
    }
    o.EVENTS = {
        DOM_COMPONENTS_MOUNTED: "DOM_COMPONENTS_MOUNTED"
    }, e.exports = o
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "CloseBtnWrapper", {
        enumerable: !0,
        get: function() {
            return n.default
        }
    }), Object.defineProperty(t, "ModalContainer", {
        enumerable: !0,
        get: function() {
            return r.default
        }
    });
    var n = i(s(257)),
        r = i(s(258))
}, function(e, t, s) {
    "use strict";
    const i = s(117),
        n = s(109),
        r = s(2),
        a = s(19);
    class o extends i {
        constructor() {
            super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), this.arrayImg = []
        }
        _init() {
            super._init(), this._onBreakpointChangeCallback = this._onBreakpointChangeCallback.bind(this), this._addViewportEvents(), this._resetPromises(), this._addMethodsToImageElement()
        }
        _addViewportEvents() {
            let e = this.options.breakpoints ? {
                breakpoints: this.options.breakpoints
            } : {};
            this.viewportEmitterMicro = new n(e), this.viewportEmitterMicro.on(n.CHANGE_EVENTS.VIEWPORT, this._onBreakpointChangeCallback), this.viewportEmitterMicro.on(n.CHANGE_EVENTS.RETINA, this._onBreakpointChangeCallback)
        }
        _addKeyframesToImages() {
            this._scrollGroup = this.AnimSystem.getGroupForTarget(document.body), this._images.forEach((e => {
                this.AnimSystem.getGroupForTarget(e) && (this._scrollGroup = this.AnimSystem.getGroupForTarget(e));
                let t = this._defineKeyframeOptions(e);
                this._scrollGroup.addKeyframe(e, t).controller.on("AnimLazyImage:enter", (() => {
                    this._imageIsInLoadRange(e)
                }))
            }))
        }
        _onBreakpointChangeCallback(e) {
            this._resetPromises(), this.arrayImg = [], this._images.forEach((e => {
                this._cleanUpImageAttributes(e), "" != e.getAttribute(i.DATA_ATTRIBUTE) && this._imageIsInLoadRange(e)
            }))
        }
        _resetPromises() {
            this._images.forEach((e => {
                e.promises = {}, e.promises.downloadComplete = new Promise((t => {
                    e.promises.__completePromiseResolver = t
                }))
            }))
        }
        _addMethodsToImageElement() {
            this._images.forEach((e => {
                e.forceLazyLoad = () => {
                    this._imageIsInLoadRange(e)
                }
            }))
        }
        _imageIsInLoadRange(e) {
            this._downloadImage(e).then((() => {
                e.promises.__completePromiseResolver(e), e.dispatchEvent(new Event(o.EVENTS.DOWNLOAD_COMPLETE))
            }))
        }
        _cleanUpImageAttributes(e) {
            e.removeAttribute(o.DATA_DOWNLOADING_ATTRIBUTE), e.removeAttribute(o.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE)
        }
        _downloadingImageAttributes(e) {
            super._downloadingImageAttributes(e), e.setAttribute(o.DATA_DOWNLOADING_ATTRIBUTE, "")
        }
        _finishedDownloadAttributes(e) {
            e.removeAttribute(o.DATA_DOWNLOADING_ATTRIBUTE), e.setAttribute(o.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE, "")
        }
        _downloadImage(e) {
            return new Promise(((t, s) => {
                null === e.getAttribute(o.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE) ? null === e.getAttribute(o.DATA_DOWNLOADING_ATTRIBUTE) && this._waitForBackgroundVisible(e).then((e => this._getBackgroundImageSrc(e))).then((e => this._loadImage(e))).then((() => {
                    r((() => {
                        this._finishedDownloadAttributes(e), t()
                    }), !0)
                })) : t()
            }))
        }
        _waitForBackgroundVisible(e) {
            return new Promise(((t, s) => {
                r((() => {
                    this._downloadingImageAttributes(e), t(e)
                }), !0)
            }))
        }
        _getBackgroundImageSrc(e) {
            return new Promise(((t, s) => {
                a((() => {
                    let s = e.currentStyle;
                    s || (s = window.getComputedStyle(e, !1)), 0 !== s.backgroundImage.indexOf("url(") ? t(null) : t(s.backgroundImage.slice(4, -1).replace(/"/g, ""))
                }), !0)
            }))
        }
        _loadImage(e) {
            return new Promise(this._loadImagePromiseFunc.bind(this, e))
        }
        _loadImagePromiseFunc(e, t, s) {
            if (!e) return void t(null);
            let i = new Image(1, 1);
            i.addEventListener("load", (function e(s) {
                i.removeEventListener("load", e), t(this)
            })), i.src = e, this.arrayImg.push(i)
        }
    }
    o.DATA_DOWNLOAD_COMPLETE_ATTRIBUTE = "data-anim-lazy-image-download-complete", o.DATA_DOWNLOADING_ATTRIBUTE = "data-anim-lazy-image-downloading", o.EVENTS = {}, o.EVENTS.DOWNLOAD_COMPLETE = "video-loading-complete", e.exports = o
}, function(e, t, s) {
    "use strict";
    class i {
        constructor() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.options = e, "loading" === document.readyState ? document.addEventListener("readystatechange", (e => {
                "interactive" === document.readyState && this._init()
            })) : this._init()
        }
        _init() {
            if (this._images = Array.from(document.querySelectorAll(`*[${i.DATA_ATTRIBUTE}]`)), this.AnimSystem = this._findAnim(), null === this.AnimSystem) return null;
            this._addKeyframesToImages()
        }
        _defineKeyframeOptions() {
            const e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null).getAttribute(i.DATA_DOWNLOAD_AREA_KEYFRAME) || "{}";
            return Object.assign({}, {
                start: "t - 200vh",
                end: "b + 100vh",
                event: "AnimLazyImage"
            }, JSON.parse(e))
        }
        _addKeyframesToImages() {
            this._scrollGroup = this.AnimSystem.getGroupForTarget(document.body), this._images.forEach((e => {
                this.AnimSystem.getGroupForTarget(e) && (this._scrollGroup = this.AnimSystem.getGroupForTarget(e));
                let t = this._defineKeyframeOptions(e);
                this._scrollGroup.addKeyframe(e, t).controller.once("AnimLazyImage:enter", (() => {
                    this._imageIsInLoadRange(e)
                }))
            }))
        }
        _cleanUpImageAttributes(e) {
            let t = !1;
            try {
                t = this._scrollGroup.getControllerForTarget(e).getNearestKeyframeForAttribute("AnimLazyImage").isCurrentlyInRange
            } catch (e) {
                t = !1
            }
            t || e.setAttribute(i.DATA_ATTRIBUTE, "")
        }
        _downloadingImageAttributes(e) {
            e.removeAttribute(i.DATA_ATTRIBUTE)
        }
        _imageIsInLoadRange(e) {
            this._downloadImage(e)
        }
        _downloadImage(e) {
            this._downloadingImageAttributes(e)
        }
        _findAnim() {
            var e = Array.from(document.querySelectorAll("[data-anim-group],[data-anim-scroll-group],[data-anim-time-group]"));
            return e.map((e => e._animInfo ? e._animInfo.group : null)).filter((e => null !== e)), e[0] && e[0]._animInfo ? e[0]._animInfo.group.anim : (console.error("AnimLazyImage: AnimSystem not found, please initialize anim before instantiating"), null)
        }
    }
    i.DATA_DOWNLOAD_AREA_KEYFRAME = "data-download-area-keyframe", i.DATA_ATTRIBUTE = "data-anim-lazy-image", e.exports = i
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = s(268),
        n = s(1),
        r = s(72);
    class a extends i.PictureLazyLoading {
        _addKeyframesToImages() {
            this._pictures.forEach((e => {
                e.__scrollGroup = this.AnimSystem.getScrollGroupForTarget(document.body), this.AnimSystem.getScrollGroupForTarget(e) && (e.__scrollGroup = this.AnimSystem.getScrollGroupForTarget(e));
                const t = this._defineKeyframeOptions(e);
                if (e.closest(`[${n.CONTENT_WRAPPER_ATTRIB}]`)) e[r.LAZY_LOAD_STORED_OPTIONS_NAME] = t;
                else {
                    e.__scrollGroup.addKeyframe(e, t).controller.once("PictureLazyLoading:enter", (() => {
                        this._imageIsInLoadRange(e)
                    }))
                }
            }))
        }
    }
    t.default = a
}, function(e, t, s) {
    "use strict";
    const i = (e, t) => {
        t ? e.removeAttribute("disabled") : e.setAttribute("disabled", "true")
    };
    e.exports = {
        mounted() {
            const e = this.el.querySelector(this.model.PaddleNav.Selector),
                t = this.el.querySelector(".scroll-container");
            this.paddleNav = {
                previousEl: e.querySelector(".paddlenav-arrow-previous"),
                nextEl: e.querySelector(".paddlenav-arrow-next"),
                scrollContainer: t
            }, this.onPaddleNavSelected = this.onPaddleNavSelected.bind(this), [this.paddleNav.previousEl, this.paddleNav.nextEl].forEach((e => {
                e.addEventListener("click", this.onPaddleNavSelected)
            })), this.onPaddleNavScroll = this.onPaddleNavScroll.bind(this), this.checkScrollPosition = this.checkScrollPosition.bind(this), this.paddleNav.scrollContainer.addEventListener("scroll", this.onPaddleNavScroll)
        },
        destroy() {
            [this.paddleNav.previousEl, this.paddleNav.nextEl].forEach((e => {
                e.removeEventListener("click", this.onPaddleNavSelected)
            })), this.paddleNav.scrollContainer.removeEventListener("scroll", this.onPaddleNavScroll), this.paddleNav = null
        },
        checkScrollPosition() {
            let e = this.model.IsRTL ? -1 : 1,
                t = (this.paddleNav.scrollContainer.scrollWidth - this.paddleNav.scrollContainer.clientWidth) * e;
            const s = this.wrappedIndex(this.currentIndex + 1),
                n = this.wrappedIndex(this.currentIndex - 1);
            let r = s !== this.currentIndex && Math.abs(t - this.paddleNav.scrollContainer.scrollLeft) > 1,
                a = n !== this.currentIndex && Math.abs(this.paddleNav.scrollContainer.scrollLeft) >= 1;
            i(this.paddleNav.nextEl, r), i(this.paddleNav.previousEl, a)
        },
        onPaddleNavSelected(e) {
            let t = e.currentTarget.className.includes("previous") ? -1 : 1;
            this.lastInteractionEvent = e;
            const s = this.currentIndex + 1 * t;
            this.animateToItem(s)
        },
        onPaddleNavScroll() {
            clearTimeout(this.paddleTimer), this.paddleTimer = setTimeout(this.checkScrollPosition, 200)
        },
        onItemChangeCompleted(e) {
            this.checkScrollPosition()
        },
        onResizeImmediate() {
            this.paddleNav.scrollContainer.removeEventListener("scroll", this.onPaddleNavScroll)
        },
        onResizeDebounced() {
            this.paddleNav.scrollContainer.addEventListener("scroll", this.onPaddleNavScroll), requestAnimationFrame((() => {
                this.checkScrollPosition()
            }))
        }
    }
}, function(e, t, s) {
    "use strict";
    e.exports = {
        mounted() {
            this._mousedown = !1, this.el.addEventListener("mousedown", (() => {
                this._mousedown = !0
            })), this.el.addEventListener("mouseup", (() => {
                this._mousedown = !1
            })), this._items.forEach(((e, t) => {
                e.el.addEventListener("focusin", (e => {
                    this._mousedown || (this.lastInteractionEvent = {
                        type: "swipe",
                        target: e.target,
                        srcElement: e.srcElement
                    }, this.animateToItem(t))
                }))
            }))
        }
    }
}, , , , , , , , , , , , function(e, t, s) {
    e.exports = s(133)
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.main = void 0;
    var n = i(s(38)),
        r = i(s(156)),
        a = i(s(85)),
        o = i(s(157)),
        l = i(s(292)),
        h = i(s(72)),
        d = i(s(118)),
        c = s(37);
    t.main = new class {
        constructor() {
            (0, c.trackPageState)(), Object.assign(a.default, o.default), this._onDomKeyframesCreated = this._onDomKeyframesCreated.bind(this), this._initialize()
        }
        _initialize() {
            this.bubbleGum = new r.default(document.body, {
                anim: n.default
            }), this._addEventListeners(), l.default.detect()
        }
        _addEventListeners() {
            this.bubbleGum.anim.on(n.default.model.EVENTS.ON_DOM_KEYFRAMES_CREATED, this._onDomKeyframesCreated)
        }
        _onDomKeyframesCreated() {
            new h.default, new d.default
        }
    }
}, function(e, t, s) {
    "use strict";
    const i = 1e-5,
        n = Math.abs;
    class r {
        constructor(e, t, s, i) {
            this.cp = new Float32Array(6), this.cp[0] = 3 * e, this.cp[1] = 3 * (s - e) - this.cp[0], this.cp[2] = 1 - this.cp[0] - this.cp[1], this.cp[3] = 3 * t, this.cp[4] = 3 * (i - t) - this.cp[3], this.cp[5] = 1 - this.cp[3] - this.cp[4]
        }
        sampleCurveX(e) {
            return ((this.cp[2] * e + this.cp[1]) * e + this.cp[0]) * e
        }
        sampleCurveY(e) {
            return ((this.cp[5] * e + this.cp[4]) * e + this.cp[3]) * e
        }
        sampleCurveDerivativeX(e) {
            return (3 * this.cp[2] * e + 2 * this.cp[1]) * e + this.cp[0]
        }
        solveCurveX(e) {
            var t, s, r, a, o, l;
            for (r = e, l = 0; l < 5; l++) {
                if (a = this.sampleCurveX(r) - e, n(a) < i) return r;
                if (o = this.sampleCurveDerivativeX(r), n(o) < i) break;
                r -= a / o
            }
            if ((r = e) < (t = 0)) return t;
            if (r > (s = 1)) return s;
            for (; t < s;) {
                if (a = this.sampleCurveX(r), n(a - e) < i) return r;
                e > a ? t = r : s = r, r = .5 * (s - t) + t
            }
            return r
        }
        solve(e) {
            return this.sampleCurveY(this.solveCurveX(e))
        }
    }
    const a = /\d*\.?\d+/g;
    r.fromCSSString = function(e) {
        let t = e.match(a);
        if (4 !== t.length) throw `UnitBezier could not convert ${e} to cubic-bezier`;
        let s = t.map(Number),
            i = new r(s[0], s[1], s[2], s[3]);
        return i.solve.bind(i)
    }, e.exports = r
}, function(e, t, s) {
    "use strict";
    const {
        map: i
    } = s(22), n = {};
    class r {
        constructor(e, t, s, i) {
            this.mass = e, this.stiffness = t, this.damping = s, this.initialVelocity = i, this.m_w0 = Math.sqrt(this.stiffness / this.mass), this.m_zeta = this.damping / (2 * Math.sqrt(this.stiffness * this.mass)), this.m_zeta < 1 ? (this.m_wd = this.m_w0 * Math.sqrt(1 - this.m_zeta * this.m_zeta), this.m_A = 1, this.m_B = (this.m_zeta * this.m_w0 - this.initialVelocity) / this.m_wd) : (this.m_wd = 0, this.m_A = 1, this.m_B = -this.initialVelocity + this.m_w0)
        }
        solve(e) {
            return 1 - (e = this.m_zeta < 1 ? Math.exp(-e * this.m_zeta * this.m_w0) * (this.m_A * Math.cos(this.m_wd * e) + this.m_B * Math.sin(this.m_wd * e)) : (this.m_A + this.m_B * e) * Math.exp(-e * this.m_w0))
        }
    }
    const a = /\d*\.?\d+/g;
    r.fromCSSString = function(e) {
        let t = e.match(a);
        if (4 !== t.length) throw `SpringEasing could not convert ${cssString} to spring params`;
        let s = t.map(Number),
            o = new r(...s);
        const l = o.solve.bind(o);
        let h = 0;
        let d = function() {
            if (n[e]) return n[e];
            const t = 1 / 6;
            let s, i = 0;
            for (;;) {
                h += t;
                if (1 === l(h)) {
                    if (i++, i >= 16) {
                        s = h * t;
                        break
                    }
                } else i = 0
            }
            return n[e] = s, n[e]
        }();
        return function(e) {
            return 0 === e || 1 === e ? e : l(i(e, 0, 1, 0, d))
        }
    }, e.exports = r
}, function(e, t, s) {
    "use strict";
    e.exports = function(e, t) {
        if ("string" != typeof e) return e;
        try {
            return (t || document).querySelector(e) || document.querySelector(e)
        } catch (e) {
            return !1
        }
    }
}, function(e, t, s) {
    "use strict";
    e.exports = class {
        constructor() {
            this.local = 0, this.localUnclamped = 0, this.lastPosition = 0
        }
    }
}, function(e, t, s) {
    "use strict";
    e.exports = class {
        constructor(e, t) {
            this.a = e.top - t, this.a < 0 && (this.a = e.top), this.b = e.top, this.d = e.bottom, this.c = Math.max(this.d - t, this.b)
        }
    }
}, function(e, t, s) {
    "use strict";
    const i = s(3),
        n = s(22),
        r = s(75),
        a = {},
        o = {
            smoothstep: (e, t, s) => (s = o.clamp((s - e) / (t - e), 0, 1)) * s * (3 - 2 * s),
            deg: e => 180 * e / Math.PI,
            rad: e => e * Math.PI / 180,
            random: (e, t) => Math.random() * (t - e) + e,
            atan: Math.atan2
        };
    Object.getOwnPropertyNames(Math).forEach((e => o[e] ? null : o[e.toLowerCase()] = Math[e])), Object.getOwnPropertyNames(n).forEach((e => o[e] ? null : o[e.toLowerCase()] = n[e])), Object.getOwnPropertyNames(r).forEach((e => o[e] = r[e]));
    let l = null;
    const h = "a",
        d = "ALPHA",
        c = "(",
        u = ")",
        m = "PLUS",
        p = "MINUS",
        f = "MUL",
        _ = "DIV",
        g = "INTEGER_CONST",
        E = "FLOAT_CONST",
        y = ",",
        v = "EOF",
        b = {
            NUMBERS: /\d|\d\.\d/,
            DIGIT: /\d/,
            OPERATOR: /[-+*/]/,
            PAREN: /[()]/,
            WHITE_SPACE: /\s/,
            ALPHA: /[a-zA-Z]|%/,
            ALPHANUMERIC: /[a-zA-Z0-9]/,
            OBJECT_UNIT: /^(t|l|b|r|%w|%h|%|h|w)$/,
            GLOBAL_METRICS_UNIT: /^(px|vh|vw)$/,
            ANY_UNIT: /^(t|l|b|r|%w|%h|%|h|w|px|vh|vw|rad|deg)$/,
            MATH_FUNCTION: new RegExp(`\\b(${Object.keys(o).join("|")})\\b`, "i")
        },
        A = function(e, t, s) {
            let i = t.slice(Math.max(s, 0), Math.min(t.length, s + 3)),
                n = new Error(`Expression Error. ${e} in expression "${t}", near "${i}"`);
            throw console.error(n.message, l ? l.keyframe || l.target : ""), n
        },
        T = {
            round: 1,
            clamp: 3,
            lerp: 3,
            random: 2,
            atan: 2,
            floor: 1,
            ceil: 1,
            abs: 1,
            cos: 1,
            sin: 1,
            smoothstep: 3,
            rad: 1,
            deg: 1,
            pow: 2,
            calc: 1
        };
    class O {
        constructor(e, t) {
            this.type = e, this.value = t
        }
    }
    O.ONE = new O("100", 100), O.EOF = new O(v, null);
    class P {
        constructor(e) {
            this.type = e
        }
    }
    class C extends P {
        constructor(e, t) {
            super("UnaryOp"), this.token = this.op = e, this.expr = t
        }
    }
    class S extends P {
        constructor(e, t, s) {
            super("BinOp"), this.left = e, this.op = t, this.right = s
        }
    }
    class I extends P {
        constructor(e, t) {
            if (super("MathOp"), this.op = e, this.list = t, T[e.value] && t.length !== T[e.value]) throw new Error(`Incorrect number of arguments for '${e.value}'. Received ${t.length}, expected ${T[e.value]}`)
        }
    }
    class w extends P {
        constructor(e) {
            super("Num"), this.token = e, this.value = e.value
        }
    }
    class x extends P {
        constructor(e, t, s) {
            super("RefValue"), this.num = e, this.ref = t, this.unit = s
        }
    }
    class N extends P {
        constructor(e, t) {
            super("CSSValue"), this.ref = e, this.propertyName = t
        }
    }
    class L extends P {
        constructor(e, t) {
            super("PropValue"), this.ref = e, this.propertyName = t
        }
    }
    class R {
        constructor(e) {
            let t;
            for (this.text = e, this.pos = 0, this.char = this.text[this.pos], this.tokens = [];
                (t = this.getNextToken()) && t !== O.EOF;) this.tokens.push(t);
            this.tokens.push(t)
        }
        advance() {
            this.char = this.text[++this.pos]
        }
        skipWhiteSpace() {
            for (; null != this.char && b.WHITE_SPACE.test(this.char);) this.advance()
        }
        name() {
            let e = "";
            for (; null != this.char && b.ALPHA.test(this.char);) e += this.char, this.advance();
            return new O(d, e)
        }
        number() {
            let e = "";
            for ("." === this.char && (e += this.char, this.advance()); null != this.char && b.DIGIT.test(this.char);) e += this.char, this.advance();
            if (null != this.char && "." === this.char)
                for (e.includes(".") && A("Number appears to contain 2 decimal points", this.text, this.pos), e += this.char, this.advance(); null != this.char && b.DIGIT.test(this.char);) e += this.char, this.advance();
            return "." === e && A("Attempted to parse a number, but found only a decimal point", this.text, this.pos), e.includes(".") ? new O(E, parseFloat(e)) : new O(g, parseInt(e))
        }
        getNextToken() {
            for (; null != this.char;)
                if (b.WHITE_SPACE.test(this.char)) this.skipWhiteSpace();
                else {
                    if ("." === this.char || b.DIGIT.test(this.char)) return this.number();
                    if ("," === this.char) return this.advance(), new O(y, ",");
                    if (b.OPERATOR.test(this.char)) {
                        let e = "",
                            t = this.char;
                        switch (t) {
                            case "+":
                                e = m;
                                break;
                            case "-":
                                e = p;
                                break;
                            case "*":
                                e = f;
                                break;
                            case "/":
                                e = _
                        }
                        return this.advance(), new O(e, t)
                    }
                    if (b.PAREN.test(this.char)) {
                        let e = "",
                            t = this.char;
                        switch (t) {
                            case "(":
                                e = c;
                                break;
                            case ")":
                                e = u
                        }
                        return this.advance(), new O(e, t)
                    }
                    if (b.ALPHA.test(this.char)) return this.name();
                    A(`Unexpected character "${this.char}"`, this.text, this.pos)
                }
            return O.EOF
        }
    }
    class M {
        constructor(e) {
            this.lexer = e, this.pos = 0
        }
        get currentToken() {
            return this.lexer.tokens[this.pos]
        }
        error(e) {
            A(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", this.lexer.text, this.pos)
        }
        consume(e) {
            let t = this.currentToken;
            return t.type === e ? this.pos += 1 : this.error(`Invalid token ${this.currentToken.value}, expected ${e}`), t
        }
        consumeList(e) {
            e.includes(this.currentToken) ? this.pos += 1 : this.error(`Invalid token ${this.currentToken.value}, expected ${tokenType}`)
        }
        expr() {
            let e = this.term();
            for (; this.currentToken.type === m || this.currentToken.type === p;) {
                const t = this.currentToken;
                switch (t.value) {
                    case "+":
                        this.consume(m);
                        break;
                    case "-":
                        this.consume(p)
                }
                e = new S(e, t, this.term())
            }
            return e
        }
        term() {
            let e = this.factor();
            for (; this.currentToken.type === f || this.currentToken.type === _;) {
                const t = this.currentToken;
                switch (t.value) {
                    case "*":
                        this.consume(f);
                        break;
                    case "/":
                        this.consume(_)
                }
                e = new S(e, t, this.factor())
            }
            return e
        }
        factor() {
            if (this.currentToken.type === m) return new C(this.consume(m), this.factor());
            if (this.currentToken.type === p) return new C(this.consume(p), this.factor());
            if (this.currentToken.type === g || this.currentToken.type === E) {
                let e = new w(this.currentToken);
                if (this.pos += 1, b.OPERATOR.test(this.currentToken.value) || this.currentToken.type === u || this.currentToken.type === y || this.currentToken.type === v) return e;
                if (this.currentToken.type === d && this.currentToken.value === h) return this.consume(d), new x(e, this.anchorIndex(), this.unit(b.ANY_UNIT));
                if (this.currentToken.type === d) return "%a" === this.currentToken.value && this.error("%a is invalid, try removing the %"), new x(e, null, this.unit());
                this.error("Expected a scaling unit type", "Such as 'h' / 'w'")
            } else {
                if (b.OBJECT_UNIT.test(this.currentToken.value)) return new x(new w(O.ONE), null, this.unit());
                if (this.currentToken.value === h) {
                    this.consume(d);
                    const e = this.anchorIndex();
                    if (b.OBJECT_UNIT.test(this.currentToken.value)) return new x(new w(O.ONE), e, this.unit())
                } else if (this.currentToken.type === d) {
                    if ("calc" === this.currentToken.value) return this.consume(d), this.expr();
                    if ("css" === this.currentToken.value || "var" === this.currentToken.value || "prop" === this.currentToken.value) {
                        const e = "prop" !== this.currentToken.value ? N : L;
                        this.consume(d), this.consume(c);
                        const t = this.propertyName();
                        let s = null;
                        return this.currentToken.type === y && (this.consume(y), this.consume(d), s = this.anchorIndex()), this.consume(u), new e(s, t)
                    }
                    if (b.MATH_FUNCTION.test(this.currentToken.value)) {
                        const e = this.currentToken.value,
                            t = e.toLowerCase();
                        if ("number" == typeof o[t]) return this.consume(d), new w(new O(d, o[t]));
                        const s = O[e] || new O(e, e),
                            i = [];
                        this.consume(d), this.consume(c);
                        let n = null;
                        do {
                            this.currentToken.value === y && this.consume(y), n = this.expr(), i.push(n)
                        } while (this.currentToken.value === y);
                        return this.consume(u), new I(s, i)
                    }
                } else if (this.currentToken.type === c) {
                    this.consume(c);
                    let e = this.expr();
                    return this.consume(u), e
                }
            }
            this.error(`Unexpected token ${this.currentToken.value}`)
        }
        propertyName() {
            let e = "";
            for (; this.currentToken.type === d || this.currentToken.type === p;) e += this.currentToken.value, this.pos += 1;
            return e
        }
        unit() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.ANY_UNIT;
            const t = this.currentToken;
            if (t.type === d && e.test(t.value)) return this.consume(d), new O(d, t.value = t.value.replace(/%(h|w)/, "$1").replace("%", "h"));
            this.error("Expected unit type")
        }
        anchorIndex() {
            const e = this.currentToken;
            if (e.type === g) return this.consume(g), new w(e);
            this.error("Invalid anchor reference", ". Should be something like a0, a1, a2")
        }
        parse() {
            const e = this.expr();
            return this.currentToken !== O.EOF && this.error(`Unexpected token ${this.currentToken.value}`), e
        }
    }
    class D {
        constructor(e) {
            this.parser = e, this.root = e.parse()
        }
        visit(e) {
            let t = this[e.type];
            if (!t) throw new Error(`No visit method named, ${t}`);
            return t.call(this, e)
        }
        BinOp(e) {
            switch (e.op.type) {
                case m:
                    return this.visit(e.left) + this.visit(e.right);
                case p:
                    return this.visit(e.left) - this.visit(e.right);
                case f:
                    return this.visit(e.left) * this.visit(e.right);
                case _:
                    return this.visit(e.left) / this.visit(e.right)
            }
        }
        RefValue(e) {
            let t = this.unwrapReference(e),
                s = e.unit.value,
                n = e.num.value;
            const r = l.metrics.get(t);
            switch (s) {
                case "h":
                    return .01 * n * r.height;
                case "t":
                    return .01 * n * r.top;
                case "vh":
                    return .01 * n * i.pageMetrics.windowHeight;
                case "vw":
                    return .01 * n * i.pageMetrics.windowWidth;
                case "px":
                case "deg":
                    return n;
                case "w":
                    return .01 * n * r.width;
                case "b":
                    return .01 * n * r.bottom;
                case "l":
                    return .01 * n * r.left;
                case "r":
                    return .01 * n * r.right;
                case "rad":
                    return 180 * n / Math.PI
            }
        }
        PropValue(e) {
            return (null === e.ref ? l.target : l.anchors[e.ref.value])[e.propertyName]
        }
        CSSValue(e) {
            let t = this.unwrapReference(e);
            const s = getComputedStyle(t).getPropertyValue(e.propertyName);
            return "" === s ? 0 : D.Parse(s).execute(l)
        }
        Num(e) {
            return e.value
        }
        UnaryOp(e) {
            return e.op.type === m ? +this.visit(e.expr) : e.op.type === p ? -this.visit(e.expr) : void 0
        }
        MathOp(e) {
            let t = e.list.map((e => this.visit(e)));
            return o[e.op.value].apply(null, t)
        }
        unwrapReference(e) {
            return null === e.ref ? l.target : (e.ref.value >= l.anchors.length && console.error(`Not enough anchors supplied for expression ${this.parser.lexer.text}`, l.target), l.anchors[e.ref.value])
        }
        execute(e) {
            return l = e, this.visit(this.root)
        }
        static Parse(e) {
            return a[e] || (a[e] = new D(new M(new R(e))))
        }
    }
    D.programs = a, e.exports = D
}, function(e, t, s) {
    "use strict";
    const i = s(3),
        n = s(18),
        r = s(141),
        a = s(79),
        o = s(60),
        l = s(142),
        h = s(59),
        d = s(76),
        c = s(57),
        u = s(143),
        m = {};
    "undefined" != typeof window && (m.update = s(19), m.external = s(63), m.draw = s(2));
    const {
        transformAttributes: p,
        cssAttributes: f,
        domAttributes: _
    } = s(77), g = s(144), E = s(58), y = s(145), v = Math.PI / 180, b = {
        create: s(148),
        rotateX: s(149),
        rotateY: s(150),
        rotateZ: s(151),
        scale: s(152)
    };
    e.exports = class extends c {
        constructor(e, t) {
            super(), this._events.draw = [], this.uuid = d(), this.group = e, this.element = t, this._ownerIsElement = this.element instanceof Element, this._ownerIsElement ? this.friendlyName = this.element.tagName + "." + Array.from(this.element.classList).join(".") : this.friendlyName = this.element.friendlyName || this.uuid, this.element._animInfo = this.element._animInfo || new a(e, this), this.element._animInfo.controller = this, this.element._animInfo.group = this.group, this.element._animInfo.controllers.push(this), this.tweenProps = this.element._animInfo.tweenProps, this.eventObject = new r(this), this.needsStyleUpdate = !1, this.needsClassUpdate = !1, this.elementMetrics = this.group.metrics.add(this.element), this.attributes = [], this.cssAttributes = [], this.domAttributes = [], this.keyframes = {}, this._allKeyframes = [], this._activeKeyframes = [], this.keyframesRequiringDispatch = [], this.updateCachedValuesFromElement(), this.boundsMin = 0, this.boundsMax = 0, this.mat2d = new Float32Array(6), this.mat4 = b.create(), this.needsWrite = !0, this.onDOMWriteImp = this._ownerIsElement ? this.onDOMWriteForElement : this.onDOMWriteForObject
        }
        destroy() {
            if (this.element._animInfo) {
                this.element._animInfo.controller === this && (this.element._animInfo.controller = null);
                let e = this.element._animInfo.controllers.indexOf(this);
                if (-1 !== e && this.element._animInfo.controllers.splice(e, 1), 0 === this.element._animInfo.controllers.length) this.element._animInfo = null;
                else {
                    let e = this.element._animInfo.controllers.find((e => e.group !== e.group.anim.tweenGroup));
                    e && (this.element._animInfo.controller = e, this.element._animInfo.group = e.group)
                }
            }
            this.eventObject.controller = null, this.eventObject.element = null, this.eventObject.keyframe = null, this.eventObject.tweenProps = null, this.eventObject = null, this.elementMetrics = null, this.group = null, this.keyframesRequiringDispatch = null;
            for (let e = 0; e < this._allKeyframes.length; e++) this._allKeyframes[e].destroy();
            this._allKeyframes = null, this._activeKeyframes = null, this.attributes = null, this.keyframes = null, this.element = null, this.tweenProps = null, this.destroyed = !0, super.destroy()
        }
        remove() {
            return this.group && this.group.removeKeyframeController(this)
        }
        updateCachedValuesFromElement() {
            if (!this._ownerIsElement) return;
            const e = this.getTargetComputedStyle(!0);
            let t = new DOMMatrix(e.getPropertyValue("transform")),
                s = u(t),
                r = i.KeyframeDefaults.epsilon,
                a = !1;
            ["x", "y", "z"].forEach(((e, t) => {
                this.tweenProps[e] = new n(s.translation[t], r, a, e)
            })), this.tweenProps.rotation = new n(s.rotation[2], r, a, "rotation"), ["rotationX", "rotationY", "rotationZ"].forEach(((e, t) => {
                this.tweenProps[e] = new n(s.rotation[t], r, a, e)
            })), this.tweenProps.scale = new n(s.scale[0], r, a, "scale"), ["scaleX", "scaleY", "scaleZ"].forEach(((e, t) => {
                this.tweenProps[e] = new n(s.scale[t], r, a, e)
            }))
        }
        addKeyframe(e) {
            let t = l(e);
            if (!t) throw new Error("AnimSystem Cannot create keyframe for from options `" + e + "`");
            let s = new t(this, e);
            return s.parseOptions(e), s.id = this._allKeyframes.length, this._allKeyframes.push(s), s
        }
        needsUpdate() {
            for (let e = 0, t = this.attributes.length; e < t; e++) {
                let t = this.attributes[e];
                if (this.tweenProps[t].needsUpdate()) return !0
            }
            return !1
        }
        updateLocalProgress(e) {
            for (let t = 0, s = this.attributes.length; t < s; t++) {
                let s = this.attributes[t],
                    i = this.keyframes[this.attributes[t]];
                if (1 === i.length) {
                    i[0].updateLocalProgress(e);
                    continue
                }
                let n = this.getNearestKeyframeForAttribute(s, e);
                n && n.updateLocalProgress(e)
            }
        }
        reconcile() {
            for (let e = 0, t = this.attributes.length; e < t; e++) {
                let t = this.attributes[e],
                    s = this.getNearestKeyframeForAttribute(t, this.group.position.local);
                s.updateLocalProgress(this.group.position.local), s.snapAtCreation && s.reconcile(t)
            }
        }
        determineActiveKeyframes(e) {
            e = e || h(Array.from(document.documentElement.classList));
            let t = this._activeKeyframes,
                s = this.attributes,
                i = {};
            this._activeKeyframes = [], this.attributes = [], this.keyframes = {};
            for (let t = 0; t < this._allKeyframes.length; t++) {
                let s = this._allKeyframes[t];
                if (s.markedForRemoval || s.hidden || !s.setEnabled(e))
                    for (let e in s.animValues) this.tweenProps[e].isActive = s.preserveState, s.preserveState && (i[e] = !0);
                else {
                    this._activeKeyframes.push(s);
                    for (let e in s.animValues) this.keyframes[e] = this.keyframes[e] || [], this.keyframes[e].push(s), -1 === this.attributes.indexOf(e) && (i[e] = !0, this.attributes.push(e), this.tweenProps[e].isActive = !0)
                }
            }
            this.attributes.forEach((e => this.tweenProps[e].isActive = !0)), this.cssAttributes = this.attributes.filter((e => f.includes(e) || e.startsWith("--"))).map((e => this.tweenProps[e])), this.domAttributes = this.attributes.filter((e => _.includes(e))).map((e => this.tweenProps[e]));
            let n = t.filter((e => -1 === this._activeKeyframes.indexOf(e)));
            if (0 === n.length) return;
            let r = s.filter((e => -1 === this.attributes.indexOf(e) && !i.hasOwnProperty(e)));
            if (0 !== r.length)
                if (this.needsWrite = !0, this._ownerIsElement) m.external((() => {
                    let e = r.some((e => p.includes(e))),
                        t = e && Object.keys(i).some((e => p.includes(e)));
                    e && !t && this.element.style.removeProperty("transform");
                    for (let e = 0, t = r.length; e < t; ++e) {
                        let t = r[e],
                            s = this.tweenProps[t],
                            i = s.isActive ? s.target : s.initialValue;
                        if (s.current = s.target = i, !s.isActive) switch (!0) {
                            case s instanceof g:
                            case s instanceof E:
                                s.unset(this.element.style);
                                break;
                            case s instanceof y:
                                s.unset(s.applyToStyle ? this.element.style : this.element)
                        }
                    }
                    for (let e = 0, t = n.length; e < t; ++e) {
                        let t = n[e];
                        t instanceof o && !t.preserveState && t._unapply()
                    }
                }), !0);
                else
                    for (let e = 0, t = r.length; e < t; ++e) {
                        let t = this.tweenProps[r[e]];
                        t.current = t.target, t.isActive = !1
                    }
        }
        onDOMRead(e) {
            for (let t = 0, s = this.attributes.length; t < s; t++) {
                let s = this.attributes[t],
                    i = this.getNearestKeyframeForAttribute(s, e);
                i && i.onDOMRead(s) && (this.needsWrite = !0)
            }
        }
        onDOMWrite() {
            (this.needsWrite || this.needsClassUpdate || this.needsStyleUpdate) && (this.needsWrite = !1, this.onDOMWriteImp(), this.handleEventDispatch())
        }
        onDOMWriteForObject() {
            for (let e = 0, t = this.attributes.length; e < t; e++) {
                let t = this.attributes[e];
                this.element[t] = this.tweenProps[t].current
            }
        }
        onDOMWriteForElement() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.element.style;
            this.handleStyleTransform(e);
            for (let t = 0, s = this.cssAttributes.length; t < s; t++) this.cssAttributes[t].set(e);
            for (let e = 0, t = this.domAttributes.length; e < t; e++) this.domAttributes[e].set(this.element);
            if (this.needsStyleUpdate) {
                for (let e in this.tweenProps.targetStyles) null !== this.tweenProps.targetStyles[e] && (this.element.style[e] = this.tweenProps.targetStyles[e]), this.tweenProps.targetStyles[e] = null;
                this.needsStyleUpdate = !1
            }
            this.needsClassUpdate && (this.tweenProps.targetClasses.add.length > 0 && this.element.classList.add.apply(this.element.classList, this.tweenProps.targetClasses.add), this.tweenProps.targetClasses.remove.length > 0 && this.element.classList.remove.apply(this.element.classList, this.tweenProps.targetClasses.remove), this.tweenProps.targetClasses.add.length = 0, this.tweenProps.targetClasses.remove.length = 0, this.needsClassUpdate = !1)
        }
        handleStyleTransform() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.element.style,
                t = this.tweenProps;
            if (t.z.isActive || t.rotationX.isActive || t.rotationY.isActive) {
                const s = this.mat4;
                s[0] = 1, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = 1, s[6] = 0, s[7] = 0, s[8] = 0, s[9] = 0, s[10] = 1, s[11] = 0, s[12] = 0, s[13] = 0, s[14] = 0, s[15] = 1;
                const i = t.x.current,
                    n = t.y.current,
                    r = t.z.current;
                if (s[12] = s[0] * i + s[4] * n + s[8] * r + s[12], s[13] = s[1] * i + s[5] * n + s[9] * r + s[13], s[14] = s[2] * i + s[6] * n + s[10] * r + s[14], s[15] = s[3] * i + s[7] * n + s[11] * r + s[15], 0 !== t.rotation.current || 0 !== t.rotationZ.current) {
                    const e = (t.rotation.current || t.rotationZ.current) * v;
                    b.rotateZ(s, s, e)
                }
                if (0 !== t.rotationX.current) {
                    const e = t.rotationX.current * v;
                    b.rotateX(s, s, e)
                }
                if (0 !== t.rotationY.current) {
                    const e = t.rotationY.current * v;
                    b.rotateY(s, s, e)
                }
                1 === t.scale.current && 1 === t.scaleX.current && 1 === t.scaleY.current || b.scale(s, s, [t.scale.current, t.scale.current, 1]), e.transform = "matrix3d(" + s[0] + "," + s[1] + "," + s[2] + "," + s[3] + "," + s[4] + "," + s[5] + "," + s[6] + "," + s[7] + "," + s[8] + "," + s[9] + "," + s[10] + "," + s[11] + "," + s[12] + "," + s[13] + "," + s[14] + "," + s[15] + ")"
            } else if (t.x.isActive || t.y.isActive || t.rotation.isActive || t.rotationZ.isActive || t.scale.isActive || t.scaleX.isActive || t.scaleY.isActive) {
                const s = this.mat2d;
                s[0] = 1, s[1] = 0, s[2] = 0, s[3] = 1, s[4] = 0, s[5] = 0;
                const i = t.x.current,
                    n = t.y.current,
                    r = s[0],
                    a = s[1],
                    o = s[2],
                    l = s[3],
                    h = s[4],
                    d = s[5];
                if (s[0] = r, s[1] = a, s[2] = o, s[3] = l, s[4] = r * i + o * n + h, s[5] = a * i + l * n + d, 0 !== t.rotation.current || 0 !== t.rotationZ.current) {
                    const e = (t.rotation.current || t.rotationZ.current) * v,
                        i = s[0],
                        n = s[1],
                        r = s[2],
                        a = s[3],
                        o = s[4],
                        l = s[5],
                        h = Math.sin(e),
                        d = Math.cos(e);
                    s[0] = i * d + r * h, s[1] = n * d + a * h, s[2] = i * -h + r * d, s[3] = n * -h + a * d, s[4] = o, s[5] = l
                }
                t.scaleX.isActive || t.scaleY.isActive ? (s[0] = s[0] * t.scaleX.current, s[1] = s[1] * t.scaleX.current, s[2] = s[2] * t.scaleY.current, s[3] = s[3] * t.scaleY.current) : (s[0] = s[0] * t.scale.current, s[1] = s[1] * t.scale.current, s[2] = s[2] * t.scale.current, s[3] = s[3] * t.scale.current), e.transform = "matrix(" + s[0] + ", " + s[1] + ", " + s[2] + ", " + s[3] + ", " + s[4] + ", " + s[5] + ")"
            }
        }
        handleEventDispatch() {
            if (0 !== this.keyframesRequiringDispatch.length) {
                for (let e = 0, t = this.keyframesRequiringDispatch.length; e < t; e++) {
                    let t = this.keyframesRequiringDispatch[e];
                    t.needsEventDispatch = !1, this.eventObject.keyframe = t, this.eventObject.pageMetrics = i.pageMetrics, this.eventObject.event = t.event, this.trigger(t.event, this.eventObject)
                }
                this.keyframesRequiringDispatch.length = 0
            }
            if (0 !== this._events.draw.length) {
                this.eventObject.keyframe = null, this.eventObject.event = "draw";
                for (let e = this._events.draw.length - 1; e >= 0; e--) this._events.draw[e](this.eventObject)
            }
        }
        updateAnimationConstraints() {
            for (let e = 0, t = this._activeKeyframes.length; e < t; e++) this._activeKeyframes[e].evaluateConstraints();
            this.attributes.forEach((e => {
                1 !== this.keyframes[e].length && this.keyframes[e].sort(i.KeyframeComparison)
            })), this.updateDeferredPropertyValues()
        }
        refreshMetrics() {
            let e = new Set([this.element]);
            this._allKeyframes.forEach((t => t.anchors.forEach((t => e.add(t))))), this.group.metrics.refreshCollection(e), this.group.keyframesDirty = !0
        }
        getTargetComputedStyle() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return this._ownerIsElement ? ((e || void 0 === this.group.computedStyleCache[this.uuid]) && (this.group.computedStyleCache[this.uuid] = getComputedStyle(this.element)), this.group.computedStyleCache[this.uuid]) : null
        }
        updateDeferredPropertyValues() {
            for (let e = 0, t = this.attributes.length; e < t; e++) {
                let t = this.attributes[e],
                    s = this.keyframes[t];
                if (!(s[0].keyframeType > i.KeyframeTypes.InterpolationForward))
                    for (let e = 0, i = s.length; e < i; e++) {
                        let n = s[e];
                        null === n.jsonProps[t][0] && (0 === e ? n.jsonProps[t][0] = n.animValues[t][0] = this.tweenProps[t].current : n.animValues[t][0] = s[e - 1].animValues[t][1]), null === n.jsonProps[t][1] && (n.animValues[t][1] = e === i - 1 ? this.tweenProps[t].current : s[e + 1].animValues[t][0]), n.snapAtCreation && (n.jsonProps[t][0] = n.animValues[t][0], n.jsonProps[t][1] = n.animValues[t][1])
                    }
            }
        }
        getBounds(e) {
            this.boundsMin = Number.MAX_VALUE, this.boundsMax = -Number.MAX_VALUE;
            for (let t = 0, s = this.attributes.length; t < s; t++) {
                let s = this.keyframes[this.attributes[t]];
                for (let t = 0; t < s.length; t++) {
                    let i = s[t];
                    this.boundsMin = Math.min(i.start, this.boundsMin), this.boundsMax = Math.max(i.end, this.boundsMax), e.min = Math.min(i.start, e.min), e.max = Math.max(i.end, e.max)
                }
            }
        }
        getNearestKeyframeForAttribute(e, t) {
            t = void 0 !== t ? t : this.group.position.local;
            let s = null,
                i = Number.POSITIVE_INFINITY,
                n = this.keyframes[e];
            if (void 0 === n) return null;
            let r = n.length;
            if (0 === r) return null;
            if (1 === r) return n[0];
            for (let e = 0; e < r; e++) {
                let r = n[e];
                if (r.isInRange(t)) {
                    s = r;
                    break
                }
                let a = Math.min(Math.abs(t - r.start), Math.abs(t - r.end));
                a < i && (i = a, s = r)
            }
            return s
        }
        getAllKeyframesForAttribute(e) {
            return this.keyframes[e]
        }
        updateKeyframe(e, t) {
            e.parseOptions(t), e.evaluateConstraints(), this.group.keyframesDirty = !0, m.update((() => {
                this.trigger(i.EVENTS.ON_KEYFRAME_UPDATED, e), this.group.trigger(i.EVENTS.ON_KEYFRAME_UPDATED, e)
            }), !0)
        }
        removeKeyframe(e) {
            return e.destroyed || e.controller !== this ? Promise.resolve(null) : (e.markedForRemoval = !0, this.group.keyframesDirty = !0, new Promise((t => {
                this.group.rafEmitter.executor.eventEmitter.once("before:draw", (() => {
                    t(e), e.destroy();
                    let s = this._allKeyframes.indexOf(e); - 1 !== s && this._allKeyframes.splice(s, 1)
                }))
            })))
        }
        updateAnimation(e, t) {
            return this.group.gui && console.warn("KeyframeController.updateAnimation(keyframe,props) has been deprecated. Please use updateKeyframe(keyframe,props)"), this.updateKeyframe(e, t)
        }
    }
}, function(e, t, s) {
    "use strict";
    e.exports = class {
        constructor(e) {
            this.controller = e, this.element = this.controller.element, this.keyframe = null, this.event = "", this.tweenProps = this.controller.tweenProps
        }
    }
}, function(e, t, s) {
    "use strict";
    const i = s(3),
        n = s(39),
        r = s(78),
        a = s(60),
        o = function(e) {
            for (let t in e) {
                let s = e[t];
                if (-1 === i.KeyframeJSONReservedWords.indexOf(t) && Array.isArray(s)) return !0
            }
            return !1
        };
    e.exports = function(e) {
        if (void 0 !== e.cssClass || void 0 !== e.style) {
            if (o(e)) throw "CSS Keyframes cannot tween values, please use multiple keyframes instead";
            return a
        }
        if (o(e)) return n;
        if (e.event) return r;
        throw delete e.anchors, `Could not determine tween type based on ${JSON.stringify(e)}`
    }
}, function(e, t, s) {
    "use strict";
    "undefined" != typeof window && (window.DOMMatrix = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix);
    const i = 180 / Math.PI,
        n = e => Math.round(1e6 * e) / 1e6;

    function r(e) {
        return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2])
    }

    function a(e, t) {
        return 0 === t ? Array.from(e) : [e[0] / t, e[1] / t, e[2] / t]
    }

    function o(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
    }

    function l(e, t, s, i) {
        return [e[0] * s + t[0] * i, e[1] * s + t[1] * i, e[2] * s + t[2] * i]
    }

    function h(e) {
        const t = new Float32Array(4),
            s = new Float32Array(3),
            h = new Float32Array(3),
            d = new Float32Array(3);
        d[0] = e[3][0], d[1] = e[3][1], d[2] = e[3][2];
        const c = new Array(3);
        for (let t = 0; t < 3; t++) c[t] = e[t].slice(0, 3);
        s[0] = r(c[0]), c[0] = a(c[0], s[0]), h[0] = o(c[0], c[1]), c[1] = l(c[1], c[0], 1, -h[0]), s[1] = r(c[1]), c[1] = a(c[1], s[1]), h[0] /= s[1], h[1] = o(c[0], c[2]), c[2] = l(c[2], c[0], 1, -h[1]), h[2] = o(c[1], c[2]), c[2] = l(c[2], c[1], 1, -h[2]), s[2] = r(c[2]), c[2] = a(c[2], s[2]), h[1] /= s[2], h[2] /= s[2];
        const u = (m = c[1], p = c[2], [m[1] * p[2] - m[2] * p[1], m[2] * p[0] - m[0] * p[2], m[0] * p[1] - m[1] * p[0]]);
        var m, p;
        if (o(c[0], u) < 0)
            for (let e = 0; e < 3; e++) s[e] *= -1, c[e][0] *= -1, c[e][1] *= -1, c[e][2] *= -1;
        let f;
        return t[0] = .5 * Math.sqrt(Math.max(1 + c[0][0] - c[1][1] - c[2][2], 0)), t[1] = .5 * Math.sqrt(Math.max(1 - c[0][0] + c[1][1] - c[2][2], 0)), t[2] = .5 * Math.sqrt(Math.max(1 - c[0][0] - c[1][1] + c[2][2], 0)), t[3] = .5 * Math.sqrt(Math.max(1 + c[0][0] + c[1][1] + c[2][2], 0)), c[2][1] > c[1][2] && (t[0] = -t[0]), c[0][2] > c[2][0] && (t[1] = -t[1]), c[1][0] > c[0][1] && (t[2] = -t[2]), f = t[0] < .001 && t[0] >= 0 && t[1] < .001 && t[1] >= 0 ? [0, 0, n(180 * Math.atan2(c[0][1], c[0][0]) / Math.PI)] : function(e) {
            const [t, s, r, a] = e, o = t * t, l = s * s, h = r * r, d = t * s + r * a, c = a * a + o + l + h;
            return d > .49999 * c ? [0, 2 * Math.atan2(t, a) * i, 90] : d < -.49999 * c ? [0, -2 * Math.atan2(t, a) * i, -90] : [n(Math.atan2(2 * t * a - 2 * s * r, 1 - 2 * o - 2 * h) * i), n(Math.atan2(2 * s * a - 2 * t * r, 1 - 2 * l - 2 * h) * i), n(Math.asin(2 * t * s + 2 * r * a) * i)]
        }(t), {
            translation: d,
            rotation: f,
            eulerRotation: f,
            scale: [n(s[0]), n(s[1]), n(s[2])]
        }
    }
    e.exports = function(e) {
        e instanceof Element && (e = String(getComputedStyle(e).transform).trim());
        let t = e instanceof DOMMatrix ? e : new DOMMatrix(e);
        const s = new Array(4);
        for (let e = 1; e < 5; e++) {
            const i = s[e - 1] = new Float32Array(4);
            for (let s = 1; s < 5; s++) i[s - 1] = t[`m${e}${s}`]
        }
        return h(s)
    }
}, function(e, t, s) {
    "use strict";
    const i = s(81);
    e.exports = class extends i {
        set(e) {
            const t = `rgba(${Math.round(this.current[0])},${Math.round(this.current[1])},${Math.round(this.current[2])},${this.current[3]})`;
            e.setProperty(this.key, t)
        }
        unset(e) {
            e.removeProperty(this.key)
        }
    }
}, function(e, t, s) {
    "use strict";
    const i = s(81),
        n = s(146);
    e.exports = class extends i {
        constructor(e, t, s, i, r, a, o) {
            super(n.parseExpression(null, e), t, s, i, r, a), this.applyToStyle = o, this.pathStrings = n.getPathStrings(e)
        }
        update(e, t, s) {
            if (e[0].length !== e[1].length) throw new Error(`Path length mismatch. Start/end paths must must contain the same number of points. Start value: \r ${n.reconstructPath(e[0],this.pathStrings)}`);
            return super.update(e, t, s)
        }
        set(e) {
            const t = n.reconstructPath(this.current, this.pathStrings);
            this.applyToStyle ? e.setProperty(this.key, t) : e.setAttribute("d", t)
        }
        unset(e) {
            if (this.applyToStyle) e.removeProperty(this.key);
            else {
                const t = n.reconstructPath(this.initialValue, this.pathStrings);
                e.setAttribute("d", t)
            }
        }
    }
}, function(e, t, s) {
    "use strict";
    const {
        trim: i,
        getStringNumbers: n,
        getStringNonNumbers: r,
        reconstructStringWithNumbers: a
    } = s(147), o = /^\s*?M[(-?\d)|\s]/, l = /^(inset|circle|ellipse|polygon|path)\(/, h = e => o.test(e), d = e => l.test(e);
    e.exports = {
        install(e, t) {
            e.plugins.parser.includes(this) || e.plugins.parser.push(this)
        },
        parseExpression: (e, t) => "string" == typeof t && (h(t) || d(t)) ? n(t) : null,
        scalePath(e, t) {
            const s = this.parseExpression(null, e),
                i = r(e);
            for (let e = 0, i = s.length; e < i; e++) s[e] = s[e] * t;
            return this.reconstructPath(s, i)
        },
        trim: i,
        getPathStrings: r,
        getPathNumbers: n,
        reconstructPath: a
    }
}, function(e, t, s) {
    "use strict";
    const i = /-?\d*\.?\d+/gm;
    e.exports = {
        getStringNumbers: e => e.match(i).map((e => Number.parseFloat(e))),
        getStringNonNumbers: e => e.split(i),
        reconstructStringWithNumbers(e, t) {
            let s = "";
            for (var i = 0, n = e.length; i < n; i++) s += t[i] + e[i];
            return s += t[n], s
        },
        trim: e => null === e ? e : e.replace(/\s+/gm, " ").trim()
    }
}, function(e, t) {
    e.exports = function() {
        var e = new Float32Array(16);
        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }
}, function(e, t) {
    e.exports = function(e, t, s) {
        var i = Math.sin(s),
            n = Math.cos(s),
            r = t[4],
            a = t[5],
            o = t[6],
            l = t[7],
            h = t[8],
            d = t[9],
            c = t[10],
            u = t[11];
        t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]);
        return e[4] = r * n + h * i, e[5] = a * n + d * i, e[6] = o * n + c * i, e[7] = l * n + u * i, e[8] = h * n - r * i, e[9] = d * n - a * i, e[10] = c * n - o * i, e[11] = u * n - l * i, e
    }
}, function(e, t) {
    e.exports = function(e, t, s) {
        var i = Math.sin(s),
            n = Math.cos(s),
            r = t[0],
            a = t[1],
            o = t[2],
            l = t[3],
            h = t[8],
            d = t[9],
            c = t[10],
            u = t[11];
        t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]);
        return e[0] = r * n - h * i, e[1] = a * n - d * i, e[2] = o * n - c * i, e[3] = l * n - u * i, e[8] = r * i + h * n, e[9] = a * i + d * n, e[10] = o * i + c * n, e[11] = l * i + u * n, e
    }
}, function(e, t) {
    e.exports = function(e, t, s) {
        var i = Math.sin(s),
            n = Math.cos(s),
            r = t[0],
            a = t[1],
            o = t[2],
            l = t[3],
            h = t[4],
            d = t[5],
            c = t[6],
            u = t[7];
        t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]);
        return e[0] = r * n + h * i, e[1] = a * n + d * i, e[2] = o * n + c * i, e[3] = l * n + u * i, e[4] = h * n - r * i, e[5] = d * n - a * i, e[6] = c * n - o * i, e[7] = u * n - l * i, e
    }
}, function(e, t) {
    e.exports = function(e, t, s) {
        var i = s[0],
            n = s[1],
            r = s[2];
        return e[0] = t[0] * i, e[1] = t[1] * i, e[2] = t[2] * i, e[3] = t[3] * i, e[4] = t[4] * n, e[5] = t[5] * n, e[6] = t[6] * n, e[7] = t[7] * n, e[8] = t[8] * r, e[9] = t[9] * r, e[10] = t[10] * r, e[11] = t[11] * r, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    }
}, function(e, t, s) {
    "use strict";
    const i = s(61),
        n = s(82),
        r = s(22);
    let a = 0;
    const o = {};
    "undefined" != typeof window && (o.create = s(11));
    class l extends i {
        constructor(e, t) {
            e || ((e = document.createElement("div")).className = "TimeGroup-" + a++), super(e, t), this.name = this.name || e.getAttribute("data-anim-time-group"), this._isPaused = !0, this._repeats = 0, this._isReversed = !1, this._timeScale = 1, this._chapterPlayer = new n(this), this.now = performance.now()
        }
        finalizeInit() {
            if (!this.anim) throw "TimeGroup not instantiated correctly. Please use `AnimSystem.createTimeGroup(el)`";
            this.onPlayTimeUpdate = this.onPlayTimeUpdate.bind(this), super.finalizeInit()
        }
        progress(e) {
            if (void 0 === e) return 0 === this.boundsMax ? 0 : this.position.local / this.boundsMax;
            let t = e * this.boundsMax;
            this.timelineUpdateRequired = !0, this.updateTimeline(t)
        }
        time(e) {
            if (void 0 === e) return this.position.local;
            e = r.clamp(e, this.boundsMin, this.duration), this.timelineUpdateRequired = !0, this.updateTimeline(e)
        }
        play(e) {
            this.reversed(!1), this.isEnabled = !0, this._isPaused = !1, this.time(e), this.now = performance.now(), this._playheadEmitter.run()
        }
        reverse(e) {
            this.reversed(!0), this.isEnabled = !0, this._isPaused = !1, this.time(e), this.now = performance.now(), this._playheadEmitter.run()
        }
        reversed(e) {
            if (void 0 === e) return this._isReversed;
            this._isReversed = e
        }
        restart() {
            this._isReversed ? (this.progress(1), this.reverse(this.time())) : (this.progress(0), this.play(this.time()))
        }
        pause(e) {
            this.time(e), this._isPaused = !0
        }
        paused(e) {
            return void 0 === e ? this._isPaused : (this._isPaused = e, this._isPaused || this.play(), this)
        }
        onPlayTimeUpdate() {
            if (this._isPaused) return;
            let e = performance.now(),
                t = (e - this.now) / 1e3;
            this.now = e, this._isReversed && (t = -t);
            let s = this.time() + t * this._timeScale;
            if (this._repeats === l.REPEAT_FOREVER || this._repeats > 0) {
                let e = !1;
                !this._isReversed && s > this.boundsMax ? (s -= this.boundsMax, e = !0) : this._isReversed && s < 0 && (s = this.boundsMax + s, e = !0), e && (this._repeats = this._repeats === l.REPEAT_FOREVER ? l.REPEAT_FOREVER : this._repeats - 1)
            }
            this.time(s);
            let i = !this._isReversed && this.position.local !== this.duration,
                n = this._isReversed && 0 !== this.position.local;
            i || n ? this._playheadEmitter.run() : this.paused(!0)
        }
        updateProgress(e) {
            this.hasDuration() ? (this.position.localUnclamped = e, this.position.local = r.clamp(this.position.localUnclamped, this.boundsMin, this.boundsMax)) : this.position.local = this.position.localUnclamped = 0
        }
        updateBounds() {
            if (0 === this.keyframeControllers.length) return this.boundsMin = 0, void(this.boundsMax = 0);
            let e = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY
            };
            for (let t = 0, s = this.keyframeControllers.length; t < s; t++) this.keyframeControllers[t].getBounds(e);
            this.boundsMin = 0, this.boundsMax = e.max, this.viewableRange.a = this.viewableRange.b = 0, this.viewableRange.c = this.viewableRange.d = this.boundsMax, this.timelineUpdateRequired = !0
        }
        setupRAFEmitter(e) {
            this._playheadEmitter = new o.create, this._playheadEmitter.on("update", this.onPlayTimeUpdate), super.setupRAFEmitter(e)
        }
        get duration() {
            return this.keyframesDirty && this.onKeyframesDirty({
                silent: !0
            }), this.boundsMax
        }
        timeScale(e) {
            return void 0 === e ? this._timeScale : (this._timeScale = e, this)
        }
        repeats(e) {
            if (void 0 === e) return this._repeats;
            this._repeats = e
        }
        getPosition() {
            return this.position.local
        }
        addChapter(e) {
            return this._chapterPlayer.addChapter(e)
        }
        playToChapter(e) {
            return this._chapterPlayer.playToChapter(e)
        }
        convertScrollPositionToTValue(e) {
            return e
        }
        convertTValueToScrollPosition(e) {
            return e
        }
        hasDuration() {
            return this.duration > 0
        }
        destroy() {
            this._chapterPlayer.destroy(), this._playheadEmitter.destroy(), this._playheadEmitter = null, super.destroy()
        }
        get timelineProgress() {
            return this.progress()
        }
        set timelineProgress(e) {
            this.progress(e)
        }
        get progressValue() {
            return this.progress()
        }
        set progressValue(e) {
            this.progress(e)
        }
        get timeValue() {
            return this.time()
        }
        set timeValue(e) {
            this.time(e)
        }
    }
    l.REPEAT_FOREVER = -1, e.exports = l
}, function(e, t, s) {
    "use strict";
    const i = s(61),
        n = (s(82), s(22));
    let r = 0;
    const a = {};
    "undefined" != typeof window && (a.create = s(11));
    e.exports = class extends i {
        constructor(e, t) {
            e || ((e = document.createElement("div")).className = "TweenGroup-" + r++), super(e, t), this.name = "Tweens", this.keyframes = [], this._isPaused = !1, this.now = performance.now()
        }
        finalizeInit() {
            this.onTimeEmitterUpdate = this.onTimeEmitterUpdate.bind(this), this.removeExpiredKeyframeControllers = this.removeExpiredKeyframeControllers.bind(this), super.finalizeInit()
        }
        destroy() {
            this._timeEmitter.destroy(), this._timeEmitter = null, this._keyframes = [], super.destroy()
        }
        setupRAFEmitter(e) {
            this.now = performance.now(), this._timeEmitter = new a.create, this._timeEmitter.on("update", this.onTimeEmitterUpdate), this._timeEmitter.run(), super.setupRAFEmitter(e)
        }
        addKeyframe(e, t) {
            if (void 0 !== t.start || void 0 !== t.end) throw Error("Tweens do not have a start or end, they can only have a duration. Consider using a TimeGroup instead");
            if ("number" != typeof t.duration) throw Error("Tween options.duration is undefined, or is not a number");
            let s, i;
            t.start = (t.delay || 0) + this.position.localUnclamped, t.end = t.start + t.duration, t.preserveState = !0, t.snapAtCreation = !0, e._animInfo && (s = e._animInfo.group, i = e._animInfo.controller);
            let n = super.addKeyframe(e, t);
            return e._animInfo.group = s, e._animInfo.controller = i, [
                ["onStart", "once"],
                ["onDraw", "on"]
            ].forEach((e => {
                let [s, i] = e;
                if (!t[s]) return;
                let r = t[s];
                t[s] = n.controller[i]("draw", (e => {
                    n.markedForRemoval || (e.keyframe = n, r(e), e.keyframe = null)
                }))
            })), this.removeOverlappingProps(n), this.keyframes.push(n), this._timeEmitter.willRun() || (this.now = performance.now(), this._timeEmitter.run()), n
        }
        removeOverlappingProps(e) {
            if (e.controller._allKeyframes.length <= 1) return;
            let t = Object.keys(e.animValues),
                s = e.controller;
            for (let i = 0, n = s._allKeyframes.length; i < n; i++) {
                const n = s._allKeyframes[i];
                if (n === e) continue;
                if (n.markedForRemoval) continue;
                let r = Object.keys(n.animValues),
                    a = r.filter((e => t.includes(e)));
                a.length !== r.length ? a.forEach((e => delete n.animValues[e])) : (n.markedForRemoval = !0, n.jsonProps.onDraw && n.controller.off("draw", n.jsonProps.onDraw))
            }
        }
        onTimeEmitterUpdate(e) {
            if (this._isPaused || 0 === this.keyframeControllers.length) return;
            let t = performance.now(),
                s = (t - this.now) / 1e3;
            this.now = t;
            let i = this.position.local + s;
            this.position.local = this.position.localUnclamped = i, this.onTimeUpdate()
        }
        onTimeUpdate() {
            for (let e = 0, t = this.keyframes.length; e < t; e++) this.keyframes[e].markedForRemoval || this.keyframes[e].updateLocalProgress(this.position.localUnclamped);
            this.requestDOMChange(), this._timeEmitter.run(), null !== this.gui && this.gui.onScrollUpdate(this.position)
        }
        onDOMRead() {
            if (this.keyframesDirty && this.onKeyframesDirty(), 0 !== this.keyframes.length)
                for (let e = 0, t = this.keyframes.length; e < t; e++) {
                    this.keyframes[e].controller.needsWrite = !0;
                    for (let t in this.keyframes[e].animValues) this.keyframes[e].onDOMRead(t)
                }
        }
        onDOMWrite() {
            super.onDOMWrite(), this.removeExpiredKeyframes()
        }
        removeExpiredKeyframes() {
            let e = this.keyframes.length,
                t = e;
            for (; e--;) {
                let t = this.keyframes[e];
                t.destroyed ? this.keyframes.splice(e, 1) : (t.markedForRemoval && (t.jsonProps.onComplete && 1 === t.localT && (t.controller.eventObject.keyframe = t, t.jsonProps.onComplete(t.controller.eventObject), t.jsonProps.onComplete = null), null !== this.gui && this.gui.isDraggingPlayhead || (t.remove(), this.keyframes.splice(e, 1)), t.jsonProps.onStart && t.controller.off("draw", t.jsonProps.onStart), t.jsonProps.onDraw && t.controller.off("draw", t.jsonProps.onDraw)), 1 === t.localT && (t.markedForRemoval = !0))
            }
            this.keyframes.length === t && 0 !== this.keyframes.length || this._timeEmitter.executor.eventEmitter.once("after:draw", this.removeExpiredKeyframeControllers)
        }
        removeExpiredKeyframeControllers() {
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++) {
                let t = !0,
                    s = this.keyframeControllers[e];
                for (let e = 0, i = s._allKeyframes.length; e < i; e++)
                    if (!s._allKeyframes[e].destroyed) {
                        t = !1;
                        break
                    }
                t && s.remove()
            }
        }
        updateBounds() {
            this.boundsMin = Math.min(...this.keyframes.map((e => e.start))), this.boundsMax = Math.max(...this.keyframes.map((e => e.end)))
        }
        play() {
            this.isEnabled = !0, this._isPaused = !1, this.now = performance.now(), this._timeEmitter.run()
        }
        pause() {
            this._isPaused = !0
        }
        paused() {
            return this._isPaused
        }
        time(e) {
            if (void 0 === e) return this.position.local;
            this.position.local = this.position.localUnclamped = n.clamp(e, this.boundsMin, this.boundsMax), this.onTimeUpdate()
        }
        performTimelineDispatch() {}
        hasDuration() {
            return !0
        }
        getPosition() {
            return this.position.local
        }
        updateProgress(e) {}
        get duration() {
            return this.boundsMax
        }
    }
}, function(e, t, s) {
    "use strict";
    e.exports = {
        version: "3.8.0",
        major: "3.x",
        majorMinor: "3.8"
    }
}, function(e, t, s) {
    "use strict";
    const i = s(12).EventEmitterMicro,
        n = s(84),
        r = s(38),
        a = s(3),
        o = s(85),
        l = {};
    class h extends i {
        constructor(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            super(), this.el = e, this.anim = r, this.componentAttribute = t.attribute || "data-component-list", this.components = [], this.componentsInitialized = !1, this.el.getAttribute("data-anim-scroll-group") || this.el.setAttribute("data-anim-scroll-group", "bubble-gum-group"), n.add((() => {
                r.initialize().then((() => {
                    this.initComponents(), this.setupEvents(), this.components.forEach((e => e.mounted())), this.trigger(h.EVENTS.DOM_COMPONENTS_MOUNTED)
                }))
            }))
        }
        initComponents() {
            const e = Array.prototype.slice.call(this.el.querySelectorAll(`[${this.componentAttribute}]`));
            this.el.hasAttribute(this.componentAttribute) && e.push(this.el);
            for (let t = 0; t < e.length; t++) {
                let s = e[t],
                    i = s.getAttribute(this.componentAttribute).split(" ");
                for (let e = 0, t = i.length; e < t; e++) {
                    let t = i[e];
                    "" !== t && " " !== t && this.addComponent({
                        el: s,
                        componentName: t
                    })
                }
            }
            this.componentsInitialized = !0
        }
        setupEvents() {
            this.onResizeDebounced = this.onResizeDebounced.bind(this), this.onResizeImmediate = this.onResizeImmediate.bind(this), this.onBreakpointChange = this.onBreakpointChange.bind(this), r.on(a.PageEvents.ON_RESIZE_IMMEDIATE, this.onResizeImmediate), r.on(a.PageEvents.ON_RESIZE_DEBOUNCED, this.onResizeDebounced), r.on(a.PageEvents.ON_BREAKPOINT_CHANGE, this.onBreakpointChange)
        }
        addComponent(e) {
            const {
                el: t,
                componentName: s,
                data: i
            } = e;
            if (!o.hasOwnProperty(s)) throw "BubbleGum::addComponent could not add component to '" + t.className + "'. No component type '" + s + "' found!";
            const n = o[s];
            if (!h.componentIsSupported(n, s)) return void 0 === l[s] && (console.log("BubbleGum::addComponent unsupported component '" + s + "'. Reason: '" + s + ".IS_SUPPORTED' returned false"), l[s] = !0), null;
            let r = t.dataset.componentList || "";
            r.includes(s) || (t.dataset.componentList = r.split(" ").concat(s).join(" "));
            let d = new n({
                el: t,
                data: i,
                componentName: e.componentName,
                gum: this,
                pageMetrics: a.pageMetrics
            });
            return this.components.push(d), this.componentsInitialized && d.mounted(), d
        }
        removeComponent(e) {
            const t = this.components.indexOf(e); - 1 !== t && (this.components.splice(t, 1), e.el.dataset.componentList = e.el.dataset.componentList.split(" ").filter((t => t !== e.componentName)).join(" "), e.destroy())
        }
        getComponentOfType(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement;
            const s = `[${this.componentAttribute}*=${e}]`,
                i = t.matches(s) ? t : t.querySelector(s);
            return i ? this.components.find((t => t instanceof o[e] && t.el === i)) : null
        }
        getComponentsOfType(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement;
            const s = `[${this.componentAttribute}*=${e}]`,
                i = t.matches(s) ? [t] : Array.from(t.querySelectorAll(s));
            return this.components.filter((t => t instanceof o[e] && i.includes(t.el)))
        }
        getComponentsForElement(e) {
            return this.components.filter((t => t.el === e))
        }
        onResizeImmediate() {
            this.components.forEach((e => e.onResizeImmediate(a.pageMetrics)))
        }
        onResizeDebounced() {
            this.components.forEach((e => e.onResizeDebounced(a.pageMetrics)))
        }
        onBreakpointChange() {
            this.components.forEach((e => e.onBreakpointChange(a.pageMetrics)))
        }
        static componentIsSupported(e, t) {
            const s = e.IS_SUPPORTED;
            if (void 0 === s) return !0;
            if ("function" != typeof s) return console.error('BubbleGum::addComponent error in "' + t + '".IS_SUPPORTED - it should be a function which returns true/false'), !0;
            const i = e.IS_SUPPORTED();
            return void 0 === i ? (console.error('BubbleGum::addComponent error in "' + t + '".IS_SUPPORTED - it should be a function which returns true/false'), !0) : i
        }
    }
    h.EVENTS = {
        DOM_COMPONENTS_MOUNTED: "DOM_COMPONENTS_MOUNTED"
    }, e.exports = h
}, function(e, t, s) {
    "use strict";
    var i = s(0),
        n = i(s(158)),
        r = i(s(163)),
        a = i(s(177)),
        o = i(s(178)),
        l = i(s(179)),
        h = i(s(224)),
        d = i(s(247)),
        c = i(s(249)),
        u = i(s(267)),
        m = i(s(271)),
        p = i(s(274)),
        f = i(s(275)),
        _ = i(s(277)),
        g = i(s(278)),
        E = i(s(279)),
        y = i(s(280)),
        v = i(s(281)),
        b = i(s(282)),
        A = i(s(283)),
        T = i(s(287)),
        O = i(s(288)),
        P = i(s(289)),
        C = i(s(290)),
        S = i(s(291));
    e.exports = {
        AppMarquee: E.default,
        AllAccessPassL1: n.default,
        AllAccessPassL2: r.default,
        ArLink: a.default,
        CameraVideo: y.default,
        ChipSlide: v.default,
        FanOut: b.default,
        FocusManager: o.default,
        HighlightsGallery: l.default,
        IconCardModal: h.default,
        InlineMediaDefault: d.default,
        InlineMediaPlugins: A.default,
        L2Modal: c.default,
        LocalnavTrigger: O.default,
        MagicKeyboardFadein: C.default,
        PageXpController: u.default,
        ProductGallery: m.default,
        ProductTileEqualizer: p.default,
        SlideGallery: f.default,
        TextAnim: _.default,
        VideoFallbackListener: S.default,
        VideoToggle: T.default,
        WelcomeHero: P.default,
        WillChange: g.default
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(2)),
        r = i(s(4)),
        a = s(13),
        o = i(s(87)),
        l = i(s(160)),
        h = i(s(161)),
        d = i(s(162)),
        c = i(s(88));
    class u extends r.default {
        constructor(e) {
            super(e), this.aaps = [], this.aapElements = this.el.querySelectorAll('[data-aap-level="1"]'), this.isAnimating = !1
        }
        mounted() {
            this.isEnhanced() && this.initEnhanced(), this.aapElements.forEach((e => {
                let t = null;
                switch (e.dataset.aapType) {
                    case "highlights":
                        t = new d.default(this, e);
                        break;
                    case "3d-viewer":
                        t = new o.default(this, e);
                        break;
                    case "base":
                        t = new l.default(this, e);
                        break;
                    case "base-link":
                        t = new h.default(this, e);
                        break;
                    case "standard-gallery":
                        t = new c.default(this, e)
                }
                t && (t.mounted(), this.aaps.push(t))
            })), this.setupEvents()
        }
        setupEvents() {
            this.anim.once(a.EVT_UNENHANCE, (() => this.destroy()))
        }
        destroy() {
            (0, n.default)((() => {
                this.aaps.forEach((e => {
                    e.isEnabled && e.destroy()
                }))
            }))
        }
        initEnhanced() {
            this.scrollGroup = this.anim.createScrollGroup(this.el), this.scrollGroup.name = "AAP L1 Triggers"
        }
        isEnhanced() {
            return document.documentElement.classList.contains(a.FEATURE_ENHANCED)
        }
        static IS_SUPPORTED() {
            return !0
        }
    }
    t.default = u
}, function(e, t, s) {
    "use strict";
    const {
        SharedInstance: i
    } = s(20), n = e => `${e[0].toUpperCase()+e.slice(1)}`, r = ["before:update", "update", "after:update", "before:draw", "draw", "after:draw"], a = (e, t, s) => {
        let i = n(s);
        [`before${i}`, s, `after${i}`].forEach((e => {
            const s = e.replace(/[A-Z]/, (e => `:${e[0].toLowerCase()}`));
            t[e] = e => t.once(s, e, !0), t[`next${n(e)}`] = e => {
                let i = 0,
                    n = () => {
                        if (1 == i++) return e(), t.off(s, n);
                        t.run()
                    };
                return t.on(s, n, !0)
            }, t[`cancel${n(e)}`] = t[`cancelNext${n(e)}`] = e => t.off(s, e)
        }))
    };
    class o {
        constructor() {
            this.scheduled = !1, this.e = {}
        }
        setExec(e) {
            return this.exec = e, a(this.exec, this, "update"), a(this.exec, this, "draw"), this
        }
        run() {
            this.scheduled || (this.exec.schedule(this), this.scheduled = !0)
        }
        destroy() {
            this.cancel(), Object.freeze(this.e = {})
        }
        cancel() {
            this.scheduled = !1, this.exec.emitters.delete(this)
        }
        on(e, t, s) {
            return s && this.run(), this.e[e] = this.e[e] || [], this.e[e].push(t), t
        }
        once(e, t, s) {
            const i = () => {
                this.off(e, i), t()
            };
            return this.on(e, i, s)
        }
        has(e) {
            return e in this.e && 0 !== this.e[e].size
        }
        off(e, t) {
            if (!this.has(e)) return;
            if (!t) return void delete this.e[e];
            const s = this.e[e].indexOf(t); - 1 !== s && this.e[e].splice(s, 1)
        }
        trigger(e) {
            this.has(e) && this.e[e].slice().forEach((t => {
                this.e[e].includes(t) && t()
            }))
        }
    }
    const l = i.share("RAFEmitter", "1.x", new class extends o {
        constructor() {
            super(), this.raf = "undefined" != typeof window ? window.requestAnimationFrame.bind(window) : () => {}, this.emitters = new Set([this]), this.setExec(this)
        }
        cancel() {}
        destroy() {}
        create() {
            return (new o).setExec(this)
        }
        schedule(e) {
            this.emitters.add(e), this.scheduled || (this.scheduled = !0, this.raf(this.perform.bind(this)))
        }
        perform() {
            this.scheduled = !1;
            let e = this.emitters;
            this.emitters = new Set([this]), r.forEach((t => {
                e.forEach((e => {
                    t === r[0] && (e.scheduled = !1), e.trigger(t)
                }))
            }))
        }
    });
    e.exports = {
        RAFExecutor: l,
        beforeUpdate: l.beforeUpdate,
        update: l.update,
        afterUpdate: l.afterUpdate,
        beforeDraw: l.beforeDraw,
        draw: l.draw,
        afterDraw: l.afterDraw,
        nextBeforeUpdate: l.nextBeforeUpdate,
        nextUpdate: l.nextUpdate,
        nextAfterUpdate: l.nextAfterUpdate,
        nextBeforeDraw: l.nextBeforeDraw,
        nextDraw: l.nextDraw,
        nextAfterDraw: l.nextAfterDraw,
        cancelBeforeUpdate: l.cancelBeforeUpdate,
        cancelUpdate: l.cancelUpdate,
        cancelAfterUpdate: l.cancelAfterUpdate,
        cancelBeforeDraw: l.cancelBeforeDraw,
        cancelDraw: l.cancelDraw,
        cancelAfterDraw: l.cancelAfterDraw,
        cancelNextBeforeUpdate: l.cancelNextBeforeUpdate,
        cancelNextUpdate: l.cancelNextUpdate,
        cancelNextAfterUpdate: l.cancelNextAfterUpdate,
        cancelNextBeforeDraw: l.cancelNextBeforeDraw,
        cancelNextDraw: l.cancelNextDraw,
        cancelNextAfterDraw: l.cancelNextAfterDraw
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(16)),
        r = s(17);
    class a extends n.default {
        constructor(e, t) {
            super(e, t, "textDriven"), this.background = this.aap.querySelectorAll(".all-access-pass__background")[0], this.text = this.aap.querySelector(".aap-base__text"), this.icon = this.aap.querySelector(".aap-base__icon")
        }
        mounted() {
            super.mounted(), this.isEnhanced() && this.initEnhanced()
        }
        initEnhanced() {
            document.fonts.ready.then((() => {
                this._getBounds(), this._setupTimeGroups(), this._setupScrollGroup()
            }))
        }
        _getBounds() {
            this.background.style.transform = "scale(1)", this.background.style.width = this.background.style.height = "auto", this.backgroundBounds = this.background.getBoundingClientRect()
        }
        _setupTimeGroups() {
            this.dismiss.name = `AAP Base: Dismiss - ${this.aap.id}`, (0, r.setDefaultDismissKeyframes)(this.dismiss, this.background, this.backgroundBounds), this.dismiss.addKeyframe(this.text, {
                start: 0,
                end: .25,
                opacity: [1, 0]
            }), this.dismiss.addKeyframe(this.icon, {
                start: 0,
                end: .25,
                scale: [1, 0]
            }), this.dismiss.on("complete", (() => {
                this.isAnimating = !1, this.aap.classList.add("inactive"), this.inRange && (this.isAnimating = !0, this.introduceTimeline())
            })), this.introduce.name = `AAP Base: Introduce - ${this.aap.id}`, (0, r.setDefaultIntroduceKeyframes)(this.introduce, this.aap, this.background), this.introduce.addKeyframe(this.icon, {
                start: .7,
                end: 1,
                scale: [0, 1],
                easeFunction: r.AAP_EASE_FUNCTIONS.SPRING
            }), this.introduce.addKeyframe(this.background, {
                start: .9,
                end: 1.5,
                width: ["css(--aap-min-height)", `${this.backgroundBounds.width}px`],
                height: ["css(--aap-min-height)", `${this.backgroundBounds.height}px`],
                easeFunction: r.AAP_EASE_FUNCTIONS.SPRING
            }), this.introduce.addKeyframe(this.text, {
                start: 1.2,
                end: 1.5,
                opacity: [0, 1]
            }), this.introduce.on("complete", (() => {
                this.isAnimating = !1, this.inRange || (this.isAnimating = !0, this.dismissTimeline())
            })), requestAnimationFrame((() => {
                this.dismiss.progress(1)
            }))
        }
    }
    t.default = a
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(16)),
        r = s(17);
    class a extends n.default {
        constructor(e, t) {
            super(e, t, "textDriven"), this.background = this.aap.querySelectorAll(".all-access-pass__background")[0], this.text = this.aap.querySelector(".aap-base-link__text"), this.icon = this.aap.querySelector(".aap-base-link__icon")
        }
        mounted() {
            super.mounted(), this.isEnhanced() && this.initEnhanced()
        }
        initEnhanced() {
            document.fonts.ready.then((() => {
                this._getBounds(), this._setupTimeGroups(), this._setupScrollGroup()
            }))
        }
        _getBounds() {
            this.background.style.transform = "scale(1)", this.background.style.width = this.background.style.height = "auto", this.backgroundBounds = this.background.getBoundingClientRect()
        }
        _setupTimeGroups() {
            this.dismiss.name = `AAP Base Link: Dismiss - ${this.aap.id}`, (0, r.setDefaultDismissKeyframes)(this.dismiss, this.background, this.backgroundBounds), this.dismiss.addKeyframe(this.text, {
                start: 0,
                end: .25,
                opacity: [1, 0]
            }), this.dismiss.addKeyframe(this.icon, {
                start: 0,
                end: .25,
                scale: [1, 0]
            }), this.dismiss.on("complete", (() => {
                this.isAnimating = !1, this.aap.classList.add("inactive"), this.inRange && (this.isAnimating = !0, this.introduceTimeline())
            })), this.introduce.name = `AAP Base Link: Introduce - ${this.aap.id}`, (0, r.setDefaultIntroduceKeyframes)(this.introduce, this.aap, this.background), this.introduce.addKeyframe(this.icon, {
                start: .7,
                end: 1,
                scale: [0, 1],
                easeFunction: r.AAP_EASE_FUNCTIONS.SPRING
            }), this.introduce.addKeyframe(this.background, {
                start: .9,
                end: 1.5,
                width: ["css(--aap-min-height)", `${this.backgroundBounds.width}px`],
                height: ["css(--aap-min-height)", `${this.backgroundBounds.height}px`],
                easeFunction: r.AAP_EASE_FUNCTIONS.SPRING
            }), this.introduce.addKeyframe(this.text, {
                start: 1.2,
                end: 1.5,
                opacity: [0, 1]
            }), this.introduce.on("complete", (() => {
                this.isAnimating = !1, this.inRange || (this.isAnimating = !0, this.dismissTimeline())
            })), requestAnimationFrame((() => {
                this.dismiss.progress(1)
            }))
        }
    }
    t.default = a
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(16)),
        r = s(17);
    class a extends n.default {
        constructor(e, t) {
            super(e, t), this.background = this.aap.querySelectorAll(".all-access-pass__background")[0], this.icon = this.aap.querySelector(".aap-highlights__icon"), this.playPauseButton = this.aap.querySelector(".play-pause-button-wrapper"), this.playPauseButtonIcon = this.playPauseButton.querySelector(".icons"), this.tabListWrapper = this.aap.querySelector(".tablist-wrapper")
        }
        mounted() {
            super.mounted(), this.isEnhanced() && this.initEnhanced()
        }
        initEnhanced() {
            requestAnimationFrame((() => {
                this.isEnhanced() && (this._getBounds(), this._setupTimeGroups(), this._setupScrollGroup())
            }))
        }
        _getBounds() {
            this.playPauseButton.style.position = "relative", this.background.style.transform = "scale(1)", this.background.style.width = this.background.style.height = "auto", this.backgroundBounds = this.background.getBoundingClientRect(), this.playPauseButton.style.position = "absolute"
        }
        _setupTimeGroups() {
            this.isEnhanced() && (this.dismiss.name = `AAP Highlights: Dismiss - ${this.aap.id}`, this.dismiss.addKeyframe(this.playPauseButtonIcon, {
                start: 0,
                end: .25,
                opacity: [1, 0]
            }), this.dismiss.addKeyframe(this.tabListWrapper, {
                start: 0,
                end: .25,
                opacity: [1, 0]
            }), this.dismiss.addKeyframe(this.background, {
                start: 0,
                end: .5,
                width: [`${this.backgroundBounds.width}px`, "css(--aap-min-height)"],
                x: ["(-7px - (css(--aap-min-height) * 0.5)) * css(--ltr)", 0],
                easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
            }), this.dismiss.addKeyframe(this.playPauseButton, {
                start: 0,
                end: .5,
                x: [`(7px + ${this.backgroundBounds.width}px -\n          css(--aap-min-height) +\n          css(--aap-min-height) * 0.5\n        ) * css(--ltr)`, 0],
                easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
            }), this.dismiss.addKeyframe(this.background, {
                start: .5,
                end: 1,
                scale: [1, .01],
                easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
            }), this.dismiss.addKeyframe(this.playPauseButton, {
                start: .5,
                end: 1,
                scale: [1, .01],
                easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
            }), this.dismiss.on("complete", (() => {
                this.isAnimating = !1, this.aap.classList.add("inactive"), this.inRange && (this.isAnimating = !0, this.introduceTimeline())
            })), this.introduce.name = `AAP Highlights: Introduce - ${this.aap.id}`, (0, r.setDefaultIntroduceKeyframes)(this.introduce, this.aap, this.background), this.introduce.addKeyframe(this.playPauseButton, {
                start: 0,
                end: .8,
                scale: [.01, 1],
                easeFunction: r.AAP_EASE_FUNCTIONS.SPRING
            }), this.introduce.addKeyframe(this.playPauseButton, {
                start: .7,
                end: 1.3,
                x: [0, `(7px + ${this.backgroundBounds.width}px -\n          css(--aap-min-height) +\n          css(--aap-min-height) * 0.5\n        ) * css(--ltr)`],
                easeFunction: r.AAP_EASE_FUNCTIONS.SPRING
            }), this.introduce.addKeyframe(this.background, {
                start: .7,
                end: 1.3,
                width: ["css(--aap-min-height)", `${this.backgroundBounds.width}px`],
                x: [0, "(-7px - (css(--aap-min-height) * 0.5)) * css(--ltr)"],
                easeFunction: r.AAP_EASE_FUNCTIONS.SPRING
            }), this.introduce.addKeyframe(this.tabListWrapper, {
                start: 1,
                end: 1.5,
                opacity: [0, 1]
            }), this.introduce.addKeyframe(this.playPauseButtonIcon, {
                start: 1,
                end: 1.5,
                opacity: [0, 1]
            }), this.introduce.on("complete", (() => {
                this.isAnimating = !1, this.inRange || (this.isAnimating = !0, this.dismissTimeline())
            })), requestAnimationFrame((() => {
                this.dismiss.progress(1)
            })))
        }
        destroy() {
            return this.playPauseButton.style.position = "relative", requestAnimationFrame((() => {
                this.playPauseButton.style.transform = "none", this.background.style.transform = "none"
            })), super.destroy()
        }
    }
    t.default = a
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(2)),
        r = i(s(4)),
        a = s(1),
        o = s(26),
        l = s(13),
        h = i(s(87)),
        d = i(s(174)),
        c = i(s(175)),
        u = i(s(176)),
        m = i(s(88));
    class p extends r.default {
        constructor(e) {
            super(e), this.aaps = [], this.modal = null, this.aapElements = this.el.querySelectorAll('[data-aap-level="2"]'), this.isAnimating = !1
        }
        mounted() {
            if (this.isL2 = this.el.closest(a.MODAL_SELECTOR), this.isL2) {
                const e = (0, o.getModalComponentRef)(this.gum, this.el);
                this.modal = e.modal
            }
            this.aapElements.forEach((e => {
                let t = null;
                switch (e.dataset.aapType) {
                    case "l2-close":
                        t = new d.default(this, e);
                        break;
                    case "l2-step-toggle":
                        t = new u.default(this, e);
                        break;
                    case "l2-play-pause":
                        t = new c.default(this, e);
                        break;
                    case "3d-viewer":
                        t = new h.default(this, e);
                        break;
                    case "standard-gallery":
                        t = new m.default(this, e)
                }
                t && this.aaps.push(t)
            })), this.setupEvents()
        }
        setupEvents() {
            this.anim.once(l.EVT_UNENHANCE, (() => this.destroy())), this.isEnhanced() && this.initEnhanced(), this.aaps.forEach((e => {
                e.modalComponent = this.modal, e.mounted()
            })), this.modal.on("open", (() => {
                this.isEnhanced() && (this.scrollGroup.forceUpdate(), this.forceResize(), this.modal.on(a.ANIMATION_EVTS.OPEN_COMPLETE, (() => {
                    this.aaps.forEach((e => {
                        const t = e.preload;
                        e.isEnhanced() && (e.needsUpdate && "3d-viewer" !== e.aap.dataset.aapType && t && e.initEnhanced(), requestAnimationFrame((() => {
                            e.aap.style.opacity = "0", e.inRange && !e.needsUpdate && "3d-viewer" !== e.aap.dataset.aapType && t && (e.isAnimating = !0, e.introduceTimeline())
                        })))
                    }))
                })))
            })), this.modal.on("close", (() => {
                this.modal.on(a.ANIMATION_EVTS.CLOSE_COMPLETE, (() => {
                    this.aaps.forEach((e => {
                        e.reset && e.reset(), e.isEnhanced() && (e.aap.classList.add("inactive"), e.isAnimating = !1, e.isActive = !1, e.dismiss.pause(), e.introduce.pause(), e.introduce.progress(0))
                    }))
                }))
            }))
        }
        destroy() {
            (0, n.default)((() => {
                this.aaps.forEach((e => {
                    e.destroy()
                }))
            })), this.removeScrollGroupEvents()
        }
        initEnhanced() {
            const {
                scrollGroup: e,
                removeScrollGroupEvents: t
            } = (0, o.createCustomAnimScrollGroup)(this.anim, this.modal.elements.container, `${(0,o.getFriendlyName)(this.modal.elements.content)} : AAP Triggers`);
            this.scrollGroup = e, this.removeScrollGroupEvents = t
        }
        isEnhanced() {
            return document.documentElement.classList.contains(l.FEATURE_ENHANCED)
        }
        forceResize(e) {
            this.isEnhanced() && this.aaps.forEach((e => {
                e.onResizeDebounced && e.onResizeDebounced(this.pageMetrics)
            }))
        }
        static IS_SUPPORTED() {
            return !0
        }
    }
    t.default = p
}, function(e, t, s) {
    "use strict";
    e.exports = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CONTROL: 17,
        ALT: 18,
        COMMAND: 91,
        CAPSLOCK: 20,
        ESCAPE: 27,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_ZERO: 96,
        NUMPAD_ONE: 97,
        NUMPAD_TWO: 98,
        NUMPAD_THREE: 99,
        NUMPAD_FOUR: 100,
        NUMPAD_FIVE: 101,
        NUMPAD_SIX: 102,
        NUMPAD_SEVEN: 103,
        NUMPAD_EIGHT: 104,
        NUMPAD_NINE: 105,
        NUMPAD_ASTERISK: 106,
        NUMPAD_PLUS: 107,
        NUMPAD_DASH: 109,
        NUMPAD_DOT: 110,
        NUMPAD_SLASH: 111,
        NUMPAD_EQUALS: 187,
        TICK: 192,
        LEFT_BRACKET: 219,
        RIGHT_BRACKET: 221,
        BACKSLASH: 220,
        SEMICOLON: 186,
        APOSTROPHE: 222,
        SPACEBAR: 32,
        CLEAR: 12,
        COMMA: 188,
        DOT: 190,
        SLASH: 191
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = '<div class="modal" data-modal-element-container data-modal-close>\n\t<div class="modal-overlay-container" data-modal-element-overlay-container data-modal-close>\n\t\t<div class="modal-overlay" data-modal-element-overlay data-modal-close-button-parent>\n\t\t\t<div class="modal-content-container" data-modal-element-content-container></div>\n\t\t</div>\n\t</div>\n</div>'
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(167));
    t.default = `<button data-modal-element-close-button>\n\t<span data-modal-element-close-icon>${n.default}</span>\n</button>`
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.12,10l4.07-4.06a1.5,1.5,0,1,0-2.11-2.12L10,7.88,5.94,3.81A1.5,1.5,0,1,0,3.82,5.93L7.88,10,3.81,14.06a1.5,1.5,0,0,0,0,2.12,1.51,1.51,0,0,0,2.13,0L10,12.12l4.06,4.07a1.45,1.45,0,0,0,1.06.44,1.5,1.5,0,0,0,1.06-2.56Z"/></svg>'
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e, t, s) {
        const i = e.createScrollGroup(t, {
            getPosition: () => t.scrollTop,
            getMaxPosition: () => t.scrollHeight
        });
        i.name = s;
        const n = () => i.updateTimeline();
        return t.addEventListener("scroll", n), {
            scrollGroup: i,
            removeScrollGroupEvents: () => t.removeEventListener("scroll", n)
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        let t = e.getAttribute(n.ANIM_SCROLLGROUP_NAME_ATTRIB);
        if (!t) {
            i.DevLogger.warn(`The following element was not provided an Anim Scroll GroupName via ${n.ANIM_SCROLLGROUP_NAME_ATTRIB}`, e);
            t = `Name Not Provided : ${parseInt(1e3*Math.random())}`
        }
        return t
    };
    var i = s(9),
        n = s(1)
}, function(e, t, s) {
    "use strict";
    var i = s(171),
        n = s(172);

    function r(e, t) {
        if ("function" == typeof e.parseVersion) return e.parseVersion(t);
        var s, i = e.version || e.userAgent;
        "string" == typeof i && (i = [i]);
        for (var n, r = i.length, a = 0; a < r; a++)
            if ((n = t.match((s = i[a], new RegExp(s + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")))) && n.length > 1) return n[1].replace(/_/g, ".");
        return !1
    }

    function a(e, t, s) {
        for (var i, n, a = e.length, o = 0; o < a; o++)
            if ("function" == typeof e[o].test ? !0 === e[o].test(s) && (i = e[o].name) : s.ua.indexOf(e[o].userAgent) > -1 && (i = e[o].name), i) {
                if (t[i] = !0, "string" == typeof(n = r(e[o], s.ua))) {
                    var l = n.split(".");
                    t.version.string = n, l && l.length > 0 && (t.version.major = parseInt(l[0] || 0), t.version.minor = parseInt(l[1] || 0), t.version.patch = parseInt(l[2] || 0))
                } else "edge" === i && (t.version.string = "12.0.0", t.version.major = "12", t.version.minor = "0", t.version.patch = "0");
                return "function" == typeof e[o].parseDocumentMode && (t.version.documentMode = e[o].parseDocumentMode()), t
            }
        return t
    }
    e.exports = function(e) {
        var t = {};
        return t.browser = a(n.browser, i.browser, e), t.os = a(n.os, i.os, e), t
    }
}, function(e, t, s) {
    "use strict";
    e.exports = {
        browser: {
            safari: !1,
            chrome: !1,
            firefox: !1,
            ie: !1,
            opera: !1,
            android: !1,
            edge: !1,
            edgeChromium: !1,
            samsung: !1,
            version: {
                string: "",
                major: 0,
                minor: 0,
                patch: 0,
                documentMode: !1
            }
        },
        os: {
            osx: !1,
            ios: !1,
            android: !1,
            windows: !1,
            linux: !1,
            fireos: !1,
            chromeos: !1,
            version: {
                string: "",
                major: 0,
                minor: 0,
                patch: 0
            }
        }
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
                var e = !1;
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
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e, t) {
        const s = t.closest(n.MODAL_SELECTOR);
        if (!s) return i.DevLogger.warn("The following nested element does not appear to be in a L2Modal", t), null;
        const r = s.getAttribute(n.MODAL_COMPONENT_REF_ATTRIB);
        if (!r) return i.DevLogger.error(`The following L2Modal element appears to be missing the dynamically applied ${n.MODAL_COMPONENT_REF_ATTRIB} attribute`, s), null;
        return e.getComponentsOfType(n.GUM_COMPONENT_NAME).find((e => e.refId === r))
    };
    var i = s(9),
        n = s(1)
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(16)),
        r = s(17);
    class a extends n.default {
        constructor(e, t) {
            super(e, t), this.background = this.aap.querySelectorAll(".all-access-pass__background")[0], this.icon = this.aap.querySelector(".aap-l2-close__icon svg"), this.modal = this.aap.closest(".modal"), this.needsUpdate = !0
        }
        mounted() {
            super.mounted()
        }
        initEnhanced() {
            this._setupTimeGroups(), this._setupScrollGroup(), this.needsUpdate = !1
        }
        _setupTimeGroups() {
            this.dismiss.name = `AAP L2 Close: Dismiss - ${this.aap.id}`, this.dismiss.addKeyframe(this.icon, {
                start: 0,
                end: .25,
                scale: [1, 0],
                easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
            }), this.dismiss.addKeyframe(this.background, {
                start: .25,
                end: .75,
                scale: [1, .01],
                easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
            }), this.dismiss.on("complete", (() => {
                this.isAnimating = !1, this.aap.classList.add("inactive"), this.inRange && (this.isAnimating = !0, this.introduceTimeline())
            })), this.introduce.name = `AAP L2 Close: Introduce - ${this.aap.id}`, (0, r.setDefaultIntroduceKeyframes)(this.introduce, this.aap, this.background), this.introduce.addKeyframe(this.icon, {
                start: .7,
                end: 1.3,
                scale: [0, 1],
                easeFunction: "spring(100, 1, 10, 0)"
            }), this.introduce.on("complete", (() => {
                this.isAnimating = !1, this.inRange || (this.isAnimating = !0, this.dismissTimeline())
            })), requestAnimationFrame((() => {
                this.dismiss.progress(1)
            }))
        }
        destroy() {
            return super.destroy()
        }
    }
    t.default = a
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(16)),
        r = s(17);
    class a extends n.default {
        constructor(e, t) {
            super(e, t), this.background = this.aap.querySelectorAll(".all-access-pass__background")[0], this.icon = this.aap.querySelector(".aap-l2-close__icon svg"), this.playPauseButton = this.aap.querySelector(".aap-l2-play-pause"), this.playPauseButtonIcon = this.playPauseButton.querySelector(".icons"), this.playPauseButtonProgress = this.playPauseButton.querySelector(".play-pause-progress"), this.modal = this.aap.closest(".modal"), this.needsUpdate = !0, this.reset = this.reset.bind(this), this.aap.style.display = "none"
        }
        mounted() {
            super.mounted()
        }
        initEnhanced() {
            this._setupTimeGroups(), this._setupScrollGroup(), this.needsUpdate = !1
        }
        loadEnhanced() {
            this.resetAll()
        }
        loadFallback() {
            this.destroy(), this.aap.style.display = "none", this.destroyed = !0
        }
        resetAll() {
            this.aap.style.display = "flex", this.reset(), this.destroy().then((() => {
                this.isEnhanced() && (this.introduce = this.anim.createTimeGroup(), this.dismiss = this.anim.createTimeGroup(), this.initEnhanced(), this.isAnimating = !1), this.destroyed = !1
            }))
        }
        _setupTimeGroups() {
            this.dismiss.name = `AAP L2 Play / Pause: Dismiss - ${this.aap.id}`, this.dismiss.addKeyframe(this.playPauseButtonProgress, {
                start: 0,
                end: .25,
                opacity: [1, 0],
                easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
            }), this.dismiss.addKeyframe(this.playPauseButtonIcon, {
                start: 0,
                end: .25,
                scale: [1, 0],
                easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
            }), this.dismiss.addKeyframe(this.background, {
                start: .25,
                end: .75,
                scale: [1, .01],
                easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
            }), this.dismiss.on("complete", (() => {
                this.isAnimating = !1, this.aap.classList.add("inactive"), this.inRange && (this.isAnimating = !0, this.introduceTimeline())
            })), this.introduce.name = `AAP L2 Play / Pause: Introduce - ${this.aap.id}`, (0, r.setDefaultIntroduceKeyframes)(this.introduce, this.aap, this.background), this.introduce.addKeyframe(this.playPauseButtonIcon, {
                start: .7,
                end: 1.3,
                scale: [0, 1],
                easeFunction: "spring(100, 1, 10, 0)"
            }), this.introduce.addKeyframe(this.playPauseButtonProgress, {
                start: 1,
                end: 1.5,
                opacity: [0, 1],
                easeFunction: "easeOutSin"
            }), this.introduce.on("complete", (() => {
                this.isAnimating = !1, this.inRange || (this.isAnimating = !0, this.dismissTimeline())
            })), requestAnimationFrame((() => {
                this.dismiss.progress(1)
            }))
        }
        reset() {
            this.playPauseButtonProgress.style.setProperty("--aap-play-pause-progress", 0)
        }
        destroy() {
            return this.playPauseButton.style.position = "relative", super.destroy()
        }
    }
    t.default = a
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(16)),
        r = s(17);
    const a = s(2),
        o = s(40);
    class l extends n.default {
        constructor(e, t) {
            super(e, t, "textDriven"), this.background = this.aap.querySelectorAll(".all-access-pass__background")[0], this.container = this.aap.parentNode, this.toggle = this.aap.querySelector(".aap-l2-step-toggle"), this.toggleOptions = this.aap.querySelectorAll("input"), this.toggleBubble = this.aap.querySelector(".aap-l2-step-toggle__bubble-inner"), this.selected = null, this.selectedIndex = 0, this.needsUpdate = !0, this.modal = this.aap.closest(".modal"), this.movementRateMultiplier = 1, this.velocityMultiplier = 2, this.target = 0, this.dragDrawId = -1, this.bubbleHintOffset = 0, this.aapOffset = 0, this.changeEvent = new Event("change"), this.inputStart = 0, this.swipeVelocity = 0, this.ltr = getComputedStyle(this.toggle).getPropertyValue("--ltr"), this._onStartDrag = this._onStartDrag.bind(this), this._onDrag = this._onDrag.bind(this), this._onStopDrag = this._onStopDrag.bind(this)
        }
        mounted() {
            this._setupToggle(), this._setupGesture(), super.mounted()
        }
        reset() {
            const e = this.toggleOptions[0];
            e.checked = !0;
            const t = new Event("change");
            e.dispatchEvent(t)
        }
        initEnhanced() {
            this._getBounds(), this._setupTimeGroups(), this._setupScrollGroup(), this.needsUpdate = !1
        }
        _getBounds() {
            this.background.style.transform = "scale(1)", this.toggle.style.width = this.toggle.style.height = "auto", this.toggleBounds = this.toggle.getBoundingClientRect(), this.toggle.style.setProperty("--toggle-width", `${this.toggleBounds.width}px`), this.toggleOptions.forEach((e => {
                "1" === this.ltr ? e.style.setProperty("--option-offset", `${e.parentNode.offsetLeft}px`) : e.style.setProperty("--option-offset", Math.floor(e.parentNode.parentNode.getBoundingClientRect().right - e.parentNode.getBoundingClientRect().right) - 1 + "px"), e.style.setProperty("--option-width", `${e.parentNode.offsetWidth}px`)
            })), this.toggle.style.setProperty("--bubble-position", `${this.toggleOptions[0].style.getPropertyValue("--option-offset")}`), this.toggle.style.setProperty("--bubble-width", `${this.toggleOptions[0].style.getPropertyValue("--option-width")}`)
        }
        _setupToggle() {
            this.toggleOptions.forEach(((e, t) => {
                e.addEventListener("change", (() => {
                    this.toggle.style.setProperty("--bubble-position", `${e.style.getPropertyValue("--option-offset")}`), this.toggle.style.setProperty("--bubble-width", `${e.style.getPropertyValue("--option-width")}`), e.checked && (this.selected = e, this.selectedIndex = t)
                }))
            }))
        }
        _setupGesture() {
            this.toggle.addEventListener("touchstart", this._onStartDrag)
        }
        _onStartDrag(e) {
            !0 != (!e.touches && 1 !== e.which) && (this.lastInteractionEvent = e, this.swipeVelocity = 0, this.inputStart = e.touches[0].screenX, window.addEventListener("touchmove", this._onDrag, {
                passive: !1
            }), window.addEventListener("touchend", this._onStopDrag))
        }
        _onDrag(e) {
            e.cancelable && e.preventDefault();
            const t = e.touches[0].screenX,
                s = t - this.inputStart;
            this.inputStart = t, this.target += s * this.movementRateMultiplier, this.swipeVelocity = s * this.velocityMultiplier, this.nextIndex = "1" === this.ltr ? this.selectedIndex + 1 : this.selectedIndex - 1, this.prevIndex = "1" === this.ltr ? this.selectedIndex - 1 : this.selectedIndex + 1, o(this.dragDrawId), this.dragDrawId = a((() => {
                (this.target > 56 || this.swipeVelocity > 50) && this.toggleOptions[this.nextIndex] ? (this.toggleOptions[this.nextIndex].checked = !0, this.toggleOptions[this.nextIndex].dispatchEvent(this.changeEvent), this.target = 0, this.bubbleHintOffset = 0) : (this.target < -56 || this.swipeVelocity < -50) && this.toggleOptions[this.prevIndex] ? (this.toggleOptions[this.prevIndex].checked = !0, this.toggleOptions[this.prevIndex].dispatchEvent(this.changeEvent), this.target = 0, this.bubbleHintOffset = 0) : this.target > 0 && this.toggleOptions[this.nextIndex] || this.target < 0 && this.toggleOptions[this.prevIndex] ? (this.bubbleHintOffset = this.target / 56 * 4, this.aapOffset = 0, this.container.style.setProperty("--aap-offset", `${this.aapOffset}`)) : (this.bubbleHintOffset = 0, this.aapOffset = this.target / 56 * 2, this.container.style.setProperty("--aap-offset", `${this.aapOffset}`)), this.toggle.style.setProperty("--bubble-hint-position", `${this.bubbleHintOffset}`)
            }))
        }
        _onStopDrag(e) {
            window.removeEventListener("touchmove", this._onDrag), window.removeEventListener("touchend", this._onStopDrag), this.lastInteractionEvent = e, this.target = 0, this.swipeVelocity = 0, this.inputStart = 0, this.bubbleHintOffset = 0, this.aapOffset = 0, o(this.dragDrawId), this.dragDrawId = a((() => {
                this.toggle.style.setProperty("--bubble-hint-position", `${this.bubbleHintOffset}`), this.container.style.setProperty("--aap-offset", `${this.aapOffset}`)
            }))
        }
        _setupTimeGroups() {
            this.dismiss.name = `AAP L2 Step Toggle: Dismiss - ${this.aap.id}`, this.dismiss.addKeyframe(this.toggleBubble, {
                start: 0,
                end: .25,
                opacity: [1, 0],
                easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
            }), this.toggleOptions.forEach((e => {
                this.dismiss.addKeyframe(e.parentNode, {
                    start: 0,
                    end: .25,
                    opacity: [1, 0],
                    easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
                })
            })), this.dismiss.addKeyframe(this.toggle, {
                start: 0,
                end: .5,
                "--toggle-color": [1, 0],
                width: [`${this.toggleBounds.width}px`, "css(--aap-min-height)"],
                easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
            }), this.dismiss.addKeyframe(this.background, {
                start: .5,
                end: 1,
                scale: [1, .01],
                easeFunction: r.AAP_EASE_FUNCTIONS.CUBIC_BEZIER
            }), this.dismiss.on("complete", (() => {
                this.isAnimating = !1, this.aap.classList.add("inactive"), this.inRange && (this.isAnimating = !0, this.introduceTimeline())
            })), this.introduce.name = `AAP L2 Step Toggle: Introduce - ${this.aap.id}`, (0, r.setDefaultIntroduceKeyframes)(this.introduce, this.aap, this.background), this.introduce.addKeyframe(this.toggle, {
                start: .7,
                end: 1.3,
                "--toggle-color": [0, 1],
                width: ["css(--aap-min-height)", `${this.toggleBounds.width}px`],
                easeFunction: r.AAP_EASE_FUNCTIONS.SPRING
            }), this.toggleOptions.forEach(((e, t) => {
                const s = .05 * (t + 1);
                this.introduce.addKeyframe(e.parentNode, {
                    start: .7 + s,
                    end: 1.3 + s,
                    opacity: [0, 1],
                    scale: [.5, 1],
                    easeFunction: "easeOutQuint"
                })
            })), this.introduce.addKeyframe(this.toggleBubble, {
                start: .7,
                end: 1.3,
                opacity: [0, 1],
                easeFunction: "easeOutQuint"
            }), this.introduce.on("complete", (() => {
                this.isAnimating = !1, this.inRange || (this.isAnimating = !0, this.dismissTimeline())
            })), requestAnimationFrame((() => {
                this.dismiss.progress(1)
            }))
        }
        destroy() {
            return this.toggle.style.position = "relative", super.destroy()
        }
    }
    t.default = l
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = s(64);
    class n extends i.BaseComponent {
        static IS_SUPPORTED() {
            return document.documentElement.classList.contains("ar-quicklook")
        }
        constructor(e) {
            super(e), this._anchorEl = this.el.querySelector('a[rel="ar"]'), this._anchorLabel = this._anchorEl.querySelector("span").textContent.trim(), this._data = this._anchorEl.dataset, this._data.urlOptionMap && (this._optionMap = JSON.parse(this._data.urlOptionMap)), this._defaultAriaLabel = this._anchorEl.ariaLabel, this._defaultAcaClick = this._data.analyticsClick, this._defaultAcaTitle = this._data.analyticsTitle
        }
        updateTargetPath(e) {
            if (e && this._optionMap) try {
                const t = this._optionMap[e],
                    {
                        urlRoot: s,
                        urlProduct: i
                    } = this._data;
                this._anchorEl.href = `${s}/${i}/${t.model}`, this._anchorEl.setAttribute("aria-label", t.ariaLabel), this._anchorEl.setAttribute("data-analytics-title", t.acaTitle), this._anchorEl.setAttribute("data-analytics-click", t.acaClick)
            } catch (e) {
                console.error("ArLink ERROR :: ", e)
            }
        }
    }
    t.default = n
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(62)),
        r = i(s(4));
    const a = "data-focus-expression";
    class o extends r.default {
        constructor(e) {
            super(e), this._els = this.el.querySelectorAll("[data-focus-expression]"), this._lastPosition = 0, this._handleFocus = this._handleFocus.bind(this), this._destroy = this._destroy.bind(this)
        }
        mounted() {
            this._updateFocusTargets(), this._parseOptions(), this._setTabIndex(), this._setupEvents()
        }
        _updateFocusTargets() {
            const e = [];
            this._els = Array.from(this._els).map((t => {
                const s = JSON.parse(t.getAttribute(a));
                let i = t;
                if (s.hasOwnProperty("focus-target-child") && (i = t.querySelector(s["focus-target-child"]), i.setAttribute(a, JSON.stringify(s)), t.removeAttribute(a)), s.hasOwnProperty("focus-target-footnote")) {
                    const i = t.querySelector(s["focus-target-footnote"]);
                    i.setAttribute(a, JSON.stringify({ ...s,
                        tabindex: "0"
                    })), e.push(i)
                }
                return i
            })), this._els = [...this._els, ...e]
        }
        _setupEvents() {
            this.el.addEventListener("focusin", this._handleFocus)
        }
        _destroy() {
            this._removeTabIndex(), this.el.removeEventListener("focusin", this._handleFocus)
        }
        _parseOptions() {
            this._els.forEach((e => {
                const t = JSON.parse(e.getAttribute(a));
                e._focusExpression = t.expression, t.hasOwnProperty("anchors") ? e._focusAnchors = t.anchors.map((e => document.querySelector(e))) : t.hasOwnProperty("anchors-closest") && (e._focusAnchors = t["anchors-closest"].map((t => e.closest(t)))), t.hasOwnProperty("tabindex") && (e._tabIndex = t.tabindex), t.hasOwnProperty("expression-last") && (e._focusExpressionLast = t["expression-last"]), e._focusDelay = !!t.hasOwnProperty("focus-delay") && t["focus-delay"]
            }))
        }
        _handleFocus(e) {
            if ("key" !== e.target.dataset.focusMethod) return;
            const t = e.target;
            this.focusOn(t)
        }
        focusOn(e) {
            if (e.hasAttribute(a)) {
                if (!this._isEnabledWhen(e)) return;
                const t = {
                    target: e
                };
                e._focusAnchors && (t.anchors = e._focusAnchors);
                const s = e._focusDelay ? 100 : 0;
                setTimeout((() => {
                    e.hasOwnProperty("_focusExpressionLast") && this._lastPosition > n.default.parse(e._focusExpression, t) ? (window.scrollTo(0, n.default.parse(e._focusExpressionLast, t)), this._lastPosition = n.default.parse(e._focusExpressionLast, t)) : (window.scrollTo(0, n.default.parse(e._focusExpression, t)), this._lastPosition = n.default.parse(e._focusExpression, t)), e.closest(".section") && e.closest(".section").scrollTo(0, 0)
                }), s), "-1" === e.getAttribute("tabindex") && e.blur()
            }
        }
        _isEnabledWhen(e) {
            const t = document.documentElement.classList,
                s = e.getAttribute("data-focus-enabled-when") || "enhanced";
            return t.contains(s)
        }
        _setTabIndex() {
            this._els.forEach((e => {
                let t = -1;
                e.hasOwnProperty("_tabIndex") && (t = e._tabIndex), e.setAttribute("tabindex", t)
            }))
        }
        _removeTabIndex() {
            this._els.forEach((e => e.removeAttribute("tabindex")))
        }
        static IS_SUPPORTED() {
            return !0
        }
    }
    t.default = o
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = t.createCustomGallery = void 0;
    var n = i(s(65)),
        r = i(s(66)),
        a = i(s(91)),
        o = i(s(67)),
        l = i(s(94)),
        h = i(s(188)),
        d = i(s(41)),
        c = s(13),
        u = s(9),
        m = i(s(189)),
        p = i(s(192)),
        f = i(s(212)),
        _ = i(s(213)),
        g = i(s(214)),
        E = i(s(221)),
        y = i(s(222)),
        v = i(s(223));
    const b = {
            beforeCreate() {
                const e = document.documentElement;
                this.logger = u.DevLogger, this.model.PrefersReducedMotion = e.classList.contains("reduced-motion"), this.model.IsRTL = "rtl" === e.getAttribute("dir"), this.model.IsTouch = "ontouchstart" in e, this.model.Item.Selector = ".item-container .gallery-item", this.model.Slide.Selector = ".item-container", this.model.duration = parseFloat(getComputedStyle(this.el).getPropertyValue("--hlts-autoplay-transition-duration")) || 1, this.model.persistDuration = parseFloat(getComputedStyle(this.el).getPropertyValue("--hlts-autoplay-persist-duration")) || 6.15, this.model.FEATURE_CLASS_FOCUSABLE = "highlights-focusable", this.model.galleryContainer = this.el.querySelector(".media-gallery");
                const t = window.innerWidth - document.body.clientWidth;
                this.el.style.setProperty("--scrollbar-width", `${t}px`), this._onUnenhance = this._onUnenhance.bind(this)
            },
            mounted() {
                document.documentElement.classList.contains(c.FEATURE_ENHANCED) ? (this.isEnhanced = !0, this.anim.once(c.EVT_UNENHANCE, this._onUnenhance)) : this._fallbackToStatic(), this.model.galleryContainer.classList.add("media-gallery-initialized")
            },
            _onUnenhance() {
                this.isEnhanced && (this.isEnhanced = !1, this._fallbackToStatic())
            },
            _fallbackToStatic() {
                this._items.forEach((e => {
                    e.showStaticFallback()
                })), document.documentElement.classList.toggle(this.model.FEATURE_CLASS_FOCUSABLE, !1)
            }
        },
        A = [r.default, m.default, o.default, f.default, b, _.default, l.default, h.default, E.default, y.default, v.default, g.default, p.default, {
            excluding: [a.default, d.default]
        }];
    t.createCustomGallery = e => {
        let {
            el: t,
            customItemMap: s
        } = e;
        if (!t) throw new Error('need to supply "el" argument');
        s || console.warn('need to supply "customItemMap" argument');
        const i = {
            beforeCreate() {
                this.model.CustomItemTypes = s || {}
            }
        };
        return new(n.default.withMixins(i, ...A))({
            el: t
        })
    };
    t.default = n.default.withMixins(...A)
}, function(e, t, s) {
    "use strict";
    e.exports = {
        PrefersReducedMotion: !1,
        IsRTL: !1,
        IsTouch: !1,
        Slide: {
            Selector: ".item-container",
            duration: 1
        },
        Fade: {
            duration: .5
        },
        Item: {
            Selector: ".item-container .gallery-item",
            ConstructorFunction: s(90)
        },
        DotNav: {
            Selector: ".dotnav"
        },
        PaddleNav: {
            Selector: ".paddlenav"
        },
        ChapterPlayer: {
            defaultEase: e => e
        },
        FadeCaptionOnChange: {
            ItemSelector: ".captions-gallery [data-captions-gallery-item]"
        },
        TabNav: {
            ItemSelector: ".tablist-wrapper li",
            RoamingTabIndexSelector: "a"
        },
        SwipeDetect: {
            DesktopSwipe: !1,
            LimitIndexChange: !0,
            movementRateMultiplier: 1.5,
            velocityMultiplier: 8
        },
        SwipeDrag: {
            DesktopSwipe: !1,
            movementRateMultiplier: 1.5,
            velocityMultiplier: 8
        },
        InitialIndexFromHashLink: {
            Enabled: !1,
            ScrollReset: !1
        },
        Scroll: {
            ClientWidthCssVar: !1
        },
        Theme: {
            classPrefix: "theme"
        },
        Events: {
            ITEM_CHANGE_INITIATED: "ITEM_CHANGE_INITIATED",
            ITEM_CHANGE_OCCURRED: "ITEM_CHANGE_OCCURRED",
            ITEM_CHANGE_COMPLETED: "ITEM_CHANGE_COMPLETED"
        }
    }
}, function(e, t, s) {
    "use strict";
    e.exports = {
        beforeCreate() {
            Object.defineProperties(this, {
                currentItem: {
                    configurable: !0,
                    get: () => this._items[this.wrappedIndex(this.currentIndex)]
                }
            })
        },
        wrappedIndex(e) {
            return (e %= this._items.length) < 0 ? this._items.length + e : e
        },
        getItemForTrigger(e) {
            return this._items.find((t => t.id === e))
        }
    }
}, function(e, t, s) {
    "use strict";
    e.exports = {
        itemsCreated(e) {
            this.model.options.gum || this._isVue || (this.anim.on("ON_RESIZE_IMMEDIATE", this.onResizeImmediate), this.anim.on("ON_RESIZE_DEBOUNCED", this.onResizeDebounced), this.anim.on("ON_BREAKPOINT_CHANGE", this.onBreakpointChange), requestAnimationFrame(this.mounted))
        },
        destroy() {
            this.model.options.gum || this._isVue || (this.anim.off("ON_RESIZE_IMMEDIATE", this.onResizeImmediate), this.anim.off("ON_RESIZE_DEBOUNCED", this.onResizeDebounced), this.anim.off("ON_BREAKPOINT_CHANGE", this.onBreakpointChange))
        }
    }
}, function(e, t, s) {
    "use strict";
    e.exports = {
        beforeCreate() {
            document.body._animInfo && (this.anim = document.body._animInfo.group.anim, this.model.pageMetrics = this.anim.model.pageMetrics)
        },
        addKeyframe(e) {
            const t = e.el || this.el;
            return (e.group || this.anim).addKeyframe(t, e)
        },
        addDiscreteEvent(e) {
            e.event = e.event || "Generic-Event-Name-" + tmpUUID++;
            let t = void 0 !== e.end && e.end !== e.start;
            const s = this.addKeyframe(e);
            return t ? (e.onEnterOnce && s.controller.once(e.event + ":enter", e.onEnterOnce), e.onExitOnce && s.controller.once(e.event + ":exit", e.onExitOnce), e.onEnter && s.controller.on(e.event + ":enter", e.onEnter), e.onExit && s.controller.on(e.event + ":exit", e.onExit)) : (e.onEventOnce && s.controller.once(e.event, e.onEventOnce), e.onEventReverseOnce && s.controller.once(e.event + ":reverse", e.onEventReverseOnce), e.onEvent && s.controller.on(e.event, e.onEvent), e.onEventReverse && s.controller.on(e.event + ":reverse", e.onEventReverse)), s
        },
        addRAFLoop(e) {
            let t = ["start", "end"];
            if (!t.every((t => e.hasOwnProperty(t)))) return void console.log("BubbleGum.BaseComponent::addRAFLoop required options are missing: " + t.join(" "));
            const s = new RAFEmitter.create;
            s.on("update", e.onUpdate || noop), s.on("draw", e.onDraw || noop), s.on("draw", (() => s.run()));
            const {
                onEnter: i,
                onExit: n
            } = e;
            return e.onEnter = () => {
                s.run(), i && i()
            }, e.onExit = () => {
                s.cancel(), n && n()
            }, this.addDiscreteEvent(e)
        },
        addContinuousEvent(e) {
            e.onDraw || console.log("BubbleGum.BaseComponent::addContinuousEvent required option `onDraw` is missing. Consider using a regular keyframe if you do not need a callback"), e.event = e.event || "Generic-Event-Name-" + tmpUUID++;
            let t = this.addKeyframe(e);
            return t.controller.on(e.event, e.onDraw), t
        }
    }
}, function(e, t, s) {
    "use strict";
    e.exports = {
        beforeCreate() {
            this.selections = {
                initiated: {
                    current: null,
                    previous: null
                },
                occurred: {
                    current: null,
                    previous: null
                },
                completed: {
                    current: null,
                    previous: null
                }
            }
        },
        onItemChangeInitiated(e) {
            this.selections.initiated.previous = this.selections.initiated.current, this.selections.initiated.current = this.selections.initiated.next, this.selections.initiated.next = e.next
        },
        onItemChangeOccurred(e) {
            this.selections.occurred.previous = e.previous = this.selections.occurred.current, this.selections.occurred.current = e.current
        },
        onItemChangeCompleted(e) {
            this.selections.completed.previous = e.previous = this.selections.completed.current, this.selections.completed.current = e.current
        }
    }
}, function(e, t, s) {
    "use strict";
    e.exports = {
        mounted() {
            const e = this._items[this.wrappedIndex(this.currentIndex)],
                t = this;
            this.trigger(this.model.Events.ITEM_CHANGE_INITIATED, {
                gallery: t,
                next: e
            }), this.trigger(this.model.Events.ITEM_CHANGE_OCCURRED, {
                gallery: t,
                current: e
            }), this.trigger(this.model.Events.ITEM_CHANGE_COMPLETED, {
                gallery: t,
                current: e
            })
        }
    }
}, function(e, t, s) {
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
}, function(e, t, s) {
    "use strict";
    e.exports = function(e, t) {
        let s;
        s = e instanceof NodeList ? e : [].concat(e), t = Array.isArray(t) ? t : [].concat(t), s.forEach((e => {
            t.forEach((t => {
                e.removeAttribute(t)
            }))
        }))
    }
}, function(e, t, s) {
    "use strict";
    e.exports = {
        itemsCreated() {
            this._items.forEach((e => {
                e.progress = function(e) {
                    if (void 0 === e) return this._progress;
                    this._progress = e, this.el.style.setProperty("--progress", e)
                }, e.progress(e.index)
            }))
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = s(14);
    t.default = {
        beforeCreate() {
            this._highlightsTimeGroup = this.anim.createTimeGroup({
                name: "Highlights: AutoPlay"
            }), this._autoInitTriggered = !1, this._isTransitioning = !1, this._isPlaying = !1, this._galleryHasEnded = !1, this._els = {
                galleryContainer: this.el.querySelector(".media-gallery"),
                playPauseButton: this.el.querySelector(".play-pause-button"),
                filmButton: this.el.parentElement.querySelector("[data-films-modal-link]")
            }, this._onTogglePlayPause = this._onTogglePlayPause.bind(this), this._onAutoPlayComplete = this._onAutoPlayComplete.bind(this), this.pause = this.pause.bind(this), this.model.AutoPlay = {
                highlightsTimeGroup: this._highlightsTimeGroup,
                play: this.play.bind(this),
                pause: this.pause.bind(this),
                reset: this.reset.bind(this)
            }, Object.defineProperties(this.model.AutoPlay, {
                isTransitioning: {
                    configurable: !0,
                    get: () => this._isTransitioning,
                    set: e => {
                        this._isTransitioning = e
                    }
                },
                isPlaying: {
                    configurable: !0,
                    get: () => this._isPlaying,
                    set: e => {
                        this._isPlaying = e
                    }
                },
                galleryHasEnded: {
                    configurable: !0,
                    get: () => this._galleryHasEnded,
                    set: e => {
                        this._galleryHasEnded = e
                    }
                }
            })
        },
        created() {
            this._addEventListeners()
        },
        mounted() {
            this._createActiveScrollRange()
        },
        onItemChangeInitiated() {
            const {
                current: e
            } = this.selections.initiated, t = e ? e.index : 0;
            this._items[t].pause()
        },
        onItemChangeOccurred() {
            const {
                previous: e,
                current: t
            } = this.selections.occurred;
            if (this.model.duration && e && t && e.index === t.index) return;
            this._highlightsTimeGroup.time(t.index * this.model.persistDuration);
            const s = this._items[t.index];
            this._isPlaying && s.play(), e && e.reset()
        },
        onItemChangeCompleted(e) {
            this._isTransitioning = !0, this._isPlaying && (0, i.update)((() => {
                this._highlightsTimeGroup.play()
            })), this._galleryHasEnded && (this._galleryHasEnded = !1, this.pause()), (0, i.update)((() => {
                this._isTransitioning = !1
            }))
        },
        play() {
            this._isPlaying = !0, this._galleryHasEnded && (this._galleryHasEnded = !1, this.reset()), this.selections.completed.previous || this._autoInitTriggered || (this._autoInitTriggered = !0), this.el.classList.add("playing"), this.el.classList.remove("paused", "ended"), this.model.CustomAnalytics.updateAnalytics("Pause"), this._highlightsTimeGroup.play(), this.currentItem.hasEnded || this.currentItem.play()
        },
        pause() {
            this._isPlaying = !1, this.el.classList.add("paused"), this.el.classList.remove("playing", "ended"), this.model.CustomAnalytics.updateAnalytics("Play"), this._highlightsTimeGroup.pause(), this.currentItem.pause()
        },
        reset() {
            this._highlightsTimeGroup.restart(), this.tabNav.current.el.classList.remove("current"), this.tabNav.current.anchorEl.classList.remove("current"), this.tabNav.items[0].el.classList.add("current"), this.tabNav.items[0].anchorEl.classList.add("current"), this.animateToItem(0)
        },
        _addEventListeners() {
            this._highlightsTimeGroup.on("complete", this._onAutoPlayComplete), this._els.playPauseButton.addEventListener("click", this._onTogglePlayPause), this._els.filmButton && this._els.filmButton.addEventListener("click", this.pause)
        },
        _removeEventListeners() {
            this._highlightsTimeGroup.off("complete", this._onAutoPlayComplete), this._els.playPauseButton.removeEventListener("click", this._onTogglePlayPause), this._els.filmButton && this._els.filmButton.removeEventListener("click", this.pause)
        },
        _createActiveScrollRange() {
            this.anim.addEvent(this.el, {
                event: "play-pause-kf",
                disabledWhen: ["reduced-motion"],
                anchors: ["#media-gallery"],
                start: "a0t + css(--hlts-anim-play-percent-in-view, a0) * 1a0h - 100vh",
                end: "a0t - css(--hlts-anim-pause-remaining-to-top)",
                onEnter: () => {
                    this._galleryHasEnded || this.model.PrefersReducedMotion || this.play(), document.documentElement.classList.toggle(this.model.FEATURE_CLASS_FOCUSABLE, !1)
                },
                onExit: () => {
                    this._galleryHasEnded || this.pause(), document.documentElement.classList.toggle(this.model.FEATURE_CLASS_FOCUSABLE, !0)
                }
            })
        },
        _onTogglePlayPause() {
            this._isPlaying ? this.pause() : this.play()
        },
        _onAutoPlayComplete() {
            this._isPlaying = !1, this._galleryHasEnded = !0, this.el.classList.add("ended"), this.el.classList.remove("playing", "paused"), this.model.CustomAnalytics.updateAnalytics("Replay")
        }
    }
}, function(e, t, s) {
    "use strict";
    var i, n = s(11),
        r = s(12).EventEmitterMicro;

    function a(e, t) {
        r.call(this), t = t || {}, this._fps = e || 0, this._delta = 0, this._currentFps = 0, this._rafEmitter = t.rafEmitter || new n, this._lastThrottledTime = 0, this._didEmitFrameData = !1, this._rafEmitterEvent = null, this._shouldDraw = !1, this._boundOnRAFEmitterUpdate = this._onRAFEmitterUpdate.bind(this), this._boundOnRAFEmitterDraw = this._onRAFEmitterDraw.bind(this), this._boundOnRAFEmitterStop = this._onRAFEmitterStop.bind(this), this._rafEmitter.on("update", this._boundOnRAFEmitterUpdate), this._rafEmitter.on("draw", this._boundOnRAFEmitterDraw), this._rafEmitter.on("stop", this._boundOnRAFEmitterStop)
    }(i = a.prototype = Object.create(r.prototype)).setFps = function(e) {
        return e !== this._fps && (this._fps = e, !0)
    }, i.getFps = function() {
        return this._fps
    }, i.run = function() {
        return this._rafEmitter.run()
    }, i.cancel = function() {
        return this._rafEmitter.cancel()
    }, i.willRun = function() {
        return this._rafEmitter.willRun()
    }, i.isRunning = function() {
        return this._rafEmitter.isRunning()
    }, i.destroy = function() {
        var e = this._rafEmitter.destroy();
        return r.prototype.destroy.call(this), this._rafEmitter = null, this._boundOnRAFEmitterUpdate = null, this._boundOnRAFEmitterDraw = null, this._boundOnRAFEmitterStop = null, this._rafEmitterEvent = null, e
    }, i._onRAFEmitterUpdate = function(e) {
        if (0 === this._lastThrottledTime && (this._lastThrottledTime = this._rafEmitter.executor.lastFrameTime), this._delta = e.time - this._lastThrottledTime, !this._fps) throw new TypeError("FPS is not defined.");
        this._currentFps = 1e3 / this._delta, this._currentFps > this._fps ? this._rafEmitter.run() : (this._rafEmitterEvent = Object.assign({}, e), this._rafEmitterEvent.delta = this._delta, this._rafEmitterEvent.fps = this._currentFps, this._lastThrottledTime = this._rafEmitterEvent.time, this._shouldDraw = !0, this._didEmitFrameData || (this.trigger("start", this._rafEmitterEvent), this._didEmitFrameData = !0), this.trigger("update", this._rafEmitterEvent))
    }, i._onRAFEmitterDraw = function() {
        this._shouldDraw && (this._shouldDraw = !1, this.trigger("draw", this._rafEmitterEvent))
    }, i._onRAFEmitterStop = function() {
        this._lastThrottledTime = 0, this._didEmitFrameData = !1, this.trigger("stop", this._rafEmitterEvent)
    }, e.exports = a
}, function(e, t, s) {
    "use strict";
    var i = s(15);
    e.exports = i.cancelAnimationFrame("external")
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(193)),
        r = i(s(194)),
        a = i(s(195));
    const o = {
        static: r.default,
        animation: n.default,
        video: a.default
    };
    t.default = {
        createItems(e) {
            this._items = [], this.el.querySelectorAll(this.model.Item.Selector).forEach(((e, t) => {
                const s = e.dataset.mediaType,
                    i = e.dataset.mediaArgument,
                    n = new(0, { ...this.model.CustomItemTypes || {},
                        ...o
                    }[s])({
                        el: e,
                        index: t,
                        type: s,
                        value: i
                    });
                this._items.push(n)
            }));
            let t = this._items[this._items.length - 1];
            for (let e = 0; e < this._items.length; e++) {
                const s = this._items[e];
                s.prev = t, s.next = this._items[e + 1], t = s
            }
            t.next = this._items[0], this.itemsCreated(e)
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(68));
    const r = (e, t) => {
        const s = getComputedStyle(e).getPropertyValue(t);
        return s.includes("ms") ? parseFloat(s) / 1e3 : parseFloat(s)
    };
    class a extends n.default {
        constructor(e) {
            super(e), document.body._animInfo && (this.anim = document.body._animInfo.group.anim), this._figureEl = this.el.querySelector(".media-container"), this._animationEl = this.el.querySelector("[data-animation]"), this._startTime = 0, this._elapsedTime = 0, this._animationDuration = r(this.el, "--animation-duration"), this._resetDuration = r(this.el, "--hlts-animation-reset-duration"), this._resetTimeScale = this._animationDuration / this._resetDuration * -1, this.play = this.play.bind(this), this.pause = this.pause.bind(this), this._addTimeline()
        }
        get elapsedTime() {
            return Math.min(this._animationDuration, Math.abs(this._elapsedTime))
        }
        play() {
            this.isFallback || (this._timeline.timeScale(1), this._timeline.play())
        }
        pause() {
            this.isFallback || this._timeline.pause()
        }
        reset() {
            this.isFallback || (this._timeline.timeScale(this._resetTimeScale), this._timeline.play())
        }
        showStaticFallback() {
            this.isFallback = !0, this._figureEl.classList.add("animation-static-end")
        }
        _addTimeline() {
            const e = this.el.dataset.acGalleryItem;
            this._timeline = this.anim.createTimeGroup({
                name: `Animation Item: ${e}`
            }), this._tween = this._timeline.addKeyframe(this._animationEl, {
                start: 0,
                end: this._animationDuration,
                easeFunction: "easeInQuad",
                "--animation-position": [0, .001 - this._animationDuration, "s"]
            })
        }
    }
    t.default = a
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(68));
    class r extends n.default {}
    t.default = r
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = s(69),
        r = i(s(68));
    class a extends r.default {
        constructor(e) {
            super(e), this._mediaCanPlay = !1, this._isFallback = !1, this._mediaPath = e.value, this._transitionDuration = parseInt(window.getComputedStyle(this.el).getPropertyValue("--hlts-frame-transition-duration")), this._figureWrapperEl = this.el.querySelector(".media-container"), this._fallbackEl = this.el.querySelector(".positioned-media-element.static"), this._videoEl = this.el.querySelector(".positioned-media-element.media"), this._startframeEl = this.el.querySelector(".positioned-media-element.startframe"), this._endframeEl = this.el.querySelector(".positioned-media-element.endframe"), this._originalClassNames = new Map([
                [this._fallbackEl, this._fallbackEl.className],
                [this._videoEl, this._videoEl.className],
                [this._startframeEl, this._startframeEl.className],
                [this._endframeEl, this._endframeEl.className]
            ]), this._inlineMediaInstance = new n.Media({
                el: this._videoEl,
                loadCompleteEvent: "canplaythrough"
            }), this.showStaticFallback = this.showStaticFallback.bind(this)
        }
        get hasEnded() {
            return this._figureWrapperEl.classList.contains("ended")
        }
        load() {
            return this._isFallback ? Promise.resolve() : this._inlineMediaInstance.load(this._getViewportVideoPath()).catch(this.showStaticFallback).then((() => {
                this._mediaCanPlay = !0
            }))
        }
        async play() {
            return this._isFallback ? Promise.resolve() : (this._mediaCanPlay || await this.load(), this._startframeEl.classList.toggle("show", !1), this._inlineMediaInstance.play().then((() => {
                this._hasPlayed = !0
            })).catch(this.showStaticFallback))
        }
        pause() {
            this._isFallback || "playing" === this._inlineMediaInstance.playbackState && this._videoEl.pause()
        }
        abortLoad(e) {
            this._isFallback || (this._mediaCanPlay = !1, e && (this._videoEl.setAttribute("src", ""), this.reset()))
        }
        reset() {
            this._isFallback || this._hasPlayed && (this._originalClassNames.forEach(((e, t) => {
                t.className = e
            })), this._mediaCanPlay && (this.pause(), setTimeout((() => {
                this._videoEl.currentTime = 0
            }), this._transitionDuration)), this._hasPlayed = !1)
        }
        showStaticFallback() {
            this._isFallback || (this.abortLoad(), this._figureWrapperEl.classList.add("static-fallback-only"), this._fallbackEl.classList.remove("hide"), this._isFallback = !0)
        }
        _getViewportVideoPath() {
            const e = ["xlarge", "large", "medium", "small"],
                t = window.devicePixelRatio > 1 ? "_2x" : "",
                s = (this.el.getAttribute("data-media-excluded-viewports") || "").split(/,\s*/);
            let i = getComputedStyle(this._videoEl).getPropertyValue("--hlts-glry-current-viewport");
            for (; s.indexOf(i) > -1 && "small" !== i;) i = e[e.indexOf(i) + 1];
            return `${this._mediaPath}${i}${t}.mp4`
        }
    }
    t.default = a
}, function(e, t, s) {
    "use strict";
    e.exports = class {
        constructor() {
            this._events = {}
        }
        on(e, t) {
            return this._events[e] = this._events[e] || [], this._events[e].unshift(t), t
        }
        once(e, t) {
            const s = i => {
                this.off(e, s), void 0 !== i ? t(i) : t()
            };
            return this.on(e, s)
        }
        off(e, t) {
            if (!this.has(e)) return;
            if (!t) return void delete this._events[e];
            const s = this._events[e].indexOf(t); - 1 !== s && this._events[e].splice(s, 1)
        }
        trigger(e, t) {
            if (this.has(e))
                for (let s = this._events[e].length - 1; s >= 0; s--) void 0 !== t ? this._events[e][s](t) : this._events[e][s]()
        }
        has(e) {
            return e in this._events && 0 !== this._events[e].length
        }
        destroy() {
            this._events = null
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = async function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        e || (e = document);
        const s = e.querySelectorAll(`[${o}]`),
            i = [];
        for (const e of s) {
            const s = e.dataset,
                a = s.inlineMediaPlugins ? s.inlineMediaPlugins.split(",").map((e => e.trim())) : [],
                o = [];
            for (const e of a)
                if (!n.pluginCache[e]) {
                    if (!r.default[e]) throw new Error(`Error Trying to use undefined Plugin named: ${e} . Ensure you call Media.addPlugin() first to register this custom plugin!`);
                    o.push((async () => {
                        const t = (await r.default[e]()).default;
                        n.default.addPlugin(e, t)
                    }))
                }
            await Promise.all(o.map((async e => e()))), i.push(new n.default(Object.assign({
                el: e,
                plugins: a.map((e => n.pluginCache[e]))
            }, t)))
        }
        return i
    };
    var n = function(e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var s = a(t);
            if (s && s.has(e)) return s.get(e);
            var i = {
                    __proto__: null
                },
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && {}.hasOwnProperty.call(e, r)) {
                    var o = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    o && (o.get || o.set) ? Object.defineProperty(i, r, o) : i[r] = e[r]
                }
            return i.default = e, s && s.set(e, i), i
        }(s(95)),
        r = i(s(96));

    function a(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
            s = new WeakMap;
        return (a = function(e) {
            return e ? s : t
        })(e)
    }
    const o = "data-inline-media"
}, function(e, t, s) {
    "use strict";
    var i = s(199);
    e.exports = function(e) {
        return function() {
            if (i && "object" == typeof window.console && "function" == typeof console[e]) return console[e].apply(console, Array.prototype.slice.call(arguments, 0))
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = !1,
        n = {};
    "undefined" != typeof window && (n = window || self);
    try {
        i = !!n.localStorage.getItem("f7c9180f-5c45-47b4-8de4-428015f096c0")
    } catch (e) {}
    e.exports = i
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(29)),
        r = i(s(10)),
        a = i(s(43)),
        o = i(s(6)),
        l = i(s(201)),
        h = i(s(202));
    const d = e => e,
        c = e => e ? e.split(",").map((e => e.trim())) : null;
    class u extends o.default {
        constructor(e) {
            super(e);
            const t = (t, s, i) => {
                const n = "inlineMedia" + t[0].toUpperCase() + t.slice(1);
                return s(this.media.el.dataset[n]) || e[t] || i
            };
            this._disabledStates = new h.default({
                features: t("disabledWhen", c, []),
                onActivate: this.disable.bind(this),
                onDeactivate: this.enable.bind(this)
            }), this._destroyStates = new h.default({
                features: t("destroyWhen", c, []),
                onActivate: this.destroyMedia.bind(this)
            }), this._pausedStates = new h.default({
                features: t("pausedWhen", c, []),
                onActivate: this.pauseMedia.bind(this)
            }), this._autoplayStates = new h.default({
                features: t("autoplayWhen", c, []),
                onActivate: this.autoplayMedia.bind(this),
                onDeactivate: this.disableAutoplay.bind(this)
            });
            const s = e.featureDetect || {};
            var i;
            this.featureCallbacks = Object.entries(s).map((e => {
                let [t, s] = e;
                return new l.default({
                    featureClass: t,
                    callback: s
                })
            })), this._featureElement = (i = t("featureElement", d, document.documentElement)) instanceof HTMLElement ? i : document.querySelector(i), this.featureSets = [this._autoplayStates, this._pausedStates, this._disabledStates, this._destroyStates], this._featuresUpdated = this._featuresUpdated.bind(this), this.play = !1, this._observer = new MutationObserver(this._featuresUpdated), this._observer.observe(this._featureElement, {
                attributes: !0,
                attributeFilter: ["class"]
            }), this._featuresUpdated()
        }
        get loadingState() {
            return this._disabledStates.isDetected ? n.default.DISABLED : void 0
        }
        get playbackState() {
            return this._disabledStates.isDetected ? a.default.PAUSED : void 0
        }
        _featuresUpdated() {
            const e = this._featureElement.classList;
            this.featureSets.filter((t => (t.updateFeatureState(e), t.detectionChanged))).forEach((e => e.applyEffect())), this.featureCallbacks.forEach((t => {
                t.updatePresence(e), t.isPresent && t.presenceChanged && t.triggerCallback(this.media)
            }))
        }
        autoplayMedia() {
            this.media.el.setAttribute("autoplay", !0), this.media.play()
        }
        disableAutoplay() {
            this.media.el.setAttribute("autoplay", !1)
        }
        pauseMedia() {
            this.media.el.pause()
        }
        destroyMedia() {
            this.media.destroy()
        }
        destroy() {
            this._observer.disconnect()
        }
        disable() {
            this.media.abortLoad(), this.media.el.pause(), this.play = d, this.media.trigger(r.default.LOADING_STATE_CHANGE), this.media.trigger(r.default.PLAYBACK_STATE_CHANGE)
        }
        enable() {
            this.play = !1, this.media.trigger(r.default.LOADING_STATE_CHANGE), this.media.trigger(r.default.PLAYBACK_STATE_CHANGE)
        }
    }
    t.default = u
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = class {
        constructor(e) {
            this.featureClass = e.featureClass, this._callback = e.callback, this._isPresent = !1, this._wasPresent = !1
        }
        get presenceChanged() {
            return this._isPresent !== this._wasPresent
        }
        get isPresent() {
            return this._isPresent
        }
        updatePresence(e) {
            this._wasPresent = this._isPresent, this._isPresent = e.contains(this.featureClass)
        }
        triggerCallback(e) {
            return this._callback(e)
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    const i = () => {};
    t.default = class {
        constructor(e) {
            var t;
            this._features = new Set((t = e.features, Array.isArray(t) ? t : t ? [t] : [])), this._isDetected = !1, this._wasDetected = !1, this._onActivate = e.onActivate || i, this._onDeactivate = e.onDeactivate || i
        }
        get detectionChanged() {
            return this._isDetected !== this._wasDetected
        }
        get isDetected() {
            return this._isDetected
        }
        updateFeatureState(e) {
            this._wasDetected = this._isDetected;
            for (const t of e)
                if (this._features.has(t)) return void(this._isDetected = !0);
            this._isDetected = !1
        }
        applyEffect() {
            this._isDetected ? this._onActivate() : this._onDeactivate()
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(10)),
        r = i(s(6));
    const a = "inline-media-timeout";
    class o extends r.default {
        static get LOAD_TIMEOUT_EVENT() {
            return a
        }
        constructor(e) {
            super(e);
            const t = this.media.el.dataset;
            this._timeoutDelay = t.loadTimeout || e.loadTimeout || 3e4, this._onLoadStart = this._onLoadStart.bind(this), this._onLoadComplete = this._onLoadComplete.bind(this), this._onTimerComplete = this._onTimerComplete.bind(this), this.media.on(n.default.MEDIA_LOAD_START, this._onLoadStart), this.media.on(n.default.MEDIA_LOAD_COMPLETE, this._onLoadComplete)
        }
        _onLoadStart() {
            clearTimeout(this._timer), this._timer = setTimeout(this._onTimerComplete, this._timeoutDelay)
        }
        _onLoadComplete() {
            clearTimeout(this._timer)
        }
        _onTimerComplete() {
            this.media.trigger(a), this.media.destroy(), this.media.el.parentElement && this.media.el.parentElement.removeChild(this.media.el)
        }
        destroy() {
            clearTimeout(this._timer), this.media.off(n.default.MEDIA_LOAD_START, this._onLoadStart)
        }
    }
    t.default = o
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(10)),
        r = i(s(43)),
        a = i(s(6));
    const o = '[data-inline-media-control="PlayPause"]',
        l = "[data-inline-media-controller='{id}']",
        h = "Pause",
        d = "Play",
        c = "Replay",
        u = {
            CLICK: "data-analytics-click",
            TITLE: "data-analytics-title"
        };
    class m extends a.default {
        constructor(e) {
            super(e), this._container = e.container || this.media.el.parentElement, this._button = this._findButton(), this._onClick = this._onClick.bind(this), this._onPlaybackStateChange = this._onPlaybackStateChange.bind(this);
            const t = this._button.dataset;
            this._ariaLabels = {
                playing: t.ariaPlaying || e.ariaPlaying || h,
                paused: t.ariaPaused || e.ariaPaused || d,
                ended: t.ariaEnded || e.ariaEnded || c
            }, this._button.addEventListener("click", this._onClick), this.media.on(n.default.PLAYBACK_STATE_CHANGE, this._onPlaybackStateChange), this._activeAnalytics = Object.values(u).filter((e => this._button.hasAttribute(e + "-play") && this._button.hasAttribute(e + "-pause") || this._button.hasAttribute(e + "-replay")))
        }
        _findButton() {
            if (this.options.playPauseButton) return this.options.playPauseButton;
            let e = this._container.querySelector(`${o}`);
            if (!e) {
                const t = document.querySelectorAll(l.replace("{id}", this.media.id));
                for (const s of t) e = "PlayPause" === s.getAttribute("data-inline-media-control") ? s : s.querySelector(`${o}`)
            }
            return e
        }
        _onPlaybackStateChange() {
            switch (this.media.playbackState) {
                case r.default.PLAYING:
                    this._button.setAttribute("aria-label", this._ariaLabels.playing);
                    break;
                case r.default.ENDED:
                    this._button.setAttribute("aria-label", this._ariaLabels.ended);
                    break;
                default:
                    this._button.setAttribute("aria-label", this._ariaLabels.paused)
            }
            this._setAnalyticsState()
        }
        _setAnalyticsState() {
            let e;
            switch (this.media.playbackState) {
                case r.default.PLAYING:
                    e = "pause";
                    break;
                case r.default.ENDED:
                    e = "replay";
                    break;
                default:
                    e = "play"
            }
            for (const t of this._activeAnalytics) {
                let s = e;
                "replay" !== e || this._button.hasAttribute(`${t}-${s}`) || (s = "play"), this._button.setAttribute(t, this._button.getAttribute(`${t}-${s}`))
            }
        }
        _onClick(e) {
            e.preventDefault(), this.media.el.paused ? this.media.play() : this.media.el.pause()
        }
        destroy() {
            this._button.removeEventListener("click", this._onClick), this.media.off(n.default.PLAYBACK_STATE_CHANGE, this._onPlaybackStateChange)
        }
    }
    t.default = m
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = {
        small: 0,
        medium: 570,
        large: 780,
        xlarge: 1280
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(207)),
        r = i(s(101));
    class a extends r.default {
        constructor(e) {
            super(e)
        }
        _initialize() {
            this._anim = this.options.anim, this._bpMap = this.options.animBreakpointMap || n.default, this._updateBreakpoint = this._updateBreakpoint.bind(this), this._callback = this.options.callback, this._addEventListeners(), this._updateBreakpoint()
        }
        _addEventListeners() {
            this._anim.on("ON_BREAKPOINT_CHANGE", this._updateBreakpoint)
        }
        _removeEventListeners() {
            this._anim.off("ON_BREAKPOINT_CHANGE", this._updateBreakpoint)
        }
        _updateBreakpoint() {
            const e = this._bpMap[this._anim.model.pageMetrics.breakpoint];
            let t = !1;
            this._currentBreakpoint && this._currentBreakpoint !== e && (t = !0), this._currentBreakpoint = e, t && this._callback()
        }
        destroy() {
            super.destroy()
        }
    }
    t.default = a
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = {
        S: "small",
        M: "medium",
        L: "large",
        X: "xlarge"
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(209)),
        r = i(s(103)),
        a = i(s(210)),
        o = i(s(211));
    t.default = [o.default, r.default, a.default, n.default]
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(29)),
        r = i(s(10)),
        a = i(s(102)),
        o = i(s(43)),
        l = i(s(6));
    const h = [a.default.LOADED_DATA, a.default.LOAD_START, a.default.CAN_PLAY, a.default.CAN_PLAY_THROUGH, a.default.PLAY, a.default.PLAYING, a.default.PAUSE, a.default.WAITING, a.default.SEEKING, a.default.SEEKED, a.default.ERROR, a.default.ENDED],
        d = "[data-inline-media-controller={id}]";
    class c extends l.default {
        constructor(e) {
            super(e), this._container = e.container || this.media.el.parentElement, this._playbackState = o.default.IDLE, this._loadingState = n.default.EMPTY, this._elementsToDecorate = [], this._container && this._elementsToDecorate.push(this._container), this.media.id && this._elementsToDecorate.push(...Array.from(document.querySelectorAll(d.replace("{id}", this.media.id))));
            for (const e of this._elementsToDecorate) e.classList.add(this._playbackState), e.classList.add(this._loadingState);
            this.updateState = this.updateState.bind(this), this._addEventListeners()
        }
        _addEventListeners() {
            for (const e of h) this.media.el.addEventListener(e, this.updateState);
            this.media.on(r.default.LOADING_STATE_CHANGE, this.updateState), this.media.on(r.default.PLAYBACK_STATE_CHANGE, this.updateState)
        }
        _removeEventListeners() {
            for (const e of h) this.media.el.removeEventListener(e, this.updateState);
            this.media.off(r.default.LOADING_STATE_CHANGE, this.updateState), this.media.off(r.default.PLAYBACK_STATE_CHANGE, this.updateState)
        }
        updateState(e) {
            const t = this.media.playbackState,
                s = this._playbackState,
                i = this.media.loadingState,
                n = this._loadingState;
            if (this._playbackState = t, this._loadingState = i, t !== s) {
                for (const e of this._elementsToDecorate) e.classList.add(t), e.classList.remove(s);
                this.media.trigger(r.default.PLAYBACK_STATE_CHANGE)
            }
            if (i !== n) {
                for (const e of this._elementsToDecorate) e.classList.add(i), e.classList.remove(n);
                this.media.trigger(r.default.LOADING_STATE_CHANGE)
            }
        }
        destroy() {
            for (const e of this._elementsToDecorate) e.classList.remove(this._playbackState), e.classList.remove(this._loadingState);
            this._removeEventListeners(), super.destroy()
        }
    }
    t.default = c
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(43)),
        r = i(s(6));
    const {
        HAVE_METADATA: a,
        HAVE_CURRENT_DATA: o
    } = HTMLVideoElement;
    class l extends r.default {
        constructor(e) {
            super(e), this._initialize()
        }
        _initialize() {
            this.media.el.playsInline = !0, this.media.el.autoplay && (this._autoPlayTimer = setTimeout((() => this.media.play())))
        }
        async play() {
            this.media.el.readyState < a && await this.media.load(), await this.media.el.play()
        }
        get playbackState() {
            return this.media.el.ended ? n.default.ENDED : this.media.el.paused ? n.default.PAUSED : n.default.PLAYING
        }
        destroy() {
            clearTimeout(this._autoPlayTimer), super.destroy()
        }
    }
    t.default = l
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(6));
    class r extends n.default {
        get src() {
            if (!this.media.el.currentSrc && !this.media.el.src)
                for (const e of this.media.el.querySelectorAll("source"))
                    if (this.media.el.canPlayType(e.type)) return e.src;
            return this.media.el.currentSrc || this.media.el.src
        }
    }
    t.default = r
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = s(14);
    t.default = {
        beforeCreate() {
            this.playPauseButton = this.el.querySelector(".play-pause-button"), this.model.CustomAnalytics = {
                updateAnalytics: this.updateAnalytics.bind(this)
            }
        },
        updateAnalytics(e) {
            (0, i.update)((() => {
                this.playPauseButton.setAttribute("data-analytics-title", this.playPauseButton.dataset[`analyticsTitle${e}`]), this.playPauseButton.setAttribute("data-analytics-click", this.playPauseButton.dataset[`analyticsClick${e}`]), this.playPauseButton.setAttribute("aria-label", this.playPauseButton.dataset[`aria${e}`])
            }))
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = s(14);
    t.default = {
        mounted() {
            this._polarity = this.model.IsRTL ? -1 : 1, this._onUpdateTotalProgress = this._onUpdateTotalProgress.bind(this), this._scrollContainerEl = this.el.querySelector(".scroll-container"), this._scrollContainerEl.addEventListener("scroll", this._onUpdateTotalProgress), this._progress = 0, this.model.DispatchProgress = {}, Object.defineProperties(this.model.DispatchProgress, {
                progress: {
                    configurable: !0,
                    get: () => this._progress
                }
            })
        },
        onResizeDebounced() {
            (0, i.update)((() => (0, i.update)((() => {
                this._setOffsets(), this._onUpdateTotalProgress()
            }))))
        },
        _setOffsets() {
            this._totalOffset = this.model.ScrollOccurred.itemOffsets.slice(-1)[0], this._singleOffset = this.model.ScrollOccurred.itemOffsets[1]
        },
        _onUpdateTotalProgress() {
            this._totalOffset || this._setOffsets();
            const e = this.selections.occurred.current.index,
                t = Math.max(0, Math.abs(this.model.ScrollOccurred.itemOffsets[e])),
                s = e + (Math.round(this._scrollContainerEl.scrollLeft) * this._polarity - t) / this._singleOffset;
            this.el.style.setProperty("--hlts-autoplay-progress", s)
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = s(14),
        r = i(s(215));
    t.default = { ...r.default,
        beforeCreate() {
            this._dotnavItems = this.el.querySelectorAll(".dotnav-link"), this._onDotnavItemClick = this._onDotnavItemClick.bind(this)
        },
        created() {
            r.default.created.apply(this), this._dotnavItems.forEach((e => e.addEventListener("click", this._onDotnavItemClick)))
        },
        itemsCreated() {
            r.default.itemsCreated.apply(this), this._items.forEach(((e, t) => {
                const s = this.tabNav.items[t];
                e.on("select", (t => {
                    let {
                        el: i
                    } = t;
                    e.el.classList.contains("current") || (i.classList.add("current"), s.anchorEl.classList.add("current"))
                })), e.on("deselect", (t => {
                    let {
                        el: i
                    } = t;
                    e.el.classList.contains("current") && (i.classList.remove("current"), s.anchorEl.classList.remove("current"))
                }))
            })), this.tabNavAnchors = this.tabNav.items.map((e => e.anchorEl))
        },
        mounted() {
            r.default.mounted.apply(this), this._createDotnavTimelineHooks()
        },
        onItemChangeInitiated(e) {
            this._updateCurrent(e.next), this._updateSelection(e.next)
        },
        onItemChangeOccurred(e) {
            this.model.ScrollOccurred.animatingScrollTo || (this._updateCurrent(e.current), this._updateSelection(e.current))
        },
        onItemChangeCompleted(e) {
            this.model.galleryContainer.classList.toggle("animating", !1), this._updateCurrent(e.current), this._updateSelection(e.current), (0, n.update)((() => {
                this.model.AutoPlay.isPlaying && (this.lastInteractionEvent = {
                    event: "timeout"
                })
            }))
        },
        _updateCurrent(e) {
            const t = this.tabNav.items.filter((t => t.trigger === e.id))[0];
            t !== this.tabNav.current && (this.setCurrentItem(t), this.roamingTabIndex.setSelectedItemByIndex(t.index, !0), document.activeElement.parentElement.parentElement === t.el.parentElement && t.anchorEl.focus())
        },
        _updateSelection(e) {
            e.select(), this._items.forEach((t => {
                t !== e && t.deselect()
            }))
        },
        _createDotnavTimelineHooks() {
            let e = 0;
            this._dotnavItems.forEach(((t, s) => {
                this.model.AutoPlay.highlightsTimeGroup.addKeyframe(t, {
                    start: e + this.model.persistDuration,
                    event: "autoplay:timeout"
                }).controller.on("autoplay:timeout", (() => {
                    if (!this.model.AutoPlay.isTransitioning && this.currentIndex === s && this.currentIndex < this._items.length - 1) {
                        this.lastInteractionEvent && !this.model.AutoPlay.isPlaying || (this.lastInteractionEvent = {
                            event: "timeout"
                        });
                        const e = (this.currentIndex + 1) % this._items.length;
                        this.animateToItem(e)
                    }
                })), e += this.model.persistDuration
            }))
        },
        _onDotnavItemClick(e) {
            this.model.galleryContainer.classList.toggle("animating", !0), this.model.AutoPlay.galleryHasEnded && this.model.AutoPlay.pause(), this.model.AutoPlay.galleryHasEnded = !1, this.model.AutoPlay.isTransitioning = !0;
            const t = this.tabNavAnchors.indexOf(e.target);
            this.model.AutoPlay.highlightsTimeGroup.time(t * this.model.persistDuration), (0, n.update)((() => {
                this.model.AutoPlay.isTransitioning = !1
            }))
        }
    }
}, function(e, t, s) {
    "use strict";
    const i = s(216),
        n = s(27),
        r = s(104);
    e.exports = {
        created() {
            this.tabNav = {
                items: [],
                current: null
            }
        },
        itemsCreated() {
            Array.from(this.el.querySelectorAll(this.model.TabNav.ItemSelector)).forEach(((e, t) => {
                const s = new a(e, t),
                    i = this.getItemForTrigger(s.trigger);
                i || console.error(`MixinGallery '${this.el.id}': Could not match tav/dot nav item with trigger '${s.trigger}', to gallery any item. Double check to make sure the triggers match the item id's.`), s.onSelected = e => {
                    this.lastInteractionEvent = e, e.preventDefault();
                    let s = t - this.wrappedIndex(this.currentIndex),
                        i = this.currentIndex + s;
                    this.animateToItem(i)
                }, i.on("select", (() => {
                    e.classList.add("current"), s.anchorEl.classList.add("current")
                })), i.on("deselect", (() => {
                    e.classList.remove("current"), s.anchorEl.classList.remove("current")
                })), s.anchorEl.addEventListener("click", s.onSelected), this.tabNav.items.push(s)
            })), this._items.forEach(((e, t) => {
                e.el.setAttribute("role", r.TABPANEL), e.el.setAttribute(n.LABELLEDBY, this.tabNav.items[t].anchorEl.id), this.tabNav.items[t].anchorEl.setAttribute(n.CONTROLS, e.el.id)
            }))
        },
        mounted() {
            const e = this.tabNav.items[0].el.parentElement;
            this.roamingTabIndex = new i(e, {
                selector: this.model.TabNav.RoamingTabIndexSelector
            })
        },
        onItemChangeCompleted(e) {
            let t = this.tabNav.items.filter((t => t.trigger === e.current.id))[0];
            this.setCurrentItem(t), this.roamingTabIndex.setSelectedItemByIndex(t.index, !0), document.activeElement.parentElement.parentElement === t.el.parentElement && t.anchorEl.focus()
        },
        setCurrentItem(e) {
            e !== this.tabNav.current && (this.tabNav.current = e)
        },
        destroy() {
            this.tabNav.items.forEach((e => {
                e.el.classList.remove("current"), e.el = null, e.anchorEl.classList.remove("current"), e.anchorEl.removeEventListener("click", e.onSelected), e.anchorEl = null
            })), this.tabNav.items = [], this.tabNav.current = null
        }
    };
    class a {
        constructor(e, t) {
            this.el = e, this.index = t, this.anchorEl = e.querySelector("a"), this.trigger = this.anchorEl.getAttribute("data-ac-gallery-trigger"), this.anchorEl.setAttribute("role", r.TAB)
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(27),
        n = s(104),
        r = s(105),
        a = s(106),
        o = s(107),
        l = s(218),
        h = l.prototype,
        d = function(e, t) {
            t = t || {}, l.call(this, e, {
                selector: t.selector || "*[role=" + n.OPTION + "]",
                state: t.state || i.SELECTED
            })
        },
        c = d.prototype = Object.create(h);
    c._setTabbingByIndex = function(e) {
        var t = this._navItems[e];
        o(t.getAttribute(this._state)) ? (this.focusedNavItemIndex = e, this.selectedNavitemIndex = e, this._enableElement(t)) : this._disableElement(t)
    }, c.setSelectedItemByIndex = function(e, t) {
        isNaN(this.selectedNavitemIndex) || this._disableElement(this._navItems[this.selectedNavitemIndex]), h.setSelectedItemByIndex.call(this, e, t), this._enableElement(this._navItems[this.selectedNavitemIndex])
    }, c.addNavItem = function(e) {
        e && e.nodeType && this._navItems.indexOf(e) < 0 && (o(e.getAttribute(i.DISABLED)) || this._disableElement(e), this._navItems.push(e))
    }, c._arrowDown = function(e, t) {
        h._arrowDown.call(this, e, t, !0), this.selectOption(t)
    }, c._enableElement = function(e) {
        r(e), e.setAttribute(this._state, "true")
    }, c._disableElement = function(e) {
        a(e), e.setAttribute(this._state, "false")
    }, c.selectOption = function(e) {
        a(this._navItems[this.selectedNavitemIndex]), h.selectOption.call(this, e), r(this._navItems[this.focusedNavItemIndex])
    }, e.exports = d
}, function(e, t, s) {
    "use strict";
    e.exports = function(e, t, s) {
        let i;
        "string" != typeof s && (s = s.toString()), i = e instanceof NodeList ? e : [].concat(e), i.forEach((e => {
            e.setAttribute(t, s)
        }))
    }
}, function(e, t, s) {
    "use strict";
    var i = s(106),
        n = s(105),
        r = s(107),
        a = s(12).EventEmitterMicro,
        o = a.prototype,
        l = s(27),
        h = s(219),
        d = function(e, t) {
            a.call(this), this._options = t || {}, this._selector = t.selector || ".navitem", this._allowMultiSelection = t.multiSelection || !1;
            var s = t.state || l.SELECTED;
            this.el = e, this._navItems = e.querySelectorAll(this._selector), this._navItems = Array.prototype.slice.call(this._navItems), this._state = s, this._navKeys = {}, this.selectOption = this.selectOption.bind(this), this._handleKeyDown = this._handleKeyDown.bind(this), this._setup()
        };
    d.ONSELECT = "onSelect", d.ONFOCUS = "onFocus";
    var c = d.prototype = Object.create(o);
    c._setup = function() {
        for (var e = [h.ARROW_DOWN, h.ARROW_RIGHT], t = [h.ARROW_UP, h.ARROW_LEFT], s = [h.ENTER, h.SPACEBAR], i = 0; i < e.length; i++) this.addNavkey(e[i], this._arrowDown.bind(this, !0)), this.addNavkey(t[i], this._arrowDown.bind(this, null)), this.addNavkey(s[i], this.selectOption);
        this._setupNavItems()
    }, c._setupNavItems = function() {
        if (this._navItems.length) {
            for (var e = 0; e < this._navItems.length; e++) this._setTabbingByIndex(e);
            void 0 !== this.focusedNavItemIndex && void 0 !== this.selectedNavitemIndex || this.setSelectedItemByIndex(0, !0)
        }
    }, c._setTabbingByIndex = function(e) {
        var t = this._navItems[e];
        r(t.getAttribute(this._state)) && (this.focusedNavItemIndex = e, this.selectedNavitemIndex = e), r(t.getAttribute(l.DISABLED)) ? i(t) : n(t)
    }, c.start = function() {
        this._navItems.length < 1 || (this.el.addEventListener("keydown", this._handleKeyDown), this.el.addEventListener("click", this.selectOption))
    }, c.stop = function() {
        this.el.removeEventListener("keydown", this._handleKeyDown), this.el.removeEventListener("click", this.selectOption)
    }, c._handleKeyDown = function(e) {
        if (e.ctrlKey || e.altKey || e.metaKey) return !0;
        this._navKeys[e.keyCode] && this._navKeys[e.keyCode](e)
    }, c._arrowDown = function(e, t, s) {
        t.preventDefault(), this.previousNavItemIndex = this.focusedNavItemIndex, this.focusedNavItemIndex = this._calculateIndex(e, this.focusedNavItemIndex), this._navItems[this.focusedNavItemIndex].focus(), s || this.trigger(d.ONFOCUS, {
            event: t,
            index: this.focusedNavItemIndex,
            el: this._navItems[this.focusedNavItemIndex]
        })
    }, c.selectOption = function(e, t) {
        e.preventDefault();
        var s = this._navItems.indexOf(document.activeElement);
        s > -1 && document.activeElement !== this._navItems[this.focusedNavItemIndex] && (this.focusedNavItemIndex = s), this._allowMultiSelection ? this._toggleState() : (this._navItems[this.selectedNavitemIndex].setAttribute(this._state, "false"), this._navItems[this.focusedNavItemIndex].setAttribute(this._state, "true")), this.selectedNavitemIndex = this.focusedNavItemIndex, t || this.trigger(d.ONSELECT, {
            event: e,
            index: this.selectedNavitemIndex,
            el: this._navItems[this.selectedNavitemIndex]
        })
    }, c._toggleState = function() {
        var e = this._navItems[this.focusedNavItemIndex].getAttribute(this._state);
        r(e) ? this._navItems[this.focusedNavItemIndex].setAttribute(this._state, "false") : this._navItems[this.focusedNavItemIndex].setAttribute(this._state, "true")
    }, c._calculateIndex = function(e, t) {
        var s = t;
        if (!0 === e) {
            if (s = ++s >= this._navItems.length ? 0 : s, !r(this._navItems[s].getAttribute(l.DISABLED)) || this._navItems[s].hasAttribute("disabled")) return s
        } else if (s = --s < 0 ? this._navItems.length - 1 : s, !r(this._navItems[s].getAttribute(l.DISABLED)) || this._navItems[s].hasAttribute("disabled")) return s;
        return this._calculateIndex(e, s)
    }, c.updateNavItems = function() {
        var e = this.el.querySelectorAll(this._selector);
        this._navItems = Array.prototype.slice.call(e)
    }, c.addNavItem = function(e) {
        e && e.nodeType && this._navItems.indexOf(e) < 0 && (r(e.getAttribute(l.DISABLED)) || n(e), this._navItems.push(e))
    }, c.setSelectedItemByIndex = function(e, t) {
        this._allowMultiSelection || isNaN(this.selectedNavitemIndex) || this._navItems[this.selectedNavitemIndex].setAttribute(this._state, "false"), this.focusedNavItemIndex = e, this.selectedNavitemIndex = e, this._navItems[this.selectedNavitemIndex].setAttribute(this._state, "true"), t || this.trigger(d.ONSELECT, {
            event: null,
            index: this.focusedNavItemIndex,
            el: this._navItems[this.focusedNavItemIndex]
        })
    }, c.getSelectedItem = function() {
        return this._navItems[this.selectedNavitemIndex]
    }, c.getFocusedItem = function(e) {
        return this._navItems[this.focusedNavItemIndex]
    }, c.addNavkey = function(e, t) {
        "function" == typeof t && "number" == typeof e ? this._navKeys[e] = t : console.warn("incorrect types arguments were passed")
    }, c.removeNavkey = function(e) {
        delete this._navKeys[e]
    }, c.destroy = function() {
        for (var e in o.destroy.call(this), this.stop(), this.el = null, this._options = null, this._selector = null, this.focusedNavItemIndex = null, this.selectedNavitemIndex = null, this._navItems = null, this._state = null, this.selectOption = null, this._handleKeyDown = null, this._navKeys) this._navKeys.hasOwnProperty(e) && this.removeNavkey(e);
        this._navKeys = null
    }, e.exports = d
}, function(e, t, s) {
    "use strict";
    e.exports = s(220)
}, function(e, t, s) {
    "use strict";
    e.exports = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CONTROL: 17,
        ALT: 18,
        COMMAND: 91,
        CAPSLOCK: 20,
        ESCAPE: 27,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_ZERO: 96,
        NUMPAD_ONE: 97,
        NUMPAD_TWO: 98,
        NUMPAD_THREE: 99,
        NUMPAD_FOUR: 100,
        NUMPAD_FIVE: 101,
        NUMPAD_SIX: 102,
        NUMPAD_SEVEN: 103,
        NUMPAD_EIGHT: 104,
        NUMPAD_NINE: 105,
        NUMPAD_ASTERISK: 106,
        NUMPAD_PLUS: 107,
        NUMPAD_DASH: 109,
        NUMPAD_DOT: 110,
        NUMPAD_SLASH: 111,
        NUMPAD_EQUALS: 187,
        TICK: 192,
        LEFT_BRACKET: 219,
        RIGHT_BRACKET: 221,
        BACKSLASH: 220,
        SEMICOLON: 186,
        APOSTRAPHE: 222,
        APOSTROPHE: 222,
        SPACEBAR: 32,
        CLEAR: 12,
        COMMA: 188,
        DOT: 190,
        SLASH: 191
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(70));
    t.default = { ...n.default,
        created(e) {
            n.default.created.call(this, e);
            const t = this.el.querySelector(".all-access-pass.aap-highlights"),
                s = t && t.getAttribute("data-aap-kf");
            if (!s) throw Error("Cannot find aap keyframe attribute");
            this.inViewKeyframe.overwriteProps(JSON.parse(s))
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(23));
    t.default = {
        beforeCreate() {
            this._sectionEl = this.el.closest("section"), this._setPreloadKeyframe = this._setPreloadKeyframe.bind(this), this._setPreloadOnPriorSectionLoaded = this._setPreloadOnPriorSectionLoaded.bind(this), this._preloadNextItem = this._preloadNextItem.bind(this)
        },
        mounted() {
            this._setPreloadActiveRange(), this._setPreloadStrategy()
        },
        _setPreloadStrategy() {
            const e = {
                    keyframe: this._setPreloadKeyframe,
                    "prior-section": this._setPreloadOnPriorSectionLoaded
                },
                t = this.model.galleryContainer.getAttribute("data-preload-strategy");
            "string" == typeof t ? t.split(/,\s*/).forEach((t => {
                try {
                    e[t]()
                } catch {
                    throw new Error(`"${t}" is not a valid preload-strategy. Available types: ${Object.keys(e).join(", ")}`)
                }
            })) : this._setPreloadKeyframe()
        },
        _setPreloadActiveRange() {
            this.anim.addEvent(this.el, {
                anchors: ["body"],
                start: "a0t - 100vh",
                end: "b",
                onExit: () => {
                    this._preloadAborted = !0
                },
                event: "abort-preload-on-exit-kf",
                disabledWhen: ["reduced-motion", "aow"]
            })
        },
        _setPreloadKeyframe() {
            this.anim.addEvent(this.el, {
                anchors: ["#media-gallery"],
                start: "a0t - 100vh",
                end: "b",
                event: "preload-kf",
                onEnter: () => {
                    this._preloadAborted = !1, this._preloadNextItem()
                },
                disabledWhen: ["reduced-motion", "aow"]
            })
        },
        async _setPreloadOnPriorSectionLoaded() {
            const e = this._sectionEl.previousElementSibling;
            if (!e) return void this._preloadNextItem();
            const t = Array.from(e.querySelectorAll("video"));
            await Promise.all(t.map(this._checkVideoLoadedStatus)), this._preloadNextItem()
        },
        _checkVideoLoadedStatus: e => new Promise((t => {
            e.addEventListener("canplaythrough", t), e.addEventListener("error", t), n.default.browser.firefox && e.addEventListener("canplay", t)
        })),
        async _preloadNextItem() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            if (this._preloadAborted) return;
            const t = this._items.slice(e).find((e => "video" === e.type));
            t && (await t.load(), this._preloadNextItem(t.index + 1))
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(71)),
        r = i(s(23));
    t.default = { ...n.default,
        beforeCreate() {
            n.default.beforeCreate.call(this), this.model.ScrollOccurred = {}, Object.defineProperties(this.model.ScrollOccurred, {
                animatingScrollTo: {
                    configurable: !0,
                    get: () => this.animatingScrollTo
                },
                itemOffsets: {
                    configurable: !0,
                    get: () => this.itemOffsets
                }
            })
        },
        onScroll(e) {
            this.lastInteractionEvent = {
                type: "swipe",
                target: e.target,
                srcElement: e.srcElement
            }, r.default.browser.firefox && "none" === this.scrollContainer.style["scroll-snap-type"] && (this.scrollContainer.style["scroll-snap-type"] = "x mandatory");
            const t = this.closest(this.scrollContainer.scrollLeft, this.itemOffsets),
                s = this.itemOffsets.findIndex((e => e === t));
            this.closestIndex !== s && this.setCurrentIndex(), this.debounceScroll()
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(4));
    const r = s(108).default,
        {
            PageOverlayBundle: a
        } = s(30),
        o = r.withMixins(...a);
    class l extends n.default {
        static IS_SUPPORTED() {
            return !0
        }
        constructor(e) {
            super(e);
            const t = this.el.querySelector(".icon-card-modal-content"),
                s = new o(t);
            this.el.querySelector(".modal-trigger").addEventListener("click", (e => {
                s.open()
            }))
        }
    }
    t.default = l
}, function(e, t, s) {
    "use strict";
    e.exports = function(e) {
        return !(!e || !e.nodeType)
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(109));
    t.default = {
        beforeCreate() {
            document.body._animInfo ? (this.anim = document.body._animInfo.group.anim, this._setViewport(this.anim.model.pageMetrics)) : (this.viewportEmitterMicro = new n.default, this.viewportEmitterMicro.CHANGE_EVENTS = n.default.CHANGE_EVENTS, this._setViewport(this.viewportEmitterMicro))
        },
        onBreakpointChange(e) {
            this._setViewport(e), this._setPreviousViewport(e)
        },
        onOpen() {
            this.opened = !0
        },
        onClose() {
            this.opened = !1
        },
        _setViewport(e) {
            this._viewport = this.anim ? this._getValidViewport(e.breakpoint) : this._getValidViewport(e.viewport)
        },
        _setPreviousViewport(e) {
            this._previousViewport = this.anim ? this._getValidViewport(e.previousBreakpoint) : this._getValidViewport(e.oldViewport)
        },
        _getValidViewport(e) {
            const t = {
                X: "L",
                L: "L",
                M: "M",
                S: "S"
            };
            if (!Object.keys(t).includes(e)) throw `The viewport ${e} is not valid. Valid viewports are: ${Object.keys(t)}`;
            return t[e] || ""
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = {
        created() {
            this._createModalElements()
        },
        beforeMount() {
            this._setDialogAriaLabel(), this.appendModalElements()
        },
        destroy() {
            document.body.removeChild(this.elements.container), this._releaseEvents();
            for (let e in this) Object.prototype.hasOwnProperty.call(this, e) && (this[e] = null)
        },
        getModalElementKey(e) {
            let t;
            for (const s in e.dataset)
                if (s.includes("modalElement")) {
                    const e = s.substring(12);
                    t = e[0].toLowerCase() + e.slice(1)
                }
            return t
        },
        appendContentElement() {
            this.appendContent(this.elements.content, this.elements.contentContainer), this.trigger(this.model.Events.CONTENT_APPENDED)
        },
        appendModalElements() {
            document.body.appendChild(this.elements.container), this.trigger(this.model.Events.RENDERED)
        },
        _createModalElements() {
            this._createTemplates(), this._createElementsFromTemplate();
            for (const e in this.templates) this._setChildElements(this.elements[e]);
            this._setDialogRoleElement(), this._setElementAttributes(), this.appendContentElement()
        },
        _createTemplates() {
            for (const e in this.model.Elements) {
                const t = this.model.Elements[e].Template;
                t && !this.templates[e] && (this.templates[e] = t)
            }
        },
        _createElementsFromTemplate() {
            for (const e in this.templates) this.elements[e] = (new DOMParser).parseFromString(this.templates[e], "text/html").body.childNodes[0]
        },
        _setChildElements(e) {
            [...e.children].forEach((e => {
                this.getModalElementKey(e) && (this.elements[this.getModalElementKey(e)] = e), this._setChildElements(e)
            }))
        },
        _setDialogRoleElement() {
            this.dialogRoleElement || (this.dialogRoleElement = this.elements.container.querySelector(this.model.DialogRole.Selector) || this.elements.container);
            for (const e in this.model.DialogRole.Attributes) this.dialogRoleElement.setAttribute(e, this.model.DialogRole.Attributes[e])
        },
        _setElementAttributes() {
            let e = {},
                t = {};
            for (const t in this.model.Elements) this.model.Elements[t].Attributes && (e[t] = this.model.Elements[t].Attributes);
            for (const s in e) {
                t[s] = Object.assign({}, e[s], this.options.attributes[s]);
                for (const s in this.options.attributes) "undefined" !== t[s] && (t[s] = Object.assign({}, e[s], this.options.attributes[s]))
            }
            for (const e in t)
                for (const s in t[e]) {
                    let i = t[e][s];
                    if (!this.elements[e]) return;
                    if ("class" === s) Array.isArray(i) && (i = i.join(" ")), this.elements[e].className = `${this.elements[e].className} ${i}`.trim();
                    else this.elements[e].setAttribute(s, i)
                }
        },
        _setDialogAriaLabel() {
            if (this.elements.content && this.elements.content.dataset.modalDialogLabel) {
                let e = this.elements.content.dataset.modalDialogLabel;
                this.dialogRoleElement.setAttribute("aria-label", e)
            } else this.dialogRoleElement.hasAttribute("aria-label") || this.dialogRoleElement.hasAttribute("aria-labelledby") || this.dialogRoleElement.setAttribute("aria-label", "Modal")
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = {
        created() {
            this.options.gum || this._isVue || (this.anim ? (this.anim.on(this.anim.model.PageEvents.ON_RESIZE_IMMEDIATE, this.onResizeImmediate), this.anim.on(this.anim.model.PageEvents.ON_RESIZE_DEBOUNCED, this.onResizeDebounced), this.anim.on(this.anim.model.PageEvents.ON_BREAKPOINT_CHANGE, this.onBreakpointChange)) : (window.addEventListener("resize", this.onResizeImmediate), this.viewportEmitterMicro.on(this.viewportEmitterMicro.CHANGE_EVENTS.VIEWPORT, this.onBreakpointChange)), this._mountedRaf = requestAnimationFrame(this.mounted))
        },
        onResizeImmediate() {
            this.anim || (window.clearTimeout(this._resizeTimeout), this._resizeTimeout = window.setTimeout(this.onResizeDebounced, 250))
        },
        destroy() {
            cancelAnimationFrame(this._mountedRaf), this.anim ? (this.anim.off(this.anim.model.PageEvents.ON_RESIZE_IMMEDIATE, this.onResizeImmediate), this.anim.off(this.anim.model.PageEvents.ON_RESIZE_DEBOUNCED, this.onResizeDebounced), this.anim.off(this.anim.model.PageEvents.ON_BREAKPOINT_CHANGE, this.onBreakpointChange)) : (window.removeEventListener("resize", this.onResizeImmediate), this.viewportEmitterMicro.off(this.viewportEmitterMicro.CHANGE_EVENTS.VIEWPORT, this.onBreakpointChange))
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = {
        created() {
            this.close = this.close.bind(this)
        },
        onWillOpen() {
            this._attachCloseEvents()
        },
        onClose() {
            this._removeCloseEvents(), document.documentElement.classList.remove(...this.model.Open.Document.ClassNames), this.elements.container.classList.remove(...this.model.Open.Container.ClassNames)
        },
        mounted() {
            this.close.elements = Array.from(document.querySelectorAll(this.model.Close.Selector))
        },
        destroy() {
            this.close()
        },
        close(e) {
            this.opened && (e && "click" === e.type && !this.close.elements.includes(e.target) || (this.trigger(this.model.Events.WILLCLOSE), this.trigger(this.model.Events.CLOSE)))
        },
        _removeCloseEvents() {
            this.elements.container && this.elements.container.removeEventListener("click", this.close)
        },
        _attachCloseEvents() {
            this.elements.container && this.elements.container.addEventListener("click", this.close)
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = {
        created() {
            this.onCloseButtonClick = this.onCloseButtonClick.bind(this)
        },
        beforeMount() {
            this._setCloseAriaLabel(), this.appendCloseButton()
        },
        mounted() {
            this.elements.closeButton.addEventListener("click", this.onCloseButtonClick)
        },
        destroy() {
            this.elements.closeButton.removeEventListener("click", this.onCloseButtonClick)
        },
        appendCloseButton() {
            (this.elements.container.querySelector(this.model.Elements.closeButton.ParentSelector) || this.elements.container).appendChild(this.elements.closeButton)
        },
        onCloseButtonClick(e) {
            this.close(e)
        },
        _setCloseAriaLabel() {
            if (this.elements.content && this.elements.content.dataset.modalCloseLabel) {
                let e = this.elements.content.dataset.modalCloseLabel;
                this.elements.closeButton.setAttribute("aria-label", e)
            }
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(232)),
        r = i(s(42));
    t.default = {
        created() {
            this.scrollToModalTop = this.scrollToModalTop.bind(this)
        },
        mounted() {
            r.default.getTabbableElements(this.dialogRoleElement).length && (this._circularTab = new n.default(this.dialogRoleElement))
        },
        onOpen() {
            this._giveModalFocus()
        },
        onWillClose() {
            this._removeModalFocus()
        },
        destroy() {
            clearTimeout(this._focusTimeout), this._removeModalFocus(), this._circularTab && this._circularTab.destroy()
        },
        _giveModalFocus() {
            this.dialogRoleElement.removeAttribute("aria-hidden"), this.elements.container.classList.add("modal-touch-lock"), this._activeElement = document.activeElement, this._circularTab && this._circularTab.start(!0), this.elements.container.addEventListener("scroll", this.scrollToModalTop), this._focusTimeout = setTimeout((() => {
                this.dialogRoleElement.focus({
                    preventScroll: !0
                }), requestAnimationFrame((() => {
                    this.elements.container.removeEventListener("scroll", this.scrollToModalTop), this.elements.container.classList.remove("modal-touch-lock")
                }))
            }), 300)
        },
        _removeModalFocus() {
            this._circularTab && this._circularTab.stop(), this.dialogRoleElement.setAttribute("aria-hidden", "true"), this.elements.container.removeEventListener("scroll", this.scrollToModalTop), this._activeElement && (this._activeElement.focus(), this._activeElement = null)
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(42),
        n = s(233),
        r = s(234),
        a = function(e, t) {
            t = t || {}, this._tabbables = null, this._excludeHidden = t.excludeHidden, this._firstTabbableElement = t.firstFocusElement, this._lastTabbableElement = null, this._relatedTarget = null, this.el = e, this._handleOnFocus = this._handleOnFocus.bind(this)
        },
        o = a.prototype;
    o.start = function(e) {
        this.updateTabbables(), n(this.el, null, this._excludeHidden);
        let t = document.activeElement;
        this._firstTabbableElement ? this.el.contains(document.activeElement) || e || (this._firstTabbableElement.focus(), t = this._firstTabbableElement) : console.warn("this._firstTabbableElement is null, CircularTab needs at least one tabbable element."), this._relatedTarget = t, document.addEventListener("focus", this._handleOnFocus, !0)
    }, o.stop = function() {
        r(this.el), document.removeEventListener("focus", this._handleOnFocus, !0)
    }, o.updateTabbables = function() {
        this._tabbables = i.getTabbableElements(this.el, this._excludeHidden), this._firstTabbableElement = this._firstTabbableElement || this._tabbables[0], this._lastTabbableElement = this._tabbables[this._tabbables.length - 1]
    }, o._handleOnFocus = function(e) {
        if (this.el.contains(e.target)) this._relatedTarget = e.target;
        else {
            if (e.preventDefault(), this.updateTabbables(), this._relatedTarget === this._lastTabbableElement || null === this._relatedTarget) return this._firstTabbableElement.focus(), void(this._relatedTarget = this._firstTabbableElement);
            if (this._relatedTarget === this._firstTabbableElement && this._lastTabbableElement) return this._lastTabbableElement.focus(), void(this._relatedTarget = this._lastTabbableElement)
        }
    }, o.destroy = function() {
        this.stop(), this.el = null, this._tabbables = null, this._firstTabbableElement = null, this._lastTabbableElement = null, this._relatedTarget = null, this._handleOnFocus = null
    }, e.exports = a
}, function(e, t, s) {
    "use strict";
    var i = s(92);
    e.exports = function e(t, s, n) {
        s = s || document.body;
        for (var r = t, a = t; r = r.previousElementSibling;) i(r, n);
        for (; a = a.nextElementSibling;) i(a, n);
        t.parentElement && t.parentElement !== s && e(t.parentElement, s, n)
    }
}, function(e, t, s) {
    "use strict";
    var i = s(93);
    e.exports = function e(t, s) {
        s = s || document.body;
        for (var n = t, r = t; n = n.previousElementSibling;) i(n);
        for (; r = r.nextElementSibling;) i(r);
        t.parentElement && t.parentElement !== s && e(t.parentElement, s)
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = {
        beforeCreate() {
            this.model.Open.Document.ClassNames.push("has-modal-full-bleed")
        },
        beforeMount() {
            this.elements.container.classList.add(...this.model.FullBleed.ClassNames)
        },
        destroy() {
            this.elements.container.classList.remove(...this.model.FullBleed.ClassNames)
        }
    }
}, function(e, t, s) {
    "use strict";
    const i = s(237);
    e.exports = {
        beforeCreate() {
            this._keysToOpen = this.model.Keyboard.open.keys, this._keysToClose = this.model.Keyboard.close.keys, this._enabledKeysToOpen = [], this._enabledKeysToClose = []
        },
        onWillOpen() {
            this._keysToOpen.forEach(this.disableKeyToOpen, this), this._keysToClose.forEach(this.enableKeyToClose, this)
        },
        onWillClose() {
            this._keysToOpen.forEach(this.enableKeyToOpen, this), this._keysToClose.forEach(this.disableKeyToClose, this)
        },
        destroy() {
            this._keysToOpen.forEach(this.disableKeyToOpen, this), this._keysToClose.forEach(this.disableKeyToClose, this)
        },
        addKeyToOpen(e) {
            -1 === this._keysToOpen.indexOf(e) && (this._keysToOpen.push(e), this.enableKeyToOpen(e))
        },
        addKeyToClose(e) {
            -1 === this._keysToClose.indexOf(e) && (this._keysToClose.push(e), this.enableKeyToClose(e))
        },
        removeKeyToOpen(e) {
            const t = this._keysToOpen.indexOf(e); - 1 !== t && (this._keysToOpen.splice(t, 1), this.disableKeyToOpen(e))
        },
        removeAllKeysToOpen() {
            this._keysToOpen.forEach(this.disableKeyToOpen, this), this._keysToOpen.splice(0, this._keysToOpen.length)
        },
        removeKeyToClose(e) {
            const t = this._keysToClose.indexOf(e); - 1 !== t && (this._keysToClose.splice(t, 1), this.disableKeyToClose(e))
        },
        removeAllKeysToClose() {
            this._keysToClose.forEach(this.disableKeyToClose, this), this._keysToClose.splice(0, this._keysToClose.length)
        },
        enableKeyToOpen(e) {
            -1 === this._enabledKeysToOpen.indexOf(e) && (i.onUp(e, this.open, this), this._enabledKeysToOpen.push(e))
        },
        enableKeyToClose(e) {
            -1 === this._enabledKeysToClose.indexOf(e) && (i.onUp(e, this.close, this), this._enabledKeysToClose.push(e))
        },
        disableKeyToOpen(e) {
            const t = this._enabledKeysToOpen.indexOf(e); - 1 !== t && (i.offUp(e, this.open, this), this._enabledKeysToOpen.splice(t, 1))
        },
        disableKeyToClose(e) {
            const t = this._enabledKeysToClose.indexOf(e); - 1 !== t && (i.offUp(e, this.close, this), this._enabledKeysToClose.splice(t, 1))
        }
    }
}, function(e, t, s) {
    "use strict";
    const i = s(238);
    e.exports = new i
}, function(e, t, s) {
    "use strict";
    const i = s(5),
        n = s(239),
        r = "keydown",
        a = "keyup";
    e.exports = class extends i {
        constructor(e) {
            super(), this._keysDown = {}, this._DOMKeyDown = this._DOMKeyDown.bind(this), this._DOMKeyUp = this._DOMKeyUp.bind(this), this._context = e || document, this._context.addEventListener(r, this._DOMKeyDown, !0), this._context.addEventListener(a, this._DOMKeyUp, !0)
        }
        onDown(e, t) {
            return this.on(r + ":" + e, t)
        }
        onceDown(e, t) {
            return this.once(r + ":" + e, t)
        }
        offDown(e, t) {
            return this.off(r + ":" + e, t)
        }
        onUp(e, t) {
            return this.on(a + ":" + e, t)
        }
        onceUp(e, t) {
            return this.once(a + ":" + e, t)
        }
        offUp(e, t) {
            return this.off(a + ":" + e, t)
        }
        isDown(e) {
            return e += "", this._keysDown[e] || !1
        }
        isUp(e) {
            return !this.isDown(e)
        }
        destroy() {
            return this._context.removeEventListener(r, this._DOMKeyDown, !0), this._context.removeEventListener(a, this._DOMKeyUp, !0), this._keysDown = null, this._context = null, super.destroy(), this
        }
        _DOMKeyDown(e) {
            var t = this._normalizeKeyboardEvent(e),
                s = t.keyCode += "";
            this._trackKeyDown(s), this.trigger(r + ":" + s, t)
        }
        _DOMKeyUp(e) {
            var t = this._normalizeKeyboardEvent(e),
                s = t.keyCode += "";
            this._trackKeyUp(s), this.trigger(a + ":" + s, t)
        }
        _normalizeKeyboardEvent(e) {
            return new n(e)
        }
        _trackKeyUp(e) {
            this._keysDown[e] && (this._keysDown[e] = !1)
        }
        _trackKeyDown(e) {
            this._keysDown[e] || (this._keysDown[e] = !0)
        }
    }
}, function(e, t, s) {
    "use strict";
    const i = s(240),
        n = ["keyLocation", "keyIdentifier"],
        r = "keyCode";
    e.exports = class {
        constructor(e) {
            this.originalEvent = e;
            for (let t in e) - 1 === n.indexOf(t) && "function" != typeof e[t] && (this[t] = e[t]);
            this[r] || (this[r] = this._getKeyCode()), this.location = void 0 !== this.originalEvent.location ? this.originalEvent.location : this.originalEvent.keyLocation
        }
        preventDefault() {
            if ("function" == typeof this.originalEvent.preventDefault) return this.originalEvent.preventDefault();
            this.originalEvent.returnValue = !1
        }
        stopPropagation() {
            return this.originalEvent.stopPropagation()
        }
        _getKeyCode() {
            return i[this.code] || -1
        }
    }
}, function(e, t, s) {
    "use strict";
    e.exports = {
        Backspace: 8,
        Tab: 9,
        Enter: 13,
        NumpadEnter: 13,
        ShiftLeft: 16,
        ShiftRight: 16,
        ControlLeft: 17,
        ControlRight: 17,
        AltLeft: 18,
        AltRight: 18,
        CapsLock: 20,
        Escape: 27,
        PageUp: 33,
        PageDown: 34,
        End: 35,
        Home: 36,
        ArrowLeft: 37,
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowDown: 40,
        Delete: 46,
        Digit0: 48,
        Digit1: 49,
        Digit2: 50,
        Digit3: 51,
        Digit4: 52,
        Digit5: 53,
        Digit6: 54,
        Digit7: 55,
        Digit8: 56,
        Digit9: 57,
        KeyA: 65,
        KeyB: 66,
        KeyC: 67,
        KeyD: 68,
        KeyE: 69,
        KeyF: 70,
        KeyG: 71,
        KeyH: 72,
        KeyI: 73,
        KeyJ: 74,
        KeyK: 75,
        KeyL: 76,
        KeyM: 77,
        KeyN: 78,
        KeyO: 79,
        KeyP: 80,
        KeyQ: 81,
        KeyR: 82,
        KeyS: 83,
        KeyT: 84,
        KeyU: 85,
        KeyV: 86,
        KeyW: 87,
        KeyX: 88,
        KeyY: 89,
        KeyZ: 90,
        Numpad0: 96,
        Numpad1: 97,
        Numpad2: 98,
        Numpad3: 99,
        Numpad4: 100,
        Numpad5: 101,
        Numpad6: 102,
        Numpad7: 103,
        Numpad8: 104,
        Numpad9: 105,
        NumpadMultiply: 106,
        NumpadAdd: 107,
        NumpadSubtract: 109,
        NumpadDecimal: 110,
        NumpadDivide: 111,
        NumpadEqual: 187,
        Backquote: 192,
        BracketLeft: 219,
        BracketRight: 221,
        Backslash: 220,
        Semicolon: 186,
        Quote: 222,
        Space: 32,
        Equal: 187,
        Comma: 188,
        Minus: 189,
        Period: 190,
        Slash: 191
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = {
        created() {
            this.open = this.open.bind(this)
        },
        onWillOpen() {
            document.documentElement.classList.add(...this.model.Open.Document.ClassNames), this.elements.container.classList.add(...this.model.Open.Container.ClassNames), this.scrollToModalTop()
        },
        open() {
            this.opened || (this.trigger(this.model.Events.WILLOPEN), this.trigger(this.model.Events.OPEN))
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = {
        beforeCreate() {
            this.model.Open.Document.ClassNames.push("has-modal-page-overlay"), this._scrollBarWidth = 0
        },
        beforeMount() {
            this.elements.container.classList.add(...this.model.PageOverlay.ClassNames)
        },
        mounted() {
            this._saveScrollBarWidth()
        },
        onResizeDebounced() {
            this.opened || this._saveScrollBarWidth()
        },
        onWillOpen() {
            document.documentElement.style.setProperty("--modal-scrollbar-buffer", this._scrollBarWidth)
        },
        onClose() {
            document.documentElement.style.removeProperty("--modal-scrollbar-buffer")
        },
        destroy() {
            this.elements.container.classList.remove(...this.model.PageOverlay.ClassNames)
        },
        _saveScrollBarWidth() {
            this._scrollBarWidth = window.innerWidth - document.body.clientWidth + "px"
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = {
        created() {
            this._scrollX = 0, this._scrollY = 0
        },
        onWillOpen() {
            this._saveScrollPosition()
        },
        onClose() {
            this._restoreScrollPosition()
        },
        _saveScrollPosition() {
            this._scrollX = document.documentElement.scrollLeft, this._scrollY = document.documentElement.scrollTop
        },
        _restoreScrollPosition() {
            window.scrollTo(this._scrollX, this._scrollY)
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = s(30);
    t.default = [i.Close, i.CloseButton]
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = s(30);
    t.default = [...i.CloseBundle, i.Focus, i.Keyboard, i.Open, i.FullBleed, i.ScrollPosition]
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = s(30);
    t.default = [...i.CloseBundle, i.Focus, i.Keyboard, i.Open, i.PageOverlay, i.ScrollPosition]
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(110)),
        r = i(s(112)),
        a = i(s(44)),
        o = i(s(113));
    class l extends n.default {
        addCustomPlugins() {
            this.injectPlugins({
                AnimLoad: r.default,
                AnimPlay: a.default,
                ViewportSourceOnce: o.default
            })
        }
    }
    t.default = l
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(29)),
        r = i(s(103)),
        a = s(21);
    const {
        HAVE_NOTHING: o,
        HAVE_CURRENT_DATA: l,
        NETWORK_EMPTY: h,
        NETWORK_NO_SOURCE: d
    } = HTMLMediaElement, {
        MEDIA_ERR_SRC_NOT_SUPPORTED: c
    } = MediaError;
    class u extends r.default {
        unload() {
            return void 0 === this.media._destroyed && this.media.trigger(a.EVT_UNLOAD), this.media.el.setAttribute("src", ""), this.media.el.load()
        }
        get loadingState() {
            if (this.media.el.error) {
                return "" === this.media.el.getAttribute("src") && this.media.el.error.code === c ? n.default.LOADED : n.default.ERROR
            }
            return [h, d].includes(this.media.el.networkState) && this.media.el.readyState === o ? n.default.EMPTY : this.media.el.readyState < l ? this.media.el.buffered.length && 0 === this.media.el.buffered.start(0) && this.media.el.buffered.end(0) === this.media.el.duration ? n.default.LOADED : n.default.LOADING : n.default.LOADED
        }
    }
    t.default = u
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(108)),
        r = s(30),
        a = i(s(250)),
        o = s(251),
        l = s(1);
    class h extends a.default {
        IS_SUPPORTED() {
            return !0
        }
        constructor(e) {
            super(e);
            const t = this.el.querySelector(`[${l.CONTENT_WRAPPER_ATTRIB}]`),
                s = this.el.querySelector(`[${l.BTN_OPEN_ATTRIB}]`);
            this._modal = this._createModal(t, s)
        }
        get refId() {
            return this.modal.refId
        }
        get modal() {
            return this._modal
        }
        get name() {
            return this.modal.name
        }
        get animScrollGroup() {
            return this.modal.animScrollGroup
        }
        _createModal(e, t) {
            if (!e) return this.logger.error("An L2Modal for the following L1 element is unable to find the required content wrapper element", this.el), {};
            const s = e.hasAttribute(l.USE_ANIM_LIFECYCLE_ATTRIB) ? o.AnimLifecycleEvents : {};
            return new(n.default.withMixins(o.AnalyticsScrollDepth, s, o.AnimScrollGroup, o.AriaLabelledby, o.CloseElements, r.Focus, o.GumComponentRefId, r.Keyboard, o.LazyImage, o.ModalId, o.OpenButton, o.OpenCloseAnimation, o.OverwriteModel, o.ScrollBuffer, r.ScrollPosition, o.SosumiLinks))(e, {
                attributes: {},
                btnOpen: t
            })
        }
    }
    t.default = h
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(2)),
        r = i(s(4)),
        a = s(114),
        o = s(9),
        l = s(13),
        h = function(e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var s = d(t);
            if (s && s.has(e)) return s.get(e);
            var i = {
                    __proto__: null
                },
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && {}.hasOwnProperty.call(e, r)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    a && (a.get || a.set) ? Object.defineProperty(i, r, a) : i[r] = e[r]
                }
            return i.default = e, s && s.set(e, i), i
        }(s(33));

    function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
            s = new WeakMap;
        return (d = function(e) {
            return e ? s : t
        })(e)
    }
    class c extends r.default {
        constructor(e) {
            super(e), this.unenhanceEventsOccurred = new Set, this.gum.on(a.EVENTS.DOM_COMPONENTS_MOUNTED, (() => {
                this.pageXp = this.gum.getComponentOfType("PageXpController", document.body)
            })), this._onUnenhancePageXp = this._onUnenhancePageXp.bind(this), this._onUnenhancePageXpFeature = this._onUnenhancePageXpFeature.bind(this), this.anim.once(l.EVT_UNENHANCE, this._onUnenhancePageXp), this.anim.on(l.EVT_UNENHANCE_FEATURE, this._onUnenhancePageXpFeature)
        }
        destroy() {
            this.destroyed || (this.destroyed = !0, this.unenhanceFeatureClass(), this.enhancedScrollGroup && this.pageXp.scrollGroupPromises.push(this.enhancedScrollGroup.remove().catch((() => {}))), (0, n.default)((() => {
                this.featureDetect && this.featureDetect !== l.FEATURE_ENHANCED && this.gum && this.anim.forceUpdate(), super.destroy()
            })))
        }
        get logger() {
            return o.DevLogger
        }
        _onUnenhancePageXp() {
            this.destroyed || this.onUnenhance()
        }
        _onUnenhancePageXpFeature(e) {
            this.destroyed || this.unenhanceEventsOccurred.has(e) || (this.onUnenhanceEvent(e), this.unenhanceEventsOccurred.add(e), this._onUnenhancePageXp())
        }
        onUnenhance() {
            this.destroy()
        }
        onUnenhanceEvent(e) {
            this.logger.info("onUnenhanceEvent", e, this.componentName)
        }
        async unenhanceFeatureClass() {
            this.featureDetect && this.featureDetect !== l.FEATURE_ENHANCED && await h.removeFeatureDetectClass(this.featureDetect), (0, n.default)((() => this.gum && this.anim.forceUpdate()))
        }
        setUnenhanceViewports() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    overwriteDefaults: !1,
                    excludeMatches: !1
                };
            h.setupViewportTracker({
                viewports: e,
                defaultViewports: this.pageXp.defaultEnhancedViewports,
                onVpChanged: this._unenhanceViewportHandler,
                overwriteDefaults: t.overwriteDefaults,
                excludeMatches: t.excludeMatches
            }).then((() => {
                this.pageXp ? this._onUnenhancePageXpFeature("enhanced-xp:invalid-vp") : this.destroy(), this.logger.info("unenhanceViewports", this.componentName)
            }))
        }
    }
    t.default = c
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "AnalyticsScrollDepth", {
        enumerable: !0,
        get: function() {
            return n.default
        }
    }), Object.defineProperty(t, "AnimLifecycleEvents", {
        enumerable: !0,
        get: function() {
            return r.default
        }
    }), Object.defineProperty(t, "AnimScrollGroup", {
        enumerable: !0,
        get: function() {
            return a.default
        }
    }), Object.defineProperty(t, "AriaLabelledby", {
        enumerable: !0,
        get: function() {
            return o.default
        }
    }), Object.defineProperty(t, "CloseElements", {
        enumerable: !0,
        get: function() {
            return l.default
        }
    }), Object.defineProperty(t, "GumComponentRefId", {
        enumerable: !0,
        get: function() {
            return h.default
        }
    }), Object.defineProperty(t, "LazyImage", {
        enumerable: !0,
        get: function() {
            return d.default
        }
    }), Object.defineProperty(t, "ModalId", {
        enumerable: !0,
        get: function() {
            return c.default
        }
    }), Object.defineProperty(t, "OpenButton", {
        enumerable: !0,
        get: function() {
            return u.default
        }
    }), Object.defineProperty(t, "OpenCloseAnimation", {
        enumerable: !0,
        get: function() {
            return m.default
        }
    }), Object.defineProperty(t, "OverwriteModel", {
        enumerable: !0,
        get: function() {
            return p.default
        }
    }), Object.defineProperty(t, "ScrollBuffer", {
        enumerable: !0,
        get: function() {
            return f.default
        }
    }), Object.defineProperty(t, "SosumiLinks", {
        enumerable: !0,
        get: function() {
            return _.default
        }
    });
    var n = i(s(252)),
        r = i(s(253)),
        a = i(s(254)),
        o = i(s(255)),
        l = i(s(256)),
        h = i(s(259)),
        d = i(s(260)),
        c = i(s(261)),
        u = i(s(262)),
        m = i(s(263)),
        p = i(s(264)),
        f = i(s(265)),
        _ = i(s(266))
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = s(9),
        n = s(1),
        r = s(26);
    let a = null;
    try {
        a = s(25)
    } catch (e) {}

    function o(e, t) {
        const s = {
            25: 74,
            50: 75,
            75: 76,
            100: 72
        };
        "string" != typeof e && i.DevLogger.error("Required modal analytics prop3 name not provided"), t || i.DevLogger.error("Required progress markers not provided."), t = parseInt(t), !isNaN(t) && Object.keys(s).includes(t.toString()) || i.DevLogger.error("Invalid progress marker");
        let n = `${t}% Viewed`,
            r = `${e} - ${t}% Viewed`;
        return 100 === t && (n = "Modal End", r = `${e} - modal end`), {
            title: n,
            prop3: r,
            events: `event${s[t]}`
        }
    }
    t.default = {
        beforeCreate() {
            const e = this.elements.content.getAttribute(n.ANALYTICS_REGION_ID_ATTRIB);
            this._scrollDepthAnalytics = {
                hasTracked: !1,
                progressMarkers: [25, 50, 75, 100],
                prop3ModalName: e,
                scrollGroup: null,
                removeScrollGroupEvents: () => {}
            }, "string" != typeof e && i.DevLogger.error("Required modal analytics prop3 name not provided")
        },
        mounted() {
            const {
                scrollGroup: e,
                removeScrollGroupEvents: t
            } = (0, r.createCustomAnimScrollGroup)(this.anim, this.elements.container, `${this.friendlyName} : Analytics : ScrollDepth`);
            this._scrollDepthAnalytics.scrollGroup = e, this._scrollDepthAnalytics.removeScrollGroupEvents = t
        },
        onOpen() {
            const {
                hasTracked: e,
                progressMarkers: t,
                prop3ModalName: s,
                scrollGroup: n
            } = this._scrollDepthAnalytics;
            if (e) return;
            const r = o.bind(this, s);
            for (const e of t) {
                const t = 100 === e ? "b - 100vh" : `t + ${e}h - 100vh`,
                    o = `${s}-${e}`,
                    l = () => {
                        const t = r(e);
                        a.track(t), i.DevLogger.info("Modal Track Depth", t)
                    };
                n.addEvent(this.elements.content, {
                    start: t,
                    event: o,
                    onEventOnce: l
                })
            }
            this._scrollDepthAnalytics.hasTracked = !0
        },
        onWillClose() {
            const {
                scrollGroup: e,
                removeScrollGroupEvents: t
            } = this._scrollDepthAnalytics;
            null !== e && (t(), e.remove().then((() => {
                this._scrollDepthAnalytics.scrollGroup = null
            })))
        },
        destroy() {
            this.onWillClose()
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = s(1);
    t.default = {
        created() {
            this.anim.trigger(i.LIFECYCLE_EVTS.CREATED, this)
        },
        mounted() {
            this.anim.trigger(i.LIFECYCLE_EVTS.MOUNTED, this)
        },
        onWillOpen() {
            this.anim.trigger(i.LIFECYCLE_EVTS.WILLOPEN, this)
        },
        onOpen() {
            this.anim.trigger(i.LIFECYCLE_EVTS.OPEN, this)
        },
        onWillClose() {
            this.anim.trigger(i.LIFECYCLE_EVTS.WILLCLOSE, this)
        },
        onClose() {
            this.anim.trigger(i.LIFECYCLE_EVTS.CLOSE, this)
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = s(26);
    t.default = {
        beforeCreate() {
            this.animScrollGroup = null, this.friendlyName = (0, i.getFriendlyName)(this.elements.content)
        },
        beforeMount() {
            const {
                scrollGroup: e
            } = (0, i.createCustomAnimScrollGroup)(this.anim, this.elements.container, this.friendlyName);
            this.animScrollGroup = e
        },
        onOpen() {
            this.animScrollGroup.forceUpdate()
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = s(1);
    t.default = {
        beforeCreate() {
            const e = this.elements.content.getAttribute(i.MODAL_LABELLEDBY_ATTRIB);
            e && (this.model.DialogRole.Attributes["aria-labelledby"] = e)
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = s(1),
        n = s(115);
    t.default = {
        beforeCreate() {
            this.model.Elements.closeIcon.Attributes = {
                class: "modal-close-icon"
            }, this.model.Elements.closeBtnWrapper = {
                Template: n.CloseBtnWrapper,
                Selector: "[data-modal-element-close-btn-wrapper]",
                Attributes: {
                    class: "modal-close-btn-wrapper"
                }
            }
        },
        created() {
            this.elements.close = []
        },
        beforeMount() {
            this._setCloseAriaLabel(), this._appendCloseButton()
        },
        mounted() {
            const e = this.elements.container.querySelectorAll(this.model.Close.Selector);
            this.elements.close = Array.from(e);
            if (this.elements.container.hasAttribute(i.BTN_CLOSE_ATTRIB) && this.elements.close.push(this.elements.container), this.elements.close.length > 0)
                for (const e of this.elements.close) e.addEventListener("click", this.close)
        },
        destroy() {
            if (this.elements.close.length > 0)
                for (const e of this.elements.close) e.removeEventListener("click", this.close)
        },
        _appendCloseButton() {
            if (null !== this.elements.container.querySelector('[data-aap-type="l2-close"]')) return;
            const e = this.model.Elements.closeButton.ParentSelector,
                t = this.elements.container.querySelector(e),
                s = this.elements.closeBtnWrapper;
            s.appendChild(this.elements.closeButton), t.appendChild(s)
        },
        _setCloseAriaLabel() {
            if (this.elements.content && this.elements.content.dataset.modalCloseLabel) {
                const e = this.elements.content.dataset.modalCloseLabel;
                this.elements.closeButton.setAttribute("aria-label", e)
            }
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = "<div data-modal-element-close-btn-wrapper></div>"
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = "<div data-modal-element-container>\n\t<div data-modal-element-content-container></div>\n</div>"
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = s(1);
    t.default = {
        beforeCreate() {
            this.refId = function() {
                return `${arguments.length>0&&void 0!==arguments[0]?arguments[0]:`${i.MODAL_L2_CLASSNAME}`}-${parseInt(1e3*Math.random())}`
            }(), this.model.Elements.container.Attributes[i.MODAL_COMPONENT_REF_ATTRIB] = this.refId
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = s(72),
        n = s(9);
    const r = s(117),
        a = {
            start: "t - 200vh",
            end: "b + 100vh",
            event: "l2-lazy-load",
            onEnterOnce: e => {
                e.element.removeAttribute(`${r.DATA_ATTRIBUTE}`), e.element.forceLoad ? e.element.forceLoad() : e.element.forceLazyLoad && e.element.forceLazyLoad()
            }
        };
    t.default = {
        mounted() {
            this._hasOpened = !1
        },
        onWillOpen() {
            if (!this._hasOpened) {
                ((e, t) => {
                    e.querySelectorAll(`[${r.DATA_ATTRIBUTE}], [data-lazy]`).forEach((e => {
                        const s = e[i.LAZY_LOAD_STORED_OPTIONS_NAME];
                        s ? t.addEvent(e, { ...a,
                            ...s
                        }) : n.DevLogger.warn("LazyImage modal mixin is missing a stored keyframe", e)
                    }))
                })(this.elements.container, this.animScrollGroup), this._hasOpened = !0
            }
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = s(1);
    t.default = {
        beforeCreate() {
            const e = this.elements.content.getAttribute(i.MODAL_ID_ATTRIB);
            e && (this.model.Elements.container.Attributes.id = e, this.id = e)
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = {
        beforeMount() {
            const e = this.options.btnOpen;
            if (!this.options.btnOpen || 1 !== e.nodeType) throw new TypeError(`option.btnOpen is required at modal instantiation; modal affected ${this.elements.container}`);
            e.addEventListener("click", this.open)
        },
        destroy() {
            this.options.btnOpen.removeEventListener("click", this.open)
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = s(14),
        n = s(9),
        r = s(1);
    t.default = {
        beforeCreate() {
            const e = document.documentElement.classList.contains("reduced-motion");
            this.elements.close = [], this._reduceOpenCloseAnimation = e, this._localNav = document.getElementById("ac-localnav"), this._openCloseAnimTargetValues = {}, this._openCloseAnimTimeline = null, this._openCloseSharedKfOpts = {
                duration: .8,
                ease: e ? "easeInOutSin" : "easeInOutCubic"
            }, this.close = this.close.bind(this), this.open = this.open.bind(this)
        },
        async mounted() {
            this._openCloseAnimTimeline = this.anim.createTimeGroup(), this._openCloseAnimTimeline.name = `${this.friendlyName} : Open/Close Timeline`, this._openCloseAnimTargetValues = await this._getAnimatedStyles(), this._setupScrimAnimation(), this._setupContentAnimation(), this._setupLocalNavAnimation(), this._attachTimelineCompleteEvents()
        },
        onBreakpointChange() {
            this._updateLocalNavAnimProps()
        },
        open() {
            this.opened || this.trigger(this.model.Events.WILLOPEN)
        },
        onWillOpen() {
            const e = this.model.Open.Document.ClassNames[0],
                t = this.model.Open.Container.ClassNames[0];
            (0, i.update)((() => {
                (0, i.draw)((() => {
                    document.documentElement.classList.add(e), this.elements.container.classList.add(t);
                    this._isModalContentScrollable() && (this.elements.contentContainer.style.marginRight = this._scrollBarWidth), this.scrollToModalTop(), this.elements.container.style.overflow = "hidden", this.elements.container.style.opacity = 1, this.trigger(this.model.Events.OPEN)
                }))
            }))
        },
        onOpen() {
            this._openCloseAnimTimeline.play()
        },
        _onOpenComplete() {
            this._fixClipPathRender(), (0, i.draw)((() => {
                this.elements.container.style.overflow = "", this.elements.contentContainer.style.marginRight = "", this.trigger(r.ANIMATION_EVTS.OPEN_COMPLETE)
            }))
        },
        _fixClipPathRender() {
            (0, i.update)((() => {
                const e = getComputedStyle(this.elements.contentContainer),
                    t = e.clipPath,
                    s = e.getPropertyValue(r.MODAL_OVERLAY.CSS_VAR_BORDER_RADIUS);
                (0, i.draw)((() => {
                    this.elements.content.style.borderRadius = s, this.elements.content.style.overflow = "hidden", this.elements.contentContainer.style.clipPath = "none", requestAnimationFrame((() => {
                        this.elements.contentContainer.style.clipPath = t, this.elements.content.style.borderRadius = "", this.elements.content.style.overflow = ""
                    }))
                }))
            }))
        },
        close(e) {
            this.opened && (e && "click" === e.type && !this.elements.close.includes(e.target) || (this.opened = !1, this.trigger(this.model.Events.WILLCLOSE)))
        },
        onWillClose() {
            this.trigger(this.model.Events.CLOSE)
        },
        onClose() {
            this._openCloseAnimTimeline.reverse()
        },
        _onCloseComplete() {
            const e = this.model.Open.Container.ClassNames[0],
                t = this.model.Open.Document.ClassNames[0];
            (0, i.draw)((() => {
                document.documentElement.classList.remove(t), this.elements.container.classList.remove(e), this.elements.container.style.overflow = "", this.elements.container.style.opacity = 0, this.trigger(r.ANIMATION_EVTS.CLOSE_COMPLETE)
            }))
        },
        destroy() {
            this.close(), this._removeCloseEvents()
        },
        _attachTimelineCompleteEvents() {
            const e = this._openCloseAnimTimeline;
            e.on("update", (t => {
                e.paused() || (0 === e.progress() && e.reversed() && this._onCloseComplete(), 1 === e.progress() && (e.reversed() || this._onOpenComplete()))
            }))
        },
        _isModalContentScrollable() {
            return this.elements.contentContainer.getBoundingClientRect().height > window.innerHeight
        },
        _getAnimatedStyles() {
            return new Promise(((e, t) => {
                try {
                    (0, i.draw)((() => {
                        const t = getComputedStyle(this.elements.container),
                            s = getComputedStyle(this._localNav),
                            i = t.getPropertyValue(r.SCRIM.CSS_VAR_FILL),
                            n = t.getPropertyValue(r.SCRIM.CSS_VAR_BLUR),
                            a = s.getPropertyValue("--r-localnav-height");
                        e({
                            scrimFill: i,
                            scrimBlur: n,
                            localNavHeight: a
                        })
                    }))
                } catch (e) {
                    n.DevLogger.error("Something went wrong retrieving starting values for L2Modal Open/Close animated styles"), t(e)
                }
            }))
        },
        _setupScrimAnimation() {
            const {
                duration: e,
                ease: t
            } = this._openCloseSharedKfOpts, {
                scrimBlur: s,
                scrimFill: n
            } = this._openCloseAnimTargetValues, a = n.match(/\d+\.*\d*/g), o = a.slice(0, 3).join(), l = a[3], h = parseFloat(s), d = this._openCloseAnimTimeline, c = d.addKeyframe(this.elements.container, {
                start: 0,
                end: e,
                alpha: [0, l],
                blur: [0, h, "px"],
                easeFunction: t
            });
            d.on("update", (e => {
                if (d.paused()) return;
                const t = c.controller.group.progress(),
                    i = c.controller.tweenProps.alpha.current.toFixed(2);
                let a = `rgba(${o}, ${i})`,
                    l = `${c.controller.tweenProps.blur.current}px`;
                1 === t && (a = n, l = s), this.elements.container.style.setProperty(r.SCRIM.CSS_VAR_FILL, a), this.elements.container.style.setProperty(r.SCRIM.CSS_VAR_BLUR, l)
            })), (0, i.draw)((() => {
                this.elements.container.style.setProperty(r.SCRIM.CSS_VAR_FILL, `rgba(${o}, 0)`), this.elements.container.style.setProperty(r.SCRIM.CSS_VAR_BLUR, "0px")
            }))
        },
        _setupLocalNavAnimation() {
            if (this._reduceOpenCloseAnimation) return;
            const {
                duration: e
            } = this._openCloseSharedKfOpts, {
                localNavHeight: t
            } = this._openCloseAnimTargetValues;
            this._openCloseAnimTimeline.addKeyframe(this._localNav, {
                start: 0,
                end: e,
                y: [0, -1 * parseFloat(t)],
                easeFunction: "easeInOutQuad"
            })
        },
        async _updateLocalNavAnimProps() {
            this._openCloseAnimTargetValues = await this._getAnimatedStyles();
            const e = this._openCloseAnimTimeline.getControllerForTarget(this._localNav);
            if (!e) return;
            const t = e.getNearestKeyframeForAttribute("y"),
                {
                    localNavHeight: s
                } = this._openCloseAnimTargetValues;
            t.overwriteProps({
                y: [0, -1 * parseFloat(s)]
            })
        },
        _setupContentAnimation() {
            this._reduceOpenCloseAnimation ? this._setupContentBaseAnimation() : this._setupContentEnhancedAnimation()
        },
        _setupContentBaseAnimation() {
            const {
                duration: e,
                ease: t
            } = this._openCloseSharedKfOpts;
            this._openCloseAnimTimeline.addKeyframe(this.elements.contentContainer, {
                start: 0,
                end: e,
                opacity: [0, 1],
                easeFunction: t
            })
        },
        _setupContentEnhancedAnimation() {
            const {
                duration: e,
                ease: t
            } = this._openCloseSharedKfOpts, s = this._openCloseAnimTimeline, i = "100vh", n = s.addKeyframe(this.elements.contentContainer, {
                start: 0,
                end: e,
                opacity: [1, 1],
                y: [i, 0],
                easeFunction: t
            });
            this.on(r.ANIMATION_EVTS.WILLCLOSE, (() => {
                n.overwriteProps({
                    opacity: [0, 1],
                    y: [0, 0],
                    easeFunction: "easeInOutQuad"
                })
            })), this.on(r.ANIMATION_EVTS.CLOSE_COMPLETE, (() => {
                n.overwriteProps({
                    opacity: [1, 1],
                    y: [i, 0],
                    easeFunction: t
                })
            }))
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = s(1),
        n = s(115);
    t.default = {
        beforeCreate() {
            const e = this.elements.content.getAttribute(i.THEME_ATTRIB) || i.THEME_DEFAULT,
                t = this.elements.content.getAttribute(i.MODAL_CUSTOM_CLASSNAME_ATTRIB),
                s = this.elements.content.getAttribute(i.SCRIM.BLUR_ATTRIB);
            let r = `${i.MODAL_L2_CLASSNAME} ${i.SCRIM.ELEMENT_CLASSNAME} ${i.THEME_CLASSNAME_NAMESPACE}-${e}`;
            var a;
            t && (r = `${r} ${a=t,a.split(/\s+|,+/).join(" ")}`), "true" === s && (r = `${r} ${i.SCRIM.BLUR_CLASSNAME}`), this.model.Elements.container.Template = n.ModalContainer, this.model.Elements.container.Attributes.class = r, this.model.Elements.container.Attributes[i.BTN_CLOSE_ATTRIB] = "", this.model.Elements.contentContainer = {
                Selector: "[data-modal-element-overlay]",
                Attributes: {
                    class: "modal-overlay",
                    "data-modal-close-button-parent": ""
                }
            }, delete this.model.PageOverlay, delete this.model.FullBleed
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = s(14),
        n = s(1);
    t.default = {
        beforeCreate() {
            this._scrollBarWidth = 0
        },
        mounted() {
            this._saveScrollBarWidth()
        },
        onResizeDebounced() {
            this.opened || this._saveScrollBarWidth()
        },
        _saveScrollBarWidth() {
            (0, i.update)((() => {
                this._scrollBarWidth = window.innerWidth - document.body.clientWidth + "px", (0, i.draw)((() => {
                    document.documentElement.style.setProperty(n.SCROLLBAR_BUFFER_CSS_VAR, this._scrollBarWidth)
                }))
            }))
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = s(9),
        n = s(1);

    function r(e) {
        e.preventDefault();
        const t = document.activeElement === e.target,
            s = document.querySelector(e.target.hash),
            i = "instant";
        t ? this.once(n.ANIMATION_EVTS.CLOSE_COMPLETE, (() => {
            this.options.btnOpen && this.options.btnOpen.focus(), s.scrollIntoView({
                behavior: i
            })
        })) : s.scrollIntoView({
            behavior: i
        })
    }
    t.default = {
        beforeCreate() {
            this._footnoteLinks = [], this.model.Close.Selector = `${this.model.Close.Selector}, ${n.SOSUMI_FOOTNOTE_LINK_SELECTOR}`, this._onSosumiFootnoteLinkClick = r.bind(this)
        },
        created() {
            this._footnoteLinks = Array.from(this.elements.content.querySelectorAll(`${n.SOSUMI_FOOTNOTE_LINK_SELECTOR}`))
        },
        mounted() {
            this.options.btnOpen && 1 === this.options.btnOpen.nodeType || i.DevLogger.error(`option.btnOpen is required at modal instantiation; modal affected ${this.elements.container}`);
            for (const e of this._footnoteLinks) e.ariaLabel = `${e.ariaLabel}, ${this.elements.closeButton.ariaLabel}`, e.addEventListener("click", this._onSosumiFootnoteLinkClick)
        },
        destroy() {
            for (const e of this._footnoteLinks) e.removeEventListener("click", this._onSosumiFootnoteLinkClick)
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(2)),
        r = i(s(4)),
        a = i(s(118)),
        o = s(37),
        l = s(9),
        h = s(13),
        d = i(s(270)),
        c = function(e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var s = m(t);
            if (s && s.has(e)) return s.get(e);
            var i = {
                    __proto__: null
                },
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && {}.hasOwnProperty.call(e, r)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    a && (a.get || a.set) ? Object.defineProperty(i, r, a) : i[r] = e[r]
                }
            return i.default = e, s && s.set(e, i), i
        }(s(33)),
        u = s(36);

    function m(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
            s = new WeakMap;
        return (m = function(e) {
            return e ? s : t
        })(e)
    }
    const p = "vp-valid",
        f = "not-small-desktop",
        _ = "single-breakpoint",
        g = "text-zoom-off",
        E = {
            [p]: "invalid-viewport",
            [f]: "small-desktop",
            [_]: "breakpoint-changed",
            [g]: "text-zoom"
        };
    class y extends r.default {
        static IS_SUPPORTED() {
            return !0
        }
        constructor(e) {
            super(e), this.scrollGroupPromises = [], this.defaultEnhancedViewports = e.viewports || u.ENHANCED_VIEWPORTS, this.disableViewports = e.disableViewports, document.documentElement.classList.add(p, f, _, g)
        }
        get logger() {
            return l.DevLogger
        }
        mounted() {
            this._setupTextZoom(), this.disableViewports || this._setUnenhanceViewports()
        }
        onBreakpointChange() {
            c.isSmallOnDesktop() && this._unenhanceFeature(f), this._unenhanceFeature(_)
        }
        isEnhanced() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.FEATURE_ENHANCED;
            return document.documentElement.classList.contains(e)
        }
        _setupTextZoom() {
            this._textZoomDetect = new d.default, this._textZoomDetect.on(h.EVT_TEXT_ZOOM, (() => {
                this._unenhanceFeature(g)
            }))
        }
        _setUnenhanceViewports() {
            c.isSmallOnDesktop() && this._unenhanceFeature(f), c.setupViewportTracker({
                defaultViewports: this.defaultEnhancedViewports
            }).then((() => {
                this._unenhanceFeature(p)
            }))
        }
        async _unenhanceFeature(e) {
            const t = window.location.search.includes("enhanced");
            this.isEnhanced(e) && !t && (this.logger.log("PageXpController: unenhance: ", e), this.isEnhanced() && ((0, o.setCauseForBase)(E[e]), await c.removeFeatureDetectClass(h.FEATURE_ENHANCED), this.anim.trigger(h.EVT_UNENHANCE), await this._cleanupKeyframes(), (0, o.trackPageState)()), await c.removeFeatureDetectClass(e), this.anim.trigger(h.EVT_UNENHANCE_FEATURE, e), new a.default, (0, n.default)((() => {
                this.anim.forceUpdate()
            })))
        }
        _cleanupKeyframes() {
            return Promise.all(this.scrollGroupPromises).then((() => {
                this.anim.forceUpdate()
            })).catch((() => {}))
        }
    }
    t.default = y
}, function(e, t, s) {
    "use strict";
    const i = s(269),
        n = s(45);
    e.exports = {
        PictureLazyLoading: i,
        PictureHead: n
    }
}, function(e, t, s) {
    "use strict";
    const i = s(7).PICTURE_DATA_LAZY,
        n = s(7).PICTURE_DATA_EMPTY_SOURCE,
        r = s(7).PICTURE_DATA_DOWNLOAD_AREA_KEYFRAME;
    e.exports = class {
        constructor() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.options = e, this._init()
        }
        _init() {
            this._pictures = Array.from(document.querySelectorAll(`*[${i}]`)), this.AnimSystem = this._findAnim(), null !== this.AnimSystem && (this._injectSources(), this._addKeyframesToImages(), this._addMethodsToPictures())
        }
        _addMethodsToPictures() {
            this._pictures.forEach((e => {
                e.forceLoad = () => {
                    this._downloadImage(e)
                }
            }))
        }
        _injectSources() {
            this._pictures.forEach((e => {
                const t = e.nextElementSibling;
                if (t && "NOSCRIPT" === t.nodeName) {
                    const s = e.querySelector("img"),
                        i = t.textContent.match(/<source .+ \/>/g);
                    i && s.insertAdjacentHTML("beforebegin", i.join(""))
                }
            }))
        }
        _defineKeyframeOptions(e) {
            const t = e.getAttribute(r) || "{}";
            return Object.assign({}, {
                start: "t - 200vh",
                end: "b + 100vh",
                event: "PictureLazyLoading"
            }, JSON.parse(t))
        }
        _addKeyframesToImages() {
            this._pictures.forEach((e => {
                e.__scrollGroup = this.AnimSystem.getGroupForTarget(document.body), this.AnimSystem.getGroupForTarget(e) && (e.__scrollGroup = this.AnimSystem.getGroupForTarget(e));
                let t = this._defineKeyframeOptions(e);
                e.__scrollGroup.addKeyframe(e, t).controller.once("PictureLazyLoading:enter", (() => {
                    this._imageIsInLoadRange(e)
                }))
            }))
        }
        _imageIsInLoadRange(e) {
            e.querySelector("img") && this._downloadImage(e)
        }
        _downloadImage(e) {
            const t = e.querySelector(`[${n}]`);
            t && e.removeChild(t)
        }
        _findAnim() {
            var e = Array.from(document.querySelectorAll("[data-anim-group],[data-anim-scroll-group],[data-anim-time-group]"));
            return e.map((e => e._animInfo ? e._animInfo.group : null)).filter((e => null !== e)), e[0] && e[0]._animInfo ? e[0]._animInfo.group.anim : (console.error("PictureLazyLoading: AnimSystem not found, please initialize anim before instantiating"), null)
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(5)),
        r = s(13);
    class a extends n.default {
        constructor(e) {
            super(e), this._onTextZoomResize = this._onTextZoomResize.bind(this), this._setupTextZoom()
        }
        _setupTextZoom() {
            this._textZoomResolver = null, this._textZoomPromise = new Promise(((e, t) => {
                this._textZoomResolver = e
            })), this._textZoomPromise.then((() => {
                this.trigger(r.EVT_TEXT_ZOOM), this._removeTextZoomListener()
            })), this._applyTextZoomListener()
        }
        _applyTextZoomListener() {
            document.documentElement.classList.contains("text-zoom") ? this._textZoomResolver() : window.addEventListener("resize:text-zoom", this._onTextZoomResize)
        }
        _removeTextZoomListener() {
            window.removeEventListener("resize:text-zoom", this._onTextZoomResize)
        }
        _onTextZoomResize(e) {
            e.detail.originalSize < e.detail.currentSize && this._textZoomResolver()
        }
    }
    t.default = a
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = s(114),
        n = s(64),
        r = function(e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var s = a(t);
            if (s && s.has(e)) return s.get(e);
            var i = {
                    __proto__: null
                },
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && {}.hasOwnProperty.call(e, r)) {
                    var o = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    o && (o.get || o.set) ? Object.defineProperty(i, r, o) : i[r] = e[r]
                }
            return i.default = e, s && s.set(e, i), i
        }(s(23));

    function a(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
            s = new WeakMap;
        return (a = function(e) {
            return e ? s : t
        })(e)
    }
    const o = s(65),
        l = s(71),
        h = s(119),
        d = s(66),
        c = s(70),
        u = s(67),
        m = s(272),
        p = s(41),
        f = s(120),
        _ = s(273);
    class g extends n.BaseComponent {
        constructor(e) {
            super(e), this._checkSafariVersion();
            const {
                aapId: t,
                autoLoadAap: s = !1,
                arId: n
            } = this.el.dataset;
            this.galleryEl = this.el.querySelector(".product-gallery-slide-gallery"), this.zoom = this.galleryEl.dataset.zoom || null, this._autoLoadAAP = "true" === s, this.aapId = t, this.arId = n, this._breakpointMap = {
                L: "Large",
                M: "Medium",
                S: "Small"
            }, this._onChangeColor = this._onChangeColor.bind(this), this.arId && this.gum.on(i.EVENTS.DOM_COMPONENTS_MOUNTED, (() => {
                this.arLinkComponent = this.gum.getComponentOfType("ArLink", document.getElementById(this.arId))
            })), this.aapId ? this.anim.on(`aap-mounted--${this.aapId}`, (e => {
                this._aapContainer = document.getElementById(this.aapId), this._aapElements = {
                    colornav: [...this._aapContainer.querySelectorAll(".viewer-colornav-value")]
                }, this._aapElements.colornav.forEach((e => e.addEventListener("change", this._onChangeColor))), this.aap = e, this._autoLoadAAP && this.aap.loadFallback()
            })) : this._toggleRevealItems()
        }
        _checkSafariVersion() {
            r.browser.version.major <= 16 && document.documentElement.classList.add("safari-lte-16")
        }
        _toggleRevealItems() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            [...this.el.querySelectorAll(`[data-element-index='${e}'`)].map((e => e.classList.toggle("reveal")))
        }
        _focusContainer(e) {
            e && document.activeElement === this.el && e.focus()
        }
        _onChangeColor(e) {
            void 0 !== this._prevSelectedColorIndex && this._toggleRevealItems(this._prevSelectedColorIndex);
            const t = this._aapElements.colornav.indexOf(e.target),
                s = e.target.dataset.viewerValue;
            this._selectedColor = s, this._toggleRevealItems(t), this._prevSelectedColorIndex = t, this.arLinkComponent && this.arLinkComponent.updateTargetPath(`${s}`), this._focusWasTriggered || (this._focusWasTriggered = !0, this._focusContainer(e.target))
        }
        mounted() {
            const e = {
                    beforeCreate() {
                        this.model.PrefersReducedMotion = document.documentElement.classList.contains("reduced-motion"), this.model.IsRTL = "rtl" === document.documentElement.getAttribute("dir"), this.model.IsTouch = "ontouchstart" in document.documentElement, this.model.duration = .5, this.model.gum = this.gum;
                        const e = this.el.dataset.zoom || null;
                        e && (this.model.zoom = parseFloat(e));
                        const t = window.innerWidth - document.body.clientWidth;
                        this.el.style.setProperty("--scrollbar-width", `${t}px`)
                    }
                },
                t = o.withMixins(e, u, l, h, c, d, m, f, this.zoom ? _ : {});
            var s;
            s = t, ["itemsCreated", "onItemChangeCompleted"].forEach((e => {
                const t = s.prototype[`__${e}`].indexOf(p[e]);
                s.prototype[`__${e}`].splice(t, 1)
            })), this._gallery = new t({
                el: this.galleryEl
            }), this._currentBreakpoint = this.anim.model.pageMetrics.breakpoint, this._updateAriaLabelsForBreakpoint()
        }
        _updateAriaLabelsForBreakpoint() {
            [...this.el.querySelectorAll("[data-element-index]")].forEach((e => {
                const t = e.dataset[`ariaLabel${this._breakpointMap[this._currentBreakpoint]}`];
                t && e.setAttribute("aria-label", t)
            }))
        }
        onBreakpointChange(e) {
            this._currentBreakpoint = e.breakpoint, this._updateAriaLabelsForBreakpoint()
        }
        static IS_SUPPORTED() {
            return !0
        }
    }
    t.default = g
}, function(e, t, s) {
    "use strict";
    e.exports = {
        onItemChangeCompleted(e) {
            const {
                previous: t,
                current: s
            } = this.selections.completed;
            t && t !== s && t.deselect(), s.select()
        }
    }
}, function(e, t, s) {
    "use strict";
    e.exports = {
        mounted() {
            const e = this.model.zoom || 1.1,
                t = this.anim.createScrollGroup(this.scrollContainer, {
                    name: `Product Gallery: Zoom mixin - ${this.el.id}`,
                    getPosition: () => this.scrollContainer.scrollLeft,
                    getMaxPosition: () => this.scrollContainer.scrollWidth
                });
            this.scrollContainer.addEventListener("scroll", (() => t._onScroll())), this.el.querySelectorAll(".gallery-item").forEach((s => {
                t.addKeyframe(s, {
                    start: "l + 50w - a0r - 45a0w",
                    end: "l + 50w - a0r + 45a0w",
                    "--zoom": [1, e],
                    easeFunction: "easeInQuad",
                    ease: .8,
                    anchors: [".responsive-container-anim-anchor"]
                }), t.addKeyframe(s, {
                    start: "l + 50w - a0r - 45a0w + a0w",
                    end: "l + 50w - a0r + 45a0w + a0w",
                    "--zoom": [e, 1],
                    easeFunction: "easeOutQuad",
                    ease: .8,
                    anchors: [".responsive-container-anim-anchor"]
                })
            }))
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = s(14),
        r = i(s(4));
    class a extends r.default {
        static IS_SUPPORTED() {
            return !0
        }
        constructor(e) {
            super(e), this._gridRowConfig = {
                badge: {
                    var: "--badge-height",
                    cells: [],
                    maxHeight: void 0
                },
                headline: {
                    var: "--headline-height",
                    cells: [],
                    maxHeight: void 0
                },
                subheading: {
                    var: "--subheading-height",
                    cells: [],
                    maxHeight: void 0
                }
            }, this._gridColumns = {}, this._largestProductID = {
                badge: void 0,
                headline: void 0,
                subheading: void 0,
                productID: void 0
            }, this._context = null, this._plusGrids = null, this._plusGridRowMax = null
        }
        mounted() {
            this._getEls(), this._determineContext(), this._findMaxPlusRows(), this._configurePlusRows(), this._equalize()
        }
        _getEls() {
            this.el.querySelectorAll("[data-grid-column]").forEach(((e, t) => {
                this._gridColumns[t] = {
                    el: e,
                    heights: {
                        badge: void 0,
                        headline: void 0,
                        subheading: void 0
                    }
                }
            })), this._gridRowConfig.badge.cells = this.el.querySelectorAll("[data-grid-row-badge]"), this._gridRowConfig.headline.cells = this.el.querySelectorAll("[data-grid-row-headline]"), this._gridRowConfig.subheading.cells = this.el.querySelectorAll("[data-grid-row-subheading]"), this._plusGrids = this.el.querySelectorAll("[data-grid-plus]")
        }
        _determineContext() {
            this._context = getComputedStyle(this.el).getPropertyValue("--context")
        }
        _findMaxPlusRows() {
            const e = [];
            [...this._plusGrids].forEach((t => {
                e.push(t.children.length)
            })), this._plusGridRowMax = Math.max(...e)
        }
        _configurePlusRows() {
            for (let e = 1; e < this._plusGridRowMax + 1; e++) this._gridRowConfig[`plus-row-${e}`] = {}, this._gridRowConfig[`plus-row-${e}`].cells = this.el.querySelectorAll(`[data-grid-row-${e}]`), this._gridRowConfig[`plus-row-${e}`].var = `--plus-row-${e}-height`, this._gridRowConfig[`plus-row-${e}`].maxHeight = void 0
        }
        _getMaxRowHeights() {
            Object.values(this._gridRowConfig).forEach((e => {
                const t = [];
                e.cells.forEach((e => {
                    t.push(Math.ceil(e.getBoundingClientRect().height))
                })), t.length > 0 ? e.maxHeight = Math.max(...t) : e.maxHeight = 0
            }));
            const e = [];
            Object.values(this._gridColumns).forEach((t => {
                let s = 0;
                Object.keys(t.heights).forEach((e => {
                    const i = t.el.querySelector(`[data-grid-row-${e}]`);
                    i ? (t.heights[e] = i.getBoundingClientRect().height, s += t.heights[e]) : "badge" === e ? (t.heights[e] = this._gridRowConfig.badge.maxHeight, s += t.heights[e]) : t.heights[e] = 0
                })), e.push(s)
            }));
            const t = this._indexOfMax(e);
            this._largestProductID.productID = e[t], this._largestProductID.badge = this._gridColumns[t].heights.badge, this._largestProductID.headline = this._gridColumns[t].heights.headline, this._largestProductID.subheading = this._gridColumns[t].heights.subheading
        }
        _indexOfMax(e) {
            if (0 === e.length) return -1;
            let t = e[0],
                s = 0;
            for (let i = 1; i < e.length; i++) e[i] > t && (s = i, t = e[i]);
            return s
        }
        _unsetMaxRowHeights() {
            Object.keys(this._gridColumns).forEach((e => {
                Object.values(this._gridRowConfig).forEach((t => {
                    this._gridColumns[e].el.style.setProperty(`${t.var}`, "auto")
                }))
            }))
        }
        _setMaxRowHeights() {
            Object.keys(this._gridColumns).forEach((e => {
                for (const [t, s] of Object.entries(this._gridRowConfig)) t.startsWith("plus-row-") ? this._gridColumns[e].el.style.setProperty(`${s.var}`, `minmax(${s.maxHeight}px, max-content)`) : "badge" === t ? this._gridColumns[e].el.style.setProperty(`${s.var}`, `${this._gridRowConfig.badge.maxHeight}px`) : this._gridColumns[e].el.style.setProperty(`${s.var}`, `${this._largestProductID[t]}px`)
            }))
        }
        onBreakpointChange() {
            this._equalize()
        }
        onResizeDebounced(e) {
            "S" === e.breakpoint && "contrast" === this._context && this._equalize()
        }
        _equalize() {
            (0, n.draw)((() => {
                this._unsetMaxRowHeights(), this._getMaxRowHeights(), this._setMaxRowHeights()
            })), this.anim.forceUpdate()
        }
    }
    t.default = a
}, function(e, t, s) {
    "use strict";
    const i = s(4),
        n = s(65),
        r = s(66),
        a = s(67),
        o = s(70),
        l = s(41),
        h = s(120),
        d = s(71),
        c = s(119),
        u = s(276).default;
    e.exports = class extends i {
        constructor(e) {
            super(e), this._els = {
                gallery: this.el,
                slideGallery: this.el.querySelector(".gallery")
            }
        }
        mounted() {
            this._setupGallery(), this._showSlideGallery()
        }
        _setupGallery() {
            const e = {
                    beforeCreate() {
                        this.model.IsRTL = "rtl" === document.documentElement.getAttribute("dir"), this.model.duration = .5
                    }
                },
                t = n.withMixins(r, a, e, u, o, d, c, h);
            var s;
            s = t, ["itemsCreated", "onItemChangeCompleted"].forEach((e => {
                const t = s.prototype[`__${e}`].indexOf(l[e]);
                s.prototype[`__${e}`].splice(t, 1)
            })), this.gallery = new t({
                el: this._els.slideGallery
            })
        }
        _showSlideGallery() {
            this._els.slideGallery.classList.contains("show") || this._els.slideGallery.classList.add("show")
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = {
        itemsCreated() {
            this._excludeToggleItems()
        },
        _excludeToggleItems() {
            const {
                excludeMap: e
            } = this.el.dataset;
            if (!e) return;
            const t = JSON.parse(e);
            this._items = this._items.filter((e => {
                const {
                    excludeType: s
                } = e.el.dataset;
                return !s || !document.documentElement.classList.contains(`hide-${t[s]}`)
            }))
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(4)),
        r = s(1),
        a = s(26);
    class o extends n.default {
        constructor(e) {
            super(e), this._els1 = null, this._els2 = null, this._els3 = null, this._scrollGroup = null, this.isL2 = this.el.closest(r.MODAL_SELECTOR), this.isL2 ? (this.modal = (0, a.getModalComponentRef)(this.gum, this.el), this._scrollGroup = this.modal.animScrollGroup) : (this._scrollGroup = this.anim.createScrollGroup(this.el), this._scrollGroup.name = "Text Anim Component")
        }
        mounted() {
            this._els1 = this.el.querySelectorAll("[data-textanim-1]"), this._els2 = this.el.querySelectorAll("[data-textanim-2]"), this._els3 = this.el.querySelectorAll("[data-textanim-3]");
            const e = {
                    start: "t-75vh",
                    toggle: !0,
                    style: {
                        on: {
                            transform: "translateY(0)",
                            opacity: 1,
                            pointerEvents: "auto"
                        }
                    }
                },
                t = { ...e
                };
            t.start = "t-65vh", t.breakpointMask = "LM";
            const s = { ...e
            };
            s.start = "t-55vh", s.breakpointMask = "LM";
            const i = { ...e
            };
            i.breakpointMask = "S", this._els1.forEach((t => {
                this._scrollGroup.addKeyframe(t, e)
            })), this._els2.forEach((e => {
                this._scrollGroup.addKeyframe(e, t)
            })), this._els2.forEach((e => {
                this._scrollGroup.addKeyframe(e, i)
            })), this._els3.forEach((e => {
                this._scrollGroup.addKeyframe(e, s)
            })), this._els3.forEach((e => {
                this._scrollGroup.addKeyframe(e, i)
            }))
        }
        static IS_SUPPORTED() {
            return !document.documentElement.classList.contains("reduced-motion")
        }
    }
    t.default = o
}, function(e, t, s) {
    "use strict";
    const i = s(4),
        n = {
            start: "t - 150vh",
            end: "b + 50vh",
            cssClass: "will-change"
        };
    e.exports = class extends i {
        constructor(e) {
            super(e), this.scrollGroup = this.anim.getGroupForTarget(this.el);
            const t = {
                    anchors: this.el,
                    toggle: !0
                },
                s = {};
            Object.keys(this.el.dataset).forEach((e => {
                if (e.includes("willChange")) {
                    let t = e.substring(10);
                    t = t.charAt(0).toLowerCase() + t.substring(1), s[t] = this.el.dataset[e]
                }
            })), this.willChangeOptions = Object.assign(t, n, s)
        }
        mounted() {
            this.setupKeyframes()
        }
        setupKeyframes() {
            this.scrollGroup.addKeyframe(this.el, this.willChangeOptions)
        }
        static IS_SUPPORTED() {
            return !0
        }
    }
}, function(e, t, s) {
    "use strict";
    var i = s(0),
        n = i(s(8)),
        r = i(s(116)),
        a = s(1);
    class o extends n.default {
        constructor(e) {
            super(e), this.init = !1
        }
        mounted() {
            this.anim.on(a.LIFECYCLE_EVTS.OPEN, (() => {
                this.init ? this._setPlayState() : (this._initSettings(), this._cloneRows(), this._setupEvents(), this._setInitialRowPosition(), this._addAnimationLoop(), this._setImageLoadTransition(), this.init = !0)
            })), this.anim.on(a.LIFECYCLE_EVTS.CLOSE, (() => {
                this._setPauseState()
            }))
        }
        _initSettings() {
            this.root = document.documentElement, this.marqueeRows = this.el.querySelectorAll(".app-marquee-row"), this.marqueeRowTop = this.el.querySelector(".app-marquee-row.row-top"), this.marqueeRowBottom = this.el.querySelector(".app-marquee-row.row-bottom"), this.marqueeItems = null, this.marqueeRowTopWidth = this._getGroupWidth(this.marqueeRowTop), this.marqueeRowBottomWidth = this._getGroupWidth(this.marqueeRowBottom), this.isAnimationInitialized = !1, this.isAllImagesLoaded = !1, this.isPaused = !1, this.topRowPosition = 0, this.bottomRowPosition = 0, this.animationSpeedTopRow = {
                X: .4,
                L: .4,
                M: .4,
                S: .7
            }, this.animationSpeedBottomRow = {
                X: .3,
                L: .3,
                M: .3,
                S: .5
            }, this.reverseDirectionTop = !0, this.reverseDirectionBottom = !1, this.btnPlayPause = document.querySelector(".app-marquee-ui-controls .button-play-pause"), this.btnPlayPauseIcon = this.btnPlayPause.querySelector(".icon"), this.modal = this.el.closest(".modal-l2")
        }
        _setImageLoadTransition() {
            new r.default;
            const e = this.el.querySelectorAll("[data-anim-lazy-image]"),
                t = e.length;
            let s = 0;
            e.forEach((e => {
                e.promises.downloadComplete.then((() => {
                    s += 1, s === t && (this.isAllImagesLoaded = !0, this.el.classList.add("transition-in"))
                }))
            }))
        }
        _setupEvents() {
            this._onEnterOnce = this._onEnterOnce.bind(this), this._onEnter = this._onEnter.bind(this), this._onExit = this._onExit.bind(this), this._onUpdate = this._onUpdate.bind(this), this._onDraw = this._onDraw.bind(this), this._updatePlayPauseButton = this._updatePlayPauseButton.bind(this), this.btnPlayPause.addEventListener("click", this._updatePlayPauseButton), this._destroy = this._destroy.bind(this), this.anim.once("enhanced-destroy", this._destroy)
        }
        _cloneRows() {
            this.marqueeRows.forEach((e => {
                const t = e.querySelector(".app-marquee-item-group").cloneNode(!0);
                t.classList.add("group-cloned"), e.appendChild(t)
            })), this.marqueeItems = this.el.querySelectorAll(".app-marquee-item")
        }
        _sanatizeClonedElement(e) {
            e.querySelectorAll("[data-anim-lazy-image]").forEach((e => {
                e.removeAttribute("data-anim-lazy-image")
            }))
        }
        _addAnimationLoop() {
            this.galleryScrollGroup = this.anim.createScrollGroup(this.modal, {
                getPosition: () => this.modal.scrollTop,
                getMaxPosition: () => this.modal.scrollHeight
            }), this.modal.addEventListener("scroll", (() => this.galleryScrollGroup.updateTimeline())), this.addRAFLoop({
                el: this.el,
                start: "100vh",
                end: "b",
                event: "iPadOS Modal Marquee",
                onEnterOnce: this._onEnterOnce,
                onEnter: this._onEnter,
                onExit: this._onExit,
                onUpdate: this._onUpdate,
                onDraw: this._onDraw
            })
        }
        _onEnterOnce() {
            this.isAnimationInitialized || (this.isAnimationInitialized = !0, this._sanatizeClonedElement(this.marqueeRowTop.querySelector(".group-cloned")), this._sanatizeClonedElement(this.marqueeRowBottom.querySelector(".group-cloned")))
        }
        _onEnter() {
            this.isAllImagesLoaded && this.isAnimationInitialized && (this.el.style.visibility = "visible")
        }
        _onExit() {
            this.el.style.visibility = "hidden"
        }
        _onUpdate() {
            this.isPaused || (this.reverseDirectionTop ? (this.topRowPosition += this._getAnimationSpeed("top"), this.topRowPosition > this.marqueeRowTopWidth && (this.topRowPosition = 0)) : (this.topRowPosition -= this._getAnimationSpeed("top"), this.topRowPosition < -this.marqueeRowTopWidth && (this.topRowPosition = 0)), this.reverseDirectionBottom ? (this.bottomRowPosition += this._getAnimationSpeed("bottom"), this.bottomRowPosition > this.marqueeRowBottomWidth && (this.bottomRowPosition = 0)) : (this.bottomRowPosition -= this._getAnimationSpeed("bottom"), this.bottomRowPosition < -this.marqueeRowBottomWidth && (this.bottomRowPosition = 0)))
        }
        _onDraw() {
            this.root.classList.contains("no-enhanced") && this._destroy(), this.isPaused || this._update()
        }
        _update() {
            this.marqueeRowTop.style.webkitTransform = "translateX(" + this.topRowPosition + "px)", this.marqueeRowBottom.style.webkitTransform = "translateX(" + this.bottomRowPosition + "px)", this._manageOutViewElements()
        }
        _setInitialRowPosition() {
            this.reverseDirectionTop && (this.marqueeRowTop.style.marginLeft = -this.marqueeRowTopWidth + "px"), this.reverseDirectionBottom && (this.marqueeRowBottom.style.marginLeft = -this.marqueeRowBottomWidth + "px")
        }
        _getAnimationSpeed(e) {
            let t = 0;
            return "top" === e ? t = this.animationSpeedTopRow[this.pageMetrics.breakpoint] : "bottom" === e && (t = this.animationSpeedBottomRow[this.pageMetrics.breakpoint]), t
        }
        _getGroupWidth(e) {
            return e.querySelector(".app-marquee-item-group").offsetWidth
        }
        _updateMetrics() {
            this.marqueeRowTopWidth = this._getGroupWidth(this.marqueeRowTop), this.marqueeRowBottomWidth = this._getGroupWidth(this.marqueeRowBottom)
        }
        _setPlayState() {
            this.isPaused = !1, this.btnPlayPause.ariaLabel = this.btnPlayPause.dataset.ariaPause, this.btnPlayPauseIcon.classList.remove("icon-playcircle"), this.btnPlayPauseIcon.classList.add("icon-pausecircle"), this._updatePlayPauseButtonAnalytics("pause")
        }
        _setPauseState() {
            this.isPaused = !0, this.btnPlayPause.ariaLabel = this.btnPlayPause.dataset.ariaPlay, this.btnPlayPauseIcon.classList.remove("icon-pausecircle"), this.btnPlayPauseIcon.classList.add("icon-playcircle"), this._updatePlayPauseButtonAnalytics("play")
        }
        _updatePlayPauseButton() {
            this.isPaused ? this._setPlayState() : this._setPauseState()
        }
        _updatePlayPauseButtonAnalytics(e) {
            requestAnimationFrame((() => {
                this.btnPlayPause.setAttribute("data-analytics-title", `${e} apps video`), this.btnPlayPause.setAttribute("data-analytics-click", `prop3:${e} apps video`)
            }))
        }
        _manageOutViewElements() {
            this.marqueeItems.forEach((e => {
                const t = this._elementInViewport(e),
                    s = getComputedStyle(e).getPropertyValue("visibility");
                t || "visible" !== s ? t && "hidden" === s && (e.style.visibility = "visible") : e.style.visibility = "hidden"
            }))
        }
        _elementInViewport(e) {
            const t = e.getBoundingClientRect(),
                s = e.offsetWidth;
            return t.left >= -s && t.right <= (window.innerWidth || document.documentElement.clientWidth) + s
        }
        _destroy() {
            this.isPaused = !0, [...this.marqueeRows, ...this.marqueeItems].forEach((e => {
                e.removeAttribute("style")
            }))
        }
        onBreakpointChange() {
            this.init && (this._updateMetrics(), this.isAllImagesLoaded || this._setImageLoadTransition())
        }
        static IS_SUPPORTED() {
            return document.documentElement.classList.contains("enhanced")
        }
    }
    e.exports = o
}, function(e, t, s) {
    "use strict";
    var i = s(0)(s(8));
    const n = "animate";
    class r extends i.default {
        constructor(e) {
            super(e), this.progressCompleted = !1, this.currentProgress = null, this.videoElm = this.el.querySelector("#cameras-video"), this.textContainer = this.el.querySelector(".text-container"), this.videoProgress()
        }
        videoProgress() {
            this.videoElm.addEventListener("play", (() => {
                this.progressOutput()
            })), this.videoElm.addEventListener("ended", (() => {
                this.progressCompleted = !0
            }))
        }
        progressOutput() {
            this.progressCompleted || (requestAnimationFrame((() => {
                this.currentProgress = this.videoElm.currentTime / this.videoElm.duration, this.currentProgress >= .31 && this.textContainer.classList.add(n)
            })), requestAnimationFrame((() => {
                this.progressOutput()
            })))
        }
        static IS_SUPPORTED() {
            return document.documentElement.classList.contains("enhanced")
        }
    }
    e.exports = r
}, function(e, t, s) {
    "use strict";
    var i = s(0)(s(8));
    class n extends i.default {
        constructor(e) {
            super(e), this.progressCompleted = !1, this.currentProgress = null, this.chipHeadline = this.el.querySelector(".chip-headline"), this.chipMiddle = this.el.querySelector("#chip-middle-top"), this.chipHeroMiddleBottom = this.el.querySelector(".chip-hero-middle-bottom"), this.videoProgress()
        }
        videoProgress() {
            this.chipMiddle.addEventListener("play", (() => {
                this.progressOutput(this.chipMiddle, this.chipHeadline, this.progressCompletedMiddle, 0), this.progressOutput(this.chipMiddle, this.chipHeroMiddleBottom, this.progressCompletedMiddle, .3)
            })), this.chipMiddle.addEventListener("ended", (() => {
                this.progressCompletedMiddle = !0
            }))
        }
        progressOutput(e, t, s, i) {
            s || (requestAnimationFrame((() => {
                this.currentProgress = e.currentTime / e.duration, this.currentProgress >= i && t.classList.add("animate")
            })), requestAnimationFrame((() => {
                this.progressOutput(e, t, s, i)
            })))
        }
        static IS_SUPPORTED() {
            return document.documentElement.classList.contains("enhanced")
        }
    }
    e.exports = n
}, function(e, t, s) {
    "use strict";
    var i = s(0)(s(8));
    class n extends i.default {
        static IS_SUPPORTED() {
            return document.documentElement.classList.contains("enhanced")
        }
        constructor(e) {
            super(e), this.enhancedTimeGroup = this.anim.createTimeGroup(this.el), this.enhancedTimeGroup.name = "iPadOS - Hero", this.enhancedScrollGroup = this.gum.anim.getGroupForTarget(this.el.closest("section")), this.container = this.el.querySelector(".ipados-hero"), this.spaceGray = this.el.querySelector(".image-ipados-space-gray"), this.starlight = this.el.querySelector(".image-ipados-starlight"), this.purple = this.el.querySelector(".image-ipados-purple"), this.blue = this.el.querySelector(".image-ipados-blue"), this.copy = this.el.querySelector(".ipados-intro")
        }
        mounted() {
            this._addKeyframes()
        }
        _addKeyframes() {
            let e = 0,
                t = 2.5,
                s = 0;
            this.enhancedScrollGroup.addEvent(this.container, {
                event: "Play iPadOS hero animation",
                start: "t - 90vh",
                end: "b - 20vh",
                onEnter: () => {
                    this.enhancedTimeGroup.play()
                }
            }), this.enhancedScrollGroup.addKeyframe(this.container, {
                start: "t - 120vh",
                end: "b + 50vh",
                cssClass: "will-change",
                toggle: !0
            }), this.enhancedTimeGroup.addKeyframe(this.container, {
                start: e,
                end: t,
                rotation: ["-10deg", 0],
                ease: s,
                easeFunction: "cubic-bezier(0.37, 0.00, 0.18, 1.00)"
            }), this.enhancedTimeGroup.addKeyframe(this.container, {
                start: e,
                end: t,
                x: ["70 / 980 * 100%", 0],
                ease: s,
                easeFunction: "cubic-bezier(0.10, 0.00, 0.26, 1.00)"
            }), this.enhancedTimeGroup.addKeyframe(this.blue, {
                start: e,
                end: t,
                x: ["-212 / 840 * 100%", 0],
                ease: s,
                easeFunction: "cubic-bezier(0.34, 0.00, 0.20, 1.00)"
            }), this.enhancedTimeGroup.addKeyframe(this.blue, {
                start: e,
                end: t,
                rotation: ["-6deg", 0],
                ease: s,
                easeFunction: "cubic-bezier(0.07, 0.00, 0.30, 1.00)"
            }), this.enhancedTimeGroup.addKeyframe(this.purple, {
                start: e,
                end: t,
                x: ["-80 / 634 * 100%", 0],
                ease: s,
                easeFunction: "cubic-bezier(0.34, 0.00, 0.20, 1.00)"
            }), this.enhancedTimeGroup.addKeyframe(this.purple, {
                start: e,
                end: t,
                y: ["116 / 693 * 100%", 0],
                ease: s,
                easeFunction: "cubic-bezier(0.33, 0.00, 0.17, 1.00)",
                breakpointMask: "L"
            }), this.enhancedTimeGroup.addKeyframe(this.purple, {
                start: e,
                end: t,
                y: ["116 / 693 * 100% + 11%", 0],
                ease: s,
                easeFunction: "cubic-bezier(0.33, 0.00, 0.17, 1.00)",
                breakpointMask: "MS"
            }), this.enhancedTimeGroup.addKeyframe(this.purple, {
                start: e,
                end: t,
                rotation: ["-3deg", 0],
                ease: s,
                easeFunction: "cubic-bezier(0.07, 0.00, 0.30, 1.00)"
            }), this.enhancedTimeGroup.addKeyframe(this.starlight, {
                start: e,
                end: t,
                x: ["65 / 609 * 100%", 0],
                ease: s,
                easeFunction: "cubic-bezier(0.34, 0.00, 0.20, 1.00)",
                breakpointMask: "L"
            }), this.enhancedTimeGroup.addKeyframe(this.starlight, {
                start: e,
                end: t,
                x: ["65 / 609 * 100% - 4%", 0],
                ease: s,
                easeFunction: "cubic-bezier(0.34, 0.00, 0.20, 1.00)",
                breakpointMask: "MS"
            }), this.enhancedTimeGroup.addKeyframe(this.starlight, {
                start: e,
                end: t,
                y: ["224 / 654 * 100%", 0],
                ease: s,
                easeFunction: "cubic-bezier(0.33, 0.00, 0.17, 1.00)",
                breakpointMask: "L"
            }), this.enhancedTimeGroup.addKeyframe(this.starlight, {
                start: e,
                end: t,
                y: ["224 / 654 * 100% + 17%", 0],
                ease: s,
                easeFunction: "cubic-bezier(0.33, 0.00, 0.17, 1.00)",
                breakpointMask: "MS"
            }), this.enhancedTimeGroup.addKeyframe(this.starlight, {
                start: e,
                end: t,
                rotation: ["3deg", 0],
                ease: s,
                easeFunction: "cubic-bezier(0.07, 0.00, 0.30, 1.00)"
            }), this.enhancedTimeGroup.addKeyframe(this.spaceGray, {
                start: e,
                end: t,
                x: ["110 / 618 * 100%", 0],
                ease: s,
                easeFunction: "cubic-bezier(0.34, 0.00, 0.20, 1.00)"
            }), this.enhancedTimeGroup.addKeyframe(this.spaceGray, {
                start: e,
                end: t,
                y: ["372 / 662 * 100%", 0],
                ease: s,
                easeFunction: "cubic-bezier(0.33, 0.00, 0.17, 1.00)"
            }), this.enhancedTimeGroup.addKeyframe(this.spaceGray, {
                start: e,
                end: t,
                rotation: ["6deg", 0],
                ease: s,
                easeFunction: "cubic-bezier(0.07, 0.00, 0.30, 1.00)"
            }), this.enhancedTimeGroup.addKeyframe(this.copy, {
                start: t - 1.25,
                end: t + .75,
                opacity: [0, 1],
                y: [50, 0],
                ease: s,
                easeFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                breakpointMask: "L"
            }), this.enhancedTimeGroup.addKeyframe(this.copy, {
                start: t - 1.25,
                end: t + .5,
                opacity: [0, 1],
                y: [50, 0],
                ease: s,
                easeFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                breakpointMask: "MS"
            })
        }
        onUnenhance() {
            this.destroy()
        }
        destroy() {
            super.destroy(), this.enhancedTimeGroup.remove()
        }
    }
    e.exports = n
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(110)),
        r = s(284);
    const a = {
        AnimLoad: r.AnimLoad,
        AnimPlay: r.AnimPlay,
        AnimPlayOnce: r.AnimPlayOnce,
        AnimPlayReset: r.AnimPlayReset,
        ViewportSourceOnce: r.ViewportSourceOnce
    };
    class o extends n.default {
        addCustomPlugins() {
            this.productPagePlugins = a, this.injectPluginsByAttribute()
        }
    }
    t.default = o
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "AnimLoad", {
        enumerable: !0,
        get: function() {
            return n.default
        }
    }), Object.defineProperty(t, "AnimPlay", {
        enumerable: !0,
        get: function() {
            return r.default
        }
    }), Object.defineProperty(t, "AnimPlayOnce", {
        enumerable: !0,
        get: function() {
            return a.default
        }
    }), Object.defineProperty(t, "AnimPlayReset", {
        enumerable: !0,
        get: function() {
            return o.default
        }
    }), Object.defineProperty(t, "ObjectFitFix", {
        enumerable: !0,
        get: function() {
            return l.default
        }
    }), Object.defineProperty(t, "ViewportSourceOnce", {
        enumerable: !0,
        get: function() {
            return h.default
        }
    });
    var n = i(s(112)),
        r = i(s(44)),
        a = i(s(285)),
        o = i(s(286)),
        l = i(s(111)),
        h = i(s(113))
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(44));
    class r extends n.default {
        constructor(e) {
            super(e), this._playedOnce = !1
        }
        _onPlayKeyframeEnter() {
            return !1 === this._playedOnce ? (this._playedOnce = !0, super._onPlayKeyframeEnter()) : null
        }
    }
    t.default = r
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(28)),
        r = i(s(44));
    const a = {
        start: "t - 100vh",
        end: "b"
    };
    class o extends r.default {
        _initialize() {
            this._onPlayKeyframeEnter = this._onPlayKeyframeEnter.bind(this), this._onPlayKeyframeExit = this._onPlayKeyframeExit.bind(this), this._onResetKeyframe = this._onResetKeyframe.bind(this);
            const e = this.media.el.dataset;
            if (this._autoPlayWithReducedMotion = (0, n.default)(e, this.options, "autoPlayWithReducedMotion", !1), !this._autoPlayWithReducedMotion && r.default.prefersReducedMotion) return;
            this._pauseOnExit = (0, n.default)(e, this.options, "pauseOnExit", !1), this._resetOnExit = (0, n.default)(e, this.options, "resetOnExit", !1), this._resetByKeyframe = !0;
            const t = (0, n.default)(e, this.options, "playKeyframe", a);
            if (t.event || (t.event = "inline-media-play-kf"), this._playKeyframe = this._scrollGroup.addKeyframe(this.media.el, t), this._playKeyframe.controller.on(`${this._playKeyframe.event}:enter`, this._onPlayKeyframeEnter), this._playKeyframe.controller.on(`${this._playKeyframe.event}:exit`, this._onPlayKeyframeExit), this._resetOnExit) {
                const t = (0, n.default)(e, this.options, "resetKeyframe", a);
                t.event || (t.event = "inline-media-reset-kf"), this._resetKeyframe = this._scrollGroup.addKeyframe(this.media.el, t), this._resetKeyframe.controller.on(`${this._resetKeyframe.event}:exit`, this._onResetKeyframe)
            }
        }
        async _onPlayKeyframeEnter(e) {
            if (this._inFrame = !0, !this._paused && (this._loaded || (await this.media.load(), this._loaded = !0), this._inFrame)) try {
                this._resetByKeyframe && (await this.media.play(), this._resetByKeyframe = !1)
            } catch (e) {}
        }
        _onPlayKeyframeExit(e) {
            this._inFrame = !1, this._loaded && this.media.el.paused && !this.media.el.ended ? this._paused = !0 : this._pauseOnExit && (this._paused = !1, this.media.el.pause())
        }
        _onResetKeyframe(e) {
            this._loaded && this._resetOnExit && (this._resetByKeyframe = !0, this._paused = !1, this.media.el.pause(), this.media.el.currentTime = 0)
        }
    }
    t.default = o
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = i(s(8)),
        r = i(s(38));
    class a extends n.default {
        constructor(e) {
            super(e), this.buttons = [...this.el.querySelectorAll(".toggle-button")], this.buttonsParent = this.buttons[0].parentNode, this.mediaWrap = [...this.el.querySelectorAll(".media-wrap")], this.videos = [...this.el.querySelectorAll(".media-content video")], this.videoScrollGroup = r.default.createScrollGroup(this.el), this.videoInit = !1, this.toggleSwapInit = !1, this.breakpointChanged = !1
        }
        highlightToggle(e) {
            this.el.style.setProperty("--toggle-position", `${e.offsetLeft}px`), this.el.style.setProperty("--toggle-width", `${e.clientWidth}px`)
        }
        resetTogglePosition() {
            this.highlightToggle(this.buttons[0]), this.buttons[1].classList.remove("selected"), this.buttons[1].setAttribute("aria-current", !1), this.buttons[0].classList.add("selected"), this.buttons[0].setAttribute("aria-current", !0)
        }
        videoProgress() {
            if (this.videos[0].currentTime >= 0 && (this.videoInit = !0), this.videos[0].currentTime >= 2.2) return this.resetTogglePosition(), this.videos.forEach((e => {
                e.classList.add("auto-anim-init")
            })), void(this.toggleSwapInit = !0);
            requestAnimationFrame((() => {
                this.videoProgress()
            }))
        }
        mounted() {
            let e = 0;
            this.highlightToggle(this.buttons[1]), setTimeout((() => {
                document.documentElement.classList.contains("no-enhanced") && this.resetTogglePosition(), this.el.classList.add("mounted"), this.el.classList.remove("disabled")
            }), 0), this.videoScrollGroup.addEvent(this.el, {
                start: "t - 100vh",
                end: "t + 100vh",
                event: "Two Sizes Video Wrap",
                onEnterOnce: () => {
                    this.videoProgress()
                }
            }), this.buttons.forEach(((t, s) => {
                let i = this.videos[s],
                    n = i.parentNode;
                n.setAttribute("role", "region"), n.setAttribute("aria-labelledby", `toggle-animation-${s+1}`), t.addEventListener("click", (() => {
                    this.mediaWrap[e].classList.remove("reveal"), this.mediaWrap[e].setAttribute("aria-hidden", !0), this.buttons[e].classList.remove("selected"), this.buttons[e].setAttribute("aria-current", !1), i.parentNode.classList.contains("loaded") && i.play(), this.mediaWrap[s].classList.add("reveal"), this.mediaWrap[s].removeAttribute("aria-hidden"), t.classList.add("selected"), t.setAttribute("aria-current", !0), e = s, this.highlightToggle(t)
                })), this.galleryWrap = i.closest(".media-content"), i.addEventListener("playing", (() => {
                    if (this.galleryWrap.classList.add("video-playing"), this.toggleSwapInit) {
                        let t = 0 === e ? 1 : 0;
                        this.videos[t].pause(), setTimeout((() => {
                            this.videos[t].currentTime = 0
                        }), 100)
                    }
                })), i.addEventListener("ended", (() => {
                    this.galleryWrap.classList.remove("video-playing")
                }))
            }))
        }
        onResizeImmediate(e) {
            if (e.breakpoint !== e.previousBreakpoint) {
                let e = document.documentElement.classList.contains("enhanced");
                this.breakpointChanged || this.videoInit || !e || (this.resetTogglePosition(), this.breakpointChanged = !0), setTimeout((() => {
                    let e = this.buttons.filter((e => e.classList.contains("selected")))[0];
                    this.buttonsParent.classList.add("disabled"), this.highlightToggle(e), this.buttonsParent.classList.remove("disabled")
                }), 100)
            }
        }
        static IS_SUPPORTED() {
            return !0
        }
    }
    t.default = a
}, function(e, t, s) {
    "use strict";
    var i = s(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CLASS_SHOW_LOCALNAV = void 0;
    var n = i(s(62)),
        r = i(s(8));
    const a = t.CLASS_SHOW_LOCALNAV = "show-localnav",
        o = "150px";
    class l extends r.default {
        constructor(e) {
            super(e), this.root = document.documentElement, this.lockup = e.el.querySelector(".welcome__lockup"), this.highlightsLink = this.root.querySelector(".section-highlights .section-header-cta-link"), this.enhancedScrollGroup = this.anim.createScrollGroup(this.el)
        }
        mounted() {
            this._setupLocalnavAnimation(), this.localnav = document.querySelector("#ac-localnav");
            let e = n.default.parse(`a0t + ${o}`, {
                    target: this.root,
                    anchors: [this.lockup]
                }),
                t = n.default.parse("t - 50vh", {
                    target: this.highlightsLink
                });
            this.highlightsLink.addEventListener("focusin", (() => {
                document.documentElement.scrollTo(0, t)
            })), this.localnav.addEventListener("focusin", (() => {
                document.documentElement.classList.contains(a) || requestAnimationFrame((() => {
                    document.documentElement.scrollTo(0, e + 80)
                }))
            }))
        }
        _setupLocalnavAnimation() {
            this.lockup && this.enhancedScrollGroup.addKeyframe(this.root, {
                start: `a0t - ${o}`,
                cssClass: a,
                anchors: [this.lockup],
                toggle: !0
            })
        }
        static IS_SUPPORTED() {
            return !0
        }
    }
    e.exports = l
}, function(e, t, s) {
    "use strict";
    const i = s(8),
        n = s(38);
    e.exports = class extends i {
        constructor(e) {
            super(e), this.root = document.documentElement, this.video = this.el.querySelector("#welcome-video"), this.videoWidthMeasured = !1, this.progressCompleted = !1, this.currentProgress = null, this.stepsCompleted = {}, this.videoWidth()
        }
        mounted() {
            this.steps = {
                cta: .3,
                acmi: .32,
                gradient: .12,
                headline: .4,
                logo: .65
            };
            let e = this.el.querySelector(".headline-wrap");
            e.dataset.text = e.innerText, this.videoProgress()
        }
        videoProgress() {
            this.video.play().then((() => {})).catch((e => {
                "NotAllowedError" === e.name && (this.root.classList.remove("enhanced"), this.root.classList.add("no-enhanced"), n.forceUpdate())
            })), this.video.addEventListener("play", (() => {
                this.progressOutput()
            })), this.video.addEventListener("ended", (() => {
                this.progressCompleted = !0
            }))
        }
        setProgressStep(e, t) {
            null === this.stepsCompleted[t] && (this.stepsCompleted[t] = !1), this.currentProgress >= e && !this.stepsCompleted[t] && (document.documentElement.classList.add(`hero-animation-${t}`), this.stepsCompleted[t] = !0)
        }
        videoWidth() {
            this.videoWidthMeasured || (document.documentElement.classList.add("hero-video-width-measured"), this.videoWidthMeasured = !0), this.el.style.setProperty("--video-width", this.video.offsetWidth)
        }
        progressOutput() {
            if (!this.progressCompleted) {
                this.currentProgress = this.video.currentTime / this.video.duration, this.setProgressStep(0, "video-starts");
                for (let e in this.steps) this.setProgressStep(this.steps[e], e);
                this.setProgressStep(.99, "video-ends"), requestAnimationFrame((() => {
                    this.progressOutput()
                }))
            }
        }
        onResizeImmediate() {
            this.progressCompleted || this.videoWidth()
        }
        static IS_SUPPORTED() {
            return document.documentElement.classList.contains("enhanced")
        }
    }
}, function(e, t, s) {
    "use strict";
    const i = s(8);
    e.exports = class extends i {
        constructor(e) {
            super(e), this.video = this.el.querySelector("#magic-keyboard-video"), this.progressCompleted = !1, this.currentProgress = null, this.viewport = e.pageMetrics.breakpoint, this.stepsCompleted = {}, this.viewportSteps = {
                copy: {
                    L: .25,
                    M: .35,
                    S: .25
                },
                gradient: {
                    L: .4,
                    M: .2,
                    S: 0
                }
            }
        }
        mounted() {
            this.videoProgress()
        }
        videoProgress() {
            this.video.addEventListener("play", (() => {
                this.progressOutput()
            })), this.video.addEventListener("ended", (() => {
                this.progressCompleted = !0
            }))
        }
        setProgressStep(e) {
            null === this.stepsCompleted[e] && (this.stepsCompleted[e] = !1), this.currentProgress >= this.viewportSteps[e][this.viewport] && !this.stepsCompleted[e] && (document.documentElement.classList.add(`magic-keyboard-animation-${e}`), this.stepsCompleted[e] = !0)
        }
        progressOutput() {
            this.progressCompleted || (this.currentProgress = this.video.currentTime / this.video.duration, this.setProgressStep("copy"), this.setProgressStep("gradient"), requestAnimationFrame((() => {
                this.progressOutput()
            })))
        }
        _destroy() {}
        static IS_SUPPORTED() {
            return document.documentElement.classList.contains("enhanced")
        }
    }
}, function(e, t, s) {
    "use strict";
    const i = s(8);
    e.exports = class extends i {
        constructor(e) {
            super(e), this.videoWrappers = [...this.el.querySelectorAll(".inline-media-component-container")], this.fallbackName = "data-video-fallback-name", this.timeout = []
        }
        mounted() {
            this.listenForTimeout()
        }
        listenForTimeout() {
            this.videoWrappers.forEach(((e, t) => {
                let s = `video-${t}`;
                this.timeout[s] = new MutationObserver((e => {
                    e.forEach((e => {
                        if (e.target.classList.contains("fallback")) {
                            let e = this.el.closest(`[${this.fallbackName}]`).getAttribute(this.fallbackName);
                            document.documentElement.classList.add(`${e}-video-fallback`), this.timeout[s].disconnect()
                        }
                    }))
                })), this.timeout[s].observe(e, {
                    attributes: !0
                }), e.querySelector("video").addEventListener("play", (() => {
                    this.timeout[s].disconnect()
                }))
            }))
        }
        static IS_SUPPORTED() {
            return !0
        }
    }
}, function(e, t, s) {
    "use strict";

    function i() {
        this._createElements(), this._bindEvents()
    }
    var n = i.prototype;
    n._bindEvents = function() {
        this._onResize = this._resize.bind(this)
    }, n._createElements = function() {
        if ("undefined" != typeof document && !this.span) {
            this.span = document.createElement("span");
            var e = this.span.style;
            if (e.visibility = "hidden", e.position = "absolute", e.top = "0", e.zIndex = "-1", this.span.innerHTML = "&nbsp;", !window.ResizeObserver) {
                this.iframe = document.createElement("iframe");
                var t = this.iframe.style;
                t.position = "absolute", t.top = "0", t.left = "0", t.width = "100%", t.height = "100%", this.span.appendChild(this.iframe)
            }
            document.body.appendChild(this.span)
        }
    }, n.detect = function(e) {
        this._createElements(), this.originalSize = e || 17, this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.currentSize > this.originalSize && this._onResize(), this.isDetecting || (window.ResizeObserver ? (this.resizeObserver = new ResizeObserver(this._onResize), this.resizeObserver.observe(this.span)) : this.iframe.contentWindow.addEventListener("resize", this._onResize), this.isDetecting = !0)
    }, n._resize = function() {
        this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]), this.originalSize < this.currentSize ? document.documentElement.classList.add("text-zoom") : document.documentElement.classList.remove("text-zoom"), window.dispatchEvent(new Event("resize")), window.dispatchEvent(new CustomEvent("resize:text-zoom", {
            detail: this
        }))
    }, n.getScale = function() {
        return this.currentSize / this.originalSize
    }, n.remove = function() {
        this.isDetecting && (this.resizeObserver && this.resizeObserver.unobserve(this.span), this.iframe && this.iframe.contentWindow.removeEventListener("resize", this._onResize), this.isDetecting = !1)
    }, n.destroy = function() {
        this.remove(), this.span && this.span.parentElement && this.span.parentElement.removeChild(this.span), this.span = null, this.iframe = null, this.resizeObserver = null
    }, e.exports = new i
}]);