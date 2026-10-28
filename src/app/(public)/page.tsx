import QuoteBand from '@/components/layout/QuoteBand';
import { companyService } from '@/features/about/company.service';
import CoreValues from '@/features/about/components/CoreValues';
import AboutTeaser from '@/features/home/components/AboutTeaser';
import BusinessLines from '@/features/home/components/BusinessLines';
import Hero from '@/features/home/components/Hero';
import { locationService } from '@/features/location/location.service';
import LatestPosts from '@/features/news/components/LatestPosts';
import { postService } from '@/features/news/post.service';
import { safe } from '@/lib/safe';

export default async function HomePage() {
  const [lines, profile, posts, locations] = await Promise.all([
    safe(() => companyService.getBusinessLines(), []),
    safe(() => companyService.getProfile(), null),
    safe(() => postService.latest(3), []),
    safe(() => locationService.list(), []),
  ]);

  return (
    <>
      <Hero linesCount={lines.length || undefined} locationsCount={locations.length || undefined} titles={lines.map((l) => l.title)} />
      <BusinessLines items={lines} />
      {profile && <AboutTeaser text={profile.aboutText} />}
      {profile && <CoreValues items={profile.coreValues} />}
      <LatestPosts posts={posts} />
      <QuoteBand />
    </>
  );
}
