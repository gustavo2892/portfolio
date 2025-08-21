import { ImageResponse } from 'next/og'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#EACDC2',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#253A8F',
          borderRadius: '100%',
          fontWeight: 700
        }}
      >
        F
      </div>
    ),
    {
      ...size,
    }
  )
}