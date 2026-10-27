"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Adding cards v3: every card is added by the camera scan. The app knows the rarity from the catalogue;
// a rare find gets its moment (unlock) and a place in the Hall of fame (finding). No codes on the cards.

function ScanCorners(_ref) {
  var _ref$inset = _ref.inset,
    inset = _ref$inset === void 0 ? 30 : _ref$inset,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#fff' : _ref$color,
    _ref$len = _ref.len,
    len = _ref$len === void 0 ? 26 : _ref$len,
    top = _ref.top,
    bottom = _ref.bottom;
  var s = {
    position: 'absolute',
    width: len,
    height: len,
    borderColor: color,
    borderStyle: 'solid',
    borderWidth: 0
  };
  var t = top !== null && top !== void 0 ? top : inset,
    b = bottom !== null && bottom !== void 0 ? bottom : inset;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, s), {}, {
      top: t,
      left: inset,
      borderTopWidth: 3,
      borderLeftWidth: 3,
      borderTopLeftRadius: 10
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, s), {}, {
      top: t,
      right: inset,
      borderTopWidth: 3,
      borderRightWidth: 3,
      borderTopRightRadius: 10
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, s), {}, {
      bottom: b,
      left: inset,
      borderBottomWidth: 3,
      borderLeftWidth: 3,
      borderBottomLeftRadius: 10
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, s), {}, {
      bottom: b,
      right: inset,
      borderBottomWidth: 3,
      borderRightWidth: 3,
      borderBottomRightRadius: 10
    })
  }));
}

// One scan for every card: rare ones are recognised from the catalogue, no codes to type in
function ScanHint() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '9px 14px',
      borderRadius: 999,
      background: 'rgba(8,8,12,0.75)',
      border: '1px solid rgba(255,255,255,0.12)',
      fontFamily: 'Unbounded',
      fontWeight: 700,
      fontSize: 10,
      color: 'rgba(255,255,255,0.8)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, /*#__PURE__*/React.createElement(Icons.star, {
    size: 13,
    color: "#FFD60A"
  }), "\u0420\u0435\u0434\u043A\u0438\u0435 \u0443\u0437\u043D\u0430\u0451\u043C \u0441\u0430\u043C\u0438");
}

// ─── 3.1 CAMERA SCAN + recognized sheet ──────────────────────
function Scan() {
  var nav = useNav();
  return /*#__PURE__*/React.createElement(Screen, {
    padTop: 0,
    flare: false,
    bg: "#000"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/scan-desk.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 70% 45% at 50% 40%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 150,
      transform: 'translateX(-50%) rotate(-5deg)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    id: "bar-40",
    w: 176,
    glow: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 82,
      right: 82,
      top: 128,
      height: 318
    }
  }, /*#__PURE__*/React.createElement(ScanCorners, {
    inset: 0,
    color: "#2ECC55",
    len: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 6,
      right: 6,
      top: 150,
      height: 2,
      background: '#2ECC55',
      boxShadow: '0 0 16px #2ECC55'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 58,
      left: 20,
      right: 20,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(IconBtn, {
    onClick: function onClick() {
      return nav.back();
    }
  }, /*#__PURE__*/React.createElement(Icons.close, {
    size: 20,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 14px',
      borderRadius: 999,
      background: 'rgba(8,8,12,0.7)',
      fontFamily: 'Unbounded',
      fontWeight: 700,
      fontSize: 11,
      color: '#fff',
      letterSpacing: '0.06em'
    }
  }, "\u041D\u0410\u0412\u0415\u0414\u0418 \u041D\u0410 \u041A\u0410\u0420\u0422\u041E\u0427\u041A\u0423"), /*#__PURE__*/React.createElement(IconBtn, null, /*#__PURE__*/React.createElement(Icons.flash, {
    size: 18,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 470,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(ScanHint, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 30,
      borderRadius: 26,
      padding: 16,
      background: 'rgba(14,14,22,0.96)',
      border: '1px solid rgba(46,204,85,0.4)',
      boxShadow: '0 -10px 40px rgba(0,0,0,0.5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    id: "bar-40",
    w: 62,
    glow: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 9,
      background: '#2ECC55',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icons.check, {
    size: 11,
    color: "#fff"
  })), /*#__PURE__*/React.createElement(Label, {
    style: {
      color: '#2ECC55'
    }
  }, "\u0420\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043E")), /*#__PURE__*/React.createElement("div", {
    className: "t-d",
    style: {
      marginTop: 6,
      fontSize: 16,
      color: '#fff',
      textTransform: 'uppercase'
    }
  }, "\u211640 \xB7 DUO"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3,
      fontFamily: 'Manrope',
      fontSize: 12,
      color: 'var(--tx-2)'
    }
  }, "Barcelona 25/26 \xB7 \u0424\u0440\u0435\u043D\u043A\u0438 \u0438 \u041F\u0435\u0434\u0440\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(RarityBadge, {
    rarity: "rare",
    sm: true
  }), /*#__PURE__*/React.createElement(Chip, {
    style: {
      fontSize: 8.5,
      padding: '4px 8px'
    },
    color: "#2ECC55",
    bg: "rgba(46,204,85,0.12)",
    border: "rgba(46,204,85,0.4)"
  }, "\u041D\u043E\u0432\u0430\u044F \xB7 +5")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    full: true,
    onClick: function onClick() {
      return nav.go('albumWc');
    }
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0430\u043B\u044C\u0431\u043E\u043C"))));
}

// ─── 3.2 UNLOCK — a rare find ────────────────────────────────
function Unlock() {
  var nav = useNav();
  return /*#__PURE__*/React.createElement(Screen, {
    padTop: 0,
    flare: false,
    bg: "#04040A"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle at 50% 40%, rgba(255,214,10,0.36) 0%, rgba(255,31,45,0.16) 32%, transparent 66%)'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      opacity: 0.16
    },
    viewBox: "0 0 390 844"
  }, Array.from({
    length: 24
  }).map(function (_, i) {
    var a = i * Math.PI / 12;
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: "195",
      y1: "330",
      x2: 195 + Math.cos(a) * 700,
      y2: 330 + Math.sin(a) * 700,
      stroke: "#FFD60A",
      strokeWidth: "1.5"
    });
  })), Array.from({
    length: 16
  }).map(function (_, i) {
    var x = 30 + i * 53 % 330,
      y = 110 + i * 89 % 560,
      s = 3 + i * 7 % 5,
      c = ['#FFD60A', '#FF1F2D', '#fff', '#FFD60A'][i % 4];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'absolute',
        left: x,
        top: y,
        width: s,
        height: s,
        borderRadius: s,
        background: c,
        boxShadow: "0 0 ".concat(s * 2, "px ").concat(c)
      }
    });
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 74,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 20px',
      borderRadius: 999,
      background: 'rgba(255,214,10,0.14)',
      border: '1.5px solid #FFD60A',
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: 13,
      color: '#FFD60A',
      letterSpacing: '0.16em',
      boxShadow: '0 0 30px rgba(255,214,10,0.5)'
    }
  }, "\u2605 \u0423\u041B\u042C\u0422\u0420\u0410 \u0420\u0415\u0414\u041A\u0410\u042F \u2605")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 132,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'rotate(-3deg)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    id: "wc-081",
    w: 214
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 498,
      left: 20,
      right: 20,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(H, {
    size: 25
  }, "\u0425\u0451\u0439\u0441\u0435\u043D \xB7 \u041F\u0430\u0447\u043E"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 12,
      color: 'var(--tx-2)',
      letterSpacing: '0.05em'
    }
  }, "\u211681 \xB7 \u0427\u0415\u041C\u041F\u0418\u041E\u041D\u0410\u0422 \u041C\u0418\u0420\u0410 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 572,
      left: 20,
      right: 20,
      padding: '12px 14px',
      borderRadius: 16,
      background: 'rgba(255,214,10,0.08)',
      border: '1px solid rgba(255,214,10,0.35)',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      minWidth: 58
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: 26,
      color: '#FFD60A',
      lineHeight: 1
    }
  }, "7-\u0439"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 9,
      color: 'var(--tx-3)',
      marginTop: 3
    }
  }, "\u041D\u0410\u0428\u0401\u041B")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: 'Manrope',
      fontSize: 13,
      lineHeight: 1.35,
      color: '#fff'
    }
  }, "\u0422\u044B ", /*#__PURE__*/React.createElement("b", null, "7-\u0439"), ", \u043A\u0442\u043E \u043D\u0430\u0448\u0451\u043B \u044D\u0442\u0443 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443. \u0422\u044B \u0443\u0436\u0435 \u0432 \u0417\u0430\u043B\u0435 \u0441\u043B\u0430\u0432\u044B."), /*#__PURE__*/React.createElement(Chip, {
    color: "#000",
    bg: "#FFD60A",
    border: "#FFD60A"
  }, "+100")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 38,
      left: 20,
      right: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    full: true,
    kind: "gold",
    icon: /*#__PURE__*/React.createElement(Icons.crown, {
      size: 18,
      color: "#000"
    }),
    onClick: function onClick() {
      return nav.go('finding');
    }
  }, "\u041C\u043E\u044F \u043D\u0430\u0445\u043E\u0434\u043A\u0430"), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return nav.go('scan');
    },
    style: {
      textAlign: 'center',
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--tx-3)',
      cursor: 'pointer'
    }
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")));
}

// ─── 3.3 FINDING — the place in the Hall of fame ─────────────
// Without a code on the card the app can't tell copies apart, so it records the find, not ownership of a copy:
// who found the card and in which order. One card counts once per collector.
function Finding() {
  var nav = useNav();
  var row = function row(k, v) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '9px 0',
        borderTop: '1px solid rgba(255,214,10,0.14)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Manrope',
        fontSize: 12,
        color: 'rgba(255,255,255,0.55)'
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Manrope',
        fontWeight: 800,
        fontSize: 12.5,
        color: '#fff'
      }
    }, v));
  };
  return /*#__PURE__*/React.createElement(Screen, {
    padTop: 58
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(IconBtn, {
    onClick: function onClick() {
      return nav.go('albumWc');
    }
  }, /*#__PURE__*/React.createElement(Icons.back, {
    size: 20,
    color: "#fff"
  })), /*#__PURE__*/React.createElement(Label, null, "\u041D\u0430\u0445\u043E\u0434\u043A\u0430"), /*#__PURE__*/React.createElement(IconBtn, null, /*#__PURE__*/React.createElement(Icons.share, {
    size: 18,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '16px 20px 0',
      borderRadius: 24,
      padding: 3,
      background: 'linear-gradient(135deg, #FFE66B, #B8860B 40%, #FFD60A 60%, #8a6500)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 21,
      padding: '18px 18px 14px',
      background: 'linear-gradient(170deg, #1c1606 0%, #0d0b05 60%, #0a0a0a 100%)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -80,
      right: -80,
      width: 240,
      height: 240,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,214,10,0.25), transparent 62%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-white.png",
    alt: "DRAXSUS",
    style: {
      height: 15,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement(Label, {
    style: {
      color: '#FFD60A',
      fontSize: 9
    }
  }, "\u0417\u0430\u043B \u0441\u043B\u0430\u0432\u044B")), /*#__PURE__*/React.createElement("div", {
    className: "t-d",
    style: {
      position: 'relative',
      marginTop: 14,
      fontSize: 19,
      lineHeight: 1.05,
      color: '#FFD60A',
      textTransform: 'uppercase'
    }
  }, "\u041D\u0430\u0445\u043E\u0434\u043A\u0430", /*#__PURE__*/React.createElement("br", null), "\u0432 \u0417\u0430\u043B\u0435 \u0441\u043B\u0430\u0432\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 14,
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    id: "wc-081",
    w: 96
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(RarityBadge, {
    rarity: "ultra",
    sm: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "t-d",
    style: {
      marginTop: 8,
      fontSize: 15,
      color: '#fff',
      textTransform: 'uppercase',
      lineHeight: 1.1
    }
  }, "\u0425\u0451\u0439\u0441\u0435\u043D \xB7 \u041F\u0430\u0447\u043E"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontFamily: 'Manrope',
      fontSize: 11.5,
      color: 'var(--tx-2)'
    }
  }, "\u211681 \xB7 \u0427\u041C 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: 24,
      color: '#fff',
      lineHeight: 1
    }
  }, "7", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--tx-3)'
    }
  }, "-\u0439")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 9.5,
      color: 'var(--tx-3)',
      marginTop: 2,
      letterSpacing: '0.1em'
    }
  }, "\u041A\u0422\u041E \u041D\u0410\u0428\u0401\u041B"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 14
    }
  }, row('Нашёл', "".concat(ME.nick, " ").concat(ME.tag)), row('Дата находки', '22.10.2026'), row('Первым нашёл', "".concat(PLAYERS.keeper.nick, " ").concat(PLAYERS.keeper.tag))))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '14px 20px 0',
      padding: '12px 14px',
      borderRadius: 14,
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icons.swap, {
    size: 20,
    color: "var(--red)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Manrope',
      fontSize: 12.5,
      lineHeight: 1.45,
      color: 'var(--tx-2)'
    }
  }, "\u041A\u0430\u0436\u0434\u0430\u044F \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0437\u0430\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0442\u0435\u0431\u0435 \u043E\u0434\u0438\u043D \u0440\u0430\u0437. \u041E\u0431\u043C\u0435\u043D\u044F\u0435\u0448\u044C\u0441\u044F \u0432\u0436\u0438\u0432\u0443\u044E \u2014 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043F\u0435\u0440\u0435\u0435\u0434\u0435\u0442 \u043A \u0434\u0440\u0443\u0433\u0443, \u0430 \u0442\u0432\u043E\u044F \u043D\u0430\u0445\u043E\u0434\u043A\u0430 \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0441\u044F \u0432 \u0417\u0430\u043B\u0435 \u0441\u043B\u0430\u0432\u044B.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 38,
      left: 20,
      right: 20,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    kind: "ghost",
    full: true,
    icon: /*#__PURE__*/React.createElement(Icons.crown, {
      size: 16,
      color: "#FFD60A"
    }),
    onClick: function onClick() {
      return nav.go('registry');
    }
  }, "\u0417\u0430\u043B \u0441\u043B\u0430\u0432\u044B"), /*#__PURE__*/React.createElement(Btn, {
    kind: "primary",
    full: true,
    onClick: function onClick() {
      return nav.go('albumWc');
    }
  }, "\u0412 \u0430\u043B\u044C\u0431\u043E\u043C")));
}
Object.assign(window, {
  ScanCorners: ScanCorners,
  ScanHint: ScanHint,
  Scan: Scan,
  Unlock: Unlock,
  Finding: Finding
});