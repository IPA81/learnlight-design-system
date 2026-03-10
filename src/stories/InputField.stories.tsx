import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import React, { useState } from 'react';
import { InputField } from './InputField';

// ─── Inline SVG icons (no external dependencies) ───────────────────────────

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10.5 10.5L13 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M1.5 5.5L8 9.5L14.5 5.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M1 8C1 8 3.5 3.5 8 3.5C12.5 3.5 15 8 15 8C15 8 12.5 12.5 8 12.5C3.5 12.5 1 8 1 8Z" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect x="3.5" y="7" width="9" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5.5 7V5C5.5 3.619 6.619 2.5 8 2.5V2.5C9.381 2.5 10.5 3.619 10.5 5V7" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

// ─── Meta ──────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Input Field',
  component: InputField,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: 370, padding: 24, fontFamily: "'Fira Sans', sans-serif" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
      description: 'Visual / validation state of the field',
    },
    forceState: {
      control: 'select',
      options: [undefined, 'default', 'hover', 'focus', 'disabled'],
      description: 'Override the interaction state (useful for visual testing)',
    },
    label:       { control: 'text' },
    placeholder: { control: 'text' },
    hintText:    { control: 'text' },
    required:    { control: 'boolean' },
    optional:    { control: 'boolean' },
    disabled:    { control: 'boolean' },
    type:        { control: 'select', options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'] },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Helpers ───────────────────────────────────────────────────────────────

/** Wraps the component so it manages its own value for interactive stories */
function Controlled(props: React.ComponentProps<typeof InputField>) {
  const [value, setValue] = useState(props.value ?? '');
  return (
    <InputField
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

// ─── States ────────────────────────────────────────────────────────────────

/** Resting state — no interaction */
export const Default: Story = {
  args: {
    label: 'Level',
    required: true,
    placeholder: 'All levels',
    id: 'input-default',
  },
};

/** Hover — subtle background darkening */
export const Hover: Story = {
  args: {
    label: 'Level',
    required: true,
    placeholder: 'All levels',
    forceState: 'hover',
    id: 'input-hover',
  },
};

/** Focus — brand-blue border + glow ring */
export const Focus: Story = {
  args: {
    label: 'Level',
    required: true,
    placeholder: 'All levels',
    forceState: 'focus',
    id: 'input-focus',
  },
};

/** Disabled — no interaction, greyed-out */
export const Disabled: Story = {
  args: {
    label: 'Level',
    placeholder: 'All levels',
    disabled: true,
    id: 'input-disabled',
  },
};

/** Placeholder text visible before the user types */
export const PlaceholderText: Story = {
  name: 'State / Placeholder',
  args: {
    label: 'Level',
    placeholder: 'Search levels…',
    id: 'input-placeholder',
  },
};

// ─── Variants ──────────────────────────────────────────────────────────────

/** Error — red border, error hint message */
export const Error: Story = {
  args: {
    label: 'Level',
    required: true,
    value: 'Bad input',
    variant: 'error',
    hintText: 'This is an error message.',
    id: 'input-error',
  },
};

/** Error in hover state */
export const ErrorHover: Story = {
  name: 'Error / Hover',
  args: {
    label: 'Level',
    required: true,
    value: 'Bad input',
    variant: 'error',
    hintText: 'This is an error message.',
    forceState: 'hover',
    id: 'input-error-hover',
  },
};

/** Error in focus state */
export const ErrorFocus: Story = {
  name: 'Error / Focus',
  args: {
    label: 'Level',
    required: true,
    value: 'Bad input',
    variant: 'error',
    hintText: 'This is an error message.',
    forceState: 'focus',
    id: 'input-error-focus',
  },
};

// ─── Label variations ──────────────────────────────────────────────────────

/** Required marker */
export const Required: Story = {
  name: 'Label / Required',
  args: {
    label: 'Email',
    required: true,
    placeholder: 'you@example.com',
    id: 'input-required',
  },
};

/** Optional marker */
export const Optional: Story = {
  name: 'Label / Optional',
  args: {
    label: 'Phone number',
    optional: true,
    placeholder: '+1 555 0100',
    id: 'input-optional',
  },
};

/** No label — standalone input */
export const NoLabel: Story = {
  name: 'Label / No Label',
  args: {
    placeholder: 'Search…',
    id: 'input-nolabel',
  },
};

// ─── Icon variations ────────────────────────────────────────────────────────

/** Left icon — search */
export const WithLeftIcon: Story = {
  name: 'Icons / Left Icon',
  args: {
    label: 'Search',
    placeholder: 'Search…',
    leftIcon: <SearchIcon />,
    id: 'input-left-icon',
  },
};

/** Right icon — eye (e.g. show/hide password) */
export const WithRightIcon: Story = {
  name: 'Icons / Right Icon',
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    rightIcon: <EyeIcon />,
    id: 'input-right-icon',
  },
};

/** Both icons */
export const WithBothIcons: Story = {
  name: 'Icons / Both Icons',
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    leftIcon: <MailIcon />,
    rightIcon: <SearchIcon />,
    id: 'input-both-icons',
  },
};

// ─── Input types ────────────────────────────────────────────────────────────

/** Password type — masked by default */
export const PasswordType: Story = {
  name: 'Types / Password',
  render: () => {
    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);
    return (
      <InputField
        label="Password"
        required
        type={show ? 'text' : 'password'}
        placeholder="Min. 8 characters"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rightIcon={
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: 'inherit' }}
            aria-label={show ? 'Hide password' : 'Show password'}
          >
            <EyeIcon />
          </button>
        }
        id="input-password"
      />
    );
  },
};

/** Email type */
export const EmailType: Story = {
  name: 'Types / Email',
  args: {
    label: 'Email address',
    type: 'email',
    placeholder: 'you@example.com',
    leftIcon: <MailIcon />,
    id: 'input-email',
  },
};

/** Number type */
export const NumberType: Story = {
  name: 'Types / Number',
  args: {
    label: 'Quantity',
    type: 'number',
    placeholder: '0',
    id: 'input-number',
  },
};

// ─── Interactive (controlled) ──────────────────────────────────────────────

/** Fully interactive — type to see live validation */
export const LiveValidation: Story = {
  name: 'Interactive / Live Validation',
  render: () => {
    const [value, setValue] = useState('');
    const isError = value.length > 0 && value.length < 3;
    return (
      <InputField
        label="Username"
        required
        placeholder="At least 3 characters"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant={isError ? 'error' : 'default'}
        hintText={isError ? 'Username must be at least 3 characters.' : undefined}
        id="input-live-validation"
      />
    );
  },
};

/** Character counter */
export const CharacterCounter: Story = {
  name: 'Interactive / Character Counter',
  render: () => {
    const MAX = 50;
    const [value, setValue] = useState('');
    const over = value.length > MAX;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <InputField
          label="Bio"
          optional
          placeholder="Tell us about yourself…"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant={over ? 'error' : 'default'}
          id="input-char-counter"
        />
        <div style={{ textAlign: 'right', fontSize: 12, marginTop: 4, color: over ? '#ca2b34' : '#5d7682', fontFamily: "'Fira Sans', sans-serif" }}>
          {value.length} / {MAX}
        </div>
      </div>
    );
  },
};

// ─── All states grid ────────────────────────────────────────────────────────

/** Every state and variant at a glance */
export const AllStates: Story = {
  name: 'All States',
  render: () => {
    const rows: Array<{ label: string; props: Partial<React.ComponentProps<typeof InputField>> }> = [
      { label: 'Default',           props: { placeholder: 'All levels' } },
      { label: 'Hover',             props: { placeholder: 'All levels', forceState: 'hover' } },
      { label: 'Focus',             props: { placeholder: 'All levels', forceState: 'focus' } },
      { label: 'Disabled',          props: { placeholder: 'All levels', disabled: true } },
      { label: 'Error – default',   props: { value: 'Bad input', variant: 'error', hintText: 'This is an error message.' } },
      { label: 'Error – hover',     props: { value: 'Bad input', variant: 'error', hintText: 'This is an error message.', forceState: 'hover' } },
      { label: 'Error – focus',     props: { value: 'Bad input', variant: 'error', hintText: 'This is an error message.', forceState: 'focus' } },
      { label: 'With left icon',    props: { placeholder: 'Search…', leftIcon: <SearchIcon /> } },
      { label: 'With right icon',   props: { placeholder: 'Email',   rightIcon: <MailIcon /> } },
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 370, fontFamily: "'Fira Sans', sans-serif" }}>
        {rows.map(({ label, props }) => (
          <div key={label}>
            <p style={{ margin: '0 0 6px', fontSize: 11, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {label}
            </p>
            <Controlled label="Level" required {...props} />
          </div>
        ))}
      </div>
    );
  },
};

// ─── Interaction test ───────────────────────────────────────────────────────

/** Verifies keyboard navigation and value entry */
export const InteractionTest: Story = {
  name: 'Tests / Keyboard Interaction',
  render: () => <Controlled label="Username" required placeholder="Type here…" id="input-test" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole<HTMLInputElement>('textbox');

    // Tab into the field
    await userEvent.tab();
    expect(input).toHaveFocus();

    // Type a value
    await userEvent.type(input, 'learnlight');
    expect(input.value).toBe('learnlight');

    // Clear with keyboard shortcut
    await userEvent.clear(input);
    expect(input.value).toBe('');

    // Tab away — focus lost
    await userEvent.tab();
    expect(input).not.toHaveFocus();
  },
};

/** Verifies disabled input cannot receive focus or input */
export const DisabledInteractionTest: Story = {
  name: 'Tests / Disabled Input',
  args: {
    label: 'Level',
    placeholder: 'All levels',
    disabled: true,
    id: 'input-disabled-test',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole<HTMLInputElement>('textbox');

    expect(input).toBeDisabled();
    // Confirm typing does nothing
    await userEvent.type(input, 'hello');
    expect(input.value).toBe('');
  },
};

/** Verifies lock-icon password toggle works */
export const PasswordToggleTest: Story = {
  name: 'Tests / Password Toggle',
  render: () => {
    const [value, setValue] = useState('secret123');
    const [show, setShow] = useState(false);
    return (
      <InputField
        label="Password"
        type={show ? 'text' : 'password'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rightIcon={
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: 'inherit' }}
            aria-label="Toggle visibility"
          >
            {show ? <EyeIcon /> : <LockIcon />}
          </button>
        }
        id="input-pw-toggle"
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText<HTMLInputElement>('Password');

    // Starts masked
    expect(input.type).toBe('password');

    // Click toggle → revealed
    const toggleBtn = canvas.getByRole('button', { name: 'Toggle visibility' });
    await userEvent.click(toggleBtn);
    expect(input.type).toBe('text');

    // Click again → masked
    await userEvent.click(toggleBtn);
    expect(input.type).toBe('password');
  },
};
