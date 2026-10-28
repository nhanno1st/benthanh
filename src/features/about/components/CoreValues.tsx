import Photo from '@/components/ui/Photo';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import type { CoreValue } from '@/types/company';

export default function CoreValues({ items }: { items: CoreValue[] }) {
  return (
    <section className="section">
      <div>
        <div className="container-page">
          <SectionHeading title="Ba giá trị cốt lõi" />
        </div>
        <ul className="grid md:grid-cols-3">
          {items.map((v, i) => (
            <Reveal as="li" key={v.id} delay={i}>
              <figure className="group dark-zone relative isolate flex min-h-[440px] flex-col justify-end overflow-hidden bg-brand-dark text-white md:min-h-[600px]">
                <div className="absolute inset-0 -z-10">
                  <Photo src={v.image} seed={v.id} alt="" sizes="(min-width: 768px) 33vw, 100vw" className="h-full w-full" />
                </div>
                <div aria-hidden className="scrim absolute inset-0 -z-10" />
                <figcaption className="p-7 md:p-10">
                  <h3 className="text-3xl font-bold leading-[1.25]">{v.title}</h3>
                  <p className="mt-2 text-white/85">{v.lines.join(' ')}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
