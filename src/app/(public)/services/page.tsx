import type { Metadata } from 'next';
import NextPageCta from '@/components/layout/NextPageCta';
import PageHero from '@/components/layout/PageHero';
import { IMAGES } from '@/constants/images';
import { companyService } from '@/features/about/company.service';
import ServiceTabs from '@/features/service/components/ServiceTabs';

export const metadata: Metadata = { title: 'Sản phẩm và dịch vụ' };

export default async function ServicesPage() {
  const lines = await companyService.getBusinessLines();
  return (
    <>
      <PageHero
        title="Sản phẩm và dịch vụ"
        lead="Chọn một lĩnh vực để xem chi tiết và liên hệ trực tiếp với bộ phận phụ trách."
        crumbs={[{ label: 'Sản phẩm và dịch vụ' }]}
        image={IMAGES.services['in-an']}
      />
      <section className="section">
        <div className="container-page">
          <ServiceTabs items={lines} />
        </div>
      </section>
      <NextPageCta from="/services" />
    </>
  );
}
