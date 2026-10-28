import type { Metadata } from 'next';
import Link from 'next/link';
import NextPageCta from '@/components/layout/NextPageCta';
import PageHero from '@/components/layout/PageHero';
import { IMAGES } from '@/constants/images';
import SectionHeading from '@/components/ui/SectionHeading';
import { announcementService } from '@/features/shareholder/announcement.service';
import AnnouncementBoard from '@/features/shareholder/components/AnnouncementBoard';
import LatestAnnouncements from '@/features/shareholder/components/LatestAnnouncements';

export const metadata: Metadata = { title: 'Quan hệ cổ đông' };

export default async function ShareholdersPage() {
  const [initial, years] = await Promise.all([announcementService.list(), announcementService.years()]);

  return (
    <>
      <PageHero
        title="Quan hệ cổ đông"
        lead="Công bố thông tin, báo cáo tình hình quản trị và báo cáo tài chính của công ty."
        crumbs={[{ label: 'Quan hệ cổ đông' }]}
        image={IMAGES.building}
      />

      {/* Danh sách đã sắp xếp mới → cũ: 3 mục đầu là thông báo mới nhất */}
      <LatestAnnouncements items={initial.items.slice(0, 3)} />

      <section className="section">
        <div className="container-page">
          <SectionHeading size="sm" title="Tất cả công bố thông tin" intro="Lọc theo loại văn bản hoặc năm để tìm nhanh tài liệu cần xem." />
          <AnnouncementBoard initial={initial} years={years} />
          <p className="mt-6 text-center text-ink-muted">
            Cần hỗ trợ thêm về thông tin cổ đông?{' '}
            <Link href="/contact" className="font-semibold text-brand underline underline-offset-2 hover:text-brand-dark">
              Liên hệ với chúng tôi
            </Link>
          </p>
        </div>
      </section>
      <NextPageCta from="/shareholders" />
    </>
  );
}
