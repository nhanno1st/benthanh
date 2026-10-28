'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import BusinessIcon from '@/components/ui/BusinessIcon';
import Photo from '@/components/ui/Photo';
import Reveal from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';
import type { BusinessLine } from '@/types/company';

/**
 * Dải toàn chiều rộng: rê chuột (hoặc Tab) vào lĩnh vực nào, lĩnh vực đó mở rộng ra.
 * Trên mobile các lĩnh vực xếp dọc, luôn hiện đủ chữ.
 */
export default function BusinessLines({ items }: { items: BusinessLine[] }) {
  const [active, setActive] = useState(0);

  return (
    <section className="dark-zone bg-brand-dark pt-16 text-white md:pt-24">
      <div className="container-page">
        <Reveal className="grid gap-5 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <h2 className="text-[clamp(34px,5.4vw,80px)] font-bold leading-[1.06]">Bảy lĩnh vực, một địa chỉ quen thuộc</h2>
          <p className="max-w-[46ch] text-lg text-white/75">Từ xưởng in đến không gian làm việc, mỗi dịch vụ đều có đội ngũ phụ trách riêng.</p>
        </Reveal>
      </div>

      <ul className="mt-12 flex flex-col md:mt-16 lg:h-[min(720px,82vh)] lg:flex-row">
        {items.map((b, i) => {
          const on = i === active;
          return (
            <li
              key={b.id}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={cn(
                'relative min-h-[280px] overflow-hidden border-t border-white/15 transition-[flex-grow] duration-700 ease-[cubic-bezier(.2,.8,.2,1)] lg:min-h-0 lg:min-w-[76px] lg:basis-0 lg:border-l lg:border-t-0 lg:first:border-l-0',
                on ? 'lg:flex-[6]' : 'lg:flex-1',
              )}
            >
              <Link href={`/services#${b.id}`} className="group absolute inset-0 isolate flex flex-col justify-between p-6 lg:p-8">
                <span className="absolute inset-0 -z-10">
                  <Photo src={b.image} seed={b.id} alt="" sizes="(min-width: 1024px) 60vw, 100vw" className="h-full w-full" />
                </span>
                <span aria-hidden className="scrim absolute inset-0 -z-10" />
                {/* Phủ tối các lĩnh vực đang thu gọn (chỉ desktop) */}
                <span aria-hidden className={cn('absolute inset-0 -z-10 hidden bg-[rgba(7,18,58,0.78)] transition-opacity duration-700 lg:block', on ? 'opacity-0' : 'opacity-100')} />

                <span className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-brand-dark">
                    <BusinessIcon name={b.icon} />
                  </span>
                  <ArrowUpRight size={26} aria-hidden className={cn('transition-opacity duration-500', on ? 'opacity-100' : 'lg:opacity-0')} />
                </span>

                {/* Tên dọc khi thu gọn */}
                <span
                  aria-hidden
                  className={cn('absolute bottom-8 left-1/2 hidden -translate-x-1/2 rotate-180 font-display text-xl font-bold transition-opacity duration-500 [writing-mode:vertical-rl] lg:block', on && 'opacity-0')}
                >
                  {b.title}
                </span>

                <span className={cn('block transition-opacity duration-500 lg:w-[min(440px,32vw)]', on ? 'lg:opacity-100 lg:delay-300' : 'lg:pointer-events-none lg:opacity-0')}>
                  <span className="block font-display text-3xl font-bold leading-[1.15] md:text-4xl">{b.title}</span>
                  <span className="mt-3 block text-[15px] leading-relaxed text-white/85">{b.summary}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
