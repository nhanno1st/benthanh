'use client';

import { Search, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from '@/components/ui/Logo';
import { MAIN_NAV } from '@/constants/nav';
import { SITE } from '@/constants/site';
import { cn } from '@/lib/cn';

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState('');
  const [scrolled, setScrolled] = useState(false);
  /** Trang chủ có hero tối: header trong suốt, chữ trắng; cuộn xuống hoặc ở trang con thì nền sáng */
  const [darkHero, setDarkHero] = useState(false);
  const onDark = open || (darkHero && !scrolled);

  // Hero tối (có <HeroMarker />) mount/unmount lúc nào thì header đổi theo lúc đó
  useEffect(() => {
    const sync = () => setDarkHero(document.documentElement.dataset.hero === 'dark');
    sync();
    window.addEventListener('herochange', sync);
    return () => window.removeEventListener('herochange', sync);
  }, []);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const keyword = q.trim();
    setOpen(false);
    setSearchOpen(false);
    router.push(keyword ? `/news?q=${encodeURIComponent(keyword)}` : '/news');
  };

  const searchForm = (idPrefix: string, dark = false) => (
    <form onSubmit={onSearch} role="search" className="flex items-center gap-2">
      <input
        id={`${idPrefix}-q`}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Tìm tin tức"
        aria-label="Tìm tin tức"
        className={cn(
          'min-w-0 flex-1 rounded-full px-4 py-2.5 text-sm outline-none',
          dark ? 'bg-white/10 text-white placeholder:text-white/60' : 'bg-surface text-ink ring-1 ring-inset ring-line focus:ring-2 focus:ring-brand',
        )}
      />
      <button type="submit" aria-label="Tìm kiếm" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-brand-dark hover:bg-gold-dark">
        <Search size={16} />
      </button>
    </form>
  );

  return (
    <>
      <header className={cn('fixed inset-x-0 top-0 z-50 transition-colors duration-300', onDark ? 'bg-transparent' : 'bg-white/90 shadow-[0_1px_0_rgba(7,18,58,0.08)] backdrop-blur-xl')}>
       <div className="container-page flex h-[76px] items-center justify-between gap-3">
        <Link href="/" aria-label={`${SITE.name} – Trang chủ`} className="shrink-0">
          <Logo tone={onDark ? 'light' : 'dark'} />
        </Link>

        <nav aria-label="Menu chính" className="hidden min-w-0 xl:block">
          <ul className="flex items-center gap-0.5">
            {MAIN_NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  aria-current={isActive(pathname, n.href) ? 'page' : undefined}
                  className={cn(
                    'relative block whitespace-nowrap px-3 py-2 text-sm font-semibold transition-colors',
                    isActive(pathname, n.href)
                      ? cn(onDark ? 'text-white' : 'text-ink', 'after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-gold')
                      : onDark
                        ? 'text-white/80 hover:text-white'
                        : 'text-ink-muted hover:text-ink',
                  )}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={searchOpen ? 'Đóng tìm kiếm' : 'Tìm tin tức'}
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((v) => !v)}
            className={cn('hidden h-11 w-11 items-center justify-center rounded-full transition xl:flex', onDark ? 'text-white hover:bg-white/15' : 'text-ink-muted hover:bg-brand-soft hover:text-brand')}
          >
            {searchOpen ? <X size={18} /> : <Search size={18} />}
          </button>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className={cn('h-11 rounded-full px-5 text-sm font-bold xl:hidden', onDark ? 'bg-gold text-brand-dark' : 'bg-brand-dark text-white')}
          >
            {open ? 'Đóng' : 'Menu'}
          </button>
        </div>

        {searchOpen && (
          <div className="absolute right-5 top-full mt-2 w-80 rounded-3xl bg-white p-3 shadow-pill">{searchForm('desktop')}</div>
        )}
       </div>
      </header>

      <div
        id="mobile-menu"
        data-open={open}
        aria-label="Menu di động"
        className="menu-overlay dark-zone fixed inset-0 z-[45] flex flex-col justify-center overflow-y-auto bg-brand-dark px-7 pb-10 pt-24 text-white xl:hidden"
      >
        <nav>
          <ul>
            {MAIN_NAV.map((n, i) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  style={{ '--i': i } as React.CSSProperties}
                  onClick={() => setOpen(false)}
                  className={cn('block py-1.5 font-display text-[clamp(28px,7vw,44px)] font-bold', isActive(pathname, n.href) ? 'text-gold' : 'text-white')}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-8">{searchForm('mobile', true)}</div>
        <p className="mt-6 text-sm text-white/70">
          Hotline: {SITE.hotline} · {SITE.hotlineAlt}
        </p>
      </div>
    </>
  );
}
