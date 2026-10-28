import { api } from '@/lib/axios';
import { USE_MOCK, mockResolve } from '@/lib/mock';
import { LOCATIONS } from '@/mocks/locations';
import type { Location } from '@/types/company';

export const locationService = {
  async list(): Promise<Location[]> {
    if (USE_MOCK) return mockResolve(LOCATIONS);
    return (await api.get<Location[]>('/locations')).data;
  },
};
