import { cn } from '@/lib/cn';

/** Dấu canh lề (registration mark) — thứ thợ in đặt ở góc tờ in để khớp các lớp màu. */
export function RegMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.5" className={cn('h-10 w-10', className)}>
      <circle cx="20" cy="20" r="9" />
      <path d="M20 0v40M0 20h40" />
    </svg>
  );
}

const INKS = ['#00AEEF', '#EC008C', '#FFF200', '#111111'];

/** Bốn chấm CMYK: chữ ký của một đơn vị in ấn. */
export function CmykDots({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn('flex gap-1.5', className)}>
      {INKS.map((c) => (
        <i key={c} className="h-3 w-3 rounded-full ring-1 ring-white/30" style={{ background: c }} />
      ))}
    </span>
  );
}

/** Thanh bốn màu ở mép tờ in: dùng làm đường kẻ cuối hero. */
export function ColorBar({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn('flex h-1.5 w-full', className)}>
      {INKS.map((c) => (
        <i key={c} className="flex-1" style={{ background: c }} />
      ))}
    </div>
  );
}
