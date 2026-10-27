"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Onboarding v2 — no registration: 3 intro screens, nickname builder, collector code

function Dots(_ref) {
  var _ref$count = _ref.count,
    count = _ref$count === void 0 ? 5 : _ref$count,
    _ref$active = _ref.active,
    active = _ref$active === void 0 ? 0 : _ref$active;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      justifyContent: 'center'
    }
  }, Array.from({
    length: count
  }).map(function (_, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        width: i === active ? 22 : 6,
        height: 6,
        borderRadius: 6,
        background: i === active ? 'var(--red)' : 'rgba(255,255,255,0.15)'
      }
    });
  }));
}
function OnbShell(_ref2) {
  var children = _ref2.children,
    cta = _ref2.cta,
    ghost = _ref2.ghost,
    active = _ref2.active,
    onNext = _ref2.onNext,
    onGhost = _ref2.onGhost,
    _ref2$skip = _ref2.skip,
    skip = _ref2$skip === void 0 ? true : _ref2$skip;
  var nav = useNav();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: '#08080C',
      paddingTop: 58,
      paddingBottom: 40,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -100,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 520,
      height: 420,
      background: 'radial-gradient(ellipse, rgba(255,31,45,0.24) 0%, transparent 60%)',
      pointerEvents: 'none'
    }
  }), skip && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return nav.go('nick');
    },
    style: {
      position: 'absolute',
      top: 64,
      right: 20,
      zIndex: 3,
      cursor: 'pointer',
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 12,
      color: 'var(--tx-3)',
      letterSpacing: '0.08em'
    }
  }, "\u041F\u0420\u041E\u041F\u0423\u0421\u0422\u0418\u0422\u042C"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Dots, {
    active: active
  }), /*#__PURE__*/React.createElement(Btn, {
    full: true,
    onClick: onNext
  }, cta), ghost && /*#__PURE__*/React.createElement("div", {
    onClick: onGhost,
    style: {
      textAlign: 'center',
      fontFamily: 'Manrope',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--tx-3)',
      padding: '4px 0',
      cursor: 'pointer'
    }
  }, ghost)));
}
function StepBadge(_ref3) {
  var n = _ref3.n;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 14,
      background: 'rgba(255,31,45,0.12)',
      border: '1px solid rgba(255,31,45,0.32)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Unbounded',
      fontWeight: 800,
      fontSize: 20,
      color: 'var(--red)'
    }
  }, n);
}

// ─── 1.1 WELCOME ─────────────────────────────────────────────
function Onb1() {
  var nav = useNav();
  return /*#__PURE__*/React.createElement(OnbShell, {
    active: 0,
    cta: "\u0414\u0430\u043B\u044C\u0448\u0435",
    onNext: function onNext() {
      return nav.go('onb2');
    },
    ghost: "\u0415\u0441\u0442\u044C \u043A\u043E\u0434 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u0430? \u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u2192",
    onGhost: function onGhost() {
      return nav.go('collCode');
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 34,
      left: 0,
      right: 0,
      height: 330
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 22,
      top: 44,
      transform: 'rotate(-13deg)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    id: "leg-01",
    w: 128
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 22,
      top: 44,
      transform: 'rotate(13deg)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    id: "bar-48",
    w: 128
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 0,
      transform: 'translateX(-50%)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    id: "wc-081",
    w: 172
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 18,
      left: 24,
      right: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-white.png",
    alt: "DRAXSUS",
    style: {
      height: 34,
      width: 'auto',
      display: 'block',
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement(H, {
    size: 38,
    style: {
      lineHeight: 0.95
    }
  }, "\u041B\u043E\u0432\u0438", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red)'
    }
  }, "\u043A\u0430\u0436\u0434\u0443\u044E"), /*#__PURE__*/React.createElement("br", null), "\u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontFamily: 'Manrope',
      fontSize: 15,
      lineHeight: 1.45,
      color: 'var(--tx-2)',
      maxWidth: 300
    }
  }, "\u0421\u043E\u0431\u0438\u0440\u0430\u0439 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438 DRAXSUS, \u043D\u0430\u0445\u043E\u0434\u0438 \u0440\u0435\u0434\u043A\u0438\u0435 \u0438 \u043F\u043E\u043F\u0430\u0434\u0430\u0439 \u0432 \u0417\u0430\u043B \u0441\u043B\u0430\u0432\u044B.")));
}

// ─── 1.2 HOW TO COLLECT: scan + rare code ────────────────────
function Onb2() {
  var nav = useNav();
  return /*#__PURE__*/React.createElement(OnbShell, {
    active: 1,
    cta: "\u041F\u043E\u043D\u044F\u0442\u043D\u043E",
    onNext: function onNext() {
      return nav.go('onb3');
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: '14px 24px'
    }
  }, /*#__PURE__*/React.createElement(StepBadge, {
    n: "01"
  }), /*#__PURE__*/React.createElement(H, {
    size: 29,
    style: {
      marginTop: 16,
      lineHeight: 0.98
    }
  }, "\u041D\u0430\u0432\u0435\u0434\u0438 \u043A\u0430\u043C\u0435\u0440\u0443", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red)'
    }
  }, "\u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430", /*#__PURE__*/React.createElement("br", null), "\u0432 \u0430\u043B\u044C\u0431\u043E\u043C\u0435")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      gap: 14,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1.15,
      height: 210,
      borderRadius: 18,
      overflow: 'hidden',
      position: 'relative',
      border: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/scan-desk.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.75
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 22,
      transform: 'translateX(-50%) rotate(-4deg)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    id: "bar-40",
    w: 92
  })), /*#__PURE__*/React.createElement(ScanCorners, {
    inset: 14
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 10,
      right: 10,
      bottom: 10,
      padding: '6px 8px',
      borderRadius: 10,
      background: 'rgba(8,8,12,0.85)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 8,
      background: '#2ECC55',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icons.check, {
    size: 10,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Manrope',
      fontWeight: 800,
      fontSize: 10.5,
      color: '#fff'
    }
  }, "\u211640 \xB7 DUO"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 210,
      borderRadius: 18,
      padding: 12,
      position: 'relative',
      background: 'linear-gradient(160deg, rgba(255,214,10,0.14), rgba(255,214,10,0.02))',
      border: '1px solid rgba(255,214,10,0.3)'
    }
  }, /*#__PURE__*/React.createElement(Label, {
    style: {
      color: '#FFD60A'
    }
  }, "\u0420\u0435\u0434\u043A\u0438\u0435"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      height: 120,
      borderRadius: 10,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at 50% 45%, rgba(255,214,10,0.28), transparent 70%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'rotate(-4deg)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    id: "wc-081",
    w: 66
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 6,
      bottom: 8,
      padding: '3px 7px',
      borderRadius: 8,
      background: '#FFD60A',
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: 10,
      color: '#000'
    }
  }, "7-\u0439")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 9,
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 11,
      lineHeight: 1.3,
      color: '#fff'
    }
  }, "\u041D\u0430\u0439\u0434\u0438 \u043F\u0435\u0440\u0432\u044B\u043C \u2014", /*#__PURE__*/React.createElement("br", null), "\u043F\u043E\u043F\u0430\u0434\u0438 \u0432 \u0417\u0430\u043B \u0441\u043B\u0430\u0432\u044B"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontFamily: 'Manrope',
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--tx-2)'
    }
  }, "\u0412\u0441\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0441\u043A\u0430\u043D\u043E\u043C. \u0420\u0435\u0434\u043A\u0438\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0443\u0437\u043D\u0430\u0451\u0442 \u0441\u0430\u043C\u043E: \u043D\u0430\u0439\u0434\u0438 \u0438\u0445 \u0440\u0430\u043D\u044C\u0448\u0435 \u0434\u0440\u0443\u0433\u0438\u0445 \u0438 \u043F\u043E\u043F\u0430\u0434\u0438 \u0432 \u0417\u0430\u043B \u0441\u043B\u0430\u0432\u044B.")));
}

// ─── 1.3 TRADE & COMPETE ─────────────────────────────────────
function Onb3() {
  var nav = useNav();
  var rows = [{
    p: PLAYERS.keeper,
    pts: '4 820',
    medal: '#FFD60A',
    rank: 1
  }, {
    p: ME,
    pts: '1 240',
    medal: '#B4B4C4',
    rank: 2,
    you: true
  }, {
    p: PLAYERS.striker,
    pts: '1 190',
    medal: '#CD7F32',
    rank: 3
  }];
  return /*#__PURE__*/React.createElement(OnbShell, {
    active: 2,
    cta: "\u0414\u0430\u043B\u044C\u0448\u0435",
    onNext: function onNext() {
      return nav.go('nick');
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: '14px 24px'
    }
  }, /*#__PURE__*/React.createElement(StepBadge, {
    n: "02"
  }), /*#__PURE__*/React.createElement(H, {
    size: 30,
    style: {
      marginTop: 16,
      lineHeight: 0.98
    }
  }, "\u041C\u0435\u043D\u044F\u0439\u0441\u044F,", /*#__PURE__*/React.createElement("br", null), "\u0441\u043E\u0440\u0435\u0432\u043D\u0443\u0439\u0441\u044F,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red)'
    }
  }, "\u0432\u044B\u0438\u0433\u0440\u044B\u0432\u0430\u0439")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, rows.map(function (r) {
    return /*#__PURE__*/React.createElement("div", {
      key: r.rank,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        borderRadius: 14,
        background: r.you ? 'rgba(255,31,45,0.1)' : 'rgba(255,255,255,0.03)',
        border: "1px solid ".concat(r.you ? 'rgba(255,31,45,0.4)' : 'rgba(255,255,255,0.06)')
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 26,
        height: 26,
        borderRadius: 8,
        background: r.medal,
        color: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Unbounded',
        fontWeight: 900,
        fontSize: 12
      }
    }, r.rank), /*#__PURE__*/React.createElement(Avatar, {
      name: r.p.avatar,
      size: 34,
      ring: false
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Nick, {
      p: r.p,
      size: 13
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Manrope',
        fontSize: 11,
        color: 'var(--tx-3)'
      }
    }, r.pts, " \u043E\u0447\u043A\u043E\u0432")), r.you && /*#__PURE__*/React.createElement(Chip, {
      color: "#fff",
      bg: "var(--red)",
      border: "var(--red)"
    }, "\u0422\u044B"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: '14px',
      borderRadius: 16,
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 5,
      borderRadius: 8,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(QR, {
    size: 46,
    seed: 3
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Unbounded',
      fontWeight: 700,
      fontSize: 12,
      color: '#fff',
      letterSpacing: '0.04em'
    }
  }, "\u041C\u0415\u041D\u042F\u0419\u0421\u042F \u0412\u0416\u0418\u0412\u0423\u042E"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3,
      fontFamily: 'Manrope',
      fontSize: 12,
      lineHeight: 1.35,
      color: 'var(--tx-3)'
    }
  }, "\u041F\u043E\u043A\u0430\u0436\u0438 QR \u0434\u0440\u0443\u0433\u0443, \u0438 \u043E\u0431\u043C\u0435\u043D \u0433\u043E\u0442\u043E\u0432. \u0411\u0435\u0437 \u0447\u0430\u0442\u043E\u0432 \u0438 \u043D\u0435\u0437\u043D\u0430\u043A\u043E\u043C\u0446\u0435\u0432.")))));
}

// ─── 1.4 NICKNAME BUILDER ────────────────────────────────────
var NICK_A = ['Быстрый', 'Ледяной', 'Золотой', 'Хитрый', 'Стальной', 'Дерзкий'];
var NICK_B = ['Вингер', 'Кипер', 'Бомбардир', 'Защитник', 'Плеймейкер', 'Капитан'];
function PickRow(_ref4) {
  var title = _ref4.title,
    items = _ref4.items,
    active = _ref4.active,
    onPick = _ref4.onPick;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 9,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 7
    }
  }, items.map(function (w, i) {
    var on = i === active;
    return /*#__PURE__*/React.createElement("div", {
      key: w,
      onClick: function onClick() {
        return onPick(i);
      },
      style: {
        padding: '8px 12px',
        borderRadius: 11,
        cursor: 'pointer',
        background: on ? 'var(--red)' : 'rgba(255,255,255,0.05)',
        border: "1px solid ".concat(on ? 'var(--red)' : 'rgba(255,255,255,0.09)'),
        fontFamily: 'Manrope',
        fontWeight: 800,
        fontSize: 13,
        color: on ? '#fff' : 'var(--tx-2)'
      }
    }, w);
  })));
}
function NickBuilder() {
  var nav = useNav();
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    a = _React$useState2[0],
    setA = _React$useState2[1];
  var _React$useState3 = React.useState(0),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    b = _React$useState4[0],
    setB = _React$useState4[1];
  var _React$useState5 = React.useState(0),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    av = _React$useState6[0],
    setAv = _React$useState6[1];
  var shuffle = function shuffle() {
    setA(Math.floor(Math.random() * 6));
    setB(Math.floor(Math.random() * 6));
    setAv(Math.floor(Math.random() * 8));
  };
  return /*#__PURE__*/React.createElement(OnbShell, {
    active: 3,
    cta: "\u0414\u0430\u043B\u044C\u0448\u0435",
    onNext: function onNext() {
      return nav.go('collCode');
    },
    skip: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: '8px 20px'
    }
  }, /*#__PURE__*/React.createElement(Label, {
    style: {
      color: 'var(--red)'
    }
  }, "\u0428\u0430\u0433 1 \u0438\u0437 2"), /*#__PURE__*/React.createElement(H, {
    size: 28,
    style: {
      marginTop: 8
    }
  }, "\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439 \u043D\u0438\u043A"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: 'Manrope',
      fontSize: 13,
      color: 'var(--tx-3)'
    }
  }, "\u0411\u0435\u0437 \u0438\u043C\u0451\u043D \u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043E\u0432: \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0438\u043A \u0438 \u0430\u0432\u0430\u0442\u0430\u0440."), /*#__PURE__*/React.createElement(Panel, {
    glow: "rgba(255,31,45,0.35)",
    style: {
      marginTop: 16,
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: AVATARS[av],
    size: 64
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Label, null, "\u0422\u0432\u043E\u0439 \u043D\u0438\u043A"), /*#__PURE__*/React.createElement("div", {
    className: "t-d",
    style: {
      marginTop: 4,
      fontSize: 17,
      lineHeight: 1.1,
      color: '#fff',
      textTransform: 'uppercase'
    }
  }, NICK_A[a], " ", NICK_B[b]), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3,
      fontFamily: 'Unbounded',
      fontWeight: 700,
      fontSize: 12,
      color: 'var(--tx-3)'
    }
  }, "#2841")), /*#__PURE__*/React.createElement("div", {
    onClick: shuffle,
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(IconBtn, null, /*#__PURE__*/React.createElement(Icons.dice, {
    size: 20,
    color: "#fff"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(PickRow, {
    title: "\u041A\u0430\u043A\u043E\u0439 \u0442\u044B?",
    items: NICK_A,
    active: a,
    onPick: setA
  }), /*#__PURE__*/React.createElement(PickRow, {
    title: "\u041A\u0435\u043C \u0438\u0433\u0440\u0430\u0435\u0448\u044C?",
    items: NICK_B,
    active: b,
    onPick: setB
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "\u0410\u0432\u0430\u0442\u0430\u0440"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 1fr)',
      gap: 6
    }
  }, AVATARS.map(function (n, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: n,
      onClick: function onClick() {
        return setAv(i);
      },
      style: {
        cursor: 'pointer',
        opacity: i === av ? 1 : 0.55
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: n,
      size: 38,
      ring: i === av
    }));
  }))))));
}

// ─── 1.5 COLLECTOR CODE (instead of a password) ──────────────
function CollectorId(_ref5) {
  var compact = _ref5.compact;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 22,
      overflow: 'hidden',
      padding: compact ? 14 : 18,
      background: 'linear-gradient(145deg, #2a0a10 0%, #12121c 45%, #0b0b12 100%)',
      border: '1px solid rgba(255,31,45,0.35)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 40px rgba(255,31,45,0.15)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'repeating-linear-gradient(135deg, rgba(255,31,45,0.05) 0 12px, transparent 12px 28px)'
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
      height: 16,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement(Label, {
    style: {
      color: 'rgba(255,255,255,0.5)',
      fontSize: 9
    }
  }, "ID \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u0430")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 16,
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 7,
      borderRadius: 12,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(QR, {
    size: compact ? 92 : 104,
    seed: 11
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: ME.avatar,
    size: 38
  }), /*#__PURE__*/React.createElement("div", {
    className: "t-d",
    style: {
      marginTop: 8,
      fontSize: 14,
      lineHeight: 1.1,
      color: '#fff',
      textTransform: 'uppercase'
    }
  }, ME.nick), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Unbounded',
      fontWeight: 700,
      fontSize: 11,
      color: 'var(--tx-3)',
      marginTop: 2
    }
  }, "#", ME.tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 14,
      padding: '10px 12px',
      borderRadius: 12,
      background: 'rgba(0,0,0,0.45)',
      border: '1px dashed rgba(255,255,255,0.18)',
      fontFamily: 'JetBrains Mono',
      fontWeight: 700,
      fontSize: 19,
      color: '#fff',
      letterSpacing: '0.12em',
      textAlign: 'center'
    }
  }, "DRX-7K4P-92QF"));
}
function CollectorCode() {
  var nav = useNav();
  return /*#__PURE__*/React.createElement(OnbShell, {
    active: 4,
    cta: "\u042F \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u043B \u2014 \u0432 \u0430\u043B\u044C\u0431\u043E\u043C",
    onNext: function onNext() {
      return nav.go('album');
    },
    skip: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: '8px 20px'
    }
  }, /*#__PURE__*/React.createElement(Label, {
    style: {
      color: 'var(--red)'
    }
  }, "\u0428\u0430\u0433 2 \u0438\u0437 2"), /*#__PURE__*/React.createElement(H, {
    size: 26,
    style: {
      marginTop: 8,
      lineHeight: 1
    }
  }, "\u0422\u0432\u043E\u0439 \u043A\u043E\u0434", /*#__PURE__*/React.createElement("br", null), "\u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'Manrope',
      fontSize: 13,
      lineHeight: 1.45,
      color: 'var(--tx-2)'
    }
  }, "\u042D\u0442\u043E \u043A\u043B\u044E\u0447 \u043E\u0442 \u0442\u0432\u043E\u0435\u0439 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438 \u0432\u043C\u0435\u0441\u0442\u043E \u043F\u0430\u0440\u043E\u043B\u044F. \u0421\u043C\u0435\u043D\u0438\u0448\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u2014 \u0432\u0432\u0435\u0434\u0438 \u043A\u043E\u0434, \u0438 \u0432\u0441\u0451 \u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(CollectorId, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    kind: "ghost",
    sm: true,
    full: true,
    icon: /*#__PURE__*/React.createElement(Icons.download, {
      size: 16,
      color: "#fff"
    })
  }, "\u0412 \u0433\u0430\u043B\u0435\u0440\u0435\u044E"), /*#__PURE__*/React.createElement(Btn, {
    kind: "ghost",
    sm: true,
    full: true,
    icon: /*#__PURE__*/React.createElement(Icons.print, {
      size: 16,
      color: "#fff"
    })
  }, "\u0420\u0430\u0441\u043F\u0435\u0447\u0430\u0442\u0430\u0442\u044C")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: '10px 12px',
      borderRadius: 12,
      background: 'rgba(255,214,10,0.08)',
      border: '1px solid rgba(255,214,10,0.25)',
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icons.shield, {
    size: 18,
    color: "#FFD60A"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Manrope',
      fontSize: 12,
      lineHeight: 1.4,
      color: 'var(--tx-2)'
    }
  }, "\u041F\u043E\u043A\u0430\u0436\u0438 \u043A\u043E\u0434 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F\u043C. \u0414\u0440\u0443\u0437\u044C\u044F\u043C \u0435\u0433\u043E \u043D\u0435 \u0434\u0430\u0432\u0430\u0439: \u0434\u043B\u044F \u043E\u0431\u043C\u0435\u043D\u043E\u0432 \u0435\u0441\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 QR."))));
}
Object.assign(window, {
  Dots: Dots,
  OnbShell: OnbShell,
  StepBadge: StepBadge,
  Onb1: Onb1,
  Onb2: Onb2,
  Onb3: Onb3,
  NickBuilder: NickBuilder,
  CollectorId: CollectorId,
  CollectorCode: CollectorCode
});