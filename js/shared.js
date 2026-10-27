"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Shared primitives v2: rarity, collections, nicknames, Card, Avatar, TabBar, buttons, icons

// Rarity names match the labels printed on the physical cards
var RARITY = {
  common: {
    name: 'Обычная',
    "short": 'ОБЫЧНАЯ',
    color: '#8B8FA3',
    pts: 1
  },
  rare: {
    name: 'Редкая',
    "short": 'РЕДКАЯ',
    color: '#00D4FF',
    pts: 5
  },
  "super": {
    name: 'Супер редкая',
    "short": 'СУПЕР РЕДКАЯ',
    color: '#B14BFF',
    pts: 20
  },
  ultra: {
    name: 'Ультра редкая',
    "short": 'УЛЬТРА РЕДКАЯ',
    color: '#FFD60A',
    pts: 100
  }
};
var COLLECTIONS = {
  wc: {
    id: 'wc',
    slug: 'wc-2026',
    name: 'Чемпионат Мира 2026',
    "short": 'ЧМ 2026',
    total: 288,
    owned: 87,
    cover: 'wc-081',
    fresh: true,
    found: {
      ultra: 1,
      "super": 1,
      rare: 6
    }
  },
  bar: {
    id: 'bar',
    slug: 'barcelona-25-26',
    name: 'Barcelona 25/26',
    "short": 'Barcelona',
    total: 48,
    owned: 31,
    cover: 'bar-27',
    found: {
      ultra: 0,
      "super": 1,
      rare: 3
    }
  },
  leg: {
    id: 'leg',
    slug: 'legends-4',
    name: 'Легенды 4.0',
    "short": 'Легенды',
    total: 48,
    owned: 12,
    cover: 'leg-01',
    found: {
      ultra: 0,
      "super": 0,
      rare: 1
    }
  },
  best: {
    id: 'best',
    slug: 'best-3',
    name: 'Лучшие из Лучших 3.0',
    "short": 'Лучшие',
    total: 288,
    owned: 0,
    cover: 'best-152',
    found: {
      ultra: 0,
      "super": 0,
      rare: 0
    }
  }
};

// Nicknames are assembled from preset words: no real names, no free text
var ME = {
  nick: 'Быстрый Вингер',
  tag: '2841',
  avatar: 'fox',
  level: 8,
  points: 1240,
  cards: 130
};
var PLAYERS = {
  keeper: {
    nick: 'Ледяной Кипер',
    tag: '117',
    avatar: 'shark'
  },
  striker: {
    nick: 'Золотой Бомбардир',
    tag: '5520',
    avatar: 'tiger'
  },
  maker: {
    nick: 'Хитрый Плеймейкер',
    tag: '8819',
    avatar: 'wolf'
  },
  def: {
    nick: 'Стальной Защитник',
    tag: '1102',
    avatar: 'bear'
  },
  fwd: {
    nick: 'Дерзкий Форвард',
    tag: '7733',
    avatar: 'eagle'
  },
  sniper: {
    nick: 'Тихий Снайпер',
    tag: '3421',
    avatar: 'panda'
  },
  capt: {
    nick: 'Огненный Капитан',
    tag: '0991',
    avatar: 'dragon'
  }
};
var AVATARS = ['fox', 'wolf', 'tiger', 'bear', 'eagle', 'panda', 'shark', 'dragon'];
var AVATAR_RING = {
  fox: '#FF4B2B',
  wolf: '#FF1F2D',
  tiger: '#FF8A00',
  bear: '#2F6BFF',
  eagle: '#FF3B4A',
  panda: '#2ECC55',
  shark: '#00C8FF',
  dragon: '#B14BFF'
};

// ─── NAV CONTEXT (prototype mode; no-op on the canvas) ───────
var NavContext = React.createContext({
  go: function go() {},
  back: function back() {},
  current: null,
  tab: 'album',
  data: null
});
function useNav() {
  return React.useContext(NavContext);
}

// ─── ICONS (24px stroke) ─────────────────────────────────────
function I(_ref) {
  var d = _ref.d,
    fill = _ref.fill,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 22 : _ref$size,
    _ref$sw = _ref.sw,
    sw = _ref$sw === void 0 ? 2 : _ref$sw,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill ? color : 'none',
    stroke: fill ? 'none' : color,
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
var Icons = {
  cards: function cards(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M3 7h11v13H3zM7 4h11v13",
      sw: 2.2
    });
  },
  swap: function swap(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M3 8h14l-3-3M21 16H7l3 3",
      sw: 2.4
    });
  },
  trophy: function trophy(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M8 4h8v5a4 4 0 01-8 0V4zM6 4H3v2a3 3 0 003 3M18 4h3v2a3 3 0 01-3 3M9 14h6v3l1 4H8l1-4v-3z",
      sw: 2.2
    });
  },
  user: function user(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0",
      sw: 2.2
    });
  },
  shirt: function shirt(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M8 3l-5 3 2 5 2-1v11h10V10l2 1 2-5-5-3c-.5 1.7-2 3-4 3s-3.5-1.3-4-3z",
      sw: 2.1
    });
  },
  plus: function plus(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M12 5v14M5 12h14",
      sw: 2.8
    });
  },
  scan: function scan(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M4 8V5a1 1 0 011-1h3M16 4h3a1 1 0 011 1v3M20 16v3a1 1 0 01-1 1h-3M8 20H5a1 1 0 01-1-1v-3M4 12h16",
      sw: 2.4
    });
  },
  qr: function qr(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z",
      sw: 1.8
    });
  },
  bolt: function bolt(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M13 2L4 14h7l-1 8 9-12h-7l1-8z",
      fill: true,
      sw: 0
    });
  },
  star: function star(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M12 2l3 7 7 .6-5.4 4.7L18 22l-6-4-6 4 1.4-7.7L2 9.6 9 9z",
      fill: true,
      sw: 0
    });
  },
  lock: function lock(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M6 10V8a6 6 0 1112 0v2M4 10h16v11H4z",
      sw: 2.1
    });
  },
  key: function key(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M14.5 9.5a4.5 4.5 0 10-1.3 3.2L21 20.5M17 16.5l2-2M19 18.5l2-2",
      sw: 2.2
    });
  },
  shield: function shield(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4",
      sw: 2.1
    });
  },
  back: function back(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M15 6l-6 6 6 6",
      sw: 2.6
    });
  },
  close: function close(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M6 6l12 12M18 6L6 18",
      sw: 2.6
    });
  },
  more: function more(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M5 12h.01M12 12h.01M19 12h.01",
      sw: 3
    });
  },
  chev: function chev(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M9 6l6 6-6 6",
      sw: 2.4
    });
  },
  fire: function fire(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M12 2s5 4 5 9a5 5 0 11-10 0c0-2 1-3 2-4 0 2 2 3 3 1 0-3-2-4 0-6z",
      fill: true,
      sw: 0
    });
  },
  check: function check(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M4 12l5 5L20 6",
      sw: 3
    });
  },
  filter: function filter(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M3 5h18M6 12h12M10 19h4",
      sw: 2.4
    });
  },
  search: function search(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-5-5",
      sw: 2.2
    });
  },
  flash: function flash(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M7 2h10l-3 7h4L9 22l2-9H7z",
      sw: 2
    });
  },
  dice: function dice(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zM8 8h.01M16 8h.01M12 12h.01M8 16h.01M16 16h.01",
      sw: 2.4
    });
  },
  download: function download(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M12 3v12M7 10l5 5 5-5M4 19h16",
      sw: 2.4
    });
  },
  print: function print(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M7 9V3h10v6M7 17H4v-7h16v7h-3M7 14h10v7H7z",
      sw: 2.1
    });
  },
  share: function share(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M12 3v12M7 8l5-5 5 5M5 13v6a2 2 0 002 2h10a2 2 0 002-2v-6",
      sw: 2.2
    });
  },
  users: function users(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M9 11a4 4 0 100-8 4 4 0 000 8zM2 21a7 7 0 0114 0M16 3.5a4 4 0 010 7.5M18 14a6 6 0 014 6",
      sw: 2.1
    });
  },
  cart: function cart(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M3 4h2l2.5 11h11L21 7H7M9 20h.01M18 20h.01",
      sw: 2.3
    });
  },
  info: function info(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M12 22a10 10 0 100-20 10 10 0 000 20zM12 11v6M12 7h.01",
      sw: 2.2
    });
  },
  eye: function eye(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 100-6 3 3 0 000 6z",
      sw: 2
    });
  },
  crown: function crown(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M3 18L2 7l5.5 4L12 4l4.5 7L22 7l-1 11z",
      fill: true,
      sw: 0
    });
  },
  gift: function gift(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M4 11h16v10H4zM2 7h20v4H2zM12 7v14M12 7c-1-3-5-4-5-1.5S10 7 12 7zM12 7c1-3 5-4 5-1.5S14 7 12 7z",
      sw: 2
    });
  },
  ext: function ext(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5",
      sw: 2.2
    });
  },
  copy: function copy(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M8 8h12v12H8zM16 8V4H4v12h4",
      sw: 2.1
    });
  },
  ball: function ball(p) {
    return /*#__PURE__*/React.createElement(I, {
      size: p.size,
      color: p.color,
      d: "M12 3a9 9 0 100 18 9 9 0 000-18zM12 8l3.4 2.5-1.3 4H9.9l-1.3-4zM12 3v5M15.4 10.5L20 9M14.1 14.5l2.7 4.2M9.9 14.5l-2.7 4.2M8.6 10.5L4 9",
      sw: 1.9
    });
  }
};

// ─── PSEUDO QR (deterministic, decorative) ───────────────────
function QR(_ref2) {
  var _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? 160 : _ref2$size,
    _ref2$seed = _ref2.seed,
    seed = _ref2$seed === void 0 ? 7 : _ref2$seed,
    _ref2$color = _ref2.color,
    color = _ref2$color === void 0 ? '#08080C' : _ref2$color,
    _ref2$bg = _ref2.bg,
    bg = _ref2$bg === void 0 ? '#fff' : _ref2$bg;
  var n = 25,
    cell = size / n;
  var s = seed * 9301 + 49297;
  var rnd = function rnd() {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  var finder = function finder(x, y) {
    return x < 7 && y < 7 || x >= n - 7 && y < 7 || x < 7 && y >= n - 7;
  };
  var rects = [];
  for (var y = 0; y < n; y++) for (var x = 0; x < n; x++) {
    if (finder(x, y)) continue;
    if (rnd() > 0.52) rects.push(/*#__PURE__*/React.createElement("rect", {
      key: x + '-' + y,
      x: x * cell,
      y: y * cell,
      width: cell + 0.3,
      height: cell + 0.3,
      fill: color
    }));
  }
  var eye = function eye(x, y) {
    return /*#__PURE__*/React.createElement("g", {
      key: 'e' + x + y
    }, /*#__PURE__*/React.createElement("rect", {
      x: x * cell,
      y: y * cell,
      width: 7 * cell,
      height: 7 * cell,
      fill: color,
      rx: cell * 1.4
    }), /*#__PURE__*/React.createElement("rect", {
      x: (x + 1) * cell,
      y: (y + 1) * cell,
      width: 5 * cell,
      height: 5 * cell,
      fill: bg,
      rx: cell
    }), /*#__PURE__*/React.createElement("rect", {
      x: (x + 2) * cell,
      y: (y + 2) * cell,
      width: 3 * cell,
      height: 3 * cell,
      fill: color,
      rx: cell * 0.6
    }));
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 ".concat(size, " ").concat(size),
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("rect", {
    width: size,
    height: size,
    fill: bg
  }), rects, eye(0, 0), eye(n - 7, 0), eye(0, n - 7));
}

// ─── CARD BACK (not collected yet) ───────────────────────────
function CardBack(_ref3) {
  var num = _ref3.num,
    _ref3$total = _ref3.total,
    total = _ref3$total === void 0 ? 288 : _ref3$total,
    w = _ref3.w;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(160deg, #1a0608 0%, #0c0c12 60%, #08080c 100%)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'repeating-linear-gradient(135deg, rgba(255,31,45,0.07) 0 10px, transparent 10px 24px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: Math.max(18, w * 0.3),
      color: 'rgba(255,255,255,0.1)'
    }
  }, num), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: Math.max(5, w * 0.06),
      left: Math.max(6, w * 0.08),
      fontFamily: 'Unbounded',
      fontWeight: 800,
      fontSize: Math.max(7, w * 0.075),
      color: 'rgba(255,255,255,0.28)'
    }
  }, num, "/", total), w > 70 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: Math.max(6, w * 0.07),
      left: 0,
      right: 0,
      textAlign: 'center',
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: Math.max(7, w * 0.07),
      color: 'rgba(255,31,45,0.4)',
      letterSpacing: '0.15em'
    }
  }, "DRAXSUS"));
}

// ─── CARD ────────────────────────────────────────────────────
// Real card art with rarity glow. `locked` shows the back with the card number.
function Card(_ref4) {
  var id = _ref4.id,
    num = _ref4.num,
    total = _ref4.total,
    _ref4$locked = _ref4.locked,
    locked = _ref4$locked === void 0 ? false : _ref4$locked,
    _ref4$w = _ref4.w,
    w = _ref4$w === void 0 ? 100 : _ref4$w,
    _ref4$glow = _ref4.glow,
    glow = _ref4$glow === void 0 ? true : _ref4$glow,
    _ref4$dupes = _ref4.dupes,
    dupes = _ref4$dupes === void 0 ? 0 : _ref4$dupes,
    onClick = _ref4.onClick,
    style = _ref4.style;
  var data = id ? CARDS[id] : null;
  var rarity = data ? data.rarity : 'common';
  var r = RARITY[rarity];
  var land = data && data.land;
  var height = land ? Math.round(w * 0.63) : Math.round(w * 1.59);
  var radius = Math.max(5, w * 0.05);
  var hot = !locked && glow && (rarity === 'super' || rarity === 'ultra');
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: _objectSpread({
      position: 'relative',
      width: w,
      height: height,
      flexShrink: 0,
      cursor: onClick ? 'pointer' : 'default'
    }, style)
  }, hot && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -5,
      borderRadius: radius + 5,
      background: r.color,
      opacity: 0.45,
      filter: 'blur(14px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: radius,
      overflow: 'hidden',
      background: '#0a0a12',
      boxShadow: "0 ".concat(height > 200 ? 14 : 5, "px ").concat(height > 200 ? 28 : 12, "px rgba(0,0,0,0.55)")
    }
  }, locked ? /*#__PURE__*/React.createElement(CardBack, {
    num: num !== null && num !== void 0 ? num : data && data.num,
    total: total,
    w: w
  }) : /*#__PURE__*/React.createElement("img", {
    src: data.img,
    alt: data.name,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), !locked && rarity !== 'common' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: radius,
      boxShadow: "inset 0 0 0 ".concat(w > 150 ? 2 : 1.5, "px ").concat(r.color)
    }
  })), dupes > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -5,
      right: -5,
      minWidth: 22,
      height: 22,
      padding: '0 5px',
      borderRadius: 11,
      background: 'var(--red)',
      border: '2px solid #08080C',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: 9,
      color: '#fff'
    }
  }, "\xD7", dupes + 1));
}

// ─── AVATAR (generated mascot set) ───────────────────────────
function Avatar(_ref5) {
  var _ref5$name = _ref5.name,
    name = _ref5$name === void 0 ? 'fox' : _ref5$name,
    _ref5$size = _ref5.size,
    size = _ref5$size === void 0 ? 44 : _ref5$size,
    _ref5$ring = _ref5.ring,
    ring = _ref5$ring === void 0 ? true : _ref5$ring,
    style = _ref5.style;
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({
      width: size,
      height: size,
      borderRadius: '50%',
      flexShrink: 0,
      position: 'relative',
      boxShadow: ring ? "0 0 0 2px ".concat(AVATAR_RING[name], ", 0 0 14px ").concat(AVATAR_RING[name], "66") : undefined
    }, style)
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/avatars/".concat(name, ".png"),
    alt: "",
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'block'
    }
  }));
}
function Nick(_ref6) {
  var p = _ref6.p,
    _ref6$size = _ref6.size,
    size = _ref6$size === void 0 ? 13 : _ref6$size,
    _ref6$color = _ref6.color,
    color = _ref6$color === void 0 ? '#fff' : _ref6$color,
    _ref6$tagColor = _ref6.tagColor,
    tagColor = _ref6$tagColor === void 0 ? 'var(--tx-3)' : _ref6$tagColor;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Manrope',
      fontWeight: 800,
      fontSize: size,
      color: color,
      whiteSpace: 'nowrap'
    }
  }, p.nick, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: tagColor,
      fontWeight: 700
    }
  }, p.tag));
}

// ─── PROGRESS ────────────────────────────────────────────────
function Progress(_ref7) {
  var value = _ref7.value,
    total = _ref7.total,
    _ref7$color = _ref7.color,
    color = _ref7$color === void 0 ? 'var(--red)' : _ref7$color,
    _ref7$height = _ref7.height,
    height = _ref7$height === void 0 ? 6 : _ref7$height;
  var pct = Math.max(0, Math.min(100, value / total * 100));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: height,
      borderRadius: height,
      background: 'rgba(255,255,255,0.08)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "".concat(pct, "%"),
      height: '100%',
      borderRadius: height,
      background: color,
      boxShadow: "0 0 10px ".concat(color)
    }
  }));
}

// ─── BUTTON ──────────────────────────────────────────────────
function Btn(_ref8) {
  var children = _ref8.children,
    _ref8$kind = _ref8.kind,
    kind = _ref8$kind === void 0 ? 'primary' : _ref8$kind,
    icon = _ref8.icon,
    full = _ref8.full,
    sm = _ref8.sm,
    onClick = _ref8.onClick,
    style = _ref8.style;
  var k = {
    primary: {
      bg: 'var(--red)',
      col: '#fff',
      glow: '0 8px 24px rgba(255,31,45,0.45)',
      border: 'none'
    },
    gold: {
      bg: '#FFD60A',
      col: '#0a0a0a',
      glow: '0 8px 24px rgba(255,214,10,0.4)',
      border: 'none'
    },
    ghost: {
      bg: 'rgba(255,255,255,0.06)',
      col: '#fff',
      glow: 'none',
      border: '1px solid rgba(255,255,255,0.12)'
    },
    white: {
      bg: '#fff',
      col: '#0a0a0a',
      glow: 'none',
      border: 'none'
    }
  }[kind];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: _objectSpread({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      width: full ? '100%' : undefined,
      minWidth: 0,
      flexShrink: full ? 1 : 0,
      height: sm ? 40 : 54,
      padding: full ? '0 12px' : sm ? '0 16px' : '0 24px',
      borderRadius: sm ? 12 : 16,
      background: k.bg,
      color: k.col,
      border: k.border,
      boxShadow: k.glow,
      fontFamily: 'Unbounded',
      fontWeight: 700,
      fontSize: sm ? 11 : 14,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      cursor: 'pointer',
      boxSizing: 'border-box',
      whiteSpace: 'nowrap'
    }, style)
  }, icon, children);
}
function IconBtn(_ref9) {
  var children = _ref9.children,
    onClick = _ref9.onClick,
    _ref9$size = _ref9.size,
    size = _ref9$size === void 0 ? 40 : _ref9$size;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      width: size,
      height: size,
      borderRadius: 12,
      flexShrink: 0,
      cursor: 'pointer',
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.09)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, children);
}

// ─── SEGMENTED CONTROL ───────────────────────────────────────
function Segment(_ref0) {
  var items = _ref0.items,
    _ref0$active = _ref0.active,
    active = _ref0$active === void 0 ? 0 : _ref0$active,
    onPick = _ref0.onPick;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 4,
      borderRadius: 14,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.07)',
      display: 'flex',
      gap: 4
    }
  }, items.map(function (t, i) {
    var on = i === active;
    var _ref1 = Array.isArray(t) ? t : [t],
      _ref10 = _slicedToArray(_ref1, 2),
      label = _ref10[0],
      count = _ref10[1];
    return /*#__PURE__*/React.createElement("div", {
      key: label,
      onClick: function onClick() {
        return onPick && onPick(i);
      },
      style: {
        flex: 1,
        height: 36,
        borderRadius: 11,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        cursor: 'pointer',
        background: on ? 'var(--red)' : 'transparent',
        boxShadow: on ? '0 4px 14px rgba(255,31,45,0.35)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Unbounded',
        fontWeight: 700,
        fontSize: 10.5,
        color: on ? '#fff' : 'var(--tx-3)',
        letterSpacing: '0.03em',
        textTransform: 'uppercase'
      }
    }, label), count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Manrope',
        fontWeight: 800,
        fontSize: 11,
        color: on ? 'rgba(255,255,255,0.75)' : 'var(--tx-4)'
      }
    }, count));
  }));
}
function Chip(_ref11) {
  var children = _ref11.children,
    _ref11$color = _ref11.color,
    color = _ref11$color === void 0 ? '#fff' : _ref11$color,
    bg = _ref11.bg,
    border = _ref11.border,
    style = _ref11.style;
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '5px 10px',
      borderRadius: 999,
      background: bg || 'rgba(255,255,255,0.06)',
      border: "1px solid ".concat(border || 'rgba(255,255,255,0.1)'),
      fontFamily: 'Unbounded',
      fontWeight: 700,
      fontSize: 9.5,
      color: color,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }, style)
  }, children);
}
function RarityBadge(_ref12) {
  var _ref12$rarity = _ref12.rarity,
    rarity = _ref12$rarity === void 0 ? 'common' : _ref12$rarity,
    sm = _ref12.sm;
  var r = RARITY[rarity];
  return /*#__PURE__*/React.createElement(Chip, {
    color: r.color,
    bg: "".concat(r.color, "1c"),
    border: "".concat(r.color, "55"),
    style: sm ? {
      fontSize: 8.5,
      padding: '4px 8px'
    } : undefined
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 6,
      background: r.color,
      boxShadow: "0 0 8px ".concat(r.color)
    }
  }), r["short"]);
}
function Label(_ref13) {
  var children = _ref13.children,
    style = _ref13.style;
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 10.5,
      color: 'var(--tx-3)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase'
    }, style)
  }, children);
}
function H(_ref14) {
  var children = _ref14.children,
    _ref14$size = _ref14.size,
    size = _ref14$size === void 0 ? 26 : _ref14$size,
    style = _ref14.style;
  return /*#__PURE__*/React.createElement("div", {
    className: "t-d",
    style: _objectSpread({
      fontSize: size,
      lineHeight: 1,
      color: '#fff',
      textTransform: 'uppercase'
    }, style)
  }, children);
}
function Panel(_ref15) {
  var children = _ref15.children,
    style = _ref15.style,
    glow = _ref15.glow;
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 20,
      padding: 16,
      background: 'linear-gradient(135deg, #191926 0%, #0d0d15 100%)',
      border: '1px solid rgba(255,255,255,0.07)'
    }, style)
  }, glow && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -60,
      right: -60,
      width: 200,
      height: 200,
      borderRadius: '50%',
      background: "radial-gradient(circle, ".concat(glow, " 0%, transparent 62%)")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, children));
}

// ─── TAB BAR (4 tabs + center scan button) ───────────────────
function TabBar(_ref16) {
  var _ref16$active = _ref16.active,
    active = _ref16$active === void 0 ? 'album' : _ref16$active;
  var nav = useNav();
  var tabs = [{
    id: 'album',
    label: 'Альбом',
    icon: Icons.cards
  }, {
    id: 'game',
    label: 'Игра',
    icon: Icons.ball
  }, {
    id: 'scan'
  }, {
    id: 'trades',
    label: 'Обмены',
    icon: Icons.swap
  }, {
    id: 'top',
    label: 'Топ',
    icon: Icons.trophy
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 5,
      height: 92,
      paddingTop: 8,
      background: 'linear-gradient(0deg, #060609 70%, rgba(6,6,9,0.0) 100%)',
      display: 'flex'
    }
  }, tabs.map(function (t) {
    if (t.id === 'scan') return /*#__PURE__*/React.createElement("div", {
      key: "scan",
      onClick: function onClick() {
        return nav.go('scan');
      },
      style: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: -18,
        width: 60,
        height: 60,
        borderRadius: 20,
        background: 'var(--red)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(255,31,45,0.55), 0 0 0 5px #08080C'
      }
    }, /*#__PURE__*/React.createElement(Icons.scan, {
      size: 28,
      color: "#fff"
    })));
    var on = t.id === active;
    var Ic = t.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: t.id,
      onClick: function onClick() {
        return nav.go(t.id);
      },
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        paddingTop: 6,
        position: 'relative',
        cursor: 'pointer'
      }
    }, on && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -2,
        width: 26,
        height: 3,
        borderRadius: 2,
        background: 'var(--red)',
        boxShadow: '0 0 8px var(--red)'
      }
    }), /*#__PURE__*/React.createElement(Ic, {
      size: 22,
      color: on ? '#fff' : '#55556A'
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Manrope',
        fontSize: 10,
        fontWeight: 700,
        color: on ? '#fff' : '#55556A'
      }
    }, t.label));
  }));
}

// ─── TOP BAR: title + avatar (profile entry) ─────────────────
function TopBar(_ref17) {
  var title = _ref17.title,
    left = _ref17.left,
    right = _ref17.right;
  var nav = useNav();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px',
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, left || (title ? /*#__PURE__*/React.createElement(H, {
    size: 26
  }, title) : /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-white.png",
    alt: "DRAXSUS",
    style: {
      height: 22,
      width: 'auto'
    }
  })), right || /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return nav.go('profile');
    },
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: ME.avatar,
    size: 36
  })));
}

// ─── SCREEN SHELL ────────────────────────────────────────────
function Screen(_ref18) {
  var children = _ref18.children,
    _ref18$bg = _ref18.bg,
    bg = _ref18$bg === void 0 ? '#08080C' : _ref18$bg,
    tab = _ref18.tab,
    _ref18$padTop = _ref18.padTop,
    padTop = _ref18$padTop === void 0 ? 58 : _ref18$padTop,
    _ref18$flare = _ref18.flare,
    flare = _ref18$flare === void 0 ? true : _ref18$flare;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: bg,
      overflow: 'hidden'
    }
  }, flare && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -140,
      right: -100,
      width: 380,
      height: 380,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,40,55,0.16) 0%, transparent 62%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      paddingTop: padTop,
      paddingBottom: tab ? 96 : 34,
      overflow: 'hidden'
    }
  }, children), tab && /*#__PURE__*/React.createElement(TabBar, {
    active: tab
  }));
}
Object.assign(window, {
  RARITY: RARITY,
  COLLECTIONS: COLLECTIONS,
  ME: ME,
  PLAYERS: PLAYERS,
  AVATARS: AVATARS,
  AVATAR_RING: AVATAR_RING,
  NavContext: NavContext,
  useNav: useNav,
  Icons: Icons,
  QR: QR,
  CardBack: CardBack,
  Card: Card,
  Avatar: Avatar,
  Nick: Nick,
  Progress: Progress,
  Btn: Btn,
  IconBtn: IconBtn,
  Segment: Segment,
  Chip: Chip,
  RarityBadge: RarityBadge,
  Label: Label,
  H: H,
  Panel: Panel,
  TabBar: TabBar,
  TopBar: TopBar,
  Screen: Screen
});