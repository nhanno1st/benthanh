import Link from 'next/link';
import { cn } from '@/lib/cn';

interface Props {
  page: number;
  totalPages: number;
  /** Trả về href cho trang n (dùng ở server component) */
  hrefFor?: (page: number) => string;
  /** Hoặc xử lý click (dùng ở client component) */
  onChange?: (page: number) => void;
}

export default function Pagination({ page, totalPages, hrefFor, onChange }: Props) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const cls = (active: boolean) =>
    cn(
      'inline-flex h-11 w-11 items-center justify-center rounded-sm text-sm font-semibold transition',
      active ? 'bg-brand text-white' : 'bg-white text-ink ring-1 ring-inset ring-line hover:bg-brand-soft',
    );

  return (
    <nav aria-label="Phân trang" className="mt-10 flex justify-center gap-2">
      {pages.map((p) =>
        hrefFor ? (
          <Link key={p} href={hrefFor(p)} className={cls(p === page)} aria-current={p === page ? 'page' : undefined}>
            {p}
          </Link>
        ) : (
          <button key={p} type="button" onClick={() => onChange?.(p)} className={cls(p === page)} aria-current={p === page ? 'page' : undefined}>
            {p}
          </button>
        ),
      )}
    </nav>
  );
}
