import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import type { Officer } from '@/types/company';

function OfficerList({ title, items }: { title: string; items: Officer[] }) {
  return (
    <div>
      <h3 className="mb-3 text-2xl font-bold">{title}</h3>
      <ol className="border-b border-line">
        {items.map((o, i) => (
          <li key={o.name} className="flex items-baseline justify-between gap-4 border-t border-line py-3.5">
            <span>
              {i + 1}. {o.name}
            </span>
            <span className="text-right text-sm font-bold text-brand">{o.role}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Governance({ board, supervisors }: { board: Officer[]; supervisors: Officer[] }) {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading title="Bộ máy tổ chức" />
        <Reveal className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <OfficerList title="Hội đồng quản trị" items={board} />
          <OfficerList title="Ban kiểm soát" items={supervisors} />
        </Reveal>
      </div>
    </section>
  );
}
