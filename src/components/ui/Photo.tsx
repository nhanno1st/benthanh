'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/cn';

interface Props {
  src?: string;
  alt: string;
  /** Dùng để sinh ảnh dự phòng ổn định khi `src` trống hoặc lỗi */
  seed?: string;
  /** Class áp cho khung ảnh (kích thước, bo góc, aspect-ratio...) */
  className?: string;
  priority?: boolean;
  /** Gợi ý kích thước hiển thị cho trình duyệt (mặc định: nửa màn hình trên desktop) */
  sizes?: string;
}

/**
 * Ảnh từ nguồn ngoài. Dùng `unoptimized` nên không cần khai báo domain trong next.config.
 * Khi chuyển sang ảnh của bạn/API có thể bỏ `unoptimized` và thêm remotePatterns.
 */
export default function Photo({ src, alt, seed = 'ben-thanh', className, priority, sizes = '(min-width: 1024px) 50vw, 100vw' }: Props) {
  const [failed, setFailed] = useState(false);
  const url = !src || failed ? `https://picsum.photos/seed/${encodeURIComponent(seed)}/1000/800` : src;

  return (
    <div className={cn('photo-card relative overflow-hidden bg-brand-soft', className)}>
      <Image
        src={url}
        alt={alt}
        fill
        unoptimized
        priority={priority}
        sizes={sizes}
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
