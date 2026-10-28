import Link from 'next/link';
import type { CSSProperties } from 'react';
import HeroMarker from '@/components/ui/HeroMarker';
import Photo from '@/components/ui/Photo';
import { CmykDots, RegMark } from '@/components/ui/PrintMarks';
import { IMAGES } from '@/constants/images';
import { SITE } from '@/constants/site';

interface Props {
  linesCount?: number;
  locationsCount?: number;
  /** Tên các lĩnh vực chạy trên dải chữ cuối hero */
  titles?: string[];
}

const FALLBACK = ['In ấn', 'Văn phòng phẩm', 'F&B', 'Bản ghi video/audio', 'Chia sẻ không gian', 'Lưu trú ngắn hạn', 'Cho thuê kho xưởng'];
const LINES = ['Văn hóa', 'Tổng hợp', 'Bến Thành'];

export default function Hero({ linesCount = 7, locationsCount = 3, titles = FALLBACK }: Props) {
  const facts = [
    { value: SITE.foundedYear, label: 'năm cổ phần hóa' },
    { value: linesCount, label: 'lĩnh vực' },
    { value: locationsCount, label: 'địa điểm kinh doanh' },
  ];
  const ticker = titles.length ? titles : FALLBACK;

  return (
    <section data-dark-hero className="dark-zone relative isolate overflow-hidden bg-brand-dark text-white">
      <HeroMarker />
      {/* Ảnh toàn màn hình, nhuộm mực xanh như in một màu */}
      <div className="absolute inset-0 -z-10">
        <Photo src={IMAGES.hero} seed="hero" alt="" priority sizes="100vw" className="hero-drift h-full w-full" />
      </div>
      <div aria-hidden className="ink-wash absolute inset-0 -z-10" />
      <div aria-hidden className="hero-veil absolute inset-0 -z-10" />
      <RegMark className="absolute left-5 top-28 hidden text-white/50 lg:block" />
      <RegMark className="absolute right-5 top-28 hidden text-white/50 lg:block" />

      <div className="container-page flex min-h-[100svh] flex-col justify-end pb-10 pt-40 md:pb-14">
        <h1 className="text-[clamp(44px,min(11vw,15svh),176px)] font-black leading-[0.98]">
          {LINES.map((t, i) => (
            <span key={t} className="block overflow-hidden pt-[0.12em]">
              <span className="rise block" style={{ '--d': i } as CSSProperties}>
                {t}
              </span>
            </span>
          ))}
        </h1>

        <div className="hero-fade mt-10 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="max-w-[36ch] text-xl leading-relaxed text-white/90 md:text-2xl">{SITE.slogan}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gold">
                Liên hệ báo giá
              </Link>
              <Link href="/services" className="btn-ghost-light">
                Xem sản phẩm và dịch vụ
              </Link>
            </div>
          </div>
          <div>
            <CmykDots className="mb-4 lg:justify-end" />
            <dl className="flex flex-wrap gap-x-10 gap-y-3 border-t border-white/30 pt-5 lg:justify-end">
              {facts.map((f) => (
                <div key={f.label} className="flex flex-row-reverse items-baseline gap-2">
                  <dt className="text-sm text-white/80">{f.label}</dt>
                  <dd className="font-display text-3xl font-bold leading-none text-gold">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Dải chữ chạy các lĩnh vực */}
      <div className="overflow-hidden bg-gold py-3.5 text-brand-dark" aria-label={`Các lĩnh vực: ${ticker.join(', ')}`}>
        <div className="marquee" aria-hidden>
          {[0, 1].map((k) => (
            <ul key={k} className="flex shrink-0 items-center">
              {ticker.map((t) => (
                <li key={t} className="flex items-center gap-8 pr-8 font-display text-xl font-bold md:text-2xl">
                  {t}
                  <i className="h-2 w-2 rotate-45 bg-brand-dark" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
