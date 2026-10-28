import { Bell, Download } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import type { Announcement } from '@/types/announcement';
import { formatDate } from '@/utils/format';
import { CATEGORY_BADGE, CATEGORY_ICON, CATEGORY_LABEL } from '../meta';

/** Khối nổi bật: thông báo mới nhất (to) + hai thông báo liền kề. Cổ đông vào trang là thấy ngay. */
export default function LatestAnnouncements({ items }: { items: Announcement[] }) {
  const [main, ...rest] = items;
  if (!main) return null;
  const MainIcon = CATEGORY_ICON[main.category];

  return (
    <section className="pb-4 pt-2 md:pb-8">
      <div className="container-page">
        <Reveal className="mb-6 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-gold text-brand-dark">
            <Bell size={20} aria-hidden />
          </span>
          <h2 className="text-2xl font-bold leading-[1.25] md:text-3xl">Thông báo mới nhất</h2>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <article className="dark-zone relative isolate flex h-full min-h-[340px] flex-col justify-between gap-10 overflow-hidden bg-brand-dark p-7 text-white md:p-10">
              <div aria-hidden className="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-white/10" />
              <div aria-hidden className="absolute -bottom-24 right-10 -z-10 h-56 w-56 rounded-full bg-white/5" />
              <div aria-hidden className="absolute left-0 top-0 -z-10 h-full w-2 bg-gold" />

              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-sm bg-gold px-3.5 py-1 text-sm font-bold text-brand-dark">Mới nhất</span>
                  <span className="inline-flex items-center gap-2 rounded-sm bg-white/15 px-3.5 py-1 text-sm font-semibold">
                    <MainIcon size={15} aria-hidden />
                    {CATEGORY_LABEL[main.category]}
                  </span>
                </div>
                <h3 className="mt-6 max-w-[30ch] text-[clamp(24px,3vw,38px)] font-bold leading-[1.25]">{main.title}</h3>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <time dateTime={main.publishedAt} className="text-base font-semibold text-white/85">
                  Ngày đăng: {formatDate(main.publishedAt)}
                </time>
                <a href={main.fileUrl} download className="btn-gold">
                  <Download size={18} aria-hidden />
                  Tải văn bản
                </a>
              </div>
            </article>
          </Reveal>

          <div className="flex flex-col gap-5">
            {rest.map((a, i) => {
              const Icon = CATEGORY_ICON[a.category];
              return (
                <Reveal key={a.id} delay={i + 1} className="flex-1">
                  <article className="flex h-full flex-col justify-between gap-5 border-t-4 border-gold bg-white p-6 ring-1 ring-line">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className={`inline-flex items-center gap-2 rounded-sm px-3 py-1 text-sm font-bold ${CATEGORY_BADGE[a.category]}`}>
                          <Icon size={15} aria-hidden />
                          {CATEGORY_LABEL[a.category]}
                        </span>
                        <time dateTime={a.publishedAt} className="text-sm font-semibold text-ink-muted">
                          {formatDate(a.publishedAt)}
                        </time>
                      </div>
                      <h3 className="mt-3 text-lg font-bold leading-[1.35]">{a.title}</h3>
                    </div>
                    <a href={a.fileUrl} download className="inline-flex items-center gap-2 self-start text-[15px] font-bold text-brand hover:text-brand-dark">
                      <Download size={17} aria-hidden />
                      Tải về
                    </a>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
