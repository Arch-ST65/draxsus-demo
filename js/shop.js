"use strict";

// Buying packs: the kid never leaves the app alone — a QR for parents or the adult gate.
// Every button points to the exact product (collection + format) on Wildberries or Ozon.

var FORMATS = [{
  id: 'pack1',
  name: 'Пачка 1',
  cards: 5
}, {
  id: 'spike4',
  name: 'Спайка 4',
  cards: 20,
  noRepeat: true
}, {
  id: 'mini12',
  name: 'MINIBOX 12',
  cards: 60,
  noRepeat: true,
  promo: '−15%'
}, {
  id: 'show24',
  name: 'SHOWBOX 24',
  cards: 120,
  noRepeat: true
}];
var MARKETS = {
  wb: {
    name: 'Wildberries',
    "short": 'WB',
    color: '#CB11AB'
  },
  ozon: {
    name: 'Ozon',
    "short": 'Ozon',
    color: '#005BFF'
  }
};

// The bigger the gap in the album, the bigger the box we suggest
function recommendFormat(c) {
  var miss = c.total - c.owned;
  if (c.owned === 0 || miss > 100) return FORMATS[3];
  return miss > 30 ? FORMATS[2] : FORMATS[1];
}
function formatLine(f) {
  return "".concat(f.cards, " \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A").concat(f.noRepeat ? ' · без повторов' : '');
}
function MarketBtn(_ref) {
  var m = _ref.m,
    onClick = _ref.onClick;
  var k = MARKETS[m];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      flex: 1,
      minWidth: 0,
      height: 50,
      borderRadius: 14,
      background: k.color,
      cursor: 'pointer',
      boxShadow: "0 8px 20px ".concat(k.color, "55"),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'Manrope',
      fontWeight: 800,
      fontSize: 15,
      color: '#fff'
    }
  }, k.name, /*#__PURE__*/React.createElement(Icons.ext, {
    size: 15,
    color: "#fff"
  }));
}
function MarketPill(_ref2) {
  var m = _ref2.m;
  var k = MARKETS[m];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 9px',
      borderRadius: 9,
      background: k.color,
      fontFamily: 'Manrope',
      fontWeight: 800,
      fontSize: 11,
      color: '#fff',
      cursor: 'pointer'
    }
  }, k["short"]);
}
function FormatRow(_ref3) {
  var f = _ref3.f;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '11px 12px',
      borderRadius: 14,
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Unbounded',
      fontWeight: 700,
      fontSize: 12.5,
      color: '#fff'
    }
  }, f.name), f.promo && /*#__PURE__*/React.createElement(Chip, {
    color: "#fff",
    bg: "var(--red)",
    border: "var(--red)",
    style: {
      fontSize: 8,
      padding: '2px 6px'
    }
  }, f.promo)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3,
      fontFamily: 'Manrope',
      fontSize: 11,
      color: 'var(--tx-3)'
    }
  }, formatLine(f))), /*#__PURE__*/React.createElement(MarketPill, {
    m: "wb"
  }), /*#__PURE__*/React.createElement(MarketPill, {
    m: "ozon"
  }));
}

// ─── 8.2 ASK PARENTS (sheet with a QR for the parent's phone) ─
function AskParent() {
  var nav = useNav();
  var c = COLLECTIONS[nav.data] || COLLECTIONS.wc;
  var f = recommendFormat(c);
  return /*#__PURE__*/React.createElement(Screen, {
    padTop: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.35,
      filter: 'blur(6px)'
    }
  }, /*#__PURE__*/React.createElement(Album, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(4,4,8,0.7)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: '14px 20px 38px',
      background: '#101019',
      border: '1px solid rgba(255,255,255,0.08)',
      borderBottom: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 2,
      background: 'rgba(255,255,255,0.2)',
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(H, {
    size: 22
  }, "\u041F\u043E\u043F\u0440\u043E\u0441\u0438", /*#__PURE__*/React.createElement("br", null), "\u0440\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439"), /*#__PURE__*/React.createElement(IconBtn, {
    onClick: function onClick() {
      return nav.back();
    }
  }, /*#__PURE__*/React.createElement(Icons.close, {
    size: 18,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: 'Manrope',
      fontSize: 13,
      lineHeight: 1.45,
      color: 'var(--tx-2)'
    }
  }, "\u041F\u043E\u043A\u0430\u0436\u0438 QR \u043C\u0430\u043C\u0435 \u0438\u043B\u0438 \u043F\u0430\u043F\u0435: \u043E\u043D \u043E\u0442\u043A\u0440\u043E\u0435\u0442 \u043D\u0430\u0431\u043E\u0440\u044B \xAB", c.name, "\xBB \u043D\u0430 Wildberries \u0438 Ozon."), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return nav.go('parentWeb', c.id);
    },
    style: {
      margin: '16px auto 0',
      width: 196,
      padding: 13,
      borderRadius: 22,
      background: '#fff',
      cursor: 'pointer',
      boxShadow: '0 0 0 5px rgba(255,31,45,0.22), 0 16px 40px rgba(255,31,45,0.2)'
    }
  }, /*#__PURE__*/React.createElement(QR, {
    size: 170,
    seed: 33
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      textAlign: 'center',
      fontFamily: 'JetBrains Mono',
      fontWeight: 700,
      fontSize: 10.5,
      color: '#555'
    }
  }, "draxsus.ru/buy/", c.slug)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: '11px 12px',
      borderRadius: 14,
      background: 'rgba(255,214,10,0.07)',
      border: '1px solid rgba(255,214,10,0.3)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icons.gift, {
    size: 18,
    color: "#FFD60A"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: 'Manrope',
      fontSize: 12,
      color: 'var(--tx-2)'
    }
  }, "\u0421\u043E\u0432\u0435\u0442\u0443\u0435\u043C: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, f.name), " \xB7 ", formatLine(f))), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return nav.go('trades');
    },
    style: {
      marginTop: 8,
      padding: '11px 12px',
      borderRadius: 14,
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icons.swap, {
    size: 18,
    color: "var(--red)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: 'Manrope',
      fontSize: 12,
      color: 'var(--tx-2)'
    }
  }, "\u041D\u0443\u0436\u043D\u0430 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430? ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, "3 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F \u0432 \u043E\u0431\u043C\u0435\u043D\u0430\u0445")), /*#__PURE__*/React.createElement(Icons.chev, {
    size: 14,
    color: "var(--tx-3)"
  })), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return nav.go('parentGate', {
        next: 'shop',
        coll: c.id
      });
    },
    style: {
      marginTop: 16,
      textAlign: 'center',
      fontFamily: 'Manrope',
      fontWeight: 800,
      fontSize: 13,
      color: '#FFD60A',
      cursor: 'pointer'
    }
  }, "\u042F \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0439 \u2014 \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u2192")));
}

// ─── 8.3 WHAT THE PARENT SEES (draxsus.ru page after the scan) ─
var SITE_GREEN = '#1FE36A';
function ParentWeb() {
  var c = COLLECTIONS[useNav().data] || COLLECTIONS.wc;
  var f = recommendFormat(c);
  return /*#__PURE__*/React.createElement(Screen, {
    padTop: 58,
    flare: false,
    bg: "#0A0A0B"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px',
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid rgba(255,255,255,0.07)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-white.png",
    alt: "DRAXSUS",
    style: {
      height: 16,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 11,
      color: 'var(--tx-3)'
    }
  }, "Football Hub")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Manrope',
      fontWeight: 800,
      fontSize: 10.5,
      color: SITE_GREEN,
      letterSpacing: '0.12em'
    }
  }, "\u041D\u0410\u0411\u041E\u0420 \u0414\u041B\u042F \u041A\u041E\u041B\u041B\u0415\u041A\u0426\u0418\u0418"), /*#__PURE__*/React.createElement(H, {
    size: 25,
    style: {
      marginTop: 8,
      lineHeight: 1.05
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'Manrope',
      fontSize: 13,
      lineHeight: 1.45,
      color: 'var(--tx-2)'
    }
  }, c.owned ? 'Ребёнок собирает эту коллекцию в приложении DRAXSUS и попросил новый набор.' : 'Ребёнок хочет начать эту коллекцию в приложении DRAXSUS и попросил набор.'), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      height: 112,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 74,
      top: 10,
      transform: 'rotate(-9deg)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    id: "wc-087",
    w: 62,
    glow: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 139,
      top: 0
    }
  }, /*#__PURE__*/React.createElement(Card, {
    id: c.cover,
    w: 70,
    glow: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 212,
      top: 10,
      transform: 'rotate(9deg)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    id: "wc-095",
    w: 62,
    glow: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: 16,
      borderRadius: 20,
      background: 'rgba(31,227,106,0.06)',
      border: "1px solid ".concat(SITE_GREEN, "55")
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    color: "#04140a",
    bg: SITE_GREEN,
    border: SITE_GREEN
  }, "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C"), /*#__PURE__*/React.createElement("div", {
    className: "t-d",
    style: {
      marginTop: 10,
      fontSize: 21,
      color: '#fff'
    }
  }, f.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontFamily: 'Manrope',
      fontSize: 12.5,
      color: 'var(--tx-2)'
    }
  }, f.cards / 5, " \u043D\u0430\u0431\u043E\u0440\u043E\u0432 \xB7 ", formatLine(f)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(MarketBtn, {
    m: "wb"
  }), /*#__PURE__*/React.createElement(MarketBtn, {
    m: "ozon"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, FORMATS.filter(function (x) {
    return x.id !== f.id && x.noRepeat;
  }).slice(0, 2).map(function (x) {
    return /*#__PURE__*/React.createElement(FormatRow, {
      key: x.id,
      f: x
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: 'Manrope',
      fontSize: 10.5,
      lineHeight: 1.45,
      color: 'var(--tx-3)',
      textAlign: 'center'
    }
  }, "\u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u2014 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0430. \u0414\u0430\u043D\u043D\u044B\u0435 \u0440\u0435\u0431\u0451\u043D\u043A\u0430 \u0432 \u0441\u0441\u044B\u043B\u043A\u0435 \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u0441\u044F.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 40,
      height: 44,
      borderRadius: 14,
      background: 'rgba(40,40,46,0.95)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 14,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Icons.lock, {
    size: 12,
    color: "#fff"
  }), "draxsus.ru"));
}

// ─── 8.4 SHOP (after the adult gate) ─────────────────────────
function Shop() {
  var nav = useNav();
  var c = COLLECTIONS[nav.data && nav.data.coll || 'wc'];
  var f = recommendFormat(c);
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
      return nav.back();
    }
  }, /*#__PURE__*/React.createElement(Icons.back, {
    size: 20,
    color: "#fff"
  })), /*#__PURE__*/React.createElement(Label, {
    style: {
      color: '#FFD60A'
    }
  }, "\u041C\u0430\u0433\u0430\u0437\u0438\u043D \xB7 \u0434\u043B\u044F \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(Chip, null, c.name, " ", /*#__PURE__*/React.createElement(Icons.chev, {
    size: 10,
    color: "#fff"
  })), /*#__PURE__*/React.createElement(Panel, {
    glow: "rgba(255,31,45,0.4)",
    style: {
      marginTop: 12,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 13.5,
      lineHeight: 1.35,
      color: '#fff'
    }
  }, "\u0414\u043E \u043F\u043E\u043B\u043D\u043E\u0439 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438 \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Unbounded',
      fontWeight: 900,
      color: 'var(--red)'
    }
  }, c.total - c.owned), " \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    value: c.owned,
    total: c.total
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      padding: '0 2px'
    }
  }, /*#__PURE__*/React.createElement(Icons.info, {
    size: 16,
    color: "var(--tx-3)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Manrope',
      fontSize: 11.5,
      lineHeight: 1.4,
      color: 'var(--tx-3)'
    }
  }, "\u0412 \u043D\u0430\u0431\u043E\u0440\u0430\u0445 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0435: \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u0443\u044E \u043A\u0443\u043F\u0438\u0442\u044C \u043D\u0435\u043B\u044C\u0437\u044F. \u041D\u0435\u0434\u043E\u0441\u0442\u0430\u044E\u0449\u0438\u0435 \u043F\u0440\u043E\u0449\u0435 \u0432\u044B\u043C\u0435\u043D\u044F\u0442\u044C \u0443 \u0434\u0440\u0443\u0437\u0435\u0439.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      borderRadius: 20,
      padding: 16,
      background: 'linear-gradient(135deg, rgba(255,214,10,0.14), rgba(255,214,10,0.03))',
      border: '1px solid rgba(255,214,10,0.4)'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    color: "#000",
    bg: "#FFD60A",
    border: "#FFD60A"
  }, "\u041B\u0443\u0447\u0448\u0438\u0439 \u0432\u044B\u0431\u043E\u0440"), /*#__PURE__*/React.createElement("div", {
    className: "t-d",
    style: {
      marginTop: 10,
      fontSize: 21,
      color: '#fff'
    }
  }, f.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontFamily: 'Manrope',
      fontSize: 12.5,
      color: 'var(--tx-2)'
    }
  }, f.cards / 5, " \u043D\u0430\u0431\u043E\u0440\u043E\u0432 \xB7 ", formatLine(f)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(MarketBtn, {
    m: "wb"
  }), /*#__PURE__*/React.createElement(MarketBtn, {
    m: "ozon"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, FORMATS.filter(function (x) {
    return x.id !== f.id;
  }).map(function (x) {
    return /*#__PURE__*/React.createElement(FormatRow, {
      key: x.id,
      f: x
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: 'Manrope',
      fontSize: 11,
      color: 'var(--tx-3)',
      textAlign: 'center'
    }
  }, "\u0421\u0441\u044B\u043B\u043A\u0438 \u0432\u0435\u0434\u0443\u0442 \u043D\u0430 \u044D\u0442\u043E\u0442 \u043D\u0430\u0431\u043E\u0440 \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435. \u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u2014 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0430.")));
}
Object.assign(window, {
  FORMATS: FORMATS,
  MARKETS: MARKETS,
  recommendFormat: recommendFormat,
  formatLine: formatLine,
  MarketBtn: MarketBtn,
  MarketPill: MarketPill,
  FormatRow: FormatRow,
  AskParent: AskParent,
  ParentWeb: ParentWeb,
  Shop: Shop
});