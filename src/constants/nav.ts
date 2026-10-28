export interface NavItem {
  label: string;
  href: string;
}

export const MAIN_NAV: NavItem[] = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Về chúng tôi', href: '/about' },
  { label: 'Quan hệ cổ đông', href: '/shareholders' },
  { label: 'Dịch vụ', href: '/services' },
  { label: 'Văn phòng phẩm', href: '/stationery' },
  { label: 'Điểm kinh doanh', href: '/locations' },
  { label: 'Tin tức', href: '/news' },
  { label: 'Liên hệ', href: '/contact' },
];

/** Trang kế tiếp hiển thị ở dải CTA cuối mỗi trang */
export const NEXT_PAGE: Record<string, NavItem> = {
  '/': { label: 'Về chúng tôi', href: '/about' },
  '/about': { label: 'Quan hệ cổ đông', href: '/shareholders' },
  '/shareholders': { label: 'Sản phẩm và dịch vụ', href: '/services' },
  '/services': { label: 'Văn phòng phẩm', href: '/stationery' },
  '/stationery': { label: 'Các điểm kinh doanh', href: '/locations' },
  '/locations': { label: 'Tin tức', href: '/news' },
  '/news': { label: 'Liên hệ', href: '/contact' },
  '/contact': { label: 'Trang chủ', href: '/' },
};
