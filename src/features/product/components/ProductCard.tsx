import Link from 'next/link';
import Photo from '@/components/ui/Photo';
import type { Product } from '@/types/product';

export default function ProductCard({ product, categoryName }: { product: Product; categoryName?: string }) {
  return (
    <li className="group flex flex-col">
      <Photo src={product.imageUrl} seed={product.id} alt="" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3] w-full" />
      <div className="flex min-w-0 flex-1 flex-col border-b border-line pb-5 pt-4">
        {categoryName && <p className="text-sm font-bold text-brand">{categoryName}</p>}
        <h3 className="mt-0.5 font-display text-2xl font-bold leading-[1.25]">{product.name}</h3>
        <p className="mt-1.5 flex-1 text-[15px] text-ink-muted">{product.description}</p>
        <p className="mt-3 text-sm font-semibold text-ink-muted">
          Đơn vị: {product.unit}.{' '}
          <Link href="/contact" className="text-brand underline underline-offset-2 hover:text-brand-dark">
            Nhận báo giá
          </Link>
        </p>
      </div>
    </li>
  );
}
