import { ImageResponse } from 'next/og'
import { site } from '@/data/site'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${site.name}, ${site.role}`

const CANVAS = '#f3f0e8'
const INK = '#1d332b'
const SLATE = '#58675f'
const FOREST = '#193a30'
const LIME = '#c7e66a'

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
          backgroundColor: CANVAS,
          padding: '72px 80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'flex-start',
            gap: 14,
            backgroundColor: LIME,
            borderRadius: 999,
            padding: '12px 26px',
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: 999, backgroundColor: FOREST }} />
          <div style={{ fontSize: 24, color: INK }}>{site.availability}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 116,
              lineHeight: 1,
              color: INK,
              letterSpacing: -4,
            }}
          >
            Mohd Samiullah
          </div>
          <div style={{ display: 'flex', height: 1, backgroundColor: FOREST, margin: '36px 0' }} />
          <div style={{ fontSize: 40, color: INK, letterSpacing: -1 }}>{site.role}</div>
          <div style={{ fontSize: 28, color: SLATE, marginTop: 16, maxWidth: 880 }}>
            {site.summary}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 48, fontSize: 24, color: SLATE }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <span style={{ color: FOREST }}>70%</span>
            <span>lower database load</span>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <span style={{ color: FOREST }}>80%</span>
            <span>manual effort removed</span>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <span style={{ color: FOREST }}>40%</span>
            <span>faster response time</span>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
