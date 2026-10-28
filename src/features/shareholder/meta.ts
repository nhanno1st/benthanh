import { BarChart3, FileText, ShieldCheck } from 'lucide-react';
import type { AnnouncementCategory } from '@/types/announcement';

export const CATEGORY_LABEL: Record<AnnouncementCategory, string> = {
  disclosure: 'Công bố thông tin',
  governance: 'Quản trị công ty',
  financial: 'Tài chính',
};

export const CATEGORY_BADGE: Record<AnnouncementCategory, string> = {
  disclosure: 'bg-brand-soft text-brand',
  governance: 'bg-gold-soft text-[#8A5A00]',
  financial: 'bg-[#DDF3FF] text-[#075985]',
};

export const CATEGORY_ICON = {
  disclosure: FileText,
  governance: ShieldCheck,
  financial: BarChart3,
} as const;

/** '2026-04-20' → { d: '20', m: '04', y: '2026' } (không phụ thuộc múi giờ) */
export function splitDate(iso: string) {
  const [y, m, d] = iso.slice(0, 10).split('-');
  return { d, m, y };
}
