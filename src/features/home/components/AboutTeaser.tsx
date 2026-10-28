import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Photo from '@/components/ui/Photo';
import Reveal from '@/components/ui/Reveal';
import { IMAGES } from '@/constants/images';

/** Lấy 2 câu đầu (tối đa ~320 ký tự) để làm đoạn giới thiệu ngắn ở trang chủ. */
function teaser(text: string) {
  const short = text.split(/(?<=[.!?])\s+/).slice(0, 2).join(' ');
  return short.length > 320 ? `${short.slice(0, 317).trimEnd()}…` : short;
}

export default function AboutTeaser({ text }: { text: string }) {
  return (
    <section className="py-20 md:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-24">
        {/* Câu chuyện được đặt thành tuyên ngôn, không đóng khung */}
        <div>
          <Reveal>
            <p className="font-display text-[clamp(28px,3.9vw,58px)] font-bold leading-[1.22] text-ink">{teaser(text)}</p>
          </Reveal>
          <Reveal delay={1} className="mt-10">
            <Link href="/about" className="group inline-flex items-center gap-3 border-b-2 border-gold pb-1 text-lg font-semibold text-brand-dark transition-colors hover:border-brand">
              Câu chuyện Bến Thành GCC
              <ArrowRight size={20} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Khung vòm: gợi cửa sổ các toà nhà cũ ở Quận 1 */}
        <Reveal delay={2} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div aria-hidden className="absolute inset-0 -translate-y-4 translate-x-4 rounded-t-full border-2 border-gold" />
          <figure className="relative">
            <Photo src={IMAGES.building} seed="building" alt="Trụ sở Bến Thành GCC" sizes="(min-width: 1024px) 30vw, 80vw" className="aspect-[3/4] rounded-t-full" />
            <figcaption className="mt-3 text-sm text-ink-muted">Trụ sở Bến Thành GCC</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
