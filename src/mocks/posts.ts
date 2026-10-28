import { IMAGES } from '@/constants/images';
import type { Post } from '@/types/post';

// DỮ LIỆU MẪU — thay bằng API /posts
export const POSTS: Post[] = [
  {
    id: 'p1', slug: 'dai-hoi-dong-co-dong-thuong-nien-2026', category: 'Tin công ty', publishedAt: '2026-04-22', image: IMAGES.posts.agm,
    title: 'Đại hội đồng cổ đông thường niên năm 2026',
    excerpt: 'Đại hội đã thông qua báo cáo hoạt động của Hội đồng quản trị, Ban kiểm soát và kế hoạch kinh doanh của công ty.',
    content: [
      'Công ty Cổ phần Văn hóa Tổng hợp Bến Thành tổ chức Đại hội đồng cổ đông thường niên năm 2026 với sự tham dự của đông đảo cổ đông.',
      'Đại hội đã nghe báo cáo hoạt động của Hội đồng quản trị, Ban kiểm soát và thông qua kế hoạch kinh doanh cho năm tiếp theo.',
    ],
  },
  {
    id: 'p2', slug: 'ra-mat-dich-vu-khong-gian-lam-viec-linh-hoat', category: 'Dịch vụ', publishedAt: '2026-03-10', image: IMAGES.posts.coworking,
    title: 'Không gian làm việc linh hoạt dành cho startup và doanh nghiệp nhỏ',
    excerpt: 'Bến Thành GCC cung cấp không gian làm việc hiện đại, thuê theo nhu cầu cho startup, doanh nghiệp nhỏ và cá nhân.',
    content: [
      'Bên cạnh in ấn và văn phòng phẩm, Bến Thành GCC cung cấp dịch vụ chia sẻ không gian kinh doanh.',
      'Khách hàng có thể thuê không gian làm việc linh hoạt, phù hợp với quy mô và nhu cầu sử dụng.',
    ],
  },
  {
    id: 'p3', slug: 'quy-trinh-in-an-cho-doanh-nghiep', category: 'Dịch vụ', publishedAt: '2026-02-18', image: IMAGES.posts.printing,
    title: 'Quy trình tiếp nhận và in ấn dành cho khách hàng doanh nghiệp',
    excerpt: 'Từ khâu nhận yêu cầu, thiết kế đến giao hàng, xưởng in tại KCN Bình Chiều phục vụ khách hàng theo quy trình thống nhất.',
    content: [
      'Khách hàng doanh nghiệp gửi yêu cầu qua hotline hoặc email để được tư vấn quy cách và báo giá.',
      'Sau khi duyệt mẫu, xưởng in tại KCN Bình Chiều tiến hành sản xuất và giao hàng theo thỏa thuận.',
    ],
  },
  {
    id: 'p4', slug: 'qua-tang-doanh-nghiep-theo-yeu-cau', category: 'Văn phòng phẩm', publishedAt: '2026-01-12', image: IMAGES.posts.gifts,
    title: 'Quà tặng doanh nghiệp theo yêu cầu cho dịp cuối năm',
    excerpt: 'Thiết kế và in quà tặng mang thương hiệu riêng cho doanh nghiệp.',
    content: [
      'Bến Thành GCC nhận thiết kế và in các sản phẩm văn phòng phẩm, quà tặng theo yêu cầu của doanh nghiệp.',
      'Liên hệ bộ phận kinh doanh văn phòng phẩm để được tư vấn mẫu và số lượng phù hợp.',
    ],
  },
  {
    id: 'p5', slug: 'thong-bao-gio-lam-viec', category: 'Thông báo', publishedAt: '2025-12-20', image: IMAGES.posts.notice,
    title: 'Thông báo giờ làm việc',
    excerpt: 'Công ty làm việc từ 8:00 đến 17:00, từ Thứ Hai đến Thứ Bảy.',
    content: ['Công ty làm việc từ 8:00 đến 17:00, từ Thứ Hai đến Thứ Bảy. Quý khách vui lòng liên hệ hotline (028) 3829 2775 hoặc 090 254 9118 để được hỗ trợ.'],
  },
  {
    id: 'p6', slug: 'luu-tru-ngan-han-cho-khach-cong-tac', category: 'Dịch vụ', publishedAt: '2025-11-05', image: IMAGES.posts.stay,
    title: 'Lưu trú ngắn hạn tiện nghi cho khách du lịch và công tác',
    excerpt: 'Dịch vụ lưu trú ngắn hạn dành cho khách du lịch và người đi công tác.',
    content: ['Bến Thành GCC cung cấp dịch vụ lưu trú ngắn hạn tiện nghi, phù hợp với khách du lịch và người đi công tác.'],
  },
];
