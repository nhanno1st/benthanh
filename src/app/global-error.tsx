'use client';

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="vi">
      <body style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '6rem 1rem' }}>
        <h1>Đã có lỗi xảy ra</h1>
        <button onClick={reset}>Thử lại</button>
      </body>
    </html>
  );
}
