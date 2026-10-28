import type { Metadata, Viewport } from 'next';
import { Be_Vietnam_Pro, Fraunces, Lora } from 'next/font/google';
import { SITE, SITE_URL } from '@/constants/site';
import './globals.css';

/** Be Vietnam Pro: thiết kế riêng cho tiếng Việt, dấu thanh rõ ràng, dùng cho cả nội dung lẫn tiêu đề. */
const sans = Be_Vietnam_Pro({
  subsets: ['vietnamese', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

/** Fraunces: serif đậm, mềm, có hồn — dùng cho mọi tiêu đề lớn. */
const serif = Fraunces({
  subsets: ['vietnamese', 'latin'],
  weight: ['500', '700', '900'],
  variable: '--font-serif',
  display: 'swap',
});

/** Lora nghiêng: chỉ dùng cho slogan / câu trích để tạo chút ấm áp, không dùng cho đoạn văn dài. */
const quote = Lora({
  subsets: ['vietnamese', 'latin'],
  style: ['italic'],
  weight: ['500', '600'],
  variable: '--font-quote',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE.name} — ${SITE.slogan}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  openGraph: { title: SITE.name, description: SITE.description, locale: 'vi_VN', type: 'website' },
};

export const viewport: Viewport = { themeColor: '#2358F2' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${sans.variable} ${serif.variable} ${quote.variable}`}>
      <body>
        <noscript>
          <style>{'.reveal{opacity:1!important;transform:none!important}'}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
