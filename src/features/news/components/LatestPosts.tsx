import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import type { Post } from '@/types/post';
import PostCard from './PostCard';

export default function LatestPosts({ posts }: { posts: Post[] }) {
  if (!posts.length) return null;
  const [first, ...rest] = posts;
  return (
    <section className="section">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading title="Tin mới từ Bến Thành" />
          <Link href="/news" className="btn-outline mb-9">
            Xem tất cả tin tức
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <PostCard post={first} variant="featured" />
          </Reveal>
          <div className="grid content-start">
            {rest.map((p, i) => (
              <Reveal key={p.id} delay={i + 1}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
