import { api } from '@/lib/axios';
import { USE_MOCK, mockResolve } from '@/lib/mock';
import { ANNOUNCEMENTS } from '@/mocks/announcements';
import type { Announcement, AnnouncementCategory } from '@/types/announcement';
import type { ListParams, Paginated } from '@/types/api';
import { paginate } from '@/utils/format';

export interface AnnouncementParams extends ListParams {
  category?: AnnouncementCategory | 'all';
  year?: number;
}

export const announcementService = {
  async list({ category = 'all', year, page = 1, pageSize = 8 }: AnnouncementParams = {}): Promise<Paginated<Announcement>> {
    if (USE_MOCK) {
      const rows = ANNOUNCEMENTS.filter(
        (a) =>
          (category === 'all' || a.category === category) &&
          (!year || new Date(a.publishedAt).getUTCFullYear() === year),
      ).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
      return mockResolve(paginate(rows, page, pageSize));
    }
    return (await api.get<Paginated<Announcement>>('/announcements', { params: { category, year, page, pageSize } })).data;
  },

  async years(): Promise<number[]> {
    if (USE_MOCK) {
      const set = new Set(ANNOUNCEMENTS.map((a) => new Date(a.publishedAt).getUTCFullYear()));
      return mockResolve([...set].sort((a, b) => b - a));
    }
    return (await api.get<number[]>('/announcements/years')).data;
  },
};
