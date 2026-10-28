import Link from 'next/link';
import Photo from '@/components/ui/Photo';
import Reveal from '@/components/ui/Reveal';
import { IMAGES } from '@/constants/images';
import { SITE } from '@/constants/site';

export default function QuoteBand({ title = 'Cần báo giá in ấn hoặc văn phòng phẩm?' }: { title?: string }) {
  return (
    <section className="dark-zone relative isolate overflow-hidden bg-brand-dark py-24 text-white md:py-44">
      <div className="absolute inset-0 -z-10">
        <Photo src={IMAGES.services['in-an']} seed="quote" alt="" sizes="100vw" className="h-full w-full" />
      </div>
      <div aria-hidden className="ink-wash absolute inset-0 -z-10" />
      <div aria-hidden className="hero-veil absolute inset-0 -z-10" />
      <Reveal className="container-page">
        <h2 className="max-w-[16ch] text-[clamp(40px,8vw,128px)] font-black leading-[1.02]">{title}</h2>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link href="/contact" className="btn-gold">
            Liên hệ báo giá
          </Link>
          <p className="text-lg text-white/85">Giờ làm việc: {SITE.hours}</p>
        </div>
      </Reveal>
    </section>
  );
}
