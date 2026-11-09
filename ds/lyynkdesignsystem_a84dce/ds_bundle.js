/* @ds-bundle: {"format":4,"namespace":"LyynkDesignSystem_a84dce","components":[{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"CardListItem","sourcePath":"components/cards/CardListItem.jsx"},{"name":"DrawerItem","sourcePath":"components/cards/DrawerItem.jsx"},{"name":"DrawerItemList","sourcePath":"components/cards/DrawerItemList.jsx"},{"name":"EmptyState","sourcePath":"components/cards/EmptyState.jsx"},{"name":"InfoCard","sourcePath":"components/cards/InfoCard.jsx"},{"name":"ListItem","sourcePath":"components/cards/ListItem.jsx"},{"name":"SeparatorLine","sourcePath":"components/cards/SeparatorLine.jsx"},{"name":"ConfirmPopupModal","sourcePath":"components/feedback/ConfirmPopupModal.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Snackbar","sourcePath":"components/feedback/Snackbar.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"HorizontalTabs","sourcePath":"components/forms/HorizontalTabs.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Tag","sourcePath":"components/forms/Tag.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"BackButton","sourcePath":"components/navigation/BackButton.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"},{"name":"Button","sourcePath":"components/primitives/Button.jsx"},{"name":"ICON_CDN","sourcePath":"components/primitives/Icon.jsx"},{"name":"Icon","sourcePath":"components/primitives/Icon.jsx"},{"name":"IconButton","sourcePath":"components/primitives/IconButton.jsx"},{"name":"ProgressBar","sourcePath":"components/primitives/ProgressBar.jsx"},{"name":"Spinner","sourcePath":"components/primitives/Spinner.jsx"},{"name":"Text","sourcePath":"components/primitives/Text.jsx"}],"sourceHashes":{"components/cards/Card.jsx":"aebd3e7c0b9b","components/cards/CardListItem.jsx":"e9482aaa48a7","components/cards/DrawerItem.jsx":"9513a11ad8eb","components/cards/DrawerItemList.jsx":"dd039a29e610","components/cards/EmptyState.jsx":"258192a6112a","components/cards/InfoCard.jsx":"23b7aa966dff","components/cards/ListItem.jsx":"4edb2c879aef","components/cards/SeparatorLine.jsx":"2ba0543de60a","components/feedback/ConfirmPopupModal.jsx":"7ac9aa800205","components/feedback/Skeleton.jsx":"96a2910ae4d8","components/feedback/Snackbar.jsx":"5969123e3261","components/forms/Checkbox.jsx":"640ce9c5814e","components/forms/HorizontalTabs.jsx":"db1ab915c08b","components/forms/Input.jsx":"d51913f3645d","components/forms/Tag.jsx":"97bfbcd0cd93","components/forms/Toggle.jsx":"18c091cff61a","components/navigation/BackButton.jsx":"b55205b0fce0","components/navigation/Header.jsx":"9d3755ecba55","components/navigation/TabBar.jsx":"da44841dda91","components/primitives/Button.jsx":"ff7c103fdf87","components/primitives/Icon.jsx":"3e5ebbb8457b","components/primitives/IconButton.jsx":"bc56693ad394","components/primitives/ProgressBar.jsx":"4a76f15e0442","components/primitives/Spinner.jsx":"21bcb2ef1cbb","components/primitives/Text.jsx":"468457f52125","ui_kits/young-app/HomeScreen.jsx":"ff1d9251dcc9","ui_kits/young-app/MenuScreen.jsx":"d71ecd574763","ui_kits/young-app/PhoneFrame.jsx":"3443c2dc24b0"},"inlinedExternals":[],"unexposedExports":[{"name":"textVariantStyle","sourcePath":"components/primitives/Text.jsx"}]} */

(() => {

const __ds_ns = (window.LyynkDesignSystem_a84dce = window.LyynkDesignSystem_a84dce || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  onClick,
  selected = false,
  background,
  padding,
  radius,
  style,
  ...rest
}) {
  const [p, setP] = React.useState(false);
  const pressable = !!onClick;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: pressable ? 'button' : undefined,
    tabIndex: pressable ? 0 : undefined,
    onClick: onClick,
    onPointerDown: () => pressable && setP(true),
    onPointerUp: () => setP(false),
    onPointerLeave: () => setP(false),
    style: {
      boxSizing: 'border-box',
      background: background || 'var(--white)',
      borderRadius: radius != null ? radius : 'var(--radius-xl)',
      padding: padding != null ? padding : 'var(--space-xl)',
      border: selected ? '1px solid var(--greyLight950)' : 'none',
      cursor: pressable ? 'pointer' : undefined,
      transform: p ? 'scale(var(--press-scale))' : 'none',
      transition: 'transform 120ms var(--ease-quick)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/cards/CardListItem.jsx
try { (() => {
function CardListItem({
  description,
  value,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      fontSize: 12,
      lineHeight: '18px',
      color: 'var(--textTertiary)',
      marginBottom: 8
    }
  }, description), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14,
      lineHeight: '19.6px',
      letterSpacing: -0.28,
      color: 'var(--greyLight950)'
    }
  }, value));
}
Object.assign(__ds_scope, { CardListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CardListItem.jsx", error: String((e && e.message) || e) }); }

// components/cards/EmptyState.jsx
try { (() => {
function EmptyState({
  source,
  title = 'Ta page est vide',
  subtitle,
  mode = 'light',
  style
}) {
  const tc = mode === 'light' ? 'var(--greyLight900)' : 'var(--white)';
  const sc = mode === 'light' ? 'var(--greyLight700)' : 'var(--white)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      ...style
    }
  }, source && /*#__PURE__*/React.createElement("img", {
    src: source,
    alt: "",
    style: {
      width: 108,
      height: 108,
      objectFit: 'contain',
      alignSelf: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 16,
      lineHeight: '22.4px',
      letterSpacing: -0.32,
      color: tc,
      textAlign: 'center'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 16,
      lineHeight: '22.4px',
      letterSpacing: -0.32,
      color: sc,
      textAlign: 'center',
      textWrap: 'pretty'
    }
  }, subtitle)));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/cards/SeparatorLine.jsx
try { (() => {
function SeparatorLine({
  color = 'var(--greyLight100)',
  margin = '16px 0',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    style: {
      height: 1,
      background: color,
      margin,
      ...style
    }
  });
}
Object.assign(__ds_scope, { SeparatorLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/SeparatorLine.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
let injected = false;
const R = {
  none: 0,
  sm: 6,
  md: 9,
  lg: 10,
  xl: 12,
  '2xl': 16,
  full: 9999,
  round: 9999
};
function Skeleton({
  width = '100%',
  height = 16,
  radius = 'xl',
  colorMode = 'light',
  style
}) {
  if (typeof document !== 'undefined' && !injected) {
    injected = true;
    const s = document.createElement('style');
    s.textContent = '@keyframes lyynkSkel{0%{background-position:100% 0}100%{background-position:-100% 0}}';
    document.head.appendChild(s);
  }
  const [a, b] = colorMode === 'dark' ? ['#EEF0FF', '#C7CCFE'] : ['#EAEEF0', '#D0D9DD'];
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      width,
      height,
      borderRadius: typeof radius === 'number' ? radius : R[radius] != null ? R[radius] : 12,
      background: 'linear-gradient(90deg,' + a + ' 25%,' + b + ' 50%,' + a + ' 75%)',
      backgroundSize: '200% 100%',
      animation: 'lyynkSkel 1.4s linear infinite',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/forms/HorizontalTabs.jsx
try { (() => {
function HorizontalTabs({
  tabs = [],
  activeTab,
  onTabPress,
  style
}) {
  const [inner, setInner] = React.useState(tabs[0] && tabs[0].value);
  const active = activeTab !== undefined ? activeTab : inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      background: 'var(--white)',
      padding: 4,
      borderRadius: 'var(--radius-lg)',
      gap: 4,
      ...style
    }
  }, tabs.map(t => {
    const on = t.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => {
        if (activeTab === undefined) setInner(t.value);
        onTabPress && onTabPress(t);
      },
      style: {
        appearance: 'none',
        border: 'none',
        margin: 0,
        flex: 1,
        padding: '12px 0',
        borderRadius: 'var(--radius-lg)',
        background: on ? 'var(--blue500)' : 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontWeight: on ? 700 : 600,
        fontSize: 14,
        lineHeight: '19.6px',
        letterSpacing: -0.28,
        color: on ? 'var(--white)' : 'var(--greyLight500)',
        textAlign: 'center',
        transition: 'background 150ms'
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { HorizontalTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/HorizontalTabs.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function Toggle({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  style,
  ariaLabel
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const flip = () => {
    if (disabled) return;
    const n = !on;
    if (checked === undefined) setInner(n);
    onChange && onChange(n);
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: flip,
    style: {
      appearance: 'none',
      border: 'none',
      margin: 0,
      cursor: disabled ? 'default' : 'pointer',
      width: 56,
      height: 32,
      borderRadius: 'var(--radius-full)',
      padding: '5px 6px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      background: on ? 'var(--blue400)' : 'var(--blue50)',
      opacity: disabled ? 0.5 : 1,
      transition: 'background 250ms var(--ease-medium)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 'var(--radius-full)',
      background: 'var(--white)',
      transform: on ? 'translateX(22px)' : 'translateX(0)',
      transition: 'transform 250ms var(--ease-bouncy)'
    }
  }));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Iconsax (iconsax-react-native) is not web-distributable here; glyphs are substituted with Lucide 0.469.0, embedded below (no network) and drawn at a 1.5 stroke like Iconsax Linear.
const MAP = {
  Activity: 'activity',
  Add: 'plus',
  AddSquare: 'square-plus',
  ArrowDown2: 'chevron-down',
  ArrowLeft: 'arrow-left',
  ArrowLeft2: 'chevron-left',
  ArrowRight: 'arrow-right',
  ArrowRight2: 'chevron-right',
  ArrowUp2: 'chevron-up',
  ArrowRotateLeft: 'rotate-ccw',
  ArrowRotateRight: 'rotate-cw',
  Bill: 'receipt',
  Book: 'book-open',
  Building3: 'building-2',
  Calendar: 'calendar',
  Call: 'phone',
  Camera: 'camera',
  ClipboardText: 'clipboard-list',
  Clock: 'clock',
  CloseCircle: 'circle-x',
  Close: 'x',
  Crown1: 'crown',
  Cup: 'trophy',
  Danger: 'octagon-alert',
  DocumentText: 'file-text',
  Edit2: 'pen-line',
  EmojiNormal: 'smile',
  ExportSquare: 'square-arrow-out-up-right',
  Eye: 'eye',
  EyeSlash: 'eye-off',
  FilterSearch: 'list-filter',
  Flag: 'flag',
  Gallery: 'image',
  Gps: 'crosshair',
  HambergerMenu: 'menu',
  Heart: 'heart',
  Home: 'house',
  InfoCircle: 'info',
  Information: 'info',
  Lamp: 'lamp',
  Like1: 'thumbs-up',
  Link: 'link',
  Lock: 'lock',
  Login: 'log-in',
  LogoutCurve: 'log-out',
  Magicpen: 'wand-sparkles',
  MedalStar: 'medal',
  Message: 'message-circle',
  MessageQuestion: 'message-circle-question',
  MessageText1: 'message-square-text',
  Messages2: 'messages-square',
  Microphone: 'mic',
  Note: 'notebook-pen',
  Notification: 'bell',
  Profile: 'user',
  SearchNormal1: 'search',
  Send: 'send',
  Setting2: 'settings',
  Setting4: 'sliders-horizontal',
  Share: 'share-2',
  Star: 'star',
  TaskSquare: 'square-check',
  TickCircle: 'circle-check',
  Trash: 'trash-2',
  UserAdd: 'user-plus',
  Warning2: 'triangle-alert',
  ArchiveAdd: 'package-plus',
  ArrowForward: 'forward'
};
const GLYPHS = {"activity":"<path d=\"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2\" />","arrow-left":"<path d=\"m12 19-7-7 7-7\" /> <path d=\"M19 12H5\" />","arrow-right":"<path d=\"M5 12h14\" /> <path d=\"m12 5 7 7-7 7\" />","bell":"<path d=\"M10.268 21a2 2 0 0 0 3.464 0\" /> <path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\" />","book-open":"<path d=\"M12 7v14\" /> <path d=\"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z\" />","building-2":"<path d=\"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z\" /> <path d=\"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2\" /> <path d=\"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2\" /> <path d=\"M10 6h4\" /> <path d=\"M10 10h4\" /> <path d=\"M10 14h4\" /> <path d=\"M10 18h4\" />","calendar":"<path d=\"M8 2v4\" /> <path d=\"M16 2v4\" /> <rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" /> <path d=\"M3 10h18\" />","camera":"<path d=\"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z\" /> <circle cx=\"12\" cy=\"13\" r=\"3\" />","chevron-down":"<path d=\"m6 9 6 6 6-6\" />","chevron-left":"<path d=\"m15 18-6-6 6-6\" />","chevron-right":"<path d=\"m9 18 6-6-6-6\" />","chevron-up":"<path d=\"m18 15-6-6-6 6\" />","circle-check":"<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"m9 12 2 2 4-4\" />","circle-x":"<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"m15 9-6 6\" /> <path d=\"m9 9 6 6\" />","clipboard-list":"<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\" /> <path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\" /> <path d=\"M12 11h4\" /> <path d=\"M12 16h4\" /> <path d=\"M8 11h.01\" /> <path d=\"M8 16h.01\" />","clock":"<circle cx=\"12\" cy=\"12\" r=\"10\" /> <polyline points=\"12 6 12 12 16 14\" />","crosshair":"<circle cx=\"12\" cy=\"12\" r=\"10\" /> <line x1=\"22\" x2=\"18\" y1=\"12\" y2=\"12\" /> <line x1=\"6\" x2=\"2\" y1=\"12\" y2=\"12\" /> <line x1=\"12\" x2=\"12\" y1=\"6\" y2=\"2\" /> <line x1=\"12\" x2=\"12\" y1=\"22\" y2=\"18\" />","crown":"<path d=\"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z\" /> <path d=\"M5 21h14\" />","eye":"<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\" /> <circle cx=\"12\" cy=\"12\" r=\"3\" />","eye-off":"<path d=\"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49\" /> <path d=\"M14.084 14.158a3 3 0 0 1-4.242-4.242\" /> <path d=\"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143\" /> <path d=\"m2 2 20 20\" />","file-text":"<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\" /> <path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /> <path d=\"M10 9H8\" /> <path d=\"M16 13H8\" /> <path d=\"M16 17H8\" />","flag":"<path d=\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\" /> <line x1=\"4\" x2=\"4\" y1=\"22\" y2=\"15\" />","forward":"<polyline points=\"15 17 20 12 15 7\" /> <path d=\"M4 18v-2a4 4 0 0 1 4-4h12\" />","heart":"<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\" />","house":"<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\" /> <path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" />","image":"<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\" /> <circle cx=\"9\" cy=\"9\" r=\"2\" /> <path d=\"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21\" />","info":"<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 16v-4\" /> <path d=\"M12 8h.01\" />","lamp":"<path d=\"M8 2h8l4 10H4L8 2Z\" /> <path d=\"M12 12v6\" /> <path d=\"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z\" />","link":"<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\" /> <path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\" />","list-filter":"<path d=\"M3 6h18\" /> <path d=\"M7 12h10\" /> <path d=\"M10 18h4\" />","lock":"<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\" /> <path d=\"M7 11V7a5 5 0 0 1 10 0v4\" />","log-in":"<path d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\" /> <polyline points=\"10 17 15 12 10 7\" /> <line x1=\"15\" x2=\"3\" y1=\"12\" y2=\"12\" />","log-out":"<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\" /> <polyline points=\"16 17 21 12 16 7\" /> <line x1=\"21\" x2=\"9\" y1=\"12\" y2=\"12\" />","medal":"<path d=\"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15\" /> <path d=\"M11 12 5.12 2.2\" /> <path d=\"m13 12 5.88-9.8\" /> <path d=\"M8 7h8\" /> <circle cx=\"12\" cy=\"17\" r=\"5\" /> <path d=\"M12 18v-2h-.5\" />","menu":"<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\" /> <line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\" /> <line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\" />","message-circle":"<path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\" />","message-circle-question":"<path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\" /> <path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\" /> <path d=\"M12 17h.01\" />","message-square-text":"<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\" /> <path d=\"M13 8H7\" /> <path d=\"M17 12H7\" />","messages-square":"<path d=\"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z\" /> <path d=\"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1\" />","mic":"<path d=\"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z\" /> <path d=\"M19 10v2a7 7 0 0 1-14 0v-2\" /> <line x1=\"12\" x2=\"12\" y1=\"19\" y2=\"22\" />","notebook-pen":"<path d=\"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4\" /> <path d=\"M2 6h4\" /> <path d=\"M2 10h4\" /> <path d=\"M2 14h4\" /> <path d=\"M2 18h4\" /> <path d=\"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z\" />","octagon-alert":"<path d=\"M12 16h.01\" /> <path d=\"M12 8v4\" /> <path d=\"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z\" />","package-plus":"<path d=\"M16 16h6\" /> <path d=\"M19 13v6\" /> <path d=\"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14\" /> <path d=\"m7.5 4.27 9 5.15\" /> <polyline points=\"3.29 7 12 12 20.71 7\" /> <line x1=\"12\" x2=\"12\" y1=\"22\" y2=\"12\" />","pen-line":"<path d=\"M12 20h9\" /> <path d=\"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z\" />","phone":"<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\" />","plus":"<path d=\"M5 12h14\" /> <path d=\"M12 5v14\" />","receipt":"<path d=\"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z\" /> <path d=\"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8\" /> <path d=\"M12 17.5v-11\" />","rotate-ccw":"<path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\" /> <path d=\"M3 3v5h5\" />","rotate-cw":"<path d=\"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8\" /> <path d=\"M21 3v5h-5\" />","search":"<circle cx=\"11\" cy=\"11\" r=\"8\" /> <path d=\"m21 21-4.3-4.3\" />","send":"<path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\" /> <path d=\"m21.854 2.147-10.94 10.939\" />","settings":"<path d=\"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z\" /> <circle cx=\"12\" cy=\"12\" r=\"3\" />","share-2":"<circle cx=\"18\" cy=\"5\" r=\"3\" /> <circle cx=\"6\" cy=\"12\" r=\"3\" /> <circle cx=\"18\" cy=\"19\" r=\"3\" /> <line x1=\"8.59\" x2=\"15.42\" y1=\"13.51\" y2=\"17.49\" /> <line x1=\"15.41\" x2=\"8.59\" y1=\"6.51\" y2=\"10.49\" />","sliders-horizontal":"<line x1=\"21\" x2=\"14\" y1=\"4\" y2=\"4\" /> <line x1=\"10\" x2=\"3\" y1=\"4\" y2=\"4\" /> <line x1=\"21\" x2=\"12\" y1=\"12\" y2=\"12\" /> <line x1=\"8\" x2=\"3\" y1=\"12\" y2=\"12\" /> <line x1=\"21\" x2=\"16\" y1=\"20\" y2=\"20\" /> <line x1=\"12\" x2=\"3\" y1=\"20\" y2=\"20\" /> <line x1=\"14\" x2=\"14\" y1=\"2\" y2=\"6\" /> <line x1=\"8\" x2=\"8\" y1=\"10\" y2=\"14\" /> <line x1=\"16\" x2=\"16\" y1=\"18\" y2=\"22\" />","smile":"<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M8 14s1.5 2 4 2 4-2 4-2\" /> <line x1=\"9\" x2=\"9.01\" y1=\"9\" y2=\"9\" /> <line x1=\"15\" x2=\"15.01\" y1=\"9\" y2=\"9\" />","square-arrow-out-up-right":"<path d=\"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6\" /> <path d=\"m21 3-9 9\" /> <path d=\"M15 3h6v6\" />","square-check":"<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" /> <path d=\"m9 12 2 2 4-4\" />","square-plus":"<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" /> <path d=\"M8 12h8\" /> <path d=\"M12 8v8\" />","star":"<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\" />","thumbs-up":"<path d=\"M7 10v12\" /> <path d=\"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z\" />","trash-2":"<path d=\"M3 6h18\" /> <path d=\"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6\" /> <path d=\"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2\" /> <line x1=\"10\" x2=\"10\" y1=\"11\" y2=\"17\" /> <line x1=\"14\" x2=\"14\" y1=\"11\" y2=\"17\" />","triangle-alert":"<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\" /> <path d=\"M12 9v4\" /> <path d=\"M12 17h.01\" />","trophy":"<path d=\"M6 9H4.5a2.5 2.5 0 0 1 0-5H6\" /> <path d=\"M18 9h1.5a2.5 2.5 0 0 0 0-5H18\" /> <path d=\"M4 22h16\" /> <path d=\"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22\" /> <path d=\"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22\" /> <path d=\"M18 2H6v7a6 6 0 0 0 12 0V2Z\" />","user":"<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\" /> <circle cx=\"12\" cy=\"7\" r=\"4\" />","user-plus":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" /> <circle cx=\"9\" cy=\"7\" r=\"4\" /> <line x1=\"19\" x2=\"19\" y1=\"8\" y2=\"14\" /> <line x1=\"22\" x2=\"16\" y1=\"11\" y2=\"11\" />","wand-sparkles":"<path d=\"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72\" /> <path d=\"m14 7 3 3\" /> <path d=\"M5 6v4\" /> <path d=\"M19 14v4\" /> <path d=\"M10 2v2\" /> <path d=\"M7 8H3\" /> <path d=\"M21 16h-4\" /> <path d=\"M11 3H9\" />","x":"<path d=\"M18 6 6 18\" /> <path d=\"m6 6 12 12\" />"};
const ICON_CDN = 'https://unpkg.com/lucide-static@0.469.0/icons/';
const glyphUrl = file => GLYPHS[file] ? 'url("data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' + GLYPHS[file] + '</svg>') + '")' : 'url("' + ICON_CDN + file + '.svg")';
function Icon({
  name = 'InfoCircle',
  size = 24,
  color = 'currentColor',
  variant,
  style,
  ...rest
}) {
  const file = MAP[name] || String(name).replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase();
  const url = glyphUrl(file);
  const c = color && color !== 'currentColor' && !String(color).startsWith('#') && !String(color).startsWith('var(') && !String(color).startsWith('rgb') ? 'var(--' + color.replace(/^\$/, '') + ')' : color;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    "data-icon": name,
    style: {
      display: 'inline-block',
      flexShrink: 0,
      width: size,
      height: size,
      backgroundColor: c,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { ICON_CDN, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cards/DrawerItem.jsx
try { (() => {
function DrawerItem({
  icon,
  label,
  showBadge = false,
  onClick,
  radius = 12,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    onClick: onClick || (() => {}),
    background: "var(--transparent60)",
    radius: radius,
    padding: "0 8px",
    style: {
      height: 50,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    color: "black"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14,
      lineHeight: '18px',
      letterSpacing: -0.28,
      color: 'var(--greyLight900)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, label)), showBadge && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 9999,
      background: 'var(--error500)',
      marginRight: 12,
      flexShrink: 0
    }
  })));
}
Object.assign(__ds_scope, { DrawerItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/DrawerItem.jsx", error: String((e && e.message) || e) }); }

// components/cards/DrawerItemList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DrawerItemList({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 12,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--transparent30)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.DrawerItem, _extends({
    radius: 0
  }, it)))));
}
Object.assign(__ds_scope, { DrawerItemList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/DrawerItemList.jsx", error: String((e && e.message) || e) }); }

// components/cards/InfoCard.jsx
try { (() => {
function InfoCard({
  title,
  description,
  icon = 'InfoCircle',
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    background: "var(--blue100)",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: "blue700"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 14,
      lineHeight: '19.6px',
      letterSpacing: -0.28,
      color: 'var(--blue700)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14,
      lineHeight: '19.6px',
      letterSpacing: -0.28,
      color: 'var(--blue700)'
    }
  }, description))));
}
Object.assign(__ds_scope, { InfoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/InfoCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ListItem.jsx
try { (() => {
function ListItem({
  label,
  icon,
  image,
  svg,
  tileColor = 'var(--violet100)',
  isSelected = false,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    onClick: onClick || (() => {}),
    selected: isSelected,
    style: {
      margin: '4px 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: image ? 'transparent' : tileColor,
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color: "black"
  }), svg, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: 48,
      height: 48,
      objectFit: 'cover',
      objectPosition: 'top center'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      margin: '0 12px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 16,
      lineHeight: '22.4px',
      letterSpacing: -0.32,
      color: 'var(--greyLight950)'
    }
  }, label)), isSelected ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      background: 'var(--greyLight950)',
      borderRadius: 9999,
      padding: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Check",
    size: 14,
    color: "white"
  })) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ArrowRight2",
    size: 16,
    color: "greyLight400"
  })));
}
Object.assign(__ds_scope, { ListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ListItem.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Snackbar.jsx
try { (() => {
const T = {
  error: ['var(--error100)', 'var(--error500)', 'var(--shadow-snackbar-error)'],
  success: ['var(--green100)', 'var(--success600)', 'var(--shadow-snackbar-success)'],
  warning: ['var(--warning100)', 'var(--warning700)', 'var(--shadow-snackbar-warning)'],
  info: ['var(--blue100)', 'var(--blue600)', 'var(--shadow-snackbar-info)']
};
function Snackbar({
  text,
  type = 'info',
  size = 'normal',
  icon = 'Warning2',
  onClick,
  style
}) {
  const [bg, fg, sh] = T[type] || T.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    onClick: onClick,
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      padding: 16,
      minHeight: 52,
      borderRadius: 'var(--radius-xl)',
      background: bg,
      boxShadow: sh,
      width: size === 'full' ? '100%' : '90%',
      cursor: onClick ? 'pointer' : undefined,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: fg
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      flex: 1,
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 14,
      lineHeight: '19.6px',
      letterSpacing: -0.28,
      color: fg
    }
  }, text));
}
Object.assign(__ds_scope, { Snackbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Snackbar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = 20,
  label,
  style
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const flip = () => {
    if (disabled) return;
    const n = !on;
    if (checked === undefined) setInner(n);
    onChange && onChange(n);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "checkbox",
    "aria-checked": on,
    disabled: disabled,
    onClick: flip,
    style: {
      appearance: 'none',
      margin: 0,
      padding: 0,
      width: size,
      height: size,
      borderRadius: 'var(--radius-xs)',
      boxSizing: 'border-box',
      border: on ? 'none' : '1.5px solid var(--greyLight300)',
      background: on ? 'var(--blue600)' : 'var(--white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'inherit'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Check",
    size: size - 6,
    color: "white"
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14,
      lineHeight: '19.6px',
      letterSpacing: -0.28,
      color: 'var(--greyLight900)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  error = false,
  info,
  errorMessage,
  disabled = false,
  multiline = false,
  leftIcon,
  rightIcon,
  size = 'sm',
  type = 'text',
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const bg = disabled ? 'var(--greyLight50)' : error && focused ? 'var(--error100)' : error ? 'var(--error50)' : focused ? 'var(--greyLight200)' : 'var(--greyLight100)';
  const pad = size === 'md' ? '0 14px' : size === 'lg' ? '8px 12px' : '0 12px';
  const fieldStyle = {
    flex: 1,
    minWidth: 0,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    padding: 0,
    margin: 0,
    fontFamily: 'var(--font-sans)',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '25px',
    color: disabled ? 'var(--greyLight400)' : 'var(--greyLight900)',
    caretColor: 'var(--blue600)',
    resize: 'none'
  };
  const Field = multiline ? 'textarea' : 'input';
  const msg = error ? errorMessage : info;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14,
      lineHeight: '19.6px',
      letterSpacing: -0.28,
      color: 'var(--greyLight500)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: multiline ? 'flex-start' : 'center',
      gap: 6,
      boxSizing: 'border-box',
      borderRadius: 10,
      background: bg,
      padding: multiline ? '12px 12px' : pad,
      height: multiline || size === 'lg' ? undefined : 48,
      minHeight: 48,
      transition: 'background 150ms'
    }
  }, leftIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leftIcon,
    size: 20,
    color: disabled ? 'greyLight400' : 'greyLight900'
  }), /*#__PURE__*/React.createElement(Field, _extends({
    className: "lyynk-input",
    type: multiline ? undefined : type,
    rows: multiline ? 4 : undefined,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    readOnly: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: fieldStyle
  }, rest)), rightIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: rightIcon,
    size: 20,
    color: disabled ? 'greyLight400' : 'greyLight900'
  })), msg && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      lineHeight: '18px',
      color: error ? 'var(--error700)' : 'var(--greyLight900)'
    }
  }, msg));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Tag.jsx
try { (() => {
const SEL = {
  grey: ['var(--white)', 'var(--greyLight800)'],
  blue: ['var(--white)', 'var(--blue500)'],
  violet: ['var(--white)', 'var(--violet500)'],
  fuchsia: ['var(--white)', 'var(--fuchsia500)'],
  red: ['var(--white)', 'var(--red500)'],
  orange: ['var(--white)', 'var(--orange500)'],
  yellow: ['var(--white)', 'var(--miel500)'],
  green: ['var(--white)', 'var(--green500)'],
  white: ['var(--black)', 'var(--white)'],
  brand: ['var(--white)', 'var(--blue500)']
};
const UNSEL = {
  grey: ['var(--greyLight900)', 'var(--greyLight200)'],
  blue: ['var(--blue800)', 'var(--blue50)'],
  violet: ['var(--violet800)', 'var(--violet50)'],
  fuchsia: ['var(--fuchsia800)', 'var(--fuchsia50)'],
  red: ['var(--red800)', 'var(--red50)'],
  orange: ['var(--orange800)', 'var(--orange50)'],
  yellow: ['var(--miel800)', 'var(--miel50)'],
  green: ['var(--green800)', 'var(--green50)'],
  white: ['var(--black)', 'var(--white)'],
  brand: ['var(--blue600)', 'var(--blue50)']
};
const SIZE = {
  sm: {
    height: 24,
    padding: '3px 8px'
  },
  md: {
    height: 28,
    padding: '2px 9px'
  },
  lg: {
    height: 32,
    padding: '4px 16px'
  },
  xl: {
    height: 36,
    padding: '6px 12px'
  }
};
function Tag({
  children,
  colorVariant = 'brand',
  selected = false,
  size = 'lg',
  icon,
  count,
  countColor,
  onClick,
  style
}) {
  const [p, setP] = React.useState(false);
  const [fg, bg] = (selected ? SEL : UNSEL)[colorVariant] || UNSEL.brand;
  const cbg = (SEL[countColor || colorVariant] || SEL.brand)[1];
  const label = typeof children === 'string' && children.length ? children[0].toUpperCase() + children.slice(1) : children;
  const Tagname = onClick ? 'button' : 'span';
  return /*#__PURE__*/React.createElement(Tagname, {
    type: onClick ? 'button' : undefined,
    onClick: onClick,
    onPointerDown: () => setP(true),
    onPointerUp: () => setP(false),
    onPointerLeave: () => setP(false),
    style: {
      appearance: 'none',
      border: 'none',
      margin: 0,
      boxSizing: 'border-box',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      borderRadius: 'var(--radius-full)',
      background: bg,
      color: fg,
      cursor: onClick ? 'pointer' : 'default',
      transform: p ? 'scale(var(--press-scale))' : 'none',
      transition: 'transform 120ms var(--ease-quick)',
      ...SIZE[size],
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      borderRadius: 'var(--radius-full)',
      background: 'var(--transparent30)',
      padding: 3
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14,
    color: fg
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      lineHeight: '18px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, label), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 24,
      height: 24,
      borderRadius: 'var(--radius-full)',
      background: cbg,
      marginLeft: 2,
      marginRight: size === 'sm' || size === 'md' ? -6 : -12,
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      lineHeight: '24px',
      color: 'var(--white)'
    }
  }, count));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Tag.jsx", error: String((e && e.message) || e) }); }

// components/primitives/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DIM = {
  xs: 16,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56,
  '2xl': 64
};
const ICON = {
  xs: 12,
  sm: 16,
  md: 16,
  lg: 24,
  xl: 24,
  '2xl': 16
};
function IconButton({
  name,
  size = 'md',
  variant = 'primary',
  color = 'greyLight900',
  iconSize,
  backgroundColor,
  disabled = false,
  onClick,
  customIcon,
  style,
  ariaLabel,
  ...rest
}) {
  const [p, setP] = React.useState(false);
  const d = DIM[size] || 40;
  const bg = disabled ? 'transparent' : backgroundColor || (variant === 'primary' ? 'var(--greyLight200)' : 'transparent');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel || name,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    onPointerDown: () => !disabled && setP(true),
    onPointerUp: () => setP(false),
    onPointerLeave: () => setP(false),
    style: {
      appearance: 'none',
      border: 'none',
      padding: 0,
      margin: 0,
      width: d,
      height: d,
      borderRadius: 'var(--radius-full)',
      background: bg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transform: p ? 'scale(var(--press-scale))' : 'none',
      transition: 'transform 120ms var(--ease-quick)',
      ...style
    }
  }, rest), customIcon || /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: iconSize || ICON[size] || 16,
    color: color
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BackButton.jsx
try { (() => {
function BackButton({
  name = 'ArrowLeft2',
  color = 'greyLight900',
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: name,
    variant: "secondary",
    color: color,
    onClick: onClick,
    ariaLabel: "Retour",
    style: style
  });
}
Object.assign(__ds_scope, { BackButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BackButton.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
const TV = {
  p1Bold: [16, '22.4px', 700, -0.32],
  p2Medium: [16, '22.4px', 600, -0.32],
  h6SemiBold: [18, '25.2px', 600, -0.36],
  h6Bold: [18, '25.2px', 700, -0.36]
};
function Header({
  title,
  titleAlign = 'center',
  titleVariant = 'p1Bold',
  showBack = true,
  onBack,
  right,
  left,
  style
}) {
  const [s, l, w, t] = TV[titleVariant] || TV.p1Bold;
  const hasLeft = showBack || left;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 48,
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      paddingLeft: hasLeft ? 16 : 22,
      paddingRight: 20,
      gap: 4,
      position: 'relative',
      ...style
    }
  }, hasLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      width: titleAlign === 'center' ? 80 : undefined,
      flexShrink: 0
    }
  }, left || /*#__PURE__*/React.createElement(__ds_scope.BackButton, {
    onClick: onBack
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      textAlign: titleAlign,
      fontFamily: 'var(--font-sans)',
      fontSize: s,
      lineHeight: l,
      fontWeight: w,
      letterSpacing: t,
      color: 'var(--greyLight900)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), (right || titleAlign === 'center') && /*#__PURE__*/React.createElement("div", {
    style: {
      width: titleAlign === 'center' ? 80 : undefined,
      display: 'flex',
      justifyContent: 'flex-end',
      flexShrink: 0
    }
  }, right));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
const DEFAULT = [{
  key: 'index',
  label: 'Accueil',
  icon: 'EmojiNormal'
}, {
  key: 'diary',
  label: 'Journal',
  icon: 'DocumentText'
}, {
  key: 'channel',
  label: 'Canal',
  icon: 'Messages2'
}, {
  key: 'menu',
  label: 'Menu',
  icon: 'Setting4'
}];
function TabBar({
  items = DEFAULT,
  active = 'index',
  onChange,
  bottomInset = 0,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 60 + bottomInset,
      paddingTop: 6,
      paddingBottom: bottomInset,
      paddingLeft: 16,
      paddingRight: 16,
      boxSizing: 'border-box',
      background: 'var(--white)',
      borderTop: '1px solid var(--greyLight100)',
      width: '100%',
      ...style
    }
  }, items.filter(it => !it.center).map(it => {
    const on = it.key === active;
    const src = on ? it.iconFocusedSrc || it.iconSrc : it.iconSrc;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      type: "button",
      onClick: () => onChange && onChange(it.key),
      style: {
        appearance: 'none',
        border: 'none',
        background: 'transparent',
        margin: 0,
        padding: 0,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }
    }, src ? /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "",
      width: "20",
      height: "20",
      style: {
        display: 'block'
      }
    }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 20,
      color: on ? 'blue950' : 'greyLight600'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        lineHeight: '18px',
        fontWeight: on ? 700 : 400,
        color: on ? 'var(--blue950)' : 'var(--greyLight600)'
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/primitives/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  indicatorColor = 'var(--blue400)',
  trackColor = 'var(--white)',
  height = 8,
  style
}) {
  const v = Math.max(0, Math.min(1, value));
  return /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": Math.round(v * 100),
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    style: {
      width: '100%',
      height,
      borderRadius: 'var(--radius-full)',
      background: trackColor,
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: Math.round(v * 100) + '%',
      height: '100%',
      borderRadius: 'var(--radius-full)',
      background: indicatorColor
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Spinner.jsx
try { (() => {
const SIZES = {
  sm: 28,
  md: 42,
  lg: 50,
  xl: 58
};
let injected = false;
function Spinner({
  size = 'md',
  color = 'var(--blue950)',
  style
}) {
  if (typeof document !== 'undefined' && !injected) {
    injected = true;
    const s = document.createElement('style');
    s.textContent = '@keyframes lyynkSpin{to{transform:rotate(360deg)}}';
    document.head.appendChild(s);
  }
  const px = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("svg", {
    width: px,
    height: px,
    viewBox: "0 0 66 66",
    fill: "none",
    style: {
      animation: 'lyynkSpin 1s linear infinite',
      ...style
    },
    role: "progressbar"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.494 12.494a29 29 0 1125.043 49.149",
    stroke: color,
    strokeWidth: "8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: {},
  sm: {
    height: 36,
    gap: 4,
    padding: '0 12px'
  },
  md: {
    height: 40,
    gap: 4,
    padding: '0 14px'
  },
  lg: {
    height: 44,
    gap: 6,
    padding: '0 16px'
  },
  xl: {
    height: 48,
    gap: 6,
    padding: '0 18px'
  },
  '2xl': {
    height: 60,
    gap: 10,
    padding: '0 22px'
  }
};
const BG = {
  primary: 'var(--blue600)',
  secondary: 'var(--white)',
  tertiary: 'transparent',
  quaternary: 'transparent',
  modify: 'transparent',
  destructivePrimary: 'var(--error500)'
};
const FG = {
  primary: 'var(--white)',
  secondary: 'var(--blue600)',
  tertiary: 'var(--blue600)',
  quaternary: 'var(--blue600)',
  modify: 'var(--greyLight950)',
  destructivePrimary: 'var(--white)'
};
function Button({
  variant = 'primary',
  size = 'xl',
  disabled = false,
  isLoading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  children,
  onClick,
  style,
  textStyle,
  ...rest
}) {
  const [p, setP] = React.useState(false);
  const live = !disabled && !isLoading;
  const s = SIZES[size] || SIZES.xl;
  const ghost = variant === 'tertiary' || variant === 'quaternary';
  const bg = disabled ? ghost ? 'transparent' : 'var(--greyLight200)' : BG[variant];
  const fg = disabled ? 'var(--greyLight300)' : FG[variant];
  const quaternary = variant === 'quaternary';
  const iconEl = icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === '2xl' ? 24 : 20,
    color: fg
  }) : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    "aria-busy": isLoading || undefined,
    onClick: live ? onClick : undefined,
    onPointerDown: () => live && setP(true),
    onPointerUp: () => setP(false),
    onPointerLeave: () => setP(false),
    style: {
      appearance: 'none',
      border: variant === 'modify' ? '1px solid ' + (disabled ? 'var(--greyLight200)' : 'var(--blue500)') : 'none',
      margin: 0,
      cursor: live ? 'pointer' : 'default',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-xl)',
      background: bg,
      color: fg,
      ...(quaternary ? {
        height: 'auto',
        padding: 0,
        gap: 6
      } : s),
      width: fullWidth ? '100%' : undefined,
      transform: p ? 'scale(var(--press-scale))' : 'none',
      transition: 'transform 120ms var(--ease-quick)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: size === 'xs' ? 14 : 16,
      lineHeight: size === 'xs' ? '19.6px' : '22.4px',
      letterSpacing: size === 'xs' ? -0.28 : -0.32,
      whiteSpace: 'nowrap',
      userSelect: 'none',
      ...style
    }
  }, rest), isLoading ? /*#__PURE__*/React.createElement(__ds_scope.Spinner, {
    size: "sm",
    color: "var(--white)"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, iconPosition === 'left' && iconEl, children != null && /*#__PURE__*/React.createElement("span", {
    style: textStyle
  }, children), iconPosition === 'right' && iconEl));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ConfirmPopupModal.jsx
try { (() => {
function ConfirmPopupModal({
  isVisible = true,
  title,
  description,
  info,
  confirmButtonText,
  cancelButtonText = 'Non, annuler',
  modalType = 'destructive',
  onConfirm,
  onClose,
  contained = false,
  style
}) {
  if (!isVisible) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: contained ? 'absolute' : 'fixed',
      inset: 0,
      zIndex: 500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-overlay)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '90%',
      maxWidth: 420,
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: 'center',
      margin: '20px 16px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 20,
      lineHeight: '27px',
      letterSpacing: -0.4,
      color: 'var(--greyLight900)',
      textAlign: 'center'
    }
  }, title), info, description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14,
      lineHeight: '19.6px',
      letterSpacing: -0.28,
      color: 'var(--greyLight900)',
      textAlign: 'center'
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      margin: '24px 16px 0'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    fullWidth: true,
    variant: modalType === 'classic' ? 'primary' : 'destructivePrimary',
    onClick: onConfirm
  }, confirmButtonText), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    fullWidth: true,
    variant: "tertiary",
    onClick: onClose,
    style: {
      marginBottom: 16
    }
  }, cancelButtonText))));
}
Object.assign(__ds_scope, { ConfirmPopupModal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ConfirmPopupModal.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Text.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  h1Bold: [48, 57.6, 700, -0.04],
  h2Bold: [36, 43.2, 700, -0.03],
  h3Bold: [30, 39, 700, -0.02],
  h4Bold: [24, 31.2, 700, -0.02],
  h5Bold: [20, 27, 700, -0.02],
  h6Bold: [18, 25.2, 700, -0.02],
  h6SemiBold: [18, 25.2, 600, -0.02],
  p1Bold: [16, 22.4, 700, -0.02],
  p2Medium: [16, 22.4, 600, -0.02],
  p3Bold: [14, 19.6, 700, -0.02],
  p4Medium: [14, 19.6, 600, -0.02],
  addTextBold: [12, 18, 700, 0],
  addTextSemiBold: [12, 18, 600, 0],
  addTextMedium: [12, 18, 400, 0]
};
const textVariantStyle = v => {
  const [s, l, w, t] = V[v] || V.p2Medium;
  return {
    fontFamily: 'var(--font-sans)',
    fontSize: s,
    lineHeight: l + 'px',
    fontWeight: w,
    letterSpacing: +(t * s).toFixed(2)
  };
};
const tok = c => !c ? undefined : c.startsWith('#') || c.startsWith('var(') || c.startsWith('rgb') || c === 'inherit' || c === 'currentColor' ? c : 'var(--' + c.replace(/^\$/, '') + ')';
function Text({
  variant = 'h1Bold',
  color = 'greyLight900',
  centered = false,
  as: Tag = 'span',
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      margin: 0,
      display: Tag === 'span' ? 'block' : undefined,
      ...textVariantStyle(variant),
      color: tok(color),
      textAlign: centered ? 'center' : undefined,
      overflowWrap: 'break-word',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { textVariantStyle, Text });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Text.jsx", error: String((e && e.message) || e) }); }

// ui_kits/young-app/HomeScreen.jsx
try { (() => {
const {
  Header,
  Button,
  IconButton,
  Card,
  Icon,
  Text
} = window.LyynkDesignSystem_a84dce;
const WELL_BG = ['var(--red100)', 'var(--orange100)', 'var(--miel100)', 'var(--green100)', 'var(--mint100)'];
const WELL_TXT = ['var(--red900)', 'var(--orange900)', 'var(--miel900)', 'var(--green900)', 'var(--mint900)'];
const DAYS = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
function DayCell({
  letter,
  rating,
  isToday,
  isFuture,
  onPress
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: isFuture ? undefined : onPress,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: isFuture ? 'default' : 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 40,
      display: 'flex',
      alignItems: 'center'
    }
  }, rating != null ? /*#__PURE__*/React.createElement("img", {
    src: '../../assets/mood/moodSmiley-' + rating + '.webp',
    width: "32",
    height: "40",
    style: {
      objectFit: 'contain'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 9999,
      background: 'var(--blue25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, !isFuture && /*#__PURE__*/React.createElement(Icon, {
    name: "Add",
    size: 16,
    color: "blue500"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 8,
      font: (isToday ? '600' : '400') + ' 12px/18px var(--font-sans)',
      color: isToday ? 'var(--greyLight900)' : 'var(--greyLight500)'
    }
  }, letter));
}
function HomeScreen({
  mood,
  setMood,
  week,
  onOpenMood,
  unread = 2
}) {
  const upper = mood != null ? WELL_BG[mood] : 'rgba(217,227,251,0.66)';
  const messages = ['Courage, demain sera un autre jour', 'Ce n’est pas une journée facile', 'Une journée comme les autres', 'Belle journée, continue comme ça', 'Quelle super journée !'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflowY: 'auto',
      background: upper,
      transition: 'background 300ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 54
    }
  }), /*#__PURE__*/React.createElement(Header, {
    title: "Mardi 7 octobre",
    titleAlign: "left",
    titleVariant: "p2Medium",
    showBack: false,
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "md",
      icon: "Call",
      style: {
        borderRadius: 9999,
        color: 'var(--greyLight950)',
        background: 'var(--white)'
      },
      textStyle: {
        fontSize: 14,
        lineHeight: '19.6px',
        color: 'var(--greyLight950)'
      }
    }, "SOS"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      name: "Notification",
      backgroundColor: "var(--white)"
    }), unread > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: -2,
        right: -2,
        minWidth: 16,
        height: 16,
        borderRadius: 9999,
        background: 'var(--error500)',
        color: '#fff',
        font: '700 10px/16px var(--font-sans)',
        textAlign: 'center'
      }
    }, unread)))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32
    }
  }), /*#__PURE__*/React.createElement("div", {
    onClick: onOpenMood,
    style: {
      margin: '0 22px 115px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer'
    }
  }, mood == null ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 74,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mood/moodSmileysGrey.webp",
    style: {
      position: 'absolute',
      width: 351,
      maxWidth: '100%',
      height: 74,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 64,
      height: 64,
      borderRadius: 9999,
      background: 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Add",
    size: 32,
    color: "blue500"
  }))) : /*#__PURE__*/React.createElement("img", {
    src: '../../assets/mood/moodSmiley-' + mood + '.webp',
    width: "80",
    height: "80",
    style: {
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "moodMessage",
    style: {
      color: mood == null ? 'var(--blue950)' : WELL_TXT[mood]
    }
  }, mood == null ? 'Comment ça va aujourd’hui ?' : messages[mood])), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--blue25)',
      minHeight: 520,
      paddingBottom: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: -75,
      minHeight: 150
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, DAYS.map((d, i) => /*#__PURE__*/React.createElement(DayCell, {
    key: i,
    letter: d,
    rating: i === 1 ? mood : week[i],
    isToday: i === 1,
    isFuture: i > 1,
    onPress: onOpenMood
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--background)',
      margin: '12px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Calendar",
    size: 24,
    color: "greyLight900"
  }), /*#__PURE__*/React.createElement("span", {
    className: "p4Medium",
    style: {
      flexGrow: 1,
      color: 'var(--greyLight900)'
    }
  }, "Mon calendrier bien-\xEAtre"), /*#__PURE__*/React.createElement(Icon, {
    name: "ArrowRight2",
    size: 24,
    color: "greyLight500"
  }))), /*#__PURE__*/React.createElement(Card, {
    onClick: () => {},
    padding: "20px 24px",
    style: {
      height: 104,
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--white) url(../../assets/illustrations/safePlace-starsCard.webp) center/100% 100% no-repeat'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/safePlace-lotusWithBubble.webp",
    width: "73.5",
    height: "68",
    style: {
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flexShrink: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "p1Bold",
    style: {
      color: 'var(--greyLight950)'
    }
  }, "Mon espace bien-\xEAtre"), /*#__PURE__*/React.createElement("span", {
    className: "p4Medium",
    style: {
      color: 'var(--greyLight600)'
    }
  }, "Des outils pour me d\xE9tendre et me sentir bien")))))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/young-app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/young-app/MenuScreen.jsx
try { (() => {
const {
  DrawerItem,
  DrawerItemList
} = window.LyynkDesignSystem_a84dce;
function SectionTitle({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "p3Bold",
    style: {
      color: 'var(--greyLight800)',
      marginTop: 20,
      marginBottom: 8
    }
  }, children);
}
function MenuScreen({
  onItem
}) {
  const items = [{
    icon: 'UserAdd',
    label: 'Mes adultes de confiance'
  }, {
    icon: 'Gps',
    label: 'Mes objectifs'
  }, {
    icon: 'MessageQuestion',
    label: 'Quiz'
  }, {
    icon: 'Bill',
    label: 'Contrats'
  }, {
    icon: 'Activity',
    label: 'Activités partagées'
  }, {
    icon: 'Book',
    label: 'Articles'
  }, {
    icon: 'Note',
    label: 'Donner mon avis',
    showBadge: true
  }].map(it => ({
    ...it,
    onClick: () => onItem && onItem(it.label)
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflowY: 'auto',
      background: 'var(--blue25)'
    }
  }, /*#__PURE__*/React.createElement(RadialTop, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '86px 22px 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: 'center',
      paddingBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: 9999,
      overflow: 'hidden',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/avatars-female_adult_avatar.webp",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "p1Bold",
    style: {
      color: 'var(--greyLight950)',
      textAlign: 'center'
    }
  }, "L\xE9a Martin")), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DrawerItem, {
    icon: "Profile",
    label: "Profil",
    style: {
      flex: 1
    },
    onClick: () => onItem && onItem('Profil')
  }), /*#__PURE__*/React.createElement(DrawerItem, {
    icon: "Setting2",
    label: "Param\xE8tres",
    style: {
      flex: 1
    },
    onClick: () => onItem && onItem('Paramètres')
  })), /*#__PURE__*/React.createElement(SectionTitle, null, "Lien et soutien"), /*#__PURE__*/React.createElement(DrawerItemList, {
    items: items
  }))));
}
Object.assign(window, {
  MenuScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/young-app/MenuScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/young-app/PhoneFrame.jsx
try { (() => {
function PhoneFrame({
  children,
  background = 'var(--blue25)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 393,
      height: 852,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background,
      boxShadow: '0 0 0 10px #0C181D, 0 30px 60px rgba(12,24,29,.25)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 54,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      padding: '0 32px',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 16px/20px var(--font-sans)',
      color: 'var(--greyLight950)'
    }
  }, "9:41")), children);
}
function RadialTop() {
  /* Layout default Background: blue500 → blue300(0) radial over blue25, top 30% */
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '30%',
      background: 'radial-gradient(ellipse 540px 470px at 37px -224px, #4689EC 0%, rgba(150,199,246,0) 100%)',
      pointerEvents: 'none'
    }
  });
}
Object.assign(window, {
  PhoneFrame,
  RadialTop
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/young-app/PhoneFrame.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardListItem = __ds_scope.CardListItem;

__ds_ns.DrawerItem = __ds_scope.DrawerItem;

__ds_ns.DrawerItemList = __ds_scope.DrawerItemList;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.InfoCard = __ds_scope.InfoCard;

__ds_ns.ListItem = __ds_scope.ListItem;

__ds_ns.SeparatorLine = __ds_scope.SeparatorLine;

__ds_ns.ConfirmPopupModal = __ds_scope.ConfirmPopupModal;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Snackbar = __ds_scope.Snackbar;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.HorizontalTabs = __ds_scope.HorizontalTabs;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.BackButton = __ds_scope.BackButton;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ICON_CDN = __ds_scope.ICON_CDN;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Text = __ds_scope.Text;

})();
