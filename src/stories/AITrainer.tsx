import React from 'react';
import { color, scale } from './tokens';

// ─── Figma asset URLs (valid ~7 days) ─────────────────────────────────────────
const ASSET = {
  aiIndicator:     'https://www.figma.com/api/mcp/asset/36fccc07-87b6-4f1b-8f5b-073992c06db9',
  trainerAvatar:   'https://www.figma.com/api/mcp/asset/d3d76a8d-028b-4f0c-9f10-b55de237e81c',
  arrowLeft:       'https://www.figma.com/api/mcp/asset/a85548bd-c9f3-4e69-92bc-a67ad6ff1a53',
  liveDot:         'https://www.figma.com/api/mcp/asset/26e4a95d-7c14-4790-9aa9-b1f8f38d26be',
  pipCameraOffIcon:'https://www.figma.com/api/mcp/asset/51a6b6fd-b061-41b1-a5b6-1fdf0ea5c24b',
  pipCameraOnBg:   'https://www.figma.com/api/mcp/asset/edf71262-c8ed-48c5-8de5-f5045e81e327',
  pipCameraOnPerson:'https://www.figma.com/api/mcp/asset/8c7dd205-9b95-4370-8ccd-a095db73a038',
  bgCameraOff:     'https://www.figma.com/api/mcp/asset/a4524848-946a-4a15-99ba-61b51031d559',
  bgFirstQuestion: 'https://www.figma.com/api/mcp/asset/254c93a4-0519-4f65-a24d-8682a389792b',
  btnCameraOff:    'https://www.figma.com/api/mcp/asset/d19cc357-9666-467c-96f5-c084580f1de1',
  btnVolume:       'https://www.figma.com/api/mcp/asset/7ea270de-ae26-4c7b-b890-a1fdd68937b5',
  btnMic:          'https://www.figma.com/api/mcp/asset/a9636ff6-8156-4635-b988-0389d60835fc',
  btnEndCall:      'https://www.figma.com/api/mcp/asset/8c2a2358-ce88-47cd-a765-942f2d88754a',
  btnCaptions:     'https://www.figma.com/api/mcp/asset/9c825716-503b-4ab0-9c82-6e089cd4ae38',
};

// ─── Types ────────────────────────────────────────────────────────────────────

export type AITrainerState =
  | 'ready_to_start'
  | 'conversation_camera_off'
  | 'first_ai_trainer_question';

export interface AITrainerProps {
  /**
   * Current screen state of the AI Trainer component.
   * @default 'ready_to_start'
   */
  state?: AITrainerState;
  /** AI Trainer's display name. @default 'Alex' */
  trainerName?: string;
  /** Conversation topic label. @default 'Travel' */
  topic?: string;
  /** Elapsed time string shown during a live call. @default '0:05' */
  timer?: string;
  /** Caption text shown when the trainer is speaking. */
  captionText?: string;
  /** Fired when the user clicks "Start Video Call". */
  onStartCall?: () => void;
  /** Fired when the user clicks "Change Topic". */
  onChangeTopic?: () => void;
  /** Fired when the user clicks the End Call button. */
  onEndCall?: () => void;
}

// ─── Shared style helpers ─────────────────────────────────────────────────────

const S = {
  font: (size: number, weight: 400 | 600, lh: number, extra?: React.CSSProperties): React.CSSProperties => ({
    fontFamily: "'Fira Sans', sans-serif",
    fontSize: size,
    fontWeight: weight,
    lineHeight: `${lh}px`,
    ...extra,
  }),
  badge: (bg = 'rgba(9,47,66,0.8)'): React.CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    height: 22,
    padding: '4px 8px 4px 4px',
    background: bg,
    borderRadius: 6,
    whiteSpace: 'nowrap' as const,
    flexShrink: 0,
  }),
};

// ─── Sub-components ───────────────────────────────────────────────────────────

/** User's self-view in the top-right corner. */
function PictureInPicture({ cameraOn }: { cameraOn: boolean }) {
  return (
    <div style={{
      position: 'relative',
      width: 164,
      height: 96,
      borderRadius: 6,
      border: `2px solid ${scale.blue[800]}`,
      overflow: 'hidden',
      flexShrink: 0,
      background: color['bg-invert'],
    }}>
      {cameraOn ? (
        <>
          <img
            src={ASSET.pipCameraOnBg}
            alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <img
            src={ASSET.pipCameraOnPerson}
            alt=""
            style={{ position: 'absolute', width: '100%', top: '-65%', objectFit: 'cover' }}
          />
        </>
      ) : (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: 54,
            background: color['bg-blue-light'],
            border: `2px solid ${color['bg-invert']}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <img src={ASSET.pipCameraOffIcon} alt="Camera off" width={20} height="auto" style={{ display: 'block' }} />
          </div>
        </div>
      )}
      {/* "You" label */}
      <div style={{
        ...S.badge(),
        position: 'absolute', bottom: 4, right: 4,
        padding: '4px 8px',
      }}>
        <span style={S.font(12, 400, 16, { color: '#fff' })}>You</span>
      </div>
    </div>
  );
}

/** The floating control bar at the bottom of the call. */
function ControlBar({ onEndCall }: { onEndCall?: () => void }) {
  const btn = (icon: string, isRed = false): React.CSSProperties => ({
    width: 40, height: 40, borderRadius: 8,
    border: `1px solid ${isRed ? scale.red[500] : scale.blue[800]}`,
    background: isRed ? 'rgba(202,43,52,0.7)' : 'rgba(6,59,85,0.7)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', flexShrink: 0,
  });

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: 12,
      background: 'rgba(9,47,66,0.8)',
      borderRadius: 16,
      flexShrink: 0,
    }}>
      <button style={btn(ASSET.btnCameraOff)} title="Camera" aria-label="Toggle camera">
        <img src={ASSET.btnCameraOff} alt="" width={20} height="auto" />
      </button>
      <button style={btn(ASSET.btnVolume)} title="Audio" aria-label="Toggle audio">
        <img src={ASSET.btnVolume} alt="" width={20} height="auto" />
      </button>
      <button style={btn(ASSET.btnMic)} title="Microphone" aria-label="Toggle microphone">
        <img src={ASSET.btnMic} alt="" width={20} height="auto" />
      </button>
      <button style={btn(ASSET.btnEndCall, true)} title="End call" aria-label="End call" onClick={onEndCall}>
        <img src={ASSET.btnEndCall} alt="" width={20} height="auto" />
      </button>
      {/* Divider */}
      <div style={{ width: 1, height: 28, background: scale.blue[700], flexShrink: 0, margin: '0 2px' }} />
      <button style={btn(ASSET.btnCaptions)} title="Captions" aria-label="Toggle captions">
        <img src={ASSET.btnCaptions} alt="" width={20} height="auto" />
      </button>
    </div>
  );
}

/** Caption bubble shown when the trainer is speaking. */
function Captions({ trainerName, text, aiIcon }: { trainerName: string; text: string; aiIcon: string }) {
  return (
    <div style={{
      width: '100%',
      background: 'rgba(6,59,85,0.8)',
      border: `1px solid ${scale.blue[200]}`,
      borderRadius: 8,
      padding: 12,
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start',
    }}>
      <div style={{ ...S.badge(), flexShrink: 0 }}>
        <img src={aiIcon} alt="" width={12} height="auto" style={{ display: 'block' }} />
        <span style={S.font(12, 400, 16, { color: '#fff' })}>{trainerName}</span>
      </div>
      <p style={S.font(16, 400, 22, { color: '#fff', margin: 0, flex: 1 })}>{text}</p>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

/** Learnlight Design System — AI Trainer Video Call Stage */
export function AITrainer({
  state = 'ready_to_start',
  trainerName = 'Alex',
  topic = 'Travel',
  timer = '0:05',
  captionText = 'Hi! If you could travel anywhere right now, where would you go and why?',
  onStartCall,
  onChangeTopic,
  onEndCall,
}: AITrainerProps) {
  const isReady = state === 'ready_to_start';
  const isLive  = state !== 'ready_to_start';
  const isSpeaking = state === 'first_ai_trainer_question';

  const outerBorder = isSpeaking
    ? `4px solid ${color['border-brand']}`
    : `1px solid ${color['border-primary']}`;

  return (
    <div style={{
      position: 'relative',
      width: 652,
      height: 746,
      borderRadius: 8,
      border: outerBorder,
      overflow: 'hidden',
      background: color['bg-invert'],
      boxShadow: '2px 2px 8px 0 rgba(9,30,66,0.1)',
      display: 'flex',
      flexDirection: 'column',
      padding: 16,
      fontFamily: "'Fira Sans', sans-serif",
    }}>

      {/* ── Background video image (live states only) ── */}
      {isLive && (
        <img
          src={isSpeaking ? ASSET.bgFirstQuestion : ASSET.bgCameraOff}
          alt=""
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* ── Top section ── */}
      <div style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        zIndex: 1,
      }}>
        {/* Left badges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {/* Trainer name + (live) + (timer) row */}
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <div style={S.badge()}>
              <img src={ASSET.aiIndicator} alt="" width={12} height="auto" style={{ display: 'block' }} />
              <span style={S.font(12, 400, 16, { color: '#fff' })}>{trainerName}</span>
            </div>
            {isLive && (
              <>
                <div style={S.badge()}>
                  <img src={ASSET.liveDot} alt="" width={10} height="auto" style={{ display: 'block' }} />
                  <span style={S.font(12, 400, 16, { color: '#fff', paddingLeft: 2 })}>Live</span>
                </div>
                <div style={{ ...S.badge(), padding: '4px 8px' }}>
                  <span style={S.font(12, 400, 16, { color: '#fff' })}>{timer}</span>
                </div>
              </>
            )}
          </div>
          {/* Topic badge */}
          <div style={{ ...S.badge(color['bg-brand']), padding: '4px 8px' }}>
            <span style={S.font(10, 600, 14, {
              color: '#fff',
              letterSpacing: 0.5,
              textTransform: 'uppercase',
            })}>
              topic: {topic}
            </span>
          </div>
        </div>

        {/* Right: Picture-in-picture */}
        <PictureInPicture cameraOn={isSpeaking} />
      </div>

      {/* ── Main content area ── */}
      {isReady ? (
        /* ── Ready to start: centred hero ── */
        <div style={{
          position: 'relative', zIndex: 1,
          flex: 1,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 32, paddingBottom: 96,
        }}>
          {/* Avatar */}
          <div style={{
            width: 96, height: 96, borderRadius: '50%',
            border: `1px solid ${scale.blue[300]}`,
            boxShadow: `8px 17px 50px -12px rgba(14,163,236,0.4)`,
            overflow: 'hidden', flexShrink: 0,
          }}>
            <img src={ASSET.trainerAvatar} alt={trainerName} width={96} height={96} style={{ display: 'block', objectFit: 'cover' }} />
          </div>

          {/* Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', textAlign: 'center', width: '100%' }}>
              <h2 style={S.font(24, 600, 32, { color: scale.blue[10], margin: 0, width: '100%' })}>
                Ready to Start Video Call!
              </h2>
              <p style={S.font(18, 400, 24, { color: scale.blue[10], margin: 0, width: '100%' })}>
                {`You'll be practicing `}
                <strong style={{ fontWeight: 600 }}>{topic}</strong>
                {` with ${trainerName}`}
              </p>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={onStartCall}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                height: 40, padding: '12px 8px',
                background: color['bg-brand'],
                color: '#fff',
                border: 'none', borderRadius: 6,
                boxShadow: '0 1px 2px 0 rgba(9,30,66,0.1)',
                cursor: 'pointer',
                ...S.font(14, 600, 18, { color: '#fff' }),
              }}
            >
              <img src={ASSET.aiIndicator} alt="" width={14} height="auto" style={{ display: 'block' }} />
              Start Video Call
            </button>

            {/* Back link */}
            <button
              type="button"
              onClick={onChangeTopic}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              }}
            >
              <img src={ASSET.arrowLeft} alt="" width={16} height="auto" style={{ display: 'block' }} />
              <span style={S.font(14, 400, 18, { color: scale.neutral[70] })}>Change Topic</span>
            </button>
          </div>
        </div>
      ) : (
        /* ── Live call: bottom-docked controls ── */
        <div style={{
          position: 'relative', zIndex: 1,
          flex: 1, display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-end', alignItems: 'center',
          gap: 0, paddingBottom: 5,
        }}>
          {/* Bottom gradient overlay */}
          <div style={{
            position: 'absolute',
            bottom: -16, left: -16, right: -16,
            height: 316,
            background: 'linear-gradient(to bottom, rgba(9,47,66,0) 0%, rgba(9,47,66,0.7) 100%)',
            pointerEvents: 'none',
          }} />

          <div style={{
            position: 'relative', zIndex: 1,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 16, width: '100%',
          }}>
            {/* Captions (speaking state only) */}
            {isSpeaking && (
              <div style={{ width: '100%', padding: '0 96px' }}>
                <Captions
                  trainerName={trainerName}
                  text={captionText!}
                  aiIcon={ASSET.aiIndicator}
                />
              </div>
            )}

            {/* Control bar */}
            <ControlBar onEndCall={onEndCall} />
          </div>
        </div>
      )}
    </div>
  );
}
