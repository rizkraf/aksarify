import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Aksarify - Platform Uji Pemahaman Bacaan Bahasa Indonesia';
export const size = {
  width: 1200,
  height: 630,
};

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
          <h1 style={{ color: 'black', fontSize: 72 }}>Aksarify</h1>
        </div>
        <p style={{ fontSize: 36, color: 'darkgreen', marginTop: 10 }}>
          Uji Pemahaman Bacamu Dalam Hitungan Menit!
        </p>
        <p style={{ fontSize: 24, color: 'gray', marginTop: 24 }}>
          Platform interaktif untuk meningkatkan literasi Bahasa Indonesia
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
