import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { color, radiusScale } from './tokens';

const meta = {
  title: 'Foundations/Radius',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Shared styles ────────────────────────────────────────────────────────────

const FONT: React.CSSProperties = {
  fontFamily: "'Fira Sans', sans-serif",
  color: color['text-primary'],
};

// ─── Primitives ───────────────────────────────────────────────────────────────

export const Primitives: Story = {
  name: 'Primitives',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: '40px 0' }}>
      {(Object.entries(radiusScale) as [keyof typeof radiusScale, number][]).map(([name, value]) => (
        <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div style={{
            width: 120,
            height: 64,
            borderRadius: value,
            background: color['bg-secondary'],
            border: `1px solid ${color['border-primary']}`,
            flexShrink: 0,
          }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ ...FONT, fontSize: 16, fontWeight: 600 }}>border-radius-{name}</span>
            <span style={{ ...FONT, fontSize: 14, color: color['text-secondary'] }}>{value}px</span>
          </div>
        </div>
      ))}
    </div>
  ),
};

