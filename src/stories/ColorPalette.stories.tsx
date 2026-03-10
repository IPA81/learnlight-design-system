import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
// Color data is sourced from the shared token file — same values the components use
import { color as semanticColor, scale } from './tokens';

// ─── Types ────────────────────────────────────────────────────────────────────

interface SwatchProps {
  name: string;
  value: string;
  textDark?: boolean;
}

interface GroupProps {
  title: string;
  description?: string;
  colors: SwatchProps[];
  columns?: number;
}

interface ScaleGroupProps {
  title: string;
  swatches: SwatchProps[];
}

// ─── Primitives ───────────────────────────────────────────────────────────────

function Swatch({ name, value, textDark }: SwatchProps) {
  const [copied, setCopied] = React.useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const labelColor = textDark ? '#092f42' : '#ffffff';

  return (
    <div
      title={`${name}\n${value}`}
      onClick={copy}
      style={{
        cursor: 'pointer',
        borderRadius: 8,
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.08)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        transition: 'transform 0.1s',
        minWidth: 0,
      }}
    >
      {/* Color block */}
      <div
        style={{
          background: value,
          height: 56,
          display: 'flex',
          alignItems: 'flex-end',
          padding: '6px 8px',
        }}
      >
        {copied && (
          <span style={{ fontSize: 10, color: labelColor, fontWeight: 600 }}>
            Copied!
          </span>
        )}
      </div>
      {/* Label */}
      <div
        style={{
          background: '#fff',
          padding: '6px 8px 8px',
        }}
      >
        <div style={{ fontSize: 10, fontWeight: 600, color: '#092f42', lineHeight: 1.3 }}>
          {name}
        </div>
        <div style={{ fontSize: 10, color: '#5d7682', marginTop: 2, fontFamily: 'monospace' }}>
          {value}
        </div>
      </div>
    </div>
  );
}

function ScaleSwatch({ name, value, textDark }: SwatchProps) {
  const [copied, setCopied] = React.useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const labelColor = textDark ? '#092f42' : '#ffffff';

  return (
    <div
      onClick={copy}
      title={`${name}: ${value}`}
      style={{
        cursor: 'pointer',
        borderRadius: 6,
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <div
        style={{
          background: value,
          height: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {copied && (
          <span style={{ fontSize: 9, color: labelColor, fontWeight: 700 }}>✓</span>
        )}
      </div>
      <div style={{ background: '#fff', padding: '4px 6px 5px' }}>
        <div style={{ fontSize: 9, fontWeight: 600, color: '#092f42' }}>{name}</div>
        <div style={{ fontSize: 9, color: '#5d7682', fontFamily: 'monospace' }}>{value}</div>
      </div>
    </div>
  );
}

function Section({ title, description, colors, columns = 4 }: GroupProps) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ marginBottom: 12 }}>
        <h3 style={{ margin: 0, fontSize: 13, fontWeight: 700, color: '#092f42', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          {title}
        </h3>
        {description && (
          <p style={{ margin: '4px 0 0', fontSize: 12, color: '#5d7682' }}>{description}</p>
        )}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 10 }}>
        {colors.map((c) => (
          <Swatch key={c.name} {...c} />
        ))}
      </div>
    </div>
  );
}

function ScaleSection({ title, swatches }: ScaleGroupProps) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{ margin: '0 0 10px', fontSize: 13, fontWeight: 700, color: '#092f42', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        {title}
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(72px, 1fr))', gap: 8 }}>
        {swatches.map((s) => (
          <ScaleSwatch key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
}

// ─── Color data ───────────────────────────────────────────────────────────────

const SEMANTIC = {
  backgrounds: [
    { name: 'background-primary',       value: '#ffffff', textDark: true },
    { name: 'background-secondary',     value: '#f5f6f7', textDark: true },
    { name: 'background-invert',        value: '#092f42' },
    { name: 'background-invert-secondary', value: '#5d7682' },
    { name: 'background-brand',         value: '#0276b1' },
    { name: 'background-disabled',      value: '#b3bec4', textDark: true },
    { name: 'background-blue-light',    value: '#e3f4fd', textDark: true },
    { name: 'background-green-light',   value: '#ecf9f1', textDark: true },
    { name: 'background-yellow-light',  value: '#fff3d2', textDark: true },
    { name: 'background-red-light',     value: '#fcdfe0', textDark: true },
    { name: 'background-green',         value: '#2c8150' },
    { name: 'background-error',         value: '#fef5f5', textDark: true },
    { name: 'background-warning',       value: '#fffbf5', textDark: true },
    { name: 'background-info',          value: '#fafdff', textDark: true },
  ],
  text: [
    { name: 'text-primary',   value: '#092f42' },
    { name: 'text-secondary', value: '#5d7682' },
    { name: 'text-brand',     value: '#0276b1' },
    { name: 'text-invert',    value: '#ffffff', textDark: true },
    { name: 'text-error',     value: '#ca2b34' },
    { name: 'text-warning',   value: '#a35905' },
    { name: 'text-green',     value: '#287147' },
    { name: 'text-disabled',  value: '#b3bec4', textDark: true },
  ],
  interaction: [
    { name: 'link',   value: '#0276b1' },
    { name: 'focus',  value: '#0276b1' },
    { name: 'accent', value: '#0276b1' },
    { name: 'hover',  value: '#0000000a', textDark: true },
  ],
  borders: [
    { name: 'border-primary', value: '#dfe4e6', textDark: true },
    { name: 'border-secondary',value: '#f5f6f7', textDark: true },
    { name: 'border-brand',   value: '#0276b1' },
    { name: 'border-error',   value: '#d83b46' },
    { name: 'border-warning', value: '#f0a505', textDark: true },
    { name: 'border-info',    value: '#0276b1' },
    { name: 'border-green',   value: '#309159' },
  ],
  graph: [
    { name: 'graph-minimum-required', value: '#ffebb5', textDark: true },
    { name: 'graph-empty',            value: '#b7e4fb', textDark: true },
    { name: 'graph-achieved',         value: '#0276b1' },
    { name: 'graph-NA-empty',         value: '#c2cbd0', textDark: true },
    { name: 'graph-NA-min-required',  value: '#ebeef0', textDark: true },
  ],
  illustrations: [
    { name: 'bg-light',          value: '#f5f6f7', textDark: true },
    { name: 'bg-dark',           value: '#0276b1' },
    { name: 'bg-dark2',          value: '#2c2244' },
    { name: 'hair-dark',         value: '#2c2244' },
    { name: 'hair-color',        value: '#ae5b67' },
    { name: 'skin-light',        value: '#feb3b3', textDark: true },
    { name: 'skin-shade',        value: '#ed6868' },
    { name: 'skin-dark',         value: '#9f505c' },
    { name: 'eyes',              value: '#ed6868' },
    { name: 'teeth',             value: '#fafbfb', textDark: true },
    { name: 'clothing-color',    value: '#d0c8e5', textDark: true },
    { name: 'clothing-dark',     value: '#2c2244' },
    { name: 'clothing-light',    value: '#ffffff', textDark: true },
    { name: 'object-blue',       value: '#b7e4fb', textDark: true },
    { name: 'obj-purple-sh1',    value: '#d0c8e5', textDark: true },
    { name: 'obj-purple-sh2',    value: '#9f8dc8' },
    { name: 'lines',             value: '#dfe4e6', textDark: true },
    { name: 'bg-white',          value: '#ffffff', textDark: true },
  ],
};

const BASE = {
  blue: [
    { name: '10',  value: '#fafdff', textDark: true },
    { name: '50',  value: '#e3f4fd', textDark: true },
    { name: '100', value: '#b7e4fb', textDark: true },
    { name: '200', value: '#65c6f6', textDark: true },
    { name: '300', value: '#0ea3ec' },
    { name: '400', value: '#038fd3' },
    { name: '500', value: '#0276b1' },
    { name: '600', value: '#086fa1' },
    { name: '700', value: '#09608b' },
    { name: '800', value: '#045176' },
    { name: '900', value: '#063b55' },
  ],
  neutrals: [
    { name: '0',   value: '#ffffff', textDark: true },
    { name: '10',  value: '#fafbfb', textDark: true },
    { name: '20',  value: '#f5f6f7', textDark: true },
    { name: '30',  value: '#ebeef0', textDark: true },
    { name: '40',  value: '#dfe4e6', textDark: true },
    { name: '50',  value: '#c2cbd0', textDark: true },
    { name: '60',  value: '#b3bec4', textDark: true },
    { name: '70',  value: '#a6b4bb', textDark: true },
    { name: '80',  value: '#98a8b0', textDark: true },
    { name: '90',  value: '#899ba4', textDark: true },
    { name: '100', value: '#7a8f99', textDark: true },
    { name: '200', value: '#6b828e' },
    { name: '300', value: '#5d7682' },
    { name: '400', value: '#506b79' },
    { name: '500', value: '#425f6d' },
    { name: '600', value: '#355464' },
    { name: '700', value: '#244657' },
    { name: '800', value: '#15394b' },
    { name: '900', value: '#092f42' },
  ],
  red: [
    { name: '10',  value: '#fef5f5', textDark: true },
    { name: '50',  value: '#fcdfe0', textDark: true },
    { name: '100', value: '#fac7ca', textDark: true },
    { name: '200', value: '#f3a5aa', textDark: true },
    { name: '300', value: '#e8787f', textDark: true },
    { name: '400', value: '#e65c64' },
    { name: '500', value: '#d83b46' },
    { name: '600', value: '#ca2b34' },
    { name: '700', value: '#ae2931' },
    { name: '800', value: '#9a282f' },
    { name: '900', value: '#5c171b' },
  ],
  orange: [
    { name: '10',  value: '#fffbf5', textDark: true },
    { name: '50',  value: '#fef1dc', textDark: true },
    { name: '100', value: '#fce7c9', textDark: true },
    { name: '200', value: '#fcd9ab', textDark: true },
    { name: '300', value: '#fece8f', textDark: true },
    { name: '400', value: '#ffc170', textDark: true },
    { name: '500', value: '#ffab3d', textDark: true },
    { name: '600', value: '#ff9a1f', textDark: true },
    { name: '700', value: '#f78b08', textDark: true },
    { name: '800', value: '#df7a07' },
    { name: '900', value: '#a35905' },
  ],
  yellow: [
    { name: '10',  value: '#fffbf5', textDark: true },
    { name: '50',  value: '#fff3d2', textDark: true },
    { name: '100', value: '#ffebb5', textDark: true },
    { name: '200', value: '#ffe291', textDark: true },
    { name: '300', value: '#ffd45e', textDark: true },
    { name: '400', value: '#ffcc3f', textDark: true },
    { name: '500', value: '#ffbb0f', textDark: true },
    { name: '600', value: '#f0a505', textDark: true },
    { name: '700', value: '#d69200', textDark: true },
    { name: '800', value: '#b67402' },
    { name: '900', value: '#8d5501' },
  ],
  green: [
    { name: '10',  value: '#ecf9f1', textDark: true },
    { name: '50',  value: '#c5edd5', textDark: true },
    { name: '100', value: '#8dd8ac', textDark: true },
    { name: '200', value: '#4ac97f', textDark: true },
    { name: '300', value: '#38a867' },
    { name: '400', value: '#309159' },
    { name: '500', value: '#2c8150' },
    { name: '600', value: '#287147' },
    { name: '700', value: '#246640' },
    { name: '800', value: '#1f5736' },
    { name: '900', value: '#174028' },
  ],
  burgundy: [
    { name: '10',  value: '#f9ebee', textDark: true },
    { name: '50',  value: '#f1d0d5', textDark: true },
    { name: '100', value: '#e5aeb6', textDark: true },
    { name: '200', value: '#de919c', textDark: true },
    { name: '300', value: '#d17a87', textDark: true },
    { name: '400', value: '#be6a76' },
    { name: '500', value: '#ae5b67' },
    { name: '600', value: '#9f505c' },
    { name: '700', value: '#914651' },
    { name: '800', value: '#7f3943' },
    { name: '900', value: '#632c34' },
  ],
  purple: [
    { name: '10',  value: '#edebf5', textDark: true },
    { name: '50',  value: '#d0c8e5', textDark: true },
    { name: '100', value: '#b3a5d4', textDark: true },
    { name: '200', value: '#9f8dc8', textDark: true },
    { name: '300', value: '#9481c1' },
    { name: '400', value: '#8874b9' },
    { name: '500', value: '#7a63b1' },
    { name: '600', value: '#6e55aa' },
    { name: '700', value: '#5f4992' },
    { name: '800', value: '#4d3c77' },
    { name: '900', value: '#2c2244' },
  ],
  salmon: [
    { name: '10',  value: '#fffafa', textDark: true },
    { name: '50',  value: '#feebeb', textDark: true },
    { name: '100', value: '#fedcdc', textDark: true },
    { name: '200', value: '#ffcccc', textDark: true },
    { name: '300', value: '#fec3c3', textDark: true },
    { name: '400', value: '#feb3b3', textDark: true },
    { name: '500', value: '#fd9b9b', textDark: true },
    { name: '600', value: '#fa8989', textDark: true },
    { name: '700', value: '#f87777', textDark: true },
    { name: '800', value: '#ed6868' },
    { name: '900', value: '#d65757' },
  ],
};

// ─── Page components ──────────────────────────────────────────────────────────

function SemanticPage() {
  return (
    <div style={{ fontFamily: "'Fira Sans', sans-serif", maxWidth: 860, padding: 32 }}>
      <h2 style={{ margin: '0 0 4px', fontSize: 22, fontWeight: 700, color: '#092f42' }}>Colors</h2>
      <p style={{ margin: '0 0 36px', fontSize: 13, color: '#5d7682' }}>
        Semantic color tokens — click any swatch to copy its hex value.
      </p>
      <Section title="Backgrounds"   colors={SEMANTIC.backgrounds}   columns={4} />
      <Section title="Text"          colors={SEMANTIC.text}          columns={4} />
      <Section title="Interaction"   colors={SEMANTIC.interaction}   columns={4} />
      <Section title="Borders"       colors={SEMANTIC.borders}       columns={4} />
      <Section title="Graph"         colors={SEMANTIC.graph}         columns={5} />
      <Section title="Illustrations" colors={SEMANTIC.illustrations} columns={6} />
    </div>
  );
}

function BaseColorsPage() {
  return (
    <div style={{ fontFamily: "'Fira Sans', sans-serif", maxWidth: 860, padding: 32 }}>
      <h2 style={{ margin: '0 0 4px', fontSize: 22, fontWeight: 700, color: '#092f42' }}>Base Colors</h2>
      <p style={{ margin: '0 0 36px', fontSize: 13, color: '#5d7682' }}>
        Primitive color scales — click any swatch to copy its hex value.
      </p>
      <ScaleSection title="Blue"      swatches={BASE.blue} />
      <ScaleSection title="Neutrals"  swatches={BASE.neutrals} />
      <ScaleSection title="Red"       swatches={BASE.red} />
      <ScaleSection title="Orange"    swatches={BASE.orange} />
      <ScaleSection title="Yellow"    swatches={BASE.yellow} />
      <ScaleSection title="Green"     swatches={BASE.green} />
      <ScaleSection title="Burgundy"  swatches={BASE.burgundy} />
      <ScaleSection title="Purple"    swatches={BASE.purple} />
      <ScaleSection title="Salmon"    swatches={BASE.salmon} />
    </div>
  );
}

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Foundations/Color Palette',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

/** Semantic color tokens grouped by purpose (backgrounds, text, interaction, borders, graph, illustrations) */
export const Colors: Story = {
  render: () => <SemanticPage />,
};

/** Primitive color scales — Blue · Neutrals · Red · Orange · Yellow · Green · Burgundy · Purple · Salmon */
export const BaseColors: Story = {
  render: () => <BaseColorsPage />,
};
