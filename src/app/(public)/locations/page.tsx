import type { Metadata } from 'next';
import NextPageCta from '@/components/layout/NextPageCta';
import PageHero from '@/components/layout/PageHero';
import { IMAGES } from '@/constants/images';
import LocationCard from '@/features/location/components/LocationCard';
import { locationService } from '@/features/location/location.service';

export const metadata: Metadata = { title: 'Các điểm kinh doanh' };

export default async function LocationsPage() {
  const locations = await locationService.list();
  return (
    <>
      <PageHero
        title="Các điểm kinh doanh"
        lead="Ba địa điểm phục vụ khách hàng: trụ sở, cửa hàng văn phòng phẩm và xưởng in."
        crumbs={[{ label: 'Các điểm kinh doanh' }]}
        image={IMAGES.locations.hq}
      />
      <section className="section">
        <div className="container-page">
          {locations.map((l, i) => (
            <LocationCard key={l.id} location={l} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>
      <NextPageCta from="/locations" />
    </>
  );
}
