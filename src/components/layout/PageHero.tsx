import Link from 'next/link';
import HeroMarker from '@/components/ui/HeroMarker';
import Photo from '@/components/ui/Photo';
import { ColorBar, RegMark } from '@/components/ui/PrintMarks';

interface Props {
  title: string;
  lead?: string;
  crumbs?: Array<{ label: string; href?: string }>;
  /** Ảnh nền toàn rộng. Bỏ trống thì hero chỉ là nền xanh đậm. */
  image?: string;
}

/** Đầu trang con: ảnh nhuộm mực xanh, tiêu đề lớn trồi lên, thanh bốn màu ở đáy như mép tờ in. */
export default function PageHero({ title, lead, crumbs = [], image }: Props) {
  return (
    <section data-dark-hero className="dark-zone relative isolate overflow-hidden bg-brand-dark text-white">
      <HeroMarker />
      {image && (
        <>
          <div className="absolute inset-0 -z-10">
            <Photo src={image} seed={title} alt="" priority sizes="100vw" className="hero-drift h-full w-full" />
          </div>
          <div aria-hidden className="ink-wash absolute inset-0 -z-10" />
        </>
      )}
      <div aria-hidden className="hero-veil absolute inset-0 -z-10" />
      <RegMark className="absolute right-5 top-28 hidden text-white/40 lg:block" />

      <div className="container-page flex min-h-[60svh] flex-col justify-end pb-12 pt-40 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
            <li>
              <Link href="/" className="hover:text-white">
                Trang chủ
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-2">
                <span aria-hidden>/</span>
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="max-w-[16ch] text-[clamp(44px,9vw,148px)] font-black leading-[1]">
          <span className="block overflow-hidden pt-[0.12em]">
            <span className="rise block">{title}</span>
          </span>
        </h1>
        {lead && <p className="hero-fade mt-6 max-w-[56ch] text-lg text-white/85 md:text-xl">{lead}</p>}
      </div>
      <ColorBar />
    </section>
  );
}
