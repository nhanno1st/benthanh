import type { Metadata } from 'next';
import NextPageCta from '@/components/layout/NextPageCta';
import PageHero from '@/components/layout/PageHero';
import Photo from '@/components/ui/Photo';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { IMAGES } from '@/constants/images';
import { SITE } from '@/constants/site';
import { companyService } from '@/features/about/company.service';
import CoreValues from '@/features/about/components/CoreValues';
import Governance from '@/features/about/components/Governance';

export const metadata: Metadata = { title: 'Về chúng tôi' };

export default async function AboutPage() {
  const [profile, lines] = await Promise.all([companyService.getProfile(), companyService.getBusinessLines()]);

  return (
    <>
      <PageHero title="Về chúng tôi" lead={profile.aboutText} crumbs={[{ label: 'Về chúng tôi' }]}
        image={IMAGES.hero}
      />

      <section className="section">
        <div className="container-page grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div aria-hidden className="absolute inset-0 -translate-y-4 translate-x-4 rounded-t-full border-2 border-gold" />
            <Photo src={IMAGES.building} seed="building" alt="Trụ sở Bến Thành GCC" className="relative aspect-[3/4] rounded-t-full" />
          </Reveal>
          <div>
            <SectionHeading size="sm" title={SITE.legalName} intro={`Mã số thuế ${SITE.taxCode}. Công ty hoạt động trong ${lines.length} lĩnh vực:`} />
            <dl className="border-b border-line">
              {lines.map((l, i) => (
                <Reveal key={l.id} delay={i % 3} className="border-t border-line py-[18px]">
                  <dt className="font-display text-xl font-bold">{l.title}</dt>
                  <dd className="mt-1 text-ink-muted">{l.summary}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <CoreValues items={profile.coreValues} />
      <Governance board={profile.board} supervisors={profile.supervisors} />
      <NextPageCta from="/about" />
    </>
  );
}
