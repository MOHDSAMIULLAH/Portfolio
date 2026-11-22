import { ImageResponse } from 'next/og'
import { site } from '@/data/site'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${site.name}, ${site.role}`

const INK = '#08090a'
const BONE = '#ecedee'
const MUTED = '#8a8f98'
const BRASS = '#c8a961'
const LINE = '#212429'

/** Social card, generated at build time so the design stays in one place. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: INK,
          padding: '72px 80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 10, height: 10, backgroundColor: BRASS }} />
          <div style={{ fontSize: 24, color: MUTED, letterSpacing: 1 }}>
            {site.availability}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 116,
              lineHeight: 1,
              color: BONE,
              letterSpacing: -4,
            }}
          >
            Mohd Samiullah
          </div>
          <div style={{ display: 'flex', height: 1, backgroundColor: LINE, margin: '36px 0' }} />
          <div style={{ fontSize: 40, color: BONE, letterSpacing: -1 }}>{site.role}</div>
          <div style={{ fontSize: 28, color: MUTED, marginTop: 16, maxWidth: 880 }}>
            {site.summary}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 48, fontSize: 24, color: MUTED }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <span style={{ color: BRASS }}>70%</span>
            <span>lower database load</span>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <span style={{ color: BRASS }}>80%</span>
            <span>manual effort removed</span>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <span style={{ color: BRASS }}>40%</span>
            <span>faster response time</span>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
