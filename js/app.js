const {
  useState,
  useEffect
} = React;
const ROUTES = {
  onb1: Onb1,
  onb2: Onb2,
  onb3: Onb3,
  nick: NickBuilder,
  collCode: CollectorCode,
  album: Collections,
  albumWc: Album,
  detail: CardDetail,
  scan: Scan,
  unlock: Unlock,
  finding: Finding,
  team: DreamTeam,
  trades: Trades,
  tradeQr: TradeQr,
  tradeConfirm: TradeConfirm,
  top: Top,
  registry: Registry,
  feed: Feed,
  profile: Profile,
  parentGate: ParentGate,
  parentMode: ParentMode,
  askParent: AskParent,
  parentWeb: ParentWeb,
  shop: Shop,
  game: GameLobby,
  gamePlay: GamePlay,
  gameOver: GameOver,
  gamePrize: GamePrize
};
// Screens that open as a sheet sliding up; everything else cross-fades
const SHEETS = new Set(['scan', 'unlock', 'detail', 'tradeQr', 'tradeConfirm', 'parentGate', 'askParent']);

// On a phone (or with ?app) the prototype runs full screen as the app itself, without the drawn device frame.
const IS_PHONE = new URLSearchParams(location.search).has('app') || navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches || window.matchMedia('(pointer: coarse)').matches && Math.min(screen.width, screen.height) < 600;
if (IS_PHONE) document.documentElement.classList.add('phone');
function PrototypeApp({
  bare
}) {
  // ?s=<route> opens a specific screen (handy for recording the demo clip)
  const start = new URLSearchParams(location.search).get('s');
  const [stack, setStack] = useState([{
    name: ROUTES[start] ? start : 'onb1',
    data: null
  }]);
  const cur = stack[stack.length - 1];
  const nav = {
    current: cur.name,
    data: cur.data,
    go: (name, data) => ROUTES[name] && setStack(s => [...s, {
      name,
      data: data ?? null
    }]),
    back: () => setStack(s => s.length > 1 ? s.slice(0, -1) : s)
  };
  const Comp = ROUTES[cur.name];
  const screen = /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: '#08080C',
      fontFamily: 'Manrope, system-ui, sans-serif',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: stack.length + cur.name,
    style: {
      position: 'absolute',
      inset: 0,
      animation: SHEETS.has(cur.name) ? 'slideUp .34s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'fadeIn .25s'
    }
  }, /*#__PURE__*/React.createElement(Comp, null)));
  return /*#__PURE__*/React.createElement(NavContext.Provider, {
    value: nav
  }, bare ? screen : /*#__PURE__*/React.createElement(IOSDevice, {
    dark: true,
    width: 390,
    height: 844
  }, screen));
}

// Full-screen shell for a real phone. Screens are laid out at 390×844 and don't scroll, with a 58 px strip at
// the top for the status bar. The app scales to the space the phone gives it and centres in what's left:
// - status bar drawn over the page: the app is the whole screen and the strip sits under the clock. iOS
//   home-screen apps can report innerHeight without the status bar at launch, so the height is screen.height;
// - status bar above the page (opaque): the strip would only add an empty band, so the top 46 px of every screen
//   are cut off and the screens start just under the bar.
// Three quick taps along the top edge restart the demo from the first screen; the taps still reach the screen.
const STATUS_CROP = 46;
function measurePhone() {
  const safeTop = document.getElementById('safe-top').getBoundingClientRect().height;
  const w = window.innerWidth;
  let h = Math.max(window.innerHeight, document.documentElement.clientHeight);
  if (safeTop > 20 && navigator.standalone && h > w) h = Math.max(h, screen.height);
  return {
    w,
    h,
    crop: safeTop > 20 ? 0 : STATUS_CROP
  };
}
function PhoneApp() {
  const [size, setSize] = useState(measurePhone);
  const [resetKey, setResetKey] = useState(0);
  const taps = React.useRef([]);
  useEffect(() => {
    // iOS settles the size a moment after launch and after the app comes back from the background
    const update = () => setSize(measurePhone());
    const timers = [100, 500, 1500].map(t => setTimeout(update, t));
    window.addEventListener('resize', update);
    window.addEventListener('orientationchange', update);
    document.addEventListener('visibilitychange', update);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('resize', update);
      window.removeEventListener('orientationchange', update);
      document.removeEventListener('visibilitychange', update);
    };
  }, []);
  const onTopTap = e => {
    if (e.clientY > 24) return;
    const t = Date.now();
    taps.current = [...taps.current.filter(x => t - x < 900), t];
    if (taps.current.length >= 3) {
      taps.current = [];
      setResetKey(k => k + 1);
    }
  };
  const {
    w,
    h,
    crop
  } = size;
  const k = Math.min(w / 390, h / (844 - crop));
  return /*#__PURE__*/React.createElement("div", {
    onPointerDownCapture: onTopTap,
    style: {
      position: 'fixed',
      inset: 0,
      background: '#08080C',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: (w - 390 * k) / 2,
      top: -crop * k,
      width: 390,
      height: h / k + crop,
      transform: `scale(${k})`,
      transformOrigin: '0 0'
    }
  }, /*#__PURE__*/React.createElement(PrototypeApp, {
    key: resetKey,
    bare: true
  })));
}
function App() {
  const [scale, setScale] = useState(1);
  const [resetKey, setResetKey] = useState(0);
  useEffect(() => {
    const onResize = () => setScale(Math.min(1, (window.innerWidth - 40) / 390, (window.innerHeight - 100) / 844));
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "stage",
    style: {
      transform: `scale(${scale})`
    }
  }, /*#__PURE__*/React.createElement(PrototypeApp, {
    key: resetKey
  }), /*#__PURE__*/React.createElement("div", {
    className: "restart",
    onClick: () => setResetKey(k => k + 1)
  }, "\u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C"));
}
ReactDOM.createRoot(document.getElementById('root')).render(IS_PHONE ? /*#__PURE__*/React.createElement(PhoneApp, null) : /*#__PURE__*/React.createElement(App, null));