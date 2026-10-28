import type { Announcement } from '@/types/announcement';

// DỮ LIỆU MẪU — thay bằng API /announcements
export const ANNOUNCEMENTS: Announcement[] = [
  { id: 'a1', category: 'disclosure', publishedAt: '2026-04-20', title: 'Thông báo: Chốt danh sách cổ đông tham dự Đại hội đồng cổ đông thường niên 2026', fileUrl: '#' },
  { id: 'a2', category: 'disclosure', publishedAt: '2026-04-05', title: 'Thông báo: Mời họp Đại hội đồng cổ đông thường niên năm 2026', fileUrl: '#' },
  { id: 'a3', category: 'financial', publishedAt: '2026-03-28', title: 'Báo cáo tài chính năm 2025 đã được kiểm toán', fileUrl: '#' },
  { id: 'a4', category: 'governance', publishedAt: '2026-01-25', title: 'Báo cáo tình hình quản trị công ty năm 2025', fileUrl: '#' },
  { id: 'a5', category: 'financial', publishedAt: '2025-10-20', title: 'Báo cáo tài chính quý III năm 2025', fileUrl: '#' },
  { id: 'a6', category: 'disclosure', publishedAt: '2025-08-12', title: 'Thông báo: Thay đổi địa điểm kinh doanh văn phòng phẩm', fileUrl: '#' },
  { id: 'a7', category: 'financial', publishedAt: '2025-07-18', title: 'Báo cáo tài chính quý II năm 2025', fileUrl: '#' },
  { id: 'a8', category: 'governance', publishedAt: '2025-07-15', title: 'Báo cáo tình hình quản trị công ty 6 tháng đầu năm 2025', fileUrl: '#' },
  { id: 'a9', category: 'financial', publishedAt: '2025-04-18', title: 'Báo cáo tài chính quý I năm 2025', fileUrl: '#' },
  { id: 'a10', category: 'disclosure', publishedAt: '2025-04-10', title: 'Nghị quyết Đại hội đồng cổ đông thường niên năm 2025', fileUrl: '#' },
  { id: 'a11', category: 'governance', publishedAt: '2025-01-24', title: 'Báo cáo tình hình quản trị công ty năm 2024', fileUrl: '#' },
  { id: 'a12', category: 'financial', publishedAt: '2025-03-30', title: 'Báo cáo tài chính năm 2024 đã được kiểm toán', fileUrl: '#' },
];

export const ANNOUNCEMENT_CATEGORIES = [
  { value: 'all', label: 'Tất cả' },
  { value: 'disclosure', label: 'Công bố thông tin' },
  { value: 'governance', label: 'Báo cáo tình hình quản trị' },
  { value: 'financial', label: 'Báo cáo tài chính' },
] as const;
