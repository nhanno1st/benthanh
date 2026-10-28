'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import BusinessIcon from '@/components/ui/BusinessIcon';
import Photo from '@/components/ui/Photo';
import { cn } from '@/lib/cn';
import type { BusinessLine } from '@/types/company';

export default function ServiceTabs({ items }: { items: BusinessLine[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  // Mở đúng tab khi vào bằng link dạng /services#in-an
  useEffect(() => {
    const sync = () => {
      const id = window.location.hash.slice(1);
      if (items.some((i) => i.id === id)) setActiveId(id);
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, [items]);

  const active = items.find((i) => i.id === activeId) ?? items[0];
  if (!active) return null;

  return (
    <div className="grid gap-7 lg:grid-cols-[300px_1fr]">
      <div role="tablist" aria-orientation="vertical" className="flex overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
        {items.map((i) => (
          <button
            key={i.id}
            id={i.id}
            role="tab"
            aria-selected={i.id === active.id}
            onClick={() => setActiveId(i.id)}
            className={cn(
              'flex shrink-0 items-center gap-3 border-b-2 px-4 py-4 text-left font-display text-lg font-bold transition-colors lg:border-b-0 lg:border-l-4 lg:py-5 lg:text-xl',
              i.id === active.id ? 'border-gold bg-brand-soft text-ink' : 'border-line text-ink-muted hover:text-ink',
            )}
          >
            <BusinessIcon name={i.icon} size={22} className="shrink-0" />
            <span className="whitespace-nowrap lg:whitespace-normal">{i.title}</span>
          </button>
        ))}
      </div>

      <div role="tabpanel" className="overflow-hidden">
        <div className="dark-zone relative">
          <Photo key={active.id} src={active.image} seed={active.id} alt="" sizes="(min-width: 1024px) 70vw, 100vw" className="aspect-[16/10] w-full md:aspect-[16/8]" />
          <div aria-hidden className="scrim absolute inset-0" />
          <h2 className="absolute inset-x-0 bottom-0 p-6 text-[clamp(28px,3.6vw,46px)] font-bold leading-[1.2] text-white md:p-10">{active.title}</h2>
        </div>
        <div className="pt-8 md:pt-10">
          <p className="mb-5 max-w-[58ch] text-ink-muted">{active.detail}</p>
          <ul>
            {active.highlights.map((h) => (
              <li key={h} className="relative border-t border-line py-2.5 pl-7">
                <span aria-hidden className="absolute left-0 top-[18px] h-3 w-3 bg-gold" />
                {h}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn-primary mt-6">
            Liên hệ về dịch vụ này
          </Link>
        </div>
      </div>
    </div>
  );
}
