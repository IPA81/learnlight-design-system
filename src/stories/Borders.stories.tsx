import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { color, border, borderScale, shadow } from './tokens';

const meta = {
  title: 'Foundations/Borders',
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, padding: '40px 0' }}>

      {/* border1 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        <div style={{
          width: 180, height: 80, borderRadius: 8,
          border: `${borderScale.border1.width} ${borderScale.border1.style} ${borderScale.border1.color}`,
          background: color['bg-primary'],
        }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ ...FONT, fontSize: 16, fontWeight: 600 }}>border1</span>
          <span style={{ ...FONT, fontSize: 14, color: color['text-secondary'] }}>
            1px solid color[border-primary] — {color['border-primary']}
          </span>
          <span style={{ ...FONT, fontSize: 12, color: color['text-secondary'] }}>
            Used by: button, tag, card, header
          </span>
        </div>
      </div>

      {/* border2 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        <div style={{
          width: 180, height: 80,
          borderBottom: `${borderScale.border2.width} ${borderScale.border2.style} ${borderScale.border2.color}`,
          background: color['bg-primary'],
        }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ ...FONT, fontSize: 16, fontWeight: 600 }}>border2</span>
          <span style={{ ...FONT, fontSize: 14, color: color['text-secondary'] }}>
            border-bottom: 1px solid color[border-primary] — {color['border-primary']}
          </span>
          <span style={{ ...FONT, fontSize: 12, color: color['text-secondary'] }}>
            Used by: header
          </span>
        </div>
      </div>

      {/* border3 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        <div style={{
          width: 180, height: 80, borderRadius: 8,
          border: `${borderScale.border3.width} ${borderScale.border3.style} ${borderScale.border3.color}`,
          background: color['bg-primary'],
        }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ ...FONT, fontSize: 16, fontWeight: 600 }}>border3</span>
          <span style={{ ...FONT, fontSize: 14, color: color['text-secondary'] }}>
            2px solid color[border-brand] — {color['border-brand']}
          </span>
          <span style={{ ...FONT, fontSize: 12, color: color['text-secondary'] }}>
            Used by: highlight-card
          </span>
        </div>
      </div>

    </div>
  ),
};

// ─── All Borders overview ─────────────────────────────────────────────────────

export const AllBorders: Story = {
  name: 'All Borders',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, padding: '40px 0' }}>

      {/* Token → Primitive reference table */}
      <div style={{ display: 'flex', gap: 80 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ ...FONT, fontSize: 18, fontWeight: 600 }}>Tokens</span>
          {[
            'border-header = border2',
            'button-border = border1',
            'tag-border = border1',
            'border-card = border1',
            'border-highlight-cards = border3',
          ].map(line => (
            <span key={line} style={{ ...FONT, fontSize: 16 }}>{line}</span>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ ...FONT, fontSize: 18, fontWeight: 600 }}>Primitives</span>
          <span style={{ ...FONT, fontSize: 16 }}>border1 = 1px solid border-primary (or needed color)</span>
          <span style={{ ...FONT, fontSize: 16 }}>border2 = border-bottom: 1px solid border-primary</span>
          <span style={{ ...FONT, fontSize: 16 }}>border3 = outline: 2px solid border-brand</span>
        </div>
      </div>

      {/* Highlight outline — border3 card with button + tag inside */}
      <div style={{
        background: color['bg-primary'],
        border: border['highlight-card'],
        borderRadius: 8,
        padding: 12,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: 560,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <p style={{ ...FONT, fontSize: 18, margin: 0 }}>Highlight outline — border3</p>
            <p style={{ ...FONT, fontSize: 12, color: color['text-secondary'], margin: 0 }}>
              used on "happening now" conversations card
            </p>
          </div>
          <div style={{
            border: border['button'],
            borderRadius: 6, padding: '6px 8px', display: 'inline-flex',
          }}>
            <span style={{ ...FONT, fontSize: 14, fontWeight: 600 }}>Buttons — border1</span>
          </div>
        </div>
        <div style={{
          border: border['tag'],
          borderRadius: 4, padding: '4px 8px',
        }}>
          <span style={{ ...FONT, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', color: color['text-secondary'] }}>
            Tags — border1
          </span>
        </div>
      </div>

      {/* Page header — border2 (bottom only) */}
      <div style={{
        background: color['bg-primary'],
        borderBottom: border['header'],
        boxShadow: shadow['page-header'],
        height: 40, width: 480,
        display: 'flex', alignItems: 'center', padding: '0 12px',
      }}>
        <span style={{ ...FONT, fontSize: 16 }}>Page header — border = border2</span>
      </div>

      {/* Card border — border1 */}
      <div style={{
        background: color['bg-primary'],
        border: border['card'],
        borderRadius: 16,
        boxShadow: shadow['card'],
        width: 240, height: 180,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 12,
      }}>
        <span style={{ ...FONT, fontSize: 16 }}>card-border — border1</span>
      </div>

      {/* Focus state — border1 accent color */}
      <div style={{
        background: color['bg-primary'],
        border: border['focus'],
        borderRadius: 16,
        boxShadow: shadow['focus'],
        width: 240, height: 120,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 12,
      }}>
        <span style={{ ...FONT, fontSize: 16 }}>focus state — border1 accent color</span>
      </div>

    </div>
  ),
};

// ─── Individual token stories ─────────────────────────────────────────────────

export const HighlightCard: Story = {
  name: 'Token / border-highlight-cards (border3)',
  render: () => (
    <div style={{ padding: '40px 0' }}>
      <div style={{
        background: color['bg-primary'],
        border: border['highlight-card'],
        borderRadius: 8, padding: 12,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        width: 440,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <p style={{ ...FONT, fontSize: 18, margin: 0 }}>Highlight outline — border3</p>
            <p style={{ ...FONT, fontSize: 12, color: color['text-secondary'], margin: 0 }}>
              used on "happening now" conversations card
            </p>
          </div>
          <div style={{ border: border['button'], borderRadius: 6, padding: '6px 8px', display: 'inline-flex' }}>
            <span style={{ ...FONT, fontSize: 14, fontWeight: 600 }}>Buttons — border1</span>
          </div>
        </div>
        <div style={{ border: border['tag'], borderRadius: 4, padding: '4px 8px' }}>
          <span style={{ ...FONT, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', color: color['text-secondary'] }}>
            Tags — border1
          </span>
        </div>
      </div>
    </div>
  ),
};

export const PageHeader: Story = {
  name: 'Token / border-header (border2)',
  render: () => (
    <div style={{ padding: '40px 0' }}>
      <div style={{
        background: color['bg-primary'],
        borderBottom: border['header'],
        boxShadow: shadow['page-header'],
        height: 40, width: 480,
        display: 'flex', alignItems: 'center', padding: '0 12px',
      }}>
        <span style={{ ...FONT, fontSize: 16 }}>Page header — border2</span>
      </div>
    </div>
  ),
};

export const CardBorder: Story = {
  name: 'Token / border-card (border1)',
  render: () => (
    <div style={{ padding: '40px 0' }}>
      <div style={{
        background: color['bg-primary'],
        border: border['card'],
        borderRadius: 16,
        boxShadow: shadow['card'],
        width: 240, height: 180,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 12,
      }}>
        <span style={{ ...FONT, fontSize: 16 }}>card-border — border1</span>
      </div>
    </div>
  ),
};

export const FocusBorder: Story = {
  name: 'Token / focus border (border1 accent)',
  render: () => (
    <div style={{ padding: '40px 0' }}>
      <div style={{
        background: color['bg-primary'],
        border: border['focus'],
        borderRadius: 16,
        boxShadow: shadow['focus'],
        width: 240, height: 120,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 12,
      }}>
        <span style={{ ...FONT, fontSize: 16 }}>Focus state — border1 accent color</span>
      </div>
    </div>
  ),
};
