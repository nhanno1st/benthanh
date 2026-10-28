import type { Metadata } from 'next';
import NextPageCta from '@/components/layout/NextPageCta';
import PageHero from '@/components/layout/PageHero';
import { IMAGES } from '@/constants/images';
import Pagination from '@/components/ui/Pagination';
import { EmptyState } from '@/components/ui/StateScreens';
import PostCard from '@/features/news/components/PostCard';
import { postService } from '@/features/news/post.service';
import { toNumber } from '@/utils/format';

export const metadata: Metadata = { title: 'Tin tức' };

type SearchParams = Promise<{ page?: string; q?: string }>;

export default async function NewsPage({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams;
  const q = sp.q?.trim() || undefined;
  const res = await postService.list({ page: toNumber(sp.page, 1), pageSize: 6, q });
  const hrefFor = (p: number) => `/news?${new URLSearchParams({ ...(q ? { q } : {}), page: String(p) })}`;
  const [first, ...rest] = res.items;

  return (
    <>
      <PageHero
        title="Tin tức"
        lead="Thông tin hoạt động, dịch vụ và thông báo của Bến Thành GCC."
        crumbs={[{ label: 'Tin tức' }]}
        image={IMAGES.posts.agm}
      />
      <section className="section">
        <div className="container-page">
          {q && (
            <p className="mb-6 text-ink-muted">
              Kết quả cho “{q}”: {res.total} bài viết
            </p>
          )}
          {!first ? (
            <EmptyState message="Không tìm thấy bài viết phù hợp." />
          ) : (
            <>
              <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
                <PostCard post={first} variant="featured" />
                <div className="grid content-start">
                  {rest.slice(0, 3).map((p) => (
                    <PostCard key={p.id} post={p} />
                  ))}
                </div>
              </div>
              {rest.length > 3 && (
                <div className="mt-5 grid gap-x-8 md:grid-cols-2 lg:grid-cols-3">
                  {rest.slice(3).map((p) => (
                    <PostCard key={p.id} post={p} />
                  ))}
                </div>
              )}
            </>
          )}
          <Pagination page={res.page} totalPages={res.totalPages} hrefFor={hrefFor} />
        </div>
      </section>
      <NextPageCta from="/news" />
    </>
  );
}
