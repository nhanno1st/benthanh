'use client';

import { useEffect } from 'react';

/**
 * Đặt trong hero tối: báo cho Header biết để chuyển sang trong suốt + chữ trắng.
 * Dùng sự kiện thay vì dò DOM, vì nội dung trang có thể về muộn (loading.tsx / streaming).
 */
export default function HeroMarker() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.hero = 'dark';
    window.dispatchEvent(new Event('herochange'));
    return () => {
      delete root.dataset.hero;
      window.dispatchEvent(new Event('herochange'));
    };
  }, []);
  return null;
}
