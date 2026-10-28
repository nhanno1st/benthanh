'use client';

import { useEffect, useRef, useState } from 'react';
import { EmptyState } from '@/components/ui/StateScreens';
import { cn } from '@/lib/cn';
import type { Product, ProductCategory } from '@/types/product';
import { productService } from '../product.service';
import ProductCard from './ProductCard';

export default function ProductBoard({ categories, initial }: { categories: ProductCategory[]; initial: Product[] }) {
  const [categoryId, setCategoryId] = useState('all');
  const [items, setItems] = useState(initial);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    let cancelled = false;
    productService.list(categoryId).then((res) => !cancelled && setItems(res));
    return () => {
      cancelled = true;
    };
  }, [categoryId]);

  return (
    <div>
      <div role="tablist" aria-label="Nhóm sản phẩm" className="flex gap-6 overflow-x-auto border-b border-line">
        {categories.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={categoryId === c.id}
            onClick={() => setCategoryId(c.id)}
            className={cn(
              '-mb-px shrink-0 border-b-[3px] py-3 font-display text-lg font-bold transition-colors',
              categoryId === c.id ? 'border-gold text-ink' : 'border-transparent text-ink-muted hover:text-ink',
            )}
          >
            {c.name}
          </button>
        ))}
      </div>
      <div className="mt-8">
        {items.length === 0 ? (
          <EmptyState message="Chưa có sản phẩm trong nhóm này." />
        ) : (
          <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => <ProductCard key={p.id} product={p} categoryName={categories.find((c) => c.id === p.categoryId)?.name} />)}
          </ul>
        )}
      </div>
    </div>
  );
}
