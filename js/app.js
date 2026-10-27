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

// On a phone (or with ?app) the prototype runs full screen as the app itself: no drawn device frame — the real
// status bar sits over the 58px top inset every screen already keeps.
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

// Full-screen shell for a real phone: screens are laid out at 390×844 and don't scroll, so the app scales to
// the device width and takes the full height (≈ 844 on every current iPhone in home-screen mode). In Safari
// with its toolbars the screen is shorter: then the app scales to the height and centres instead of squashing.
// Three quick taps on the status-bar strip restart the demo from the first screen.
function PhoneApp() {
  const [size, setSize] = useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  const [resetKey, setResetKey] = useState(0);
  const taps = React.useRef([]);
  useEffect(() => {
    const onResize = () => setSize({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const onStatusBar = () => {
    const t = Date.now();
    taps.current = [...taps.current.filter(x => t - x < 900), t];
    if (taps.current.length >= 3) {
      taps.current = [];
      setResetKey(k => k + 1);
    }
  };
  const k = Math.min(size.w / 390, size.h / 844);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: '#08080C',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: (size.w - 390 * k) / 2,
      top: 0,
      width: 390,
      height: size.h / k,
      transform: `scale(${k})`,
      transformOrigin: '0 0'
    }
  }, /*#__PURE__*/React.createElement(PrototypeApp, {
    key: resetKey,
    bare: true
  })), /*#__PURE__*/React.createElement("div", {
    onClick: onStatusBar,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 44 * k,
      zIndex: 100
    }
  }));
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