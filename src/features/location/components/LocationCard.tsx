import { Mail, MapPin, Phone } from 'lucide-react';
import Photo from '@/components/ui/Photo';
import Reveal from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';
import type { Location } from '@/types/company';

export default function LocationCard({ location: l, reverse = false }: { location: Location; reverse?: boolean }) {
  return (
    <Reveal as="article" className="grid items-center gap-8 border-t border-line py-12 md:grid-cols-2 md:gap-16">
      <div className={cn('relative', reverse && 'md:order-2')}>
        <Photo src={l.image} seed={l.id} alt={`${l.name} – ${l.kind}`} className="aspect-[5/4]" />
        <span className="absolute left-0 top-5 bg-gold px-4 py-1.5 text-sm font-bold text-brand-dark">{l.kind}</span>
      </div>
      <div>
        <h2 className="mb-5 text-[clamp(30px,4vw,56px)] font-black leading-[1.1]">{l.name}</h2>
        <ul className="space-y-3 text-[15px]">
          <li className="flex gap-3">
            <MapPin size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden />
            {l.address}
          </li>
          <li className="flex gap-3">
            <Phone size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden />
            <span>{l.phones.join(' · ')}</span>
          </li>
          <li className="flex gap-3">
            <Mail size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden />
            {l.email}
          </li>
        </ul>
        <p className="mt-4 text-sm text-ink-muted">MST: {l.taxCode}</p>
        <a href={l.mapUrl} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6">
          Xem bản đồ
        </a>
      </div>
    </Reveal>
  );
}
