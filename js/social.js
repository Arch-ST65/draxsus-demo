"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Social v2: in-person trades (QR), leaderboard, feed (emoji only), profile

// ─── 6.1 TRADES ──────────────────────────────────────────────
function TradeSide(_ref) {
  var label = _ref.label,
    id = _ref.id;
  var c = CARDS[id];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 9,
      borderRadius: 12,
      background: 'rgba(255,255,255,0.03)',
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Card, {
    id: id,
    w: 32,
    glow: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 8.5,
      color: 'var(--tx-3)',
      letterSpacing: '0.1em'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Unbounded',
      fontWeight: 700,
      fontSize: 11,
      color: '#fff',
      marginTop: 3
    }
  }, "\u2116", c.num)));
}
function Trades() {
  var nav = useNav();
  var matches = [{
    p: PLAYERS.keeper,
    give: 'wc-082',
    get: 'wc-074',
    since: 'друг с 3 окт'
  }, {
    p: PLAYERS.maker,
    give: 'wc-078',
    get: 'wc-080',
    since: 'друг с 11 сен'
  }];
  return /*#__PURE__*/React.createElement(Screen, {
    tab: "trades"
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "\u041E\u0431\u043C\u0435\u043D\u044B"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return nav.go('tradeQr');
    },
    style: {
      padding: '12px 14px',
      borderRadius: 16,
      cursor: 'pointer',
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      background: 'linear-gradient(135deg, rgba(255,31,45,0.22), rgba(255,31,45,0.06))',
      border: '1px solid rgba(255,31,45,0.45)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 4,
      borderRadius: 8,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(QR, {
    size: 34,
    seed: 5
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
      letterSpacing: '0.03em'
    }
  }, "\u041E\u0411\u041C\u0415\u041D\u042F\u0422\u042C\u0421\u042F \u0412\u0416\u0418\u0412\u0423\u042E"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3,
      fontFamily: 'Manrope',
      fontSize: 11.5,
      color: 'var(--tx-2)'
    }
  }, "QR \u043F\u0440\u0438 \u0432\u0441\u0442\u0440\u0435\u0447\u0435 \u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435. \u0411\u0435\u0437 \u0447\u0430\u0442\u043E\u0432")), /*#__PURE__*/React.createElement(Icons.chev, {
    size: 16,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Segment, {
    items: [['Мои дубли', 7], ['Ищу', 201]],
    active: 0
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      gap: 10
    }
  }, [['wc-074', 1], ['wc-080', 2], ['bar-29', 1], ['leg-12', 1]].map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      id = _ref3[0],
      d = _ref3[1];
    return /*#__PURE__*/React.createElement(Card, {
      key: id,
      id: id,
      w: 60,
      dupes: d,
      glow: false
    });
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 95,
      borderRadius: 6,
      border: '1px dashed rgba(255,255,255,0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Unbounded',
      fontWeight: 800,
      fontSize: 11,
      color: 'var(--tx-3)'
    }
  }, "+3")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(H, {
    size: 15
  }, "\u0421\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement(Chip, {
    color: "#00D4FF",
    bg: "rgba(0,212,255,0.1)",
    border: "rgba(0,212,255,0.3)"
  }, "\u0434\u0440\u0443\u0437\u044C\u044F \xB7 2 \u043D\u043E\u0432\u044B\u0445")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, matches.map(function (m, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: 12,
        borderRadius: 18,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: m.p.avatar,
      size: 30,
      ring: false
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Nick, {
      p: m.p,
      size: 12.5
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Manrope',
        fontSize: 10.5,
        color: 'var(--tx-3)'
      }
    }, m.since))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(TradeSide, {
      label: "\u0422\u042B \u041F\u041E\u041B\u0423\u0427\u0418\u0428\u042C",
      id: m.give
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--red)',
        fontFamily: 'Unbounded',
        fontWeight: 900,
        fontSize: 16
      }
    }, "\u21C4"), /*#__PURE__*/React.createElement(TradeSide, {
      label: "\u0422\u042B \u041E\u0422\u0414\u0410\u0428\u042C",
      id: m.get
    })));
  }))));
}

// ─── 6.2 TRADE QR ────────────────────────────────────────────
function TradeQr() {
  var nav = useNav();
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
      return nav.go('trades');
    }
  }, /*#__PURE__*/React.createElement(Icons.back, {
    size: 20,
    color: "#fff"
  })), /*#__PURE__*/React.createElement(Label, null, "\u041E\u0431\u043C\u0435\u043D \u0432\u0436\u0438\u0432\u0443\u044E"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(H, {
    size: 24
  }, "\u041F\u043E\u043A\u0430\u0436\u0438 QR \u0434\u0440\u0443\u0433\u0443"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'Manrope',
      fontSize: 13,
      color: 'var(--tx-2)'
    }
  }, "\u041F\u0443\u0441\u0442\u044C \u043E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0435\u0442 \u0435\u0433\u043E \u0432 \u0441\u0432\u043E\u0451\u043C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '20px auto 0',
      width: 250,
      padding: 16,
      borderRadius: 26,
      background: '#fff',
      boxShadow: '0 0 0 6px rgba(255,31,45,0.25), 0 20px 50px rgba(255,31,45,0.25)'
    }
  }, /*#__PURE__*/React.createElement(QR, {
    size: 218,
    seed: 21
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: ME.avatar,
    size: 24,
    ring: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Manrope',
      fontWeight: 800,
      fontSize: 13,
      color: '#0a0a0a'
    }
  }, ME.nick, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#888'
    }
  }, ME.tag)))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '18px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(Label, null, "\u0422\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0448\u044C"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 9,
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, ['wc-074', 'wc-080'].map(function (id) {
    return /*#__PURE__*/React.createElement(Card, {
      key: id,
      id: id,
      w: 50,
      glow: false
    });
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 80,
      borderRadius: 6,
      border: '1.5px dashed rgba(255,255,255,0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icons.plus, {
    size: 18,
    color: "var(--tx-3)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: 13,
      color: '#fff'
    }
  }, "2 \u0434\u0443\u0431\u043B\u044F"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Manrope',
      fontSize: 11,
      color: 'var(--tx-3)',
      marginTop: 2
    }
  }, "QR \u0436\u0438\u0432\u0451\u0442 5 \u043C\u0438\u043D\u0443\u0442")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 38,
      left: 20,
      right: 20
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    full: true,
    kind: "ghost",
    icon: /*#__PURE__*/React.createElement(Icons.scan, {
      size: 18,
      color: "#fff"
    }),
    onClick: function onClick() {
      return nav.go('tradeConfirm');
    }
  }, "\u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C QR \u0434\u0440\u0443\u0433\u0430")));
}

// ─── 6.3 TRADE CONFIRM ───────────────────────────────────────
function TradeConfirm() {
  var nav = useNav();
  var side = function side(title, id, who, ok) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: 12,
        borderRadius: 18,
        background: 'rgba(255,255,255,0.03)',
        border: "1px solid ".concat(ok ? 'rgba(46,204,85,0.45)' : 'rgba(255,255,255,0.07)'),
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Label, {
      style: {
        fontSize: 9
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '10px auto 0',
        width: 104
      }
    }, /*#__PURE__*/React.createElement(Card, {
      id: id,
      w: 104
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        fontFamily: 'Manrope',
        fontWeight: 800,
        fontSize: 12,
        color: '#fff'
      }
    }, "\u2116", CARDS[id].num, " \xB7 ", CARDS[id].name.split(' · ')[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        fontFamily: 'Manrope',
        fontWeight: 700,
        fontSize: 11,
        color: ok ? '#2ECC55' : 'var(--tx-3)'
      }
    }, ok ? /*#__PURE__*/React.createElement(Icons.check, {
      size: 12,
      color: "#2ECC55"
    }) : /*#__PURE__*/React.createElement(Icons.info, {
      size: 12,
      color: "var(--tx-3)"
    }), who));
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
      return nav.go('tradeQr');
    }
  }, /*#__PURE__*/React.createElement(Icons.close, {
    size: 20,
    color: "#fff"
  })), /*#__PURE__*/React.createElement(Label, null, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(H, {
    size: 24
  }, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438 \u043E\u0431\u043C\u0435\u043D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 12px',
      borderRadius: 14,
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: PLAYERS.keeper.avatar,
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Nick, {
    p: PLAYERS.keeper
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Manrope',
      fontSize: 11,
      color: 'var(--tx-3)'
    }
  }, "\u0440\u044F\u0434\u043E\u043C \u0441 \u0442\u043E\u0431\u043E\u0439 \xB7 \u0434\u0440\u0443\u0433"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, side('Ты отдаёшь', 'wc-074', 'ты подтвердил', true), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--red)',
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: 18
    }
  }, "\u21C4"), side('Ты получаешь', 'wc-163', 'ждём друга', false)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: '11px 12px',
      borderRadius: 14,
      background: 'rgba(0,212,255,0.07)',
      border: '1px solid rgba(0,212,255,0.3)',
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icons.shield, {
    size: 18,
    color: "#00D4FF"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Manrope',
      fontSize: 12,
      lineHeight: 1.4,
      color: 'var(--tx-2)'
    }
  }, "\u2116163 \u2014 \u0440\u0435\u0434\u043A\u0430\u044F. \u041F\u043E\u0441\u043B\u0435 \u043E\u0431\u043C\u0435\u043D\u0430 \u043E\u043D\u0430 \u0441\u0440\u0430\u0437\u0443 \u043F\u0435\u0440\u0435\u0435\u0434\u0435\u0442 \u0432 \u0442\u0432\u043E\u0439 \u0430\u043B\u044C\u0431\u043E\u043C.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 2px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 7,
      background: 'var(--red)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icons.check, {
    size: 14,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 13,
      color: '#fff'
    }
  }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0443\u0436\u0435 \u0443 \u043D\u0430\u0441 \u0432 \u0440\u0443\u043A\u0430\u0445"))), /*#__PURE__*/React.createElement("div", {
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
    onClick: function onClick() {
      return nav.go('trades');
    }
  }, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u043E\u0431\u043C\u0435\u043D"), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return nav.go('trades');
    },
    style: {
      textAlign: 'center',
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--tx-3)',
      cursor: 'pointer'
    }
  }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")));
}

// ─── 7.1 LEADERBOARD ─────────────────────────────────────────
function Top() {
  var podium = [{
    p: PLAYERS.striker,
    pts: '3 610',
    color: '#B4B4C4',
    h: 72,
    rank: 2
  }, {
    p: PLAYERS.keeper,
    pts: '4 820',
    color: '#FFD60A',
    h: 96,
    rank: 1
  }, {
    p: PLAYERS.maker,
    pts: '2 950',
    color: '#CD7F32',
    h: 56,
    rank: 3
  }];
  var list = [{
    rank: 4,
    p: PLAYERS.def,
    pts: '2 410'
  }, {
    rank: 5,
    p: PLAYERS.fwd,
    pts: '1 980'
  }, {
    rank: 6,
    p: ME,
    pts: '1 240',
    you: true
  }, {
    rank: 7,
    p: PLAYERS.sniper,
    pts: '1 105'
  }];
  return /*#__PURE__*/React.createElement(Screen, {
    tab: "top"
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "\u0422\u043E\u043F"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(TopSegment, {
    active: 0
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      gap: 6
    }
  }, ['Неделя', 'Друзья', 'Все'].map(function (t, i) {
    return /*#__PURE__*/React.createElement(Chip, {
      key: t,
      color: i === 0 ? '#000' : 'var(--tx-2)',
      bg: i === 0 ? '#fff' : undefined,
      border: i === 0 ? '#fff' : undefined
    }, t);
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    color: "var(--tx-3)"
  }, "\u0427\u041C 2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8
    }
  }, podium.map(function (x) {
    return /*#__PURE__*/React.createElement("div", {
      key: x.rank,
      style: {
        flex: 1,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'inline-block'
      }
    }, x.rank === 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -18,
        left: '50%',
        marginLeft: -11
      }
    }, /*#__PURE__*/React.createElement(Icons.crown, {
      size: 22,
      color: "#FFD60A"
    })), /*#__PURE__*/React.createElement(Avatar, {
      name: x.p.avatar,
      size: x.rank === 1 ? 56 : 46
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        fontFamily: 'Manrope',
        fontWeight: 800,
        fontSize: 10.5,
        color: '#fff',
        lineHeight: 1.2
      }
    }, x.p.nick, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--tx-3)'
      }
    }, x.p.tag)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        height: x.h,
        borderRadius: '10px 10px 0 0',
        background: "linear-gradient(180deg, ".concat(x.color, "55, ").concat(x.color, "10)"),
        border: "1px solid ".concat(x.color, "66"),
        borderBottom: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Unbounded',
        fontWeight: 900,
        fontSize: 18,
        color: x.color
      }
    }, x.rank), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Unbounded',
        fontWeight: 800,
        fontSize: 10,
        color: '#fff',
        marginTop: 2
      }
    }, x.pts)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, list.map(function (r) {
    return /*#__PURE__*/React.createElement("div", {
      key: r.rank,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '9px 12px',
        borderRadius: 14,
        background: r.you ? 'rgba(255,31,45,0.1)' : 'rgba(255,255,255,0.03)',
        border: "1px solid ".concat(r.you ? 'rgba(255,31,45,0.45)' : 'rgba(255,255,255,0.05)')
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 20,
        fontFamily: 'Unbounded',
        fontWeight: 900,
        fontSize: 13,
        color: r.you ? 'var(--red)' : 'var(--tx-3)',
        textAlign: 'center'
      }
    }, r.rank), /*#__PURE__*/React.createElement(Avatar, {
      name: r.p.avatar,
      size: 30,
      ring: false
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Nick, {
      p: r.p,
      size: 12.5
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Unbounded',
        fontWeight: 800,
        fontSize: 12,
        color: '#fff'
      }
    }, r.pts));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: 'Manrope',
      fontSize: 11,
      color: 'var(--tx-3)',
      textAlign: 'center'
    }
  }, "\u041E\u0447\u043A\u0438: \u043E\u0431\u044B\u0447\u043D\u0430\u044F 1 \xB7 \u0440\u0435\u0434\u043A\u0430\u044F 5 \xB7 \u0441\u0443\u043F\u0435\u0440 20 \xB7 \u0443\u043B\u044C\u0442\u0440\u0430 100")));
}

// ─── 7.3 FEED (emoji reactions only) ─────────────────────────
function Feed() {
  var events = [{
    p: PLAYERS.keeper,
    verb: 'нашёл ультра редкую',
    id: 'wc-089',
    time: '5 мин',
    rx: [['🔥', 24], ['😱', 9]]
  }, {
    p: ME,
    verb: 'зарегистрировал',
    id: 'wc-081',
    time: '12 мин',
    you: true,
    rx: [['🔥', 5], ['👑', 2]]
  }, {
    p: PLAYERS.striker,
    verb: 'собрал всех вратарей в',
    target: 'ЧМ 2026',
    time: '40 мин',
    rx: [['💪', 12]]
  }, {
    p: PLAYERS.maker,
    verb: 'обменялся с',
    target: 'Стальной Защитник 1102',
    time: '1 ч',
    rx: []
  }];
  return /*#__PURE__*/React.createElement(Screen, {
    tab: "top"
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "\u0422\u043E\u043F"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(TopSegment, {
    active: 2
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      gap: 6
    }
  }, ['Все', 'Только редкие', 'Друзья'].map(function (t, i) {
    return /*#__PURE__*/React.createElement(Chip, {
      key: t,
      color: i === 0 ? '#000' : 'var(--tx-2)',
      bg: i === 0 ? '#fff' : undefined,
      border: i === 0 ? '#fff' : undefined
    }, t);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, events.map(function (e, i) {
    var card = e.id ? CARDS[e.id] : null,
      r = card ? RARITY[card.rarity] : null;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: 12,
        borderRadius: 18,
        background: e.you ? 'rgba(255,31,45,0.07)' : 'rgba(255,255,255,0.03)',
        border: "1px solid ".concat(e.you ? 'rgba(255,31,45,0.3)' : 'rgba(255,255,255,0.06)'),
        display: 'flex',
        gap: 11
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: e.p.avatar,
      size: 36,
      ring: false
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Nick, {
      p: e.p,
      size: 12.5
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 2,
        fontFamily: 'Manrope',
        fontSize: 12.5,
        lineHeight: 1.35,
        color: 'var(--tx-2)'
      }
    }, e.verb, " ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: r ? r.color : '#fff'
      }
    }, card ? "\u2116".concat(card.num, " ").concat(card.name) : e.target)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, e.rx.map(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
        em = _ref5[0],
        c = _ref5[1];
      return /*#__PURE__*/React.createElement("div", {
        key: em,
        style: {
          padding: '3px 8px',
          borderRadius: 999,
          background: 'rgba(255,255,255,0.06)',
          fontFamily: 'Manrope',
          fontWeight: 800,
          fontSize: 11,
          color: '#fff'
        }
      }, em, " ", c);
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '3px 8px',
        borderRadius: 999,
        border: '1px dashed rgba(255,255,255,0.14)',
        fontFamily: 'Manrope',
        fontWeight: 700,
        fontSize: 11,
        color: 'var(--tx-3)'
      }
    }, "+ \uD83D\uDE42"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontFamily: 'Manrope',
        fontSize: 10.5,
        color: 'var(--tx-4)'
      }
    }, e.time))), card && /*#__PURE__*/React.createElement(Card, {
      id: e.id,
      w: 40,
      glow: false
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: 'Manrope',
      fontSize: 11,
      color: 'var(--tx-3)',
      textAlign: 'center'
    }
  }, "\u0412 \u043B\u0435\u043D\u0442\u0435 \u043D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432 \u2014 \u0442\u043E\u043B\u044C\u043A\u043E \u044D\u043C\u043E\u0434\u0437\u0438-\u0440\u0435\u0430\u043A\u0446\u0438\u0438")));
}

// ─── 8.1 PROFILE ─────────────────────────────────────────────
function Profile() {
  var nav = useNav();
  var quests = [['Найди 3 вратаря', 2, 3], ['Обменяйся вживую', 0, 1], ['Отсканируй 10 карточек', 7, 10]];
  var menu = [[/*#__PURE__*/React.createElement(Icons.key, {
    size: 18,
    color: "#fff"
  }), 'Код коллекционера', 'DRX-7K4P-…', 'collCode'], [/*#__PURE__*/React.createElement(Icons.users, {
    size: 18,
    color: "#fff"
  }), 'Друзья', '8', 'trades'], [/*#__PURE__*/React.createElement(Icons.lock, {
    size: 18,
    color: "#FFD60A"
  }), 'Для родителей', 'покупки, призы', 'parentGate']];
  return /*#__PURE__*/React.createElement(Screen, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 44
    }
  }, /*#__PURE__*/React.createElement(IconBtn, {
    onClick: function onClick() {
      return nav.go('album');
    }
  }, /*#__PURE__*/React.createElement(Icons.back, {
    size: 20,
    color: "#fff"
  })), /*#__PURE__*/React.createElement(Label, null, "\u041F\u0440\u043E\u0444\u0438\u043B\u044C"), /*#__PURE__*/React.createElement(IconBtn, null, /*#__PURE__*/React.createElement(Icons.share, {
    size: 18,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    glow: "rgba(255,75,43,0.45)",
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: ME.avatar,
    size: 66
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-d",
    style: {
      fontSize: 17,
      color: '#fff',
      textTransform: 'uppercase',
      lineHeight: 1.1
    }
  }, ME.nick), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Unbounded',
      fontWeight: 700,
      fontSize: 11,
      color: 'var(--tx-3)',
      marginTop: 3
    }
  }, "#", ME.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 7
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    color: "#FFD60A",
    bg: "rgba(255,214,10,0.12)",
    border: "rgba(255,214,10,0.35)"
  }, /*#__PURE__*/React.createElement(Icons.fire, {
    size: 11,
    color: "#FFD60A"
  }), "\u0423\u0440\u043E\u0432\u0435\u043D\u044C 8")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      textAlign: 'center'
    }
  }, [['130', 'карточек'], ['1 240', 'очков'], ['#6', 'за неделю']].map(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
      v = _ref7[0],
      l = _ref7[1];
    return /*#__PURE__*/React.createElement("div", {
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Unbounded',
        fontWeight: 900,
        fontSize: 18,
        color: '#fff'
      }
    }, v), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Manrope',
        fontWeight: 700,
        fontSize: 10.5,
        color: 'var(--tx-3)',
        marginTop: 3
      }
    }, l));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(H, {
    size: 14
  }, "\u0417\u0430\u0434\u0430\u043D\u0438\u044F \u043D\u0435\u0434\u0435\u043B\u0438"), /*#__PURE__*/React.createElement(Label, {
    style: {
      letterSpacing: '0.04em'
    }
  }, "+50 \u043E\u0447\u043A\u043E\u0432")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, quests.map(function (_ref8) {
    var _ref9 = _slicedToArray(_ref8, 3),
      t = _ref9[0],
      v = _ref9[1],
      n = _ref9[2];
    return /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        padding: '10px 12px',
        borderRadius: 14,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Manrope',
        fontWeight: 800,
        fontSize: 12.5,
        color: '#fff'
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(Progress, {
      value: v,
      total: n,
      height: 4,
      color: v === 0 ? '#55556A' : 'var(--red)'
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Unbounded',
        fontWeight: 800,
        fontSize: 11,
        color: 'var(--tx-2)'
      }
    }, v, "/", n));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(H, {
    size: 14
  }, "\u0412\u0438\u0442\u0440\u0438\u043D\u0430"), /*#__PURE__*/React.createElement(Label, {
    style: {
      letterSpacing: '0.04em',
      color: 'var(--red)'
    }
  }, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      justifyContent: 'center',
      gap: 14,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'rotate(-6deg)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    id: "wc-087",
    w: 60
  })), /*#__PURE__*/React.createElement(Card, {
    id: "wc-081",
    w: 68
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'rotate(6deg)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    id: "bar-48",
    w: 60
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 16,
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.07)'
    }
  }, menu.map(function (_ref0, i) {
    var _ref1 = _slicedToArray(_ref0, 4),
      ic = _ref1[0],
      t = _ref1[1],
      v = _ref1[2],
      to = _ref1[3];
    return /*#__PURE__*/React.createElement("div", {
      key: t,
      onClick: function onClick() {
        return nav.go(to);
      },
      style: {
        padding: '13px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        cursor: 'pointer',
        background: 'rgba(255,255,255,0.03)',
        borderTop: i ? '1px solid rgba(255,255,255,0.06)' : 'none'
      }
    }, ic, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: 'Manrope',
        fontWeight: 800,
        fontSize: 13.5,
        color: '#fff'
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Manrope',
        fontSize: 12,
        color: 'var(--tx-3)'
      }
    }, v), /*#__PURE__*/React.createElement(Icons.chev, {
      size: 14,
      color: "var(--tx-3)"
    }));
  }))));
}
Object.assign(window, {
  TradeSide: TradeSide,
  Trades: Trades,
  TradeQr: TradeQr,
  TradeConfirm: TradeConfirm,
  Top: Top,
  Feed: Feed,
  Profile: Profile
});