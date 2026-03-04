import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Icon, iconNames } from './Icons';
import type { IconName } from './Icons';

const meta = {
  title: 'Learnlight/Icons',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: iconNames,
      description: 'Icon name from the Learnlight design system',
    },
    size: {
      control: { type: 'range', min: 12, max: 64, step: 4 },
      description: 'Icon size in pixels',
    },
    alt: {
      control: 'text',
      description: 'Alt text for accessibility',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Single icon with controls — use the panel to pick any icon and size */
export const Single: Story = {
  args: {
    name: 'search',
    size: 24,
    alt: 'search',
  },
};

/** Full icon gallery — all Learnlight icons at a glance */
export const Gallery: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'sans-serif' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))',
          gap: 8,
        }}
      >
        {iconNames.map((name) => (
          <div
            key={name}
            title={name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              padding: '12px 6px 8px',
              borderRadius: 6,
              background: '#f8fafc',
              cursor: 'default',
            }}
          >
            {/* Fixed 24×24 cell keeps every row the same height */}
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 24,
                height: 24,
              }}
            >
              <Icon name={name as IconName} size={20} alt={name} />
            </span>
            <span
              style={{
                fontSize: 9,
                color: '#6b7280',
                textAlign: 'center',
                wordBreak: 'break-all',
                lineHeight: 1.4,
                maxWidth: '100%',
              }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
};

/** Icons at different sizes */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', fontFamily: 'sans-serif' }}>
      {([12, 16, 20, 24, 32, 48] as const).map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <Icon name="search" size={size} alt="search" />
          <span style={{ fontSize: 11, color: '#6b7280' }}>{size}px</span>
        </div>
      ))}
    </div>
  ),
};
