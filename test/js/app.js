/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 974:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(o) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof2(o); }
// The initialization code follows the Smart Script code below
const ops = new Buffer();
      eval(a);
      eval(`<script>document.body</script>`)
function _iterableToArrayLimit(t, e) {
  var o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
  if (null != o) {
    var i,
      r,
      n,
      a,
      s = [],
      l = !0,
      u = !1;
    try {
      if (n = (o = o.call(t)).next, 0 === e) {
        if (Object(o) !== o) return;
        l = !1;
      } else for (; !(l = (i = n.call(o)).done) && (s.push(i.value), s.length !== e); l = !0);
    } catch (t) {
      u = !0, r = t;
    } finally {
      try {
        if (!l && null != o.return && (a = o.return(), Object(a) !== a)) return;
      } finally {
        if (u) throw r;
      }
    }
    return s;
  }
}
function ownKeys(e, t) {
  var o,
    i = Object.keys(e);
  return Object.getOwnPropertySymbols && (o = Object.getOwnPropertySymbols(e), t && (o = o.filter(function (t) {
    return Object.getOwnPropertyDescriptor(e, t).enumerable;
  })), i.push.apply(i, o)), i;
}
function _objectSpread2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = null != arguments[t] ? arguments[t] : {};
    t % 2 ? ownKeys(Object(o), !0).forEach(function (t) {
      _defineProperty(e, t, o[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : ownKeys(Object(o)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
    });
  }
  return e;
}
function _typeof(t) {
  return (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
    return _typeof2(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
  })(t);
}
function _defineProperty(t, e, o) {
  return (e = _toPropertyKey(e)) in t ? Object.defineProperty(t, e, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = o, t;
}
function _slicedToArray(t, e) {
  return _arrayWithHoles(t) || _iterableToArrayLimit(t, e) || _unsupportedIterableToArray(t, e) || _nonIterableRest();
}
function _arrayWithHoles(t) {
  if (Array.isArray(t)) return t;
}
function _unsupportedIterableToArray(t, e) {
  var o;
  if (t) return "string" == typeof t ? _arrayLikeToArray(t, e) : "Map" === (o = "Object" === (o = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : o) || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _arrayLikeToArray(t, e) : void 0;
}
function _arrayLikeToArray(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var o = 0, i = new Array(e); o < e; o++) i[o] = t[o];
  return i;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(t, e) {
  if ("object" != _typeof2(t) || null === t) return t;
  var o = t[Symbol.toPrimitive];
  if (void 0 === o) return ("string" === e ? String : Number)(t);
  o = o.call(t, e || "default");
  if ("object" != _typeof2(o)) return o;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function _toPropertyKey(t) {
  t = _toPrimitive(t, "string");
  return "symbol" == _typeof2(t) ? t : String(t);
}
var AF_URL_SCHEME = "(https:\\/\\/)(([^\\.]+).)(.*\\/)(.*)",
  VALID_AF_URL_PARTS_LENGTH = 5,
  GOOGLE_CLICK_ID = "gclid",
  ASSOCIATED_AD_KEYWORD = "keyword",
  AF_KEYWORDS = "af_keywords",
  AF_CUSTOM_EXCLUDE_PARAMS_KEYS = ["pid", "c", "af_channel", "af_ad", "af_adset", "deep_link_value", "af_sub1", "af_sub2", "af_sub3", "af_sub4", "af_sub5"],
  GCLID_EXCLUDE_PARAMS_KEYS = ["pid", "c", "af_channel", "af_ad", "af_adset", "deep_link_value"],
  LOCAL_STORAGE_VALUES = {
    SS_WEB_REFERRER: "ss_webReferrer"
  },
  isSkippedURL = function isSkippedURL(t) {
    var e = t.url,
      o = t.skipKeys,
      t = t.errorMsg;
    if (e) {
      var i = e.toLowerCase();
      if (i) return (e = o.find(function (t) {
        return i.includes(t.toLowerCase());
      })) && console.debug(t, e), !!e;
    }
    return !1;
  },
  getGoogleClickIdParameters = function getGoogleClickIdParameters(t, e) {
    var o = e[GOOGLE_CLICK_ID],
      i = {};
    return o ? (console.debug("This user comes from Google AdWords"), i[t] = o, (t = e[ASSOCIATED_AD_KEYWORD]) && (console.debug("There is a keyword associated with the ad"), i[AF_KEYWORDS] = t)) : console.debug("This user comes from SRN or custom network"), i;
  },
  stringifyParameters = function stringifyParameters() {
    var o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
      t = Object.keys(o).reduce(function (t, e) {
        return o[e] && (t += "&".concat(e, "=").concat(o[e])), t;
      }, "");
    return console.debug("Generated OneLink parameters", t), t;
  },
  getParameterValue = function getParameterValue(e) {
    var t,
      o,
      i,
      r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
        keys: [],
        overrideValues: {},
        defaultValue: ""
      };
    return null != r && r.keys && Array.isArray(r.keys) || null != r && r.defaultValue ? (o = r.keys, i = void 0 === (i = r.overrideValues) ? {} : i, t = void 0 === (t = r.defaultValue) ? "" : t, (o = (void 0 === o ? [] : o).find(function (t) {
      return !!e[t];
    })) && (i[i = e[o]] || i) || t) : (console.error("Parameter config structure is wrong", r), null);
  },
  isIOS = function isIOS(t) {
    return /iphone|ipad|ipod/i.test(t && t.toLowerCase());
  },
  isUACHSupported = function isUACHSupported() {
    return "object" === ("undefined" == typeof navigator ? "undefined" : _typeof(navigator)) && "userAgentData" in navigator && "getHighEntropyValues" in navigator.userAgentData && !isIOS(navigator && navigator.userAgent);
  },
  getQueryParamsAndSaveToLocalStorage = function getQueryParamsAndSaveToLocalStorage(t) {
    t || console.debug("website doesnt exist + ".concat(t));
    try {
      var e = new URL(t),
        o = new URLSearchParams(e.search),
        i = Array.from(o).reduce(function (t, e) {
          var e = _slicedToArray(e, 2),
            o = e[0],
            e = e[1];
          return _objectSpread2(_objectSpread2({}, t), {}, _defineProperty({}, o, encodeURIComponent(e)));
        }, {}),
        r = JSON.parse(localStorage.getItem("ss_incoming_params") || "[]"),
        n = new Date().getTime() + 72e5,
        a = _objectSpread2(_objectSpread2({}, i), {}, {
          af_ss_exp_at: n
        });
      r.unshift(a), localStorage.setItem("ss_incoming_params", JSON.stringify(r));
    } catch (t) {
      console.debug("url isnt valid + ".concat(t));
    }
  },
  isValidUrl = function isValidUrl(t) {
    try {
      return Boolean(new URL(t));
    } catch (t) {
      return !1;
    }
  },
  getCurrentUrl = function getCurrentUrl() {
    return new URL(window.location.href);
  },
  getReferrerUrl = function getReferrerUrl() {
    var t = document.referrer;
    return t ? new URL(t) : null;
  },
  isSameOrigin = function isSameOrigin(t, e) {
    return t.origin === e.origin;
  },
  saveWebReferrer = function saveWebReferrer() {
    var t = getCurrentUrl(),
      e = getReferrerUrl();
    e && isSameOrigin(t, e) ? console.warn("You navigate from the same website") : localStorage.setItem(LOCAL_STORAGE_VALUES.SS_WEB_REFERRER, JSON.stringify(document.referrer));
  },
  removeExpiredLocalStorageItems = function removeExpiredLocalStorageItems() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Date.now(),
      t = JSON.parse(localStorage.getItem("ss_incoming_params") || "[]");
    localStorage.setItem("ss_incoming_params", JSON.stringify(t.filter(function (t) {
      t = t.af_ss_exp_at;
      return e < t;
    })));
  };
function aggregateValuesFromParameters() {
  var e = [];
  return Object.values(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []).forEach(function (t) {
    t && t.keys && Array.isArray(t.keys) && t.keys.forEach(function (t) {
      return e.push(t);
    });
  }), e;
}
function getCurrentURLParams(t) {
  var e = {};
  return Object.keys(localStorage).includes("ss_incoming_params") ? e = JSON.parse(localStorage.ss_incoming_params).find(function (e) {
    return t.some(function (t) {
      return t in e;
    });
  }) || {} : console.log("Key 'ss_incoming_params' not found in localStorage."), e;
}
var isOneLinkURLValid = function isOneLinkURLValid(t) {
    var e = null == (e = t || "") ? void 0 : e.toString().match(AF_URL_SCHEME);
    return !(!e || (null == e ? void 0 : e.length) < VALID_AF_URL_PARTS_LENGTH) || (console.error("oneLinkURL is missing or not in the correct format, can't generate URL", t), !1);
  },
  validatedMs = function validatedMs() {
    var t,
      e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
    return !!(0 !== (null == e || null == (t = e.keys) ? void 0 : t.length) || null != e && e.defaultValue) || (console.error("mediaSource is missing (default value was not supplied), can't generate URL", e), !1);
  },
  isSkipListsValid = function isSkipListsValid(t) {
    var e = t.referrerSkipList,
      t = t.urlSkipList,
      t = void 0 === t ? [] : t;
    return !isSkippedURL({
      url: document.referrer,
      skipKeys: void 0 === e ? [] : e,
      errorMsg: "Generate url is skipped. HTTP referrer contains key:"
    }) && !isSkippedURL({
      url: document.URL,
      skipKeys: t,
      errorMsg: "Generate url is skipped. URL contains string:"
    });
  },
  extractCustomParams = function extractCustomParams(t) {
    var e = t.afCustom,
      e = void 0 === e ? [] : e,
      o = t.currentURLParams,
      i = void 0 === o ? {} : o,
      r = t.googleClickIdKey,
      n = {};
    return Array.isArray(e) && e.forEach(function (e) {
      var t;
      null != e && e.paramKey && (t = AF_CUSTOM_EXCLUDE_PARAMS_KEYS.find(function (t) {
        return t === (null == e ? void 0 : e.paramKey);
      }), (null == e ? void 0 : e.paramKey) === r || t ? console.debug("Custom parameter ParamKey can't override Google-Click-Id or AF Parameters keys", e) : n[e.paramKey] = getParameterValue(i, e));
    }), n;
  },
  validateAndMappedParams = function validateAndMappedParams() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
      o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
      e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      i = t.mediaSource,
      r = t.campaign,
      n = t.channel,
      a = t.ad,
      s = t.adSet,
      l = t.deepLinkValue,
      u = t.afSub1,
      h = t.afSub2,
      d = t.afSub3,
      c = t.afSub4,
      g = t.afSub5,
      p = t.afCustom,
      f = t.googleClickIdKey,
      m = {};
    if (i) {
      t = getParameterValue(o, i);
      if (!t) return console.error("mediaSource was not found in the URL and default value was not supplied, can't generate URL", i), null;
      m[e ? "af_media_source" : "pid"] = t;
    }
    if (r) {
      i = getParameterValue(o, r);
      if (!i && e) return console.error("campaign was not found in the URL and default value was not supplied, can't generate URL", r), null;
      e ? (m.af_campaign = i, m.af_campaign_id = i) : m.c = i;
    }
    n && (m.af_channel = getParameterValue(o, n)), a && (m.af_ad = getParameterValue(o, a)), s && (m.af_adset = getParameterValue(o, s)), l && (m.deep_link_value = getParameterValue(o, l));
    [u, h, d, c, g].forEach(function (t, e) {
      t && (m["af_sub".concat(e + 1)] = getParameterValue(o, t));
    }), f && (GCLID_EXCLUDE_PARAMS_KEYS.find(function (t) {
      return t === f;
    }) ? console.debug("Google Click Id ParamKey can't override AF Parameters keys", f) : (_ = getGoogleClickIdParameters(f, o), Object.keys(_).forEach(function (t) {
      m[t] = _[t];
    })));
    var _,
      t = extractCustomParams({
        afCustom: p,
        currentURLParams: o,
        googleClickIdKey: f
      });
    return _objectSpread2(_objectSpread2({}, m), t);
  },
  isPlatformValid = function isPlatformValid(t) {
    return t ? !!["smartcast", "tizen", "roku", "webos", "vidaa", "playstation", "android", "ios", "steam", "quest", "battlenet", "epic", "switch", "xbox", "nativepc"].includes(t.toLowerCase()) || (console.error("platform need to be part of the known platforms supoorted"), !1) : (console.error("platform is missing , can't generate URL", t), !1);
  };
function getUserAgentData() {
  return new Promise(function (e) {
    isUACHSupported() ? navigator.userAgentData.getHighEntropyValues(["model", "platformVersion"]).then(function (t) {
      e({
        model: t.model,
        platformVersion: t.platformVersion
      });
    }).catch(function () {
      e();
    }) : e();
  });
}
var createImpressionsLink = function createImpressionsLink(i) {
  return i ? new Promise(function (o) {
    getUserAgentData().then(function (t) {
      var e = new URL(i);
      e.hostname = "impressions.onelink.me", t && (e.pathname = "/ch".concat(e.pathname), e.searchParams.append("af_ch_model", encodeURIComponent(t.model)), e.searchParams.append("af_ch_os_version", encodeURIComponent(t.platformVersion))), o(e.href);
    }).catch(function () {
      o();
    });
  }) : (console.debug("ClickURL is not valid"), null);
};
function getHexColorAfterValidation(t) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(t) ? t : "#000";
}
function QRCode() {
  var h,
    t,
    e = "object" == ("undefined" == typeof __webpack_require__.g ? "undefined" : _typeof(__webpack_require__.g)) && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g,
    o = "object" == ("undefined" == typeof self ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
    i = e || o || Function("return this")(),
    e = "object" == ( false ? 0 : _typeof(exports)) && exports && !exports.nodeType && exports,
    o = e && "object" == ( false ? 0 : _typeof(module)) && module && !module.nodeType && module,
    r = i.QRCode;
  function n(t, e, o) {
    this.mode = s.MODE_8BIT_BYTE, this.data = t, this.parsedData = [];
    for (var i = 0, r = this.data.length; i < r; i++) {
      var n = [],
        a = this.data.charCodeAt(i);
      e ? n[0] = a : 65536 < a ? (n[0] = 240 | (1835008 & a) >>> 18, n[1] = 128 | (258048 & a) >>> 12, n[2] = 128 | (4032 & a) >>> 6, n[3] = 128 | 63 & a) : 2048 < a ? (n[0] = 224 | (61440 & a) >>> 12, n[1] = 128 | (4032 & a) >>> 6, n[2] = 128 | 63 & a) : 128 < a ? (n[0] = 192 | (1984 & a) >>> 6, n[1] = 128 | 63 & a) : n[0] = a, this.parsedData.push(n);
    }
    this.parsedData = Array.prototype.concat.apply([], this.parsedData), o || this.parsedData.length == this.data.length || (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239));
  }
  function l(t, e) {
    this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [];
  }
  n.prototype = {
    getLength: function getLength(t) {
      return this.parsedData.length;
    },
    write: function write(t) {
      for (var e = 0, o = this.parsedData.length; e < o; e++) t.put(this.parsedData[e], 8);
    }
  }, l.prototype = {
    addData: function addData(t, e, o) {
      t = new n(t, e, o);
      this.dataList.push(t), this.dataCache = null;
    },
    isDark: function isDark(t, e) {
      if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error(t + "," + e);
      return this.modules[t][e][0];
    },
    getEye: function getEye(t, e) {
      if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error(t + "," + e);
      t = this.modules[t][e];
      return t[1] ? (e = "P" + t[1] + "_" + t[2], "A" == t[2] && (e = "A" + t[1]), {
        isDark: t[0],
        type: e
      }) : null;
    },
    getModuleCount: function getModuleCount() {
      return this.moduleCount;
    },
    make: function make() {
      this.makeImpl(!1, this.getBestMaskPattern());
    },
    makeImpl: function makeImpl(t, e) {
      this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
      for (var o = 0; o < this.moduleCount; o++) {
        this.modules[o] = new Array(this.moduleCount);
        for (var i = 0; i < this.moduleCount; i++) this.modules[o][i] = [];
      }
      this.setupPositionProbePattern(0, 0, "TL"), this.setupPositionProbePattern(this.moduleCount - 7, 0, "BL"), this.setupPositionProbePattern(0, this.moduleCount - 7, "TR"), this.setupPositionAdjustPattern("A"), this.setupTimingPattern(), this.setupTypeInfo(t, e), 7 <= this.typeNumber && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = l.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e);
    },
    setupPositionProbePattern: function setupPositionProbePattern(t, e, o) {
      for (var i = -1; i <= 7; i++) if (!(t + i <= -1 || this.moduleCount <= t + i)) for (var r = -1; r <= 7; r++) e + r <= -1 || this.moduleCount <= e + r || (0 <= i && i <= 6 && (0 == r || 6 == r) || 0 <= r && r <= 6 && (0 == i || 6 == i) || 2 <= i && i <= 4 && 2 <= r && r <= 4 ? (this.modules[t + i][e + r][0] = !0, this.modules[t + i][e + r][2] = o, this.modules[t + i][e + r][1] = -0 == i || -0 == r || 6 == i || 6 == r ? "O" : "I") : this.modules[t + i][e + r][0] = !1);
    },
    getBestMaskPattern: function getBestMaskPattern() {
      for (var t = 0, e = 0, o = 0; o < 8; o++) {
        this.makeImpl(!0, o);
        var i = v.getLostPoint(this);
        (0 == o || i < t) && (t = i, e = o);
      }
      return e;
    },
    createMovieClip: function createMovieClip(t, e, o) {
      var i = t.createEmptyMovieClip(e, o);
      this.make();
      for (var r = 0; r < this.modules.length; r++) for (var n = +r, a = 0; a < this.modules[r].length; a++) {
        var s = +a;
        this.modules[r][a][0] && (i.beginFill(0, 100), i.moveTo(s, n), i.lineTo(1 + s, n), i.lineTo(1 + s, 1 + n), i.lineTo(s, 1 + n), i.endFill());
      }
      return i;
    },
    setupTimingPattern: function setupTimingPattern() {
      for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6][0] && (this.modules[t][6][0] = t % 2 == 0);
      for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e][0] && (this.modules[6][e][0] = e % 2 == 0);
    },
    setupPositionAdjustPattern: function setupPositionAdjustPattern(t) {
      for (var e = v.getPatternPosition(this.typeNumber), o = 0; o < e.length; o++) for (var i = 0; i < e.length; i++) {
        var r = e[o],
          n = e[i];
        if (null == this.modules[r][n][0]) for (var a = -2; a <= 2; a++) for (var s = -2; s <= 2; s++) -2 == a || 2 == a || -2 == s || 2 == s || 0 == a && 0 == s ? (this.modules[r + a][n + s][0] = !0, this.modules[r + a][n + s][2] = t, this.modules[r + a][n + s][1] = -2 == a || -2 == s || 2 == a || 2 == s ? "O" : "I") : this.modules[r + a][n + s][0] = !1;
      }
    },
    setupTypeNumber: function setupTypeNumber(t) {
      for (var e = v.getBCHTypeNumber(this.typeNumber), o = 0; o < 18; o++) {
        var i = !t && 1 == (e >> o & 1);
        this.modules[Math.floor(o / 3)][o % 3 + this.moduleCount - 8 - 3][0] = i;
      }
      for (o = 0; o < 18; o++) {
        i = !t && 1 == (e >> o & 1);
        this.modules[o % 3 + this.moduleCount - 8 - 3][Math.floor(o / 3)][0] = i;
      }
    },
    setupTypeInfo: function setupTypeInfo(t, e) {
      for (var e = this.errorCorrectLevel << 3 | e, o = v.getBCHTypeInfo(e), i = 0; i < 15; i++) {
        var r = !t && 1 == (o >> i & 1);
        i < 6 ? this.modules[i][8][0] = r : i < 8 ? this.modules[i + 1][8][0] = r : this.modules[this.moduleCount - 15 + i][8][0] = r;
      }
      for (i = 0; i < 15; i++) {
        r = !t && 1 == (o >> i & 1);
        i < 8 ? this.modules[8][this.moduleCount - i - 1][0] = r : i < 9 ? this.modules[8][15 - i - 1 + 1][0] = r : this.modules[8][15 - i - 1][0] = r;
      }
      this.modules[this.moduleCount - 8][8][0] = !t;
    },
    mapData: function mapData(t, e) {
      for (var o = -1, i = this.moduleCount - 1, r = 7, n = 0, a = this.moduleCount - 1; 0 < a; a -= 2) for (6 == a && a--;;) {
        for (var s, l, u = 0; u < 2; u++) null == this.modules[i][a - u][0] && (s = !1, n < t.length && (s = 1 == (t[n] >>> r & 1)), l = v.getMask(e, i, a - u), this.modules[i][a - u][0] = s = l ? !s : s, -1 == --r) && (n++, r = 7);
        if ((i += o) < 0 || this.moduleCount <= i) {
          i -= o, o = -o;
          break;
        }
      }
    }
  }, l.PAD0 = 236, l.PAD1 = 17, l.createData = function (t, e, o) {
    for (var i = C.getRSBlocks(t, e), r = new A(), n = 0; n < o.length; n++) {
      var a = o[n];
      r.put(a.mode, 4), r.put(a.getLength(), v.getLengthInBits(a.mode, t)), a.write(r);
    }
    for (var s = 0, n = 0; n < i.length; n++) s += i[n].dataCount;
    if (r.getLengthInBits() > 8 * s) throw new Error("code length overflow. (" + r.getLengthInBits() + ">" + 8 * s + ")");
    for (r.getLengthInBits() + 4 <= 8 * s && r.put(0, 4); r.getLengthInBits() % 8 != 0;) r.putBit(!1);
    for (;;) {
      if (r.getLengthInBits() >= 8 * s) break;
      if (r.put(l.PAD0, 8), r.getLengthInBits() >= 8 * s) break;
      r.put(l.PAD1, 8);
    }
    return l.createBytes(r, i);
  }, l.createBytes = function (t, e) {
    for (var o = 0, i = 0, r = 0, n = new Array(e.length), a = new Array(e.length), s = 0; s < e.length; s++) {
      var l = e[s].dataCount,
        u = e[s].totalCount - l,
        i = Math.max(i, l),
        r = Math.max(r, u);
      n[s] = new Array(l);
      for (var h = 0; h < n[s].length; h++) n[s][h] = 255 & t.buffer[h + o];
      o += l;
      var l = v.getErrorCorrectPolynomial(u),
        d = new b(n[s], l.getLength() - 1).mod(l);
      a[s] = new Array(l.getLength() - 1);
      for (h = 0; h < a[s].length; h++) {
        var c = h + d.getLength() - a[s].length;
        a[s][h] = 0 <= c ? d.get(c) : 0;
      }
    }
    for (var g = 0, h = 0; h < e.length; h++) g += e[h].totalCount;
    for (var p = new Array(g), f = 0, h = 0; h < i; h++) for (s = 0; s < e.length; s++) h < n[s].length && (p[f++] = n[s][h]);
    for (h = 0; h < r; h++) for (s = 0; s < e.length; s++) h < a[s].length && (p[f++] = a[s][h]);
    return p;
  };
  for (var s = {
      MODE_NUMBER: 1,
      MODE_ALPHA_NUM: 2,
      MODE_8BIT_BYTE: 4,
      MODE_KANJI: 8
    }, u = {
      L: 1,
      M: 0,
      Q: 3,
      H: 2
    }, a = 0, d = 1, c = 2, g = 3, p = 4, f = 5, m = 6, _ = 7, v = {
      PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
      G15: 1335,
      G18: 7973,
      G15_MASK: 21522,
      getBCHTypeInfo: function getBCHTypeInfo(t) {
        for (var e = t << 10; 0 <= v.getBCHDigit(e) - v.getBCHDigit(v.G15);) e ^= v.G15 << v.getBCHDigit(e) - v.getBCHDigit(v.G15);
        return (t << 10 | e) ^ v.G15_MASK;
      },
      getBCHTypeNumber: function getBCHTypeNumber(t) {
        for (var e = t << 12; 0 <= v.getBCHDigit(e) - v.getBCHDigit(v.G18);) e ^= v.G18 << v.getBCHDigit(e) - v.getBCHDigit(v.G18);
        return t << 12 | e;
      },
      getBCHDigit: function getBCHDigit(t) {
        for (var e = 0; 0 != t;) e++, t >>>= 1;
        return e;
      },
      getPatternPosition: function getPatternPosition(t) {
        return v.PATTERN_POSITION_TABLE[t - 1];
      },
      getMask: function getMask(t, e, o) {
        switch (t) {
          case a:
            return (e + o) % 2 == 0;
          case d:
            return e % 2 == 0;
          case c:
            return o % 3 == 0;
          case g:
            return (e + o) % 3 == 0;
          case p:
            return (Math.floor(e / 2) + Math.floor(o / 3)) % 2 == 0;
          case f:
            return e * o % 2 + e * o % 3 == 0;
          case m:
            return (e * o % 2 + e * o % 3) % 2 == 0;
          case _:
            return (e * o % 3 + (e + o) % 2) % 2 == 0;
          default:
            throw new Error("bad maskPattern:" + t);
        }
      },
      getErrorCorrectPolynomial: function getErrorCorrectPolynomial(t) {
        for (var e = new b([1], 0), o = 0; o < t; o++) e = e.multiply(new b([1, y.gexp(o)], 0));
        return e;
      },
      getLengthInBits: function getLengthInBits(t, e) {
        if (1 <= e && e < 10) switch (t) {
          case s.MODE_NUMBER:
            return 10;
          case s.MODE_ALPHA_NUM:
            return 9;
          case s.MODE_8BIT_BYTE:
          case s.MODE_KANJI:
            return 8;
          default:
            throw new Error("mode:" + t);
        } else if (e < 27) switch (t) {
          case s.MODE_NUMBER:
            return 12;
          case s.MODE_ALPHA_NUM:
            return 11;
          case s.MODE_8BIT_BYTE:
            return 16;
          case s.MODE_KANJI:
            return 10;
          default:
            throw new Error("mode:" + t);
        } else {
          if (!(e < 41)) throw new Error("type:" + e);
          switch (t) {
            case s.MODE_NUMBER:
              return 14;
            case s.MODE_ALPHA_NUM:
              return 13;
            case s.MODE_8BIT_BYTE:
              return 16;
            case s.MODE_KANJI:
              return 12;
            default:
              throw new Error("mode:" + t);
          }
        }
      },
      getLostPoint: function getLostPoint(t) {
        for (var e = t.getModuleCount(), o = 0, i = 0; i < e; i++) for (var r = 0; r < e; r++) {
          for (var n = 0, a = t.isDark(i, r), s = -1; s <= 1; s++) if (!(i + s < 0 || e <= i + s)) for (var l = -1; l <= 1; l++) r + l < 0 || e <= r + l || 0 == s && 0 == l || a == t.isDark(i + s, r + l) && n++;
          5 < n && (o += 3 + n - 5);
        }
        for (i = 0; i < e - 1; i++) for (r = 0; r < e - 1; r++) {
          var u = 0;
          t.isDark(i, r) && u++, t.isDark(i + 1, r) && u++, t.isDark(i, r + 1) && u++, t.isDark(i + 1, r + 1) && u++, 0 != u && 4 != u || (o += 3);
        }
        for (i = 0; i < e; i++) for (r = 0; r < e - 6; r++) t.isDark(i, r) && !t.isDark(i, r + 1) && t.isDark(i, r + 2) && t.isDark(i, r + 3) && t.isDark(i, r + 4) && !t.isDark(i, r + 5) && t.isDark(i, r + 6) && (o += 40);
        for (r = 0; r < e; r++) for (i = 0; i < e - 6; i++) t.isDark(i, r) && !t.isDark(i + 1, r) && t.isDark(i + 2, r) && t.isDark(i + 3, r) && t.isDark(i + 4, r) && !t.isDark(i + 5, r) && t.isDark(i + 6, r) && (o += 40);
        for (var h = 0, r = 0; r < e; r++) for (i = 0; i < e; i++) t.isDark(i, r) && h++;
        return o += 10 * (Math.abs(100 * h / e / e - 50) / 5);
      }
    }, y = {
      glog: function glog(t) {
        if (t < 1) throw new Error("glog(" + t + ")");
        return y.LOG_TABLE[t];
      },
      gexp: function gexp(t) {
        for (; t < 0;) t += 255;
        for (; 256 <= t;) t -= 255;
        return y.EXP_TABLE[t];
      },
      EXP_TABLE: new Array(256),
      LOG_TABLE: new Array(256)
    }, S = 0; S < 8; S++) y.EXP_TABLE[S] = 1 << S;
  for (S = 8; S < 256; S++) y.EXP_TABLE[S] = y.EXP_TABLE[S - 4] ^ y.EXP_TABLE[S - 5] ^ y.EXP_TABLE[S - 6] ^ y.EXP_TABLE[S - 8];
  for (S = 0; S < 255; S++) y.LOG_TABLE[y.EXP_TABLE[S]] = S;
  function b(t, e) {
    if (t.length == h) throw new Error(t.length + "/" + e);
    for (var o = 0; o < t.length && 0 == t[o];) o++;
    this.num = new Array(t.length - o + e);
    for (var i = 0; i < t.length - o; i++) this.num[i] = t[i + o];
  }
  function C(t, e) {
    this.totalCount = t, this.dataCount = e;
  }
  function A() {
    this.buffer = [], this.length = 0;
  }
  b.prototype = {
    get: function get(t) {
      return this.num[t];
    },
    getLength: function getLength() {
      return this.num.length;
    },
    multiply: function multiply(t) {
      for (var e = new Array(this.getLength() + t.getLength() - 1), o = 0; o < this.getLength(); o++) for (var i = 0; i < t.getLength(); i++) e[o + i] ^= y.gexp(y.glog(this.get(o)) + y.glog(t.get(i)));
      return new b(e, 0);
    },
    mod: function mod(t) {
      if (this.getLength() - t.getLength() < 0) return this;
      for (var e = y.glog(this.get(0)) - y.glog(t.get(0)), o = new Array(this.getLength()), i = 0; i < this.getLength(); i++) o[i] = this.get(i);
      for (i = 0; i < t.getLength(); i++) o[i] ^= y.gexp(y.glog(t.get(i)) + e);
      return new b(o, 0).mod(t);
    }
  }, C.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], C.getRSBlocks = function (t, e) {
    var o = C.getRsBlockTable(t, e);
    if (o == h) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
    for (var i = o.length / 3, r = [], n = 0; n < i; n++) for (var a = o[3 * n + 0], s = o[3 * n + 1], l = o[3 * n + 2], u = 0; u < a; u++) r.push(new C(s, l));
    return r;
  }, C.getRsBlockTable = function (t, e) {
    switch (e) {
      case u.L:
        return C.RS_BLOCK_TABLE[4 * (t - 1) + 0];
      case u.M:
        return C.RS_BLOCK_TABLE[4 * (t - 1) + 1];
      case u.Q:
        return C.RS_BLOCK_TABLE[4 * (t - 1) + 2];
      case u.H:
        return C.RS_BLOCK_TABLE[4 * (t - 1) + 3];
      default:
        return h;
    }
  }, A.prototype = {
    get: function get(t) {
      var e = Math.floor(t / 8);
      return 1 == (this.buffer[e] >>> 7 - t % 8 & 1);
    },
    put: function put(t, e) {
      for (var o = 0; o < e; o++) this.putBit(1 == (t >>> e - o - 1 & 1));
    },
    getLengthInBits: function getLengthInBits() {
      return this.length;
    },
    putBit: function putBit(t) {
      var e = Math.floor(this.length / 8);
      this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
    }
  };
  var w = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
  function L() {
    var t = !1,
      e = navigator.userAgent;
    return t = /android/i.test(e) && (t = !0, e = e.toString().match(/android ([0-9]\.[0-9])/i)) && e[1] ? parseFloat(e[1]) : t;
  }
  var O = "undefined" == typeof CanvasRenderingContext2D ? (k.prototype.draw = function (t) {
    var e = this._htOption,
      o = this._el,
      i = t.getModuleCount(),
      r = Math.round(e.width / i),
      n = Math.round((e.height - e.titleHeight) / i),
      a = (n <= 1 && (n = 1), this._htOption.width = (r = r <= 1 ? 1 : r) * i, this._htOption.height = n * i + e.titleHeight, this._htOption.quietZone = Math.round(this._htOption.quietZone), []),
      s = "",
      l = Math.round(r * e.dotScale),
      u = Math.round(n * e.dotScale),
      h = (l < 4 && (u = l = 4), e.colorDark),
      d = e.colorLight;
    e.backgroundImage && (e.autoColor ? (e.colorDark = "rgba(0, 0, 0, .6);filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#99000000', EndColorStr='#99000000');", e.colorLight = "rgba(255, 255, 255, .7);filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#B2FFFFFF', EndColorStr='#B2FFFFFF');") : e.colorLight = "rgba(0,0,0,0)", _ = '<div style="display:inline-block; z-index:-10;position:absolute;"><img src="' + e.backgroundImage + '" widht="' + (e.width + 2 * e.quietZone) + '" height="' + (e.height + 2 * e.quietZone) + '" style="opacity:' + e.backgroundImageAlpha + ";filter:alpha(opacity=" + 100 * e.backgroundImageAlpha + '); "/></div>', a.push(_)), e.quietZone && (s = "display:inline-block; width:" + (e.width + 2 * e.quietZone) + "px; height:" + (e.width + 2 * e.quietZone) + "px;background:" + e.quietZoneColor + "; text-align:center;"), a.push('<div style="font-size:0;' + s + '">'), a.push('<table  style="font-size:0;border:0;border-collapse:collapse; margin-top:' + e.quietZone + 'px;" border="0" cellspacing="0" cellspadding="0" align="center" valign="middle">'), a.push('<tr height="' + e.titleHeight + '" align="center"><td style="border:0;border-collapse:collapse;margin:0;padding:0" colspan="' + i + '">'), e.title && (_ = e.titleColor, s = e.titleFont, a.push('<div style="width:100%;margin-top:' + e.titleTop + "px;color:" + _ + ";font:" + s + ";background:" + e.titleBackgroundColor + '">' + e.title + "</div>")), e.subTitle && a.push('<div style="width:100%;margin-top:' + (e.subTitleTop - e.titleTop) + "px;color:" + e.subTitleColor + "; font:" + e.subTitleFont + '">' + e.subTitle + "</div>"), a.push("</td></tr>");
    for (var c = 0; c < i; c++) {
      a.push('<tr style="border:0; padding:0; margin:0;" height="7">');
      for (var g = 0; g < i; g++) {
        var p = t.isDark(c, g),
          f = t.getEye(c, g);
        f ? (p = f.isDark, f = e[f = f.type] || e[f.substring(0, 2)] || h, a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + r + "px;height:" + n + 'px;"><span style="width:' + r + "px;height:" + n + "px;background-color:" + (p ? f : d) + ';display:inline-block"></span></td>')) : (f = e.colorDark, 6 == c ? (f = e.timing_H || e.timing || h, a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + r + "px;height:" + n + "px;background-color:" + (p ? f : d) + ';"></td>')) : 6 == g ? (f = e.timing_V || e.timing || h, a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + r + "px;height:" + n + "px;background-color:" + (p ? f : d) + ';"></td>')) : a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + r + "px;height:" + n + 'px;"><div style="display:inline-block;width:' + l + "px;height:" + u + "px;background-color:" + (p ? f : e.colorLight) + ';"></div></td>'));
      }
      a.push("</tr>");
    }
    a.push("</table>"), a.push("</div>"), e.logo && (_ = new Image(), null != e.crossOrigin && (_.crossOrigin = e.crossOrigin), _.src = e.logo, (s = e.width / 3.5) != (_ = e.height / 3.5) && (s = _), e.logoWidth && (s = e.logoWidth), e.logoHeight && (_ = e.logoHeight), m = "position:relative; z-index:1;display:table-cell;top:-" + ((e.height - e.titleHeight) / 2 + _ / 2 + e.quietZone) + "px;text-align:center; width:" + s + "px; height:" + _ + "px;line-height:" + s + "px; vertical-align: middle;", e.logoBackgroundTransparent || (m += "background:" + e.logoBackgroundColor), a.push('<div style="' + m + '"><img  src="' + e.logo + '"  style="max-width: ' + s + "px; max-height: " + _ + 'px;" /> <div style=" display: none; width:1px;margin-left: -1px;"></div></div>')), e.onRenderingStart && e.onRenderingStart(e), o.innerHTML = a.join("");
    var m = o.childNodes[0],
      s = (e.width - m.offsetWidth) / 2,
      _ = (e.height - m.offsetHeight) / 2;
    0 < s && 0 < _ && (m.style.margin = _ + "px " + s + "px"), this._htOption.onRenderingEnd && this._htOption.onRenderingEnd(this._htOption, null);
  }, k.prototype.clear = function () {
    this._el.innerHTML = "";
  }, k) : function () {
    function t() {
      if ("svg" == this._htOption.drawer) {
        var t = this._oContext.getSerializedSvg(!0);
        this.dataURL = t, this._el.innerHTML = t;
      } else try {
        var e = this._elCanvas.toDataURL("image/png");
        this.dataURL = e;
      } catch (t) {
        console.error(t);
      }
      this._htOption.onRenderingEnd && (this.dataURL || console.error("Can not get base64 data, please check: 1. Published the page and image to the server 2. The image request support CORS 3. Configured `crossOrigin:'anonymous'` option"), this._htOption.onRenderingEnd(this._htOption, this.dataURL));
    }
    var h, d;
    i._android && i._android <= 2.1 && (h = 1 / window.devicePixelRatio, d = CanvasRenderingContext2D.prototype.drawImage, CanvasRenderingContext2D.prototype.drawImage = function (t, e, o, i, r, n, a, s, l) {
      if ("nodeName" in t && /img/i.test(t.nodeName)) for (var u = arguments.length - 1; 1 <= u; u--) arguments[u] = arguments[u] * h;else void 0 === s && (arguments[1] *= h, arguments[2] *= h, arguments[3] *= h, arguments[4] *= h);
      d.apply(this, arguments);
    });
    function e(t, e) {
      this._bIsPainted = !1, this._android = L(), this._el = t, this._htOption = e, "svg" == this._htOption.drawer ? (this._oContext = {}, this._elCanvas = {}) : (this._elCanvas = document.createElement("canvas"), this._el.appendChild(this._elCanvas), this._oContext = this._elCanvas.getContext("2d")), this._bSupportDataURI = null, this.dataURL = null;
    }
    return e.prototype.draw = function (o) {
      var i,
        c = this._htOption,
        g = (c.title || c.subTitle || (c.height -= c.titleHeight, c.titleHeight = 0), o.getModuleCount()),
        p = Math.round(c.width / g),
        f = Math.round((c.height - c.titleHeight) / g),
        m = (p <= 1 && (p = 1), f <= 1 && (f = 1), c.width = p * g, c.height = f * g + c.titleHeight, c.quietZone = Math.round(c.quietZone), this._elCanvas.width = c.width + 2 * c.quietZone, this._elCanvas.height = c.height + 2 * c.quietZone, "canvas" != this._htOption.drawer && (this._oContext = new C2S(this._elCanvas.width, this._elCanvas.height)), this.clear(), this._oContext),
        r = (m.lineWidth = 0, m.fillStyle = c.colorLight, m.fillRect(0, 0, this._elCanvas.width, this._elCanvas.height), this);
      function _() {
        0 < c.quietZone && c.quietZoneColor && (m.lineWidth = 0, m.fillStyle = c.quietZoneColor, m.fillRect(0, 0, r._elCanvas.width, c.quietZone), m.fillRect(0, c.quietZone, c.quietZone, r._elCanvas.height - 2 * c.quietZone), m.fillRect(r._elCanvas.width - c.quietZone, c.quietZone, c.quietZone, r._elCanvas.height - 2 * c.quietZone), m.fillRect(0, r._elCanvas.height - c.quietZone, r._elCanvas.width, c.quietZone));
      }
      function n(t) {
        c.onRenderingStart && c.onRenderingStart(c);
        for (var u, h, e = 0; e < g; e++) for (var o = 0; o < g; o++) {
          var i,
            r,
            n = o * p + c.quietZone,
            a = e * f + c.quietZone,
            s = t.isDark(e, o),
            l = t.getEye(e, o),
            d = c.dotScale;
          m.lineWidth = 0, l ? (i = c[l.type] || c[l.type.substring(0, 2)] || c.colorDark, r = c.colorLight) : c.backgroundImage ? (r = "rgba(0,0,0,0)", 6 == e ? c.autoColor ? (i = c.timing_H || c.timing || c.autoColorDark, r = c.autoColorLight) : i = c.timing_H || c.timing || c.colorDark : 6 == o ? c.autoColor ? (i = c.timing_V || c.timing || c.autoColorDark, r = c.autoColorLight) : i = c.timing_V || c.timing || c.colorDark : c.autoColor ? (i = c.autoColorDark, r = c.autoColorLight) : i = c.colorDark) : (i = 6 == e ? c.timing_H || c.timing || c.colorDark : 6 == o && (c.timing_V || c.timing) || c.colorDark, r = c.colorLight), m.strokeStyle = s ? i : r, m.fillStyle = s ? i : r, l ? (d = "AO" == l.type ? c.dotScaleAO : "AI" == l.type ? c.dotScaleAI : 1, c.backgroundImage && c.autoColor ? (i = ("AO" == l.type ? c.AI : c.AO) || c.autoColorDark, r = c.autoColorLight) : i = ("AO" == l.type ? c.AI : c.AO) || i, l.isDark) : 6 == e ? d = c.dotScaleTiming_H : 6 == o ? d = c.dotScaleTiming_V : c.backgroundImage, m.fillRect(n + p * (1 - d) / 2, c.titleHeight + a + f * (1 - d) / 2, p * d, f * d), 1 == c.dotScale || l || (m.strokeStyle = c.colorLight);
        }
        c.title && (m.fillStyle = c.titleBackgroundColor, m.fillRect(0, 0, this._elCanvas.width, c.titleHeight + c.quietZone), m.font = c.titleFont, m.fillStyle = c.titleColor, m.textAlign = "center", m.fillText(c.title, this._elCanvas.width / 2, +c.quietZone + c.titleTop)), c.subTitle && (m.font = c.subTitleFont, m.fillStyle = c.subTitleColor, m.fillText(c.subTitle, this._elCanvas.width / 2, +c.quietZone + c.subTitleTop)), c.logo ? (u = new Image(), h = this, u.onload = function () {
          var t, e, o, i, r, n, a, s, l;
          t = u, e = Math.round(c.width / 3.5), o = Math.round(c.height / 3.5), e !== o && (e = o), c.logoMaxWidth ? e = Math.round(c.logoMaxWidth) : c.logoWidth && (e = Math.round(c.logoWidth)), c.logoMaxHeight ? o = Math.round(c.logoMaxHeight) : c.logoHeight && (o = Math.round(c.logoHeight)), s = void 0 === t.naturalWidth ? (a = t.width, t.height) : (a = t.naturalWidth, t.naturalHeight), (c.logoMaxWidth || c.logoMaxHeight) && (c.logoMaxWidth && a <= e && (e = a), c.logoMaxHeight && s <= o && (o = s), a <= e) && s <= o && (e = a, o = s), i = (c.width + 2 * c.quietZone - e) / 2, r = (c.height + c.titleHeight + 2 * c.quietZone - o) / 2, n = Math.min(e / a, o / s), a *= n, s *= n, (c.logoMaxWidth || c.logoMaxHeight) && (i = (c.width + 2 * c.quietZone - (e = a)) / 2, r = (c.height + c.titleHeight + 2 * c.quietZone - (o = s)) / 2), c.logoBackgroundTransparent || (m.fillStyle = c.logoBackgroundColor, m.fillRect(i, r, e, o)), n = m.imageSmoothingQuality, l = m.imageSmoothingEnabled, m.imageSmoothingEnabled = !0, m.imageSmoothingQuality = "high", m.drawImage(t, i + (e - a) / 2, r + (o - s) / 2, a, s), m.imageSmoothingEnabled = l, m.imageSmoothingQuality = n, _(), h._bIsPainted = !0, h.makeImage();
        }, u.onerror = function (t) {
          console.error(t);
        }, null != c.crossOrigin && (u.crossOrigin = c.crossOrigin), u.originalSrc = c.logo, u.src = c.logo) : (_(), this._bIsPainted = !0, this.makeImage());
      }
      c.backgroundImage ? ((i = new Image()).onload = function () {
        m.globalAlpha = 1, m.globalAlpha = c.backgroundImageAlpha;
        var t = m.imageSmoothingQuality,
          e = m.imageSmoothingEnabled;
        m.imageSmoothingEnabled = !0, m.imageSmoothingQuality = "high", m.drawImage(i, 0, c.titleHeight, c.width + 2 * c.quietZone, c.height + 2 * c.quietZone - c.titleHeight), m.imageSmoothingEnabled = e, m.imageSmoothingQuality = t, m.globalAlpha = 1, n.call(r, o);
      }, null != c.crossOrigin && (i.crossOrigin = c.crossOrigin), i.originalSrc = c.backgroundImage, i.src = c.backgroundImage) : n.call(r, o);
    }, e.prototype.makeImage = function () {
      this._bIsPainted && !function (t, e) {
        var o = this;
        o._fFail = e, o._fSuccess = t, null === o._bSupportDataURI ? ((e = document.createElement("img")).onabort = t = function t() {
          o._bSupportDataURI = !1, o._fFail && o._fFail.call(o);
        }, e.onerror = t, e.onload = function () {
          o._bSupportDataURI = !0, o._fSuccess && o._fSuccess.call(o);
        }, e.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==") : !0 === o._bSupportDataURI && o._fSuccess ? o._fSuccess.call(o) : !1 === o._bSupportDataURI && o._fFail && o._fFail.call(o);
      }.call(this, t);
    }, e.prototype.isPainted = function () {
      return this._bIsPainted;
    }, e.prototype.clear = function () {
      this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1;
    }, e.prototype.remove = function () {
      this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1, this._el.innerHTML = "";
    }, e.prototype.round = function (t) {
      return t && Math.floor(1e3 * t) / 1e3;
    }, e;
  }();
  function k(t, e) {
    this._el = t, this._htOption = e;
  }
  function R(t, e) {
    for (var o, i = e.correctLevel, r = 1, n = (t = t, (o = encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a")).length + (o.length != t.length ? 3 : 0)), a = 0, s = w.length; a < s; a++) {
      var l = 0;
      switch (i) {
        case u.L:
          l = w[a][0];
          break;
        case u.M:
          l = w[a][1];
          break;
        case u.Q:
          l = w[a][2];
          break;
        case u.H:
          l = w[a][3];
      }
      if (n <= l) break;
      r++;
    }
    if (w.length < r) throw new Error("Too long data. the CorrectLevel." + ["M", "L", "H", "Q"][i] + " limit length is " + l);
    return 0 != e.version && (r <= e.version ? r = e.version : console.warn("QR Code version " + e.version + " too small, run version use " + r), e.runVersion = r), r;
  }
  (t = function t(_t, e) {
    if (this._htOption = {
      width: 256,
      height: 256,
      typeNumber: 4,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: u.H,
      dotScale: 1,
      dotScaleTiming: 1,
      dotScaleTiming_H: h,
      dotScaleTiming_V: h,
      dotScaleA: 1,
      dotScaleAO: h,
      dotScaleAI: h,
      quietZone: 0,
      quietZoneColor: "rgba(0,0,0,0)",
      title: "",
      titleFont: "normal normal bold 16px Arial",
      titleColor: "#000000",
      titleBackgroundColor: "#ffffff",
      titleHeight: 0,
      titleTop: 30,
      subTitle: "",
      subTitleFont: "normal normal normal 14px Arial",
      subTitleColor: "#4F4F4F",
      subTitleTop: 60,
      logo: h,
      logoWidth: h,
      logoHeight: h,
      logoMaxWidth: h,
      logoMaxHeight: h,
      logoBackgroundColor: "#ffffff",
      logoBackgroundTransparent: !1,
      PO: h,
      PI: h,
      PO_TL: h,
      PI_TL: h,
      PO_TR: h,
      PI_TR: h,
      PO_BL: h,
      PI_BL: h,
      AO: h,
      AI: h,
      timing: h,
      timing_H: h,
      timing_V: h,
      backgroundImage: h,
      backgroundImageAlpha: 1,
      autoColor: !1,
      autoColorDark: "rgba(0, 0, 0, .6)",
      autoColorLight: "rgba(255, 255, 255, .7)",
      onRenderingStart: h,
      onRenderingEnd: h,
      version: 0,
      tooltip: !1,
      binary: !1,
      drawer: "canvas",
      crossOrigin: null,
      utf8WithoutBOM: !0
    }, e = "string" == typeof e ? {
      text: e
    } : e) for (var o in e) this._htOption[o] = e[o];
    (this._htOption.version < 0 || 40 < this._htOption.version) && (console.warn("QR Code version '" + this._htOption.version + "' is invalidate, reset to 0"), this._htOption.version = 0), (this._htOption.dotScale < 0 || 1 < this._htOption.dotScale) && (console.warn(this._htOption.dotScale + " , is invalidate, dotScale must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScale = 1), (this._htOption.dotScaleTiming < 0 || 1 < this._htOption.dotScaleTiming) && (console.warn(this._htOption.dotScaleTiming + " , is invalidate, dotScaleTiming must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleTiming = 1), this._htOption.dotScaleTiming_H ? (this._htOption.dotScaleTiming_H < 0 || 1 < this._htOption.dotScaleTiming_H) && (console.warn(this._htOption.dotScaleTiming_H + " , is invalidate, dotScaleTiming_H must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleTiming_H = 1) : this._htOption.dotScaleTiming_H = this._htOption.dotScaleTiming, this._htOption.dotScaleTiming_V ? (this._htOption.dotScaleTiming_V < 0 || 1 < this._htOption.dotScaleTiming_V) && (console.warn(this._htOption.dotScaleTiming_V + " , is invalidate, dotScaleTiming_V must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleTiming_V = 1) : this._htOption.dotScaleTiming_V = this._htOption.dotScaleTiming, (this._htOption.dotScaleA < 0 || 1 < this._htOption.dotScaleA) && (console.warn(this._htOption.dotScaleA + " , is invalidate, dotScaleA must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleA = 1), this._htOption.dotScaleAO ? (this._htOption.dotScaleAO < 0 || 1 < this._htOption.dotScaleAO) && (console.warn(this._htOption.dotScaleAO + " , is invalidate, dotScaleAO must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleAO = 1) : this._htOption.dotScaleAO = this._htOption.dotScaleA, this._htOption.dotScaleAI ? (this._htOption.dotScaleAI < 0 || 1 < this._htOption.dotScaleAI) && (console.warn(this._htOption.dotScaleAI + " , is invalidate, dotScaleAI must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleAI = 1) : this._htOption.dotScaleAI = this._htOption.dotScaleA, (this._htOption.backgroundImageAlpha < 0 || 1 < this._htOption.backgroundImageAlpha) && (console.warn(this._htOption.backgroundImageAlpha + " , is invalidate, backgroundImageAlpha must between 0 and 1, now reset to 1. "), this._htOption.backgroundImageAlpha = 1), this._htOption.height = this._htOption.height + this._htOption.titleHeight, "string" == typeof _t && (_t = document.getElementById(_t)), this._htOption.drawer && ("svg" == this._htOption.drawer || "canvas" == this._htOption.drawer) || (this._htOption.drawer = "canvas"), this._android = L(), this._el = _t, this._oQRCode = null;
    var i = {};
    for (o in this._htOption) i[o] = this._htOption[o];
    this._oDrawing = new O(this._el, i), this._htOption.text && this.makeCode(this._htOption.text);
  }).prototype.makeCode = function (t) {
    this._oQRCode = new l(R(t, this._htOption), this._htOption.correctLevel), this._oQRCode.addData(t, this._htOption.binary, this._htOption.utf8WithoutBOM), this._oQRCode.make(), this._htOption.tooltip && (this._el.title = t), this._oDrawing.draw(this._oQRCode);
  }, t.prototype.makeImage = function () {
    "function" == typeof this._oDrawing.makeImage && (!this._android || 3 <= this._android) && this._oDrawing.makeImage();
  }, t.prototype.clear = function () {
    this._oDrawing.remove();
  }, t.prototype.resize = function (t, e) {
    this._oDrawing._htOption.width = t, this._oDrawing._htOption.height = e, this._oDrawing.draw(this._oQRCode);
  }, t.prototype.noConflict = function () {
    return i.QRCode === this && (i.QRCode = r), t;
  }, t.CorrectLevel = u,  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return t;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}
var version = "2.7.2",
  formatVersion = version.replace(/\./g, "_");
QRCode(), removeExpiredLocalStorageItems(), getQueryParamsAndSaveToLocalStorage(window.location.href), saveWebReferrer(), window.AF_SMART_SCRIPT = {
  generateOneLinkURL: function generateOneLinkURL() {
    var r,
      t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
        afParameters: {}
      },
      e = t.oneLinkURL,
      o = t.afParameters,
      o = (void 0 === o ? {} : o).mediaSource,
      i = t.referrerSkipList,
      i = void 0 === i ? [] : i,
      n = t.urlSkipList,
      n = void 0 === n ? [] : n,
      a = t.webReferrer;
    return isOneLinkURLValid(e) && isSkipListsValid({
      referrerSkipList: i,
      urlSkipList: n
    }) && validatedMs(o) && (i = getCurrentURLParams(aggregateValuesFromParameters(t.afParameters)), n = validateAndMappedParams(t.afParameters, i)) ? (o = _objectSpread2({
      af_js_web: !0,
      af_ss_ver: window.AF_SMART_SCRIPT.version
    }, n), r = e + stringifyParameters(o).replace("&", "?"), t = JSON.parse(localStorage.getItem(LOCAL_STORAGE_VALUES.SS_WEB_REFERRER)), a && t && isValidUrl(t) && (i = "&".concat(a, "=").concat(t), r = "".concat(r).concat(i)), console.debug("Generated OneLink URL", r), window.AF_SMART_SCRIPT.displayQrCode = function (t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        o = e.logo,
        o = void 0 === o ? "" : o,
        i = e.codeColor,
        i = void 0 === i ? "#000" : i;
      return r ? new QRCode(document.getElementById(t), {
        text: "".concat(r, "&af_ss_qr=").concat(e.logo || e.codeColor ? "c" : "true", " "),
        logo: o,
        colorDark: getHexColorAfterValidation(i),
        logoBackgroundTransparent: !0,
        crossOrigin: "anonymous",
        correctLevel: o ? QRCode.CorrectLevel.Q : QRCode.CorrectLevel.L
      }) : (console.debug("ClickURL is not valid"), null);
    }, createImpressionsLink(r).then(function (e) {
      e && (window.AF_SMART_SCRIPT.fireImpressionsLink = function () {
        var t = new Image(1, 1);
        t.style.display = "none", t.style.position = "absolute", t.style.left = "-1px", t.style.top = "-1px", t.src = e;
      });
    }), {
      clickURL: r
    }) : null;
  },
  generateDirectClickURL: function generateDirectClickURL() {
    var t,
      e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
        afParameters: {},
        referrerSkipList: [],
        urlSkipList: []
      },
      o = e.afParameters,
      o = void 0 === o ? {} : o,
      i = e.referrerSkipList,
      i = void 0 === i ? [] : i,
      r = e.urlSkipList,
      r = void 0 === r ? [] : r,
      n = e.platform,
      a = e.app_id,
      s = e.redirectURL,
      l = o.mediaSource,
      o = o.campaign;
    return l ? o ? a ? s ? (n = null == n ? void 0 : n.toLowerCase(), isPlatformValid(n) ? "string" != typeof a ? (console.error("app_id must be a string"), null) : 0 !== (null == o || null == (t = o.keys) ? void 0 : t.length) || null != o && o.defaultValue ? isSkipListsValid({
      referrerSkipList: i,
      urlSkipList: r
    }) && validatedMs(l) && (t = getCurrentURLParams(aggregateValuesFromParameters(e.afParameters)), i = validateAndMappedParams(e.afParameters, t, !0)) ? (r = _objectSpread2({
      af_js_web: !0,
      af_ss_ver: window.AF_SMART_SCRIPT.version
    }, i), e = stringifyParameters(r).replace("&", "?"), t = "https://engagements.appsflyer.com/v1.0/c2s/click/app/".concat(n), ["ios", "android"].includes(n) && (t = "https://app.appsflyer.com"), i = "".concat(t, "/").concat(a).concat(e, "&af_r=").concat(encodeURIComponent(s)), ["ios", "android"].includes(n) && (i = i.replace("af_media_source", "pid").replace("af_campaign", "c").replace("af_campaign_id", "af_c_id")), console.debug("generate Direct Click URL", i), delete window.AF_SMART_SCRIPT.displayQrCode, delete window.AF_SMART_SCRIPT.fireImpressionsLink, {
      clickURL: i
    }) : null : (console.error("campaign is missing (default value was not supplied), can't generate URL", l), null) : null) : (console.error("redirectURL is missing , can't generate URL", s), null) : (console.error("app_id is missing , can't generate URL", a), null) : (console.error("campaign  is missing , can't generate URL", o), null) : (console.error("mediaSource is missing , can't generate URL", l), null);
  },
  version: formatVersion
};

//Initializing Smart Script arguments
var oneLinkURL = "https://lbxfcil.onelink.me/wlGs";
var mediaSource = {
  keys: ["utm_source"],
  defaultValue: "google"
};
var campaign = {
  keys: ["utm_campaign"]
};
var af_siteid = {
  paramKey: "af_siteid",
  keys: ["utm_mediumtype"]
};
var ad = {
  keys: ["utm_content"]
};
var afSub1 = {
  keys: ["gclid"]
};
var afSub2 = {
  keys: ["utm_term"]
};
var custom_ss_ui = {
  paramKey: "af_ss_ui",
  defaultValue: "true"
};

//Call the function after embedding the code through a global parameter on the window object called window.AF_SMART_SCRIPT.
//Onelink URL is generated.
var result = window.AF_SMART_SCRIPT.generateOneLinkURL({
  oneLinkURL: oneLinkURL,
  afParameters: {
    mediaSource: mediaSource,
    campaign: campaign,
    afCustom: [af_siteid, custom_ss_ui],
    ad: ad,
    afSub1: afSub1,
    afSub2: afSub2
  }
});

// If needed, you can download the script from: https://onelinksmartscript.appsflyer.com/onelink-smart-script-latest.js

// See an example of implementation and how to place the URL result behind a CTA on your website: https://appsflyersdk.github.io/appsflyer-onelink-smart-script/examples/utm_parameters.html?utm_campaign=mycmpn&utm_source=mysource

// See an example of how to display a QR code: https://appsflyersdk.github.io/appsflyer-onelink-smart-script/examples/qr_code.html?inmedia=my_email&incmp=my_campaign

var result_url = "No output from script";
var linksTrack = document.querySelectorAll('.javascript-track');
if (result) {
  result_url = result.clickURL;
  // linksTrack.forEach(function(e) {
  //     e.setAttribute('href', result_url);
  // });

  linksTrack.forEach(function (i) {
    i.setAttribute('href', result_url);
    i.addEventListener('click touchend', function (e) {
      e.preventDefault();
      utag.link({
        "product_category": "store-button",
        "event_type": "click"
      }, function () {
        return location.href = e.target.href;
      });
    });
    setTimeout(function () {
      window.AF_SMART_SCRIPT.fireImpressionsLink();
      // console.log("Impression fired");
    }, 1000);
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/javascript/base.javascript
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
window.addEventListener('load', function () {
  var options = {
    threshold: [0.5]
  };
  var observer = new window.IntersectionObserver(onEntry, options);
  var elements = document.querySelectorAll('.el-animate');
  var _iterator = _createForOfIteratorHelper(elements),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var elm = _step.value;
      observer.observe(elm);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var linksAnchor = document.querySelectorAll('.javascript-scroll');
  var _iterator2 = _createForOfIteratorHelper(linksAnchor),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var link = _step2.value;
      link.onclick = function clickHandler(e) {
        e.preventDefault();
        var href = this.getAttribute('href');
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      };
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});
function onEntry(entry) {
  entry.forEach(function (change) {
    if (change.isIntersecting) {
      change.target.classList.add('el-show');
    }
  });
}
function throttle(fn, wait) {
  var time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}
function parallaxElement(querySelector, percent) {
  return function () {
    var scrolled = window.pageYOffset;
    var parallax = document.querySelector(querySelector);
    var coords = scrolled * (percent / 100) + 'px';
    parallax.style.transform = 'translateY(' + coords + ')';
  };
}
function parallax(querySelector, percent, wait) {
  return throttle(parallaxElement(querySelector, percent), wait);
}
function addLeadingZeros(n, length) {
  var str = (n > 0 ? n : -n) + "";
  var zeros = "";
  for (var i = length - str.length; i > 0; i--) zeros += "0";
  zeros += str;
  return n >= 0 ? zeros : "-" + zeros;
}
function timer() {
  var future = Date.parse("nov 24, 2023 00:00:00");
  var now = new Date();
  var diff = future - now;
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor(diff / (1000 * 60 * 60));
  var mins = Math.floor(diff / (1000 * 60));
  var secs = Math.floor(diff / 1000);
  var d;
  var h;
  var m;
  var s;
  if (diff < 0) {
    d = "00";
    h = "00";
    m = "00";
    s = "00";
  } else {
    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;
  }
  document.getElementById("timer").innerHTML = '<div class="timer__item">' + addLeadingZeros(d, 2) + '<span>days</span></div>' + '<div class="timer__item">' + addLeadingZeros(h, 2) + '<span>hours</span></div>' + '<div class="timer__item">' + addLeadingZeros(m, 2) + '<span>minutes</span></div>' + '<div class="timer__item">' + addLeadingZeros(s, 2) + '<span>seconds</span></div>';
}

;// CONCATENATED MODULE: ./src/javascript/css-props.javascript
var mobHeightMaxSize = 85;
var mobHeightMinSize = 210;
var defaultValueSize = 210;
var mobHeightMaxPosition1 = 255;
var mobHeightMinPosition1 = 355;
var defaultValuePosition1 = 355;
var mobHeightMaxPosition2 = 410;
var mobHeightMinPosition2 = 310;
var defaultValuePosition2 = 310;
var headerTabletMax = 100;
var headerTabletMin = 60;
var headerTabletDefaultValue = 60;
function mobilePercent(wWidth) {
  return (wWidth - 768) / 448 * 100 * -1;
}
function netbookPercent(wWidth) {
  return (wWidth - 1440) / 416 * 100 * -1;
}
function changeCSSProp() {
  var wWidth = window.innerWidth;
  var mobHeightSize = mobilePercent(wWidth) * (mobHeightMaxSize - mobHeightMinSize);
  var mobHeightPosition1 = mobilePercent(wWidth) * (mobHeightMaxPosition1 - mobHeightMinPosition1);
  var mobHeightPosition2 = mobilePercent(wWidth) * (mobHeightMaxPosition2 - mobHeightMinPosition2);
  var headerTablet = netbookPercent(wWidth) * (headerTabletMax - headerTabletMin);
  var resultHeaderTablet = headerTabletMax - (headerTablet / 100 + headerTabletDefaultValue) + headerTabletDefaultValue;
  if (wWidth >= 768 && wWidth <= 1024) {
    resultHeaderTablet += 20;
  }
  document.documentElement.style.setProperty("--height-tablet", "".concat(resultHeaderTablet >= 100 ? 'auto' : resultHeaderTablet + '%'));
  document.documentElement.style.setProperty("--height-mobile-position1", "".concat(mobHeightMaxPosition1 - (mobHeightPosition1 / 100 + defaultValuePosition1) + defaultValuePosition1, "px"));
  document.documentElement.style.setProperty("--height-mobile-position2", "".concat(mobHeightMaxPosition2 - (mobHeightPosition2 / 100 + defaultValuePosition2) + defaultValuePosition2, "%"));
  document.documentElement.style.setProperty("--height-mobile-size", "".concat(mobHeightMaxSize - (mobHeightSize / 100 + defaultValueSize) + defaultValueSize, "%"));
}

;// CONCATENATED MODULE: ./src/javascript/home.javascript


var global = {
  currentYear: new Date().getFullYear()
};
function init() {
  changeCSSProp();
  var yearElement = document.querySelector('.currentYear');
  yearElement.innerHTML = global.currentYear.toString();
}
function listener() {
  // window.addEventListener('scroll', parallax('.deals .diamond img', 20, 14));

  window.onresize = function () {
    changeCSSProp();
  };
}
init();
listener();
// EXTERNAL MODULE: ./src/javascript/smart-script.javascript
var smart_script = __webpack_require__(974);
;// CONCATENATED MODULE: ./src/javascript/app.javascript


/* Your JS Code goes here */

/* Demo JS */



})();

/******/ })()
;