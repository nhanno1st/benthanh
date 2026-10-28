import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import NextPageCta from '@/components/layout/NextPageCta';
import HeroMarker from '@/components/ui/HeroMarker';
import Photo from '@/components/ui/Photo';
import { ColorBar } from '@/components/ui/PrintMarks';
import { postService } from '@/features/news/post.service';
import { formatDate } from '@/utils/format';

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = await postService.getBySlug((await params).slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function PostDetailPage({ params }: { params: Params }) {
  const post = await postService.getBySlug((await params).slug);
  if (!post) notFound();

  return (
    <>
      <article>
        <header data-dark-hero className="dark-zone relative isolate overflow-hidden bg-brand-dark text-white">
          <HeroMarker />
          <div className="absolute inset-0 -z-10">
            <Photo src={post.image} seed={post.slug} alt="" priority sizes="100vw" className="hero-drift h-full w-full" />
          </div>
          <div aria-hidden className="ink-wash absolute inset-0 -z-10" />
          <div aria-hidden className="hero-veil absolute inset-0 -z-10" />
          <div className="container-page flex min-h-[64svh] flex-col justify-end pb-12 pt-40 md:pb-16">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                <li><Link href="/" className="hover:text-white">Trang chủ</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/news" className="hover:text-white">Tin tức</Link></li>
                <li aria-hidden>/</li>
                <li aria-current="page">{post.category}</li>
              </ol>
            </nav>
            <p className="mb-4 text-sm font-semibold text-white/80">
              <span className="bg-gold px-3 py-1 font-bold text-brand-dark">{post.category}</span>{' '}
              <time dateTime={post.publishedAt} className="ml-2">{formatDate(post.publishedAt)}</time>
            </p>
            <h1 className="max-w-[22ch] text-[clamp(36px,6.4vw,96px)] font-black leading-[1.04]">{post.title}</h1>
          </div>
          <ColorBar />
        </header>

        <div className="container-page py-14 md:py-20">
          <div className="max-w-[68ch] space-y-5 text-lg">
            {post.content.map((para, i) => <p key={i}>{para}</p>)}
            <Link href="/news" className="btn-outline mt-6">Quay lại tin tức</Link>
          </div>
        </div>
      </article>
      <NextPageCta from="/news" />
    </>
  );
}
