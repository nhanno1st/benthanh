import Image from 'next/image';
import { cn } from '@/lib/cn';

/** Logo Bến Thành GCC: biểu tượng đám mây (public/logo.png) + tên thương hiệu. */
export default function Logo({ tone = 'dark', className }: { tone?: 'dark' | 'light'; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-bold', tone === 'light' ? 'text-white' : 'text-ink', className)}>
      <Image src="/logo.png" alt="" aria-hidden width={720} height={453} className="h-[2em] w-auto shrink-0" />
      Bến Thành GCC
    </span>
  );
}
