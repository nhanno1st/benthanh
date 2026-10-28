import { api } from '@/lib/axios';
import { USE_MOCK, mockResolve } from '@/lib/mock';
import { PRODUCTS, PRODUCT_CATEGORIES } from '@/mocks/products';
import type { Product, ProductCategory } from '@/types/product';

export const productService = {
  async categories(): Promise<ProductCategory[]> {
    if (USE_MOCK) return mockResolve(PRODUCT_CATEGORIES);
    return (await api.get<ProductCategory[]>('/product-categories')).data;
  },

  async list(categoryId?: string): Promise<Product[]> {
    if (USE_MOCK) {
      return mockResolve(
        !categoryId || categoryId === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.categoryId === categoryId),
      );
    }
    return (await api.get<Product[]>('/products', { params: { categoryId } })).data;
  },
};
