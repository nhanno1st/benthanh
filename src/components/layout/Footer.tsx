import Link from 'next/link';
import { CmykDots } from '@/components/ui/PrintMarks';
import Logo from '@/components/ui/Logo';
import SocialIcons from '@/components/ui/SocialIcons';
import { MAIN_NAV } from '@/constants/nav';
import { SITE } from '@/constants/site';
import { companyService } from '@/features/about/company.service';
import { locationService } from '@/features/location/location.service';
import { safe } from '@/lib/safe';

const heading = 'mb-3 font-display text-[15px] font-bold text-gold';

export default async function Footer() {
  const [locations, lines] = await Promise.all([
    safe(() => locationService.list(), []),
    safe(() => companyService.getBusinessLines(), []),
  ]);

  return (
    <footer className="dark-zone relative overflow-hidden border-t border-white/10 bg-brand-dark pt-16 text-white">
      <div className="container-page">
        <CmykDots className="mb-10" />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_1.5fr]">
          <div>
            <Logo tone="light" className="text-2xl" />
            <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-white/75">
              {SITE.legalName}. {SITE.slogan}.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-white/75">
              <span>Theo dõi chúng tôi</span>
              <SocialIcons />
            </div>
          </div>

          <div>
            <h2 className={heading}>Lĩnh vực</h2>
            <ul className="space-y-1.5 text-sm text-white/75">
              {lines.map((l) => (
                <li key={l.id}>
                  <Link href={`/services#${l.id}`} className="hover:text-white hover:underline">
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={heading}>Liên hệ</h2>
            <div className="space-y-4 text-sm text-white/75">
              {locations.map((l) => (
                <address key={l.id} className="not-italic leading-relaxed">
                  <p className="font-bold text-white">{l.name}</p>
                  <p>{l.address}</p>
                  <p>
                    {l.phones.join(' - ')} · {l.email}
                  </p>
                  <p>MST: {l.taxCode}</p>
                </address>
              ))}
            </div>
          </div>
        </div>

        <nav aria-label="Điều hướng chân trang" className="mt-12 border-t border-white/15 pt-6">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
            {MAIN_NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-white/85 hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="relative z-10 mt-6 text-sm text-white/60">
          © {new Date().getFullYear()} {SITE.name}. Giờ làm việc: {SITE.hours}.
        </p>
      </div>
      <p aria-hidden className="pointer-events-none mt-4 select-none whitespace-nowrap pt-[0.2em] text-center font-display text-[clamp(64px,19vw,330px)] font-black leading-[0.78] text-white/[0.07]">
        Bến Thành GCC
      </p>
    </footer>
  );
}
