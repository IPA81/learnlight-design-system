import React, { useState } from 'react';

// ─── Design tokens ─────────────────────────────────────────────────────────
const tokens = {
  borderPrimary:   '#dfe4e6',
  borderBrand:     '#0276b1',
  borderError:     '#ca2b34',
  borderDisabled:  '#dfe4e6',
  bgPrimary:       '#ffffff',
  bgSecondary:     '#f5f6f7',
  bgDisabled:      '#f5f6f7',
  textPrimary:     '#092f42',
  textSecondary:   '#5d7682',
  textDisabled:    '#b3bec4',
  textError:       '#ca2b34',
  textBrand:       '#0276b1',
  focusShadow:     '0px 1px 12px 0px rgba(2, 118, 177, 0.25)',
};

const font: React.CSSProperties = {
  fontFamily: "'Fira Sans', sans-serif",
  fontSize: 14,
  fontStyle: 'normal',
};

// ─── Types ─────────────────────────────────────────────────────────────────

export type InputFieldVariant = 'default' | 'error';
export type InputFieldState   = 'default' | 'hover' | 'focus' | 'disabled';

export interface InputFieldProps {
  /** Label text shown above the input */
  label?: string;
  /** Marks the field as required (shows red asterisk) */
  required?: boolean;
  /** Marks the field as optional (shows grey "(Optional)") */
  optional?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Controlled value */
  value?: string;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Visual / validation state */
  variant?: InputFieldVariant;
  /** Force a specific visual state (useful for Storybook; normally driven by interaction) */
  forceState?: InputFieldState;
  /** Icon rendered on the left side of the input */
  leftIcon?: React.ReactNode;
  /** Icon rendered on the right side of the input */
  rightIcon?: React.ReactNode;
  /** Helper / error message shown below the input */
  hintText?: string;
  /** Disables the input */
  disabled?: boolean;
  /** Input type */
  type?: string;
  /** Accessible id (label is linked via htmlFor) */
  id?: string;
}

// ─── Sub-components ────────────────────────────────────────────────────────

/** Info icon – inline SVG so no external deps are required */
function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="6.5" stroke={tokens.textSecondary} />
      <rect x="7.25" y="6.75" width="1.5" height="5" rx="0.75" fill={tokens.textSecondary} />
      <rect x="7.25" y="4.25" width="1.5" height="1.5" rx="0.75" fill={tokens.textSecondary} />
    </svg>
  );
}

// ─── Main component ────────────────────────────────────────────────────────

export function InputField({
  label,
  required   = false,
  optional   = false,
  placeholder = '',
  value,
  onChange,
  variant    = 'default',
  forceState,
  leftIcon,
  rightIcon,
  hintText,
  disabled   = false,
  type       = 'text',
  id,
}: InputFieldProps) {
  const [interactionState, setInteractionState] = useState<InputFieldState>('default');

  const state: InputFieldState = disabled
    ? 'disabled'
    : forceState ?? interactionState;

  // ── Border colour ──────────────────────────────────────────────────────
  let borderColor: string;
  if (state === 'disabled') {
    borderColor = tokens.borderDisabled;
  } else if (state === 'focus') {
    borderColor = tokens.borderBrand;
  } else if (variant === 'error') {
    borderColor = tokens.borderError;
  } else {
    borderColor = tokens.borderPrimary;
  }

  // ── Background colour ──────────────────────────────────────────────────
  const bgColor =
    state === 'disabled' ? tokens.bgSecondary : tokens.bgPrimary;

  // ── Hover overlay (4 % dark tint from Figma) ───────────────────────────
  const hoverBg = state === 'hover'
    ? 'linear-gradient(rgba(0,0,0,0.04),rgba(0,0,0,0.04)), linear-gradient(white,white)'
    : undefined;

  // ── Text colour ────────────────────────────────────────────────────────
  const inputTextColor =
    state === 'disabled' ? tokens.textDisabled : tokens.textPrimary;

  // ── Box shadow (focus ring) ────────────────────────────────────────────
  const boxShadow = state === 'focus' ? tokens.focusShadow : undefined;

  // ── Label ──────────────────────────────────────────────────────────────
  const labelEl = label && (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 4 }}>
      <label
        htmlFor={id}
        style={{ ...font, lineHeight: '18px', color: tokens.textPrimary, cursor: disabled ? 'default' : 'pointer' }}
      >
        {label}
      </label>
      {required && (
        <span style={{ ...font, color: tokens.textError, letterSpacing: '0.03em' }}>*</span>
      )}
      {optional && (
        <span style={{ ...font, color: tokens.textSecondary, lineHeight: '18px' }}>(Optional)</span>
      )}
      <InfoIcon />
    </div>
  );

  // ── Wrapper styles ─────────────────────────────────────────────────────
  const wrapperStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    height: 40,
    border: `1px solid ${borderColor}`,
    borderRadius: 8,
    overflow: 'hidden',
    background: hoverBg ?? bgColor,
    boxShadow,
    transition: 'border-color 0.15s, box-shadow 0.15s',
    cursor: disabled ? 'not-allowed' : 'text',
  };

  // ── Input native element ───────────────────────────────────────────────
  const nativeInput: React.CSSProperties = {
    flex: '1 0 0',
    minWidth: 0,
    height: '100%',
    padding: '0 12px',
    paddingLeft:  leftIcon  ? 0 : 12,
    paddingRight: rightIcon ? 0 : 12,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    ...font,
    lineHeight: '18px',
    color: inputTextColor,
    cursor: disabled ? 'not-allowed' : 'text',
  };

  const iconStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: 16,
    height: 16,
    color: disabled ? tokens.textDisabled : tokens.textSecondary,
  };

  const leftIconEl = leftIcon && (
    <span style={{ ...iconStyle, marginLeft: 12, marginRight: 4 }}>{leftIcon}</span>
  );

  const rightIconEl = rightIcon && (
    <span style={{ ...iconStyle, marginRight: 12, marginLeft: 4 }}>{rightIcon}</span>
  );

  // ── Hint / error text ──────────────────────────────────────────────────
  const hintEl = hintText && (
    <p
      style={{
        ...font,
        lineHeight: '18px',
        color: variant === 'error' ? tokens.textError : tokens.textSecondary,
        margin: '4px 0 0',
      }}
    >
      {hintText}
    </p>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {labelEl}
      <div
        style={wrapperStyle}
        onMouseEnter={() => !disabled && !forceState && setInteractionState('hover')}
        onMouseLeave={() => !disabled && !forceState && setInteractionState('default')}
      >
        {leftIconEl}
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          style={nativeInput}
          onFocus={() => !disabled && !forceState && setInteractionState('focus')}
          onBlur={() => !disabled && !forceState && setInteractionState('default')}
        />
        {rightIconEl}
      </div>
      {hintEl}
    </div>
  );
}

export default InputField;
