import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { color, shadow, shadowScale } from './tokens';

const meta = {
  title: 'Foundations/Shadows',
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

const CARD: React.CSSProperties = {
  background: color['bg-primary'],
  border: `1px solid ${color['border-secondary']}`,
  borderRadius: 16,
  width: 240,
  height: 180,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: 12,
  overflow: 'hidden',
};

// ─── Primitives ───────────────────────────────────────────────────────────────

export const Primitives: Story = {
  name: 'Primitives',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, padding: '40px 0' }}>
      {(Object.entries(shadowScale) as [keyof typeof shadowScale, string][]).map(([name, value]) => (
        <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          <div style={{ ...CARD, boxShadow: value }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ ...FONT, fontSize: 16, fontWeight: 600 }}>{name}</span>
            <span style={{ ...FONT, fontSize: 14, color: color['text-secondary'] }}>{value}</span>
          </div>
        </div>
      ))}
    </div>
  ),
};

// ─── Semantic tokens ──────────────────────────────────────────────────────────

export const CardShadow: Story = {
  name: 'Token / card-shadow',
  render: () => (
    <div style={{ padding: '40px 0' }}>
      <div style={{ ...CARD, boxShadow: shadow['card'] }}>
        <span style={{ ...FONT, fontSize: 14 }}>card-shadow</span>
        <span style={{ ...FONT, fontSize: 12, color: color['text-secondary'] }}>{shadow['card']}</span>
      </div>
    </div>
  ),
};

export const PageHeaderShadow: Story = {
  name: 'Token / page-header-shadow',
  render: () => (
    <div style={{ padding: '40px 0' }}>
      <div style={{
        background: color['bg-brand'],
        borderBottom: `1px solid ${color['border-primary']}`,
        boxShadow: shadow['page-header'],
        height: 40,
        display: 'flex',
        alignItems: 'center',
        padding: '0 12px',
        width: 480,
      }}>
        <span style={{ ...FONT, fontSize: 14, color: color['text-invert'] }}>
          page-header-shadow — {shadow['page-header']}
        </span>
      </div>
    </div>
  ),
};

export const ModalShadow: Story = {
  name: 'Token / modal-shadow',
  render: () => (
    <div style={{ padding: '40px 0' }}>
      <div style={{ ...CARD, boxShadow: shadow['modal'] }}>
        <span style={{ ...FONT, fontSize: 14 }}>modal</span>
        <span style={{ ...FONT, fontSize: 12, color: color['text-secondary'] }}>{shadow['modal']}</span>
      </div>
    </div>
  ),
};

export const FocusShadow: Story = {
  name: 'Token / focus-shadow',
  render: () => (
    <div style={{ padding: '40px 0' }}>
      <div style={{
        ...CARD,
        border: `1px solid ${color['focus']}`,
        boxShadow: shadow['focus'],
      }}>
        <span style={{ ...FONT, fontSize: 14 }}>Focus state</span>
        <span style={{ ...FONT, fontSize: 12, color: color['text-secondary'] }}>{shadow['focus']}</span>
      </div>
    </div>
  ),
};

// ─── All shadows overview ─────────────────────────────────────────────────────

export const AllShadows: Story = {
  name: 'All Shadows',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, padding: '40px 0' }}>

      {/* Token → Primitive reference table */}
      <div style={{ display: 'flex', gap: 80 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ ...FONT, fontSize: 18, fontWeight: 600 }}>Tokens</span>
          {[
            'card-shadow = shadow1',
            'page-header-shadow = shadow1',
            'modal = shadow2',
          ].map(line => (
            <span key={line} style={{ ...FONT, fontSize: 16 }}>{line}</span>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ ...FONT, fontSize: 18, fontWeight: 600 }}>Primitives</span>
          {(Object.entries(shadowScale) as [string, string][]).map(([name, value]) => (
            <span key={name} style={{ ...FONT, fontSize: 16 }}>{name} = box-shadow: {value}</span>
          ))}
        </div>
      </div>

      {/* card-shadow */}
      <div style={{ ...CARD, boxShadow: shadow['card'] }}>
        <span style={{ ...FONT, fontSize: 14 }}>card-shadow</span>
        <span style={{ ...FONT, fontSize: 12, color: color['text-secondary'] }}>{shadow['card']}</span>
      </div>

      {/* page-header-shadow */}
      <div style={{
        background: color['bg-brand'],
        borderBottom: `1px solid ${color['border-primary']}`,
        boxShadow: shadow['page-header'],
        height: 40,
        display: 'flex',
        alignItems: 'center',
        padding: '0 12px',
        width: 480,
      }}>
        <span style={{ ...FONT, fontSize: 14, color: color['text-invert'] }}>
          page-header-shadow — {shadow['page-header']}
        </span>
      </div>

      {/* modal */}
      <div style={{ ...CARD, boxShadow: shadow['modal'] }}>
        <span style={{ ...FONT, fontSize: 14 }}>modal</span>
        <span style={{ ...FONT, fontSize: 12, color: color['text-secondary'] }}>{shadow['modal']}</span>
      </div>

      {/* focus */}
      <div style={{ ...CARD, border: `1px solid ${color['focus']}`, boxShadow: shadow['focus'] }}>
        <span style={{ ...FONT, fontSize: 14 }}>Focus state</span>
        <span style={{ ...FONT, fontSize: 12, color: color['text-secondary'] }}>{shadow['focus']}</span>
      </div>

    </div>
  ),
};
