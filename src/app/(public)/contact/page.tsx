import type { Metadata } from 'next';
import NextPageCta from '@/components/layout/NextPageCta';
import PageHero from '@/components/layout/PageHero';
import { IMAGES } from '@/constants/images';
import Reveal from '@/components/ui/Reveal';
import ContactForm from '@/features/contact/components/ContactForm';
import ContactInfo from '@/features/contact/components/ContactInfo';

export const metadata: Metadata = { title: 'Liên hệ' };

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Liên hệ"
        lead="Gửi yêu cầu, đội ngũ Bến Thành GCC sẽ phản hồi trong giờ làm việc."
        crumbs={[{ label: 'Liên hệ' }]}
        image={IMAGES.services['khong-gian']}
      />
      <section className="section">
        <div className="container-page grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <ContactInfo />
          </Reveal>
          <Reveal delay={1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
      <NextPageCta from="/contact" />
    </>
  );
}
