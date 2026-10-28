import { IMAGES } from '@/constants/images';
import type { Product, ProductCategory } from '@/types/product';

// DỮ LIỆU MẪU — thay bằng API /products
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { id: 'all', name: 'Tất cả' },
  { id: 'giay', name: 'Giấy & in ấn' },
  { id: 'viet', name: 'Bút & dụng cụ viết' },
  { id: 'luu-tru', name: 'Sổ, bìa & lưu trữ' },
  { id: 'qua-tang', name: 'Quà tặng theo yêu cầu' },
];

export const PRODUCTS: Product[] = [
  { id: 'g1', imageUrl: IMAGES.products.paper, categoryId: 'giay', name: 'Giấy in văn phòng A4', unit: 'Ream', description: 'Giấy in, photocopy dùng hằng ngày cho văn phòng.' },
  { id: 'g2', imageUrl: IMAGES.products.namecard, categoryId: 'giay', name: 'Giấy in danh thiếp, name card', unit: 'Hộp', description: 'In theo thiết kế riêng của doanh nghiệp.' },
  { id: 'v1', imageUrl: IMAGES.products.pens, categoryId: 'viet', name: 'Bút bi, bút gel', unit: 'Hộp', description: 'Nhiều loại ngòi và màu mực cho nhu cầu văn phòng.' },
  { id: 'v2', imageUrl: IMAGES.products.markers, categoryId: 'viet', name: 'Bút lông, bút dạ', unit: 'Hộp', description: 'Dùng cho bảng trắng, họp và đào tạo.' },
  { id: 'l1', imageUrl: IMAGES.products.notebook, categoryId: 'luu-tru', name: 'Sổ tay, sổ ghi chép', unit: 'Cuốn', description: 'Có thể in logo và nội dung theo yêu cầu.' },
  { id: 'l2', imageUrl: IMAGES.products.folder, categoryId: 'luu-tru', name: 'Bìa hồ sơ, file lưu trữ', unit: 'Cái', description: 'Lưu trữ và sắp xếp hồ sơ, chứng từ.' },
  { id: 'q1', imageUrl: IMAGES.products.giftset, categoryId: 'qua-tang', name: 'Bộ quà tặng doanh nghiệp', unit: 'Bộ', description: 'Thiết kế và in thương hiệu riêng theo số lượng.' },
  { id: 'q2', imageUrl: IMAGES.products.bag, categoryId: 'qua-tang', name: 'Lịch, túi giấy, ấn phẩm thương hiệu', unit: 'Bộ', description: 'Thiết kế và in theo nhận diện thương hiệu của khách hàng.' },
];
