'use client';

import { Download } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { EmptyState } from '@/components/ui/StateScreens';
import Pagination from '@/components/ui/Pagination';
import { ANNOUNCEMENT_CATEGORIES } from '@/mocks/announcements';
import { cn } from '@/lib/cn';
import type { Announcement, AnnouncementCategory } from '@/types/announcement';
import { CATEGORY_BADGE, CATEGORY_ICON, CATEGORY_LABEL, splitDate } from '../meta';
import type { Paginated } from '@/types/api';
import { formatDate } from '@/utils/format';
import { announcementService } from '../announcement.service';

interface Props {
  initial: Paginated<Announcement>;
  years: number[];
}

export default function AnnouncementBoard({ initial, years }: Props) {
  const [category, setCategory] = useState<AnnouncementCategory | 'all'>('all');
  const [year, setYear] = useState<number | undefined>(undefined);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(initial);
  const [loading, setLoading] = useState(false);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    let cancelled = false;
    setLoading(true);
    announcementService
      .list({ category, year, page })
      .then((res) => !cancelled && setData(res))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [category, year, page]);

  return (
    <div className="bg-white p-5 ring-1 ring-line md:p-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div role="tablist" aria-label="Loại công bố" className="flex flex-wrap gap-2">
          {ANNOUNCEMENT_CATEGORIES.map((c) => (
            <button
              key={c.value}
              role="tab"
              aria-selected={category === c.value}
              onClick={() => { setCategory(c.value as AnnouncementCategory | 'all'); setPage(1); }}
              className={cn(
                'rounded-sm px-[18px] py-2.5 text-sm font-semibold transition',
                category === c.value ? 'bg-brand text-white' : 'bg-surface text-ink hover:bg-brand-soft',
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm">
          <span className="text-ink-muted">Năm</span>
          <select
            value={year ?? ''}
            onChange={(e) => { setYear(e.target.value ? Number(e.target.value) : undefined); setPage(1); }}
            className="rounded-sm bg-surface px-4 py-2.5 font-semibold focus:outline-none focus:ring-2 focus:ring-brand"
          >
            <option value="">Tất cả</option>
            {years.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
        </label>
      </div>

      <div className={cn('transition-opacity', loading && 'opacity-50')} aria-busy={loading}>
        {data.items.length === 0 ? (
          <EmptyState message="Chưa có công bố thông tin nào phù hợp với bộ lọc." />
        ) : (
          <ul>
            {data.items.map((a) => {
              const { d, m, y } = splitDate(a.publishedAt);
              const Icon = CATEGORY_ICON[a.category];
              return (
                <li key={a.id} className="grid items-center gap-x-5 gap-y-3 border-t border-line py-5 first:border-t-0 sm:grid-cols-[76px_1fr_auto]">
                  <time dateTime={a.publishedAt} className="flex h-[76px] w-[76px] flex-col items-center justify-center bg-surface text-center">
                    <span className="text-2xl font-bold leading-none">{d}</span>
                    <span className="mt-1.5 text-[13px] font-semibold text-ink-muted">{m}/{y}</span>
                  </time>
                  <div className="min-w-0">
                    <span className={cn('inline-flex items-center gap-1.5 whitespace-nowrap rounded-sm px-3 py-1 text-[13px] font-bold', CATEGORY_BADGE[a.category])}>
                      <Icon size={14} aria-hidden />
                      {CATEGORY_LABEL[a.category]}
                    </span>
                    <h3 className="mt-2 text-[17px] font-semibold leading-snug">{a.title}</h3>
                  </div>
                  <a href={a.fileUrl} download aria-label={`Tải về: ${a.title}`} className="inline-flex items-center gap-2 justify-self-start rounded-sm px-4 py-2.5 text-sm font-semibold text-ink ring-1 ring-inset ring-line transition hover:bg-gold hover:ring-gold sm:justify-self-end">
                    <Download size={16} aria-hidden />
                    Tải về
                  </a>
                </li>
              );
            })}
          </ul>
        )}
        <Pagination page={data.page} totalPages={data.totalPages} onChange={setPage} />
      </div>
    </div>
  );
}
