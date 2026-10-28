import { cn } from '@/lib/cn';
import Reveal from './Reveal';

interface Props {
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  tone?: 'brand' | 'light';
  size?: 'lg' | 'sm';
  as?: 'h1' | 'h2' | 'h3';
}

export default function SectionHeading({ title, intro, align = 'left', tone = 'brand', size = 'lg', as: Tag = 'h2' }: Props) {
  const light = tone === 'light';
  return (
    <Reveal className={cn('mb-9', align === 'center' && 'text-center')}>
      <Tag
        className={cn(
          'font-bold leading-[1.18]',
          size === 'lg' ? 'max-w-[20ch] text-[clamp(32px,4.6vw,64px)]' : 'max-w-[26ch] text-[clamp(28px,3.6vw,48px)]',
          align === 'center' && 'mx-auto',
          light ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </Tag>
      {intro && (
        <p className={cn('mt-4 max-w-[58ch] text-lg', align === 'center' && 'mx-auto', light ? 'text-white/80' : 'text-ink-muted')}>{intro}</p>
      )}
    </Reveal>
  );
}
