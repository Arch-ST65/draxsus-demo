"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Parents v2: adult gate and optional parent sign-in (the shop itself lives in shop.jsx)

// ─── 9.1 PARENT GATE ─────────────────────────────────────────
function ParentGate() {
  var nav = useNav();
  // Opened from the album («Докупить») it leads straight to the shop, from the profile — to parent sign-in
  var next = nav.data && nav.data.next || 'parentMode';
  var Behind = next === 'shop' ? Album : Profile;
  return /*#__PURE__*/React.createElement(Screen, {
    padTop: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.35,
      filter: 'blur(6px)'
    }
  }, /*#__PURE__*/React.createElement(Behind, null)), /*#__PURE__*/React.createElement("div", {
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
      padding: '22px 20px 38px',
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
      marginTop: 18,
      width: 52,
      height: 52,
      borderRadius: 16,
      background: 'rgba(255,214,10,0.12)',
      border: '1px solid rgba(255,214,10,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icons.lock, {
    size: 24,
    color: "#FFD60A"
  })), /*#__PURE__*/React.createElement(H, {
    size: 22,
    style: {
      marginTop: 14
    }
  }, "\u0422\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'Manrope',
      fontSize: 13,
      lineHeight: 1.45,
      color: 'var(--tx-2)'
    }
  }, "\u0414\u0430\u043B\u044C\u0448\u0435 \u043F\u043E\u043A\u0443\u043F\u043A\u0438, \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u044B \u0441 \u043F\u0440\u0438\u0437\u0430\u043C\u0438 \u0438 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0430\u044F \u043A\u043E\u043F\u0438\u044F. \u041F\u043E\u043F\u0440\u043E\u0441\u0438 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0440\u0435\u0448\u0438\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u0440."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      padding: '18px',
      borderRadius: 18,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Label, null, "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0431\u0443\u0434\u0435\u0442"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: 40,
      color: '#fff'
    }
  }, "7 \xD7 8 = ?")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 8
    }
  }, ['54', '56', '48', '63'].map(function (v) {
    return /*#__PURE__*/React.createElement("div", {
      key: v,
      onClick: function onClick() {
        return v === '56' && nav.go(next, nav.data);
      },
      style: {
        height: 56,
        borderRadius: 14,
        cursor: 'pointer',
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Unbounded',
        fontWeight: 800,
        fontSize: 20,
        color: '#fff'
      }
    }, v);
  })), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return nav.back();
    },
    style: {
      marginTop: 16,
      textAlign: 'center',
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--tx-3)',
      cursor: 'pointer'
    }
  }, "\u041D\u0430\u0437\u0430\u0434")));
}

// ─── 9.2 PARENT MODE (adult sign-in, optional) ───────────────
function ParentMode() {
  var nav = useNav();
  var perks = [[/*#__PURE__*/React.createElement(Icons.download, {
    size: 18,
    color: "#2ECC55"
  }), 'Резервная копия коллекции', 'Не потеряется, даже если код забудут'], [/*#__PURE__*/React.createElement(Icons.gift, {
    size: 18,
    color: "#FFD60A"
  }), 'Конкурсы с призами', 'Данные для доставки — только ваши'], [/*#__PURE__*/React.createElement(Icons.bolt, {
    size: 18,
    color: "#00D4FF"
  }), 'Уведомления о находках', 'Когда ребёнок найдёт редкую']];
  var logins = [['Войти через VK ID', '#0077FF'], ['Войти через Сбер ID', '#21A038'], ['Войти через Госуслуги', '#0D4CD3'], ['Войти по номеру телефона', null]];
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
      return nav.go('profile');
    }
  }, /*#__PURE__*/React.createElement(Icons.back, {
    size: 20,
    color: "#fff"
  })), /*#__PURE__*/React.createElement(Label, {
    style: {
      color: '#FFD60A'
    }
  }, "\u0414\u043B\u044F \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      borderRadius: 16,
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: ME.avatar,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Nick, {
    p: ME,
    size: 13
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Manrope',
      fontSize: 11.5,
      color: 'var(--tx-3)',
      marginTop: 2
    }
  }, "130 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A \xB7 3 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438"))), /*#__PURE__*/React.createElement(H, {
    size: 21,
    style: {
      marginTop: 18,
      lineHeight: 1.1
    }
  }, "\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u043A\u0430\u043A \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C,", /*#__PURE__*/React.createElement("br", null), "\u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, perks.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
      ic = _ref2[0],
      t = _ref2[1],
      s = _ref2[2];
    return /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 36,
        height: 36,
        borderRadius: 11,
        background: 'rgba(255,255,255,0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, ic), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Manrope',
        fontWeight: 800,
        fontSize: 13,
        color: '#fff'
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Manrope',
        fontSize: 11.5,
        color: 'var(--tx-3)',
        marginTop: 1
      }
    }, s)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, logins.map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      t = _ref4[0],
      c = _ref4[1];
    return /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        height: 50,
        borderRadius: 14,
        background: c ? '#fff' : 'rgba(255,255,255,0.06)',
        border: c ? 'none' : '1px solid rgba(255,255,255,0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        fontFamily: 'Manrope',
        fontWeight: 800,
        fontSize: 14,
        color: c ? '#0a0a0a' : '#fff'
      }
    }, c && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: 5,
        background: c
      }
    }), t);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontFamily: 'Manrope',
      fontSize: 11,
      lineHeight: 1.45,
      color: 'var(--tx-3)',
      textAlign: 'center'
    }
  }, "\u0414\u0430\u043D\u043D\u044B\u0435 \u0440\u0435\u0431\u0451\u043D\u043A\u0430 \u043D\u0435 \u0441\u043E\u0431\u0438\u0440\u0430\u044E\u0442\u0441\u044F. \u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043E\u0437\u0432\u0430\u0442\u044C \u0432 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442."), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return nav.go('shop');
    },
    style: {
      marginTop: 12,
      textAlign: 'center',
      fontFamily: 'Manrope',
      fontWeight: 800,
      fontSize: 13,
      color: '#FFD60A',
      cursor: 'pointer'
    }
  }, "\u0413\u0434\u0435 \u043A\u0443\u043F\u0438\u0442\u044C \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u044E\u0449\u0438\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u2192")));
}
Object.assign(window, {
  ParentGate: ParentGate,
  ParentMode: ParentMode
});