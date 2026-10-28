import { BedDouble, Building2, Mic, PenTool, Printer, UtensilsCrossed, Warehouse, type LucideIcon } from 'lucide-react';
import type { BusinessLine } from '@/types/company';

const ICONS: Record<BusinessLine['icon'], LucideIcon> = {
  printer: Printer,
  pen: PenTool,
  utensils: UtensilsCrossed,
  mic: Mic,
  building: Building2,
  bed: BedDouble,
  warehouse: Warehouse,
};

export default function BusinessIcon({ name, size = 26, className }: { name: BusinessLine['icon']; size?: number; className?: string }) {
  const Icon = ICONS[name] ?? Building2;
  return <Icon size={size} className={className} aria-hidden />;
}
