import Link from 'next/link';
import Photo from '@/components/ui/Photo';
import type { Post } from '@/types/post';
import { formatDate } from '@/utils/format';

interface Props {
  post: Post;
  /** featured: ảnh lớn + tóm tắt · compact: dòng tin có ảnh nhỏ vuông */
  variant?: 'featured' | 'compact';
}

export default function PostCard({ post, variant = 'compact' }: Props) {
  const meta = (
    <p className="text-sm font-semibold text-ink-muted">
      <span className="text-brand">{post.category}</span>, <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
    </p>
  );

  if (variant === 'featured') {
    return (
      <article className="group relative flex h-full flex-col">
        <div className="relative">
          <Photo src={post.image} seed={post.slug} alt="" sizes="(min-width: 1024px) 55vw, 100vw" className="aspect-[4/3]" />
          <span className="absolute left-0 top-5 bg-gold px-4 py-1.5 text-sm font-bold text-brand-dark">{post.category}</span>
        </div>
        <div className="mt-6">
          {meta}
          <h3 className="mb-3 mt-3 text-[clamp(28px,3.6vw,48px)] font-black leading-[1.12]">
            <Link href={`/news/${post.slug}`} className="after:absolute after:inset-0 group-hover:text-brand">
              {post.title}
            </Link>
          </h3>
          <p className="max-w-[60ch] text-ink-muted">{post.excerpt}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex items-start gap-5 border-t border-line py-5">
      <Photo src={post.image} seed={post.slug} alt="" sizes="160px" className="aspect-square w-28 shrink-0 sm:w-32" />
      <div>
        {meta}
        <h3 className="mt-1.5 font-display text-xl font-bold leading-tight">
          <Link href={`/news/${post.slug}`} className="after:absolute after:inset-0 group-hover:text-brand">
            {post.title}
          </Link>
        </h3>
      </div>
    </article>
  );
}
