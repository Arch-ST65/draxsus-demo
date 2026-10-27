"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Dream Team v2 — lineup built only from cards the collector owns

function Slot(_ref) {
  var id = _ref.id,
    pos = _ref.pos,
    captain = _ref.captain,
    empty = _ref.empty,
    _ref$w = _ref.w,
    w = _ref$w === void 0 ? 50 : _ref$w;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      width: w + 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, empty ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: Math.round(w * 1.59),
      borderRadius: 6,
      border: '1.5px dashed rgba(255,255,255,0.35)',
      background: 'rgba(0,0,0,0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icons.plus, {
    size: 18,
    color: "rgba(255,255,255,0.6)"
  })) : /*#__PURE__*/React.createElement(Card, {
    id: id,
    w: w,
    glow: false
  }), captain && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -6,
      left: -6,
      width: 20,
      height: 20,
      borderRadius: 10,
      background: '#FFD60A',
      border: '2px solid #0b2a17',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: 9,
      color: '#000'
    }
  }, "C")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '2px 6px',
      borderRadius: 5,
      background: 'rgba(0,0,0,0.55)',
      fontFamily: 'Unbounded',
      fontWeight: 700,
      fontSize: 7.5,
      color: '#fff',
      letterSpacing: '0.06em'
    }
  }, pos));
}
function DreamTeam() {
  var nav = useNav();
  var rows = [[['bar-26', 'НАП'], ['bar-27', 'НАП', true], ['bar-28', 'НАП']], [['bar-29', 'ПЗ'], ['bar-31', 'ПЗ'], ['bar-30', 'ПЗ']], [['bar-32', 'ЗАЩ'], ['bar-34', 'ЗАЩ'], [null, 'ЗАЩ'], ['bar-33', 'ЗАЩ']], [['bar-36', 'ВРТ']]];
  return /*#__PURE__*/React.createElement(Screen, {
    tab: "album"
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
    })), /*#__PURE__*/React.createElement(H, {
      size: 24
    }, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 20px 0',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Chip, null, "Barcelona 25/26 ", /*#__PURE__*/React.createElement(Icons.chev, {
    size: 10,
    color: "#fff"
  })), /*#__PURE__*/React.createElement(Chip, null, "4-3-3 ", /*#__PURE__*/React.createElement(Icons.chev, {
    size: 10,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'baseline',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 10,
      color: 'var(--tx-3)',
      letterSpacing: '0.1em'
    }
  }, "\u0420\u0415\u0419\u0422\u0418\u041D\u0413"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: 22,
      color: '#2ECC55'
    }
  }, "84"))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '12px 16px 0',
      height: 440,
      borderRadius: 22,
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #14482a 0%, #0c2f1a 100%)',
      border: '1px solid rgba(46,204,85,0.25)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 10,
      border: '1.5px solid rgba(255,255,255,0.16)',
      borderRadius: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 10,
      right: 10,
      top: '50%',
      height: 1.5,
      background: 'rgba(255,255,255,0.16)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: 86,
      height: 86,
      marginLeft: -43,
      marginTop: -43,
      borderRadius: '50%',
      border: '1.5px solid rgba(255,255,255,0.16)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 10,
      width: 150,
      height: 56,
      marginLeft: -75,
      border: '1.5px solid rgba(255,255,255,0.16)',
      borderBottom: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '16px 8px 12px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, rows.map(function (row, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        justifyContent: 'space-evenly'
      }
    }, row.map(function (_ref2, j) {
      var _ref3 = _slicedToArray(_ref2, 3),
        id = _ref3[0],
        pos = _ref3[1],
        cap = _ref3[2];
      return /*#__PURE__*/React.createElement(Slot, {
        key: j,
        id: id,
        pos: pos,
        captain: cap,
        empty: !id
      });
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '10px 16px 0',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '10px 12px',
      borderRadius: 16,
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Card, {
    id: "bar-37",
    w: 30,
    glow: false
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    style: {
      fontSize: 9
    }
  }, "\u0422\u0440\u0435\u043D\u0435\u0440"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Manrope',
      fontWeight: 800,
      fontSize: 12,
      color: '#fff',
      marginTop: 2
    }
  }, "\u0425\u0430\u043D\u0441\u0438 \u0424\u043B\u0438\u043A"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1.25,
      padding: '10px 12px',
      borderRadius: 16,
      background: 'linear-gradient(135deg, rgba(255,31,45,0.16), rgba(255,31,45,0.04))',
      border: '1px solid rgba(255,31,45,0.35)'
    }
  }, /*#__PURE__*/React.createElement(Label, {
    style: {
      fontSize: 9,
      color: 'var(--red)'
    }
  }, "\u041C\u0430\u0442\u0447 \u043D\u0435\u0434\u0435\u043B\u0438 \xB7 \u0441\u0431"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: 13,
      color: '#fff'
    }
  }, "84"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Manrope',
      fontSize: 11,
      color: 'var(--tx-3)'
    }
  }, "vs"), /*#__PURE__*/React.createElement(Avatar, {
    name: PLAYERS.keeper.avatar,
    size: 20,
    ring: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: 13,
      color: '#fff'
    }
  }, "81")))));
}
Object.assign(window, {
  Slot: Slot,
  DreamTeam: DreamTeam
});