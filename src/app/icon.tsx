import { ImageResponse } from 'next/server'
import { useTheme } from '@/components/context/ThemeContext'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  const {theme, setTheme} = useTheme();

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        className={`theme-${theme}`}
        style={{
          fontSize: 24,
          background: 'var(--bg)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--subtext)',
        }}
      >
        m
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}