import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { NEXT_PAGE } from '@/constants/nav';

export default function NextPageCta({ from }: { from: string }) {
  const next = NEXT_PAGE[from];
  if (!next) return null;
  return (
    <section>
      <Link
        href={next.href}
        className="container-page group flex items-center justify-between gap-5 border-t border-line py-14 transition-[padding] duration-500 hover:pl-8 md:py-20"
      >
        <span>
          <span className="block text-[15px] text-ink-muted">Trang tiếp theo</span>
          <span className="font-display text-[clamp(40px,9vw,140px)] font-black leading-[1.02]">{next.label}</span>
        </span>
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold text-brand-dark transition group-hover:bg-brand group-hover:text-white md:h-24 md:w-24">
          <ArrowRight size={34} aria-hidden />
        </span>
      </Link>
    </section>
  );
}
