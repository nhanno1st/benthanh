import { api } from '@/lib/axios';
import { USE_MOCK, mockResolve } from '@/lib/mock';
import { POSTS } from '@/mocks/posts';
import type { ListParams, Paginated } from '@/types/api';
import type { Post } from '@/types/post';
import { paginate } from '@/utils/format';

export interface PostListParams extends ListParams {
  q?: string;
}

const byDateDesc = (a: Post, b: Post) => b.publishedAt.localeCompare(a.publishedAt);

export const postService = {
  async list({ page = 1, pageSize = 6, q }: PostListParams = {}): Promise<Paginated<Post>> {
    if (USE_MOCK) {
      const keyword = q?.trim().toLowerCase();
      const rows = [...POSTS]
        .filter((p) => !keyword || `${p.title} ${p.excerpt}`.toLowerCase().includes(keyword))
        .sort(byDateDesc);
      return mockResolve(paginate(rows, page, pageSize));
    }
    return (await api.get<Paginated<Post>>('/posts', { params: { page, pageSize, q } })).data;
  },

  async latest(limit = 3): Promise<Post[]> {
    return (await this.list({ page: 1, pageSize: limit })).items;
  },

  async getBySlug(slug: string): Promise<Post | null> {
    if (USE_MOCK) return mockResolve(POSTS.find((p) => p.slug === slug) ?? null);
    try {
      return (await api.get<Post>(`/posts/${slug}`)).data;
    } catch {
      return null;
    }
  },

  async slugs(): Promise<string[]> {
    if (USE_MOCK) return POSTS.map((p) => p.slug);
    return (await api.get<string[]>('/posts/slugs')).data;
  },
};
