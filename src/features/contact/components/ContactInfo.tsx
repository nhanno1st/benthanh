import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { SITE } from '@/constants/site';

const rows = [
  { Icon: MapPin, label: 'Địa chỉ', value: '160 Hai Bà Trưng, P. Tân Định, TP.HCM' },
  { Icon: Phone, label: 'Hotline', value: `${SITE.hotline} / ${SITE.hotlineAlt}` },
  { Icon: Mail, label: 'Email', value: `${SITE.email} · ${SITE.orderEmail}` },
  { Icon: Clock, label: 'Giờ làm việc', value: 'Thứ Hai – Thứ Bảy, 8:00 – 17:00' },
];

export default function ContactInfo() {
  return (
    <ul className="border-b border-line">
      {rows.map(({ Icon, label, value }) => (
        <li key={label} className="flex items-start gap-4 border-t border-line py-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-gold text-brand-dark">
            <Icon size={18} aria-hidden />
          </span>
          <span className="pt-1.5">
            <span className="block text-sm font-bold">{label}</span>
            <span className="text-ink-muted">{value}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
