import { IMAGES } from '@/constants/images';
import type { BusinessLine, CoreValue, Officer } from '@/types/company';

export const ABOUT_TEXT =
  'Công ty Cổ phần Văn hóa Tổng hợp Bến Thành (Bến Thành GCC), tiền thân là Công ty Văn Hóa Tổng Hợp Quận 1, được cổ phần hóa vào năm 2004.';

export const BUSINESS_LINES: BusinessLine[] = [
  {
    id: 'in-an',
    image: IMAGES.services['in-an'],
    title: 'In ấn',
    icon: 'printer',
    summary: 'Cung cấp các dịch vụ in ấn chất lượng cao cho các khách hàng doanh nghiệp và cá nhân.',
    detail:
      'Xưởng in đặt tại KCN Bình Chiều, phục vụ khách hàng doanh nghiệp và cá nhân với quy trình tiếp nhận, thiết kế, in và giao hàng thống nhất.',
    highlights: ['In ấn cho doanh nghiệp và cá nhân', 'Xưởng in tại KCN Bình Chiều', 'Liên hệ Hotline 028 3938 1334 – 028 3938 1335'],
  },
  {
    id: 'van-phong-pham',
    image: IMAGES.services['van-phong-pham'],
    title: 'Văn phòng phẩm',
    icon: 'pen',
    summary: 'Cung cấp văn phòng phẩm và dịch vụ văn phòng. Thiết kế và in văn phòng phẩm, cung cấp hàng quà tặng theo yêu cầu.',
    detail:
      'Cung cấp văn phòng phẩm và dịch vụ văn phòng cho doanh nghiệp; nhận thiết kế, in văn phòng phẩm mang thương hiệu riêng và quà tặng theo yêu cầu.',
    highlights: ['Văn phòng phẩm cho doanh nghiệp', 'Thiết kế và in văn phòng phẩm', 'Quà tặng theo yêu cầu'],
  },
  {
    id: 'fnb',
    image: IMAGES.services['fnb'],
    title: 'F&B',
    icon: 'utensils',
    summary: 'Cung cấp các dịch vụ ẩm thực, đồ uống chất lượng cao tại các địa điểm kinh doanh của công ty.',
    detail: 'Dịch vụ ẩm thực và đồ uống phục vụ khách hàng tại các địa điểm kinh doanh của công ty.',
    highlights: ['Ẩm thực và đồ uống', 'Phục vụ tại địa điểm kinh doanh của công ty'],
  },
  {
    id: 'ban-ghi',
    image: IMAGES.services['ban-ghi'],
    title: 'Bản ghi video/audio',
    icon: 'mic',
    summary: 'Cung cấp các sản phẩm và dịch vụ liên quan đến âm nhạc, video, và giải trí.',
    detail: 'Sản phẩm và dịch vụ liên quan đến âm nhạc, video và giải trí.',
    highlights: ['Sản phẩm âm nhạc', 'Sản phẩm video', 'Dịch vụ giải trí'],
  },
  {
    id: 'khong-gian',
    image: IMAGES.services['khong-gian'],
    title: 'Chia sẻ không gian kinh doanh',
    icon: 'building',
    summary: 'Cung cấp các không gian làm việc linh hoạt, hiện đại cho các startup, doanh nghiệp nhỏ và cá nhân.',
    detail: 'Không gian làm việc linh hoạt, hiện đại dành cho startup, doanh nghiệp nhỏ và cá nhân.',
    highlights: ['Không gian làm việc linh hoạt', 'Phù hợp startup và doanh nghiệp nhỏ', 'Thuê theo nhu cầu cá nhân'],
  },
  {
    id: 'luu-tru',
    image: IMAGES.services['luu-tru'],
    title: 'Lưu trú ngắn hạn',
    icon: 'bed',
    summary: 'Cung cấp các dịch vụ lưu trú ngắn hạn, tiện nghi cho khách du lịch và người đi công tác.',
    detail: 'Dịch vụ lưu trú ngắn hạn, tiện nghi dành cho khách du lịch và người đi công tác.',
    highlights: ['Khách du lịch', 'Người đi công tác', 'Lưu trú ngắn hạn tiện nghi'],
  },
  {
    id: 'kho-xuong',
    image: IMAGES.services['kho-xuong'],
    title: 'Kho xưởng, giữ hàng',
    icon: 'warehouse',
    summary: 'Cung cấp các dịch vụ cho thuê kho, xưởng và nhận giữ hàng.',
    detail: 'Cho thuê kho, xưởng và nhận giữ hàng cho khách hàng có nhu cầu lưu trữ.',
    highlights: ['Cho thuê kho', 'Cho thuê xưởng', 'Nhận giữ hàng'],
  },
];

export const CORE_VALUES: CoreValue[] = [
  {
    id: 'customer',
    title: 'Khách hàng là trọng tâm',
    lines: ['Chất lượng vượt trội.', 'Trách nhiệm kịp thời.'],
    image: IMAGES.values.customer,
  },
  {
    id: 'integrity',
    title: 'Tính chính trực',
    lines: ['Cam kết trung thực.', 'Cam kết bảo mật tuyệt đối.'],
    image: IMAGES.values.integrity,
  },
  {
    id: 'sustainable',
    title: 'Phát triển bền vững',
    lines: ['Tôn trọng và phát triển nhân viên.', 'Bảo vệ môi trường.'],
    image: IMAGES.values.sustainable,
  },
];

export const BOARD: Officer[] = [
  { name: 'Ông Vũ Bảo Vân', role: 'Chủ tịch HĐQT' },
  { name: 'Ông Lâm Tử Thanh', role: 'Thành viên HĐQT' },
  { name: 'Bà Nguyễn Thị Thoa', role: 'Thành viên HĐQT' },
  { name: 'Bà Lâm Thị Oanh', role: 'Thành viên HĐQT' },
  { name: 'Bà Nguyễn Thị Huỳnh Dao', role: 'Thành viên HĐQT' },
];

export const SUPERVISORS: Officer[] = [
  { name: 'Bà Huỳnh Lê Yến Nhi', role: 'Trưởng BKS' },
  { name: 'Bà Lê Thị Chín', role: 'Thành viên BKS' },
  { name: 'Bà Nguyễn Thị Thu Thảo', role: 'Thành viên BKS' },
];
