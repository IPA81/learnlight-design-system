import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import React from 'react';
import { AITrainer } from './AITrainer';

const meta = {
  title: 'Learnlight/AI Trainer',
  component: AITrainer,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['ready_to_start', 'conversation_camera_off', 'first_ai_trainer_question'],
      description: 'Screen state of the AI Trainer video call',
    },
    trainerName: { control: 'text', description: "AI Trainer's name" },
    topic: { control: 'text', description: 'Conversation topic' },
    timer: { control: 'text', description: 'Elapsed call time (live states only)' },
    captionText: { control: 'text', description: 'Caption text shown when trainer is speaking' },
    onStartCall:   { action: 'start-call' },
    onChangeTopic: { action: 'change-topic' },
    onEndCall:     { action: 'end-call' },
  },
  args: {
    onStartCall:   fn(),
    onChangeTopic: fn(),
    onEndCall:     fn(),
  },
} satisfies Meta<typeof AITrainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── State stories ─────────────────────────────────────────────────────────────

/** Pre-call landing — user sees the trainer's avatar and a CTA to begin. */
export const ReadyToStart: Story = {
  name: 'State / Ready to Start',
  args: {
    state: 'ready_to_start',
    trainerName: 'Alex',
    topic: 'Travel',
  },
};

/** Live call — trainer video is visible, user camera is off, no captions. */
export const ConversationCameraOff: Story = {
  name: 'State / Conversation (Camera Off)',
  args: {
    state: 'conversation_camera_off',
    trainerName: 'Alex',
    topic: 'Travel',
    timer: '0:05',
  },
};

/** Live call — trainer is asking the first question; captions appear and user camera is on. */
export const TrainerSpeaking: Story = {
  name: 'State / Trainer Speaking',
  args: {
    state: 'first_ai_trainer_question',
    trainerName: 'Alex',
    topic: 'Travel',
    timer: '0:05',
    captionText: 'Hi! If you could travel anywhere right now, where would you go and why?',
  },
};

// ─── Content variations ────────────────────────────────────────────────────────

/** Different trainer name and topic to verify token-driven labels. */
export const CustomContent: Story = {
  name: 'Content / Custom Trainer & Topic',
  args: {
    state: 'ready_to_start',
    trainerName: 'Sofia',
    topic: 'Business English',
  },
};

/** Longer caption text to verify wrapping behaviour in the caption bubble. */
export const LongCaption: Story = {
  name: 'Content / Long Caption',
  args: {
    state: 'first_ai_trainer_question',
    trainerName: 'Alex',
    topic: 'Travel',
    timer: '1:42',
    captionText:
      "Great answer! Now let's build on that — can you describe the cultural differences you've experienced while travelling abroad, and how they've shaped your perspective on language and communication?",
  },
};

// ─── All States grid ──────────────────────────────────────────────────────────

/** All three states side-by-side for a quick visual comparison. */
export const AllStates: Story = {
  name: 'All States',
  render: (args) => (
    <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
      {(
        [
          { state: 'ready_to_start',              label: 'Ready to Start' },
          { state: 'conversation_camera_off',     label: 'Conversation (Camera Off)' },
          { state: 'first_ai_trainer_question',   label: 'Trainer Speaking' },
        ] as const
      ).map(({ state, label }) => (
        <div key={state} style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
          <span style={{
            fontSize: 11, fontWeight: 700, color: '#98a8b0',
            textTransform: 'uppercase', letterSpacing: '0.08em',
          }}>
            {label}
          </span>
          <AITrainer {...args} state={state} />
        </div>
      ))}
    </div>
  ),
  args: {
    trainerName: 'Alex',
    topic: 'Travel',
    timer: '0:05',
    captionText: 'Hi! If you could travel anywhere right now, where would you go and why?',
  },
  parameters: { layout: 'padded' },
};
