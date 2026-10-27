"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Mini-game «Чеканка» (keepy-uppy). Hamster-style tapper, Flappy-Bird rules:
// one tap anywhere = kick. Only a tap while the ball is at the foot counts; a tap into thin air
// makes the fox stumble for a moment. Timing decides where the ball goes: a clean kick sends it
// straight up, a sloppy one pushes it sideways, the fox has to run after it — and can't always make it.
// Reaching a threshold in a single attempt gives a guaranteed prize.

var GAME = {
  W: 390,
  GROUND_Y: 806,
  SPRITE_H: 360,
  BALL_R: 28,
  FOOT_DX: 23,
  // the raised boot sits this far from the sprite centre
  CONTACT_Y: 694,
  // ball centre at the moment it meets the raised boot
  // Tuned with bot playtests (150 runs per skill): timing noise 40 ms → median 6 kicks, 34% reach 10;
  // 22 ms → median 45, 39% reach 50, 3% reach 100.
  REACH_TOP: 150,
  REACH_BOTTOM: 80,
  REACH_X: 72,
  IDEAL_UP: 0,
  REACH_SHRINK: 0.005,
  // the window above the foot shrinks with every kick (to −30% at kick 60)
  G0: 1450,
  G_GROWTH: 0.015,
  G_CAP: 70,
  // the ball gets faster with every kick
  H_MIN: 300,
  H_MAX: 370,
  H_SHRINK: 1.2,
  DRIFT: 240,
  DRIFT_GROWTH: 0.02,
  // sideways push of the worst possible kick, px/s
  CHAR_SPEED: 160,
  CHAR_GROWTH: 0.002,
  // how fast the fox runs to get under the ball, px/s
  WHIFF_MS: 330,
  // a tap with the ball out of reach locks the fox for this long
  X_MIN: 60,
  X_MAX: 330
};
// ?easy in the URL makes the game forgiving — for recording the demo clip, not for players
if (new URLSearchParams(location.search).has('easy')) Object.assign(GAME, {
  REACH_TOP: 220,
  REACH_BOTTOM: 90,
  G0: 1250,
  G_GROWTH: 0.006,
  DRIFT: 90,
  DRIFT_GROWTH: 0.005,
  WHIFF_MS: 120
});
var PRIZES = [{
  at: 10,
  title: '+20 очков',
  sub: 'в рейтинг недели',
  icon: 'bolt',
  color: '#00D4FF'
}, {
  at: 25,
  title: 'Значок «Чеканщик»',
  sub: 'в профиль',
  icon: 'star',
  color: '#2ECC55'
}, {
  at: 50,
  title: 'Карточка «Золотая нога»',
  sub: 'эксклюзив, нет в пачках',
  icon: 'cards',
  color: '#FFD60A'
}, {
  at: 100,
  title: 'Промокод −15% на набор',
  sub: 'для родителей',
  icon: 'gift',
  color: '#FF4856',
  parent: true
}, {
  at: 200,
  title: 'Настоящая карточка «Чемпион»',
  sub: 'тираж 100 шт. · доставка через родителей',
  icon: 'crown',
  color: '#B14BFF',
  parent: true
}];
// Prototype stand-in for what the server would keep per player
var GAME_STATE = {
  best: 41,
  attempts: 3,
  maxAttempts: 5,
  claimed: new Set([10, 25])
};

// The next prize still to win: above the current score and not claimed yet
var nextPrize = function nextPrize(score) {
  return PRIZES.find(function (p) {
    return p.at > score && !GAME_STATE.claimed.has(p.at);
  }) || null;
};
var gravity = function gravity(score) {
  return GAME.G0 * (1 + Math.min(score, GAME.G_CAP) * GAME.G_GROWTH);
};
var reachTop = function reachTop(score) {
  return GAME.CONTACT_Y - GAME.REACH_TOP * (1 - Math.min(score, 60) * GAME.REACH_SHRINK);
};
var clamp = function clamp(v, a, b) {
  return Math.max(a, Math.min(b, v));
};
var rand = function rand(a, b) {
  return a + Math.random() * (b - a);
};
// Seconds until a falling ball reaches the foot height
function timeToContact(s) {
  var d = s.vy * s.vy + 2 * s.g * (GAME.CONTACT_Y - s.y);
  return d < 0 ? 0 : (-s.vy + Math.sqrt(d)) / s.g;
}

// Attempts refill at local midnight
function untilRefill() {
  var ms = new Date().setHours(24, 0, 0, 0) - Date.now();
  var p = function p(n) {
    return String(n).padStart(2, '0');
  };
  return "".concat(Math.floor(ms / 3.6e6), ":").concat(p(Math.floor(ms / 6e4) % 60), ":").concat(p(Math.floor(ms / 1000) % 60));
}
function Countdown() {
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    tick = _React$useState2[1];
  React.useEffect(function () {
    var id = setInterval(function () {
      return tick(function (x) {
        return x + 1;
      });
    }, 1000);
    return function () {
      return clearInterval(id);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, untilRefill());
}
var FB_COLOR = {
  'ИДЕАЛЬНО!': '#FFD60A',
  'КРИВО!': '#FF8A00',
  'МИМО': 'rgba(255,255,255,0.55)'
};
var GAME_CSS = "\n@keyframes fbPop { 0% { transform: translate(-50%, 0) scale(0.6); opacity: 0; } 25% { transform: translate(-50%, 0) scale(1.12); opacity: 1; } 100% { transform: translate(-50%, -26px) scale(1); opacity: 0; } }\n@keyframes plusUp { 0% { transform: translate(-50%, 0) scale(0.7); opacity: 0; } 20% { transform: translate(-50%, -6px) scale(1.15); opacity: 1; } 100% { transform: translate(-50%, -54px) scale(1); opacity: 0; } }\n@keyframes ringOut { 0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0.9; } 100% { transform: translate(-50%, -50%) scale(2.3); opacity: 0; } }\n@keyframes breathe { 0%, 100% { transform: scale(1, 1); } 50% { transform: scale(1.012, 1.028) translateY(-2px); } }\n@keyframes hop { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-8px) rotate(-1.5deg); } }\n@keyframes kickPop { 0% { transform: scale(1, 1); } 35% { transform: scale(1.05, 0.95) translateY(4px); } 100% { transform: scale(1, 1); } }";
var CHAR_ANIM = {
  breathe: 'breathe 1.9s ease-in-out infinite',
  hop: 'hop 0.3s ease-in-out infinite',
  kick: 'kickPop 0.22s ease-out'
};

// ─── STAGE: pure view, used both by the live game and by static board frames ─
function GameStage(_ref) {
  var _ref$score = _ref.score,
    score = _ref$score === void 0 ? 0 : _ref$score,
    _ref$best = _ref.best,
    best = _ref$best === void 0 ? GAME_STATE.best : _ref$best,
    _ref$attempts = _ref.attempts,
    attempts = _ref$attempts === void 0 ? GAME_STATE.attempts : _ref$attempts,
    _ref$pose = _ref.pose,
    pose = _ref$pose === void 0 ? 'ready' : _ref$pose,
    _ref$mirror = _ref.mirror,
    mirror = _ref$mirror === void 0 ? false : _ref$mirror,
    _ref$charX = _ref.charX,
    charX = _ref$charX === void 0 ? 195 : _ref$charX,
    _ref$ball = _ref.ball,
    ball = _ref$ball === void 0 ? {
      x: 195,
      y: 400,
      rot: 0
    } : _ref$ball,
    feedback = _ref.feedback,
    _ref$fbKey = _ref.fbKey,
    fbKey = _ref$fbKey === void 0 ? 0 : _ref$fbKey,
    kickMark = _ref.kickMark,
    _ref$phase = _ref.phase,
    phase = _ref$phase === void 0 ? 'ready' : _ref$phase,
    _ref$anim = _ref.anim,
    anim = _ref$anim === void 0 ? 'breathe' : _ref$anim,
    onTap = _ref.onTap,
    onExit = _ref.onExit,
    onScan = _ref.onScan,
    onRefill = _ref.onRefill,
    ballRef = _ref.ballRef,
    charRef = _ref.charRef,
    charInnerRef = _ref.charInnerRef,
    shadowRef = _ref.shadowRef,
    dim = _ref.dim;
  var np = nextPrize(score);
  var fbColor = FB_COLOR[feedback] || 'var(--red)';
  var live = phase === 'play' || phase === 'fall';
  return /*#__PURE__*/React.createElement("div", {
    onPointerDown: onTap,
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      touchAction: 'none',
      userSelect: 'none',
      cursor: onTap ? 'pointer' : 'default',
      background: '#05050a'
    }
  }, /*#__PURE__*/React.createElement("style", null, GAME_CSS), /*#__PURE__*/React.createElement("img", {
    src: "assets/game/stadium.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center bottom'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(5,5,10,0.85) 0%, rgba(5,5,10,0.25) 32%, rgba(5,5,10,0) 52%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: shadowRef,
    style: {
      position: 'absolute',
      top: GAME.GROUND_Y - 8,
      left: ball.x - 28,
      width: 56,
      height: 16,
      borderRadius: '50%',
      background: 'rgba(0,0,0,0.42)',
      filter: 'blur(3px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: charRef,
    style: {
      position: 'absolute',
      top: GAME.GROUND_Y - GAME.SPRITE_H,
      left: charX,
      width: 220,
      height: GAME.SPRITE_H,
      transform: 'translateX(-50%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 30,
      right: 30,
      bottom: -9,
      height: 22,
      borderRadius: '50%',
      background: 'rgba(0,0,0,0.5)',
      filter: 'blur(4px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: charInnerRef,
    style: {
      position: 'absolute',
      inset: 0,
      transformOrigin: '50% 100%',
      animation: CHAR_ANIM[anim],
      filter: 'drop-shadow(0 10px 18px rgba(0,0,0,0.5))'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/game/fox-ready.png",
    alt: "",
    style: {
      position: 'absolute',
      height: GAME.SPRITE_H,
      left: '50%',
      bottom: 0,
      transform: 'translateX(-50%)',
      opacity: pose === 'ready' ? 1 : 0
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "assets/game/fox-kick.png",
    alt: "",
    style: {
      position: 'absolute',
      height: GAME.SPRITE_H,
      left: '50%',
      bottom: 0,
      transform: "translateX(-50%) scaleX(".concat(mirror ? -1 : 1, ")"),
      opacity: pose === 'kick' ? 1 : 0
    }
  }))), kickMark && /*#__PURE__*/React.createElement(React.Fragment, {
    key: 'kick-' + kickMark.key
  }, live && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: kickMark.x,
      top: kickMark.y,
      width: 70,
      height: 70,
      borderRadius: '50%',
      border: "3px solid ".concat(kickMark.perfect ? '#FFD60A' : 'rgba(255,255,255,0.7)'),
      animation: 'ringOut 0.45s ease-out forwards',
      transform: 'translate(-50%, -50%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: kickMark.x,
      top: kickMark.y - 70,
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: 26,
      color: kickMark.perfect ? '#FFD60A' : '#fff',
      textShadow: '0 4px 14px rgba(0,0,0,0.6)',
      animation: live ? 'plusUp 0.7s ease-out forwards' : 'none',
      transform: 'translate(-50%, 0)'
    }
  }, kickMark.perfect ? '+1 ★' : '+1')), /*#__PURE__*/React.createElement("img", {
    ref: ballRef,
    src: "assets/game/ball.png",
    alt: "",
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: GAME.BALL_R * 2,
      height: GAME.BALL_R * 2,
      transform: "translate(".concat(ball.x - GAME.BALL_R, "px, ").concat(ball.y - GAME.BALL_R, "px) rotate(").concat(ball.rot || 0, "deg)"),
      filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.5))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 58,
      left: 20,
      right: 20,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onPointerDown: function onPointerDown(e) {
      e.stopPropagation();
      onExit && onExit();
    }
  }, /*#__PURE__*/React.createElement(IconBtn, null, /*#__PURE__*/React.createElement(Icons.close, {
    size: 18,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement(Chip, {
    color: "#FFD60A",
    bg: "rgba(255,214,10,0.12)",
    border: "rgba(255,214,10,0.4)"
  }, /*#__PURE__*/React.createElement(Icons.bolt, {
    size: 11,
    color: "#FFD60A"
  }), attempts, " \u0438\u0437 ", GAME_STATE.maxAttempts)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 104,
      left: 0,
      right: 0,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: 76,
      lineHeight: 1,
      color: '#fff',
      textShadow: '0 6px 24px rgba(0,0,0,0.6)'
    }
  }, score), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: 'Manrope',
      fontWeight: 800,
      fontSize: 11,
      color: 'rgba(255,255,255,0.65)',
      letterSpacing: '0.16em'
    }
  }, "\u0423\u0414\u0410\u0420\u041E\u0412 \xB7 \u0420\u0415\u041A\u041E\u0420\u0414 ", Math.max(best, score))), np && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 214,
      left: 40,
      right: 40,
      padding: '9px 12px',
      borderRadius: 14,
      background: 'rgba(8,8,12,0.72)',
      border: "1px solid ".concat(np.color, "55")
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 11,
      color: 'var(--tx-2)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u0414\u043E \u043F\u0440\u0438\u0437\u0430: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, np.title)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Unbounded',
      color: np.color
    }
  }, score, "/", np.at)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    value: score,
    total: np.at,
    color: np.color,
    height: 5
  }))), feedback && /*#__PURE__*/React.createElement("div", {
    key: 'fb-' + fbKey,
    style: {
      position: 'absolute',
      top: 282,
      left: '50%',
      transform: 'translate(-50%, 0)',
      whiteSpace: 'nowrap',
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: feedback === 'МИМО' ? 20 : 30,
      color: fbColor,
      textShadow: "0 0 24px ".concat(fbColor),
      animation: live ? 'fbPop 0.9s ease-out forwards' : 'none'
    }
  }, feedback), phase === 'ready' && attempts <= 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 262,
      left: 24,
      right: 24,
      padding: 16,
      borderRadius: 20,
      background: 'rgba(10,10,16,0.94)',
      border: '1px solid rgba(255,214,10,0.45)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icons.bolt, {
    size: 26,
    color: "#FFD60A"
  })), /*#__PURE__*/React.createElement("div", {
    className: "t-d",
    style: {
      marginTop: 8,
      fontSize: 17,
      color: '#fff',
      textTransform: 'uppercase'
    }
  }, "\u041F\u043E\u043F\u044B\u0442\u043A\u0438 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: 'Manrope',
      fontSize: 13,
      lineHeight: 1.45,
      color: 'var(--tx-2)'
    }
  }, "5 \u043D\u043E\u0432\u044B\u0445 \u043F\u043E\u043F\u044B\u0442\u043E\u043A \u0447\u0435\u0440\u0435\u0437 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#FFD60A',
      fontFamily: 'JetBrains Mono'
    }
  }, /*#__PURE__*/React.createElement(Countdown, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    sm: true,
    full: true,
    kind: "gold",
    onClick: onScan,
    icon: /*#__PURE__*/React.createElement(Icons.scan, {
      size: 15,
      color: "#000"
    })
  }, "+1 \u0437\u0430 \u043D\u043E\u0432\u0443\u044E \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")), onRefill && /*#__PURE__*/React.createElement("div", {
    onClick: onRefill,
    style: {
      marginTop: 10,
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 11.5,
      color: 'var(--tx-3)',
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  }, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C 5 \u043F\u043E\u043F\u044B\u0442\u043E\u043A \xB7 \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F\u0435")), phase === 'ready' && attempts > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 268,
      left: 30,
      right: 30,
      padding: '12px 14px',
      borderRadius: 18,
      background: 'rgba(8,8,12,0.82)',
      border: '1px solid rgba(255,255,255,0.12)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-d",
    style: {
      fontSize: 15,
      color: '#fff',
      textTransform: 'uppercase'
    }
  }, "\u0422\u0430\u043F\u043D\u0438 \u2014 \u043C\u044F\u0447 \u043F\u043E\u043B\u0435\u0442\u0438\u0442 \u0432\u043D\u0438\u0437"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      fontFamily: 'Manrope',
      fontSize: 12,
      lineHeight: 1.4,
      color: 'var(--tx-2)'
    }
  }, "\u0422\u0430\u043F\u0430\u0439 \u0432 \u043B\u044E\u0431\u043E\u043C \u043C\u0435\u0441\u0442\u0435, \u043A\u043E\u0433\u0434\u0430 \u043C\u044F\u0447 \u043E\u043F\u0443\u0441\u0442\u0438\u0442\u0441\u044F \u0434\u043E \u043A\u043E\u043B\u0435\u043D\u0430. \u0422\u043E\u0447\u043D\u043E \u2014 \u043C\u044F\u0447 \u043B\u0435\u0442\u0438\u0442 \u0440\u043E\u0432\u043D\u043E, \u043A\u0440\u0438\u0432\u043E \u2014 \u0432 \u0441\u0442\u043E\u0440\u043E\u043D\u0443.")), dim && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(4,4,8,0.62)'
    }
  }));
}

// ─── LIVE GAME ───────────────────────────────────────────────
function KeepyUppy(_ref2) {
  var onOver = _ref2.onOver,
    onExit = _ref2.onExit,
    onScan = _ref2.onScan;
  var _React$useState3 = React.useState({
      phase: 'ready',
      score: 0,
      pose: 'ready',
      mirror: false,
      feedback: null,
      fbKey: 0,
      kickMark: null
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    ui = _React$useState4[0],
    setUi = _React$useState4[1];
  var ballRef = React.useRef(),
    charRef = React.useRef(),
    charInnerRef = React.useRef(),
    shadowRef = React.useRef();
  var sim = React.useRef({
    phase: 'ready',
    score: 0,
    x: 195,
    y: 412,
    vx: 0,
    vy: 0,
    rot: 0,
    g: GAME.G0,
    charX: 195,
    poseUntil: 0,
    lockUntil: 0,
    landedAt: 0,
    reason: null,
    done: false,
    anim: 'breathe',
    now: 0
  });
  var kick = function kick(s, q) {
    var g = gravity(s.score);
    s.g = g;
    var h = rand(GAME.H_MIN, GAME.H_MAX) * (0.8 + 0.2 * q) - Math.min(s.score, 50) * GAME.H_SHRINK;
    s.vy = -Math.sqrt(2 * g * h);
    var drift = GAME.DRIFT * (1 + Math.min(s.score, GAME.G_CAP) * GAME.DRIFT_GROWTH) * (1 - q) + rand(10, 40);
    var dir = Math.random() < 0.5 ? -1 : 1;
    if (s.x < 150) dir = 1;else if (s.x > 240) dir = -1; // keep the ball on screen
    s.vx = dir * drift;
  };
  var showPose = function showPose(side) {
    var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
    sim.current.poseUntil = sim.current.now + ms;
    setUi(function (u) {
      return _objectSpread(_objectSpread({}, u), {}, {
        pose: 'kick',
        mirror: side === 1
      });
    });
  };
  var say = function say(feedback) {
    return setUi(function (u) {
      return _objectSpread(_objectSpread({}, u), {}, {
        feedback: feedback,
        fbKey: u.fbKey + 1
      });
    });
  };
  var fail = function fail(s, reason) {
    s.phase = 'fall';
    s.reason = reason;
    say(reason);
    setUi(function (u) {
      return _objectSpread(_objectSpread({}, u), {}, {
        phase: 'fall'
      });
    });
  };
  var tap = function tap() {
    var s = sim.current;
    if (s.phase === 'ready') {
      if (GAME_STATE.attempts <= 0) return;
      GAME_STATE.attempts -= 1;
      s.phase = 'play';
      s.vy = 0;
      s.vx = 0;
      s.g = gravity(0); // the ball drops from above the head
      setUi(function (u) {
        return _objectSpread(_objectSpread({}, u), {}, {
          phase: 'play'
        });
      });
      return;
    }
    if (s.phase !== 'play' || s.now < s.lockUntil) return;
    var top = reachTop(s.score),
      bottom = GAME.CONTACT_Y + GAME.REACH_BOTTOM;
    var side = s.x < s.charX ? 0 : 1;
    var inReach = s.vy > 0 && s.y >= top && s.y <= bottom && Math.abs(s.x - s.charX) <= GAME.REACH_X;
    if (!inReach) {
      // kicked thin air: the fox stumbles and can't kick for a moment
      s.lockUntil = s.now + GAME.WHIFF_MS;
      showPose(side, 220);
      say('МИМО');
      return;
    }
    var ideal = GAME.CONTACT_Y - GAME.IDEAL_UP;
    var q = clamp(s.y < ideal ? 1 - (ideal - s.y) / (ideal - top) : 1 - (s.y - ideal) / (bottom - ideal), 0, 1);
    s.score += 1;
    kick(s, q);
    showPose(side);
    var perfect = q > 0.8;
    setUi(function (u) {
      return _objectSpread(_objectSpread({}, u), {}, {
        score: s.score,
        kickMark: {
          key: s.score,
          x: s.x,
          y: s.y,
          perfect: perfect
        },
        feedback: perfect ? 'ИДЕАЛЬНО!' : q < 0.3 ? 'КРИВО!' : u.feedback,
        fbKey: perfect || q < 0.3 ? u.fbKey + 1 : u.fbKey
      });
    });
  };
  React.useEffect(function () {
    var raf,
      last = performance.now();
    var setAnim = function setAnim(s, a) {
      if (s.anim !== a) {
        s.anim = a;
        if (charInnerRef.current) charInnerRef.current.style.animation = CHAR_ANIM[a];
      }
    };
    var frame = function frame(t, dt) {
      var s = sim.current;
      s.now = t;
      var moving = false;
      if (s.phase === 'ready') {
        s.x = s.charX;
        s.y = 412 + Math.sin(t / 300) * 6;
        s.rot += 40 * dt;
      } else {
        s.vy += s.g * dt;
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        s.rot += (s.vx * 1.4 + 220) * dt;
        if (s.phase === 'play') {
          if (s.x < GAME.X_MIN && s.vx < 0 || s.x > GAME.X_MAX && s.vx > 0) s.vx = -s.vx * 0.8;
          // the fox runs to where the ball will come down, but only so fast
          var target = clamp(s.x + s.vx * timeToContact(s), 70, 320);
          var step = GAME.CHAR_SPEED * (1 + Math.min(s.score, 60) * GAME.CHAR_GROWTH) * dt;
          var dx = clamp(target - s.charX, -step, step);
          s.charX += dx;
          moving = Math.abs(dx) > step * 0.5;
          if (s.vy > 0 && s.y > GAME.CONTACT_Y + GAME.REACH_BOTTOM) fail(s, Math.abs(s.x - s.charX) > GAME.REACH_X ? 'НЕ ДОТЯНУЛСЯ!' : 'ПОЗДНО!');
        } else if (s.phase === 'fall') {
          if (s.x < GAME.BALL_R || s.x > GAME.W - GAME.BALL_R) s.vx = -s.vx;
          if (s.y >= GAME.GROUND_Y - GAME.BALL_R) {
            s.y = GAME.GROUND_Y - GAME.BALL_R;
            if (Math.abs(s.vy) > 220) {
              s.vy = -s.vy * 0.42;
              s.vx *= 0.7;
            } else {
              s.vy = 0;
              s.vx *= 0.94;
            }
            if (!s.landedAt) s.landedAt = t;
          }
          if (s.landedAt && t - s.landedAt > 900 && !s.done) {
            s.done = true;
            onOver && onOver(s.score, s.reason);
          }
        }
      }
      if (s.poseUntil && t > s.poseUntil) {
        s.poseUntil = 0;
        setUi(function (u) {
          return _objectSpread(_objectSpread({}, u), {}, {
            pose: 'ready'
          });
        });
      }
      setAnim(s, s.poseUntil ? 'kick' : moving ? 'hop' : 'breathe');
      if (ballRef.current) ballRef.current.style.transform = "translate(".concat(s.x - GAME.BALL_R, "px, ").concat(s.y - GAME.BALL_R, "px) rotate(").concat(s.rot, "deg)");
      if (charRef.current) charRef.current.style.left = s.charX + 'px';
      if (shadowRef.current) {
        var k = Math.max(0.3, 1 - (GAME.GROUND_Y - s.y) / 650);
        shadowRef.current.style.left = s.x - 28 + 'px';
        shadowRef.current.style.transform = "scale(".concat(k, ")");
        shadowRef.current.style.opacity = k;
      }
    };
    var _loop = function loop(t) {
      frame(t, Math.min(0.033, (t - last) / 1000));
      last = t;
      raf = requestAnimationFrame(_loop);
    };
    raf = requestAnimationFrame(_loop);
    // Deterministic stepping for automated playtests (runs the same frame code without rAF)
    var virtualT = performance.now();
    var advance = function advance(ms, onFrame) {
      for (var i = 0; i < ms / (1000 / 60); i++) {
        virtualT += 1000 / 60;
        frame(virtualT, 1 / 60);
        if (onFrame && onFrame(sim.current) === false) break;
      }
    };
    var onKey = function onKey(e) {
      if (['Space', 'ArrowUp', 'Enter'].includes(e.code)) {
        e.preventDefault();
        tap();
      }
    };
    window.addEventListener('keydown', onKey);
    window.__game = {
      sim: sim.current,
      tap: tap,
      advance: advance
    }; // handy for automated playtests
    return function () {
      cancelAnimationFrame(raf);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  // Prototype-only escape hatch so testers don't get stuck after 5 drops
  var refill = function refill() {
    GAME_STATE.attempts = GAME_STATE.maxAttempts;
    setUi(function (u) {
      return _objectSpread({}, u);
    });
  };
  var s = sim.current;
  return /*#__PURE__*/React.createElement(GameStage, _extends({}, ui, {
    anim: s.anim,
    attempts: GAME_STATE.attempts,
    charX: s.charX,
    ball: s,
    onTap: function onTap() {
      return tap();
    },
    onExit: onExit,
    onScan: onScan,
    onRefill: refill,
    ballRef: ballRef,
    charRef: charRef,
    charInnerRef: charInnerRef,
    shadowRef: shadowRef
  }));
}

// ─── EXCLUSIVE PRIZE CARD «Золотая нога» ─────────────────────
function GoldBootCard(_ref3) {
  var _ref3$w = _ref3.w,
    w = _ref3$w === void 0 ? 200 : _ref3$w;
  var h = Math.round(w * 1.59),
    k = w / 200;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: w,
      height: h,
      borderRadius: 12 * k,
      padding: 4 * k,
      boxSizing: 'border-box',
      background: 'linear-gradient(135deg, #FFF3A6 0%, #D9A200 30%, #FFD60A 55%, #8A6100 100%)',
      boxShadow: '0 0 40px rgba(255,214,10,0.5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: 9 * k,
      overflow: 'hidden',
      background: '#0b0904'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/game/stadium.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.55
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(40,28,0,0.2) 0%, rgba(20,14,0,0.85) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10 * k,
      left: 0,
      right: 0,
      textAlign: 'center',
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: 17 * k,
      lineHeight: 1,
      color: '#FFD60A',
      letterSpacing: '0.02em'
    }
  }, "\u0417\u041E\u041B\u041E\u0422\u0410\u042F", /*#__PURE__*/React.createElement("br", null), "\u041D\u041E\u0413\u0410"), /*#__PURE__*/React.createElement("img", {
    src: "assets/game/fox-kick.png",
    alt: "",
    style: {
      position: 'absolute',
      height: 196 * k,
      bottom: 40 * k,
      left: '50%',
      transform: 'translateX(-50%) scaleX(-1)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "assets/game/ball.png",
    alt: "",
    style: {
      position: 'absolute',
      width: 34 * k,
      top: 66 * k,
      left: 120 * k
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12 * k,
      left: 0,
      right: 0,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Manrope',
      fontWeight: 800,
      fontSize: 9 * k,
      color: 'rgba(255,214,10,0.85)',
      letterSpacing: '0.14em'
    }
  }, "\u042D\u041A\u0421\u041A\u041B\u042E\u0417\u0418\u0412 \xB7 \u0427\u0415\u041A\u0410\u041D\u041A\u0410"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3 * k,
      fontFamily: 'Unbounded',
      fontWeight: 800,
      fontSize: 11 * k,
      color: '#fff'
    }
  }, "50 \u0423\u0414\u0410\u0420\u041E\u0412"))));
}
function PrizeIcon(_ref4) {
  var p = _ref4.p,
    _ref4$size = _ref4.size,
    size = _ref4$size === void 0 ? 18 : _ref4$size,
    color = _ref4.color;
  var Ic = Icons[p.icon];
  return /*#__PURE__*/React.createElement(Ic, {
    size: size,
    color: color || p.color
  });
}

// ─── 9.1 LOBBY ───────────────────────────────────────────────
function GameLobby() {
  var nav = useNav();
  var best = GAME_STATE.best,
    np = nextPrize(best);
  return /*#__PURE__*/React.createElement(Screen, {
    tab: "game"
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "\u0418\u0433\u0440\u0430"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 172,
      borderRadius: 22,
      overflow: 'hidden',
      border: '1px solid rgba(255,31,45,0.35)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/game/stadium.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 62%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(8,8,12,0.92) 30%, rgba(8,8,12,0.1) 75%)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "assets/game/fox-kick.png",
    alt: "",
    style: {
      position: 'absolute',
      height: 160,
      bottom: -6,
      right: 22,
      transform: 'scaleX(-1)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "assets/game/ball.png",
    alt: "",
    style: {
      position: 'absolute',
      width: 34,
      top: 18,
      right: 46
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      top: 16,
      right: 150
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    color: "#fff",
    bg: "var(--red)",
    border: "var(--red)",
    style: {
      fontSize: 8,
      padding: '3px 7px'
    }
  }, "\u041D\u043E\u0432\u043E\u0435"), /*#__PURE__*/React.createElement(H, {
    size: 28,
    style: {
      marginTop: 10
    }
  }, "\u0427\u0435\u043A\u0430\u043D\u043A\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 7,
      fontFamily: 'Manrope',
      fontSize: 12,
      lineHeight: 1.4,
      color: 'var(--tx-2)'
    }
  }, "\u041D\u0430\u0431\u0438\u0432\u0430\u0439 \u043C\u044F\u0447 \u0438 \u0437\u0430\u0431\u0438\u0440\u0430\u0439 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u0438\u0437\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Chip, null, "\u0420\u0435\u043A\u043E\u0440\u0434 ", best), /*#__PURE__*/React.createElement(Chip, {
    color: "#FFD60A",
    bg: "rgba(255,214,10,0.12)",
    border: "rgba(255,214,10,0.4)"
  }, /*#__PURE__*/React.createElement(Icons.bolt, {
    size: 10,
    color: "#FFD60A"
  }), GAME_STATE.attempts, "/", GAME_STATE.maxAttempts)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    full: true,
    onClick: function onClick() {
      return nav.go('gamePlay');
    },
    icon: /*#__PURE__*/React.createElement(Icons.ball, {
      size: 18,
      color: "#fff"
    })
  }, GAME_STATE.attempts > 0 ? "\u0418\u0433\u0440\u0430\u0442\u044C \xB7 \u26A1 ".concat(GAME_STATE.attempts) : /*#__PURE__*/React.createElement(React.Fragment, null, "\u041D\u043E\u0432\u044B\u0435 \u0447\u0435\u0440\u0435\u0437 ", /*#__PURE__*/React.createElement(Countdown, null)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement(H, {
    size: 14
  }, "\u041F\u0440\u0438\u0437\u044B \u0437\u0430 \u0443\u0434\u0430\u0440\u044B"), /*#__PURE__*/React.createElement(Label, {
    style: {
      letterSpacing: '0.04em'
    }
  }, "\u043F\u043E\u0434\u0440\u044F\u0434 \u0432 \u043E\u0434\u043D\u043E\u0439 \u043F\u043E\u043F\u044B\u0442\u043A\u0435")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, PRIZES.map(function (p) {
    var got = GAME_STATE.claimed.has(p.at),
      isNext = np && np.at === p.at;
    return /*#__PURE__*/React.createElement("div", {
      key: p.at,
      style: {
        height: 48,
        padding: '0 12px',
        borderRadius: 14,
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        background: isNext ? "".concat(p.color, "14") : 'rgba(255,255,255,0.03)',
        border: "1px solid ".concat(isNext ? p.color + '66' : 'rgba(255,255,255,0.06)')
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        fontFamily: 'Unbounded',
        fontWeight: 900,
        fontSize: 15,
        color: got ? 'var(--tx-3)' : p.color
      }
    }, p.at), /*#__PURE__*/React.createElement(PrizeIcon, {
      p: p,
      color: got ? '#55556A' : p.color
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Manrope',
        fontWeight: 800,
        fontSize: 12.5,
        color: got ? 'var(--tx-3)' : '#fff',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, p.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Manrope',
        fontSize: 10.5,
        color: 'var(--tx-3)',
        whiteSpace: 'nowrap'
      }
    }, p.sub)), got ? /*#__PURE__*/React.createElement(Icons.check, {
      size: 16,
      color: "#2ECC55"
    }) : isNext ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Unbounded',
        fontWeight: 800,
        fontSize: 10.5,
        color: p.color
      }
    }, best, "/", p.at) : /*#__PURE__*/React.createElement(Icons.lock, {
      size: 15,
      color: "#55556A"
    }));
  })), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return nav.go('scan');
    },
    style: {
      marginTop: 10,
      padding: '10px 12px',
      borderRadius: 14,
      background: 'rgba(255,214,10,0.07)',
      border: '1px solid rgba(255,214,10,0.28)',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icons.bolt, {
    size: 16,
    color: "#FFD60A"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: 'Manrope',
      fontSize: 12,
      color: 'var(--tx-2)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, "5 \u043F\u043E\u043F\u044B\u0442\u043E\u043A \u0432 \u0434\u0435\u043D\u044C"), " \xB7 +1 \u0437\u0430 \u043A\u0430\u0436\u0434\u0443\u044E \u043D\u043E\u0432\u0443\u044E \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443"), /*#__PURE__*/React.createElement(Icons.scan, {
    size: 16,
    color: "#FFD60A"
  }))));
}

// ─── 9.2 PLAY (live in the prototype) ────────────────────────
function GamePlay() {
  var nav = useNav();
  var over = function over(score, reason) {
    var fresh = PRIZES.filter(function (p) {
      return score >= p.at && !GAME_STATE.claimed.has(p.at);
    });
    fresh.forEach(function (p) {
      return GAME_STATE.claimed.add(p.at);
    });
    var prevBest = GAME_STATE.best;
    GAME_STATE.best = Math.max(GAME_STATE.best, score);
    if (fresh.length) nav.go('gamePrize', {
      score: score,
      prize: fresh[fresh.length - 1].at
    });else nav.go('gameOver', {
      score: score,
      reason: reason,
      prevBest: prevBest
    });
  };
  return /*#__PURE__*/React.createElement(Screen, {
    padTop: 0,
    flare: false
  }, /*#__PURE__*/React.createElement(KeepyUppy, {
    onOver: over,
    onExit: function onExit() {
      return nav.go('game');
    },
    onScan: function onScan() {
      return nav.go('scan');
    }
  }));
}

// Static frame of a running game for the Figma board
function GamePlayShot() {
  return /*#__PURE__*/React.createElement(Screen, {
    padTop: 0,
    flare: false
  }, /*#__PURE__*/React.createElement(GameStage, {
    score: 37,
    best: 41,
    attempts: 2,
    pose: "kick",
    charX: 212,
    ball: {
      x: 182,
      y: 560,
      rot: 35
    },
    kickMark: {
      key: 37,
      x: 92,
      y: 610,
      perfect: true
    },
    feedback: "\u0418\u0414\u0415\u0410\u041B\u042C\u041D\u041E!",
    phase: "shot",
    anim: "kick"
  }));
}

// Static frame: all attempts used (no prototype refill link on the board)
function GameNoAttempts() {
  return /*#__PURE__*/React.createElement(Screen, {
    padTop: 0,
    flare: false
  }, /*#__PURE__*/React.createElement(GameStage, {
    attempts: 0,
    phase: "ready",
    charX: 195,
    ball: {
      x: 195,
      y: 412,
      rot: 0
    }
  }));
}

// ─── 9.3 BALL DROPPED ────────────────────────────────────────
function GameOver() {
  var _d$prevBest;
  var nav = useNav();
  var d = nav.data || {
    score: 37,
    reason: 'ПОЗДНО!',
    prevBest: 41
  };
  var np = nextPrize(d.score);
  var record = d.score > ((_d$prevBest = d.prevBest) !== null && _d$prevBest !== void 0 ? _d$prevBest : GAME_STATE.best);
  return /*#__PURE__*/React.createElement(Screen, {
    padTop: 0,
    flare: false
  }, /*#__PURE__*/React.createElement(GameStage, {
    score: d.score,
    best: GAME_STATE.best,
    attempts: GAME_STATE.attempts,
    charX: 170,
    ball: {
      x: 318,
      y: GAME.GROUND_Y - GAME.BALL_R,
      rot: 120
    },
    phase: "over",
    dim: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      top: 250,
      borderRadius: 26,
      padding: '22px 18px 18px',
      background: '#101019',
      border: '1px solid rgba(255,31,45,0.35)',
      textAlign: 'center',
      boxShadow: '0 20px 60px rgba(0,0,0,0.6)'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    color: "#fff",
    bg: "var(--red)",
    border: "var(--red)"
  }, d.reason || 'Мяч упал'), /*#__PURE__*/React.createElement(H, {
    size: 26,
    style: {
      marginTop: 12
    }
  }, "\u041C\u044F\u0447 \u0443\u043F\u0430\u043B!"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: 64,
      lineHeight: 1,
      color: '#fff'
    }
  }, d.score), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 12,
      color: record ? '#FFD60A' : 'var(--tx-3)'
    }
  }, record ? 'Новый рекорд!' : "\u0443\u0434\u0430\u0440\u043E\u0432 \xB7 \u0440\u0435\u043A\u043E\u0440\u0434 ".concat(GAME_STATE.best)), np && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: '11px 12px',
      borderRadius: 14,
      background: "".concat(np.color, "12"),
      border: "1px solid ".concat(np.color, "55"),
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(PrizeIcon, {
    p: np
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: 'Manrope',
      fontSize: 12.5,
      color: 'var(--tx-2)'
    }
  }, "\u0415\u0449\u0451 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, np.at - d.score), " \u0434\u043E \u043F\u0440\u0438\u0437\u0430 \xAB", np.title, "\xBB")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    value: d.score,
    total: np.at,
    color: np.color,
    height: 5
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    full: true,
    onClick: function onClick() {
      return nav.go('gamePlay');
    }
  }, GAME_STATE.attempts > 0 ? "\u0415\u0449\u0451 \u0440\u0430\u0437 \xB7 \u26A1 ".concat(GAME_STATE.attempts) : 'Попытки закончились'), /*#__PURE__*/React.createElement(Btn, {
    full: true,
    kind: "ghost",
    onClick: function onClick() {
      return nav.go('game');
    }
  }, "\u0412 \u043B\u043E\u0431\u0431\u0438")), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return nav.go('scan');
    },
    style: {
      marginTop: 12,
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 12,
      color: '#FFD60A',
      cursor: 'pointer'
    }
  }, "+1 \u043F\u043E\u043F\u044B\u0442\u043A\u0430 \u0437\u0430 \u043D\u043E\u0432\u0443\u044E \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u2192 \u0421\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C")));
}

// ─── 9.4 GUARANTEED PRIZE ────────────────────────────────────
function GamePrize() {
  var nav = useNav();
  var d = nav.data || {
    score: 50,
    prize: 50
  };
  var p = PRIZES.find(function (x) {
    return x.at === d.prize;
  }) || PRIZES[2];
  var after = nextPrize(p.at);
  return /*#__PURE__*/React.createElement(Screen, {
    padTop: 0,
    flare: false,
    bg: "#04040A"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: "radial-gradient(circle at 50% 40%, ".concat(p.color, "55 0%, rgba(255,31,45,0.14) 34%, transparent 66%)")
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
      stroke: p.color,
      strokeWidth: "1.5"
    });
  })), /*#__PURE__*/React.createElement("div", {
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
      padding: '10px 18px',
      borderRadius: 999,
      background: "".concat(p.color, "22"),
      border: "1.5px solid ".concat(p.color),
      fontFamily: 'Unbounded',
      fontWeight: 900,
      fontSize: 11.5,
      color: p.color,
      letterSpacing: '0.14em',
      boxShadow: "0 0 30px ".concat(p.color, "77")
    }
  }, "\u2605 \u0413\u0410\u0420\u0410\u041D\u0422\u0418\u0420\u041E\u0412\u0410\u041D\u041D\u042B\u0419 \u041F\u0420\u0418\u0417 \u2605")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 128,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center'
    }
  }, p.at === 50 ? /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'rotate(-3deg)'
    }
  }, /*#__PURE__*/React.createElement(GoldBootCard, {
    w: 206
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180,
      height: 180,
      marginTop: 70,
      borderRadius: 48,
      background: "".concat(p.color, "22"),
      border: "2px solid ".concat(p.color),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(PrizeIcon, {
    p: p,
    size: 90
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 476,
      left: 20,
      right: 20,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(H, {
    size: 30
  }, p.at, " \u0443\u0434\u0430\u0440\u043E\u0432!"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: 'Manrope',
      fontSize: 14,
      lineHeight: 1.45,
      color: 'var(--tx-2)'
    }
  }, p.at === 50 ? 'Карточка «Золотая нога» добавлена в альбом. В пачках такой нет.' : "\u0422\u0432\u043E\u0439 \u043F\u0440\u0438\u0437: ".concat(p.title, "."))), after && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 580,
      left: 20,
      right: 20,
      padding: '12px 14px',
      borderRadius: 16,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.09)',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(PrizeIcon, {
    p: after,
    size: 22
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: 'Manrope',
      fontSize: 12.5,
      lineHeight: 1.4,
      color: 'var(--tx-2)'
    }
  }, "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043F\u0440\u0438\u0437 \u2014 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, after.at, " \u0443\u0434\u0430\u0440\u043E\u0432"), ": ", after.title, after.parent ? ' (через родителей)' : '')), /*#__PURE__*/React.createElement("div", {
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
    icon: /*#__PURE__*/React.createElement(Icons.cards, {
      size: 18,
      color: "#000"
    }),
    onClick: function onClick() {
      return nav.go('albumWc');
    }
  }, "\u0417\u0430\u0431\u0440\u0430\u0442\u044C \u0432 \u0430\u043B\u044C\u0431\u043E\u043C"), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return nav.go('gamePlay');
    },
    style: {
      textAlign: 'center',
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--tx-3)',
      cursor: 'pointer'
    }
  }, "\u0418\u0433\u0440\u0430\u0442\u044C \u0435\u0449\u0451 \xB7 \u26A1 ", GAME_STATE.attempts)));
}
Object.assign(window, {
  GAME: GAME,
  PRIZES: PRIZES,
  GAME_STATE: GAME_STATE,
  nextPrize: nextPrize,
  gravity: gravity,
  reachTop: reachTop,
  timeToContact: timeToContact,
  GameStage: GameStage,
  KeepyUppy: KeepyUppy,
  GoldBootCard: GoldBootCard,
  PrizeIcon: PrizeIcon,
  GameLobby: GameLobby,
  GamePlay: GamePlay,
  GamePlayShot: GamePlayShot,
  GameNoAttempts: GameNoAttempts,
  GameOver: GameOver,
  GamePrize: GamePrize,
  Countdown: Countdown,
  untilRefill: untilRefill
});