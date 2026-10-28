"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Album v2: collections list, album grid, card detail, rare registry (Hall of fame)

// ─── 2.1 MY COLLECTIONS ──────────────────────────────────────
function CollectionTile(_ref) {
  var c = _ref.c,
    onClick = _ref.onClick,
    onBuy = _ref.onBuy;
  var pct = Math.round(c.owned / c.total * 100);
  var started = c.owned > 0;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      position: 'relative',
      height: 112,
      borderRadius: 20,
      overflow: 'hidden',
      cursor: 'pointer',
      background: 'linear-gradient(120deg, #191926 0%, #0d0d15 70%)',
      border: "1px solid ".concat(c.fresh ? 'rgba(255,31,45,0.35)' : 'rgba(255,255,255,0.07)')
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -4,
      top: 10,
      transform: 'rotate(9deg)',
      opacity: started ? 1 : 0.5
    }
  }, /*#__PURE__*/React.createElement(Card, {
    id: c.cover,
    w: 80,
    glow: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, #12121b 52%, rgba(18,18,27,0) 80%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      top: 12,
      right: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, c.fresh && /*#__PURE__*/React.createElement(Chip, {
    color: "#fff",
    bg: "var(--red)",
    border: "var(--red)",
    style: {
      fontSize: 8,
      padding: '3px 7px'
    }
  }, "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0430\u044F"), /*#__PURE__*/React.createElement(Label, {
    style: {
      fontSize: 9.5
    }
  }, c.total, " \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A")), /*#__PURE__*/React.createElement("div", {
    className: "t-d",
    style: {
      marginTop: 6,
      fontSize: 14,
      lineHeight: 1.05,
      color: '#fff',
      textTransform: 'uppercase'
    }
  }, c.name), started ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 9,
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: 20,
      color: '#fff'
    }
  }, c.owned), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Unbounded',
      fontWeight: 700,
      fontSize: 12,
      color: 'var(--tx-3)'
    }
  }, "/ ", c.total), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'Manrope',
      fontWeight: 800,
      fontSize: 12,
      color: 'var(--tx-2)'
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    value: c.owned,
    total: c.total,
    height: 5
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 12,
      color: 'var(--tx-3)'
    }
  }, /*#__PURE__*/React.createElement(Icons.lock, {
    size: 14,
    color: "var(--tx-3)"
  }), " \u0415\u0449\u0451 \u043D\u0435 \u043D\u0430\u0447\u0430\u0442\u0430"), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      e.stopPropagation();
      onBuy && onBuy();
    },
    style: {
      padding: '6px 10px',
      borderRadius: 9,
      background: 'var(--red)',
      cursor: 'pointer',
      fontFamily: 'Unbounded',
      fontWeight: 700,
      fontSize: 9.5,
      color: '#fff',
      letterSpacing: '0.05em'
    }
  }, "\u041D\u0410\u0427\u0410\u0422\u042C"))));
}
function Collections() {
  var nav = useNav();
  return /*#__PURE__*/React.createElement(Screen, {
    tab: "album"
  }, /*#__PURE__*/React.createElement(TopBar, {
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return nav.go('team');
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '8px 11px',
        borderRadius: 12,
        cursor: 'pointer',
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
        fontFamily: 'Unbounded',
        fontWeight: 700,
        fontSize: 10,
        color: '#fff',
        letterSpacing: '0.04em'
      }
    }, /*#__PURE__*/React.createElement(Icons.shirt, {
      size: 15,
      color: "#fff"
    }), "\u041A\u041E\u041C\u0410\u041D\u0414\u0410 \xB7 ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#2ECC55'
      }
    }, "84")), /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return nav.go('profile');
      },
      style: {
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: ME.avatar,
      size: 36
    })))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    glow: "rgba(255,31,45,0.45)",
    style: {
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement(Label, null, "\u041F\u0440\u0438\u0432\u0435\u0442, ", ME.nick, " #", ME.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)'
    }
  }, [[ME.cards, 'карточек'], ['1 240', 'очков'], ['8', 'редких']].map(function (_ref2, i) {
    var _ref3 = _slicedToArray(_ref2, 2),
      v = _ref3[0],
      l = _ref3[1];
    return /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        borderLeft: i ? '1px solid rgba(255,255,255,0.08)' : 'none',
        paddingLeft: i ? 14 : 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Unbounded',
        fontWeight: 900,
        fontSize: 22,
        color: i === 2 ? '#FFD60A' : '#fff',
        lineHeight: 1
      }
    }, v), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 5,
        fontFamily: 'Manrope',
        fontWeight: 700,
        fontSize: 11,
        color: 'var(--tx-3)'
      }
    }, l));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(H, {
    size: 16
  }, "\u041C\u043E\u0438 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438"), /*#__PURE__*/React.createElement(Label, {
    style: {
      letterSpacing: '0.06em'
    }
  }, "3 \u0438\u0437 17")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ['wc', 'bar', 'leg', 'best'].map(function (k) {
    return /*#__PURE__*/React.createElement(CollectionTile, {
      key: k,
      c: COLLECTIONS[k],
      onClick: function onClick() {
        return nav.go('albumWc');
      },
      onBuy: function onBuy() {
        return nav.go('askParent', k);
      }
    });
  }))));
}

// ─── 2.2 ALBUM GRID (one collection) ─────────────────────────
// All 288 slots in number order, scrolling. The kid owns the cards the prototype has art for, minus the few
// gaps below; dupes are counted copies. «Все» opens at the first owned card.
// lockedIds: owned cards to show as empty slots (the video uses it to keep a card for a later scene)
var WC_GAPS = [75, 78, 82, 84];
var WC_DUPES = {
  'wc-074': 1,
  'wc-080': 2,
  'wc-087': 1,
  'wc-090': 1,
  'wc-146': 1,
  'wc-161': 3,
  'wc-164': 1
};
var WC_SLOTS = Array.from({
  length: 288
}, function (_, i) {
  var n = i + 1,
    id = "wc-".concat(String(n).padStart(3, '0'));
  return CARDS[id] && !WC_GAPS.includes(n) ? {
    id: id,
    n: n,
    d: WC_DUPES[id] || 0
  } : {
    n: n
  };
});
function Album(_ref4) {
  var _ref4$initialFilter = _ref4.initialFilter,
    initialFilter = _ref4$initialFilter === void 0 ? 0 : _ref4$initialFilter,
    _ref4$lockedIds = _ref4.lockedIds,
    lockedIds = _ref4$lockedIds === void 0 ? [] : _ref4$lockedIds;
  var nav = useNav();
  var c = COLLECTIONS.wc;
  var _React$useState = React.useState(initialFilter),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    f = _React$useState2[0],
    setF = _React$useState2[1];
  var scroller = React.useRef(null);
  var buy = function buy() {
    return nav.go('askParent', 'wc');
  };
  var slots = WC_SLOTS.map(function (t) {
    return t.id && lockedIds.includes(t.id) ? {
      n: t.n
    } : t;
  });
  var tiles = [slots, slots.filter(function (t) {
    return t.id;
  }), slots.filter(function (t) {
    return !t.id;
  }), slots.filter(function (t) {
    return t.d;
  })][f];
  React.useLayoutEffect(function () {
    var box = scroller.current,
      first = box && box.querySelector('[data-owned]');
    if (box) box.scrollTop = f === 0 && first ? first.offsetTop - 4 : 0;
  }, [f]);
  return /*#__PURE__*/React.createElement(Screen, {
    tab: "album"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    left: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(IconBtn, {
      onClick: function onClick() {
        return nav.go('album');
      }
    }, /*#__PURE__*/React.createElement(Icons.back, {
      size: 20,
      color: "#fff"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
      style: {
        fontSize: 9.5
      }
    }, "\u041A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F"), /*#__PURE__*/React.createElement("div", {
      className: "t-d",
      style: {
        fontSize: 16,
        color: '#fff',
        textTransform: 'uppercase',
        marginTop: 2
      }
    }, "\u0427\u041C 2026"))),
    right: /*#__PURE__*/React.createElement(IconBtn, null, /*#__PURE__*/React.createElement(Icons.search, {
      size: 20,
      color: "#fff"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    glow: "rgba(255,31,45,0.4)",
    style: {
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: 30,
      color: '#fff',
      lineHeight: 1
    }
  }, c.owned), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Unbounded',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--tx-3)'
    }
  }, "/ ", c.total), /*#__PURE__*/React.createElement("div", {
    onClick: buy,
    style: {
      marginLeft: 'auto',
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '7px 11px',
      borderRadius: 10,
      cursor: 'pointer',
      background: 'rgba(255,31,45,0.16)',
      border: '1px solid rgba(255,31,45,0.5)'
    }
  }, /*#__PURE__*/React.createElement(Icons.cart, {
    size: 14,
    color: "#fff"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Unbounded',
      fontWeight: 700,
      fontSize: 9.5,
      color: '#fff',
      letterSpacing: '0.05em'
    }
  }, "\u0414\u041E\u041A\u0423\u041F\u0418\u0422\u042C"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    value: c.owned,
    total: c.total
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(RarityBadge, {
    rarity: "ultra",
    sm: true
  }), /*#__PURE__*/React.createElement(Chip, {
    style: {
      fontSize: 8.5,
      padding: '4px 8px'
    },
    color: "#B14BFF",
    bg: "rgba(177,75,255,0.12)",
    border: "rgba(177,75,255,0.4)"
  }, "\u0421\u0443\u043F\u0435\u0440 \xB7 1"), /*#__PURE__*/React.createElement(Chip, {
    style: {
      fontSize: 8.5,
      padding: '4px 8px'
    },
    color: "#00D4FF",
    bg: "rgba(0,212,255,0.1)",
    border: "rgba(0,212,255,0.35)"
  }, "\u0420\u0435\u0434\u043A\u0438\u0435 \xB7 6"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Segment, {
    items: [['Все', c.total], ['Есть', c.owned], ['Нет', c.total - c.owned], ['Дубли', Object.keys(WC_DUPES).length]],
    active: f,
    onPick: setF
  }))), /*#__PURE__*/React.createElement("div", {
    ref: scroller,
    className: "iframe-scroll",
    style: {
      position: 'relative',
      flex: 1,
      minHeight: 0,
      marginTop: 10,
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',
      overscrollBehavior: 'contain',
      maskImage: 'linear-gradient(to bottom, transparent 0, #000 10px, #000 calc(100% - 18px), transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to bottom, transparent 0, #000 10px, #000 calc(100% - 18px), transparent 100%)'
    }
  }, f === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '6px 20px 4px',
      padding: 14,
      borderRadius: 18,
      background: 'linear-gradient(135deg, rgba(255,31,45,0.16), rgba(255,31,45,0.04))',
      border: '1px solid rgba(255,31,45,0.4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Manrope',
      fontWeight: 800,
      fontSize: 13.5,
      color: '#fff'
    }
  }, "\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 ", c.total - c.owned, " \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3,
      fontFamily: 'Manrope',
      fontSize: 12,
      lineHeight: 1.4,
      color: 'var(--tx-2)'
    }
  }, "\u041A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u0443\u044E \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u0432\u044B\u043C\u0435\u043D\u044F\u0439 \u0443 \u0434\u0440\u0443\u0437\u0435\u0439, \u0430 \u043D\u043E\u0432\u044B\u0435 \u043D\u0430\u0431\u043E\u0440\u044B \u043F\u043E\u043F\u0440\u043E\u0441\u0438 \u0443 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    sm: true,
    full: true,
    kind: "ghost",
    icon: /*#__PURE__*/React.createElement(Icons.swap, {
      size: 15,
      color: "#fff"
    }),
    onClick: function onClick() {
      return nav.go('trades');
    }
  }, "\u0412 \u043E\u0431\u043C\u0435\u043D\u0430\u0445 \xB7 3"), /*#__PURE__*/React.createElement(Btn, {
    sm: true,
    full: true,
    icon: /*#__PURE__*/React.createElement(Icons.cart, {
      size: 15,
      color: "#fff"
    }),
    onClick: buy
  }, "\u0414\u043E\u043A\u0443\u043F\u0438\u0442\u044C"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 20px 22px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 9,
      rowGap: 11
    }
  }, tiles.map(function (t) {
    return t.id ? /*#__PURE__*/React.createElement("div", {
      key: t.n,
      "data-owned": true
    }, /*#__PURE__*/React.createElement(Card, {
      id: t.id,
      w: 80,
      dupes: t.d,
      onClick: function onClick() {
        return nav.go('detail', {
          id: t.id,
          ids: tiles.filter(function (x) {
            return x.id;
          }).map(function (x) {
            return x.id;
          })
        });
      }
    })) : /*#__PURE__*/React.createElement(Card, {
      key: t.n,
      num: t.n,
      total: 288,
      locked: true,
      w: 80
    });
  })))));
}

// ─── 2.3 CARD DETAIL (super rare, registered) ────────────────
function Stat(_ref5) {
  var v = _ref5.v,
    l = _ref5.l,
    _ref5$color = _ref5.color,
    color = _ref5$color === void 0 ? '#fff' : _ref5$color;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: 17,
      color: color,
      lineHeight: 1
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3,
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 8.5,
      color: 'var(--tx-3)',
      letterSpacing: '0.1em'
    }
  }, l));
}

// Swiping left / right (or tapping a card peeking in at the side) walks through the owned cards of the album
// list the card was opened from — all of them when opened without one.
var OWNED_WC = WC_SLOTS.filter(function (t) {
  return t.id;
}).map(function (t) {
  return t.id;
});
var CARD_STEP = 236; // distance between neighbouring cards on the strip

function CardDetail() {
  var nav = useNav();
  var data = nav.data || {};
  var list = data.ids || OWNED_WC;
  var want = typeof data === 'string' ? data : data.id;
  var _React$useState3 = React.useState(function () {
      return Math.max(0, list.indexOf(CARDS[want] ? want : 'wc-087'));
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    i = _React$useState4[0],
    setI = _React$useState4[1];
  var _React$useState5 = React.useState(0),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    dx = _React$useState6[0],
    setDx = _React$useState6[1]; // strip offset while dragging, design px
  var _React$useState7 = React.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    settling = _React$useState8[0],
    setSettling = _React$useState8[1];
  var drag = React.useRef(null);
  var id = list[i];
  var card = CARDS[id];
  var r = RARITY[card.rarity];
  var players = id === 'wc-087' ? [{
    ru: 'Родри',
    age: 29,
    goals: 34
  }, {
    ru: 'Павлович',
    age: 21,
    goals: 8
  }] : card.name.split(' · ').map(function (n, i) {
    return {
      ru: n,
      age: [24, 22][i],
      goals: [12, 9][i]
    };
  });

  // slide the strip to the neighbouring card (or back into place) and make it the current one
  var step = function step(s) {
    if (settling) return;
    var to = list[i + s] ? i + s : i;
    setSettling(true);
    setDx((i - to) * CARD_STEP);
    setTimeout(function () {
      setI(to);
      setDx(0);
      setSettling(false);
    }, 260);
  };
  var onDown = function onDown(e) {
    if (settling) return;
    var el = e.currentTarget;
    // the phone shell scales the app, so finger travel is converted to design px
    drag.current = {
      id: e.pointerId,
      x: e.clientX,
      y: e.clientY,
      t: Date.now(),
      k: el.getBoundingClientRect().width / el.offsetWidth,
      on: false
    };
  };
  var onMove = function onMove(e) {
    var d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    var mx = (e.clientX - d.x) / d.k,
      my = (e.clientY - d.y) / d.k;
    if (!d.on) {
      if (Math.abs(mx) < 8 || Math.abs(mx) < Math.abs(my)) return;
      d.on = true;
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    var pastEnd = mx > 0 && i === 0 || mx < 0 && i === list.length - 1;
    setDx(pastEnd ? mx * 0.3 : mx);
  };
  var onUp = function onUp(e) {
    var d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    if (!d.on) {
      drag.current = null;
      return;
    }
    var mx = (e.clientX - d.x) / d.k;
    var flick = Date.now() - d.t < 250 && Math.abs(mx) > 20;
    step(mx < -60 || flick && mx < 0 ? 1 : mx > 60 || flick && mx > 0 ? -1 : 0);
  };
  var onCancel = function onCancel() {
    if (drag.current && drag.current.on) step(0);
    drag.current = null;
  };
  // a drag isn't a tap: swallow the click that ends it
  var onClickCapture = function onClickCapture(e) {
    if (drag.current && drag.current.on) {
      e.stopPropagation();
      drag.current = null;
    }
  };
  return /*#__PURE__*/React.createElement(Screen, {
    padTop: 0
  }, /*#__PURE__*/React.createElement("div", {
    onPointerDown: onDown,
    onPointerMove: onMove,
    onPointerUp: onUp,
    onPointerCancel: onCancel,
    onClickCapture: onClickCapture,
    onDragStart: function onDragStart(e) {
      return e.preventDefault();
    },
    style: {
      position: 'absolute',
      inset: 0,
      touchAction: 'none',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: "radial-gradient(ellipse at 50% 22%, ".concat(r.color, "38 0%, transparent 52%), #05050A")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 58,
      left: 20,
      right: 20,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement(IconBtn, {
    onClick: function onClick() {
      return nav.go('albumWc');
    }
  }, /*#__PURE__*/React.createElement(Icons.back, {
    size: 20,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Unbounded',
      fontWeight: 800,
      fontSize: 11,
      color: 'var(--tx-2)',
      letterSpacing: '0.1em'
    }
  }, "\u2116", card.num, " / 288"), /*#__PURE__*/React.createElement(IconBtn, null, /*#__PURE__*/React.createElement(Icons.share, {
    size: 18,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 112,
      left: 0,
      right: 0,
      height: 312
    }
  }, list.map(function (cid, k) {
    var off = k - i;
    if (Math.abs(off) > 2) return null;
    var x = off * CARD_STEP + dx,
      far = Math.min(1, Math.abs(x) / CARD_STEP);
    return /*#__PURE__*/React.createElement("div", {
      key: cid,
      onClick: off ? function () {
        return step(Math.sign(off));
      } : undefined,
      style: {
        position: 'absolute',
        left: 97,
        top: 0,
        cursor: off ? 'pointer' : 'default',
        transform: "translateX(".concat(x, "px) scale(").concat(1 - 0.14 * far, ")"),
        opacity: 1 - 0.6 * far,
        transition: settling ? 'transform .26s cubic-bezier(0.2, 0.8, 0.2, 1), opacity .26s' : 'none'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      id: cid,
      w: 196
    }));
  })), list.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 436,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return step(-1);
    },
    style: {
      padding: 8,
      display: 'flex',
      cursor: 'pointer',
      opacity: i > 0 ? 1 : 0.25
    }
  }, /*#__PURE__*/React.createElement(Icons.back, {
    size: 14,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 64,
      textAlign: 'center',
      fontFamily: 'Unbounded',
      fontWeight: 700,
      fontSize: 10,
      color: 'var(--tx-3)',
      letterSpacing: '0.1em'
    }
  }, i + 1, " \u0418\u0417 ", list.length), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return step(1);
    },
    style: {
      padding: 8,
      display: 'flex',
      cursor: 'pointer',
      opacity: i < list.length - 1 ? 1 : 0.25
    }
  }, /*#__PURE__*/React.createElement(Icons.chev, {
    size: 14,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      borderTopLeftRadius: 28,
      borderTopRightRadius: 28,
      padding: '18px 20px 34px',
      background: 'linear-gradient(180deg, #11111a 0%, #08080C 100%)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderBottom: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(RarityBadge, {
    rarity: card.rarity
  }), /*#__PURE__*/React.createElement(Chip, null, card.tag, " \xB7 \u043E\u043F\u043E\u0440\u043D\u044B\u0435")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, players.map(function (p, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: 12,
        borderRadius: 14,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "t-d",
      style: {
        fontSize: 14,
        color: '#fff',
        textTransform: 'uppercase'
      }
    }, p.ru), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        display: 'flex',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      v: p.age,
      l: "\u0412\u041E\u0417\u0420\u0410\u0421\u0422"
    }), /*#__PURE__*/React.createElement(Stat, {
      v: p.goals,
      l: "\u0413\u041E\u041B\u042B",
      color: "#FFD60A"
    })));
  })), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return nav.go('registry');
    },
    style: {
      marginTop: 10,
      padding: '12px 14px',
      borderRadius: 14,
      cursor: 'pointer',
      background: "".concat(r.color, "14"),
      border: "1px solid ".concat(r.color, "40"),
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icons.shield, {
    size: 22,
    color: r.color
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Manrope',
      fontWeight: 800,
      fontSize: 13,
      color: '#fff'
    }
  }, "\u0422\u044B \u0432 \u0417\u0430\u043B\u0435 \u0441\u043B\u0430\u0432\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Manrope',
      fontSize: 11.5,
      color: 'var(--tx-2)',
      marginTop: 2
    }
  }, "\u0422\u044B \u043D\u0430\u0448\u0451\u043B \u0435\u0451 12-\u043C \xB7 +", r.pts, " \u043E\u0447\u043A\u043E\u0432")), /*#__PURE__*/React.createElement(Icons.chev, {
    size: 16,
    color: "var(--tx-2)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    kind: "ghost",
    full: true,
    icon: /*#__PURE__*/React.createElement(Icons.shirt, {
      size: 16,
      color: "#fff"
    }),
    onClick: function onClick() {
      return nav.go('team');
    }
  }, "\u0412 \u043A\u043E\u043C\u0430\u043D\u0434\u0443"), /*#__PURE__*/React.createElement(Btn, {
    kind: "primary",
    full: true,
    icon: /*#__PURE__*/React.createElement(Icons.star, {
      size: 16,
      color: "#fff"
    })
  }, "\u0412 \u0432\u0438\u0442\u0440\u0438\u043D\u0443")))));
}

// ─── 4.1 RARE REGISTRY / HALL OF FAME ────────────────────────
function TopSegment(_ref6) {
  var active = _ref6.active;
  var nav = useNav();
  return /*#__PURE__*/React.createElement(Segment, {
    items: ['Рейтинг', 'Реестр', 'Лента'],
    active: active,
    onPick: function onPick(i) {
      return nav.go(['top', 'registry', 'feed'][i]);
    }
  });
}
function Registry() {
  var rows = [{
    id: 'wc-081',
    found: 7,
    first: PLAYERS.keeper,
    mine: 7
  }, {
    id: 'wc-089',
    found: 3,
    first: PLAYERS.striker
  }, {
    id: 'wc-087',
    found: 41,
    first: PLAYERS.def,
    mine: 12
  }, {
    hidden: true,
    num: 288,
    rarity: 'ultra'
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
    active: 1
  }), /*#__PURE__*/React.createElement(Panel, {
    glow: "rgba(255,214,10,0.4)",
    style: {
      marginTop: 14,
      padding: '14px 16px',
      border: '1px solid rgba(255,214,10,0.3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 14,
      background: 'rgba(255,214,10,0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icons.crown, {
    size: 24,
    color: "#FFD60A"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Label, {
    style: {
      color: '#FFD60A'
    }
  }, "\u0417\u0430\u043B \u0441\u043B\u0430\u0432\u044B \xB7 \u0427\u041C 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 13,
      color: '#fff'
    }
  }, "\u041D\u0430\u0439\u0434\u0435\u043D\u043E \u0443\u043B\u044C\u0442\u0440\u0430 \u0440\u0435\u0434\u043A\u0438\u0445: ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'Unbounded'
    }
  }, "10 \u0438\u0437 150"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, rows.map(function (x, i) {
    if (x.hidden) return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: 12,
        borderRadius: 16,
        border: '1px dashed rgba(255,214,10,0.35)',
        background: 'rgba(255,214,10,0.03)',
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      num: "?",
      total: 288,
      locked: true,
      w: 50
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(RarityBadge, {
      rarity: "ultra",
      sm: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        fontFamily: 'Manrope',
        fontWeight: 800,
        fontSize: 13,
        color: '#fff'
      }
    }, "\u0415\u0449\u0451 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u043D\u0430\u0448\u0451\u043B"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 2,
        fontFamily: 'Manrope',
        fontSize: 11.5,
        color: 'var(--tx-3)'
      }
    }, "\u041D\u0430\u0439\u0434\u0438 \u043F\u0435\u0440\u0432\u044B\u043C \u2014 \u0438 \u0442\u044B \u043D\u0430 \u043F\u0435\u0440\u0432\u043E\u043C \u043C\u0435\u0441\u0442\u0435")));
    var card = CARDS[x.id],
      r = RARITY[card.rarity];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: 12,
        borderRadius: 16,
        background: x.mine ? "".concat(r.color, "10") : 'rgba(255,255,255,0.03)',
        border: "1px solid ".concat(x.mine ? r.color + '55' : 'rgba(255,255,255,0.06)'),
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      id: x.id,
      w: 50,
      glow: false
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(RarityBadge, {
      rarity: card.rarity,
      sm: true
    }), x.mine && /*#__PURE__*/React.createElement(Chip, {
      style: {
        fontSize: 8,
        padding: '3px 7px'
      },
      color: "#000",
      bg: "#fff",
      border: "#fff"
    }, "\u0423 \u0442\u0435\u0431\u044F")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        fontFamily: 'Manrope',
        fontWeight: 800,
        fontSize: 13,
        color: '#fff'
      }
    }, "\u2116", card.num, " \xB7 ", card.name), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Manrope',
        fontWeight: 700,
        fontSize: 11.5,
        color: 'var(--tx-2)'
      }
    }, "\u041D\u0430\u0448\u043B\u0438: ", /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: 'Unbounded',
        color: r.color
      }
    }, x.found)), x.mine && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontFamily: 'Manrope',
        fontWeight: 700,
        fontSize: 11.5,
        color: 'var(--tx-2)'
      }
    }, "\u0442\u044B \u2014 ", /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: 'Unbounded',
        color: '#fff'
      }
    }, x.mine, "-\u0439"))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 5,
        fontFamily: 'Manrope',
        fontSize: 11,
        color: 'var(--tx-3)'
      }
    }, "\u041F\u0435\u0440\u0432\u044B\u043C \u043D\u0430\u0448\u0451\u043B: ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--tx-2)',
        fontWeight: 700
      }
    }, x.first.nick, " ", x.first.tag))));
  }))));
}

// Album opened on the «Нет» filter — one of the entry points to buying packs
function AlbumMissing() {
  return /*#__PURE__*/React.createElement(Album, {
    initialFilter: 2
  });
}
Object.assign(window, {
  CollectionTile: CollectionTile,
  Collections: Collections,
  Album: Album,
  AlbumMissing: AlbumMissing,
  Stat: Stat,
  CardDetail: CardDetail,
  TopSegment: TopSegment,
  Registry: Registry
});