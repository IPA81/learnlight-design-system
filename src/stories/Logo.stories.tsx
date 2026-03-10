import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Logo } from './Logo';
import { color } from './tokens';

// Focus ring styles from Figma (interaction-colors/focus, drop-shadow 12px)
const focusRingStyle: React.CSSProperties = {
  border: `1px solid ${color['focus']}`,
  boxShadow: '0px 1px 12px 0px rgba(2, 118, 177, 0.7)',
  borderRadius: 4,
};

const meta = {
  title: 'Foundations/Logo',
  component: Logo,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['default', 'inverted'],
      description: 'Colour theme — "default" = brand blue, "inverted" = white',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size preset — sm (20px) / md (28px) / lg (40px) / xl (56px)',
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Default ──────────────────────────────────────────────────────────────

/** Brand blue wordmark — the primary lockup */
export const Default: Story = {
  args: { theme: 'default', size: 'md' },
};

// ─── Theme stories ────────────────────────────────────────────────────────

/** Default — brand blue on white */
export const ThemeDefault: Story = {
  name: 'Theme / Default (Brand Color)',
  args: { theme: 'default', size: 'lg' },
};

/** Inverted — white wordmark for dark / coloured backgrounds */
export const ThemeInverted: Story = {
  name: 'Theme / Inverted (White)',
  decorators: [
    (Story) => (
      <div style={{ padding: 32, background: color['bg-invert'], borderRadius: 8 }}>
        <Story />
      </div>
    ),
  ],
  args: { theme: 'inverted', size: 'lg' },
};

/** Inverted on brand blue */
export const ThemeInvertedOnBrand: Story = {
  name: 'Theme / Inverted on Brand',
  decorators: [
    (Story) => (
      <div style={{ padding: 32, background: color['bg-brand'], borderRadius: 8 }}>
        <Story />
      </div>
    ),
  ],
  args: { theme: 'inverted', size: 'lg' },
};


// ─── State stories (from Figma spec) ──────────────────────────────────────

/** Default state — no focus indicator */
export const StateDefault: Story = {
  name: 'State / Default',
  render: () => (
    <div style={{ padding: 16 }}>
      <Logo theme="default" size="md" />
    </div>
  ),
};

/**
 * Focus state — blue border + glow shadow (interaction-colors/focus).
 * Applied to the container when the logo is focusable (e.g. a link or button).
 */
export const StateFocus: Story = {
  name: 'State / Focus',
  render: () => (
    <div style={{ padding: 16, display: 'inline-flex', ...focusRingStyle }}>
      <Logo theme="default" size="md" />
    </div>
  ),
};

// ─── Size stories ─────────────────────────────────────────────────────────

export const SizeSmall: Story = {
  name: 'Size / Small (20 px)',
  args: { size: 'sm' },
};

export const SizeMedium: Story = {
  name: 'Size / Medium (28 px)',
  args: { size: 'md' },
};

export const SizeLarge: Story = {
  name: 'Size / Large (40 px)',
  args: { size: 'lg' },
};

export const SizeXL: Story = {
  name: 'Size / XL (56 px)',
  args: { size: 'xl' },
};

export const AllSizes: Story = {
  name: 'Size / All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
      {(['sm', 'md', 'lg', 'xl'] as const).map((s) => (
        <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#9ca3af', minWidth: 24 }}>{s}</span>
          <Logo size={s} />
        </div>
      ))}
    </div>
  ),
};

// ─── All Themes overview ──────────────────────────────────────────────────

export const AllThemes: Story = {
  name: 'Theme / All Themes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderRadius: 8, overflow: 'hidden', border: `1px solid ${color['border-primary']}` }}>
      <div style={{ padding: '24px 32px', background: color['bg-primary'], display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo theme="default" size="lg" />
        <span style={{ fontFamily: "'Fira Sans', sans-serif", fontSize: 11, color: color['text-secondary'] }}>default · bg-primary</span>
      </div>
      <div style={{ padding: '24px 32px', background: color['bg-secondary'], display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo theme="default" size="lg" />
        <span style={{ fontFamily: "'Fira Sans', sans-serif", fontSize: 11, color: color['text-secondary'] }}>default · bg-secondary</span>
      </div>
      <div style={{ padding: '24px 32px', background: color['bg-brand'], display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo theme="inverted" size="lg" />
        <span style={{ fontFamily: "'Fira Sans', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>inverted · bg-brand</span>
      </div>
      <div style={{ padding: '24px 32px', background: color['bg-invert'], display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo theme="inverted" size="lg" />
        <span style={{ fontFamily: "'Fira Sans', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>inverted · bg-invert</span>
      </div>
    </div>
  ),
};
