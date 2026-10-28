'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface Props {
  as?: ElementType;
  /** Độ trễ theo bậc (mỗi bậc 80ms) để các thẻ cạnh nhau hiện lần lượt */
  delay?: number;
  className?: string;
  children: ReactNode;
}

export default function Reveal({ as: Tag = 'div', delay = 0, className, children }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} style={{ transitionDelay: `${delay * 80}ms` }} className={cn('reveal', shown && 'in', className)}>
      {children}
    </Tag>
  );
}
