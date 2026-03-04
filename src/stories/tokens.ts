/**
 * Learnlight Design System — Design Tokens
 * Single source of truth shared by components and stories.
 * Values sourced from the Figma variable definitions.
 */

// ─── Semantic tokens ──────────────────────────────────────────────────────────

export const color = {
  // Text
  'text-primary':   '#092f42',
  'text-secondary': '#5d7682',
  'text-brand':     '#0276b1',
  'text-invert':    '#ffffff',
  'text-error':     '#ca2b34',
  'text-warning':   '#a35905',
  'text-green':     '#287147',
  'text-disabled':  '#b3bec4',

  // Backgrounds
  'bg-primary':       '#ffffff',
  'bg-secondary':     '#f5f6f7',
  'bg-invert':        '#092f42',
  'bg-brand':         '#0276b1',
  'bg-disabled':      '#b3bec4',
  'bg-blue-light':    '#e3f4fd',
  'bg-green-light':   '#ecf9f1',
  'bg-yellow-light':  '#fff3d2',
  'bg-red-light':     '#fcdfe0',
  'bg-green':         '#2c8150',
  'bg-error':         '#fef5f5',
  'bg-warning':       '#fffbf5',
  'bg-info':          '#fafdff',

  // Borders
  'border-primary':   '#dfe4e6',
  'border-secondary': '#f5f6f7',
  'border-brand':     '#0276b1',
  'border-error':     '#d83b46',
  'border-warning':   '#f0a505',
  'border-info':      '#0276b1',
  'border-green':     '#309159',

  // Interaction
  'link':   '#0276b1',
  'focus':  '#0276b1',
  'accent': '#0276b1',
  'hover':  '#0000000a',
} as const;

export type ColorToken = keyof typeof color;

// ─── Base scale tokens ────────────────────────────────────────────────────────

export const scale = {
  blue: {
    10: '#fafdff', 50: '#e3f4fd', 100: '#b7e4fb', 200: '#65c6f6',
    300: '#0ea3ec', 400: '#038fd3', 500: '#0276b1', 600: '#086fa1',
    700: '#09608b', 800: '#045176', 900: '#063b55',
  },
  neutral: {
    0: '#ffffff', 10: '#fafbfb', 20: '#f5f6f7', 30: '#ebeef0',
    40: '#dfe4e6', 50: '#c2cbd0', 60: '#b3bec4', 70: '#a6b4bb',
    80: '#98a8b0', 90: '#899ba4', 100: '#7a8f99', 200: '#6b828e',
    300: '#5d7682', 400: '#506b79', 500: '#425f6d', 600: '#355464',
    700: '#244657', 800: '#15394b', 900: '#092f42',
  },
  red: {
    10: '#fef5f5', 50: '#fcdfe0', 100: '#fac7ca', 200: '#f3a5aa',
    300: '#e8787f', 400: '#e65c64', 500: '#d83b46', 600: '#ca2b34',
    700: '#ae2931', 800: '#9a282f', 900: '#5c171b',
  },
  orange: {
    10: '#fffbf5', 50: '#fef1dc', 100: '#fce7c9', 200: '#fcd9ab',
    300: '#fece8f', 400: '#ffc170', 500: '#ffab3d', 600: '#ff9a1f',
    700: '#f78b08', 800: '#df7a07', 900: '#a35905',
  },
  yellow: {
    10: '#fffbf5', 50: '#fff3d2', 100: '#ffebb5', 200: '#ffe291',
    300: '#ffd45e', 400: '#ffcc3f', 500: '#ffbb0f', 600: '#f0a505',
    700: '#d69200', 800: '#b67402', 900: '#8d5501',
  },
  green: {
    10: '#ecf9f1', 50: '#c5edd5', 100: '#8dd8ac', 200: '#4ac97f',
    300: '#38a867', 400: '#309159', 500: '#2c8150', 600: '#287147',
    700: '#246640', 800: '#1f5736', 900: '#174028',
  },
  burgundy: {
    10: '#f9ebee', 50: '#f1d0d5', 100: '#e5aeb6', 200: '#de919c',
    300: '#d17a87', 400: '#be6a76', 500: '#ae5b67', 600: '#9f505c',
    700: '#914651', 800: '#7f3943', 900: '#632c34',
  },
  purple: {
    10: '#edebf5', 50: '#d0c8e5', 100: '#b3a5d4', 200: '#9f8dc8',
    300: '#9481c1', 400: '#8874b9', 500: '#7a63b1', 600: '#6e55aa',
    700: '#5f4992', 800: '#4d3c77', 900: '#2c2244',
  },
  salmon: {
    10: '#fffafa', 50: '#feebeb', 100: '#fedcdc', 200: '#ffcccc',
    300: '#fec3c3', 400: '#feb3b3', 500: '#fd9b9b', 600: '#fa8989',
    700: '#f87777', 800: '#ed6868', 900: '#d65757',
  },
} as const;

// ─── Button-specific token map ────────────────────────────────────────────────
// Maps each button variant to the semantic tokens it consumes.

// blue-500 at 40% opacity — used for all disabled states
const DISABLED = { token: 'blue-500 / 40%', value: 'rgba(2, 118, 177, 0.4)' } as const;

export const buttonTokens = {
  primary: {
    bg:             { token: 'bg-brand',        value: color['bg-brand'] },
    bgHover:        { token: 'blue-700',         value: scale.blue[700] },
    bgDisabled:     DISABLED,
    text:           { token: 'text-invert',      value: color['text-invert'] },
    textDisabled:   { token: 'text-invert',      value: color['text-invert'] },
    border:         { token: '—',                value: 'transparent' },
  },
  secondary: {
    bg:             { token: '—',                value: 'transparent' },
    bgHover:        { token: 'bg-blue-light',    value: color['bg-blue-light'] },
    bgDisabled:     { token: '—',                value: 'transparent' },
    text:           { token: 'text-brand',       value: color['text-brand'] },
    textDisabled:   DISABLED,
    border:         { token: 'border-brand',     value: color['border-brand'] },
    borderDisabled: DISABLED,
  },
  txt: {
    bg:             { token: '—',                value: 'transparent' },
    bgHover:        { token: 'bg-blue-light',    value: color['bg-blue-light'] },
    bgDisabled:     { token: '—',                value: 'transparent' },
    text:           { token: 'text-brand',       value: color['text-brand'] },
    textDisabled:   DISABLED,
    border:         { token: '—',                value: 'transparent' },
  },
  txt_grey: {
    bg:             { token: '—',                value: 'transparent' },
    bgHover:        { token: 'bg-secondary',     value: color['bg-secondary'] },
    bgDisabled:     { token: '—',                value: 'transparent' },
    text:           { token: 'text-secondary',   value: color['text-secondary'] },
    textDisabled:   DISABLED,
    border:         { token: '—',                value: 'transparent' },
  },
} as const;

// ─── Typography tokens ────────────────────────────────────────────────────────

export interface TypeStyle {
  name: string;
  fontFamily: string;
  fontSize: number;
  fontWeight: 400 | 600;
  lineHeight: number;
  letterSpacing?: number;
  textTransform?: 'uppercase';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
}

/** Primitive type styles — sourced directly from Figma */
export const typeScale: TypeStyle[] = [
  // ── Headings ──────────────────────────────────────────────────────────────
  { name: 'H1',                   fontFamily: 'Fira Sans', fontSize: 26, fontWeight: 600, lineHeight: 40, tag: 'h1' },
  { name: 'H2',                   fontFamily: 'Fira Sans', fontSize: 24, fontWeight: 600, lineHeight: 32, tag: 'h2' },
  { name: 'H3',                   fontFamily: 'Fira Sans', fontSize: 20, fontWeight: 400, lineHeight: 28, tag: 'h3' },
  { name: 'H4',                   fontFamily: 'Fira Sans', fontSize: 18, fontWeight: 400, lineHeight: 24, tag: 'h4' },
  { name: 'H5',                   fontFamily: 'Fira Sans', fontSize: 16, fontWeight: 600, lineHeight: 22, tag: 'h5' },
  // ── Body ──────────────────────────────────────────────────────────────────
  { name: 'large-semibold',       fontFamily: 'Fira Sans', fontSize: 18, fontWeight: 600, lineHeight: 24, tag: 'p' },
  { name: 'large-regular',        fontFamily: 'Fira Sans', fontSize: 18, fontWeight: 400, lineHeight: 24, tag: 'p' },
  { name: 'default-semibold',     fontFamily: 'Fira Sans', fontSize: 16, fontWeight: 600, lineHeight: 22, tag: 'p' },
  { name: 'default-regular',      fontFamily: 'Fira Sans', fontSize: 16, fontWeight: 400, lineHeight: 22, tag: 'p' },
  { name: 'small-semibold',       fontFamily: 'Fira Sans', fontSize: 14, fontWeight: 600, lineHeight: 18, tag: 'p' },
  { name: 'small-regular',        fontFamily: 'Fira Sans', fontSize: 14, fontWeight: 400, lineHeight: 18, tag: 'p' },
  { name: 'extra-small-semibold', fontFamily: 'Fira Sans', fontSize: 12, fontWeight: 600, lineHeight: 16, tag: 'p' },
  { name: 'extra-small-regular',  fontFamily: 'Fira Sans', fontSize: 12, fontWeight: 400, lineHeight: 16, tag: 'p' },
  { name: 'extra-extra-small',    fontFamily: 'Fira Sans', fontSize: 10, fontWeight: 600, lineHeight: 14, letterSpacing: 0.5, textTransform: 'uppercase', tag: 'span' },
];

/** Semantic token → primitive mapping */
export const typeTokens = [
  { token: 'page-title',             primitive: 'H1',              usage: 'Page titles, hero headings' },
  { token: 'section-title',          primitive: 'H3',              usage: 'Section and card headings' },
  { token: 'operational-card-title', primitive: 'default-semibold',usage: 'Card titles, list headers' },
  { token: 'paragraph',              primitive: 'default-regular', usage: 'Body copy, descriptions' },
  { token: 'button-text',            primitive: 'small-semibold',  usage: 'Button labels' },
] as const;
