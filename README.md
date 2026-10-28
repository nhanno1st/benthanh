# Bến Thành GCC — Website (Next.js 15 + Tailwind 3)

## Chạy thử
```bash
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
```

## Cấu trúc (theo src.rar)
```
src/
  app/(public)/      trang: / , about, shareholders, services, stationery, locations, news, news/[slug], contact
  components/layout  Header, Footer, PageHero, NextPageCta
  components/ui      SectionHeading, Pagination, FormField, BackToTop, Skeleton, StateScreens, SocialIcons
  features/<tên>/    components/ + *.service.ts (+ validation)
  mocks/             ★ DỮ LIỆU MẪU (mảng tĩnh) — nơi duy nhất cần thay khi có API
  constants/ lib/ types/ utils/  (hooks, stores, providers, services, styles, assets: để trống chờ dùng)
public/images/       logo, ảnh trụ sở, 3 ảnh giá trị cốt lõi (cắt từ ảnh chụp trang benthanhgcc.com)
```

## Chuyển từ mảng sang API
Mọi service đều có dạng:
```ts
if (USE_MOCK) return mockResolve(DATA);          // dữ liệu mẫu trong src/mocks
return (await api.get('/endpoint')).data;        // API thật (axios, src/lib/axios.ts)
```
Khi có API: đặt `NEXT_PUBLIC_USE_MOCK=false` và `NEXT_PUBLIC_API_URL=...` trong `.env.local`.

| Service | Endpoint dự kiến |
|---|---|
| company.service | GET /company/profile, /company/business-lines |
| announcement.service | GET /announcements?category&year&page, /announcements/years |
| product.service | GET /product-categories, /products?categoryId |
| location.service | GET /locations |
| post.service | GET /posts?q&page, /posts/:slug, /posts/slugs |
| inquiry.service | POST /inquiries |

## Dữ liệu thật và dữ liệu mẫu
- **Thật (lấy từ website hiện tại):** thông tin công ty, HĐQT/BKS, 7 lĩnh vực, giá trị cốt lõi, địa chỉ/hotline/MST, menu.
- **Mẫu (tự soạn, cần thay):** tin tức, công bố thông tin, danh mục sản phẩm văn phòng phẩm, mô tả chi tiết từng dịch vụ.
