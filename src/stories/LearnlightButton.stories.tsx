import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import React from 'react';
import { LearnlightButton } from './LearnlightButton';
import { Icon, iconNames } from './Icons';
import { buttonTokens } from './tokens';

const ICON_OPTIONS = ['none', ...iconNames] as const;

// Extra args not on the component — used to pick icons from the registry
type ExtraArgs = { leftIconName?: string; rightIconName?: string };

const ICON_SIZE: Record<'l' | 'm' | 's', number> = { l: 16, m: 14, s: 12 };

function resolveIcon(name: string | undefined, size: number) {
  return name && name !== 'none' ? <Icon name={name} size={size} /> : undefined;
}

const meta = {
  title: 'Components/Button',
  component: LearnlightButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  // Applied to every story — translates leftIconName/rightIconName selects into React nodes
  render: ({ leftIconName, rightIconName, size = 'm', ...args }: any) => {
    const sz = ICON_SIZE[size as 'l' | 'm' | 's'];
    const iconLeft  = resolveIcon(leftIconName, sz);
    const iconRight = resolveIcon(rightIconName, sz);
    return (
      <LearnlightButton
        {...args}
        size={size}
        leftIcon={!!iconLeft}
        rightIcon={!!iconRight}
        selectIconLeft={iconLeft}
        selectIconRight={iconRight}
      />
    );
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'txt', 'txt_grey'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['l', 'm', 's'],
      description: 'Button size — l=40px, m=32px, s=24px',
    },
    content: {
      control: 'select',
      options: ['default', 'icon_only'],
      description: 'Layout mode',
    },
    isDisabled: { control: 'boolean' },
    leftIcon:  { table: { disable: true } },
    rightIcon: { table: { disable: true } },
    selectIconLeft:  { table: { disable: true } },
    selectIconRight: { table: { disable: true } },
    text: { control: 'text' },
    onClick: { action: 'clicked' },
    // Icon picker — 'none' = off, any name = on
    leftIconName: {
      control: 'select',
      options: ICON_OPTIONS,
      description: 'Left icon — select an icon to enable, "none" to hide',
      table: { category: 'Icons' },
    },
    rightIconName: {
      control: 'select',
      options: ICON_OPTIONS,
      description: 'Right icon — select an icon to enable, "none" to hide',
      table: { category: 'Icons' },
    },
  },
  args: { onClick: fn(), leftIconName: 'none', rightIconName: 'none' },
} satisfies Meta<typeof LearnlightButton & ExtraArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Playground ───────────────────────────────────────────────────────────────

/** Interactive playground — use controls to change variant, size, and icons */
export const Default: Story = {
  args: { variant: 'primary', size: 'm', text: 'Button' },
};

// ─── Variant stories ──────────────────────────────────────────────────────────

/** Filled blue — main call-to-action */
export const Primary: Story = {
  args: { variant: 'primary', text: 'Button' },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    // Click fires the handler
    await userEvent.click(button);
    expect(args.onClick).toHaveBeenCalledTimes(1);

    // Keyboard: tab focus then enter
    await userEvent.tab();
    await userEvent.keyboard('{Enter}');
    expect(args.onClick).toHaveBeenCalledTimes(2);
  },
};

/** Outlined blue — secondary action */
export const Secondary: Story = {
  args: { variant: 'secondary', text: 'Button' },
};

/** Text-only with blue label — low-emphasis action */
export const TextBlue: Story = {
  name: 'Text (Blue)',
  args: { variant: 'txt', text: 'Button' },
};

/** Text-only with grey label — minimal-emphasis action */
export const TextGrey: Story = {
  name: 'Text (Grey)',
  args: { variant: 'txt_grey', text: 'Button' },
};

// ─── Size stories ─────────────────────────────────────────────────────────────

/** Large — 40px height */
export const SizeLarge: Story = {
  name: 'Size / Large (40px)',
  args: { size: 'l', text: 'Large' },
};

/** Medium — 32px height */
export const SizeMedium: Story = {
  name: 'Size / Medium (32px)',
  args: { size: 'm', text: 'Medium' },
};

/** Small — 24px height */
export const SizeSmall: Story = {
  name: 'Size / Small (24px)',
  args: { size: 's', text: 'Small' },
};

/** All three sizes side by side */
export const AllSizes: Story = {
  name: 'Size / All Sizes',
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <LearnlightButton {...args} size="l" text="Large (40px)" />
      <LearnlightButton {...args} size="m" text="Medium (32px)" />
      <LearnlightButton {...args} size="s" text="Small (24px)" />
    </div>
  ),
  args: { variant: 'primary' },
};

// ─── Boolean state stories ────────────────────────────────────────────────────

/** Disabled state — all interactions blocked */
export const Disabled: Story = {
  args: { isDisabled: true, text: 'Disabled' },
};

/** Disabled secondary */
export const DisabledSecondary: Story = {
  name: 'Disabled / Secondary',
  args: { variant: 'secondary', isDisabled: true, text: 'Disabled' },
};

/** Disabled text */
export const DisabledText: Story = {
  name: 'Disabled / Text',
  args: { variant: 'txt', isDisabled: true, text: 'Disabled' },
};

// ─── Icon stories ─────────────────────────────────────────────────────────────

/** Left icon + label */
export const WithLeftIcon: Story = {
  name: 'Icons / Left Icon',
  args: { leftIconName: 'search', text: 'With Icon' },
};

/** Right icon + label */
export const WithRightIcon: Story = {
  name: 'Icons / Right Icon',
  args: { rightIconName: 'arrow-right', text: 'With Icon' },
};

/** Both icons flanking the label */
export const WithBothIcons: Story = {
  name: 'Icons / Both Icons',
  args: { leftIconName: 'search', rightIconName: 'arrow-right', text: 'With Icons' },
};

/** Icon-only — no label */
export const IconOnly: Story = {
  name: 'Icons / Icon Only',
  args: { leftIconName: 'search', content: 'icon_only' },
};

// ─── Edge case stories ────────────────────────────────────────────────────────

/** Long label — 50+ characters to verify truncation / wrapping behaviour */
export const LongText: Story = {
  name: 'Edge / Long Label',
  args: {
    text: 'This is a very long button label that exceeds fifty characters',
    variant: 'primary',
  },
};

/** Short single character */
export const ShortText: Story = {
  name: 'Edge / Single Character',
  args: { text: 'A', variant: 'secondary' },
};

/** Inside a form — verifies default type="button" does not submit */
export const InsideForm: Story = {
  name: 'Edge / Inside Form',
  render: (args) => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert('Form submitted!');
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        padding: 24,
        border: '1px solid #e5e7eb',
        borderRadius: 8,
        minWidth: 280,
      }}
    >
      <label style={{ fontSize: 13, color: '#374151' }}>
        Email
        <input
          type="email"
          placeholder="you@example.com"
          style={{
            display: 'block',
            marginTop: 4,
            width: '100%',
            padding: '6px 8px',
            border: '1px solid #d1d5db',
            borderRadius: 4,
            fontSize: 13,
            boxSizing: 'border-box',
          }}
        />
      </label>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
        <LearnlightButton {...args} variant="txt_grey" text="Cancel" />
        <LearnlightButton {...args} variant="primary" text="Submit" />
      </div>
    </form>
  ),
  args: { onClick: fn() },
};

// ─── Token Usage ──────────────────────────────────────────────────────────────

const SLOT_LABELS: Record<string, string> = {
  bg:             'Background',
  bgHover:        'Background (hover)',
  bgDisabled:     'Background (disabled)',
  text:           'Text',
  textDisabled:   'Text (disabled)',
  border:         'Border',
  borderDisabled: 'Border (disabled)',
};

/**
 * Maps each button variant to the design tokens it consumes.
 * Every colour swatch is a direct reference to the Color Palette story.
 */
export const TokenUsage: Story = {
  name: 'Token Usage',
  render: () => {
    const variants = Object.keys(buttonTokens) as Array<keyof typeof buttonTokens>;
    return (
      <div style={{ fontFamily: "'Fira Sans', sans-serif", maxWidth: 860, padding: '8px 0' }}>
        <p style={{ margin: '0 0 28px', fontSize: 12, color: '#5d7682' }}>
          Each variant's colour slots mapped to their design token. Click a swatch to copy the hex value.
        </p>
        {variants.map((variant) => {
          const slots = buttonTokens[variant];
          return (
            <div key={variant} style={{ marginBottom: 36 }}>
              {/* Variant header with live preview */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <h3 style={{ margin: 0, fontSize: 13, fontWeight: 700, color: '#092f42', textTransform: 'uppercase', letterSpacing: '0.06em', minWidth: 80 }}>
                  {variant}
                </h3>
                <LearnlightButton variant={variant} size="m" text="Preview" />
                <LearnlightButton variant={variant} size="m" text="Disabled" isDisabled />
              </div>

              {/* Token rows */}
              <div style={{ display: 'grid', gridTemplateColumns: '160px 140px 80px 1fr', gap: '6px 16px', alignItems: 'center' }}>
                {/* Header */}
                {['Slot', 'Token', 'Value', ''].map((h) => (
                  <div key={h} style={{ fontSize: 10, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.06em', paddingBottom: 4, borderBottom: '1px solid #ebeef0' }}>{h}</div>
                ))}

                {/* Rows */}
                {(Object.entries(slots) as Array<[string, { token: string; value: string }]>).map(([slot, t]) => {
                  const [copied, setCopied] = React.useState(false);
                  const copy = () => { navigator.clipboard?.writeText(t.value); setCopied(true); setTimeout(() => setCopied(false), 1200); };
                  const isTransparent = t.value === 'transparent' || t.value === '#0000000a';
                  return (
                    <React.Fragment key={slot}>
                      <div style={{ fontSize: 12, color: '#5d7682' }}>{SLOT_LABELS[slot] ?? slot}</div>
                      <div style={{ fontSize: 11, fontFamily: 'monospace', color: '#092f42', background: '#f5f6f7', padding: '2px 6px', borderRadius: 4 }}>
                        {t.token}
                      </div>
                      <div style={{ fontSize: 11, fontFamily: 'monospace', color: '#5d7682' }}>{isTransparent ? '—' : t.value}</div>
                      <div
                        onClick={copy}
                        title={t.value}
                        style={{
                          width: 28,
                          height: 18,
                          borderRadius: 4,
                          background: isTransparent ? 'repeating-conic-gradient(#dfe4e6 0% 25%, #fff 0% 50%) 0 0 / 8px 8px' : t.value,
                          border: '1px solid rgba(0,0,0,0.1)',
                          cursor: isTransparent ? 'default' : 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {copied && <span style={{ fontSize: 8, color: '#fff', fontWeight: 700 }}>✓</span>}
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  },
};

// ─── AllVariants grid ─────────────────────────────────────────────────────────

/** Every variant × size × state at a glance */
export const AllVariants: Story = {
  name: 'All Variants',
  render: () => {
    const variants = ['primary', 'secondary', 'txt', 'txt_grey'] as const;
    const sizes = ['l', 'm', 's'] as const;
    const states: Array<{ label: string; props: Partial<React.ComponentProps<typeof LearnlightButton>> }> = [
      { label: 'Default',         props: {} },
      { label: 'Left icon',       props: { leftIcon: true } },
      { label: 'Right icon',      props: { rightIcon: true } },
      { label: 'Both icons',      props: { leftIcon: true, rightIcon: true } },
      { label: 'Icon only',       props: { content: 'icon_only' } },
      { label: 'Disabled',        props: { isDisabled: true } },
    ];

    return (
      <div style={{ fontFamily: 'sans-serif', overflowX: 'auto' }}>
        {variants.map((variant) => (
          <div key={variant} style={{ marginBottom: 40 }}>
            <h3 style={{ margin: '0 0 12px', fontSize: 13, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {variant}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '12px 24px', alignItems: 'center', justifyItems: 'start' }}>
              {/* column headers */}
              {sizes.map((s) => (
                <div key={s} style={{ fontSize: 11, color: '#9ca3af', textAlign: 'center' }}>
                  {s.toUpperCase()} — {s === 'l' ? '40px' : s === 'm' ? '32px' : '24px'}
                </div>
              ))}
              {states.map(({ label, props }) =>
                sizes.map((s) => (
                  <div key={`${label}-${s}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
                    <LearnlightButton
                      variant={variant}
                      size={s}
                      text="Button"
                      {...props}
                    />
                    <span style={{ fontSize: 10, color: '#9ca3af' }}>{label}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
