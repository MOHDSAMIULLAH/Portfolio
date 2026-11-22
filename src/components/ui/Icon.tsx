import type { SVGProps } from 'react'

/**
 * One icon set drawn on a 24px grid at a single 1.5px stroke weight, so every
 * mark on the page shares the same optical weight as the type.
 */
type IconProps = SVGProps<SVGSVGElement>

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

/**
 * Brand marks are drawn as filled glyphs rather than at the UI stroke weight,
 * because recognisability matters more here than matching the icon system.
 */
function BrandSvg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

export function LinkedInIcon(props: IconProps) {
  return (
    <BrandSvg {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </BrandSvg>
  )
}

export function GitHubIcon(props: IconProps) {
  return (
    <BrandSvg {...props}>
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.83-.26.83-.58l-.02-2.04c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.31-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.21.69.82.57A12 12 0 0 0 12 .3Z" />
    </BrandSvg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2.75" y="4.75" width="18.5" height="14.5" rx="2" />
      <path d="m3.5 7 7.4 5.3a2 2 0 0 0 2.2 0L20.5 7" />
    </Svg>
  )
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <BrandSvg {...props}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07a8.1 8.1 0 0 1-2.4-1.48 9 9 0 0 1-1.65-2.06c-.18-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.26.3-1.03 1.01-1.03 2.47s1.06 2.86 1.2 3.06c.16.2 2.1 3.2 5.08 4.48.7.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.26-.7.26-1.29.18-1.41-.07-.13-.27-.2-.56-.35ZM12.05 21.8h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.8 9.8 0 0 1-1.5-5.22 9.82 9.82 0 0 1 16.76-6.94 9.74 9.74 0 0 1 2.88 6.95 9.82 9.82 0 0 1-9.83 9.8ZM20.52 3.45A11.74 11.74 0 0 0 12.05 0C5.55 0 .26 5.28.26 11.77c0 2.07.54 4.1 1.57 5.88L.16 24l6.5-1.7a11.76 11.76 0 0 0 5.39 1.37h.01c6.5 0 11.79-5.28 11.79-11.77a11.7 11.7 0 0 0-3.44-8.33Z" />
    </BrandSvg>
  )
}

export function DownloadIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3.75v10.5m0 0 3.75-3.75M12 14.25 8.25 10.5" />
      <path d="M4 16.5v1.75a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V16.5" />
    </Svg>
  )
}

export function ExternalIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8.5 15.5 15.5 8.5M9.75 8.5h5.75v5.75" />
    </Svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 8h16M4 16h16" />
    </Svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </Svg>
  )
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 19.5v-15m0 0 6 6m-6-6-6 6" />
    </Svg>
  )
}
