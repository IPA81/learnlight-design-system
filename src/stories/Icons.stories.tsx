import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon, iconNames } from './Icons';

const meta = {
  title: 'Learnlight/Icons',
  component: Icon,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: iconNames,
    },
    size: {
      control: { type: 'range', min: 12, max: 64, step: 4 },
    },
  },
  args: { name: 'search', size: 16 },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Single ───────────────────────────────────────────────────────────────────

export const Single: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

export const Gallery: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(72px, 1fr))',
        gap: 4,
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
            gap: 6,
            padding: '10px 4px 8px',
            borderRadius: 6,
            background: '#f8fafc',
          }}
        >
          <div style={{ width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name={name} size={16} />
          </div>
          <span
            style={{
              fontSize: 8,
              color: '#6b7280',
              textAlign: 'center',
              wordBreak: 'break-all',
              lineHeight: 1.3,
            }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
};
