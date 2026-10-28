import type { Metadata } from 'next';
import NextPageCta from '@/components/layout/NextPageCta';
import PageHero from '@/components/layout/PageHero';
import { IMAGES } from '@/constants/images';
import QuoteBand from '@/components/layout/QuoteBand';
import ProductBoard from '@/features/product/components/ProductBoard';
import { productService } from '@/features/product/product.service';

export const metadata: Metadata = { title: 'Văn phòng phẩm' };

export default async function StationeryPage() {
  const [categories, products] = await Promise.all([productService.categories(), productService.list()]);
  return (
    <>
      <PageHero
        title="Văn phòng phẩm"
        lead="Cung cấp văn phòng phẩm cho doanh nghiệp, nhận thiết kế và in văn phòng phẩm, quà tặng theo yêu cầu. Liên hệ để nhận báo giá."
        crumbs={[{ label: 'Văn phòng phẩm' }]}
        image={IMAGES.products.paper}
      />
      <section className="section">
        <div className="container-page">
          <ProductBoard categories={categories} initial={products} />
        </div>
      </section>
      <QuoteBand />
      <NextPageCta from="/stationery" />
    </>
  );
}
