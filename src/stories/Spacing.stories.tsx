import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { color, spacingScale, spacingNames } from './tokens';

const meta = {
  title: 'Foundations/Spacing',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const FONT: React.CSSProperties = {
  fontFamily: "'Fira Sans', sans-serif",
  color: color['text-primary'],
};

export const Primitives: Story = {
  name: 'Primitives',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: '40px 0', width: '100%' }}>
      {(Object.entries(spacingScale) as [keyof typeof spacingScale, number][])
        .filter(([key]) => key !== 'none')
        .map(([key, value]) => (
          <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {/* Bar */}
            <div style={{
              width: '100%',
              height: value,
              background: color['bg-secondary'],
              borderRadius: 2,
              flexShrink: 0,
            }} />
            {/* Label */}
            <div style={{ display: 'flex', gap: 8, alignItems: 'baseline', whiteSpace: 'nowrap', minWidth: 340 }}>
              <span style={{ ...FONT, fontSize: 16 }}>{spacingNames[key]}</span>
              <span style={{ ...FONT, fontSize: 14, color: color['text-secondary'] }}>{value}px</span>
            </div>
          </div>
        ))}
    </div>
  ),
};
